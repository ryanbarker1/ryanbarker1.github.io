<template>
  <div >

    <router-link to="/Gallery" class="navbar-brand text-black">Back</router-link>
    <div class="container text-center">
      <span class="date text-center"><h4 class="dates">Today's Date: {{moment(date).format('MM/DD/YYYY')}}</h4></span>
      <h2>Winter</h2>
      <img src="../photos/arrow17.png" width="600" alt="">
    </div>

    <div class="container">
      <div class="row">
        <a target="_blank" href="./photo9.jpg">
          <img src="./photo9.jpg" alt="Deer" style="">
        </a>
      </div>
    </div>
  </div>
</template>
