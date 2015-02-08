<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Angad Dubey - Developer, Designer.</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    

    <!--Vendor Styles-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

    <!-- CUSTOM STYLES -->
    <link rel="stylesheet" href="./public/css/styles.css">

    <!-- Vendor JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</head>
<body>

<!-- header -->
<div class="container-fluid header-home">


  <div class="row">
  
    <div class="col-md-12">

      <h2 class="text-left">Angad Dubey</h2>
      


    </div> <!-- EO col-md-12 -->

  </div> <!-- EO .row -->
    
</div> <!-- EO .container-fluid -->

<script type="text/javascript">

$(function() {

  //get window height
  var window_height = $(window).height();

  console.log(window_height);

  //set window height to header
  $(".header-home").css({'height': window_height +'px'}); 


}); //DOM READY  

</script>