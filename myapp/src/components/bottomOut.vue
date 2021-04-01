<template>
    <div>
        <h1 v-for="x in 30" :key="x">hhhh</h1>
    </div>
</template>

<script>

export default ({
    data(){
        return {
            data:[]
        }
    },
    methods:{

    },
    mounted(){
        window.onscroll = function(){
            let H = parseInt(getComputedStyle(document.documentElement,null)['height']);

            let scroll_h = scrollY;

            let h = innerHeight
            console.log(H,h,scroll_h,'1');
            let flag = scroll_h + h >= H
            if(flag){
                alert('触底')
            }

        }.bind(this)
    }
})
</script>

<style >

</style>
