import { join } from 'node:path'
import { notEmpty } from '../utils.js'

export default {
  description: '生成页面基础模版',
  prompts: [{
    type: 'input',
    name: 'name',
    message: '请输入页面名称(eg. user)',
    validate: notEmpty('name')
  },
  {
    type: 'input',
    name: 'dir',
    message: '请输入所在目录(eg. admin)',
    validate: notEmpty('dir'),
    default: 'admin'
  }],
  actions({ name, dir }) {
    const path = join(process.cwd(), 'src/views', dir, name, 'index.svelte')
    const actions = [{
      type: 'add',
      path,
      templateFile: 'plop/page/page.hbs',
      data: {
        name
      }
    }]
    return actions
  }
}
