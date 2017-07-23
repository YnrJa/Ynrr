$(document).ready(main);

var contador = 1;

function main(){
	$(".menu_bar").click(function(){
		if(contador == 1){
			$('nav').animate({
				left: '8%'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});
    
}

$(document).ready(desarrollo);

function desarrollo(){
	$("#inicio").click(function(){
            $('.divinicio').animate({
				left: '0%',
			}, 200);
            $('.divdesarrollo').animate({
				left: '-200%',
			}, 0);
            $('.divpresupuesto').animate({
				left: '-200%',
			}, 0);
            $('.divcontactenos').animate({
				left: '-200%',
			}, 0);
	});
}

	$("#desarrollo").click(function(){
            $('.divinicio').animate({
				left: '-200%',
			}, 0);
            $('.divdesarrollo').animate({
				left: '0%',
			}, 200);
            $('.divpresupuesto').animate({
				left: '-200%',
			}, 0);
            $('.divcontactenos').animate({
				left: '-200%',
			}, 0);
	});

	$("#presupuesto").click(function(){
            $('.divinicio').animate({
				left: '-200%',
			}, 0);
            $('.divdesarrollo').animate({
				left: '-200%',
			}, 0);
            $('.divpresupuesto').animate({
				left: '0%',
			}, 200);
            $('.divcontactenos').animate({
				left: '-200%',
			}, 0);
	});

	$("#contactenos").click(function(){
            $('.divinicio').animate({
				left: '-200%',
			}, 0);
            $('.divdesarrollo').animate({
				left: '-200%',
			}, 0);
            $('.divpresupuesto').animate({
				left: '-200%',
			}, 0);
            $('.divcontactenos').animate({
				left: '0%',
			}, 200);
	});

