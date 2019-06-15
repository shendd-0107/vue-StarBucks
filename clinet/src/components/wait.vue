<template>
    <div>
        <List v-for="(item,index) in listdata" :key="index" 
        :name='item.nickname' 
        :type='item.list_type'
        :create_at=item.create_at
        :describes=item.describes
        :endTime=item.endTime
        :startTime=item.startTime
        :applicationNumber=item.applicationNumber
        :list_type=item.list_type
        />
    </div>
</template>
<script>
export default {
    props:['listdata'],
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
<style scoped lang="">

</style>