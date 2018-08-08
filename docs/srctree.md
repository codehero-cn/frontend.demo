###    
|-- css     
|   |-- base.css                      
|   |-- vendor/normalize.css   初始化的 CSS，为开发者在构建项目前提供标准化的开发环境。  


## 下面是参考html5-boilerplate,eleven还没有核实。
### project tree
|--.github  
|--.travis  
|   |--github_deploy_key.enc   travis认证key
|-- bak  
    |--html5-boilerplate-6.1.0.zip  commit 269f72796fab92bb703520fdc0dca1cbcb7ecc92
|-- dist  最终使用的html模板
|-- src   项目源码
|-- test
    |--file_content.js    检查文件内容是否正确
    |--file_existence.js  检查dist下文件是否齐全
|--.editorconfig    统一代码风格工具    
|--.eslintrc.js     js语法检查(eslint)
|--.gitattributes   指定非文本文件的对比合并方式
|--.gitgnore        不想提交到git上的文件
|--.jscsrc       js语法检查(将废弃)
|--.travis.yml   持续集成服务travis脚本  
|--CHANGELOG.md  项目修改日志
|--gulpfile.babel.js  编译打包脚本  
|--LICENSE.txt      项目协议
|--modernizr-config.json    modernizr配置文件
|--package.json  
|--package-lock.json   锁定包版本号
|--readme.md  
                                      
|-- doc   保存 HTML5 Boilerplate 的所有开发文档。可以使用它作为开发者个人项目的基础文档。                                                   
|-- img                                                      
|-- js   项目中的所有 js 文件。库、插件和自定义代码都可以放在这里，此外还包括了一些用于初始化的 js，以帮助开发者构建项目。             
|   |-- main.js                                              
|   |-- plugins.js                                            
|   |-- vendor     //dist中才有                                          
|      |-- jquery.min.js                                     
|      |-- modernizr.min.js                                   
|--.editorconfig  该文件的作用在于，帮助和激励开发者及其团队，在编辑器和 IDE 之的范。
|--.gitattributes   
|--.gitgnore        
|-- 404.html     自定义的404页面,有益于开发者快速开始构建项目。  
|-- browserconfig.xml    该文件包含 IE11 动态瓷贴的设置信息。     
|-- favicon.ico  参考：https://blog.csdn.net/xyrrwcom/article/details/2221932  
|-- humans.txt    该文件记录网站、应用程序的开发团队及开发技术等信息。
|-- icon.png  
|-- index.html  该页面包含默认的 HTML 结构，建议开发者使用它作为页面的基础结构。如果开发者正在使用一个服务器端的模版引擎，那么可能需要在项目构建之初，将该页面结构整合入模版引擎。
如果开发者修改了目录结构，请确保同时更新了 CSS 和 JavaScript 的引用地址。
如果开发者使用了谷歌分析脚本（Google Analytics），请确保网页底部相关脚本的 Analytics ID 书写正确。
|-- robots.txt  该文件记录对搜索引擎屏蔽的页面。
|-- site.webmanifest
|-- tile-wide.png    
|-- tile.png       

//以下原来有                                            
|--.htaccess    该文件默认为 Apache 的网络服务器配置信息。如果网站托管的服务器不是 Apache，那么可以在 Server Configs项目中找到相关服务器的配置信息。
|-- apple-touch-icon.png                                       
|-- crossdomain.xml    一个用作跨域请求的模板。                                       
|-- icons/    可以根据需要替换默认的 favicon.ico，tile.png，tile-wide.png 和 Apple Touch Icon。更多信息，可以参考  Hans 的这篇文章——HTML5 Boilerplate Favicon and Apple Touch Icon PSD-Template。
https://drublic.de/blog/html5-boilerplate-favicons-psd-template/          
                                
### ref  
https://www.w3cplus.com/html5/html5-boilerplate.html  
