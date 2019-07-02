<template>
	<div>
		<div class="cont">
		<div class="content-one">
			<a href="#"><img class="content-one-img" src="img/tx.png"/><p><span>ss***yy</span><span>2019-06-25</span></p></a>
			<a href="#">
				<div class="content-two">
					<img src="img/start3.png"/>
					<img src="img/start3.png"/>
					<img src="img/start3.png"/>
					<img src="img/start3.png"/>
					<img src="img/start3.png"/>
				</div>
			</a>
		</div>
		<p>超时未评价，系统默认好评</p>
		</div>
	</div>
</template>

<script>
	export default {
	    name: "content",
	    components:{
			
	    }
	}
</script>

<style scoped>
	/*内容*/
	.content{
		width:100%;
		height:100%;
		/*background:yellow;*/
		margin-top:1.31rem;
		/*position:relative;*/
		/*border-bottom:.1rem solid #f3f3f3;*/

	}
	.cont{
		width:100%;
		border-bottom:.1rem solid #f3f3f3;
	}
	.content-one{
		width:100%;
		height:.55rem;
		position:relative;
	}
	/*.content-img{*/
	/*width:.4rem;*/
	/*height:.4rem;*/
	/*position:absloute;*/
	/*top:.2rem;*/
	/*left:.2rem;*/
	/*}*/
	.content-one img{
		display:block;
	}
	.content-one-img{
		width:.25rem;
		height:.25rem;
		position:absolute;
		top:.05rem;
		left:.05rem;
	}
	.content-one a{
		display:block;
	}
	.content-one p span:nth-child(1){
		color:#0d0d0d;
		font-size:14px;
		position:absolute;
		top:.05rem;
		left:.5rem;
	}
	.content-one p span:nth-child(2){
		color:#0d0d0d;
		font-size:11px;
		position:absolute;
		top:.05rem;
		left:2.9rem;
	}
	.content-two{
		position:absolute;
		top:.3rem;
		left:.5rem;
		display:flex;
	}
	.content-two img{
		width:.15rem;
		height:.15rem;
		display:block;
	}
	.content p{
		font-size:14px;
		color:#313231;
		padding-left:.22rem;
		margin-bottom:.25rem;
		display:block;
		/*position:absolute;*/
		/*top:.23rem;*/
		/*left:.22rem;*/

	}
</style>
