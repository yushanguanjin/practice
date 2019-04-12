<template>
  <div>
   
    <div style="margin-top: 10px">
      <el-table
        v-loading="loading"
        :data="posData"
        size="mini"
        stripe
        border
        @selection-change="handleSelectionChange"
        style="width: 80%">
        <el-table-column
          type="selection"
          width="55"
          align="left">
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
          width="80"
          align="left">
        </el-table-column>
        <el-table-column
          prop="name"
          label="账户名称"
          width="80"
          align="left">
        </el-table-column>
        <el-table-column
          prop="titleLevel"
          label="职称级别"
          width="180"
          align="left" v-if="state=='jobtitle'">
        </el-table-column>
         <el-table-column
          prop="accountManager"
          label="账户负责人"
          width="80"
          align="left">
        </el-table-column>
         <el-table-column
          prop="paymentType"
          label="支付类型"
          width="80"
          align="left">
        </el-table-column>
          <el-table-column
          prop="accountType"
          label="账户类型"
          width="180"
          align="left">
        </el-table-column>
           <el-table-column
          prop="balance"
          label="余额"
          width="180"
          align="left">
        </el-table-column>
        
        <el-table-column
          width="180"
          label="创建时间"
          align="left">
          <template slot-scope="scope">{{ scope.row.createDate | formatDate}}</template>
        </el-table-column>
        <el-table-column label="操作" align="left">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="text-align: left;margin-top: 10px">
      <el-button type="danger" size="mini" v-if="posData.length>0" :disabled="multipleSelection.length==0"
                 @click="deleteMany">批量删除
      </el-button>
    </div>
    <div style="text-align: left">
      <!-- 编辑对话框   开始 -->
      <el-dialog
        :title="'修改账户'"
        :visible.sync="dialogVisible"
        >
        <div class="edit-item clearfix">
           <label class="edit-item-key fl">账户名称:</label>
           <el-input v-model="updateName" size="mini" placeholder="请输入账户名称" class="edit-item-value fl" style="margin-left:40px;width:200px;"></el-input>
        </div>
        <div class="edit-item clearfix">
           <label class="edit-item-key fl">账户负责人:</label>
         
           <el-select v-model="updateAccountManager" placeholder="请选择" size="small" style="margin-left:25px;width:200px;">
              <el-option
                v-for="accountManagerItem in accountManagerList"
                :key="accountManagerItem.value"
                :label="accountManagerItem.label"
                :value="accountManagerItem.value"
                >
              </el-option>
          </el-select>
        </div>
         
         <div class="edit-item clearfix">
           <label class="edit-item-key fl" style="margin-right:40px;">账户类型:</label>
           <el-checkbox-group v-model="updateAccountType" class="edit-item-value" >
              <el-checkbox label="默认账户"></el-checkbox>
              <el-checkbox label="收款"></el-checkbox>
              <el-checkbox label="工资"></el-checkbox>
                 <el-checkbox label="报销"></el-checkbox>
              <el-checkbox label="补贴"></el-checkbox>
              <el-checkbox label="出纳"></el-checkbox>
               <el-checkbox label="记账"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="edit-item clearfix">
           <label class="edit-item-key fl" style="margin-right:40px;">支付类型:</label>
           <el-select v-model="updatePaymentType" placeholder="请选择" size="small">
              <el-option
                v-for="paymentTypeItem in paymentTypeList"
                :key="paymentTypeItem.value"
                :label="paymentTypeItem.label"
                :value="paymentTypeItem.value" >
              </el-option>
          </el-select>
        </div>
         <div class="edit-item clearfix">
           <label class="edit-item-key fl" style="margin-right:40px;">账户余额:</label>
           <el-input v-model="updateBalance" size="mini" placeholder="请输入余额" type="number" class="edit-item-value" style="width:200px;"></el-input>
        </div>
        <el-select v-model="updateTitleLevel" v-if="state=='jobtitle'" style="margin-top: 10px" size="mini"
                   placeholder="职称等级">
          <el-option
            v-for="tl in titleLevels"
            :key="tl"
            :label="tl"
            :value="tl">
          </el-option>
        </el-select>
        <span slot="footer" class="dialog-footer">
    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" size="mini" @click="updatePosNameExec">确 定</el-button>
  </span>
      </el-dialog>
      <!-- 编辑对话框   结束-->
    </div>
  </div>
</template>
<script>
  export default{
    mounted: function () {
      this.loadTableData();
    },
    methods: {
      updatePosNameExec(){
        if (!this.isNotNullORBlank(this.updateName)) {
          this.$message.warning(this.state == 'position' ? '职位名称不能为空!' : '职称名称不能为空!');
          return;
        }
        this.loading = true;
        var _this = this;
        this.putRequest(this.state=='position'?"/system/basic/position":"/system/basic/joblevel", {name: this.updateName, id: this.updatePosId,titleLevel:this.updateTitleLevel}).then(resp=> {
          _this.loading = false;
          if (resp && resp.status == 200) {
            this.dialogVisible = false;
            var data = resp.data;
            _
            _this.loadTableData();
          }
        })
      },
      deleteMany(){
        var _this = this;
        this.$confirm('删除' + this.multipleSelection.length + '条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var multipleSelection = _this.multipleSelection;
          var ids = '';
          multipleSelection.forEach(row=> {
            ids = ids + row.id + ',';
          })
          _this.doDelete(ids);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      addPosition(){
        if (!this.isNotNullORBlank(this.positionName)) {
          this.$message.warning(this.state == 'position' ? '职位名称不能为空!' : '职称名称不能为空!');
          return;
        }
        if (this.state == 'jobtitle') {
          if (!this.isNotNullORBlank(this.titleLevel)) {
            this.$message.warning('请选择职称级别!');
            return;
          }
        }
        var _this = this;
        this.loading = true;
        this.postRequest(this.state == 'position' ? "/system/basic/position" : "/system/basic/joblevel", {
          name: this.positionName,
          titleLevel: this.titleLevel
        }).then(resp=> {
          _this.loading = false;
          if (resp && resp.status == 200) {
            var data = resp.data;
            _
            _this.loadTableData();
            _this.positionName = '';
            _this.titleLevel = '';
          }
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row){
        console.log(row);
        this.updateName = row.name;
        this.updatePosId = row.id;
        this.updateTitleLevel=row.titleLevel;

        //编辑账户负责人
        this.updateAccountManager = row.accountManager;
        //编辑支付类型
        this.updatePaymentType = row.paymentType;
        //编辑账户类型
        this.updateAccountType = row.accountType;
        //编辑余额
        this.updateBalance = row.balance;
        this.dialogVisible = true;
      },
      handleDelete(index, row){
        console.log(row);
        var _this = this;
        this.$confirm('删除[' + row.name + '], 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.doDelete(row.id);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      doDelete(ids){
        var _this = this;
        _this.loading = true;
        var url = this.state == 'position' ? '/system/basic/position/' : '/system/basic/joblevel/';
        this.deleteRequest(url + ids).then(resp=> {
          _this.loading = false;
          if (resp && resp.status == 200) {
            _this.loadTableData();
          }
        })
      },
      //加载表格数据
      loadTableData(){
        var _this = this;
        this.loading = true;
        this.getRequest(this.state == 'position' ? "/system/basic/positions" : "/system/basic/joblevels").then(resp=> {
          _this.loading = false;
          if (resp && resp.status == 200) {
            _this.posData = resp.data;
          }
        })
      }
    },
    data(){
      return {
        positionName: '',
        updateName: '',
        updateTitleLevel: '',
        //更新账户负责人
        updateAccountManager:"",
        //更新支付类型
        updatePaymentType:"",
        //更新账户类型
        updateAccountType:"",
        //更新余额
        updateBalance:"",
        titleLevel: '',
        // 账户负责人
        accountManager:'',
        //支付类型
        paymentType:"",
        //账户类型
        accountType:"",
        //余额
        balance:"",
        updatePosId: -1,
        loading: false,
        dialogVisible: false,
        multipleSelection: [],
        type: [],
        titleLevels: ['正高级', '副高级', '中级', '初级', '员级'],
        nameLabelName: this.state == 'position' ? '职位名称' : '职称名称',
        posData: [],
        //账户负责人
        accountManagerList:[{
           value: '选项1',
          label: 'paypal'
        }, {
          value: '选项2',
          label: '支付宝'
        }, {
          value: '选项3',
          label: 'wechat'
        }, {
           value: '选项4',
          label: '银行'
        }],
        //编辑支付类型下拉框
        paymentTypeList: [{
          value: '选项1',
          label: 'paypal'
        }, {
          value: '选项2',
          label: '支付宝'
        }, {
          value: '选项3',
          label: 'wechat'
        }, {
          value: '选项4',
          label: '银行'
        }],
        value: ''
      }
    },
    props: ['state']
  }
</script>
<style scoped>
.edit-item-key{
  display: block;
}
.edit-item{
  margin-top: 15px;
}
.edit-item-value{
  /* margin-top: 20px; */
}

</style>

