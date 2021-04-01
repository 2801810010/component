<template>
  <div id="app">

    <!-- 轮播图 -->
    <!-- <div>
      <carouselItem></carouselItem>
    </div> -->

    <!-- 相册 -->
    <!-- <div>
      <photoAlbumItem/>
    </div> -->

    <!-- 放大镜 -->
    <!-- <div>
      <magniflerGlass />
    </div> -->

    <!-- 星级评价 -->
    <!-- <div>
      <reviewsItem/>
    </div> -->

    <!-- 触底 -->
    <!-- <div>
      <buttomOut/>
    </div> -->

    <!-- 楼层滚动 -->
    <!-- <div>
      <floorScroll/>
    </div> -->

    <!-- <div>
      <copy />
    </div> -->

   <!-- <div>
     <copyText/>
   </div>
  </div> -->
  <demo/>
  </div>
</template>

<script>
import carouselItem from "./components/carousel.vue";
import photoAlbumItem from "./components/photoAlbum.vue";
import reviewsItem from "./components/reviews.vue";
import magniflerGlass from "./components/magniflerGlass";
import floorScroll from "./components/floorScroll.vue";
import buttomOut from "./components/bottomOut";
import copy from "./components/copy.vue"; // copy
import copyText from './components/copyText.vue'
import loading from './components/loading.vue'
import demo from './components/demo.vue'

export default {
  name: "App",
  components: {
    carouselItem,
    photoAlbumItem,
    reviewsItem,
    magniflerGlass,
    floorScroll,
    buttomOut,
    copy,
    copyText,
    loading,
    demo,
  },
  data: function () {
    return {
      amount: "",
      demoText: [
        "相册",
        "轮播图",
        "放大镜",
        "星级评价",
        "触底",
        "楼层滚动",
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
}

.loading_{
  position: fixed;
  top:0;
  left: 0;;
  background: url(./assets/img/loading_pic.gif) no-repeat 50% 50%;
  z-index:999;
  width:100vw;
  height:100vh;
  text-align:center;
}
</style>

    <!-- tab切换 -->
    <!-- <div class="app_box">
      <ul class="app_ul" :style="{ width: amount * 70 + 'px' }">
        <li
          v-for="(item, index) in amount"
          :key="index"
          class="appBtn_li"
          @click="showDemoBox(index)"
        >
          <span>{{ demoText[index] }}</span>
        </li>
      </ul>
    </div>
    <div class="allBox" ref="allBox">
      <div>
        <photoAlbumItem />
      </div>
      <div>
        <draft />
      </div>
      <div>
        <carouselItem></carouselItem>
      </div>

      <div>
        <magniflerGlass />
      </div>
      <div>
        <reviewsItem />
      </div>
      <div>
        <buttomOut />
      </div>
      <div>
        <floorScroll />
      </div>
    </div> 
    

    .app_box {
  height: 50px;
  /* transform: translateY(-100%); */
  /* display: block; */
  border-bottom: 2px solid rgba(12, 151, 243, 0.55);
}
.app_ul {
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.appBtn_li {
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: rgba(12, 151, 243, 0.55);
  box-shadow: 2px 0px 10px 3px rgba(7, 148, 241, 0.55);
  border-radius: 10%;
  margin: 0 10px;
  cursor: pointer;
}


          methods: {
    showDemoBox(num) {
      this.$refs.allBox.children.forEach((item) => {
        item.style.display = "none";
      });
      this.$refs.allBox.children[num].style.display = "block";
    },
  },
  mounted() {
    this.amount = this.$refs.allBox.children.length;
    this.$refs.allBox.children.forEach((item) => {
      item.style.display = "none";
    });
    this.$refs.allBox.children[0].style.display = "block";
  },
    -->

