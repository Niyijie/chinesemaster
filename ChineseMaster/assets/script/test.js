var com = require("Common");
cc.Class({
    extends: cc.Component,

    properties: {
        },

    start() {
    },
    b1: function () {
      var a = [];
       a.push(com.CmasterJson[0]);
       a.push(com.CmasterJson[1]);
       //var s = JSON.stringify(a);
       //console.log(s);

       var s = cc.sys.localStorage.getItem("reviewList");  //剩下的单词
       console.log(s);

    }
});