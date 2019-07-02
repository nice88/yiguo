<template>
    <div class="entry">
        <form action="">
            <div class="van-cell-group van-hairline--top-bottom">
                <div class="van-cell van-field">
                    <div class="van-cell__title">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEJUlEQVRo3tXaT4jVRhzA8e8GxT/IbkO7oOBB0NJCUduLQqt0ebAVHXvoQeihrSAI6qGHogUhtT1ML4pgEZQWsbCHirgioiltFV1BK+5xBf+gpVhbClY7uyLb3QrVw8zbHWOSl5dMXtK5vGTyJsmHmfxmMpMuKkp+GMwBVgOPgYtKyMcuz99VEWop8D2w0GRdA9YoIX//38IM6hzwUuTQL0CfK1xHYSko5zivQtR9YCOwGXho8hYDQ34YLGz/Cs+mjtRYAqqhhLxqjq8EfgK6zfHCNVc6rBXK+p9TXKmwrCjr/28BZ4A5Fm6pEvKfdq9d2jPWLgpACXkJXWvNdCYPqjRYHpSV3rS2d+e9B+ewgiiAXvP7SAn5ay1gDlAA/5rf2X4YzKoc5ggFMGJ+ZwDrK4U5RAEct7b3+mHQG/cnPwzmpZ2kcLh3jMIPgx7gBjDfZP0GbAdOKSEn/DB4BdgJrCKlnysEc42yztuHDvszrewnwATTfRykdOK5m2JZKAAl5BDQD/xpZXdFUJAytswFKxNl4S4ArwI7gCvAuDn0BzAINDvuWFzbTbETqIz30QBO8+zwa6pZtgWrCyoLLjOsbqgU3DVgeSZYXVHW/W0BDlpZb7cMHjGo0TqhTJqM7M9IhSXMUXQDy6qWWPe4EthnZd0BfvZSCiRNvHjAgB8G/TVB2W/d94F3lZATXkKBuGdqNTBs9ieBsRqiph4RL6ZAUqC4CLwDfAOsVUIOU1FqhYJIP5ZjjmIuOhoNKSG/rQsKrBrLGdJPAB8Bh/0w2FoX1BTMUT91oExcOygAz7yw/ZgT9R5wPoJ7v2oU6BrrBxZYeduy1pQSchz9+m7jerOULRPVhP1X5MIWbhD4XAm5v2oUQJdpiteZXqty9Rb8MfCXEvJIp1EAnhLyEbDOFAT9rJ0zASUv6gvgK+C7PAGlKApMVDQFGg5xr1vbbUVLFyjI1kH/gJ4R8tGTmVeBo8CAEnIi4eZ6zM2tsLI3terEXaEgMqRKqLkPgEVADzriNYCvgRE/DN6IO6kScgw9/LKHXX2dQj0HS8A105PI/svoSZRWuAvmhhObo2sUpMx5WM3yJLBHCXnTDwMf2AB8yXRzvQUsS2qWMeddAXQrIc+WhUqFmYu+oIQcjclfAly2cJuVkIcyoPrQn0HMQo8xb5eBghbzinEok38b2GVlbch4vQ/Rky4eMACcLQPVEtYiDVrbyzOW+YTpgOIBzYUF55NDRWB/W9uzsxQwAeWzSHYpM15FYK9Z2/eyFDCB4ljZqKKwT63tSxlRpQSKuJRrGckPgxfRa1hZpxA6ioKcNaaEfEDGsWUVKCh54a8qVGFYCm4bejXyYBUoJ7AEXDR1fBHD2bdUKbhKVmacfedhvRXctbLvVIGCEr5+Mx8xN9CvOefzfuRVND0FO39oJI9oj9UAAAAASUVORK5CYII=" alt="">
                    </div>
                    <div class="van-cell__value">
                        <div class="van-field__body">
                            <input type="text" class="van-field__control" placeholder="请输入提货券号">
                        </div>
                    </div>
                </div>
                <div class="van-cell van-field">
                    <div class="van-cell__title">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAyCAYAAADImlLUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADNklEQVRo3u3aS4gcRRzH8c9OVoygxBaJKKI3F3IRMZIcjI+oqCmRiIqieIgQvETIZYmHBgUr4AP0EMSA+EJQgoqnFqIEfBBRMAcfiAbz8BAfLFpuIEaSsOuhO0m5r8zuzuxOYH6XqfrXv//1nf/8qe6qngHzVFGVK7AO12IIl+FCnNu4nMAIDuIHfIGdKcRDc51zYI6gA3gIw7h6jnPvxsvYkUI80VXooiqvwptYPYPbURxDCxecIeTP2JxCrLoCXVRlwDsTQI7gfXyEb3AghXgku6aFi7ACK3EzbnO6fE7qdWxKIf7TMeiiKh/GGxhsTMfxAp5JIf49yy9/MTaqy6vIhvbgzhTiyLyhi6q8A5X654bfcE8K8avZwE4Rdzlewn2Z+XvclEL8c87QRVVeju/UKwLsx60pxAPzAZ4wxzCey0yf45YU4vGp/FttxNyWAY8idBIYUojPY1NmWoM4nf+MmS6q8kZ8kpkeTCHu6CTwhPlexOamO4ZVKcSvJ/qdKdNPZO1d3QRutAXfZmzbpnKaFrqoyitwe2Z6usvAUojH8FhmWl1U5V1tQ+N+p8vnpxTip92GbsC/xM7MNDwb6DzL7y4EcKansvbKtqCLqlyC6zPTroUkbrL9pHrNnpTpKVePoiqH8GPTHcP5KcSjCwk+k6Yrj6Gsva+XgGeCvjRr/7LYkO1CL8/aI+0EWkidqumiKs/DWlyJB3BDM/QZPpjm+nH1rb2bGsMh7E4h/nsKuqjK9diOSxYnd23pdzyeQnxvoKjKtfhYew9Pi60xrBvE1gz4V7yt3o20owEs6zLoOViv3jC3sHUQ12UOd6cQ9yxM0tpXUZWvqnc1cE0LS7LxfYsNOI32Z+3W2VDHk9SH7kPPoMH5h5isoio34hG8lUJ8pdPxO57poiqXqu+ua7C96fc2NJZmcVtNv+ehu64+dB+6D90D6kOfzdCj6pc/ms+Ob3w7Dp1CHMcqBPX58nin5+jKA1MK8S982I3Y9Gu6Dz0r6K7UeAf0P64WDmf9Dc2Bes+o4dmQmQ4PNAchjy423Cz0Wkv9GmzvYpO0qb3YcvLUdFkDf6/ePDn9Q/1Ph2dTiKP/ARqF0GEMo+/CAAAAAElFTkSuQmCC" alt="">
                    </div>
                    <div class="van-cell__value">
                        <div class="van-field__body">
                            <input type="password" class="van-field__control" placeholder="请输入提货券密码">
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="passbtn">
            <p style="dispaly:block">尊敬的易果用户们：</p>
            <p>
                受春节快递停送影响， 部分提货券节前配送日期截止至1月30日， 节后2月11日起恢复配送， 烦请您提前做好年货准备。值此新春佳节之际， 易果生鲜全体员工， 祝您新春愉快、 阖家欢乐， 诸事顺利。如需了解提货券详情烦请致电： 021 - 22303535 
            </p>
            <span class="nextStep">下一步</span>
            <span class="searchBtn"><i></i>查询历史信息</span>
        </div>
        <div class="bottom">
            <img style="width:220px " src="../../assets/logo.5f4d53ff.png" alt="">
            <p>
                客服电话：021-22303535
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Gift",
}
</script>

<style scoped>
.entry{
        background-color: #f4f4f4;
        height:100%;
}
form {
    display: block;
    margin-top: 0em;
}
.van-cell-group {
    background-color: #fff;
}
.van-cell, .van-cell__right-icon {
    line-height: 32px;
}
.van-cell {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding: 10px 15px;
    box-sizing: border-box;
    line-height: 24px;
    position: relative;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    overflow: hidden;
}
.entry .van-field .van-cell__title {
    max-width: 40px;
}
.van-cell__title, .van-cell__value {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.van-cell__title img {
    position: relative;
    top: 5px;
    width: 18px;
    height: 18px;
    left: 6px;
}
.van-cell__value {
    overflow: hidden;
    text-align: right;
    position: relative;
    vertical-align: middle;
}
.van-field__body {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.van-field__control {
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    resize: none;
    display: block;
    box-sizing: border-box;
    background-color: initial;
    height: .31rem;
}
.van-row--align-center {
    -webkit-box-align: center;
}
/* form后面加的 */
.passbtn{
    padding-left: .12rem;
    padding-right: .12rem;
    padding-top:.25rem;
}
.passbtn span,.passbtn p{
    display: block;
    font-size: 12px;
    color: grey;
    line-height: 20px;
    font-family: Avenir,Helvetica,Arial,sans-serif;
}
.passbtn .nextStep{
    display: block;
    height: .44rem;
    width: 2.55rem;
    background: #11b57c;;
    color:white;
    text-align: center;
    line-height: .5rem;
    border-radius:3px;
    margin: 0 auto;
    margin-top: .22rem;
    font-size: 16px;
}
.passbtn .searchBtn{
    width: 2.58rem;
    height: .24rem;
    color: #11b57c;
    font-size: 16px;
    line-height: .24rem;
    text-align: center;
    margin: 0 auto;
    margin-top: .5rem;
}
.passbtn .searchBtn i{
    display:inline-block;
    width: .2rem;    
    height: .2rem; 
    background: url(../../assets/sousuo.png) -4px -2px;
    margin-right: 5px;
}
.bottom{
    margin-top: 150px;
}
.bottom img{
    margin: 0 auto;
}
.bottom p{
    color: #11b57c;
    text-align: center;
    font-size: .16rem;
    line-height: .25rem;
}
</style>