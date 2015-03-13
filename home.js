$(function(){

$('#circle1').bind('click',function(){

$('html,body').animate({scrollTop:0},800);
});


$('#circle2').bind('click',function(){
console.log('done');
var window_height = $(window).height();
$('html,body').animate({scrollTop:window_height},800);
});

var testimonial_index = 0;

var clients_interval = setInterval(function(){
show_next_testimonial();
},4000);


function show_next_testimonial(){
if(testimonial_index == 5){
testimonial_index = 1;
}else{
testimonial_index++;
}
$('.clients_testimonials_item').removeClass('visible');
$('.clients_testimonials_item:nth-child('+testimonial_index+')').addClass('visible');
}


$('.clients_testimonials_logo').bind('click',function(){
clearInterval(clients_interval);
$('.clients_testimonials_item').removeClass('visible');
var index = $(this).attr('data-message-index');
$('.clients_testimonials_item:nth-child('+index+')').addClass('visible');
});



$('.overlay').bind('click',function(){

$('.overlay').removeClass('visible');
$('.menu_container').removeClass('visible');

});

$('.slide_nav_container').bind('click',function(e){
e.stopPropagation();
$('.container').addClass('hide');
$('body').addClass('overlay_visible');
});


$('.menu_container_close').bind('click',function(){

$('body').removeClass('overlay_visible');
$('.container').removeClass('hide');
});



function show_second_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '116px'
});

setTimeout(function(){
show_third_text();
},3000);
}

function show_third_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '232px'
});

setTimeout(function(){
show_fourth_text();
},3000);
}

function show_fourth_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '348px'
});

setTimeout(function(){
show_first_text();
},3000);
}

function show_first_text(){
$('.slide_text_inner_words_inner_container').css({
'top' : '0px'
});

setTimeout(function(){
show_second_text();
},3000);
}

setTimeout(function(){

$('.slide_sentence').addClass('show_sentence_start');

setTimeout(function(){
$('.slide_sentence').removeClass('show_sentence_start');
$('.slide_text_inner_words_inner_container').addClass('visible');
show_first_text();
},3500);

},300);


$('.morph_container').bind('click',function(){

var works_index = $(this).attr('data-works-index');
console.log(works_index);
$('#morph_div_container'+works_index).addClass('show_morph');

});



$('.morph_div_close_container').bind('click',function(){

$('.morph_div_container').removeClass('show_morph');
});


$('.start_your_project_container').bind('click',function(){

$('.project_info_container').addClass('show_project');

});


$('.project_info_close').bind('click',function(){

$('.project_info_container').removeClass('show_project');
});

var show_team = false;

setInterval(function(){

var scrolled = $("body").scrollTop();
console.log(scrolled);
if(scrolled >= 600){
show_team = true;
show_timeline_elements(scrolled);
}

},100);

$(window).scroll(function(){

if(show_team == true){
$('#our_team_heading').addClass('show_team');
$('.team_member_container').addClass('show_team');
}

});


function flip_works(){

}

function show_timeline_elements(scroll_top){

if(scroll_top > 2850){

if(scroll_top > 2850 && scroll_top < 3000){

show_timeline_ball('timeline_ball1');
show_timeline_desc('timeline_event_desc1');

}

if(scroll_top > 3000 && scroll_top < 3150){

show_timeline_ball('timeline_ball2');
show_timeline_desc('timeline_event_desc2');

}

if(scroll_top > 3150 && scroll_top < 3300){

show_timeline_ball('timeline_ball3');
show_timeline_desc('timeline_event_desc3');

}


if(scroll_top > 3300 && scroll_top < 3450){

show_timeline_ball('timeline_ball4');
show_timeline_desc('timeline_event_desc4');

}


if(scroll_top > 3450 && scroll_top < 3600){

show_timeline_ball('timeline_ball5');
show_timeline_desc('timeline_event_desc5');

}


}

}


function show_timeline_ball(ball_id){
$('#'+ball_id).addClass('visible');
}

function show_timeline_desc(desc_id){
$('#'+desc_id).addClass('visible');
}


});