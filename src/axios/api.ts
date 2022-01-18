import axios from "./config"
import { ALogin } from '../types'

// 登录
export async function login(data: ALogin): Promise<ALogin> {
  const { phone, password } = data
  // return await axios.get(`/login/cellphone?phone=${phone}&md5_password=${password}&time=${Date.now()}`)
  return await axios.post(`/login/cellphone?timestamp=${Date.now()}`, {
    phone,
    md5_password: password
  })
}
// 退出
export async function logout(): Promise<any> {
  return await axios.get(`/logout`)
}

// // 获取用户信息
// export async function getUserInfo(): Promise<any> {
//   return await axios.post(`/user/detail？`)
// }

// 云盘上传

export async function uploadCloud(data: File): Promise<any> {
  return await axios.post(`/cloud?time=${Date.now()}`, data, { headers: { 'X-Real-IP': '76.76.21.142' } })
}