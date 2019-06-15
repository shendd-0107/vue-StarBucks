<template>
    <div class="wrap work">
        <Header :classname='classname'>
            <p>{{this.type ==='overtime' ? '办公室加班申请表':"办公室休假申请表"}}</p>
            <span></span>
        </Header>
        <!--  -->
        <div class="username">
            <dl>
                <dt>
                    <img :src="data.avatar" alt="">
                </dt>
                <dd>
                    <span>申请人姓名</span>
                    <span>直接主管</span>
                    
                </dd>
                <dd>
                    <span></span>
                    <span>{{data.nickname}}</span>
                    <span></span>
                    <span>秦义超</span>
                </dd>
                <dd>
                    <span>&gt;</span>
                </dd>
            </dl>
        </div>
        <!-- 下边的盒子 -->
        <div class="content">
            <div class="meg">
                <h3>申请信息</h3>
                <p>
                    <span>{{gettype}}日期<i>*</i></span>
                    <span>
                        <div class="block">
                            <el-date-picker
                            v-model="getwork.date"
                            placeholder="选择日期"
                            format='yyyy-MM-DD'
                            :clearable="false"
                            >
                            </el-date-picker>
                        </div>
                    </span>
                </p>
                <p>
                    <span>{{gettype}}类型<i>*</i></span>
                    <span>
                        <select v-model="getwork.type" class='checktype'>
                            <option value='-1'>选择类型</option>
                            <option v-for="(item) in this[type+'type']" :key='item.id' :value="item.id">{{item.title}}</option>
                        </select>
                    </span>
                </p>
                <p>
                    <span>{{gettype}}起始时间<i>*</i></span>
                    <span>
                        <div class="block">
                            <el-time-picker
                            v-model="getwork.startTime"
                            :clearable="false"
                            format="HH:mm"
                            placeholder="开始时间">
                            </el-time-picker>
                        </div>
                    </span>
                </p>
                <p>
                    <span>{{gettype}}截止时间<i>*</i></span>
                    <span>
                        <div class="block">
                            <el-time-picker
                            v-model="getwork.endTime"
                            :clearable="false"
                            @change='changeTimeFn'
                            format="HH:mm"
                            placeholder="结束时间">
                            </el-time-picker>
                        </div>
                    </span>
                </p>
                <p>
                    <span>共计时数<i>*</i></span>
                    <span>{{timers}}个小时</span>
                </p>
            </div>
            <div class="reason">
                <h3>{{gettype}}事由</h3>
                <p>
                   <textarea v-model='getwork.describe'></textarea>
                </p>
            </div>
            <div class="reason img">
                <h3>上传附件<input type="file" @change='fileFn' ref='filename'/></h3>
                <p>
                    <img v-for="(item,index) in getwork.annex" :key='index' :src="'http://localhost:3000'+item"/>
                </p>
            </div>
        </div>
        <!-- 最下边的脚 -->
        <footer class="footer">
            <span @onclick='$route.back()'>取消</span>
            <p class="argee" @click='submitOver'>提交</p>
        </footer>
    </div>
</template>
<script>
import api from "../../api/index";
import {mapState,mapActions} from "vuex"
import Files from "../../utils/files"
export default {
    props:{
        type:String,
        id:String
    },
    data(){
        return {
            classname:'detail-header',
            timers:'',
            getwork:{
                date:"",
                annex:[],//附件对象
                describe:"",//加班理由
                endTime:"",//结束时间
                startTime:"",//开始时间
                type:"-1"//类型
            },
            overtimetype:[
                {
                    id:0,
                    title:"双休日加班"
                },
                {
                    id:1,
                    title:"节假日加班"
                },
                {
                    id:2,
                    title:"工作日加班"
                }
            ],
            vacationtype:[
                {
                    id:0,
                    title:"年假"
                },
                {
                    id:1,
                    title:"调休"
                }
            ],
            
        }
    },
    computed:{
        ...mapState(['data']),
        gettype(){
            return this.type === 'overtime' ? '加班' :'休假'
        },
        
    },
    methods:{
        ...mapActions(['getuserinfo']),
        changeTimeFn(){
            let n = new Date(this.getwork.endTime)*1 - new Date(this.getwork.startTime)*1;
            (n/1000/3600).toFixed(2)
            if((n/1000/3600).toFixed(2)<0){
                alert("您的时间输入有误哦")
            }
            else{
                this.timers = (n/1000/3600).toFixed(2);
            }
        },
        fileFn(e){
            let userfile = this.$refs.filename.files[0];
            let fileFlag = new Files(userfile,{
                size:3,
                type:['jpg','png','gif','jpeg']
            })
            if(fileFlag.checkType() &&  fileFlag.checkSize()){
                let formdata = new FormData()
                formdata.append('file',userfile);
                api.commitFile(formdata).then(res=>{
                    let {url} = res;
                    this.getwork.annex.push(url);
                })
            }
            else{
                this.$alerts("您上传的文件太大或者不是图片的格式~")
            }
        },
        submitOver(){
            if((this.getwork.data!=='')&&this.getwork.annex && this.getwork.describe && this.getwork.endTime && this.getwork.startTime &&(this.getwork.type!==-1)){
                api['get'+this.type](this.getwork).then(res=>{
                    this.$router.back()
                })
            }
            else{
                this.$alerts("请将您的数据填写完整")
            }
        }
    },
    created(){
        this.getuserinfo()
       
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
.work{
    background: #f7f7f7;
}
.username {
    width: 100%;
    color: #fff;
    background: #0B6242;
    height: pxTorem(130px);
    border-radius: 0  0 pxTorem(20px) pxTorem(20px) ;
    box-sizing: border-box;
    overflow: hidden;
    padding: pxTorem(14px) pxTorem(15px) ;
    dl{
        width: 100%;
        height: 100%;
        @include box_flex;
        dt{
            width: pxTorem(42px);
            height: pxTorem(42px);
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        dd{
            &:nth-child(2),&:nth-child(3){
                flex: 1;
                >span{
                    font-size: pxTorem(14px);
                    display: block;
                    color:#B1E8D5;
                    padding: 0 0 pxTorem(5px) pxTorem(15px)
                }
            }
            &:nth-child(4){
                 width: pxTorem(30px);
            }
        }
    }
}

// 
.content{
    width: 94%;
    margin-left: 3%;
    margin-top: pxTorem(-24px);
    flex: 1;
    overflow: auto;
    .meg{
        width: 100%;
        background: #fff;
        border-radius: pxTorem(8px);

        h3{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
        }
        >p{
            width: 94%;
            height: pxTorem(40px);
            margin-left: 3%;
            display: flex;
            justify-content: space-between;
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            span:nth-child(1){
                color: #A6A6A6;
                i{
                    color: red;
                }
            }
        }
        .checktype{
            width: pxTorem(100px);
            height: pxTorem(30px);
            font-size: pxTorem(14px);
            outline: none;
        }
    }
    .reason{
        width: 100%;
        margin-top: pxTorem(16px);
        background: #fff;
        border-radius: pxTorem(8px);
        h3{
            width: 94%;
            height: pxTorem(40px);
            line-height: pxTorem(40px);
            font-size: pxTorem(14px);
            border-bottom: 1px solid #eee;
            margin-left: 3%;
        }
        >p{
            width: 94%;
            margin-left: 3%;
            height: pxTorem(60px);
            font-size: pxTorem(14px);
            padding-top: pxTorem(3px);
        }
    }
    .img{
        >h3{
            padding-left:10px;
             width: 100%;
            height: pxTorem(40px);
            display: flex;
            background: #eee;
            >input{
                opacity: 0;
            }
        }
        >p{
            width: 100%;
            height: pxTorem(120px);
            display: flex;
            overflow: auto;
            >img{
                width: pxTorem(120px);
                height: pxTorem(120px);
            }
        }
    }
}
.footer{
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    line-height: pxTorem(50px);
    font-size: pxTorem(14px);
    span{
        width: pxTorem(80px);
        height: 100%;
        text-align: center;

    }
    p{
        flex: 1;
        text-align: center;
    }
    .quit{
        background: #404A53;
        color: #fff
    }
    .argee{
        background: #0b6242;
        color: #fff;
    }
}
</style>