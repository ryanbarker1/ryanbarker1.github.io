<template>
  <div>
    <router-link to="/Home/Classifies" class="navbar-brand text-black">Back</router-link>
    <div class="container text-center">
      <h2>Misc...</h2>
      <img src="../photos/vines2.png" width="600" alt="">
    </div>

    <div class="ads">
    <div class="container-fluid text-center">
      <div class="row">

        <div class="col-md-12">
          <div class="card">
            <div class="card-block p-3">
              <img v-img:group src="../photos/class1.jpg" alt="">
            </div>
          </div>
          <hr>
        </div>

        <div class="col-md-12">
          <div class="card">
            <div class="card-block p-3">
              <img  v-img:group src="../photos/class2.jpg" alt="">
            </div>
          </div>
          <hr>
        </div>

        <div class="col-md-12">
          <div class="card">
            <div class="card-block p-3">
              <img v-img:group src="../photos/class3.jpg" alt="">
            </div>
          </div>
          <hr>
        </div>

        <div class="col-md-12">
          <div class="card">
            <div class="card-block p-3">
              <img v-img:group src="../photos/class4.jpg" alt="">
            </div>
          </div>
          <hr>
        </div>

        <div class="col-md-12">
          <div class="card">
            <div class="card-block p-3">
              <img v-img:group src="../photos/class5.jpg" alt="">
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  </div>
</template>
