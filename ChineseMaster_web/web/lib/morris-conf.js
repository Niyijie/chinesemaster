var Script = function () {

    $(function () {
      // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
      var tax_data = [
           {"month": "2018-01", "licensed": 150, "sorned": null},
           {"month": "2018-02", "licensed": 220, "sorned": null},
           {"month": "2018-03", "licensed": 280, "sorned": null},
           {"month": "2018-04", "licensed": 250, "sorned": null},
           {"month": "2018-05", "licensed": 320, "sorned": null},
           {"month": "2018-06", "licensed": 330, "sorned": null},
           {"month": "2018-07", "licensed": 400, "sorned": null},
           {"month": "2018-08", "licensed": 540, "sorned": null},
           {"month": "2018-09", "licensed": 610, "sorned": null}
      ];
      Morris.Line({
        element: 'hero-graph',
        data: tax_data,
        xkey: 'month',
        ykeys: ['licensed'],
        labels: ['人数'],
        lineColors:['#4ECDC4']
      });

      Morris.Donut({
        element: 'hero-donut',
        data: [
          {label: '在华留学生', value: 60 },
          {label: '海外学生', value: 30 },
          {label: '海外华侨', value: 10 }
        ],
          colors: ['#3498db', '#2980b9', '#34495e'],
        formatter: function (y) { return y + "%" }
      });

      Morris.Area({
        element: 'hero-area',
        data: [
          {"month": "2018-01", "count": 230},
          {"month": "2018-02", "count": 277},
          {"month": "2018-03", "count": 491},
          {"month": "2018-04", "count": 450},
          {"month": "2018-05", "count": 334},
          {"month": "2018-06", "count": 435},
          {"month": "2018-07", "count": 670},
          {"month": "2018-08", "count": 560},
          {"month": "2018-09", "count": 687},
        ],

          xkey: 'month',
          ykeys: ['count'],
          labels: ['count'],
          hideHover: 'auto',
          lineWidth: 1,
          pointSize: 5,
          lineColors: ['#4a8bc2'],
          fillOpacity: 0.5,
          smooth: true
      });

      Morris.Bar({
        element: 'hero-bar',
        data: [
          {"class": '字词资源', "count": 136},
          {"class": '情景对话', "count": 137},
          {"class": '文章资源', "count": 275},
          {"class": '游戏资源', "count": 380},
        ],
        xkey: 'class',
        ykeys: ['count'],
        labels: ['count'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        barColors: ['#ac92ec']
      });

      new Morris.Line({
        element: 'examplefirst',
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        data: [
          {year: '2008', value: 20},
          {year: '2009', value: 10},
          {year: '2010', value: 5},
          {year: '2011', value: 5},
          {year: '2012', value: 20}
        ]
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();




