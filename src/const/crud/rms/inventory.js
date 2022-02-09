export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
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
      "type": "select",
      "label": "规格名称",
      "prop": "rawMaterialDetailsId",
      search: true,
      slot: true,
      formslot: true,
      editDisabled: false,
      dicUrl: "/rms/rawmaterialdetails/list",

      props: {
        label: "rawMaterialDetailName",
        value: "id"
      },
      rules: [{
        required: true,
        message: '请选择规格',
        trigger: 'blur'
      }]
    }, {
      "type": "input",
      "label": "可用库存",
      "prop": "inventory"
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
    }, {
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
