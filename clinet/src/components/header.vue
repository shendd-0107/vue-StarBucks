<template>
    <header :class='classname'>
        <span class="header-back" @click=$router.back()><i class="iconfont">&#xe606;</i></span>
        <slot></slot>
    </header>
</template>
<script>
export default {
    props:['classname'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style>