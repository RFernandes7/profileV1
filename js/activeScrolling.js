// Active menu while scrolling

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('section').each(function(i) {
    // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top <= windscroll - -100) {
                $('header li.active').removeClass('active');
                $('header li').eq(i).addClass('active');
            }
        });

    } else {

        $('header li.active').removeClass('active');
        $('header li:first').addClass('active');
    }

    }).scroll();


 