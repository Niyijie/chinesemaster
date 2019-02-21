var com = require("Common");
cc.Class({
    extends: cc.Component,

    properties: {
        title: cc.Label,
        slotItem: cc.Prefab,
        scrollView: cc.ScrollView,
        totalCount: 0,
    },
    start() {
        if (com.bookMode === 1) {
            this.title.getComponent(cc.Label).string = "Notebook";
            this.totalCount = com.collectList.length;
            for (var i = 0; i < this.totalCount; i++) {
                this.addItem(this.scrollView.content, com.collectList, i);
            }
        }
        else if (com.bookMode === 2) {
            this.title.getComponent(cc.Label).string = "word List";
            this.totalCount = com.wordList.length;
            for (var i = 0; i < this.totalCount; i++) {
                this.addItem(this.scrollView.content, com.wordList, i);
            }
        }
    },

    addItem: function (content, list, index) {
        var item = cc.instantiate(this.slotItem);
        item.children[0].getComponent(cc.Label).string = list[index]["chinese"] + " " + list[index]["spell"];
        item.children[1].getComponent(cc.Label).string = list[index]["terms"] + " " + list[index]["trans1"];
        content.addChild(item);
    }

});
