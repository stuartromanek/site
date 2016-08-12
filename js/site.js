var zIndex = 1;
var $slides = $('[data-slide]');
var $controls = $('[data-projects]');
var $draggable = $('[data-slide]').draggabilly();
var $window = $(window);
var vh = $window.height() * 0.8;
var vw = $window.width() * 0.8;

$draggable.on( 'dragStart', function( event, pointer, moveVector ) {
	$(this).css('z-index', zIndex);
	zIndex++;
})

$slides.each(function(){
	var $self = $(this);
	// $self.
	$(this, 'li').css({
		top: Math.floor(Math.random() * vh) + 1  + 'px',
		left: Math.floor(Math.random() * vw) + 1  + 'px'
	})
});

render = function() {
	$slides.removeClass('active');
	$controls.find('input:checked').each(function(){
		var project = $(this).attr('data-project');
		$slides.filter('[data-slide=' + project + ']').addClass('active');
	});
}


$controls.find('input').on('change', function() {
	render();
});

render();