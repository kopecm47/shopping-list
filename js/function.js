$(document).ready(function () {

//define global variables
	var checkMark = '<span class="cross-off"></span>'
	var deleteMark = '<span class="delete"></span>'

//add items using enter
	function addItem(){
		$("#item").keyup(function(event){
			if(event.keyCode == 13) {
				postItem();
			}
		});
		$(document).on("click", "#add", function(){
			postItem();	
		});		
	}

	addItem();

//posting the item
function postItem(){

	var item = $("#item").val();
	var work = '<p class="full-width no-strike">' + checkMark + item + deleteMark + '</p>';
	$("#list").prepend(work);
	$('#item').val('');
}

//cross items off
function crossOff(){
	$('.cross-off').toggle(function(){
		$(this).closest('p').addClass("strike");
	}, function(){
		$(this).closest('p').removeClass("active");
	});
}

//clear list
	$(document).on("click", "#reset", function(){
		$("#list").empty();
	});

//delete list item
	$(document).on("click", ".delete", function(){
		$(this).closest('p').remove();
	});
//check off list items
	$(document).on("click", ".cross-off", function(){
	    if (!$(this).closest('p').hasClass('strike')) {
	        $(this).closest('p').addClass("strike");
	        $(this).siblings('.delete').addClass("alt-delete");
	        $(this).addClass("alt-cross-off");
	    }
	    else {
	        $(this).closest('p').removeClass("strike");
	        $(this).siblings('.delete').removeClass("alt-delete");
	        $(this).removeClass("alt-cross-off");
   		}
	});
});