<template>
    <div>
        <!--ToDo: Load app-stock component-->
            <!--ToDo: Loop through stock in stocks using v-for-->
            <!--ToDo: Bind to stock using : and pass stock from the v-for-->
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    //ToDo: Import Stock from ./Stock.vue
import Stock from './Stock.vue'
    export default {
        //ToDo: Initialize Stock component and name it appStock
            components: {
                appStock: Stock
            },
        computed: {
            //ToDo: Create stocks computer method
                // ToDo: Return $store.getters.stocks
            stocks(){
                return $store.getters.stocks
            }
        }
    }
</script>