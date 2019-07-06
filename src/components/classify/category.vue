<template>
    <div class="category">
        <ul>
            <li
                    v-for="(item,index) in data"
                    :key="index"
                    @click="getItem(item.category_id,index)"
                    :class="isactive===index?'active':''"
            >
                    {{item.category_name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "category",
        props:["data"],
        data(){
            return{
                isactive:0,

            }
        },
        methods:{
            getItem(freeId,index){
                this.$emit('info',freeId);
                this.isactive=index;
            }
        }
    }
</script>

<style scoped>
    .category{
        position: fixed;
        left: 0;
        top: .4rem;
        float: left;
        width: .82rem;
        height: 100%;
        overflow: hidden;
        z-index: 98;
    }
    .category>ul{
        width: .969rem;
        height: 100%;
        background: #f4f4f4;
        padding: 0 .148rem 100px 0;
        overflow-y: scroll;
        box-sizing: border-box;
    }
    .category>ul>li{
        padding: .189rem 0 .189rem 0;
        text-align: center;
        font-size: .13rem;
        color: #333;
        height: .51rem;
        box-sizing: border-box;
    }
    .category>ul>li.active{
        color: #11B57C;
        border-left: .03rem solid #11B57C;
        background: #fff;
        box-sizing: border-box;
    }

</style>