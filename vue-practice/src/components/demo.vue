<template>
  <div>
    <el-container>
      <el-header
        style="padding: 0px;display:flex;justify-content:space-between;align-items: center"
      >
        <div style="display: inline">
          <el-input
            placeholder="账户名称"
            clearable
            style="width: 150px;margin: 0px;padding: 0px;"
            size="mini"
            prefix-icon="el-icon-search"
            v-model="checkedAccountName"
          ></el-input>
          <el-select
            v-model="checked_purpose"
            style="width: 130px"
            size="mini"
            placeholder="请选择账户类型"
          >
            <el-option v-for="(val,key) in purpose_all()" :key="key" :label="val" :value="key"></el-option>
          </el-select>
          <el-select
            v-model="checked_accountType"
            style="width: 130px"
            size="mini"
            placeholder="请选择支付方式"
          >
            <el-option
              v-for="(val,key) in accountType_filter_all()"
              :key="key"
              :label="val"
              :value="key"
            ></el-option>
          </el-select>
          <el-button
            type="primary"
            size="mini"
            style="margin-left: 5px"
            icon="el-icon-search"
            @click="searchEmp"
          >搜索</el-button>
        </div>
        <div style="margin-left: 5px;margin-right: 20px;display: inline">
          <el-button type="success" size="mini" @click="exportEmps">
            <i class="fa fa-lg fa-level-down" style="margin-right: 5px"></i>导出数据
          </el-button>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-plus"
            @click="showAddAccountView"
          >添加账户</el-button>
        </div>
      </el-header>
      <el-main style="padding-left: 0px;padding-top: 0px">
        <div>
          <el-table
            :data="emps"
            v-loading="tableLoading"
            border
            stripe
            @selection-change="handleSelectionChange"
            size="mini"
            style="width: 100%"
          >
            <el-table-column type="selection" align="left"></el-table-column>
            <el-table-column prop="id" align="left" fixed label="ID"></el-table-column>
            <el-table-column prop="accountName" align="left" label="账户名称"></el-table-column>
            <el-table-column prop="principalName" label="账户负责人"></el-table-column>
            <el-table-column prop="accountType" align="left" label="支付类型">
              <template slot-scope="scope">{{ scope.row.accountType | accountType_filter }}</template>
            </el-table-column>
            <el-table-column prop="purpose" align="left" label="账户类型">
              <template slot-scope="scope">{{ scope.row.purpose | purpose_filter }}</template>
            </el-table-column>
            <el-table-column prop="balance" label="余额"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column fixed="right" label="操作" width="195">
              <template slot-scope="scope">
                <el-button
                  @click="showEditAccountView(scope.row)"
                  style="padding: 3px 4px 3px 4px;margin: 2px"
                  size="mini"
                >编辑</el-button>
                <el-button
                  type="danger"
                  style="padding: 3px 4px 3px 4px;margin: 2px"
                  size="mini"
                  @click="deleteVacation(scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="display: flex;justify-content: space-between;margin: 2px">
            <el-button
              type="danger"
              size="mini"
              v-if="emps.length>0"
              :disabled="multipleSelection.length==0"
              @click="deleteManyDatas"
            >批量删除</el-button>
            <el-pagination
              background
              :page-size="10"
              :current-page="currentPage"
              @current-change="currentChange"
              layout="prev, pager, next"
              :total="totalCount"
            ></el-pagination>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-form
      :model="dataRow"
      :rules="rules"
      ref="addAccountForm"
      style="margin: 0px;padding: 0px;"
    >
      <div style="text-align: left">
        <el-dialog
          :title="dialogTitle"
          style="padding: 0px;"
          :close-on-click-modal="false"
          :visible.sync="dialogVisible"
          width="60%"
        >
          <el-row>
            <el-col :span="20">
              <div>
                <el-form-item label="账户名称:" prop="accountName">
                  <el-input type="textarea" v-model="dataRow.accountName"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div>
                <el-form-item label="账户负责人:" >
                  <el-select
                    v-model="dataRow.principalId"
                    style="width: 130px"
                    size="mini"
                    placeholder="请选择状态"
                  >
                    <el-option
                      v-for="item in typelist"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16">
              <div>
                <el-form-item label="账户类型:" prop="principalName">
                  <el-checkbox-group v-model="dataRow.purpose">
                    <el-checkbox v-for="(val,key) in purpose_all()" :key="key" :label="key">{{val}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div>
                <el-form-item label="支付类型:" prop="accountType">
                  <el-select
                    v-model="dataRow.accountType"
                    style="width: 130px"
                    size="mini"
                    placeholder="请选择状态"
                  >
                  <!-- <template slot-scope="scope">{{ scope.dataRow.accountType | accountType_filter_all }}</template> -->
                    <el-option
                      v-for="(val,key) in accountType_filter_all()"
                      :key="key"
                      :label="val"
                      :value="key"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <div>
                <el-form-item label="账户余额:">
                  <el-input type="textarea" v-model="dataRow.balance"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20">
              <div>
                <el-form-item label="备注:">
                  <el-input type="textarea" v-model="dataRow.remark"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-form-item>
            <el-button type="primary" v-if="updatebutton" @click="addAccount('addAccountForm')">修改</el-button>
            <el-button type="primary" v-if="addbutton" @click="addAccount('addAccountForm')">新增</el-button>
            <el-button @click="cancelEidt">取消</el-button>
          </el-form-item>
        </el-dialog>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      emps: [],
      keywords: "",
      fileUploadBtnText: "导入数据",
      beginDateScope: "",
      faangledoubleup: "fa-angle-double-up",
      faangledoubledown: "fa-angle-double-down",
      dialogTitle: "",
      multipleSelection: [],
      depTextColor: "#c0c4cc",
      nations: [],
      politics: [],
      positions: [],
      joblevels: [],
      totalCount: -1,
      currentPage: 1,
      currentSize: 10,
      typelist: "",
      yuangonglist: "",
      job: "",
      dataRow: {
        id: "",
        accountName: "",
        accountType: "",
        remark: "",
        purpose: "",
        balance: "",
        principalName: "",
        principalId: ""
      },
      deps: [],
      defaultProps: {
        label: "name",
        isLeaf: "leaf",
        children: "children"
      },
      //验证
      rules: {
         accountName:[
          {required:true,message:'账户名称不能为空',trigger:'blur'},
        ],
        principalName:[
          {required:true,message:'账户负责人不能为空',trigger:'blur'},
        ],
        accountType:[
          {required:true,message:'支付类型不能为空',trigger:'blur'}
        ]
      },
      dialogVisible: false,
      tableLoading: false,
      advanceSearchViewVisible: false,
      showOrHidePop: false,
      showOrHidePop2: false,
      updatebutton: false,
      addbutton: false,
      value: "",
      checkedAccountName: "",
      checked_purpose: "",
      checked_accountType: ""
    };
  },
  mounted: function() {
    this.loadAccountRecord();
    this.doGetAccountManager();
  },
  methods: {
    fileUploadSuccess(response, file, fileList) {
      if (response) {
        this.$message({ type: response.status, message: response.msg });
      }
      this.loadAccountRecord();
      this.fileUploadBtnText = "导入数据";
    },
    fileUploadError(err, file, fileList) {
      this.$message({ type: "error", message: "导入失败!" });
      this.fileUploadBtnText = "导入数据";
    },
    beforeFileUpload(file) {
      this.fileUploadBtnText = "正在导入";
    },
    exportEmps() {
      window.open("/employee/basic/exportEmp", "_parent");
    },
    cancelSearch() {
      this.advanceSearchViewVisible = false;
      this.beginDateScope = "";
      this.loadAccountRecord();
    },
    cancelEidt() {
      this.dialogVisible = false;
    },
    showAdvanceSearchView() {
      this.advanceSearchViewVisible = !this.advanceSearchViewVisible;
      this.keywords = "";
      if (!this.advanceSearchViewVisible) {
        this.beginDateScope = "";
        this.loadAccountRecord();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    showAddAccountView() {
      this.dialogTitle = "添加账户";
      this.emptyAccountRecord();
      this.addbutton = true;
      this.updatebutton = false;
      this.dialogVisible = true;
    },
    showEditAccountView(row) {
      this.dialogTitle = "修改账户";
      this.dataRow=Object.assign({},row);
      this.dataRow.accountType+=''
      this.dataRow.purpose=this.dataRow.purpose.split(',');
      console.log(row);
      console.log(this.dataRow)
      this.addbutton = false;
      this.updatebutton = true;
      this.dialogVisible = true;
      console.log(row.purpose);
    },
    searchType() {
      this.loadAccountRecord();
    },
    doGetAccountManager() {
      this.getRequest("/brief/sel/ygWithDep").then(resp => {
        if (resp && resp.status == 200) {
          var data = resp.data;
          this.typelist = data;
        }
      });
    },
    addAccount(formName) {
      var _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          var arr = Object.values(this.dataRow.purpose);
          console.log(Object.values(this.dataRow.purpose));
          this.purpose_filter_sort(arr)
          if (this.dataRow.id) {
            //更新
            _this.tableLoading = true;
            //console.log(typeof this.dataRow.id);
            this.putRequest("/cost/account/act", this.dataRow).then(resp => {
              _this.tableLoading = false;
              if (resp && resp.status == 200) {
                var data = resp.data;
                _this.dialogVisible = false;
                _this.loadAccountRecord();
              }
            });
          } else {
            //添加
            //console.log(this.dataRow.principalName);
            //this.dataRow.id = row.principalName;
            this.postRequest("/cost/account/act", this.dataRow).then(resp => {
              _this.tableLoading = false;
              if (resp && resp.status == 200) {
                var data = resp.data;
                _this.dialogVisible = false;
                _this.loadAccountRecord();
              }
            });
            _this.tableLoading = true;
          }
        } else {
          return false;
        }
      });
    },
    keywordsChange(val) {
      if (val == "") {
        this.loadAccountRecord();
      }
    },
    searchEmp() {
      this.loadAccountRecord();
    },
    currentChange(currentChange) {
      this.currentPage = currentChange;
      this.loadAccountRecord();
    },
    deleteManyDatas() {
      this.$confirm(
        "此操作将删除[" + this.multipleSelection.length + "]条数据, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          var ids = "";
          for (var i = 0; i < this.multipleSelection.length; i++) {
            ids += this.multipleSelection[i].id + ",";
          }
          this.doDelete(ids);
        })
        .catch(() => {});
    },
    deleteVacation(row) {
      this.$confirm(
        "此操作将永久删除[" + row.accountName + "], 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      )
        .then(() => {
          this.doDelete(row.id);
        })
        .catch(() => {});
    },
    doDelete(ids) {
      this.tableLoading = true;
      var _this = this;
      this.deleteRequest("/cost/account/act/" + ids).then(resp => {
        _this.tableLoading = false;
        if (resp && resp.status == 200) {
          var data = resp.data;
          _this.loadAccountRecord();
        }
      });
    },
    emptyAccountRecord() {
      
      this.dataRow.id = "";
      this.dataRow.accountName = "";
      this.dataRow.accountType = "";
      this.dataRow.remark = "";
      this.dataRow.purpose = "";
      this.dataRow.balance = "";
      this.dataRow.principalName = "";
      this.dataRow.principalId="";
    },
    loadAccountRecord() {
      var _this = this;
      this.tableLoading = true;

      if (this.k_starttime == null) {
        this.k_starttime = "";
      }
      if (this.k_endtime == null) {
        this.k_endtime = "";
      }
      this.getRequest(
        "/cost/account/acts?page=" +
          this.currentPage +
          "&size=10&accountName=" +
          this.checkedAccountName +
          "&purpose=" +
          this.checked_purpose +
          "&accountType=" +
          this.checked_accountType
      ).then(resp => {
        this.tableLoading = false;
        if (resp && resp.status == 200) {
          var data = resp.data;
          _this.emps = data.list;
          _this.totalCount = data.total;
        }
      });
    }
  }
};
</script>
