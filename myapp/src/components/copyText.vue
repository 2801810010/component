<template>
  <div>
      <button v-copy>按钮</button>
  </div>
</template>

<script>

export default {
    name:'copyText',
    data(){
        return{
            copyText:'copy的文本',
            dir:'left',
            num:500+'px'
        }
    },
    
}

</script>

<style>

</style>