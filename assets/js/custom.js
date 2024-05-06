jQuery(
    (function ($) {
        "use strict";
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 50) {
                $(".main-nav").addClass("menu-shrink");
            } else {
                $(".main-nav").removeClass("menu-shrink");
            }
        });
        jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
        $(".banner-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
        });
        $(".service-slider").owlCarousel({
            center: true,
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"],
            responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
        });
        $(document).ready(function () {
            $(".minus").on("click", function () {
                var $input = $(this).parent().find("input");
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $(".plus").on("click", function () {
                var $input = $(this).parent().find("input");
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });
        // $(".popup-youtube").magnificPopup({ disableOn: 320, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false });
        $("#Container").mixItUp();
        $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: ".slider-nav",
            autoplay: true,
            centerPadding: "0px",
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bx bx-left-arrow-alt' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='bx bx-right-arrow-alt' aria-hidden='true'></i></button>",
        });
        $(".slider-nav").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
            centerPadding: "0px"
        }); 
        $(".modal a")
            .not(".dropdown-toggle")
            .on("click", function () {
                $(".modal").modal("hide");
            });
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $(".accordion a").on("click", function (j) {
            var dropDown = $(this).closest("li").find("p");
            $(this).closest(".accordion").find("p").not(dropDown).slideUp();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find("a.active").removeClass("active");
                $(this).addClass("active");
            }
            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });
        let getDaysId = document.getElementById("days");
        if (getDaysId !== null) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;
            let countDown = new Date("July 30, 2021 00:00:00").getTime();
            setInterval(function () {
                let now = new Date().getTime();
                let distance = countDown - now;
                (document.getElementById("days").innerText = Math.floor(distance / day)),
                    (document.getElementById("hours").innerText = Math.floor((distance % day) / hour)),
                    (document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)),
                    (document.getElementById("seconds").innerText = Math.floor((distance % minute) / second));
            }, second);
        }
        jQuery(window).on("load", function () {
            jQuery(".loader").fadeOut(500);
        });
        $("body").append('<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow-alt"></i></div>');  
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $("#toTop").fadeIn();
            } else {
                $("#toTop").fadeOut();
            }
        });
        $("#toTop").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 900);
            return false;
        });

        
    })(jQuery)
);