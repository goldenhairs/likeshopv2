(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aaa0cf8"],{"5f66":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pay-result"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"commit-order-box bg-white"},[t._m(0),e("div",{staticStyle:{height:"80px"}}),e("div",{staticClass:"info mt10"},[e("div",{staticClass:"row-between info-item"},[e("div",[t._v("订单编号")]),e("div",[t._v(t._s(t.payInfo.order_sn))])]),e("div",{staticClass:"row-between info-item"},[e("div",[t._v("付款时间")]),e("div",[t._v(t._s(t.payInfo.pay_time))])]),e("div",{staticClass:"row-between info-item"},[e("div",[t._v("支付方式")]),e("div",[t._v(t._s(t.payInfo.pay_way_text))])]),e("div",{staticClass:"row-between info-item"},[e("div",[t._v("支付金额")]),e("div",[t._v("￥"),e("price-slice",{attrs:{price:t.payInfo.order_amount}})],1)])]),e("div",{staticClass:"opt-btn-contain"},[e("div",{staticClass:"bg-primary btn white row-center lg",on:{click:function(i){return t.goPage("userOrder")}}},[t._v("查看订单")]),e("div",{staticClass:"btn primary row-center lg",style:"border:1px solid"+t.primaryColor,on:{click:function(i){return t.goPage("home")}}},[t._v("返回首页")])])])])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"commit-order-header column-center"},[s("div",[s("img",{staticClass:"order-img",attrs:{src:e("e6c1")}})]),s("div",{staticClass:"xl"},[t._v("订单支付成功")])])}],n=(e("ac1f"),e("5319"),e("c24f")),r={name:"payResult",data:function(){return{payStatus:"",payInfo:{},isShow:!1}},created:function(){var t=this.$route.query.id;this.id=t},methods:{$getOrderResult:function(){var t=this;Object(n["y"])(this.id).then((function(i){1==i.code&&(t.isShow=!0,t.payInfo=i.data)}))},goPage:function(t){this.$router.replace({name:t})}}},o=r,c=(e("affc"),e("2877")),d=Object(c["a"])(o,s,a,!1,null,"cbf201da",null);i["default"]=d.exports},a5d0:function(t,i,e){},affc:function(t,i,e){"use strict";e("a5d0")},e6c1:function(t,i,e){t.exports=e.p+"img/icon_paySuccess.fcff8445.png"}}]);
//# sourceMappingURL=chunk-1aaa0cf8.2e930121.js.map