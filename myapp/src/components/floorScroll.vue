<template>
  <div class="floorScroll">
    <div class="list_floor">
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="{ item_floor: true, [item.styles]: true }"
      >
        {{ item.text }}
      </div>
    </div>
    <div class="tab">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="tab-item"
        @click="jump(index)"
        ref="tab_i"
        :class="index === count ? 'current' : ''" 
      >
        <!-- :class="index === count ? 'current' : ''" -->
        {{ item }}
      </div>
    </div>
    <div class="toTop">返回顶部</div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      list: [
        { text: "楼层1", styles: "rede" },
        { text: "楼层2", styles: "blue" },
        { text: "楼层3", styles: "black" },
        { text: "楼层4", styles: "yellow" },
      ],
      tabs: ["一楼", "二楼", "三楼", "四楼"],
      count: 0,
      flag: false,
      item_h: "",
      now_h: "",
    };
  },
  methods: {
    jump(n) {
      console.log(this.now_h);
      console.log(window.pageYOffset);
      //   console.log(this.item_h);
      //   document.documentElement.scrollTop = this.item_h * n;
      this.animate(this.item_h * n, window.pageYOffset);
    },
    animate(target, now) {
      let timer;
      timer = setInterval(function () {
        now = now - (now - target) / 5;
        now = now - target < 0 ? Math.ceil(now) : Math.floor(now);
        if (now == target) {
          clearInterval(timer);
        }
        document.documentElement.scrollTop = now;
      }, 25);
    },
  },
  mounted() {
    this.item_h = parseInt(
      getComputedStyle(document.querySelector(".item_floor"), null).height
    ); //大盒子的高度
    window.onscroll = function () {
    this.now_h = window.pageYOffset;
      // console.log(window.pageYOffset); // 页面高度
      // console.log(scrollY); //滚动条高度
      let floor_h = innerHeight; //页面高度
      // console.log(scrollY, this.item_h, floor_h);
      if (this.item_h * 4 <= floor_h + scrollY && this.flag) {
        this.flag = false;
        console.log("触底了");
        setTimeout(() => {
          this.flag = true;
        }, 2000);
      }
      this.count = parseInt(scrollY / this.item_h);
    //   console.log(this.$refs.tab_i,window.pageYOffset);
    //   let height_ = (window.pageYOffset - this.item_h/2 - this.item_h*this.count)>=0 ---- 
        // this.$refs.tab_i.style.color = 'blue';
    }.bind(this);
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.item_floor {
  width: 100vw;
  height: 100vh;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}

.tab {
  width: 100px;
  height: 400px;
  position: fixed;
  left: 0;
  top: calc(50% - 200px);
  background-color: #ff6700;
  z-index: 10;
}

.tab-item {
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: white;
  cursor: pointer;
  /* transition: all 0.2s; */
  border: 0;
}

.toTop {
  width: 100px;
  height: 100px;
  background-color: white;
  position: fixed;
  right: 50px;
  bottom: 100px;
  line-height: 100px;
  text-align: center;
  animation: moveIn 1s;
  overflow: hidden;
  display: none;
}

@keyframes moveIn {
  from {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
  to {
    width: 100px;
    height: 100px;
    opacity: 1;
  }
}

.rede {
  background-color: purple;
}

.blue {
  background-color: pink;
}

.black {
  background-color: #787474;
  color: #ffffff;
}

.yellow {
  background-color: deepskyblue;
}
.current {
  background-color: #ff6700;
}
</style>
