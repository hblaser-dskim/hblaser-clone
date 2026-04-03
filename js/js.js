// JavaScript Document

//Roll
var ie_check = false;
$(function() {
    ie_check = jQuery.support < 9;
    main_init();                    //메인페이지 설정
});
function main_init() {
    //lifestyle
    if($("#life_slide").size() > 0) {
        $("#life_slide .slide").cycle({
            fx:"fade",                //에니메이션 방향
			speed:1000,                    //에니메이션 속도
			timeout:5000,                 //딜레이
            pause:false,
			slideResize: false,
            prev:$(".slide_wrap .slide_prev"),
            next:$(".slide_wrap .slide_next"),
        });
    }
	
	//LADIES intro
	if($("#ladies_intro_slide").size() > 0) {
        $("#ladies_intro_slide .ladies_intro_slide").cycle({
            fx:"fade",                //에니메이션 방향
			speed:500,                    //에니메이션 속도
			timeout:3000,
			delay:-1500,                //딜레이
            pause:false,
			slideResize:false,

        });
    }
	
	//MEN intro
	if($("#men_intro_slide").size() > 0) {
        $("#men_intro_slide .men_intro_slide").cycle({
            fx:"fade",                //에니메이션 방향
			speed:500,                    //에니메이션 속도
			timeout:5500,                //딜레이
            pause:false,
			slideResize:false,

        });
    }
	
	//ATHLETIC intro
	if($("#athletic_intro_slide").size() > 0) {
        $("#athletic_intro_slide .athletic_intro_slide").cycle({
            fx:"fade",                //에니메이션 방향
			speed:500,                    //에니메이션 속도
			timeout:5500,                //딜레이
            pause:false,
			slideResize:false,

        });
    }
	
	//LADIES main banner
	if($("#ladies_main_slide").size() > 0) {
        $("#ladies_main_slide .ladies_main_slide").cycle({
            fx:"fade",                //에니메이션 방향
			speed:1000,                    //에니메이션 속도
			timeout:5000,                //딜레이
            pause:true,
			slideResize:false,
			pager:'#ladies_main_nav',
        });
    }
}
