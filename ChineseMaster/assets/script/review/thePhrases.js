var com = require("Common");
cc.Class({
    extends: cc.Component,

    properties: {
        button1: cc.Node,
        button2: cc.Node,
        button3: cc.Node,
        button4: cc.Node,
        check: cc.Node,
        wrongBox: cc.Node,
        correctBox: cc.Node,
        nextFlag: false,
        trueNum: null,
        indexArr: [],
        wrongAnswer: [],
        correctEff: cc.AudioClip,
        errorEff: cc.AudioClip,
        finishEff: cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        //[改]  如果没有需要复习的单词则跳到指定页面  以后放到loadScene中
        if (com.reviewList.length === 0)
            cc.director.loadScene("review");

        this.indexArr = com.randomNum(0, com.reviewList.length - 1, com.reviewList.length);
        this.indexArr.sort(function () {
            return 0.5 - Math.random();
        });

        this.node.children[0].getChildByName("finish").active = false;

    },

    start() {
        this.init();
    },

    init: function () {
        //将两个box隐藏
        this.correctBox.active = false;
        this.wrongBox.active = false;
        //初始化起始条件
        this.openButtons();
        this.check.getComponent(cc.Button).interactable = false;

        this.nextFlag = false;

        this.trueNum = [];
        this.trueNum.push(this.indexArr[0]);

        var arr;
        var flag = false;
        while (!flag) {
            arr = com.randomNum(0, 48, 3);  //从总的单词中随机选三个作为错误选项
            for (var i = 0; i <= 2; i++) {
                console.log(arr[i]);
                if (com.reviewList[this.trueNum[0]]["chinese"] === com.CmasterJson[arr[i]]["chinese"]) {
                    flag = false;
                    break;
                }
                if (i === 2)  //如果选择的单词不和错误选项重复则跳出循环
                {
                    flag = true;
                }
            }
        }

        var phrase = com.reviewList[this.trueNum[0]]["terms"];
        var word = com.reviewList[this.trueNum[0]]["chinese"];
        //讲要背的字显示为 ？ 
        if (phrase[0] == word) {
            this.node.children[0].getChildByName("word1").children[0].getComponent(cc.Label).string = "?";
            this.node.children[0].getChildByName("word2").children[0].getComponent(cc.Label).string = phrase[1];
        }
        else {
            this.node.children[0].getChildByName("word1").children[0].getComponent(cc.Label).string = phrase[0];
            this.node.children[0].getChildByName("word2").children[0].getComponent(cc.Label).string = "?";
        }

        var button = [this.button1, this.button2, this.button3, this.button4];
        var arr1 = com.randomNum(0, 3, 4);//打乱按钮
        this.trueNum.push(arr1[0]);       //保存正确的按钮
        for (var i = 0; i <= 3; i++) {
            if (i === 0)
                button[arr1[0]].getChildByName("word").getComponent(cc.Label).string = com.reviewList[this.trueNum[0]]["chinese"];
            else {
                button[arr1[i]].getChildByName("word").getComponent(cc.Label).string = com.CmasterJson[arr[i - 1]]["chinese"];
            }

            com.ButtonColor(button[arr1[i]], "correct");
            button[arr1[i]].getChildByName("correct").active = false;
            button[arr1[i]].getChildByName("wrong").active = false;
        }
    },

    Fbutton1: function () {
        if (this.nextFlag === true)
            return;
        this.openButtons();
        this.button1.getComponent(cc.Button).interactable = false;
    },

    Fbutton2: function () {
        if (this.nextFlag === true)
            return;
        this.openButtons();
        this.button2.getComponent(cc.Button).interactable = false;
    },

    Fbutton3: function () {
        if (this.nextFlag === true)
            return;
        this.openButtons();
        this.button3.getComponent(cc.Button).interactable = false;
    },

    Fbutton4: function () {
        if (this.nextFlag === true)
            return;
        this.openButtons();
        this.button4.getComponent(cc.Button).interactable = false;
    },

    Check: function () {
        this.check.getComponent(cc.Button).interactable = false;

        //[改]  如果选择错误则改为红色
        var button = [this.button1, this.button2, this.button3, this.button4];
        for (var i = 0; i < 4; i++) {
            if (button[i].getComponent(cc.Button).interactable === false) {
                if (this.trueNum[1] === i) {
                    com.ButtonColor(button[i], "correct");
                    button[i].getComponent(cc.Button).interactable = false;
                    button[i].getChildByName("correct").active = true;
                    this.correctBox.active = true;
                    var explain = '"' + com.reviewList[this.trueNum[0]]["chinese"] + '"' + " = " +
                        com.reviewList[this.trueNum[0]]["word"] + " " + com.reviewList[this.trueNum[0]]["spell"];
                    this.correctBox.getChildByName("explain").getComponent(cc.Label).string = explain;
                    cc.audioEngine.play(this.correctEff, false, 1);
                    //如果正确则在索引数组中除去
                    this.indexArr.splice(0, 1);
                }
                else {
                    com.ButtonColor(button[i], "wrong");
                    button[i].getComponent(cc.Button).interactable = false;
                    button[i].getChildByName("wrong").active = true;
                    this.wrongBox.active = true;
                    var explain = '"' + com.reviewList[this.trueNum[0]]["chinese"] + '"' + " = " +
                        com.reviewList[this.trueNum[0]]["word"] + " " + com.reviewList[this.trueNum[0]]["spell"];
                    this.wrongBox.getChildByName("explain").getComponent(cc.Label).string = explain;
                    cc.audioEngine.play(this.errorEff, false, 1);

                    var str = com.reviewList[this.trueNum[0]]["word"];
                    this.wrongAnswer.push(str);
                }
            }
        }
        this.nextFlag = true;
    },

    openButtons: function () {
        this.button1.getComponent(cc.Button).interactable = true;
        this.button2.getComponent(cc.Button).interactable = true;
        this.button3.getComponent(cc.Button).interactable = true;
        this.button4.getComponent(cc.Button).interactable = true;
        // //解除check按钮的禁用状态
        this.check.getComponent(cc.Button).interactable = true;
    },

    nextWord: function () {
        //【改】如果复习完毕则跳转到指定页面
        if (this.indexArr.length === 0) {
            var wronglist = com.method(this.wrongAnswer);
            console.log(wronglist);
            var wrong = wronglist.length;

            var finish = this.node.children[0].getChildByName("finish");
            finish.getChildByName("right").getComponent(cc.Label).string = "" + (com.reviewList.length - wrong);
            finish.getChildByName("wrong").getComponent(cc.Label).string = "" + wrong;
            finish.getChildByName("accuracy").getComponent(cc.Label).string = "" + (Math.floor((com.reviewList.length - wrong) / com.reviewList.length * 100)) + "%";
            finish.active = true;
            cc.audioEngine.play(this.finishEff, false, 1);
        }
        else {

            this.indexArr.sort(function () {
                return 0.5 - Math.random();
            });
            this.init();
        }
    },
});
