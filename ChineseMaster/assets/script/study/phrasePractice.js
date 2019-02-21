var com = require('Common');
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
        star: cc.Node,
        nextFlag: false,
        ifDelete: false,  //判断是否将其从列表中删除
        trueNum: null,
        wrongAnswer: [],
        ifCollection: false, //false表示未被收藏 true表示已经被收藏
        correctEff: cc.AudioClip,
        errorEff: cc.AudioClip,
        finishEff: cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        if (com.selectList.length === 0)
            cc.director.loadScene("study");

        this.node.children[0].getChildByName("finish").active = false;
    },

    start() {
        this.init();
    },

    //加载atlas资源
    setSpriteTexture: function (sprite, path) {
        var spriteComponent = sprite.getComponent(cc.Sprite);
        var frame = com.atlasImg.getSpriteFrame(path);
        spriteComponent.spriteFrame = frame;
    },

    //初始化界面
    init: function () {
        this.ifDelete = false;
        //将两个box隐藏
        this.correctBox.active = false;
        this.wrongBox.active = false;
        //初始化起始条件
        this.openButtons();
        this.check.getComponent(cc.Button).interactable = false;

        this.nextFlag === false;

        //选出要背的单词的索引
        var index = com.randomNum(0, com.selectList.length - 1, 1);
        this.trueNum = [];
        this.trueNum.push(index);

        var s = JSON.stringify(com.selectList);
        console.log("length" + com.selectList.length);
        console.log("trueNum[0]" + this.trueNum[0]);
        console.log(s);
        for(var i=0;i<com.selectList.length;i++)
        {
            console.log(com.selectList[i]["word"]);
        }

        //检查是否点亮星星
        this.star.color = cc.color(255, 255, 255, 255);
        this.ifCollection = false;
        var name = com.selectList[this.trueNum[0]]["word"];
        for (var i = 0; i < com.collectList.length; i++) {
            if (com.collectList[i]["word"] === name) {
                this.star.color = cc.color(240, 234, 96, 255);
                this.ifCollection = true;
                break;
            }
        }
        //初始化四个按钮
        var arr;
        var flag = false;
        while (!flag) {
            arr = com.randomNum(0, 48, 3);  //从总的单词中随机选三个作为错误选项
            for (var i = 0; i <= 2; i++) {
                console.log(arr[i]);
                if (com.selectList[this.trueNum[0]]["chinese"] === com.CmasterJson[arr[i]]["chinese"]) {
                    flag = false;
                    break;
                }
                if (i === 2)  //如果选择的单词不和错误选项重复则跳出循环
                {
                    flag = true;
                }
            }
        }

        var arr1 = com.randomNum(0, 3, 4);   //将按钮顺序打乱

        var button = [this.button1, this.button2, this.button3, this.button4];
        this.node.children[0].getChildByName("selectLabel").getComponent(cc.Label).string =
            "Select  " + '" ' + com.selectList[this.trueNum[0]]["chinese"] + ' "';
        //初始化按钮
        for (var i = 0; i <= 3; i++) {
            if (i === 0) {
                this.setSpriteTexture(button[arr1[i]], com.selectList[this.trueNum[0]]["res"]);
                this.trueNum.push(arr1[i]);  //arr[1]代表正确的按钮
            }
            else
                this.setSpriteTexture(button[arr1[i]], com.CmasterJson[arr[i - 1]]["res"]);
            //将按钮禁用时的颜色默认置为蓝色
            com.ButtonColor(button[arr1[i]], "correct");
            button[arr1[i]].getChildByName("correct").active = false;
            button[arr1[i]].getChildByName("wrong").active = false;
        }
    },
    //将所有按钮的interactable属性都值为ture 减少代码量
    openButtons: function () {
        this.button1.getComponent(cc.Button).interactable = true;
        this.button2.getComponent(cc.Button).interactable = true;
        this.button3.getComponent(cc.Button).interactable = true;
        this.button4.getComponent(cc.Button).interactable = true;
        // //解除check按钮的禁用状态
        this.check.getComponent(cc.Button).interactable = true;
    },

    Fbutton1: function () {
        if (this.nextFlag === true) return;
        this.openButtons();
        //将按钮禁用时的颜色默认置为蓝色
        this.button1.getComponent(cc.Button).interactable = false;

    },

    Fbutton2: function () {
        if (this.nextFlag === true) return;
        this.openButtons();
        this.button2.getComponent(cc.Button).interactable = false;
    },

    Fbutton3: function () {
        if (this.nextFlag === true) return;
        this.openButtons();
        this.button3.getComponent(cc.Button).interactable = false;
    },

    Fbutton4: function () {
        if (this.nextFlag === true) return;
        this.openButtons();
        this.button4.getComponent(cc.Button).interactable = false;
    },

    Check: function () {
        this.check.getComponent(cc.Button).interactable = false; //将check按钮禁用
        this.nextFlag === true;
        //[改]  如果选择错误则改为红色
        var button = [this.button1, this.button2, this.button3, this.button4];
        for (var i = 0; i < 4; i++) {
            if (button[i].getComponent(cc.Button).interactable === false) {
                if (this.trueNum[1] === i) {
                    com.ButtonColor(button[i], "correct");
                    button[i].getComponent(cc.Button).interactable = false;
                    button[i].getChildByName("correct").active = true;
                    this.correctBox.active = true;
                    var expain = '"' + com.selectList[this.trueNum[0]]["chinese"] + '"' + " = " +
                        com.selectList[this.trueNum[0]]["word"] + " " + com.selectList[this.trueNum[0]]["spell"];
                    this.correctBox.getChildByName("expain").getComponent(cc.Label).string = expain;

                    //如果是正确答案 则将其加入到复习列表
                    com.reviewList.push(com.selectList[this.trueNum[0]]);
                    //正确音效
                    cc.audioEngine.play(this.correctEff, false, 1);

                    this.ifDelete = true;
                }
                else {
                    com.ButtonColor(button[i], "wrong");
                    button[i].getComponent(cc.Button).interactable = false;
                    button[i].getChildByName("wrong").active = true;
                    this.wrongBox.active = true;
                    var expain = '"' + com.selectList[this.trueNum[0]]["chinese"] + '"' + " = " +
                        com.selectList[this.trueNum[0]]["word"] + " " + com.selectList[this.trueNum[0]]["spell"];
                    this.wrongBox.getChildByName("expain").getComponent(cc.Label).string = expain;

                    //错误音效
                    cc.audioEngine.play(this.errorEff, false, 1);
                    var str = com.selectList[this.trueNum[0]]["word"];
                    this.wrongAnswer.push(str);
                }
            }
        }
    },

    nextWord: function () {
        //如果是正确答案，则在索引数组中除去这个索引
        if (this.ifDelete === true) {
            com.reviewNum++;
            com.wordList.push(com.selectList[this.trueNum[0]]);
            com.selectList.splice(this.trueNum[0], 1);
        }
        if (com.selectList.length === 0)  //【改】全部背完跳转到结束页面
        {
            var wronglist = com.method(this.wrongAnswer);
            var wrong = wronglist.length;

            var finish = this.node.children[0].getChildByName("finish");
            finish.getChildByName("right").getComponent(cc.Label).string = "" + (com.reciteNum - wrong);
            finish.getChildByName("wrong").getComponent(cc.Label).string = "" + wrong;
            finish.getChildByName("accuracy").getComponent(cc.Label).string = "" + (Math.floor((com.reciteNum - wrong) / com.reciteNum * 100)) + "%";
            finish.active = true;
            //结束音效
            cc.audioEngine.play(this.finishEff, false, 1);
        } else {
            this.init();
        }
    },

    onDestroy() {
        //保存当前数据信息
        cc.sys.localStorage.setItem("reviewList", JSON.stringify(com.reviewList));
        cc.sys.localStorage.setItem("wordList", JSON.stringify(com.wordList));
        cc.sys.localStorage.setItem("selectList", JSON.stringify(com.selectList));
        cc.sys.localStorage.setItem("collectList", JSON.stringify(com.collectList));
        cc.sys.localStorage.setItem("reviewNum", com.reviewNum);
        console.log("store success!!!");
    },

    starSwitch: function () {
        if (this.ifCollection === false) {
            this.star.color = cc.color(240, 234, 96, 255);
            this.ifCollection = true;
            //将其添加到收藏列表
            var collectWord = com.selectList[this.trueNum[0]];
            com.collectList.push(collectWord);
        }
        else if (this.ifCollection === true) {
            this.star.color = cc.color(255, 255, 255, 255);
            this.ifCollection = false;
            //找到该被收藏的单词并删除
            var name = com.selectList[this.trueNum[0]]["word"];
            for (var i = 0; i < com.collectList.length; i++) {
                if (com.collectList[i]["word"] === name) {
                    com.collectList.splice(i, 1);
                    break;
                }
            }
        }
    }

});
