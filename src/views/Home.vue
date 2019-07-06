<template>
    <div class="allbody">
        
        <yg-index-header></yg-index-header>
        <div class="content">
            <yg-index-content></yg-index-content>
        </div>
        <keep-alive>      
        <yg-index-footer></yg-index-footer>
        </keep-alive> 
    </div>
</template>

<script>
import Header from '../components/home/header'
import Content from '../components/home/content'
import Footer from '../components/common/footer'
import {messageBox} from '../components/JS'
export default {
    name:"Index",
    components:{
       "yg-index-header" :Header,
        "yg-index-content":Content,
       "yg-index-footer": Footer,
       
      
    },
   
      mounted(){
        setTimeout(()=>{
            this.axios.get('/api/getLocation').then((res)=>{
                var msg = res.data.msg;
                if(msg === 'ok'){

                    var nm = res.data.data.nm;
                    var id = res.data.data.id;
                    if( this.$store.state.city.id == id ){return;}
                    messageBox({
                        title : '定位',
                        content : nm,
                        cancel : '取消',
                        ok : '切换定位',
                        handleOk(){
                            window.localStorage.setItem('nowNm',nm);
                            window.localStorage.setItem('nowId',id);
                            window.location.reload();
                        },
                        handleCancel(){
                             window.location.reload();
                        }                  
                    });
                }
            });
        },3000);
       
    }
//     mounted(){
//         messageBox({
//             title : '定位',
//             content : "厦门",
//             cancel : '取消',
//             ok : '切换定位',
//         });
// }
}
</script>

<style scoped>
.allbody{
   
    display: flex;
    flex-direction: column;
}
.content{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
