
imgNext = $("div.next > i");
imgPrev = $("div.prev > i");

imgNext.click(function() {
  imgActive = $("img.active");
  iActive = $("i.active");

  imgActive.slideToggle("slow", function() {
    imgActive.removeClass("active");
    iActive.removeClass("active");
  });

  if (imgActive.hasClass("last")) {
    imgActive.slideToggle("slow", function(){
      $("img.first").addClass("active");
      $("i.first").addClass("active");
    });
  }else {
    imgActive.slideToggle("slow", function() {
      imgActive.next("img").addClass("active");
      iActive.next("i").addClass("active");
    });
  }
});

imgPrev.click(function() {
  imgActive = $("img.active");
  iActive = $("i.active");
  imgActive.slideToggle("slow", function() {
    imgActive.removeClass("active");
    iActive.removeClass("active");
  });

  if (imgActive.hasClass("first")) {
    imgActive.slideToggle("slow", function(){
      $("img.last").addClass("active");
      $("i.last").addClass("active");
    });
  }else {
    imgActive.slideToggle("slow", function() {
      imgActive.prev("img").addClass("active");
      iActive.prev("i").addClass("active");
    });
  }
});
