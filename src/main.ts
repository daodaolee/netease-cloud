import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import { Button, message, Modal, Form, Input, Alert, ConfigProvider, Upload } from 'ant-design-vue'

const app = createApp(App)
const useForm = Form.useForm

app.config.globalProperties.$message = message
app.config.globalProperties.$useForm = useForm

app.use(Button).use(Modal).use(Form).use(Input).use(Alert).use(ConfigProvider).use(store).use(router).use(Upload).mount('#app')

// app.config.globalProperties.$modal = modal
