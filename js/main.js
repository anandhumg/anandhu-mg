$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

  // form submission 

  $("#submit-btn").click((e)=>{
	e.preventDefault()
   var fname = document.getElementById('fname').value;
   var lname = document.getElementById('lname').value;
   var subject = document.getElementById('subject').value;
   let flag =true;
   if(fname.length===0){
		  $("#fname").addClass("border border-danger");
		  $("#fname-invalid").show();
		  flag = false;
   } else {
		  $("#fname").removeClass("border border-danger");
		  $("#fname-invalid").hide();
	  }
	if(lname.length===0){
		  $("#lname").addClass("border border-danger");
		  $("#lname-invalid").show();
		  flag = false;
   } else {
		  $("#lname").removeClass("border border-danger");
		  $("#lname-invalid").hide();
	  }
	if(subject.length===0){
		  $("#subject").addClass("border border-danger");
		  $("#subject-invalid").show();
		  flag = false;
   } else {
		  $("#subject").removeClass("border border-danger");
		  $("#subject-invalid").hide();
	  }
   if(flag){
		$.ajax({
			url:"https://script.google.com/macros/s/AKfycbyq6kwuGaZSvmPcoRRHT-p7cUzrrmqt2FkhahYb9Dy0SobiljViq6ZDUvspT11pAzzx/exec",
			data:$("#submit-form").serialize(),
			method:"post",
			success:function (response){
			   $("#success-modal").modal('show');
				//window.location.href="https://google.com"
			},
			error:function (err){
			  $("#error-modal").modal('show');
			}
		});
	  }
	}) ;

