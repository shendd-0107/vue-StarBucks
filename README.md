# vue-StarBucks
#### 星巴克项目的各种接口封装
> 2019-06-17 （此项目纯属个人瞎搞）
### 技术栈
vue + vuex + vue-router + webpack + ES6+ sass + flex + flexble + icon + axios + element-ui
### 项目运行
由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本

    step1:git clone https://github.com/sdd1999/vue-StarBucks

    step2:cd vue-StarBucks
    
    step3:cd clinet
    
    step4:npm install 
    
    step5:npm run dev
### 关于接口数据
  此项目的所有接口数据都来源于配套的后台系统

```
clinet
|——build
|——config
|——node_modules
|——src                       // 主入口文件夹
|  |——api
|  | ——index.js                // 所有的接口文档
|  | ——assets
|  |  | ——logo.png              // 静态文件
|  | ——components
|  |  | ——alert
|  |  |  | ——index.js            // 提示弹出框
|  |  | ——Dialog.vue            // 添加时的蒙层
|  |  | ——header.vue            // 头部
|  |  | ——list.vue              // 首页的每一条列表
|  |  | ——main-header.vue       // 加班和调休的组件
|  |  | ——nav.vue               // nav组件
|  |  | ——wait.vue              // 列表的容器组件
|  | ——plugins                 
|  |  | ——base-ui.js            // 所有的插件
|  | ——router
|  |  | ——index.js              // 所有的路由表配置
|  | ——static                  // 静态资源文价夹
|  |  | ——img              
|  |  |  | ——status.jpg
|  |  | ——icon                  // 所有的icon图标
|  |  |  | 
|  |  | ——scss                  // 需要用到的scss文件
|  |  |  | ——_minix.scss
|  |  |  | ——common.scss
|  |  |  | ——flexble.js          // 响应式布局
|  | ——store        
|  |  | ——index.js              // vuex数据仓库
|  |—— utils                   // 公用方法封装
|  |  | ——files.js                 // 上传附件时的判断
|  |  |—— request.js               // 二次封装axios
|  | ——views                      // 视图文件夹
|  |  | ——commit
|  |  |  | ——index.vue           // 提交加班/休假
|  |  | ——examine
|  |  |  | ——ndex.vue            // 审批历史
|  |  | ——detail
|  |  |  | ——index.vue           // 详情页
|  |  | ——login
|  |  |  | ——ndex.vue            // 登陆界面
|  |  | ——search
|  |  |  | ——earch.vue           // 搜索界面
|  |  | ——filter.vue            // 筛选页面
|  |  | ——home.vue              // 主页页面
|  |  | ——sort.vue              // 排序页面
|  | ——App.vue                 // 主入口页面
|  | ——main.js                 // 主入口文件
| ——static                    // 静态文件
| ——babelrc                   // 配置项
.
.
.
| ——之间为脚手架中的内容

| ——package.lock.json 
| ——package.json              // 依赖的文件 npm install 下载的文件
| ——README.md
```
