(window.webpackJsonp=window.webpackJsonp||[]).push([["substation"],{1340:function(e,t,a){"use strict";a.r(t),a("99af");var i={name:"Substation",data:function(){return{dataInfo:null,workbench:"",tableData:{},version:{v1:[{name:"开通搭建分站",value:!0},{name:"专属社区平台",value:!0},{name:"在线支付接口",value:!0},{name:"站点用户管理",value:!0},{name:"赚取二级返利",value:!0},{name:"赚取用户差价",value:!0},{name:"自定义LOGO",value:!0},{name:"开通分站提成",value:!0},{name:"自定义网站名",value:!0},{name:"专属管理后台",value:!0},{name:"自定网站域名",value:!0},{name:"普通低价货源",value:!0},{name:"会员密价设置",value:!1},{name:"赚取分站差价",value:!1}],v2:[{name:"开通搭建分站",value:!0},{name:"专属社区平台",value:!0},{name:"在线支付接口",value:!0},{name:"站点用户管理",value:!0},{name:"赚取二级返利",value:!0},{name:"赚取用户差价",value:!0},{name:"自定义LOGO",value:!0},{name:"开通分站提成",value:!0},{name:"自定义网站名",value:!0},{name:"专属管理后台",value:!0},{name:"自定网站域名",value:!0},{name:"专业低价货源",value:!0},{name:"会员密价设置",value:!0},{name:"赚取分站差价",value:!1}],v3:[{name:"开通搭建分站",value:!0},{name:"专属社区平台",value:!0},{name:"在线支付接口",value:!0},{name:"站点用户管理",value:!0},{name:"赚取二级返利",value:!0},{name:"赚取用户差价",value:!0},{name:"自定义LOGO",value:!0},{name:"开通分站提成",value:!0},{name:"自定义网站名",value:!0},{name:"专属管理后台",value:!0},{name:"自定网站域名",value:!0},{name:"旗舰低价货源",value:!0},{name:"会员密价设置",value:!0},{name:"赚取分站差价",value:!0}]},ruleForm:{sid:1,num:1,name:"",title:"",qz:"",domain:"",main_domain:""},ruleForm1:{sid:null},ruleForm2:{num:1},dialogTitle:"开通分站",dialogTitle1:"升级站点",dialogTitle2:"续费站点",dialogVisible:!1,dialogVisible1:!1,dialogVisible2:!1,rules:{name:[{required:!0,message:"请输入站点名称",trigger:"blur"}],title:[{required:!0,message:"请输入站点标题",trigger:"blur"}],sid:[{required:!0,message:"请选择站点版本",trigger:"change"}],num:[{required:!0,message:"请输入购买时长",trigger:"blur"}],qz:[{required:!0,message:"请输入站点域名",trigger:"blur"}],main_domain:[{required:!0,message:"请选择域名",trigger:"blur"}]},rules1:{sid:[{required:!0,message:"请选择站点版本",trigger:"change"}]},rules2:{num:[{required:!0,message:"请选择分站域名",trigger:"blur"}]},dataList:{},options:[],isprice:0,theme_color:localStorage.getItem("theme_color"),theme_rgba:localStorage.getItem("theme_rgba"),theme_name:localStorage.getItem("theme_name"),bgimg:a("f5f4")("./".concat(localStorage.getItem("theme_name"),"/conbg.png"))}},mounted:function(){this.getData(),this.workbench=window.location.host+"/workbench"},methods:{calculate:function(e){this.isprice=this.tableData[e].price-this.tableData[this.dataList.version].price},getData:function(){var e,t=this,a=JSON.parse(localStorage.getItem("sysConfig"));for(e in this.tableData=a.substation_level,a.substation_level)a.substation_level[e].index=e;this.$http.getSubstation().then((function(e){0===e.code?(t.dataInfo=e.data.version,t.dataList=e.data,t.options=[]):1===e.code&&(t.options=[],t.$http.substationDomainList().then((function(a){if(0===a.code)for(var i in 0<a.data.length&&(t.ruleForm.main_domain=a.data[0]),a.data)t.options.push({value:i,label:a.data[i]});else t.$message({message:e.message,type:"error"})})))}))},resetPopupData:function(){this.$router.push({path:"/blank",query:{page:this.$route.path}})},submitPopupData:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.ruleForm.domain="".concat(t.ruleForm.qz,".").concat(t.ruleForm.main_domain),t.$http.purchaseSubstation(t.ruleForm).then((function(e){0===e.code?(t.$message({message:"开通成功",type:"success"}),t.$router.push({path:"/blank",query:{page:t.$route.path}})):t.$message({message:e.message,type:"error"})})))}))},submitPopupData1:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.$http.upgradeSubstation(t.ruleForm1).then((function(e){0===e.code?(t.$message({message:"升级成功",type:"success"}),t.$router.push({path:"/blank",query:{page:t.$route.path}}),t.getData()):t.$message({message:e.message,type:"error"})}))}))},submitPopupData2:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.$http.renewSubstation(t.ruleForm2).then((function(e){0===e.code?(t.$message({message:"续费成功",type:"success"}),t.$router.push({path:"/blank",query:{page:t.$route.path}}),t.getData()):t.$message({message:e.message,type:"error"})}))}))},open:function(){this.dialogVisible=!0},upgrade:function(){this.dialogVisible1=!0},renewal:function(){this.dialogVisible2=!0}}},s=(a("d0a5"),a("2877"));s=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"substation"},[a("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"35px","margin-top":"10px"}},[e.dataList.version?a("div",[a("el-row",{staticStyle:{"line-height":"30px",padding:"10px 0 0 30px"}},[a("el-col",{attrs:{span:6}},[a("div",[a("span",{staticClass:"title"},[e._v("会员编号:")]),a("span",{staticClass:"content"},[e._v(e._s(e.dataList.customer_id))])]),a("div",[a("span",{staticClass:"title"},[e._v("站定名称:")]),a("span",{staticClass:"content"},[e._v(e._s(e.dataList.name))])]),a("div",[a("span",{staticClass:"title"},[e._v("站点标题:")]),a("span",{staticClass:"content"},[e._v(e._s(e.dataList.title))])]),a("div",[a("span",{staticClass:"title"},[e._v("站点版本:")]),a("span",{staticClass:"content"},[e.dataList.version?e._e():a("span",[e._v("未开通")]),1===e.dataList.version?a("span",[e._v(e._s(e.tableData[1].as))]):e._e(),2===e.dataList.version?a("span",[e._v(e._s(e.tableData[2].as))]):e._e(),3===e.dataList.version?a("span",[e._v(e._s(e.tableData[3].as))]):e._e()])])]),a("el-col",{attrs:{span:7}},[a("div",[a("span",{staticClass:"title"},[e._v("客服QQ: ")]),e._v(" "),a("span",{staticClass:"content"},[e._v(e._s(e.dataList.qq||"--"))])]),a("div",[a("span",{staticClass:"title"},[e._v("开通时间:")]),a("span",{staticClass:"content"},[e._v(e._s(e._f("formatTimer")(e.dataList.create_time)))])]),a("div",[a("span",{staticClass:"title"},[e._v("到期时间:")]),a("span",{staticClass:"content"},[e._v(e._s(e._f("formatTimer")(e.dataList.expire_time)))])]),a("div",[a("span",{staticClass:"title"},[e._v("站点描述:")]),a("span",{staticClass:"content"},[e._v(e._s(e.dataList.description||"--"))])])]),a("el-col",{attrs:{span:11}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("span",{staticClass:"title",staticStyle:{"margin-right":"10px"}},[e._v("分站后台:")])]),a("el-col",{attrs:{span:20}},[a("a",{staticStyle:{display:"inline-block","margin-left":"5px",color:"#5388ff"},attrs:{href:"/workbench",target:"_blank"}},[e._v(e._s(e.workbench))])])],1),a("el-row",[a("el-col",{attrs:{span:4}},[a("span",{staticClass:"title",staticStyle:{"margin-right":"10px"}},[e._v("已绑域名:")])]),a("el-col",{attrs:{span:20}},e._l(e.dataList.domain_list,(function(t,i){return a("div",{key:i,staticStyle:{"margin-left":"5px",color:"#5388ff"}},[e._v(" "+e._s(t.domain)+" ")])})),0)],1)],1)],1)],1):a("div",[a("el-empty",{staticStyle:{padding:"0"},attrs:{description:"未开通分站..."}})],1)]),a("div",{staticStyle:{"margin-top":"15px","box-shadow":"0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"}},[a("div",{staticStyle:{height:"36px",width:"100%","font-size":"14px","font-family":"Microsoft YaHei-Bold, Microsoft YaHei","font-weight":"bold","line-height":"36px","padding-left":"15px","background-size":"100% 100%"},style:{backgroundImage:"url('"+e.bgimg+"')",color:"blue"===e.theme_name?"#fff":"#282828"}},[e._v(" 开通分站 ")]),a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},[a("div",{staticClass:"box",style:{borderColor:e.theme_color}},[a("div",{staticClass:"box2",style:{color:e.theme_color,backgroundColor:e.theme_rgba}},[e._v(" "+e._s(e.tableData[1].as)+" ")]),e._l(e.version.v1,(function(t){return a("div",{key:t.name,staticClass:"box1"},[a("span",{staticStyle:{"margin-right":"33%"}},[e._v(" "+e._s(t.name)+" ")]),t.value?a("i",{staticClass:"el-icon-success",staticStyle:{"font-size":"20px"},style:{color:e.theme_color}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"#bbb","font-size":"20px"}})])})),a("div",{staticClass:"box3",style:{backgroundColor:e.theme_rgba}},[e.dataList.version?e._e():a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.open}},[e._v(" 立即开通(¥"+e._s(e.tableData[1].price)+"/年) ")]),2===e.dataList.version||3===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-check",circle:""}}):e._e(),1===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.renewal}},[e._v(" 立即续费 ")]):e._e(),1===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.upgrade}},[e._v(" 立即升级 ")]):e._e()],1)],2),a("div",{staticClass:"box",style:{borderColor:e.theme_color}},[a("div",{staticClass:"box2",style:{color:e.theme_color,backgroundColor:e.theme_rgba}},[e._v(" "+e._s(e.tableData[2].as)+" ")]),e._l(e.version.v2,(function(t){return a("div",{key:t.name,staticClass:"box1"},[a("span",{staticStyle:{"margin-right":"33%"}},[e._v(" "+e._s(t.name)+" ")]),t.value?a("i",{staticClass:"el-icon-success",staticStyle:{"font-size":"20px"},style:{color:e.theme_color}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"#bbb","font-size":"20px"}})])})),a("div",{staticClass:"box3",style:{backgroundColor:e.theme_rgba}},[e.dataList.version?e._e():a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.open}},[e._v(" 立即开通(¥"+e._s(e.tableData[2].price)+"/年) ")]),1===e.dataList.version||2===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.upgrade}},[e._v(" 立即升级 ")]):e._e(),2===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.renewal}},[e._v(" 立即续费 ")]):e._e(),3===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-check",circle:""}}):e._e()],1)],2),a("div",{staticClass:"box",style:{borderColor:e.theme_color}},[a("div",{staticClass:"box2",style:{color:e.theme_color,backgroundColor:e.theme_rgba}},[e._v(" "+e._s(e.tableData[3].as)+" ")]),e._l(e.version.v3,(function(t){return a("div",{key:t.name,staticClass:"box1"},[a("span",{staticStyle:{"margin-right":"33%"}},[e._v(" "+e._s(t.name)+" ")]),t.value?a("i",{staticClass:"el-icon-success",staticStyle:{"font-size":"20px"},style:{color:e.theme_color}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"#bbb","font-size":"20px"}})])})),a("div",{staticClass:"box3",style:{backgroundColor:e.theme_rgba}},[e.dataList.version?e._e():a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.open}},[e._v(" 立即开通(¥"+e._s(e.tableData[3].price)+"/年) ")]),1===e.dataList.version||2===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.upgrade}},[e._v(" 立即升级 ")]):e._e(),3===e.dataList.version?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.renewal}},[e._v(" 立即续费 ")]):e._e()],1)],2)])]),a("popup",{attrs:{"dialog-title":e.dialogTitle,visible:e.dialogVisible,"popup-width":"600px"},on:{"update:visible":function(t){e.dialogVisible=t},resetPopupData:function(t){return e.resetPopupData("ruleForm")},submitPopupData:function(t){return e.submitPopupData("ruleForm")},handleClose:function(t){return e.resetPopupData("ruleForm")}}},[a("div",[a("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"请仔细核对信息,再进行操作!",type:"warning","show-icon":"",closable:!1}}),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"站点版本",prop:"sid"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择站点版本"},model:{value:e.ruleForm.sid,callback:function(t){e.$set(e.ruleForm,"sid",e._n(t))},expression:"ruleForm.sid"}},[a("el-option",{attrs:{label:e.tableData[1].as,value:1}}),a("el-option",{attrs:{label:e.tableData[2].as,value:2}}),a("el-option",{attrs:{label:e.tableData[3].as,value:3}})],1)],1),a("el-form-item",{attrs:{label:"站点名称",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),a("el-form-item",{attrs:{label:"站点标题",prop:"title"}},[a("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),a("el-form-item",{attrs:{label:"站点域名",prop:"qz"}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"二级域名","on-key-up":"value=value.replace(/[\\W]/g,'')",onkeyup:"value=value.replace(/[\\u4e00-\\u9fa5]/ig,'')"},model:{value:e.ruleForm.qz,callback:function(t){e.$set(e.ruleForm,"qz",t)},expression:"ruleForm.qz"}},[a("el-select",{staticStyle:{width:"130px"},attrs:{slot:"append"},slot:"append",model:{value:e.ruleForm.main_domain,callback:function(t){e.$set(e.ruleForm,"main_domain",t)},expression:"ruleForm.main_domain"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.label}})})),1)],1),a("div",{staticStyle:{color:"#999","line-height":"24px"}},[a("div",[e._v("注: 1. 必须填写二级域名,必须选择一级域名,缺一不可")]),a("div",[e._v("2. 二级域名不允许输入符号,只允许输入字母和数字 如: baidu")]),a("div",[e._v("3. 需要点击保存,分站开通成功,才能点击上面分站链接打开")]),a("div",[e._v("4. 购买之后域名解析时间, 几分钟到数小时不等, 由购买域名的运营商决定")])])],1),a("el-form-item",{attrs:{label:"购买时长",prop:"num"}},[a("el-input-number",{attrs:{min:1,label:"购买时长",size:"small"},model:{value:e.ruleForm.num,callback:function(t){e.$set(e.ruleForm,"num",t)},expression:"ruleForm.num"}}),e._v(" 年 ")],1),a("el-form-item",{attrs:{label:"总价:"}},e._l(e.tableData,(function(t,i){return a("div",{key:i},[parseInt(i)===e.ruleForm.sid?a("span",[a("span",{staticStyle:{color:"#ee0a24","font-size":"18px","font-weight":"600"}},[e._v("¥"+e._s(t.price*e.ruleForm.num)+"元")])]):e._e()])})),0)],1)],1)]),a("popup",{attrs:{"dialog-title":e.dialogTitle1,visible:e.dialogVisible1,"popup-width":"500px"},on:{"update:visible":function(t){e.dialogVisible1=t},resetPopupData:function(t){return e.resetPopupData("ruleForm1")},submitPopupData:function(t){return e.submitPopupData1("ruleForm1")},handleClose:function(t){return e.resetPopupData("ruleForm1")}}},[a("div",[a("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"请仔细核对信息,再进行操作!",type:"warning","show-icon":"",closable:!1}}),a("el-form",{ref:"ruleForm1",attrs:{model:e.ruleForm1,rules:e.rules1,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"站点版本",prop:"sid"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择站点版本"},on:{change:e.calculate},model:{value:e.ruleForm1.sid,callback:function(t){e.$set(e.ruleForm1,"sid",e._n(t))},expression:"ruleForm1.sid"}},[e.dataInfo<1?a("el-option",{attrs:{label:e.tableData[1].as,value:1}}):e._e(),e.dataInfo<2?a("el-option",{attrs:{label:e.tableData[2].as,value:2}}):e._e(),e.dataInfo<3?a("el-option",{attrs:{label:e.tableData[3].as,value:3}}):e._e()],1)],1),a("el-form-item",{attrs:{label:"补差价: "}},[0<(e.isprice/31536e3*(e.dataList.expire_time-(new Date).getTime()/1e3).toFixed(0)).toFixed(6)?a("span",[a("span",{staticStyle:{color:"#ee0a24","font-weight":"600","font-size":"18px"}},[e._v("¥"+e._s((e.isprice/31536e3*(e.dataList.expire_time-(new Date).getTime()/1e3).toFixed(0)).toFixed(2))+"元")])]):e._e()])],1)],1)]),a("popup",{attrs:{"dialog-title":e.dialogTitle2,visible:e.dialogVisible2,"popup-width":"500px"},on:{"update:visible":function(t){e.dialogVisible2=t},resetPopupData:function(t){return e.resetPopupData("ruleForm2")},submitPopupData:function(t){return e.submitPopupData2("ruleForm2")},handleClose:function(t){return e.resetPopupData("ruleForm2")}}},[a("div",[a("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"请仔细核对信息,再进行操作!",type:"warning","show-icon":"",closable:!1}}),a("el-form",{ref:"ruleForm2",attrs:{model:e.ruleForm2,rules:e.rules2,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"续费时长",prop:"num"}},[a("el-input-number",{attrs:{min:1,label:"续费时长",size:"small"},model:{value:e.ruleForm2.num,callback:function(t){e.$set(e.ruleForm2,"num",t)},expression:"ruleForm2.num"}}),e._v(" 年 ")],1),a("el-form-item",{attrs:{label:"总价: "}},e._l(e.tableData,(function(t,i){return a("div",{key:i},[parseInt(i)===e.dataList.version?a("span",[a("span",{staticStyle:{color:"#ee0a24","font-size":"18px","font-weight":"600"}},[e._v("¥"+e._s(t.price*e.ruleForm2.num)+"元")])]):e._e()])})),0)],1)],1)])],1)}),[],!1,null,null,null);t.default=s.exports},3249:function(e,t,a){e.exports=a.p+"static/img/conbg.c245df21.png"},"5c83":function(e,t,a){},d0a5:function(e,t,a){"use strict";var i=a("5c83");a.n(i).a},db01:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB5QAAABACAYAAADVqEtuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADNklEQVR4nO3Z0U3DMBRAUWBB9t+AJVAYoLeCpnVih3O++CB+sVvJUu/799fn9vaQB/99l19mvOQVJtjHrDNulhy9j0XP6dkZu15p5D4mPKO9M4aOudA5DV9ikX2cPuPO+i8de4VzGjTj8DvviBkT7eGpV5loH9PO2MaP+E/f16cenXwfs89Y7M7bVvss7i612D5Om+HOm2LGdvPHyCGLrv+CGX96fIF9zDhjyLgLntOwpRbbx6wz/CZ/zIxD7rwrzNi57kOPrXw+J89Y8t5b5LM48Tf5j2ErAwAAAAAAALA0QRkAAAAAAACAJCgDAAAAAAAAkARlAAAAAAAAAJKgDAAAAAAAAEASlAEAAAAAAABIgjIAAAAAAAAASVAGAAAAAAAAIAnKAAAAAAAAACRBGQAAAAAAAIAkKAMAAAAAAACQBGUAAAAAAAAAkqAMAAAAAAAAQBKUAQAAAAAAAEiCMgAAAAAAAABJUAYAAAAAAAAgCcoAAAAAAAAAJEEZAAAAAAAAgCQoAwAAAAAAAJAEZQAAAAAAAACSoAwAAAAAAABAEpQBAAAAAAAASIIyAAAAAAAAAElQBgAAAAAAACAJygAAAAAAAAAkQRkAAAAAAACAJCgDAAAAAAAAkARlAAAAAAAAAJKgDAAAAAAAAEASlAEAAAAAAABIgjIAAAAAAAAASVAGAAAAAAAAIAnKAAAAAAAAACRBGQAAAAAAAIAkKAMAAAAAAACQBGUAAAAAAAAAkqAMAAAAAAAAQBKUAQAAAAAAAEiCMgAAAAAAAABJUAYAAAAAAAAgCcoAAAAAAAAAJEEZAAAAAAAAgCQoAwAAAAAAAJAEZQAAAAAAAACSoAwAAAAAAABAEpQBAAAAAAAASIIyAAAAAAAAAElQBgAAAAAAACAJygAAAAAAAAAkQRkAAAAAAACAJCgDAAAAAAAAkARlAAAAAAAAAJKgDAAAAAAAAEASlAEAAAAAAABIgjIAAAAAAAAASVAGAAAAAAAAIAnKAAAAAAAAACRBGQAAAAAAAIAkKAMAAAAAAACQBGUAAAAAAAAAkqAMAAAAAAAAQBKUAQAAAAAAAEiCMgAAAAAAAADpB1i6aE6XPptLAAAAAElFTkSuQmCC"},f5f4:function(e,t,a){var i={"./blue/conbg.png":"3249","./yellow/conbg.png":"db01"};function s(e){return e=l(e),a(e)}function l(e){if(a.o(i,e))return i[e];throw(e=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",e}s.keys=function(){return Object.keys(i)},s.resolve=l,(e.exports=s).id="f5f4"}}]);