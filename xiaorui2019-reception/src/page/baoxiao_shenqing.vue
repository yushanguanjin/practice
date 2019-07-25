<template>
    <div>
        <group class="group">
            <cell title="项目名称" placeholder="项目名称" is-link></cell>
            <cell title="项目类型" value="" placeholder="项目类型" is-link></cell>
            <x-input title="报销金额" type="number" placeholder="报销金额" placeholder-align="right" text-align="right" :show-clear="false"></x-input>
           <datetime format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" title="产生费用时间"></datetime>
            <x-textarea title="备注" placeholder-align="right" placeholder="请输入备注内容" :rows="6"></x-textarea>
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
import { Group, Cell, CellBox ,XTextarea,Box,Flexbox, FlexboxItem,XButton,XNumber, XInput ,Datetime} from 'vux'
import footerTab from "../components/footer/footerTab";
export default {
  //这里需要将模块引出，可在其他地方使用
   name: "baoxiao_shenqing",
  data() {
    //注意：data即使不需要传数据，也必须return,否则会报错
    
    return {
    };
  },
  mounted: function() {
    document.title = "报销申请";
  },
  components: {
    XInput,
    Group,
    Cell,
    CellBox,
    XButton,
    Flexbox,
    FlexboxItem,
    Box,
    XNumber,
    Datetime,
    XTextarea,
    footerTab
  }
};
</script>
