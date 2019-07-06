<template>
	 <div class="footer">
	    <div class="footer-one">
	        <div class="foot-one">
				<ul>
					<router-link to="/yiguo"
					tag="li">
						<img src="img/sy.png"/>
						<span>首页</span>
					</router-link>
				</ul>
	        </div>
	        <div class="foot-two">
				<ul>
					<router-link to="/shop"
					tag="li">
						<img src="img/gwc.png"/>
						<span>购物车</span>
					</router-link>
				</ul>
	        </div>
	    </div>
	    <div class="footer-two">
			<!--<ul>-->
				<!--<router-link to="/shop"-->
							 <!--:tag="li"></router-link>-->
				<!--<button>加入购物车</button>-->
			<!--</ul>-->
	        <a href="#"><button  @click="addToShopCar(items.id,items.price)">加入购物车</button></a>
	    </div>
	</div>
</template>
<script>
	 export default {
	    name: "Footer",
	}
</script>

<style scoped>
	 /*footer*/
	.footer{
	    width:100%;
	    height:.6rem;
	    border:0.02rem solid #f1f1f1;
	    display:flex;
	    /*position:absolute;*/
	    position:fixed;
	    bottom:0;
	    left:0;
	}
	.footer-one{
	    width:1rem;
	    height:.6rem;
	    background:white;
	    position:relative;
	    border:none;
	
	}
	.foot-one{
	    width:.3rem;
	    height:.3rem;
	    /*background:blue;*/
	    position:absolute;
	    top:.15rem;
	    left:.1rem;
	}
	.foot-one a{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.foot-one img{
	    width:.3rem;
	    height:.3rem;
	}
	.foot-one span{
	    font-size:.1rem;
	    color:#8d8c8b;
	}
	.foot-two{
	    width:.3rem;
	    height:.3rem;
	    /*background:blue;*/
	    position:absolute;
	    top:.15rem;
	    left:.6rem;
	}
	 .foot-two a{
		 display:flex;
		 flex-direction:column;
		 justify-content:center;
		 align-items:center;
	 }
	.foot-two img{
	    width:.3rem;
	    height:.3rem;
	}
	.foot-two span{
	    font-size:.1rem;
	    color:#8d8c8b;
	}
	.footer-two{
	    flex:1;
	}
	.footer-two a{
		display:block;
		width:100%;
		height:100%;

	}
	.footer-two  button{
	    width:100%;
		height:100%;
		display:block;
	    background:red;
	    font-size:.24rem;
	    color:white;
	    border:none;
	}

</style>
