import {addMessage} from './message'

function messageError(message,title){
    addMessage(message,title);
}
/**
 * 状态检查
 */
export function checkStatus(response) {
  if (response && response.status >= 200 && response.status < 400) {
    return response;
  }
  if (response && response.status === 401) {
    if(typeof window !== "undefined") {
      sessionStorage.clear();
    }
    if(confirm('当前页面需要登录后才能操作，是否前往登录？')){
      location.href = "/zh/login"
    }
  }
  if (!response) {
    messageError('您的网络发生异常，无法连接服务器','网络异常')
  } else {
    const { status, url, statusText } = response;
    messageError(statusText,`请求错误 ${status}: ${url}`)
  } 
}

function getHeaderParams() {
    return {
        token: localStorage.getItem('token')
    }
}

/**
 * 请求接口封装
 */
export async function request(url,headers) {
  try{
    const fetchResponse = await fetch(url, headers);
    const response = checkStatus(fetchResponse);
    if(response){
      var data = await response.json();
      if(!data.success){
        console.log('data',data)
         messageError(data.message,'接口异常');
      }
      return data;
    }  
  }catch(err){
    messageError(url,'请求失败')
  }
}

/**
 * post
 * @param url
 * @param params
 * @param headers
 */
export function post(url,body,headers){
  return request(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...getHeaderParams(),
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

/**
 * get
 * @param url 请求URL
 * @param params 请求参数
 * @param headers 额外HTTP头
 */
export function get(url, params, headers){
  if (params) {
    const paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key =>
      paramsArray.push(key + '=' + params[key]),
    );
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }

  return request(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...getHeaderParams(),
      ...headers,
    },
  });
}

/**
 * put
 * @param url 请求URL
 * @param body 正文内容
 * @param headers 额外请求头
 */
export function put(url,body,headers){
  return request(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...getHeaderParams(),
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

