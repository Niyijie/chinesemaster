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
        questionsNum: 0,

        errorEff: cc.AudioClip,
        correctEff: cc.AudioClip,
        badEff: cc.AudioClip,
        middleEff: cc.AudioClip,
        wonderfulEff: cc.AudioClip,
        pongEff: cc.AudioClip,
    },

    onLoad() {
        //初始化问题数量为5
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
        //云朵放缩
        this.node.children[0].getChildByName("case").runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.1), cc.scaleTo(1, 1))));

        this.correctNum = 0;
        this.wrongNum = 0;
        //隐藏完成场景
        this.node.children[0].getChildByName("complete").active = false;

        this.indexArr = com.randomNum(0, 48, this.questionsNum);
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

        var box = this.node.children[0].children[1].getChildByName("question");
        box.getComponent(cc.Label).string = "Select   " + com.CmasterJson[this.indexArr[0]]["spell"];

        var arr1 = com.randomNum(0, 2, 3);//打乱按钮
        this.trueNum = arr1[0];   //将正确的按钮存在trueNum中
        var button = [this.button1, this.button2, this.button3];
        for (var i = 0; i <= 2; i++) {
            if (i === 0)
                button[arr1[0]].children[1].getComponent(cc.Label).string = com.CmasterJson[this.indexArr[0]]["chinese"];
            else
                button[arr1[i]].children[1].getComponent(cc.Label).string = com.CmasterJson[arr[i - 1]]["chinese"];
        }

        //球动起来
        var ball = this.node.children[0].getChildByName("basketball");
        ball.active = true;
        ball.stopAllActions();
        ball.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, cc.p(0, 100)), cc.moveBy(0.5, cc.p(0, -100)))));
        ball.scale = 1;
        ball.opacity = 255;
        ball.setPosition(0, -287);
    },

    Fbutton1: function () {
        //禁用按钮
        this.buttonOff();

        this.ballRun(this.button1);
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

        this.ballRun(this.button2);
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

        this.ballRun(this.button3);
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
                    middle.play("middle01");
                    front.play("a");
                    //播放胜利音效
                    cc.audioEngine.play(this.wonderfulEff, false, 1);
                }
                else if (rate >= 0.6) {
                    back.play("a1");
                    middle.play("middle02");
                    front.play("b");
                    //播放普通音效
                    cc.audioEngine.play(this.middleEff, false, 1);
                }
                else {
                    back.play("middle01");
                    middle.play("middle03");
                    front.play("c");
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

        //播放答错音效
        cc.audioEngine.play(this.errorEff, false, 1);

        this.ballOut(button);

        this.scheduleOnce(function () {
            if (this.indexArr.length != 0)
                this.init();
        }, 0.9);
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
        //球下落运动
        this.scheduleOnce(function () {
            var act = cc.moveBy(0.2, 0, -400);
            var ball = this.node.children[0].getChildByName("basketball");
            ball.runAction(act);
            //球进后消失
            this.scheduleOnce(function () {
                ball.active = false;
            }, 0.2);

        }, 0.5);
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

    ballRun(button) {
        var ball = this.node.children[0].getChildByName("basketball");
        //设置运动曲线
        var x = button.x - this.node.children[0].getChildByName("basketball").x;
        var y = button.y - (-287);
        var act1 = cc.spawn(cc.moveBy(0.5, cc.p(x, 0)), cc.moveBy(0.5, cc.p(0, y)).easing(cc.easeCubicActionOut()), cc.scaleTo(0.5, 0.63));
        ball.runAction(act1);
    },
    ballOut(button) {
        var ball = this.node.children[0].getChildByName("basketball");
        if (button.name === "backboard1") {
            this.scheduleOnce(function () {
                var action1 = cc.moveBy(0.25, cc.p(0, 200)).easing(cc.easeCubicActionOut());
                var action2 = cc.moveBy(0.25, cc.p(-320, 0));
                var action3 = cc.moveBy(0.5, cc.p(0, -800)).easing(cc.easeCircleActionIn());
                var action4 = cc.moveBy(0.5, cc.p(-960, 0));
                var action = cc.sequence(cc.spawn(action1, action2), cc.spawn(action3, action4));
                ball.runAction(action);
            }, 0.5);
        }
        else {
            this.scheduleOnce(function () {
                var action1 = cc.moveBy(0.25, cc.p(0, 200)).easing(cc.easeCubicActionOut());
                var action2 = cc.moveBy(0.25, cc.p(320, 0));
                var action3 = cc.moveBy(0.5, cc.p(0, -800)).easing(cc.easeCircleActionIn());
                var action4 = cc.moveBy(0.5, cc.p(960, 0));
                var action = cc.sequence(cc.spawn(action1, action2), cc.spawn(action3, action4));
                ball.runAction(action);
            }, 0.5);
        }
    }
    ,

    //显示答对了框 并初始化
    displayCorrectAct(button) {
        var correctBox = this.node.children[0].getChildByName("correct");
        this.scheduleOnce(function () {
            correctBox.setPosition(button.x, button.y);
            correctBox.opacity = 255;
            correctBox.getComponent(cc.Animation).play();
        }, 0.4);

        this.scheduleOnce(function () {
            //  ball.setPosition(0, -342);
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
        cc.director.loadScene("start2");
    },
    onDestroy() {
        //停止音乐
        cc.audioEngine.pauseAll();
    }
});