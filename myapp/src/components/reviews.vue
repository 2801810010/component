<!-- <h2>星级评价</h2> -->
<template>
  <div class="reviews">
    <ul class="starList">
      <li
        v-for="(item, index) in total"
        :key="index"
        class="starItem iconfont icon-xingxing"
        ref="data"
        @click="downStar()"
        @mouseover="flag && handle(index, $event)"
      ></li>
    </ul>
    <button @click="isrefresh && refresh()" class="refresh">重置</button>
  </div>
</template>
<script>
export default {
  name: "reviews",
  data() {
    return {
      total: 5,
      newClass: "red",
      starArr: [],
      flag: true,
      isrefresh: true,
    };
  },
  methods: {
    handle(n, e) {
      this.$refs.data.forEach((item, index) => {
        if (index <= n) {
          item.style.color = "yellow";
        } else {
          item.style.color = "";
        }
      });
    },
    downStar() {
      this.flag = false;
    },
    refresh() {
      location.reload();
    },
  },
};
</script>
<style >
.reviews {
  margin: 50px auto 0;
  width: 300px;
  height: 50px;
  text-align: center;
}
.starList {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 50px;
  border-radius: 15px;
  box-shadow: 5px 8px 50px 5px rgba(11, 121, 247, 0.9);
  background-color: rgb(241, 235, 175);
}
.starItem {
  color: rgb(18, 215, 241);
  cursor: pointer;
  transition: all 0.3s;
}
.starList .starItem {
  display: inline-block;
  font-size: 30px;
}
.red {
  color: red;
}
.refresh {
  width: 50px;
  height: 20px;
  margin-top: 30px;
  border: 0;
  background-color: rgba(75, 148, 231, 0.9);
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
}
</style>
