export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 2,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  "column": [
    // {
    //   "type": "input",
    //   "label": "主键",
    //   "prop": "id",
    //   "addDisplay": false,
    //   "editDisabled": true
    // },
    {
      "c": "input",
      "label": "材料名称",
      search: true,
      "prop": "rawMaterialName"
    }, {
      "type": "input",
      //原料总数 该原料分类下所有原料总数
      "label": "总库存",
      "prop": "rawMaterialAmount",
      "addDisplay": false,
      "editDisabled": true
    },
    // {
    //   "type": "input",
    //   "label": "版本号，用于支持乐观锁",
    //   "prop": "version"
    // }, {
    //   "type": "input",
    //   "label": "是否有效 0：有效 1：无效",
    //   "prop": "delFlag"
    // },
    {
      "type": "datetime",
      "label": "修改时间",
      "prop": "updateTime",
      "addDisplay": false,
      "editDisabled": true
    }, {
      "type": "input",
      "label": "创建人",
      "prop": "createBy",
      "addDisplay": false,
      "editDisabled": true
    }, {
      "type": "datetime",
      "label": "修改时间",
      "prop": "createTime",
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
