<template>
  <div class="receivinggood">
    <div class="receivinggoods">
      <ul>
        <li>
          <span>收件人姓名：</span>
          <input type="text" v-model="name" />
        </li>
        <li>
          <span>手机号：</span>
          <input type="text" v-model="plone" />
        </li>
        <li>
          <span>请选择省：</span>
          <input type="text" v-model="sheng" />
          <p></p>
        </li>
        <li>
          <span>请选择市：</span>
          <input type="text" v-model="shi" />
          <p></p>
        </li>
        <li>
          <span>请选择区：</span>
          <input type="text" v-model="qu" />
          <p></p>
        </li>
        <li>
          <span>详细地址：</span>
          <input type="text" v-model="address" />
        </li>
        <li>
          <span>地址类型：</span>
          <div class="right">
            <span>
              <input type="radio" name="a" checked />公司
            </span>
            <span>
              <input type="radio" name="a" />家庭
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="receivinggoods-middle">
      <span>设置默认地址：</span>
      <div class="rightt">
        <mt-switch v-model="value"></mt-switch>
      </div>
    </div>
    <div class="receivinggoods-bottom">
      <button @click.prevent="xing">保存并返回</button>
      <!-- @click.prevent="onSave(val)" -->
    </div>
  </div>
</template>
<script>
export default {
  name: "receivinggoods",
  data() {
    return {
      value: false
    };
  },
  methods: {
    xing() {
      this.$router.push({ path: "/region" });
    }
    // onSave(val) {
    //   let str = val.sheng + val.shi + val.qu + val.address;
    //   console.log(str);
    //   let tar = this;
    //   let token = common.getCookie("token");
    //   this.$axios({
    //     method: "post",
    //     url: "" + token,
    //     data: {
    //       rec_name: val.name,
    //       rec_phone: val.plone,
    //       rec_addr: str
    //     }
    //   });

    //<>
    // .then(function(response) {
    //   if (response.data.code == 200) {
    //     tar.$router.push("/addressManagement");
    //   }
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  }
};
</script>
<style  scoped>
.receivinggoods-middle .rightt {
  position: absolute;
  right: 10px;
  top: 6px;
}
.receivinggood {
  background: #f4f4f4;
  width: 100%;
  height: 100%;
}
.receivinggoods {
  width: 100%;
  height: 2.86rem;
  background: #fff;
  margin-bottom: 10px;
}
.receivinggoods ul {
  margin-left: 0.1rem;
}
.receivinggoods ul li {
  width: 100%;
  height: 0.41rem;
  line-height: 0.41rem;
  border-bottom: 1px solid #999;
  position: relative;
}
.receivinggoods ul li span {
  font-size: 0.11rem;
  color: #808080;
  float: left;
}
.receivinggoods ul li input {
  font-size: 0.14rem;
  color: #333;
  float: right;
  border: none;
  width: 80%;
  height: 100%;
  outline: none;
}
.receivinggoods ul li p {
  transform: translateY(50%) rotate(45deg);
  width: 0.11rem;
  height: 0.11rem;
  border-top: 2px solid #d4d4d4;
  border-right: 2px solid #d4d4d4;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 11px;
}
.receivinggoods .right span input {
  width: 15px;
  height: 15px;
  float: left;
  margin: 15px 10px 0 16px;
}
.receivinggoods-middle {
  width: 100%;
  height: 0.41rem;
  line-height: 0.41rem;
  background: #fff;
  padding-left: 0.1rem;
  position: relative;
}
.receivinggoods-middle span {
  font-size: 0.11rem;
  color: #333;
  float: left;
}
.receivinggoods-middle img {
  width: 40px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 10px;
}
.receivinggoods-bottom button {
  text-align: center;
  line-height: 0.4rem;
  width: 2.21rem;
  height: 0.4rem;
  background-color: #11b57c;
  border: none;
  color: #fff;
  font-size: 0.12rem;
  border-radius: 5px;
  margin-left: 0.8rem;
  outline: none;
}
</style>

