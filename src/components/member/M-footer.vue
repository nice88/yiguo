<template>
    <div class="M-footer">
        <!--footer-->
        <div class="footer">
            <p>所有权益</p>
            <div style="height:1px;border:none;border-top:1px solid #e6e6e6;" ></div>
            <div class="footer-one">
				<div class="footer-two">
					<a href="#"><img src="img/liwu.jpg"/><span>尊享礼</span></a>
					<a href="#"><img src="img/cake.jpg"/><span>生日礼</span></a>
					<a href="#"><img src="img/nianzhongjiang.jpg"/><span>年终礼</span></a>
					<a href="#"><img src="img/xn.jpg"/><span>多倍悠币</span></a>
					<a href="#"><img src="img/jiage.jpg"/><span>专享价</span></a>
					<a href="#"><img src="img/U.jpg"/><span>悠币换购</span></a>
					<a href="#"><img src="img/dingshida.jpg"/><span>定是达</span></a>
					<a href="#"><img src="img/kefu.jpg"/><span>400客服</span></a>
				</div>
            </div>
            <div class="none-box">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "M-footer"
    }
</script>

<style scoped>
	
	.footer{
	    width:100%;
	    height:1.91rem;
	    /*background:red;*/
	}
	.footer p{
	    font-size:15px;
	    color:#808080;
	    padding-left:.1rem;
	    padding-top:.1rem;
	    margin-bottom:10px;
	}
	.footer-one{
	    width:3.75rem;
	    height:1.135rem;
		overflow-x: auto;
		padding-top: .2rem;
	    padding-left:.2rem;
	}
	.footer-two{
		width: 6rem;
	    display:flex;
	    justify-content:space-between;
	    align-items: center;
	}
	.footer-one a{
	    display:block;
	    text-align:center;
	    margin-right:10px;
	}
	.footer-one a img{
	    width:.52rem;
	    height:.52rem;
	    border-radius:.5rem;
		overflow: hidden;
	    border:.03rem solid #d9d9d9;
	
	}
	.footer-one a span{
	    font-size:14px;
	    color:#8b8b8b;
	    display:block;
	}
	.none-box {
	    width: 100%;
	    height: .36rem;
	    background: #efeff4;
	}
</style>