(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cacb34b"],{"1b62":function(e,t,i){"use strict";var o=i("495f"),n={computed:{inApp:function(){return Object(o["d"])()},shareLink:function(){return Object(o["b"])(location.href,"inapp")},clientType:function(){return Object(o["c"])()},isIOS:function(){return"isIos"===this.clientType},isAndroid:function(){return"isAnd"===this.clientType}}};t["a"]=n},"7feb":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return r}));i("d3b7"),i("25f0");var o=i("00e7"),n=i.n(o);function a(e){for(var t in e){var i=e[t];"[object Object]"===Object.prototype.toString.call(i)&&(i=JSON.stringify(i)),n.a.set(t,i,{expires:"30D"})}}function r(e){for(var t in e)n.a.delete(e[t])}},"83b1":function(e,t,i){},"84f2":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"hotta-map-inner"},[e.mapResource?i("Map",{ref:"mapvm",staticClass:"map",attrs:{zoom:6,tileImageProvider:e.mapTileGenerator,bounds:e.mapResource.bounds},on:{"click-map":e.showCreatePoiPopup}}):e._e(),i("PoiFilter",{directives:[{name:"show",rawName:"v-show",value:e.showFilter,expression:"showFilter"}],ref:"filter",staticClass:"filter",attrs:{items:e.categories},on:{close:function(t){e.showFilter=!1},"item-change":e.switchMarkersRelate,"all-item-change":e.switchAllMarkers}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showCreatePoiWindow,expression:"showCreatePoiWindow"}],staticClass:"create-poi-container",on:{click:function(t){return t.target!==t.currentTarget?null:e.cancelCreatePoi(t)}}},[i("div",{ref:"createPoiPopup",staticClass:"create-poi-popup",style:{top:e.createPoiPopupPositionTop+"px",left:e.createPoiPopupPositionLeft+"px"}},[i("el-select",{staticStyle:{width:"148px"},attrs:{placeholder:"选择点位类型",size:"mini"},model:{value:e.poiType,callback:function(t){e.poiType=t},expression:"poiType"}},e._l(e.poiTypes,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),i("el-input",{staticStyle:{width:"148px","margin-top":"5px"},attrs:{size:"mini",placeholder:"点位名称"},model:{value:e.poiName,callback:function(t){e.poiName=t},expression:"poiName"}}),i("div",{staticClass:"button",on:{click:e.createPoi}})],1)]),i("Login",{directives:[{name:"show",rawName:"v-show",value:e.showWebLogin,expression:"showWebLogin"}],on:{close:function(t){return e.switchWeblogin(!1)},login:e.webLoginSuccess}}),i("Menubar",{staticClass:"menus",attrs:{items:e.menus},on:{"click-item":e.doMenuAction}}),i("Sharebar",{directives:[{name:"show",rawName:"v-show",value:e.showShare,expression:"showShare"}],on:{close:function(t){e.showShare=!1},share:e.shareMapTo}}),i("script",{attrs:{id:"infowindow-template",type:"x-tmpl-mustache"}},[e._v(' <div style=" width: 32vh; height: 32vh; background-image: url(#{background}#); background-repeat: no-repeat; background-size: 100% 100%; display: flex; flex-direction: column; " > <div style=" width: 100%; height: 10vh; color: #5c5c5c; line-height: 10vh; text-align: center; font-weight: bold; font-size: 2vh; overflow: hidden; " > <span style=" display: inline-block; vertical-align: middle; line-height: 5vh; word-break: break-all; " >地点：#{place}#</span > </div> <div style=" width: 100%; height: 10vh; color: #5c5c5c; line-height: 10vh; text-align: center; font-weight: bold; font-size: 2.5vh; overflow: hidden; " > 先行者：#{person}# </div> <div style=" width: 100%; height: 12vh; display: flex; justify-content: center; align-items: center; " > <button style=" height: 5vh; width: 13vh; border-radius: 2.5vh; background-color: #3a393a; color: #ffffff; font-weight: bold; font-size: 2vh; margin-right: 1vh; cursor: pointer; " onclick="window.__tg_map_redirect_challenge__(\'#{target}#\', \'#{target_param}#\', #{native}#)" > 查看视频 </button> </div> </div> ')])],1)},n=[],a=(i("99af"),i("4de4"),i("4160"),i("a15b"),i("d81d"),i("b0c0"),i("7039"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("159b"),i("5c96")),r=i("a5c9"),s=i("cdca"),c=i("0a9b"),l=i("a3d2"),u=i("d4a1"),p=i("9dbb"),h=i.n(p),f=i("4dec"),d=i("495f"),m=i("7feb"),g=i("1b62"),v=i("b1b0"),b=i.n(v),w={name:"YuanshenMap",metaInfo:function(){return{title:"原神 | 高能时刻短视频",meta:[{hid:"description",name:"description",content:"高能时刻游戏短视频app，快来这个社区我给你看个宝贝"},{hid:"Keywords",name:"Keywords",content:"高能时刻,游戏短视频"}]}},components:{Map:r["a"],Menubar:c["a"],PoiFilter:l["a"],Sharebar:s["a"],Login:u["a"]},mixins:[g["a"]],data:function(){return{menus:[{id:0,title:"点位筛选",icon:"map-menu-ys-poifilter",action:"filterPoi"}],categories:[],pois:{},poiType:"",poiName:"",markers:{},showCreatePoiWindow:!1,createPoiPopupPositionTop:0,createPoiPopupPositionLeft:0,showFilter:!1,showShare:!1,userInfo:{},isMine:!1,activeIDs:{},showWebLogin:!1,mapResource:{id:9,webpURL:"https://img.topgamers.cn/yuanshen/apple/apple",pngURL:"https://img.topgamers.cn/activity/yuanshen/inazuma/inazuma",shareTitle:"稻妻城",shareContent:"旅行者指北，开启神奇大陆的自由冒险..."},infowindow:null,loading:{instance:null,count:0}}},methods:{resolveMapResource:function(){var e=this;return new Promise((function(t,i){Object(d["g"])().then((function(i){var o=e.mapResource;o.url=o.pngURL,o.postfix="png",e.mapResource=o,t()}))}))},mapTileGenerator:function(e){var t=this.mapResource,i=t.url,o=t.postfix;return"".concat(i).concat(e).concat(o)},fetchUserInfo:function(){var e=this;if(this.inApp)Object(d["a"])({method:"getUserInfo"}).then((function(t){var i=JSON.parse(t)||{};e.userInfo=i;var o={USERINFO:i};return i.loginToken&&(o.LOGINTOKEN=i.loginToken),i.userId&&(o.USERID=i.userId),Object(m["b"])(o),Promise.resolve(e.userInfo)}));else try{this.userInfo=JSON.parse(this.$cookie.get("USERINFO"))||{}}catch(t){this.$cookie.remove("USERINFO")}},requireLogin:function(){var e=this;this.inApp?Object(d["a"])({method:"login"}).then((function(){return e.cancelCreatePoi(),Object(d["a"])({method:"getUserInfo"}).then((function(t){e.userInfo=JSON.parse(t);var i={USERINFO:t};return Object(m["b"])(i),Promise.resolve(e.userInfo)}))})):this.switchWeblogin(!0)},switchWeblogin:function(e){this.showWebLogin=e},webLoginSuccess:function(e){this.userInfo=JSON.parse(e),this.switchWeblogin(!1)},resetMapData:function(){var e=this;Object.getOwnPropertyNames(this.markers).forEach((function(t){var i=e.markers[t];"[object Array]"===Object.prototype.toString.call(i)&&i.forEach((function(e){e.removeFromMap()}))})),this.markers={},this.activeIDs=[]},loadPoiCaterories:function(){var e=this,t={activity_id:this.mapResource.id};Object(f["b"])(t).then((function(t){var i=t;200===i.code?(e.categories=i.data.map((function(e){return e.is_default?e.active=!0:e.active=!1,e})),e.categories.length>0&&e.loadPoisByCatetories(e.activeCategories())):e.$toast(i.msg,{duration:1500})}))},activeCategories:function(){return this.categories.filter((function(e){return e.active}))},loadPoisByCatetories:function(e){var t=this,i=e.map((function(e){return e.id})),o={is_mine:this.is_mine,show_all:!0,category_id:i.join(",")};o=Object.assign(o,this.userInfo),Object(f["d"])(o).then((function(e){var i=e;200===i.code?e.data.forEach((function(e){if(!(e.points.length<1)){var i="marker-"+e.category_id,o=t.pois[i];"[object Array]"!==Object.prototype.toString.call(o)&&(t.pois[i]=[]),e.points.forEach((function(e){t.pois[i].push(e)}));var n=[];t.pois[i].forEach((function(e){var i=t.$refs.mapvm.addMarker({lat:+e.lat,lng:+e.lng,icon:e.marker},(function(i,o){t.showInfowindow(i,o,e)}));n.push(i)})),t.markers[i]=n}})):t.$toast(i.msg,{duration:1500})}))},doMenuAction:function(e){var t=this[e.action];t&&t(e)},filterPoi:function(){this.showFilter=!0},showCreatePoiPopup:function(e){var t=this;this.showCreatePoiWindow=!0,this.$nextTick().then((function(){var i=e.latLng,o=i.lat,n=i.lng,a=e.pixel,r=a.x,s=a.y,c=t.$refs.createPoiPopup,l=c.offsetHeight,u=c.offsetWidth,p=window,h=p.innerHeight,f=p.innerWidth,d=r,m=f-r,g=s,v=h-s,b=40;t.createPoiPopupPositionLeft=d>m?r-b-u:r+b,(t.createPoiPopupPositionLeft+u>f||t.createPoiPopupPositionLeft<0)&&(t.createPoiPopupPositionLeft=(f-u)/2),t.createPoiPopupPositionTop=g>v?s-l:s+b+10,t.createPoiPopupPositionTop<0?t.createPoiPopupPositionTop=s+b:t.createPoiPopupPositionTop+l>h&&(t.createPoiPopupPositionTop=s-l-b);var w=t.$refs.mapvm.addMarker({lat:o(),lng:n()});t.tempMarkerForAddingPoi=w}))},cancelCreatePoi:function(){this.tempMarkerForAddingPoi.removeFromMap(),this.showCreatePoiWindow=!1},createPoi:function(){var e=this;if(this.poiType)if(this.poiName)if(this.userInfo.userId){this.showLoading();var t=this.tempMarkerForAddingPoi.position,i={lat:"".concat(t.lat()),lng:"".concat(t.lng()),category_id:this.poiType,name:this.poiName,activity_id:this.mapResource.id,userId:this.userInfo.userId+"",sign:this.userInfo.sign};Object(f["a"])(i).then((function(t){setTimeout((function(){e.closeLoading();var i=t.code,o=t.msg;200===i?(e.$toast("创建成功，等待审核通过后将在地图上显示",{duration:3e3}),e.cancelCreatePoi()):e.$toast(o,{duration:3e3})}),1e3)}))}else this.requireLogin();else this.$toast("请输入点位名称",{duration:1500});else this.$toast("请先确定点位类型",{duration:1500})},openMyMap:function(e){var t=this;e.selected?(e.selected=!1,this.$refs.filter.reset(),this.is_mine=!1,this.resetMapData(),this.loadPoisByCatetories(this.activeCategories())):this.fetchUserInfo().then((function(){e.selected=!0,t.$refs.filter.reset(),t.is_mine=!0,t.resetMapData(),t.loadPoisByCatetories(t.activeCategories())}))},shareMap:function(){this.showShare=!0},shareMapTo:function(e){var t="".concat(location.host,"/plusmaps/yuanshen/apple");if("Copy2Clipboard"===e.identifier)this.$copyText(t).then((function(e){}),(function(e){alert("Can not copy")}));else{var i={method:"share",appType:e.identifier,msgType:"link",url:t,imageUrl:"https://img.topgamers.cn/icon.png",title:"金苹果群岛",content:"旅行者指北，开启神奇大陆的自由冒险..."};Object(d["a"])(i)}this.showShare=!1},switchMarkersRelate:function(e){var t=this,i="marker-".concat(e.id),o=this.markers[i];"[object Array]"===Object.prototype.toString.call(o)?o.forEach((function(i){e.active?i.setMap(t.$refs.mapvm.map):i.setMap(null)})):this.loadPoisByCatetories([e])},switchAllMarkers:function(e){var t=this;if(e){var i=this.categories.filter((function(e){var i="marker-".concat(e.id);return"[object Array]"!==Object.prototype.toString.call(t.markers[i])}));i&&i.length>0&&this.loadPoisByCatetories(i),this.makeAllPoisHidden(!1)}else this.makeAllPoisHidden(!0)},makeAllPoisHidden:function(e){var t=this;for(var i in this.markers)if(Object.hasOwnProperty.call(this.markers,i)){var o=this.markers[i];"[object Array]"===Object.prototype.toString.call(o)&&o.forEach((function(i){return e?i.setMap(null):i.setMap(t.$refs.mapvm.map)}))}},showInfowindow:function(e,t,i){this.infowindow&&this.infowindow.close();var o=document.getElementById("infowindow-template").innerHTML;o=o.replace(/#{(\w+)}#/g,"{{$1}}");var n={background:b.a,place:i.name,person:i.first_member_name,target:i.redirect_type,target_param:i.redirect_params,native:this.inApp},a=h.a.render(o,n);this.infowindow=this.$refs.mapvm.createInfoWindow(e,a)},showLoading:function(){this.loading.instance||(this.loading.instance=a["Loading"].service({fullscreen:!0,background:"rgba(0, 0, 0, 0.65)"})),this.loading.count+=1},closeLoading:function(){var e=this;this.loading.count<=0||(this.loading.count-=1,this.loading.count<=0&&this.$nextTick((function(){e.loading.instance.close(),e.loading.instance=null})))}},computed:{poiTypes:function(){return this.categories.map((function(e){return{label:e.name,value:e.id}}))}},mounted:function(){var e=this;this.fetchUserInfo(),this.resolveMapResource().then((function(){e.loadPoiCaterories()}))}},P=w,y=(i("f0cf"),i("2877")),k=Object(y["a"])(P,o,n,!1,null,"1d07b1a5",null);t["default"]=k.exports},ade3:function(e,t,i){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}i.d(t,"a",(function(){return o}))},db16:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"a",(function(){return r}));var o=i("97af");function n(e,t){return Object(o["a"])({url:"api/v1.0/send/code",method:"post",data:{mobile:e,type:t}})}function a(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Object(o["a"])({url:"api/v1.0/login/verification",method:"post",data:{mobile:e,code:t,type:i}})}function r(e,t){return Object(o["a"])({url:"api/v1.0/login",method:"post",data:{mobile:e,pwd:t}})}},f0cf:function(e,t,i){"use strict";i("83b1")}}]);