$(function(){$(window).scroll(function(){var e=$(window).scrollTop(),n=$(".header");n.height()<=e?n.addClass("fixed"):n.removeClass("fixed")}),$(window).on("load resize",function(){resizeBr(wdSize=$(window).outerWidth()),initSwiper(wdSize),($(".header").hasClass("mobile")?moFamily:pcFamily)()}),$(".user_wrap .ico.menu").on("click",function(){($(this).hasClass("close")?menuClose:menuOpen)(wdSize)}),$(".all_menu .close_btn, .mobile_menu_bg").on("click",function(){menuClose(wdSize)}),$(".user_wrap .user").on("click",function(){$(".user_menu").show()}),$("html").on("click",function(e){$(e.target).hasClass("user")||$(".user_menu").hide(),$(e.target).hasClass("tip_btn")||$(".tip_box").removeClass("open")});navigator.platform&&"win16|win32|win64|macintel|mac|".indexOf(navigator.platform.toLowerCase())<0&&$(".not_ie").hide(),$(document).on("click",".all_menu_nav .menu_depth01 > li > a",function(){if(wdSize<=mbSize&&0<$(this).siblings(".menu_depth02").find("li").length)return $(this).siblings(".menu_depth02").slideToggle(300),$(".menu_list > li > a").not(this).siblings(".menu_depth02").slideUp(300),!1}),$(".tab_wrap").each(function(){$(this).find(".tab_ul li:eq(0)").addClass("active"),$(this).find(".tab_ul li").on("click",function(){var e=$(this).index(),e=$(this).parents(".tab_wrap").find(".tab_con").eq(e);$(this).addClass("active").siblings("li").removeClass("active"),e.fadeIn().siblings("div").hide()})}),$(".pop_mask").on("click",function(){popClose()}),$(".tip_btn").on("click",function(){$(this).parents(".tip_box").addClass("open")}),notUseIe()});var wdSize,mbSize=1024,mySwiper=void 0;function initSwiper(e){try{var n;e<=900?($(".menu_nav").addClass("m_nav"),$(".m_nav").removeClass("menu_nav"),n=new Swiper(".m_nav",{slidesPerView:"auto",initialSlide:0,spaceBetween:35,centeredSlides:!1,slideToClickedSlide:!1,loopAdditionalSlides:0,grabCursor:!1,observer:!0,observeParents:!0,resizeObserver:!1,freeMode:!0})):901<e&&null!=n&&($(".m_nav").addClass("menu_nav"),$(".menu_nav").removeClass("m_nav"),n.destroy(),n=void 0)}catch(e){}}function resizeBr(e){mbSize<e?($(".header").removeClass("mobile fixed"),$(".all_menu").css({display:"none",left:"0"}),$(".mobile_menu_bg, .log_btn").hide(),$(".ico.menu").removeClass("close"),$(".menu_depth02").show()):($(".header").addClass("mobile fixed"),$(".all_menu").css({display:"inline",left:"-100%"}),$(".user_menu").hide())}function menuOpen(e){mbSize<e?$(".all_menu").stop().slideDown():($(".mobile_menu_bg").fadeIn(),$(".all_menu").animate({left:"0"}),$(".log_btn").animate({left:"34px"}),$(".ico.menu").addClass("close"),scrollDisable())}function menuClose(e){mbSize<e?$(".all_menu").stop().slideUp():($(".mobile_menu_bg").fadeOut(),$(".all_menu, .log_btn").animate({left:"-100%"}),$(".ico.menu").removeClass("close"),scrollAble())}function layerPopOpen(e){$("."+e).show()}function popOpen(e){$(".pop_wrap").eq(e).show()}function popClose(){$(".pop_wrap").hide()}function samplePop(e){window.open(["../popup/pop_GreetingSearch01.html","../popup/pop_GreetingSearch02.html"][e],"인사말 샘플 팝업","width=602px,height=680px,top=100px,left=200px,scrollbars=yes")}function detailFull(){window.open("../popup/pop_detail.html")}function cgMoneyPop(e){window.open(["../manage/manage_cg_money_setting.html","../manage/m_manage_cg_money_setting.html"][e],"축의금 설정 팝업")}function windowPopClose(){window.close()}function fileUpload(){window.open("https://www.barunsoncard.com/order/common/pop_Fileupload.asp?input_name=upfile1&index=&up_dir=cs&order_seq=","파일 업로드","width=602px,height=680px,top=100px,left=200px,scrollbars=yes")}function scrollDisable(){$("body").addClass("scroll_off").on("scroll touchmove mousewheel",function(e){e.preventDefault()})}function scrollAble(){$("body").removeClass("scroll_off").off("scroll touchmove mousewheel")}function toast(e,n,i){var e=$(e).attr("id"),t=$("<p>"+n+"</p>");$("#"+e).is(":checked")&&($(".toast").html(t).show(),t.slideToggle(100,function(){return setTimeout(function(){t.fadeOut(function(){$(this).remove(),$(".toast ").css("bottom","")})},i),!1}),$(".toast").stop().animate({bottom:"5%"}))}function textEllipsis(e,n){e=$(e);0<e.length&&e.each(function(){var e=n;$(this).each(function(){$(this).text().length>=e&&$(this).text($(this).text().substr(0,e)+"...")})})}function notUseIe(){var e=navigator.userAgent.toLowerCase();"Netscape"==navigator.appName&&-1!=e.indexOf("trident")||-1!=e.indexOf("msie")?$(".not_ie").show():$(".not_ie").hide()}function closeIe(){$(".not_ie").fadeOut()}function pcFamily(){$(".family_wrap .family").on("mouseenter",function(){$(this).addClass("on")}),$(".family_list, .header").on("mouseleave",function(){$(".family_wrap .family").removeClass("on")})}function moFamily(){$(".family_wrap .family").on("click",function(){$(this).toggleClass("on")})}$("#setInpPwd").keyup(function(){$(this).val()?$("#setPwd").attr("class","btn type03"):($("#setPwd").attr("class","btn type00"),$("#setPwd").attr("href","javascript:;"))}),$(".pwd_eyes").click(function(){$(".pwd_box").toggleClass("active"),1==$(".pwd_box").hasClass("active")?$(this).find(".fa-eye").attr("class","fas fa-eye-slash").parents(".pwd_box").find(".input_pwd").attr("type","text"):$(this).find(".fa-eye-slash").attr("class","fas fa-eye").parents(".pwd_box").find(".input_pwd").attr("type","password")});