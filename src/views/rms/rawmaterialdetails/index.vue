<!--
  -    Copyright (c) 2018-2025, lengleng All rights reserved.
  -
  - Redistribution and use in source and binary forms, with or without
  - modification, are permitted provided that the following conditions are met:
  -
  - Redistributions of source code must retain the above copyright notice,
  - this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
  - notice, this list of conditions and the following disclaimer in the
  - documentation and/or other materials provided with the distribution.
  - Neither the name of the pig4cloud.com developer nor the names of its
  - contributors may be used to endorse or promote products derived from
  - this software without specific prior written permission.
  - Author: lengleng (wangiegie@gmail.com)
  -->
<template>
  <div class="execution">
    <basic-container>
      <avue-crud ref="crud"
                 :page.sync="page"
                 :data="tableData"
                 :permission="permissionList"
                 :table-loading="tableLoading"
                 :option="tableOption"
                 :before-open="handleOpenBefore"
                 @on-load="getList"
                 @search-change="searchChange"
                 @refresh-change="refreshChange"
                 @size-change="sizeChange"
                 @current-change="currentChange"
                 @row-update="handleUpdate"
                 @row-save="handleSave"
                 @row-del="rowDel">

        <template slot="rawMaterialId" slot-scope="scope">
            <span v-for="(item) in rawMaterialList" v-if="item.id == scope.row.rawMaterialId">
                 <el-tag>{{ item.rawMaterialName }} </el-tag>&nbsp;&nbsp;
          </span>
        </template>
        <template slot="rawMaterialDetailName" slot-scope="scope">
          <span>{{ scope.row.rawMaterialDetailName }}</span>
        </template>
        <template slot="amount" slot-scope="scope">
          <span>{{ scope.row.amount }}</span>
        </template>
        <template slot="price" slot-scope="scope">
          <span>{{ scope.row.price }}</span>
        </template>
        <template slot="length" slot-scope="scope">
          <span>{{ scope.row.length }}</span>
        </template>
        <template slot="width" slot-scope="scope">
          <span>{{ scope.row.width }}</span>
        </template>
        <template slot="height" slot-scope="scope">
          <span>{{ scope.row.height }}</span>
        </template>
        <template slot="createTime" slot-scope="scope">
          <span>{{ scope.row.createTime }}</span>
        </template>
        <template slot="createBy" slot-scope="scope">
          <span>{{ scope.row.createBy }}</span>
        </template>
        <template slot="updateTime" slot-scope="scope">
          <span>{{ scope.row.updateTime }}</span>
        </template>
        <template slot="updateBy" slot-scope="scope">
          <span>{{ scope.row.updateBy }}</span>
        </template>

        <template slot="rawMaterialIdForm" slot-scope="scope">
          <avue-select
            v-model="scope.row.rawMaterialId"
            placeholder="请选择原料"
            :dic="rawMaterialList"
            :props="rawMaterialProps"
          ></avue-select>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import {fetchList, getObj, addObj, putObj, delObj} from '@/api/rms/rawmaterialdetails';
import {tableOption} from '@/const/crud/rms/rawmaterialdetails';
import {mapGetters} from 'vuex';
import {getRawList} from "../../../api/rms/rawmaterial";
import AvueIframe from "../../../components/iframe/main";

export default {
  name: 'rawmaterialdetails',
  components: {AvueIframe},
  data() {
    return {
      searchForm: {},
      tableData: [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20,// 每页显示多少条,
        rawMaterialId: this.$route.query.id
      },
      tableLoading: false,
      tableOption: tableOption,
      rawMaterialList: [],
      rawMaterialProps: {
        label: "rawMaterialName",
        value: "id"
      }

    }
  },
  computed: {
    ...mapGetters(['permissions']),
    permissionList() {
      return {
        addBtn: this.vaildData(this.permissions.rms_rawmaterialdetails_add, false),
        delBtn: this.vaildData(this.permissions.rms_rawmaterialdetails_del, false),
        editBtn: this.vaildData(this.permissions.rms_rawmaterialdetails_edit, false)
      };
    }
  },
  methods: {

    getList(page, params) {
      this.tableLoading = true
      this.getRawMaterialList();
      fetchList(Object.assign({
        current: page.currentPage,
        size: page.pageSize,
        rawMaterialId: page.rawMaterialId
      }, params, this.searchForm)).then(response => {
        this.tableData = response.data.data.records
        this.page.total = response.data.data.total
        this.tableLoading = false
      }).catch(() => {
        this.tableLoading = false
      })
    },
    rowDel: function (row, index) {
      this.$confirm('是否确认删除：' + row.rawMaterialDetailName, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        return delObj(row.id)
      }).then(data => {
        this.$message.success('删除成功')
        this.getList(this.page)
      })
    },
    getRawMaterialList() {
      // 查询原料列表
      getRawList().then(response => {
        this.rawMaterialList = response.data.data;
      });
    },
    handleOpenBefore(show, type) {
      window.boxType = type;
      // 查询原料列表
      getRawList().then(response => {
        this.rawMaterialList = response.data.data;
      });
      show();
    },
    handleUpdate: function (row, index, done, loading) {
      putObj(row).then(data => {
        this.$message.success('修改成功')
        done()
        this.getList(this.page)
      }).catch(() => {
        loading();
      });
    },
    handleSave: function (row, done, loading) {
      addObj(row).then(data => {
        this.$message.success('添加成功')
        done()
        this.getList(this.page)
      }).catch(() => {
        loading();
      });
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize
    },
    currentChange(current) {
      this.page.currentPage = current
    },
    searchChange(form, done) {
      this.searchForm = form
      this.page.currentPage = 1
      this.getList(this.page, form)
      done()
    },
    refreshChange() {
      this.getList(this.page)
    }
  }
}
</script>
