<template>
    <div class="prolistBackground">
        <div class="blockwrap" v-for="item in list">
            <ul class="twoproduct">
                <li v-for="items in (item.Imgnext)">
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
                                <strong>{{items.price}}</strong>{{items.num}}
                                <i class="price-addcart"></i>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"prolise",
    data(){
        return{
            list:[
            {   id:"12",
                Imgnext:[
                      {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228",
                            num:"/4个",
                           
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228",
                             num:"/4个",
                             
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228",
                             num:"/4个"
                        },
                        {
                            imgsmall:"https://img14.yiguoimg.com/d/items/2019/190408/9288737740596872_300.jpg",
                            priceDown:"直降60元",
                            name:"佳沛新西兰阳光金果",
                            price:"¥228",
                             num:"/4个"
                        }

                ]
            }
        ]
        }
        
    }
}
</script>

<style scoped>
.blockwrap .tt {
    height: .5rem;
    line-height: .5rem;
    text-align: center;
   display: flex;
   justify-content: center;
}
.blockwrap .tt h3:after, .blockwrap .tt h3:before {
    position: absolute;
    top: 50%;
    display: block;
    width: .2rem;
    height: .02rem;
    content: "";
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAFCAYAAADPLFVyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NDA4Q0E2N0MwM0RFNjExQjREN0U0MjRDMkVFRjQ0OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMkE4MzMyRUM3NUExMUU2QTVCNUIyOEMzM0VFNzdFNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMkE4MzMyREM3NUExMUU2QTVCNUIyOEMzM0VFNzdFNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMjg4MjY1LWFjZDQtZmE0Zi1iNDU3LWYyMGFkZjBlNWY1ZSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjgzYWU3ZDg4LWM2YTItMTFlNi1hMDNlLWRhMDVkZTk1YjEwNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmLVTFsAAABQSURBVHjaYvj//z8DvTEUyAHxLiD+DKXlGOgBcDhmN0gKCe9nhDJoCRiRHAARYARZCw4RHiThX0wgORpjXOAEGv/YQEaTHDSqvkBpeYAAAwAaHH/1zcisYQAAAABJRU5ErkJggg==) 0 0 no-repeat;
    background-size: auto 100%;
}
.blockwrap .tt h3:before{
     left: -.2rem;
}
.blockwrap .tt h3:after{
    right: -.2rem;
    transform: rotate(180deg);
}
.twoproduct{
    overflow: hidden;
}
.twoproduct li {
    float: left;
    width: 50%;
    padding: .1rem;
    box-sizing: border-box;
    padding-bottom: 0px;
}
.blockwrap .tt h3 {
    font-size:.14rem;
    position: relative;
    display: inline-block;
}
.prolistBackground{
    width:100%;
}
.prolistBackground .floor-img, .group-floor .floor-img img {
    width: 100%;
    height: 2.5rem;
}
.prolistBackground .product-list {
    height: 182px;
    width: 100%;
}
.prolistBackground .product-list:last-of-type {
    margin-right:.2rem;
    width: 100%;
}

.prolistBackground .product-list-in {
  
    padding-left: .1rem; 
}
.prolistBackground .proitem {
    display: inline-block;
    background: #fff;
    margin-right: .01rem;
    border-radius: .04rem;
    
}
.prolistBackground .proitem .pic{
    position: relative;;
    height:1.66rem;
    

}
.prolistBackground .proitem .pic a{
    display: inline-block;
}
.prolistBackground .proitem .pic a img {
    width: 1.66rem;
    height: 1.66rem;
    border-radius: .2rem .2rem 0 0;
}
.prolistBackground .proitem .saletip span {
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
.prolistBackground .proitem .info {
    box-sizing: border-box;
    width: 1.66rem;
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
.prolistBackground .proitem .price {
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
    margin-right: 7px;
}
.proitem .name a {
    color: #333;
    font-size: 11px;
    display: inline-block;
    margin-left: 9px;
}



</style>
