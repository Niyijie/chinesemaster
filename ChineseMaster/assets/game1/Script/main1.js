var com = require("Common");
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
        questionsNum:0,

        badEff: cc.AudioClip,
        correctEff: cc.AudioClip,
        errorEff: cc.AudioClip,
        goodEff: cc.AudioClip,
        middleEff: cc.AudioClip,
        shootEff: cc.AudioClip,
        timeEff: cc.AudioClip,
        turnEff: cc.AudioClip,
        wonderfulEff: cc.AudioClip,
    },

    onLoad() {
        this.questionsNum = 5;  // 默认问题5个
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

        this.indexArr = com.randomNum(0, 48, 5);
        //隐藏答对情景框
        var correctBox = this.node.children[0].getChildByName("correct");
        correctBox.opacity = 0;
        //隐藏菜单栏
        var setting = this.node.children[0].getChildByName("setting");
        setting.active = false;

        this.scheduleOnce(function () {
            this.init();
        }, 0.1);
    },

    start() {
    },

    init: function () {
        //更改count
        this.node.children[0].getChildByName("count").children[0].getComponent(cc.Label).string
            = this.indexArr.length + "/" + this.questionsNum;

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

        var box = this.node.children[0].children[0].getChildByName("question");
        box.getComponent(cc.Label).string = "Select " + '" ' + com.CmasterJson[this.indexArr[0]]["chinese"] + ' "';

        var arr1 = com.randomNum(0, 2, 3);//打乱按钮
        this.trueNum = arr1[0];   //将正确的按钮存在trueNum中
        console.log(this.trueNum);
        var button = [this.button1, this.button2, this.button3];
        for (var i = 0; i <= 2; i++) {
            if (i === 0)
                button[arr1[0]].children[0].getComponent(cc.Label).string = com.CmasterJson[this.indexArr[0]]["word"];
            else
                button[arr1[i]].children[0].getComponent(cc.Label).string = com.CmasterJson[arr[i - 1]]["word"];
        }
    },

    Fbutton1: function () {
        //禁用按钮
        this.buttonOff();

        this.node.children[0].getChildByName("pointer").rotation = -45;
        if ((this.trueNum + 1) === 1) {
            this.correctAnswer(this.button1);
        }
        else {
            this.wrongAnswer(this.button1);
        }
        this.checkEnd();
    },

    Fbutton2: function () {
        //禁用按钮
        this.buttonOff();
        this.node.children[0].getChildByName("pointer").rotation = 0;
        if ((this.trueNum + 1) === 2) {
            this.correctAnswer(this.button2);
        }
        else {
            this.wrongAnswer(this.button2);
        }
        this.checkEnd();
    },

    Fbutton3: function () {
        //禁用按钮
        this.buttonOff();

        this.node.children[0].getChildByName("pointer").rotation = 45;

        if ((this.trueNum + 1) === 3) {
            this.correctAnswer(this.button3);
        }
        else {
            this.wrongAnswer(this.button3);
        }
        this.checkEnd();
    },

    menu: function () {
        this.node.children[0].getChildByName("setting").active = true;
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
                    back.play("a1");
                    middle.play("mermaidG");
                    front.play("a");
                    //播放胜利音效
                    cc.audioEngine.play(this.wonderfulEff, false, 1);
                }
                else if (rate >= 0.6) {
                    back.play("a1");
                    middle.play("mermaidM");
                    front.play("b");
                    //播放普通音效
                    cc.audioEngine.play(this.middleEff, false, 1);
                }
                else {
                    back.play("c1");
                    middle.play("mermaidB");
                    front.play("c");
                    //播放失败音效
                    cc.audioEngine.play(this.badEff, false, 1);
                }
            }
            //开启按钮
            this.buttonsOn();
        }, 1);

    },

    wrongAnswer: function (button) {
        this.wrongNum += 1;

        var act1 = cc.moveBy(0.1, -15, 0);
        var act2 = cc.moveBy(0.2, 30, 0);
        var act3 = cc.moveBy(0.1, -15, 0);
        var act = cc.sequence(act1, act2, act3);
        button.runAction(act);
        //播放答错音效
        cc.audioEngine.play(this.errorEff, false, 1);

        this.scheduleOnce(function () {
            if (this.indexArr.length != 0)
                this.init();
        }, 0.5);
        this.indexArr.splice(0, 1);
    },

    correctAnswer(button) {
        //显示答对框
        this.displayCorrectAct(button);
        //显示答对音效
        cc.audioEngine.play(this.correctEff, false, 1);
        //正确次数+1
        this.correctNum += 1;
        //除去该单词
        this.indexArr.splice(0, 1);
    },

    buttonOff: function () {
        this.button1.getComponent(cc.Button).interactable = false;
        this.button2.getComponent(cc.Button).interactable = false;
        this.button3.getComponent(cc.Button).interactable = false;
    },
    buttonsOn() {
        this.button1.getComponent(cc.Button).interactable = true;
        this.button2.getComponent(cc.Button).interactable = true;
        this.button3.getComponent(cc.Button).interactable = true;
    },

    //显示答对了框 并初始化
    displayCorrectAct(button) {
        //播放射击音效
        cc.audioEngine.play(this.shootEff, false, 1);
        var ball = this.node.children[0].getChildByName("ball");
        var act = cc.moveTo(0.5, button.x, button.y);
        ball.runAction(act);

        var correctBox = this.node.children[0].getChildByName("correct");
        this.scheduleOnce(function () {
            correctBox.setPosition(button.x, button.y);
            correctBox.opacity = 255;
            correctBox.getComponent(cc.Animation).play();
        }, 0.4);

        this.scheduleOnce(function () {
            ball.setPosition(0, -342);
            correctBox.opacity = 0;

            if (this.indexArr.length != 0)
                this.init();
        }, 1.5);
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
        cc.director.loadScene("start1");
    },
    onDestroy() {
    }
});