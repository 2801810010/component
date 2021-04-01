const debounce = {
    inserted: function (el, binding) {
      let timer;
      el.addEventListener('click', () => {
        if (timer) {
          console.log('1111');
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          console.log('2222');
          binding.value()
        }, 2000)
      })
    },
  }
  
  export default debounce;//防抖