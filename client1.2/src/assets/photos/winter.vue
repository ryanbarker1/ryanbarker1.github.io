<template>
  <div>
    <router-link to="/Gallery" class="navbar-brand text-black">Back</router-link>
    <div class="container text-center">
      <h2>Winter</h2>
      <img src="../photos/vines2.png" width="600" alt="">
    </div>

    <div class="images">
    <div class="container-fluid">
      <div class="row">

        <div class="col-xs-12 col-sm-4">
        <div class="thumbnail resize">
          <img v-img:group  src="./winterimage/altTAYLORdeer2.jpg"  width="500px;" height="500px;" alt="">
        </div>
      </div>

        <div class="col-xs-12 col-sm-4 ">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/altTAYLORdeer3.jpg"  width="500px;" height="500px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/bf_apr_2005.jpg"  width="450px;" height="450px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/bf_coyote1.jpg"   width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/bf_coyote2.jpg"  width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/bf_coyote3.jpg"  width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/BFbadger.jpg"  width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/BFpowd_mtn_sf.jpg"  width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/BFstill_winter.jpg"  width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group   src="./winterimage/BFwatersign.jpg"  width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group  src="./winterimage/BFwntr_rd.jpg"  width="365px;" height="285px;" alt="">
          </div>
        </div>

        <div class="col-xs-12 col-sm-4">
          <div class="thumbnail resize">
            <img v-img:group  src="./winterimage/BF-LookingDownLHF-Jan2017med.jpg"  width="365px;" height="285px;" alt="">
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

</style>
