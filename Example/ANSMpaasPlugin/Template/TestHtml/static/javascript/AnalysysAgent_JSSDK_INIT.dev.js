(function () {
    var d = document,
        e = d.createElement('script'),
        n = d.getElementsByTagName('script')[0];
    e.type = 'text/javascript';
    e.async = true;
    e.src = './AnalysysAgent_PageViewStayTime.min.js'; //页面访问时长模块 SDK存放地址
    n.parentNode.insertBefore(e, n);
})();


(function (c) {
    window.AnalysysAgent = window.AnalysysAgent || {}
    var a = window.AnalysysAgent || {}
    var ans = ['identify', 'alias', 'reset', 'track', 'profileSet', 'profileSetOnce', 'profileIncrement', 'profileAppend', 'profileUnset', 'profileDelete', 'registerSuperProperty', 'registerSuperProperties', 'unRegisterSuperProperty', 'clearSuperProperties', 'getSuperProperty', 'getSuperProperties', 'pageView', 'getDistinctId']
    a['config'] = c
    a['param'] = []
    function factory (b) {
        return function () {
            a['param'].push([b, arguments])
            return window.AnalysysAgent
        }
    }
    for (var i = 0; i < ans.length; i++) {
        a[ans[i]] = factory(ans[i])
    }
    if (c.name) {
        window[c.name] = a
    }
    var date = new Date();
    var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate());

    var d = document,
        e = d.createElement('script'),
        n = d.getElementsByTagName('script')[0];
    e.type = 'text/javascript';
    e.async = true;
    e.id = 'ARK_SDK';
    e.src = 'https://iuap-design-cdn.oss-cn-beijing.aliyuncs.com/static/analytics/yiguan/latest/AnalysysAgent_JS_SDK.min.js' + '?v=' + time; //JS SDK存放地址
    n.parentNode.insertBefore(e, n);
})({
    appkey: 'ad9b910f0710952f',
    uploadURL: 'https://art.diwork.com',
    debugMode: 2,
    visitorConfigURL: 'https://art.diwork.com'
})