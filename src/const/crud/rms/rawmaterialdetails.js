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
      type: 'select',
      label: '材料名称',
      prop: 'rawMaterialId',
      formslot: true,
      slot: true,
      span: 24,
      search: true,
      dicUrl: "/rms/rawmaterial/list",
      props: {
        label: "rawMaterialName",
        value: "id"
      },
      rules: [{
        required: false,
        message: '请选择材料',
        trigger: 'blur'
      }]
    }

    , {
      "type": "input",
      "label": "规格名称",
      "prop": "rawMaterialDetailName"

    }, {
      "type": "input",
      "label": "库存",
      "prop": "amount",
      "addDisplay": true,
      "editDisabled": true
    }, {
      "type": "input",
      "label": "单价(元)",
      "prop": "price"
    }, {
      "type": "input",
      "label": "长度(mm)",
      "prop": "length"
    }, {
      "type": "input",
      "label": "宽(mm)",
      "prop": "width"
    }, {
      "type": "input",
      "label": "高(mm)",
      "prop": "height"
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
