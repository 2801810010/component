<!-- <h2>相册</h2> -->
<template>
  <div class="photoBox" ref="demoBox" @mousedown="rotateItem($event)" @click="ononon">
    <ul class="pic" ref="pic">
      <li class="list" v-for="(item, index) in images" :key="index">
        <img :src="item.img" alt="" draggable="false" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "photoAlbum",
  data() {
    return {
      images: [
        { img: require("../assets/img/img (1).png") },
        { img: require("../assets/img/img (2).jpg") },
        { img: require("../assets/img/img (3).jpg") },
        { img: require("../assets/img/img (4).png") },
        { img: require("../assets/img/img (5).jpeg") },
        { img: require("../assets/img/img (6).jpg") },
        { img: require("../assets/img/img (7).jpg") },
        { img: require("../assets/img/img (8).jpg") },
        { img: require("../assets/img/img (9).jpg") },
        { img: require("../assets/img/img (10).jpeg") },
        { img: require("../assets/img/img (11).jpeg") },
        { img: require("../assets/img/img (12).png") },
      ],
      count: "",
      timer: "",
      mouseUp: "",
      flag: true,
      animate(k, j) {
        this.timer = setTimeout(function () {
          k.style.transition = "all 1.5s ease";
          k.style.transform =
            " rotateY(" + (j * 30 - 1) + "deg) translateZ(500px)";
        }, 500);
      },
      tim: 0,
      timer:null,
      ul_left: "",
      ul_top: "",
    };
  },
  methods: {
    rotateItem(k) {
      this.$refs.pic.onmousemove = function (e) {
        let ex = parseInt((e.x - k.x) / 16.7);
        let ey = parseInt((e.y - k.y) / 16.7);
        this.$refs.pic.style.transform = `  rotateX(${-ey}deg) rotatey(${ex}deg)`;
      }.bind(this);
      this.$el.onmouseup = () => {
        this.$refs.pic.onmousemove = null;
      };
    },
    downOn(r) {
      this.mouseUp = function () {
        this.flag = false;
      };
    },
    ononon(){
      console.log(this.timer);
      // clearInterval(this.timer)
    }
  },
  mounted() {
    this.ul_left = this.$refs.pic.offsetLeft;
    this.ul_top = this.$refs.pic.offsetTop;
    let p = this.$refs.pic.children; //所有的图片
    this.count = this.images.length; // 图片的数量
    let ti = setInterval(() => {
      this.count--;
      if (this.count == 0) {
        clearInterval(ti);
      }
      this.animate(p[this.count], this.count);
    }, 100);
    // console.log(this.$refs.demoBox); // 大盒子
    // this.timer = setInterval(()=>{
    //   // console.log(this);
    //   this.tim+=0.1;
    //   if(this.tim >= 360){
    //     this.tim = 0;
    //   }
    //   // console.log(this.tim);
    //   // console.log(this.$refs.pic.style.transform);
    //    this.$refs.pic.style.transform =`rotatey(${this.tim}deg)`;
    // },16.7); 
  },
};
</script>
<style >
* {
  margin: 0;
  padding: 0;
}
body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul {
  list-style: none;
}

.photoBox {
  background-color: #000;
  perspective: 1500px;
  height: 100vh;
  perspective-origin: 55% -10%;
  /* onselectstart=”return false;” */
  overflow: hidden;
}

.pic {
  transform-style: preserve-3d;
  width: 100%;
  height: 600px;
  margin: auto;
  transform: rotateX(0deg) rotateY(0deg);
}

.list img {
  width: 100%;
  /* draggable="false" */
}

.list {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 216px;
  margin-top: -100px;
  margin-left: -108px;
  -webkit-box-reflect: below 20px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
        40%, rgba(0, 0, 0, 0.5) 100%);
  box-shadow: 0 0 10px #fff;
  cursor: pointer;
}
</style>
