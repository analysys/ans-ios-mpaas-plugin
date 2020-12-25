(function () {
    var date = new Date();
    var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate()) + Math.random(1000);
    var d = document,
        e = d.createElement('script'),
        n = d.getElementsByTagName('script')[0];
    e.type = 'text/javascript';
    e.async = true;
    e.id = 'ARK_SDK';
    e.src = 'https://uc.analysys.cn/huaxiang/checkPoint/sdk/AnalysysAgent_CheckVisualPoint.min.js' + '?v=' + time; //JS SDK存放地址
    n.parentNode.insertBefore(e, n);
    e.onload = function () {
        window.AnalysysModule.checkPoint.init({
            appkey: 'f1cc0ae3e0d07822', //APPKEY
            uploadURL: 'https://ark-push1.eqxiu.com',//上传数据的地址
            visitorConfigURL: 'https://ark-push1.eqxiu.com/', // 可视化和热图
            autoWebstay: true
        })
    }
})()