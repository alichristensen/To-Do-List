//check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	}); 
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event) {
	if (event.which === 13){
		//grab todo text
		var todoText = $(this).val(); 
		$(this).val("");
		//create new li and add todo text
		$("ul").append("<li><span><id class='fa fa-trash'></id></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle();
})