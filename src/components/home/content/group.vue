<template>
<div>
    <div class="group-floor" v-for="item in list">
        <a href="#" class="floor-img">
            <img :src="item.ImgBig" alt="">
        </a>
        <div class="slip">
            <div class="product-list clear noFloorImg" v-for="items in (item.Imgnext)">
                <div class="product-list-in" >
                    <div class="proitem">
                        <div class="pic">
                            <a href="#">
                                <img :src="items.imgsmall" alt="">
                            </a>
                            <div class="saletip">
                                <span>{{items.priceDown}}</span>
                            </div>
                        </div>
                    <div class="info">
                        <p class="name">
                            <a href="">
                               {{items.name}}
                            </a>
                        </p>
                        <div class="price">
                            <strong>{{items.price}}</strong>
                            <i class="price-addcart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" class="more">
                <p class="hot">查看更多
                <i></i>
                </p>
        </a>
     </div>
        
    </div>
</div>
</template>

<script>
export default {
    name:"Group",
    data(){
        return{
            list:[
                {
                    ImgBig:"https://img11.yiguoimg.com/d/items/2019/190621/9288738319214293_1125x652.jpg?w=1125&h=652",
                    Imgnext:[
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                         {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },

                    ]
                        
                    
                },
                 {
                    ImgBig:"https://img14.yiguoimg.com/d/items/2019/190619/9288738297259731_1125x652.jpg?w=1125&h=652",
                    Imgnext:[
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                         {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },

                    ]
                        
                    
                },
                   {
                    ImgBig:"https://img09.yiguoimg.com/d/items/2019/190428/9288737873110684_1125x652.jpg?w=1125&h=652",
                    Imgnext:[
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                         {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228"
                        },

                    ]  
                }

            ]
        }
    }
}
</script>

<style scoped>
.group-floor{
    width:100%;
}
.group-floor .floor-img, .group-floor .floor-img img {
    width: 100%;
    height: 2.5rem;
}
.group-floor .product-list {
    height: 182px;
    width: 100%;
}
.group-floor .product-list:last-of-type {
    margin-right:.2rem;
    width: 100%;
}
.slip{
       overflow-x: scroll;
    overflow-y: hidden;
    box-sizing: border-box;
    width: 100%;
    padding-bottom: .04rem;
    white-space: nowrap;
    display:flex;
}
.group-floor .product-list-in {
  
    padding-left: .1rem; 
}
.group-floor .proitem {
    display: inline-block;
    background: #fff;
    margin-right: .01rem;
    border-radius: .04rem;
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    overflow: hidden;
}
.group-floor .proitem .pic{
    position: relative;;
    height:1.24rem;
    

}
.group-floor .proitem .pic a{
    display: inline-block;
}
.group-floor .proitem .pic a img {
    width: 1.24rem;
    height:1.24rem;
    border-radius: .2rem .2rem 0 0;
}
.group-floor .proitem .saletip span {
    border: none; 
    background: #fb3d3d;
    color: #fff;
    font-weight: 700;
    font-size: .1rem; 
    display: inline-block;
    position: absolute;
    bottom: 0px;
    border-radius: 14px;
    width: .51rem;
    height: .18rem;
    line-height: .18rem;
    text-align: center;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 14px;   
}
.group-floor .proitem .info {
    box-sizing: border-box;
    width: 1.24rem;
    text-align: left;
    padding-left: 0;
}
.proitem .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: .22rem;
    display: flex;
    margin-top: 4px;
}
.group-floor .proitem .price {
    height: .33rem;
    font-size: 11px;
    color: #8d8a8a;
}
.proitem .price strong {
  
    font-size: .14rem;
    font-weight: bold;
    color: #fb3d3d;
}
.info .price .price-addcart {
    width: .19rem;
    height: .19rem;
    background: url(//img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png) no-repeat;
    background-size: 100% 100%;
    float: right;
    border-radius: 50%;
    background-color: #01b27a;
}
.proitem .name a {
    color: #333;
    font-size: 11px;
    display: inline-block;
    margin-left: 9px;
}
.group-floor .more .hot {
    position: absolute;
    top: 50%;
    width: .14rem;
    margin-top: 1px;
    white-space: normal;
    font-size: .1rem;
    color: #8d8a8a;
}
.group-floor .more {
    position: relative;
    top: 0;
    left:-14px;
    display: inline-block;
    width: .4rem;
    height: 1.47rem;
}
.group-floor .more .hot i {
    display: inline-block;
    width: .14rem;
    height: .14rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEy0lEQVRYw9WZX2iXVRjHP3uLldjcdtUuFkEJYknsJsNiKo5WrVyURH8RLIg5TUdHHoOiKIrmY2e6ws2I1EKYF0W1wbRswzUqsos0WhJkN/PCrqbbygpkXZzn3e/db1vs976/OTo353fO+77f5/M773mf85znlJCheNXrgbVALXALsAy4DlgCjALjwC/Az8AgMOBEzqe1V5ICcDHQBNwH1KWw2QccAzqdyB+FPBgVCNoG/Ai8ZaAjwMfAc9auBiqcSAlQYe06u/6R3V8H7AbGvWpn0UfWqz4OCFBjXZ8D+4GjTuTvAv7sNcC9wGag3uyfAtSJdGWG9aoHgE3W/BbY7kS+L2REZtG9HWgHVlnXQSfydCpYr1oOHAYeAP4CHGGeTWQFTdgoIYyyB64FeoEnnMjFOcN61QrgE8KXPgw0OpFTxYKcwV4N8ClwI3ACeMiJXMi/b7YP7EMDPQPcNZ+gAKZfa/bWmv1pZRqszdH1wDmg3okMzydoAniY8NGdA9Z71YP590yZBl71MaCLMEdXzfeIzlRsSnwDLCLM30kvkT+yO63esRCgMDkldlhTktcmYc1B1xDcU8dCgCZKp3HUeFUfd5YY6GLCOj4B3FGoH/Wqewi++E0nsqsYtF51JfAd8CtwmxO5FI9sk9VfpHT4m4FyoNWr7kzx/LTiRE4Cx4GlQDPkpkGD1ftTar+f+N3qVVuKAUxuOjYARF61ClhHCDJ6U4puA44k2m1edUsRYHuNa51XrYqA1Xahz4n8k0bRiVwGniJEVhC+hXe86jNZSI2nz5qrI8LKAfBVRuHLwJNAdwL4Xa+6MYtugqs2AlZY46eMovFIPAIcta6rgANe9dEMsjHXiojwtUFwEZmLAW8AvkwAH/aqD6eUPGv1TRHB5QBcTCk2E/Al4EFyr/BqoMurNqSQu2B1ZQSUmYHRYsGa3p/A/YR1HqCUqS5urjoxV1kEjAF41SXFhDVD48DJRNfvhWokuMYicq+/vFChORh6FWix5gTQmkKmwuqRiNyHtTSF0H+Bvgi8nOhqcSJHUkjdbPVvEQnXUERQB7ye6HJO5O2UcrdaPRQRMiWQW8mygm4j5BXi8pITacsgucbqwYice6nzqqUZQZ8F9ia6XnMib2TQKyWX9RmILPfUD1SSi77SCG8iRG3xVmmXE3kly583nkqg34mcj0PEONpqSqPoVTcA7yVA9zqRFzKCgsWxMV8MG8ex9ZYpKbRsJyyrEGLQ57NS2k7hboK36piEtWxe/ArbLVNSSPmA4K/bga1ZszZmf481u235nrYV/4GwadzqRPZlHZ0MsM3APuC0E6mJ+/O34vFmb7ft3xcCtIac65uy+ZwCayvMIUKCocerVl9h0Gqgx+wfyk+DzpaY6yakkM4A91yJFJJXvYGQ910O9DiRxvx7ZkvMbSRk85YDX8/3lDD9QbN3wuxPK////GyeYH7mu8USEFlBVxLc053WlT7znSecf6ZwnOBajhV4plBKOOVpJqQ3AU4TlubsZwp5xjzQSC72HSHs6weAIcKZ17gTGfWqZYQt0zJCmLeGEJRU2rNngc+ciJur/TTnYIuALYRTlzTnYP2ErXqH7dPmXAqGzQOvshGrtdGLTxjLCFnJMcJoD1GEE8Z/AbWUqQa1uD13AAAAAElFTkSuQmCC) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 2px;
    top: .55rem;
}
</style>
