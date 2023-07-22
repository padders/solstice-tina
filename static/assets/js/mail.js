/*$(function () {    
    $("#contact-form").submit(function (e) {
      e.preventDefault();
   
      var form_data = $(this).serialize(); 
      $.ajax({
        type: "POST", 
        url: "mail.php",
        dataType: "json", // Add datatype
        data: form_data
      }).done(function (data) {
          if(data.status=='sucess')
          {
            console.log(data);
            $( "#mail-success" ).show( "slow" );
          }
          else if(data.status=='error')
          {
            console.log(data);
            $( "#mail-fail" ).show( "slow" );
          }
        
      }).fail(function (data) {
          console.log(data);
          $( "#mail-fail" ).show( "slow" );
      });
    }); 
  });*/