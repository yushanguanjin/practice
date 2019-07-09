<template>
  <div data-title="个人中心">
    <tabbar style="position:fixed">
      <tabbar-item @on-item-click="showHallPopup">
        <img slot="icon" src="../../images/footerTab/hall.png" />
        <span slot="label">发起</span>
      </tabbar-item>
      <tabbar-item @on-item-click="showProposePopup">
        <img slot="icon" src="../../images/footerTab/propose.png" />
        <span slot="label">发起</span>
      </tabbar-item>
      <tabbar-item @on-item-click="showMyPopup">
        <img slot="icon" src="../../images/footerTab/my.png" />
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <!-- 大厅菜单 -->
    <popup v-model="show1">
      <!-- group already has a top border, so we need to hide header's bottom border-->
      <popup-header
        :right-text="'关闭'"
        :title="'大厅'"
        :show-bottom-border="false"
        @on-click-right="show1 = false"
      ></popup-header>
      <div class="hall-item-wrap clearfix">
        <router-link class="hall-item fl" tag='div' to="/projectTask/projectTask">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/project-task.png" alt />

            <p class="hall-item-content-text">项目任务</p>
          </div>
        </router-link>
        <router-link class="hall-item fl" tag='div' to="/assetsLists/assetsLists">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">资产列表</p>
          </div>
        </router-link>
            <router-view/>
        </div>
    </popup>
    <!-- 发起 -->
    <popup v-model="show2">
      <!-- group already has a top border, so we need to hide header's bottom border-->
      <popup-header
        :right-text="'关闭'"
        :title="'发起'"
        :show-bottom-border="false"
        @on-click-right="show2 = false"
      ></popup-header>
      <div class="hall-item-wrap clearfix">
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/project-task.png" alt />

            <p class="hall-item-content-text">请假申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">加班申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">外勤申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">记工作量</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">报销申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">采购申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">资产申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">添加任务</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">添加项目机会</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">添加项目记录</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">其他申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">添加来访人员</p>
          </div>
        </div>
      </div>
    </popup>
    <!-- 我的 -->
    <popup v-model="show3">
      <!-- group already has a top border, so we need to hide header's bottom border-->
      <popup-header
        :right-text="'关闭'"
        :title="'我的'"
        :show-bottom-border="false"
        @on-click-right="show3 = false"
      ></popup-header>
      <div class="hall-item-wrap clearfix">
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/project-task.png" alt />

            <p class="hall-item-content-text">个人中心</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">考勤</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">假期</p>
          </div>
        </div>
       
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">工作量</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">报销</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">采购</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">任务明细</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">餐补</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">工资单</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">通用申请</p>
          </div>
        </div>
        <div class="hall-item fl">
          <div class="hall-item-content">
            <img class="hall-item-content-img" src="../../images/footerTab/assets-lists.png" alt />

            <p class="hall-item-content-text">资产记录</p>
          </div>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, PopupHeader, Popup } from "vux";
import { constants } from "crypto";
export default {
  name: "footerTab",
  components: {
    Tabbar,
    TabbarItem,
    PopupHeader,
    Popup
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false
    };
  },
  methods: {
    showHallPopup() {
      this.show1 = true;
    },
    showProposePopup() {
      this.show2 = true;
    },
    showMyPopup() {
      this.show3 = true;
    }
  }
};
</script>

<style>
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #999999;
}

.hall-item-wrap {
 
}
.hall-item {
  width: 33.33333333%;
  border: 1px solid #ddd;
  padding-top: 20px;
  padding-bottom: 20px;
}
.hall-item-content {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.hall-item-content-img {
  display: block;
  width: 35px;
  margin-left: auto;
  margin-right: auto;
}
.hall-item-content-text {
  text-align: center;
  margin-top: 10px;
}
</style>

