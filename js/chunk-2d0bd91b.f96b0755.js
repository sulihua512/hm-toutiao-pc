(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd91b"],{"2d0c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-container"},[a("el-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("my-bread",[t._v("评论管理")])],1),a("el-table",{attrs:{data:t.comments}},[a("el-table-column",{attrs:{label:"文章标题",prop:"title"}}),a("el-table-column",{attrs:{label:"总评论数",prop:"total_comment_count"}}),a("el-table-column",{attrs:{label:"粉丝评论数",prop:"fans_comment_count"}}),a("el-table-column",{attrs:{label:"评论状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.comment_status?"关闭":"正常")+" ")]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.comment_status?a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){return t.toggleStatus(e.row)}}},[t._v("打开评论")]):a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return t.toggleStatus(e.row)}}},[t._v("关闭评论")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next","current-page":t.reqParams.page,"page-size":t.reqParams.per_page,total:t.total},on:{"current-change":t.changePager}})],1)],1)},r=[],s=(a("96cf"),a("1da1")),o={name:"my-comment",data:function(){return{comments:[],reqParams:{response_type:"comment",page:1,per_page:20},total:0}},created:function(){this.getComments()},methods:{toggleStatus:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$http.put("comments/status?article_id=".concat(t.id),{allow_comment:!t.comment_status});case 3:n=a.sent,r=n.data.data,e.$message.success(r.allow_comment?"打开评论成功":"关闭评论成功"),t.comment_status=r.allow_comment,a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),e.$messge.error("操作失败");case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},changePager:function(t){this.reqParams.page=t,this.getComments()},getComments:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles",{params:t.reqParams});case 2:a=e.sent,n=a.data.data,t.comments=n.results,t.total=n.total_count;case 6:case"end":return e.stop()}}),e)})))()}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,"2c9267b0",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0bd91b.f96b0755.js.map