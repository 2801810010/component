<template>
  <div>
    <button v-copy="copyText">拷贝</button>
    <button v-longpress="longpress">长按</button>
    <button v-debounce="debounceClick">防抖</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyText: "要copy的内容",
      count:0,
      timer:null,
    };
  },
  methods: {
    longpress() {
      alert("长按指令生效");
    },
     handle(){
      this.count++;
    },
    debounceClick() {
      this.count++
      console.log("只触发一次");
    },
   
  },
};
</script>
