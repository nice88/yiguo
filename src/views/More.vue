<template>
    <div class="body">
        <div class="fixedOpt" id="fixedOpt">
            <div class="fixedOpt_l">
               <button class="btn">
                   <i class="icon icon-back "></i>
                </button>
            </div>
            <div class="fixedOpt_r">
                <button class="btn c_txt">
                    <i class="icon icon-local"></i>
                    <span>北京</span>   
                </button>
            </div>
        </div>
        <div class="content">
            <div class="one-image" v-for="item in list" :key="item.id">
                <a href="#">
                    <img :src="item.img" alt="">
                </a>
            </div>
        </div>
    <yg-more-prolise></yg-more-prolise>
    <yg-more-fixedBar></yg-more-fixedBar>
    </div>
</template>

<script>
import prolise from '../components/home/more/prolise'
import fixedBar from '../components/home/more/fixedBar'
export default {
    name:"More",
    components:{
        "yg-more-prolise":prolise,
        "yg-more-fixedBar":fixedBar
    },
    data(){
        return{
            list:[
            {
                img:"https://img11.yiguoimg.com/d/items/2019/190522/9288738074732214_1125x272.jpg?w=1125&h=272"
            },
            {
               img:"https://img12.yiguoimg.com/d/items/2019/190522/9288738074764982_1125x1143.jpg?w=1125&h=1143" 
            },
            {
                img:"https://img09.yiguoimg.com/d/items/2019/190522/9288738074797750_1125x410.jpg?w=1125&h=410"
            },
            {
                img:"https://img13.yiguoimg.com/d/items/2019/190522/9288738074863286_1125x493.jpg?w=1125&h=493"
            },
            {
                img:"https://img10.yiguoimg.com/d/items/2019/190522/9288738074896054_1125x761.jpg?w=1125&h=761"
            },
            {
                img:"https://img10.yiguoimg.com/d/items/2019/190522/9288738074928822_1125x180.jpg?w=1125&h=180"
            }
        ]
      }
        
    }
}
</script>

<style scoped>
.fixedOpt {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .54rem;
    display: flex;
    justify-content: space-between;
}

.fixedOpt .fixedOpt_l {
    float: left;
    margin-left: 14px;
}
.fixedOpt .fixedOpt_l .btn .icon {
    width:16px;
   height:16px;
    position: absolute;
    left: 6px;
    top: 8px;
    display: inline-block;
}
.fixedOpt_l .btn{
    width:30px;
    height: 33px;
}
.fixedOpt .fixedOpt_r .btn .icon {
   width:16px;
   height:16px;
    position: absolute;
    left: 2px;
    top: 8px;
    display: inline-block;
}
.fixedOpt .fixedOpt_r{
    width: 1rem;
    height: 100%;
    position: relative;
}
.fixedOpt .fixedOpt_r .c_txt span{
    margin-left: 10px;
}
.fixedOpt_r .btn{
    position: absolute;
    width: 60px;
    height: 35px;
    left: 31px;
    top: 10px;
}  
.fixedOpt .icon-back {
    background: url(../assets/img/back.png) no-repeat;

}
.fixedOpt .icon-local{
    background: url(../assets/img/local.png) no-repeat;
        margin-left: 6px;
    margin-top: 0px;
}
.fixedOpt .fixedOpt_l .btn {
    display: block;
    border: 0;
    border-radius: 25rem;
    background-color: rgba(0,0,0,.8);
    margin-top: 10px;
    position: relative;
}
.fixedOpt .fixedOpt_r .btn {
    display: inline-block;
    color: #fff;
    border: 0;
    border-radius: 25rem;
    background-color: rgba(0,0,0,.8);
}
.one-image img{
    width:100%;
}
</style>
