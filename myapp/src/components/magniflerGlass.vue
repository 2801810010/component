<!-- 放大镜 -->
<template>
  <div class="magniflerGlass">
    <div class="box" :style="picStyle" @mousemove="foo($event)" @mouseleave="leaveItem()" ref="box">
      <img
        src="../assets/img3.jpg"
        alt=""
        class="pic"
        :style="{ width: w + 'px', height: h + 'px' }"
        ref="pic"
      />
      <!-- 遮罩层 -->
      <div
        class="layer"
        :style="{ width: w / 2 + 'px', height: h / 2 + 'px' }"
        @click="handle($event)"
        ref="layer"
      ></div>
    </div>
    <div class="showBox" ref="showBox">
      <img
        src="../assets/img3.jpg"
        alt=""
        class="showPic"
        :style="{ width: 2 * w + 'px', height: 2 * h + 'px' }"
        ref="showPic"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "magniflerGlass",
  data() {
    return {
      w: 200,
      h: 200,
      picStyle: {
        width: "200px",
        height: "200px",
      },
    };
  },
  methods: {
    handle(e) {
      console.log("1");
      console.log(e.target);
    },
    foo(e) {
        this.$refs.layer.style.display = 'block';
        this.$refs.showPic.style.opacity = 1;
      //   遮罩层左边距
      this.$refs.layer.style.left =
        e.x -
        this.$refs.box.offsetLeft -
        this.$refs.layer.offsetWidth / 2 +
        "px";
      if (parseInt(this.$refs.layer.style.left) <= 0) {
        this.$refs.layer.style.left = 0 + "px";
      }
      if (
        parseInt(this.$refs.layer.style.left) >=
        this.$refs.box.offsetWidth - this.$refs.layer.offsetWidth
      ) {
        this.$refs.layer.style.left =
          this.$refs.box.offsetWidth - this.$refs.layer.offsetWidth + "px";
      }
      //   遮罩层上边距
      this.$refs.layer.style.top =
        e.y -
        this.$refs.box.offsetTop -
        this.$refs.layer.offsetHeight / 2 +
        "px";
      if (parseInt(this.$refs.layer.style.top) <= 0) {
        this.$refs.layer.style.top = 0 + "px";
      }
      if (
        parseInt(this.$refs.layer.style.top) >=
        this.$refs.box.offsetHeight - this.$refs.layer.offsetHeight
      ) {
        this.$refs.layer.style.top =
          this.$refs.box.offsetHeight - this.$refs.layer.offsetHeight + "px";
      }
      this.$refs.showPic.style.left = - parseInt(this.$refs.layer.style.left) * 2 + "px";
      this.$refs.showPic.style.top = - parseInt(this.$refs.layer.style.top) * 2 + "px";
    },
    leaveItem(){
        this.$refs.layer.style.display = 'none';
        this.$refs.showPic.style.opacity = 0;
    }
  },
  mounted() {
    // console.log(this.$refs.box.offsetLeft); //小盒子距离左边的距离
    // console.log(this.$refs.box.offsetTop);  //小盒子距离左边的距离
    // console.log(this.$refs.layer.offsetWidth); // 小盒子的宽度
    // console.log(this.$refs.layer.offsetHeight); //小黑子的高度
  },
};
</script>
<style >
.magniflerGlass {
  width: 600px;
  height: 300px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 7%;
  box-shadow: 5px 10px 20px 10px rgba(9, 113, 231, 0.65);
}
.box {
  position: relative;
  cursor: pointer;
}
.showBox {
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 200px;
}
.showPic {
  position: absolute;
  top: 0px;
  left: 0px;
  /* opacity: 0; */
  transition: opacity 0.5s;
}
/* 遮罩层 */
.layer {
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(221, 193, 103,.65);
  z-index: 2;
  display: none;
}
</style>
