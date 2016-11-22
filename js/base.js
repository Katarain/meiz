/**
 * Created by Administrator on 2016/11/13.
 */
(function () {
  //头部
  $('.hiRight .demo>li').css('background', 'url(images/index_8.jpg) no-repeat right center');
  $('.hiRight .demo>li').mouseover(function (e) {
    $(this).css('background', 'url(images/index_11.jpg) no-repeat right center #fff');
    $(this).children('ul').show();
  })
  $('.hiRight .demo>li').mouseout(function (e) {
    $(this).children('ul').hide();
    $(this).css('background', 'url(images/index_8.jpg) no-repeat right center');
  })

  //banner轮播
  var size = $(".img li").size();  //获取图片的个数
  for (var i = 1; i <= size; i++) {	//创建图片个数相对应的底部数字个数
    var li = "<li>" + i + "</li>";	//创建li标签，并插入到页面中
    $(".num").append(li);
  }

  //按钮动态出现
  $(".out").mouseenter(function () {
    $(".out .left").stop().animate({'left': '30px'}, 400);
    $(".out .right").stop().animate({'right': '30px'}, 400);
  });
  $(".out").mouseleave(function () {
    $(".out .left").stop().animate({'left': '-52px'}, 400);
    $(".out .right").stop().animate({'right': '-52px'}, 400);
  });

  //手动控制图片轮播
  $(".img li").eq(0).show();	//显示第一张图片
  $(".num li").eq(0).addClass("active");	//第一张图片底部相对应的数字列表添加active类
  $(".num li").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");  //鼠标在哪个数字上那个数字添加class为active
    var index = $(this).index();  //定义底部数字索引值
    i = index;  //底部数字索引值等于图片索引值
    $(".img li").eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200);	//鼠标移动到的数字上显示对应的图片
  })

  //自动控制图片轮播
  var i = 0;  //初始i=0
  var t = setInterval(move, 1500);  //设置定时器，1.5秒切换下一站轮播图
  //向左切换函数
  function moveL() {
    i--;
    if (i == -1) {
      i = size - 1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
    }
    $(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
    $(".img li").eq(i).fadeIn(200).siblings().fadeOut(200);  //对应图片切换
  }

  //向右切换函数
  function move() {
    i++;
    if (i == size) {
      i = 0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
    }
    $(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
    $(".img li").eq(i).fadeIn(200).siblings().fadeOut(200);  //对应图片切换
  }

  //左按钮点击事件
  $(".out .left").click(function () {
    moveL();	//点击左键调用向左切换函数
  })
  //右按钮点击事件
  $(".out .right").click(function () {
    move();    //点击右键调用向右切换函数
  })
  //定时器开始与结束
  $(".out").hover(function () {
    clearInterval(t);	//鼠标放在轮播区域上时，清除定时器
  }, function () {
    t = setInterval(move, 1500);  //鼠标移开时定时器继续
  })


  //侧边栏特效
  var num = 0, $subbnav = $(".subnav"), $sideBarMenu = $(".subnav li");
  $sideBarMenu.each(function (index, ele) {
    num = index * 55;
    $(ele).css("background-position", "0 -" + num + "px");
  });

  //链接跳转
  $('.sale_imgs').attr({'href':'detail.html','target':'_blank'});

  // 滚动效果
  var TOP = 0;
  $(window).scroll(function () {
    TOP = $(document).scrollTop();

    if (TOP >= $(".footer").offset().top) {
      $sideBarMenu.eq(3).addClass("current").siblings().removeClass();
    } else if (TOP >= $(".content_hot").offset().top) {
      $sideBarMenu.eq(2).addClass("current").siblings().removeClass();
    } else if (TOP >= $(".content_recm").offset().top) {
      $sideBarMenu.eq(1).addClass("current").siblings().removeClass();
    } else if (TOP >= $(".content_sale").offset().top) {
      $sideBarMenu.eq(0).addClass("current").siblings().removeClass();
    } else if (TOP > 0) {
      $subbnav.fadeIn();
    } else {
      $subbnav.fadeOut();
    }
  });

  $sideBarMenu.click(function () {
    $("html,body").stop().animate({
      // 给具有相同效果的元素添加 共同的样式 jd
      "scrollTop": $(".slider").eq($(this).index()).offset().top
    }, 1000);
  });

  $(".back").click(function () {
    //$(document).scrollTop(0);
    $("html,body").animate({"scrollTop": 0}, 300); //
  });


//时间
  var SysSecond;
  var InterValObj;
    SysSecond = parseInt(199700); //这里获取倒计时的起始时间
    InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行

//将时间减去1秒，计算天、时、分、秒
  function SetRemainTime() {
    if (SysSecond > 0) {
      SysSecond = SysSecond - 1;
      var second = Math.floor(SysSecond % 60);             // 计算秒
      var minite = Math.floor((SysSecond / 60) % 60);      //计算分
      var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时
      var day = Math.floor((SysSecond / 3600) / 24);        //计算天
      if (day > 0) {
        if (day == 1) {
          $(".time_tm").html(day + "天" + hour + "时" + minite + "分" + second + "秒");
        } else {
          $(".time_tm").html(day + "天" + hour + "时" + minite + "分" + second + "秒");
        }
      } else {
        $(".time_tm").html(hour + "时" + minite + "分" + second + "秒");
      }
    } else {//剩余时间小于或等于0的时候，就停止间隔函数
      window.clearInterval(InterValObj);
      //这里可以添加倒计时时间为0后需要执行的事件
    }
  }
})();


