<style>
body{background-color: #FBF9FE;}
.tab{
  margin-top:10px;
}
.tab1{
    color: #009966 !important;
    border-color:  #009966 !important;
}
.group{margin-top:-10px;}
</style>

<template>
  <div id="app">
    <!-- 顶部 -->
    <tab class="tab">
        <tab-item active-class="tab1"  @on-item-click="onItemClick">报计划</tab-item>
        <tab-item active-class="tab1" selected @on-item-click="onItemClick"> 记工作量</tab-item>
    </tab>
    <group class="group">
      <selector title="项目名称" placeholder="项目名称" placeholder-align="right" :options="list"></selector>
      <datetime format="YYYY-MM-DD" title="工作日期"></datetime>
      <selector title="工作时长" :options="list2"></selector>
      <x-textarea title="工作内容" :rows="6"></x-textarea>
    </group>
    <box gap="20px 10px">
      <flexbox>
        <flexbox-item>
          <x-button type="primary" style="border-radius:10px;" link="/demo">提交</x-button>
        </flexbox-item>
      </flexbox>
    </box>
    <footerTab></footerTab>
  </div>
</template>
<script type="text/babel">
import { Group, Selector, XTextarea,Box,Flexbox, FlexboxItem,XButton,Datetime,Tab,TabItem} from 'vux'
import footerTab from "../components/footer/footerTab";
export default {
  //这里需要将模块引出，可在其他地方使用
   name: "note_workload",
  data() {
    //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      list: [{key: '1', value: '项目测试1'}, {key: '2', value: '项目测试2'}],
      list2: [{key: '1', value: '1'}, {key: '2', value: '2'},{key: '3', value: '3'}, {key: '4', value: '4'}],
    };
  },
  methods: {
       onItemClick (index) {
            this.$router.push({ path: '/plan'});
        },
   },
  mounted: function() {
    document.title = "记工作量";
  },
  components: {
    Group,
    Selector,
    XButton,
    Flexbox,
    FlexboxItem,
    Box,
    XTextarea,
    Datetime,
    Tab,
    TabItem,
     footerTab
  }
};
</script>
