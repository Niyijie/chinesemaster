var com = require("Common")
cc.Class({
    extends: cc.Component,

    toMain3: function () {
        cc.director.loadScene("main3");
    },

    toHome: function () {
        //停止音乐
        cc.audioEngine.pauseAll();
        var node = cc.find("backGround");
        cc.game.removePersistRootNode(node);
        //跳转到首页
        cc.director.loadScene("challenge");
    },

    onLoad() {
    },
    onDestroy() {
    }
});