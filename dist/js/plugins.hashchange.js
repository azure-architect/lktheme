/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/plugins.hashchange.js":
/*!**************************************!*\
  !*** ./src/js/plugins.hashchange.js ***!
  \**************************************/
/***/ (function() {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function ($, r) {
  var h,
    n = Array.prototype.slice,
    t = decodeURIComponent,
    a = $.param,
    j,
    c,
    m,
    y,
    b = $.bbq = $.bbq || {},
    s,
    x,
    k,
    e = $.event.special,
    d = "hashchange",
    B = "querystring",
    F = "fragment",
    z = "elemUrlAttr",
    l = "href",
    w = "src",
    p = /^.*\?|#.*$/g,
    u,
    H,
    g,
    i,
    C,
    E = {};
  function G(I) {
    return typeof I === "string";
  }
  function D(J) {
    var I = n.call(arguments, 1);
    return function () {
      return J.apply(this, I.concat(n.call(arguments)));
    };
  }
  function o(I) {
    return I.replace(H, "$2");
  }
  function q(I) {
    return I.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1");
  }
  function f(K, P, I, L, J) {
    var R, O, N, Q, M;
    if (L !== h) {
      N = I.match(K ? H : /^([^#?]*)\??([^#]*)(#?.*)/);
      M = N[3] || "";
      if (J === 2 && G(L)) {
        O = L.replace(K ? u : p, "");
      } else {
        Q = m(N[2]);
        L = G(L) ? m[K ? F : B](L) : L;
        O = J === 2 ? L : J === 1 ? $.extend({}, L, Q) : $.extend({}, Q, L);
        O = j(O);
        if (K) {
          O = O.replace(g, t);
        }
      }
      R = N[1] + (K ? C : O || !N[1] ? "?" : "") + O + M;
    } else {
      R = P(I !== h ? I : location.href);
    }
    return R;
  }
  a[B] = D(f, 0, q);
  a[F] = c = D(f, 1, o);
  a.sorted = j = function j(J, K) {
    var I = [],
      L = {};
    $.each(a(J, K).split("&"), function (P, M) {
      var O = M.replace(/(?:%5B|=).*$/, ""),
        N = L[O];
      if (!N) {
        N = L[O] = [];
        I.push(O);
      }
      N.push(M);
    });
    return $.map(I.sort(), function (M) {
      return L[M];
    }).join("&");
  };
  c.noEscape = function (J) {
    J = J || "";
    var I = $.map(J.split(""), encodeURIComponent);
    g = new RegExp(I.join("|"), "g");
  };
  c.noEscape(",/");
  c.ajaxCrawlable = function (I) {
    if (I !== h) {
      if (I) {
        u = /^.*(?:#!|#)/;
        H = /^([^#]*)(?:#!|#)?(.*)$/;
        C = "#!";
      } else {
        u = /^.*#/;
        H = /^([^#]*)#?(.*)$/;
        C = "#";
      }
      i = !!I;
    }
    return i;
  };
  c.ajaxCrawlable(0);
  $.deparam = m = function m(L, I) {
    var K = {},
      J = {
        "true": !0,
        "false": !1,
        "null": null
      };
    $.each(L.replace(/\+/g, " ").split("&"), function (O, T) {
      var N = T.split("="),
        S = t(N[0]),
        M,
        R = K,
        P = 0,
        U = S.split("]["),
        Q = U.length - 1;
      if (/\[/.test(U[0]) && /\]$/.test(U[Q])) {
        U[Q] = U[Q].replace(/\]$/, "");
        U = U.shift().split("[").concat(U);
        Q = U.length - 1;
      } else {
        Q = 0;
      }
      if (N.length === 2) {
        M = t(N[1]);
        if (I) {
          M = M && !isNaN(M) ? +M : M === "undefined" ? h : J[M] !== h ? J[M] : M;
        }
        if (Q) {
          for (; P <= Q; P++) {
            S = U[P] === "" ? R.length : U[P];
            R = R[S] = P < Q ? R[S] || (U[P + 1] && isNaN(U[P + 1]) ? {} : []) : M;
          }
        } else {
          if ($.isArray(K[S])) {
            K[S].push(M);
          } else {
            if (K[S] !== h) {
              K[S] = [K[S], M];
            } else {
              K[S] = M;
            }
          }
        }
      } else {
        if (S) {
          K[S] = I ? h : "";
        }
      }
    });
    return K;
  };
  function A(K, I, J) {
    if (I === h || typeof I === "boolean") {
      J = I;
      I = a[K ? F : B]();
    } else {
      I = G(I) ? I.replace(K ? u : p, "") : I;
    }
    return m(I, J);
  }
  m[B] = D(A, 0);
  m[F] = y = D(A, 1);
  $[z] || ($[z] = function (I) {
    return $.extend(E, I);
  })({
    a: l,
    base: l,
    iframe: w,
    img: w,
    input: w,
    form: "action",
    link: l,
    script: w
  });
  k = $[z];
  function v(L, J, K, I) {
    if (!G(K) && _typeof(K) !== "object") {
      I = K;
      K = J;
      J = h;
    }
    return this.each(function () {
      var O = $(this),
        M = J || k()[(this.nodeName || "").toLowerCase()] || "",
        N = M && O.attr(M) || "";
      O.attr(M, a[L](N, K, I));
    });
  }
  $.fn[B] = D(v, B);
  $.fn[F] = D(v, F);
  b.pushState = s = function s(L, I) {
    if (G(L) && /^#/.test(L) && I === h) {
      I = 2;
    }
    var K = L !== h,
      J = c(location.href, K ? L : {}, K ? I : 2);
    location.href = J;
  };
  b.getState = x = function x(I, J) {
    return I === h || typeof I === "boolean" ? y(I) : y(J)[I];
  };
  b.removeState = function (I) {
    var J = {};
    if (I !== h) {
      J = x();
      $.each($.isArray(I) ? I : arguments, function (L, K) {
        delete J[K];
      });
    }
    s(J, 2);
  };
  e[d] = $.extend(e[d], {
    add: function add(I) {
      var K;
      function J(M) {
        var L = M[F] = c();
        M.getState = function (N, O) {
          return N === h || typeof N === "boolean" ? m(L, N) : m(L, O)[N];
        };
        K.apply(this, arguments);
      }
      if ($.isFunction(I)) {
        K = I;
        return J;
      } else {
        K = I.handler;
        I.handler = J;
      }
    }
  });
})(jQuery, this);
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function (e, t, n) {
  "$:nomunge";

  function f(e) {
    e = e || location.href;
    return "#" + e.replace(/^[^#]*#?(.*)$/, "$1");
  }
  var r = "hashchange",
    i = document,
    s,
    o = e.event.special,
    u = i.documentMode,
    a = "on" + r in t && (u === n || u > 7);
  e.fn[r] = function (e) {
    return e ? this.bind(r, e) : this.trigger(r);
  };
  e.fn[r].delay = 50;
  o[r] = e.extend(o[r], {
    setup: function setup() {
      if (a) {
        return false;
      }
      e(s.start);
    },
    teardown: function teardown() {
      if (a) {
        return false;
      }
      e(s.stop);
    }
  });
  s = function () {
    function p() {
      var n = f(),
        i = h(u);
      if (n !== u) {
        c(u = n, i);
        e(t).trigger(r);
      } else if (i !== u) {
        location.href = location.href.replace(/#.*/, "") + i;
      }
      o = setTimeout(p, e.fn[r].delay);
    }
    var s = {},
      o,
      u = f(),
      l = function l(e) {
        return e;
      },
      c = l,
      h = l;
    s.start = function () {
      o || p();
    };
    s.stop = function () {
      o && clearTimeout(o);
      o = n;
    };
    navigator.appName === "Microsoft Internet Explorer" && !a && function () {
      var t, n;
      s.start = function () {
        if (!t) {
          n = e.fn[r].src;
          n = n && n + f();
          t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
            n || c(f());
            p();
          }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow;
          i.onpropertychange = function () {
            try {
              if (event.propertyName === "title") {
                t.document.title = i.title;
              }
            } catch (e) {}
          };
        }
      };
      s.stop = l;
      h = function h() {
        return f(t.location.href);
      };
      c = function c(n, s) {
        var o = t.document,
          u = e.fn[r].domain;
        if (n !== s) {
          o.title = i.title;
          o.open();
          u && o.write('<script>document.domain="' + u + '"</script>');
          o.close();
          t.location.hash = n;
        }
      };
    }();
    return s;
  }();
})(jQuery, this);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/plugins.hashchange.js"]();
/******/ 	
/******/ })()
;