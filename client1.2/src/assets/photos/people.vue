<template>
  <div>
    <router-link to="/Gallery" class="navbar-brand text-black">Back</router-link>
    <div class="container text-center">
      <h2>People</h2>
      <img src="../photos/vines2.png" width="600" alt="">
    </div>

    <div class="images">
      <div class="container-fluid">
        <div class="row">

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group  src="./peopleimage/apr2003.jpg"    alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group  src="./peopleimage/bigfish.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group  src="./peopleimage/butch1.jpg"    alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/butch2.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/butch_goodbye.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/ginaRowe.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/grant_cabin.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/grants_up_2003.jpg" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./grantsCabinAug2008-2.jpg"   alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/LeftFork.jpg"   alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/lostDog.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/mechamcabin600w.jpg" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/RTbeaut_day.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail resize">
              <img v-img:group   src="./peopleimage/TamsSecretCase.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .resize{
    width: 100px;
    margin-left: 50px;
  }
  .images{
    padding-top: 20px;
  }
</style>
