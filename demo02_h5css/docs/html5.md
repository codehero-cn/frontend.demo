## HTML5展望

Flash非常消耗内存，html5其中一个目标就是取消flash.
增加语义：比如有<header></header>  <footer></footer> 标签。
更强的应用程序功能：比如离线数据库，动画。
从应用开发角度增加了许多API。


### Html5废弃标签。
能使用css替代的元素：basefont,big ,center,font,s,strike,tt,u
不再使用frameset框架
原部分浏览器支持的元素：applet ,bgsound,blink,marquee
其他：rbm acronym,dir,isindex,listing,xmp,nextid,plaintext
### Html5新增标签
区块元素：header,nav,article,aside,section,footer,figure
多媒体元素：video,audio
画图板：cavas

### 如何判断网页是html5  
HTML5中增加了许多新特性，例如嵌入音频、视频和图片的函数、客户端存储数据、交互式文档等，通过制定如何处理所有 HTML 元素以及如何从错误中恢复的精确规则，HTML5进一步增强了互动性，并有效减少了开发成本。 判断网页是否是HTML5，一方面可以从以上的特性中判断， 另一方面也可查询网页的源代码。
####	html5特有的标签  
aside video  <video>,<audio>,<canvas>
abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video 
比如：查看淘宝的首页的html代码中：<header> <article> <aside> <footer>等标签

####	搜索以下新事件属性 
onabort, onbeforeunload, oncontextmenu, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, onerror, onmessage, onmousewheel, onresize, onscroll, onunload 
