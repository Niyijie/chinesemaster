cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {
        var date = new Date()
        var newyear = date.getFullYear();
        var newmonth = date.getMonth();
        var newday = date.getDate();

        // 获取这月有多少天
        var currentDay = this.getMonthsDay(newyear, newmonth);

        // 获取当月第一天星期几
        var firstDay = this.getMonthFirst(newyear, newmonth);


        var lastMonth = (newmonth - 1) >= 0 ? (newmonth - 1) : 12;
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.node.getChildByName('data').getChildByName(`year`).getComponent(cc.Label).string = newyear;
        this.node.getChildByName('data').getChildByName(`month`).getComponent(cc.Label).string = month[newmonth];
        //  (newmonth + 1) + " 月";
        var lastDay = this.getMonthsDay(newyear, lastMonth);
        var newlastDay = lastDay;
        for (var i = firstDay - 1; i >= 0; i--) {
            // this.node.getChildByName('title1').getChildByName(`item${i}`).color = new cc.Color(255,255,255);
            //this.node.getChildByName('title1').getChildByName(`item${i}`).getComponent(cc.Label).string = newlastDay--;
            this.node.getChildByName('title1').getChildByName(`item${i}`).getComponent(cc.Label).string = "";

        }

        var newCurrentDay = 1;
        for (var i = firstDay; i <= 6; i++) {
            if (newCurrentDay == newday) {
                this.node.getChildByName('title1').getChildByName(`item${i}`).color = new cc.Color(65, 205, 225);
            }
            this.node.getChildByName('title1').getChildByName(`item${i}`).getComponent(cc.Label).string = newCurrentDay++;
        }

        var num = 1;
        var number = 0;
        for (var i = newCurrentDay; i <= currentDay; i++) {
            if ((i - newCurrentDay) % 7 === 0) {
                num++;
                number = 0;
            }

            if (i == newday) {
                //this.node.getChildByName(`title${num}`).getChildByName(`item${number}`).color = new cc.Color(65,205,225);
                this.node.getChildByName(`title${num}`).getChildByName(`item${number}`).color = new cc.Color(0, 41, 225);

            }
            // if(num < 6)
            //      this.node.getChildByName("title6").active = false;
            this.node.getChildByName(`title${num}`).getChildByName(`item${number++}`).getComponent(cc.Label).string = i;
        }
        if (num < 6)
            this.node.getChildByName("title6").active = false;

        if (number <= 6) {
            var index = 1;
            for (var i = number; i <= 6; i++) {
                this.node.getChildByName(`title${num}`).getChildByName(`item${number}`).color = new cc.Color(192, 192, 192);
                this.node.getChildByName(`title${num}`).getChildByName(`item${number++}`).getComponent(cc.Label).string = index++;

            }
        }



        /**
         *  var date = new Date()
         *  
         *  // 获取年份
         *  var newyear = data.getFullYear()
         * 
         *  // 获取月份
         *  var newmonth = data.getMonth()
         * 
         * 
         *  // 获取今日日期
         *  var newday = data.getDate()
         * 
         *  // 获取今天星期几
         *  data.getDay()
         * 
         *  // 获取这月第一天星期几
         *  var s = new Date(newYear, newmonth, 1);
         *  firstday = s.getDay()
         */
    },

    // 获取那年那月有多少天
    getMonthsDay(year, month) {
        var year = year;
        var month = month;
        if (arguments.length == 0) {
            var date = new Date();
            year = date.getFullYear();
            month = data.getMonth();
        }

        if (arguments.length == 1) {
            var date = new Date();
            month = data.getMonth();
        }

        var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            monthDays[1] = 29;
        }
        return monthDays[month];
    },

    // 获取这个月第一天星期几 
    getMonthFirst(year, month) {
        var year = year;
        var month = month;
        if (arguments.length == 0) {
            var date = new Date();
            year = date.getFullYear();
            month = data.getMonth();
        }

        if (arguments.length == 1) {
            var date = new Date();
            month = data.getMonth();
        }

        var newDate = new Date(year, month, 1);
        return newDate.getDay();
    },


});
