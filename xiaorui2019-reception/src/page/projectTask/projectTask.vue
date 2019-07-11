
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
        <div class="task-item-row task-item-mingchen">
          <div class="task-item-id">
            #
            <span>2000</span>
          </div>
          <div class="task-item-name">宝马POC项目界面任务开发</div>
        </div>
        <div style="padding-top: 10px;padding-bottom: 10px;">
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-closing-date">
              截止日期：
              <span>2019-06-21</span>
            </div>
            <div class="task-item-founder">
              创建人：
              <span>aaaa</span>
            </div>
          </div>
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-closing-date">
              任务类型：
              <span>开发任务</span>
            </div>
            <div class="task-item-founder">
              指派给：
              <span>aaaa</span>
            </div>
          </div>
        </div>

        <div class="task-item-row more-task">查看更多</div>
      </div>
    </div>

    <div class="task-item">
      <div class="main">
        <div class="task-item-row task-item-mingchen">
          <div class="task-item-id">
            #
            <span>2000</span>
          </div>
          <div class="task-item-name">宝马POC项目界面任务开发</div>
        </div>
        <div style="padding-top: 10px;padding-bottom: 10px;">
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-closing-date">
              截止日期：
              <span>2019-06-21</span>
            </div>
            <div class="task-item-founder">
              创建人：
              <span>aaaa</span>
            </div>
          </div>
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-closing-date">
              任务类型：
              <span>开发任务</span>
            </div>
            <div class="task-item-founder">
              指派给：
              <span>aaaa</span>
            </div>
          </div>
        </div>

        <div class="task-item-row more-task">查看更多</div>
      </div>
    </div>

    <div class="task-item">
      <div class="main">
        <div class="task-item-row task-item-mingchen">
          <div class="task-item-id">
            #
            <span>2000</span>
          </div>
          <div class="task-item-name">宝马POC项目界面任务开发</div>
        </div>
        <div style="padding-top: 10px;padding-bottom: 10px;">
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-closing-date">
              截止日期：
              <span>2019-06-21</span>
            </div>
            <div class="task-item-founder">
              创建人：
              <span>aaaa</span>
            </div>
          </div>
          <div class="task-item-row task-item-row-space-between">
            <div class="task-item-closing-date">
              任务类型：
              <span>开发任务</span>
            </div>
            <div class="task-item-founder">
              指派给：
              <span>aaaa</span>
            </div>
          </div>
        </div>

        <div class="task-item-row more-task   cursor-ponter">查看更多</div>
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
  name: "projectTask",
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
    document.title = "项目任务";
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
.task-item-name {
  margin-left: 20px;
}
.task-item-mingchen {
  border-bottom: 1px solid #ddd;
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
</style>