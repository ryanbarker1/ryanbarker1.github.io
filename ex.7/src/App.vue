<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Sign Up</h1>
                    <hr>
                    <app-name
                            :value="fullName"
                            @input="fullName = $event.target.value"></app-name>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text"
                                id="email"
                                class="form-control"
                                v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                                id="password"
                                class="form-control"
                                v-model="password">
                    </div>
                    <div class="row">
                       <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <!--<app-store-data-->
                                    <!--v-model="dataStore"></app-store-data>-->
                           <label for="yes">
                               <input type="radio"
                               id="yes"
                               value="yes"
                               v-model="dataStore">Yes
                           </label>
                           <label for="no">
                               <input type="radio"
                                      id="no"
                                      value="no"
                                      v-model="dataStore">No
                           </label>
                       </div>
                    </div>
                    <!-- Part 1 5 Points-->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <hr>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <button class="btn btn-primary"
                                    @click.prevent="submitted">Submit Form</button>
                        </div>
                    </div>
                    <!-- Part 2 5 Points -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Part 3 5 Points -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row"
        v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name:  {{fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{dataStore}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import fullName from './FullName.vue'
    export default {
        data() {
            return {
                fullName: 'Ryan Barker',
                email: '',
                password: '',
                dataStore: 'yes',
                isSubmitted: false,
            }
          },
        components: {
            appName: fullName,
        },
        methods: {
            submitted(){
                this.isSubmitted = true;
            }
        }

    }
</script>

<style>
</style>
