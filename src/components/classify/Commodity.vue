<template>
    <ul>
        <li>
            <div>
                <a
                        @click="getItem(item.child_id)"
                        v-for="(item,index) in navIndex"
                        :key="index"
                >
                    <img
                            :src="item.child_img"
                            alt=""
                    >
                    {{item.child_name}}
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Commodity",
        data() {
            return {}
        },
        props: ['navIndex'],
        methods:{
            getItem(id){
                this.$router.push({
                    path:"/class",
                    query:{
                        id:id
                    }
                })
            }

        }

    }
</script>

<style scoped>
   ul{
        width: 100%;
        height: auto;
        background: #fff;
        padding-left: .82rem;
        box-sizing: border-box;
    }
    ul>li{
        width: 100%;
        overflow: hidden;
    }
   ul>li>div{
       width: 100%;
       padding: .148rem .177rem 50px .177rem;
       box-sizing: border-box;
       overflow-y: scroll;
       overflow-x: hidden;
   }
   ul>li>div>a{
       float: left;
       display: inline-block;
       width: .818rem;
       height: .942rem;
       position: relative;
       padding-top: .592rem;
       text-align: center;
       box-sizing: border-box;
       font-size: .112rem;
       color: #808080;
   }
   ul>li>div>a>img{
       position: absolute;
       top: 0;
       left: 0;
       width: .56rem;
       height: .5689rem;
       margin: 0 .127rem;
   }
</style>