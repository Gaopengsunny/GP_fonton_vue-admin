(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dba57b5"],{1169:function(t,e,a){var r=a("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"1c4c":function(t,e,a){"use strict";var r=a("9b43"),n=a("5ca1"),o=a("4bf8"),i=a("1fa8"),l=a("33a4"),c=a("9def"),s=a("f1ae"),u=a("27ee");n(n.S+n.F*!a("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,a,n,d,f=o(t),_="function"==typeof this?this:Array,m=arguments.length,p=m>1?arguments[1]:void 0,v=void 0!==p,h=0,b=u(f);if(v&&(p=r(p,m>2?arguments[2]:void 0,2)),void 0==b||_==Array&&l(b))for(e=c(f.length),a=new _(e);e>h;h++)s(a,h,v?p(f[h],h):f[h]);else for(d=b.call(f),a=new _;!(n=d.next()).done;h++)s(a,h,v?i(d,p,[n.value,h],!0):n.value);return a.length=h,a}})},"37c8":function(t,e,a){e.f=a("2b4c")},"386d":function(t,e,a){"use strict";var r=a("cb7c"),n=a("83a1"),o=a("5f1b");a("214f")("search",1,(function(t,e,a,i){return[function(a){var r=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,r):new RegExp(a)[e](String(r))},function(t){var e=i(a,t,this);if(e.done)return e.value;var l=r(t),c=String(this),s=l.lastIndex;n(s,0)||(l.lastIndex=0);var u=o(l,c);return n(l.lastIndex,s)||(l.lastIndex=s),null===u?-1:u.index}]}))},"3a72":function(t,e,a){var r=a("7726"),n=a("8378"),o=a("2d00"),i=a("37c8"),l=a("86cc").f;t.exports=function(t){var e=n.Symbol||(n.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||l(e,t,{value:i.f(t)})}},"5df3":function(t,e,a){"use strict";var r=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=r(e,a),this._i+=t.length,{value:t,done:!1})}))},"67ab":function(t,e,a){var r=a("ca5a")("meta"),n=a("d3f4"),o=a("69a8"),i=a("86cc").f,l=0,c=Object.isExtensible||function(){return!0},s=!a("79e5")((function(){return c(Object.preventExtensions({}))})),u=function(t){i(t,r,{value:{i:"O"+ ++l,w:{}}})},d=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},f=function(t,e){if(!o(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},_=function(t){return s&&m.NEED&&c(t)&&!o(t,r)&&u(t),t},m=t.exports={KEY:r,NEED:!1,fastKey:d,getWeak:f,onFreeze:_}},"7bbc":function(t,e,a){var r=a("6821"),n=a("9093").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?l(t):n(r(t))}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8a81":function(t,e,a){"use strict";var r=a("7726"),n=a("69a8"),o=a("9e1e"),i=a("5ca1"),l=a("2aba"),c=a("67ab").KEY,s=a("79e5"),u=a("5537"),d=a("7f20"),f=a("ca5a"),_=a("2b4c"),m=a("37c8"),p=a("3a72"),v=a("d4c0"),h=a("1169"),b=a("cb7c"),g=a("d3f4"),y=a("4bf8"),w=a("6821"),k=a("6a99"),x=a("4630"),S=a("2aeb"),C=a("7bbc"),F=a("11e9"),q=a("2621"),I=a("86cc"),$=a("0d58"),O=F.f,A=I.f,L=C.f,P=r.Symbol,j=r.JSON,D=j&&j.stringify,E="prototype",T=_("_hidden"),N=_("toPrimitive"),z={}.propertyIsEnumerable,M=u("symbol-registry"),J=u("symbols"),U=u("op-symbols"),V=Object[E],B="function"==typeof P&&!!q.f,K=r.QObject,R=!K||!K[E]||!K[E].findChild,W=o&&s((function(){return 7!=S(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=O(V,e);r&&delete V[e],A(t,e,a),r&&t!==V&&A(V,e,r)}:A,Y=function(t){var e=J[t]=S(P[E]);return e._k=t,e},G=B&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},Q=function(t,e,a){return t===V&&Q(U,e,a),b(t),e=k(e,!0),b(a),n(J,e)?(a.enumerable?(n(t,T)&&t[T][e]&&(t[T][e]=!1),a=S(a,{enumerable:x(0,!1)})):(n(t,T)||A(t,T,x(1,{})),t[T][e]=!0),W(t,e,a)):A(t,e,a)},H=function(t,e){b(t);var a,r=v(e=w(e)),n=0,o=r.length;while(o>n)Q(t,a=r[n++],e[a]);return t},X=function(t,e){return void 0===e?S(t):H(S(t),e)},Z=function(t){var e=z.call(this,t=k(t,!0));return!(this===V&&n(J,t)&&!n(U,t))&&(!(e||!n(this,t)||!n(J,t)||n(this,T)&&this[T][t])||e)},tt=function(t,e){if(t=w(t),e=k(e,!0),t!==V||!n(J,e)||n(U,e)){var a=O(t,e);return!a||!n(J,e)||n(t,T)&&t[T][e]||(a.enumerable=!0),a}},et=function(t){var e,a=L(w(t)),r=[],o=0;while(a.length>o)n(J,e=a[o++])||e==T||e==c||r.push(e);return r},at=function(t){var e,a=t===V,r=L(a?U:w(t)),o=[],i=0;while(r.length>i)!n(J,e=r[i++])||a&&!n(V,e)||o.push(J[e]);return o};B||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),e=function(a){this===V&&e.call(U,a),n(this,T)&&n(this[T],t)&&(this[T][t]=!1),W(this,t,x(1,a))};return o&&R&&W(V,t,{configurable:!0,set:e}),Y(t)},l(P[E],"toString",(function(){return this._k})),F.f=tt,I.f=Q,a("9093").f=C.f=et,a("52a7").f=Z,q.f=at,o&&!a("2d00")&&l(V,"propertyIsEnumerable",Z,!0),m.f=function(t){return Y(_(t))}),i(i.G+i.W+i.F*!B,{Symbol:P});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;rt.length>nt;)_(rt[nt++]);for(var ot=$(_.store),it=0;ot.length>it;)p(ot[it++]);i(i.S+i.F*!B,"Symbol",{for:function(t){return n(M,t+="")?M[t]:M[t]=P(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){R=!0},useSimple:function(){R=!1}}),i(i.S+i.F*!B,"Object",{create:X,defineProperty:Q,defineProperties:H,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:at});var lt=s((function(){q.f(1)}));i(i.S+i.F*lt,"Object",{getOwnPropertySymbols:function(t){return q.f(y(t))}}),j&&i(i.S+i.F*(!B||s((function(){var t=P();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}))),"JSON",{stringify:function(t){var e,a,r=[t],n=1;while(arguments.length>n)r.push(arguments[n++]);if(a=e=r[1],(g(e)||void 0!==t)&&!G(t))return h(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!G(e))return e}),r[1]=e,D.apply(j,r)}}),P[E][N]||a("32e9")(P[E],N,P[E].valueOf),d(P,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},ac4d:function(t,e,a){a("3a72")("asyncIterator")},d4c0:function(t,e,a){var r=a("0d58"),n=a("2621"),o=a("52a7");t.exports=function(t){var e=r(t),a=n.f;if(a){var i,l=a(t),c=o.f,s=0;while(l.length>s)c.call(t,i=l[s++])&&e.push(i)}return e}},fb01:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pad_5"},[a("div",{staticClass:"query_fields pad_b_no"},[a("el-form",{ref:"queryForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:t.queryForm,size:"mini"}},[a("el-form-item",{attrs:{label:"业务地区"}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"province_code"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择省"},on:{change:function(e){return t.changeOption_province(e)}},model:{value:t.queryForm.province_code,callback:function(e){t.$set(t.queryForm,"province_code",e)},expression:"queryForm.province_code"}},t._l(t.queryForm.regions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.province,value:t.adcode}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"city_code"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择市"},model:{value:t.queryForm.city_code,callback:function(e){t.$set(t.queryForm,"city_code",e)},expression:"queryForm.city_code"}},t._l(t.queryForm.cities,(function(t,e){return a("el-option",{key:e,attrs:{label:t.city,value:t.adcode}})})),1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"所属机构",prop:"agent_name"}},[a("el-input",{staticClass:"wid_140",attrs:{placeholder:"请输入机构名称"},model:{value:t.queryForm.agent_name,callback:function(e){t.$set(t.queryForm,"agent_name",e)},expression:"queryForm.agent_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"机构状态",prop:"agent_status"}},[a("el-select",{staticClass:"wid_140",attrs:{placeholder:"选择机构状态"},model:{value:t.queryForm.agent_status,callback:function(e){t.$set(t.queryForm,"agent_status",e)},expression:"queryForm.agent_status"}},t._l(t.queryForm.agent_statuss,(function(t,e){return a("el-option",{key:e,attrs:{label:t.txt,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.queryData}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(e){return t.resetData("queryForm")}}},[t._v("重置")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handle_refresh}},[t._v("刷新")])],1)],1)],1),t._v(" "),a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"agent_name",label:"机构名称",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"charger",label:"联系人",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"联系电话",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"业务地区",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.province+e.row.city+e.row.area)+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"up_agent_name",label:"所属机构",width:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"贝壳分成",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.virtual_rate+"%")+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"出行分成",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.account_rate+"%")+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"机构状态",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.agent_status?a("span",[t._v("可用")]):t._e(),t._v(" "),2==e.row.agent_status?a("span",[t._v("冻结")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"操作",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handle_detail(e.row)}}},[t._v("详情")])]}}])})],1),t._v(" "),a("div",{staticClass:"block mar_t10"},[a("el-pagination",{attrs:{"current-page":t.currentPage,total:t.pageTotal,background:"",layout:"total, prev, pager, next, jumper"},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.detail_loading,expression:"detail_loading"}],staticClass:"agent_detail",attrs:{title:"机构详情",visible:t.detail_dialogVisible,width:"50%",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(e){t.detail_dialogVisible=e}}},[a("el-form",{staticClass:"demo-form-inline ",attrs:{inline:!0,model:t.detail_form,"label-width":"68px",disabled:""}},[a("el-form-item",{attrs:{label:"机构名称",prop:"agent_name"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"审批人"},model:{value:t.detail_form.agent_name,callback:function(e){t.$set(t.detail_form,"agent_name",e)},expression:"detail_form.agent_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属机构",prop:"up_agent_name"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:t.detail_form.up_agent_name,callback:function(e){t.$set(t.detail_form,"up_agent_name",e)},expression:"detail_form.up_agent_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"机构编号",prop:"agentid"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:""},model:{value:t.detail_form.agentid,callback:function(e){t.$set(t.detail_form,"agentid",e)},expression:"detail_form.agentid"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"负责人",prop:"charger","label-width":"68px"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"负责人"},model:{value:t.detail_form.charger,callback:function(e){t.$set(t.detail_form,"charger",e)},expression:"detail_form.charger"}})],1),t._v(" "),a("el-form-item",{staticClass:"marg_r0",attrs:{label:"业务地区"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{staticClass:"marg_b0",attrs:{prop:"province_code"}},[a("el-select",{staticClass:"wid_90",attrs:{placeholder:"选择省"},model:{value:t.detail_form.province_code,callback:function(e){t.$set(t.detail_form,"province_code",e)},expression:"detail_form.province_code"}},t._l(t.detail_form.regions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.province,value:t.adcode}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{staticClass:"marg_b0",attrs:{prop:"city_code"}},[a("el-select",{staticClass:"wid_90",attrs:{placeholder:"选择市"},model:{value:t.detail_form.city_code,callback:function(e){t.$set(t.detail_form,"city_code",e)},expression:"detail_form.city_code"}},t._l(t.detail_form.cities,(function(t,e){return a("el-option",{key:e,attrs:{label:t.city,value:t.adcode}})})),1)],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"联系地址",prop:"address"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"联系地址"},model:{value:t.detail_form.address,callback:function(e){t.$set(t.detail_form,"address",e)},expression:"detail_form.address"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"贝壳分成",prop:"virtual_rate"}},[a("el-input",{staticClass:"wid_181",attrs:{placeholder:"贝壳分成"},model:{value:t.detail_form.virtual_rate,callback:function(e){t.$set(t.detail_form,"virtual_rate",e)},expression:"detail_form.virtual_rate"}}),t._v("%\n            ")],1),t._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"联系电话"},model:{value:t.detail_form.phone,callback:function(e){t.$set(t.detail_form,"phone",e)},expression:"detail_form.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"出行分成",prop:"account_rate"}},[a("el-input",{staticClass:"wid_181",attrs:{placeholder:"出行分成"},model:{value:t.detail_form.account_rate,callback:function(e){t.$set(t.detail_form,"account_rate",e)},expression:"detail_form.account_rate"}}),t._v("%\n            ")],1),t._v(" "),a("el-form-item",{attrs:{label:"联系邮箱",prop:"email"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"联系邮箱"},model:{value:t.detail_form.email,callback:function(e){t.$set(t.detail_form,"email",e)},expression:"detail_form.email"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"合同编号",prop:"contract_no"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"合同编号"},model:{value:t.detail_form.contract_no,callback:function(e){t.$set(t.detail_form,"contract_no",e)},expression:"detail_form.contract_no"}})],1),t._v(" "),a("div"),t._v(" "),a("el-form-item",{attrs:{label:"开户名",prop:"account_user","label-width":"68px"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"开户名"},model:{value:t.detail_form.account_user,callback:function(e){t.$set(t.detail_form,"account_user",e)},expression:"detail_form.account_user"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"开户行",prop:"bank_code","label-width":"68px"}},[a("el-select",{staticClass:"wid_190",attrs:{placeholder:"开户行"},model:{value:t.detail_form.bank_code,callback:function(e){t.$set(t.detail_form,"bank_code",e)},expression:"detail_form.bank_code"}},t._l(t.detail_form.bankInfo,(function(t,e){return a("el-option",{key:e,attrs:{label:t.bankname,value:t.bankcode}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"账号",prop:"account_no","label-width":"68px"}},[a("el-input",{staticClass:"wid_180",attrs:{placeholder:"账号"},model:{value:t.detail_form.account_no,callback:function(e){t.$set(t.detail_form,"account_no",e)},expression:"detail_form.account_no"}})],1),t._v(" "),a("el-form-item",{staticClass:"marg_r0",attrs:{label:"开户地","label-width":"68px"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{staticClass:"marg_b0",attrs:{prop:"account_province_code"}},[a("el-select",{staticClass:"wid_90",attrs:{placeholder:"选择省"},model:{value:t.detail_form.account_province_code,callback:function(e){t.$set(t.detail_form,"account_province_code",e)},expression:"detail_form.account_province_code"}},t._l(t.detail_form.account_regions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.province,value:t.adcode}})})),1)],1)],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{staticClass:"marg_b0",attrs:{prop:"city_code"}},[a("el-select",{staticClass:"wid_90",attrs:{placeholder:"选择市"},model:{value:t.detail_form.account_city_code,callback:function(e){t.$set(t.detail_form,"account_city_code",e)},expression:"detail_form.account_city_code"}},t._l(t.detail_form.account_cities,(function(t,e){return a("el-option",{key:e,attrs:{label:t.city,value:t.adcode}})})),1)],1)],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.detail_dialogVisible=!1}}},[t._v("关 闭")])],1)],1)],1)},n=[],o=(a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("6b54"),a("7f7f"),a("386d"),a("ff82")),i=a("cf45");a("61f7");function l(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=c(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw o}}}}function c(t,e){if(t){if("string"===typeof t)return s(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var u={name:"subordinateAgent",data:function(){return{roleId:"",bankInfo:"",districtSearch:"",tableLoading:!1,detail_dialogVisible:!1,detail_loading:!1,tableData:[],pageTotal:100,currentPage:1,queryForm:{regions:"",cities:[],province_code:"",city_code:"",agent_name:"",agent_statuss:[{id:1,txt:"可用"},{id:2,txt:"冻结"}],agent_status:""},detail_form:{regions:[],cities:[],agentid:"",agent_name:"",up_agent_name:"",charger:"",province_code:"",city_code:"",address:"",virtual_rate:"",account_rate:"",phone:"",email:"",contract_no:"",bank_code:"",account_user:"",account_no:"",account_regions:"",account_cities:[],account_province_code:"",account_city_code:"",bankInfo:""}}},created:function(){this.roleId=this.$store.getters.roleId,this.getBankList(),this.initMap(),this.initProvinces(),this.getTableDataList(1)},methods:{getTableDataList:function(t){var e=this,a={data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,pageNum:t,pageSize:10,agent_name:this.queryForm.agent_name,province_code:this.queryForm.province_code,city_code:this.queryForm.city_code,agent_status:this.queryForm.agent_status}};this.tableLoading=!0,this.$http.post("".concat(i["a"].baseUrl,"/agent/subordinateAgentList"),a).then((function(t){"0000"==t.data.code&&(e.tableData=t.data.data.agentList,e.pageTotal=t.data.data.page.pageTotal,e.tableLoading=!1)})).catch((function(t){}))},handle_refresh:function(){this.getTableDataList(this.currentPage)},getBankList:function(){var t=this;this.$http.post("".concat(i["a"].baseUrl,"/agent/addAgent"),{data:{signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId}}).then((function(e){"0000"==e.data.code&&(t.bankInfo=t.detail_form.bankInfo=e.data.data.bankList)})).catch((function(t){}))},handle_detail:function(t){var e=this;this.detail_dialogVisible=!0,this.detail_loading=!0,this.$http.post("".concat(i["a"].baseUrl,"/agent/selectAgentInfo"),{data:{agentid:t.agentid}}).then((function(t){if("0000"==t.data.code){console.log(t);var a=t.data.data.agentInfo;e.detail_form.agentid=a.agentid,e.detail_form.agent_name=a.agent_name,e.detail_form.up_agent_name=a.up_agent_name,e.detail_form.charger=a.charger,e.detail_form.province_code=a.province_code,e.queryCity(a.province,"detail_form"),e.detail_form.city_code=a.city_code,e.detail_form.address=a.address,e.detail_form.virtual_rate=a.virtual_rate,e.detail_form.account_rate=a.account_rate,e.detail_form.phone=a.phone,e.detail_form.email=a.email,e.detail_form.contract_no=a.contract_no,e.detail_form.bank_code=a.bank_code,e.detail_form.account_user=a.account_user,e.detail_form.account_no=a.account_no,e.queryBankCity(a.account_province,"detail_form"),e.detail_form.account_province_code=a.account_pro_code,e.detail_form.account_city_code=a.account_city_code,e.detail_loading=!1}})).catch((function(t){}))},queryData:function(){this.getTableDataList(1),this.currentPage=1},resetData:function(t){this.$refs[t].resetFields()},changeOption_province:function(t){this.queryForm.province_param={adcode:t,txt:o["a"].province_list[t]},this.queryForm.cities=[],this.queryForm.city_code="",this.queryCity(o["a"].province_list[t],"queryForm")},changeOption_city:function(t){},changeOption_institutionalStatus:function(t){console.log(t)},queryCity:function(t,e){var a=this;this.districtSearch.search(t,(function(t,r){var n,o=l(r.districtList[0].districtList);try{for(o.s();!(n=o.n()).done;){var i=n.value;a[e].cities.push({adcode:i.adcode,city:i.name})}}catch(c){o.e(c)}finally{o.f()}}))},queryBankCity:function(t,e){var a=this;this.districtSearch.search(t,(function(t,r){var n,o=l(r.districtList[0].districtList);try{for(o.s();!(n=o.n()).done;){var i=n.value;a[e].account_cities.push({adcode:i.adcode,city:i.name})}}catch(c){o.e(c)}finally{o.f()}}))},handleCurrentChange:function(t){this.currentPage=t,this.getTableDataList(t)},initMap:function(){var t=this;AMap.plugin("AMap.DistrictSearch",(function(){t.districtSearch=new AMap.DistrictSearch({level:"city",subdistrict:1})}))},initProvinces:function(){var t=[];for(var e in o["a"].province_list)t.push({adcode:e,province:o["a"].province_list[e]});this.queryForm.regions=t,this.detail_form.regions=t,this.detail_form.account_regions=t}}},d=u,f=a("2877"),_=Object(f["a"])(d,r,n,!1,null,null,null);e["default"]=_.exports},ff82:function(t,e,a){"use strict";e["a"]={province_list:{11e4:"北京市",12e4:"天津市",13e4:"河北省",14e4:"山西省",15e4:"内蒙古自治区",21e4:"辽宁省",22e4:"吉林省",23e4:"黑龙江省",31e4:"上海市",32e4:"江苏省",33e4:"浙江省",34e4:"安徽省",35e4:"福建省",36e4:"江西省",37e4:"山东省",41e4:"河南省",42e4:"湖北省",43e4:"湖南省",44e4:"广东省",45e4:"广西壮族自治区",46e4:"海南省",5e5:"重庆市",51e4:"四川省",52e4:"贵州省",53e4:"云南省",54e4:"西藏自治区",61e4:"陕西省",62e4:"甘肃省",63e4:"青海省",64e4:"宁夏回族自治区",65e4:"新疆维吾尔自治区",71e4:"台湾省",81e4:"香港特别行政区",82e4:"澳门特别行政区"},adcode_list:{"上海市":"310000","云南省":"530000","内蒙古自治区":"150000","北京市":"110000","台湾省":"710000","吉林省":"220000","四川省":"510000","天津市":"120000","宁夏回族自治区":"640000","安徽省":"340000","山东省":"370000","山西省":"140000","广东省":"440000","广西壮族自治区":"450000","新疆维吾尔自治区":"650000","江苏省":"320000","江西省":"360000","河北省":"130000","河南省":"410000","浙江省":"330000","海南省":"460000","湖北省":"420000","湖南省":"430000","澳门特别行政区":"820000","甘肃省":"620000","福建省":"350000","西藏自治区":"540000","贵州省":"520000","辽宁省":"210000","重庆市":"500000","陕西省":"610000","青海省":"630000","香港特别行政区":"810000","黑龙江省":"230000"}}}}]);