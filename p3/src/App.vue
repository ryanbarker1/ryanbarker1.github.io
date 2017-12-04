<template>
    <div class="container">
        <!--ToDo: Load app-header-->
        <app-Header></app-Header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <!--ToDo: Load router-view-->
                <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    //ToDo: Import Header Component
import Header from './components/Header.vue'
    export default {
        //ToDo: Initialize Header component and name it appHeader
        components: {
            appHeader: Header
        },
        //ToDo: On page creation dispatch 'initStocks' to the vuex $store
//        $store.dispatch('initStocks', vuex)
    }
</script>

<style>
    body {
        padding: 30px;
    }
    /*ToDo: Create slide-in effect for enter-active*/
    /*ToDo: Create slide-in effect for enter-leave*/
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
    }
    .slide-enter-leave{
        animation: slide-out 1s ease-out forwards;
    }

    /*ToDo: Create Keyframes for slide-in, remember to include from and to*/
        /*You can use any settings*/
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }
    /*ToDo: Create Keyframes for slide-out, remember to include from and to*/
        /*You can use any settings*/

</style>

