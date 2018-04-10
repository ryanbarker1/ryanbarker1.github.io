<template>
  <div>
    <div class="container text-center">
      <h2>Sunridge Classifieds:</h2>
      <img src="../assets/photos/vines2.png" width="600" alt="">
    </div>

    <div class="ads">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-4">
          <ul>
            <router-link to="/Home/Classifieds/ForSale" active-class="active" tag="li"><img src="" width="350px" alt="For Sale"></router-link>
          </ul>
        </div>

        <div class="col-xs-12 col-sm-4">
          <ul>
            <router-link to="/Home/Classifieds/Misc" active-class="active" tag="li"><img src="" width="350px" alt="Misc"></router-link>
          </ul>
        </div>

        <div class="col-xs-12 col-sm-4">
          <ul>
            <router-link to="/Home/Classifieds/Service" active-class="active" tag="li"><img src="" width="350px" alt="Service"></router-link>
          </ul>
        </div>

      </div>
    </div>

    <div class="ads">
    <div class="container-fluid text-center">
      <div class="row">

        <div class="col-md-12">
          <div class="card">
            <div class="card-block p-3">
              <p class="card-text">
             If you would like to place a free ad on the Sunridge. <br>
                Classified's page, send your ad, along with your name <br>
                and Sunridge Lot number to <br>
                <a href="mailto:webmaster@sunridge.info">Web Master</a>
              </p>
            </div>
          </div>
        </div>

      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style>
  .ads{
    margin-top: 50px;
  }
</style>
