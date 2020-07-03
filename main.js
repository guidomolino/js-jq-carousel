$("div.next > i").click(function () {
  var activeFirst = $("img.first").hasClass("active");
  var activeSecond = $("img.second").hasClass("active");
  var activeThird = $("img.third").hasClass("active");
  var activeLast = $("img.last").hasClass("active");

  if (activeFirst == true) {
    $("images").animate({
      width:"toggle"
    })
    $("img.first").removeClass("active");
    $("img.second").addClass("active");
  }else if (activeSecond == true) {
    $("images").animate({
      width:"toggle"
    })
    $("img.second").removeClass("active");
    $("img.third").addClass("active");
  }else if (activeThrid == true) {
    $("images").animate({
      width:"toggle"
    })
    $("img.third").removeClass("active");
    $("img.last").addClass("active");
  }else if (activeLast == true) {
    $("images").animate({
      width:"toggle"
    })
    $("img.last").removeClass("active");
    $("img.first").addClass("active");
  }
})
