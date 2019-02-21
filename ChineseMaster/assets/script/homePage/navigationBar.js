var com = require('Common');
cc.Class({
    extends: cc.Component,

    properties: {
        homePage: cc.Node,
        review: cc.Node,
        challenge: cc.Node,
        expand: cc.Node,
    },

    start() {
        //
        //this.recover();
        switch (com.myPage) {
            case 1: {
                this.homePage.color = cc.color(248, 240, 235, 255);
                this.homePage.children[0].getComponent(cc.Button).interactable = false;
                break;
            }
            case 2: {
                this.review.color = cc.color(248, 240, 235, 255);
                this.review.children[0].getComponent(cc.Button).interactable= false;
                break;
            }
            case 3: {
                this.challenge.color = cc.color(248, 240, 235, 255);
                this.challenge.children[0].getComponent(cc.Button).interactable = false;
                break;
            }
            case 4: {
                this.expand.color = cc.color(248, 240, 235, 255);
                this.expand.children[0].getComponent(cc.Button).interactable = false;
                break;
            }
        }
    },
    recover: function () {
        var button = [this.homePage, this.review, this.challenge, this.expand];
        //恢复按钮颜色
        for (var i = 0; i < 4; i++) {
            button[i].color = cc.color(255, 255, 255, 255);
            button[i].children[0].getComponent(cc.Button).interactable = true;
        }
    },
    //跳转到首页
    toHome: function () {
        com.myPage = 1;
        cc.director.loadScene('homePage');
    },
    //跳转到复习
    toReview: function () {
        com.myPage = 2;
        cc.director.loadScene('review');
    },
    //跳转到挑战
    toChallenge: function () {
        com.myPage = 3;
        cc.director.loadScene('challenge');
    },

    //跳转到拓展
    toExpand: function () {
        com.myPage = 4;
        cc.director.loadScene('expand');
    },
});
