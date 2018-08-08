## 引入css文件
### 写在head区域里面，
<style type="text/css">
</style>
### 独立的.css文件
然后在head区域引用：
<link rel=”stylesheet” href=”path/x.css” “type=text/css”/>

### Css文件引入的路径概念
如果说href="xx.css"  ,浏览器就在网页的同一级目录下来找xx.css
.. (两个点) 代表上一级目录    ../../上跳两级
. (一个点)  代表当前目录

