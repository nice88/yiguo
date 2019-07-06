<template>
<div>
    <div class="suspend-top" v-show="goTopShow" @click="goTop">
        <img src="//img07.yiguoimg.com/e/web/161230/00584/172344/top.png" alt="">
    </div>
</div>
</template>

<script>
let timer =null;
export default {
    name:"SupTop",
     data(){
		return{
			scrollTop: "",
      		goTopShow: false,
		}
	},

methods:{
	
		handleScroll() {
	      this.scrollTop =
	        window.pageYOffset ||
	        document.documentElement.scrollTop ||
	        document.body.scrollTop;
	      if (this.scrollTop > 100) {
	        this.goTopShow = true;
	      }
	    },
	    goTop() {
	      let timer = null,
	        _that = this;
	      cancelAnimationFrame(timer);
	      timer = requestAnimationFrame(function fn() {
	        if (_that.scrollTop > 0) {
	          _that.scrollTop -= 50;
	          document.body.scrollTop = document.documentElement.scrollTop =
	            _that.scrollTop;
	          timer = requestAnimationFrame(fn);
	        } else {
	          cancelAnimationFrame(timer);
	          _that.goTopShow = false;
	        }
	      });
	    }
	},
	watch: {
	    scrollTop:function(val){
	      if (this.scrollTop > 100) {
	        this.goTopShow = true;
	      } else {
	        this.goTopShow = false;
	      }
	    }
	},
	mounted() {
	    window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
	    window.removeEventListener("scroll", this.handleScroll);
	}


}
</script>

<style scoped>
.suspend-top img{
        width:100%;
    }
 .suspend-top {
    position: fixed;
    right: 4%;
    bottom: 18%;
    width: .4rem;
    height: .4rem;
}
</style>
