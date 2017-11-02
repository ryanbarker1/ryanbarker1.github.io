export const textmixin = {
    data(){
        return {
            countingText: ''
        }
    },

    computed: {
        counter(){
            // return this.countingText.filters((element) => {
            //     return element.count(this.countingText);
            // });
            return this.countingText.length;
        }
    },
    created(){
        console.log('created');
    }
}