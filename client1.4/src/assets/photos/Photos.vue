<template>
  <div>
    <div class="container text-center">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
      <span class="date text-center"><h4 class="dates">Today's Date: {{moment(date).format('MM/DD/YYYY')}}</h4></span>
      <h2>Sunridge Photo Gallery</h2>
      <img src="./arrow17.png" width="600" alt="">
    </div>
    </div>
    </div>

    <div class="images">
  <div class="container link">
  <div class="row">
    <div class="photo">
    <div class="col-md-4">
      <div class="thumbnail links">
        <router-link to="Home/Gallery/winter">  <img class="image" src="./photo9.jpg"  alt=""></router-link>
        <div class="caption">
          <p class="text-center">Winter</p>
        </div>
      </div>
    </div>



    <div class="col-md-4">
      <div class="thumbnail links">
        <router-link to="Home/Gallery/summer">  <img class="image" src="./photo4.jpg"  alt=""></router-link>
        <div class="caption">
          <p class="text-center">Summer</p>
        </div>
      </div>
    </div>

    <!--div class="col-md-3">
      <div class="thumbnail links">
        <router-link to="Home/Gallery/nature">  <img class="image" src="./photo3.jpg"  alt=""></router-link>
        <div class="caption">
          <p class="text-center">Nature</p>
        </div>
      </div>
    </div-->

    <div class="col-md-4 links">
      <div class="thumbnail">
        <router-link to="Home/Gallery/people">  <img class="image" src="./grantsCabinAug2008-2.jpg"   alt=""></router-link>
        <div class="caption">
          <p class="text-center">People</p>
        </div>
      </div>
    </div>
    </div>


    </div>
  </div>
  </div>
  </div>
</template>

