<!-- <h2>轮播图</h2> -->
<template>
  <div
    id="carousel"
    @mouseenter="showBtn"
    @mouseleave="displayBtn"
    ref="boxWidth"
    @mouseover="stoping()"
    @mouseout="moveing()"
  >
    <ul class="pictureList" ref="pictureList_ul">
      <li class="pictureItem" v-for="(item, index) in images" :key="index">
        <a href="javascript:;">
          <img :src="item.img" alt="11" />
        </a>
      </li>
    </ul>
    <button
      class="back iconfont icon-xiangzuo"
      v-show="isShow"
      @click="backMove(moveItem, moveWidth)"
    ></button>
    <button
      class="next iconfont icon-xiangyou"
      v-show="isShow"
      @click="nextMove(moveItem, moveWidth)"
    ></button>
    <ul class="dotsList" ref="dots">
      <li
        class="dotsItem"
        v-for="(item, index) in imagesLength"
        :key="index"
        @click="hhh(index)"
        :class="count === index ? 'current' : ''"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "carousel",
  data: function () {
    return {
      images: [
        { img: require("../assets/img1.jpeg") },
        { img: require("../assets/img2.png") },
        { img: require("../assets/img3.jpg") },
        { img: require("../assets/img4.jpg") },
        { img: require("../assets/img5.jpg") },
        { img: require("../assets/img1.jpeg") },
      ],
      imagesLength: "",
      isShow: false,
      count: 0,
      downOn: true,
      dotsPause: true,
      moveWidth: "",
      moveItem: "",
      timer: "",
    };
  },
  methods: {
    hhh(index) {
      if (this.dotsPause) {
        this.dotsPause = false;
        this.moveItem.style.transition = 1 + "s";
        this.moveItem.style.left = -this.moveWidth * index + "px";
        this.count = index;
        setTimeout(() => {
          this.dotsPause = true;
        }, 1000);
      }
    },
    // 按钮显示
    showBtn() {
      this.isShow = true;
    },
    //按钮隐藏
    displayBtn() {
      this.isShow = false;
    },
    // 下一页
    nextMove(item, target) {
      if (this.downOn) {
        this.downOn = false;
        this.count++;
        this.moveItem.style.transition = 1 + "s";
        if (this.count === this.imagesLength) {
          this.moveItem.style.left = -this.moveWidth * this.count + "px";
          this.count = 0;
          setTimeout(() => {
            this.moveItem.style.transition = 0 + "s";
            this.moveItem.style.left = this.count + "px";
          }, 1000);
        } else {
          this.moveItem.style.left = -this.moveWidth * this.count + "px";
        }
        setTimeout(() => {
          this.downOn = true;
        }, 2000);
      }
    },
    // 上一页
    backMove(item, target) {
      if (this.downOn) {
        this.downOn = false;
        this.count--;
        if (this.count < 0) {
          this.moveItem.style.transition = 0 + "s";
          this.moveItem.style.left = -this.moveWidth * this.imagesLength + "px";
          this.count = this.imagesLength - 1; // this.count = 4
          setTimeout(() => {
            this.moveItem.style.transition = 1 + "s";
            this.moveItem.style.left = -this.moveWidth * this.count + "px";
          }, 1000 / 60);
        } else {
          this.moveItem.transition = 1 + "s";
          this.moveItem.style.left = -this.moveWidth * this.count + "px";
        }
        setTimeout(() => {
          this.downOn = true;
        }, 2000);
      }
    },
    moveing() {
      this.timer = setInterval(
        () => this.nextMove(this.moveItem, this.moveWidth),
        2000
      );
    },
    stoping() {
      clearInterval(this.timer);
    },
  },
  mounted() {
    this.imagesLength = this.images.length - 1; //图片的数量-1
    this.moveWidth = this.$refs.boxWidth.offsetWidth; // 移动的距离(大盒子的宽度)
    this.moveItem = this.$refs.pictureList_ul; //ul
    this.timer = setInterval(
      () => this.nextMove(this.moveItem, this.moveWidth),
      2000
    );
  },
};
</script>
<style >
/* 初始化 */
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
button,
input {
  outline-style: none;
}
/* 盒子大小 */
#carousel {
  position: relative;
  width: 600px;
  height: 400px;
  margin: 10px auto;
  box-shadow: 5px 20px 10px 5px rgba(20, 170, 240, 0.9);
  overflow: hidden;
}
/* ul */
.pictureList {
  position: absolute;
  top: 0;
  left: 0;
  width: 1000%;
  height: 100%;
  display: flex;
  align-items: center;
}
.pictureItem {
  width: 600px;
  height: 400px;
  line-height: 400px;
}
.pictureItem > a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
}
.pictureItem > a > img {
  width: 600px;
}
/* 按钮 */

.back,
.next {
  /* display: none; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  border-radius: 0 10px 10px 0;
  text-align: center;
  width: 30px;
  height: 60px;
  line-height: 50px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.12);
  transition: all 0.2s linear;
}

.next {
  right: 0;
  border-radius: 15px 0 0 15px;
}

.back:hover,
.next:hover {
  background-color: rgba(231, 182, 20, 0.781);
}
/* 默认小圆点 */
.dotsList {
  position: absolute;
  bottom: 10px;
  left: 50%;
  height: 20px;
  transform: translateX(-50%);
  box-sizing: border-box;
}

.dotsItem {
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* 默认小圆点的颜色 */

.current {
  border: 3px solid rgba(255, 255, 255, 0.45);
  background-color: rgba(255, 0, 0, 0.8);
}

.dotsItem:hover {
  border: 3px solid rgba(255, 255, 255, 0.45);
  background-color: rgba(247, 204, 15, 0.8);
}
</style>

