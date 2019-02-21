var com = require("Common");
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad() {

    },
    start() {
        if (com.loadTime === 1) {
            //cc.sys.localStorage.clear();
            //cc.sys.localStorage.removeItem("reviewList");//测试
            cc.loader.loadRes("Cmaster", cc.RawAsset, function (err, data) {
                if (err) {
                    console.log("open Cmaster.json error!");
                    return;
                }
                else {
                    com.CmasterJson = data;
                }
            });

            cc.loader.loadRes("situations", cc.RawAsset, function (err, data) {
                if (err) {
                    console.log("open situations.json error!");
                    return;
                }
                else {
                    com.SituationsJson = data;
                }
            });

            cc.loader.loadRes("img/img", cc.SpriteAtlas, function (err, data) {
                if (err) {
                    console.log("open img.png error!");
                    return;
                }
                else {
                    com.atlasImg = data;
                }
            });

            //加载复习列表
            if (!cc.sys.localStorage.getItem("reviewList"))    //如果本地没有存储
            {
                com.reviewList = [];
            }
            else  //如果本地已经存储
            {
                var reviewList = cc.sys.localStorage.getItem("reviewList");
                com.reviewList = JSON.parse(reviewList);
            }

            //加载收藏列表
            if (!cc.sys.localStorage.getItem("collectList"))    //如果本地没有存储
            {
                com.collectList = [];
            }
            else  //如果本地已经存储
            {
                var collectList = cc.sys.localStorage.getItem("collectList");
                com.collectList = JSON.parse(collectList);
            }
            //加载收藏列表和已经背过的单词列表
            if (!cc.sys.localStorage.getItem("wordList"))    //如果本地没有存储
            {
                com.wordList = [];
            }
            else  //如果本地已经存储
            {
                var wordList = cc.sys.localStorage.getItem("wordList");
                com.wordList = JSON.parse(wordList);
            }


            //加载剩下单词
            if (!cc.sys.localStorage.getItem("leftList"))    //如果本地没有存储
            {
                com.leftList = [];
                //拷贝对象，防止引用同一地址
                for (var i = 0; i < com.CmasterJson.length; i++)
                    com.leftList[i] = com.CmasterJson[i];
                cc.sys.localStorage.setItem("leftList", JSON.stringify(com.leftList));  //剩下的单词
            }
            else  //如果本地已经存储
            {
                com.leftList = [];

                var leftList = cc.sys.localStorage.getItem("leftList");
                com.leftList = JSON.parse(leftList);
            }


            //加载已经背的单词数
            if (!cc.sys.localStorage.getItem("reviewNum"))    //如果本地没有存储
            {
                com.reviewNum = 0;
            }
            else  //如果本地已经存储
            {
                com.reviewNum = parseInt(cc.sys.localStorage.getItem("reviewNum"));   //记录已经背的单词
            }
            //加载要背的单词数量
            if (!cc.sys.localStorage.getItem("reciteNum"))    //如果本地没有存储
            {
                com.reciteNum = 5;
            }
            else  //如果本地已经存储
            {
                com.reciteNum = parseInt(cc.sys.localStorage.getItem("reciteNum"));   //记录已经背的单词
            }

            //加载日期
            var date = new Date()
            if (!cc.sys.localStorage.getItem("today"))    //如果本地没有存储
            {
                com.today = date.getDate();
                cc.sys.localStorage.setItem("today", com.today); //需要背的单词

                //加载今日背诵单词列表
                console.log("1");
                this.LoadselectWord();
            }
            else  //如果本地已经存储
            {
                com.today = cc.sys.localStorage.getItem("today");
                console.log("last");
            }

            //记录当天登陆的时间
            if (com.today != date.getDate()) {
                com.today = date.getDate();
                cc.sys.localStorage.setItem("today", com.today);
                //加载要背的单词数量
                com.reciteNum = parseInt(cc.sys.localStorage.getItem("newReciteNum"));
                console.log("reciteNum: " + com.reciteNum);
                //加载今日背诵单词列表
                var leftList = cc.sys.localStorage.getItem("leftList");
                com.leftList = JSON.parse(leftList);
                com.reviewNum = 0;
                cc.sys.localStorage.setItem("reviewNum", com.reviewNum);
                cc.sys.localStorage.setItem("reciteNum", com.reciteNum);
                console.log("2");
                this.LoadselectWord();
            } else {
                var selectList = cc.sys.localStorage.getItem("selectList");
                com.selectList = JSON.parse(selectList);

            }
            com.loadTime++;
        }
        else {
            return;
        }
    },

    reviseWordNum: function (reciteNum = 10) {
        com.reciteNum = reciteNum;//默认为10
    },

    //加载需要背的单词
    LoadselectWord: function () {
        console.log("reciteNum" + com.reciteNum);
        console.log("left: " + com.leftList.length);
        //console.log("cmaster: " + com.CmasterJson.length);
        //获取需要背的单词的索引
        var list = com.randomNum(0, com.leftList.length - 1, com.reciteNum);

        com.selectList = [];

        console.log(JSON.stringify(com.leftList));

        for (var i = 0; i < list.length; i++) {
            var selectWord = com.leftList[list[i]];

            //console.log("list[i]: " + list[i]);

            // console.log(JSON.stringify(selectWord));
            //  var selectWord = com.CmasterJson[list[i]];
            com.selectList.push(selectWord);
            //   com.leftList.splice(list[i], 1);
        }
        for (var i = 0; i < list.length; i++) {
            com.leftList.splice(list[i], 1);
        }


        console.log(JSON.stringify(com.selectList));

        console.log("select: " + com.selectList.length);

        cc.sys.localStorage.setItem("selectList", JSON.stringify(com.selectList)); //需要背的单词
        cc.sys.localStorage.setItem("leftList", JSON.stringify(com.leftList));  //剩下的单词
    },
    onDestroy() {

    },
});
