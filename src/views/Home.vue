<template>
  <div class="home w100 h100">
    <div class="main">
      <div class="avatar">
        <img :src="avatarUrl" class="w100 h100" />
        <h2 class="name">{{ nickname }}</h2>
        <p>{{ signature }}</p>
      </div>

      <a-upload-dragger
        class="dragger"
        v-model:fileList="fileList"
        name="songFile"
        :action="uploadUrl"
        @change="handleChange"
        :showUploadList="false"
      >
        <p>
          <CloudUploadOutlined :style="{ fontSize: '25px', color: '#6a6a6a' }" />
        </p>
        <!-- <p class="ant-upload-text">点击或拖拽上传</p> -->
        <p class="ant-upload-hint">点击或拖拽上传</p>
      </a-upload-dragger>
    </div>
  </div>
</template>
<script lang="ts">
import { CloudUploadOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
// import { useStore } from 'vuex'
import useCurrentInstance from '@/hook/useCurrentInstance'
import router from '@/router'
import { host } from "../tools"

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
export default defineComponent({
  components: {
    CloudUploadOutlined
  },
  setup() {
    // const store = useStore()
    const { globalProperties } = useCurrentInstance()
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
    if (JSON.stringify(userInfo) === '{}' || !userInfo) {
      router.push('/login')
    }

    const { avatarUrl, nickname, signature } = userInfo.profile

    const uploadUrl = ref(`${host}/cloud?timestamp=${Date.now()}&cookie=${userInfo.cookie}`)
    const handleChange = async (info: FileInfo) => {
      setTimeout(() => {
        uploadUrl.value = `${host}/cloud?timestamp=${Date.now()}&cookie=${userInfo.cookie}`
      })

      const { status, response } = info.file
      let errMsg = ""
      if (typeof response === 'string') {
        errMsg = response
      } else if (typeof response === 'object') {
        // eslint-disable-next-line dot-notation
        errMsg = response['msg']
      }

      if (status === 'uploading') {
        globalProperties.$message.loading({ content: '上传中...', key: 'upload' })
      }
      if (status === 'done') {
        globalProperties.$message.success({ content: '上传成功！', key: 'upload', duration: 1.3 })
      } else if (status === 'error') {
        globalProperties.$message.error({ content: errMsg || '上传失败', key: 'upload', duration: 2 })
      }
    }
    return {
      avatarUrl,
      nickname,
      signature,
      handleChange,
      fileList: ref([]),
      uploadUrl
    }
  }
})
</script>
<style lang="scss">
.home {
  .main {
    width: 400px;
    height: 400px;
    // margin: 50px auto 0;
    // border: 1px solid #dddcdc;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 15px 30px;
    .avatar {
      text-align: center;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      h2 {
        padding-top: 10px;
      }
      p {
        width: 360px;
        display: -webkit-box;
        box-orient: vertical;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .dragger {
      width: 100%;
    }
  }
}
</style>