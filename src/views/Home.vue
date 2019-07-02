<template>
    <div class="allbody">
        
        <yg-index-header></yg-index-header>
        <div class="content">
            <yg-index-content></yg-index-content>
        </div>
        <yg-index-footer></yg-index-footer>
        <massageBox/>
    </div>
</template>

<script>
import Header from '../components/home/header'
import Content from '../components/home/content'
<<<<<<< HEAD
import Footer from '../components/common/footer'
import massageBox from '../components/JS/MessageBox'
=======
import Footer from '../components/common/footer.vue'
>>>>>>> 1aa1bfb95d2f85fa91202fa8d5e1ee3a66649bb1
export default {
    name:"Index",
    data(){
        return{
            flag:true
        }
    },
    components:{
       "yg-index-header" :Header,
        "yg-index-content":Content,
<<<<<<< HEAD
       "yg-index-footer": Footer,
       massageBox
    },
   
    //   mounted(){
    //     setTimeout(()=>{
    //         this.axios.get('/api/getLocation').then((res)=>{
    //             var msg = res.data.msg;
    //             if(msg === 'ok'){

    //                 var nm = res.data.data.nm;
    //                 var id = res.data.data.id;
    //                 if( this.$store.state.city.id == id ){return;}
    //                 messageBox({
    //                     title : '定位',
    //                     content : nm,
    //                     cancel : '取消',
    //                     ok : '切换定位',
    //                     handleOk(){
    //                         window.localStorage.setItem('nowNm',nm);
    //                         window.localStorage.setItem('nowId',id);
    //                         window.location.reload();
    //                     }
    //                 });
    //             }
    //         });
    //     },3000);
       
    // }
}
=======
       "yg-index-footer": Footer
    }
};
>>>>>>> 1aa1bfb95d2f85fa91202fa8d5e1ee3a66649bb1
</script>

<style scoped>
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
