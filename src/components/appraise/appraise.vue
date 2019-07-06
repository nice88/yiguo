<template>
    <div class="div">
        <!--评价-->
        <!--header-->
        <div class="headerWrapper">
            <yg-appraise-wheel @checkedIndex="checked"/>
        </div>
        <!--<div class="border-one"></div>-->
        <!--内容-->
        <div class="content">
            <yg-appraise-content :itemInfo="dataInfo"/>
        </div>
        <div class="content">
            <yg-appraise-content :itemInfo="dataInfo"/>
        </div>
    </div>
</template>

<script>
    import header from "./header"
    import content from "./content"
    import info from '../../../public/pinlun.json'

    export default {
        name: "appraise",
        data() {
            return {
                dataInfo: info.info[0],
                showPageIndex: 0
            }
        },
        components: {
            "yg-appraise-wheel": header,
            "yg-appraise-content": content,
        },
        methods: {
            checked(val) {
                this.dataInfo = info.info[val]
                this.showPageIndex = val
            }
        },
        mounted(){
            console.log(info)
        }
    }

</script>

<style scoped>
    .headerWrapper {
        height: 121px;
    }

    /*.div{*/
    /*width:100%;*/
    /*height:100%;*/
    /*}*/
    /*.big-header{*/
    /*width:100%;*/
    /*position:fixed;*/
    /*top:0;*/
    /*left:0;*/
    /*z-index:10;*/
    /*background:white;*/
    /*!*overflow:hidden;*!*/
    /*}*/
    /*header{*/
    /*width:100%;*/
    /*height:.55rem;*/
    /*background:#fff9eb;*/
    /*display:flex;*/
    /*position:relative;*/
    /*align-items:center;*/
    /*justify-content:space-around;*/
    /*border-bottom:2px solid #e0c689;*/
    /*border-top:1px solid #e0c689;*/
    /*!*position:fixed;*!*/
    /*!*top:0;*!*/
    /*!*left:0;*!*/

    /*}*/
    /*.left-head{*/
    /*width:2.1rem;*/
    /*height:.33rem;*/
    /*!*background:yellow;*!*/
    /*display:flex;*/
    /*position:absolute;*/
    /*top:.1rem;*/
    /*left:.11rem;*/
    /*align-items: center;*/
    /*justify-content: space-around;*/


    /*}*/
    /*.left-head p{*/
    /*font-size:.12rem;*/
    /*color:#dabd79;*/
    /*}*/
    /*.left-head img{*/
    /*width:.2rem;*/
    /*height:.2rem;*/

    /*}*/
    /*.right-head{*/
    /*width:1.5rem;*/
    /*height:.33rem;*/
    /*!*background:blue;*!*/
    /*position:absolute;*/
    /*top:.1rem;*/
    /*left:2.3rem;*/
    /*display:flex;*/
    /*align-items: center;*/
    /*!*justify-content: space-around;*!*/
    /*}*/
    /*.right-head span:nth-child(1){*/
    /*font-size:.30rem;*/
    /*color:red;*/
    /*padding-left:.9rem;*/
    /*}*/
    /*.right-head span:nth-child(2){*/
    /*font-size:.18rem;*/
    /*color:red;*/
    /*}*/
    /*!*nav*!*/
    /*.nav{*/
    /*height:.66rem;*/
    /*display:flex;*/
    /*justify-content: space-around;*/
    /*position: relative;*/
    /*!* border-right:2rem solid #dddddd; *!*/
    /*border-bottom:.1rem solid #f4f4f4;*/
    /*!*overflow:hidden;*!*/

    /*}*/
    /*.nav span{*/
    /*color:black;*/
    /*}*/
    /*.imgWrapper{*/
    /*width: .18rem;*/
    /*height: .18rem;*/
    /*margin-right:.06rem*/
    /*}*/
    /*.first{*/
    /*display:flex;*/
    /*height: 100%;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*font-size:.12rem;*/
    /*width:1rem;*/
    /*}*/
    /*.lineItem{*/
    /*display:flex;*/
    /*height: 100%;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*flex:1;*/
    /*}*/
    /*.imgWrapper img{*/
    /*width:100%;*/
    /*height:100%;*/
    /*}*/
    /*.lineItem span{*/
    /*font-size:.12rem*/
    /*}*/
    /*.itemcontent{*/
    /*display:flex;*/
    /*flex-direction: column;*/
    /*}*/
    /*.line{*/
    /*position: relative;*/
    /*}*/
    /*.line:after{*/
    /*content:"";*/
    /*position: absolute;*/
    /*right: 0;*/
    /*top: 50%;*/
    /*transform: translateY(-50%);*/
    /*height:.3rem;*/
    /*width:3px;*/
    /*background: #ddd;*/
    /*}*/
    /*.active span{*/
    /*color:red*/
    /*}*/

    /*!*内容*!*/
    /*.content{*/
    /*width:100%;*/
    /*height:100%;*/
    /*!*background:yellow;*!*/
    /*margin-top:1.31rem;*/
    /*!*position:relative;*!*/
    /*!*border-bottom:.1rem solid #f3f3f3;*!*/

    /*}*/
    /*.cont{*/
    /*width:100%;*/
    /*border-bottom:.1rem solid #f3f3f3;*/
    /*}*/
    /*.content-one{*/
    /*width:100%;*/
    /*height:.55rem;*/
    /*position:relative;*/
    /*}*/


    /*!*.content-img{*!*/
    /*!*width:.4rem;*!*/
    /*!*height:.4rem;*!*/
    /*!*position:absloute;*!*/
    /*!*top:.2rem;*!*/
    /*!*left:.2rem;*!*/
    /*!*}*!*/
    /*.content-one img{*/
    /*display:block;*/
    /*}*/
    /*.content-one-img{*/
    /*width:.25rem;*/
    /*height:.25rem;*/
    /*position:absolute;*/
    /*top:.05rem;*/
    /*left:.05rem;*/
    /*}*/
    /*.content-one a{*/
    /*display:block;*/
    /*}*/
    /*.content-one p span:nth-child(1){*/
    /*color:#0d0d0d;*/
    /*font-size:14px;*/
    /*position:absolute;*/
    /*top:.05rem;*/
    /*left:.5rem;*/
    /*}*/
    /*.content-one p span:nth-child(2){*/
    /*color:#0d0d0d;*/
    /*font-size:11px;*/
    /*position:absolute;*/
    /*top:.05rem;*/
    /*left:2.9rem;*/
    /*}*/
    /*.content-two{*/
    /*position:absolute;*/
    /*top:.3rem;*/
    /*left:.5rem;*/
    /*display:flex;*/
    /*}*/
    /*.content-two img{*/
    /*width:.15rem;*/
    /*height:.15rem;*/
    /*display:block;*/
    /*}*/
    /*.content p{*/
    /*font-size:14px;*/
    /*color:#313231;*/
    /*padding-left:.22rem;*/
    /*margin-bottom:.25rem;*/
    /*display:block;*/
    /*!*position:absolute;*!*/
    /*!*top:.23rem;*!*/
    /*!*left:.22rem;*!*/
    /**/
    /*}*/
</style>
