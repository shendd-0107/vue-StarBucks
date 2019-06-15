<template>
    <div class="wrap examine">
        <div class="top">
            <Header :classname="classname">
                <p>审批历史</p>
                <span></span>
            </Header>
            <div class="title_top">
                <div>
                    <span>申请人</span>
                    <span></span>
                    <span>部门</span>
                    <span></span>
                </div>
                <div>
                    <span>员工职务</span>
                    <span></span>
                    <span>员工编号</span>
                    <span></span>
                </div>
                </div>
            </div>
        <div class="content">
            <div class="box">
                <ul>
                    <li v-for="(item,i) in datas" :key="i">
                        <img :src="item.avatar"/>
                        <p>{{item.nickname}}</p>
                        <p>{{item.remark}}</p>
                    </li>
                    <!-- <el-timeline >
                        <el-timeline-item 
                        v-for="(item,i) in datas" :key="i"
                        timestamp="2018/4/12" placement="top" color='#fcc'>
                            <el-card>
                                <h4>{{item.nickname}}</h4>
                                <p>审批意见：{{item.remark}}</p>
                            </el-card>
                        </el-timeline-item>
                        
                    </el-timeline> -->
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../api/index"
export default {
    props:{
        applicationNumber:String
    },
    components:{

    },
    data(){
        return {
            classname:'detail-header',
            datas:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        let app = this.applicationNumber
        api.getexamine({
                applicationNumber:app
                }
            ).then(res=>{
                console.log(res.data)
            this.datas = res.data;
        })
    },
    mounted(){

    }
}
</script>
<style lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.examine{
    background: #fff;
}

.top {
  background: #0b6242;
  border-radius: 0 0 15% 15%;
  height: pxTorem(120px);
  .header {
    color: #fff;
  }
  .title_top {
    width: 80%;
    background: #fff;
    margin-left: 10%;
    border-radius: pxTorem(5px);
    display: flex;
    justify-content: space-around;
    font-size: pxTorem(14px);
    position: absolute;
    top: 10%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 pxTorem(5px) pxTorem(13px) 0 #eee;
    > div {
      flex: 1;
      display: flex;
      line-height: pxTorem(44px);
      span{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
.content{
  flex: 1;
  .box{
    width: 94%;
    margin-left: 3%;
    margin-top: pxTorem(80px);
    ul{
      width: 100%;
      li{
        display: flex;
        height: pxTorem(60px);
        margin-bottom: pxTorem(30px);
        img{
          width: pxTorem(50px);
          height: pxTorem(50px);
        }
        p{
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}


</style>