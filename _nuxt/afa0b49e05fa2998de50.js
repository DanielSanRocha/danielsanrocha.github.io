(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,e,n){var content=n(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("d7537614",content,!0,{sourceMap:!1})},151:function(t,e,n){var content=n(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("0188c9b3",content,!0,{sourceMap:!1})},159:function(t,e,n){"use strict";var c=n(150);n.n(c).a},160:function(t,e,n){(t.exports=n(36)(!1)).push([t.i,"a[data-v-c47cc668]{text-decoration:none;display:block;width:100%;height:100%}.container[data-v-c47cc668]{padding:5%}.container .thumbnail[data-v-c47cc668]{width:100%;height:16em;-o-object-fit:contain;object-fit:contain}.container .title[data-v-c47cc668],.index .description[data-v-c47cc668]{color:grey;display:block}.container .title[data-v-c47cc668]{font-size:2em;text-align:center;border-bottom:1px solid #000}.container .description[data-v-c47cc668]{font-size:1em;text-align:center}",""])},161:function(t,e,n){"use strict";var c=n(151);n.n(c).a},162:function(t,e,n){(t.exports=n(36)(!1)).push([t.i,"ul li[data-v-2338d97a]{margin-left:4%;margin-top:4%;width:44%;max-width:528px;min-width:200px;height:100%;display:inline-flex;border:1px solid grey}ul[data-v-2338d97a]{padding:0;width:100%;list-style-type:none}@media (max-width:1100px){ul li[data-v-2338d97a]{display:block;width:90%;max-width:528px;margin:5% auto}}",""])},174:function(t,e,n){var content=n(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("40e042ea",content,!0,{sourceMap:!1})},175:function(t,e,n){"use strict";var c={name:"index-item",props:["title","description","thumbnail_src","link","openInNewTab"]},r=(n(159),n(12)),l={name:"index",components:{indexItem:Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:t.link,target:t.openInNewTab?"_blank":""}},[n("div",{staticClass:"container"},[n("img",{staticClass:"thumbnail",attrs:{src:t.thumbnail_src}}),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("span",{staticClass:"description"},[t._v(t._s(t.description))])])])])},[],!1,null,"c47cc668",null).exports},props:["links"]},o=(n(161),Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"index"},this._l(this.links,function(link){return e("indexItem",{key:link.id,attrs:{title:link.title,description:link.description,thumbnail_src:link.thumbnail_src,link:link.ref,openInNewTab:link.openInNewTab}})}),1)},[],!1,null,"2338d97a",null));e.a=o.exports},249:function(t,e,n){"use strict";var c=n(174);n.n(c).a},250:function(t,e,n){(t.exports=n(36)(!1)).push([t.i,".index-wrapper{width:100%;max-width:1200px;display:block;margin:auto}h2.description{color:grey;text-align:center;font-size:2.3em}@media (max-width:620px){h2.description{font-size:1.5em}}",""])},256:function(t,e,n){"use strict";n.r(e);var c={name:"index-page",components:{index:n(175).a},data:function(){return{links:[{id:1,ref:"/snakeai",title:"SnakeAI",description:"A application of reinforcement learning for constructing a AI to play snake.",thumbnail_src:"/thumbnails/snakeai.png"},{id:2,ref:"/curriculum",title:"Curriculum Vitae",description:"My curriculum =)",thumbnail_src:"/thumbnails/curriculum.png"},{id:3,ref:"https://github.com/danielsanrocha/scaleye",title:"Scaleye",description:"A scala wrapper for JavaCV using futures for parallel processing.",thumbnail_src:"/thumbnails/scaleye.png",openInNewTab:!0},{id:4,ref:"/restacademy",title:"RESTAcademy",description:"A interactive way to learn the basics about REST and HTTP.",thumbnail_src:"/thumbnails/restacademy.png",openInNewTab:!1}]}}},r=(n(249),n(12)),component=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-wrapper"},[e("h2",{staticClass:"description"},[this._v("Mathematician, programmer and aspiring bassist.")]),this._v(" "),e("index",{attrs:{links:this.links}})],1)},[],!1,null,null,null);e.default=component.exports}}]);