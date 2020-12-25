(function (config) {
    window.AnalysysAgent = window.AnalysysAgent || []
    window.AnalysysAgent.methods = 'identify alias reset track profileSet profileSetOnce profileIncrement profileAppend profileUnset profileDelete registerSuperProperty registerSuperProperties unRegisterSuperProperty clearSuperProperties getSuperProperty getSuperProperties pageView debugMode auto appkey name uploadURL hash visitorConfigURL autoProfile autoWebstay encryptType pageProperty duplicatePost NPSConfigURL'.split(' ');

    function factory (b) {
        return function () {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(b);
            window.AnalysysAgent.push(a);
            return window.AnalysysAgent;
        }
    }
    for (var i = 0; i < AnalysysAgent.methods.length; i++) {
        var key = window.AnalysysAgent.methods[i];
        AnalysysAgent[key] = factory(key);
    }
    for (var key in config) {
        AnalysysAgent[key](config[key])
    }
    var date = new Date();
    var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate());

    var d = document,
        c = d.createElement('script'),
        n = d.getElementsByTagName('script')[0];
    c.type = 'text/javascript';
    c.async = true;
    c.id = 'ARK_SDK';
    c.src = './sdk/AnalysysAgent_JS_SDK.min.js' + '?v=' + time; //JS SDK存放地址
    n.parentNode.insertBefore(c, n);
})({
    appkey: "9f3a770bbd8301b2", //APPKEY
    debugMode: 2,
    uploadURL: 'http://192.168.220.105:8089',
    visitorConfigURL: 'http://192.168.220.105:8089'
})

