<template>
  <div class="footer">
    <div class="footer-in">
      <a href="#" class="list">
        <i class="icon icon1"></i>
        <span>首页</span>
      </a>
      <a href="#" class="list">
        <i class="icon icon2"></i>
        <span>分类</span>
      </a>
      <a href="#" class="list">
        <i class="icon icon3"></i>
        <span>吃饭吧</span>
      </a>
      <a href="#" class="list">
        <i class="icon icon4"></i>
        <b></b>
        <span>购物车</span>
      </a>
      <a href="#" class="list">
        <i class="icon icon5"></i>
        <span>我的易果</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  z-index: 99;
  box-sizing: border-box;
  width: 100%;
  height: 0.46rem;
  padding: 0 11px;
  background: #fff;
  position: fixed;
  bottom: 0px;
}
.footer-in {
  width: 100%;
  height: 100%;
}
.footer-in a {
  display: inline-block;
  float: left;
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  text-align: center;
  color: #8d8a8a;
  font-size: 0.13rem;
  position: relative;
}
.footer-in a:active span {
  color: #11b57c;
}
.footer-in a .icon1 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABICAYAAACQnynWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY4QTZBOEREQzc1MTExRTZBRkREODRGODFENkFDODE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY4QTZBOERFQzc1MTExRTZBRkREODRGODFENkFDODE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjhBNkE4REJDNzUxMTFFNkFGREQ4NEY4MUQ2QUM4MTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjhBNkE4RENDNzUxMTFFNkFGREQ4NEY4MUQ2QUM4MTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zWIAsAAAEaElEQVR42uydaYiNURjHz2As2deELPFBtmRk7PuaJnywFDG2UIYQmexLopGQIruIsiRbloZmrIMPFD5oPsiePVt24//0/m9zDNcyM/fd5vnXr5lz5s69z/3Pec95znLficvJyTEqb1RMLVDz1XyVmq/mq2KvEgV9glVpaW7HXBwMAGNAG1AdPAVXwS6wF3x3K5jpM2cWmZbfCGSBA6A/jRfVYHkPuADqa7dTuOoELoHWeeo/5Sm3jfI4NT+fSgbpoBrLz8B4UBWUBlXASHCPP68JMng1qPkFiG8Z2AZKsu46SACbwUvWvQI7WZ/FurLgEJig5v+/xLz9INWqO8Lu536U33kOuoOD1uC8gX/AODX/31QLZIJBVt1Klt/95Xc/gMFgrVWXyiujpJr/ZyUwbUxg+Qv7d8npvv3jc8jjpoIZVto5HJwAldT832sQW3wtlqVP78f+PV/TEDAMfGS5GzgP6qr5PyuV+XtZlrOZNp4u4PPuA72swbkpU9GWar7TD2/LMyhm0PjsQnoNae3twR1rTDkL+hRl86uxZSdbddLF9LZaamHpNmjH8URUntnTmKJofmPm5B1ZloFxFgfXLzF6zSfs94+yHA+2gIVepKJemd+b/W5Dlt9xsHVjle49GMj8P6IF7Priw27+RHDMSvkecOJ02MUYJBWdBGaDyCb2KMZVIYzmy2xzDVhvcpeyr4BELhl4oRVghMldnJOs6ByoHSbzI4PbFKtOlg66gkceD/q7QV/jrA+JWnAsah4G8xuAi5wsGV7mklYO4VKAH5TBru8uy3V4BXQPsvnt2IqasSyXtyz9zrH6Wr/oFuO9xnJFcJzxBs58WUs5Y5xdJpGswfc0zlafX/UYdDbOGlBkAridjSUQ5ku+vNg4q4ilrVaVyJmm3yVpbxLYar2fpWCTKYQ971iaX8Y4+6jzrEnLKdDBmtoHQV/BWDDf6h7HMR0u50fzI1t3Q626dcbZynttgqklYDT4zLIkDZl8r74xX1YILxvnKEdkEpNCvppgawcb0BuWWzGJaOIH85OYlkXWyF8z2HUmPJLN+46cjYvqcfzq4pn5q9LSZKfooNUP3mH/ftKETzeYit5gubK8T3gwzHXz8aKyp7qSywYiOazUlplNWPWAV0A6y6Vkhgwvprjd8u0jGZK79zDOsb2w6w271R1WKrrMbfM3gofGWRkcaX49ORZmfWYWJEvRb/M7vsUV9GNBHhyU9ZX8flA2ha0jJUCeuhKzG+YvYjY0L0DmuxKzG+ZX5tfqATLflZj1kykeSs1X89V8lZqv5qvUfDVfpear+So1X81XqflqvkrNV/NVar6ar1Lz1XyVmq/mqzwwPwjHR2qEyXz7HpeTA2D+5CixB9J8+8i43FNnrsm9mZGfVIWxzY4SeyDNX259LzeWkM85yenmHJ/xgrHFR4k9kObLx+tXB3A8XM3YAz/gTjPOXT1uGhfvc5zP8ekmY50W6xeL03/boXm+mq9S89V8Vez1Q4ABAEpBAlXaHx5wAAAAAElFTkSuQmCC)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon2 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABICAYAAACQnynWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA5MjlDRDREQzc1MjExRTZCMjY5RUQ5QkM4RTk0NDQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA5MjlDRDRFQzc1MjExRTZCMjY5RUQ5QkM4RTk0NDQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDkyOUNENEJDNzUyMTFFNkIyNjlFRDlCQzhFOTQ0NDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDkyOUNENENDNzUyMTFFNkIyNjlFRDlCQzhFOTQ0NDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xyVqOAAACxklEQVR42uydz0obURjFJ9rYnekDBBFNcdFi3yILs2x0bZ+grSWbgtB2GxrqE9gu1S5Vsgi+gwuDLbFInyC4sYglPUOvcnsbmSTz3X94DhwYFL4z85uZ62RywMJgMEgoP5oiAsInfIrw740e5B3QajajBrDRaPDK55Uvo0fwa3gVXoRncs67gs/gXfgT3JfMzrhz/8nGXdKXBFXI+5xv7PwT+BCes3Sx/IRX4JMhv3OSjRNwEuKyU4LbFg8+UbPbKstLNi62UojLziu4bNyyH+HP6tb9Pea8abV0rMNvtCWkrJaWdxLZw/7gAvA42UHAXzMOvgZ3csxLgX2H38JH8IEG4bkBQDQbJ+Q2GyciKzuIZWdJv3hygjfVUTNv9NhVNk5EVnYQ8Ke17S8W1lx95sOAsoN7zu95nNmL5Hiswb/2OFM8G0vPdUzwKcInfIrwCZ8ifMInfCIgfMKnCJ/wc6rocaZ4dqvZLMYEv+JxZiWS4xGFr7/5W7ewr/rMXwFlBwH/VNtOv1OtCs6uqpk36rnKxpKTlT2xJL/DTbstT9V2+n3nPrwFb6sdvhpz3oy63V/AL421fM9mNoCPkz2xJHs7s/AxPG/5IeEcfgZfaD9zmr3RaFyEtuykO1RTO2jz4GsGeKfZUuBtPO104WV4U12JlwIzL9WsTTW76ysb4LuSsKTrgtGJLWV+wqVcy1ZFPO031uGFRKYi/gP+mvztX/Yls0eoiN9msyLOivhQsSLucdlxWRFPs95LZE9QETezg4DvsiJeNwC4rIjXpeCzIp59IlgRT1gRH1msiHuEz4o4P+Hy9QJF+IRPET7hEz4RED7hU4RP+FS88FkR9wifFXHH8FkR9wj/m7btuiJuLTuWivgO/EFtu66Ii2azIn63zhNWxP8TK+Ken3ZYEfe07EQpnxXxAv9tB18vED5F+IRP2dcfAQYAt5s91rPpMv4AAAAASUVORK5CYII=)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon3 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABICAYAAACQnynWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ5RjM1N0JEQzc1MjExRTY5QTYwRDk1Mzk1QzQ3NTA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ5RjM1N0JFQzc1MjExRTY5QTYwRDk1Mzk1QzQ3NTA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDlGMzU3QkJDNzUyMTFFNjlBNjBEOTUzOTVDNDc1MDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDlGMzU3QkNDNzUyMTFFNjlBNjBEOTUzOTVDNDc1MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Pu7uvAAAMA0lEQVR42uxd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)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon4 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABICAYAAACQnynWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5OUQ1NkFEQzc1MjExRTZBQjI1RjUxMDdFNjExMkQzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5OUQ1NkFFQzc1MjExRTZBQjI1RjUxMDdFNjExMkQzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Nzk5RDU2QUJDNzUyMTFFNkFCMjVGNTEwN0U2MTEyRDMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk5RDU2QUNDNzUyMTFFNkFCMjVGNTEwN0U2MTEyRDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Ar8vZAAAGNklEQVR42uxd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)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon5 {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABICAYAAACQnynWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCMkIzMENEQzc1MjExRTY4MkEzQ0M3RTBEQTA4QjBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCMkIzMENFQzc1MjExRTY4MkEzQ0M3RTBEQTA4QjBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUIyQjMwQ0JDNzUyMTFFNjgyQTNDQzdFMERBMDhCMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUIyQjMwQ0NDNzUyMTFFNjgyQTNDQzdFMERBMDhCMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz64HMn/AAAGTklEQVR42uxd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)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon1 :active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABICAYAAACQnynWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMxRDk5MzhEQzc1MTExRTY5RUMyOEY2NkVDNEFERkI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMxRDk5MzhFQzc1MTExRTY5RUMyOEY2NkVDNEFERkI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzFEOTkzOEJDNzUxMTFFNjlFQzI4RjY2RUM0QURGQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzFEOTkzOENDNzUxMTFFNjlFQzI4RjY2RUM0QURGQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4JIQGLAAADEUlEQVR42uydO2gUQRzG5zQaBeVUxFdAjCEQFIOFnm/kMIVFxCckoGBAC5sUKQwIsTGJoIKFjYWiYHG+G4MPRFRExVK0sEhAsVNBBEUsxPGb2/8l5+Ukl7292Z3d7yM/9vYek7lfdnf+u8xdUlprxYSTKVRA+ZTP2E1dtQ1khgfyy8LQ8f+lHlvX+Z+S23r8/fl1Xf412ntNvtXRdSXruuh28WO6qN2xxwr9+qePE70Hybf2AW75POzY6/NOMAQ+e9uv+gTugHaX3lOdY+IbQQ6sL7l/AdghPAf7wUdu+cElA16WEV+azfK8VZQfTPaBp2BRhc9vAM9AlvKry1FwHcyc5OvmgPugg/Inn2ngAjhdRT/rwVXQQ/mVJw3ugcMBtJUCZ4UU5U9c0bwAbQG32yN7QT3ll4+pZF6BlTVqv0PGgTTlj69oHkvNXstkpRJqoHwvx8ANHxWN37TKucCKJMs3Fc1FcDKEwXCpnA1vSaL8uXL8PRRyHx6CvUmS3yi7/bYIHPJmyElcdxLkb5CKpiVCg/1UcA6csnn4sy2/01JF4ze94AqYHjf5pqLJyW4e5RwAd8HsOMg3W9HlkCoav2mTc4HFLss31cQD0KXcy2opClpclN8knc8qd7NMedeZNrokf1MEKxq/mQcegV0uyO+Uzs5X8Ym57HELHImqfDOYHnekovF7LnAe9AdVOAQlv1DRnHCoovGbPnBJedelQpdvjonm+shBlZyY6s3ME5oVmvzM8GCTDKxbVfKyHTxJD/UttC5/3chgoaJpVsnNGlNO4w/QbHvLz8WsovGb5XI5wqr8X/Q+mj++ysNqPxZUwRRxUx30OzxFvBfLM0q5OUV8SQzOcGsSzs8PMZRP+ZTPUD7lM5RP+QzlUz5D+ZTPUD7lM5RP+QzlUz5D+ZTPUD7lM5RP+ZTPxFP+b8cdaZflv3Fc/juX5Zup5B8cFT8Cbros/yfYDb46Jv4L2KNqOBXe1oD7Wnmf4rgNfkRc+ndwDawFb2v5i2x+l/J75X2PGiNJ8X+msM6nfIbyE5O/AgwA/S4YOQ0Rim0AAAAASUVORK5CYII=)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon2:active {
  background: url(//img07.yiguoimg.com/e/web/170110/00583/164146/nav_classify_active.png)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a.icon4:active {
  background: url(//img07.yiguoimg.com/e/web/170110/00583/164146/nav_list_active.png)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon5:active {
  background: url(//img05.yiguoimg.com/e/web/170110/00583/164146/nav_user_active.png)
    50% no-repeat;
  background-size: 100% 100%;
}
.footer-in a .icon {
  display: inline-block;
  position: absolute;
  left: 0.21rem;
  width: 0.3rem;
  height: 0.21rem;
  top: 3px;
}
.footer-in a span {
  position: relative;
  margin-top: 0.25rem;
  display: inline-block;
}
</style>
