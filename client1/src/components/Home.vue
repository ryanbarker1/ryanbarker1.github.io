<template>
  <div>
  <div class="container text-center">
    <h2>Welcome to Sunridge</h2>
    <hr class="bg-dark mb-4 w-25">
  </div>
    <nav class="navbar text-center">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <router-link to="/Home/Calender" active-class="active" tag="li"><a>Calender</a></router-link>
          <router-link to="/Home/Classifies" active-class="active" tag="li"><a>Classified</a></router-link>
          <router-link to="/Home/Resources" active-class="active" tag="li"><a>Covenants/By-Laws/Rules</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4" >
          <div class="card" style="margin-left: 15px;">
            <div class="card-block p-4">
              <h3 class="card-title">Currently in Sunridge...</h3>
              <p class="card-text">Located in Weber County, Utah, Sunridge is a home away
                <br>from home for owners seeking the solitude and scenery <br> of
              the Wasatch mountains.</p>
              <p>Tucked away behind Powder Mountain Ski Resort,
                <br> Sunridge is just the place for those hoping to
                <br> "get away from it all" and get close to nature!</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="margin-left: 15px;">
            <div class="card-block p-4">
              <h3 class="card-title">Lost &amp; Found:</h3>
              <p class="card-text">Lost! Somewhere on a road in Sunridge on Monday,
                August 29th, a pair of Vortex 10 X 42 binoculars.</p> <p>
                If found, please call Bill at 801-731-3326 (home) 385-244-5693
                (cell) or Ruth at 801-726-7113.</p>
            </div>
          </div>
        </div>
        <div class="col-md-3" style="margin-left: 15px;">
          <div class="card">
            <div class="card-block p-4">
              <h3 class="card-title">Board Meeting Changes:</h3>
              <p class="card-text">Board meetings are now being held
                at: <p> Grand View Acres 3796 Quincy Ave Ogden UT <br> in the main office.
                Second Wednesday of each month 6:30pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

