$(document).ready(function(){
	$('.dragable').draggable({
		drag: function(event, ui){
			jomblo = $('#jomblo');
			cewek = $('#cewek');
			
			xjomblo = jomblo.position().left;
			xcewek = cewek.position().left;
			
			xjarakjomblocewek = Math.abs(xjomblo - xcewek);
			jarakmax = 120;
			
			if((xjarakjomblocewek <= jarakmax)){
				cewek.animate({
					left: "+=30"
				}, 10);
			}
		}
	});
});