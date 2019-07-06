<template>
	<Loading v-if="show"></Loading>
	<div class="fruit" v-else>
		<div class="navbar">
			<div :class="activeClass == index ? 'aactive':''" v-for="(item,index) in nav" @click="handlePage(index)">{{item.title}}<span v-if="item.span" :class="item.span"></span></div>
		</div>
		<div class="box">
			<div class="pro" v-for="item in datas" :key="item.name">
				<div class="img" @click="to()"><img :src="item.goods_img"></div>
				<div class="detail">
					<h3>{{item.name}}</h3>
					<p>{{item.detail_name}}</p>
					<i class="reduce">{{item.category_name}}</i>
					<p class="price"><span class="money">￥{{item.price}}</span></p>
					<span class="iconfont icon-add121" @click="addToShopCar(item.id,item.price)"></span>
				</div>
			</div>
		</div>
		<div class="car">
			<span class="iconfont icon-gouwuchekong"><b>{{this.$store.getters['city/getAllCount']}}</b></span>
			<span class="iconfont icon-xiangshangjiantou" v-show="goTopShow" @click="goTop"></span>
		</div>
	</div>
</template>
<script>
export default{
	name:'Aclass',
	data(){
		return{
			selectedCount: 1,
			show:true,
			activeClass: 0,
			scrollTop: "",
			datas:[],
      goTopShow: false,
			nav:[{title:"销量"},{title:"新品"},{title:"价格",span:"iconfont icon-shangxiasanjiao"}]
		}
	},
	methods: {
	    handlePage(index){
      		this.activeClass = index;
      		this.axios.get('http://121.199.63.71:8003/search/?q='+this.$route.query.id).then((res)=>{
						var msg = res.data.msg;
						if (msg === 'ok') {
							this.datas = res.data.data.datas;
						}
					})
      	},
      	handleScroll() {
	      this.scrollTop =
	        window.pageYOffset ||
	        document.documentElement.scrollTop ||
	        document.body.scrollTop;
	      if (this.scrollTop > 300) {
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
	      })
	    },
	    to(){
			this.$router.push({
				path:'/details'
			})
		},
		addToShopCar(id,price) {
				//{id:商品的id,count:要购买的数量，price:商品的价格}
				//拼接出一个要保存到store 中car数组中 商品信息对象
				var goodsinfo = {
					id: id,
					count: this.selectedCount,
					price: price
				};
				
				//调用store中的mutations来将商品加入购物车中
				this.$store.commit("city/addToCar", goodsinfo);
				},
		},
	watch: {
	    scrollTop:function(val){
	      if (this.scrollTop > 300) {
	        this.goTopShow = true;
	      } else {
	        this.goTopShow = false;
	      }
	    }
	},
	mounted() {
	    window.addEventListener("scroll", this.handleScroll);
	    this.axios.get('http://121.199.63.71:8003/search/?q='+this.$route.query.id).then((res)=>{
				var msg = res.data.msg;
				if (msg === 'ok') {
					console.log(res)
					this.show = false;
					this.datas = res.data.data.datas;
				}
			})
	},
	destroyed() {
	    window.removeEventListener("scroll", this.handleScroll);
	}
};
</script>

<style scoped>
.fruit{width: 100%;}
.navbar{display: flex;height: .41rem;font-size: .13rem;border-bottom: .01rem solid #ccc;color: #808080;position: fixed;left: 0;top: 0;width: 100%;background: #fff;z-index: 2;}
.navbar>div{flex: 1;line-height: .41rem;text-align: center;}
.aactive{border-bottom: .02rem solid #11B57C;color: #11B57C;}
.navbar>div>span{font-size: .12rem;}
.car>span{position: fixed;right: .15rem;bottom: .85rem;background: #7f7f7f;color: white;width: .35rem;height: .35rem;line-height:.35rem;text-align:center;font-size: .2rem;border-radius: .05rem;opacity: .7;}
.car>span:last-child{bottom: .25rem;background: #f8f8f8;color: #7f7f7f;}

.box{flex: 1;margin-top: .41rem;}
.pro{height: 1.39rem;width: 100%;padding: .18rem .1rem;display: flex;border-bottom: .01rem solid #ccc;font-size: .12rem;}
.img>img{width: 1.14rem;}
.detail{height: 100%;width: 100%;position: relative;}
.detail>h3{font-size: .14rem;font-weight: normal;}
.detail>p{color: #808080;padding: .1rem 0;}
.reduce{height: .19rem;padding: 0 .05rem;line-height: .19rem;font-style: normal;border: .01rem solid #11B57C;color: #11B57C;border-top-left-radius:.03rem;border-bottom-right-radius:.03rem;}
.price{font-size: .1rem;}
.money{font-size: .13rem;color: #fd3d3d;padding-right: .12rem;}
.detail del{padding-right: .05rem;}
.icon-add121{font-size: .24rem;color: #11B57C;padding-right: .12rem;position: absolute;bottom: 0;right: 0;}
 b {
  position: absolute;
  right: -3px;
  top: -3px;
  display: block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  font-size: 0.12rem;
  line-height: 17px;
  font-weight: 700;
  font-family: Arial;
  background: #fb3d3d;
  color: #fff;
}
</style>
