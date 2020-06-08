$(document).ready(function () {
    $("header").addClass("upper");
    $("#home").addClass("on");

    /*주메뉴 스크롤감지*/
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 50;
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

            if (scroll >= 888 && scroll <= 15030) {
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
            if (scroll >= 2777 && scroll <= 15030) {
                $(".font_wrap").addClass("on");
            } else {
                $(".font_wrap").removeClass("on");
            }

            /*아이콘*/
                /*카테고리*/
                if (scroll >= 3333 && scroll <= 15030) {
                    $(".category").addClass("on");
                } else {
                    $(".category").removeClass("on");
                }

                /*드로워*/
                if (scroll >= 3632 && scroll <= 15030) {
                    $(".drawer").addClass("on");
                } else {
                    $(".drawer").removeClass("on");
                }

                /*기타*/
                if (scroll >= 3840 && scroll <= 15030) {
                    $(".etc").addClass("on");
                } else {
                    $(".etc").removeClass("on");
                }

            /*디테일*/
            /*1. 스플래시 앤 메인*/
            if (scroll >= 4730 && scroll <= 15030) {
                $(".splash-and-main_wrap").addClass("on");
            } else {
                $(".splash-and-main_wrap").removeClass("on");
            }
            if (scroll >= 5777 && scroll <= 15030) {
                $(".mockup_laydownPhone").addClass("on");
            } else {
                $(".mockup_laydownPhone").removeClass("on");
            }
            
            
            /*2. 알람 앤 캘린더*/
            if (scroll >= 6895 && scroll <= 15030) {
                $(".alarm-and-calender_wrap").addClass("on");
            } else {
                $(".alarm-and-calender_wrap").removeClass("on");
            }
      
            /*3. 마이페이지 앤 채팅*/
            if (scroll >= 8434 && scroll <= 15030) {
                $(".mypage-and-chatting_wrap").addClass("on");
            } else {
                $(".mypage-and-chatting_wrap").removeClass("on");
            }
      
            /*4. 지도*/
            if (scroll >= 10010 && scroll <= 15030) {
                $(".maps_wrap").addClass("on");
            } else {
                $(".maps_wrap").removeClass("on");
            }
      
            /*5. 지도*/
            if (scroll >= 11823 && scroll <= 15030) {
                $(".row:last-of-type").addClass("on");
            } else {
                $(".row:last-of-type").removeClass("on");
            }
            
            /*아웃트로*/
            if (scroll >= 13113 && scroll <= 15030) {
                $("#outro").addClass("on");
            } else {
                $("#outro").removeClass("on");
            }
      

        });
});