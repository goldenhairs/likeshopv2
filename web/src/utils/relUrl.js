// +----------------------------------------------------------------------
// | LikeShop有特色的全开源社交分销电商系统
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 商业用途务必购买系统授权，以免引起不必要的法律纠纷
// | 禁止对系统程序代码以任何目的，任何形式的再发布
// | 微信公众号：好象科技
// | 访问官网：http://www.likemarket.net
// | 访问社区：http://home.likemarket.net
// | 访问手册：http://doc.likemarket.net
// | 好象科技开发团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | Author: LikeShopTeam
// +----------------------------------------------------------------------


//获取url后的参数  以对象返回
export function getUrlparams (url) {
    let urlparams = url.split('?')
    if (urlparams.length === 1) {
        return ''
    }
    var newparams = {}
    for (let item of urlparams[1].split('&')) {
        newparams[item.split('=')[0]] = item.split('=')[1]
    }
    return newparams
}

//重写encodeURL函数
export function urlencode (str) {  
    str = (str + '').toString();   
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');  
}

//获取url后第二个问好后的参数  以对象返回
export function getUrl (url) {
    let urlparams = url.split('?')
    if (urlparams.length <= 2) {
        return ''
    }
    var newparams = {}
    for (let item of urlparams[2].split('&')) {
        newparams[item.split('=')[0]] = item.split('=')[1]
    }
    return newparams
}