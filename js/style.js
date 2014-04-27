/**
 * Created by AimeeChan on 2014/4/24.
 */
$(function(){
    var lis = $('.navigation ul li');
    for(var i = 0; i < lis.length; i++){
        var li = lis[i];
        var liW = $(li).width();
        var liH = $(li).height();
        var liAH =  $(li).children('a').height();
        var liAW = $(li).children('a').width();
        var setLeft = (liW - liAW) / 2;
        var setTop = (liH - liAH) /2;

        $(li).children('a').css('left',setLeft);
        $(li).children('a').css('top',setTop);

        $(li).click(function(){
            $('.navigation ul li').removeClass('nav-select');
            $(this).addClass('nav-select');
        })
    }
//    var offLeft = (window.innerWidth- $('.main-container').width()) / 2 + "px";
//    $('.main-contenter').css("margin-left",offLeft);
    var w1 = $('.left-container-2-content').width();
    var w2 = $('.left-container-2-header').width();
    var ww =( w2-w1 ) /2;
    console.log("w1: " + w1+"\n" + "w2: " + w2+ "\n"+"ww: "+ww);
    $('.left-container-2-content').css({'margin-left': ww,'margin-right': ww});
})
