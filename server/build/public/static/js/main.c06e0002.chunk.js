"use strict";
(this["webpackJsonpjs-client"] = this["webpackJsonpjs-client"] || []).push([[0], { 150: function (e, t, n) { e.exports = { App: "App_App__32OME", bottom: "App_bottom__1608_" }; }, 152: function (e, t, n) { e.exports = { sendMessage: "SendMessage_sendMessage__1rYu0" }; }, 157: function (e, t, n) { e.exports = n(294); }, 166: function (e, t, n) { }, 171: function (e, t) { }, 173: function (e, t) { }, 183: function (e, t) { }, 185: function (e, t) { }, 212: function (e, t) { }, 213: function (e, t) { }, 218: function (e, t) { }, 220: function (e, t) { }, 244: function (e, t) { }, 291: function (e, t) { }, 294: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(1), s = n.n(a), o = n(48), r = n.n(o), c = n(297), i = n(29), u = (n(166), n(150)), l = n.n(u), m = n(49), d = n(151), p = n.n(d), f = n(78), E = s.a.memo((function (e) { var t = e.text, n = e.sender, a = (e.id, e.timestamp, p()(f.message, Object(m.a)({}, f.sent, "0" === n.id))); return s.a.createElement("div", { className: a }, t); })), g = function (e) { var t = Object(i.c)((function (e) { return e.chat.messages; })); return s.a.createElement("div", { className: "chat" }, t.map((function (e) { return s.a.createElement(E, { text: e.text, sender: e.sender, timestamp: e.timestamp, id: e.id, key: e.id }); }))); }, v = n(155), S = n(152), b = n.n(S), h = n(28), y = n(153), _ = n.n(y)()();
            function O(e) { var t, n, a = { text: e, id: Object(h.v4)(), timestamp: Date.now(), sender: { id: "0", displayName: "You" } }; return t = "SEND_MESSAGE", n = a, _.emit(t, n), { type: "SEND_MESSAGE", payload: a }; }
            var j = function (e) { var t = Object(i.b)(), n = e.message, o = Object(a.useState)(null !== n && void 0 !== n ? n : ""), r = Object(v.a)(o, 2), c = r[0], u = r[1]; return s.a.createElement("form", { className: b.a.sendMessage, onSubmit: function (e) { t(O(c)), u(""), e.preventDefault(); } }, s.a.createElement("label", null, s.a.createElement("input", { type: "textarea", onChange: function (e) { u(e.target.value); }, value: c })), s.a.createElement("button", { type: "submit", value: "Send" }, "Send")); };
            function M() { return s.a.createElement("div", { className: "App" }, s.a.createElement(g, null), s.a.createElement("div", { className: l.a.bottom }, s.a.createElement(j, null))); }
            j.defaultProps = { message: "" };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var w = n(51), x = n(52), N = n(14), A = n(79), D = { loggedIn: !1, session: "", currentUser: { id: Object(h.v4)(), displayName: "You" } };
            var I = { messages: [{ id: "1", sender: { id: Object(h.v4)(), displayName: "Sergo Pasoevi" }, timestamp: Date.now(), text: "Do you want to bang tonight?" }] };
            var G, k = Object(N.c)({ system: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                    case "UPDATE_SESSION": return Object(A.a)(Object(A.a)({}, e), t.payload);
                    default: return e;
                } }, chat: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I, t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                    case "SEND_MESSAGE":
                        var n = { id: t.payload.id, sender: t.payload.sender, text: t.payload.text, timestamp: t.payload.timestamp };
                        return { messages: [].concat(Object(w.a)(e.messages), [n]) };
                    case "DELETE_MESSAGE": return { messages: e.messages.filter((function (e) { return e.timestamp !== t.meta.timestamp; })) };
                    default: return e;
                } } }), J = function () { try {
                var e = localStorage.getItem("state");
                if (null === e)
                    return;
                return JSON.parse(e);
            }
            catch (t) {
                return;
            } }(), Y = Object(x.a)({ reducer: k, middleware: [].concat(Object(w.a)(Object(x.b)()), [function (e) { return function (t) { return function (n) { return console.log("dispatching", n), console.log("next state", e.getState()), t(n); }; }; }]), devTools: !1, preloadedState: J });
            Y.subscribe((function () { !function (e) { try {
                var t = JSON.stringify(e);
                localStorage.setItem("state", t);
            }
            catch (n) { } }(Y.getState()); })), G = Y, _.on("RECEIVE_MESSAGE", (function (e) { if ("0" !== e.sender.id)
                return G.dispatch({ RECEIVE_MESSAGE: "RECEIVE_MESSAGE", payload: e }); }));
            var C = document.getElementById("root");
            c.a({ dsn: "https://d964005f348340158006751922530bf6@o406571.ingest.sentry.io/5274291" }), r.a.render(s.a.createElement(i.a, { store: Y }, s.a.createElement(s.a.StrictMode, null, s.a.createElement(M, null))), C), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) { e.unregister(); })).catch((function (e) { console.error(e.message); }));
        }, 78: function (e, t, n) { e.exports = { message: "Message_message__1cPJi", sent: "Message_sent__5xYYz" }; } }, [[157, 1, 2]]]);
//# sourceMappingURL=main.c06e0002.chunk.js.map
