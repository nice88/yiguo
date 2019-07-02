<template>
	<div>
		<span @click="back()" class="iconfont icon-triangle-l"></span>
		<router-link to="/City"><span class="iconfont icon-location">北京</span></router-link>
		<router-link to="/yiguo"><span class="iconfont icon-fangzi"></span></router-link>
		<router-link to="/shop"><span class="iconfont icon-icon"></span></router-link>
		<span class="iconfont icon-xiangshangjiantou" v-show="goTopShow" @click="goTop"></span>
	</div>
</template>

<script>
export default{
	name:'Back',
	data(){
		return{
			scrollTop: "",
      		goTopShow: false,
		}
	},
	methods:{
		back(){
			this.$router.back();
		},
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
};
</script>

<style scoped>
.icon-triangle-l{position: fixed;left: .08rem;top: .08rem;background: #2b0f0e;color: white;width: .3rem;height: .33rem;border-radius: .2rem;line-height: .33rem;text-align: center;}
.icon-location{position: fixed;right: .08rem;top: .08rem;background: #2b0f0e;color: white;width: .6rem;height: .35rem;border-radius: .2rem;line-height: .35rem;text-align: center;font-size: .1rem;}
.icon-fangzi{position: fixed;left: .16rem;bottom: .16rem;background: #2b0f0e;color: white;width: .4rem;height: .4rem;border-radius: .2rem;line-height: .4rem;text-align: center;z-index: 2;}
.icon-icon{position: fixed;left: .64rem;bottom: .16rem;background: #2b0f0e;color: white;width: .4rem;height: .4rem;border-radius: .2rem;line-height: .4rem;text-align: center;z-index: 2;}
.icon-xiangshangjiantou{position: fixed;right: .16rem;bottom: .16rem;background: white;color: #b6b4b4;width: .4rem;height: .4rem;border-radius: .2rem;line-height: .4rem;text-align: center;font-size: .2rem;z-index: 1;}
</style>