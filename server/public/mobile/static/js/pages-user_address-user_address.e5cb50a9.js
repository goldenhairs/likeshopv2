(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_address-user_address"],{2740:function(t,e,i){"use strict";var n=i("be7d"),s=i.n(n);s.a},2760:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("327e"),s={data:function(){return{addressList:[],hasAddress:!0,deleteSure:!1,currentId:0}},props:{},onLoad:function(t){this.type=t.type},onReady:function(){},onShow:function(){this.getAddressListsFun()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{onSelect:function(t){if(this.type){var e=t.currentTarget.dataset.id;uni.$emit("selectaddress",{id:e}),uni.navigateBack()}},addAddress:function(){uni.navigateTo({url:"/pages/address_edit/address_edit"})},editAddress:function(t){uni.navigateTo({url:"/pages/address_edit/address_edit?id=".concat(t)})},getAddressListsFun:function(){var t=this;(0,n.getAddressLists)().then((function(e){1==e.code&&e.data.length?(t.addressList=e.data,t.hasAddress=!0):t.hasAddress=!1}))},radioChange:function(t){var e=this,i=t.detail.value;console.log(t),(0,n.setDefaultAddress)(i).then((function(t){1==t.code&&e.getAddressListsFun()}))},onLoadFun:function(){this.getAddressListsFun()},delAddressFun:function(t){var e=this,i=this.currentId;(0,n.delAddress)(i).then((function(t){1==t.code&&(e.$toast({title:t.msg}),e.deleteSure=!1,e.getAddressListsFun())}))},getWxAddress:function(){uni.authorize({scope:"scope.address",success:function(t){uni.chooseAddress({success:function(t){uni.setStorageSync("wxAddress",JSON.stringify(t)),setTimeout((function(){uni.navigateTo({url:"/pages/address_edit/address_edit"})}),200)},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return this.$toast({title:"取消选择"})}})},fail:function(t){uni.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(t){if(t.confirm)uni.openSetting({success:function(t){}});else if(t.cancel)return this.$toast({title:"已取消！"})}})}})},showSurePop:function(t){this.deleteSure=!0,this.currentId=t.currentTarget.dataset.id},hidePop:function(t){this.deleteSure=!1}}};e.default=s},"377e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.uni-popup-dialog[data-v-72483a07]{width:300px;border-radius:15px;background-color:#fff}.uni-dialog-title[data-v-72483a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:15px;padding-bottom:5px}.uni-dialog-title-text[data-v-72483a07]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-72483a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:5px 15px 15px 15px}.uni-dialog-content-text[data-v-72483a07]{font-size:14px;color:#6e6e6e}.uni-dialog-button-group[data-v-72483a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-72483a07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:45px}.uni-border-left[data-v-72483a07]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-72483a07]{font-size:14px}.uni-button-color[data-v-72483a07]{color:#007aff}.uni-dialog-input[data-v-72483a07]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px}.uni-popup__success[data-v-72483a07]{color:#4cd964}.uni-popup__warn[data-v-72483a07]{color:#f0ad4e}.uni-popup__error[data-v-72483a07]{color:#dd524d}.uni-popup__info[data-v-72483a07]{color:#909399}',""]),t.exports=e},"40ed":function(t,e,i){var n=i("377e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("85514730",n,!0,{sourceMap:!1,shadowMode:!1})},"60b5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/user_address/user_address.wxss */.user-address[data-v-20ceb53c]{padding-bottom:calc(%?140?% + env(safe-area-inset-bottom))}.user-address .no-address[data-v-20ceb53c]{padding-top:%?300?%;text-align:center}.user-address .address-list[data-v-20ceb53c]{padding:%?10?% 0}.user-address .address-list .item[data-v-20ceb53c]{padding:0 %?30?%}.user-address .address-list .item .address[data-v-20ceb53c]{padding:%?20?% 0;border-bottom:var(--border)}.user-address .address-list .item .operation[data-v-20ceb53c]{height:%?80?%}.user-address .footer[data-v-20ceb53c]{position:fixed;left:0;right:0;bottom:0;height:%?118?%;padding:0 %?30?%}.user-address .footer .btn[data-v-20ceb53c]{width:%?336?%;height:%?80?%}.tips-dialog[data-v-20ceb53c]{height:%?230?%;width:100%}',""]),t.exports=e},"6d20":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-popup-dialog"},[t.useSlot?i("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default")],2):i("v-uni-view",[i("v-uni-view",{staticClass:"uni-dialog-title"},[i("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.title))])],1),i("v-uni-view",{staticClass:"uni-dialog-content"},["base"===t.mode?i("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))]):i("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:t.placeholder,focus:t.focus},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)],1),i("v-uni-view",{staticClass:"uni-dialog-button-group"},[i("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v("取消")])],1),i("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color",style:{color:t.confirmButtonColor}},[t._v(t._s(t.confirmButtonText))])],1)],1)],1)},a=[]},"854f":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniPopupDialog",props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:"请输入内容"},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:"提示"},content:{type:String,default:""},beforeClose:{type:Boolean,default:!0},confirmButtonText:{type:String,default:"确定"},confirmButtonColor:{type:String,default:""},useSlot:{type:Boolean,default:!1}},data:function(){return{dialogType:"error",focus:!1,val:""}},inject:["popup"],watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.mkclick=!1,"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){var t=this;this.$emit("confirm",(function(){t.popup.close(),"input"===t.mode&&(t.val=t.value)}),"input"===this.mode?this.val:"")},close:function(){var t=this;this.beforeClose?this.$emit("cancel",(function(){t.popup.close()})):this.popup.close()}}};e.default=n},"937c":function(t,e,i){"use strict";i.r(e);var n=i("6d20"),s=i("e88a");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("d7b1");var o,d=i("f0c5"),r=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"72483a07",null,!1,n["a"],o);e["default"]=r.exports},"944e":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("0854").default,uniPopupDialog:i("937c").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user-address"},[t.hasAddress?i("v-uni-view",{staticClass:"address-list"},[i("v-uni-radio-group",{staticClass:"radio-group",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.addressList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item bg-white mb20",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSelect.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"address"},[i("v-uni-view",{staticClass:"consignee md bold"},[t._v(t._s(e.contact)),i("v-uni-text",{staticClass:"phone ml10"},[t._v(t._s(e.telephone))])],1),i("v-uni-view",{staticClass:"lighter sm mt10"},[t._v(t._s(e.province)+" "+t._s(e.city)+" "+t._s(e.district)+" "+t._s(e.address))])],1),i("v-uni-view",{staticClass:"operation row-between"},[i("v-uni-view",[i("v-uni-radio",{staticClass:"radio row",attrs:{color:"#FF2C3C",value:e.id+"",checked:"1"==e.is_default}},[i("v-uni-text",[t._v("设为默认")])],1)],1),i("v-uni-view",{staticClass:"row-center"},[i("v-uni-view",{staticClass:"row mr20",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.editAddress(e.id)}}},[i("v-uni-image",{staticClass:"icon-md mr10",attrs:{src:"/static/images/icon_edit.png"}}),t._v("编辑")],1),i("v-uni-view",{staticClass:"row ml20",attrs:{"data-id":e.id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.showSurePop.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"icon-md mr10",attrs:{src:"/static/images/icon_del_1.png"}}),t._v("删除")],1)],1)],1)],1)})),1)],1):i("v-uni-view",{staticClass:"no-address column-center"},[i("v-uni-image",{staticClass:"img-null mt20",attrs:{src:"/static/images/address_null.png"}}),i("v-uni-view",{staticClass:"sm muted"},[t._v("暂无添加地址，请添加~")])],1),i("uni-popup",{ref:"confirmPop",attrs:{id:"confirmPop",show:t.deleteSure}},[i("uni-popup-dialog",{attrs:{id:"delete-dialog",showCancelButton:!0,confirmButtonText:"狠心删除","confirm-button-color":"#FF2C3C",useSlot:!0},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.$delAddress.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.hidePop.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"column-center tips-dialog"},[i("v-uni-image",{staticClass:"icon-lg",attrs:{src:"/static/images/icon_warning.png"}}),i("v-uni-view",{staticStyle:{"margin-top":"30rpx"}},[t._v("确认删除该地址吗？")])],1)],1)],1),i("v-uni-view",{staticClass:"footer row-between fixed bg-white"},[i("v-uni-view",{staticClass:"btn row-center bg-gray br60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getWxAddress.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"icon-lg mr10",attrs:{src:"/static/images/icon_wechat.png"}}),i("v-uni-text",{staticClass:"white md"},[t._v("微信导入")])],1),i("v-uni-view",{staticClass:"btn bg-primary white md row-center br60",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addAddress.apply(void 0,arguments)}}},[t._v("新增收货地址")])],1)],1)},a=[]},be7d:function(t,e,i){var n=i("60b5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("8900df20",n,!0,{sourceMap:!1,shadowMode:!1})},c6f3:function(t,e,i){"use strict";i.r(e);var n=i("944e"),s=i("e28b");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("2740");var o,d=i("f0c5"),r=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"20ceb53c",null,!1,n["a"],o);e["default"]=r.exports},d7b1:function(t,e,i){"use strict";var n=i("40ed"),s=i.n(n);s.a},e28b:function(t,e,i){"use strict";i.r(e);var n=i("2760"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},e88a:function(t,e,i){"use strict";i.r(e);var n=i("854f"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a}}]);