(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"Navi Open":"サイドメニュー項目を開く","Navi Close":"サイドメニュー項目を閉じる","Nara":"奈良県","COVID-19":"新型コロナウイルス感染症","Measures site":"まとめサイト（非公式）","Nara Prefecture Government":"奈良県","Tokyo COVID-19 Task Force":"新型コロナウイルス感染症対策本部","The latest updates of NaraPref":"奈良県内の最新感染動向","The latest updates of NaraCity":"奈良市内の最新感染動向","For those concerned about novel coronavirus infections":"新型コロナウイルス感染症が心配なときに","for Families with children":"お子様をお持ちの皆様へ","school activity status":"各種学校の休校情報","for Citizens":"県民の皆様へ","for Enterprises and Employees":"中小企業・小規模事業者の皆様へ","Official statements from Task Force":"奈良県総務部知事公室防災統括室","Government official website":"奈良県公式ホームページ","General Telephone Consultation":"一般電話窓口","Departures and Contact Person Consultation Center":"新型コロナ・発熱患者受診相談窓口","Board of Education Announcement":"教育委員会の発表","Telephone consultation on labor-related matter":"労働関係の電話相談","About us":"当サイトについて","Municipalities":"奈良県内各市町村の関連ページ","Other local Government":"他自治体の対策サイト"}}'),delete t.options._Ctor}},149:function(t,n,e){"use strict";var o=e(116),r=e.n(o);n.default=r.a},153:function(t,n,e){"use strict";e(472)},154:function(t,n,e){"use strict";var o=e(1),r=e(73),c=(e(36),e(37),e(121)),l=e(27),d=e.n(l),f=e(352),m=e.n(f),h=(e(464),e(465),e(466),e(467),e(468),e(469),e(470),e(471),{datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"});function v(t){var n=t;n.includes("ja")&&(n="ja"),d.a.locale(n)}var x=function(){var t=r.f.reactiveProp;o.a.component("doughnut-chart",{extends:r.b,mixins:[t],props:{options:{type:Object,default:function(){}}},mounted:function(){this.renderChart(this.chartData,this.options)}}),o.a.component("pie-chart",{extends:r.e,mixins:[t],props:{options:{type:Object,default:function(){}}},mounted:function(){this.renderChart(this.chartData,this.options)}}),o.a.component("bar",{extends:r.a,mixins:[t],props:{options:{type:Object,default:function(){}}},watch:{options:function(t){this.$data._chart.options=t,this.$data._chart.update()}},mounted:function(){this.renderChart(this.chartData,this.options)}}),o.a.component("horizontal-bar",{extends:r.c,mixins:[t],props:{options:{type:Object,default:function(){}}},mounted:function(){this.renderChart(this.chartData,this.options)}}),o.a.component("line-chart",{extends:r.d,mixins:[t],props:{options:{type:Object,default:function(){}}},mounted:function(){this.renderChart(this.chartData,this.options)}})};n.a=function(t){var n,e=t.app;n=e.i18n,d.a.extend(m.a),v(n.locale),n.onLanguageSwitched=function(t,n){v(n)},c._adapters._date.override({_id:"dayjs",formats:function(){return h},parse:function(time,t){var n=t?d()(time,t):d()(time);return n.isValid()?n.valueOf():null},format:function(time,t){return d()(time).format(t)},add:function(time,t,n){return d()(time).add(t,n)},diff:function(t,n,e){return d()(t).diff(d()(n),e)},startOf:function(time,t,n){return d()(time).startOf(t)},endOf:function(time,t){return d()(time).endOf(t)}}),x()}},189:function(t,n,e){var content=e(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("e167bc68",content,!0,{sourceMap:!1})},192:function(t,n,e){var content=e(393);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("316e6cb8",content,!0,{sourceMap:!1})},197:function(t,n,e){var content=e(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("238de007",content,!0,{sourceMap:!1})},199:function(t,n,e){var content=e(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("84455a9e",content,!0,{sourceMap:!1})},200:function(t,n,e){var content=e(434);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("6e650009",content,!0,{sourceMap:!1})},201:function(t,n,e){var content=e(436);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("c4a8d906",content,!0,{sourceMap:!1})},346:function(t,n,e){"use strict";var o=e(26),component=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M21.77 10.27a1.73 1.73 0 00-1.66 1.3h-1.68a6.44 6.44 0 00-1.58-3.81L18 6.57a1.71 1.71 0 002.09-.26 1.73 1.73 0 10-2.44-2.44A1.71 1.71 0 0017.43 6l-1.19 1.15a6.44 6.44 0 00-3.81-1.58V3.89a1.73 1.73 0 10-.86 0v1.68a6.44 6.44 0 00-3.81 1.58L6.57 6a1.71 1.71 0 00-.26-2.09 1.73 1.73 0 00-2.44 2.4A1.71 1.71 0 006 6.57l1.15 1.19a6.44 6.44 0 00-1.58 3.81H3.89a1.73 1.73 0 100 .86h1.68a6.44 6.44 0 001.58 3.81L6 17.43a1.71 1.71 0 00-2.09.26 1.73 1.73 0 002.44 2.44A1.71 1.71 0 006.57 18l1.19-1.19a6.44 6.44 0 003.81 1.58v1.68a1.73 1.73 0 10.86 0v-1.64a6.44 6.44 0 003.81-1.58L17.43 18a1.71 1.71 0 00.26 2.09 1.73 1.73 0 002.44-2.44 1.71 1.71 0 00-2.13-.22l-1.19-1.19a6.44 6.44 0 001.58-3.81h1.68a1.72 1.72 0 101.66-2.16zM6.5 12.75a.5.5 0 11.5.5.5.5 0 01-.5-.5zm3.5 3.5a.5.5 0 11.5-.5.5.5 0 01-.5.5zm0-2.5a1 1 0 111-1 1 1 0 01-1 1zm4 2.5a.5.5 0 11.5-.5.5.5 0 01-.5.5zm0-2.5a1 1 0 111-1 1 1 0 01-1 1zm0-4a1 1 0 111-1 1 1 0 01-1 1zm3 3.5a.5.5 0 11.5-.5.5.5 0 01-.5.5z"}})])}),[],!1,null,null,null);n.a=component.exports},354:function(t,n,e){"use strict";var o=e(1),r=e(122),c=(e(15),e(16),e(6),e(56),e(49),e(21)),l=e(33),d=e(31),f=e(28),m=e(19),h=e(20),v=e(74),x=e(346),j=e(26),w=Object(j.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",this._g({attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},this.$listeners),[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),n("path",{attrs:{d:"M7.33 6a2 2 0 10-2-2 2 2 0 002 2zm11.85 5.8a1.62 1.62 0 00-1.53-1.1h-.1a1.54 1.54 0 00-.31.05h-.12l-.15.05h-.11l-3.1 1.76L10.72 8a2.69 2.69 0 00-2.2-1h-3a2 2 0 00-2 2v5.5H5V22h2v-6h1v6h2V10.07l2.76 4.21a.86.86 0 00.73.39.88.88 0 00.44-.12l1.71-1-1 4.4h1.71v4h2.42V18h1.7zM17.6 9.89A1.62 1.62 0 1016 8.27a1.61 1.61 0 001.6 1.62z"}})])}),[],!1,null,null,null).exports;function k(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=Object(m.a)(t);if(n){var r=Object(m.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(f.a)(this,e)}}var C=function(t,n,e,desc){var o,r=arguments.length,c=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(n,e,c):o(n,e))||c);return r>3&&c&&Object.defineProperty(n,e,c),c},y=function(t){Object(d.a)(e,t);var n=k(e);function e(){return Object(c.a)(this,e),n.apply(this,arguments)}return Object(l.a)(e,[{key:"isInternalLink",value:function(path){return!/^https?:\/\//.test(path)}},{key:"isActive",value:function(link){if(link===this.$route.path||"".concat(link,"/")===this.$route.path)return"isActive"}},{key:"checkIconType",value:function(t){return t?t.startsWith("mdi")?"material":"covid"===t?"covid":"parent"===t?"parent":"others":"none"}}]),e}(v.c);C([Object(v.b)({default:"",required:!1})],y.prototype,"link",void 0),C([Object(v.b)({default:"",required:!1})],y.prototype,"icon",void 0),C([Object(v.b)({default:"",required:!1})],y.prototype,"title",void 0);var _=y=C([Object(v.a)({components:{CovidIcon:x.a,ParentIcon:w}})],y),I=(e(392),e(55)),L=e.n(I),N=e(144),z=e(92),O=e(145),S=e(70),M=e(164),E=e.n(M),$=e(57),T=Object(j.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-list-item",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"ListItem-Container",staticStyle:{color:"transparent"},attrs:{to:t.isInternalLink(t.link)?t.link:"",href:t.isInternalLink(t.link)?"":t.link,target:t.isInternalLink(t.link)?"":"_blank",rel:t.isInternalLink(t.link)?"":"noopener",router:"",exact:""}},[t.icon?e("v-list-item-action",{staticClass:"ListItem-IconContainer"},["material"===t.checkIconType(t.icon)?e("v-icon",{class:["ListItem-Icon",t.isActive(t.link)],attrs:{size:"20"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):"covid"===t.checkIconType(t.icon)?e("CovidIcon",{class:["ListItem-Icon",t.isActive(t.link)]}):"parent"===t.checkIconType(t.icon)?e("ParentIcon",{class:["ListItem-Icon",t.isActive(t.link)]}):t._e()],1):t._e(),t._v(" "),e("v-list-item-content",{staticClass:"ListItem-TextContainer"},[e("v-list-item-title",{class:["ListItem-Text",t.isActive(t.link)],domProps:{textContent:t._s(t.title)}})],1),t._v(" "),t.isInternalLink(t.link)?t._e():e("v-icon",{staticClass:"ListItem-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n    mdi-open-in-new\n  ")])],1)}),[],!1,null,null,null),P=T.exports;L()(T,{VIcon:N.a,VListItem:z.a,VListItemAction:O.a,VListItemContent:S.a,VListItemTitle:S.b}),E()(T,{Ripple:$.a});var D={components:{ListItem:P},props:{isNaviOpen:{type:Boolean,required:!0}},computed:{items:function(){return[{icon:"mdi-chart-timeline-variant",title:this.$t("The latest updates of NaraPref"),link:"/",divider:!0},{icon:"covid",title:this.$t("For those concerned about novel coronavirus infections"),link:"http://www.pref.nara.jp/secure/226888/02_相談や受診の流れ0515.pdf"},{icon:"mdi-account-multiple",title:this.$t("Departures and Contact Person Consultation Center"),link:"http://www.pref.nara.jp/55410.htm#003"},{icon:"mdi-account-multiple",title:this.$t("General Telephone Consultation"),link:"http://www.pref.nara.jp/55410.htm#002",divider:!0},{title:this.$t("Government official website"),link:"http://www.pref.nara.jp/"},{title:this.$t("Municipalities"),link:"/municipalities",divider:!0},{title:this.$t("for Enterprises and Employees"),link:"http://www.pref.nara.jp/55408.htm"},{title:this.$t("Telephone consultation on labor-related matter"),link:"https://jsite.mhlw.go.jp/nara-roudoukyoku/content/contents/000611858.pdf"},{title:this.$t("Board of Education Announcement"),link:"http://www.pref.nara.jp/kyoiku/"},{title:this.$t("school activity status"),link:"https://crssrds.jp/school_info/",divider:!0},{title:this.$t("About us"),link:"/about"},{title:this.$t("Other local Government"),link:"https://github.com/tokyo-metropolitan-gov/covid19/blob/development/FORKED_SITES.md"}]},isClass:function(){return function(t){return"【"===t.title.charAt(0)?"kerningLeft":""}}},methods:{openNavi:function(){this.$emit("openNavi")},closeNavi:function(){this.$emit("closeNavi")}}},H=(e(423),e(149)),V=e(488),A=e(482),R=e(146),Y=Object(j.a)(D,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"SideNavigation"},[e("div",{staticClass:"SideNavigation-HeadingContainer sp-flex"},[e("v-icon",{staticClass:"SideNavigation-HeadingIcon pc-none",attrs:{"aria-label":t.$t("Navi Open")},on:{click:t.openNavi}},[t._v("\n      mdi-menu\n    ")]),t._v(" "),e("nuxt-link",{staticClass:"SideNavigation-HeadingLink",attrs:{to:"/"}},[e("div",{staticClass:"SideNavigation-Logo"},[e("img",{attrs:{src:"/logo.png",alt:t.$t("Nara")}})]),t._v(" "),e("h1",{staticClass:"SideNavigation-Heading"},[t._v("\n        "+t._s(t.$t("COVID-19"))),e("br"),t._v(t._s(t.$t("Measures site"))+"\n      ")])])],1),t._v(" "),e("v-divider",{staticClass:"SideNavigation-HeadingDivider"}),t._v(" "),e("div",{staticClass:"sp-none",class:{open:t.isNaviOpen}},[e("v-icon",{staticClass:"SideNavigation-ListContainerIcon pc-none",attrs:{"aria-label":t.$t("Navi Close")},on:{click:t.closeNavi}},[t._v("\n      mdi-close\n    ")]),t._v(" "),e("v-list",{attrs:{flat:!0}},t._l(t.items,(function(n,i){return e("v-container",{key:i,staticClass:"SideNavigation-ListItemContainer",on:{click:t.closeNavi}},[e("ListItem",{attrs:{link:n.link,icon:n.icon,title:n.title}}),t._v(" "),e("v-divider",{directives:[{name:"show",rawName:"v-show",value:n.divider,expression:"item.divider"}],staticClass:"SideNavigation-Divider"})],1)})),1),t._v(" "),t._m(0)],1)],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"SideNavigation-Footer"},[n("div",{staticClass:"SideNavigation-SocialLinkContainer"},[n("a",{attrs:{href:"https://twitter.com/narakencyou",target:"_blank",rel:"noopener"}},[n("img",{attrs:{src:"/twitter.png",alt:"Twitter"}})]),this._v(" "),n("a",{attrs:{href:"https://www.facebook.com/office.pref.nara/",target:"_blank",rel:"noopener"}},[n("img",{attrs:{src:"/facebook.png",alt:"Facebook"}})]),this._v(" "),n("a",{attrs:{href:"https://line.me/R/ti/p/%40688bjyqz",target:"_blank",rel:"noopener"}},[n("img",{attrs:{src:"/line.png",alt:"Facebook"}})]),this._v(" "),n("a",{attrs:{href:"https://github.com/code4nara/covid19",target:"_blank",rel:"noopener"}},[n("img",{attrs:{src:"/github.png",alt:"GitHub"}})])])])}],!1,null,"48fd42ff",null);"function"==typeof H.default&&Object(H.default)(Y);var B=Y.exports;L()(Y,{VContainer:V.a,VDivider:A.a,VIcon:N.a,VList:R.a});var F=o.a.extend({components:{ScaleLoader:r.a,SideNavigation:B},data:function(){return{isOpenNavigation:!1,loading:!0}},mounted:function(){this.loading=!1},methods:{openNavigation:function(){this.isOpenNavigation=!0},hideNavigation:function(){this.isOpenNavigation=!1}},head:function(){return{htmlAttrs:this.$nuxtI18nSeo().htmlAttrs,link:[{rel:"canonical",href:"https://stopcovid19.code4nara.org".concat(this.$route.path)}]}}}),G=(e(429),e(489)),Q=Object(j.a)(F,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{staticClass:"app"},[t.loading?e("div",{staticClass:"loader"},[e("img",{attrs:{src:"/ogp.png",alt:"奈良県COVID19まとめサイト"}}),t._v(" "),e("scale-loader",{attrs:{color:"#85005d"}})],1):e("div",{staticClass:"appContainer"},[e("div",{staticClass:"naviContainer"},[e("SideNavigation",{class:{open:t.isOpenNavigation},attrs:{"is-navi-open":t.isOpenNavigation},on:{openNavi:t.openNavigation,closeNavi:t.hideNavigation}})],1),t._v(" "),e("div",{staticClass:"mainContainer",class:{open:t.isOpenNavigation}},[e("v-container",{staticClass:"px-4 py-8"},[e("nuxt")],1)],1)])])}),[],!1,null,null,null);n.a=Q.exports;L()(Q,{VApp:G.a,VContainer:V.a})},355:function(t,n,e){"use strict";var o={components:{ScaleLoader:e(122).a},data:function(){return{loading:!0}},mounted:function(){this.loading=!1,window.addEventListener("load",this.print)},beforeDestroy:function(){window.removeEventListener("load",this.print)},methods:{print:function(){window.print()}},head:function(){return{meta:[{hid:"robots",name:"robots",content:"noindex"}],link:[{rel:"canonical",href:"https://stopcovid19.code4nara.org".concat(this.$route.path)}]}}},r=(e(433),e(435),e(26)),c=e(55),l=e.n(c),d=e(489),f=e(483),m=e(490),h=e(488),v=e(491),x=e(492),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{staticClass:"app-print"},[t.loading?e("div",{staticClass:"loader"},[e("img",{attrs:{src:"/logo.png",alt:"奈良県"}}),t._v(" "),e("scale-loader",{attrs:{color:"#85005d"}})],1):e("v-container",[e("v-row",{staticClass:"PrintMeta",attrs:{align:"center"}},[e("v-col",{attrs:{cols:12,sm:6}},[e("div",{staticClass:"PrintMeta-HeadingWrapper"},[e("div",{staticClass:"PrintMeta-Logo"},[e("img",{attrs:{src:"/logo.png",alt:"奈良県"}})]),t._v(" "),e("h1",{staticClass:"PrintMeta-Heading"},[t._v("\n            新型コロナウイルス感染症"),e("br"),t._v("まとめサイト（非公式）\n          ")])])]),t._v(" "),e("v-col",{attrs:{cols:12,sm:6}},[e("v-card",{staticClass:"d-flex flex-row",attrs:{flat:"",tile:"",color:"transparent"}},[e("v-spacer"),t._v(" "),e("v-card",{staticClass:"PrintMeta-QR flex-shrink-0",attrs:{flat:"",tile:"",color:"transparent"}},[e("img",{attrs:{src:"/site-qr.svg",alt:"QRコード"}})]),t._v(" "),e("v-card",{staticClass:"flex-shrink-0",attrs:{flat:"",tile:"",color:"transparent"}},[e("p",{staticClass:"PrintMeta-Text"},[t._v("\n              ※最新の情報はWebページをご覧ください\n            ")]),t._v(" "),e("p",{staticClass:"PrintMeta-Link"},[t._v("\n              https://stopcovid19.code4nara.org/\n            ")])])],1)],1)],1),t._v(" "),e("nuxt")],1)],1)}),[],!1,null,"b31f67c6",null);n.a=component.exports;l()(component,{VApp:d.a,VCard:f.a,VCol:m.a,VContainer:h.a,VRow:v.a,VSpacer:x.a})},361:function(t,n,e){t.exports=e(362)},383:function(t,n,e){"use strict";e(189)},384:function(t,n,e){(n=e(13)(!1)).push([t.i,".Error-Heading[data-v-c51fdb52]{font-size:30px;font-size:1.875rem;color:#4d4d4d;font-weight:normal;margin-top:28px}@media screen and (max-width: 600px){.Error-Heading[data-v-c51fdb52]{margin-top:12px}}.Error-BodyContainer[data-v-c51fdb52]{margin-top:12px;background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:20px}.Error-Body[data-v-c51fdb52]{font-size:16px;font-size:1rem;color:#333;line-height:160%;font-weight:normal}.Error-ButtonContainer[data-v-c51fdb52]{margin-top:24px;text-align:center}.Error-Button[data-v-c51fdb52]{padding:24px 36px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #a83945;color:#a83945;cursor:pointer;text-decoration:none;max-width:300px;width:100%;font-weight:bold}.Error-Button[data-v-c51fdb52]:hover{background-color:#a83945;color:#fff}.Error-Button:hover>i[data-v-c51fdb52]{color:#fff !important}",""]),t.exports=n},387:function(t,n,e){var content=e(388);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(14).default)("ac065e1c",content,!0,{sourceMap:!1})},388:function(t,n,e){(n=e(13)(!1)).push([t.i,":root{box-sizing:border-box}body{background-color:#f8f9fa}img{max-width:100%;height:auto;vertical-align:bottom}",""]),t.exports=n},392:function(t,n,e){"use strict";e(192)},393:function(t,n,e){(n=e(13)(!1)).push([t.i,".ListItem-Container{min-height:30px;padding:0;color:transparent !important}.ListItem-Container .ListItem-TextContainer{max-width:calc(100% - 20px)}.ListItem-Container .ListItem-Text{overflow:visible;white-space:normal;font-size:.85rem}.ListItem-Container:hover{color:transparent !important}.ListItem-Container:hover .ListItem-Text{font-weight:bold}.ListItem-Container:hover .ListItem-Icon{color:#333 !important}.ListItem-Container:hover .ListItem-Icon.isActive{color:#85005d !important}.ListItem-Container:hover .ListItem-ExternalLinkIcon{color:#333 !important}.ListItem-Container:hover .ListItem-IconContainer>svg>path:not(:first-of-type){fill:#333}.ListItem-Container:hover .ListItem-IconContainer>svg.isActive>path:not(:first-of-type){fill:#85005d}.ListItem-Text{color:#333}.ListItem-IconContainer{margin:8px 3px 8px 0 !important}.ListItem-IconContainer>svg{width:20px;height:20px}.ListItem-IconContainer>svg>path:not(:first-of-type){fill:#4d4d4d}.ListItem-Icon{color:#4d4d4d !important}.ListItem-TextContainer{display:inline-block;flex:none}.ListItem-ExternalLinkIcon{margin-left:2px;color:gray !important}.isActive{color:#85005d !important;font-weight:600}svg.isActive>path:not(:first-of-type){fill:#85005d}",""]),t.exports=n},423:function(t,n,e){"use strict";e(197)},424:function(t,n,e){(n=e(13)(!1)).push([t.i,".SideNavigation[data-v-48fd42ff]{position:relative;height:100%;background:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15)}.SideNavigation-HeadingContainer[data-v-48fd42ff]{padding:1.25em 0 1.25em 1.25em;align-items:center}@media screen and (max-width: 600px){.SideNavigation-HeadingContainer[data-v-48fd42ff]{padding:7px 0 7px 20px}}.SideNavigation-HeadingIcon[data-v-48fd42ff]{margin-right:16px}.SideNavigation-HeadingLink[data-v-48fd42ff]{text-decoration:none}@media screen and (max-width: 600px){.SideNavigation-HeadingLink[data-v-48fd42ff]{display:flex;align-items:center}}.SideNavigation-ListContainerIcon[data-v-48fd42ff]{margin:24px 16px 0}.SideNavigation-ListItemContainer[data-v-48fd42ff]{padding:2px 20px}.SideNavigation-Logo[data-v-48fd42ff]{margin:20px 16px 0 0;width:110px}@media screen and (max-width: 600px){.SideNavigation-Logo[data-v-48fd42ff]{margin-top:0}}.SideNavigation-Heading[data-v-48fd42ff]{margin-top:8px;font-size:13px;color:#898989;padding:.5em 0;text-decoration:none}@media screen and (max-width: 600px){.SideNavigation-Heading[data-v-48fd42ff]{margin-top:0}}.SideNavigation-HeadingDivider[data-v-48fd42ff]{margin:0px 20px 4px}@media screen and (max-width: 600px){.SideNavigation-HeadingDivider[data-v-48fd42ff]{display:none}}.SideNavigation-Divider[data-v-48fd42ff]{margin:12px 0}.SideNavigation-Footer[data-v-48fd42ff]{padding:20px;background-color:#fff}.SideNavigation-SocialLinkContainer[data-v-48fd42ff]{display:flex}.SideNavigation-SocialLinkContainer img[data-v-48fd42ff]{width:30px}.SideNavigation-SocialLinkContainer img[data-v-48fd42ff]:first-of-type{margin-right:10px}.SideNavigation-Copyright[data-v-48fd42ff]{display:block;margin-top:10px;font-size:8px;line-height:1.2;color:#333;font-weight:bold}@media screen and (max-width: 600px){.open[data-v-48fd42ff]{position:fixed;overflow:auto;top:0;bottom:0;left:0;display:block !important;width:100%;z-index:101;background-color:#fff}}@media screen and (min-width: 601px){.pc-none[data-v-48fd42ff]{display:none}}@media screen and (max-width: 600px){.sp-flex[data-v-48fd42ff]{display:flex}.sp-none[data-v-48fd42ff]{display:none}}",""]),t.exports=n},429:function(t,n,e){"use strict";e(199)},430:function(t,n,e){(n=e(13)(!1)).push([t.i,".app{max-width:1440px;margin:0 auto;background-color:inherit !important}.appContainer{position:relative}@media screen and (min-width: 601px){.appContainer{display:-ms-grid;display:grid;-ms-grid-columns:240px 1fr;grid-template-columns:240px 1fr;-ms-grid-rows:auto;grid-template-rows:auto}.appContainer > *:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}.appContainer > *:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}}@media screen and (min-width: 1441px){.appContainer{-ms-grid-columns:325px 1fr;grid-template-columns:325px 1fr;-ms-grid-rows:auto;grid-template-rows:auto}.appContainer > *:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}.appContainer > *:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}}@media screen and (max-width: 600px){.naviContainer{position:sticky;position:-webkit-sticky;top:0;z-index:100}}@media screen and (min-width: 601px){.naviContainer{-ms-grid-column:1;-ms-grid-column-span:1;grid-column:1/2;position:fixed;top:0;overflow-y:auto;width:240px;height:100%}}@media screen and (min-width: 1441px){.naviContainer{width:325px}}.open{height:100vh}@media screen and (min-width: 601px){.open{overflow-x:hidden;overflow-y:auto}}.mainContainer{-ms-grid-column:2;-ms-grid-column-span:1;grid-column:2/3;overflow:hidden}@media screen and (max-width: 600px){.mainContainer .container{padding-top:16px !important}}.loader{height:200px;width:150px;position:fixed;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}.loader img{display:block;margin:0 auto 20px}",""]),t.exports=n},433:function(t,n,e){"use strict";e(200)},434:function(t,n,e){(n=e(13)(!1)).push([t.i,".app-print{margin:0 auto;background-color:inherit !important}.loader{height:200px;width:150px;position:fixed;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}.loader img{display:block;margin:0 auto 20px}",""]),t.exports=n},435:function(t,n,e){"use strict";e(201)},436:function(t,n,e){(n=e(13)(!1)).push([t.i,".PrintMeta[data-v-b31f67c6]{margin-bottom:1em}.PrintMeta-HeadingWrapper[data-v-b31f67c6]{display:flex;align-items:center;text-decoration:none}.PrintMeta-Logo[data-v-b31f67c6]{margin:0 16px 0 0;width:110px}.PrintMeta-Heading[data-v-b31f67c6]{font-size:13px;color:#898989;padding:.5em 0;text-decoration:none}.PrintMeta-QR[data-v-b31f67c6]{height:60px;width:60px;margin-right:1em}.PrintMeta-QR img[data-v-b31f67c6]{max-width:100%}.PrintMeta-Text[data-v-b31f67c6]{font-size:13px;color:gray;margin-bottom:0;padding-top:1em;width:-webkit-max-content;width:-moz-max-content;width:max-content}.PrintMeta-Link[data-v-b31f67c6]{font-size:13px;color:gray;margin-bottom:0;width:-webkit-max-content;width:-moz-max-content;width:max-content}",""]),t.exports=n},463:function(t,n,e){var map={"./af":211,"./af.js":211,"./ar":212,"./ar-dz":213,"./ar-dz.js":213,"./ar-kw":214,"./ar-kw.js":214,"./ar-ly":215,"./ar-ly.js":215,"./ar-ma":216,"./ar-ma.js":216,"./ar-sa":217,"./ar-sa.js":217,"./ar-tn":218,"./ar-tn.js":218,"./ar.js":212,"./az":219,"./az.js":219,"./be":220,"./be.js":220,"./bg":221,"./bg.js":221,"./bm":222,"./bm.js":222,"./bn":223,"./bn-bd":224,"./bn-bd.js":224,"./bn.js":223,"./bo":225,"./bo.js":225,"./br":226,"./br.js":226,"./bs":227,"./bs.js":227,"./ca":228,"./ca.js":228,"./cs":229,"./cs.js":229,"./cv":230,"./cv.js":230,"./cy":231,"./cy.js":231,"./da":232,"./da.js":232,"./de":233,"./de-at":234,"./de-at.js":234,"./de-ch":235,"./de-ch.js":235,"./de.js":233,"./dv":236,"./dv.js":236,"./el":237,"./el.js":237,"./en-au":238,"./en-au.js":238,"./en-ca":239,"./en-ca.js":239,"./en-gb":240,"./en-gb.js":240,"./en-ie":241,"./en-ie.js":241,"./en-il":242,"./en-il.js":242,"./en-in":243,"./en-in.js":243,"./en-nz":244,"./en-nz.js":244,"./en-sg":245,"./en-sg.js":245,"./eo":246,"./eo.js":246,"./es":247,"./es-do":248,"./es-do.js":248,"./es-mx":249,"./es-mx.js":249,"./es-us":250,"./es-us.js":250,"./es.js":247,"./et":251,"./et.js":251,"./eu":252,"./eu.js":252,"./fa":253,"./fa.js":253,"./fi":254,"./fi.js":254,"./fil":255,"./fil.js":255,"./fo":256,"./fo.js":256,"./fr":257,"./fr-ca":258,"./fr-ca.js":258,"./fr-ch":259,"./fr-ch.js":259,"./fr.js":257,"./fy":260,"./fy.js":260,"./ga":261,"./ga.js":261,"./gd":262,"./gd.js":262,"./gl":263,"./gl.js":263,"./gom-deva":264,"./gom-deva.js":264,"./gom-latn":265,"./gom-latn.js":265,"./gu":266,"./gu.js":266,"./he":267,"./he.js":267,"./hi":268,"./hi.js":268,"./hr":269,"./hr.js":269,"./hu":270,"./hu.js":270,"./hy-am":271,"./hy-am.js":271,"./id":272,"./id.js":272,"./is":273,"./is.js":273,"./it":274,"./it-ch":275,"./it-ch.js":275,"./it.js":274,"./ja":276,"./ja.js":276,"./jv":277,"./jv.js":277,"./ka":278,"./ka.js":278,"./kk":279,"./kk.js":279,"./km":280,"./km.js":280,"./kn":281,"./kn.js":281,"./ko":282,"./ko.js":282,"./ku":283,"./ku.js":283,"./ky":284,"./ky.js":284,"./lb":285,"./lb.js":285,"./lo":286,"./lo.js":286,"./lt":287,"./lt.js":287,"./lv":288,"./lv.js":288,"./me":289,"./me.js":289,"./mi":290,"./mi.js":290,"./mk":291,"./mk.js":291,"./ml":292,"./ml.js":292,"./mn":293,"./mn.js":293,"./mr":294,"./mr.js":294,"./ms":295,"./ms-my":296,"./ms-my.js":296,"./ms.js":295,"./mt":297,"./mt.js":297,"./my":298,"./my.js":298,"./nb":299,"./nb.js":299,"./ne":300,"./ne.js":300,"./nl":301,"./nl-be":302,"./nl-be.js":302,"./nl.js":301,"./nn":303,"./nn.js":303,"./oc-lnc":304,"./oc-lnc.js":304,"./pa-in":305,"./pa-in.js":305,"./pl":306,"./pl.js":306,"./pt":307,"./pt-br":308,"./pt-br.js":308,"./pt.js":307,"./ro":309,"./ro.js":309,"./ru":310,"./ru.js":310,"./sd":311,"./sd.js":311,"./se":312,"./se.js":312,"./si":313,"./si.js":313,"./sk":314,"./sk.js":314,"./sl":315,"./sl.js":315,"./sq":316,"./sq.js":316,"./sr":317,"./sr-cyrl":318,"./sr-cyrl.js":318,"./sr.js":317,"./ss":319,"./ss.js":319,"./sv":320,"./sv.js":320,"./sw":321,"./sw.js":321,"./ta":322,"./ta.js":322,"./te":323,"./te.js":323,"./tet":324,"./tet.js":324,"./tg":325,"./tg.js":325,"./th":326,"./th.js":326,"./tk":327,"./tk.js":327,"./tl-ph":328,"./tl-ph.js":328,"./tlh":329,"./tlh.js":329,"./tr":330,"./tr.js":330,"./tzl":331,"./tzl.js":331,"./tzm":332,"./tzm-latn":333,"./tzm-latn.js":333,"./tzm.js":332,"./ug-cn":334,"./ug-cn.js":334,"./uk":335,"./uk.js":335,"./ur":336,"./ur.js":336,"./uz":337,"./uz-latn":338,"./uz-latn.js":338,"./uz.js":337,"./vi":339,"./vi.js":339,"./x-pseudo":340,"./x-pseudo.js":340,"./yo":341,"./yo.js":341,"./zh-cn":342,"./zh-cn.js":342,"./zh-hk":343,"./zh-hk.js":343,"./zh-mo":344,"./zh-mo.js":344,"./zh-tw":345,"./zh-tw.js":345};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=463},65:function(t,n,e){"use strict";var o=e(1).a.extend({layout:"empty",props:{error:{type:Object,default:null}},computed:{isNotFound:function(){return 404===this.error.statusCode},headingTitle:function(){return this.isNotFound?"このページはご利用いただけません":"現在ご利用できません"}}}),r=(e(383),e(26)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"Error"},[n("h1",{staticClass:"Error-Heading"},[this._v("\n    "+this._s(this.headingTitle)+"\n  ")]),this._v(" "),n("div",{staticClass:"Error-BodyContainer"},[this._m(0),this._v(" "),n("div",{staticClass:"Error-ButtonContainer"},[n("NuxtLink",{staticClass:"Error-Button",attrs:{to:"/"}},[this._v("\n        トップページへ戻る\n      ")])],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"Error-Body"},[this._v("\n      アクセスしようとしたページが見つかりませんでした。"),n("br"),this._v("ページが移動または削除されたか、URLの入力間違いの可能性があります。\n    ")])}],!1,null,"c51fdb52",null);n.a=component.exports}},[[361,16,5,17]]]);