<template>
  <div id="app">
    <p class="status"><img src="./static/img/status.jpg"/></p>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: 'App',
  created(){
      this.getuserinfo();
  },
  methods:{
     ...mapActions(['getuserinfo']),
  }
}
</script>

<style lang="scss">
  @import "./static/scss/_minix.scss";
  @import "./static/scss/common.scss";
  *{
    margin:0;
    padding:0;
    @include sizing;
  }

  html,body,#app{
    @include height(100%);
    @include width(100%);
    background: #eee;
  }
  #app{
    display: flex;
    flex-direction: column;
  }
  .status{
    width: 100%;
    height: pxTorem(16px);
    >img{
      width: 100%;
      height: 100%;
    }
  }
  .wrap{
    flex:1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    >.dialog{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.3);
      z-index: 99;
      position: fixed;
      top:pxTorem(16px);
      left:0;
      >.cont{
        width: 100%;
        height: pxTorem(130px);
        background: #fff;
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
    header{
      width: 100%;
      height: pxTorem(35px);
      background: #fff;
      display: flex;
      line-height: pxTorem(35px);
      >span{
        width: pxTorem(64px);
        height: 100%;
        text-align: center;
        >a{
          display: inline-block;
        }
        >i,>a>i{
          display: inline-block;
          width: pxTorem(25px);
          font-size: pxTorem(15px)
        }
        
      }
      >p{
        flex:1;
        text-align: center;
        font-size: pxTorem(16px);
        font-weight: 600;
      }
    }
    .detail-header{
      width: 100%;
      height: pxTorem(35px);
      display: flex;
      line-height: pxTorem(35px);
      background: #0b6242;
      color:#fff;
      border-bottom:#0b6242;
    }
    nav{
      width: 100%;
      height: pxTorem(73px);
      display: flex;
      background: #fff;
      // box-shadow: 0 10px 10px 0 #ccc;

      >dl{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        >dt{
          width: 100%;
          line-height: pxTorem(40px);
          text-align: center;
          height: pxTorem(40px);
          font-size: pxTorem(20px);
          color:#999;
        }
        >dd{
          flex:1;
          font-size: pxTorem(12px);
          color:#999;
         
        }
      }
      >dl.active{
          >dt,dd{
            color:#056041;
          }
        }
    }
    .main-header{
      width: 100%;
      height: pxTorem(62px);
      background: #fff;
      display: flex;
      line-height: pxTorem(62px);
      >span{
        width: pxTorem(64px);
        height: 100%;
        >i{
          display: inline-block;
          width: 45%;
          height: 100%;
          font-size: pxTorem(18px);
        }
      }
      >p{
        flex:1;
        text-align: center;
        line-height: pxTorem(62px);
        font-size:0;
        >span{
          display: inline-block;
          width: pxTorem(70px);
          height: pxTorem(30px);
          border:1px solid #ccc;
          line-height: pxTorem(30px);
          font-size: pxTorem(12px);
          &.active{
            background: #056041;
            color:#fff;
          }
        }
        >.job{
          border-radius: 30px 0 0  30px;
        }
        >.happy{
          border-radius: 0 30px 30px 0;
        }
      }
    }
    main{
      flex:1;
      overflow: auto;
      >.add-task{
        width: 35%;
        height: pxTorem(50px);
        border-radius: 50px;
        background: #056041;
        text-align: center;
        line-height: pxTorem(45px);
        color: #fff;
        font-size: pxTorem(14px);
        position: fixed;
        bottom:7%;
        right:5%;
        z-index: 9;
        >span{
          font-size: pxTorem(20px);
          margin-right:pxTorem(5px);
        }
      }
      
    }
    
  }
</style>
