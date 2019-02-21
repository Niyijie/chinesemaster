var com = require("Common");
cc.Class({
    extends: cc.Component,

    properties: {
        mode: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.mode = "light";
    },

    lightSwitch: function () {
        if (this.mode === "light") {
            //更改页面颜色
            this.node.children[0].children[0].color = cc.color(148, 148, 148, 255);
            //更改导航颜色
            this.node.children[1].color = cc.color(148, 148, 148, 255);
            this.node.children[1].children[0].color = cc.color(148, 148, 148, 255); //返回

            this.mode = "dark";
        }
        else {
            this.node.children[0].children[0].color = cc.color(255, 255, 255, 255);
            //更改导航颜色
            this.node.children[1].color = cc.color(255, 255, 255, 255);
            this.node.children[1].children[0].color = cc.color(255, 255, 255, 255); //返回
   
            this.mode = "light";
        }
    }

});
