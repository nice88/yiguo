<template>
    <div class="allbody">
        <yg-index-header></yg-index-header>
        <div class="content">
            <yg-index-content></yg-index-content>
        </div>       
        <yg-index-footer></yg-index-footer>
    </div>
</template>

<script>
import Header from '../components/home/header'
import Content from '../components/home/content'
import Footer from '../components/home/footer'
export default {
    name:"Index",
    components:{
       "yg-index-header" :Header,
        "yg-index-content":Content,
       "yg-index-footer": Footer
    }
}
</script>

<style>
.allbody{
    height:100%;
    display: flex;
    flex-direction: column;
}
.content{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
