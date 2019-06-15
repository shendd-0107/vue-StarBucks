<template>
  <div class="item" @click=detailFn(applicationNumber,list_type)>
    <p class="item-list">
      <span>{{applicationNumber}}</span>
      <span>{{list_type}}</span>
    </p>
    <p class="item-list">
      <span>申请人</span>
      <span>{{name}}</span>
      <span>加班类型</span>
      <span>{{describes}}</span>
    </p>
    <p class="item-list">
      <span>{{create_at.substr(0,10)}}</span>
      <span>CIIC WANG</span>
      <span>加班时数</span>
      <span>{{days}}天</span>
    </p>
  </div>
</template>
<script>
export default {
  props: ['name','type','create_at','describes','endTime','startTime','applicationNumber','list_type'],
  components: {},
  data() {
    return {
        days:''
    };
  },
  computed: {},
  methods: {
    detailFn(id,type){
      this.$router.push({name:"detail",params:{type,id}})
    }
  },
  created() {
      let timer = new Date(this.endTime)-new Date(this.startTime)
      this.days = parseInt(timer / 1000 / 60 / 60 / 24);
      let hours = parseInt((timer / 1000 / 60 / 60) % 24);
  },
  mounted() {}
};
</script>
<style lang="scss">
@import "../static/scss/common.scss";
@import "../static/scss/_minix.scss";
.item {
  width: 100%;
  height: pxTorem(102px);
  background: #fff;
  margin-bottom:pxTorem(10px);
  >p{
    width: 94%;
    margin-left: 3%;
    display: flex;
    justify-content: space-between;
    font-size: pxTorem(16px);
    color: #888888;
    &:nth-child(1){
        padding: pxTorem(8px) 0;
    }
    &:nth-child(2),&:nth-child(3){
        padding: pxTorem(3px) 0
    }
  }

}
</style>
