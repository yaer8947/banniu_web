/**
 * 主要业务逻辑相关
 */
var setCookies={
    init: function() {
        var obj= parent.document.getElementById("nim_iframe");
        var account= obj.getAttribute("data");
        var pwd= "xjhylxbbyx"
        setCookie('uid',account.toLocaleLowerCase());
        setCookie('sdktoken',pwd);
    }
}
setCookies.init();
var userUID = readCookie("uid")
/**
 * 实例化
 * @see module/base/js
 */
var yunXin = new YX(userUID)


