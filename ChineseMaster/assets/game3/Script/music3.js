cc.Class({
    extends: cc.Component,

    properties: {
        backGround: cc.AudioClip,
    },

    onLoad() {
        cc.audioEngine.play(this.backGround, true, 1);
        cc.loader.setAutoReleaseRecursively(this.backGround, false);
    },

    onDestroy() {
        console.log("music remove！");
    },
});