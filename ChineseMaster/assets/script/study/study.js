
var com = require('Common');
cc.Class({
    extends: cc.Component,

    properties: {
        Ok: cc.Node,
        btn: cc.Node,
    },
    onLoad() {
        var reviewBox = cc.find("background/tip", this.node);
        reviewBox.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },
    OK: function () {
        var reviewBox = cc.find("background/tip", this.node);
        reviewBox.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },
    Btn: function () {
        var reviewBox = cc.find("background/tip", this.node);
        reviewBox.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },
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

    // update (dt) {},
});
