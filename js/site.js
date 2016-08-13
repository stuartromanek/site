$(function(){
	var $body = $('body');
	var $images = $('.work li');
	var z = 1;

	$images.each(function(){
		var $this = $(this);
		var direction = Math.random();
		var distance = Math.random() * (30 - 10) + 10;
		var push = Math.random() * (3 - 1) + 3;


		if (direction > 0.5) {
			$this.css({ 'margin-left': '-' + distance.toString() + '%'});
		} else {
			$this.css({ 'margin-right': '-' + distance.toString() + '%'});
		}
		$this.find('img').css('margin-top', push + '%');
	});

	$images.draggabilly();

	$images.on( 'dragStart', function( event, pointer ) {
		$(this).css('z-index', z);
		z++;
	})

	// var $draggable = $('.draggable').draggabilly();
});