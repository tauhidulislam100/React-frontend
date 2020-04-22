jQuery(function($) {

	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).parent().find(".fa").addClass("fa-angle-up");
		$(this).parent().find(".fa").removeClass("fa-angle-down");
	
	  }).on('hide.bs.collapse', function(){
		$(this).parent().find(".fa").removeClass("fa-angle-up");
		$(this).parent().find(".fa").addClass("fa-angle-down");
	  });

});

