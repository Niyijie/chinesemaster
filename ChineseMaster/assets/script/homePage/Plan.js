
var com = require('Common');
cc.Class({
    extends: cc.Component,

    properties: {
        button: cc.Node,
        button1: cc.Node,
        button2: cc.Node,
        button3: cc.Node,
        button4: cc.Node,
        planNum: 5,
        cancel: cc.Node,
        confirm: cc.Node,
        progressBar: cc.ProgressBar,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.Buttondown();
    },

    start() {
        this.scheduleOnce(function () {
            console.log("reciteNum: " + com.reciteNum);
            var label = cc.find("background/planBox/ProgressBar/progress", this.node);
            label.getComponent(cc.Label).string = com.reviewNum + "/" + com.reciteNum;
            var pro = com.reviewNum / com.reciteNum;
            this.progressBar.progress = pro;
            var planBox2 = cc.find("background/planBox2", this.node);
            planBox2.active = false;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = false;
        }, 0.03);
    },
    Fbutton1: function () {
        this.planNum = 5;
        this.button = this.button1;
        var planBox2 = cc.find("background/planBox2", this.node);
        planBox2.active = true;
        var label = cc.find("background/planBox2/Label", this.node);
        label.getComponent(cc.Label).string = "Are you sure you want to change the plan to " + 5 + " words every day? ";
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = true;
    },
    Fbutton2: function () {
        this.planNum = 10;
        this.button = this.button2;
        var planBox2 = cc.find("background/planBox2", this.node);
        planBox2.active = true;
        var label = cc.find("background/planBox2/Label", this.node);
        label.getComponent(cc.Label).string = "Are you sure you want to change the plan to " + 10 + " words every day? ";
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = true;
    },
    Fbutton3: function () {
        this.planNum = 15;
        this.button = this.button3;
        var planBox2 = cc.find("background/planBox2", this.node);
        planBox2.active = true;
        var label = cc.find("background/planBox2/Label", this.node);
        label.getComponent(cc.Label).string = "Are you sure you want to change the plan to " + 15 + " words every day? ";
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = true;
    },
    Fbutton4: function () {
        this.planNum = 20;
        this.button = this.button4;
        var planBox2 = cc.find("background/planBox2", this.node);
        planBox2.active = true;
        var label = cc.find("background/planBox2/Label", this.node);
        label.getComponent(cc.Label).string = "Are you sure you want to change the plan to " + 20 + " words every day? ";
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = true;
    },

    openButtons: function () {
        this.button1.getComponent(cc.Button).interactable = true;
        this.button2.getComponent(cc.Button).interactable = true;
        this.button3.getComponent(cc.Button).interactable = true;
        this.button4.getComponent(cc.Button).interactable = true;
    },

    //第二天生效
    Confirm: function () {
        this.openButtons();
        //改变计划
        cc.sys.localStorage.setItem("newReciteNum", parseInt(this.planNum));

        this.button.getComponent(cc.Button).interactable = false;
        var planBox2 = cc.find("background/planBox2", this.node);
        planBox2.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },
    Cancel: function () {
        this.openButtons();
        this.Buttondown();
        var planBox2 = cc.find("background/planBox2", this.node);
        planBox2.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },

    Buttondown: function () {
        var newReciteNum = 5;
        if (cc.sys.localStorage.getItem("newReciteNum")) {
            //读取当前的计划数 并将其转化为int类型
            newReciteNum = parseInt(cc.sys.localStorage.getItem("newReciteNum"));
        }
        //找到按钮
        var s = "background/planBox/" + newReciteNum; 
        var button = cc.find(s, this.node);
        button.getComponent(cc.Button).interactable = false;
    },
    // update (dt) {},
});
