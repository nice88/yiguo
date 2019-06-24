<template>
<keep-alive>
  <div id="app">
    <router-view/>
  </div>
 </keep-alive> 
</template>
<script>
export default {
   name:'app',
}
</script>

<style>
  #app {
  width:100%;
  height:100%;
}
</style>
