

$(document).ready(function(){
  $(".bg-gris").click(function(){
	$(this).append("<p> more information www.flatness.com</p>");
     $("p").css("color","white");

    });
});

$(document).ready(function(){
  $("#aboutme").hover(function(){
	$(this).slideToggle("slow");

    });
});

$(document).ready(function(){
	$("#search").mouseenter(function(){
		$(this).css("background-color","#F5F5DC");
	});

	$("#search").mouseout(function(){
		$(this).css("background-color","#1B0A2A");
	});
});

$(document).ready(function(){
  $("#titulo").hover(function(){

  $(this).css("color" , "#1B0A2A");
});
});

