// var activeFirst = $("img.first").hasClass("active");
// var activeSecond = $("img.second").hasClass("active");
// var activeThird = $("img.third").hasClass("active");
// var activeLast = $("img.last").hasClass("active");
//
// var btn1 = $("i.first").hasClass("active");
// var btn2 = $("i.second").hasClass("active");
// var btn3 = $("i.third").hasClass("active");
// var btn4 = $("i.last").hasClass("active");

$("i.first").click(function () {

  $("img.active").slideToggle("slow", function(){
    $(this).removeClass("active");
    $("i.active").removeClass("active");
  })
  $("img.first").slideToggle("slow", function(){
    $(this).addClass("active");
    $("i.first").addClass("active");
  })
});

$("i.second").click(function () {

  $("img.active").slideToggle("slow", function(){
    $(this).removeClass("active");
    $("i.active").removeClass("active");
  })
  $("img.second").slideToggle("slow", function(){
    $(this).addClass("active");
    $("i.second").addClass("active");
  })
});

$("i.third").click(function () {

  $("img.active").slideToggle("slow", function(){
    $(this).removeClass("active");
    $("i.active").removeClass("active");
  })
  $("img.third").slideToggle("slow", function(){
    $(this).addClass("active");
    $("i.third").addClass("active");
  })
});

$("i.last").click(function () {

  $("img.active").slideToggle("slow", function(){
    $(this).removeClass("active");
    $("i.active").removeClass("active");
  })
  $("img.last").slideToggle("slow", function(){
    $(this).addClass("active");
    $("i.last").addClass("active");
  })
});

$("div.next > i").click(function () {

  var activeFirst = $("img.first").hasClass("active");
  var activeSecond = $("img.second").hasClass("active");
  var activeThird = $("img.third").hasClass("active");
  var activeLast = $("img.last").hasClass("active");

  if (activeFirst) {
    $("img.first").slideToggle("slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });
    $("img.second").slideToggle("slow",function(){
      $(this).addClass("active");
      $("i.second").addClass("active");
    });

  }else if (activeSecond) {
    $("img.second").slideToggle( "slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });
    $("img.third").slideToggle("slow",function(){
      $(this).addClass("active");
      $("i.third").addClass("active");
    });

  }else if (activeThird) {
    $("img.third").slideToggle("slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });

    $("img.last").slideToggle( "slow",function(){
      $(this).addClass("active");
      $("i.last").addClass("active");
    });

  }else if (activeLast) {
    $("img.last").slideToggle("slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });

    $("img.first").slideToggle( "slow",function(){
      $(this).addClass("active");
      $("i.first").addClass("active");
    });
  }
});

$("div.prev > i").click(function () {

  var activeFirst = $("img.first").hasClass("active");
  var activeSecond = $("img.second").hasClass("active");
  var activeThird = $("img.third").hasClass("active");
  var activeLast = $("img.last").hasClass("active");

  if (activeFirst) {
    $("img.first").slideToggle("slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });
    $("img.last").slideToggle("slow",function(){
      $(this).addClass("active");
      $("i.last").addClass("active");
    });

  }else if (activeLast) {
    $("img.last").slideToggle( "slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });
    $("img.third").slideToggle("slow",function(){
      $(this).addClass("active");
      $("i.third").addClass("active");
    });

  }else if (activeThird) {
    $("img.third").slideToggle("slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });

    $("img.second").slideToggle( "slow",function(){
      $(this).addClass("active");
      $("i.second").addClass("active");
    });

  }else if (activeSecond) {
    $("img.second").slideToggle("slow",function(){
      $(this).removeClass("active");
      $("i.active").removeClass("active");
    });

    $("img.first").slideToggle( "slow",function(){
      $(this).addClass("active");
      $("i.first").addClass("active");
    });

  }
});
