## 说明
> 该项目保留以前项目的主要代码，修复了一些一直bug,优化代码结构，项目结构
> 该项目下的server为本地开发服务器,主要作用是转发后端接口数据,绕过本地开发跨域的问题.(项目上线的时候不需要启动)
另外前端设置了全局变量MDB_CONFIG，用来判断开发环境,以及设置不同环境中的变量.
> 该项目主要应用在点餐设备的pad上，报表的相关H5页面为react实现,因此没有用React全套技术栈.主要使用组件内部的state管理状态.
> __src__ 为react同构项目，涉及到了React全套技术栈(react redux[action reducer store] react-redux reatc-router Immutable.js服务器首屏渲染) 考虑到实际项目的用途以及场景,暂不使用同构.

## 其他
1. 加入ant.desin.将基础组件 如button table 表单元素，替换
2. 优化代码结构，优化代码写法
## 项目解决的几个问题 :100:
1. --react 前后端同构--
2. ant.desin 主题文件配置
3. 模块的按需加载
4. 模块拆包
5. 响应式布局

## 项目介绍 :art:
1. 该项目前端主要使用了React + Redux + Immutable.js
2. 使用antd.desin作为主要UI组件
3. 前端构建工具使用webpack
4. 使用node.js搭建中层,转发后端数据接口,中间层采用Koa开发框架。本次开发去掉了nodejs中间,本地开发中在webpack中配置poxy代理，解决跨域问题

## 安装项目

1. `git clone git@git.hualala.com:lishangxi/mendianbao-service.git`
2. `cd ~/mdb-report`

## 启动项目 :rocket:
> 最重要的!!!:本项目运行环境  :bug:

1. node.js `^7.7.4`
2. npm `^4.2.1`
3. webpack `^1.14.0`
4. Koa `^2.2.0`

```
npm install  //安装依赖包
```
### 开发环境中 :fire:
1. 启动webpackserver静态资源服务器。启动端口:3031
```
npm run debug:client
```
2. 启动中间层nodejs服务器。启动端口:3032
```
npm run debug:server
```


- 也可以使用 `npm run debug` 合并以上命令启动。
- 在浏览器中打开 localhost:3032 查看本项目
#### 部署
```
#!/bin/sh
ls \platform || git clone http://git.hualala.com/hualala-fp-platform/platform.git
cd platform
git checkout dev
git pull
npm install
npm run build
nohup pm2 start npm -- run start &
```
### 其他说明 :tada:
```
                    src ----
                            |
                            |—————— client  // 主要存放前端资源文件
                            |
                            |—————— common  //前端跟服务器端公用的组件  ----------------------------------
                            |                                                                       |-----containers                                                                                                         |
                            |                                                                       |
                            |                                                                       |-----components
                            |                                                                       |
                            |                                                                       |-----reducers
                            |                                                                       |
                            |                                                                       |-----store
                            |                                                                       |
                            |                                                                       |-----routers
                            |                                                                       |
                            |                                                                       |-----helpers
                            |
                            |—————— server  //node.js中间层服务器文件
                            |
        package.json -------|-- npm安装包依赖文件
                            |
webpack.config.dev.js ------|-- 开发环境webpack配置文件
                            |
webpack.config.prod.js -----|-- 生产环境webpack配置文件
                            |
webpack.config.dll.js ------|-- 生成公用模块动态链文件
                            |
manifest.development.json --|-- 动态生成的公用模块映射文件(开发环境的,由npm run debug:dll命令生成)
                            |
manifest.production.json ---|-- 动态生成的公用模块映射文件(生产环境环境的)
                            |
.babelrc -------------------|-- babel配置文件
                            |
                            |
.editorconfig---------------|-- IDE编辑器配置文件,统一代码格式
                            |
theme.config.js ------------|-- ant.design主题文件配置文件
                            |


```
