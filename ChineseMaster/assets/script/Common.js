module.exports = {
    loadTime: 1,//当loadTime为1时，进行初始化变量
    data: null,//进入复习界面的子界面
    CmasterJson: null,
    SituationsJson: null,
    leftList:null,//保存剩下未背的单词
    selectList: null,  //保存需要背的单词
    reviewList: null,  //保存要复习单词
    collectList: null, //保存收藏单词列表
    wordList:null,//保存已经背过的单词
    atlasImg: null,   //单词图片图集
    reciteNum: 5,  //要背的单词数量
    reviewNum:0,   //记录已经背的单词(不是复习)
    today:1, //记录是否是同一天
    myPage: 1,//记录当前页面
    bookMode: 1,//1为notebook 2为wordlist
    
    randomNum: function (beg, end, length) {
        var arr = [];
        for (var i = beg; i <= end; i++)
            arr.push(i);
        var i = arr.length, t, j;
        while (i) {
            j = Math.floor(Math.random() * i--);
            t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
        arr.length = length;
        return arr;
    },
    //改变按钮禁用时的颜色
    ButtonColor: function (button, event) {
        button.getComponent(cc.Button).interactable = true;
        if (event === "correct")
            button.getComponent(cc.Button).disabledColor.setR(187).setG(223).setB(250);
        else if (event === "wrong")
            button.getComponent(cc.Button).disabledColor.setR(255).setG(182).setB(202);
    },

    //数组去重
    method: function (arr) {
        var h = {};    //定义一个hash表  
        var list = [];  //定义一个临时数组  

        for (var i = 0; i < arr.length; i++) {    //循环遍历当前数组  
            //对元素进行判断，看是否已经存在表中，如果存在则跳过，否则存入临时数组  
            if (!h[arr[i]]) {
                //存入hash表  
                h[arr[i]] = true;
                //把当前数组元素存入到临时数组中  
                list.push(arr[i]);
            }
        }
        return list;
    }
};
    //老随机数方法
    // randomNum:function(beg,end,length){
    //     var arr = [];
    //     for (var i = beg; i <=end; i++) {
    //         arr.push(i);
    //     }
    //     arr.sort(
    //         function () {
    //             return 0.5 - Math.random();
    //         }
    //     );
    //     arr.length = length;
    //     return arr;
    // },
