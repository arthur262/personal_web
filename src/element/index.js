//在src文件下创建elemen文件夹，内建index.js
import { Button  } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
  }
}
export default element

