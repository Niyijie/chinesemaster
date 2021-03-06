var com = require('Common');
cc.Class({
    extends: cc.Component,

    properties: {
        button1: cc.Node,
        button2: cc.Node,
        button3: cc.Node,
        indexArr: null,
        trueNum: null,
        correctNum: 0,
        wrongNum: 0,
        questionsNum: 0,

        errorEff: cc.AudioClip,
        correctEff: cc.AudioClip,
        badEff: cc.AudioClip,
        middleEff: cc.AudioClip,
        wonderfulEff: cc.AudioClip,
        pongEff: cc.AudioClip,
    },

    onLoad() {
        this.questionsNum = 5;
        cc.loader.loadRes("Cmaster", cc.RawAsset, function (err, data) {
            if (err) {
                console.log("open Cmaster.json error!");
                return;
            }
            else {
                com.CmasterJson = data;
            }
        });
        this.correctNum = 0;
        this.wrongNum = 0;
        //隐藏完成场景
        this.node.children[0].getChildByName("complete").active = false;

        this.indexArr = com.randomNum(0, 48, this.questionsNum);

        //隐藏菜单栏
        var setting = this.node.children[0].getChildByName("setting");
        setting.active = false;

        this.scheduleOnce(function () {
            this.init();
        }, 0.1);
    },
    init: function () {
        //更改count
        this.node.children[0].getChildByName("count").getChildByName("count").getComponent(cc.Label).string = this.indexArr.length + "/" + this.questionsNum;

        var arr;
        var flag = false;
        while (!flag) {
            arr = com.randomNum(0, 48, 2);  //从总的单词中随机选两个作为错误选项
            for (var i = 0; i <= 2; i++) {
                //如果有重复则继续挑选
                if (this.indexArr[0] === arr[i]) {
                    flag = false;
                    break;
                }
                if (i === 2)  //如果选择的单词不和错误选项重复则跳出循环
                {
                    flag = true;
                }
            }
        }

        var box = this.node.children[0].children[4].getChildByName("question");
        box.getComponent(cc.Label).string = "Select   " + '"' + com.CmasterJson[this.indexArr[0]]["trans1"] + '"';

        var arr1 = com.randomNum(0, 2, 3);//打乱按钮
        this.trueNum = arr1[0];   //将正确的按钮存在trueNum中
        var button = [this.button1, this.button2, this.button3];
        for (var i = 0; i <= 2; i++) {
            if (i === 0)
                button[arr1[0]].getChildByName("label").getComponent(cc.Label).string = com.CmasterJson[this.indexArr[0]]["terms"];
            else
                button[arr1[i]].getChildByName("label").getComponent(cc.Label).string = com.CmasterJson[arr[i - 1]]["terms"];
        }
    },

    Fbutton1: function () {
        //禁用按钮
        this.buttonOff();
        if ((this.trueNum + 1) === 1) {
            this.correctAnswer(this.button1);
        }
        else {
            this.wrongAnswer(this.button1);
        }
        this.scheduleOnce(function () {
            //播放射击音效
            cc.audioEngine.play(this.pongEff, false, 2);
        }, 0.2);

        this.checkEnd();

    },

    Fbutton2: function () {
        //禁用按钮
        this.buttonOff();
        if ((this.trueNum + 1) === 2) {
            this.correctAnswer(this.button2);
        }
        else {
            this.wrongAnswer(this.button2);
        }
        this.scheduleOnce(function () {
            //播放射击音效
            cc.audioEngine.play(this.pongEff, false, 2);
        }, 0.2);

        this.checkEnd();
    },

    Fbutton3: function () {
        //禁用按钮
        this.buttonOff();
        if ((this.trueNum + 1) === 3) {
            this.correctAnswer(this.button3);
        }
        else {
            this.wrongAnswer(this.button3);
        }
        this.scheduleOnce(function () {
            //播放射击音效
            cc.audioEngine.play(this.pongEff, false, 2);
        }, 0.2);

        this.checkEnd();
    },
    buttonOff: function () {
        this.button1.getComponent(cc.Button).interactable = false;
        this.button2.getComponent(cc.Button).interactable = false;
        this.button3.getComponent(cc.Button).interactable = false;
    },
    buttonsOn() {
        let action1 = cc.spawn(cc.fadeIn(0.001), cc.moveTo(0.001, cc.v2(-435.5, -232)), cc.scaleTo(0.001, 1));
        let action2 = cc.spawn(cc.fadeIn(0.001), cc.moveTo(0.001, cc.v2(0, -228.5)), cc.scaleTo(0.001, 1));
        let action3 = cc.spawn(cc.fadeIn(0.001), cc.moveTo(0.001, cc.v2(440.5, -238)), cc.scaleTo(0.001, 1));
        this.button1.runAction(action1);
        this.button2.runAction(action2);
        this.button3.runAction(action3);
        this.button1.getComponent(cc.Button).interactable = true;
        this.button2.getComponent(cc.Button).interactable = true;
        this.button3.getComponent(cc.Button).interactable = true;
    },
    checkEnd: function () {
        this.scheduleOnce(function () {
            if (this.indexArr.length === 0) {
                this.node.children[0].getChildByName("complete").active = true;
                var back = this.node.children[0].getChildByName("complete").children[1].getComponent(cc.Animation);
                var middle = this.node.children[0].getChildByName("complete").children[2].getComponent(cc.Animation);
                var front = this.node.children[0].getChildByName("complete").children[3].getComponent(cc.Animation);

                var rate = (this.correctNum) / (this.correctNum + this.wrongNum);
                if (rate >= 0.8) {
                    back.play("3a1");
                    middle.play("3middle01");
                    front.play("3a2");
                    //播放胜利音效
                    cc.audioEngine.play(this.wonderfulEff, false, 1);
                }
                else if (rate >= 0.6) {
                    back.play("3a1");
                    middle.play("3middle02");
                    front.play("3b");
                    //播放普通音效
                    cc.audioEngine.play(this.middleEff, false, 1);
                }
                else {
                    back.play("3c1");
                    middle.play("3middle03");
                    front.play("3c");
                    //播放失败音效
                    cc.audioEngine.play(this.badEff, false, 1);
                }
            }
            this.scheduleOnce(function () {
                //开启按钮
                this.buttonsOn();
            }, 0.5);
        }, 1);
    },
    wrongAnswer: function (button) {
        this.wrongNum += 1;

        let action = cc.sequence(cc.moveBy(0.1, cc.p(20, 0)), cc.moveBy(0.1, cc.p(-40, 0)), cc.moveBy(0.1, cc.p(20, 0)));
        button.runAction(action);

        //播放答错音效
        cc.audioEngine.play(this.errorEff, false, 1);

        this.scheduleOnce(function () {
            if (this.indexArr.length != 0)
                this.init();
        }, 0.9);
        this.indexArr.splice(0, 1);
    },
    correctAnswer(button) {

        this.scheduleOnce(function () {
            if (this.indexArr.length != 0)
                this.init();
        }, 1.5);

        let action1 = cc.sequence(cc.delayTime(0.3), cc.fadeOut(0.3));
        let action2 = cc.moveTo(0.6, cc.p(0, -20));
        let action3 = cc.scaleTo(0.6, 0);
        let action = cc.spawn(action1, action2, action3);
        button.runAction(action);

        //显示答对音效
        cc.audioEngine.play(this.correctEff, false, 1);
        //正确次数+1
        this.correctNum += 1;
        //除去该单词
        this.indexArr.splice(0, 1);
    },
    menu: function () {
        this.node.children[0].getChildByName("setting").active = true;
    },

    //重新开始
    reStart: function () {
        this.correctNum = 0;
        this.wrongNum = 0;
        this.indexArr = com.randomNum(0, 48, 5);
        this.node.children[0].getChildByName("complete").active = false;
        this.node.children[0].getChildByName("setting").active = false;
        this.init();
    },
    //继续游戏
    resume: function () {
        this.node.children[0].getChildByName("setting").active = false;
    },
    //返回首页
    return: function () {
        cc.director.loadScene("start3");
    },
    onDestroy() {
        //停止音乐
        cc.audioEngine.pauseAll();
    }
});
