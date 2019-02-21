var com = require('Common');
cc.Class({
    extends: cc.Component,

    properties: {
    },
    toWordList: function () {
        if (this.node.name === "notebook") {
            com.bookMode = 1;
        }
        else if (this.node.name === "wordlist") {
            com.bookMode = 2;
        }

        cc.director.loadScene('wordList');
    },
    //跳转到首页
    toHome: function () {
        cc.director.loadScene('homePage');
    },
    //跳转到设置
    toSetting: function () {
        cc.director.loadScene('setting');
    },
    //跳转到复习
    toReview: function () {
        cc.director.loadScene('review');
    },
    //跳转到挑战
    toChallenge: function () {
        cc.director.loadScene('challenge');
    },
    //跳转到学习
    toStudy: function () {
        cc.director.loadScene('study');
    },
    //跳转到拓展
    toExpand: function () {
        cc.director.loadScene('expand');
    },
    //跳转到个人中心
    toPersonal: function () {
        cc.director.loadScene('personal');
    },
    //跳转到词组界面
    toPhrase: function () {
        if (com.selectList.length === 0) {
            var reviewBox = cc.find("background/tip", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
        else {
            cc.director.loadScene('phrase');
        }
    },
    //跳转到情景动画
    toDialogue: function () {
        cc.director.loadScene('dialogue');
    },
    //跳转到词组练习界面
    toPhrasePractice: function () {
        cc.director.loadScene('phrasePractice');
    },
    toChallenge: function () {
        cc.director.loadScene("challenge");
    },
    toExpand: function () {
        if (com.myPage == 1) {
            cc.director.loadScene('homePage');
        }
        else if (com.myPage == 4) {
            cc.director.loadScene('expand');
        }
    },
    engToChi: function () {
        if (com.reviewList.length === 0) {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
        else {
            cc.director.loadScene("engToChi");
        }
    },
    pictoChi: function () {
        if (com.reviewList.length === 0) {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
        else {
            cc.director.loadScene("pictoChi");
        }
    },
    chitoPy: function () {
        if (com.reviewList.length === 0) {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
        else {
            cc.director.loadScene("chitoPy");
        }
    },
    toSituations: function () {
        cc.director.loadScene("situations");
        if (this.node.name === "dinner party")
            com.data = 1;
        else if (this.node.name === "asking the way")
            com.data = 2;
        else if (this.node.name === "shopping")
            com.data = 3;
        else if (this.node.name === "travelling")
            com.data = 4;
    },
    toThePhrases: function () {
        if (com.reviewList.length === 0) {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
        else {
            cc.director.loadScene("thePhrases");
        }
    },
    toChineseCulture: function () {
        cc.director.loadScene("chineseCulture");
    },
    toFolkTea: function () {
        cc.director.loadScene("folkTea");
    },
    toPaperCut: function () {
        cc.director.loadScene("paperCut");
    },
    toEtiMeeting: function () {
        cc.director.loadScene("etiMeeting");
    },
    toNewYear: function () {
        cc.director.loadScene("ChineseNewYear");
    },
    toPoem: function () {
        cc.director.loadScene("poem");
    },
    toGame1: function () {
        cc.director.loadScene("start1");
    },
    toGame2: function () {
        cc.director.loadScene("start2");
    },
    toGame3: function () {
        cc.director.loadScene("start3");
    },
});
