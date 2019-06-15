<template>
    <div class="wrap">
        <Header>
            <p>加班/休假</p>
            <span class="header-search">
                <i class="iconfont">&#xe666;</i>
                <router-link to="/search"><i class="iconfont">&#xe612;</i></router-link>
            </span>
        </Header>
        <Nav>
            <dl v-for="(item,index) in nav" :key=item.id :to=item.link :class='{"active":index===ind}'
                @click=navFn(index)
            >
                <dt class="iconfont" v-html=item.icon></dt>
                <dd>{{item.title}}</dd>
            </dl>
        </Nav>
        <MainHeader @tableType='tableType' :tag=listparams.type></MainHeader>
        <main>
            <Wait :listdata='listdata'/>
            <p class="add-task" @click=dialogFn><span>+</span>发起任务</p>
        </main>
        <Dialog v-show="dialog" :clickFn='clickFn'/>
    </div>
</template>
<script>
import Wait from "../components/wait"
import Dialog from "../components/Dialog"
import api from "../api/index"
export default {
    
    components:{
        Dialog,
        Wait
    },
    data(){
        return {
            nav:[
                {
                    title:"待处理",
                    icon:"&#xe62e;",
                    link:"wait",
                    id:1
                },
                {
                    title:"已发起",
                    icon:"&#xe63e;",
                    link:"go",
                    id:2
                },
                {
                    title:"已完成",
                    icon:"&#xe603;",
                    link:"finish",
                    id:3
                }
            ],
            ind:0,
            dialog:false,
            listdata:[],
            listparams:{
                page:1,
                pageSize:5,
                create_at:0,
                type:"overtime",
                status:0
            }
        }
    },
    methods:{
        dialogFn(){
             this.dialog = true;
        },
        clickFn(){
             this.dialog = false;
        },
        navFn(index){
            this.ind=index;
            this.listparams.type='overtime';
            this.listparams.status = index;
            this.getstatus();
        },
        tableType(type){
            
            this.listparams.type=type;
            this.getstatus();
        },
        getstatus(){
            api.getlist(this.listparams).then(res=>{
                console.log(res.data,'----list')
                this.listdata = res.data
            })
        },
        
    },
    created(){
        this.getstatus();
    },
    mounted(){
       
    }
}
</script>
<style scoped lang="">

</style>