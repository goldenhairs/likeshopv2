import request from '@/utils/request'
import wechatH5 from '@/utils/wechath5'

//小程序登录
export function mnpLogin(data) {
	return request.post('account/mnpLogin', data);
}

//预支付接口
export function prepay(data) {
	return request.post('payment/prepay', { ...data,
		order_source: 1
	});
}

//小程序订阅
export function getMnpNotice(data) {
	return request.get("subscribe/lists", {
		params: data
	});
}

//账号登录
export function accountLogin(data) {
	return request.post("account/login", data)
}


export function getWechatConfig() {
	return request.get("wechat/config", {
		url: encodeURIComponent(wechat.signLink())
	}, {
		noAuth: true
	});
}


// 登录
export function weichatLogin(data) {
	return request.post('account/oalogin', data)
}

// 获取获取向微信请求code的链接
export function getCodeUrl() {
	return request.get('account/codeurl', {
		url: encodeURIComponent(location.href)
	});
}


//微信sdk配置
export function getJsconfig() {
	return request.get('we_chat/jsconfig', {
		params: {
			url: encodeURIComponent(wechatH5.signLink())
		}
	});
}
