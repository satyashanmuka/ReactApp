/*
Author: TryCatch Classes
URL: http://www.trycatchclasses.com/
*/

$('document').ready(function()
{ 
     /* validation */
	 $("#shn_form_register").validate({
      rules:
	  {
		firstname: {
			required: true,
		},
		/*lastname: {
			required: true,
		},*/
		email: {
        	required: true,
        email: true
        },
        phone:{
        	required:true,
        	number: true,
        	minlength:10,
        	maxlength:10
        },
	   },
       messages:
	   {
        firstname:{
            required: "Enter Name"
        },
     	/*lastname:{
      		required: "Enter Lastname"
     	},*/
        email: {
        	required: "Enter Email Address",
        	email: "Enter Valid Email Address",
   		},
   		phone:{
           required: "Enter Phone Number"
        },
    }
	  /* submitHandler: submitForm	*/
       }); 

        $("#shn_form_register_mobile").validate({
      rules:
	  {
		firstname: {
			required: true,
		},
		/*lastname: {
			required: true,
		},*/
		email: {
        	required: true,
        email: true
        },
        phone:{
        	required:true,
        	number: true,
        	minlength:10,
        	maxlength:10
        },
	   },
       messages:
	   {
        firstname:{
            required: "Enter Name"
        },
     	/*lastname:{
      		required: "Enter Lastname"
     	},*/
        email: {
        	required: "Enter Email Address",
        	email: "Enter Valid Email Address",
   		},
   		phone:{
           required: "Enter Phone Number"
        },
    }
	  /* submitHandler: submitForm	*/
       }); 
	   /* validation */
	   
	   /* login submit */
	   function submitForm()
	   {		
			var data = $("#shn_form_register").serialize();
				
			$.ajax({
				
			type : 'POST',
			url  : 'shnlogin_process.php',
			data : data,
			beforeSend: function()
			{	
				$("#error").fadeOut();
				$("#btn-login").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; sending ...');
			},
			success :  function(response)
			   {						
					if(response=="ok"){
									
						$("#btn-login").html('<img src="btn-ajax-loader.gif" /> &nbsp; Signing In ...');
						setTimeout(' window.location.href = "index.php"; ',4000);
					}
					else{
									
						$("#error").fadeIn(1000, function(){						
				$("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+' !</div>');
											$("#btn-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Sign In');
									});
					}
			  }
			});
				return false;
		}
	   /* login submit */
});