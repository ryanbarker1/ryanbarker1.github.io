<template>
  <div>
    <!--ToDo: Load app-header-->
    <app-Header></app-Header>
    <router-view></router-view>
    <app-footer></app-footer>
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
