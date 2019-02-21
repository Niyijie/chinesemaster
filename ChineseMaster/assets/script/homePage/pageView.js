cc.Class({
    extends: cc.Component,

    properties: {
        pageView: cc.PageView,
    },

    onLoad() {
        this.schedule(function () {
            //一共多少页
            let count = this.pageView.getPages().length;
            //取当前页下序号 
            var index = this.pageView.getCurrentPageIndex();
            //console.log(index);
            //为最后一页，index为0，否则+1
            index = index === count - 1 ? 0 : index + 1;
            //console.log(index);
            //执行切换                
            this.pageView.scrollToPage(index, 0.1);
        }, 4);
    },

    start() {

    },
    // update (dt) {},
});
