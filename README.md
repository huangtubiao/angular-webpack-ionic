# TMC for app

## Dependences

- node^4.0.0
- npm^2.10.1
- ionic^1.6.4

## Getting Started

1. run `npm install`
2. run `gulp`
3. run `ionic serve [-lab]`

## Package and Test

1. ionic platform add ios
2. ionic build ios
3. ionic emulate ios

## Extra

- [ionic doc](http://ionicframework.com/docs/).
- [ionic icons](http://ionicons.com/)

与项目相关的文档都放在 `docs` 文件夹里，请浏览一遍。

## 代码分版

包含 master 和 develop 分支，所有的更新必须基于 devleop checkout 出新的分支，
然后使用 Merge Request 的方式，Merge 回 develop，最后，在准备发布版本时，才可以将 develop 的代码 merge 进 master。


切记：** master 只能接受来自 develop 的代码 **，即 master 永远作为稳定版本的分支。
