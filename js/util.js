//设为首页
function SetHomePage(obj,url){
    var aUrls = document.URL.split("/");
    var vDomainNmae = "http://"+aUrls[2]+"/";
    try{//IE
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(vDomainNmae);
    }catch(e){//other
        if(window.netscape){//Firefox
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vDomainName);
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
    if (window.netscape) alert("设置首页成功！");
    return false; //阻止a标签继续执行
}

//收藏本站
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

