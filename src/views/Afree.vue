<template>
	<div class="free">
		<div v-for="(item,index) in picture" :key="item.id">
			<div class="one">
				<img :src="item.one">
			</div>
			<div class="two">
				<img :src="item.two">
			</div>
			<div class="three">
				<img :src="item.three">
			</div>
			<div class="four">
				<img :src="item.four">
			</div>
			<div class="five">
				<img :src="item.five">
			</div>
			<div class="six">
				<img :src="item.six">
			</div>
			<div class="card">
				<ul>
					<li v-for="item in del" :key="item.id" @click="to()">
						<div class="prod">
							<div class="proimg">
								<img :src="item.src">
							</div>
							<p class="pronm">{{item.nm}}</p>
							<p class="propri"><b>¥{{item.price}}</b>/{{item.num}}</p>
							<div class="procar"><span class="iconfont icon-gouwuchekong"></span></div>
						</div>
					</li>
				</ul>
			</div>
			<div class="seven">
				<img :src="item.seven">
			</div>
			<div class="eight">
				<img :src="item.eight">
			</div>
			<div class="nine">
				<img :src="item.nine">
			</div>
		</div>
		<back/>
	</div>
</template>

<script>
import back from '../components/common/back.vue'
export default{
	name:'Anews',
	components:{
		back
	},
	data(){
		return{
			picture:[
				{
					id:'01',
					one:'https://img10.yiguoimg.com/d/items/2019/190514/9288738001266350_1125x1298.jpg',
					two:'https://img10.yiguoimg.com/d/items/2019/190514/9288738001888942_1125x1212.jpg',
					three:'https://img09.yiguoimg.com/d/items/2019/190516/9710950485730992_1125x230.gif',
					four:'https://img12.yiguoimg.com/d/items/2019/190514/9288738001921710_1122x1600.jpg',
					five:'https://img12.yiguoimg.com/d/items/2019/190514/9288738001462958_1125x1237.jpg',
					six:'https://img13.yiguoimg.com/d/items/2019/190514/9288738008540846_1125x201.jpg',
					seven:'https://img12.yiguoimg.com/d/items/2019/190514/9288738001495726_1125x1238.jpg',
					eight:'https://img10.yiguoimg.com/d/items/2019/190514/9288738001528494_1125x828.jpg',
					nine:'https://img13.yiguoimg.com/d/items/2019/190514/9288738001561262_1125x233.jpg'
				},
			],
			del:[
				{
					id:'02',
					src:'https://img10.yiguoimg.com/d/items/2018/181120/9288734300677492_300.jpg',
					nm:'300元储值卡',
					price:'300',
					num:'一张'
				},
				{
					id:'03',
					src:'https://img10.yiguoimg.com/d/items/2018/181120/9288734300677492_300.jpg',
					nm:'3aaaa',
					price:'300',
					num:'一张'
				},
				{
					id:'04',
					src:'https://img10.yiguoimg.com/d/items/2018/181120/9288734300677492_300.jpg',
					nm:'3aaaa',
					price:'300',
					num:'一张'
				},
				{
					id:'05',
					src:'https://img10.yiguoimg.com/d/items/2018/181120/9288734300677492_300.jpg',
					nm:'3aaaa',
					price:'300',
					num:'一张'
				}
			]
		}
	},
	methods:{
		to(){
			this.$router.push('/details');
		}
	}
};
</script>

<style scoped>
.free{width: 100%;overflow-y: scroll;background: white;}
.one{width: 100%;height: 4.33rem;}
.one>img{width: 100%;height: 4.33rem;}
.two{width: 100%;height: 4.04rem;}
.two>img{width: 100%;height: 4.04rem;}
.three{width: 100%;height: .76rem;}
.three>img{width: 100%;height: .76rem;}
.four{width: 100%;height: 5.33rem;}
.four>img{width: 100%;height: 5.33rem;}
.five{width: 100%;height: 4.12rem;}
.five>img{width: 100%;height: 4.12rem;}
.six{width: 100%;height: .67rem;}
.six>img{width: 100%;height: .67rem;}
.seven{width: 100%;height: 4.12rem;}
.seven>img{width: 100%;height: 4.12rem;}
.eight{width: 100%;height: 2.76rem;}
.eight>img{width: 100%;height: 2.76rem;}
.nine{width: 100%;height: .77rem;}
.nine>img{width: 100%;height: .77rem;}
.card{padding: 0 .07rem .05rem;width: 100%;}
.card>ul{width: 100%;overflow: hidden;}
.card>ul>li{width: 1.8rem;height: 2.1rem;padding: .05rem .07rem 0;float: left;}
.prod{height: 100%;position: relative;}
.proimg{width: 100%;height: 1.6rem;}
.proimg>img{width: 100%;height: 1.6rem;}
.pronm{width: 100%;color: #333;font-size: .11rem;text-align: center;}
.propri{font-size: .11rem;color: #8d8a8a;margin-top: .06rem;}
.propri>b{color: #fb3d3d;margin-right: .02rem;display: inline-block;}
.procar>span{color: white;background: #01b27a;position: absolute;right: 0;bottom: 0;width: .2rem;height: .2rem;line-height: .2rem;text-align: center;font-size: .13rem;border-radius: .2rem;}
</style>