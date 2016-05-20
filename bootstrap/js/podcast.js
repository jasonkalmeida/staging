
function pgScroll(id)
{
	
	
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 400);
	
}

function showScroll() {
    $('html, body').animate({
        scrollTop: $("#show").offset().top
    }, 400);
};

function aboutScroll() {

	    $('html, body').animate({
	        scrollTop: $("#about").offset().top
	    }, 400);

};

function contactScroll() {

	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 400);
};



function subscribed()
{
}


$(function() {
  $( "#button" ).click(function() {
	  
	  //alert(document.getElementById("email").className);
	  
	  
	  var el = document.getElementById("button");
	     if (el.innerHTML == "Click for Awesomeness") 
	     {
	         el.innerHTML = '<div class="spinner"></div>';
	     }
		 
      setTimeout(function() {
        
		  var el = document.getElementById("button");
		     if (el.innerHTML == '<div class="spinner"></div>') 
		     {
				 if(document.getElementById("email").className == 'form-control mce_inline_error')
				 {
					 el.innerHTML = '&#xf00d;';
					 $( "#button" ).addClass( "change-error", 450);
					 $('#email').attr('placeholder',' Invalid email. Please try again. ');
					 
					 setTimeout(function() {
						 
						 $( "#button" ).removeClass( "change-error" );
						 el.innerHTML = 'Click for Awesomeness';
						 $('#email').attr('placeholder',' Email... ');
						 
						 
						 
			         }, 4250 );
						 
					 
				 }
				 else if(document.getElementById("email").className == 'form-control valid')
				 {
					 el.innerHTML = '&#xf00c;';
					 $( "#button" ).addClass( "change", 450);
					 $('#email').attr('placeholder','Thank you for subscribing!');
					 
					 
				 }
		     }
			 
			 
		    
		
         }, 3250 );


	//$( "#button" ).removeClass( "btn btn-default" );
	
   
	
    //$( "#button" ).addClass( "change", 450);
	//callback();
  });
 
/*
    function callback() {
		
	    
      setTimeout(function() {
        $( "#button" ).removeClass( "change" );
		$( "#button" ).addClass( "btn btn-default" );
		
  	  var el = document.getElementById("button");

  	       el.innerHTML = 'SUBMIT';
		
      }, 4250 );
    }*/
  });