jQuery(document).ready(function($) {
	$('.slide').hide();
	$('.slide').eq(0).fadeIn().addClass('currentImage');
	$('.thumb').eq(0).addClass('active');

	$('.thumb').click(function (e) {
		// alert( $(e.target).index() );
		var nextImage = $(e.target).index();
		$('.currentImage').fadeOut().removeClass('currentImage');
		$('.slide').eq(nextImage).fadeIn().addClass('currentImage');
		$('.active').removeClass('active');
		$('.thumb').eq(nextImage).addClass('active');
	});
	$('.next').click(function (e) {
		//find out which image is currently being shown. get its index
		var current = $('.currentImage').index();
		var nextImage = current + 1;
		if(nextImage >= $('.slide').length)
			nextImage = 0;
		
		$('.slide').eq(current).fadeOut().removeClass('currentImage');
		$('.slide').eq(nextImage).fadeIn().addClass('currentImage');
		$('.thumb').eq(current).removeClass('active');
		$('.thumb').eq(nextImage).addClass('active');
	});
	$('.previous').click(function (e) {
		//find out which image is currently being shown. get its index
		var current = $('.currentImage').index();
		var nextImage = current - 1;
		if(nextImage < 0 )
			nextImage = $('.slide').length -1;
		$('.slide').eq(current).fadeOut().removeClass('currentImage');
		$('.slide').eq(nextImage).fadeIn().addClass('currentImage');
		$('.thumb').eq(current).removeClass('active');
		$('.thumb').eq(nextImage).addClass('active');
	});
});