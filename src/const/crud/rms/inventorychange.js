export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  "column": [
    // {
    //   "type": "input",
    //   "label": "主键",
    //   "prop": "id",
    //   "addDisplay": false,
    //   "editDisabled": true
    // },
    {
      "type": "input",
      "label": "规格",
      "prop": "inventoryId",
      search: true
    }, {
      "type": "input",
      "label": "变动数量",
      "prop": "changeNum"
    }, {
      "type": "input",
      "label": "变动类型 1：出库 2：入库",
      "prop": "changeType"
    }, {
      "type": "input",
      "label": "项目id",
      "prop": "projectId"
    }, {
      "type": "input",
      "label": "备注信息",
      "prop": "note"
    }, {
      "type": "input",
      "label": "出库、入库人id",
      "prop": "userId"
    }, {
      "type": "input",
      "label": "数据记录人id",
      "prop": "operatorId"
    },
    // {
    //   "type": "input",
    //   "label": "版本号，用于支持乐观锁",
    //   "prop": "version"
    // },    {
    //   "type": "input",
    //   "label": "是否有效 0：有效 1：无效",
    //   "prop": "delFlag"
    // },
    {
      "type": "input",
      "label": "创建时间",
      "prop": "createTime",
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "创建人",
      "prop": "createBy",
      "addDisplay": false,
      "editDisabled": true
    }, {
      "type": "input",
      "label": "修改时间",
      "prop": "updateTime",
      "addDisplay": false,
      "editDisabled": true
    }, {
      "type": "input",
      "label": "更新人",
      "prop": "updateBy",
      "addDisplay": false,
      "editDisabled": true
    }]
}
