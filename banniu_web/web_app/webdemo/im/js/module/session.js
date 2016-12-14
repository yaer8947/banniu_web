/*
* 会话模块 
*/

'use strict'

YX.fn.session = function () {
   
}
/**
 * 最近联系人显示
 * @return {void}
 */
YX.fn.buildSessions = function(id) {
    var data = {
        sessions:this.cache.getSessions()
    }
    if(!this.sessions){
        var options = {
            data:data,
            onclickavatar:this.showInfo.bind(this),
            onclickitem:this.openChatBox.bind(this),
            // onrclickitem:this.deleteSession.bind(this),
            infoprovider:this.infoProvider.bind(this),
        } 
        this.sessions = new NIMUIKit.SessionList(options)
        this.sessions.inject($('#sessions').get(0))
    }else{
        this.sessions.update(data)
    }
    //导航上加未读示例  
    this.showUnread()         		
    this.doPoint()
    //已读回执处理
    this.markMsgRead(id)

    //会话面板右键菜单
    $.contextMenu({
        selector: '.j-session .panel_item',
        callback: function(key, options) {
            switch (key) {
                case 'moveToTop':
                {
                    var ul= options.$trigger.parent().get(0)
                    var li= options.$trigger.get(0)
                    ul.insertBefore(li, ul.firstElementChild)
                }
                    break;
                case 'deleteOne':
                {
                    var account = options.$trigger.data('account')
                    var scene = options.$trigger.data('scene')
                    this.deleteSession(scene, account)
                    var li= options.$trigger.get(0)
                    li.remove()
                    if(account==this.crtSessionAccount)
                        this.pointCkicked();
                }
                    break;
                case 'deleteAll':
                {
                    var sessions=[]
                    var $li=options.$trigger.parent().find("li")
                    $li.each(function () {
                        var session={}
                        session.scene = $(this).data('scene')
                        session.to = $(this).data('account')
                        var json = JSON.stringify(session)
                        sessions.push(session)
                        $(this).remove()
                    })
                    for(var i=0; i< sessions.length; i++){
                        this.deleteSession(sessions[i].scene, sessions[i].to)
                    }
                    this.pointCkicked();
                }
                    break;
                default:
                    break;
            }
        }.bind(this),
        items: {
            "moveToTop": {name: "置顶"},
            "deleteOne": {name: "删除会话"},
            "deleteAll": {name: "清空会话列表"},
        }
    })
}
 // 导航上加未读数
YX.fn.showUnread = function () {
    var counts = $("#sessions .panel_count")
    this.totalUnread = 0
    if(counts.length!==0){
        if(this.totalUnread !=="99+"){
            for (var i = counts.length - 1; i >= 0; i--) {
                if($(counts[i]).text()==="99+"){
                    this.totalUnread = "99+"
                    break
                }
                this.totalUnread +=parseInt($(counts[i]).text(),10)
            }
        }
    }
    var $node = $(".m-unread .u-unread")
    $node.text(this.totalUnread)
    this.totalUnread?$node.removeClass("hide"):$node.addClass("hide")
}