(function() {
    var h = {},
    mt = {},
    c = {
        id: "e642058a4f97b4a7da73578072f587be",
        dm: ["slz.nidjia.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: [],
        icon: '',
        ctrk: false,
        align: -1,
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        conv: 0,
        comm: 0,
        apps: ''
    };
    var q = !0,
    r = null,
    s = !1;
    mt.i = {};
    mt.i.Ha = /msie (\d+\.\d+)/i.test(navigator.userAgent);
    mt.i.cookieEnabled = navigator.cookieEnabled;
    mt.i.javaEnabled = navigator.javaEnabled();
    mt.i.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
    mt.i.pa = (window.screen.width || 0) + "x" + (window.screen.height || 0);
    mt.i.colorDepth = window.screen.colorDepth || 0;
    mt.cookie = {};
    mt.cookie.set = function(a, b, f) {
        var d;
        f.D && (d = new Date, d.setTime(d.getTime() + f.D));
        document.cookie = a + "=" + b + (f.domain ? "; domain=" + f.domain: "") + (f.path ? "; path=" + f.path: "") + (d ? "; expires=" + d.toGMTString() : "") + (f.La ? "; secure": "")
    };
    mt.cookie.get = function(a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : r
    };
    mt.q = {};
    mt.q.Ca = function(a) {
        return document.getElementById(a)
    };
    mt.q.Da = function(a, b) {
        for (b = b.toUpperCase(); (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == b) return a;
        return r
    }; (mt.q.na = function() {
        function a() {
            if (!a.w) {
                a.w = q;
                for (var b = 0,
                f = d.length; b < f; b++) d[b]()
            }
        }
        function b() {
            try {
                document.documentElement.doScroll("left")
            } catch(d) {
                setTimeout(b, 1);
                return
            }
            a()
        }
        var f = s,
        d = [],
        l;
        document.addEventListener ? l = function() {
            document.removeEventListener("DOMContentLoaded", l, s);
            a()
        }: document.attachEvent && (l = function() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", l), a())
        }); (function() {
            if (!f) if (f = q, "complete" === document.readyState) a.w = q;
            else if (document.addEventListener) document.addEventListener("DOMContentLoaded", l, s),
            window.addEventListener("load", a, s);
            else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", l);
                window.attachEvent("onload", a);
                var d = s;
                try {
                    d = window.frameElement == r
                } catch(n) {}
                document.documentElement.doScroll && d && b()
            }
        })();
        return function(b) {
            a.w ? b() : d.push(b)
        }
    } ()).w = s;
    mt.event = {};
    mt.event.e = function(a, b, f) {
        a.attachEvent ? a.attachEvent("on" + b,
        function(b) {
            f.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, f, s)
    };
    mt.event.preventDefault = function(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = s
    };
    mt.l = {};
    mt.l.parse = function() {
        return (new Function('return (" + source + ")'))()
    };
    mt.l.stringify = function() {
        function a(a) { / ["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00 - \x1f] / g,
            function(a) {
                var b = f[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
            }));
            return '"' + a + '"'
        }
        function b(a) {
            return 10 > a ? "0" + a: a
        }
        var f = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function(d) {
            switch (typeof d) {
            case "undefined":
                return "undefined";
            case "number":
                return isFinite(d) ? String(d) : "null";
            case "string":
                return a(d);
            case "boolean":
                return String(d);
            default:
                if (d === r) return "null";
                if (d instanceof Array) {
                    var f = ["["],
                    k = d.length,
                    n,
                    e,
                    m;
                    for (e = 0; e < k; e++) switch (m = d[e], typeof m) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        n && f.push(","),
                        f.push(mt.l.stringify(m)),
                        n = 1
                    }
                    f.push("]");
                    return f.join("")
                }
                if (d instanceof Date) return '"' + d.getFullYear() + "-" + b(d.getMonth() + 1) + "-" + b(d.getDate()) + "T" + b(d.getHours()) + ":" + b(d.getMinutes()) + ":" + b(d.getSeconds()) + '"';
                n = ["{"];
                e = mt.l.stringify;
                for (k in d) if (Object.prototype.hasOwnProperty.call(d, k)) switch (m = d[k], typeof m) {
                case "undefined":
                case "unknown":
                case "function":
                    break;
                default:
                    f && n.push(","),
                    f = 1,
                    n.push(e(k) + ":" + e(m))
                }
                n.push("}");
                return n.join("")
            }
        }
    } ();
    mt.lang = {};
    mt.lang.d = function(a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.Ia = function(a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.Ka = function(a) {
        return mt.lang.d(a, "String")
    };
    mt.localStorage = {};
    mt.localStorage.A = function() {
        if (!mt.localStorage.f) try {
            mt.localStorage.f = document.createElement("input"),
            mt.localStorage.f.type = "hidden",
            mt.localStorage.f.style.display = "none",
            mt.localStorage.f.addBehavior("#default#userData"),
            document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)
        } catch(a) {
            return s
        }
        return q
    };
    mt.localStorage.set = function(a, b, f) {
        var d = new Date;
        d.setTime(d.getTime() + f || 31536E6);
        try {
            window.localStorage ? (b = d.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.A() && (mt.localStorage.f.expires = d.toUTCString(), mt.localStorage.f.load(document.location.hostname), mt.localStorage.f.setAttribute(a, b), mt.localStorage.f.save(document.location.hostname))
        } catch(l) {}
    };
    mt.localStorage.get = function(a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"),
                f = a.substring(0, b) - 0;
                if (f && f > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.A()) try {
            return mt.localStorage.f.load(document.location.hostname),
            mt.localStorage.f.getAttribute(a)
        } catch(d) {}
        return r
    };
    mt.localStorage.remove = function(a) {
        if (window.localStorage) window.localStorage.removeItem(a);
        else if (mt.localStorage.A()) try {
            mt.localStorage.f.load(document.location.hostname),
            mt.localStorage.f.removeAttribute(a),
            mt.localStorage.f.save(document.location.hostname)
        } catch(b) {}
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function(a, b) {
        if (window.sessionStorage) try {
            window.sessionStorage.setItem(a, b)
        } catch(f) {}
    };
    mt.sessionStorage.get = function(a) {
        return window.sessionStorage ? window.sessionStorage.getItem(a) : r
    };
    mt.sessionStorage.remove = function(a) {
        window.sessionStorage && window.sessionStorage.removeItem(a)
    };
    mt.S = {};
    mt.S.log = function(a, b) {
        var f = new Image,
        d = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[d] = f;
        f.onload = f.onerror = f.onabort = function() {
            f.onload = f.onerror = f.onabort = r;
            f = window[d] = r;
            b && b(a)
        };
        f.src = a
    };
    mt.K = {};
    mt.K.fa = function() {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch(f) {}
        return a
    };
    mt.K.Aa = function(a, b, f, d, l) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + f + '" height="' + d + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (l || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + f + '" height="' + d + '" src="' + b + '" flashvars="' + (l || "") + '" allowscriptaccess="always" /></object>'
    };
    mt.url = {};
    mt.url.h = function(a, b) {
        var f = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return f ? f[3] : r
    };
    mt.url.Fa = function(a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : r
    };
    mt.url.ca = function(a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : r
    };
    mt.url.M = function(a) {
        return (a = mt.url.ca(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Ea = function(a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : r
    };
    h.p = {
        Ga: "http://tongji.baidu.com/hm-web/welcome/ico",
        R: "log.hm.baidu.com/hm.gif",
        V: "baidu.com",
        ia: "hmmd",
        ka: "hmpl",
        ha: "hmkw",
        ga: "hmci",
        la: "hmsr",
        m: 0,
        j: Math.round( + new Date / 1E3),
        protocol: "https:" == document.location.protocol ? "https:": "http:",
        Ja: 0,
        xa: 6E5,
        ya: 10,
        za: 1024,
        wa: 1,
        Q: 2147483647,
        T: "cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")
    }; (function() {
        var a = {
            k: {},
            e: function(a, f) {
                this.k[a] = this.k[a] || [];
                this.k[a].push(f)
            },
            r: function(a, f) {
                this.k[a] = this.k[a] || [];
                for (var d = this.k[a].length, l = 0; l < d; l++) this.k[a][l](f)
            }
        };
        return h.C = a
    })(); (function() {
        function a(a, d) {
            var l = document.createElement("script");
            l.charset = "utf-8";
            b.d(d, "Function") && (l.readyState ? l.onreadystatechange = function() {
                if ("loaded" === l.readyState || "complete" === l.readyState) l.onreadystatechange = r,
                d()
            }: l.onload = function() {
                d()
            });
            l.src = a;
            var k = document.getElementsByTagName("script")[0];
            k.parentNode.insertBefore(l, k)
        }
        var b = mt.lang;
        return h.load = a
    })(); (function() {
        function a() {
            return function() {
                h.b.a.nv = 0;
                h.b.a.st = 4;
                h.b.a.et = 3;
                h.b.a.ep = h.B.da() + "," + h.B.ba();
                h.b.g()
            }
        }
        function b() {
            clearTimeout(x);
            var a;
            w && (a = "visible" == document[w]);
            y && (a = !document[y]);
            e = "undefined" == typeof a ? q: a;
            if ((!n || !m) && e && g) u = q,
            t = +new Date;
            else if (n && m && (!e || !g)) u = s,
            p += +new Date - t;
            n = e;
            m = g;
            x = setTimeout(b, 100)
        }
        function f(a) {
            var t = document,
            m = "";
            if (a in t) m = a;
            else for (var p = ["webkit", "ms", "moz", "o"], b = 0; b < p.length; b++) {
                var g = p[b] + a.charAt(0).toUpperCase() + a.slice(1);
                if (g in t) {
                    m = g;
                    break
                }
            }
            return m
        }
        function d(a) {
            if (! ("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) g = "focus" == a.type || "focusin" == a.type ? q: s,
            b()
        }
        var l = mt.event,
        k = h.C,
        n = q,
        e = q,
        m = q,
        g = q,
        v = +new Date,
        t = v,
        p = 0,
        u = q,
        w = f("visibilityState"),
        y = f("hidden"),
        x;
        b(); (function() {
            var a = w.replace(/[vV]isibilityState/, "visibilitychange");
            l.e(document, a, b);
            l.e(window, "pageshow", b);
            l.e(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (l.e(document, "focusin", d), l.e(document, "focusout", d)) : (l.e(window, "focus", d), l.e(window, "blur", d))
        })();
        h.B = {
            da: function() {
                return + new Date - v
            },
            ba: function() {
                return u ? +new Date - t + p: p
            }
        };
        k.e("pv-b",
        function() {
            l.e(window, "unload", a())
        });
        return h.B
    })(); (function() {
        var a = mt.lang,
        b = h.p,
        f = h.load,
        d = {
            ma: function(d) {
                if ((void 0 === window._dxt || a.d(window._dxt, "Array")) && "undefined" !== typeof h.b) {
                    var k = h.b.F();
                    f([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(k)].join(""), d)
                }
            },
            va: function(b) {
                if (a.d(b, "String") || a.d(b, "Number")) window._dxt = window._dxt || [],
                window._dxt.push(["_setUserId", b])
            }
        };
        return h.Y = d
    })(); (function() {
        function a(m) {
            for (var b in m) if ({}.hasOwnProperty.call(m, b)) {
                var d = m[b];
                f.d(d, "Object") || f.d(d, "Array") ? a(d) : m[b] = String(d)
            }
        }
        function b(a) {
            return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
        }
        var f = mt.lang,
        d = mt.l,
        l = h.p,
        k = h.C,
        n = h.Y,
        e = {
            N: r,
            o: [],
            z: 0,
            O: s,
            init: function() {
                e.c = 0;
                e.N = {
                    push: function() {
                        e.I.apply(e, arguments)
                    }
                };
                k.e("pv-b",
                function() {
                    e.Z();
                    e.$()
                });
                k.e("pv-d", e.aa);
                k.e("stag-b",
                function() {
                    h.b.a.api = e.c || e.z ? e.c + "_" + e.z: ""
                });
                k.e("stag-d",
                function() {
                    h.b.a.api = 0;
                    e.c = 0;
                    e.z = 0
                })
            },
            Z: function() {
                var a = window._hmt;
                if (a && a.length) for (var b = 0; b < a.length; b++) {
                    var d = a[b];
                    switch (d[0]) {
                    case "_setAccount":
                        1 < d.length && /^[0-9a-z]{32}$/.test(d[1]) && (e.c |= 1, window._bdhm_account = d[1]);
                        break;
                    case "_setAutoPageview":
                        if (1 < d.length && (d = d[1], s === d || q === d)) e.c |= 2,
                        window._bdhm_autoPageview = d
                    }
                }
            },
            $: function() {
                if ("undefined" === typeof window._bdhm_account || window._bdhm_account === c.id) {
                    window._bdhm_account = c.id;
                    var a = window._hmt;
                    if (a && a.length) for (var b = 0,
                    d = a.length; b < d; b++) f.d(a[b], "Array") && "_trackEvent" !== a[b][0] && "_trackRTEvent" !== a[b][0] ? e.I(a[b]) : e.o.push(a[b]);
                    window._hmt = e.N
                }
            },
            aa: function() {
                if (0 < e.o.length) for (var a = 0,
                b = e.o.length; a < b; a++) e.I(e.o[a]);
                e.o = r
            },
            I: function(a) {
                if (f.d(a, "Array")) {
                    var b = a[0];
                    if (e.hasOwnProperty(b) && f.d(e[b], "Function")) e[b](a)
                }
            },
            _trackPageview: function(a) {
                if (1 < a.length && a[1].charAt && "/" == a[1].charAt(0)) {
                    e.c |= 4;
                    h.b.a.et = 0;
                    h.b.a.ep = "";
                    h.b.G ? (h.b.a.nv = 0, h.b.a.st = 4) : h.b.G = q;
                    var b = h.b.a.u,
                    d = h.b.a.su;
                    h.b.a.u = l.protocol + "//" + document.location.host + a[1];
                    e.O || (h.b.a.su = document.location.href);
                    h.b.g();
                    h.b.a.u = b;
                    h.b.a.su = d
                }
            },
            _trackEvent: function(a) {
                2 < a.length && (e.c |= 8, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 4, h.b.a.ep = b(a[1]) + "*" + b(a[2]) + (a[3] ? "*" + b(a[3]) : "") + (a[4] ? "*" + b(a[4]) : ""), h.b.g())
            },
            _setCustomVar: function(a) {
                if (! (4 > a.length)) {
                    var d = a[1],
                    f = a[4] || 3;
                    if (0 < d && 6 > d && 0 < f && 4 > f) {
                        e.z++;
                        for (var t = (h.b.a.cv || "*").split("!"), p = t.length; p < d - 1; p++) t.push("*");
                        t[d - 1] = f + "*" + b(a[2]) + "*" + b(a[3]);
                        h.b.a.cv = t.join("!");
                        a = h.b.a.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                        "" !== a ? h.b.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : h.b.oa("Hm_cv_" + c.id)
                    }
                }
            },
            _setReferrerOverride: function(a) {
                1 < a.length && (h.b.a.su = a[1].charAt && "/" == a[1].charAt(0) ? l.protocol + "//" + window.location.host + a[1] : a[1], e.O = q)
            },
            _trackOrder: function(b) {
                b = b[1];
                f.d(b, "Object") && (a(b), e.c |= 16, h.b.a.nv = 0, h.b.a.st = 4, h.b.a.et = 94, h.b.a.ep = d.stringify(b), h.b.g())
            },
            _trackMobConv: function(a) {
                if (a = {
                    webim: 1,
                    tel: 2,
                    map: 3,
                    sms: 4,
                    callback: 5,
                    share: 6
                } [a[1]]) e.c |= 32,
                h.b.a.et = 93,
                h.b.a.ep = a,
                h.b.g()
            },
            _trackRTPageview: function(b) {
                b = b[1];
                f.d(b, "Object") && (a(b), b = d.stringify(b), 512 >= encodeURIComponent(b).length && (e.c |= 64, h.b.a.rt = b))
            },
            _trackRTEvent: function(b) {
                b = b[1];
                if (f.d(b, "Object")) {
                    a(b);
                    b = encodeURIComponent(d.stringify(b));
                    var g = function(a) {
                        var b = h.b.a.rt;
                        e.c |= 128;
                        h.b.a.et = 90;
                        h.b.a.rt = a;
                        h.b.g();
                        h.b.a.rt = b
                    },
                    k = b.length;
                    if (900 >= k) g.call(this, b);
                    else for (var k = Math.ceil(k / 900), t = "block|" + Math.round(Math.random() * l.Q).toString(16) + "|" + k + "|", p = [], u = 0; u < k; u++) p.push(u),
                    p.push(b.substring(900 * u, 900 * u + 900)),
                    g.call(this, t + p.join("|")),
                    p = []
                }
            },
            _setUserId: function(a) {
                a = a[1];
                n.ma();
                n.va(a)
            }
        };
        e.init();
        h.W = e;
        return h.W
    })(); (function() {
        function a() {
            "undefined" == typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = q, this.a = {},
            this.G = s, this.init())
        }
        var b = mt.url,
        f = mt.S,
        d = mt.K,
        l = mt.lang,
        k = mt.cookie,
        n = mt.i,
        e = mt.localStorage,
        m = mt.sessionStorage,
        g = h.p,
        v = h.C;
        a.prototype = {
            H: function(a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return - 1 < d && d + b.length == a.length
            },
            P: function(a, b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            },
            s: function(a) {
                for (var p = 0; p < c.dm.length; p++) if ( - 1 < c.dm[p].indexOf("/")) {
                    if (this.P(a, c.dm[p])) return q
                } else {
                    var d = b.M(a);
                    if (d && this.H(d, c.dm[p])) return q
                }
                return s
            },
            F: function() {
                for (var a = document.location.hostname,
                b = 0,
                d = c.dm.length; b < d; b++) if (this.H(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[\/\?#].*/, "");
                return a
            },
            L: function() {
                for (var a = 0,
                b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if ( - 1 < d.indexOf("/") && this.P(document.location.href, d)) return d.replace(/^[^\/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            },
            ea: function() {
                if (!document.referrer) return g.j - g.m > c.vdur ? 1 : 4;
                var a = s;
                this.s(document.referrer) && this.s(document.location.href) ? a = q: (a = b.M(document.referrer), a = this.H(a || "", document.location.hostname));
                return a ? g.j - g.m > c.vdur ? 1 : 4 : 3
            },
            getData: function(a) {
                try {
                    return k.get(a) || m.get(a) || e.get(a)
                } catch(b) {}
            },
            setData: function(a, b, d) {
                try {
                    k.set(a, b, {
                        domain: this.F(),
                        path: this.L(),
                        D: d
                    }),
                    d ? e.set(a, b, d) : m.set(a, b)
                } catch(f) {}
            },
            oa: function(a) {
                try {
                    k.set(a, "", {
                        domain: this.F(),
                        path: this.L(),
                        D: -1
                    }),
                    m.remove(a),
                    e.remove(a)
                } catch(b) {}
            },
            ta: function() {
                var a, b, d, f, e;
                g.m = this.getData("Hm_lpvt_" + c.id) || 0;
                13 == g.m.length && (g.m = Math.round(g.m / 1E3));
                b = this.ea();
                a = 4 != b ? 1 : 0;
                if (d = this.getData("Hm_lvt_" + c.id)) {
                    f = d.split(",");
                    for (e = f.length - 1; 0 <= e; e--) 13 == f[e].length && (f[e] = "" + Math.round(f[e] / 1E3));
                    for (; 2592E3 < g.j - f[0];) f.shift();
                    e = 4 > f.length ? 2 : 3;
                    for (1 === a && f.push(g.j); 4 < f.length;) f.shift();
                    d = f.join(",");
                    f = f[f.length - 1]
                } else d = g.j,
                f = "",
                e = 1;
                this.setData("Hm_lvt_" + c.id, d, c.age);
                this.setData("Hm_lpvt_" + c.id, g.j);
                d = g.j == this.getData("Hm_lpvt_" + c.id) ? "1": "0";
                if (0 === c.nv && this.s(document.location.href) && ("" === document.referrer || this.s(document.referrer))) a = 0,
                b = 4;
                this.a.nv = a;
                this.a.st = b;
                this.a.cc = d;
                this.a.lt = f;
                this.a.lv = e
            },
            sa: function() {
                for (var a = [], b = 0, d = g.T.length; b < d; b++) {
                    var f = g.T[b],
                    e = this.a[f];
                    "undefined" != typeof e && "" !== e && a.push(f + "=" + encodeURIComponent(e))
                }
                b = this.a.et;
                this.a.rt && (0 === b ? a.push("rt=" + encodeURIComponent(this.a.rt)) : 90 === b && a.push("rt=" + this.a.rt));
                return a.join("&")
            },
            ua: function() {
                this.ta();
                this.a.si = c.id;
                this.a.su = document.referrer;
                this.a.ds = n.pa;
                this.a.cl = n.colorDepth + "-bit";
                this.a.ln = n.language;
                this.a.ja = n.javaEnabled ? 1 : 0;
                this.a.ck = n.cookieEnabled ? 1 : 0;
                this.a.lo = "number" == typeof _bdhm_top ? 1 : 0;
                this.a.fl = d.fa();
                this.a.v = "1.0.94";
                this.a.cv = decodeURIComponent(this.getData("Hm_cv_" + c.id) || "");
                1 == this.a.nv && (this.a.tt = document.title || "");
                var a = document.location.href;
                this.a.cm = b.h(a, g.ia) || "";
                this.a.cp = b.h(a, g.ka) || "";
                this.a.cw = b.h(a, g.ha) || "";
                this.a.ci = b.h(a, g.ga) || "";
                this.a.cf = b.h(a, g.la) || ""
            },
            init: function() {
                try {
                    this.ua(),
                    0 === this.a.nv ? this.ra() : this.J(".*"),
                    h.b = this,
                    this.X(),
                    v.r("pv-b"),
                    this.qa()
                } catch(a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    f.log(g.protocol + "//" + g.R + "?" + b.join("&"))
                }
            },
            qa: function() {
                function a() {
                    v.r("pv-d")
                }
                "undefined" === typeof window._bdhm_autoPageview || window._bdhm_autoPageview === q ? (this.G = q, this.a.et = 0, this.a.ep = "", this.g(a)) : a()
            },
            g: function(a) {
                var b = this;
                b.a.rnd = Math.round(Math.random() * g.Q);
                v.r("stag-b");
                var d = g.protocol + "//" + g.R + "?" + b.sa();
                v.r("stag-d");
                b.U(d);
                f.log(d,
                function(d) {
                    b.J(d);
                    l.d(a, "Function") && a.call(b)
                })
            },
            X: function() {
                var a = document.location.hash.substring(1),
                d = RegExp(c.id),
                f = -1 < document.referrer.indexOf(g.V) ? q: s,
                e = b.h(a, "jn"),
                l = /^heatlink$|^select$/.test(e);
                a && (d.test(a) && f && l) && (a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", g.protocol + "//" + c.js + e + ".js?" + this.a.rnd), e = document.getElementsByTagName("script")[0], e.parentNode.insertBefore(a, e))
            },
            U: function(a) {
                var b = m.get("Hm_unsent_" + c.id) || "",
                d = this.a.u ? "": "&u=" + encodeURIComponent(document.location.href),
                b = encodeURIComponent(a.replace(/^https?:\/\//, "") + d) + (b ? "," + b: "");
                m.set("Hm_unsent_" + c.id, b)
            },
            J: function(a) {
                var b = m.get("Hm_unsent_" + c.id) || "";
                b && ((b = b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//, "")).replace(/([\*\(\)])/g, "\\$1") + "(%26u%3D[^,]*)?,?", "g"), "").replace(/,$/, "")) ? m.set("Hm_unsent_" + c.id, b) : m.remove("Hm_unsent_" + c.id))
            },
            ra: function() {
                var a = this,
                b = m.get("Hm_unsent_" + c.id);
                if (b) for (var b = b.split(","), d = function(b) {
                    f.log(g.protocol + "//" + decodeURIComponent(b).replace(/^https?:\/\//, ""),
                    function(b) {
                        a.J(b)
                    })
                },
                e = 0, l = b.length; e < l; e++) d(b[e])
            }
        };
        return new a
    })(); (function() {
        var a = mt.q,
        b = mt.event,
        f = mt.url,
        d = mt.l;
        try {
            if (window.performance && performance.timing && "undefined" !== typeof h.b) {
                var l = +new Date,
                k = function(a) {
                    var b = performance.timing,
                    d = b[a + "Start"] ? b[a + "Start"] : 0;
                    a = b[a + "End"] ? b[a + "End"] : 0;
                    return {
                        start: d,
                        end: a,
                        value: 0 < a - d ? a - d: 0
                    }
                },
                n = r;
                a.na(function() {
                    n = +new Date
                });
                var e = function() {
                    var a, b, e;
                    e = k("navigation");
                    b = k("request");
                    e = {
                        netAll: b.start - e.start,
                        netDns: k("domainLookup").value,
                        netTcp: k("connect").value,
                        srv: k("response").start - b.start,
                        dom: performance.timing.domInteractive - performance.timing.fetchStart,
                        loadEvent: k("loadEvent").end - e.start
                    };
                    a = document.referrer;
                    var p = r;
                    b = r;
                    if ("www.baidu.com" === (a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/) || [])[2]) p = f.h(a, "qid"),
                    b = f.h(a, "click_t");
                    a = p;
                    e.qid = a != r ? a: "";
                    b != r ? (e.bdDom = n ? n - b: 0, e.bdRun = l - b, e.bdDef = k("navigation").start - b) : (e.bdDom = 0, e.bdRun = 0, e.bdDef = 0);
                    h.b.a.et = 87;
                    h.b.a.ep = d.stringify(e);
                    h.b.g()
                };
                b.e(window, "load",
                function() {
                    setTimeout(e, 500)
                })
            }
        } catch(m) {}
    })(); (function() {
        var a = h.p,
        b = {
            init: function() {
                try {
                    if ("http:" === a.protocol) {
                        var b = document.createElement("IFRAME");
                        b.setAttribute("src", "http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");
                        b.style.display = "none";
                        b.style.width = "1";
                        b.style.height = "1";
                        b.Ba = "0";
                        document.body.appendChild(b)
                    }
                } catch(f) {}
            }
        },
        f = navigator.userAgent.toLowerCase(); - 1 < f.indexOf("android") && -1 === f.indexOf("micromessenger") && b.init()
    })(); (function() {
        var a = mt.lang,
        b = mt.event,
        f = mt.l;
        if (c.comm && "undefined" !== typeof h.b) {
            var d = function(a) {
                if (a.item) {
                    for (var b = a.length,
                    d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            },
            l = /.*\/swt(\/)?([\?|#].*)?$/i,
            k = {
                click: function() {
                    for (var a = [], b = d(document.getElementsByTagName("a")), b = [].concat.apply(b, d(document.getElementsByTagName("area"))), b = [].concat.apply(b, d(document.getElementsByTagName("img"))), f = /openZoosUrl\(|swt/, e = /\/LR\/Chatpre\.aspx/, g = 0, m = b.length; g < m; g++) {
                        var k = b[g],
                        n = k.getAttribute("onclick"),
                        k = k.getAttribute("href"); (f.test(n) || e.test(k) || l.test(k)) && a.push(b[g])
                    }
                    return a
                }
            },
            n = function(a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === s) return s
            },
            e = function(b, d) {
                var e = {
                    n: "swt",
                    t: "clk"
                };
                e.v = b;
                if (d) {
                    var g = d.getAttribute("href"),
                    k = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : r;
                    l.test(g) ? (e.sn = "mediate", e.snv = g) : a.d(k, "String") && ( - 1 === k.indexOf("openZoosUrl") && -1 !== k.indexOf("swt")) && (g = d.getAttribute("id") || "", e.sn = "wrap", e.snv = k, e.id = g)
                }
                h.b.a.et = 86;
                h.b.a.ep = f.stringify(e);
                h.b.g();
                for (e = +new Date; 500 >= +new Date - e;);
            },
            m,
            g = "/zoosnet" + (/\/$/.test("/zoosnet") ? "": "/"),
            v = function(b, d) {
                if (m === d) return e(g + b, d),
                s;
                if (a.d(d, "Array") || a.d(d, "NodeList")) for (var f = 0,
                k = d.length; f < k; f++) if (m === d[f]) return e(g + b + "/" + (f + 1), d[f]),
                s
            };
            b.e(document, "click",
            function(b) {
                b = b || window.event;
                m = b.target || b.srcElement;
                var d = {};
                for (n(k,
                function(b, e) {
                    d[b] = a.d(e, "Function") ? e() : document.getElementById(e)
                }); m && m !== document && n(d, v) !== s;) m = m.parentNode
            })
        }
    })();
})();