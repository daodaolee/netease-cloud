<template>
  <a-config-provider :csp="{ nonce: 'YourNonceCode' }" :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>
<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {
      zhCN
    }
  }

})
</script>
<style lang="scss">
@import "./assets/css/common.scss";
</style>
