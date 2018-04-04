<template>
  <div>
    <router-link to="/Gallery" class="navbar-brand text-black">Back</router-link>
    <div class="container text-center">
      <span class="date text-center"><h4 class="dates">Today's Date: {{moment(date).format('MM/DD/YYYY')}}</h4></span>
      <h2>Summer</h2>
      <img src="../photos/arrow17.png" width="600" alt="">
    </div>

    <div class="images" >
      <div class="container-fluid">
        <div class="row">
          <!--div class="col-xs-12 col-sm-4">
          <div class="thumbnail hideme">
             <img class="image" src="./photo9.jpg" alt="">
          </div>
          </div-->

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/ahmoose.jpg"  alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/altTAYLORdeer1.jpg" alt="">
            </div>
          </div>



          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/birds.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/BTmoose_end.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/BTyoungBull.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>


          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/bullsXthree2.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/bullXthree.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/ca_browns_hole.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/DT_comin_at_ya.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>




          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group src="./summerimage/grantYoungBull2012.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/grnMooseMeadow.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/grov_animal.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/grov_lake.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/grov_moose.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/grove_lake.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/hartvigsenButterfly.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/hartvigsenHummer2.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/hartvigsenMoose.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/petersonBuck.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/petersonFawnBuds.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group src="./summerimage/petersonFawns.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>

          <div class="col-xs-12 col-sm-4">
            <div class="thumbnail hideme resize">
              <img v-img:group  src="./summerimage/petersonSpike.jpg"  width="365px;" height="285px;" alt="">
            </div>
          </div>



        </div>
      </div>

    </div>

  </div>
</template>

<script>
  $(document).ready(function() {
    $(window).scroll( function(){
      $('.hideme').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
          $(this).addClass('showme', 2000);
        }
        if( bottom_of_window < bottom_of_object ){
          $(this).removeClass('showme');
        }
      });
    });
  });

</script>

<style>
  .hideme
  {
    opacity:0;
  }

  .resize{
    width: 100px;
    margin-left: 50px;
  }
  .images{
    padding-top: 100px;
  }
  .showme {
    animation-name: fade-in;
    animation-duration: 2s;
    opacity:1!important;
  }

  @keyframes fade-in {
    from{opacity: 0;}
    to{opacity: 1;}
  }
</style>
