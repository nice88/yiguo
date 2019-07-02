<template>
    <div class="messageBox">
        <h2>定位</h2>
        <p>西安</p>
        <div>
            <div >取消</div>
            <div >切换城市</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'MessageBox'
}
</script>

<style scoped>
    .messageBox{ width:200px; height:120px; border:1px #ccc solid; border-radius: 4px; background:white; box-shadow: 3px 3px 3px 3px #ccc; position: absolute; left: 50%; top: 50%; margin:-60px 0 0 -100px;}
    .messageBox h2{ text-align: center; line-height: 40px; font-size: 18px;}
    .messageBox p{ text-align: center; line-height:40px; font-size:13px}
    .messageBox > div{ font-size:13px;display: flex; position: absolute; bottom: 0; width:100%; border-top:1px #ccc solid;}
    .messageBox > div div{ font-size:13px;flex:1; text-align: center; line-height: 30px; border-right:1px #ccc solid;}
    .messageBox > div div:last-child{ border:none;}
</style>
