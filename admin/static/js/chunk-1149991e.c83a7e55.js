(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1149991e"],{1169:function(e,t,a){var i=a("2d95");e.exports=Array.isArray||function(e){return"Array"==i(e)}},"1c4c":function(e,t,a){"use strict";var i=a("9b43"),r=a("5ca1"),o=a("4bf8"),n=a("1fa8"),s=a("33a4"),l=a("9def"),c=a("f1ae"),d=a("27ee");r(r.S+r.F*!a("5cc5")((function(e){Array.from(e)})),"Array",{from:function(e){var t,a,r,u,m=o(e),_="function"==typeof this?this:Array,f=arguments.length,p=f>1?arguments[1]:void 0,v=void 0!==p,h=0,b=d(m);if(v&&(p=i(p,f>2?arguments[2]:void 0,2)),void 0==b||_==Array&&s(b))for(t=l(m.length),a=new _(t);t>h;h++)c(a,h,v?p(m[h],h):m[h]);else for(u=b.call(m),a=new _;!(r=u.next()).done;h++)c(a,h,v?n(u,p,[r.value,h],!0):r.value);return a.length=h,a}})},"37c8":function(e,t,a){t.f=a("2b4c")},"386d":function(e,t,a){"use strict";var i=a("cb7c"),r=a("83a1"),o=a("5f1b");a("214f")("search",1,(function(e,t,a,n){return[function(a){var i=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,i):new RegExp(a)[t](String(i))},function(e){var t=n(a,e,this);if(t.done)return t.value;var s=i(e),l=String(this),c=s.lastIndex;r(c,0)||(s.lastIndex=0);var d=o(s,l);return r(s.lastIndex,c)||(s.lastIndex=c),null===d?-1:d.index}]}))},"3a72":function(e,t,a){var i=a("7726"),r=a("8378"),o=a("2d00"),n=a("37c8"),s=a("86cc").f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:n.f(e)})}},"5df3":function(e,t,a){"use strict";var i=a("02f4")(!0);a("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=i(t,a),this._i+=e.length,{value:e,done:!1})}))},"67ab":function(e,t,a){var i=a("ca5a")("meta"),r=a("d3f4"),o=a("69a8"),n=a("86cc").f,s=0,l=Object.isExtensible||function(){return!0},c=!a("79e5")((function(){return l(Object.preventExtensions({}))})),d=function(e){n(e,i,{value:{i:"O"+ ++s,w:{}}})},u=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!l(e))return"F";if(!t)return"E";d(e)}return e[i].i},m=function(e,t){if(!o(e,i)){if(!l(e))return!0;if(!t)return!1;d(e)}return e[i].w},_=function(e){return c&&f.NEED&&l(e)&&!o(e,i)&&d(e),e},f=e.exports={KEY:i,NEED:!1,fastKey:u,getWeak:m,onFreeze:_}},"7bbc":function(e,t,a){var i=a("6821"),r=a("9093").f,o={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return r(e)}catch(t){return n.slice()}};e.exports.f=function(e){return n&&"[object Window]"==o.call(e)?s(e):r(i(e))}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"8a81":function(e,t,a){"use strict";var i=a("7726"),r=a("69a8"),o=a("9e1e"),n=a("5ca1"),s=a("2aba"),l=a("67ab").KEY,c=a("79e5"),d=a("5537"),u=a("7f20"),m=a("ca5a"),_=a("2b4c"),f=a("37c8"),p=a("3a72"),v=a("d4c0"),h=a("1169"),b=a("cb7c"),g=a("d3f4"),y=a("4bf8"),w=a("6821"),F=a("6a99"),x=a("4630"),k=a("2aeb"),I=a("7bbc"),q=a("11e9"),S=a("2621"),C=a("86cc"),$=a("0d58"),O=q.f,T=C.f,z=I.f,D=i.Symbol,E=i.JSON,j=E&&E.stringify,A="prototype",P=_("_hidden"),V=_("toPrimitive"),L={}.propertyIsEnumerable,N=d("symbol-registry"),U=d("symbols"),M=d("op-symbols"),J=Object[A],R="function"==typeof D&&!!S.f,B=i.QObject,K=!B||!B[A]||!B[A].findChild,W=o&&c((function(){return 7!=k(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(e,t,a){var i=O(J,t);i&&delete J[t],T(e,t,a),i&&e!==J&&T(J,t,i)}:T,Y=function(e){var t=U[e]=k(D[A]);return t._k=e,t},G=R&&"symbol"==typeof D.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof D},Q=function(e,t,a){return e===J&&Q(M,t,a),b(e),t=F(t,!0),b(a),r(U,t)?(a.enumerable?(r(e,P)&&e[P][t]&&(e[P][t]=!1),a=k(a,{enumerable:x(0,!1)})):(r(e,P)||T(e,P,x(1,{})),e[P][t]=!0),W(e,t,a)):T(e,t,a)},H=function(e,t){b(e);var a,i=v(t=w(t)),r=0,o=i.length;while(o>r)Q(e,a=i[r++],t[a]);return e},X=function(e,t){return void 0===t?k(e):H(k(e),t)},Z=function(e){var t=L.call(this,e=F(e,!0));return!(this===J&&r(U,e)&&!r(M,e))&&(!(t||!r(this,e)||!r(U,e)||r(this,P)&&this[P][e])||t)},ee=function(e,t){if(e=w(e),t=F(t,!0),e!==J||!r(U,t)||r(M,t)){var a=O(e,t);return!a||!r(U,t)||r(e,P)&&e[P][t]||(a.enumerable=!0),a}},te=function(e){var t,a=z(w(e)),i=[],o=0;while(a.length>o)r(U,t=a[o++])||t==P||t==l||i.push(t);return i},ae=function(e){var t,a=e===J,i=z(a?M:w(e)),o=[],n=0;while(i.length>n)!r(U,t=i[n++])||a&&!r(J,t)||o.push(U[t]);return o};R||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(a){this===J&&t.call(M,a),r(this,P)&&r(this[P],e)&&(this[P][e]=!1),W(this,e,x(1,a))};return o&&K&&W(J,e,{configurable:!0,set:t}),Y(e)},s(D[A],"toString",(function(){return this._k})),q.f=ee,C.f=Q,a("9093").f=I.f=te,a("52a7").f=Z,S.f=ae,o&&!a("2d00")&&s(J,"propertyIsEnumerable",Z,!0),f.f=function(e){return Y(_(e))}),n(n.G+n.W+n.F*!R,{Symbol:D});for(var ie="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ie.length>re;)_(ie[re++]);for(var oe=$(_.store),ne=0;oe.length>ne;)p(oe[ne++]);n(n.S+n.F*!R,"Symbol",{for:function(e){return r(N,e+="")?N[e]:N[e]=D(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),n(n.S+n.F*!R,"Object",{create:X,defineProperty:Q,defineProperties:H,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ae});var se=c((function(){S.f(1)}));n(n.S+n.F*se,"Object",{getOwnPropertySymbols:function(e){return S.f(y(e))}}),E&&n(n.S+n.F*(!R||c((function(){var e=D();return"[null]"!=j([e])||"{}"!=j({a:e})||"{}"!=j(Object(e))}))),"JSON",{stringify:function(e){var t,a,i=[e],r=1;while(arguments.length>r)i.push(arguments[r++]);if(a=t=i[1],(g(t)||void 0!==e)&&!G(e))return h(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!G(t))return t}),i[1]=t,j.apply(E,i)}}),D[A][V]||a("32e9")(D[A],V,D[A].valueOf),u(D,"Symbol"),u(Math,"Math",!0),u(i.JSON,"JSON",!0)},"9c4a":function(e,t,a){"use strict";var i=a("ac96"),r=a.n(i);r.a},abfa:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pad_5"},[a("div",{staticClass:"query_fields pad_b_no"},[a("el-form",{ref:"queryForm",staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"70px",model:e.queryForm,size:"mini"}},[a("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"请输入昵称"},model:{value:e.queryForm.nickname,callback:function(t){e.$set(e.queryForm,"nickname",t)},expression:"queryForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"会员状态",prop:"memberType"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"请选择会员状态"},on:{change:function(t){return e.changeOption_vip(t)}},model:{value:e.queryForm.memberType,callback:function(t){e.$set(e.queryForm,"memberType",t)},expression:"queryForm.memberType"}},e._l(e.queryForm.memberTypes,(function(e,t){return a("el-option",{key:t,attrs:{label:e.txt,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"性别",prop:"sex"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"请选择性别"},model:{value:e.queryForm.sex,callback:function(t){e.$set(e.queryForm,"sex",t)},expression:"queryForm.sex"}},e._l(e.queryForm.sexs,(function(e,t){return a("el-option",{key:t,attrs:{label:e.txt,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"所属机构",prop:"agent_name"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"所属机构"},model:{value:e.queryForm.agent_name,callback:function(t){e.$set(e.queryForm,"agent_name",t)},expression:"queryForm.agent_name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"推荐人",prop:"up_customname"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"推荐人"},model:{value:e.queryForm.up_customname,callback:function(t){e.$set(e.queryForm,"up_customname",t)},expression:"queryForm.up_customname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户ID",prop:"customid"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"请输入用户ID"},model:{value:e.queryForm.customid,callback:function(t){e.$set(e.queryForm,"customid",t)},expression:"queryForm.customid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"手机号"},model:{value:e.queryForm.phone,callback:function(t){e.$set(e.queryForm,"phone",t)},expression:"queryForm.phone"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.queryData}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.resetData("queryForm")}}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handle_refresh}},[e._v("刷新")])],1)],1)],1),e._v(" "),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"customid",label:"用户ID",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"昵称","show-overflow-tooltip":!0,width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"agent_name",label:"所属机构","show-overflow-tooltip":!0,width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"推荐人",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_detail(t.row,"up_customid")}}},[e._v(e._s(t.row.up_customname))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"推荐人上级",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_detail(t.row,"grand_customid")}}},[e._v(e._s(t.row.grand_customname))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"是否会员",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.memberType?a("span",[e._v("会员")]):2==t.row.memberType?a("span",[e._v("非会员")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"状态",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.custom_status?a("span",[e._v("正常")]):2==t.row.custom_status?a("span",[e._v("异常")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"是否实名",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.real_identity_status?a("span",[e._v("已实名")]):0==t.row.real_identity_status?a("span",[e._v("未实名")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"活体状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.face_identity_status?a("span",[e._v("未认证")]):1==t.row.face_identity_status?a("span",[e._v("已认证")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"认证类别",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.authentication_type?a("span",[e._v("系统认证")]):1==t.row.authentication_type?a("span",[e._v("人工认证")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"角色",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.custom_type?a("span",[e._v("普通客户")]):1==t.row.custom_type?a("span",[e._v("合伙人")]):2==t.row.custom_type?a("span",[e._v("业务员")]):3==t.row.custom_type?a("span",[e._v("角落客服")]):4==t.row.custom_type?a("span",[e._v("氛围号")]):5==t.row.custom_type?a("span",[e._v("机构代理")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"性别",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.sex?a("span",[e._v("男")]):e._e(),e._v(" "),2==t.row.sex?a("span",[e._v("女")]):e._e(),e._v(" "),0==t.row.sex?a("span",[e._v("未知")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_detail(t.row,"customid")}}},[e._v("详情")]),e._v(" "),1==e.roleId||7==e.roleId?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_vip(t.row)}}},[e._v("会员")]):e._e(),e._v(" "),1!=e.roleId&&7!=e.roleId||0!=t.row.authentication_type?e._e():a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_identify(t.row)}}},[e._v("人工认证")]),e._v(" "),1!=e.roleId&&7!=e.roleId||1!=t.row.authentication_type?e._e():a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_identify(t.row)}}},[e._v("取消人工")]),e._v(" "),1!=e.roleId&&7!=e.roleId||1!=t.row.custom_status?e._e():a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_frozen(t.row)}}},[e._v("冻结")]),e._v(" "),1!=e.roleId&&7!=e.roleId||2!=t.row.custom_status?e._e():a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handle_frozen(t.row)}}},[e._v("解冻")]),e._v(" "),6!=e.roleId&&14!=e.roleId||0!=t.row.custom_type?e._e():a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.modi_role(t.row)}}},[e._v("调整角色")])]}}])})],1),e._v(" "),a("div",{staticClass:"block mar_t10"},[a("el-pagination",{attrs:{"current-page":e.currentPage,total:e.pageTotal,background:"",layout:"total, prev, pager, next, jumper"},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.vip_loading,expression:"vip_loading"}],staticClass:"addUsers_dialog",attrs:{title:"设置超级会员",visible:e.dialogVisible_vip,width:"30%",center:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.dialogVisible_vip=t}}},[a("div",{staticClass:"dialogBody_addPermission"},[a("div",{staticClass:"grid-content bg-purple-dark pad_t2"},[a("el-form",{ref:"vip_form",staticClass:"valid_form",attrs:{inline:!0,model:e.vipForm,"label-width":"80px",rules:e.vip_form_rules}},[a("el-form-item",{attrs:{label:"会员时长",prop:"vip_date"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"输入会员时长"},model:{value:e.vipForm.vip_date,callback:function(t){e.$set(e.vipForm,"vip_date",e._n(t))},expression:"vipForm.vip_date"}}),e._v(" "),a("span",[e._v(" 天 ")])],1)],1)],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(t){e.dialogVisible_vip=!1}}},[e._v("关 闭")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.save_vip}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.add_loading,expression:"add_loading"}],staticClass:"addUsers_dialog",attrs:{title:e.detailForm.detailForm_title+"的信息",visible:e.dialogVisible_detail,width:"42%",center:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.dialogVisible_detail=t}}},[a("div",{staticClass:"dialogBody_addPermission"},[a("div",{staticClass:"grid-content bg-purple-dark pad_t2"},[a("el-form",{staticClass:"demo-form-inline valid_form",attrs:{inline:!0,model:e.detailForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户ID"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.customid,callback:function(t){e.$set(e.detailForm,"customid",t)},expression:"detailForm.customid"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.nickname,callback:function(t){e.$set(e.detailForm,"nickname",t)},expression:"detailForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.age,callback:function(t){e.$set(e.detailForm,"age",t)},expression:"detailForm.age"}})],1),e._v(" "),a("el-form-item",{staticClass:"wid_parent",attrs:{label:"性别"}},[[a("el-radio",{attrs:{disabled:"",label:"男"},model:{value:e.detailForm.sex,callback:function(t){e.$set(e.detailForm,"sex",t)},expression:"detailForm.sex"}},[e._v("男")]),e._v(" "),a("el-radio",{attrs:{disabled:"",label:"女"},model:{value:e.detailForm.sex,callback:function(t){e.$set(e.detailForm,"sex",t)},expression:"detailForm.sex"}},[e._v("女")])]],2),e._v(" "),a("el-form-item",{attrs:{label:"微信号"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.wechat,callback:function(t){e.$set(e.detailForm,"wechat",t)},expression:"detailForm.wechat"}})],1),e._v(" "),a("el-form-item",{staticClass:"wid_parent",attrs:{label:"地址"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.addr,callback:function(t){e.$set(e.detailForm,"addr",t)},expression:"detailForm.addr"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身高"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.tall,callback:function(t){e.$set(e.detailForm,"tall",t)},expression:"detailForm.tall"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"体重"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.weight,callback:function(t){e.$set(e.detailForm,"weight",t)},expression:"detailForm.weight"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"职业"}},[a("el-input",{staticClass:"wid_140",attrs:{disabled:!0,placeholder:""},model:{value:e.detailForm.custom_type,callback:function(t){e.$set(e.detailForm,"custom_type",t)},expression:"detailForm.custom_type"}})],1)],1)],1)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(t){e.dialogVisible_detail=!1}}},[e._v("关 闭")])],1)]),e._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.modi_rate_loading,expression:"modi_rate_loading"}],staticClass:"modi_role",attrs:{title:"调整角色",visible:e.modi_rate_dialogVisible,top:"15vh",width:"40%",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.modi_rate_dialogVisible=t}}},[a("el-form",{ref:"modi_rate_form",staticClass:"demo-ruleForm valid_form",attrs:{model:e.modi_rate_form,rules:e.modi_rate_rules,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"选择角色",prop:"custom_type"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"会员状态"},model:{value:e.modi_rate_form.custom_type,callback:function(t){e.$set(e.modi_rate_form,"custom_type",t)},expression:"modi_rate_form.custom_type"}},e._l(e.modi_rate_form.custom_types,(function(e,t){return a("el-option",{key:t,attrs:{label:e.value,value:e.id}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"打赏分成",prop:"virtual_rate"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"打赏分成"},model:{value:e.modi_rate_form.virtual_rate,callback:function(t){e.$set(e.modi_rate_form,"virtual_rate",t)},expression:"modi_rate_form.virtual_rate"}}),e._v("%\n        "),a("span",{staticStyle:{color:"green","font-size":"12px"}},[e._v("输入1-4之间的数")])],1),e._v(" "),a("el-form-item",{attrs:{label:"充值提成",prop:"recharge_bonus"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"充值提成"},model:{value:e.modi_rate_form.recharge_bonus,callback:function(t){e.$set(e.modi_rate_form,"recharge_bonus",t)},expression:"modi_rate_form.recharge_bonus"}}),e._v("%\n        "),a("span",{staticStyle:{color:"green","font-size":"12px"}},[e._v("输入1-4之间的数")])],1),e._v(" "),a("el-form-item",{attrs:{label:"开通一个月会费",prop:"active_fee_month"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"开通一个月会费"},model:{value:e.modi_rate_form.active_fee_month,callback:function(t){e.$set(e.modi_rate_form,"active_fee_month",t)},expression:"modi_rate_form.active_fee_month"}}),e._v("元\n        "),a("span",{staticStyle:{color:"green","font-size":"12px"}},[e._v("输入数字小于40")])],1),e._v(" "),a("el-form-item",{attrs:{label:"开通三个月会费",prop:"active_fee_three_month"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"开通三个月会费"},model:{value:e.modi_rate_form.active_fee_three_month,callback:function(t){e.$set(e.modi_rate_form,"active_fee_three_month",t)},expression:"modi_rate_form.active_fee_three_month"}}),e._v("元\n        "),a("span",{staticStyle:{color:"green","font-size":"12px"}},[e._v("输入数字小于80")])],1),e._v(" "),a("el-form-item",{attrs:{label:"开通六个月会费",prop:"active_fee_six_month"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"开通六个月会费"},model:{value:e.modi_rate_form.active_fee_six_month,callback:function(t){e.$set(e.modi_rate_form,"active_fee_six_month",t)},expression:"modi_rate_form.active_fee_six_month"}}),e._v("元\n        "),a("span",{staticStyle:{color:"green","font-size":"12px"}},[e._v("输入数字小于120")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.modi_rate_dialogVisible=!1}}},[e._v("关 闭")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.save_modi_role}},[e._v("确 定")])],1)],1)],1)},r=[],o=(a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("6b54"),a("7f7f"),a("386d"),a("ff82")),n=a("cf45"),s=a("61f7");function l(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=c(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n=!0,s=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return n=e.done,e},e:function(e){s=!0,o=e},f:function(){try{n||null==a.return||a.return()}finally{if(s)throw o}}}}function c(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var u={name:"customInfo",data:function(){var e=function(e,t,a){t?Object(s["i"])(t)?a():a(new Error("请输入1-4之间的正数,且小数位数不得多于一位")):a(new Error("请输入值"))},t=function(e,t,a){t?Object(s["j"])(t)?a():a(new Error("请输入0-40之间的正数")):a(new Error("请输入值"))},a=function(e,t,a){t?Object(s["k"])(t)?a():a(new Error("请输入0-80之间的正数")):a(new Error("请输入值"))},i=function(e,t,a){t?Object(s["g"])(t)?a():a(new Error("请输入0-120之间的正数")):a(new Error("请输入值"))};return{roleId:"",districtSearch:"",tableLoading:!1,tableData:[],pageTotal:100,currentPage:1,queryForm:{idcard_check_statuss:[{id:0,txt:"不需审核"},{id:1,txt:"已审核"},{id:2,txt:"需要审核"},{id:3,txt:"审核拒绝"}],idcard_check_status:"",memberTypes:[{id:1,txt:"会员"},{id:2,txt:"非会员"}],sexs:[{id:1,txt:"男"},{id:2,txt:"女"}],sex:"",nickname:"",agent_name:"",up_customname:"",times:"",startTime:"",endTime:"",customid:"",phone:"",lowMoney:"",highMoney:"",createtime:"",memberType:"",regions:"",cities:[],province_code:"",city_code:""},vipForm:{vip_date:"",customid:""},vip_form_rules:{vip_date:[{required:!0,message:"会员时长不能为空",trigger:"blur"},{type:"number",message:"会员时长必须为数字值",trigger:"blur"}]},value1:"",vip_loading:!1,dialogVisible_vip:!1,dialogVisible_detail:!1,add_loading:!1,detailForm:{detailForm_title:"",customid:"",nickname:"",age:"",sex:"",phone:"",wechat:"",province:"",city:"",addr:"",tall:"",weight:"",custom_type:"",memberType:"",email:"",custom_status:"",apple_pay:"",app_openid:"",app_logintype:""},modi_rate_dialogVisible:!1,modi_rate_loading:!1,modi_rate_form:{virtual_rate:"",recharge_bonus:"",active_fee_month:"",active_fee_three_month:"",active_fee_six_month:"",customid:"",userId:"",custom_type:"",custom_types:[{id:1,value:"合伙人"},{id:2,value:"业务员"}]},modi_rate_rules:{custom_type:[{required:!0,message:"请选择角色",trigger:"change"}],virtual_rate:[{required:!0,validator:e,trigger:"blur"}],recharge_bonus:[{required:!0,validator:e,trigger:"blur"}],active_fee_month:[{required:!0,validator:t,trigger:"blur"}],active_fee_three_month:[{required:!0,validator:a,trigger:"blur"}],active_fee_six_month:[{required:!0,validator:i,trigger:"blur"}]}}},created:function(){this.getTableDataList(1),this.roleId=this.$store.getters.roleId,this.initMap(),this.initProvinces()},methods:{getTableDataList:function(e){var t=this,a={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,customid:this.queryForm.customid,idcard_check_status:this.queryForm.idcard_check_status,nickname:this.queryForm.nickname,phone:this.queryForm.phone,pageNum:e,pageSize:10,agent_name:this.queryForm.agent_name,memberType:this.queryForm.memberType,up_customname:this.queryForm.up_customname,sex:this.queryForm.sex}};this.tableLoading=!0,this.$http.post("".concat(n["a"].baseUrl,"/customInfo/getAllCustomInfoList"),a).then((function(e){"0000"==e.data.code&&(t.tableLoading=!1,t.tableData=e.data.data.AllCustomInfoList,t.pageTotal=e.data.data.page.pageTotal)})).catch((function(e){}))},handle_identify:function(e){var t=this,a="",i="",r="";1==e.authentication_type?(a=0,i="取消人工认证",r="是否取消人工认证?"):(a=1,i="人工认证",r="是否人工认证?"),this.$confirm(r,i,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",size:"mini",center:!0}).then((function(){var i={data:{identityid:e.identityid,authentication_type:a}};t.$http.post("".concat(n["a"].baseUrl,"/identityInfo/updateCheckAuthentication"),i).then((function(e){"0000"==e.data.code?(t.m_message(e.data.msg,"success"),t.handle_refresh()):t.m_message(e.data.msg,"warning")})).catch((function(e){}))}))},handle_vip:function(e){this.dialogVisible_vip=!0,this.vipForm.customid=e.customid},save_vip:function(){var e=this;if(this.m_valid_addForm("vip_form")){var t={data:{date:this.vipForm.vip_date,customid:this.vipForm.customid}};this.vip_loading=!0,this.$http.post("".concat(n["a"].baseUrl,"/customInfo/updateMembeTime"),t).then((function(t){"0000"==t.data.code?(e.vip_loading=!1,e.m_message(t.data.msg,"success"),e.resetData("vip_form"),e.dialogVisible_vip=!1,e.handle_refresh()):(e.vip_loading=!1,e.m_message(t.data.msg,"warning"),e.resetData("vip_form"))})).catch((function(e){}))}},modi_role:function(e){this.modi_rate_dialogVisible=!0,this.modi_rate_form.customid=e.customid,6==this.roleId?this.modi_rate_form.custom_types=[{id:1,value:"合伙人"},{id:2,value:"业务员"}]:14==this.roleId&&(this.modi_rate_form.custom_types=[{id:2,value:"业务员"}])},save_modi_role:function(){var e=this;if(this.m_valid_addForm("modi_rate_form")){var t={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,customid:this.modi_rate_form.customid,custom_type:this.modi_rate_form.custom_type,virtual_rate:this.modi_rate_form.virtual_rate,recharge_bonus:this.modi_rate_form.recharge_bonus,active_fee_month:100*this.modi_rate_form.active_fee_month,active_fee_three_month:100*this.modi_rate_form.active_fee_three_month,active_fee_six_month:100*this.modi_rate_form.active_fee_six_month}};this.modi_rate_loading=!0,this.$http.post("".concat(n["a"].baseUrl,"/agent/saveParterOrSalerOrAgent"),t).then((function(t){"0000"==t.data.code?(e.modi_rate_loading=!1,e.m_message(t.data.msg,"success"),e.modi_rate_dialogVisible=!1,e.handle_refresh()):(e.modi_rate_loading=!1,e.m_message(t.data.msg,"warning"))})).catch((function(e){}))}},queryData:function(){this.queryForm.times.length>0&&(this.queryForm.startTime=this.queryForm.times[0],this.queryForm.endTime=this.queryForm.times[1]);this.queryForm.memberType,this.queryForm.nickname;this.getTableDataList(1),this.currentPage=1},resetData:function(e){this.$refs[e].resetFields(),this.queryForm.startTime="",this.queryForm.endTime=""},handle_refresh:function(){this.getTableDataList(this.currentPage)},handle_frozen:function(e){var t=this,a=1==e.custom_status?"冻结成功":"解冻成功",i={data:{signInUserId:this.$store.getters.userId,signInRole:this.$store.getters.roleId,custom_status:1==e.custom_status?2:1,customid:e.customid}};this.tableLoading=!0,this.$http.post("".concat(n["a"].baseUrl,"/customInfo/updateStatus"),i).then((function(e){"0000"==e.data.code&&(t.tableLoading=!1,t.m_message(a,"success"),t.handle_refresh())})).catch((function(e){}))},handle_detail:function(e,t){var a=this,i={data:{signInUserId:this.$store.getters.userId,signInRole:this.$store.getters.roleId,customid:e.customid}};switch(t){case"up_customid":this.detailForm.detailForm_title=e.up_customname,i.data.customid=e.up_customid;break;case"grand_customid":this.detailForm.detailForm_title=e.grand_customname,i.data.customid=e.grand_customid;break;default:this.detailForm.detailForm_title=e.nickname,i.data.customid=e.customid;break}this.dialogVisible_detail=!0,this.add_loading=!0,this.$http.post("".concat(n["a"].baseUrl,"/customInfo/findCustomInfoDetails"),i).then((function(e){if("0000"==e.data.code){var t=e.data.data.customInfo;switch(a.detailForm.customid=t.customid,a.detailForm.nickname=t.nickname,a.detailForm.age=t.age,a.detailForm.sex=1==t.sex?"男":"女",a.detailForm.wechat=t.wechat,a.detailForm.addr=t.province+t.city,a.detailForm.tall=t.tall,a.detailForm.weight=t.weight,t.custom_type){case 0:a.detailForm.custom_type="普通客户";break;case 1:a.detailForm.custom_type="兼职向导";break;case 2:a.detailForm.custom_type="全职向导";break;case 3:a.detailForm.custom_type="咨询人员";break;case 4:a.detailForm.custom_type="校园代理";break}a.add_loading=!1}})).catch((function(e){}))},changeOption_vip:function(e){},handleCurrentChange:function(e){this.currentPage=e,this.getTableDataList(e)},m_valid_addForm:function(e){var t=!1;return this.$refs[e].validate((function(e){return e?(t=!0,!0):(t=!1,!1)})),t},m_message:function(e,t){this.$message({message:e,type:t})},changeOption_province:function(e){this.queryForm.province_param={adcode:e,txt:o["a"].province_list[e]},this.queryForm.cities=[],this.queryForm.city_code="",this.queryCity(o["a"].province_list[e],"queryForm")},queryCity:function(e,t){var a=this;this.districtSearch.search(e,(function(e,i){var r,o=l(i.districtList[0].districtList);try{for(o.s();!(r=o.n()).done;){var n=r.value;a[t].cities.push({adcode:n.adcode,city:n.name})}}catch(s){o.e(s)}finally{o.f()}}))},changeOption_city:function(e){},initProvinces:function(){var e=[];for(var t in o["a"].province_list)e.push({adcode:t,province:o["a"].province_list[t]});this.queryForm.regions=e},initMap:function(){var e=this;AMap.plugin("AMap.DistrictSearch",(function(){e.districtSearch=new AMap.DistrictSearch({level:"city",subdistrict:1})}))}}},m=u,_=(a("9c4a"),a("2877")),f=Object(_["a"])(m,i,r,!1,null,null,null);t["default"]=f.exports},ac4d:function(e,t,a){a("3a72")("asyncIterator")},ac96:function(e,t,a){},d4c0:function(e,t,a){var i=a("0d58"),r=a("2621"),o=a("52a7");e.exports=function(e){var t=i(e),a=r.f;if(a){var n,s=a(e),l=o.f,c=0;while(s.length>c)l.call(e,n=s[c++])&&t.push(n)}return t}},ff82:function(e,t,a){"use strict";t["a"]={province_list:{11e4:"北京市",12e4:"天津市",13e4:"河北省",14e4:"山西省",15e4:"内蒙古自治区",21e4:"辽宁省",22e4:"吉林省",23e4:"黑龙江省",31e4:"上海市",32e4:"江苏省",33e4:"浙江省",34e4:"安徽省",35e4:"福建省",36e4:"江西省",37e4:"山东省",41e4:"河南省",42e4:"湖北省",43e4:"湖南省",44e4:"广东省",45e4:"广西壮族自治区",46e4:"海南省",5e5:"重庆市",51e4:"四川省",52e4:"贵州省",53e4:"云南省",54e4:"西藏自治区",61e4:"陕西省",62e4:"甘肃省",63e4:"青海省",64e4:"宁夏回族自治区",65e4:"新疆维吾尔自治区",71e4:"台湾省",81e4:"香港特别行政区",82e4:"澳门特别行政区"},adcode_list:{"上海市":"310000","云南省":"530000","内蒙古自治区":"150000","北京市":"110000","台湾省":"710000","吉林省":"220000","四川省":"510000","天津市":"120000","宁夏回族自治区":"640000","安徽省":"340000","山东省":"370000","山西省":"140000","广东省":"440000","广西壮族自治区":"450000","新疆维吾尔自治区":"650000","江苏省":"320000","江西省":"360000","河北省":"130000","河南省":"410000","浙江省":"330000","海南省":"460000","湖北省":"420000","湖南省":"430000","澳门特别行政区":"820000","甘肃省":"620000","福建省":"350000","西藏自治区":"540000","贵州省":"520000","辽宁省":"210000","重庆市":"500000","陕西省":"610000","青海省":"630000","香港特别行政区":"810000","黑龙江省":"230000"}}}}]);