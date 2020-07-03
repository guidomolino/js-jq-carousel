
$("div.next > i").click(function () {

  var activeFirst = $("img.first").hasClass("active");
  var activeSecond = $("img.second").hasClass("active");
  var activeThird = $("img.third").hasClass("active");
  var activeLast = $("img.last").hasClass("active");

  if (activeFirst) {
    $("img.first").slideToggle("slow",function(){
      $(this).removeClass("active");
    });
    $("img.second").slideToggle("slow",function(){
      $(this).addClass("active");
    });

  }else if (activeSecond) {
    $("img.second").slideToggle( "slow",function(){
      $(this).removeClass("active");
    });
    $("img.third").slideToggle("slow",function(){
      $(this).addClass("active");
    });

  }else if (activeThird) {
    $("img.third").slideToggle("slow",function(){
      $(this).removeClass("active");
    });

    $("img.last").slideToggle( "slow",function(){
      $(this).addClass("active");
    });

  }else if (activeLast) {
    $("img.last").slideToggle("slow",function(){
      $(this).removeClass("active");
    });

    $("img.first").slideToggle( "slow",function(){
      $(this).addClass("active");
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
    });
    $("img.last").slideToggle("slow",function(){
      $(this).addClass("active");
    });

  }else if (activeLast) {
    $("img.last").slideToggle( "slow",function(){
      $(this).removeClass("active");
    });
    $("img.third").slideToggle("slow",function(){
      $(this).addClass("active");
    });

  }else if (activeThird) {
    $("img.third").slideToggle("slow",function(){
      $(this).removeClass("active");
    });

    $("img.second").slideToggle( "slow",function(){
      $(this).addClass("active");
    });

  }else if (activeSecond) {
    $("img.second").slideToggle("slow",function(){
      $(this).removeClass("active");
    });

    $("img.first").slideToggle( "slow",function(){
      $(this).addClass("active");
    });

  }
});
