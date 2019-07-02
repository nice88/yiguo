<template>
    <div class="tuihuo">
        <p><img src="img/D-1.png"><span>不支持7天无理由退货</span></p>
    </div>
</template>

<script>
    export default {
        name: "Returngoods"
    }
</script>

<style scoped>
    /*退货*/
    .tuihuo{
        border-top:1px solid #f1f1f1;
    }
    .tuihuo p{
        width:100%;
        height:.5rem;
        line-height:.5rem;
        display:flex;
        justify-content: start;
    }
    .tuihuo p img{
        width:0.16rem;
        height:0.16rem;
        margin:auto .18rem;
    }
    .tuihuo p span{
        font-size:.12rem;
        color:#acaaab;
        verticle-align:middle;
    }
</style>