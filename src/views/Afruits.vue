<template>
	<div class="fruit">
		<div class="navbar">
			<div :class="activeClass == index ? 'aactive':''" v-for="(item,index) in nav" @click="handlePage(index)">{{item.title}}<span v-if="item.span" :class="item.span"></span></div>
		</div>
		<component :is="page"></component>
		<div class="car">
			<span class="iconfont icon-gouwuchekong"></span>
			<span class="iconfont icon-xiangshangjiantou" v-show="goTopShow" @click="goTop"></span>
		</div>
	</div>
</template>
s
<script>
import Sales from '../components/afruits/sales.vue'
import News from '../components/afruits/news.vue'
import Price from '../components/afruits/price.vue'
export default{
	name:'Afruits',
	data(){
		return{
			page:'Sales',
			activeClass: 0,
			scrollTop: "",
      		goTopShow: false,
			nav:[{title:"销量"},{title:"新品"},{title:"价格",span:"iconfont icon-shangxiasanjiao"}]
		}
	},
	components:{
		Sales,
		News,
		Price
	},
	methods: {
	    handlePage(index){
	      	var comName = "";
	      	switch(index){
		        case 0:
		          comName = "Sales";
		          break;
		        case 1:
		          comName = "News";
		          break;
		        case 2:
		          comName = "Price";
		          break;
	    	}
      		this.page = comName;
      		this.activeClass = index;
      	},
      	handleScroll() {
	      this.scrollTop =
	        window.pageYOffset ||
	        document.documentElement.scrollTop ||
	        document.body.scrollTop;
	        console.log(this.scrollTop)
	      if (this.scrollTop > 60) {
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
	      if (this.scrollTop > 60) {
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
.fruit{width: 100%;}
.navbar{display: flex;height: .41rem;font-size: .13rem;border-bottom: .01rem solid #ccc;color: #808080;position: fixed;left: 0;top: 0;width: 100%;background: #fff;}
.navbar>div{flex: 1;line-height: .41rem;text-align: center;}
.aactive{border-bottom: .02rem solid #11B57C;color: #11B57C;}
.navbar>div>span{font-size: .12rem;}
.car>span{position: fixed;right: .15rem;bottom: .85rem;background: #7f7f7f;color: white;width: .35rem;height: .35rem;line-height:.35rem;text-align:center;font-size: .2rem;border-radius: .05rem;opacity: .7;}
.car>span:last-child{bottom: .25rem;background: #f8f8f8;color: #7f7f7f;}
</style>