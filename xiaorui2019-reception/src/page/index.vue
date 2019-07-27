
<template>
  <div>
    <div>
      <div>
        <button-tab>
          <button-tab-item selected>个人中心</button-tab-item>
          <button-tab-item>申请</button-tab-item>
          <button-tab-item>审批</button-tab-item>
          <button-tab-item>任务</button-tab-item>
        </button-tab>
      </div>
      <div class="main">
        <div class="staff">
          <img src="../images/personCenter/baoxiao-shenqing.png" alt class="staff-pic" />
          <p class="identity">IOS开发组成员</p>
          <p class="email-box">aaaaaa@qq.com</p>
          <div class="staff-info">
            <p class="id">ID</p>
            <p class="id-value">1234</p>
          </div>
          <div class="staff-info">
            <p class="name">姓名</p>
            <p class="name-value">aa</p>
          </div>
          <div class="staff-info">
            <p class="telephone-number">手机号</p>
            <p class="telephone-number-value">12345678910</p>
          </div>
        </div>
        <div class="notice">
          <div class="notice-item">   
            <span>通知1</span>
            <x-icon type="ios-arrow-right" size="30" class="arrow-right"></x-icon>
          </div>
          <div class="notice-item">
            <span>通知2</span>
            <x-icon type="ios-arrow-right" size="30" class="arrow-right"></x-icon>
          </div>
          <div class="notice-item">
             <span>通知3</span>
            <x-icon type="ios-arrow-right" size="30" class="arrow-right"></x-icon>
          </div>
        </div>
        <div>
          <div class="notice-item">
            <span>更多通知</span>
            <x-icon type="ios-arrow-right" size="30" class="arrow-right"></x-icon>
          </div>
          <div class="notice-item">
            <span>账户列表</span>
            <x-icon type="ios-arrow-right" size="30" class="arrow-right"></x-icon>
          </div>
        </div>
         <x-button type="primary" link="/note_workload" class="add-workload">添加工作量</x-button>
      </div>
    </div>
    <footerTab></footerTab>
  </div>
</template>
<script>
import {
  GroupTitle,
  SwiperItem,
  XButton,
  Divider,
  Search,
  Tabbar,
  TabbarItem,
  Loading,
  ButtonTab,
  ButtonTabItem
} from "vux";
import { API, getQuery } from "../services";
import footerTab from "../components/footer/footerTab";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    GroupTitle,
    SwiperItem,
    XButton,
    Divider,
    Search,
    Tabbar,
    TabbarItem,
    Loading,
    ButtonTab,
    ButtonTabItem,
    footerTab
  },

  methods: {}
};
</script>

<style  scoped>
.vux-button-group > a.vux-button-group-current {
  border-radius: 0;
}
.vux-button-group > a.vux-button-group-current {
  color: #666;
  background: rgb(241, 241, 241);
}

.vux-button-group > a.vux-button-tab-item-first:after {
  border: 1px solid #666;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.vux-button-group > a.vux-button-tab-item-middle:after {
  border-right: 1px solid #666;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
  border-left: none;
}
.vux-button-group > a.vux-button-tab-item-last:after {
  border: 1px solid #666;
  border-left: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.vux-button-tab-item {
  height: 50px;
  line-height: 48px;
}
.staff-pic {
  display: block;
  width: 70px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  border-radius: 50%;
}
.identity {
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
.email-box {
  color: #666;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
}
.staff-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}

.notice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  height: 40px;
  line-height: 40px;
}
.arrow-right{
 height: 20px;
    line-height: 20px;
}
.add-workload{
  margin-top: 20px;
}
</style>