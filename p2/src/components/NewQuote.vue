<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <!--ToDo: Within the textarea use v-model that is set to quote-->
                <textarea class="form-control" rows="3" v-model="quote" placeholder="enter"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <!--ToDo: Add a click event with .prevent and set it equal to the createNew method created below-->
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
            // ToDo: Create a data object called quote that is initialized as an empty string
                quote: ''
            };
        },
        methods: {
            // ToDo: Create a method createNew that emits an event listener named quoteAdded that passes the quote data object
            createNew(){

                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
                // Re-initialize quote to an empty string
        }
    }
</script>
