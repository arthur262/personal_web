import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// 挂载引入的文件

const app = createApp();
app.config.productionTip = false;

createApp(App).use(router).use(Antd).mount('#app');
