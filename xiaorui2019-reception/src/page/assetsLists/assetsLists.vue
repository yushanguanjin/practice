
<template>
  <div class="wrap">
    <div class="search-wrap">
      <div class="main">
        <span>搜索</span>
        <x-icon type="ios-arrow-right" size="30" class="arrow-right"></x-icon>
      </div>
    </div>

    <div class="task-item">
      <div class="main">
        <div class="task-item-row task-item-row-space-between task-item-mingchen">
          <div class="task-item-id">Macbook pro</div>
          <div class="task-item-name">长期资产</div>
        </div>
        <div style="padding-top: 10px;padding-bottom: 10px;">
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-price">
              价格：
              <span>8000元</span>
            </div>
            <div class="task-item-purchase-date">
             购买日期：
              <span>2019-06-21</span>
            </div>
          </div>
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-stock">
              库存：
              <span>1</span>
            </div>
            <div class="task-item-borrowing-status:">
                借用状态：
              <span>可借用</span>
            </div>
          </div>
        </div>

        <div class="task-item-row more-task">查看更多</div>
      </div>
    </div>

    <div class="task-item">
      <div class="main">
        <div class="task-item-row task-item-row-space-between task-item-mingchen">
          <div class="task-item-id">Macbook pro</div>
          <div class="task-item-name">长期资产</div>
        </div>
        <div style="padding-top: 10px;padding-bottom: 10px;">
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-price">
              价格：
              <span>8000元</span>
            </div>
            <div class="task-item-purchase-date">
             购买日期：
              <span>2019-06-21</span>
            </div>
          </div>
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-stock">
              库存：
              <span>1</span>
            </div>
            <div class="task-item-borrowing-status:">
                借用状态：
              <span>可借用</span>
            </div>
          </div>
        </div>

        <div class="task-item-row more-task">查看更多</div>
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

import footerTab from "../../components/footer/footerTab";

export default {
  name: "assetsLists",
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
  mounted: function() {
    document.title = "资产列表";
  },
  methods: {}
};
</script>

<style  scoped>
.wrap {
  background: rgb(251, 249, 254);
}
.search-wrap .main {
  background: #fff;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 45px;
  align-items: center;
}
.task-item {
  margin-top: 20px;
  background: #fff;
}
.task-item-row {
  display: flex;
}
.task-item-id {
}


.task-item-row-space-between {
  justify-content: space-between;
  font-size: 12px;
  color: #6e757f;
}

.more-task {
  border-top: 1px solid #ddd;
  color: #5d7097;
}
.task-item-borrowing-status{
 width: 120px;
}
.task-item-mingchen {
 border-bottom: 1px solid #ddd;
    font-size: 16px;
    color: #000;
}   
</style>