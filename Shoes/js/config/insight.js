var _portalId = "33167"; // sandbox // portal_id
var _propId = "556300706" ;// website // propertyID test slide 556301368
var _CDP_DELIVERY_TRIGGER = true;
(function () {
    var w = window;
    if (w.web_event) return;
    var a = window.web_event = function () {
        a.queue.push(arguments);
    }

    a.propId = _propId;
    a.track = a;
    a.queue = [];

    var e = document.createElement("script");
    e.type = "text/javascript", e.async = !0, e.src = "http://sandbox-st-a.cdp.asia/insight.js";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);

})();

