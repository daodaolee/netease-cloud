<template>
  <div class="login w100 h100">
    <div class="container">
      <a-alert message="密码会md5加密，不过还是要注意你的隐私！" type="warning" style="margin-bottom:20px" />
      <a-form
        class="loginForm"
        layout="horizontal"
        :model="loginForm"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
      >
        <a-form-item label="手机号" name="phone" v-bind="validateInfos.phone">
          <a-input v-model:value="loginForm.phone" />
        </a-form-item>

        <a-form-item label="密码" name="password" v-bind="validateInfos.password">
          <a-input-password v-model:value="loginForm.password" />
        </a-form-item>
      </a-form>
      <div class="w100 footer">
        <a-button class="w100" :loading="submitLoading" @click="handleOk" type="primary">登录</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import useCurrentInstance from '@/hook/useCurrentInstance'
import { login } from '@/axios'
import { Md5 } from "ts-md5/dist/md5"
// import { setCookie } from '@/tools'
export default defineComponent({
  setup() {
    const router = useRouter()
    // const store = useStore()
    const { globalProperties } = useCurrentInstance()

    const loginRef = ref()
    // form表单
    const loginForm = reactive({
      phone: "",
      password: ""
    })
    // 表单校验
    const rulesRef = reactive({
      phone: [
        {
          required: true,
          message: '请输入手机号'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码'
        }
      ]
    })
    // 提交loading
    const submitLoading = ref(false)

    // 弹窗是否可见
    const visible = ref(true)

    const { validate, validateInfos } = globalProperties.$useForm(loginForm, rulesRef)
    // 提交表单
    const handleOk = async () => {
      await validate()
      submitLoading.value = true
      
      const { phone, password } = toRaw(loginForm)
      const md5Str = Md5.hashStr(password)
      const result: any = await login({ phone, password: md5Str })

      if (result?.code === 200) {
        globalProperties.$message.success("登录成功！")
        // setCookie("MUSIC_U", result.token)
        // store.commit("user/setUserInfo", result)
        localStorage.setItem("userInfo", JSON.stringify(result))
        router.push('/home')
      } else {
        globalProperties.$message.error("用户名或密码错误")
      }
      submitLoading.value = false
    }

    return {
      visible,
      submitLoading,
      loginRef,
      validateInfos,
      handleOk,
      loginForm
    }
  }
})
</script>
<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}
.container {
  // width:400px;
  // height: 400px;
  .loginForm {
    .ant-form-item-label {
      // flex: auto !important;
      flex-basis: 100px;
    }
  }
}
</style>