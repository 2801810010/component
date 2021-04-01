<template>
  <div>
    <button v-debounce="handle">节流按钮</button>
  </div>
</template>
<script>
export default {
  name: "dract",
  directives: {
    debounce: {
      //防抖函数指令
      inserted: function (el, binding) {
        let timer;
        el.addEventListener("click", () => {
            console.log('111');
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(() => {
            //关键点:vue 的自定义指令传递的参数binding 如果是一个函数,则通过      binding.value()来执行,通过上述示例,还可以传递比如事件, 绑定对象之类的
            binding.value();
          }, 1000);
        });
      },
    },
  },
  methods: {
    handle() {
      console.log(1);
    },
  },
};
</script>

<style >
</style>
