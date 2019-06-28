<template>
    <div class="money">
        <router-link to='/acount'
        tag='div'
         class="mon-left">
            <span class="">-</span>
            <span class="">卡包余额</span>
        </router-link>
        <div class="mon-right">
            <span class="">-</span>
            <span class="">悠币</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"money"
}
</script>

<style scoped>
div[class^='mon']{
    width: 100%;
}
.money{
    width: 100%;
    height: .55rem;
    background: #ffffff;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.money span{
    font-size: 12px;
    text-align: center;
    display: block;
}
</style>
