<template>
    <div>
        <!--ToDo: Load app-stock component-->
            <!--ToDo: Loop through stock in stocks using v-for-->
            <!--ToDo: Bind to stock using : and pass stock from the v-for-->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    //ToDo: Import mapGetters from vuex
    //ToDo: Import Stock from ./Stock.vue
import mapGetters from 'vuex'
import Stock from './Stock.vue'
    export default {
        computed: {
            //ToDo: Create ...mapGetters method
                //ToDo: Call stocks: 'stockPortfolio'
            mapGetters() {
               stocks: 'stockPortfolio'
            }

            },

        //ToDo: Initialize Stock component and name it appStock
        components: {
            appStock: Stock
        }
    }
</script>