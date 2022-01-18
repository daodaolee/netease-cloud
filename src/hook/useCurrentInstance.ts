// 获取全局属性
import { getCurrentInstance, ComponentInternalInstance } from "vue"

export default function useCurrentInstance(): any {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  const globalProperties = appContext.config.globalProperties
  return {
    globalProperties
  }
}