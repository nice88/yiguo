<template>
	<h2>
	<slot name="jtou"></slot>
	{{title}}
	</h2>
</template>

<script>
	export default{
		name:"Header",
		props:{
			title:{
				type:String,
				default:"猫眼电影"
			}
		}
	};
</script>

<style scoped>
	h2{
		height: 1.04rem;
		background: #e54847;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: .36rem;
		font-weight: 400;
		font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
		border-bottom: 1px solid #e54847;
		position: relative;
	}
	img{
		width:.5rem;
		height: .5rem;
		position: absolute;
		left: .3rem;
		top: .3rem;
	}
</style>