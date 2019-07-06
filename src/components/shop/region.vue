<template>
  <div class="regio">
    <div class="region" v-for="(item,index) in region" :key="index">
      <div class="region1" @click.prevent="maxing">
        <p>
          {{item.xingmi}}
          <span>{{item.plone}}</span>
        </p>
        <div class="region2">
          <i class="type">{{item.home}}</i>
          {{item.dizhi}}
        </div>
      </div>
      <div class="region3">
        <input type="radio" name="a" />
      </div>
      <div class="region4">
        <div class="region5">
          <input type="radio" name="b" />
          <span>{{item.moren}}</span>
        </div>
        <div class="region6">
          <button @click.prevent="jingjin">编辑</button>
          <button>删除</button>
        </div>
      </div>
    </div>
    <div class="region7" @click.prevent="ma">+增加收货地址</div>
  </div>
</template>
<script>
export default {
  name: "region",
  data() {
    return {
      region: [
        {
          xingmi: "马兴",
          plone: "1345678912",
          home: "家庭",
          dizhi: "北京海淀区123",
          moren: "默认地址"
        },
        {
          xingmi: "马兴",
          plone: "1345678912",
          home: "家庭",
          dizhi: "北京海淀区123",
          moren: "默认地址"
        }
      ]
    };
  },
  methods: {
    ma() {
      this.$router.push({ path: "/receivinggoods" });
    },
    maxing() {
      this.$router.push({ path: "/shopaddress" });
    },
    jingjin() {
      this.$router.push({ path: "/receivinggoods" });
    }
    // created() {
    //   let tar = this;
    //   let token = common.getCookie("token");
    //   this.$axios({
    //     method: "get",
    //     url: "" + token
    //   })
    //     .then(function(response) {
    //       if (response.data.code == 200) {
    //         for (let key in response.data.data) {
    //           tar.$set(tar.management, "key", response.data.data[key]);
    //         }
    //         tar.management = response.data.data;

    //         console.log(tar.management);
    //       }
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
  }
};
</script>
<style scoped>
.regio {
  background: #f4f4f4;
  margin-bottom: 50px;
}
.region {
  padding-left: 20px;
  margin-bottom: 0.1rem;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  background: #fff;
  position: relative;
}
.region1 {
  width: 90%;
  font-size: 0.14rem;
  padding-top: 0.25rem;
  float: left;
}
.region1 p {
  font-size: 0.14rem;
  color: #000000;
}
.region1 p span {
  padding-left: 0.3rem;
}
.region2 {
  padding-top: 0.11rem;
  padding-bottom: 0.15rem;
  border-bottom: 1px solid #cccccc;
}
.region2 i {
  font-style: normal;
  color: #11b57c;
  border: 1px solid #11b57c;
  border-radius: 3px;
  text-align: center;
}
.region3 input {
  position: absolute;
  right: 10px;
  top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.region4 {
  height: 0.41rem;
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  line-height: 0.41rem;
}
.region5 {
  float: left;
}
.region6 {
  float: right;
}
.region6 button {
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 0.05rem 0.18rem;
  background: #fff;
  margin-right: 10px;
}
.region7 {
  width: 100%;
  height: 0.45rem;
  position: fixed;
  background-color: #11b57c;
  font-size: 0.13rem;
  color: #fff;
  width: 100%;
  bottom: 0;
  text-align: center;
  line-height: 0.45rem;
}
</style>
