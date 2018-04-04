<template>
  <div>
    <nav class="navbar navbar-default  navbar-fixed-top navbar-custom">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand text-black"><img src="../assets/photos/cabin2.png" width="30px" alt=""></router-link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right" style="margin-right: 20px">
            <router-link  to="/Gallery" active-class="active" tag="li"><a style="color: black">Gallery</a></router-link>
            <router-link  to="/Member" active-class="active" tag="li"><a style="color: black">Board Member's</a></router-link>
            <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen !=false">

              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="color: black">News &amp; Events <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <router-link to="/Attention" active-class="active" tag="li"><a style="color: black">Attention</a></router-link>
                <router-link to="/Home/Calender" active-class="active" tag="li"><a>Calender</a></router-link>
              </ul>
            </li>

            <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen !=false">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style="color: black">Doc's &amp; Forms<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <router-link to="/Map" active-class="active" tag="li"><a style="color: black">Maps</a></router-link>
                <router-link to="/Home/Classifies" active-class="active" tag="li"><a>Classified</a></router-link>
                <router-link to="/Home/Resources" active-class="active" tag="li"><a>Covenants/By-Laws/Rules</a></router-link>
              </ul>
            </li>




          </ul>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="banner  col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="hero">
          <div class="hero-text">
            <h1>SunRidge Property Owners Association</h1>
          </div>
        </div>
    </div>
    </div>

  </div>

</template>

<script>
  export default{
    data() {
      return{
        isDropdownOpen: false
      }
    }
  }
</script>

<style>

  .navbar-custom {
    /*background: linear-gradient(#000, #464747);*/
    /*background: ghostwhite;*/
    opacity: .85;
  }


  .banner {

    background-image:  url('../assets/banner2.jpg');
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
    margin: 0; padding: 0; box-sizing: border-box;
    width: 100%;
    height: 550px;
  }

  .hero {

    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Tahoma, Geneva, sans-serif;
    margin-top: 145px;

  }
  .hero .banner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #2196F3;
    z-index: -1;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hero .banner:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #414a4f;
    opacity: 0.75;
  }


</style>
