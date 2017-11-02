<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-highlight>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button :click.highlight="coloredText">Click Me</button>
                <p>{{rText}}</p>

            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>Reverse Text:</p>
                <input v-model="text">
                    <p>{{text | toreverse}}</p>
                <hr>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>Counting Text:</p>
                <input v-model="countText">
                <p>{{countText | count}}</p>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                   Computed Prop: <app-text></app-text>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <hr>
                <p>Mixins:</p>
                <input v-model="countingText">
                <p>{{counter}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Text from './Text.vue'
    import {textmixin} from './textmixin'
    export default {
        data() {
            return {
               rText: 'Some text',
                text: '',
                countText: ''
            }
        },

        filters: {
            toreverse(value) {
                return value.split('').reverse().join('');
            }
        },

        methods:{
          coloredText(){
              return this.rText;
          }
        },

        components: {
            appText: Text
        },

        mixins: [textmixin]
    }
</script>

<style>
</style>

