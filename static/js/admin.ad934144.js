(window.webpackJsonp=window.webpackJsonp||[]).push([["admin"],{2953:function(e,t,i){"use strict";i.r(t);var n={name:"Admin",data:function(){return{isCollapse:!1,menuList:[{name:"我的工作台",id:"/workbench",icon:"el-icon-eleme",menus:!1},{name:"分站管理",id:"/substation1",icon:"el-icon-link",menus:!1},{name:"会员管理",id:"/members",icon:"el-icon-user",menus:!1},{name:"商品管理",id:"/goods_list",icon:"el-icon-goods",menus:!1},{name:"站点装修",id:"/fitment",icon:"el-icon-brush",menus:!1},{name:"财务管理",id:"el-icon-tickets",icon:"el-icon-tickets",menus:[{name:"订单分红",id:"/bonus"},{name:"订单列表",id:"/order1"},{name:"我的钱包",id:"/wallet1"},{name:"提现管理",id:"/account"}]},{name:"加价模板",id:"/premiumTemplate",icon:"el-icon-pie-chart",menus:!1},{name:"轮播管理",id:"/swipe",icon:"el-icon-picture-outline-round",menus:!1},{name:"公告管理",id:"/announcement",icon:"el-icon-help",menus:!1},{name:"密价管理",icon:"el-icon-unlock",id:"el-icon-unlock",menus:[{name:"普通密价",id:"/ordinary_price"},{name:"密价包使用",id:"/price_use"},{name:"密价包管理",id:"/price_manag"}]},{name:"站点配置",id:"/config",icon:"el-icon-setting",menus:!1}],isData:!1,ruleForm:{},pcorh5:!1,visible:!1,Height:0,equipment:null,theme_color:localStorage.getItem("theme_color"),theme_rgba:localStorage.getItem("theme_rgba"),theme_name:localStorage.getItem("theme_name"),getStyle:JSON.parse(localStorage.getItem("getStyle"))}},mounted:function(){var e=this;localStorage.getItem("data")&&(this.isData=!0),/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?(this.pcorh5=!1,this.equipment="h5"):(this.pcorh5=!0,this.equipment="pc"),this.$http.getSiteconfigs().then((function(t){0===t.code?e.ruleForm=t.data:e.$message({message:t.message,type:"error"})})),this.Height=document.documentElement.clientHeight-46},methods:{handleCommand:function(e){"/login"===e&&localStorage.removeItem("data"),this.$router.push({path:e})}}},o=(i("8416"),i("2877"));o=Object(o.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin1"},["pc"===e.equipment?n("div",[n("el-container",[n("el-header",{style:{backgroundColor:e.getStyle.page.tb_color}},[n("el-row",[n("el-col",{attrs:{span:23}},[n("div",{staticStyle:{height:"50px","margin-top":"5px",display:"inline-block"},on:{click:function(t){return e.$router.push({name:"home"})}}},[n("el-image",{staticStyle:{height:"50px"},attrs:{src:e.ruleForm.logo}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("img",{staticStyle:{height:"50px",width:"50px"},attrs:{src:i("17be")}})])]),n("span",{staticStyle:{"font-size":"18px",display:"inline-block",transform:"translate(15px, -15px)"},style:{color:e.getStyle.page.font_color}},[e._v(" "+e._s(e.ruleForm.name||"")+" ")])],1)]),n("el-col",{attrs:{span:1}},[e.pcorh5?n("div",[e.isData?e._e():n("div",[n("el-button",{attrs:{size:"small"},on:{click:function(t){return e.$router.push({path:"/login"})}}},[e._v(" 登录 / 注册 ")])],1),e.isData?n("div",[n("el-dropdown",{on:{command:e.handleCommand}},[n("img",{staticStyle:{width:"40px",height:"40px","border-radius":"50%"},attrs:{src:i("6621")}}),n("el-dropdown-menu",{staticStyle:{"min-width":"150px"},attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"/set"}},[n("i",{staticClass:"el-icon-s-platform"}),e._v("个人中心 ")]),n("el-dropdown-item",{attrs:{command:"/workbench"}},[n("i",{staticClass:"el-icon-menu"}),e._v("分站后台 ")]),n("el-dropdown-item",{attrs:{command:"/login"}},[n("i",{staticClass:"el-icon-refresh"}),e._v("切换账号 ")])],1)],1)],1):e._e()]):e._e()])],1)],1),n("el-container",[n("el-aside",{staticStyle:{height:"calc(100vh - 60px)"},style:{width:!0===e.isCollapse?"56px":"180px",transition:".4s"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse,"background-color":"#fff","text-color":"#333","active-text-color":"blue"===e.theme_name?"#5388FF":"#FF710F","default-active":e.$route.path,router:""}},[n("div",{staticClass:"scaling",style:{color:e.theme_color,backgroundColor:e.theme_rgba},on:{click:function(t){e.isCollapse=!e.isCollapse}}},[n("i",{class:!0===e.isCollapse?"el-icon-s-unfold isShow":"el-icon-s-fold",staticStyle:{"line-height":"30px","font-size":"18px",transform:"translate(-4px)"}})]),e._l(e.menuList,(function(t){return n("div",{key:t.id},[t.menus?e._e():n("div",[n("el-menu-item",{attrs:{index:t.id}},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])],1),t.menus&&!t.hidden?n("div",[n("el-submenu",{attrs:{index:t.id}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e.isCollapse?e._e():n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])]),e._l(t.menus,(function(t){return n("el-menu-item-group",{key:t.id},[n("el-menu-item",{attrs:{index:t.id}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)],1):e._e()])}))],2)],1),n("el-main",{staticClass:"main_style"},[n("router-view",{staticStyle:{height:"90%","max-height":"90%"}})],1)],1)],1)],1):e._e(),"h5"===e.equipment?n("div",[n("van-nav-bar",{attrs:{title:e.ruleForm.Name||""},scopedSlots:e._u([{key:"left",fn:function(){return[n("el-popover",{attrs:{placement:"top",trigger:"click"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("el-menu",{staticStyle:{width:"150px","min-height":"100vh",border:"none",padding:"20px 0 0 0"},attrs:{"active-text-color":"#5388FF","default-active":e.$route.path,"active-text-color":"blue"===e.theme_name?"#5388FF":"#FF710F",router:""}},e._l(e.menuList,(function(t){return n("div",{key:t.id},[t.menus?e._e():n("div",[n("el-menu-item",{staticStyle:{height:"45px","line-height":"45px"},attrs:{index:t.id},on:{click:function(t){e.visible=!1}}},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])],1),t.menus?n("div",[n("el-submenu",{attrs:{index:t.id}},[n("template",{slot:"title"},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])]),e._l(t.menus,(function(t){return n("el-menu-item-group",{key:t.id},[n("el-menu-item",{staticStyle:{height:"45px","line-height":"45px"},attrs:{index:t.id},on:{click:function(t){e.visible=!1}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)],1):e._e()])})),0),n("van-icon",{attrs:{slot:"reference",name:"wap-nav",size:"18"},slot:"reference"})],1)]},proxy:!0},{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"wap-home",size:"18"},on:{click:function(t){return e.$router.push({path:"/"})}}})]},proxy:!0}],null,!1,2069872605)}),n("router-view")],1):e._e()])}),[],!1,null,null,null);t.default=o.exports},4354:function(e,t,i){},8416:function(e,t,i){"use strict";var n=i("4354");i.n(n).a}}]);