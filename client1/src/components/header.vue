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
          <router-link to="/" class="navbar-brand text-black">S.P.O.A</router-link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <router-link  to="/Gallery" active-class="active" tag="li"><a>Gallery</a></router-link>
            <router-link  to="/Member" active-class="active" tag="li"><a>Board</a></router-link>
            <router-link to="/Attention" active-class="active" tag="li"><a>Attention</a></router-link>
            <router-link to="/Map" active-class="active" tag="li"><a>Maps</a></router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row">
      <div class="image  col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="hero">
          <div class="hero-text">
            <h1>SunRidge Property Owners Association</h1>
          </div>
        </div>
      </div>
    </div>
    <span class="date text-center"><h4>Today's Date: {{moment(date).format('MM/DD/YYYY')}}</h4></span>
  </div>

</template>



<style>

  .navbar-custom {
    /*background: linear-gradient(#000, #464747);*/
    /*background: ghostwhite;*/
    opacity: .85;
  }


  .image {

    background:  url('https://source.unsplash.com/ADkSHwhLuU0/1500x500');
    background-size: cover;
  }

  .hero {

    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    font-family: Tahoma, Geneva, sans-serif;
  }

  .image{
   opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
</style>
