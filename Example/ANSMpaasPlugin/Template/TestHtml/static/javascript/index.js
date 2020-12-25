/**
 * [pageView description] 页面事件
 * @param  {String} pageName  [description] 页面标识,支持类型：String；最大长度255字符
 * @param  {JSON} pageInfo    [description] 页面信息,支持类型：Object；页面信息最多包含100条；Object类型内key以字母或$开头,包括大小写字母、数字、下划线和$，最大长度125字符，不支持乱码和中文；Object中的value,支持类型：String；则最大长度255字符
 */

function pageView (pageName, pageInfo) {
  var callback = function () {
    console.log('pageView success')
  }
  window.AnalysysAgent.pageView(pageName, pageInfo, callback)
}
/**
 * [track description] 点击事件
 * @param  {String} eventName [description] 事件名称。支持类型:String。以字母或$开头,可以包含大小写字母/数字/下划线,不支持中文,不支持乱码,最大长度99字符。
 * @param  {JSON} eventInfo [description] 事件属性,支持类型：Object/Array；事件属性最多包含100条；Object类型内key以字母或$开头,包括大小写字母、数字、下划线和$，最大长度125字符，不支持乱码和中文；Object/Array中的value,支持类型：String；则最大长度255字符
 */
function track (eventName, eventInfo) {
  var callback = function () {
    console.log('track success')
  }
  window.AnalysysAgent.track(eventName, eventInfo, callback)
}
/**
 * [registerSuperProperty description] 注册通用属性
 * @param  {String|JSON} superPropertyName   [description] 属性名称 支持类型:String。以字母或$开头,可以包含大小写字母/数字/下划线,不支持中文,不支持乱码,最大长度99字符。
 * @param  {String} superPropertyValue [description] 事件属性,支持类型：String；则最大长度255字符
 */
function registerSuperProperty (superPropertyName, superPropertyValue) {
  var callback = function () {
    console.log('registerSuperProperty success')
  }
  window.AnalysysAgent.registerSuperProperty(superPropertyName, superPropertyValue, callback)
}

/**
 * [registerSuperProperties description] 注册通用属性
 * @param  {JSON} superProperties   [description] 属性集合 支持类型:Object。key以字母或$开头,可以包含大小写字母/数字/下划线,不支持中文,不支持乱码,最大长度99字符，value支持类型：String；则最大长度255字符。
 */
function registerSuperProperties (superProperties) {
  var callbck = function () {
    console.log('registerSuperProperties success')
  }
  window.AnalysysAgent.registerSuperProperties(superProperties, callbck)
}
/**
 * [unregisterSuperProperty description] 删除单个通用属性
 * @param  {String} superPropertyName [description] 属性名称 支持类型:String。以字母或$开头,可以包含大小写字母/数字/下划线,不支持中文,不支持乱码,最大长度99字符。
 */
function unRegisterSuperProperty (superPropertyName) {
  var callback = function () {
    console.log('unRegisterSuperProperty success')
  }
  window.AnalysysAgent.unRegisterSuperProperty(superPropertyName, callback)
}
/**
 * [clearSuperProperties description] 清除所有通用属性
 */
function clearSuperProperties () {
  var callback = function () {
    console.log('clearSuperProperties success')
  }
  window.AnalysysAgent.clearSuperProperties(callback)
}
/**
 * [getSuperProperty description] 获取单个通用属性
 */

function getSuperProperty (superPropertyName) {

  var superrProperty = window.AnalysysAgent.getSuperProperty(superPropertyName, function (value) {
    console.log('getSuperProperty success。通用属性--->', value)
    alert(superPropertyName + ":" + value)
  })
  if (superrProperty) {
    console.log('通用属性--->', superrProperty)
    alert(superrProperty)
  }
}
/**
 * [clearSuperProperties description] 获取所有通用属性
 */
function getSuperProperties () {
  // window.callback = function (superProperty) {
  //   console.log('getSuperProperties success. 通用属性:' + JSON.stringify(superProperty))
  // }
  var superProperty = window.AnalysysAgent.getSuperProperties(function (superProperty) {
    console.log('getSuperProperties success. 通用属性:' + JSON.stringify(superProperty))
    alert(JSON.stringify(superProperty))
  })
  if (superProperty) {
    console.log('通用属性--->', superProperty)
  }
}
/**
 * [identify description] 用户ID设置
 * @param  {String} distinctId [description] 唯一身份标识,支持类型：String；长度大于0且小于255字符
 */
function identify (distinctId) {
  var callback = function () {
    console.log('identify success')
  }
  window.AnalysysAgent.identify(distinctId, callback)
}
/**
 * [alias description]用户关联 新distinctID关联到原有originalID，originalID为原始id.
 * @param  {String} aliasId    [description] 支持类型：String；长度大于0，且小于255字符
 */
function alias (aliasId) {
  var callback = function () {
    console.log('alias success')
  }
  window.AnalysysAgent.alias(aliasId, callback)
}
/**
 * [profileSet description] 设置用户属性
 * @param  {String|JSON} propertyName  [description] 支持类型：String;以字母或`$`开头,可包含大小写字母/数字/`_`/`$`,最大长度125字符,不支持乱码和中文
 * @param  {String} propertyValue [description]支持类型：String/Number/Boolean/Object/Array;若为字符串,则最大长度255字符;若为数组或集合,则最多包含100条,且key约束条件与属性名称一致,value最大长度255字符
 */
function profileSet (propertyName, propertyValue) {
  var callback = function () {
    console.log('profileSet success')
  }
  window.AnalysysAgent.profileSet(propertyName, propertyValue, callback)
}
/**
 * [profileSetOnce description] 在首次设置时有效的属性
 * @param  {String|Object} propertyName  [description] 支持类型：String;以字母或`$`开头,可包含大小写字母/数字/`_`/`$`,最大长度125字符,不支持乱码和中文
 * @param  {String} propertyValue [description] 支持类型：String/Number/Boolean/Object/Array;若为字符串,则最大长度255字符;若为数组或集合,则最多包含100条,且key约束条件与属性名称一致,value最大长度255字符
 */
function profileSetOnce (propertyName, propertyValue) {
  var callback = function () {
    console.log('profileSetOnce success')
  }
  var property = {
    birth: 548798705000,
    sex: 'male'
  }
  window.AnalysysAgent.profileSetOnce(propertyName, propertyValue, callback)
  // window.AnalysysAgent.profileSetOnce(property, callback)
}
/**
 * [profileIncrement description] 设置用户属性相对变化值
 * @param  {String|JSON} propertyName  [description] 属性名称 支持类型：String;以字母或`$`开头,可包含大小写字母/数字/`_`/`$`,最大长度125字符,不支持乱码和中文
 * @param  {Number} propertyValue [description] 属性值 支持类型：String/Number/Boolean/Object/Array;若为字符串,则最大长度255字符;若为数组或集合,则最多包含100条,且key约束条件与属性名称一致,value最大长度255字符
 */
function profileIncrement (propertyName, propertyValue) {
  var callback = function () {
    console.log('profileIncrement success')
  }
  window.AnalysysAgent.profileIncrement(propertyName, propertyValue, callback)
}
/**
 * [profileAppend description]设置单个列表类型的属性
 * @param  {String|JSON} propertyName  [description] 属性名称 支持类型：String;以字母或`$`开头,可包含大小写字母/数字/`_`/`$`,最大长度125字符,不支持乱码和中文
 * @param  {String} propertyValue [description] 属性值 支持类型：String/Number/Boolean;最大长度255字符
 */
function profileAppend (propertyName, propertyValue) {
  var callback = function () {
    console.log('profileAppend success')
  }
  window.AnalysysAgent.profileAppend(propertyName, propertyValue, callback)
}
/**
 * [profileUnset description] 删除设置的属性
 * @param  {String} property [description] 属性名称 支持类型：String;以字母或`$`开头,可包含大小写字母/数字/`_`/`$`,最大长度125字符,不支持乱码和中文
 */
function profileUnset (property) {
  var callback = function () {
    console.log('profileAppend success')
  }
  window.AnalysysAgent.profileUnset(property, callback)
}
/**
 * [profileDelete description] 要清除已经设置的所有属性
 */
function profileDelete () {
  var callback = function () {
    console.log('profileDelete success')
  }
  window.AnalysysAgent.profileDelete(callback)
}
/**
 * [reset description] 清除本地设置
 */
function reset () {
  window.callback = function callback () {
    console.log('reset success')
  }
  window.AnalysysAgent.reset(callback)
}

/**
 * [historyPage description] 修改history记录跳转页面
 * @param  {[type]} page [description] 跳转页面地址
 * @return {[type]}      [description]
 */
function historyPage (page) {
  document.title = 'historyPage' // 跳转后的页面title
  history.pushState(null, null, page)
}
/**
 * [historyPage description] 修改hash值跳转页面
 * @param  {[type]} page [description] 跳转页面地址
 * @return {[type]}      [description]
 */
function hashPage (page) {
  document.title = 'hashPage'
  location.href = page
}

/**
 * [getDistinctId description] 获取当前设备匿名ID
 * @return {[type]} [description] 返回当前匿名ID 类型String
 */
function showDistinctId (distinctId) {
  document.getElementById('distinctId').innerHTML = '临时ID：' + distinctId
  alert('临时ID：' + distinctId)
}

function getPresetProperties () {
  // function callback (properties) {
  //   console.log('getPresetProperties success。properties=>' + JSON.stringify(properties))
  // }
  var presetProperties = window.AnalysysAgent.getPresetProperties(function callback (properties) {
    console.log('getPresetProperties success。properties=>' + JSON.stringify(properties))
    alert(properties)
  })
  console.log(presetProperties)
}

function getDistinctId () {
  // window.callback = function callback (id) {
  //   console.log('id success。 id=>' + id)
  // }

  var distinctId = AnalysysAgent.getDistinctId(function callback (id) {
    console.log('id success。 id=>' + id)
    alert('id success。 id=>' + id)
  })
  if (distinctId) {
    console.log('匿名ID：' + distinctId)
    if (document.getElementById('distinctId')) {
      document.getElementById('distinctId').innerHTML = '匿名ID：' + distinctId
      return distinctId
    }
  }
}

function arrayTrack () {
  var productList = [{
    OrderId: '123456',
    ProductName: 'Iphone 6s plus',
    ProductTotalPrice: '10000'
  },
  {
    OrderId: '123456',
    ProductName: 'Iphone 7s plus',
    ProductTotalPrice: '20000'
  }
  ]
  var ShopName = '天猫旗舰店'
  for (var i = 0; i < productList.length; i++) {
    productList[i].ShopName = ShopName
    AnalysysAgent.track('buy', productList[i])
  }
}

function addErrorLog () {
  var log = {}
  var logData = JSON.parse(util.decode(window.localStorage.getItem('FZ_STROAGE')))
  if (logData.POSTDATA) {
    logData.POSTDATA.push(log)
  } else {
    logData.POSTDATA = [log]
  }
  window.localStorage.setItem('FZ_STROAGE', util.encode(JSON.stringify(logData)))
}

var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

function _utf8_encode (string) {
  string = string.replace(/\r\n/g, '\n')
  var utftext = ''
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n)
    if (c < 128) {
      utftext += String.fromCharCode(c)
    } else if ((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192)
      utftext += String.fromCharCode((c & 63) | 128)
    } else {
      utftext += String.fromCharCode((c >> 12) | 224)
      utftext += String.fromCharCode(((c >> 6) & 63) | 128)
      utftext += String.fromCharCode((c & 63) | 128)
    }
  }
  return utftext
}

function _utf8_decode (utftext) {
  var string = ''
  var i = 0
  var c = 0
  var c1 = 0
  var c2 = 0
  var c3 = 0
  while (i < utftext.length) {
    c = utftext.charCodeAt(i)
    if (c < 128) {
      string += String.fromCharCode(c)
      i++
    } else if ((c > 191) && (c < 224)) {
      c2 = utftext.charCodeAt(i + 1)
      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))
      i += 2
    } else {
      c2 = utftext.charCodeAt(i + 1)
      c3 = utftext.charCodeAt(i + 2)
      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
      i += 3
    }
  }
  return string
}

function profileSetRandomNumber () {
  var number = parseInt(Math.random() * 100 + Math.random())
  AnalysysAgent.profileSet('random_number', number)
}

function Util () { }
Util.prototype.encode = function (input) {
  var output = ''
  var chr1
  var chr2
  var chr3
  var enc1
  var enc2
  var enc3
  var enc4
  var i = 0
  input = _utf8_encode(input)
  while (i < input.length) {
    chr1 = input.charCodeAt(i++)
    chr2 = input.charCodeAt(i++)
    chr3 = input.charCodeAt(i++)
    enc1 = chr1 >> 2
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
    enc4 = chr3 & 63
    if (isNaN(chr2)) {
      enc3 = enc4 = 64
    } else if (isNaN(chr3)) {
      enc4 = 64
    }
    output = output +
      _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
      _keyStr.charAt(enc3) + _keyStr.charAt(enc4)
  }
  return output
}
Util.prototype.decode = function (input) {
  var output = ''
  var chr1
  var chr2
  var chr3
  var enc1
  var enc2
  var enc3
  var enc4
  var i = 0
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')
  while (i < input.length) {
    enc1 = _keyStr.indexOf(input.charAt(i++))
    enc2 = _keyStr.indexOf(input.charAt(i++))
    enc3 = _keyStr.indexOf(input.charAt(i++))
    enc4 = _keyStr.indexOf(input.charAt(i++))
    chr1 = (enc1 << 2) | (enc2 >> 4)
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    chr3 = ((enc3 & 3) << 6) | enc4
    output = output + String.fromCharCode(chr1)
    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2)
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3)
    }
  }
  output = _utf8_decode(output)
  return output
}
Util.prototype.addEvent = function (el, type, fn, useCapture) {
  if (!el) return;
  if (document.addEventListener) {
    if (el.length && el !== window) {
      for (var i = 0; i < el.length; i++) {
        this.addEvent(el[i], type, fn, useCapture)
      }
    } else {
      el.addEventListener(type, fn, useCapture)
    }
  } else {
    if (el.length && el !== window) {
      for (var i = 0; i < el.length; i++) {
        this.addEvent(el[i], type, fn)
      }
    } else {
      el.attachEvent('on' + type, function () {
        return fn.call(el, window.event)
      })
    }
  }
}

var util = new Util()
// console.log(document.getElementById("upLog"))
// window.onload = function () {
//     // document.getElementById("UAMSG").innerHTML = navigator.userAgent
//     util.addEvent(document, 'click', function () {
//         console.log(11111)
//         window.event ? window.event.cancelBubble = true : event.stopPropagation()
//         event.preventDefault()
//         return false
//     })
// }

function emptyValue () {
  var baseStr = 'abcdefjhig'
  var str500 = ''
  var str600 = ''
  for (var i = 0; i < 50; i++) {
    str500 += baseStr
  }
  for (var i = 0; i < 60; i++) {
    str600 += baseStr
  }

  var caseObj = {
    '': 'aaa',
    ' ': 'nnn',
    嗷嗷嗷: 'ddd',
    ')(sdfsf': 'bbbbd',
    abc: '',
    bcd: ' ',
    obj: {},
    arrayObj: [{}],
    arrayNumber: [1, 2, 3],
    arrayblo: [false, true]
  }
  caseObj[str500] = 'str500'
  caseObj[str600] = 'str600'
  caseObj.str500 = str500
  caseObj.str600 = str600
  // console.log(AnalysysAgent)
  // console.log(caseObj)
  for (var ansKey in AnalysysAgent) {
    if (ansKey == 'freeApi' || typeof AnalysysAgent[ansKey] !== 'function') {
      continue
    }
    for (var key in caseObj) {
      var obj = {}
      obj[key] = caseObj[key]
      if (ansKey == 'track' || ansKey == 'pageView') {
        AnalysysAgent[ansKey](str500, obj)
      } else {
        AnalysysAgent[ansKey](obj)
      }
    }
  }
}

function addDom () {
  console.log(12312)
  var div = document.createElement('div')
  div.setAttribute('data-ark-exposure', true)
  div.innerHTML = '<span>1232131</span>'
  document.getElementById('aaa').appendChild(div)
}
