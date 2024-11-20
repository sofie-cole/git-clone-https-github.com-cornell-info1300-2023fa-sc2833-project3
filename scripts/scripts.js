// modals on past works page

$('#project1').on('click', function() {
    $('#background1').removeClass('hidden');
    $('#modalproject1').removeClass('hidden');
  });

  $('#closebutton1').on('click', function() {
      $('#background1').addClass('hidden');
      $('#modalproject1').addClass('hidden');
    });

  $('#project2').on('click', function() {
      $('#background2').removeClass('hidden');
      $('#modalproject2').removeClass('hidden');
    });

  $('#closebutton2').on('click', function() {
      $('#background2').addClass('hidden');
      $('#modalproject2').addClass('hidden');
    });

    $('#project3').on('click', function() {
      $('#background3').removeClass('hidden');
      $('#modalproject3').removeClass('hidden');
    });

  $('#closebutton3').on('click', function() {
      $('#background3').addClass('hidden');
      $('#modalproject3').addClass('hidden');
    });

  // hamburger menu

  $(window).on('resize', function() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      $("#menu").addClass("hidden");
      $("#menunarrow").removeClass("hidden");
      $("#hometitle").addClass('hidden');
      $("#hometitlenarrow").removeClass("hidden");
    } else {
      $('#menu').removeClass('hidden');
      $('#menunarrow').addClass('hidden');
      $('#hometitle').removeClass('hidden');
      $("#hometitlenarrow").addClass("hidden");
    }
  });

  $('#hamburgerbutton').on('click', function() {
    if ($('#menu').hasClass('hidden')) {
      $('#menu').removeClass('hidden');
    } else {
      $('#menu').addClass('hidden');
    }
  });

  $(document).ready(function() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      $('#menu').addClass('hidden');
      $('#menunarrow').removeClass('hidden');
      $("#hometitle").addClass('hidden');
      $("#hometitlenarrow").removeClass("hidden");
    } else {
      $('#menu').removeClass('hidden');
      $('#menunarrow').addClass('hidden');
      $('#hometitle').removeClass('hidden');
      $("#hometitlenarrow").addClass("hidden");

    }
  });
