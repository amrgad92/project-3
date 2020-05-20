$("#home").click(function()
{
    $("html , body").animate( {scrollTop:0} , 1000)
})


let parent2 = $(".parent2").offset().top
$("#about").click(function(){
    $("html , body").animate({scrollTop: parent2} , 1000)
})


let parent3 = $(".parent3").offset().top
$("#services").click(function(){
    $("html , body").animate({scrollTop:parent3} , 1000)
})

let num2 = $(".num2").offset().top
$("#portfolio").click(function(){
    $("html , body").animate({scrollTop: num2 } , 1000)
})


let num4 = $(".num4").offset().top
$("#blog").click(function()
{
    $("html , body").animate({scrollTop: num4}, 1000)
})

let section6 = $("#section6").offset().top
$("#contact").click(function(){
    $("html , body").animate({scrollTop:section6} , 1000)
})



$(".arrow").click(function()
{
    $("html , body").animate({scrollTop:0} , 1000)
})

$(window).scroll(function(){
    let amr = $(window).scrollTop()

    if(amr > parent2)
    {
        $(".arrow").fadeIn(1000)
    }
    else
    {
        $(".arrow").fadeOut(1000)
    }
})