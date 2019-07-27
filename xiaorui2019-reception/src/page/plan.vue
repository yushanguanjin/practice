<style  lang="less">
body {
  background-color: #fbf9fe;
}
.up_div {
  width: 100%;
  height: 60px;
  background-color: white;
  margin-top: 10px;
  position: relative;
}
.up_div div {
  width: 50%;
  float: left;
  text-align: center;
  line-height: 60px;
}
.tab1 {
  color: #009966 !important;
  border-color: #009966 !important;
}
.group {
  margin-top: -10px;
}
</style>

<template>
  <div id="app">
    <!-- 顶部 -->
    <tab>
      <tab-item active-class="tab1" selected @on-item-click="onItemClick">报计划</tab-item>
      <tab-item active-class="tab1" @on-item-click="onItemClick">记工作量</tab-item>
    </tab>
    <group class="group">
      <x-switch title="选择项目" v-model="show12"></x-switch>
      <datetime format="YYYY-MM-DD" title="计划日期"></datetime>
      <x-textarea title="工作内容" :rows="6"></x-textarea>
    </group>
    <box gap="20px 10px">
      <flexbox>
        <flexbox-item>
          <x-button type="primary" style="border-radius:10px;" >提交</x-button>
        </flexbox-item>
      </flexbox>
    </box>

    <div>
      <popup v-model="show12" height="100%" position="bottom">
        <tab>
          <tab-item v-for="(item, index) in navList" @click="getItem(index)" :selected="index == 0" :key="index">{{item}}</tab-item>
        </tab>
        <group>
          <cell-form-preview :border-intent="false" :list="navList2"></cell-form-preview>
        </group>
        <div style="padding: 15px;">
          <x-button @click.native="show12 = false" plain type="primary">Close Me</x-button>
        </div>
      </popup>
    </div>
     <footerTab></footerTab>
  </div>
</template>
<script type="text/babel">
import {
  Group,
  Cell,
  CellBox,
  Box,
  XTextarea,
  Flexbox,
  FlexboxItem,
  XButton,
  Datetime,
  Tab,
  TabItem,
  AjaxPlugin,
  XSwitch,
  Popup,
  CellFormPreview
} from "vux";
import footerTab from "../components/footer/footerTab";
export default {
  //这里需要将模块引出，可在其他地方使用
  data() {
    //注意：data即使不需要传数据，也必须return,否则会报错
    return {
      navList: [],
      navList2: [],
      show12: false,
      index: 0,
      num: 0
    };
  },
  methods: {
    onItemClick(index) {
      this.$router.push({ path: "/note_workload" });
    },
    created() {
      AjaxPlugin.$http
        .post("/api/web_api/weixin/Chaworkload/get_project_leixing", {
          'pageindex': 1,
          'pagesize': 10
        })
        .then((response) => {
          console.log(response.data);
          this.navList = response.data.data
        });
    },
    created2(index) {
      AjaxPlugin.$http
        .post("/api/web_api/weixin/Chaworkload/get_choose_project", {
          'pageindex': 1,
          'pagesize': 10,
          'classname':index
        })
        .then((response) => {
          console.log(response.data.list)
          this.navList2 = response.data.list
        });
    },
    getItem(index) {
      this.num = index;
      this.$emit("getIndex", index);
      this.created2(index);
    }
  },
  mounted: function() {
    document.title = "记工作量";
    this.created();
    this.created2(1);
  },
  components: {
    Group,
    Cell,
    CellBox,
    XButton,
    Flexbox,
    FlexboxItem,
    Box,
    XTextarea,
    Datetime,
    Tab,
    TabItem,
    AjaxPlugin,
    XSwitch,
    Popup,
    CellFormPreview,
    footerTab
  }
};
</script>
