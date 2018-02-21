<template>
  <div>
    <div class="container text-center">
      <h2>Sunridge Photo Gallery</h2>
      <hr class="bg-dark mb-4 w-25">
    </div>
  <div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo1.jpg" alt="">
          <div class="caption">
            <p></p>
          </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo3.jpg"  alt="">
          <div class="caption">
            <p></p>
          </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo4.jpg"  alt="">
          <div class="caption">
            <p></p>
          </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo5.jpg"  alt="">
        <div class="caption">
          <p></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo6.jpg"alt="">
        <div class="caption">
          <p></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo7.jpg" alt="">
        <div class="caption">
          <p></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo8.jpg" alt="">
        <div class="caption">
          <p></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo9.jpg"  alt="">
        <div class="caption">
          <p></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hideme">
        <img class="image" src="./photo10.jpg"  alt="">
        <div class="caption">
          <p></p>
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
  /*.container*/
  /*{*/
    /*height:2000px;*/
  /*}*/

  /*.container DIV*/
  /*{*/
    /*margin:50px;*/
    /*padding:50px;*/
    /*width:50px;*/
    /*height:50px;*/
    /*!*background-color:lightgreen;*!*/
   /*!*background: url("photo1.jpg");*!*/
    /*-webkit-transition: all 1s ease; transition: all 1s ease;*/
  /*}*/

  .hideme
  {
    opacity:0;
  }

  .image{
    width: 100%;

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
