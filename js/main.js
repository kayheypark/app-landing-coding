$(document).ready(function () {
    $("header").addClass("upper");
    $("#home").addClass("on");

    /*주메뉴 스크롤감지*/
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 100);

    function hasScrolled() {
        var st = $(this).scrollTop();
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('upper');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').addClass('upper');
            }
        }
        lastScrollTop = st;
    }



        $(window).scroll(function () {
            var scroll = $(this).scrollTop();
            console.log(scroll);

            if (scroll <= 500) {
                $("#home").addClass("on");
            }

            else {
                $("#home").removeClass("on");
            }

            if (scroll >= 600 && scroll <= 15030) {
                $("#about").addClass("on");
            } else {
                $("#about").removeClass("on");
            }

            if (scroll >= 900 && scroll <= 15030) {
                $(".about_bottom").addClass("on");
            } else {
                $(".about_bottom").removeClass("on");
            }

            /*피쳐*/
            /*블루박스*/
            if (scroll >= 1830 && scroll <= 15030) {
                $(".blueBox").addClass("on");
            } else {
                $(".blueBox").removeClass("on");
            }
            
            /*색상*/
            if (scroll >= 2654 && scroll <= 15030) {
                $(".colors_wrap").addClass("on");
            } else {
                $(".colors_wrap").removeClass("on");
            }
            
            
            /*폰트*/
            if (scroll >= 3000 && scroll <= 15030) {
                $(".font_wrap").addClass("on");
            } else {
                $(".font_wrap").removeClass("on");
            }


      

        });
});