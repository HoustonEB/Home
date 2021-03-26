---
authorName: Yu
title: npm发包
date: 2019-08-21 14:00:36
categories: npm
tags: npm发包
---
## 初始化仓库
---

`npm init`初始化仓库,填入仓库信息.

## 规范化commit
---

### 安装commitizen

`npm install commitizen -g`
在你的项目里执行一下命令,进行初始化
`commitizen init cz-conventional-changelog --save-dev --save-exact`
`commitizen`包的作用提供`git cz`命令代替`git commit -m `

![add-commit](./npm发包/add-commit.png)
### git-cz
`git-cz`commit添加emoji,自定义commit类型的描述等.
`npm install --save-dev git-cz`
修改commitizen的适配器.`commitizen init git-cz --force --save-dev --save-exact`
```json
// 替换后package.json里的path会被替换
"config": {
    "commitizen": {
      // "path": "./node_modules/cz-conventional-changelog"
      "path": "./node_modules/git-cz"
    }
}
```
`git-cz`报错未解决,暂时没有使用
## changelog
---

### 安装conventional-changelog-cli
全局安装`conventional-changelog-cli`,用于生成每次改动日志.
`npm install -g conventional-changelog-cli`
进入你的项目并生成CHANGELOG.md文件
`cd my-project`

- `conventional-changelog -p angular -i CHANGELOG.md -s`(在CHANGELOG.md中生成最新一条的commit记录)
- `conventional-changelog -p angular -i CHANGELOG.md -s -r 0`(生成以往全部的commit记录到CHANGELOG.md文件中,**会复写已存在的CHANGELOG.md文件**)
 
## npm version
---

`npm version prepatch`的作用: 1.修改预备修订版的版本号 2.生成tag
`npm run changelog`会根据tag生成多条记录
0.0.1-1 => 主版本号.次版本号.修订号-预发布号

 | npm version | 功能 |
 | -- | -- | 
 | major | 主版本号 <br/>- 如果没有预发布号: <br/>1.直接升级一位大号，其他位都置为0<br/>- 如果有预发布号: <br/>1.中号和小号都为0,则不升级大号,而将预发布号删掉.即2.0.0-1变成2.0.0,这就是预发布的作用<br/>2.如果中号和小号有任意一个不是0,那边会升级一位大号,其他位都置为0，清空预发布号.即 2.0.1-0变成3.0.0 |
 | premajor | 预备主版本 <br/>- 直接升级大号，中号和小号置为0，增加预发布号为0 |
 | minor | 次版本号 <br/>- 如果没有预发布号: <br/>1.升级一位中号，大号不动，小号置为空<br/>- 如果有预发布号: <br/>1. 如果小号为0，则不升级中号，将预发布号去掉<br/>2. 如果小号不为0，同理没有预发布号 |
 | preminor | 预备次版本 <br/>- 直接升级此版本号,增加预发布号为0 |
 | patch | 修订号 <br/>- 如果没有预发布号: 升级修订号,去掉预发布号<br/>- 如果有预发布号: 去掉预发布号,其它不动 |
 | prepatch | 预备修订版 <br/>- 直接升级修订号, 增加预发布号为0 |
 | prerelease | 预发布版本 <br/>- 如果没有预发布号: 升级修订号,预发布号为0<br/>- 如果有预发布号: 升级预发布号 |
 | 1.0.1 | 也可使用`npm version 1.0.1`去修改版本号 |
 

 ```json
 {
  "name": "sftp-connection",
  "version": "1.0.1",
  "description": "sftp",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/HoustonEB/SFTP.git"
  },
  "keywords": [
    "sftp",
    "ssh2"
  ],
  "author": "yuzhuang",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/HoustonEB/SFTP/issues"
  },
  "homepage": "https://github.com/HoustonEB/SFTP#readme",
  "devDependencies": {
    "cz-conventional-changelog": "^3.3.0"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}

 ```
 ## 登录npm
 ---

项目内执行`npm adduser`添加用户后,就不需要再次登录npm.
`npm login`

## npm publish
发布到npm仓库
npm仓库源地址**http://registry.npmjs.org**

## 推荐的工作流
---

 - 修改代码
 - commit changes(git cz)
 - 确保持续集成成功(单元测试)
 - 提升package.json中包的版本,利用`npm version`更改版本.
 - 生成changelog记录(`npm run changelog`)
 - 提交package.json和changelog.md的改动
 - push github

## expose the library
---
webpack中指定包暴露的变量,这样就能支持通过`script`标签使用包.webpack会将变量注入到window中.
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: "webpackNumbers",
  },
};
```
然而它只能通过被`script`标签引用而发挥作用,它不能运行在`CommonJS、AMD、Node.js`等环境中.
```html
<script src="https://example.org/webpack-numbers.js"></script>
<script>
  window.webpackNumbers.wordToNum('Five');
</script>
```
在webpack中添加`type: 'umd'`,即可运行在`CommonJS、AMD、Node.js`等环境中.
```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
  library: 'webpackNumbers',
  library: {
    name: 'webpackNumbers',
    type: 'umd'
  },
  },
};
```

## peerDependencies
---
为了避免项目和包中依赖项的重复下载,需要使用`peerDependencies`.
未使用`peerDependencies`.
```text
.
├── helloWorld
│   └── node_modules
│       ├── packageA
│       ├── plugin1
│       │   └── nodule_modules
│       │       └── packageA
│       └── plugin2
│       │   └── nodule_modules
│       │       └── packageA
```
添加`peerDependencies`后,项目和包的依赖图是扁平的.重复的包只会下载一次.
```js
{
  "peerDependencies": {
    "packageA": "1.0.1"
  }
}
```
此时在主系统中执行`npm install`生成的依赖图就是这样的:
```text
.
├── helloWorld
│   └── node_modules
│       ├── packageA
│       ├── plugin1
│       └── plugin2
```
例如: 包中依赖react和react-dom的指定版本.
```js
{
  "peerDependencies": {
    "react": ">=16.12.0",
    "react-dom": ">=16.12.0"
  }
}
```

{% note info %}
因此我们总结下在插件使用 dependencies 声明依赖库的特点：
1.如果用户显式依赖了核心库，则可以忽略各插件的 peerDependency 声明；
2.如果用户没有显式依赖核心库，则按照插件 peerDependencies 中声明的版本将库安装到项目根目录中；
3.当用户依赖的版本、各插件依赖的版本之间不相互兼容，会报错让用户自行修复；
{% endnote %}


## 相关链接
 ---
 [commitizen](https://github.com/commitizen/cz-cli)
 [git-cz](https://github.com/streamich/git-cz)
 [commit类型和emoji对映表](https://gist.github.com/parmentf/035de27d6ed1dce0b36a)
 [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#readme)
 [添加包的标签](https://shields.io/category/downloads)
 [一文搞懂peerDependencies](https://juejin.cn/post/6844904134248759309)
 [webpack 创建一个library](https://webpack.docschina.org/guides/author-libraries/#externalize-lodash)

