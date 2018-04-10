<template>
  <div>
  <div class="container text-center">
    <h2>Welcome to Sunridge</h2>
    <p>Located in Weber County, Utah, Sunridge is a home away
      from home <br> for owners seeking the solitude and scenery  of
      the Wasatch mountains.</p>
    <p>Tucked away behind Powder Mountain Ski Resort,
       Sunridge is just the place <br> for those hoping to
      "get away from it all" and get close to nature!</p>
    <img src="../assets/photos/vines2.png" width="600" alt="">
  </div>

    <div class="container-fluid link">
      <div class="row">
        <div class="col-md-4" >
          <div class="card" style="margin-left: 50px;">
            <div class="card-block p-4">
            <ul>
              <router-link to="/Home/Resources" active-class="active" tag="li"><img src="../assets/photos/rules.png" width="350px" alt=""></router-link>
            </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4" >
          <div class="card" style="margin-left: 50px;">
            <div class="card-block p-4">
              <ul>
                <router-link to="/Home/Classifies" active-class="active" tag="li"><img src="../assets/photos/ads.png" width="250px" alt=""> </router-link>
              </ul>

            </div>
          </div>
        </div>

        <div class="col-md-4" >
          <div class="card" style="margin-left: 50px;">
            <div class="card-block p-4">
              <ul>
                <router-link to="/Home/Calender" active-class="active" tag="li"><img src="../assets/photos/calendar.png" width="150px" alt=""></router-link>
              </ul>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>

  .link{
  padding-top: 50px;
  }

  .dates{
    padding-top: 20px;
  }
  li{
    list-style-type: none;
    cursor: pointer;
  }
</style>
