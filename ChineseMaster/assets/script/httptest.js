// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    HttpTest : function () {
        var xhr = new XMLHttpRequest();
        var url = "http://127.0.0.1:9106/index.html"
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                var s1 = JSON.parse(response);
             //  console.log(s);
                for(var i = 1;i<=3;i++)
                {
                    console.log(s1[i]);
                }

                var url = "project",_type = cc.RawAsset;
                cc.loader.loadRes(url,_type,function (err,data) {
                    if(err) {
                       console.log("error!");
                       console.log("wei"+err);
                    }
                   else
                    {
                        let list = data;
                        var s = list[1];
                        console.log("here!");
                        console.log(s["chinese"]);
                        console.log(list[1]["res"]);
                    }
                });
            }
        };
    }
    // update (dt) {},
});
