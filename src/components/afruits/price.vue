<template>
	<div class="box">
		<div class="pro" v-for="item in details" :key="item.id" @click="todel()">
			<div class="img"><img :src="item.src"></div>
			<div class="detail">
				<h3>{{item.nm}}</h3>
				<p>{{item.del}}</p>
				<i class="reduce">{{item.redu}}</i>
				<p class="price"><span class="money">¥{{item.pri}}</span><del>¥{{item.pre}}</del>{{item.weight}}</p>
				<p class="add"><span class="iconfont icon-add121"></span></p>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'Price',
	data(){
		return{
			details:[
				{
					id:'01',
					src:'https://img13.yiguoimg.com/d/items/2019/190428/9288737869342364_300.jpg',
					nm:'海南妃子笑荔枝1kg',
					del:'晶莹饱满 入口鲜甜多汁',
					redu:'直降29.1元',
					pri:'29.9',
					pre:'59',
					weight:'1kg/箱'
				},
				{
					id:'02',
					src:'https://img13.yiguoimg.com/d/items/2019/190428/9288737869342364_300.jpg',
					nm:'海南妃子笑荔枝1kg',
					del:'晶莹饱满 入口鲜甜多汁',
					redu:'直降29.1元',
					pri:'29.9',
					pre:'59',
					weight:'1kg/箱'
				},
				{
					id:'03',
					src:'https://img13.yiguoimg.com/d/items/2019/190428/9288737869342364_300.jpg',
					nm:'海南妃子笑荔枝1kg',
					del:'晶莹饱满 入口鲜甜多汁',
					redu:'直降29.1元',
					pri:'29.9',
					pre:'59',
					weight:'1kg/箱'
				},
				{
					id:'04',
					src:'https://img13.yiguoimg.com/d/items/2019/190428/9288737869342364_300.jpg',
					nm:'海南妃子笑荔枝1kg',
					del:'晶莹饱满 入口鲜甜多汁',
					redu:'直降29.1元',
					pri:'29.9',
					pre:'59',
					weight:'1kg/箱'
				},
				{
					id:'05',
					src:'https://img13.yiguoimg.com/d/items/2019/190428/9288737869342364_300.jpg',
					nm:'海南妃子笑荔枝1kg',
					del:'晶莹饱满 入口鲜甜多汁',
					redu:'直降29.1元',
					pri:'29.9',
					pre:'59',
					weight:'1kg/箱'
				}
			]
		}
	},
	methods:{
		todel(){
			this.$router.push('/details')
		}
	}
};
</script>

<style scoped>
.box{flex: 1;overflow-y: auto;overflow-x: hidden;margin-top: .41rem;}
.pro{height: 1.39rem;width: 100%;padding: .18rem .1rem;display: flex;border-bottom: .01rem solid #ccc;font-size: .12rem;}
.img>img{width: 1.14rem;}
.detail{height: 100%;width: 100%;}
.detail>h3{font-size: .14rem;font-weight: normal;}
.detail>p{color: #808080;padding: .1rem 0;}
.reduce{height: .19rem;padding: 0 .05rem;line-height: .19rem;font-style: normal;border: .01rem solid #11B57C;color: #11B57C;border-top-left-radius:.03rem;border-bottom-right-radius:.03rem;}
.price{font-size: .1rem;}
.money{font-size: .13rem;color: #fd3d3d;padding-right: .12rem;}
.detail del{padding-right: .05rem;}
.add{float: right;margin-top: -0.4rem;}
.add>span{font-size: .24rem;color: #11B57C;padding-right: .12rem;}
</style>