<template>
	<div class="position">
		<p><span>送至</span></p>
		<a href="#">
			<div class="position-one">
				<img src="img/D-weizhi.png"/><span>上海 宝山区 宝山区</span>
			</div>
		</a>
		<div class="position-two">
			<span>有货</span> <span>20:00前完成订单，预计明日（6月22日）送达</span>
		</div>
	</div>
</template>

<script>
    export default {
        name: "place",
    }
</script>

<style scoped>
	/*位置*/
	.position{
	    width:100%;
	    height:1rem;
	    display:flex;
		flex-direction: column;
	    border-bottom:.2rem solid #f3f3f3;
		position:relative;
	}
	.position-div{
		display: flex;
		position:absolute;
		/*top:.2rem;*/
		/*left:.1rem;*/
	}
	.position p span:nth-child(1){
		/*height: .45rem;*/
		position:absolute;
		top:.24rem;
		left:1px;
	}
	.position p:nth-child(1) span{
	    font-size:.12rem;
		display: block;
	    padding-left:.2rem;
	}
	.position-one{
	    /*height:40px;*/
	    /*background:yellow;*/
	    /*vertical-align:middle;*/
	    display:flex;
		position:relative;
	}
	.position-one img{
	    width:.12rem;
	    height:.12rem;
	    display:block;
		position:absolute;
		top:.14rem;
		left:.6rem;
	}
	.position-one span{
	    font-size:.14rem;
	    color:#313231;
	    text-align:center;
	    display:block;
		position:absolute;
		top:.12rem;
		left:.8rem;
	    /*vertical-align:middle;*/
	}
	.position-two{
	    width:100%;
	    height:.4rem;
		display: flex;
		position:relative;
	    /*background:blue;*/
	}
	.position-two span:nth-child(1){
	    font-size:.12rem;
	    color:#06b57d;
	    display:block;
		position:absolute;
		top:.40rem;
		left:.6rem;
	}
	.position-two span:nth-child(2){
	    font-size:.12rem;
	    display:block;
		position:absolute;
		top:.40rem;
		left:.9rem;
	}

</style>
