
var com = require('Common');
cc.Class({
    extends: cc.Component,

    properties: {
        Ok: cc.Node,
        btn: cc.Node,
    },
    onLoad() {
        var reviewBox = cc.find("background/reviewBox", this.node);
        reviewBox.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },
    OK: function () {
        var reviewBox = cc.find("background/reviewBox", this.node);
        reviewBox.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },
    Btn: function () {
        var reviewBox = cc.find("background/reviewBox", this.node);
        reviewBox.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },
    // update (dt) {},
});
