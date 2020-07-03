
$("div.next > i").click(function () {
  var activeFirst = $("img.first").hasClass("active");
  var activeSecond = $("img.second").hasClass("active");
  var activeThird = $("img.third").hasClass("active");
  var activeLast = $("img.last").hasClass("active");


  if (activeFirst) {
    $("img.first").slideToggle("slow");
    $("img.first").removeClass("active");
    $("img.second").slideToggle("slow");
    $("img.second").addClass("active");
  }else if (activeSecond) {
    $("img.second").slideToggle( "slow");
    $("img.second").removeClass("active");
    $("img.third").slideToggle( "slow");
    $("img.third").addClass("active");
  }else if (activeThird) {
    $("img.third").slideToggle( "slow");
    $("img.third").removeClass("active");
    $("img.last").slideToggle( "slow");
    $("img.last").addClass("active");
  }else if (activeLast) {
    $("img.last").slideToggle( "slow");
    $("img.last").removeClass("active");
    $("img.first").slideToggle( "slow");
    $("img.first").addClass("active");
  }
})



// $("div.prev > i").click(function () {
//   var activeFirst = $("img.first").hasClass("active");
//   var activeSecond = $("img.second").hasClass("active");
//   var activeThird = $("img.third").hasClass("active");
//   var activeLast = $("img.last").hasClass("active");
//
//   if (activeFirst == true) {
//     $("images").animate({
//       width:"toggle"
//     })
//     $("img.last").addClass("active");
//     $("img.first").removeClass("active");
//   }else if (activeLast == true) {
//     $("images").animate({
//       width:"toggle"
//     })
//     $("img.third").addClass("active");
//     $("img.last").removeClass("active");
//   }else if (activeThird == true) {
//     $("images").animate({
//       width:"toggle"
//     })
//     $("img.second").addClass("active");
//     $("img.third").removeClass("active");
//   }else if (activeSecond == true) {
//     $("images").animate({
//       width:"toggle"
//     })
//     $("img.first").addClass("active");
//     $("img.second").removeClass("active");
//   }
// })
