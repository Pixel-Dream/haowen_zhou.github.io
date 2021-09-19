
function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {
            callback();
            return;
        }
        else {
            setTimeout(function () {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}

// initialize

document.getElementById("myScrollspy").style.top= document.documentElement.clientHeight/3 +"px";
document.getElementById("section1").style.height=document.documentElement.clientHeight*0.25+"px";
console.log("padding-top:"+document.documentElement.clientHeight +"px;");
$("#myScrollspy").hide();
$("#sideline-bg").hide();
//smooth scroll
$(".nav-link").click(function(){
    var href = $(this).attr("href");
    var pos = $(href).offset().top;
    $("html,body").animate({scrollTop: pos}, 400);
    return false;
});
//scroll listening
$(window).scroll(function() {
    var windowHeight=document.documentElement.clientHeight;
    var Scroll = $(document).scrollTop(); //滚动高度
    //side or btm
    document.getElementById("btmline").style.width = Scroll/(document.body.scrollHeight-windowHeight)*100+"%";
    //document.getElementById("sideline").style.height = (Scroll-windowHeight)/(document.body.scrollHeight-2*windowHeight)*windowHeight+"px";
    if((Scroll+30)>windowHeight){ $("#sideline-bg").fadeIn();$("#sideline").fadeIn();}
    else {$("#sideline-bg").fadeOut();$("#sideline").fadeOut();}
    if(Scroll>windowHeight*0.25){
        $("#myScrollspy").fadeIn();
        document.getElementById("navbar").style.background="rgba(39,39,39,1)";
        document.getElementById("navbar").style.height="30px";
        $(".slopingside").css("marginTop","7px");
        $(".dropdown").css("padding","2px 15px 4px 15px");
        $(".navbar-links").css("top","30px");
        document.getElementById("navbar-teamName").style.marginTop="2px";
        document.getElementById("navbar-logo").style.height="30px";
        document.getElementById("navbar-logo").style.width="40px";
        document.getElementById("navbar-top").style.height="30px";
    }else {
        document.getElementById("navbar").style.background="linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%)";
        document.getElementById("navbar").style.height="60px";
        $("#myScrollspy").fadeOut();
        $(".dropdown").css("padding","18px 15px");
        $(".slopingside").css("marginTop","23px");
        $(".navbar-links").css("top","60px");
        document.getElementById("navbar-teamName").style.marginTop="20px";
        document.getElementById("navbar-logo").style.height="75px";
        document.getElementById("navbar-logo").style.width="100px";
        document.getElementById("navbar-top").style.height="75px";
    }

})