<template>
    <div class="footer">
        <div class="footer-in">
           <a href="#" class="list">
               <i class="icon icon1">
                   首页
               </i>
           </a>
            <a href="#" class="list">
               <i class="icon icon2">
                   分类
               </i>
           </a>
            <a href="#" class="list">
               <i class="icon icon3">
                   吃饭吧
               </i>
           </a>
            <a href="#" class="list">
               <i class="icon icon4">
                   <b></b>
                   购物车
               </i>
           </a>
            <a href="#" class="list">
               <i class="icon icon5">
                   我的易果
               </i>
           </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer",
    // data(){
    //     return{
    //         list:[
    //             {
    //                 text:"首页",   
    //             },
    //             {
    //                  text:"分类",
    //             },
    //             {
    //                 text:"吃饭吧"
    //             },
    //             {
    //                  text:'购物车'
    //             },
    //              {
    //                  text:'我的易果'
    //             }
    //         ]
    //     }
    // }
}
</script>

<style>
.footer {
    z-index: 99;
    box-sizing: border-box;
    width: 100%;
    height: .46rem;
    padding: 0 11px;
    background: #fff;
}
.footer-in{
    width: 100%;
    height: 100%;
}
.footer-in a {
    display: inline-block;
    float: left;
    box-sizing: border-box;
    width: 20%;
    height: 100%;
    text-align: center;
    color: #8d8a8a;
    font-size:.13rem;
}
.footer-in a.active {
    color: #11b57c;
}
.footer-in a i .icon1{

    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABICAYAAACQnynWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY4QTZBOEREQzc1MTExRTZBRkREODRGODFENkFDODE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY4QTZBOERFQzc1MTExRTZBRkREODRGODFENkFDODE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjhBNkE4REJDNzUxMTFFNkFGREQ4NEY4MUQ2QUM4MTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjhBNkE4RENDNzUxMTFFNkFGREQ4NEY4MUQ2QUM4MTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zWIAsAAAEaElEQVR42uydaYiNURjHz2As2deELPFBtmRk7PuaJnywFDG2UIYQmexLopGQIruIsiRbloZmrIMPFD5oPsiePVt24//0/m9zDNcyM/fd5vnXr5lz5s69z/3Pec95znLficvJyTEqb1RMLVDz1XyVmq/mq2KvEgV9glVpaW7HXBwMAGNAG1AdPAVXwS6wF3x3K5jpM2cWmZbfCGSBA6A/jRfVYHkPuADqa7dTuOoELoHWeeo/5Sm3jfI4NT+fSgbpoBrLz8B4UBWUBlXASHCPP68JMng1qPkFiG8Z2AZKsu46SACbwUvWvQI7WZ/FurLgEJig5v+/xLz9INWqO8Lu536U33kOuoOD1uC8gX/AODX/31QLZIJBVt1Klt/95Xc/gMFgrVWXyiujpJr/ZyUwbUxg+Qv7d8npvv3jc8jjpoIZVto5HJwAldT832sQW3wtlqVP78f+PV/TEDAMfGS5GzgP6qr5PyuV+XtZlrOZNp4u4PPuA72swbkpU9GWar7TD2/LMyhm0PjsQnoNae3twR1rTDkL+hRl86uxZSdbddLF9LZaamHpNmjH8URUntnTmKJofmPm5B1ZloFxFgfXLzF6zSfs94+yHA+2gIVepKJemd+b/W5Dlt9xsHVjle49GMj8P6IF7Priw27+RHDMSvkecOJ02MUYJBWdBGaDyCb2KMZVIYzmy2xzDVhvcpeyr4BELhl4oRVghMldnJOs6ByoHSbzI4PbFKtOlg66gkceD/q7QV/jrA+JWnAsah4G8xuAi5wsGV7mklYO4VKAH5TBru8uy3V4BXQPsvnt2IqasSyXtyz9zrH6Wr/oFuO9xnJFcJzxBs58WUs5Y5xdJpGswfc0zlafX/UYdDbOGlBkAridjSUQ5ku+vNg4q4ilrVaVyJmm3yVpbxLYar2fpWCTKYQ971iaX8Y4+6jzrEnLKdDBmtoHQV/BWDDf6h7HMR0u50fzI1t3Q626dcbZynttgqklYDT4zLIkDZl8r74xX1YILxvnKEdkEpNCvppgawcb0BuWWzGJaOIH85OYlkXWyF8z2HUmPJLN+46cjYvqcfzq4pn5q9LSZKfooNUP3mH/ftKETzeYit5gubK8T3gwzHXz8aKyp7qSywYiOazUlplNWPWAV0A6y6Vkhgwvprjd8u0jGZK79zDOsb2w6w271R1WKrrMbfM3gofGWRkcaX49ORZmfWYWJEvRb/M7vsUV9GNBHhyU9ZX8flA2ha0jJUCeuhKzG+YvYjY0L0DmuxKzG+ZX5tfqATLflZj1kykeSs1X89V8lZqv5qvUfDVfpear+So1X81XqflqvkrNV/NVar6ar1Lz1XyVmq/mqzwwPwjHR2qEyXz7HpeTA2D+5CixB9J8+8i43FNnrsm9mZGfVIWxzY4SeyDNX259LzeWkM85yenmHJ/xgrHFR4k9kObLx+tXB3A8XM3YAz/gTjPOXT1uGhfvc5zP8ekmY50W6xeL03/boXm+mq9S89V8Vez1Q4ABAEpBAlXaHx5wAAAAAElFTkSuQmCC) 50% no-repeat;
    background-size: 100% 100%;


}
.footer-in a .icon {
    display: inline-block;
    position: absolute;
    
    left: 50%;
    width: .3rem;
    height: .21rem;
}
</style>
