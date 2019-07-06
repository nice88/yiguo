<template>
    <div class="guige">
        <span>规格</span>
		<span>4个/盒</span>
    </div>
</template>

<script>
    export default {
        name: "specification",
    }
</script>

<style scoped>
	/*规格*/
	.guige{
	    width:100%;
	    height:.80rem;
	    /*background:red;*/
	    /* display:flex; */
	    /*justify-content: start;*/ 
		display:flex;
	    align-items:center;
	    border-top:.2rem solid #f3f3f3;
	}

	.guige span{
		padding-left: .2rem;
		font-size: .12rem !important;
        padding-right:.2rem;
	}
	.guige span:nth-child(2){
	    margin-left:.1rem;
	    padding:.1rem .3rem .1rem .3rem;
	    color:green;
	    border:0.01rem solid green;
	    border-radius:.2rem;
	
	}
</style>
