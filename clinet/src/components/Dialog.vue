<template>
    <transition name="fade">
        <div class="dialog" @click=currentFn>
                <div class="cont" >
                    <router-link to="/commit/overtime" tag="p">加班</router-link>
                    <router-link to="/commit/vacation" tag="p">休假</router-link>
                </div>
        </div>
    </transition>
    
</template>
<script>
export default {
    props:['clickFn'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        currentFn(e){
            if(e.target === e.currentTarget){
                this.clickFn();
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/scss/_minix.scss";
@import "../static/scss/common.scss";
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.fade-enter-active,.fade-leave-active{
    transition: opacity 1s;
}
.fade-enter-to,.fade-leave{
    opacity: 1;
}

</style>