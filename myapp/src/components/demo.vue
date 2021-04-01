<template>
 <div>

    <button v-loading="flag" class="btn_" >按钮</button>
    <div v-loading="flag">1111</div>
 </div>
</template>

<script>
export default {
    data(){
        return{
            flag:true
        }
    },
    methods:{

    }
}
</script>

<style>
    .btn_{
        position: relative;
        width: 200px;
        height: 30px;
        margin-top: 20px;
        margin-left:50%;
        transform: translateX(-50%);
    }
</style>