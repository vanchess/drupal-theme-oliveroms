(function() {
    "use strict";
    function ownKeys(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, o)
        }
        return n
    }
    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                _defineProperty(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function _defineProperty(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var POS_PREFIX_116 = "--pos-banner-fluid-116__"
      , posOptionsInitialBanner116 = {
        background: "#FFFFFF",
        "grid-template-columns": "100%",
        "grid-template-rows": "auto 211px",
        "max-width": "1422px",
        "text-font-size": "22px",
        "text-small-font-size": "16px",
        "text-margin": "0 0px 12px 0",
        "description-margin": "0 0 24px 0",
        "button-wrap-max-width": "120px",
        "bg-url": "url('https://pos.gosuslugi.ru/bin/banner-fluid/116/banner-fluid-bg-116.svg')",
        "bg-url-position": "right top",
        "bg-url-size": "90%",
        "content-padding": "32px 44px 58px 32px",
        "logo-wrap-padding": "0px 0px 0px 32px",
        "logo-width": "70px",
        "logo-wrap-top": "-39px",
        "logo-wrap-left": "0",
        "slogan-font-size": "14px",
        "logo-box-shadow": "none",
        "text-small-margin": 0,
        "btn-height": "42px"
    }
      , setStyles = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_116;
        Object.keys(e).forEach((function(o) {
            t.style.setProperty(n + o, e[o])
        }
        ))
    }
      , removeStyles = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : POS_PREFIX_116;
        Object.keys(e).forEach((function(e) {
            t.style.removeProperty(n + e)
        }
        ))
    };
    function changePosBannerOnResize() {
        var e = document.documentElement
          , t = _objectSpread({}, posOptionsInitialBanner116)
          , n = document.getElementById("js-show-iframe-wrapper")
          , o = n ? n.offsetWidth : document.body.offsetWidth;
        o > 660 && (t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/116/banner-fluid-bg-116-2.svg')",
        t["grid-template-columns"] = "65% 35%",
        t["bg-url-size"] = "85%",
        t["bg-url-position"] = "center bottom",
        t["grid-template-rows"] = "200px",
        t["content-padding"] = "37px 0 0 72px",
        t["text-margin"] = "0 0 6px 0",
        t["logo-wrap-top"] = "130px",
        t["logo-wrap-left"] = "-200px",
        t["description-margin"] = "0 0 16px 0"),
        o > 835 && (t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/116/banner-fluid-bg-116-2.svg')",
        t["grid-template-columns"] = "55% 45%",
        t["bg-url-size"] = "85%",
        t["bg-url-position"] = "center bottom",
        t["grid-template-rows"] = "200px",
        t["content-padding"] = "37px 0 0 72px",
        t["text-font-size"] = "28px",
        t["text-margin"] = "0 0 6px 0",
        t["logo-wrap-top"] = "130px",
        t["logo-wrap-left"] = "-275px",
        t["description-margin"] = "0 0 16px 0"),
        o > 1595 && (t["bg-url"] = "url('https://pos.gosuslugi.ru/bin/banner-fluid/116/banner-fluid-bg-116-3.svg')",
        t["max-width"] = "1600px",
        t["grid-template-columns"] = "47% 53%",
        t["content-padding"] = "61px 0 0 88px",
        t["text-small-margin"] = "0",
        t["text-font-size"] = "32px",
        t["text-small-font-size"] = "24px",
        t["bg-url-size"] = "40%",
        t["button-wrap-max-width"] = "200px",
        t["btn-height"] = "72px",
        t["btn-font-size"] = "18px",
        t["bottom-wrap-position"] = "absolute",
        t["bottom-wrap-top"] = "70px",
        t["bottom-wrap-left"] = "1120px",
        t["logo-wrap-top"] = "85px",
        t["logo-wrap-left"] = "580px",
        t["logo-width"] = "102px",
        t["slogan-font-size"] = "20px",
        t["text-position"] = "static",
        t["text-width"] = "auto",
        t["text-margin"] = "0 0 14px 0",
        t["bg-url-position"] = "left bottom"),
        setStyles(t, e)
    }
    changePosBannerOnResize(),
    window.addEventListener("resize", changePosBannerOnResize),
    window.onunload = function() {
        var e = document.documentElement
          , t = _objectSpread({}, posOptionsInitialBanner116);
        window.removeEventListener("resize", changePosBannerOnResize),
        removeStyles(t, e)
    }
    ;
}
)()
