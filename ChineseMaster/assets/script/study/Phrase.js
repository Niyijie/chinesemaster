var com = require('Common');
cc.Class({
    extends: cc.Component,

    properties: {
        Ok: cc.Node,
        btn: cc.Node,
        2: cc.Node,
        3: cc.Node,
        4: cc.Node,
        5: cc.Node,
        6: cc.Node,
        7: cc.Node,
        8: cc.Node,
        9: cc.Node,
        10: cc.Node,
        11: cc.Node,
        12: cc.Node,
        13: cc.Node,
        14: cc.Node,
        15: cc.Node,
    },
    onLoad() {
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
    B2: function () {
        if (com.reviewList.length === com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B3: function () {
        if (com.reviewList.length === 2 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B4: function () {
        if (com.reviewList.length === 3 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B5: function () {
        if (com.reviewList.length === 4 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B6: function () {
        if (com.reviewList.length === 5 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B7: function () {
        if (com.reviewList.length === 6 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B8: function () {
        if (com.reviewList.length === 7 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B9: function () {
        if (com.reviewList.length === 8 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B10: function () {
        if (com.reviewList.length === 9 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B11: function () {
        if (com.reviewList.length === 10 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B12: function () {
        if (com.reviewList.length === 11 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B13: function () {
        if (com.reviewList.length === 12 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B14: function () {
        if (com.reviewList.length === 13 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    B15: function () {
        if (com.reviewList.length === 14 * com.reciteNum) {
            cc.director.loadScene('phrasePractice');
        } else {
            var reviewBox = cc.find("background/reviewBox", this.node);
            reviewBox.active = true;
            var bg = cc.find("background/IsolationLayer", this.node);
            bg.active = true;
        }
    },
    OK: function () {
        var reviewBox = cc.find("background/reviewBox", this.node);
        reviewBox.active = false;
        var bg = cc.find("background/IsolationLayer", this.node);
        bg.active = false;
    },

    start() {

    },

    // update (dt) {},
});
