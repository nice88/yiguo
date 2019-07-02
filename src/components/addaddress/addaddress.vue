<template>
    <div class="addresss">
        <Noaddress></Noaddress>
        <p>+添加新地址</p>
    </div>
</template>

<script>
import Noaddress from'./noaddress'
export default {
    name:'addresss',
    components:{
        Noaddress,
    }
}
</script>

<style>
.addresss{
    width: 100%;
}
.addresss p{
    color: #ffffff;
    font-size: 14px;
    line-height: .45rem;
    text-align: center;
    width: 100%;
    height: 45px;
    background:  #11b57c;
    position: absolute;
    bottom: 0;
}
</style>
