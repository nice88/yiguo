<template>
    <div>
        <Search></Search>
        <Classify></Classify>
        <Footer></Footer>
    </div>
</template>

<script>
    // 声明
    import Search from"../components/classify/Search"
    import Classify from'../components/classify/classification'
    import Footer from '../components/common/footer'
    export default {
        name: "Lclassify",
        components:{
            "Search":Search,
            "Classify":Classify,
            "Footer":Footer
        },
    }
</script>

<style scoped>

</style>