<template>
    <div class="shuliang">
       <p><span>数量</span></p>&nbsp;
       <p class="addreduce">
           <span class="reduce">-</span>
           <span  class="num">0</span>
           <span class="add">+</span>
       </p>
   </div>
</template>

<script>
    export default {
        name: "quantity",
    }
</script>

<style scoped>
	
	/*数量*/
	.shuliang{
	    width:100%;
	    height:.80rem;
	    /*background:red;*/
	    display:flex;
	    align-items:center;
	    border-top:0.02rem solid #f3f3f3;
	    border-bottom:.2rem solid #f3f3f3;
	}
	.shuliang p:nth-child(1){
		height: .12rem;
		display: flex;
	}
	.shuliang p:nth-child(1) span{
	    width:100%;
	    height:.12rem;
		font-size: .12rem;
	    line-height:.12rem;
	    padding-left:.2rem;
	}
	/* .shuliang  input{
	    width:0.5rem;
	    height:0.5rem;
	    /*background:red;
	
	}*/
	/* .shuliang input span{
	    width:.12rem;
	    height:0.5rem;
	    border-radius:.1rem;
	    display:block;
	
	} */
	.shuliang .addreduce{
	    display:flex;
	}
	.shuliang .addreduce .reduce{
	    display:block;
	    width: .3rem;
	    height: 0.35rem;
		font-size: .2rem;
	    border:1px solid #ddd;
	    text-align:center;
	    line-height:0.35rem;
        /*padding-left:.2rem;*/

	
	}
	.shuliang .addreduce .num{
	    display:block;
	    width: .3rem;
	    height: 0.35rem;
		font-size: .2rem;
	    border: 0.01rem solid #ddd;
	    margin:0 0.03rem;
	    text-align:center;
	    line-height:.35rem;
	}
	.shuliang .addreduce .add{
	    display:block;
	    width: .3rem;
	    height: .35rem;
		font-size: .2rem;
	    border: 0.01rem solid #ddd;
	    text-align:center;
	    line-height:.35rem;
	
	}
</style>
