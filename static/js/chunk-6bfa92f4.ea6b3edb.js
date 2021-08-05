(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
            ["chunk-6bfa92f4"], {
                "04ce": function(e, t, i) { e.exports = i.p + "static/img/downloadqr.68ed13ee.png" },
                "1b62": function(e, t, i) {
                    "use strict";
                    var n = i("495f"),
                        o = { computed: { inApp: function() { return Object(n["d"])() }, shareLink: function() { return Object(n["b"])(location.href, "inapp") }, clientType: function() { return Object(n["c"])() }, isIOS: function() { return "isIos" === this.clientType }, isAndroid: function() { return "isAnd" === this.clientType } } };
                    t["a"] = o
                },
                "309a": function(e, t, i) {
                        "use strict";
                        i.r(t);
                        var n = function() {
                        	/*bc_edit*/
                                var e = this,
                                    t = e.$createElement,
                                    i = e._self._c || t;
                                return i("div", { staticClass: "p2077-map-inter" }, [i("NavigationBar", { staticClass: "nav", attrs: { pageTitle: "赛博朋客2077 夜之城", backAction: e.back2App, shareInfo: e.shareInfo, enableBack: e.inApp, enableShare: e.inApp } }), e.mapResource ? i("Map", { ref: "mapvm", staticClass: "map", attrs: { zoom: 6, tileImageProvider: e.mapTileGenerator, bounds: e.mapResource.bounds }, on: { "click-map": e.showCreatePoiPopup } }) : e._e(), e.showDownloadQrcode ? i("QRCode", { staticClass: "qrcode" }) : e._e(), e.showDownloadBar ? i("DownloadBar", { staticClass: "downloadbar" }) : e._e(), i("Menubar", { staticClass: "menus", attrs: { items: e.menus }, on: { "click-item": e.doMenuAction } }), i("PoiFilter", { directives: [{ name: "show", rawName: "v-show", value: e.showFilter, expression: "showFilter" }], attrs: { items: e.categories }, on: { close: function(t) { e.showFilter = !1 }, "item-change": e.switchMarkersRelate, "all-item-change": e.switchAllMarkers } }), i("PoiRank", { directives: [{ name: "show", rawName: "v-show", value: e.showRank, expression: "showRank" }], staticClass: "poi-rank", attrs: { items: e.ranks }, on: { close: function(t) { e.showRank = !1 } } }), i("div", { directives: [{ name: "show", rawName: "v-show", value: e.showCreatePoiWindow, expression: "showCreatePoiWindow" }], staticClass: "create-poi-container", on: { click: function(t) { return t.target !== t.currentTarget ? null : e.cancelCreatePoi(t) } } }, [i("div", { ref: "createPoiPopup", staticClass: "create-poi-popup", style: { top: e.createPoiPopupPositionTop + "px", left: e.createPoiPopupPositionLeft + "px" } }, [i("el-select", { staticStyle: { width: "148px" }, attrs: { placeholder: "选择点位类型", size: "mini" }, model: { value: e.poiType, callback: function(t) { e.poiType = t }, expression: "poiType" } }, e._l(e.poiTypes, (function(e) { return i("el-option", { key: e.value, attrs: { label: e.label, value: e.value } }) })), 1), i("div", { staticClass: "button", on: { click: e.createPoi } })], 1)]), i("div", { staticClass: "rank" }), i("Login", { directives: [{ name: "show", rawName: "v-show", value: e.showWebLogin, expression: "showWebLogin" }], on: { close: function(t) { return e.switchWeblogin(!1) }, login: e.webLoginSuccess } }), i("Sharebar", { directives: [{ name: "show", rawName: "v-show", value: e.showShare, expression: "showShare" }], on: { close: function(t) { e.showShare = !1 }, share: e.shareMapTo } }), i("script", { attrs: { id: "infowindow-template", type: "x-tmpl-mustache" } }, [e._v(' <div style=" width: 32vh; height: 32vh; background-image: url(#{background}#); background-repeat: no-repeat; background-size: 100% 100%; display: flex; flex-direction: column; " > <div style=" width: 100%; height: 10vh; color: #5c5c5c; line-height: 10vh; text-align: center; font-weight: bold; font-size: 2vh; overflow: hidden; " > <span style=" display: inline-block; vertical-align: middle; line-height: 5vh; word-break: break-all; " >地点：#{place}#</span > </div> <div style=" width: 100%; height: 10vh; color: #5c5c5c; line-height: 10vh; text-align: center; font-weight: bold; font-size: 2.5vh; overflow: hidden; " > 先行者：#{person}# </div> <div style=" width: 100%; height: 12vh; display: flex; justify-content: center; align-items: center; " > <button style=" height: 5vh; width: 13vh; border-radius: 2.5vh; background-color: #3a393a; color: #ffffff; font-weight: bold; font-size: 2vh; margin-right: 1vh; cursor: pointer; " onclick="window.__tg_map_redirect_challenge__(\'#{target}#\', \'#{target_param}#\')" > 查看视频 </button> </div> </div> ')])], 1)
                            },
                            o = [],
                            a = (i("99af"), i("4160"), i("d81d"), i("b0c0"), i("7039"), i("d3b7"), i("ac1f"), i("25f0"), i("5319"), i("159b"), i("5c96")),
                            r = i("028d"),
                            s = i("a5c9"),
                            c = i("cdca"),
                            u = i("0a9b"),
                            l = i("a3d2"),
                            p = i("d55e"),
                            h = i("d4a1"),
                            d = i("4dec"),
                            f = i("fdff"),
                            m = i("495f"),
                            v = i("1b62"),
                            g = i("7feb"),
                            b = i("9dbb"),
                            w = i.n(b),
                            P = function() {
                                var e = this,
                                    t = e.$createElement;
                                e._self._c;
                                return e._m(0)
                            },
                            k = [function() {
                                var e = this,
                                    t = e.$createElement,
                                    n = e._self._c || t;
                                return n("div", { staticClass: "qrcode-internal" }, [n("img", { attrs: { src: i("04ce") } }), n("div", { staticClass: "des" })])
                            }],
                            y = { name: "QRCode" },
                            _ = y,
                            O = (i("6fae"), i("2877")),
                            C = Object(O["a"])(_, P, k, !1, null, "e183b5de", null),
                            I = C.exports,
                            j = function() {
                                var e = this,
                                    t = e.$createElement,
                                    i = e._self._c || t;
                                return i("div", { staticClass: "download-bar-internal", on: { click: e.openApp } }, [i("div", { staticClass: "icon" }), e._m(0), i("div", { staticClass: "button" }, [e._v("打开")])])
                            },
                            T = [function() {
                                var e = this,
                                    t = e.$createElement,
                                    i = e._self._c || t;
                                return i("div", { staticClass: "text" }, [i("div", [e._v("下载APP进入2077")]), i("div", [e._v("社区获取更多信息")])])
                            }],
                            R = { name: "DownloadBar", methods: { openApp: function() { Object(m["h"])("gamecommunity", 12) } } },
                            x = R,
                            M = (i("e54d"), Object(O["a"])(x, j, T, !1, null, "05230516", null)),
                            S = M.exports,
                            L = i("b1b0"),
                            A = i.n(L),
                            $ = !1;
                        window.__tg_map_redirect_challenge__ = function(e, t) {
                            if ($) Object(m["a"])({ method: "redirectToActivity", redirect_type: e, redirect_param: t });
                            else {
                                var i = Object(m["c"])();
                                location.href = "isIos" === i || "isAnd" === i ? "".concat(location.origin, "/challenge/").concat(t) : "".concat(location.origin, "/pc/challenge/").concat(t)
                            }
                        };
                        var N = {
                                name: "AssassinMap",
                                mixins: [v["a"]],
                                metaInfo: function() { return { title: "赛博朋客2077 | 高能时刻短视频", meta: [{ hid: "description", name: "description", content: "高能时刻游戏短视频app，快来这个社区我给你看个宝贝" }, { hid: "Keywords", name: "Keywords", content: "高能时刻,游戏短视频" }] } },
                                components: { Map: s["a"], Menubar: u["a"], PoiFilter: l["a"], PoiRank: p["a"], Login: h["a"], Sharebar: c["a"], QRCode: I, DownloadBar: S, NavigationBar: r["a"] },
                                data: function() { return { showShare: !1, mapResource: { id: 5, webpURL: "https://img.topgamers.cn/maps/webp/cyberpunk/2077", pngURL: "https://img.topgamers.cn/maps/cyberpunk/2077" }, ranks: [], showFilter: !1, poiType: "", categories: [], markers: {}, showCreatePoiWindow: !1, tempMarkerForAddingPoi: null, createPoiPopupPositionTop: 0, createPoiPopupPositionLeft: 0, showRank: !1, showWebLogin: !1, userInfo: {}, loading: { instance: null, count: 0 }, shareInfo: {} } },
                                methods: {
                                    back2App: function() { this.inApp ? Object(m["a"])({ method: "closePage" }) : this.$router.back() },
                                    generateShareInfo: function() { this.shareInfo = { title: "赛博朋克2077地图", subtitle: "夜之城中文地图，赛博朋客攻略指南", link: this.shareLink } },
                                    share: function() { this.showShare = !0 },
                                    shareMapTo: function(e) {
                                        var t = this,
                                            i = Object(m["b"])(location.href, "inapp");
                                        if ("Copy2Clipboard" === e.identifier) this.$copyText(i).then((function(e) { t.$toast("复制成功", { duration: 1500 }) }), (function(e) { alert("复制失败") }));
                                        else {
                                            var n = { method: "share", appType: e.identifier, msgType: "link", url: i, imageUrl: "https://img.topgamers.cn/icon.png", title: t.mapResource.shareTitle, content: t.mapResource.shareContent };
                                            Object(m["a"])(n)
                                        }
                                        this.showShare = !1
                                    },
                                    resolveMapTarget: function() {
                                        var e = this;
                                        return new Promise((function(t, i) {
                                            Object(m["g"])().then((function(i) {
                                                var n = e.mapResource;
                                                n.url = n.pngURL, n.postfix = "png", t()
                                            }))
                                        }))
                                    },
                                    mapTileGenerator: function(e) {
                                        var t = this.mapResource,
                                            i = t.url,
                                            n = t.postfix,
                                            o = "".concat(i).concat(e).concat(n);
                                        return o
                                    },
                                    reloadMarkers: function(e) {
                                        var t = this,
                                            i = e.mine,
                                            n = { is_mine: i, activity_id: this.mapResource.id };
                                        n = Object.assign(n, this.userInfo), Object(d["c"])(n).then((function(e) {
                                            var i = e;
                                            200 === i.code ? (t.resetMapData(), t.categories = i.data.categories.map((function(e) { return e.active = !0, e })), t.pois = JSON.parse(i.data.list), Object.getOwnPropertyNames(t.pois).forEach((function(e) {
                                                var i = t.pois[e];
                                                if ("[object Array]" === Object.prototype.toString.call(i)) {
                                                    var n = [];
                                                    i.forEach((function(e) {
                                                        var i = t.$refs.mapvm.addMarker({ lat: +e.lat, lng: +e.lng, icon: e.marker }, (function(i, n) { t.showInfowindow(i, n, e) }));
                                                        n.push(i)
                                                    })), t.markers[e] = n
                                                }
                                            }))) : t.$toast(i.msg, { duration: 1500 })
                                        }))
                                    },
                                    resetMapData: function() {
                                        var e = this;
                                        Object.getOwnPropertyNames(this.markers).forEach((function(t) { var i = e.markers[t]; "[object Array]" === Object.prototype.toString.call(i) && i.forEach((function(e) { e.removeFromMap() })) })), this.markers = {}
                                    },
                                    reloadRank: function() {
                                        var e = this;
                                        Object(f["a"])(this.mapResource.id).then((function(t) {
                                            var i = t.code,
                                                n = t.data;
                                            200 === i && (e.ranks = n)
                                        }))
                                    },
                                    doMenuAction: function(e) {
                                        var t = this[e.action];
                                        t && t(e)
                                    },
                                    myPoi: function(e) { this.showRank = !0 },
                                    filterPoi: function(e) { this.showFilter = !0 },
                                    showCreatePoiPopup: function(e) {
                                        var t = this;
                                        this.markable && (this.showCreatePoiWindow = !0, this.$nextTick().then((function() {
                                            var i = e.latLng,
                                                n = i.lat,
                                                o = i.lng,
                                                a = e.pixel,
                                                r = a.x,
                                                s = a.y,
                                                c = t.$refs.createPoiPopup,
                                                u = c.offsetHeight,
                                                l = c.offsetWidth,
                                                p = window,
                                                h = p.innerHeight,
                                                d = p.innerWidth,
                                                f = r,
                                                m = d - r,
                                                v = s,
                                                g = h - s,
                                                b = 40;
                                            t.createPoiPopupPositionLeft = f > m ? r - b - l : r + b, (t.createPoiPopupPositionLeft + l > d || t.createPoiPopupPositionLeft < 0) && (t.createPoiPopupPositionLeft = (d - l) / 2), t.createPoiPopupPositionTop = v > g ? s - u : s + b + 10, t.createPoiPopupPositionTop < 0 ? t.createPoiPopupPositionTop = s + b : t.createPoiPopupPositionTop + u > h && (t.createPoiPopupPositionTop = s - u - b);
                                            var w = t.$refs.mapvm.addMarker({ lat: n(), lng: o() });
                                            t.tempMarkerForAddingPoi = w
                                        })))
                                    },
                                    cancelCreatePoi: function() { this.tempMarkerForAddingPoi.removeFromMap(), this.showCreatePoiWindow = !1 },
                                    switchMarkersRelate: function(e) {
                                        var t = this,
                                            i = this.markers["marker-".concat(e.id)];
                                        i && i.forEach((function(i) { e.active ? i.setMap(t.$refs.mapvm.map) : i.setMap(null) }))
                                    },
                                    switchAllMarkers: function(e) {
                                        var t = this;
                                        this.categories.forEach((function(e) { t.switchMarkersRelate(e) }))
                                    },
                                    createPoi: function() {
                                        var e = this;
                                        if (this.poiType)
                                            if (this.userInfo.userId) {
                                                this.showLoading();
                                                var t = this.tempMarkerForAddingPoi.position,
                                                    i = { lat: "".concat(t.lat()), lng: "".concat(t.lng()), category_id: this.poiType, activity_id: this.mapResource.id, userId: "".concat(this.userInfo.userId), sign: this.userInfo.sign };
                                                Object(d["a"])(i).then((function(t) {
                                                    setTimeout((function() {
                                                        e.closeLoading();
                                                        var i = t;
                                                        200 === i.code ? (e.$toast("创建成功，等待审核通过后将在地图上显示", { duration: 3e3 }), e.cancelCreatePoi()) : e.$toast(i.msg, { duration: 3e3 })
                                                    }), 1e3)
                                                }))
                                            } else this.requireLogin();
                                        else this.$toast("请先确定点位类型", { duration: 1500 })
                                    },
                                    showInfowindow: function(e, t, i) {
                                        this.infowindow && this.infowindow.close();
                                        var n = document.getElementById("infowindow-template").innerHTML;
                                        n = n.replace(/#{(\w+)}#/g, "{{$1}}");
                                        var o = { background: A.a, place: i.name, person: i.first_member_name, target: i.redirect_type, target_param: i.redirect_params },
                                            a = w.a.render(n, o);
                                        this.infowindow = this.$refs.mapvm.createInfoWindow(e, a)
                                    },
                                    fetchUserInfo: function() {
                                        var e = this;
                                        if ($) Object(m["a"])({ method: "getUserInfo" }).then((function(t) {
                                            var i = JSON.parse(t) || {};
                                            e.userInfo = i;
                                            var n = { USERINFO: i };
                                            return i.loginToken && (n.LOGINTOKEN = i.loginToken), i.userId && (n.USERID = i.userId), Object(g["b"])(n), Promise.resolve(e.userInfo)
                                        }));
                                        else try { this.userInfo = JSON.parse(this.$cookie.get("USERINFO")) || {} } catch (t) { this.$cookie.remove("USERINFO") }
                                    },
                                    requireLogin: function() {
                                        var e = this;
                                        $ ? Object(m["a"])({ method: "login" }).then((function() { return e.cancelCreatePoi(), Object(m["a"])({ method: "getUserInfo" }).then((function(t) { e.userInfo = JSON.parse(t); var i = { USERINFO: t }; return Object(g["b"])(i), Promise.resolve(e.userInfo) })) })) : this.switchWeblogin(!0)
                                    },
                                    switchWeblogin: function(e) { this.showWebLogin = e },
                                    webLoginSuccess: function(e) { this.userInfo = JSON.parse(e), this.switchWeblogin(!1) }, showLoading: function() { this.loading.instance || (this.loading.instance = a["Loading"].service({ fullscreen: !0, background: "rgba(0, 0, 0, 0.65)" })), this.loading.count += 1 }, closeLoading: function() { var e = this;
                            this.loading.count <= 0 || (this.loading.count -= 1, this.loading.count <= 0 && this.$nextTick((function() { e.loading.instance.close(), e.loading.instance = null }))) } }, computed: { createPoiPopupStyle: function() { return { top: "".concat(this.createPoiPopupPosition.top, " px"), left: "".concat(this.createPoiPopupPosition.left, " px") } }, poiTypes: function() { return this.categories.map((function(e) { return { label: e.name, value: e.id } })) }, mapTarget: function() { return this.$route.params.target }, defaultResource: function() { return { url: "https://img.topgamers.cn/assassin/valhalla", id: 2 } }, markable: function() { return "1" === this.$route.query.markable }, menus: function() { var e = [{ id: 1, title: "点位筛选", icon: "map-menu-assassin-poi-filter", action: "filterPoi" }]; return this.markable && e.unshift({ id: 0, title: "点位贡献", icon: "map-menu-assassin-my-create", action: "myPoi" }), e }, showDownloadQrcode: function() { return "isPc" === Object(m["c"])() && !1 === this.markable }, showDownloadBar: function() { return "isPc" !== Object(m["c"])() && !1 === this.markable && !this.inApp } }, created: function() { var e = this;
                        this.resolveMapTarget().then((function() { e.reloadMarkers({ mine: !1 }), e.reloadRank() })) }, mounted: function() { $ = this.inApp, this.fetchUserInfo(), this.generateShareInfo() } },
                E = N,
                F = (i("3129"), Object(O["a"])(E, n, o, !1, null, "004ca364", null));
            t["default"] = F.exports }, 3129: function(e, t, i) { "use strict";
            i("4b8c") }, "4b8c": function(e, t, i) {}, "55e2": function(e, t, i) {}, "6fae": function(e, t, i) { "use strict";
            i("a4b2") }, "7feb": function(e, t, i) { "use strict";
            i.d(t, "b", (function() { return a })), i.d(t, "a", (function() { return r }));
            i("d3b7"), i("25f0"); var n = i("00e7"),
                o = i.n(n);

            function a(e) { for (var t in e) { var i = e[t]; "[object Object]" === Object.prototype.toString.call(i) && (i = JSON.stringify(i)), o.a.set(t, i, { expires: "30D" }) } }

            function r(e) { for (var t in e) o.a.delete(e[t]) } }, 9911: function(e, t, i) { "use strict"; var n = i("23e7"),
                o = i("857a"),
                a = i("af03");
            n({ target: "String", proto: !0, forced: a("link") }, { link: function(e) { return o(this, "a", "href", e) } }) }, "9c0cb": function(e, t, i) {}, a4b2: function(e, t, i) {}, ade3: function(e, t, i) { "use strict";

            function n(e, t, i) { return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e } i.d(t, "a", (function() { return n })) }, c2da: function(e, t, i) { "use strict";
            i("55e2") }, d55e: function(e, t, i) { "use strict"; var n = function() { var e = this,
                        t = e.$createElement,
                        i = e._self._c || t; return i("div", { staticClass: "poi-rank-inter" }, [i("div", { staticClass: "close" }, [i("div", { staticClass: "button", on: { click: function(t) { return e.$emit("close") } } })]), i("div", { staticClass: "content" }, e._l(e.items, (function(t) { return i("div", { key: t.id, staticClass: "item" }, [i("img", { staticClass: "avatar", attrs: { src: t.avatar, alt: "头像" } }), i("span", { staticClass: "name text" }, [e._v(e._s(t.nickname))]), i("span", { staticClass: "count text" }, [e._v(e._s(t.lighting) + "个点")])]) })), 0)]) },
                o = [],
                a = { name: "PoiRank", props: { items: { type: Array, default: function() { return [] } } } },
                r = a,
                s = (i("c2da"), i("2877")),
                c = Object(s["a"])(r, n, o, !1, null, "5225ce98", null);
            t["a"] = c.exports }, db16: function(e, t, i) { "use strict";
            i.d(t, "c", (function() { return o })), i.d(t, "b", (function() { return a })), i.d(t, "a", (function() { return r })); var n = i("97af");

            function o(e, t) { return Object(n["a"])({ url: "api/v1.0/send/code", method: "post", data: { mobile: e, type: t } }) }

            function a(e, t) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1; return Object(n["a"])({ url: "api/v1.0/login/verification", method: "post", data: { mobile: e, code: t, type: i } }) }

            function r(e, t) { return Object(n["a"])({ url: "api/v1.0/login", method: "post", data: { mobile: e, pwd: t } }) } }, e54d: function(e, t, i) { "use strict";
            i("9c0cb") }, fdff: function(e, t, i) { "use strict";
            i.d(t, "a", (function() { return o })); var n = i("97af");

            function o(e) { return Object(n["a"])({ url: "/activity/api/v1.0/yuanshen/heroes", params: { activity_id: e } }) } } }
]);