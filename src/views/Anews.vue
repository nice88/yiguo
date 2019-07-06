<template>
	<Loading v-if="show"></Loading>
	<div class="new" v-else>
		<Active><img src="https://img09.yiguoimg.com/d/items/2019/190329/9288737670506109_1125x652.jpg"></Active>
		<div class="shops">
			<div class="two">
				<img src="https://img14.yiguoimg.com/d/items/2019/190304/9288737492739684_1125x160.jpg">
			</div>
			<div class="shop">
				<ul>
					<li v-for="item in everyday" :key='item.id'>
						<div class="simg" @click="to(item.id)">
							<img :src="item.goods_img">
							<!-- <p><span>{{item.act}}</span></p> -->
						</div>
						<p class="name">{{item.name}}</p>
						<p class="price">￥<b>{{item.price}}</b>
							<span class="iconfont icon-gouwuchekong"></span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="shops">
			<div class="two">
				<img src="https://img14.yiguoimg.com/d/items/2019/190304/9288737492870756_1125x160.jpg">
			</div>
			<div class="shop">
				<ul>
					<li v-for="item in more" :key='item.id' @click="to()">
						<div class="simg">
							<img :src="item.goods_img">
							<!-- <p><span>{{item.act}}</span></p> -->
						</div>
						<p class="name">{{item.name}}</p>
						<p class="price">￥<b>{{item.price}}</b>
							<span class="iconfont icon-gouwuchekong"></span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="three">
			<img src="https://img12.yiguoimg.com/d/items/2019/190304/9288737493198436_1125x266.jpg">
		</div>
		<Back/>
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
			everyday:[],
			more:[],
			show:true
		}
	},
	methods:{
		to(id){
			this.$router.push({
				path:'/details',
				query:{id:id}
			})
		}
	},
	mounted(){
		this.axios.get('http://121.199.63.71:8003/home/new/').then((res)=>{
			var msg = res.data.msg;
			if (msg === 'ok') {
				this.show = false;
				this.everyday = res.data.datas;
				this.more = res.data.datas_o
			}
		})
	}
};
</script>

<style scoped>
.new{width: 100%;height: 100%;overflow-y: scroll;background: white;}
.two{width: 100%;height: .53rem;}
.two>img{width: 100%;height: .53rem;}
.shop{width: 100%;height: 100%;padding: 0 .07rem .06rem;}
.shop>ul{width: 100%;height: 100%;padding: 0 .06rem;overflow: hidden;}
.shop>ul>li{width: 1.12rem;height: 1.83rem;float: left;margin-top: .12rem;margin-right: .043rem;box-shadow: 0 0 5px rgba(0,0,0,.2);}
.simg{width: 100%;height: 1.12rem;position: relative;}
.simg>img{width: 100%;height: 1.12rem;}
.simg>p{position: absolute;left: 0;bottom: 0;width: 100%;font-size: .09rem;text-align: center;height: .15rem;line-height: .15rem;color: #45b575;}
.simg>p>span{border: 1px solid #45b575;border-radius: .07rem;padding: 0 .05rem;z-index: 2;}
.name{width: 100%;font-size: .1rem;margin-top: .07rem;}
.price{color: rgb(251, 61, 61);margin-top: .07rem;font-size: .1rem;position: relative;}
.price>b{font-size: .17rem;font-weight: normal;}
.icon-gouwuchekong{color:white;background: #01b27a;position: absolute;right: .07rem;bottom: 0;width: .2rem;height: .2rem;line-height: .2rem;text-align: center;font-size: .1rem;border-radius: .1rem;}
.three{width: 100%;height: .88rem;}
.three>img{width: 100%;height: .88rem;}
</style>