



$(document).ready(function () {

    $(".loding").fadeOut(1000, function () {

        $("body").css("overflow", "auto")
    })


// // wow

 new WOW().init();




   // navbar

   $(window).scroll(function () {

    let scrollValue = $(window).scrollTop();

    if (scrollValue >= 25) {

        $(".navbar").css({
            backgroundColor: "#350a4f",
            transition: "all 0.5s",
            boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.06)",
        })
        $(".navbar-collapse").css({
            backgroundColor: "#350a4f",
            transition: "all 0.5s",
        })

    }
    else {
        $(".navbar").css({
            backgroundColor: " #350a4f",
            transition: "all 0.5s",
        })
        $(".navbar-collapse").css({
            backgroundColor: "#350a4f",
            transition: "all 0.5s",
        })

    }
})



// sec nav

$(".my-icon2").click(function () {


    let outerW = $(".black-div").outerWidth()
    let left = $(".my-nav").css("left")

    if (left == "0px") {


        $(".my-nav").animate({

            left: -outerW
        }, 1000);



        $(".black-div li").animate({
            opacity: "0",
            paddingTop: "500px"
        }, 1100);


        $(".my-icon2").html(`<i class="fas fa-bars"></i>`);

    }
    else {

        $(".my-nav").animate({

            left: 0
        }, 1000);









        $(".black-div li").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1100);


        $(".my-icon2").html(`<i class="fas fa-times"></i>`);

    }



})
















//     // links with smotheeeeeeeeeeeee

    $(".nav-link").click(function () {

        let secName = $(this).attr("href");
        console.log(secName)

        let scrollToSec = $(secName).offset().top;

        $("body,html").animate({
            scrollTop: scrollToSec

        }, 1000);

    })




})

















