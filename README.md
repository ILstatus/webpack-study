### 命令

npm run build

npm run dev

### 本文件组成

1. 打包CSS文件（包含提取CSS单独成文件）

2. 打包样式文件的图片资源

3. 打包html文件的图片资源


#### 使用的loader

```shell
  npm i css-loader url-loader html-loader -D
```



### 使用的插件

```shell
  npm i clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin webpack-dev-server babel-loader @babel/core @babel/preset-env webpack
 -D
```

* clean-webpack-plugin：自动清空dist目录插件

* html-webpack-plugin：打包html资源插件

* mini-css-extract-plugin：提取css单独成文件插件

* webpack-dev-server：自动编译（不会打包文件）

* babel-loader @babel/core @babel/preset-env webpack：将ES6语法降低为ES5
