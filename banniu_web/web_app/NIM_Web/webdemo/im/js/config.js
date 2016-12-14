(function() {
    // 配置
    var envir = 'online';
   // var envir = 'test';
   // var envir = 'pre';
    var configMap = {
        test: {
            //appkey: 'fe416640c8e8a72734219e1847ad2547',
            appkey: 'c8cb4436e95804f19711f4935f565246',
            url:'https://apptest.netease.im'
        },
        pre:{
    		//appkey: '45c6af3c98409b18a84451215d0bdd6e',
            appkey: 'c8cb4436e95804f19711f4935f565246',
    		url:'http://preapp.netease.im:8184'
        },
        online: {
            //appkey: '45c6af3c98409b18a84451215d0bdd6e',
            appkey: 'c8cb4436e95804f19711f4935f565246',
            url:'https://app.netease.im'
        }
    };
    window.CONFIG = configMap[envir];
}())