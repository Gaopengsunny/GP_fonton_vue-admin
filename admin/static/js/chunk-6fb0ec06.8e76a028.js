(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fb0ec06"],{1:function(e,t){},"1af6":function(e,t,r){var i=r("63b6");i(i.S,"Array",{isArray:r("9003")})},2:function(e,t){},"287e":function(e,t,r){},3:function(e,t){},4:function(e,t){},"469f":function(e,t,r){r("6c1c"),r("1654"),e.exports=r("7d7b")},5:function(e,t){},"5488a":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"userPermission"},[r("div",{staticClass:"query_fields pad_b_no handle_timerange"},[r("el-form",{ref:"queryForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryForm,size:"mini"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"rolename","label-width":"68px"}},[r("el-input",{staticClass:"wid_140",attrs:{placeholder:"请输入角色名称"},model:{value:e.queryForm.rolename,callback:function(t){e.$set(e.queryForm,"rolename",t)},expression:"queryForm.rolename"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.resetForm("queryForm")}}},[e._v("重置")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.refreshData}},[e._v("刷新")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.queryData}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.handle_addUserPermisson}},[e._v("新增角色")])],1)],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"rolename",label:"角色名",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"role",label:"角色",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"remarks",label:"角色描述",width:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"",label:"操作",width:""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.modi_permisson(t.row)}}},[e._v("调整权限")])]}}])})],1),e._v(" "),r("div",{staticClass:"block mar_t10"},[r("el-pagination",{attrs:{"current-page":e.currentPage,background:"",layout:"total, prev, pager, next, jumper",total:e.pageTotal},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.modi_loading,expression:"modi_loading"}],staticClass:"modiUsers_dialog dialog_tip modiPermission",attrs:{title:e.d_modi_userPermission.modi_title,visible:e.permission_dialogVisible,top:"10vh",width:"40%",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.permission_dialogVisible=t}}},[r("div",[r("el-row",[r("el-col",{attrs:{span:11}},[r("div",{staticClass:"grid-content bg-purple-dark pad_t2"},[r("el-form",{ref:"valid_modiForm",staticClass:"demo-ruleForm valid_form",attrs:{model:e.valid_modiForm,rules:e.modi_rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名",prop:"rolename"}},[r("el-input",{attrs:{disabled:!0},model:{value:e.valid_modiForm.rolename,callback:function(t){e.$set(e.valid_modiForm,"rolename",t)},expression:"valid_modiForm.rolename"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色",prop:"role"}},[r("el-input",{model:{value:e.valid_modiForm.role,callback:function(t){e.$set(e.valid_modiForm,"role",t)},expression:"valid_modiForm.role"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色描述",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.valid_modiForm.remarks,callback:function(t){e.$set(e.valid_modiForm,"remarks",t)},expression:"valid_modiForm.remarks"}})],1)],1)],1)]),e._v(" "),r("el-col",{attrs:{span:13}},[r("div",{staticClass:"grid-content bg-purple-dark "},[r("el-tree",{ref:"modiTree",attrs:{data:e.modiDialog_tree,"show-checkbox":"","node-key":"id","default-expanded-keys":e.modi_default_ids,"default-checked-keys":e.modi_default_ids,"highlight-current":"",accordion:""}})],1)])],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"mini"},on:{click:function(t){e.permission_dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.modiData_userPermission}},[e._v("确 定")])],1)]),e._v(" "),r("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.add_loading,expression:"add_loading"}],staticClass:"addUsers_dialog dialog_tip",attrs:{title:"新增角色",visible:e.addUsers_dialogVisible,width:"30%",center:"","close-on-click-modal":!1,"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"update:visible":function(t){e.addUsers_dialogVisible=t}}},[r("div",{staticClass:"dialogBody_addPermission"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("div",{staticClass:"grid-content bg-purple-dark pad_t2"},[r("el-form",{ref:"valid_addForm",staticClass:"valid_form demo-ruleForm",attrs:{model:e.valid_addForm,rules:e.add_rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名",prop:"rolename"}},[r("el-input",{attrs:{placeholder:"请输入角色名"},model:{value:e.valid_addForm.rolename,callback:function(t){e.$set(e.valid_addForm,"rolename",t)},expression:"valid_addForm.rolename"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色",prop:"role"}},[r("el-input",{attrs:{placeholder:"请输入角色"},model:{value:e.valid_addForm.role,callback:function(t){e.$set(e.valid_addForm,"role",t)},expression:"valid_addForm.role"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色描述",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入角色描述"},model:{value:e.valid_addForm.remarks,callback:function(t){e.$set(e.valid_addForm,"remarks",t)},expression:"valid_addForm.remarks"}})],1)],1)],1)])],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(t){e.addUsers_dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.save_addSysRole}},[e._v("确 定")])],1)])],1)},a=[],o=(r("c5f6"),r("768b")),s=(r("ac6a"),r("5df3"),r("96cf"),r("3b8d")),n=r("cf45"),l=r("7f6d"),d={name:"roleLIst",data:function(){return{tableData:[],tableLoading:!1,pageTotal:1,currentPage:1,permission_dialogVisible:!1,addUsers_dialogVisible:!1,queryForm:{rolename:""},form:{name:"",txt:"",permission:""},formLabelWidth:"120px",addDialog_tree:[],modiDialog_tree:[],modi_default_ids:[],valid_addForm:{rolename:"",role:"",remarks:"",permission:[],permissions:[{id:"edit",txt:"编辑"},{id:"view",txt:"查看"}]},add_rules:{rolename:[{required:!0,message:"请输入角色名",trigger:"blur"}],role:[{required:!0,message:"请输入角色",trigger:"blur"}],remarks:[{required:!0,message:"请输入角色描述",trigger:"blur"}]},valid_modiForm:{rolename:"",role:"",remarks:"",roleid:"",permission:[],permissions:[{id:"edit",txt:"编辑"},{id:"view",txt:"查看"}]},modi_rules:{rolename:[{required:!0,message:"请输入角色名称",trigger:"blur"}],role:[{required:!0,message:"请输入角色名称",trigger:"blur"}],remarks:[{required:!0,message:"请输入角色描述",trigger:"blur"}]},d_modi_userPermission:{modi_title:"",id:"",permission:"",rolename:"",role:"",roleid:"",remarks:""},modi_loading:!1,add_loading:!1}},created:function(){this.getList_userPermission(1)},methods:{queryData:function(){this.getList_userPermission(1),this.currentPage=1},refreshData:function(){this.getList_userPermission(this.currentPage)},getList_userPermission:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.tableLoading=!0,r={signInUserId:this.$store.getters.userId,signInRoleId:this.$store.getters.roleId,pageNum:t,pageSize:10,rolename:this.queryForm.rolename},e.next=4,this.$http.post("".concat(n["a"].baseUrl,"/manage/role/search"),r);case 4:i=e.sent,"0000"==i.data.code?(a=i.data.data.roleList,this.tableData=a,this.pageTotal=i.data.data.data_total,this.tableLoading=!1):this.m_message(i.data.msg,"error");case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handle_addUserPermisson:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.addUsers_dialogVisible=!0,this.resetForm("valid_addForm");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getData_onePermission:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={data:{signInUserId:this.$store.getters.userId,roleid:this.$store.getters.roleId}},!0,e.next=4,this.$http.post("".concat(n["a"].baseUrl,"/manage/role/roleAuthority"),r);case 4:i=e.sent,"0000"==i.data.code&&!1;case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),save_addSysRole:function(){var e=this;if(this.m_valid_addForm("valid_addForm")){this.valid_addForm.remarks,this.valid_addForm.rolename,this.valid_addForm.role;var t={remarks:this.valid_addForm.remarks,rolename:this.valid_addForm.rolename,role:this.valid_addForm.role};this.add_loading=!0,this.$http.post("".concat(n["a"].baseUrl,"/manage/role/create"),t).then(function(t){"0000"==t.data.code?(e.add_loading=!1,e.m_message(t.data.msg,"success"),e.getList_userPermission(e.currentPage),e.addUsers_dialogVisible=!1):(e.add_loading=!1,e.m_message(t.data.msg,"success"))}).catch(function(e){console.log(e)})}},getTreeNode:function(){console.log(this.$refs.add_tree.getCheckedKeys())},modi_permisson:function(e){var t=this;this.permission_dialogVisible=!0,this.d_modi_userPermission.rolename=e.rolename,this.d_modi_userPermission.remarks=e.remarks,this.d_modi_userPermission.roleid=e.roleid,this.d_modi_userPermission.role=e.role,this.valid_modiForm.rolename=e.rolename,this.valid_modiForm.remarks=e.remarks,this.valid_modiForm.roleid=e.roleid,this.valid_modiForm.role=e.role,this.modi_default_ids=[],this.d_modi_userPermission.modi_title="调整"+e.rolename+"的权限";var r={roleid:e.roleid};Promise.all([this.$http.post("".concat(n["a"].baseUrl,"/manage/role/authority")),this.$http.post("".concat(n["a"].baseUrl,"/manage/role/roleAuthority"),r)]).then(function(e){var r=Object(o["a"])(e,2),i=r[0],a=r[1];if("0000"===i.data.code&&"0000"===a.data.code){var s=i.data.data.authorities,n=i.data.data.authoritiesNoOrder,d=a.data.data.roleAuthorities,m=l["a"].designData_tree(s);t.modiDialog_tree=m;var u=[];t.modifyTreeData(d,u,m,n),t.modi_default_ids=u,t.$refs.modiTree&&t.$refs.modiTree.setCheckedKeys(t.modi_default_ids),t.modi_loading=!1}}).catch(function(e){})},modifyTreeData:function(e,t){if(e.length>0)for(var r=0;r<e.length;r++){var i=e[r];"0"==i.ismenu&&t.push(Number(i.authorityid))}},modiData_userPermission:function(){var e=this,t=this.$refs.modiTree.getCheckedKeys(),r=this.$refs.modiTree.getHalfCheckedKeys();if(r.length>0&&(t=t.concat(r)),0!=t.length){console.log("所有id:".concat(t));var i=t.map(function(t){return{authorityid:t,roleid:e.valid_modiForm.roleid}});if(console.log("所有id树结构:".concat(i)),this.m_valid_addForm("valid_modiForm")){var a={rolename:this.valid_modiForm.rolename,role:this.valid_modiForm.role,remarks:this.valid_modiForm.remarks,roleid:this.valid_modiForm.roleid},s={au:i};this.modi_loading=!0,Promise.all([this.$http.post("".concat(n["a"].baseUrl,"/manage/role/edit"),a),this.$http.post("".concat(n["a"].baseUrl,"/manage/role/roleAu"),s)]).then(function(t){var r=Object(o["a"])(t,2),i=r[0],a=r[1];"0000"==i.data.code?"0000"==a.data.code&&(e.modi_loading=!1,e.permission_dialogVisible=!1,e.m_message("调整权限成功","success"),e.getList_userPermission(e.currentPage)):(e.modi_loading=!1,e.m_message(i.data.msg,"error"))}).catch(function(e){})}}else this.m_message("请为该用户分配权限","warning")},handleCurrentChange:function(e){this.currentPage=e,this.getList_userPermission(e)},m_valid_addForm:function(e){var t=!1;return this.$refs[e].validate(function(e){return e?(t=!0,!0):(t=!1,!1)}),t},m_message:function(e,t){this.$message({message:e,type:t})},resetForm:function(e){this.$refs[e]&&this.$refs[e].resetFields()},diguiquchu:function(e,t,r,i,a){var o=this;t.map(function(t,s){t.id==r&&t.child?(a.push(r),o.diguiquchu(e,t.child,r,i,a)):t.id!=r&&t.child&&o.diguiquchu(e,t.child,r,i,a)})}}},m=d,u=(r("83c6"),r("2877")),c=Object(u["a"])(m,i,a,!1,null,null,null);t["default"]=c.exports},"5d73":function(e,t,r){e.exports=r("469f")},"5df3":function(e,t,r){"use strict";var i=r("02f4")(!0);r("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=i(t,r),this._i+=e.length,{value:e,done:!1})})},6:function(e,t){},"768b":function(e,t,r){"use strict";var i=r("a745"),a=r.n(i);function o(e){if(a()(e))return e}var s=r("5d73"),n=r.n(s);function l(e,t){var r=[],i=!0,a=!1,o=void 0;try{for(var s,l=n()(e);!(i=(s=l.next()).done);i=!0)if(r.push(s.value),t&&r.length===t)break}catch(d){a=!0,o=d}finally{try{i||null==l["return"]||l["return"]()}finally{if(a)throw o}}return r}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(e,t){return o(e)||l(e,t)||d()}r.d(t,"a",function(){return m})},"7d7b":function(e,t,r){var i=r("e4ae"),a=r("7cd6");e.exports=r("584a").getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},"7f6d":function(e,t,r){"use strict";r("ba0f");function i(e){var t=JSON.parse(JSON.stringify(e));return t.map(function(e){return a(e)})}function a(e){return e["id"]=e.authorityid,e["label"]=e.functionname+e.authorityid,e.subAuthority&&(e["children"]=[],e.subAuthority.map(function(t){e["children"].push(a(t))})),e}t["a"]={designData_tree:i}},"83c6":function(e,t,r){"use strict";var i=r("287e"),a=r.n(i);a.a},a745:function(e,t,r){e.exports=r("f410")},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray}}]);