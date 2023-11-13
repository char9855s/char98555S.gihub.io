function rl() {
    var m31 = [1, 3, 5, 7, 8, 10, 12], m30 = [4, 6, 9, 11]
    var year, month, day, house, min, second, week;
    var date = new Date();
    year = date.getFullYear();     //获取当前年份
    month = date.getMonth() + 1;    //获取当前月份
    day = date.getDate();         //获取当前日期
    // house = date.getHours();      //获取当前小时 
    // min = date.getMinutes();      //获取当前分钟
    // second = date.getSeconds();   //获取当前秒数
    week = date.getDay();               //获取当前周几
    if (week == 0) {
        week = 7;
    }
    while(week-day<=0){
        week=week+7;
    }
    

    //对当前日期进行css标记
    // document.getElementById(day+'').style.background='pink'
    document.getElementById(week + '').style.backgroundImage = 'linear-gradient(to top,#9795f0 25%,#fbc8d4 100%)';

    setInterval(function () {
        var date = new Date();
        var house = date.getHours();
        var min = date.getMinutes();
        var second = date.getSeconds();
        if (min < 10) {
            min = '0' + min;
        }
        if (second < 10) {
            second = '0' + second;
        }
        if (house < 10) {
            house = '0' + house;
        }
        document.getElementById("time").innerHTML = house + ':' + min + ':' + second;
    }, 1000);

    document.getElementById("title").innerHTML = year + "-" + month + '-' + day;      //标题行显示日期
    if (m31.includes(month)) {          //判断当前月份有多少天
        var n = 31;
    }
    else if (m30.includes(month)) {
        var n = 30;
    }
    else if (year % 4 == 0) {
        var n = 29;
    }
    else {
        var n = 28;
    }

    if (month - 1 > 0) {
        var old_Month = month - 1;
    }
    else if (month - 1 == 0) {
        var old_Month = 12;
    }

    if (m31.includes(old_Month)) {    //判断上一个月有多少天
        var n2 = 31;
    }
    else if (m30.includes(old_Month)) {
        var n2 = 30;
    }
    else if (year % 4 == 0) {
        var n2 = 29;
    }
    else {
        var n2 = 28;
    }



    for (var i = day; i <= n; i++, week++) {
        document.getElementById(week + '').innerHTML = i;
        if (i == n) {
            for (week++, j = 1; week <= 35; week++) {
                document.getElementById(week + '').innerHTML = j++;     //下个月日期
                document.getElementById(week + '').style.opacity = 0.5
            }
        }
    }

    if (date.getDay() == 0) {
        var week = 7;
    }
    else {
        var week = date.getDay()
    }
    while(week-day<=0){
        week=week+7;
    }
    for (; week > 0; week--) {
        if (day > 0) {
            document.getElementById(week + '').innerHTML = day--;
        }
        else {                                               //上个月日期
            document.getElementById(week + '').innerHTML = n2--;
            document.getElementById(week + '').style.opacity = 0.5
        }
    }

}