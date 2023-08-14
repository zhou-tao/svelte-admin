import { notEmpty } from '../utils.js'

export default {
  description: '生成store基础模板',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '请输入module名称',
    validate: notEmpty('name')
  }],
  actions({ name }) {
    const actions = [{
      type: 'add',
      path: `src/store/${name}.ts`,
      templateFile: 'plop/store/module.hbs',
      data: {
        name
      }
    }
    ]

    return actions
  }
}
