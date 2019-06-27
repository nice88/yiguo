<template>
    <div class="Classify">
        <category :mes="snding"></category>
        <Commodity></Commodity>
    </div>
</template>
<script>
    import category from "./category"
    import Commodity from './Commodity'
    export default {
        name: "classification",
        components:{
            "category":category,
            "Commodity":Commodity
        },
        data(){
            return{
                snding:[
                    {
                        font:'进口水果',
                    },
                    {
                        font:'国产水果'
                    },
                    {
                        font:'精选肉类'
                    },
                    {
                        font:'禽类蛋品'
                    },
                    {
                        font:'海鲜水产'
                    },
                    {
                        font:'即烹美食'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .Classify{
        background: #fff;
        padding-top: .4rem;
    }
</style>