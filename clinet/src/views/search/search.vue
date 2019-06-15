<template>
    <div class="wrap search">
        <div class="search-header">
            <p>
                <span class="iconfont">&#xe613;</span>
                <input type="text" placeholder="搜索"/>
            </p>
            <span>取消</span>
        </div>
        <div class="search-his">
            <div class="search-title">搜索制定内容</div>
            <div class="search-cont">
                <p v-for="(item) in history" :key="item.id">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            history:[
                {
                    title:"加班类型",
                    id:1,
                },
                {
                    title:"发起时间",
                    id:2,
                },
                {
                    title:"加班日期",
                    id:3,
                },
                {
                    title:"申请单号",
                    id:4
                },
                {
                    title:"加班时数",
                    id:5
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        ...mapActions(['getuserinfo'])
    },
    created(){
        this.getuserinfo();
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
@import "../../static/scss/common.scss";
@import "../../static/scss/_minix.scss";
.search{
    background: #fff;
}
.search-header{
    width: 90%;
    height: pxTorem(30px);
    display: flex;
    margin-left:5%;
    background: #fff;
    margin-top:10px;
    >p{
        flex:1;
        border-radius: 10px;
        background: #f7f7f7;
        display: flex;
        >span{
            width: pxTorem(40px);
            height: 100%;
            font-size: pxTorem(16px);
            color:#666;
            line-height: pxTorem(30px);
            text-align: center;
        }
        >input{
            width: 100%;
            height: 100%;
            outline:none;
            color:#999;
        }
    }
    >span{
        width:pxTorem(34px) ;
        padding-left:pxTorem(10px);
        line-height: pxTorem(30px);
        height: 100%;
        color:#0b6242;
    }
}
.search-his{
    width: 90%;
    margin-left:5%;
    margin-top:pxTorem(60px);
    text-align: center;
    >.search-title{
        color:#dadada;
        font-size: pxTorem(14px)
    }
    >.search-cont{
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        >p{
            width: 33.33%;
            height: pxTorem(20px);
            border-right:1px solid #ccc;
            text-align: center;
            margin-top:pxTorem(30px);
            color:#0b6242;
            &:nth-child(3),&:nth-child(5){
                border:0;
            }
        }
    }
}
</style>