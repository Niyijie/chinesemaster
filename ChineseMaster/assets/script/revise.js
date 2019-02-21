var com = require("Common");
cc.Class({
    extends: cc.Component,

    properties: {

        
    },

    reviseWordNum:function(reciteNum = 10)
    {
        com.reciteNum = reciteNum;//默认为10
    },

    //加载需要背的单词
    LoadselectWord:function()
    {
        //获取需要背的单词的索引
        var list = com.randomNum(0,48,com.reciteNum);

        var leftList = [];
        //拷贝对象，防止引用同一地址
        for(var i=0;i<com.CmasterJson.length;i++)
            leftList[i] = com.CmasterJson[i];
        com.selectList = [];

        for(var i=0;i<list.length;i++)
        {
            
            com.selectList.push(com.CmasterJson[list[i]]);  //存入str
            console.log(com.CmasterJson.length);
            leftList.splice(list[i],1);
        }

        cc.sys.localStorage.setItem("reciteList",JSON.stringify(com.selectList)); //需要背的单词
        cc.sys.localStorage.setItem("leftList",JSON.stringify(leftList));  //剩下的单词
    }
});
        //创建存有需要背的json文件
      //  jsb.fileUtils.writeStringToFile(str,jsb.fileUtils.getWritablePath()+'reciteList.json');
       // jsb.fileUtils.writeStringToFile(s2,jsb.fileUtils.getWritablePath()+'reciteList1.json');