<template>
    <div class="base-alert" v-show='open'>
        {{text}}
    </div>
</template>
<script>
export default {
    props:{
        text:String
    },
    components:{

    },
    data(){
        return {
            open:true,
            timer:null
        }
    },
    computed:{

    },
    mounted(){
        this.timer = setTimeout(()=>{
            this.open = false;
        },2000)
    },
    destroyed(){
        clearTimeout(this.timer);
    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.base-alert{
    padding:pxTorem(10px);
    background: rgba(0,0,0,.6);
    color:#fff;
    text-align: center;
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 10%;
}
</style>