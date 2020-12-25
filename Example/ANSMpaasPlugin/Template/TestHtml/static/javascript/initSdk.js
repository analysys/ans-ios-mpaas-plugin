
function checkURL (URL) {
  var str = URL
  // 判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
  // 下面的代码中应用了转义字符"\"输出一个字符"/"
  var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
  var objExp = new RegExp(Expression)
  if (objExp.test(str) === true) {
    return true
  } else {
    return false
  }
}

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
var appkey = getQueryString('appkey')
if (!appkey) {
  appkey = 'heatmaptest0916' // "af0a9bbfdbebafce"
}
var uploadURL = getQueryString('uploadURL')
if (!uploadURL || !checkURL(uploadURL)) {
  // uploadURL = 'https://arksdktest.analysys.cn:4089'// 'https://arkpaastest.analysys.cn:4089'
  uploadURL = 'http://192.168.220.105:8089'
}
// window.AnalysysAgentHybrid = {
//   isHybrid: function () {
//     return true
//   }
// };
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
  var time = new String(date.getFullYear()) + new String(date.getMonth() + 1) + new String(date.getDate()) + Math.random() * 1000;
  var d = document,
    e = d.createElement('script'),
    n = d.getElementsByTagName('script')[0];
  e.type = 'text/javascript';
  e.async = true;
  e.id = 'ARK_SDK';
  e.src = './sdk/AnalysysAgent_JS_SDK.min.js' + '?v=' + time; //JS SDK存放地址
  n.parentNode.insertBefore(e, n);
  // AnalysysAgent.registerSuperProperty("projectName", "web3.0-用户端")
})({
  appkey: 'heatmaptest0916', // APPKEY
  debugMode: 2,
  uploadURL: 'http://192.168.220.105:8089/',
  // uploadURL: 'https://yongyoutest.analysys.cn:4089',//'https://art.diwork.com',//
  // uploadURL: 'https://art.diwork.com',
  // hash: true,
  // auto: true,
  // encryptType: 1,
  visitorConfigURL: 'http://192.168.220.105:8089',
  autoWebstay: true,
  autoHeatmap: false,
    
  // webstayDuration: 20000,
  autoTrack: true,
  // cross_subdomain: true,
  // // isHybrid: true,
  // trackList: [function (ele) {
  //   if ('.' + ele.className === '.panel-footer') {
  //     return true
  //   }
  //   return false
  // }, '#aaaa'],
  // // webstayRootEle: function () { return document.getElementById('aaa') },
  // exposure: {
  //   valid_time: 300,//停留有效时间
  //   property: {
  //     cc: function () {
  //       return +new Date()
  //     }
  //   },//自定义参数
  //   exposure_click: false, // 是否自动采集曝光元素点击事件
  //   multiple: 5000,//true或毫秒值, 是否重复采集曝光点数据或多少毫秒后可再次采集
  //   element_list: function () {
  //     var list = [].slice.call(document.getElementsByTagName('a'), 0)
  //     var spanList = [].slice.call(document.getElementsByTagName('span'), 0)
  //     list.push.apply(list, spanList)
  //     return list
  //   }
  // }
})
