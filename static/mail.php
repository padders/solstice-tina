<?php

if($_POST['name'] !='' && $_POST['email'] !='' && $_POST['subject'] !=''  && $_POST['message']!='' && $_POST['telephone']==''){ 
  $to = 'tom@rustymonkey.com';
  $subject = 'Contact Form';
  $message = '
        <html>
            <head>
                <title>Call me back</title>
            </head>
            <body>
                <p><b>Name:</b> '.$_POST['name'].'</p>
                <p><b>Name:</b> '.$_POST['email'].'</p>
                <p><b>Name:</b> '.$_POST['subject'].'</p>
                <p><b>Name:</b> '.$_POST['message'].'</p>
            </body>
        </html>'; 
  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: Site <info@braemore.rmclients.co.uk/>\r\n"; 
$var = mail($to, $subject, $message, $headers);

  echo json_encode(array('status' => 'success'));
} else {
  echo json_encode(array('status' => 'error'));
}
?>