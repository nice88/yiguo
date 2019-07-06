<template>
    <Loading v-if="show"></Loading>
    <div class="Classify" v-else>
        <category @info="send" :data="category"></category>
        <Commodity  :navIndex="msgRight"></Commodity>
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
                show:true,
                lalala: "",
                category:"",
                msgRight:""
            }
        },
        props:['goodsNav'],
        created(){
            fetch('http://121.199.63.71:8003/type/list/1001/',{
                method: 'get'
            }).then(response => response.json()).then(data => {
                this.show=false;
                this.category = data.type_detail_datas;
            });
            this.send(1001)
        },
        methods:{
            send(freeId){
                fetch('http://121.199.63.71:8003/type/list/'+freeId,{
                    method: 'get'
                }).then(response => response.json()).then(data => {
                    this.msgRight=data.child_type_datas
                })
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