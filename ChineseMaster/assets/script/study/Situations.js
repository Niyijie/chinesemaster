var com = require('Common');

cc.Class({
    extends: cc.Component,

    properties: {
        button1: cc.Node,
        button2: cc.Node,
        button3: cc.Node,
        button4: cc.Node,
        nextButton: cc.Node,
        nextFlag: false,
        trueNum: null,
        indexArr: [],
        listLength: 5,
        wrongAnswer: [],
        correctEff: cc.AudioClip,
        errorEff: cc.AudioClip,
        finishEff: cc.AudioClip,
    },


    onLoad() {
        this.indexArr = com.randomNum(0, 9, this.listLength);
        this.node.children[0].getChildByName("finish").active = false;

    },
    start() {
        this.init();
    },

    //初始化界面
    init: function () {
        this.openButtons();
        this.nextFlag = false;
        var button = [this.button1, this.button2, this.button3, this.button4];
        this.nextButton.active = false;//禁用next按钮

        //保存情景对话场景
        var situations = ["dinner", "asking", "shopping", "traverlling"];
        var titles = ["Dinner Party", "Asking The Way", "Shopping", "Traverlling"];
        this.node.children[0].children[0].getChildByName("Label").getComponent(cc.Label).string
             = titles[com.data-1];
        var situation = situations[com.data - 1];

        this.trueNum = [];
        this.trueNum.push(this.indexArr[0]);
        //随机选出需要背的字 并显示，trueNum[1]代表正确的按钮
        var arr;
        var flag = false;
        while (!flag) {
            arr = com.randomNum(0, 9, 3);  //从总的句子中随机选三个作为错误选项
            for (var i = 0; i <= 2; i++) {
                if (com.SituationsJson[situation][this.trueNum[0]]["sentence"] === com.SituationsJson[situation][arr[i]]["sentence"]) {
                    flag = false;
                    break;
                }
                if (i === 2)  //如果选择的单词不和错误选项重复则跳出循环
                {
                    flag = true;
                }
            }
        }

        for (var i = 0; i < 4; i++) {
            button[i].getChildByName("correct").active = false;
            button[i].getChildByName("wrong").active = false;
        }

        var arr1 = com.randomNum(0, 3, 4);//打乱按钮
        this.trueNum[1] = arr1[0];
        for (var i = 0; i < 4; i++) {
            if (i === 0) {
                button[arr1[0]].getChildByName("label").getComponent(cc.Label).string
                    = com.SituationsJson[situation][this.trueNum[0]]["answer"];
            }
            else {
                button[arr1[i]].getChildByName("label").getComponent(cc.Label).string
                    = com.SituationsJson[situation][arr[i - 1]]["answer"];
            }
        }
        this.node.children[0].children[1].getChildByName("question").getComponent(cc.Label).string
            = com.SituationsJson[situation][this.trueNum[0]]["sentence"];
    },

    //开始点击
    openButtons: function () {
        this.button1.getComponent(cc.Button).interactable = true;
        this.button2.getComponent(cc.Button).interactable = true;
        this.button3.getComponent(cc.Button).interactable = true;
        this.button4.getComponent(cc.Button).interactable = true;
    },

    Fbutton1: function () {
        if (this.nextFlag === true) return;
        this.button1.getComponent(cc.Button).interactable = false;
        this.nextFlag = true;
        this.ButtonOn();

    },
    Fbutton2: function () {
        if (this.nextFlag === true) return;
        this.button2.getComponent(cc.Button).interactable = false;
        this.nextFlag = true;
        this.ButtonOn()
    },

    Fbutton3: function () {
        if (this.nextFlag === true) return;
        this.button3.getComponent(cc.Button).interactable = false;
        this.nextFlag = true;
        this.ButtonOn();
    },

    Fbutton4: function () {
        if (this.nextFlag === true) return;
        this.button4.getComponent(cc.Button).interactable = false;
        this.nextFlag = true;
        this.ButtonOn();
    },
    //进入下一个界面（再初始化）
    nextWord: function () {
        if (this.indexArr.length > 0) {
            this.indexArr.sort(function () {
                return 0.5 - Math.random();
            });

            this.init();
        } else {
            var wronglist = com.method(this.wrongAnswer);
            console.log(wronglist);
            var wrong = wronglist.length;

            var finish = this.node.children[0].getChildByName("finish");
            finish.getChildByName("right").getComponent(cc.Label).string = "" + (this.listLength - wrong);
            finish.getChildByName("wrong").getComponent(cc.Label).string = "" + wrong;
            finish.getChildByName("accuracy").getComponent(cc.Label).string = "" + (Math.floor((this.listLength - wrong)/this.listLength*100)) + "%";
            finish.active = true;
            cc.audioEngine.play(this.finishEff, false, 1);

        }
    },

    ButtonOn: function () {
        var button = [this.button1, this.button2, this.button3, this.button4];
        for (var i = 0; i < 4; i++) {
            if (button[i].getComponent(cc.Button).interactable === false) {
                //判断是否选择正确
                if (i === this.trueNum[1]) {
                    button[i].getChildByName("correct").active = true;
                    com.ButtonColor(button[i], "correct");
                    button[i].getComponent(cc.Button).interactable = false;

                    cc.audioEngine.play(this.correctEff, false, 1);

                    //如果正确则在索引数组中除去
                    this.indexArr.splice(0, 1);
                } else {
                    button[i].getChildByName("wrong").active = true;
                    com.ButtonColor(button[i], "wrong");
                    button[i].getComponent(cc.Button).interactable = false;

                    cc.audioEngine.play(this.errorEff, false, 1);
                    //保持错误答案信息
                    var situations = ["dinner", "asking", "shopping", "traverlling"];

                    var str = com.SituationsJson[situations[com.data-1]][this.trueNum[0]]["sentence"];
                    this.wrongAnswer.push(str);

                }
                this.nextButton.active = true;
            }
        }
    }
});