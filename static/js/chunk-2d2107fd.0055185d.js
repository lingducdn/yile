(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2107fd"],{b7c5:function(t,e,n){"use strict";n.r(e);var s={name:"ClosePrice",data:function(){return{dataList:[],goods_id:null}},mounted:function(){this.getList()},methods:{onClickLeft:function(){this.$router.go(-1)},getList:function(){var t=this;this.$http.closePriceList({goods_id:this.goods_id||null}).then((function(e){0===e.code&&(t.dataList=e.data)}))}}};n=n("2877"),n=Object(n.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"closePrice",staticStyle:{"padding-bottom":"30px"}},[n("van-nav-bar",{attrs:{title:"密价","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("div",{staticStyle:{padding:"5px 6px 0 6px","background-color":"#fff"}},[n("van-search",{staticClass:"search",attrs:{placeholder:"请输入商品编号",shape:"round",type:"number"},on:{search:t.getList},model:{value:t.goods_id,callback:function(e){t.goods_id=t._n(e)},expression:"goods_id"}})],1),t.dataList.length?n("div",t._l(t.dataList,(function(e){return n("van-cell",{key:e.id,attrs:{title:e.name},scopedSlots:t._u([{key:"label",fn:function(){return[n("span",{staticClass:"custom-title"},[t._v(t._s(t._f("formatTimer")(e.create_time)))])]},proxy:!0},{key:"default",fn:function(){return[n("span",[t._v(t._s(e.id))]),n("div",[n("span",{style:{color:"blue"===t.theme_name?"#5388FF":"#FF710F"}},[t._v("¥"+t._s(e.close_price)+"元")])])]},proxy:!0}],null,!0)})})),1):n("div",[n("van-empty",{attrs:{description:"暂无密价..."}})],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);