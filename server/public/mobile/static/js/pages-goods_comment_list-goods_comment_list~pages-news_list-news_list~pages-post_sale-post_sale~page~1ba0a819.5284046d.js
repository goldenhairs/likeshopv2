(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods_comment_list-goods_comment_list~pages-news_list-news_list~pages-post_sale-post_sale~page~1ba0a819"],{"0de7":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */._tab-box[data-v-2cead4d8]{width:100%;font-size:%?26?%;position:relative;z-index:10}._tab-box .scroll-view-h[data-v-2cead4d8]{height:%?80?%;line-height:%?80?%;white-space:nowrap;width:100%;box-sizing:border-box}._tab-box .scroll-view-h ._scroll-content[data-v-2cead4d8]{width:100%;height:100%;position:relative}._tab-box .scroll-view-h ._scroll-content ._tab-item-box[data-v-2cead4d8]{height:100%}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex[data-v-2cead4d8]{display:-webkit-box;display:-webkit-flex;display:flex}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._flex ._item[data-v-2cead4d8]{-webkit-box-flex:1;-webkit-flex:1;flex:1}._tab-box .scroll-view-h ._scroll-content ._tab-item-box._clamp ._item[data-v-2cead4d8]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item[data-v-2cead4d8]{height:100%;display:inline-block;text-align:center;position:relative;text-align:center;color:#333}._tab-box .scroll-view-h ._scroll-content ._tab-item-box ._item._active[data-v-2cead4d8]{color:#e54d42}._tab-box .scroll-view-h ._scroll-content ._underline[data-v-2cead4d8]{height:%?4?%;background-color:#e54d42;border-radius:%?6?%;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;position:absolute;bottom:0}',""]),t.exports=e},"137c":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"_tab-box",style:{fontSize:t.defaultConfig.fontSize+"rpx",color:t.defaultConfig.color}},[i("v-uni-scroll-view",{staticClass:"scroll-view-h",attrs:{id:"_scroll","scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.slider.scrollLeft}},[i("v-uni-view",{staticClass:"_scroll-content",style:{backgroundColor:t.defaultConfig.bgColor}},[i("v-uni-view",{staticClass:"_tab-item-box",class:[t.defaultConfig.itemWidth?"_clamp":"_flex"]},[t._l(t.tabList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"_item",class:{_active:t.tagIndex===n},style:{color:t.tagIndex==n?t.defaultConfig.activeColor:t.defaultConfig.color,width:t.defaultConfig.itemWidth?t.defaultConfig.itemWidth+"rpx":""},attrs:{id:"_tab_"+n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(n)}}},[t._v(t._s(e.title))])]}))],2),i("v-uni-view",{staticClass:"_underline",style:{transform:"translateX("+t.slider.left+"px)",width:t.slider.width+"px",height:t.defaultConfig.underLineHeight+"rpx",backgroundColor:t.defaultConfig.underLineColor}})],1)],1),i("v-uni-view",{staticClass:"tab-content"},[i("v-uni-view",[t._t("default")],2)],1)],1)},o=[]},"20e1":function(t,e,i){var n=i("0de7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7b3e5102",n,!0,{sourceMap:!1,shadowMode:!1})},"2bb3":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".tab.active[data-v-328c42bf]{height:auto}.tab.inactive[data-v-328c42bf]{height:0;overflow:visible}",""]),t.exports=e},6791:function(t,e,i){"use strict";var n=i("9d59"),a=i.n(n);a.a},6985:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:{active:t.active,inactive:!t.active,tab:!0},style:t.shouldShow?"":"display: none;"},[t.shouldRender?t._t("default"):t._e()],2)},o=[]},"7f50":function(t,e,i){"use strict";i.r(e);var n=i("8366"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},8279:function(t,e,i){"use strict";i.r(e);var n=i("f265"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},8366:function(t,e,i){"use strict";i("4160"),i("d81d"),i("a9e3"),i("ac1f"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tabs",props:{active:{type:Number,default:0},config:{type:Object,default:function(){return{}}}},provide:function(){return{tabs:this}},data:function(){return{tabList:[],tagIndex:0,slider:{left:0,width:0,scrollLeft:0},scorll:{},defaultConfig:{bgColor:"#fff",fontSize:26,color:"#333",activeColor:"#FF2C3C",itemWidth:0,underLinePadding:10,underLineWidth:0,underLineHeight:4,underLineColor:"#FF2C3C"}}},watch:{},created:function(){this.childrens=[]},mounted:function(){this.updateTabs()},methods:{updateTabs:function(){var t=this;this.tabList=this.childrens.map((function(t){var e=t.title,i=t.info,n=t.name,a=t.dot,o=t.titleStyle,s=t.active,l=t.updateRender;return{title:e,info:i,name:n,dot:a,titleStyle:o,active:s,updateRender:l}})),this.updateConfig(),this.tagIndex=this.active,this.$nextTick((function(){t.calcScrollPosition()}))},updateConfig:function(){this.defaultConfig=Object.assign(this.defaultConfig,this.config)},calcScrollPosition:function(){var t=this,e=uni.createSelectorQuery().in(this);e.select("#_scroll").boundingClientRect((function(e){t.scorll=e,t.updateTabWidth()})).exec()},updateTabWidth:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=this.tabList;if(0==i.length)return!1;var n=uni.createSelectorQuery().in(this);n.select("#_tab_"+e).boundingClientRect((function(n){i[e]._slider={width:n.width,left:n.left,scrollLeft:n.left-(i[e-1]?i[e-1]._slider.width:0)},t.tagIndex==e&&t.tabToIndex(t.tagIndex),e++,i.length>e&&t.updateTabWidth(e)})).exec()},tabToIndex:function(t){var e=this,i=this.tabList[t]._slider,n=uni.upx2px(this.defaultConfig.underLineWidth);n||(n=this.defaultConfig.itemWidth?uni.upx2px(this.defaultConfig.itemWidth)/3:this.tabList[t]["title"].length*uni.upx2px(this.defaultConfig.fontSize),n+=2*uni.upx2px(this.defaultConfig.underLinePadding)),this.childrens.forEach((function(i,n){var a=n===t;console.log(a),a===i.active&&i.inited||i.updateRender(a,e)}));var a=this.scorll.left||0;this.slider={left:i.left-a+(i.width-n)/2,width:n,scrollLeft:i.scrollLeft-a}},tabClick:function(t){this.tagIndex=t,this.tabToIndex(t),this.$emit("change",t)}}};e.default=n},"91b8":function(t,e,i){"use strict";i.r(e);var n=i("137c"),a=i("7f50");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a0e5");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"2cead4d8",null,!1,n["a"],s);e["default"]=r.exports},"9d59":function(t,e,i){var n=i("2bb3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1d365581",n,!0,{sourceMap:!1,shadowMode:!1})},a0e5:function(t,e,i){"use strict";var n=i("20e1"),a=i.n(n);a.a},efbf:function(t,e,i){"use strict";i.r(e);var n=i("6985"),a=i("8279");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6791");var s,l=i("f0c5"),r=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"328c42bf",null,!1,n["a"],s);e["default"]=r.exports},f265:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{dot:{type:Boolean},info:{type:null},title:{type:String},titleStyle:{type:String},name:{type:[Number,String],value:""}},inject:["tabs"],data:function(){return{active:!1,shouldShow:!1,shouldRender:!1}},created:function(){this.tabs.childrens.push(this)},mounted:function(){this.update()},methods:{getComputedName:function(){return""!==this.data.name?this.data.name:this.index},updateRender:function(t,e){this.inited=this.inited||t,this.active=t,this.shouldRender=this.inited,this.shouldShow=t},update:function(){this.tabs&&this.tabs.updateTabs()}},computed:{changeData:function(){var t=this.dot,e=this.info,i=this.title,n=this.titleStyle;return{dot:t,info:e,title:i,titleStyle:n}}},watch:{changeData:function(t){this.update()}}};e.default=n}}]);