<template>
<div>
    <div class="suspend-top" @click='goTop' ref="btn">
        <img src="//img07.yiguoimg.com/e/web/161230/00584/172344/top.png" alt="">
    </div>
</div>
</template>

<script>
let timer =null;
export default {
    name:"SupTop",
     data () {
        return {
            isTop: true
        }
  },
  mounted () {
    this.needScroll()
  },
  methods: {
    needScroll () {
      let clientHeight = document.documentElement.clientHeight
      let obtn = this.$refs.btn
      window.onscroll = function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        console.log(osTop);
        if (osTop >= clientHeight) {
          obtn.style.display = 'block'
        } else {
          obtn.style.display = 'none'
        }
        if (!this.isTop) {
          clearInterval(timer)
        }
        this.isTop = false
      }
    },
    goTop () {
      timer = setInterval(function () {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }


}
</script>

<style scoped>
.suspend-top img{
        width:100%;
    }
 .suspend-top {
    position: fixed;
    right: 4%;
    bottom: 18%;
    width: .4rem;
    height: .4rem;
}
</style>
