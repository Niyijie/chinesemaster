

cc.Class({
    extends: cc.Component,

    properties: {
        Open: cc.Node,
        Close: cc.Node,
    },
    onload() {
        var close = cc.find("background/reminder/close", this.node);
        close.active = false;
        var open = cc.find("background/reminder/open", this.node);
        open.active = false;
    },

    Btnclose: function () {
        var close = cc.find("background/reminder/close", this.node);
        close.active = false;
        var open = cc.find("background/reminder/open", this.node);
        open.active = true;
    },
    Btnopen: function () {
        var open = cc.find("background/reminder/open", this.node);
        open.active = false;
        var close = cc.find("background/reminder/close", this.node);
        close.active = true;

    },

    // update (dt) {},
});
