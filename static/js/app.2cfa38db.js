(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["app"], {
        0: function(n, e, t) { n.exports = t("56d7") },
        "2b43": function(n, e, t) {},
        "495f": function(n, e, t) {
            "use strict";
            t.d(e, "i", (function() { return i })), t.d(e, "c", (function() { return c })), t.d(e, "a", (function() { return r })), t.d(e, "j", (function() { return d })), t.d(e, "b", (function() { return p })), t.d(e, "d", (function() { return h })), t.d(e, "h", (function() { return m })), t.d(e, "g", (function() { return l })), t.d(e, "f", (function() { return f })), t.d(e, "e", (function() { return k }));
            t("99af"), t("4160"), t("caad"), t("c975"), t("a15b"), t("d81d"), t("a434"), t("a9e3"), t("d3b7"), t("ac1f"), t("25f0"), t("2532"), t("4d90"), t("5319"), t("1276"), t("159b");
            var a = t("15fd"),
                o = { androidH5: "https://www.gaonengshike.com/app/download/android?channel=h5", ios: "https://gaonengshike.com/app/download/ios", android: "https://gaonengshike.com/app/download/android", win: "https://gaonengshike.com/app/download/windows", androidMyApp: "http://r.topgamers.cn/androidMyApp" };

            function i(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return String(n).padStart(e, t)
            }

            function c() {
                var n = navigator.userAgent,
                    e = [/(MI(\s+)|2013022|2013023|HM|2014011|2014501|2014813|2014811|2014812|2014817|2014818|2014819|2014502|2015|xiaomi).*/i, /(MI(.*|\s*)PAD).*/i, /(iPhone | iPod).*/i, /(iPad).*/i, /(Android).*/i, /(iPhone|iPad|iPod|iOS).*/i, /(windows(.*|\s*)phone).*/i],
                    t = [/MicroMessenger/i, /MiuiBrowser/gi, /weibo/gi],
                    a = {},
                    o = {};
                return a.isIPhone_Pod = function() { return e[2].test(n) }, a.isIPad = function() { return e[3].test(n) }, a.isMiPhone = function() { return e[0].test(n) && !a.isMiPad() }, a.isMiPad = function() { return e[1].test(n) }, a.isAndroid = function() { return e[4].test(n) }, a.isIOS = function() { return e[5].test(n) }, a.isOtherAndroid = function() { return a.isAndroid() && !a.isMiPad() && !a.isMiPhone() }, a.isPC = function() { return !a.isAndroid() && !a.isIOS() && !a.isWinPhone() }, a.isWinPhone = function() { return e[6].test(n) }, o.isWeixin = function() { return t[0].test(n) }, o.isMiBrowser = function() { return t[1].test(n) }, o.isWeibo = function() { return t[2].test(n) }, a.isIOS() ? "isIos" : a.isAndroid() ? "isAnd" : a.isOtherAndroid() ? "isOtherAnd" : o.isMiBrowser() ? "isMi" : "isPc"
            }

            function r(n) {
                if ("isIos" === c()) return s(n);
                var e = n.method,
                    t = Object(a["a"])(n, ["method"]);
                return new Promise((function(n, a) { n(window.JsInterface[e](JSON.stringify(t))) }))
            }

            function u(n) {
                if (window.WebViewJavascriptBridge) return n(window.WebViewJavascriptBridge);
                if (window.WVJBCallbacks) return window.WVJBCallbacks.push(n);
                window.WVJBCallbacks = [n];
                var e = document.createElement("iframe");
                e.style.display = "none", e.src = "https://__bridge_loaded__", document.documentElement.appendChild(e), setTimeout((function() { document.documentElement.removeChild(e) }), 0)
            }

            function s(n) {
                var e = n.method,
                    t = Object(a["a"])(n, ["method"]);
                return new Promise((function(n, a) { u((function(a) { a.callHandler(e, t, (function(e) { n(e) })) })) }))
            }

            function d(n, e) { u((function(t) { t.registerHandler(n, e) })) }

            function p(n, e) {
                if (-1 === n.indexOf(e)) return n;
                for (var t = n.split("?"), a = t[0], o = t[1].split("&"), i = -1, c = 0; c < o.length; c++) { var r = o[c].split("="); if (r[0] === e) { i = c; break } }
                if (-1 === i) return n;
                o.splice(i, 1);
                var u = a;
                return o.length > 0 && (u = u + "?" + o.join("&")), u
            }

            function h() { return /.+topgamers\/.+/.test(navigator.userAgent) }

            function m() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "video",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;

                function t(n) {
                    var e = document.createElement("a");
                    e.setAttribute("href", n), e.click()
                }
                var a = "https://www.gaonengshike.com/dp/".concat(n, "?dl=y&params=").concat(e);
                if ("isIos" === c()) t(a);
                else if ("isAnd" === c() || "isMi" === c())
                    if (~navigator.userAgent.indexOf("MicroMessenger")) window.location.href = "https://sj.qq.com/myapp/detail.htm?apkName=com.tgs.topgamers";
                    else {
                        window.location.href = "topgamers://TopGamers.cn/jump?type=".concat(n, "&params=").concat(e);
                        var i = (new Date).valueOf();
                        setTimeout((function() {
                            var n = (new Date).valueOf() - i;
                            n < 2500 && (window.location.href = o.androidH5)
                        }), 1e3)
                    }
                else window.location.href = o.android
            }

            function l() {
                return new Promise((function(n, e) {
                    var t = !![].map && 0 === document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp");
                    n(t)
                }))
            }

            function f() {
                var n = "",
                    e = !1,
                    t = navigator.userAgent.split(" "),
                    a = "2.7.5",
                    o = "2.7.8",
                    i = "topgamers/iOS/",
                    c = "topgamers/";
                return t.forEach((function(t) {-1 != t.indexOf(i) ? (n = t.replace(i, ""), e = w(n, a)) : -1 != t.indexOf(c) && (n = t.replace(c, ""), e = w(n, o)) })), e && (n = "可以分享" + n), e
            }

            function b(n) {
                n = n.toString();
                for (var e = n.split("."), t = ["0000", "000", "00", "0", ""], a = 0; a < e.length; a++) {
                    var o = e[a].length;
                    e[a] = t[o] + e[a]
                }
                var i = e.join("");
                return i
            }

            function w(n, e) {
                var t = b(n),
                    a = b(e);
                return t >= a
            }

            function k() {
                var n = "",
                    e = !1,
                    t = navigator.userAgent.split(" "),
                    a = "3.0.1",
                    o = "topgamers/iOS/";
                return t.forEach((function(t) {-1 != t.indexOf(o) && (n = t.replace(o, ""), e = w(n, a)) })), e
            }
        },
        "56d7": function(n, e, t) {
            "use strict";
            t.r(e);
            t("e260"), t("e6cf"), t("cca6"), t("a79d");
            var a = t("a026"),
                o = function() {
                    var n = this,
                        e = n.$createElement,
                        t = n._self._c || e;
                    return t("div", { attrs: { id: "app" } }, [t("transition", { attrs: { name: "fade-transform", mode: "out-in" } }, [t("router-view", { key: n.$route.path })], 1)], 1)
                },
                i = [],
                c = { name: "App" },
                r = c,
                u = (t("5c0b"), t("2877")),
                s = Object(u["a"])(r, o, i, !1, null, null, null),
                d = s.exports,
                p = (t("d3b7"), t("8c4f")),
                h = t("495f");
            a["default"].use(p["a"]);
            var m = new p["a"]({ mode: "history", routes: [{ path: "/plusmaps/yuanshen", name: "YuanshenMap", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-7d06fc56")]).then(t.bind(null, "d959")) } }, { path: "/plusmaps/yuanshen/apple", name: "YuanshenAppleMap", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-b675a060")]).then(t.bind(null, "1ad6")) } }, { path: "/plusmaps/yuanshen/apple/mark", name: "YuanshenAppleMapMark", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-c1e2b0e4")]).then(t.bind(null, "caab")) } }, { path: "/plusmaps/yuanshen/v721", name: "YuanshenInazumaMark", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-5cacb34b")]).then(t.bind(null, "84f2")) } }, { path: "/plusmaps/yuanshen/inazuma", name: "YuanshenInazuma", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-51bd548b")]).then(t.bind(null, "b9b6")) } }, { path: "/", name: "NarakaMap", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-f929e112")]).then(t.bind(null, "88ed")) } }, { path: "/plusmaps/naraka/mark", name: "NarakaMapMark", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-7dfa7e5a")]).then(t.bind(null, "236b")) } }, { path: "/plusmaps/2077", name: "Map2077", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-6bfa92f4")]).then(t.bind(null, "309a")) } }, { path: "/plusmaps/assassin", name: "AssassinMapEnter", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-17503a8c")]).then(t.bind(null, "13bd")) } }, { path: "/plusmaps/assassin/:target", name: "AssassinMap", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-1b4d449a")]).then(t.bind(null, "60a0")) } }, { path: "/plusmaps/r6/maps", name: "R6MapPicker", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-4d404016"), t.e("chunk-0d827bdb")]).then(t.bind(null, "25b8")) } }, { path: "/plusmaps/r6/:type", name: "R6Map", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-4bd0aeac"), t.e("chunk-4d404016"), t.e("chunk-10de7354")]).then(t.bind(null, "ffd2")) }, meta: { disableSidePopGesture: !0 } }, { path: "/plusmaps/hotta", name: "Hotta", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-283bed11")]).then(t.bind(null, "094e")) } }, { path: "/plusmaps/undawn/mark", name: "Undawn", component: function() { return Promise.all([t.e("chunk-commons"), t.e("chunk-41b5ba36"), t.e("chunk-f68346ac"), t.e("chunk-058a1022"), t.e("chunk-5792d160")]).then(t.bind(null, "a198")) } }, { path: "/privates/routes", name: "Routes", component: function() { return t.e("chunk-410a8fc7").then(t.bind(null, "ba48")) } }] });
            m.afterEach((function(n) {
                if (Object(h["d"])() && "isIos" === Object(h["c"])() && Object(h["e"])()) {
                    var e = !1;
                    n.meta && (e = n.meta.disableSidePopGesture), Object(h["a"])({ method: "changeSideslipReturn", close: e })
                }
            }));
            var l = m,
                f = t("00e7"),
                b = t.n(f),
                w = t("5c96"),
                k = t.n(w),
                v = (t("0fae"), t("97ba"), t("99af"), { show: !1, component: null }),
                g = {
                    install: function(n) {
                        n.prototype.$toast = function(e, t) {
                            var a = { position: "center", duration: 1e3, wordWrap: !1 };
                            t = Object.assign(a, t);
                            var o = t.wordWrap ? "zh-word-wrap" : "",
                                i = t.width ? 'style="width: '.concat(t.width, '"') : "";
                            if (!v.show) {
                                if (!v.component) {
                                    var c = n.extend({ data: function() { return { show: v.show, text: e, position: "zh-toast-".concat(t.position) } }, template: '<div v-show="show" :class="position" class="zh-toast '.concat(o, '" ').concat(i, ">{{text}}</div>") });
                                    v.component = new c;
                                    var r = v.component.$mount().$el;
                                    document.body.appendChild(r)
                                }
                                v.component.position = "zh-toast-".concat(t.position), v.component.text = e, v.component.show = v.show = !0, setTimeout((function() { v.component.show = v.show = !1 }), t.duration)
                            }
                        }
                    }
                },
                _ = t("4eb5"),
                M = t.n(_),
                P = t("2570"),
                A = t.n(P);
            t("73ed"), t("2b43");
            window.__tg_map_redirect_challenge__ = function(n, e, t) {
                if (t) Object(h["a"])({ method: "redirectToActivity", redirect_type: n, redirect_param: e });
                else {
                    var a = Object(h["c"])();
                    location.href = "isIos" === a || "isAnd" === a ? "".concat(location.origin, "/challenge/").concat(e) : "".concat(location.origin, "/pc/challenge/").concat(e)
                }
            };
            t("5abe");
            a["default"].directive("scroll", {
                inserted: function(n, e) {
                    var t = function t(a) { e.value(a, n) && n.removeEventListener("scroll", t) };
                    n.addEventListener("scroll", t)
                }
            });
            var O = t("2f62"),
                y = {},
                S = y;

            function j(n, e) { n && window.collectEvent(n, e) }
            var E = {
                    r6MapClick: function(n, e) {
                        n.commit;
                        j("web_r6_click_map", e)
                    },
                    r6MapStayTime: function(n, e) {
                        n.commit;
                        j("web_r6_map_stay_time", e)
                    },
                    r6MapSelectAgent: function(n, e) {
                        n.commit;
                        j("web_r6_select_agent", e)
                    },
                    r6MapModeSwitch: function(n, e) {
                        n.comimt;
                        j("web_r6_switch_mode", e)
                    },
                    r6MapLocationSwitch: function(n, e) {
                        n.comimt;
                        j("web_r6_switch_location", e)
                    },
                    r6MapFloorSwitch: function(n, e) {
                        n.comimt;
                        j("web_r6_switch_floor", e)
                    },
                    r6MapPointSwitch: function(n, e) {
                        n.comimt;
                        j("web_r6_switch_point", e)
                    },
                    r6MapRunModeSwitch: function(n, e) {
                        n.commit;
                        j("web_r6_switch_runmode", e)
                    },
                    r6MapJoinChallenge: function(n, e) {
                        n.commit;
                        j("web_r6_join_challenge", e)
                    }
                },
                I = { namespaced: !0, actions: E };
            a["default"].use(O["a"]);
            var x = new O["a"].Store({ modules: { volcengine: I }, getters: S }),
                z = x;
            a["default"].use(b.a), a["default"].use(k.a), a["default"].use(g), a["default"].use(M.a), a["default"].use(A.a), a["default"].config.productionTip = !1, window.vue = new a["default"]({ el: "#app", router: l, store: z, components: { App: d }, template: "<App/>" })
        },
        "5abe": function(n, e, t) {
            t("ac1f"), t("1276"),
                function() {
                    var n = document.createElement("script");
                    n.src = "https://hm.baidu.com/hm.js?3e37123a5c6bf8b53d25099acc30af40";
                    var e = document.getElementsByTagName("body")[0];
                    e.appendChild(n);
                    var t = document.createElement("script"),
                        a = window.location.protocol.split(":")[0];
                    t.src = "https" === a ? "https://zz.bdstatic.com/linksubmit/push.js" : "http://push.zhanzhang.baidu.com/push.js", e.appendChild(t)
                }()
        },
        "5c0b": function(n, e, t) {
            "use strict";
            t("9c0c")
        },
        "73ed": function(n, e, t) {},
        "97ba": function(n, e, t) {},
        "9c0c": function(n, e, t) {}
    },
    [
        [0, "runtime", "chunk-elementUI", "chunk-libs"]
    ]
]);