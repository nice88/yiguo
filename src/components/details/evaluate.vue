<template>
    <div>
        <div class="appraise">
                    <div class="appraise-left">
                        <a href="#">评价（97）</a>
                    </div>
                    <div class="appraise-right">
                        <router-link  to="appraise">查看全部</router-link>
                    </div>
        </div>
        <div class="appraise-two">
            <div class="app-one">
                <a href="#"><img class="app-one-img" src="img/D-tx.png"/><p><span>ri***ao</span><span>2019-06-21</span></p></a>
                    <div class="app-two">
                        <img src="img/start.png"/>
                        <img src="img/start.png"/>
                        <img src="img/start.png"/>
                        <img src="img/start.png"/>
                        <img src="img/start.png"/>
                    </div>
            </div>
                <p>超时未评价，系统默认好评</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "evaluate",
    }
</script>

<style scoped>
	/*评价*/
	.appraise{
         width:100%;
         /*height:.5rem;*/
         /*background:red;*/
        display:flex;
        position:relative;
        justify-content:space-between;

     }
    .appraise-left{
        display:flex;
        padding-left:.1rem;
        padding-top:.1rem;


    }
    .appraise-left a{
        color:#99999a;
        font-size:.15rem;
    }
	/*.appraise .appraise-left a{*/
        /*display:flex;*/
	/*}*/
    .appraise-right {
	    padding-right:.15rem ;
        display:flex;
        justifly-content:flex-end;
        padding-top:.1rem;

	}
    .appraise-right a{
        color:#696868;
        font-size:.12rem;

    }
	.appraise-two{
	    width:100%;
	    height:.8rem;
	    border-bottom:.1rem solid #f3f3f3;
	    /*background:yellow;*/
	    /*position:relative;*/
	}
	.app-one{
	    width:100%;
	    height:.5rem;
	    /*background:red;*/
	    position:relative;
	}
	.app-one img{
	    display: block;
	    /*position:absolute;*/
	    /*top:.1rem;*/
	    /*left:.2rem;*/
	}
	.app-one-img{
	    width:.25rem;
	    height:.25rem;
	    position:absolute;
	    top:.1rem;
	    left:.1rem;
	}
	/*.app-one a{*/
	    /*display: block;*/
	/*}*/
	.app-one p span:nth-child(1){
	    color:#211c17;
	    position:absolute;
	    top:0.05rem;
	    left:.5rem;
        font-size:.15rem;
	}
	.app-one p span:nth-child(2){
	    color:#82837e;
	    position:absolute;
	    top:.1rem;
	    left:2.65rem;
        font-size:.16rem;
	}
	.app-two{
	    position:absolute;
	    top:.25rem;
	    left:.43rem;
	    display:flex;
	}
	.app-two img{
	    width:.15rem;
	    height:.15rem;
	    display:block;

	}
    .appraise-two{
        padding-bottom:.15rem;
    }
	.appraise-two p{
	    font-size:0.12rem;
	    color:#313231;
	    /*verticle-align:middle;*/
	    /*position:absolute;*/
	    /*top:1.0rem;*/
	    /*left:1.2rem;*/
	    padding-left:.45rem;
        margin-bottom:.15rem;
	
	}
</style>
