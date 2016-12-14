/**
 * 主要业务逻辑相关
 */
// var userUID = readCookie("uid")
// /**
//  * 实例化
//  * @see module/base/js
//  */
// var yunXin = new YX(userUID)

var account = "4675"
var pwd = "xjhylxbbyx"
setCookie('uid',account.toLocaleLowerCase());
//自己的appkey就不用加密了
setCookie('sdktoken',pwd);
//setCookie('sdktoken',MD5(pwd));
// window.location.href = './main.html';
/**
 * 主要业务逻辑相关
 */
userUID = readCookie("uid")
/**
 * 实例化
 * @see module/base/js
 */
yunXin = new YX(userUID)

