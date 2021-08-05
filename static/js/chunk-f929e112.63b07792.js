(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-f929e112"], {
        "1b62": function(t, e, i) {
            "use strict";
            var n = i("495f"),
                a = { computed: { inApp: function() { return Object(n["d"])() }, shareLink: function() { return Object(n["b"])(location.href, "inapp") }, clientType: function() { return Object(n["c"])() }, isIOS: function() { return "isIos" === this.clientType }, isAndroid: function() { return "isAnd" === this.clientType } } };
            e["a"] = a
        },
        "1dd9": function(t, e, i) {},
        "26aa": function(t, e, i) {
            "use strict";
            i("1dd9")
        },
        "5b14": function(t, e, i) {
            "use strict";
            i("ab19")
        },
        "88ed": function(t, e, i) {
            "use strict";
            i.r(e);
            var n = function() {
                    /*bc_edit*/
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", { staticClass: "naraka-map-inter" }, [i("NavigationBar", { staticClass: "nav", attrs: { pageTitle: "Bản Đồ Naraka", backAction: t.back2App, enableBack: t.enableBack, enableShare: t.inApp, shareInfo: t.shareInfo } }), t.mapResource ? i("Map", { ref: "mapvm", staticClass: "map", attrs: { zoom: t.defaultZoom, tileImageProvider: t.mapTileGenerator } }) : t._e(), i("PoiFilter", { directives: [{ name: "show", rawName: "v-show", value: t.showFilter, expression: "showFilter" }], ref: "filter", staticClass: "filter", attrs: { items: t.categories }, on: { close: function(e) { t.showFilter = !1 }, "item-change": t.switchMarkersRelate, "all-item-change": t.switchAllMarkers } }), i("Menubar", { staticClass: "menus", attrs: { items: t.validMenus }, on: { "click-item": t.doMenuAction } }), i("Sharebar", { directives: [{ name: "show", rawName: "v-show", value: t.showShare, expression: "showShare" }], on: { close: function(e) { t.showShare = !1 }, share: t.shareMapTo } }), t.inApp ? t._e() : i("Downloadbar", { staticClass: "downloadbar", attrs: { title: "Tải xuống ứng dụng Khoảnh khắc năng lượng cao", subtitle: "Nhận sự dạy dỗ của Great God Raiders và dữ liệu véo khuôn mặt miễn phí" }, on: { click: t.openOrDownloadApp } }), i("script", { attrs: { id: "infowindow-template-nologin", type: "x-tmpl-mustache" } }, [t._v(' <div style=" width: 140px; height: 130px; background-image: url(#{background}#); background-repeat: no-repeat; background-size: 100% 100%; display: flex; flex-direction: column; " > <div style=" width: 100%; height: 43px; color: #5c5c5c; line-height: 43px; text-align: center; font-weight: bold; font-size: 10px; overflow: hidden; " > 地点：#{place}# </div> <div style=" width: 100%; height: 43px; color: #5c5c5c; line-height: 43px; text-align: center; font-weight: bold; font-size: 10px; overflow: hidden; " > Tiền nhân:#{person}# </div> <div style=" width: 100%; height: 42px; display: flex; justify-content: center; align-items: center; " > <button style=" height: 25px; width: 65px; border-radius: 12px; background-color: #3a393a; color: #ffffff; font-weight: bold; font-size: 10px; margin-right: 5px; cursor: pointer; " onclick="window.__tg_map_redirect_challenge__(\'#{target}#\', \'#{target_param}#\', #{native}#)" > Xem video </button> </div> </div> ')])], 1)
                },
                a = [],
                o = (i("99af"), i("4160"), i("a15b"), i("d81d"), i("b0c0"), i("7039"), i("d3b7"), i("ac1f"), i("25f0"), i("5319"), i("159b"), i("a5c9")),
                r = i("cdca"),
                s = i("028d"),
                c = i("0a9b"),
                h = i("a3d2"),
                l = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return ;
                    return i("div", t._g({ staticClass: "downloadbar-inner" }, t.$listeners), [i("div", { staticClass: "icon" }), i("div", { staticClass: "text" }, [i("div", [t._v(t._s(t.title))]), i("div", [t._v(t._s(t.subtitle))])]), i("div", { staticClass: "button" }, [t._v("打开")])])
                },
                p = [],
                u = { name: "Downloadbar", props: { title: { type: String, default: "Tải xuống ứng dụng Khoảnh khắc năng lượng cao" }, subtitle: { type: String, default: "Nhận nhiều nội dung thú vị hơn" } } },
                d = [],
                f = (i("5b14"), i("2877")),
                m = Object(f["a"])(d, l, p, !1, null, "1d475026", null),
                g = m.exports,
                v = i("9dbb"),
                w = i.n(v),
                b = i("4dec"),
                _ = i("495f"),
                k = i("b1b0"),
                y = i.n(k);
            window.__tg_map_point_light__ = function(t, e, i, n) {
                if ("" != i && "" != n) {
                    var a = { challenge_id: t, is_lighting: e, userId: i, sign: n };
                    Object(b["e"])(a).then((function(t) {
                        var i = t;
                        200 === i.code ? (window.vue.$toast(e ? "点亮成功" : "取消点亮成功"), window.flushPoints()) : window.vue.$toast(i.msg, { duration: 1500 })
                    }))
                } else window.vue.$toast("请在app内登陆后使用此功能", { duration: 1500 })
            };
            var I = {
                    name: "YuanshenMap",
                    metaInfo: function() { return { title: "Bản đồ Naraka", meta: [{ hid: "description", name: "description", content: "Vị trí kho báu, Vị trí loot đồ vàng, Bản đồ Naraka" }, { hid: "Keywords", name: "Keywords", content: "高能时刻,游戏短视频" }] } },
                    components: { Map: o["a"], Menubar: c["a"], NavigationBar: s["a"], PoiFilter: h["a"], Sharebar: r["a"], Downloadbar: g },
                    data: function() { return { menus: [{ id: 0, title: "Kiểm tra điểm", icon: "map-menu-ys-poifilter", needInApp: !1, action: "filterPoi" }], inApp: !1, client: "", categories: [], pois: {}, markers: {}, showFilter: !1, showShare: !1, userInfo: {}, isMine: !1, activeIDs: {}, defaultZoom: 6, mapResource: { id: 7, webpURL: "/static/img/naraka/naraka", pngURL: "/static/img/naraka/naraka", shareTitle: "永劫无间金堆地图", shareContent: "永劫无间资源点位地图" }, infowindow: null, shareInfo: { imageUrl: "/icon.png", title: "永劫无间全金堆点位地图", subtitle: "永劫无间固定金堆，随机金堆，洞天宝窟视频点位", link: location.href } } },
                    methods: {
                        share: function() { this.showShare = !0 },
                        back2App: function() { this.inApp ? Object(_["a"])({ method: "closePage" }) : this.$router.back() },
                        openOrDownloadApp: function() { Object(_["h"])("gamecommunity", 34) },
                        resolveMapResource: function() {
                            var t = this;
                            return new Promise((function(e, i) {
                                Object(_["g"])().then((function(i) {
                                    var n = t.mapResource;
                                    n.url = n.pngURL, n.postfix = "png", t.mapResource = n, e()
                                }))
                            }))
                        },
                        mapTileGenerator: function(t) {
                            var e = this.mapResource,
                                i = e.url,
                                n = e.postfix;
                            return "".concat(i).concat(t).concat(n)
                        },
                        fetchUserInfo: function() { var t = this; return this.userInfo.userId ? Promise.resolve(this.userInfo) : Object(_["a"])({ method: "login" }).then((function() { return Object(_["a"])({ method: "getUserInfo" }).then((function(e) { return t.userInfo = JSON.parse(e), Promise.resolve(t.userInfo) })) })) },
                        resetMapData: function() {
                            var t = this;
                            Object.getOwnPropertyNames(this.markers).forEach((function(e) { var i = t.markers[e]; "[object Array]" === Object.prototype.toString.call(i) && i.forEach((function(t) { t.removeFromMap() })) })), this.pois = {}, this.markers = {}, this.activeIDs = []
                        },
                        reloadPoints: function() { this.resetMapData(), this.loadPoints() },
                        loadPointCaterories: function() {
                            var t = this,
                                e = { activity_id: 7 };
                            Object(b["b"])(e).then((function(e) {
                                var i = e;
                                200 === i.code ? (t.categories = i.data.map((function(t) { return t.is_default ? t.active = !0 : t.active = !1, t })), t.categories.length > 0 && t.loadPoints()) : t.$toast(i.msg, { duration: 1500 })
                            }))
                        },
                        getLoadCategories: function() {
                            var t = this,
                                e = [],
                                i = [];
                            return this.categories.forEach((function(n) {
                                var a = "marker-".concat(n.id);
                                n.active && i.push(a);
                                var o = t.markers[a];
                                n.active && "[object Array]" !== Object.prototype.toString.call(o) ? e.push(n.id) : n.active && !t.activeIDs[a] && t.switchMarkersRelate(n)
                            })), this.activeIDs = i, e
                        },
                        loadPoints: function() {
                            var t = this,
                                e = this.getLoadCategories();
                            if (!(e.length < 1)) {
                                var i = { is_mine: this.is_mine, category_id: e.join(",") };
                                i = Object.assign(i, this.userInfo), Object(b["d"])(i).then((function(e) {
                                    var i = e;
                                    200 === i.code ? e.data.forEach((function(e) {
                                        if (!(e.points.length < 1)) {
                                            var i = "marker-" + e.category_id,
                                                n = t.pois[i];
                                            "[object Array]" !== Object.prototype.toString.call(n) && (t.pois[i] = []), e.points.forEach((function(e) { t.pois[i].push(e) }));
                                            var a = [];
                                            t.pois[i].forEach((function(e) {
                                                var i = t.$refs.mapvm.addMarker({ lat: +e.lat, lng: +e.lng, icon: e.marker }, (function(i, n) { t.showInfowindow(i, n, e) }));
                                                a.push(i)
                                            })), t.markers[i] = a
                                        }
                                    })) : t.$toast(i.msg, { duration: 1500 })
                                }))
                            }
                        },
                        doMenuAction: function(t) {
                            var e = this[t.action];
                            e && e(t)
                        },
                        filterPoi: function() { this.showFilter = !0 },
                        openMyMap: function(t) {
                            var e = this;
                            this.inApp ? t.selected ? (t.selected = !1, this.is_mine = !1, this.resetMapData(), this.loadPoints()) : this.fetchUserInfo().then((function() { e.userInfo.userId && e.userInfo.sign && (t.selected = !0, e.is_mine = !0, e.resetMapData(), e.loadPoints()) })) : this.$toast("请前往app使用此功能", { duration: 1500 })
                        },
                        shareMap: function() { this.inApp ? this.showShare = !0 : this.$toast("请使用浏览器的分享功能") },
                        shareMapTo: function(t) {
                            var e = this,
                                i = Object(_["b"])(location.href, "inapp");
                            if ("Copy2Clipboard" === t.identifier) this.$copyText(i).then((function(t) { e.$toast("复制成功", { duration: 1500 }) }), (function(t) { alert("复制失败") }));
                            else {
                                var n = { method: "share", appType: t.identifier, msgType: "link", url: i, imageUrl: "https://img.topgamers.cn/icon.png", title: "永劫无间全金堆点位地图", content: "永劫无间固定金堆，随机金堆，洞天宝窟视频点位" };
                                Object(_["a"])(n)
                            }
                            this.showShare = !1
                        },
                        switchMarkersRelate: function(t) {
                            var e = this,
                                i = "marker-".concat(t.id),
                                n = this.markers[i];
                            "[object Array]" === Object.prototype.toString.call(n) ? (n.forEach((function(i) { t.active ? i.setMap(e.$refs.mapvm.map) : i.setMap(null) })), this.activeIDs = [], this.categories.forEach((function(t) { t.active && e.activeIDs.push("marker-".concat(t.id)) }))) : t.active && this.loadPoints()
                        },
                        switchAllMarkers: function(t) {
                            var e = this;
                            t ? this.loadPoints() : (this.categories.forEach((function(t) { e.switchMarkersRelate(t) })), this.activeIDs = [])
                        },
                        showInfowindow: function(t, e, i) { this.infowindow && this.infowindow.close(), this.is_mine ? this.infowindowTemplate("infowindow-template", t, i) : this.infowindowTemplate("infowindow-template-nologin", t, i) },
                        infowindowTemplate: function(t, e, i) {
                            var n = document.getElementById(t).innerHTML;
                            n = n.replace(/#{(\w+)}#/g, "{{$1}}");
                            var a = { background: y.a, place: i.name, person: i.first_member_name, target: i.redirect_type, target_param: i.redirect_params, native: this.inApp, lighting_text: i.is_lighting ? "取消点亮" : "点亮", challenge_id: i.challenge_id, target_lighting: !i.is_lighting, userId: this.userInfo.userId, sign: this.userInfo.sign },
                                o = w.a.render(n, a);
                            this.infowindow = this.$refs.mapvm.createInfoWindow(e, o)
                        }
                    },
                    computed: {
                        validMenus: function() {
                            var t = this,
                                e = [];
                            return this.menus.forEach((function(i) {
                                (!i.needInApp || i.needInApp && t.inApp) && e.push(i)
                            })), e
                        }
                    },
                    created: function() { this.inApp = Object(_["d"])(), this.client = Object(_["c"])(), "isPc" !== this.client && (this.defaultZoom = 5) },
                    mounted: function() {
                        var t = this;
                        this.resolveMapResource().then((function() { t.loadPointCaterories() })), window.flushPoints = this.reloadPoints
                    }
                },
                M = I,
                A = (i("26aa"), Object(f["a"])(M, n, a, !1, null, "788414da", null));
            e["default"] = A.exports
        },
        9911: function(t, e, i) {
            "use strict";
            var n = i("23e7"),
                a = i("857a"),
                o = i("af03");
            n({ target: "String", proto: !0, forced: o("link") }, { link: function(t) { return a(this, "a", "href", t) } })
        },
        ab19: function(t, e, i) {}
    }
]);