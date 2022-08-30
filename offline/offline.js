(function (g) {
    var window = this; 'use strict'; var z6a = function (a) { var b = new g.rB("und", new g.WD("Default", "und", !0)); b.captionTracks = a.captionTracks; return b }, A6a = function (a) {
        return new g.Dh(function (b, c) {
            var d = a.length, e = [];
            if (d) for (var f = function (n, p) { d--; e[n] = p; 0 == d && b(e) }, h = function (n) { c(n) }, l = 0, m; l < a.length; l++)m = a[l], g.Sda(m, g.Qa(f, l), h);
            else b(e)
        })
    }, S6 = function (a) { this.j = a }, T6 = function () { S6.apply(this, arguments) }, B6a = function () { T6.apply(this, arguments) }, C6a = function () { T6.apply(this, arguments) }, D6a = function () { T6.apply(this, arguments) }, E6a = function () { S6.apply(this, arguments) }, F6a = function () { T6.apply(this, arguments) }, G6a = function () { T6.apply(this, arguments) }, H6a = function () { T6.apply(this, arguments) }, I6a = function () { T6.apply(this, arguments) }, J6a = function () { T6.apply(this, arguments) }, K6a = function () { T6.apply(this, arguments) }, L6a = function () {
        T6.apply(this,
            arguments)
    }, M6a = function () { T6.apply(this, arguments) }, N6a = function () { S6.apply(this, arguments) }, O6a = function () { T6.apply(this, arguments) }, P6a = function () { T6.apply(this, arguments) }, Q6a = function () { T6.apply(this, arguments) }, R6a = function () { T6.apply(this, arguments) }, S6a = function () { T6.apply(this, arguments) }, T6a = function () { T6.apply(this, arguments) }, U6a = function () { T6.apply(this, arguments) }, V6a = function () { S6.apply(this, arguments) }, W6a = function () { S6.apply(this, arguments) }, X6a = function () { S6.apply(this, arguments) },
        Y6a = function () { T6.apply(this, arguments) }, Z6a = function () { T6.apply(this, arguments) }, $6a = function () { T6.apply(this, arguments) }, a7a = function () { T6.apply(this, arguments) }, b7a = function () { T6.apply(this, arguments) }, c7a = function () { T6.apply(this, arguments) }, d7a = function () { T6.apply(this, arguments) }, e7a = function () { T6.apply(this, arguments) }, f7a = function () { T6.apply(this, arguments) }, g7a = function () { T6.apply(this, arguments) }, h7a = function () { T6.apply(this, arguments) }, i7a = function () { T6.apply(this, arguments) }, j7a = function () {
            T6.apply(this,
                arguments)
        }, k7a = function () { T6.apply(this, arguments) }, l7a = function () { T6.apply(this, arguments) }, m7a = function () { T6.apply(this, arguments) }, n7a = function () { T6.apply(this, arguments) }, o7a = function () { T6.apply(this, arguments) }, p7a = function () { T6.apply(this, arguments) }, q7a = function () { T6.apply(this, arguments) }, r7a = function () { T6.apply(this, arguments) }, s7a = function () { T6.apply(this, arguments) }, t7a = function () { T6.apply(this, arguments) }, u7a = function () { T6.apply(this, arguments) }, v7a = function () { T6.apply(this, arguments) },
        w7a = function () { T6.apply(this, arguments) }, x7a = function () { T6.apply(this, arguments) }, y7a = function () { T6.apply(this, arguments) }, z7a = function () { T6.apply(this, arguments) }, A7a = function () { T6.apply(this, arguments) }, B7a = function () { T6.apply(this, arguments) }, C7a = function () { T6.apply(this, arguments) }, D7a = function () { T6.apply(this, arguments) }, E7a = function () { T6.apply(this, arguments) }, F7a = function () { T6.apply(this, arguments) }, G7a = function (a) { return g.rw((0, g.N0a)(), a) }, U6 = function (a) { this.token = a }, H7a = function (a) {
            a =
            a.key || a.id;
            if (!a) throw Error("Entity key is missing"); return a
        }, I7a = function () {
            if (V6) return V6();
            var a = {}; V6 = g.Ow("PersistentEntityStoreDb", {
                xq: (a.EntityStore = { Rn: 1 }, a.EntityAssociationStore = { Rn: 2 }, a), Xw: !1, upgrade: function (b, c) { c(1) && g.lw(g.gw(b, "EntityStore", { keyPath: "key" }), "entityType", "entityType"); c(2) && (b = g.gw(b, "EntityAssociationStore", { keyPath: ["parentEntityKey", "childEntityKey"] }), g.lw(b, "byParentEntityKey", "parentEntityKey"), g.lw(b, "byChildEntityKey", "childEntityKey")) },
                version: 3
            }); return V6()
        }, J7a = function (a) { return g.rw(I7a(), a) }, W6 = function (a, b) {
            b = void 0 === b ? {} : b;
            g.Pv.call(this, g.W0a[a], Object.assign({}, { name: "PESEncoderError", type: a }, b)); this.type = a; this.level = "WARNING"; Object.setPrototypeOf(this, W6.prototype)
        }, K7a = function (a) { return new W6("WRONG_DATA_TYPE", { TY: a }) }, L7a = function (a) { return a instanceof Error ? new W6("UNKNOWN_ENCODE_ERROR", { originalMessage: a.message }) : new W6("UNKNOWN_ENCODE_ERROR") }, M7a = function (a) { return a instanceof Error ? new W6("UNKNOWN_DECODE_ERROR", { originalMessage: a.message }) : new W6("UNKNOWN_DECODE_ERROR") }, N7a = function (a, b) {
            a = a instanceof
                W6 ? a : b(a);
            g.oz(a); throw a;
        }, O7a = function () { }, P7a = function (a, b, c) { try { return a.B(b, c) } catch (d) { N7a(d, L7a) } }, Q7a = function (a) {
            a = (new TextEncoder).encode(a).subarray(0, 16);
            var b = new Uint8Array(16); b.set(a); return b
        }, X6 = function (a) { this.j = a }, S7a = function (a) {
            var b = R7a[a];
            if (b) return b; g.pz(new g.Pv("Entity model not found.", { entityType: a }))
        }, T7a = function (a, b) {
            this.j = a;
            this.u = b; this.B = {}
        }, V7a = function (a, b) {
            a: {
                a = U7a(a.u, b.version);
                try { var c = a.u(b.data, b.key); break a } catch (d) { N7a(d, M7a) } c = void 0
            } return c
        }, Y6 = function (a, b, c) {
            return a.j.objectStore("EntityStore").get(b).then(function (d) {
                if (d) {
                    if (c && d.entityType !== c) throw Error("Incorrect entity type");
                    return V7a(a, d)
                }
            })
        }, Z6 = function (a, b, c) { return c ? (c = c.map(function (d) { return Y6(a, d, b) }), g.aw.all(c)) : a.j.objectStore("EntityStore").index("entityType").getAll(IDBKeyRange.only(b)).then(function (d) { return d.map(function (e) { return V7a(a, e) }) }) }, a7 = function (a, b, c) {
            var d = H7a(b), e = U7a(a.u, 1), f = Object.assign({}, b);
            return a.j.objectStore("EntityStore").get(d).then(function (h) { if (h) { if (h.entityType !== c) throw Error("Incorrect entity type"); f.entityMetadata || (h = V7a(a, h), f.entityMetadata = h.entityMetadata) } }).then(function () {
                var h = {
                    key: d,
                    entityType: c, data: P7a(e, f, d), version: 1
                }; return g.aw.all([g.jw(a.j.objectStore("EntityStore"), h), W7a(a, f, c)])
            }).then(function () {
                $6(a, d, c);
                return d
            })
        }, X7a = function (a, b, c) {
            b = b.map(function (d) { return a7(a, d, c) });
            return g.aw.all(b)
        }, b7 = function (a, b, c) {
            if (null == c ? 0 : c.Pr) {
                var d = new Set;
                return Y7a(a, b, d).then(function () { for (var f = [], h = g.r(d), l = h.next(); !l.done; l = h.next())f.push(b7(a, l.value)); return g.aw.all(f).then(function () { }) })
            } var e = g.kH(b).entityType;
            return g.aw.all([a.j.objectStore("EntityStore").delete(b), Z7a(a, b)]).then(function () { $6(a, b, e) })
        }, $7a = function (a, b) {
            return g.ow(a.j.objectStore("EntityStore").index("entityType"), { query: IDBKeyRange.only(b) }, function (c) {
                return g.aw.all([c.delete(),
                Z7a(a, c.MC())]).then(function () { $6(a, c.MC(), b); return c.continue() })
            })
        }, a8a = function (a, b, c, d) {
            var e = U7a(a.u, 1);
            return Y6(a, b, d).then(function (f) { if (f) { f = g.VG(f, c); var h = { key: b, entityType: d, data: P7a(e, f, b), version: 1 }; return g.aw.all([g.jw(a.j.objectStore("EntityStore"), h), W7a(a, f, d)]) } }).then(function () {
                $6(a, b, d);
                return b
            })
        }, $6 = function (a, b, c) {
            var d = a.B[c];
            d || (d = new Set, a.B[c] = d); d.add(b)
        }, b8a = function (a, b, c) {
            var d = H7a(b);
            c = S7a(c); if (!c) return g.aw.resolve([]); c = new c(b); a = a.j.objectStore("EntityAssociationStore"); b = []; c = g.r(c.u()); for (var e = c.next(); !e.done; e = c.next())b.push(g.jw(a, { parentEntityKey: d, childEntityKey: e.value })); return g.aw.all(b).then(function (f) { return f.map(function (h) { return h[1] }) })
        }, Z7a = function (a, b) { return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b)) }, W7a = function (a, b, c) {
            var d = H7a(b);
            return Z7a(a, d).then(function () { return b8a(a, b, c) })
        }, Y7a = function (a, b, c) {
            if (c.has(b)) return g.aw.resolve(void 0);
            c.add(b); return c8a(a, b).then(function (d) { return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b)).then(function () { return d }) }).then(function (d) {
                var e = g.aw.resolve(void 0), f = {};
                d = g.r(d); for (var h = d.next(); !h.done; f = { dF: f.dF }, h = d.next())f.dF = h.value, e = e.then(function (l) { return function () { return Y7a(a, l.dF, c) } }(f));
                return e
            }).then(function () { })
        }, c8a = function (a, b) {
            var c = a.j.objectStore("EntityAssociationStore");
            return c.index("byParentEntityKey").getAll(IDBKeyRange.only(b)).then(function (d) { var e = []; d = g.r(d); for (var f = d.next(); !f.done; f = d.next())f = f.value, e.push(c.index("byChildEntityKey").getAll(f.childEntityKey)); return g.aw.all(e) }).then(function (d) {
                var e = [];
                d = g.r(d); for (var f = d.next(); !f.done; f = d.next())f = f.value, 1 === f.length && e.push(f[0].childEntityKey); return e
            })
        }, c7 = function () { }, d8a = function () {
            this.j = {};
            this.j[0] = new c7; if (!g.S("aes_pes_encoder_killswitch")) { var a = this.j; try { var b = g.Qv(); var c = Q7a(b); var d = new X6(new g.lF(c), new g.kF(c)) } catch (e) { throw a = e instanceof Error ? new W6("KEY_CREATION_FAILED", { originalMessage: e.message }) : new W6("KEY_CREATION_FAILED"), g.oz(a), a; } a[1] = d }
        }, U7a = function (a, b) {
            b = void 0 === b ? 0 : b;
            a = a.j[b]; if (!a) throw b = new W6("INVALID_ENCODER_VERSION", { TY: b }), g.oz(b), b; return a
        }, d7 = function (a, b) {
            g.J.call(this);
            this.token = a; this.u = b; this.j = []; a = new g.C.BroadcastChannel("PERSISTENT_ENTITY_STORE_SYNC:" + g.Qv()); a.onmessage = this.B.bind(this); this.channel = a
        }, e7 = function (a, b, c) {
            var d, e, f, h;
            return g.z(function (l) {
                if (1 == l.j) return g.x(l, J7a(a.token), 2); if (3 != l.j) return d = l.u, g.x(l, g.iw(d, ["EntityStore", "EntityAssociationStore"], b, function (m) { e = new T7a(m, a.u); return c(e) }), 3);
                f = l.u; e && (h = e.B, 0 < Object.keys(h).length && (a.channel.postMessage(h), e8a(a, h))); return l.return(f)
            })
        }, f8a = function (a, b) {
            a.j.push(b);
            return function () { var c = a.j.indexOf(b); 0 <= c && a.j.splice(c, 1) }
        }, f7 = function (a, b, c) {
            return e7(a, {
                mode: "readwrite",
                Zb: !0
            }, function (d) { return a7(d, b, c) })
        }, g8a = function (a, b) {
            return e7(a, {
                mode: "readwrite",
                Zb: !0
            }, function (c) { return X7a(c, b, "offlineOrchestrationActionWrapperEntity") })
        }, h8a = function (a, b) {
            return e7(a, {
                mode: "readwrite",
                Zb: !0
            }, function (c) { return b7(c, b) })
        }, g7 = function (a, b, c) {
            return e7(a, {
                mode: "readonly",
                Zb: !0
            }, function (d) { return Y6(d, b, c) })
        }, h7 = function (a, b, c) {
            return e7(a, {
                mode: "readonly",
                Zb: !0
            }, function (d) { return Z6(d, b, c) })
        }, e8a = function (a, b) {
            a = g.r(a.j);
            for (var c = a.next(); !c.done; c = a.next())c = c.value, c(b)
        }, i8a = function () {
            var a, b, c;
            return g.z(function (d) { if (1 == d.j) return g.pa(d, 2), g.x(d, g.Aw(), 4); if (2 != d.j) { a = d.u; if (!a || !g.Rv() || "undefined" === typeof g.C.BroadcastChannel) return d.return(); b = new d8a; return d.return(new d7(a, b)) } c = g.ua(d); c instanceof Error && g.oz(c); return d.return() })
        }, i7 = function () {
            j8a || (j8a = i8a());
            return j8a
        }, k8a = function (a) {
            var b;
            a = null == (b = a.options) ? void 0 : b.persistenceOption; return "ENTITY_PERSISTENCE_OPTION_PERSIST" === a || "ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST" === a
        }, l8a = function (a) {
            var b;
            return g.z(function (c) {
                return 1 == c.j ? g.x(c, i7(), 2) : (b = c.u) ? g.x(c, e7(b, "readwrite", function (d) {
                    for (var e = {}, f = {}, h = g.r(a), l = h.next(); !l.done; f = { Hh: f.Hh, pu: f.pu }, l = h.next())f.Hh = l.value, f.Hh.entityKey && k8a(f.Hh) && (f.pu = g.pf(f.Hh.payload), l = void 0, "ENTITY_MUTATION_TYPE_REPLACE" === f.Hh.type && (l = function (m) { return function () { return a7(d, m.Hh.payload[m.pu], m.pu) } }(f)), "ENTITY_MUTATION_TYPE_DELETE" === f.Hh.type && (l = function (m) { return function () { return b7(d, m.Hh.entityKey) } }(f)), "ENTITY_MUTATION_TYPE_UPDATE" ===
                        f.Hh.type && (l = function (m) { return function () { return a8a(d, m.Hh.entityKey, m.Hh.payload[m.pu], m.pu) } }(f)), l && (e[f.Hh.entityKey] = e[f.Hh.entityKey] ? e[f.Hh.entityKey].then(l) : l()));
                    return g.aw.all(Object.values(e))
                }), 0) : c.return()
            })
        }, m8a = function (a) {
            var b;
            return g.z(function (c) { if (1 == c.j) { b = a.mutations; if (!b || 0 >= b.length) return c.return(); if (g.RH) { var d = { type: "ENTITY_LOADED" }; void 0 !== b && (d.payload = b); g.RH.dispatch(d) } return g.x(c, l8a(b), 2) } b.length = 0; g.na(c) })
        }, n8a = function (a) { return void 0 !== a }, o8a = function (a) {
            var b = g.pH();
            b = Object.assign({}, b); a = Object.assign({}, a); for (var c in b) a[c] ? (4 !== b[c] && (b[c] = a[c]), delete a[c]) : 2 !== b[c] && (b[c] = 4); Object.assign(b, a); g.wAa(b); JSON.stringify(b); return b
        }, p8a = function (a) {
            var b, c;
            return g.z(function (d) { if (1 == d.j) return g.x(d, g.Aw(), 2); if (3 != d.j) return (b = d.u) ? g.x(d, g.sH(b), 3) : d.return(); c = d.u; return d.return(g.iw(c, ["index", "media", "captions"], { mode: "readwrite", Zb: !0 }, function (e) { var f = IDBKeyRange.bound(a + "|", a + "~"); e = [e.objectStore("index").delete(f), e.objectStore("media").delete(f), e.objectStore("captions").delete(f)]; return g.aw.all(e).then(function () { }) })) })
        }, q8a = function () {
            var a, b;
            return g.z(function (c) {
                if (1 == c.j) return g.x(c, g.Aw(), 2); if (3 != c.j) { a = c.u; if (!a) throw g.Zv("rvdfd"); return g.x(c, g.sH(a), 3) } b = c.u; return c.return(g.iw(b, ["index", "media"], { mode: "readwrite", Zb: !0 }, function (d) {
                    var e = {}; return g.mw(d.objectStore("index"), {}, function (f) {
                        var h = f.getKey().match(/^([\w\-_]+)\|(a|v)$/), l = g.aw.resolve(void 0); if (h) { var m = h[1]; h = h[2]; e[m] = e[m] || {}; var n; e[m][h] = g.uH(null == (n = f.getValue()) ? void 0 : n.fmts) } else l = f.delete().then(function () { });
                        return g.aw.all([f.continue(), l]).then(function (p) { return g.r(p).next().value })
                    }).then(function () {
                        for (var f = {}, h = g.r(Object.keys(e)), l = h.next(); !l.done; l = h.next()) {
                            l = l.value;
                            var m = e[l].v; f[l] = e[l].a && m ? 1 : 2
                        } var n = o8a(f); return g.xna(d.objectStore("media"), {}, function (p) { var q = p.getKey().match(g.FAa); q && f[q[1]] || d.objectStore("media").delete(p.getKey()); return p.continue() }).then(function () { return n })
                    })
                }))
            })
        }, r8a = function (a, b) {
            var c, d;
            return g.z(function (e) { if (1 == e.j) return g.x(e, g.Aw(), 2); if (3 != e.j) { c = e.u; if (!c) throw g.Zv("wct"); return g.x(e, g.sH(c), 3) } d = e.u; return g.x(e, g.iw(d, ["captions"], { mode: "readwrite", Zb: !0 }, function (f) { var h = []; f = f.objectStore("captions"); for (var l = 0; l < b.length; l++) { var m = g.jw(f, b[l], a + "|" + b[l].metadata.vss_id); h.push(m) } return g.aw.all(h) }), 0) })
        }, s8a = function (a) {
            var b, c, d;
            return g.z(function (e) { if (1 == e.j) return b = IDBKeyRange.bound(a + "|", a + "~"), g.x(e, g.Aw(), 2); if (3 != e.j) { c = e.u; if (!c) throw g.Zv("gactfv"); return g.x(e, g.sH(c), 3) } d = e.u; return e.return(d.getAll("captions", b)) })
        }, t8a = function (a) {
            return g.z(function (b) {
                g.rH(a, 0);
                return b.return(p8a(a))
            })
        }, u8a = function (a) {
            return {
                context: g.sK(),
                videoIds: a
            }
        }, v8a = function (a) {
            return {
                context: g.sK(),
                playlistIds: a
            }
        }, w8a = function (a) {
            return {
                context: g.sK(),
                offlinePlaylistSyncChecks: a
            }
        }, x8a = function (a, b, c, d, e) {
            a = { entityKey: a };
            c && (a.refreshData = c); d && (a.isExpiredStreamUrlRefetch = d); e && (a.downloadParameters = e); return { context: g.dN(b), signatureTimestamp: 19233, videos: [a] }
        }, j7 = function (a, b, c) {
            g.pz(new g.Pv("Woffle: " + a, c ? { cotn: c } : ""));
            b instanceof Error && g.pz(b)
        }, y8a = function (a) {
            var b, c, d, e, f, h, l, m, n, p, q, u, w, y, A, B, D;
            return g.z(function (G) {
                if (1 == G.j) return g.x(G, e7(a, { mode: "readonly", Zb: !0 }, function (H) {
                    return Z6(H, "playbackData").then(function (L) {
                        var N = L.map(function (P) { return P.transfer }).filter(function (P) { return !!P }), K = L.map(function (P) { return P.offlineVideoPolicy }).filter(function (P) { return !!P });
                        N = Z6(H, "transfer", N); K = Z6(H, "offlineVideoPolicy", K); return g.aw.all([N, K]).then(function (P) { var R = g.r(P); P = R.next().value; R = R.next().value; return [L, P, R] })
                    })
                }), 2);
                b = G.u; c = g.r(b); d = c.next().value; e = c.next().value; f = c.next().value; h = d; l = e; m = f; n = {}; p = {}; q = g.r(l); for (u = q.next(); !u.done; u = q.next())(w = u.value) && (n[w.key] = w); y = g.r(m); for (A = y.next(); !A.done; A = y.next())(B = A.value) && (p[B.key] = B); D = h.map(function (H) {
                    var L = n[H.transfer], N = p[H.offlineVideoPolicy]; H = g.kH(N.key).entityId; if ("OFFLINE_VIDEO_POLICY_ACTION_DISABLE" === N.action) {
                        var K = "OFFLINE_VIDEO_STATE_DISABLED"; N.expirationTimestamp && Number(N.expirationTimestamp) < Date.now() / 1E3 && (K = "OFFLINE_VIDEO_STATE_EXPIRED");
                        N = K
                    } else if ("OFFLINE_VIDEO_POLICY_ACTION_DOWNLOAD_FAILED" === N.action) N = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED"; else {
                        switch (null == L ? void 0 : L.transferState) {
                            case "TRANSFER_STATE_TRANSFER_IN_QUEUE": K = "OFFLINE_VIDEO_STATE_PENDING"; break; case "TRANSFER_STATE_TRANSFERRING": K = "OFFLINE_VIDEO_STATE_TRANSFERRING"; break; case "TRANSFER_STATE_PAUSED_BY_USER": K = "OFFLINE_VIDEO_STATE_PAUSED_TRANSFER"; break; case "TRANSFER_STATE_FAILED": K = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED"; break; case "TRANSFER_STATE_COMPLETE": K = "OFFLINE_VIDEO_STATE_PLAYABLE";
                                break; case "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH": K = "OFFLINE_VIDEO_STATE_STREAMS_OUT_OF_DATE"; break; default: K = "OFFLINE_VIDEO_STATE_UNKNOWN"
                        }if ("OFFLINE_VIDEO_STATE_OFFLINE_FAILED" === K) switch (null == L ? void 0 : L.failureReason) {
                            case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE": K = "OFFLINE_VIDEO_STATE_OUT_OF_STORAGE_ERROR"; break; case "TRANSFER_FAILURE_REASON_STREAM_MISSING": K = "OFFLINE_VIDEO_STATE_STREAMS_MISSING"; break; case "TRANSFER_FAILURE_REASON_NETWORK": case "TRANSFER_FAILURE_REASON_NETWORK_LOST": K =
                                "OFFLINE_VIDEO_STATE_NETWORK_ERROR"
                        }N = K
                    } H = { id: H, videoState: N }; if (null == L ? 0 : L.cotn) H.cotn = L.cotn; if (null == L ? 0 : L.maximumDownloadQuality) H.selectedVideoQuality = null == L ? void 0 : L.maximumDownloadQuality; return H
                });
                return G.return({ offlineVideos: D })
            })
        }, z8a = function (a) {
            var b;
            return g.z(function (c) { if (1 == c.j) return g.x(c, y8a(a), 2); b = c.u; g.Kv("offlineStateSnapshot", b); g.na(c) })
        }, k7 = function (a) {
            g.J.call(this);
            this.api = a; "undefined" !== typeof g.C.BroadcastChannel && (this.j = new g.C.BroadcastChannel("PLAYER_OFFLINE_ERROR_SYNC:" + g.Qv()), this.j.onmessage = this.B.bind(this), this.u = new g.C.BroadcastChannel("PLAYER_OFFLINE_PAUSE_SYNC:" + g.Qv()), this.u.onmessage = this.C.bind(this))
        }, l7 = function (a, b) {
            a.api.Pa("onOfflineOperationFailure", b);
            var c; null == (c = a.j) || c.postMessage(b)
        }, A8a = function () { this.locks = navigator.locks }, B8a = function () {
            try {
                var a = g.Ga("ytglobal.locks_");
                if (a) return a; var b; if (b = navigator) { var c = navigator; b = "locks" in c && !!c.locks } if (b) return g.C.localStorage && g.C.localStorage.getItem("noop"), a = new A8a, g.Fa("ytglobal.locks_", a), a
            } catch (d) { }
        }, D8a = function (a, b, c, d) {
            var e = this;
            this.S = a; this.Z = b; this.visibility = c; this.K = d; this.C = this.I = this.D = this.u = this.j = !1; this.J = new g.Xn(function () { C8a(e) });
            this.visibility.subscribe("visibilitystatechange", function () { e.Ff() })
        }, E8a = function (a) {
            if (!a.u && !a.j) {
                var b = B8a();
                if (b) { a.u = !0; var c = g.Qv("OfflineLockManager"); b.request("woffle_orchestration_leader:" + c, {}, function () { var d, e, f, h; return g.z(function (l) { switch (l.j) { case 1: return g.pa(l, 2), a.B = new g.Xi, a.j = !0, a.u = !1, g.x(l, a.S(), 4); case 4: return g.x(l, a.B.promise, 5); case 5: g.ra(l, 0); break; case 2: d = g.ua(l), (null == (f = (e = a).K) ? 0 : f.call(e, "wo_relinquish_leadership_on_lock_request_error")) || C8a(a), d instanceof Error && (h = d, h.args = [{ name: "WoLockManagerError", MD: d.name }], g.oz(h)), g.na(l) } }) }) }
            }
        }, F8a = function (a) {
            a.j && (a.C =
                !0, m7(a))
        }, G8a = function (a, b) { a.j && (a.D = b, m7(a)) }, H8a = function (a, b) { a.j && (a.I = b, m7(a)) }, m7 = function (a) { a.I && a.D && a.C && a.visibility.isBackground() ? g.Yn(a.J, 6E4) : a.J.stop() }, C8a = function (a) {
            a.B && a.B.resolve();
            a.j = !1; a.u = !1; a.Z()
        }, n7 = function (a, b) {
            var c = b.Hj;
            a.encryptedVideoId = b.videoId; a.cotn = null == c ? void 0 : c.cotn; a.offlineabilityFormatType = null == c ? void 0 : c.maximumDownloadQuality; var d; a.isRefresh = null != (d = null == c ? void 0 : c.isRefresh) ? d : !1; var e; a.softErrorCount = null != (e = null == c ? void 0 : c.transferRetryCount) ? e : 0; g.Kv("offlineTransferStatusChanged", a)
        }, I8a = function (a, b, c, d) {
            d = {
                transferStatusType: "TRANSFER_STATUS_TYPE_PROCESSING",
                statusType: "OFFLINING_STARTED", transferFirstStarted: !!d
            }; b && c && (b = Math.floor(b / 1024).toFixed(), c = Math.floor(c / 1024).toFixed(), d.alreadyDownloadedKbytes = b, d.totalFetchedKbytes = b, d.totalContentKbytes = c); n7(d, a)
        }, J8a = function (a) {
            n7({
                transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_USER_PAUSE",
                statusType: "SUSPENDED"
            }, a)
        }, K8a = function (a) {
            switch (a) {
                case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE": return "OFFLINE_DATABASE_ERROR";
                case "TRANSFER_FAILURE_REASON_PLAYABILITY": return "NOT_PLAYABLE"; case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES": return "TOO_MANY_RETRIES"; case "TRANSFER_FAILURE_REASON_INTERNAL": return "OFFLINE_DOWNLOAD_CONTROLLER_ERROR"; case "TRANSFER_FAILURE_REASON_STREAM_MISSING": return "STREAM_VERIFICATION_FAILED"; case "TRANSFER_FAILURE_REASON_SERVER": case "TRANSFER_FAILURE_REASON_SERVER_PROPERTY_MISSING": return "OFFLINE_REQUEST_FAILURE"; case "TRANSFER_FAILURE_REASON_NETWORK": return "OFFLINE_NETWORK_ERROR"; default: return "UNKNOWN_FAILURE_REASON"
            }
        },
        o7 = function () { }, L8a = function () { }, M8a = function (a) {
            if (a.includes(":")) throw Error("Invalid user cache name: " + a);
            return a + ":" + g.Qv("CacheStorage get")
        }, N8a = function () {
            return g.z(function (a) {
                if (void 0 !== p7) return a.return(p7);
                p7 = new Promise(function (b) { var c; return g.z(function (d) { switch (d.j) { case 1: return g.pa(d, 2), g.x(d, q7.open("test-only"), 4); case 4: return g.x(d, q7.delete("test-only"), 5); case 5: g.ra(d, 3); break; case 2: if (c = g.ua(d), c instanceof Error && "SecurityError" === c.name) return b(!1), d.return(); case 3: b("caches" in window), g.na(d) } }) });
                return a.return(p7)
            })
        }, P8a = function () {
            return g.z(function (a) {
                if (1 == a.j) return g.x(a, N8a(), 2);
                if (!a.u) return a.return(void 0); O8a || (O8a = new L8a); return a.return(O8a)
            })
        }, Q8a = function () {
            var a;
            return g.z(function (b) { return 1 == b.j ? g.x(b, P8a(), 2) : (a = b.u) ? b.return(a.delete("yt-player-local-img")) : b.return(!0) })
        }, r7 = function (a) {
            var b, c;
            return g.z(function (d) { if (1 == d.j) return g.x(d, P8a(), 2); if (3 != d.j) { b = d.u; if (!b) throw Error("Cache API not supported"); return a.length ? g.x(d, b.open("yt-player-local-img"), 3) : d.return() } c = d.u; return g.x(d, Promise.all(a.map(function (e) { return c.delete(e) })), 0) })
        }, s7 = function (a) {
            var b, c;
            return g.z(function (d) { if (1 == d.j) return g.x(d, P8a(), 2); if (3 != d.j) { b = d.u; if (!b) throw Error("Cache API not supported"); return a.length ? g.x(d, b.open("yt-player-local-img"), 3) : d.return() } c = d.u; return g.x(d, c.addAll(a), 0) })
        }, t7 = function (a) {
            var b, c, d;
            return 0 < (null != (d = null == (b = a.actionMetadata) ? void 0 : null == (c = b.retryScheduleIntervalsInSeconds) ? void 0 : c.length) ? d : 0)
        }, u7 = function (a) { return "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === a.actionType && !!a.entityKey }, v7 = function (a) { return "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" === a.actionType && !!a.entityKey }, w7 = function (a) { return "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === a.actionType && !!a.entityKey }, A7 = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K, P, R, X, Q, oa, sa, Ba, ya, va;
            return g.z(function (Ja) {
                switch (Ja.j) {
                    case 1: return e = g.lH(a, "ytMainVideoEntity"), f = g.lH(a, "mainVideoEntity"), h = g.lH(a, "ytMainChannelEntity"), l = g.lH(a, "transfer"), g.x(Ja, e7(b, { mode: "readonly", Zb: !0 }, function (Ka) { return g.aw.all([Y6(Ka, e, "ytMainVideoEntity"), Y6(Ka, f, "mainVideoEntity"), Y6(Ka, h, "ytMainChannelEntity"), Y6(Ka, l, "transfer"), Z6(Ka, "ytMainChannelEntity"), Z6(Ka, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: m = Ja.u; n = g.r(m); p = n.next().value; q = n.next().value; u = n.next().value; w = n.next().value; y = n.next().value; A = n.next().value; B = p; D = q; G = u; H = w; L = y; N = A; if (!(B || D || G)) { Ja.Ma(3); break } K = B ? x7(B.thumbnail) : D ? x7(D.thumbnail) : []; if (!G) { P = []; Ja.Ma(4); break } return g.x(Ja, R8a(G, L), 5); case 5: P = Ja.u; case 4: return R = P, g.x(Ja, r7(K.concat(R)), 3); case 3: X = []; Q = g.lH(a, "ytMainDownloadedVideoEntity"); oa = g.lH(a, "mainVideoEntity"); sa = g.r(N); for (Ba = sa.next(); !Ba.done; Ba = sa.next())ya = Ba.value, va = g.kH(ya.key).entityId, va !==
                        a || y7(c, ya.actionProto) || X.push(ya.key); return g.x(Ja, e7(b, { mode: "readwrite", Zb: !0 }, function (Ka) {
                            var qa = X.map(function (kb) { return b7(Ka, kb) });
                            qa.push(b7(Ka, Q, { Pr: !0 })); qa.push(b7(Ka, oa, { Pr: !0 })); return g.aw.all(qa)
                        }), 7);
                    case 7: z7(H), l7(d, { entityKey: Q, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }), l7(d, { entityKey: oa, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }), g.na(Ja)
                }
            })
        }, U8a = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K, P, R, X, Q, oa, sa, Ba, ya, va, Ja, Ka;
            return g.z(function (qa) {
                switch (qa.j) {
                    case 1: return e = g.lH(a, "mainPlaylistEntity"), f = g.lH(a, "ytMainChannelEntity"), g.x(qa, e7(b, { mode: "readonly", Zb: !0 }, function (kb) { return g.aw.all([Y6(kb, e, "mainPlaylistEntity"), Y6(kb, f, "ytMainChannelEntity"), Z6(kb, "mainPlaylistEntity"), Z6(kb, "ytMainChannelEntity"), Z6(kb, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: h = qa.u; l = g.r(h); m = l.next().value; n = l.next().value; p = l.next().value; q = l.next().value; u = l.next().value; w = m; y = n; A = p; B = q; D = u; if (!w && !y) { qa.Ma(3); break } G = w ? S8a(w) : []; if (!y) { H = []; qa.Ma(4); break } return g.x(qa, R8a(y, B), 5); case 5: H = qa.u; case 4: return L = H, g.x(qa, r7(G.concat(L)), 3); case 3: if (!w) { qa.Ma(7); break } return g.x(qa, T8a(w, A), 8); case 8: N = qa.u; if (!N) { qa.Ma(7); break } K = g.r(N); P = K.next(); case 10: if (P.done) { qa.Ma(7); break } R = P.value; X = JSON.parse(g.kH(R).entityId); Q = X.videoId; oa = X.playlistId; if (!Q || oa !==
                        w.playlistId) { qa.Ma(11); break } return g.x(qa, A7(Q, b, c, d), 11); case 11: P = K.next(); qa.Ma(10); break; case 7: sa = []; Ba = g.r(D); for (ya = Ba.next(); !ya.done; ya = Ba.next())va = ya.value, Ja = g.kH(va.key).entityId, Ja !== a || y7(c, va.actionProto) || sa.push(va.key); Ka = g.lH(a, "mainPlaylistEntity"); return g.x(qa, e7(b, { mode: "readwrite", Zb: !0 }, function (kb) {
                            var Mb = sa.map(function (Ta) { return b7(kb, Ta) });
                            Mb.push(b7(kb, Ka, { Pr: !0 })); return g.aw.all(Mb)
                        }), 0)
                }
            })
        }, W8a = function (a, b, c) {
            var d, e, f, h, l, m;
            return g.z(function (n) {
                if (1 == n.j) return g.x(n, e7(a, { mode: "readwrite", Zb: !0 }, function (p) {
                    var q = Z6(p, "transfer"), u = Z6(p, "offlineOrchestrationActionWrapperEntity"); return g.aw.all([q, u]).then(function (w) {
                        w = g.r(w); var y = w.next().value, A = w.next().value; w = V8a.map(function (L) { return $7a(p, L) });
                        A = g.r(A); for (var B = A.next(); !B.done; B = A.next()) { B = B.value; var D = g.kH(B.actionProto.entityKey).entityType, G = "ytMainDownloadedVideoEntity" === D; D = "mainVideoEntity" === D; var H = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === B.actionProto.actionType; y7(b, B.actionProto) || G && (!G || H) && D && (!D || H) || w.push(b7(p, B.key, { Pr: !0 })) } return g.aw.all(w).then(function () { return y })
                    })
                }), 2);
                d = n.u; e = g.r(d); for (f = e.next(); !f.done; f = e.next())h = f.value, z7(h), l = g.kH(h.key).entityId, m = g.lH(l, "ytMainDownloadedVideoEntity"), l7(c, { entityKey: m, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }); return g.x(n, Q8a(), 0)
            })
        }, Y8a = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K;
            return g.z(function (P) {
                switch (P.j) {
                    case 1: return e = g.lH(a, "musicTrack"), f = g.lH(a, "transfer"), g.x(P, e7(b, { mode: "readonly", Zb: !0 }, function (R) { return g.aw.all([Y6(R, e, "musicTrack"), Y6(R, f, "transfer"), Z6(R, "musicTrack"), Z6(R, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: h = P.u; l = g.r(h); m = l.next().value; n = l.next().value; p = l.next().value; q = l.next().value; u = m; w = n; y = p; A = q; if (!u) { P.Ma(3); break } return g.x(P, X8a(u, y), 4); case 4: return B = P.u, g.x(P, r7(B), 3); case 3: D = []; G = g.lH(a, "musicTrack"); H = g.r(A); for (L = H.next(); !L.done; L = H.next())N = L.value, K = g.kH(N.key).entityId, K !== a || y7(c, N.actionProto) || D.push(N.key); return g.x(P, e7(b, { mode: "readwrite", Zb: !0 }, function (R) {
                        var X = D.map(function (Q) { return b7(R, Q) });
                        X.push(b7(R, G, { Pr: !0 })); return g.aw.all(X)
                    }), 6);
                    case 6: z7(w), l7(d, { entityKey: G, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }), g.na(P)
                }
            })
        }, $8a = function (a, b, c, d) {
            var e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K, P, R;
            return g.z(function (X) {
                switch (X.j) {
                    case 1: return e = g.lH(a, "musicPlaylist"), g.x(X, e7(b, { mode: "readonly", Zb: !0 }, function (Q) { return g.aw.all([Y6(Q, e, "musicPlaylist"), Z6(Q, "musicPlaylist"), Z6(Q, "offlineOrchestrationActionWrapperEntity")]) }), 2);
                    case 2: f = X.u; h = g.r(f); l = h.next().value; m = h.next().value; n = h.next().value; p = l; q = m; u = n; if (!p) { X.Ma(3); break } return g.x(X, X8a(p, q), 4); case 4: return w = X.u, g.x(X, r7(w), 3); case 3: if (!p) { X.Ma(6); break } return g.x(X, Z8a(p, q), 7); case 7: y = X.u; if (!y) { X.Ma(6); break } A = g.r(y); B = A.next(); case 9: if (B.done) { X.Ma(6); break } D = B.value; G = g.kH(D).entityId; if (!G) { X.Ma(10); break } return g.x(X, Y8a(G, b, c, d), 10); case 10: B = A.next(); X.Ma(9); break; case 6: H = []; L = g.r(u); for (N = L.next(); !N.done; N = L.next())K = N.value, P = g.kH(K.key).entityId,
                        P !== a || y7(c, K.actionProto) || H.push(K.key); R = g.lH(a, "musicPlaylist"); return g.x(X, e7(b, { mode: "readwrite", Zb: !0 }, function (Q) {
                            var oa = H.map(function (sa) { return b7(Q, sa) });
                            oa.push(b7(Q, R, { Pr: !0 })); return g.aw.all(oa)
                        }), 0)
                }
            })
        }, b9a = function (a, b, c) {
            var d, e, f, h, l, m;
            return g.z(function (n) {
                if (1 == n.j) return g.x(n, e7(a, { mode: "readwrite", Zb: !0 }, function (p) {
                    var q = Z6(p, "transfer"), u = Z6(p, "offlineOrchestrationActionWrapperEntity"); return g.aw.all([q, u]).then(function (w) {
                        w = g.r(w); var y = w.next().value, A = w.next().value; w = a9a.map(function (H) { return $7a(p, H) });
                        A = g.r(A); for (var B = A.next(); !B.done; B = A.next()) { B = B.value; var D = "musicTrack" === g.kH(B.actionProto.entityKey).entityType, G = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === B.actionProto.actionType; y7(b, B.actionProto) || D && (!D || G) || w.push(b7(p, B.key, { Pr: !0 })) } return g.aw.all(w).then(function () { return y })
                    })
                }), 2);
                d = n.u; e = g.r(d); for (f = e.next(); !f.done; f = e.next())h = f.value, z7(h), l = g.kH(h.key).entityId, m = g.lH(l, "musicTrack"), l7(c, { entityKey: m, failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED" }); return g.x(n, Q8a(), 0)
            })
        }, c9a = function (a) {
            for (var b, c = g.r(a.additionalMetadatas), d = c.next(); !d.done; d = c.next())d = d.value, d.offlineMusicVideoData && (b = d.offlineMusicVideoData);
            var e, f, h, l, m; return { id: g.lH(a.videoId, "musicTrack"), videoId: a.videoId, title: a.title, thumbnailDetails: a.thumbnail, lengthMs: String(1E3 * Number(a.lengthSeconds)), albumTitle: null == (e = b) ? void 0 : e.releaseTitle, musicVideoType: null == (f = b) ? void 0 : f.musicVideoType, contentRating: { explicitType: null == (h = b) ? void 0 : h.explicitType }, artistNames: (null == (l = b) ? void 0 : l.byline) || (null == (m = b) ? void 0 : m.channelName), downloadMetadata: g.lH(a.videoId, "musicTrackDownloadMetadataEntity") }
        }, y7 = function (a, b) {
            return a.actionType ===
                b.actionType && a.entityKey === b.entityKey
        }, z7 = function (a) {
            if (a && "TRANSFER_STATE_COMPLETE" !== a.transferState && "TRANSFER_STATE_FAILED" !== a.transferState) {
                var b = g.kH(a.key).entityId;
                n7({ transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_BY_USER", statusType: "CANCELLED" }, { videoId: b, Hj: a })
            }
        }, x7 = function (a) {
            if (!a || !a.thumbnails) return [];
            var b = []; a = g.r(a.thumbnails); for (var c = a.next(); !c.done; c = a.next())c = c.value, c.url && b.push(c.url); return b
        }, S8a = function (a, b) {
            var c = [];
            if (a.thumbnailStyleData) { a = g.r(a.thumbnailStyleData); for (var d = a.next(); !d.done; d = a.next()) { var e = void 0, f = void 0, h = void 0; c = c.concat(x7(null == (e = d.value) ? void 0 : null == (f = e.value) ? void 0 : null == (h = f.collageThumbnail) ? void 0 : h.coverThumbnail)) } } b = x7(b); return c.concat(b)
        }, T8a = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, u, w;
            return g.z(function (y) { c = []; if (a.videos) { d = g.r(a.videos); for (e = d.next(); !e.done; e = d.next())f = e.value, c.push(f); h = g.r(b); for (l = h.next(); !l.done; l = h.next())if (m = l.value, m.key !== a.key && (n = m.videos)) for (p = g.r(n), q = p.next(); !q.done; q = p.next())u = q.value, w = c.indexOf(u), -1 !== w && c.splice(w, 1) } return y.return(c) })
        }, Z8a = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, u, w;
            return g.z(function (y) { c = []; if (a.tracks) { d = g.r(a.tracks); for (e = d.next(); !e.done; e = d.next())f = e.value, c.push(f); h = g.r(b); for (l = h.next(); !l.done; l = h.next())if (m = l.value, m.id !== a.id && (n = m.tracks)) for (p = g.r(n), q = p.next(); !q.done; q = p.next())u = q.value, w = c.indexOf(u), -1 !== w && c.splice(w, 1) } return y.return(c) })
        }, R8a = function (a, b) {
            var c, d, e, f, h, l, m, n;
            return g.z(function (p) { c = x7(a.avatar); d = g.r(b); for (e = d.next(); !e.done; e = d.next())if (f = e.value, f.id !== a.id) for (h = g.r(x7(f.avatar)), l = h.next(); !l.done; l = h.next())m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1); return p.return(c) })
        }, X8a = function (a, b) {
            var c, d, e, f, h, l, m, n;
            return g.z(function (p) { c = x7(a.thumbnailDetails); d = g.r(b); for (e = d.next(); !e.done; e = d.next())if (f = e.value, f.id !== a.id) for (h = g.r(x7(f.thumbnailDetails)), l = h.next(); !l.done; l = h.next())m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1); return p.return(c) })
        }, e9a = function (a) {
            var b;
            return g.z(function (c) { b = g.Zu(a.frameworkUpdates, d9a); return a.frameworkUpdates && b ? g.x(c, m8a(b), 0) : c.return() })
        }, h9a = function (a) {
            var b;
            if (null != (b = a.onResponseReceivedActions) && b.length) { var c; a = null == (c = g.Zu(g.Zu(a.onResponseReceivedActions[0], f9a), g9a)) ? void 0 : c.actions; if (null != a && a.length) return a }
        }, i9a = function (a) {
            var b, c, d, e;
            return g.z(function (f) { if (1 == f.j) { if (!a) return f.return([]); b = g.lH("DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", "mainDownloadsListEntity"); return g.x(f, g7(a, b, "mainDownloadsListEntity"), 2) } c = f.u; return (null == (d = c) ? 0 : null == (e = d.downloads) ? 0 : e.length) ? f.return(c.downloads.map(function (h) { var l; return null != (l = h.videoItem) ? l : "" })) : f.return([]) })
        }, B7 = function (a) { this.j = a }, j9a = function (a, b) {
            var c, d, e, f, h, l, m;
            return g.z(function (n) { switch (n.j) { case 1: c = new Map, d = g.r(b), e = d.next(); case 2: if (e.done) { n.Ma(4); break } f = e.value; h = c; l = h.set; m = f; return g.x(n, a.u(f), 5); case 5: l.call(h, m, n.u); e = d.next(); n.Ma(2); break; case 4: return n.return(c) } })
        }, C7 = function (a, b, c, d, e, f) {
            b = g.lH(b, c);
            d = Object.assign({}, f, { priority: d, retryScheduleIntervalsInSeconds: e }); return { actionType: a, entityKey: b, actionMetadata: d }
        }, D7 = function (a, b, c, d, e) {
            this.status = a;
            this.j = b; this.C = c; this.u = d; this.B = e
        }, k9a = function (a, b, c) {
            this.j = a;
            this.Y = b; this.B = c
        }, n9a = function (a, b) {
            var c, d, e, f, h, l, m, n;
            return g.z(function (p) {
                switch (p.j) {
                    case 1: c = b.entityKey; e = null == (d = g.Zu(b.actionMetadata, E7)) ? void 0 : d.isEnqueuedForExpiredStreamUrlRefetch; g.pa(p, 2); var q = (q = g.Zu(b.actionMetadata, E7)) ? { maximumDownloadQuality: q.maximumDownloadQuality } : void 0; return g.x(p, l9a(a, c, { isEnqueuedForExpiredStreamUrlRefetch: e, CT: q }), 4); case 4: return f = p.u, f ? g.x(p, m9a(a, f, b), 5) : (h = t7(b) ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR", p.return(F7(b,
                        !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", h))); case 5: return p.return(F7(b, !0, f.orchestrationActions)); case 2: return l = g.ua(p), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.Uv && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), j7("PDE handleAdd error"), p.return(F7(b, !1, void 0, m, n))
                }
            })
        }, o9a = function (a,
            b) {
                var c, d, e, f, h, l, m, n, p, q, u, w, y, A, B, D, G;
            return g.z(function (H) {
                switch (H.j) {
                    case 1: return c = b.entityKey, g.x(H, e7(a.j, { mode: "readonly", Zb: !0 }, function (L) { var N = Y6(L, c, "playbackData"), K = Y6(L, g.lH(g.kH(b.entityKey).entityId, "offlineVideoPolicy"), "offlineVideoPolicy"); L = Y6(L, g.lH(g.kH(b.entityKey).entityId, "transfer"), "transfer"); return g.aw.all([N, K, L]) }), 2);
                    case 2: d = H.u; e = g.r(d); f = e.next().value; h = e.next().value; l = e.next().value; m = f; n = h; p = l; if (!m || !n) return H.return(F7(b, !0)); q = { lastPlayerResponseTimestampSeconds: m.playerResponseTimestamp, offlineToken: n.offlineToken }; u = {}; if (null == (w = p) ? 0 : w.maximumDownloadQuality) u.maximumDownloadQuality = p.maximumDownloadQuality; g.pa(H, 3); return g.x(H, l9a(a, c, { refreshData: q, CT: u }), 5); case 5: return y = H.u, y ? g.x(H, m9a(a, y, b), 6) : (A = t7(b) ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR",
                        H.return(F7(b, !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", A))); case 6: return H.return(F7(b, !0, y.orchestrationActions)); case 3: return B = g.ua(H), D = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", G = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", B instanceof g.Uv && "QUOTA_EXCEEDED" === B.type && (D = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", G = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), H.return(F7(b, !1, void 0, D, G))
                }
            })
        }, l9a = function (a, b, c) {
            var d, e,
            f;
            return g.z(function (h) { d = g.EM(); e = x8a(b, a.Y, c.refreshData, c.isEnqueuedForExpiredStreamUrlRefetch, c.CT); f = g.pM(p9a); return h.return(g.yK(d, e, f).then(function (l) { return l })) })
        }, m9a = function (a, b, c) {
            var d;
            return g.z(function (e) { if (1 == e.j) { if (!b.frameworkUpdates || !b.frameworkUpdates.entityBatchUpdate) return e.return(); if (!(b.frameworkUpdates.entityBatchUpdate.mutations && 0 < b.frameworkUpdates.entityBatchUpdate.mutations.length && "ENTITY_MUTATION_TYPE_DELETE" === b.frameworkUpdates.entityBatchUpdate.mutations[0].type)) return e.Ma(2); d = g.kH(b.frameworkUpdates.entityBatchUpdate.mutations[0].entityKey).entityId; return g.x(e, A7(d, a.j, c, a.B), 2) } return g.x(e, m8a(b.frameworkUpdates.entityBatchUpdate), 0) })
        }, F7 = function (a,
            b, c, d, e) { return new D7(b ? "OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" : "OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", t7(a), c, d, e) }, G7 = function () { B7.apply(this, arguments) }, r9a = function (a, b) {
                var c, d;
                return g.z(function (e) {
                    switch (e.j) {
                        case 1: return c = t7(b), g.x(e, g7(a.j, b.entityKey, "transfer"), 2); case 2: if (d = e.u) return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.pa(e, 3); return g.x(e, q9a(a, b), 5); case 5: g.ra(e, 4); break; case 3: return g.ua(e), e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 4: return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                            c))
                    }
                })
            }, s9a = function (a, b) {
                var c, d;
                return g.z(function (e) {
                    switch (e.j) {
                        case 1: return c = t7(b), g.x(e, g7(a.j, b.entityKey, "transfer"), 2); case 2: d = e.u; if (!d || "TRANSFER_STATE_COMPLETE" !== d.transferState) return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.pa(e, 3); return g.x(e, q9a(a, b, !0), 5); case 5: g.ra(e, 4); break; case 3: return g.ua(e), e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
                        case 4: return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
                    }
                })
            }, q9a = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                var d, e, f, h, l; return g.z(function (m) {
                    if (1 == m.j) return d = g.Zu(b.actionMetadata, t9a), h = { key: b.entityKey, transferState: "TRANSFER_STATE_TRANSFER_IN_QUEUE", cotn: g.vz(16), enqueuedTimestampMs: Date.now().toString(), maximumDownloadQuality: null == (e = d) ? void 0 : e.maximumDownloadQuality, preferredAudioTrack: null == (f = d) ? void 0 : f.preferredAudioTrack, transferRetryCount: 0, isRefresh: c, hasLoggedFirstStarted: !1 }, l = g.kH(h.key).entityId, g.x(m, e7(a.j, { mode: "readwrite", Zb: !0 }, function (n) {
                        var p = []; c && p.push(b7(n, g.lH(l, "offlineVideoStreams")));
                        p.push(a7(n, h, "transfer")); return g.aw.all(p)
                    }), 2);
                    n7({ transferStatusType: "TRANSFER_STATUS_TYPE_ENQUEUED", statusType: "ADDED_TO_QUEUE" }, { videoId: l, Hj: h }); g.na(m)
                })
            }, u9a = function (a, b, c) {
                return new g.FH(a, {
                    cotn: b,
                    raw_player_response: c, download_media: !0, start: Infinity, disable_watch_next: !0
                })
            }, v9a = function () {
                return {
                    priority: 1,
                    retryScheduleIntervalsInSeconds: [1, 2, 4]
                }
            }, H7 = function (a, b, c, d, e, f, h, l, m, n, p) {
                this.entityType = a;
                this.actionId = b; this.action = c; this.parentActionId = d; this.rootActionId = void 0 === e ? b : e; this.childActionIds = f; this.prereqActionId = h; this.postreqActionIds = l; this.hasChildActionFailed = n; this.retryScheduleIndex = 0; this.j = p || Date.now(); this.retryScheduleIndex = m || 0
            }, I7 = function (a) {
                return {
                    key: g.lH(a.actionId, "offlineOrchestrationActionWrapperEntity"),
                    actionProto: a.action, parentActionId: a.parentActionId, rootActionId: a.rootActionId, childActionIds: a.childActionIds, prereqActionId: a.prereqActionId, postreqActionIds: a.postreqActionIds, retryScheduleIndex: a.retryScheduleIndex, hasChildActionFailed: a.hasChildActionFailed, enqueueTimeSec: (a.j / 1E3).toFixed()
                }
            }, w9a = function () { this.j = new Map }, y9a = function () {
                x9a || (x9a = new w9a);
                return x9a
            }, z9a = function (a, b) {
                return {
                    eventType: {
                        flowEventNamespace: "FLOW_EVENT_NAMESPACE_OFFLINE_ORCHESTRATION",
                        flowEventType: a
                    }, metadata: b, statusCode: void 0, csn: void 0, can: void 0
                }
            }, A9a = function (a, b, c) {
                if (!c) {
                    var d = void 0 === d ? !1 : d;
                    c = a.j.get("FLOW_TYPE_OFFLINE_ORCHESTRATION"); if (!c || d) c = g.vz(16), a.j.set("FLOW_TYPE_OFFLINE_ORCHESTRATION", c)
                } a = { flowNonce: c, flowType: "FLOW_TYPE_OFFLINE_ORCHESTRATION", flowEventType: b.eventType }; b.metadata && (a.flowMetadata = b.metadata); void 0 !== b.statusCode && (a.flowEventStatus = b.statusCode); b.csn && (a.csn = b.csn); b.can && (a.can = b.can); g.Kv("flowEvent", a, void 0)
            }, C9a = function (a, b, c, d) {
                if (!a.action.entityKey) throw Error("entityKey is missing.");
                var e = g.kH(a.action.entityKey); a = { entityType: e.WY, entityId: e.entityId, offlineOrchestrationActionType: a.action.actionType, orchestrationAction: { orchestrationActionId: a.actionId } }; b && (a.offlineOrchestrationActionResult = b.status, a.isRetryable = c ? !1 : b.j, b.B && (a.offlineOrchestrationFailureReason = B9a(b.B, a.isRetryable))); d && (a.additionalOrchestrationActions = d.map(function (f) { return { orchestrationActionId: f.actionId } }));
                return a
            }, B9a = function (a, b) { return "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" !== a || b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR" === a && b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : a : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR" }, D9a = function (a, b) {
                var c = { offlineOrchestrationContext: C9a(a) };
                b = z9a(b, c); A9a(y9a(), b, a.rootActionId)
            }, E9a = function (a, b, c, d) {
                d = void 0 === d ? [] : d;
                b = { offlineOrchestrationContext: C9a(a, b, c, d) }; b = z9a(3, b); A9a(y9a(), b, a.rootActionId)
            }, F9a = function () { this.actions = [] }, G9a = function (a, b) {
                b = g.r(b);
                for (var c = b.next(); !c.done; c = b.next())c = c.value, D9a(c, 1), a.actions.push(c); a.actions.sort(a.j)
            }, H9a = function (a, b) {
                a = g.r(a.actions);
                for (var c = a.next(); !c.done; c = a.next())if (c.value.actionId === b) return !0; return !1
            }, J7 = function (a, b, c, d) {
                g.J.call(this);
                var e = this; this.u = a; this.qa = b; this.Z = c; this.D = d; this.j = new F9a; this.S = new g.ax; this.C = new g.Xn(function () { e.retry() });
                this.I = NaN; g.M(this, this.C); this.J = f8a(this.u, this.ea.bind(this))
            }, J9a = function (a, b, c, d) {
                var e;
                return g.z(function (f) { if (1 == f.j) return e = new J7(a, b, c, d), g.x(f, I9a(e), 2); e.B ? Promise.resolve() : K7(e); return f.return(e) })
            }, K7 = function (a) {
                var b, c, d, e, f, h, l, m, n, p, q, u, w, y, A;
                return g.z(function (B) {
                    switch (B.j) {
                        case 1: if (a.B) throw Error("Already processing an action"); if (a.isDisposed()) return B.return(); b = a.j.actions.shift(); G8a(a.Z, !b); if (void 0 === b) return B.return(); for (c = [b]; ;)if ((d = a.j.actions[0]) && 0 === d.retryScheduleIndex && d.entityType === b.entityType) c.push(a.j.actions.shift()); else break; a.B = c; if (e = a.qa[b.entityType]) { B.Ma(2); break } a.B = void 0; return g.x(B, K7(a), 3); case 3: return B.return(); case 2: f = g.r(c); for (h = f.next(); !h.done; h = f.next())l = h.value, D9a(l, 2); g.pa(B,
                            4, 5); return g.x(B, j9a(e, c.map(function (D) { return D.action })), 7);
                        case 7: m = B.u, n = g.r(c), h = n.next(); case 8: if (h.done) { B.Ma(5); break } p = h.value; q = m.get(p.action); return g.x(B, K9a(a, p, q), 9); case 9: h = n.next(); B.Ma(8); break; case 5: g.gaa(B); a.B = void 0; g.haa(B, 6); break; case 4: return u = g.ua(B), j7("Orchestration error", u), g.pa(B, 12), g.x(B, L9a(a, c), 14); case 14: g.ra(B, 5); break; case 12: w = g.ua(B); j7("Orchestration retry error", w); y = g.r(c); for (h = y.next(); !h.done; h = y.next())A = h.value, 3 > A.retryScheduleIndex && G9a(a.j, [A]); B.Ma(5); break; case 6: return g.x(B, K7(a), 0)
                    }
                })
            }, K9a = function (a,
                b, c) {
                    var d, e, f, h, l, m, n;
                return g.z(function (p) {
                    if (1 == p.j) {
                        d = 3 === b.retryScheduleIndex + 2; if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" === c.status) {
                            l = void 0; try { l = null == (m = c.C) ? void 0 : m.map(function (q) { return a.createAction(q, b) }) } catch (q) {
                                return E9a(b, c, d), n = {
                                    entityKey: b.action.entityKey,
                                    failureReason: "OFFLINE_OPERATION_FAILURE_REASON_UNSUPPORTED_ENTITY_FAILED"
                                }, l7(a.D, n), j7("Orchestration subactions creation error", q), p.return()
                            } E9a(b, c, d, l); return g.x(p, e7(a.u, { mode: "readwrite", Zb: !0 }, function (q) {
                                var u = []; if (l) {
                                    var w = l.map(function (y) { return I7(y) });
                                    u.push(X7a(q, w, "offlineOrchestrationActionWrapperEntity"))
                                } w = I7(b); u.push(b7(q, w.key)); return g.aw.all(u)
                            }), 9)
                        } if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE" !== c.status) return p.Ma(0);
                        E9a(b, c, d); if (c.j && 3 > b.retryScheduleIndex + 1) return g.x(p, L9a(a, [b]), 0); f = (null == (e = c) ? 0 : e.u) ? c.u : "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN"; h = { entityKey: b.action.entityKey, failureReason: f }; l7(a.D, h); j7("Orchestration result is not retryable, deleting action"); return g.x(p, h8a(a.u, I7(b).key), 0)
                    } D9a(b, 4); g.na(p)
                })
            }, P9a = function (a, b) {
                var c, d, e, f, h, l, m, n, p, q, u, w;
                return g.z(function (y) {
                    c = []; d = Infinity; e = 4E3; f = g.r(b); for (h = f.next(); !h.done; h = f.next())l = h.value, m = Number(l.enqueueTimeSec), n = M9a(m), p = l.retryScheduleIndex, q = null != p && 0 < p, 0 < n && q ? (d = Math.min(d, m), e = Math.min(n, e)) : c.push(l); isFinite(d) && (!a.C.isActive() || d < a.I) && (a.I = d, a.C.start(e)); a.S.tf() || (u = c.length, c = c.filter(function (A) { var B; A = (null == (B = A.actionProto) ? void 0 : B.actionType) || "OFFLINE_ORCHESTRATION_ACTION_TYPE_UNKNOWN"; return !N9a.includes(A) }), w = c.length < u, !a.C.isActive() && w && a.C.start(1));
                    0 < c.length && O9a(a, c); return g.x(y, a.B ? Promise.resolve() : K7(a), 0)
                })
            }, R9a = function (a) {
                var b, c, d, e, f, h, l;
                return g.z(function (m) { if (1 == m.j) return g.x(m, Q9a(a), 2); b = m.u; c = []; d = g.r(b); for (e = d.next(); !e.done; e = d.next())f = e.value, h = g.kH(f.key), l = h.entityId, H9a(a.j, l) || c.push(f); return g.x(m, P9a(a, c), 0) })
            }, M9a = function (a) {
                a = 1E3 * a - Date.now();
                return 4E3 < a ? 4E3 : a
            }, L9a = function (a, b) {
                var c, d, e;
                return g.z(function (f) { c = g.r(b); for (d = c.next(); !d.done; d = c.next()) { e = d.value; var h = void 0, l = void 0, m = (null == (l = e.action) ? void 0 : null == (h = l.actionMetadata) ? void 0 : h.retryScheduleIntervalsInSeconds) || [1, 2, 4]; h = 1; e.retryScheduleIndex < m.length && (h = m[e.retryScheduleIndex]); e.j = 1E3 * h + Date.now(); e.retryScheduleIndex++ } return g.x(f, S9a(a, b), 0) })
            }, I9a = function (a) {
                var b;
                return g.z(function (c) { if (1 == c.j) return g.x(c, h7(a.u, "offlineOrchestrationActionWrapperEntity"), 2); b = c.u; return g.x(c, P9a(a, b), 0) })
            }, O9a = function (a, b) {
                0 !== b.length && b.forEach(function (c) {
                    if (!c.key) throw Error("Entity key is required.");
                    if (!c.actionProto) throw Error("OfflineOrchestrationAction is required."); var d = g.kH(c.key), e = g.kH(c.actionProto.entityKey); c = new H7(e.entityType, d.entityId, c.actionProto, c.parentActionId, c.rootActionId, c.childActionIds, c.prereqActionId, c.postreqActionIds, c.retryScheduleIndex, c.hasChildActionFailed, 1E3 * Number(c.enqueueTimeSec)); 3 > c.retryScheduleIndex && G9a(a.j, [c])
                })
            }, Q9a = function (a, b) {
                var c;
                return g.z(function (d) { if (1 == d.j) return g.x(d, h7(a.u, "offlineOrchestrationActionWrapperEntity", b), 2); c = d.u; return d.return(c.filter(n8a)) })
            }, S9a = function (a, b) {
                if (0 === b.length) return Promise.resolve([]);
                b = b.map(function (c) { return I7(c) });
                return g8a(a.u, b)
            }, T9a = function () { this.j = void 0 }, V9a = function (a, b) {
                var c, d, e, f, h;
                return g.z(function (l) { c = b.videoId; d = b.V(); e = !0; if (b.captionTracks.length) f = z6a(b), a.j = new g.iO(d, b, f); else if (b.xd) h = g.ZBa(b), a.j = new g.lO(d, b.xd, c, h, b.Tl), e = b.Tl; else return l.return(); return l.return(new Promise(function (m) { var n; null == (n = a.j) || n.qw(function () { return g.z(function (p) { if (1 == p.j) return g.x(p, U9a(a, c, e), 2); m(); g.na(p) }) }) })) })
            }, U9a = function (a, b, c) {
                c = void 0 === c ? !0 : c;
                var d, e, f, h, l, m, n, p, q, u, w, y, A, B; return g.z(function (D) {
                    switch (D.j) {
                        case 1: if (!a.j) return D.return(); d = []; e = g.fO(a.j.j, c); f = []; h = {}; l = g.r(e.entries()); for (m = l.next(); !m.done; h = { ZE: h.ZE }, m = l.next())n = m.value, p = g.r(n), q = p.next().value, u = p.next().value, h.ZE = q, w = u, y = a.j.Ds(w, "json3"), A = g.Du(y, { withCredentials: !0, format: "RAW" }, 3, 500).then(function (G) { return function (H) { H = { metadata: g.IG(e[G.ZE]), trackData: H.xhr.responseText }; f.push(H) } }(h)).bj(function (G) { j7("Caption fetch error", G) }), d.push(A);
                            return g.x(D, A6a(d), 2); case 2: return g.pa(D, 3), g.x(D, r8a(b, f), 5); case 5: g.ra(D, 0); break; case 3: B = g.ua(D), j7("Caption DB transaction error", B), g.na(D)
                    }
                })
            }, W9a = function (a) {
                var b;
                return g.z(function (c) { if (1 == c.j) return g.x(c, s8a(a), 2); b = c.u; return c.return(!!b && 0 < b.length) })
            }, X9a = function (a, b) {
                this.api = a;
                this.j = b; this.logger = new g.lT("woffle"); this.u = !1
            }, Y9a = function (a) { return g.z(function (b) { return b.return(t8a(a)) }) }, Z9a = function (a) {
                var b;
                return g.z(function (c) { if (1 == c.j) return g.x(c, g.BAa(a), 2); b = c.u; return c.return(b.filter(function (d) { return !!d.url }).map(function (d) { return d.url })) })
            }, L7 = function (a, b) {
                var c = g.qH(b);
                if (1 === c || 0 === c) return Promise.resolve(); (c = $9a(a, b)) && c.stopVideo(); a.B = 0; return Y9a(b)
            }, M7 = function (a, b, c, d) {
                c = void 0 === c ? !1 : c;
                d = void 0 === d ? !0 : d; var e = "string" === typeof b ? b : b.videoDetails.videoId; 2 === g.qH(e) && ((b = $9a(a, e)) ? b.stopVideo() : a.logger.info(function () { return "Corresponding player for " + e + " not found. Pausing anyway" }), g.rH(e, 2), a.B = 2, c ? a$a(a.j) : d && b$a(a.j))
            }, $9a = function (a, b) {
                var c;
                return (null == (c = a.player) ? void 0 : c.getVideoData().videoId) === b ? a.player : null
            }, c$a = function (a) {
                switch (a) {
                    case "HD_1080": return "hd1080";
                    case "HD": return "hd720"; case "SD": return "large"; case "LD": return "tiny"; default: return "hd720"
                }
            }, N7 = function (a) {
                g.J.call(this);
                this.j = a; this.u = f8a(this.j, this.B.bind(this))
            }, d$a = function (a, b) {
                var c, d, e, f, h, l, m;
                return g.z(function (n) {
                    switch (n.j) {
                        case 1: if (0 === b.length) return n.return([]); c = b.map(function (p) { return g.lH(p, "transfer") });
                            return g.x(n, h7(a.j, "transfer", c), 2); case 2: d = n.u; e = d.filter(n8a).map(function (p) { return g.kH(p.key).entityId });
                            f = b.filter(function (p) { return -1 === e.indexOf(p) });
                            if (0 === f.length) return n.return([]); h = g.r(f); l = h.next(); case 3: if (l.done) { n.Ma(5); break } m = l.value; return g.x(n, Y9a(m), 4); case 4: l = h.next(); n.Ma(3); break; case 5: return n.return(f)
                    }
                })
            }, f$a = function (a, b, c, d, e, f) {
                var h, l, m;
                return g.z(function (n) {
                    h = "STREAM_TYPE_UNKNOWN"; c.video && c.audio ? (h = "STREAM_TYPE_AUDIO_AND_VIDEO", j7("unexpected stream type")) : c.video && !c.audio ? h = "STREAM_TYPE_VIDEO" : !c.video && c.audio && (h = "STREAM_TYPE_AUDIO"); l = g.lH(b, "offlineVideoStreams"); m = { numBytesDownloaded: e.toFixed(), numTotalBytes: f.toFixed(), streamType: h, streamState: "DOWNLOAD_STREAM_STATE_IN_PROGRESS", formatStreamBytes: JSON.stringify(d), itag: "STREAM_TYPE_AUDIO_AND_VIDEO" === h ? Number(c.itag) : void 0 }; return g.x(n, e7(a, { mode: "readwrite", Zb: !0 },
                        function (p) {
                            var q = Y6(p, l, "offlineVideoStreams"), u = Y6(p, g.lH(b, "transfer"), "transfer"); return g.aw.all([q, u]).then(function (w) {
                                var y = g.r(w); w = y.next().value; y = y.next().value; if (!y) return b7(p, l).then(function () { });
                                w = [a7(p, e$a(w, d, m, l), "offlineVideoStreams")]; y.offlineVideoStreams || (y.offlineVideoStreams = []); -1 === y.offlineVideoStreams.indexOf(l) && (y.offlineVideoStreams.push(l), w.push(a7(p, y, "transfer"))); return g.aw.all(w)
                            })
                        }), 0)
                })
            }, g$a = function (a, b) {
                var c, d, e, f, h;
                return g.z(function (l) { if (1 == l.j) return c = g.lH(b, "offlineVideoStreams"), g.x(l, g7(a, c, "offlineVideoStreams"), 2); d = l.u; if (!d || !d.streamsProgress) return l.return(); e = g.r(d.streamsProgress); for (f = e.next(); !f.done; f = e.next())h = f.value, h.streamState = "DOWNLOAD_STREAM_STATE_COMPLETE", h.numTotalBytes !== h.numBytesDownloaded && (h.numBytesDownloaded = h.numTotalBytes); return g.x(l, f7(a, d, "offlineVideoStreams"), 0) })
            }, e$a = function (a, b, c, d) {
                if (a && a.streamsProgress) {
                    d = a;
                    a: { b = b.itag + ";" + b.xtags; for (var e = a.streamsProgress, f = 0; f < e.length; f++) { var h = JSON.parse(e[f].formatStreamBytes); if (h.itag + ";" + h.xtags === b) { e[f] = c; c = e; break a } } e.push(c); c = e } d.streamsProgress = c
                } else a = { key: d, streamsProgress: [c] }; return a
            }, h$a = function (a, b, c, d) {
                g.J.call(this);
                var e = this; this.u = a; this.api = b; this.Ba = c; this.ya = d; this.D = new g.ax; this.C = new g.Xn(function () { e.j && "TRANSFER_STATE_TRANSFERRING" === e.j.transferState && e.D.tf() && (3 > (e.j.transferRetryCount || 0) ? M7(e.I, e.B, !1, !1) : L7(e.I, e.B.videoDetails.videoId), e.kt("TRANSFER_FAILURE_REASON_TIMEOUT_NO_PROGRESS")) });
                this.Z = 0; this.Aa = new g.XD(this); this.J = f8a(this.u, this.XU.bind(this)); this.I = new X9a(b, this); this.La = new T9a; this.S = new N7(this.u); this.qa = this.D.Ra("publicytnetworkstatus-online", this.rA.bind(this)); this.ea = this.D.Ra("publicytnetworkstatus-offline", this.W3.bind(this)); g.M(this, this.Aa); this.Aa.T(b, "offlinetransferpause", this.X3); this.Ia = g.RE(this.api.V().experiments, "web_player_transfer_timeout_threshold_ms")
            }, i$a = function (a) {
                return g.z(function (b) {
                    if (1 == b.j) b = g.x(b, q8a(), 2);
                    else { var c = a.S; var d = g.pH(); d = Object.keys(d); c = d$a(c, d); b = g.x(b, c, 0) } return b
                })
            }, P7 = function (a, b) {
                b = void 0 === b ? !1 : b;
                var c; return g.z(function (d) { if (1 == d.j) { if (a.j) throw Error("Already downloading a video"); return g.x(d, j$a(a), 2) } return 4 != d.j ? (c = d.u, H8a(a.Ba, !c), c && a.D.tf() ? b ? g.x(d, new Promise(function (e) { g.vu(e, 1E3) }), 4) : d.Ma(4) : (!c && a.j && O7(a), d.Ma(0))) : g.x(d, k$a(a, c), 0) })
            }, l$a = function (a) {
                return g.z(function (b) {
                    if (1 == b.j) return a.B ? g.x(b, L7(a.I, a.B.videoDetails.videoId), 3) : b.Ma(0);
                    O7(a); g.na(b)
                })
            }, m$a = function (a, b) {
                var c, d, e;
                return g.z(function (f) { switch (f.j) { case 1: return g.pa(f, 2), (c = !!b.captionTracks.length || !!b.xd) ? g.x(f, W9a(b.videoId), 4) : f.return(); case 4: return (d = f.u) ? f.return() : g.x(f, V9a(a.La, b), 5); case 5: g.ra(f, 0); break; case 2: e = g.ua(f), j7("Caption downloading error", e, b.cotn), g.na(f) } })
            }, k$a = function (a, b) {
                var c, d, e, f, h;
                return g.z(function (l) {
                    switch (l.j) {
                        case 1: a.j = b; c = g.kH(a.j.key); if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) { n7({ transferStatusType: "TRANSFER_STATUS_TYPE_RESUME_PROCESSING", statusType: "OFFLINING_RETRIED" }, { videoId: c.entityId, Hj: a.j }); l.Ma(2); break } if ("TRANSFER_STATE_TRANSFER_IN_QUEUE" !== a.j.transferState || a.j.transferRetryCount || a.j.hasLoggedFirstStarted) { l.Ma(2); break } a.j.hasLoggedFirstStarted = !0; return g.x(l, n$a(a), 4); case 4: I8a({ videoId: c.entityId, Hj: a.j }, void 0, void 0, !0); case 2: return g.x(l,
                            o$a(a), 5); case 5: return d = null, g.pa(l, 6), g.x(l, p$a(a, b), 8); case 8: d = l.u; a.B = d; g.ra(l, 7); break; case 6: return e = g.ua(l), j7("error getting player response", e, b.cotn), g.x(l, a.kt("TRANSFER_FAILURE_REASON_INTERNAL"), 9); case 9: return l.return(); case 7: return f = u9a(a.api.V(), b.cotn, d), g.x(l, m$a(a, f), 10); case 10: return h = f, g.x(l, Z9a(f.videoId), 11); case 11: h.Ps = l.u; var m = a.I, n = b.maximumDownloadQuality; f.getPlayerResponse(); g.rH(f.videoId, 2); m.B = 2; m.u = !1; var p; null == (p = m.player) || p.dispose(); m.player = m.api.qy(9,
                                f); p = {}; g.bz(m.player, (p.localmediachange = m.FD, p.signatureexpired = m.IJ, p.statechange = m.A1, p), m); n = c$a(n); m.K("hoffle_lmqf_killswitch") || g.JRa(m.player, g.uB(n, n, !0, "m"), !1); g.yS(m.player, !1); q$a(a); g.na(l)
                    }
                })
            }, j$a = function (a) {
                var b, c;
                return g.z(function (d) { if (1 == d.j) return g.x(d, h7(a.u, "transfer"), 2); b = d.u; c = b.filter(r$a).sort(s$a); return 0 === c.length ? d.return() : d.return(c[0]) })
            }, o$a = function (a) {
                return g.z(function (b) {
                    if (!a.j) return Q7(), b.return();
                    q$a(a); return g.x(b, R7(a, "TRANSFER_STATE_TRANSFERRING"), 0)
                })
            }, a$a = function (a) {
                var b;
                g.z(function (c) { if (1 == c.j) { if (!a.j) return Q7(), c.Ma(2); a.C.stop(); return g.x(c, R7(a, "TRANSFER_STATE_PAUSED_BY_USER"), 3) } 2 != c.j && (b = g.kH(a.j.key), J8a({ videoId: b.entityId, Hj: a.j })); O7(a); P7(a); g.na(c) })
            }, b$a = function (a) {
                g.z(function (b) {
                    if (1 == b.j) {
                        if (!a.j) return Q7(), b.return();
                        a.C.stop(); return g.x(b, R7(a, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 2)
                    } O7(a); g.na(b)
                })
            }, t$a = function (a) {
                var b, c, d;
                g.z(function (e) { switch (e.j) { case 1: if (!a.j) return Q7(), e.return(); a.C.stop(); if (!a.j || !a.B) { e.Ma(2); break } b = u9a(a.api.V(), a.j.cotn, a.B); return g.x(e, m$a(a, b), 2); case 2: return g.x(e, R7(a, "TRANSFER_STATE_COMPLETE", "DOWNLOAD_STREAM_STATE_COMPLETE"), 4); case 4: return c = g.kH(a.j.key), d = c.entityId, g.x(e, g$a(a.u, d), 5); case 5: n7({ transferStatusType: "TRANSFER_STATUS_TYPE_COMPLETED", statusType: "SUCCESS" }, { videoId: d, Hj: a.j }), O7(a), P7(a), g.na(e) } })
            }, u$a = function (a, b, c) {
                var d;
                g.z(function (e) { switch (e.j) { case 1: if (!a.j) return Q7(), e.return(); if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) { e.Ma(2); break } return g.x(e, o$a(a), 2); case 2: d = Date.now(); if (!(1E3 < d - a.Z)) { e.Ma(4); break } a.Z = d; return g.x(e, f$a(a.u, c.videoId, c.u, c.formatStream, c.bytesDownloaded, c.j), 5); case 5: I8a({ videoId: b, Hj: a.j }, c.bytesDownloaded, c.j); case 4: q$a(a), g.na(e) } })
            }, v$a = function (a) {
                var b = 3 > (a.j.transferRetryCount || 0);
                b && (a = a.j, a.transferRetryCount = (a.transferRetryCount || 0) + 1); return b
            }, w$a = function (a, b) {
                b = void 0 === b ? "TRANSFER_FAILURE_REASON_UNKNOWN" : b;
                var c, d, e; return g.z(function (f) {
                    if (1 == f.j) return a.j || Q7(), c = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", "TRANSFER_FAILURE_REASON_NETWORK" === b ? c = "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED" : "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" === b && (c = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED"), g.x(f, R7(a, "TRANSFER_STATE_FAILED", "DOWNLOAD_STREAM_STATE_ERROR_STREAMS_MISSING", b), 2); l7(a.ya, { entityKey: null == (d = a.j) ? void 0 : d.key, failureReason: c }); e = a.j ? g.kH(a.j.key).entityId : ""; var h =
                        { videoId: e, Hj: a.j }, l = b, m = { transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_WITH_FAILURE", statusType: "FAILED" }; l && (m.transferFailureReason = l, m.failureReason = K8a(l)); n7(m, h); g.na(f)
                })
            }, R7 = function (a, b, c, d) {
                var e;
                return g.z(function (f) {
                    if (1 == f.j) { if (!a.j) return Q7(), f.return(); a.j.transferState = b; a.j.failureReason = d; g.pa(f, 2); return g.x(f, n$a(a, function (h) { return c ? Z6(h, "offlineVideoStreams", a.j.offlineVideoStreams).then(function (l) { for (var m = g.r(l), n = m.next(); !n.done; n = m.next())if ((n = n.value) && n.streamsProgress) { n = g.r(n.streamsProgress); for (var p = n.next(); !p.done; p = n.next())p.value.streamState = c } return X7a(h, l.filter(function (q) { return !!q }), "offlineVideoStreams") }) : g.aw.resolve(void 0) }), 4) } if (2 != f.j) return g.ra(f,
                        0);
                    e = g.ua(f); return e instanceof g.Uv && "QUOTA_EXCEEDED" === e.type ? g.x(f, a.kt("TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE"), 0) : f.Ma(0)
                })
            }, n$a = function (a, b) {
                var c;
                return g.z(function (d) { if (!a.j) return d.return(); c = a.j; return g.x(d, e7(a.u, { mode: "readwrite", Zb: !0 }, function (e) { var f = [a7(e, c, "transfer")]; b && f.push(b(e)); return g.aw.all(f) }), 0) })
            }, O7 = function (a) {
                a.j = void 0;
                a.B = void 0; a.C.stop()
            }, p$a = function (a, b) {
                var c, d, e, f, h;
                return g.z(function (l) { if (1 == l.j) return c = g.kH(b.key), d = c.entityId, e = g.lH(d, "playbackData"), g.x(l, g7(a.u, e, "playbackData"), 2); f = l.u; if (null == (h = f) ? 0 : h.playerResponseJson) return l.return(JSON.parse(f.playerResponseJson)); throw Error("No PlayerResponse found"); })
            }, q$a = function (a) { a.C.start(a.Ia || 18E5) }, Q7 = function () { j7("missing current transfer entity.") }, r$a = function (a) { return void 0 !== x$a[a.transferState] }, s$a = function (a, b) {
                var c = x$a[a.transferState], d = x$a[b.transferState];
                return c !== d ? c - d : Number(a.enqueuedTimestampMs) - Number(b.enqueuedTimestampMs)
            }, S7 = function (a, b) {
                var c = this;
                this.Y = a; this.api = b; this.S = new g.ax; this.B = new D8a(function () { return y$a(c) }, function () { z$a(c) }, this.api.Yp(), this.api.K.bind(this.api));
                this.j = new k7(this.api); this.C = new g.Xi; E8a(this.B)
            }, y$a = function (a) {
                return g.z(function (b) {
                    a.api.Pa("onOrchestrationBecameLeader");
                    a.u && a.D || A$a(a).then(a.C.resolve).catch(a.C.reject); var c = a.C.promise; return g.x(b, c, 0)
                })
            }, A$a = function (a) {
                var b, c, d;
                return g.z(function (e) { if (1 == e.j) return g.x(e, i7(), 2); if (3 != e.j) { b = e.u; if (!b) return j7("PES is undefined"), e.return(); a.u = new h$a(b, a.api, a.B, a.j); c = a.Qy(b); d = a; return g.x(e, J9a(b, c, a.B, a.j), 3) } d.D = e.u; return g.x(e, B$a(a), 0) })
            }, B$a = function (a) {
                var b;
                return g.z(function (c) {
                    switch (c.j) {
                        case 1: if (!a.u) return j7("transferManager is undefined"), c.return(); if (a.u.j) { c.Ma(2); break } return g.x(c, P7(a.u), 2); case 2: return g.x(c, a.refreshAllStaleEntities(43200, !0), 4); case 4: return a.J = g.wu(function () { a.refreshAllStaleEntities(43200, !0) }, 9E5), g.Av(g.Cv(), function () { return a.CK() }), g.x(c, i7(), 5);
                        case 5: return b = c.u, g.x(c, z8a(b), 6); case 6: F8a(a.B), g.na(c)
                    }
                })
            }, z$a = function (a) {
                var b, c;
                g.z(function (d) { if (1 == d.j) return a.u || a.D ? g.x(d, a.C.promise, 2) : d.return(); void 0 !== a.J && (window.clearInterval(a.J), a.J = void 0); null == (b = a.u) || b.dispose(); a.u = void 0; null == (c = a.D) || c.dispose(); a.D = void 0; a.api.Pa("onOrchestrationLostLeader"); a.C = new g.Xi; g.na(d) })
            }, C$a = function () {
                var a, b, c, d, e, f;
                return g.z(function (h) { switch (h.j) { case 1: return g.x(h, i7(), 2); case 2: a = h.u; if (!a) return h.return([]); b = Date.now() / 1E3; return g.x(h, h7(a, "offlineVideoPolicy"), 3); case 3: c = h.u, d = g.r(c), e = d.next(); case 4: if (e.done) { h.Ma(6); break } f = e.value; if (!(f.expirationTimestamp && Number(f.expirationTimestamp) < b)) { h.Ma(5); break } f.action = "OFFLINE_VIDEO_POLICY_ACTION_DISABLE"; return g.x(h, f7(a, f, "offlineVideoPolicy"), 5); case 5: e = d.next(); h.Ma(4); break; case 6: return h.return(c.map(function (l) { return l.key })) } })
            }, T7 =
            function (a, b, c, d, e) {
                var f, h, l;
                return g.z(function (m) {
                    if (1 == m.j) return g.x(m, i7(), 2); f = m.u; if (!f) return m.return([]); h = b.map(function (n) { var p = g.lH(n, c); p = { actionType: d, entityKey: p, actionMetadata: Object.assign({}, v9a(), e) }; "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" !== d && (p.actionMetadata.priority = 0); n = new H7(c, n, p); return I7(n) });
                    l = g8a(f, h); E8a(a.B); return m.return(l)
                })
            }, D$a = function (a, b, c) {
                var d, e, f, h, l, m, n;
                return g.z(function (p) { switch (p.j) { case 1: d = [], e = g.r(b), f = e.next(); case 2: if (f.done) { p.Ma(4); break } h = f.value; if (h.upToDate || c && !h.shouldAutoSyncMetadata || !h.playlistId) { p.Ma(3); break } l = {}; m = { nextAutoRefreshIntervalSeconds: h.checkInSeconds, autoSync: c }; l = { mainPlaylistEntityActionMetadata: m }; return g.x(p, T7(a, [h.playlistId], "mainPlaylistEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", l), 6); case 6: (n = p.u) && d.push.apply(d, g.t(n)); case 3: f = e.next(); p.Ma(2); break; case 4: return p.return(d) } })
            }, F$a = function (a) {
                var b,
                c, d, e, f;
                return g.z(function (h) { switch (h.j) { case 1: return b = g.EM(), c = u8a(a), d = g.pM(E$a), g.pa(h, 2), g.x(h, g.yK(b, c, d), 4); case 4: e = h.u; g.ra(h, 3); break; case 2: throw f = g.ua(h), j7("GetOffline fetch request error", f), Error("GetOffline fetch request error"); case 3: if (!e) throw Error("Network request failed"); if (!e.videos || !e.videos.length) throw Error("No data"); return h.return(e.videos.map(function (l) { return l.offlineVideoData })) } })
            }, G$a = function (a) {
                var b, c, d, e, f;
                return g.z(function (h) { switch (h.j) { case 1: return b = g.EM(), c = v8a(a), d = g.pM(E$a), g.pa(h, 2), g.x(h, g.yK(b, c, d), 4); case 4: e = h.u; g.ra(h, 3); break; case 2: throw f = g.ua(h), j7("GetOffline fetch request error for playlist", f), Error("GetOffline fetch request error for playlist"); case 3: if (!e) throw Error("Network request failed"); if (!e.playlists || !e.playlists.length) throw Error("No data"); return h.return(e.playlists.map(function (l) { return l.offlinePlaylistData })) } })
            }, I$a = function (a, b, c, d) {
                var e, f, h, l, m, n, p, q, u,
                w, y, A, B, D, G, H, L, N, K, P, R, X, Q, oa;
                return g.z(function (sa) {
                    switch (sa.j) {
                        case 1: return g.x(sa, i7(), 2); case 2: e = sa.u; if (!e) return sa.return([]); f = []; if (null == (h = d) ? 0 : h.length) { f = d; sa.Ma(3); break } return g.x(sa, h7(e, "mainPlaylistEntity"), 4); case 4: f = sa.u; case 3: if (!f.length) return sa.return([]); l = []; m = Date.now() / 1E3; n = g.r(f); for (p = n.next(); !p.done; p = n.next())if (q = p.value, w = (u = q.entityMetadata) && u.nextAutoRefreshIntervalSeconds ? Number(u.nextAutoRefreshIntervalSeconds) : NaN, y = Number.isNaN(w) ? a : w, A = void 0, c || !u || Number(null != (A = u.lastSyncedTimestampSeconds) ?
                            A : 0) + y <= m) { B = []; D = void 0; if (null == (D = q.videos) ? 0 : D.length) for (G = g.r(q.videos), H = G.next(); !H.done; H = G.next())L = H.value, N = JSON.parse(g.kH(L).entityId), N.videoId && B.push(N.videoId); P = K = "0"; u && (R = void 0, K = String(Number(null != (R = u.offlineLastModifiedTimestampSeconds) ? R : 0).toFixed()), X = void 0, P = String(Number(null != (X = u.addedTimestampSeconds) ? X : 0).toFixed())); Q = { playlistId: q.playlistId, videoIds: B, offlineLastModifiedTimestamp: K, autoSync: b, offlineDateAddedTimestamp: P }; l.push(Q) } return l.length ? g.x(sa, H$a(l),
                                5) : sa.return([]); case 5: return oa = sa.u, sa.return(oa)
                    }
                })
            }, J$a = function () {
                var a, b, c, d, e;
                return g.z(function (f) { if (1 == f.j) return g.x(f, i7(), 2); if (3 != f.j) return (a = f.u) ? g.x(f, h7(a, "refresh"), 3) : f.return(!1); b = f.u; if (null == (c = b[0]) || !c.refreshTime) return f.return(!1); d = Number(b[0].refreshTime); e = Date.now() / 1E3; return f.return(isFinite(d) && e >= d) })
            }, L$a = function (a) {
                var b, c, d;
                return g.z(function (e) { switch (e.j) { case 1: return g.pa(e, 2), g.x(e, K$a(a), 4); case 4: return c = e.u, g.x(e, e9a(c), 5); case 5: b = h9a(c); g.ra(e, 3); break; case 2: d = g.ua(e), j7("getAndProcessSmartDownloadsResponse request or processing error", d); case 3: return e.return(b) } })
            }, M$a = function (a, b) {
                var c, d, e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K, P, R;
                return g.z(function (X) {
                    switch (X.j) {
                        case 1: return g.x(X, i7(), 2); case 2: c = X.u; if (!c) return X.return([]); d = []; if (null == (e = b) ? 0 : e.length) { d = b; X.Ma(3); break } return g.x(X, h7(c, "musicPlaylist"), 4); case 4: d = X.u; case 3: if (!d.length) return X.return([]); f = []; Date.now(); h = g.r(d); l = h.next(); case 5: if (l.done) return f.length ? g.x(X, H$a(f), 10) : X.return([]); m = l.value; p = (n = m.entityMetadata) && n.nextAutoRefreshIntervalSeconds ? Number(n.nextAutoRefreshIntervalSeconds) : NaN; Number.isNaN(p); u = q = 0; if (!m.downloadMetadata) {
                            X.Ma(8);
                            break
                        } return g.x(X, g7(c, m.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 9); case 9: w = X.u, A = y = void 0, q = Number(null != (A = null == (y = w) ? void 0 : y.addedTimestampMillis) ? A : "0") / 1E3, D = B = void 0, u = Number(null != (D = null == (B = w) ? void 0 : B.lastModifiedTimestampMillis) ? D : "0") / 1E3; case 8: G = []; H = void 0; if (null == (H = m.tracks) ? 0 : H.length) for (L = g.r(m.tracks), N = L.next(); !N.done; N = L.next())K = N.value, G.push(g.kH(K).entityId); P = {
                            playlistId: m.playlistId, videoIds: G, offlineLastModifiedTimestamp: String(u.toFixed()), autoSync: a,
                            offlineDateAddedTimestamp: String(q.toFixed())
                        }; f.push(P); l = h.next(); X.Ma(5); break; case 10: return R = X.u, X.return(R)
                    }
                })
            }, K$a = function (a) {
                var b, c, d, e, f;
                return g.z(function (h) { switch (h.j) { case 1: return b = g.EM(), c = { context: g.sK(), browseId: "FEdownloads", browseRequestSupportedMetadata: { downloadsBrowseParams: { offlineFeatureSettingState: { isSdEnabled: a } } } }, d = g.pM(N$a), g.pa(h, 2), g.x(h, g.yK(b, c, d), 4); case 4: e = h.u; g.ra(h, 3); break; case 2: throw f = g.ua(h), j7("DPS fetch request error for smart downloads", f), Error("DPS fetch request error for smart downloads"); case 3: if (!e) throw Error("Network request failed"); return h.return(e) } })
            }, H$a = function (a) {
                var b, c, d, e,
                f;
                return g.z(function (h) { switch (h.j) { case 1: return b = g.EM(), c = w8a(a), d = g.pM(O$a), g.pa(h, 2), g.x(h, g.yK(b, c, d), 4); case 4: e = h.u; g.ra(h, 3); break; case 2: throw f = g.ua(h), j7("offlinePlaylistSyncCheck fetch request error", f), Error("offlinePlaylistSyncCheck fetch request error"); case 3: if (!e) throw Error("Network request failed"); if (!e.offlinePlaylistSyncCheckDatas || !e.offlinePlaylistSyncCheckDatas.length) throw Error("No data"); return h.return(e.offlinePlaylistSyncCheckDatas.map(function (l) { return l.offlinePlaylistSyncCheckData })) } })
            },
        P$a = function (a, b) {
            this.j = a;
            this.B = b
        }, S$a = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, u, w, y, A;
            return g.z(function (B) {
                switch (B.j) {
                    case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, f = [], g.pa(B, 2), g.x(B, Q$a(a, e), 4); case 4: f = B.u; g.ra(B, 3); break; case 2: return h = g.ua(B), l = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", h instanceof g.Uv && "QUOTA_EXCEEDED" === h.type && (l = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), B.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",
                        c, void 0, l, m)); case 3: n = []; if (null == (p = f) ? 0 : p.length) for (q = g.r(f), u = q.next(); !u.done; u = q.next())w = u.value, y = w.offlineVideoData, A = void 0, (null == (A = y) ? 0 : A.videoId) && n.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", y.videoId, "mainVideoEntity", 0, U7, R$a(b, y))); return B.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, n))
                }
            })
        }, U$a = function (a, b) {
            var c, d, e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K, P, R, X, Q, oa, sa, Ba, ya, va, Ja, Ka, qa, kb, Mb, Ta, fb, Yb, Ua, $a, ub, dc, Qb, Nc, Zb, Zc, yd, pb, ec, qb, Tb, Nb, Ub, Nd, ta, vb,
            fd, Ec, sb, Fc, zd, ne, gd, Hd, ie, Rc, od;
            return g.z(function (Sa) {
                switch (Sa.j) {
                    case 1: return c = t7(b), d = b.entityKey, e = g.kH(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.x(Sa, h7(a.j, "mainPlaylistEntity"), 5)) : g.x(Sa, g7(a.j, d, "mainPlaylistEntity"), 4); case 4: (l = Sa.u) && f.push(l); Sa.Ma(3); break; case 5: f = Sa.u; case 3: if (null == (m = f) || !m.length) return Sa.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); n = g.Zu(b.actionMetadata, T$a); q = null == (p = n) ? void 0 : p.nextAutoRefreshIntervalSeconds; w = null == (u = n) ? void 0 : u.autoSync; y = []; B =
                        A = !0; D = !1; if (!h && !1 === w) { Sa.Ma(6); break } return g.x(Sa, I$a(0, !!w, !0, f), 7); case 7: if (y = Sa.u, !y.length || !h && y[0].playlistId !== e) return Sa.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); case 6: if (h) {
                            G = []; H = g.r(y); for (L = H.next(); !L.done; L = H.next())N = L.value, N.upToDate || w && !N.shouldAutoSyncMetadata || !N.playlistId || (K = { nextAutoRefreshIntervalSeconds: N.checkInSeconds, autoSync: w }, G.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", N.playlistId, "mainPlaylistEntity", 0, U7, { mainPlaylistEntityActionMetadata: K })));
                            return Sa.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, G))
                        } y.length && (P = y[0], D = !!P.upToDate, w && (A = null != (R = P.shouldAutoSyncMetadata) ? R : !0, B = null != (X = P.shouldAutoSyncVideos) ? X : !0, P.checkInSeconds && (q = P.checkInSeconds))); if (D || !A) return Sa.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); Q = []; oa = f[0]; Ba = (sa = oa.entityMetadata) ? String(sa.addedTimestampSeconds) : void 0; g.pa(Sa, 8); return g.x(Sa, Q$a(a, e, Ba, q), 10); case 10: Q = Sa.u; g.ra(Sa, 9); break; case 8: return ya = g.ua(Sa), ya instanceof
                            Error && "No data" === ya.message ? g.x(Sa, U8a(e, a.j, b, a.B), 9) : (va = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", Ja = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", ya instanceof g.Uv && "QUOTA_EXCEEDED" === ya.type && (va = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", Ja = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Sa.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, va, Ja))); case 9: if (!B) return Sa.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                                c)); Ka = []; qa = new Map; if (null == (kb = Q) ? 0 : kb.length) for (Mb = g.r(Q), Ta = Mb.next(); !Ta.done; Ta = Mb.next())fb = Ta.value, Yb = fb.offlineVideoData, Ua = void 0, (null == (Ua = Yb) ? 0 : Ua.videoId) && qa.set(Yb.videoId, Yb); $a = new Map; ub = []; if (null == (dc = oa) ? 0 : null == (Qb = dc.videos) ? 0 : Qb.length) for (Nc = g.r(oa.videos), Zb = Nc.next(); !Zb.done; Zb = Nc.next())if (Zc = Zb.value, yd = JSON.parse(g.kH(Zc).entityId), pb = yd.videoId) qa.has(pb) ? ($a.set(pb, qa.get(pb)), qa.delete(pb)) : ub.push(pb); ec = g.r(qa.entries()); for (qb = ec.next(); !qb.done; qb = ec.next())Tb =
                                    qb.value, Nb = g.r(Tb), Ub = Nb.next().value, Nd = Nb.next().value, ta = Ub, vb = Nd, Ka.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", ta, "mainVideoEntity", 0, U7, R$a(b, vb))); fd = g.r($a.entries()); for (Ec = fd.next(); !Ec.done; Ec = fd.next())sb = Ec.value, Fc = g.r(sb), zd = Fc.next().value, ne = Fc.next().value, gd = zd, Hd = ne, Ka.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", gd, "mainVideoEntity", 0, U7, R$a(b, Hd))); ie = g.r(ub); for (Rc = ie.next(); !Rc.done; Rc = ie.next())od = Rc.value, Ka.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE",
                                        od, "mainVideoEntity", 0, U7)); return Sa.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, Ka))
                }
            })
        }, V$a = function (a, b) {
            var c, d;
            return g.z(function (e) { switch (e.j) { case 1: return c = t7(b), g.pa(e, 2), d = g.kH(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.x(e, W8a(a.j, b, a.B), 5) : g.x(e, U8a(d, a.j, b, a.B), 5); case 5: g.ra(e, 3); break; case 2: return g.ua(e), e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)) } })
        }, Q$a =
            function (a, b, c, d) {
                var e, f, h, l, m;
                return g.z(function (n) { switch (n.j) { case 1: return g.x(n, G$a([b]), 2); case 2: return e = n.u, g.x(n, W$a(a, e[0], c, d), 3); case 3: return f = n.u, h = f.mainPlaylistEntity, l = f.f4, m = S8a(h, l.avatar), g.x(n, s7(m), 4); case 4: return n.return(e[0].videos) } })
            }, W$a = function (a, b, c, d) {
                var e, f, h, l, m, n, p, q, u, w, y, A, B, D, G;
                return g.z(function (H) {
                    if (1 == H.j) {
                        e = (Date.now() / 1E3).toString(); c || (c = e); f = b.videos; h = b.playlistId; l = []; m = []; if (f) for (n = g.r(f), p = n.next(); !p.done; p = n.next()) { q = p.value; u = q.offlineVideoData; if (!u || !u.videoId) throw Error("Invalid offlineVideoData"); w = u.videoId; y = { videoId: w, playlistId: h }; A = { id: g.lH(JSON.stringify(y), "mainPlaylistVideoEntity"), video: g.lH(w, "mainVideoEntity") }; l.push(A); m.push(A.id) } B = b.channel.offlineChannelData; D = X$a(g.lH(h, "ytMainChannelEntity"), B); G = {
                            key: g.lH(h, "mainPlaylistEntity"),
                            playlistId: h, channelOwner: D.id, videos: m, title: b.title, thumbnailStyleData: Y$a(b), visibility: Z$a(b)
                        }; G.entityMetadata ? (G.entityMetadata.addedTimestampSeconds = c, G.entityMetadata.offlineLastModifiedTimestampSeconds = b.lastModifiedTimestamp, G.entityMetadata.lastSyncedTimestampSeconds = e, d && (G.entityMetadata.nextAutoRefreshIntervalSeconds = String(d))) : G.entityMetadata = { addedTimestampSeconds: c, nextAutoRefreshIntervalSeconds: d ? String(d) : void 0, offlineLastModifiedTimestampSeconds: b.lastModifiedTimestamp, lastSyncedTimestampSeconds: e };
                        return g.x(H, e7(a.j, { mode: "readwrite", Zb: !0 }, function (L) { for (var N = a7(L, G, "mainPlaylistEntity"), K = a7(L, D, "ytMainChannelEntity"), P = [], R = g.r(l), X = R.next(); !X.done; X = R.next())P.push(a7(L, X.value, "mainPlaylistVideoEntity")); return g.aw.all([N, K].concat(g.t(P))) }), 2)
                    } return H.return({
                        mainPlaylistEntity: G,
                        f4: D, V5a: l
                    })
                })
            }, X$a = function (a, b) {
                return {
                    id: a,
                    channelId: b.channelId, title: b.title, avatar: b.thumbnail
                }
            }, Y$a = function (a) {
                var b = [], c = a.videos;
                c && 0 < c.length && b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_FIRST_VIDEO"), value: { collageThumbnail: { coverThumbnail: c[0].offlineVideoData.thumbnail } } }); if ((a = a.additionalMetadadatas) && 0 < a.length) for (a = g.r(a), c = a.next(); !c.done; c = a.next()) {
                    var d = c.value.offlineBundleItemPlaylistData, e = void 0; c = null == (e = d) ? void 0 : e.style; e = void 0; d = { collageThumbnail: { coverThumbnail: null == (e = d) ? void 0 : e.coverThumbnail } }; switch (c) {
                        case "BUNDLE_ITEM_STYLE_UNSPECIFIED": b.push({
                            key: Number("PLAYLIST_THUMBNAIL_STYLE_UNKNOWN"),
                            value: d
                        }); break; case "BUNDLE_ITEM_STYLE_TWO_BY_TWO": b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_TWO_BY_TWO"), value: d }); break; case "BUNDLE_ITEM_STYLE_ONE_AND_TWO_AVATAR": b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO_AVATAR"), value: d }); break; case "BUNDLE_ITEM_STYLE_ONE_AND_TWO": b.push({ key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO"), value: d })
                    }
                } return b
            }, Z$a = function (a) {
                switch (a.privacy) {
                    case "PRIVATE": return "PLAYLIST_VISIBILITY_PRIVATE";
                    case "PUBLIC": return "PLAYLIST_VISIBILITY_PUBLIC"; case "UNLISTED": return "PLAYLIST_VISIBILITY_UNLISTED"; default: return "PLAYLIST_VISIBILITY_UNKNOWN"
                }
            }, R$a = function (a, b) {
                b = { offlineVideoData: b };
                if (a = g.Zu(a.actionMetadata, T$a)) b.maximumDownloadQuality = a.maximumDownloadQuality; return { mainVideoEntityActionMetadata: b }
            }, $$a = function (a, b) {
                this.j = a;
                this.B = b
            }, dab = function (a, b) {
                var c, d, e, f, h, l, m, n;
                return g.z(function (p) {
                    switch (p.j) {
                        case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, g.pa(p, 2), g.x(p, aab(a, e, void 0, null == (f = g.Zu(b.actionMetadata, bab)) ? void 0 : f.offlineVideoData), 4); case 4: g.ra(p, 3); break; case 2: return h = g.ua(p), l = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", h instanceof g.Uv && "QUOTA_EXCEEDED" === h.type && (l = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"),
                            p.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, l, m)); case 3: var q = (q = g.Zu(b.actionMetadata, bab)) ? { playbackDataActionMetadata: { maximumDownloadQuality: q.maximumDownloadQuality } } : void 0; n = C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", 1, cab, q); return p.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, [n]))
                    }
                })
            }, eab = function (a, b) {
                var c, d, e, f, h, l, m, n, p, q, u;
                return g.z(function (w) {
                    switch (w.j) {
                        case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, g.x(w, g7(a.j, b.entityKey, "mainVideoEntity"), 2); case 2: f = w.u; if (!f) { h = void 0; w.Ma(3); break } return g.x(w, g7(a.j, f.downloadState, "mainVideoDownloadStateEntity"), 4); case 4: h = w.u; case 3: l = h; if (!f || !l) return w.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.pa(w, 5); return g.x(w, aab(a, e, l.addedTimestampMillis, null == (n = g.Zu(b.actionMetadata, bab)) ? void 0 : n.offlineVideoData), 7); case 7: m = C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH",
                            e, "playbackData", 1, cab); g.ra(w, 6); break; case 5: return p = g.ua(w), p instanceof Error && "No data" === p.message ? g.x(w, A7(e, a.j, b, a.B), 6) : (q = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", u = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", p instanceof g.Uv && "QUOTA_EXCEEDED" === p.type && (q = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", u = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), w.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, q, u))); case 6: return w.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                                c, m ? [m] : void 0))
                    }
                })
            }, fab = function (a, b) {
                var c, d;
                return g.z(function (e) { switch (e.j) { case 1: return c = t7(b), g.pa(e, 2), d = g.kH(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.x(e, W8a(a.j, b, a.B), 5) : g.x(e, A7(d, a.j, b, a.B), 5); case 5: g.ra(e, 3); break; case 2: return g.ua(e), e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)) } })
            }, aab =
            function (a, b, c, d) {
                var e, f, h, l, m;
                return g.z(function (n) { switch (n.j) { case 1: if (e = d) { n.Ma(2); break } return g.x(n, F$a([b]), 3); case 3: f = n.u, e = f[0]; case 2: return g.x(n, gab(a, e, c), 4); case 4: h = n.u; l = h.mainVideoEntity; m = h.channelEntity; var p = x7(l.thumbnail); var q = x7(m.avatar); p = p.concat(q); return g.x(n, s7(p), 0) } })
            }, gab = function (a, b, c) {
                var d, e, f, h, l;
                return g.z(function (m) {
                    return 1 == m.j ? (c || (c = Date.now().toString()), e = null == (d = b.channel) ? void 0 : d.offlineChannelData, f = { id: g.lH(b.videoId, "ytMainChannelEntity"), channelId: e.channelId, title: e.title, avatar: e.thumbnail }, h = { key: g.lH(b.videoId, "mainVideoDownloadStateEntity"), playbackData: g.lH(b.videoId, "playbackData"), addedTimestampMillis: c }, l = {
                        key: g.lH(b.videoId, "mainVideoEntity"), videoId: b.videoId, title: b.title, thumbnail: b.thumbnail, localizedStrings: { viewCount: b.shortViewCountText }, lengthSeconds: b.lengthSeconds ?
                            Number(b.lengthSeconds) : void 0, publishedTimestampMillis: b.publishedTimestamp ? (1E3 * Number(b.publishedTimestamp)).toString() : void 0, formattedDescription: b.description, owner: f.id, downloadState: h.key
                    }, g.x(m, e7(a.j, { mode: "readwrite", Zb: !0 }, function (n) { var p = a7(n, f, "ytMainChannelEntity"), q = a7(n, h, "mainVideoDownloadStateEntity"); n = a7(n, l, "mainVideoEntity"); return g.aw.all([p, q, n]) }), 2)) : m.return({
                        mainVideoEntity: l,
                        channelEntity: f
                    })
                })
            }, hab = function (a, b) {
                this.j = a;
                this.Y = b
            }, jab = function (a, b) {
                var c, d, e, f, h, l, m, n, p, q, u, w, y, A, B, D, G;
                return g.z(function (H) {
                    switch (H.j) {
                        case 1: return c = t7(b), d = [], g.x(H, U6.getInstance(), 2); case 2: e = H.u; if (!e) { H.Ma(3); break } return g.x(H, e.get("sdois"), 4); case 4: f = H.u; case 3: if (!a.Y.K("kevlar_smart_downloads")) { H.Ma(5); break } g.pa(H, 6); if (void 0 === f) throw Error("prefStorage or opt-in state is undefined"); return g.x(H, K$a(f), 8); case 8: return h = H.u, g.x(H, e9a(h), 9); case 9: l = h9a(h); if (null == (m = l) ? 0 : m.length) for (n = g.r(l), p = n.next(); !p.done; p = n.next())u = q = p.value, w = u.actionType, y = u.entityKey, A = u.actionMetadata,
                            w && y && A && !g.Zu(A, iab) && d.push(q); g.ra(H, 5); break; case 6: return B = g.ua(H), D = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", G = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", B instanceof g.Uv && "QUOTA_EXCEEDED" === B.type && (D = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", G = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), H.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, D, G)); case 5: return H.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c,
                                d))
                    }
                })
            }, kab = function (a, b, c) {
                this.j = a;
                this.Y = b; this.B = c
            }, nab = function (a, b) {
                var c, d, e, f, h, l, m;
                return g.z(function (n) {
                    switch (n.j) {
                        case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, g.pa(n, 2), g.x(n, lab(a, e), 4); case 4: g.ra(n, 3); break; case 2: return f = g.ua(n), h = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", l = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", f instanceof g.Uv && "QUOTA_EXCEEDED" === f.type && (h = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", l = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), n.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c,
                            void 0, h, l)); case 3: var p = (p = g.Zu(b.actionMetadata, g.A_a)) ? { playbackDataActionMetadata: { maximumDownloadQuality: p.maximumDownloadQuality } } : void 0; m = mab("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, p); return n.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, [m]))
                    }
                })
            }, oab = function (a, b) {
                var c, d, e, f, h, l, m, n;
                return g.z(function (p) {
                    switch (p.j) {
                        case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, g.x(p, g7(a.j, b.entityKey, "ytMainDownloadedVideoEntity"), 2); case 2: f = p.u; if (!f) return p.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.pa(p, 3); return g.x(p, lab(a, e, f.addedTimestampMillis), 5); case 5: h = mab("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e); g.ra(p, 4); break; case 3: return l = g.ua(p), l instanceof Error && "No data" === l.message ? g.x(p, A7(e, a.j, b, a.B), 4) : (m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN",
                            n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.Uv && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), p.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n))); case 4: return p.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, h ? [h] : void 0))
                    }
                })
            }, pab = function (a, b) {
                var c, d;
                return g.z(function (e) { switch (e.j) { case 1: return c = t7(b), g.pa(e, 2), d = g.kH(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.x(e, W8a(a.j, b, a.B), 5) : g.x(e, A7(d, a.j, b, a.B), 5); case 5: g.ra(e, 3); break; case 2: return g.ua(e), e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)) } })
            }, lab =
            function (a, b, c) {
                var d, e, f, h, l;
                return g.z(function (m) { if (1 == m.j) return g.x(m, F$a([b]), 2); if (3 != m.j) return d = m.u, e = d[0], g.x(m, qab(a, e, c), 3); f = m.u; h = f.videoEntity; l = f.channelEntity; var n = x7(h.thumbnail); var p = x7(l.avatar); n = n.concat(p); return g.x(m, s7(n), 0) })
            }, qab = function (a, b, c) {
                var d, e, f, h, l, m, n;
                return g.z(function (p) {
                    if (1 == p.j) {
                        if (!(b && b.channel && b.channel.offlineChannelData && b.videoId)) throw Error("Invalid OfflineVideoData"); c || (c = Date.now().toString()); e = null == (d = b.channel) ? void 0 : d.offlineChannelData; f = { id: g.lH(b.videoId, "ytMainChannelEntity"), channelId: e.channelId, title: e.title, avatar: e.thumbnail }; h = {
                            id: g.lH(b.videoId, "ytMainVideoEntity"), videoId: b.videoId, title: b.title, thumbnail: b.thumbnail, localizedStrings: { viewCount: b.shortViewCountText }, lengthSeconds: b.lengthSeconds ? Number(b.lengthSeconds) :
                                void 0, publishedTimestampMillis: b.publishedTimestamp ? (1E3 * Number(b.publishedTimestamp)).toString() : void 0, formattedDescription: b.description, channelOwner: f.id
                        }; l = { id: g.lH(b.videoId, "ytMainDownloadedVideoEntity"), video: h.id, playbackData: g.lH(b.videoId, "playbackData"), offlineVideoPolicy: g.lH(b.videoId, "offlineVideoPolicy"), addedTimestampMillis: c }; return a.Y.K("woffle_entity_migration") ? (m = { key: g.lH(b.videoId, "mainVideoDownloadStateEntity"), playbackData: g.lH(b.videoId, "playbackData"), addedTimestampMillis: c },
                            n = { key: g.lH(b.videoId, "mainVideoEntity"), videoId: b.videoId, title: b.title, thumbnail: b.thumbnail, localizedStrings: { viewCount: b.shortViewCountText }, lengthSeconds: b.lengthSeconds ? Number(b.lengthSeconds) : void 0, publishedTimestampMillis: b.publishedTimestamp ? (1E3 * Number(b.publishedTimestamp)).toString() : void 0, formattedDescription: b.description, owner: f.id, downloadState: m.key }, g.x(p, e7(a.j, { mode: "readwrite", Zb: !0 }, function (q) {
                                var u = a7(q, f, "ytMainChannelEntity"), w = a7(q, h, "ytMainVideoEntity"), y = a7(q, l, "ytMainDownloadedVideoEntity"),
                                A = a7(q, m, "mainVideoDownloadStateEntity"); q = a7(q, n, "mainVideoEntity"); return g.aw.all([u, w, y, A, q])
                            }), 3)) : g.x(p, e7(a.j, {
                                mode: "readwrite",
                                Zb: !0
                            }, function (q) { var u = a7(q, f, "ytMainChannelEntity"), w = a7(q, h, "ytMainVideoEntity"); q = a7(q, l, "ytMainDownloadedVideoEntity"); return g.aw.all([u, w, q]) }), 3)
                    } return p.return({
                        videoEntity: h,
                        channelEntity: f, g5a: l
                    })
                })
            }, mab = function (a, b, c) {
                b = g.lH(b, "playbackData");
                c = Object.assign({}, c, { priority: 1, retryScheduleIntervalsInSeconds: rab }); return { actionType: a, entityKey: b, actionMetadata: c }
            }, V7 = function () {
                S7.apply(this, arguments);
                this.I = "mainVideoEntity"
            }, sab = function (a, b, c) {
                b = void 0 === b ? 43200 : b;
                c = void 0 === c ? !0 : c; var d = void 0 === d ? !1 : d; var e, f; return g.z(function (h) { if (1 == h.j) return a.S.tf() ? g.x(h, I$a(b, c, d), 2) : h.return([]); e = h.u; f = D$a(a, e, c); return h.return(f) })
            }, tab = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                var d, e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K, P; return g.z(function (R) {
                    switch (R.j) {
                        case 1: return d = [], g.x(R, J$a(), 2); case 2: return (e = R.u) || c ? g.x(R, i7(), 3) : R.return([]); case 3: return f = R.u, g.x(R, i9a(f), 4); case 4: h = R.u; l = []; m = g.r(h); for (n = m.next(); !n.done; n = m.next())(p = n.value) && l.push(g.kH(p).entityId); return g.x(R, L$a(b), 5); case 5: q = R.u; if (null == (u = q) || !u.length) return R.return([]); if (!l.length) { R.Ma(6); break } return g.x(R, T7(a, l, "mainVideoEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE"), 7); case 7: w =
                            R.u, d = d.concat(w); case 6: y = g.r(q), A = y.next(); case 8: if (A.done) { R.Ma(10); break } D = B = A.value; G = D.actionType; H = D.entityKey; L = D.actionMetadata; if (!(G && H && L) || g.Zu(L, iab)) { R.Ma(9); break } N = g.kH(H); K = N.entityId; return g.x(R, T7(a, [K], "mainVideoEntity", G, L), 12); case 12: P = R.u, d = d.concat(P); case 9: A = y.next(); R.Ma(8); break; case 10: return R.return(d)
                    }
                })
            }, uab = function () {
                var a;
                return g.z(function (b) {
                    return 1 == b.j ? g.x(b, i7(), 2) : (a = b.u) ? g.x(b, e7(a, { mode: "readwrite", Zb: !0 }, function (c) {
                        var d = Z6(c, "ytMainDownloadedVideoEntity"), e = Z6(c, "ytMainVideoEntity"), f = Z6(c, "mainVideoEntity"); return g.aw.all([d, e, f]).then(function (h) {
                            h = g.r(h); var l = h.next().value, m = h.next().value, n = h.next().value; h = {}; l = g.r(l); for (var p = l.next(); !p.done; p = l.next()) { p = p.value; var q = g.kH(p.id).entityId; h[q] = p } l = {}; m = g.r(m); for (p = m.next(); !p.done; p = m.next())p = p.value, q = g.kH(p.id).entityId, l[q] = p; m = {}; n = g.r(n);
                            for (p = n.next(); !p.done; p = n.next())p = p.value, q = g.kH(p.key).entityId, m[q] = p; n = []; p = g.r(Object.keys(h)); for (q = p.next(); !q.done; q = p.next())if (q = q.value, !m[q] && l[q]) {
                                var u = h[q], w = l[q]; u = { key: g.lH(q, "mainVideoDownloadStateEntity"), playbackData: g.lH(q, "playbackData"), addedTimestampMillis: u.addedTimestampMillis }; q = [{
                                    key: g.lH(q, "mainVideoEntity"), videoId: q, title: w.title, thumbnail: w.thumbnail, localizedStrings: w.localizedStrings, lengthSeconds: w.lengthSeconds, publishedTimestampMillis: w.publishedTimestampMillis,
                                    formattedDescription: w.formattedDescription, owner: w.channelOwner, downloadState: u.key
                                }, u]; n.push(a7(c, q[0], "mainVideoEntity"), a7(c, q[1], "mainVideoDownloadStateEntity"))
                            } return g.aw.all(n)
                        })
                    }), 0) : b.return()
                })
            }, vab = function (a, b) {
                this.j = a;
                this.B = b
            }, yab = function (a, b) {
                var c, d, e, f, h, l, m, n, p, q, u, w, y, A;
                return g.z(function (B) {
                    switch (B.j) {
                        case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, f = [], g.pa(B, 2), g.x(B, wab(a, e), 4); case 4: f = B.u; g.ra(B, 3); break; case 2: return h = g.ua(B), l = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", h instanceof g.Uv && "QUOTA_EXCEEDED" === h.type && (l = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), B.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",
                            c, void 0, l, m)); case 3: n = []; if (null == (p = f) ? 0 : p.length) for (q = g.r(f), u = q.next(); !u.done; u = q.next())w = u.value, y = w.offlineVideoData, A = void 0, (null == (A = y) ? 0 : A.videoId) && n.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", y.videoId, "musicTrack", 0, W7, xab(b, y))); return B.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, n))
                    }
                })
            }, Aab = function (a, b) {
                var c, d, e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H, L, N, K, P, R, X, Q, oa, sa, Ba, ya, va, Ja, Ka, qa, kb, Mb, Ta, fb, Yb, Ua, $a, ub, dc, Qb, Nc, Zb, Zc, yd, pb, ec, qb, Tb, Nb, Ub, Nd, ta, vb, fd, Ec,
                sb, Fc, zd, ne, gd, Hd, ie, Rc, od, Sa;
                return g.z(function (Ia) {
                    switch (Ia.j) {
                        case 1: return c = t7(b), d = b.entityKey, e = g.kH(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.x(Ia, h7(a.j, "musicPlaylist"), 5)) : g.x(Ia, g7(a.j, d, "musicPlaylist"), 4); case 4: (l = Ia.u) && f.push(l); Ia.Ma(3); break; case 5: f = Ia.u; case 3: if (null == (m = f) || !m.length) return Ia.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); n = g.Zu(b.actionMetadata, zab); q = null == (p = n) ? void 0 : p.autoSync; u = []; y = w = !0; A = !1; B = void 0; if (!h && !1 === q) { Ia.Ma(6); break } return g.x(Ia, M$a(!!q,
                            f), 7); case 7: if (u = Ia.u, !u.length || !h && u[0].playlistId !== e) return Ia.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); case 6: if (h) { D = []; G = g.r(u); for (H = G.next(); !H.done; H = G.next())L = H.value, L.upToDate || q && !L.shouldAutoSyncMetadata || !L.playlistId || (N = { autoSync: q }, D.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", L.playlistId, "musicPlaylist", 0, W7, { musicPlaylistEntityActionMetadata: N }))); return Ia.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, D)) } u.length && (K = u[0], A =
                                !!K.upToDate, q && (w = null != (P = K.shouldAutoSyncMetadata) ? P : !0, y = null != (R = K.shouldAutoSyncVideos) ? R : !0, K.checkInSeconds && (B = K.checkInSeconds))); if (A || !w) return Ia.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); X = []; Q = f[0]; oa = void 0; if (!Q.downloadMetadata) { Ia.Ma(8); break } return g.x(Ia, g7(a.j, Q.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 9); case 9: sa = Ia.u, oa = Number(null != (ya = null == (Ba = sa) ? void 0 : Ba.addedTimestampMillis) ? ya : "0") / 1E3; case 8: return g.pa(Ia, 10), g.x(Ia, wab(a, e, null ==
                                    (va = oa) ? void 0 : va.toString(), B), 12); case 12: X = Ia.u; g.ra(Ia, 11); break; case 10: return Ja = g.ua(Ia), Ja instanceof Error && "No data" === Ja.message ? g.x(Ia, $8a(e, a.j, b, a.B), 11) : (Ka = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", qa = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", Ja instanceof g.Uv && "QUOTA_EXCEEDED" === Ja.type && (Ka = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", qa = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Ia.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",
                                        c, void 0, Ka, qa))); case 11: if (!y) return Ia.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); kb = []; Mb = new Map; if (null == (Ta = X) ? 0 : Ta.length) for (fb = g.r(X), Yb = fb.next(); !Yb.done; Yb = fb.next())Ua = Yb.value, $a = Ua.offlineVideoData, ub = void 0, (null == (ub = $a) ? 0 : ub.videoId) && Mb.set($a.videoId, $a); dc = new Map; Qb = []; if (null == (Nc = Q) ? 0 : null == (Zb = Nc.tracks) ? 0 : Zb.length) for (Zc = g.r(Q.tracks), yd = Zc.next(); !yd.done; yd = Zc.next())if (pb = yd.value, ec = g.kH(pb).entityId) Mb.has(ec) ? (dc.set(ec, Mb.get(ec)), Mb.delete(ec)) :
                                            Qb.push(ec); qb = g.r(Mb.entries()); for (Tb = qb.next(); !Tb.done; Tb = qb.next())Nb = Tb.value, Ub = g.r(Nb), Nd = Ub.next().value, ta = Ub.next().value, vb = Nd, fd = ta, kb.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", vb, "musicTrack", 0, W7, xab(b, fd))); Ec = g.r(dc.entries()); for (sb = Ec.next(); !sb.done; sb = Ec.next())Fc = sb.value, zd = g.r(Fc), ne = zd.next().value, gd = zd.next().value, Hd = ne, ie = gd, kb.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Hd, "musicTrack", 0, W7, xab(b, ie))); Rc = g.r(Qb); for (od = Rc.next(); !od.done; od = Rc.next())Sa =
                                                od.value, kb.push(C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE", Sa, "musicTrack", 0, W7)); return Ia.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, kb))
                    }
                })
            }, Bab = function (a, b) {
                var c, d;
                return g.z(function (e) { switch (e.j) { case 1: return c = t7(b), g.pa(e, 2), d = g.kH(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.x(e, b9a(a.j, b, a.B), 5) : g.x(e, $8a(d, a.j, b, a.B), 5); case 5: g.ra(e, 3); break; case 2: return g.ua(e), e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)) } })
            }, wab =
            function (a, b, c, d) {
                var e, f, h, l;
                return g.z(function (m) { switch (m.j) { case 1: return g.x(m, G$a([b]), 2); case 2: return e = m.u, g.x(m, Cab(a, e[0], c, d), 3); case 3: return f = m.u, h = f.musicPlaylistEntity, l = x7(h.thumbnailDetails), g.x(m, s7(l), 4); case 4: return m.return(e[0].videos) } })
            }, Cab = function (a, b, c, d) {
                var e, f, h, l, m, n, p, q, u, w, y, A, B, D, G, H;
                return g.z(function (L) {
                    if (1 == L.j) {
                        e = b.videos; f = b.playlistId; h = []; l = []; m = []; n = c ? (1E3 * Number(c)).toString() : Date.now().toString(); if (e) for (p = g.r(e), q = p.next(); !q.done; q = p.next())u = q.value, w = u.offlineVideoData, y = w.videoId, A = { id: g.lH(y, "musicTrack") }, B = g.lH(y, "musicTrackDownloadMetadataEntity"), h.push(A), l.push(A.id), m.push(B); D = b.lastModifiedTimestamp ? (1E3 * Number(b.lastModifiedTimestamp)).toString() : "0"; G = {
                            id: g.lH(f, "musicPlaylistDownloadMetadataEntity"), trackDownloadMetadatas: m, lastModifiedTimestampMillis: D,
                            addedTimestampMillis: n, syncState: "DOWNLOAD_SYNC_STATE_UP_TO_DATE"
                        }; H = { id: g.lH(f, "musicPlaylist"), title: b.title, playlistId: f, thumbnailDetails: b.thumbnail, visibility: Dab(b), trackCount: b.totalVideoCount, tracks: l, downloadMetadata: G.id }; d && (H.entityMetadata ? H.entityMetadata.nextAutoRefreshIntervalSeconds = String(d) : H.entityMetadata = { nextAutoRefreshIntervalSeconds: String(d) }); return g.x(L, e7(a.j, { mode: "readwrite", Zb: !0 }, function (N) {
                            for (var K = a7(N, H, "musicPlaylist"), P = [], R = g.r(h), X = R.next(); !X.done; X = R.next())P.push(a7(N,
                                X.value, "musicTrack")); N = a7(N, G, "musicPlaylistDownloadMetadataEntity"); return g.aw.all([K].concat(g.t(P), [N]))
                        }), 2)
                    } return L.return({
                        musicPlaylistEntity: H,
                        r6a: h
                    })
                })
            }, Dab = function (a) {
                switch (a.privacy) {
                    case "PRIVATE": return "PLAYLIST_ENTITY_VISIBILITY_PRIVATE";
                    case "PUBLIC": return "PLAYLIST_ENTITY_VISIBILITY_PUBLIC"; case "UNLISTED": return "PLAYLIST_ENTITY_VISIBILITY_UNLISTED"; default: return "PLAYLIST_ENTITY_VISIBILITY_UNKNOWN"
                }
            }, xab = function (a, b) {
                b = { track: c9a(b) };
                if (a = g.Zu(a.actionMetadata, zab)) b.maximumDownloadQuality = a.maximumDownloadQuality; return { musicTrackEntityActionMetadata: b }
            }, Eab = function (a, b) {
                this.j = a;
                this.B = b
            }, Iab = function (a, b) {
                var c, d, e, f, h, l, m, n;
                return g.z(function (p) {
                    switch (p.j) {
                        case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, g.pa(p, 2), g.x(p, Fab(a, e, void 0, null == (f = g.Zu(b.actionMetadata, Gab)) ? void 0 : f.track), 4); case 4: g.ra(p, 3); break; case 2: return h = g.ua(p), l = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", h instanceof g.Uv && "QUOTA_EXCEEDED" === h.type && (l = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", m = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), p.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE",
                            c, void 0, l, m)); case 3: var q = (q = g.Zu(b.actionMetadata, Gab)) ? { playbackDataActionMetadata: { maximumDownloadQuality: q.maximumDownloadQuality } } : void 0; n = C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", 1, Hab, q); return p.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, [n]))
                    }
                })
            }, Jab = function (a, b) {
                var c, d, e, f, h, l, m, n, p, q;
                return g.z(function (u) {
                    switch (u.j) {
                        case 1: return c = t7(b), d = g.kH(b.entityKey), e = d.entityId, g.x(u, g7(a.j, b.entityKey, "musicTrack"), 2); case 2: f = u.u; if (!f) { h = void 0; u.Ma(3); break } return g.x(u, g7(a.j, f.downloadMetadata, "musicTrackDownloadMetadataEntity"), 4); case 4: h = u.u; case 3: l = h; if (!f || !l) return u.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.pa(u, 5); return g.x(u, Fab(a, e, l.addedTimestampMillis), 7); case 7: m = C7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e, "playbackData", 1, Hab); g.ra(u,
                            6); break; case 5: return n = g.ua(u), n instanceof Error && "No data" === n.message ? g.x(u, Y8a(e, a.j, b, a.B), 6) : (p = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", n instanceof g.Uv && "QUOTA_EXCEEDED" === n.type && (p = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), u.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, p, q))); case 6: return u.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS",
                                c, m ? [m] : void 0))
                    }
                })
            }, Kab = function (a, b) {
                var c, d;
                return g.z(function (e) { switch (e.j) { case 1: return c = t7(b), g.pa(e, 2), d = g.kH(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.x(e, b9a(a.j, b, a.B), 5) : g.x(e, Y8a(d, a.j, b, a.B), 5); case 5: g.ra(e, 3); break; case 2: return g.ua(e), e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 3: return e.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)) } })
            }, Fab =
            function (a, b, c, d) {
                var e, f, h, l;
                return g.z(function (m) { switch (m.j) { case 1: if (e = d) { m.Ma(2); break } return g.x(m, F$a([b]), 3); case 3: f = m.u, h = f[0], e = c9a(h); case 2: return g.x(m, Lab(a, e, b, c), 4); case 4: return l = m.u, g.x(m, s7(x7(l.thumbnailDetails)), 0) } })
            }, Lab = function (a, b, c, d) {
                var e;
                return g.z(function (f) { return 1 == f.j ? (d || (d = Date.now().toString()), e = { id: g.lH(c, "musicTrackDownloadMetadataEntity"), playbackData: g.lH(c, "playbackData"), addedTimestampMillis: d }, g.x(f, e7(a.j, { mode: "readwrite", Zb: !0 }, function (h) { var l = a7(h, e, "musicTrackDownloadMetadataEntity"); h = a7(h, b, "musicTrack"); return g.aw.all([l, h]) }), 2)) : f.return(b) })
            }, X7 = function () {
                S7.apply(this, arguments);
                this.I = "musicTrack"
            }, Mab = function () { g.eO.apply(this, arguments) };
    g.v(T6, S6); g.ca.Object.defineProperties(T6.prototype, {
        entityMetadata: {
            configurable: !0, enumerable: !0, get: function () { return this.j.entityMetadata },
            set: function (a) { this.j.entityMetadata = a }
        }
    });
    g.v(B6a, T6); B6a.prototype.u = function () { return [] };
    g.v(C6a, T6); C6a.prototype.u = function () { var a = []; this.j.alternateChannel && a.push(this.j.alternateChannel); this.j.alternateChannelList && a.push.apply(a, g.t(this.j.alternateChannelList)); this.j.oneofChannelEntity && a.push(this.j.oneofChannelEntity); return [].concat(g.t(new Set(a))) };
    g.v(D6a, T6); D6a.prototype.u = function () { var a = []; this.j.entryCollection && a.push(this.j.entryCollection); return [].concat(g.t(new Set(a))) };
    g.v(E6a, S6); E6a.prototype.u = function () { var a = []; this.j.video && a.push(this.j.video); return [].concat(g.t(new Set(a))) };
    g.v(F6a, T6); F6a.prototype.u = function () { var a = []; this.j.parentPlaylist && a.push(this.j.parentPlaylist); if (this.j.entries) for (var b = g.r(this.j.entries), c = b.next(); !c.done; c = b.next())a.push.apply(a, g.t((new E6a(c.value)).u())); return [].concat(g.t(new Set(a))) };
    g.v(G6a, T6); G6a.prototype.u = function () { var a = []; this.j.descriptionEntity && a.push(this.j.descriptionEntity); this.j.creators && a.push.apply(a, g.t(this.j.creators)); this.j.theBiggestFan && a.push(this.j.theBiggestFan); return [].concat(g.t(new Set(a))) };
    g.v(H6a, T6); H6a.prototype.u = function () { return [] };
    g.v(I6a, T6); I6a.prototype.u = function () { return [] };
    g.v(J6a, T6); J6a.prototype.u = function () { return [] };
    g.v(K6a, T6); K6a.prototype.u = function () { return [] };
    g.v(L6a, T6); L6a.prototype.u = function () { return [] };
    g.v(M6a, T6); M6a.prototype.u = function () { return [] };
    g.v(N6a, S6); N6a.prototype.u = function () { var a = []; this.j.video && a.push(this.j.video); this.j.playlist && a.push(this.j.playlist); this.j.videoItem && a.push(this.j.videoItem); this.j.playlistItem && a.push(this.j.playlistItem); return [].concat(g.t(new Set(a))) };
    g.v(O6a, T6); O6a.prototype.u = function () { var a = []; this.j.refresh && a.push(this.j.refresh); if (this.j.downloads) for (var b = g.r(this.j.downloads), c = b.next(); !c.done; c = b.next())a.push.apply(a, g.t((new N6a(c.value)).u())); return [].concat(g.t(new Set(a))) };
    g.v(P6a, T6); P6a.prototype.u = function () { var a = []; this.j.playbackData && a.push(this.j.playbackData); this.j.localImageEntities && a.push.apply(a, g.t(this.j.localImageEntities)); return [].concat(g.t(new Set(a))) };
    g.v(Q6a, T6); Q6a.prototype.u = function () { return [] };
    g.v(R6a, T6); R6a.prototype.u = function () { var a = []; this.j.fakeChildren && a.push.apply(a, g.t(this.j.fakeChildren)); return [].concat(g.t(new Set(a))) };
    g.v(S6a, T6); S6a.prototype.u = function () { var a = []; this.j.video && a.push(this.j.video); this.j.playbackData && a.push(this.j.playbackData); this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy); return [].concat(g.t(new Set(a))) };
    g.v(T6a, T6); T6a.prototype.u = function () { var a = []; this.j.channelOwner && a.push(this.j.channelOwner); this.j.videos && a.push.apply(a, g.t(this.j.videos)); this.j.collaboratorChannels && a.push.apply(a, g.t(this.j.collaboratorChannels)); this.j.downloadState && a.push(this.j.downloadState); return [].concat(g.t(new Set(a))) };
    g.v(U6a, T6); U6a.prototype.u = function () { var a = []; this.j.video && a.push(this.j.video); this.j.channelContributor && a.push(this.j.channelContributor); return [].concat(g.t(new Set(a))) };
    g.v(V6a, S6); V6a.prototype.u = function () { var a = []; this.j.localImageEntities && a.push.apply(a, g.t(this.j.localImageEntities)); return [].concat(g.t(new Set(a))) };
    g.v(W6a, S6); W6a.prototype.u = function () { var a = []; this.j.recommendedVideoMetadata && a.push.apply(a, g.t((new V6a(this.j.recommendedVideoMetadata)).u())); return [].concat(g.t(new Set(a))) };
    g.v(X6a, S6); X6a.prototype.u = function () { var a = []; this.j.playbackPosition && a.push(this.j.playbackPosition); return [].concat(g.t(new Set(a))) };
    g.v(Y6a, T6); Y6a.prototype.u = function () { var a = []; this.j.owner && a.push(this.j.owner); this.j.downloadState && a.push(this.j.downloadState); this.j.userState && a.push.apply(a, g.t((new X6a(this.j.userState)).u())); this.j.additionalMetadata && a.push.apply(a, g.t((new W6a(this.j.additionalMetadata)).u())); return [].concat(g.t(new Set(a))) };
    g.v(Z6a, T6); Z6a.prototype.u = function () { return [] };
    g.v($6a, T6); $6a.prototype.u = function () { var a = []; this.j.channelOwner && a.push(this.j.channelOwner); this.j.playbackPosition && a.push(this.j.playbackPosition); this.j.localImageEntities && a.push.apply(a, g.t(this.j.localImageEntities)); this.j.downloadStatus && a.push(this.j.downloadStatus); return [].concat(g.t(new Set(a))) };
    g.v(a7a, T6); a7a.prototype.u = function () { return [] };
    g.v(b7a, T6); b7a.prototype.u = function () { return [] };
    g.v(c7a, T6); c7a.prototype.u = function () { return [] };
    g.v(d7a, T6); d7a.prototype.u = function () { var a = []; this.j.trackDownloadMetadatas && a.push.apply(a, g.t(this.j.trackDownloadMetadatas)); return [].concat(g.t(new Set(a))) };
    g.v(e7a, T6); e7a.prototype.u = function () { var a = []; this.j.trackDownloadMetadatas && a.push.apply(a, g.t(this.j.trackDownloadMetadatas)); return [].concat(g.t(new Set(a))) };
    g.v(f7a, T6); f7a.prototype.u = function () { var a = []; this.j.playbackData && a.push(this.j.playbackData); this.j.localImageEntities && a.push.apply(a, g.t(this.j.localImageEntities)); return [].concat(g.t(new Set(a))) };
    g.v(g7a, T6); g7a.prototype.u = function () { var a = []; this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity); this.j.primaryArtists && a.push.apply(a, g.t(this.j.primaryArtists)); this.j.details && a.push(this.j.details); this.j.userDetails && a.push(this.j.userDetails); this.j.tracks && a.push.apply(a, g.t(this.j.tracks)); this.j.share && a.push(this.j.share); this.j.downloadMetadata && a.push(this.j.downloadMetadata); return [].concat(g.t(new Set(a))) };
    g.v(h7a, T6); h7a.prototype.u = function () { var a = []; this.j.albumRelease && a.push(this.j.albumRelease); this.j.tracks && a.push.apply(a, g.t(this.j.tracks)); return [].concat(g.t(new Set(a))) };
    g.v(i7a, T6); i7a.prototype.u = function () { var a = []; this.j.albumRelease && a.push(this.j.albumRelease); return [].concat(g.t(new Set(a))) };
    g.v(j7a, T6); j7a.prototype.u = function () { var a = []; this.j.details && a.push(this.j.details); this.j.userDetails && a.push(this.j.userDetails); return [].concat(g.t(new Set(a))) };
    g.v(k7a, T6); k7a.prototype.u = function () { var a = []; this.j.parentArtist && a.push(this.j.parentArtist); return [].concat(g.t(new Set(a))) };
    g.v(l7a, T6); l7a.prototype.u = function () { var a = []; this.j.parentArtist && a.push(this.j.parentArtist); return [].concat(g.t(new Set(a))) };
    g.v(m7a, T6); m7a.prototype.u = function () { return [] };
    g.v(n7a, T6); n7a.prototype.u = function () { return [] };
    g.v(o7a, T6); o7a.prototype.u = function () { var a = []; this.j.tracks && a.push.apply(a, g.t(this.j.tracks)); this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity); this.j.details && a.push(this.j.details); this.j.downloadMetadata && a.push(this.j.downloadMetadata); this.j.sideloadMetadata && a.push(this.j.sideloadMetadata); this.j.userDetails && a.push(this.j.userDetails); this.j.entryCollection && a.push(this.j.entryCollection); this.j.share && a.push(this.j.share); return [].concat(g.t(new Set(a))) };
    g.v(p7a, T6); p7a.prototype.u = function () { return [] };
    g.v(q7a, T6);
    q7a.prototype.u = function () {
        var a = []; this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity); this.j.artists && a.push.apply(a, g.t(this.j.artists)); this.j.audioModeVersion && a.push(this.j.audioModeVersion); this.j.videoModeVersion && a.push(this.j.videoModeVersion); this.j.userDetails && a.push(this.j.userDetails); this.j.details && a.push(this.j.details); this.j.albumRelease && a.push(this.j.albumRelease); this.j.share && a.push(this.j.share); this.j.libraryEdit && a.push(this.j.libraryEdit); this.j.downloadMetadata &&
            a.push(this.j.downloadMetadata); return [].concat(g.t(new Set(a)))
    };
    g.v(r7a, T6); r7a.prototype.u = function () { var a = []; this.j.parentTrack && a.push(this.j.parentTrack); return [].concat(g.t(new Set(a))) };
    g.v(s7a, T6); s7a.prototype.u = function () { var a = []; this.j.parentTrack && a.push(this.j.parentTrack); return [].concat(g.t(new Set(a))) };
    g.v(t7a, T6); t7a.prototype.u = function () { return [] };
    g.v(u7a, T6); u7a.prototype.u = function () { return [] };
    g.v(v7a, T6); v7a.prototype.u = function () { return [] };
    g.v(w7a, T6); w7a.prototype.u = function () { return [] };
    g.v(x7a, T6); x7a.prototype.u = function () { var a = []; this.j.transfer && a.push(this.j.transfer); this.j.adsPlaybackData && a.push.apply(a, g.t(this.j.adsPlaybackData)); this.j.drmLicense && a.push(this.j.drmLicense); this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy); return [].concat(g.t(new Set(a))) };
    g.v(y7a, T6); y7a.prototype.u = function () { return [] };
    g.v(z7a, T6); z7a.prototype.u = function () { var a = []; this.j.offlineVideoStreams && a.push.apply(a, g.t(this.j.offlineVideoStreams)); this.j.captionTrack && a.push.apply(a, g.t(this.j.captionTrack)); return [].concat(g.t(new Set(a))) };
    g.v(A7a, T6); A7a.prototype.u = function () { return [] };
    g.v(B7a, T6); B7a.prototype.u = function () { return [] };
    g.v(C7a, T6); C7a.prototype.u = function () { return [] };
    g.v(D7a, T6); D7a.prototype.u = function () { return [] };
    g.v(E7a, T6); E7a.prototype.u = function () { return [] };
    g.v(F7a, T6); F7a.prototype.u = function () { return [] };
    var N$a = ["browse", "music/browse", "unplugged/browse"], O$a = ["offline/playlist_sync_check"], E$a = ["offline"], p9a = ["offline/get_playback_data_entity"]; U6.getInstance = function () { return g.z(function (a) { return a.return(new Promise(function (b) { g.Aw().then(function (c) { c ? (U6.j || (U6.j = new U6(c)), b(U6.j)) : b(void 0) }) })) }) };
    U6.prototype.get = function (a) { var b = this, c, d, e; return g.z(function (f) { if (1 == f.j) return g.x(f, G7a(b.token), 2); if (3 != f.j) return c = f.u, g.x(f, c.get("prefs", a), 3); d = f.u; if (!d) return f.return(); e = (0, g.T)(); return d.expirationTimestampMs <= e ? f.return() : f.return(d.value) }) };
    U6.prototype.set = function (a, b, c) { c = void 0 === c ? 31536E3 : c; var d = this, e, f, h; return g.z(function (l) { if (1 == l.j) return e = (0, g.T)(), f = { key: a, value: b, expirationTimestampMs: e + 1E3 * c }, g.x(l, G7a(d.token), 2); h = l.u; return g.x(l, g.pna(h, "prefs", f), 0) }) };
    U6.prototype.remove = function (a) { var b = this, c; return g.z(function (d) { if (1 == d.j) return g.x(d, G7a(b.token), 2); c = d.u; return g.x(d, c.delete("prefs", a), 0) }) };
    var V6; g.v(W6, g.Pv); g.v(X6, O7a); X6.prototype.B = function (a, b) { b = Q7a(b); a = (new TextEncoder).encode(JSON.stringify(a)); return this.j.encrypt(a, b) };
    X6.prototype.u = function (a, b) { if (!(a instanceof Uint8Array)) throw K7a(1); var c = new TextDecoder; b = Q7a(b); a = this.j.decrypt(a, b); return JSON.parse(c.decode(a)) };
    var R7a = {
        buttonEntity: B7a, captionTrack: t7a, channelHandle: B6a, commerceCartListEntity: D7a, downloadQualityPickerEntity: L6a, downloadsPageRefreshTokenEntity: M6a, downloadsPageViewConfigurationEntity: a7a, fakeChannel: C6a, fakePlaylist: D6a, fakePlaylistEntryCollection: F6a, fakeVideo: G6a, fakeVideoDescription: H6a, flowStateEntity: I6a, iconBadgeEntity: E7a, liveChatPollStateEntity: K6a, logoEntity: J6a, mainDownloadsListEntity: O6a, mainPlaylistEntity: T6a, mainPlaylistVideoEntity: U6a, mainVideoDownloadStateEntity: P6a, mainVideoEntity: Y6a,
        markersVisibilityOverrideEntity: b7a, musicAlbumReleaseDetail: h7a, musicAlbumReleaseDownloadMetadataEntity: d7a, musicAlbumRelease: g7a, musicAlbumReleaseUserDetail: i7a, musicArtistDetail: k7a, musicArtist: j7a, musicArtistUserDetail: l7a, musicLibraryEdit: m7a, musicLibraryStatusEntity: n7a, musicPlaylist: o7a, musicPlaylistDownloadMetadataEntity: e7a, musicShare: p7a, musicTrackDetail: r7a, musicTrackDownloadMetadataEntity: f7a, musicTrack: q7a, musicTrackUserDetail: s7a, offlineOrchestrationActionWrapperEntity: u7a, offlineVideoPolicy: v7a,
        offlineVideoStreams: w7a, offlineabilityEntity: Q6a, orchestrationWebSamplingEntity: R6a, pinnedProductEntity: c7a, playbackData: x7a, quantityIncrementerEntity: F7a, refresh: y7a, settingEntity: A7a, transfer: z7a, videoPlaybackPositionEntity: C7a, ytMainChannelEntity: Z6a, ytMainDownloadedVideoEntity: S6a, ytMainVideoEntity: $6a
    }; g.v(c7, O7a); c7.prototype.B = function (a) { return a };
    c7.prototype.u = function (a) { if (a instanceof Uint8Array) throw K7a(0); return a };
    g.v(d7, g.J); d7.prototype.B = function (a) { e8a(this, a.data) };
    d7.prototype.ra = function () { this.channel.close() };
    var j8a, Nab = {
        Cea: "captionTrack", rma: "ytMainDownloadedVideoEntity", tma: "ytMainVideoEntity", eDa: "ytMainChannelEntity", fDa: "mainPlaylistEntity", gDa: "mainPlaylistVideoEntity", hDa: "mainVideoEntity", iDa: "mainVideoDownloadStateEntity", JGa: "musicAlbumReleaseDetail", KGa: "musicAlbumReleaseDownloadMetadataEntity", LGa: "musicAlbumRelease", MGa: "musicAlbumReleaseUserDetail", NGa: "musicArtistDetail", OGa: "musicArtist", QGa: "musicArtistUserDetail", ZGa: "musicLibraryEdit", aHa: "musicLibraryStatusEntity", gHa: "musicPlaylistDownloadMetadataEntity",
        hHa: "musicPlaylist", mHa: "musicShare", rHa: "musicTrackDetail", sHa: "musicTrackDownloadMetadataEntity", tHa: "musicTrack", uHa: "musicTrackUserDetail", IIa: "offlineOrchestrationActionWrapperEntity", IKa: "offlineVideoPolicy", bLa: "offlineVideoStreams", oNa: "playbackData", OQa: "orchestrationWebSamplingEntity", qRa: "settingEntity", SUa: "downloadsPageViewConfigurationEntity", TUa: "refresh", UUa: "mainDownloadsListEntity", VUa: "downloadsPageRefreshTokenEntity", yYa: "transfer"
    }, f9a = new g.Xo("elementsCommand"); var d9a = new g.Xo("entityBatchUpdate"); var T$a = new g.Xo("mainPlaylistEntityActionMetadata"); var bab = new g.Xo("mainVideoEntityActionMetadata"); var zab = new g.Xo("musicPlaylistEntityActionMetadata"); var Gab = new g.Xo("musicTrackEntityActionMetadata"); var g9a = new g.Xo("offlineOrchestrationActionCommand"); var iab = new g.Xo("localImageEntityActionMetadata"); var E7 = new g.Xo("playbackDataActionMetadata"); var t9a = new g.Xo("transferEntityActionMetadata"); g.v(k7, g.J); k7.prototype.B = function (a) { this.api.Pa("onOfflineOperationFailure", a.data) };
    k7.prototype.C = function (a) { this.api.ma("offlinetransferpause", a.data) };
    k7.prototype.ra = function () { var a; null == (a = this.j) || a.close(); var b; null == (b = this.u) || b.close() }; A8a.prototype.request = function (a, b, c) { b = void 0 === b ? {} : b; return this.locks.request(a, b, function (d) { return c(d) }) }; D8a.prototype.Ff = function () { this.j && m7(this) }; var q7 = g.C.caches, p7, O8a; o7.prototype.open = function (a) { return q7.open(M8a(a)) };
    o7.prototype.has = function (a) { return q7.has(M8a(a)) };
    o7.prototype.delete = function (a) { return q7.delete(M8a(a)) };
    o7.prototype.match = function (a, b) { var c = this, d, e, f, h, l, m; return g.z(function (n) { switch (n.j) { case 1: return g.x(n, c.keys(), 2); case 2: d = n.u, e = g.r(d), f = e.next(); case 3: if (f.done) { n.Ma(5); break } h = f.value; return g.x(n, c.open(h), 6); case 6: return l = n.u, g.x(n, l.match(a, b), 7); case 7: if (m = n.u) return n.return(m); f = e.next(); n.Ma(3); break; case 5: return n.return() } }) };
    g.v(L8a, o7); L8a.prototype.keys = function () { var a, b, c, d, e, f, h, l, m; return g.z(function (n) { if (1 == n.j) return a = [], b = g.Qv("CacheStorage keys"), g.x(n, q7.keys(), 2); c = n.u; d = g.r(c); for (e = d.next(); !e.done; e = d.next()) { f = e.value; var p = f.indexOf(":"); h = -1 === p ? { MD: f } : { MD: f.substring(0, p), datasyncId: f.substring(p + 1) }; l = h.MD; m = h.datasyncId; m === b && a.push(l) } return n.return(a) }) }; Object.keys(Nab).map(function (a) { return Nab[a] });
    var V8a = "captionTrack ytMainDownloadedVideoEntity ytMainVideoEntity ytMainChannelEntity mainPlaylistEntity mainVideoEntity mainVideoDownloadStateEntity offlineVideoPolicy offlineVideoStreams playbackData transfer".split(" "), a9a = "musicPlaylist musicTrack musicTrackDownloadMetadataEntity offlineVideoPolicy offlineVideoStreams playbackData transfer".split(" "); g.v(k9a, B7); k9a.prototype.u = function (a) { return u7(a) ? n9a(this, a) : v7(a) ? o9a(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) }; g.v(G7, B7); G7.prototype.u = function (a) { return u7(a) ? r9a(this, a) : v7(a) ? s9a(this, a) : "OFFLINE_ORCHESTRATION_ACTION_TYPE_UPDATE" === a.actionType && a.entityKey ? this.handleUpdate(a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    G7.prototype.handleUpdate = function (a) {
        var b = this, c, d, e; return g.z(function (f) {
            switch (f.j) {
                case 1: return c = t7(a), g.x(f, g7(b.j, a.entityKey, "transfer"), 2); case 2: d = f.u; if (!d || "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH" !== d.transferState) return f.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c)); g.pa(f, 3); d.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE"; return g.x(f, f7(b.j, d, "transfer"), 5); case 5: e = g.kH(d.key).entityId; n7({ transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_PLAYER_RESPONSE_REFRESH" },
                    { videoId: e, Hj: d }); g.ra(f, 4); break; case 3: return g.ua(f), f.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED")); case 4: return f.return(new D7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c))
            }
        })
    }; var N9a = ["OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH"]; var x9a; F9a.prototype.j = function (a, b) { var c = a.action.actionMetadata.priority - b.action.actionMetadata.priority; 0 === c && (a.j < b.j ? c = -1 : a.j > b.j && (c = 1)); return c }; g.v(J7, g.J); J7.prototype.ra = function () { this.J && this.J(); g.J.prototype.ra.call(this) };
    J7.prototype.createAction = function (a, b) { var c = g.kH(a.entityKey).entityType, d = g.vz(16); return new H7(c, d, a, b.actionId, b.rootActionId) };
    J7.prototype.ea = function (a) { var b = this, c, d, e, f, h, l, m, n, p; return g.z(function (q) { if (1 == q.j) { if (b.isDisposed()) return q.return(); d = null != (c = a.offlineOrchestrationActionWrapperEntity) ? c : new Set; e = []; f = g.r(d); for (h = f.next(); !h.done; h = f.next())l = h.value, m = g.kH(l), n = m.entityId, H9a(b.j, n) || e.push(l); return g.x(q, Q9a(b, e), 2) } p = q.u; return g.x(q, P9a(b, p), 0) }) };
    J7.prototype.retry = function () { var a = this; return g.z(function (b) { return g.x(b, R9a(a), 0) }) }; g.k = X9a.prototype; g.k.A1 = function (a) { var b = this, c, d, e; return g.z(function (f) { if (!g.V(a.state, 128)) return f.Ma(0); var h = null == (c = a.state.getData()) ? void 0 : c.errorCode; a.state.getData(); var l = null == (d = a.state.getData()) ? void 0 : d.mC; e = "net.connect" === h && 1 === l ? "TRANSFER_FAILURE_REASON_NETWORK_LOST" : (null == h ? 0 : h.startsWith("net.")) ? "TRANSFER_FAILURE_REASON_NETWORK" : "TRANSFER_FAILURE_REASON_INTERNAL"; return g.x(f, b.kt(b.player.getVideoData().videoId, e), 0) }) };
    g.k.kt = function (a, b) { var c = this; return g.z(function (d) { if (1 == d.j) { if (c.u) return d.return(); c.u = !0; return "TRANSFER_FAILURE_REASON_NETWORK_LOST" === b ? (M7(c, a, !1, !0), d.Ma(0)) : g.x(d, L7(c, a), 3) } g.rH(a, 4); return g.x(d, c.j.kt(b), 0) }) };
    g.k.FD = function (a) { 2 === a.status ? (a.status !== this.B && (o$a(this.j), g.rH(a.videoId, 2)), a.hA && u$a(this.j, a.videoId, a.hA)) : 4 === a.status ? (L7(this, a.videoId), this.kt(a.videoId, a.WC ? "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" : "TRANSFER_FAILURE_REASON_INTERNAL")) : 1 === a.status && t$a(this.j); this.B = a.status; this.api.Pa("localmediachange", { videoId: a.videoId, status: a.status }) };
    g.k.IJ = function () { var a = this, b; return g.z(function (c) { if (1 == c.j) { if (a.u) return c.return(); a.u = !0; b = a.player.getVideoData().videoId; return g.x(c, L7(a, b), 2) } return g.x(c, a.j.IJ(), 0) }) };
    g.k.K = function (a) { return this.api.V().K(a) }; g.v(N7, g.J); N7.prototype.ra = function () { this.u && this.u(); g.J.prototype.ra.call(this) };
    N7.prototype.B = function (a) { var b = this, c, d, e, f, h, l, m, n; return g.z(function (p) { d = null != (c = a.transfer) ? c : new Set; e = []; f = g.r(d); for (h = f.next(); !h.done; h = f.next())l = h.value, m = g.kH(l), n = m.entityId, e.push(n); return 0 === e.length ? p.return() : g.x(p, d$a(b, e), 0) }) }; g.v(h$a, g.J); g.k = h$a.prototype; g.k.ra = function () { this.J && this.J(); this.S.dispose(); this.C.dispose(); this.qa && g.Kf(this.D.B, this.qa); this.ea && g.Kf(this.D.B, this.ea); g.J.prototype.ra.call(this) };
    g.k.X3 = function (a) {
        var b = this, c, d; return g.z(function (e) {
            if (1 == e.j) return c = g.lH(a, "transfer"), b.j && c === b.j.key ? (M7(b.I, b.B, !0), b.C.stop(), e.Ma(0)) : g.x(e, e7(b.u, { mode: "readwrite", Zb: !0 }, function (f) { return Y6(f, c, "transfer").then(function (h) { if (h && "TRANSFER_STATE_COMPLETE" !== h.transferState && "TRANSFER_STATE_FAILED" !== h.transferState) return h.transferState = "TRANSFER_STATE_PAUSED_BY_USER", a7(f, h, "transfer").then(function () { return h }) }) }), 3);
            (d = e.u) && J8a({ videoId: a, Hj: d }); g.na(e)
        })
    };
    g.k.W3 = function () { this.j && this.B && M7(this.I, this.B, !1); this.C.stop() };
    g.k.rA = function () { this.j ? k$a(this, this.j) : P7(this) };
    g.k.XU = function (a) { var b = this, c; return g.z(function (d) { switch (d.j) { case 1: if (!b.j) { d.Ma(2); break } if ("TRANSFER_STATE_COMPLETE" === b.j.transferState || "TRANSFER_STATE_FAILED" === b.j.transferState || !a.transfer || !a.transfer.has(b.j.key)) { d.Ma(3); break } c = b; return g.x(d, g7(b.u, b.j.key, "transfer"), 4); case 4: c.j = d.u; if (b.j) { d.Ma(3); break } return g.x(d, l$a(b), 3); case 3: if (b.j) return d.return(); case 2: return g.x(d, P7(b), 0) } }) };
    g.k.kt = function (a, b) {
        var c = this, d, e; return g.z(function (f) {
            if (1 == f.j) { if (!c.j) return Q7(), f.Ma(2); a: switch (a) { case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE": case "TRANSFER_FAILURE_REASON_PLAYABILITY": case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES": var h = !1; break a; default: h = !0 }return h && v$a(c) ? g.x(f, R7(c, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 6) : g.x(f, w$a(c, a), 2) } 2 != f.j && (d = g.kH(c.j.key).entityId, n7({ transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_RETRY" },
                { videoId: d, Hj: c.j })); O7(c); e = P7(c, !0); b && b(e); g.na(f)
        })
    };
    g.k.IJ = function (a) {
        var b = this, c, d, e, f, h, l; return g.z(function (m) {
            if (1 == m.j) return b.j ? v$a(b) ? g.x(m, R7(b, "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH"), 6) : g.x(m, w$a(b, "TRANSFER_FAILURE_REASON_STREAM_MISSING"), 2) : (Q7(), m.Ma(2)); if (2 != m.j) {
                c = g.kH(b.j.key).entityId; n7({ transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_PLAYER_RESPONSE_EXPIRATION" }, { videoId: c, Hj: b.j }); d = v9a(); var n = { isEnqueuedForExpiredStreamUrlRefetch: !0 }; void 0 === n ? delete d[E7.name] : d[E7.name] = n; e = g.lH(c, "playbackData"); f = {
                    actionType: "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD",
                    entityKey: e, actionMetadata: d
                }; h = I7(new H7("playbackData", c, f)); return g.x(m, f7(b.u, h, "offlineOrchestrationActionWrapperEntity"), 2)
            } O7(b); l = P7(b, !0); a && a(l); g.na(m)
        })
    };
    var Oab = {}, x$a = (Oab.TRANSFER_STATE_TRANSFERRING = 1, Oab.TRANSFER_STATE_TRANSFER_IN_QUEUE = 2, Oab); g.k = S7.prototype; g.k.Qy = function (a) { var b = {}; return b.playbackData = new k9a(a, this.Y, this.j), b.transfer = new G7(a), b };
    g.k.CK = function () { var a = this; return g.z(function (b) { return a.u ? g.x(b, i$a(a.u), 0) : b.Ma(0) }) };
    g.k.isOrchestrationLeader = function () { return this.B.j };
    g.k.ZJ = function (a) { var b = this.j; b.api.ma("offlinetransferpause", a); var c; null == (c = b.u) || c.postMessage(a) };
    g.k.rA = function (a) {
        var b, c; return g.z(function (d) {
            if (1 == d.j) return g.x(d, i7(), 2); b = d.u; if (!b) return d.return(); c = g.lH(a, "transfer"); return g.x(d, e7(b, { mode: "readwrite", Zb: !0 }, function (e) {
                return Y6(e, c, "transfer").then(function (f) {
                    return f && "TRANSFER_STATE_PAUSED_BY_USER" === f.transferState ? (f.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE", a7(e, f, "transfer").then(function () { n7({ transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_USER_RESUME", statusType: "USER_RESUMED" }, { videoId: a, Hj: f }); return g.aw.resolve(null) })) :
                        g.aw.resolve(null)
                })
            }), 0)
        })
    };
    g.k.hE = function (a) { a = void 0 === a ? 43200 : a; var b = this, c, d, e, f, h, l, m, n; return g.z(function (p) { if (1 == p.j) return b.S.tf() ? g.x(p, i7(), 2) : p.return(C$a()); if (3 != p.j) { c = p.u; if (!c) return p.return([]); d = Date.now() / 1E3; return g.x(p, h7(c, "offlineVideoPolicy"), 3) } e = p.u; f = []; h = g.r(e); for (l = h.next(); !l.done; l = h.next())m = l.value, Number(m.lastUpdatedTimestampSeconds) + a <= d && (n = g.kH(m.key).entityId, f.push(n)); return f.length ? p.return(T7(b, f, b.I, "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH")) : p.return([]) }) };
    g.k.deleteAll = function () { return T7(this, ["!*$_ALL_ENTITIES_!*$"], this.I, "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE") };
    g.k.refreshAllStaleEntities = function (a) { var b = this; return g.z(function (c) { return 1 == c.j ? g.x(c, b.hE(a), 2) : c.return(c.u) }) }; g.v(P$a, B7); P$a.prototype.u = function (a) { return u7(a) ? S$a(this, a) : v7(a) ? U$a(this, a) : w7(a) ? V$a(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var U7 = [10]; g.v($$a, B7); $$a.prototype.u = function (a) { return u7(a) ? dab(this, a) : v7(a) ? eab(this, a) : w7(a) ? fab(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var cab = [10]; g.v(hab, B7); hab.prototype.u = function (a) { return v7(a) ? jab(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) }; g.v(kab, B7); kab.prototype.u = function (a) { return u7(a) ? nab(this, a) : v7(a) ? oab(this, a) : w7(a) ? pab(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var rab = [10]; g.v(V7, S7); V7.prototype.Qy = function (a) { var b = S7.prototype.Qy.call(this, a); this.Y.K("web_player_remove_deprecated_entity_killswitch") && (b.ytMainDownloadedVideoEntity = new kab(a, this.Y, this.j)); b.mainVideoEntity = new $$a(a, this.j); b.mainPlaylistEntity = new P$a(a, this.j); b.mainDownloadsListEntity = new hab(a, this.Y); return b };
    V7.prototype.refreshAllStaleEntities = function (a, b) {
        var c = this, d, e, f, h, l, m, n, p; return g.z(function (q) {
            switch (q.j) {
                case 1: d = []; if (!c.Y.K("web_player_offline_playlist_auto_refresh")) { q.Ma(2); break } return g.x(q, sab(c, a, b), 3); case 3: d = q.u; case 2: return g.x(q, U6.getInstance(), 4); case 4: return e = q.u, g.x(q, null == (f = e) ? void 0 : f.get("sdois"), 5); case 5: h = q.u; if (!c.Y.K("kevlar_smart_downloads") || !h) { q.Ma(6); break } l = d; m = l.concat; return g.x(q, tab(c, h, 0 === a), 7); case 7: d = m.call(l, q.u); case 6: return n = d, p = n.concat,
                    g.x(q, S7.prototype.refreshAllStaleEntities.call(c, a, b), 8); case 8: return d = p.call(n, q.u), q.return(d)
            }
        })
    };
    V7.prototype.CK = function () { var a = this; return g.z(function (b) { return 1 == b.j ? g.x(b, S7.prototype.CK.call(a), 2) : a.Y.K("woffle_entity_migration") ? g.x(b, uab(), 0) : b.Ma(0) }) }; g.v(vab, B7); vab.prototype.u = function (a) { return u7(a) ? yab(this, a) : v7(a) ? Aab(this, a) : w7(a) ? Bab(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var W7 = [10]; g.v(Eab, B7); Eab.prototype.u = function (a) { return u7(a) ? Iab(this, a) : v7(a) ? Jab(this, a) : w7(a) ? Kab(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType)) };
    var Hab = [10]; g.v(X7, S7); X7.prototype.Qy = function (a) { var b = S7.prototype.Qy.call(this, a); b.musicTrack = new Eab(a, this.j); b.musicPlaylist = new vab(a, this.j); return b };
    X7.prototype.refreshAllStaleEntities = function (a, b) { var c = this, d, e, f; return g.z(function (h) { if (1 == h.j) return e = d = [], f = e.concat, g.x(h, S7.prototype.refreshAllStaleEntities.call(c, a, b), 2); d = f.call(e, h.u); return h.return(d) }) }; g.v(Mab, g.eO); g.k = Mab.prototype; g.k.create = function () { var a = this.player.V(); g.jG(a) ? this.j = new V7(a, this.player) : g.TF(a) && (this.j = new X7(a, this.player)) };
    g.k.Dj = function () { return !1 };
    g.k.oK = function (a, b, c, d) { var e = this; return g.z(function (f) { return e.j ? f.return(T7(e.j, a, b, c, d)) : f.return(Promise.reject()) }) };
    g.k.deleteAll = function () { return this.j.deleteAll() };
    g.k.hE = function (a) { return this.j.hE(a) };
    g.k.refreshAllStaleEntities = function (a) { return this.j.refreshAllStaleEntities(a) };
    g.k.ZJ = function (a) { this.j.ZJ(a) };
    g.k.rA = function (a) { return this.j.rA(a) };
    g.k.isOrchestrationLeader = function () { return this.j.isOrchestrationLeader() }; g.dO("offline", Mab);
})(_yt_player);
