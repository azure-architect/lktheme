/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/js/plugins.counter.js ***!
  \***********************************/
/* https://github.com/mhuggins/jquery-countTo
   CountTo */
(function (e) {
  function t(e, t) {
    return e.toFixed(t.decimals);
  }
  e.fn.countTo = function (t) {
    t = t || {};
    return e(this).each(function () {
      function l() {
        a += i;
        u++;
        c(a);
        if (typeof n.onUpdate == "function") {
          n.onUpdate.call(s, a);
        }
        if (u >= r) {
          o.removeData("countTo");
          clearInterval(f.interval);
          a = n.to;
          if (typeof n.onComplete == "function") {
            n.onComplete.call(s, a);
          }
        }
      }
      function c(e) {
        var t = n.formatter.call(s, e, n);
        o.text(t);
      }
      var n = e.extend({}, e.fn.countTo.defaults, {
        from: e(this).data("from"),
        to: e(this).data("to"),
        speed: e(this).data("speed"),
        refreshInterval: e(this).data("refresh-interval"),
        decimals: e(this).data("decimals")
      }, t);
      var r = Math.ceil(n.speed / n.refreshInterval),
        i = (n.to - n.from) / r;
      var s = this,
        o = e(this),
        u = 0,
        a = n.from,
        f = o.data("countTo") || {};
      o.data("countTo", f);
      if (f.interval) {
        clearInterval(f.interval);
      }
      f.interval = setInterval(l, n.refreshInterval);
      c(a);
    });
  };
  e.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: t,
    onUpdate: null,
    onComplete: null
  };
})(jQuery);
/******/ })()
;