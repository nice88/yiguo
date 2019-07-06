<template>
	<div class="big-header">
		<header>
			<div class="left-head">
				<p>总体满意度</p>
				<img src="img/start1.png">
				<img src="img/start1.png">
				<img src="img/start1.png">
				<img src="img/start1.png">
				<img src="img/start1.png">
			</div>
			<div class="right-head">
				<span>5</span><span>分</span>
			</div>
	
		</header>
		<!--nav-->
		<div class="nav">
			<div class="first line" href="javascript:;">
				<div class="imgWrapper" @click="changeCheckState">
					<img src="//img06.yiguoimg.com/d/web/180119/01641/141347/check1.png" alt="" v-if="!checkState">
					<img src="//img06.yiguoimg.com/d/web/180508/01316/175209/check2.png" alt="" v-if="checkState">
				</div>
				<span>只看有内容</span>
			</div>
			<div class="lineItem itemcontent line" v-for="(item,index) in appraise" @click="check(index)"
			:class="{lineItem_active:classIndex===index}">
					<span>{{item.appraise_name}}</span>
					<span>{{item.appraise_num}}</span>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
	    name: "Header",
		data(){
	    	return {
	    		appraise:[
					{
						appraise_name:"全部",
						appraise_num:"1072"
					},
					{
						appraise_name:"好评",
						appraise_num:"1071"
					},
					{
						appraise_name:"中评",
						appraise_num:"1"
					},
					{
						appraise_name:"差评",
						appraise_num:"0"
					}
				],
				classIndex:0,
				checkState:false
			}
		},
		methods:{
			check(index){
				this.classIndex = index
				this.$emit('checkedIndex',index)
			},
			changeCheckState(){
				this.checkState = !this.checkState
			}
		}
	}
</script>

<style scoped>
	.div{
		width:100%;
		height:100%;
	}
	.big-header{
		width:100%;
		position:fixed;
		top:0;
		left:0;
		z-index:10;
		background:white;
		/*overflow:hidden;*/
	}
	header{
		width:100%;
		height:.55rem;
		background:#fff9eb;
		display:flex;
		position:relative;
		align-items:center;
		justify-content:space-around;
		border-bottom:2px solid #e0c689;
		border-top:1px solid #e0c689;
		/*position:fixed;*/
		/*top:0;*/
		/*left:0;*/

	}
	.left-head{
		width:2.1rem;
		height:.33rem;
		/*background:yellow;*/
		display:flex;
		position:absolute;
		top:.1rem;
		left:.11rem;
		align-items: center;
		justify-content: space-around;


	}
	.left-head p{
		font-size:12px;
		color:#dabd79;
	}
	.left-head img{
		width:.2rem;
		height:.2rem;

	}
	.right-head{
		width:1.5rem;
		height:.33rem;
		/*background:blue;*/
		position:absolute;
		top:.1rem;
		left:2.3rem;
		display:flex;
		align-items: center;
		/*justify-content: space-around;*/
	}
	.right-head span:nth-child(1){
		font-size:.30rem;
		color:red;
		padding-left:.9rem;
	}
	.right-head span:nth-child(2){
		font-size:.18rem;
		color:red;
	}
	/*nav*/
	.nav{
		height:.66rem;
		display:flex;
		justify-content: space-around;
		position: relative;
		/* border-right:2rem solid #dddddd; */
		border-bottom:.1rem solid #f4f4f4;
		/*overflow:hidden;*/

	}
	.nav span{
		color:black;
	}
	.imgWrapper{
		width: .18rem;
		height: .18rem;
		margin-right:.06rem
	}
	.first{
		display:flex;
		height: 100%;
		justify-content: center;
		align-items: center;
		font-size:.12rem;
		width:1rem;
	}
	.lineItem{
		display:flex;
		height: 100%;
		justify-content: center;
		align-items: center;
		flex:1;
	}
	.imgWrapper img{
		width:100%;
		height:100%;
	}
	.lineItem span{
		font-size:.12rem
	}
	.lineItem_active span{
		color:#d3b162;
	}
	.itemcontent{
		display:flex;
		flex-direction: column;
	}
	.line{
		position: relative;
	}
	.line:after{
		content:"";
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		height:.3rem;
		width:3px;
		background: #ddd;
	}
	.active span{
		color:red
	}
</style>
