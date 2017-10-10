<template>
    <div class="container">
    <app-header></app-header>
        <hr>
        <div class="row">
           <app-server></app-server>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <div class="row">
           <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
    import Header from './Components/shared/Header.vue'
    import Footer from './Components/shared/Footer.vue'
    import ServerDetails from './Components/server/ServerDetails.vue'
    import Server from './Components/server/Server.vue'
    export default{
            components: {
                'app-header': Header,
                'app-footer': Footer,
                'app-server-details': ServerDetails,
                'app-server': Server
            }
    }
</script>

<style>

</style>
