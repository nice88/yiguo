<template>
    <div class="fixedBar">
        <button class="btn">
            <i class="icon icon-home"></i>
        </button>
        <button class="btn">
            <i class="icon icon-cart"></i>
            <i class="cart-num"></i>
        </button>
    </div>
</template>

<script>
export default {
    name:"FixedBar"
}
</script>

<style scoped>
.fixedBar{
     z-index: 100;
    position: fixed;
    left: .3rem;
    height: 1rem;
    bottom: .3rem;
}
.fixedBar .icon-home {
    background: url(//img05.yiguoimg.com/d/web/190416/00191/161505/u37.png) 50% no-repeat;
    background-size: 45%;
}
.fixedBar .icon-cart {
    position: relative;
    background: url(//img07.yiguoimg.com/d/web/190428/00193/161953/u41.png) 50% no-repeat;
    background-size: 55%;
}
.fixedBar .icon-cart, .fixedBar .icon-home {
    display: inline-block;
    width: 100%;
    height: 100%;
} 
.fixedBar button {
    display: inline-block;
    height: .4rem;
    width: .4rem;
    border-radius: 25rem;
    border: 0;
    background-color: rgba(0,0,0,.8);
} 
.fixedBar button:nth-of-type(1){
    margin-right:4px;
} 
</style>
