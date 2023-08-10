$(document).ready(function () {

    $(".loding").fadeOut(1000, function () {

        $("body").css("overflow", "auto")
    })







    new WOW().init();





    
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








})
