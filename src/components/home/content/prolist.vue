<template>
    <div class="prolist pt">
        <div class="blockwrap prolist-blockwrap" v-for="item in prolist" :key="item.id">
            <div class="proitem">
                <div class="pic">
                    <a href="#">
                        <img :src="item.Img" alt="">
                    </a>
                </div>
                <div class="info">
                    <div class="info-wrap">
                        <p class="name">
                            <a href="">{{item.name}}</a>
                        </p>
                        <p class="sub"><span>{{item.priceDown}}</span>{{item.detail}}</p>
                    </div>
                </div>
                <div class="price pricePadding">
                    <strong>{{item.price}}</strong>{{item.pre}}
                    <i class="price-addcart"></i>
                </div>
            </div>    
        </div> 
    </div>
</template>

<script>
export default {
    name:"Prolist",
    data(){
        return{
            prolist:[
                {
                  id:"12",
                  Img:"https://img12.yiguoimg.com/d/items/2019/190329/9288737680008829_300.jpg" ,
                  name:"海南树上熟木瓜",
                  priceDown:"第二件半价",
                  detail:"果肉红润，甜美多汁",
                  price:"¥39",
                  pre:"/4个",
                  path:''
                }
            ]
        }
    }
}   
</script>

<style scoped>
.prolist{
    height:1.18rem;
    margin-bottom: 3px;
}
.prolist .blockwrap{
    height:100%;
    padding: 0 12px;
}
.prolist .blockwrap .proitem{
    height:100%;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    position: relative;
    border-radius: 2px;
}
.prolist .blockwrap .proitem .pic img{
    width:.94rem;
    height: .94rem;
}
.prolist .blockwrap .proitem .info{
    font-size:15px;
    position:absolute;
    left: .92rem;
    top: 10px;
}
.prolist .blockwrap .proitem .info a{
    color:black;
}
.proitem .sub {
    color: #8d8a8a;
    font-size: 12px;
    margin-top:2px;
}
.proitem .sub span{
    display: inline-block;
    padding: 1px 1px;
    border:1px solid  #01b27a;
    color:#01b27a;
    border-radius: 7px;
}
.price{
    font-size: 12px;
    position: absolute;
    left: .93rem;
     color: #8d8a8a;
}
.price strong{
    font-size: .14rem;
    font-weight: bold;
    color: #fb3d3d;
}
  .proitem .pricePadding .price-addcart {
     display: inline-block;
    width: .19rem;
    height: .19rem;
    background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    left:2.14rem;
    border-radius: 50%;
    background-color: #01b27a;
}
</style>
