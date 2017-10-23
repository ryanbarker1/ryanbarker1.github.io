<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <!--ToDo: Add default slot tag for passing the quote-->
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    /*ToDo: Create a class panel that sets the font-family to preffered font*/
    .panel{
        font-family: SansSerif;
        font-size: 16px;
        color: blue;
    }
        /*Set a specific front size to your liking*/
        /*Set a color of your choice*/

    /*ToDo: Create a class quote that sets the cursor to a pointer*/
.quote{
    cursor: pointer;
}
    /*ToDo: Create a hover effect on the class quote changing the background color to a color you prefer*/
    .quote:hover{
        background-color: grey;
        color: white;
    }
</style>