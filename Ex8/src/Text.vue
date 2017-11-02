<template>
    <div>
        <input v-model="reverseText">
        <p>{{revText}}</p>
        <hr>
        <input v-model="toCount">
        <p>{{counting}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                reverseText: '',
                toCount: ''
            }
        },

        computed: {
            revText() {
                return this.reverseText.split('').reverse().join('');
            },
            counting(){
                return this.toCount.length;
            }
        }
    }
</script>