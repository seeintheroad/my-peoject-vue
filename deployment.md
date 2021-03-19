1. 前端所有的请求带上 /api :用于nginx的判断转发
2. 前端去掉proxy的代理
3. 前端打包 打包前修改相关一些配置
	   config下的index.js的  build:assetsPublicPath:'./' 默认是'/'
4. 前端运行 run dev build 生成dist文件夹 修改dist里面的index.html的link和script的路径改为./
5. 后端的 servlet:context-path: /api 
6. 后端的security放过请求时写的请求不需要/api 例如拦截/api/login 只需要写/login即可,写/api/login拦截不到
7.启动nginx后直接访问nginx即为该项目首页