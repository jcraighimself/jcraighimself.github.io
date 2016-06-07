// Check Off Specific ToDos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

// Deleting todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();	
	});
	event.stopPropagation(); // Stops event bubbling
})

// Adding todos
$("input[type='text'").on("keypress", function(event){
	if (event.which === 13) {
		var todoText = $(this).val(); // Grab new toDo text from Input
		// Create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
})

// Toggling to Input
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
})