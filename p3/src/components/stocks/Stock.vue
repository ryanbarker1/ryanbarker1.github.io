<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <!--ToDo: Display the stock.name data object-->
                    <!--ToDo: Inside <small> tags display Price: stock.price-->
                    <small>Price: {{stock.price}}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <!--ToDo: Inside input use v-model.number and pass quantity-->
                        <!--ToDo: Bind to class using : and pass object called danger that takes in insufficientQuantity-->
                    <input
                            v-model.number="quantity"
                            type="number"
                            class="form-control"
                            :class="danger(insufficientQuantity)"
                            placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <!--ToDo: Inside the button add a click event that calls buyStock-->
                    <!--ToDo: Bind to disabled using : and set it equal to insufficientQuantity || quantity is less than or equal to 0 || !Number.isInteger(quantity)-->
                    <button @click="buyStock" :disabled="insufficientQuantity || quantity >= 0 || !Number.isInteger(quantity)" class="btn btn-success">
                        <!--ToDo: Display insufficientQuantity data object and add if using ? 'Not Enough' else 'Buy'-->
                        {{insufficientQuantity ? 'Not Enough' : 'Buy'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    export default {
        //ToDo: Set props equal to stock using array syntax
        props: ['stock'],
        data() {
            return {
                //ToDo: Create data object called quantity and set it to 0
                quantity: 0
            }
        },
        computed: {
            //ToDo: Create a computed function called funds
                //ToDo: Have funds() return $store.getters.funds
            funds(){
                return $store.getters.funds
            },
            //ToDo: Create a computed function called insufficientFunds
                //ToDo: Have insufficientFunds() return this.quantity * this.stock.price > this.funds
            insufficientFunds(){
                return this.quantity * this.stock.price > this.funds
            }
        },
        methods: {
            //ToDo: Create buyStock method
                //ToDo: Create const called order that holds an object
                    //ToDo: Set stockId: to stock.id
                    //ToDo: Set stockPrice: to stock.price
                    //ToDo: Set quantity: to quantity
            //ToDo: Outside the data object $store.dispatch() passing 'buyStock' and order
            //ToDo: Reset quantity to 0
            butStock(){
                const order = {
                    stockId: stock.id,
                    stockPrice: stock.price,
                    quantity: quantity
                }
                $store.dispatch('buyStock', order);
                quantity = 0;
            }
        }
    }
</script>