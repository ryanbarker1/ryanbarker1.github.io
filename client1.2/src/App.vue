<template>
  <div>
    <!--ToDo: Load app-header-->
    <app-Header></app-Header>
    <div class="tile">
    <router-view></router-view>

    <div class="foot-text">
    <app-footer></app-footer>
    </div>
    </div>
  </div>
</template>

<script>
  //ToDo: Import Header Component
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    //ToDo: Initialize Header component and name it appHeader
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
  </script>

<style>
  .tile{
    background-color: #fff;
    /*background-color: white;*/
    width: 100%;

  }

</style>
