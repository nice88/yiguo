<template>
	<div class="food">
		<Active><img src="https://img12.yiguoimg.com/d/items/2019/190304/9288737493460580_1125x652.jpg"></Active>
		<Back/>
		<div class="week">
			<div class="two">
				<img src="https://img14.yiguoimg.com/d/items/2019/190304/9288737493493348_1125x160.jpg">
			</div>
			<div class="sell" v-for="item in sell" :key="item.id" >
				<div class="simg" @click="to(item.id)">
					<img :src="item.goods_img">
				</div>
				<div class="detail">
					<h3>{{item.name}}</h3>
					<p>{{item.detail_name}}</p>
					<!-- <i class="reduce">{{item.redu}}</i> -->
					<p class="price"><span class="money">¥{{item.price}}</span></p>
					<b class="add"><span class="iconfont icon-gouwuchekong" @click="addToShopCar(item.id,item.price)"></span></b>
				</div>
			</div>
		</div>
		<div class="delisious">
			<div class="two">
				<img src="https://img11.yiguoimg.com/d/items/2019/190304/9288737493526116_1125x160.jpg">
			</div>
			<ul class="box">
				<li v-for="item in delicious" :key="item.id" @click="to()">
					<div class="bpic">
						<img :src="item.goods_img">
						<span v-if="item.detail_name">{{item.detail_name}}</span>
					</div>
					<div class="bdel">
						<p class="name">{{item.name}}</p>
						<p class="bpri"><b>¥{{item.price}}</b></p>
						<router-link to="/shop"><span class="iconfont icon-gouwuche"></span></router-link>
					</div>
				</li>
			</ul>
		</div>
		<div class="foot">
			<img src="https://img12.yiguoimg.com/d/items/2019/190304/9288737493558884_1125x266.jpg">
		</div>
	</div>
</template>

<script>
import Back from '../components/common/back.vue'
import Active from '../components/common/acitve.vue'
export default{
	name:'Anews',
	components:{
		Back,
		Active
	},
	data(){
		return{
			sell:[],
			delicious:[],
			selectedCount: 1 //保存用户选中的数量
		}
	},
	methods:{
		to(id){
			this.$router.push({
				path:'/details',
				query:{id:id}
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
	mounted(){
		this.axios.get('http://121.199.63.71:8003/home/hot/').then((res)=>{
			var msg = res.data.msg;
			if (msg === 'ok') {
				this.sell = res.data.datas;
				this.delicious = res.data.datas_o
			}
		})
	}
};
</script>

<style scoped>
.food{width: 100%;overflow-y: scroll;background: white;}
.two{width: 100%;height: .53rem;}
.two>img{width: 100%;height: .53rem;}
.sell{width: 100%;height: 1.55rem;padding: .09rem;display: flex;font-size: .12rem;}
.simg{width: 1.37rem;height: 100%;}
.simg>img{width: 1.37rem;height: 100%;}
.sdel{height: 100%;background: blue;width: 62%;}
.detail{width: 100%;margin: .17rem 0;}
.detail>h3{font-size: .16rem;font-weight: normal;}
.detail>p{color: #808080;padding: .06rem 0;font-size: .11rem;}
.reduce{padding: 0 .05rem;line-height: .19rem;font-style: normal;border: .01rem solid #11B57C;color: #11B57C;border-radius:.19rem;display: inline-block;}
.price{font-size: .1rem;margin-top: .04rem;}
.money{font-size: .17rem;color: #fd3d3d;font-weight: bold;}
.add{float: right;margin-top: -0.2rem;background: #01b27a;height: .19rem;width: .19rem;line-height: .19rem;text-align: center;font-weight: normal;border-radius: .19rem;}
.icon-gouwuchekong{color: white;font-size: .12rem;}
.box{width: 100%;height: 100%;padding: 0 .07rem .06rem;overflow: hidden;}
.box>li{width: 50%;height: 2.18rem;float: left;padding: .08rem .15rem 0;}
.bpic{width: 1.5rem;height: 1.5rem;position: relative;}
.bpic>img{width: 1.5rem;height: 1.5rem;}
.bpic>span{height: .16rem;line-height: .16rem;color: #45b575;border: 1px solid #45b575;border-radius: .16rem;font-size: .04rem;padding: 0 .05rem;position: absolute;bottom: 0;left: .15rem;width: 1.2rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;text-align: center;}
.bdel{font-size: .04rem;margin-top: .06rem;position: relative;}
.name{width: 100%;text-align: center;color: #333;}
.bpri{color: #8d8a8a;margin-top: .06rem;}
.bpri>b{color: #fb3d3d;}
.icon-gouwuche{position: absolute;right: 0;bottom: -.1rem;background: #01b27a;color: white;width: .2rem;height: .2rem;line-height: .2rem;text-align: center;font-size: .12rem;border-radius: .2rem;}
.foot{width: 100%;height: .88rem}
.foot>img{width: 100%;height: .88rem}
.icon-xiangshangjiantou{position: absolute;right: .16rem;bottom: .16rem;background: white;color: #b6b4b4;width: .4rem;height: .4rem;border-radius: .2rem;line-height: .4rem;text-align: center;font-size: .2rem;z-index: 1;}
</style>