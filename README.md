![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220119050208.png)
# netease-cloud
netease-cloud主要用于Mac端网易云音乐的云盘上传

## 说明
该项目不会记录用户的手机号和密码，本仓库代码和包仅作体验，有关安全性的问题概不负责。如果要保证安全性，建议自行部署后端接口。

接口来自[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)，部署到了Vercel，项目架构 Vue3脚手架 + [Vue CLI Plugin Electron Builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/)。

项目运行的Node版本是v12+，如果打包报错 `cannot find module fs/promises`，请看[这里](http://liqingsong.cc/article/detail/22)

## 安装
```
npm install
```

### 运行
```
npm run serve
```

### 浏览器打包
```
npm run build
```
### Electron运行
```
npm run electron:serve
```

### Electron打包
```
npm run electron:build
```
## 预览
<img src="https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220119050335.png" style="width: 400px">
<img src="https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220119050305.png" style="width: 400px">
