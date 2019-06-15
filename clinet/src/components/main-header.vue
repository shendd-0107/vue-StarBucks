<template>
    <div class="main-header">
        <span></span>
        <p>
            <span :class="['job',{active:tag==='overtime'}]" @click='tableType("overtime")'>加班</span>
            <span :class="['happy',{active:tag==='vacation'}]" @click='tableType("vacation")'>休假</span>
        </p>
        <span>
            <i class="iconfont" @click='$router.push("/filter")'>&#xe62b;</i>
            <i class="iconfont" @click='$router.push("/sort")'>&#xe6a4;</i>
        </span>
    </div>
</template>
<script>
export default {
    props:['tag'],
    components:{

    },
    data(){
        return {
           
        }
    },
    computed:{

    },
    methods:{
        tableType(ind){
            // this.index=ind
            this.$emit('tableType',ind)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>