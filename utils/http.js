var header = {
  'content-type': 'application/json',
}

/**
 * 供外部post请求调用  
 */
function post(url, data, onSuccess, onFailed) {
  console.log("请求方式：", "POST")
  request(url, data, "POST", onSuccess, onFailed);

}

/**
 * 供外部get请求调用
 */
function get(url, data, onSuccess, onFailed) {
  console.log("请求方式：", "GET")
  request(url, data, "GET", onSuccess, onFailed);
}

/**
 * function: 封装网络请求
 * @url URL地址
 * @data 请求参数
 * @method 请求方式：GET/POST
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */

function request(url, data, method, onSuccess, onFailed) {
  console.log('请求url：' + url);
  wx.showLoading({
    title: "正在加载中...",
  })
  wx.request({
    url,
    data,
    method: method,
    header: header,
    success: function(res) {
      wx.hideLoading();
      console.log('响应：', res.data);

      if (res.data) {
        /** start 根据需求 接口的返回状态码进行处理 */
        if (res.statusCode == 200) {
          onSuccess(res.data); //request success
        } else {
          onFailed(res.data.message); //request failed
        }
        /** end 处理结束*/
      }
    },
    fail: function(error) {
      onFailed(""); //failure for other reasons
    }
  })
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @data 请求参数
 */
function dealParams(data) {
  return data;
}


// 1.通过module.exports方式提供给外部调用
module.exports = {
  get,
  post
}
