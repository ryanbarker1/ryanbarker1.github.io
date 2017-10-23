<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Quotes Added</h3>
            <div class="progress">
                <div class="progress">
                    <!--ToDo: Div with class="progress-bar" - Bind the style tag that adjusts the style width using quoteCount / maxQuotes-->
                        <!--Remember to multiple the the divided total by 100 and adding the '%' to get a percentage-->
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: ((quoteCount/maxQuotes)*100) + '0%'}">
                        <!--ToDo: Output the number of quotes displayed on the page out of the max quotes-->
                                    {{quoteCount}}/{{maxQuotes}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // ToDo: Create props that are being passed in App.vue (quoteCount & maxQuotes)
            // Note: use normal array syntax, to pass more then 1 separate by comma
        props: ['quoteCount','maxQuotes']
    }
</script>

