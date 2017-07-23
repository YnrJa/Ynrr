$(document).ready(presupuesto);

function presupuesto(){
	$("#simp").click(function(){
            $('.simple').animate({
				marginLeft: '0%',   
			});
            $('.avanzado').animate({
				marginLeft: '-200%',
			});
            $('.personalizado').animate({
				marginLeft: '-200%',
			});
	});
}

	$("#avan").click(function(){
            $('.avanzado').animate({
				marginLeft: '0%',
			});
            $('.simple').animate({
				marginLeft: '-200%',
			});
            $('.personalizado').animate({
				marginLeft: '-200%',
			});
	});

	$("#perso").click(function(){
            $('.avanzado').animate({
				marginLeft: '-200%',
			});
            $('.simple').animate({
				marginLeft: '-200%',
			});
            $('.personalizado').animate({
				marginLeft: '0%',
			});
	});

    $(".dise").click(function(){
        $('.avanzado').animate({
				marginLeft: '-200%',
                fontSize: 'xx-small',
			},1000);
            $('.simple').animate({
				marginLeft: '-200%',
			},1000);
            $('.personalizado').animate({
				marginLeft: '-200%',
			},1000);
    
    });

