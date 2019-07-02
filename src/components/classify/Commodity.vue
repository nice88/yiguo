<template>
    <ul>
        <li>
            <div
                    v-for="(item,goodshowIndex) in goodsShow"
                    v-if="navIndex===goodshowIndex"
            >
                <a href=""
                   v-for="itemS in item.list"
                >
                    <img
                            :src="itemS.img"
                            alt=""
                    >
                    {{itemS.imgName}}
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
        props: ['goodsShow', 'navIndex']
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