<template>
<div>
   <yg-content-banner></yg-content-banner>
   <yg-content-menu></yg-content-menu>
   <div class="first-screen-ad">
       <img :src="listImg">
   </div>
   <yg-content-bannernext></yg-content-bannernext>
   <yg-content-group></yg-content-group>
   <yg-content-clear></yg-content-clear>
   <yg-content-prolist></yg-content-prolist>
   <yg-content-prolise></yg-content-prolise>
</div>   
</template>

<script>
import Banner from './content/banner'
import Menu from './content/menu'
import Bannernext from './content/bannernext'
import Group from "./content/group";
import Clear from "./content/clear";
import Prolist from "./content/prolist"
import Prolise from "./content/prolise"

export default {
    name:"Content",
    components:{
        "yg-content-banner":Banner,
        "yg-content-menu":Menu,
        "yg-content-bannernext":Bannernext,
        "yg-content-group":Group,
        "yg-content-clear":Clear,
        "yg-content-prolist":Prolist,
        "yg-content-prolise":Prolise
    },
    data(){
        return{
            listImg:"https://img09.yiguoimg.com/d/items/2019/190620/9710950771762900_1125x344.gif?w=1125&h=344"
        }
    }
}
</script>

<style scoped>
    .first-screen-ad{
        width:100%;
        overflow: hidden;
    }
     .first-screen-ad img{
         width:100%;
     }
   
</style>
