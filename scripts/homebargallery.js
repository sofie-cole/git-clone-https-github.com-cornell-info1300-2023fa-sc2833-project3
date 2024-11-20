setInterval(function() {
    if ($("#maintitle").hasClass("titlebar")) {
      $("#maintitle").removeClass("titlebar");
      $("#maintitle").addClass("titlebar2");
    } else if ($("#maintitle").hasClass("titlebar2")){

      $("#maintitle").removeClass("titlebar2");
      $("#maintitle").addClass("titlebar3");
    }
    else if ($("#maintitle").hasClass("titlebar3")){

      $("#maintitle").removeClass("titlebar3");
      $("#maintitle").addClass("titlebar");
    }
  }, 10000);
