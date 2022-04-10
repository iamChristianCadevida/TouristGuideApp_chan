
<!--@extends('layouts.weather')-->
<!DOCTYPE html>

<!-- Main Navigator -->
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><strong>TravelersGuideApp</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto"></ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="text" id="checkCity" value="Tokyo">
        <button class="btn btn-secondary " type="submit" id="checkWeather" onclick="goCheck();">Search</button>
      </form>
    </div>
  </div>
</nav>
<!-- End of Main Navigator -->
<!-- Start of Body -->
<div class="container-fluid" style="min-height: 100%;height: 100%;">
  <div class="row">
     <!-- Start of Right Side -->
     <div class="col-lg-4">
            <div class="card-body">
              <h4 class="card-title" id="City">Weather Forecast</h4>
              <div class="card border-primary mb-3" style="text-align:center;">
                  <div class="card-header" id="todayHeader"></div>
                      <div class="card-body">
                             <h4 class="card-title" id="todayTitle">Loading..</h4>
                             <p class="card-text" id="todayContent"></p>
                      </div>
              </div>
                  <div id="results" class=" card border-primary"></div>
            </div>
      </div>
    <!-- End of Right Side -->
    <!-- Start of Left Side -->
      <div class="col-lg-8">
          <div class="card-body" >
              <h4 class="card-title" id="City">Nearby Venue</h4>
                 <!--category-->
              <div class="btn-group col-lg-9 p-2" role="group" aria-label="Button group with nested dropdown">
              Venue Category: <button type="button" class="btn btn-primary"  style="margin-left:10px;" id="currentCategory">------</button>
                  <div class="btn-group" role="group" >
                  <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                  <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" id="categoryList" style="overflow-y: scroll; height:300px;color:white;"></div>
                </div>   
              </div>
                  <!--category-->
               

              <div id="my-map" style="width:100%;height:600px;" class="mw-100"></div>
          </div>
              <div id="resultsPlaces"></div>
        </div>
    <!-- End of Left Side -->
   
  </div>  



</div>
<!-- End of Body -->
<!-- Footer -->
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4">
    


    <!-- Section: Text -->
    <section class="mb-4">
      <p>
       Created by : Christianex J. Cadevida || Purpose: Assessment || BizmatesPH Applicant
      </p>
    </section>
    <!-- Section: Text -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
      



 
</html>
 