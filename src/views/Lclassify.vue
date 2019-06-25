<template>
    <div>
        <Search></Search>
        <Classify></Classify>
    </div>
</template>

<script>
    // 声明
    import Search from"../components/classify/Search"
    import Classify from'../components/classify/classification'
    export default {
        name: "Lclassify",
        components:{
            "Search":Search,
            "Classify":Classify
        },
    }
</script>

<style scoped>

</style>