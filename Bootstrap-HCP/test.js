'use strict';
/**
 * @param {string} data
 * @param {string} e
 * @param {boolean} islongclick
 * @return {undefined}
 */
function vcb778ce41130b213653506a1f586b179(data, e, islongclick) {
  if (islongclick && (this.v796fcf789ad585f046b01dd1ca0babce = true, this.v87396d652a1abb6ad660d181ec69d7e4 = {}, this.v17ddca99222eb790cd275c69ac607b08 = {}, this.v0db142e16f0c27bb36605dd487bb9933 = [], this.vda9ac3ad3786ce67271bd2bf8d8f8a4f = {}, this.v4bd9a626707e6b4e0462491e46a62e8c = {}, this.v7b0b442be5c189cdc80d1386ea6074d5 = ["Object", "Point", "KMDate"]), this.length = 0, this.pos = 0, this.pow = Math.pow, this.vf5bf46324fb1ad1d5a865206dad6eb32 = Endian.v41897d45660d1c3c6f4cc43660f75033,
  this.v9034c92e5369ad572294fc587044731f = Math.pow(2, -23), this.va5c204310ecfeac09e69daf105a91190 = Math.pow(2, -52), this.v82ed9f0688cc63c22672b9ceae8862f4 = [], this.v3b2a2b78e14af303f112387188c37d98 = {}, this.vebc49caa9ced150a656b39ee8c53d0f7 = [], this.v64e6b7d49ae71a32cf243eb800d2da83 = {}, this.v51e0a4625ec29c984b5b615871aa5e91 = [], this.vf5bf46324fb1ad1d5a865206dad6eb32 = Endian.v41897d45660d1c3c6f4cc43660f75033, this.v3d85f210265965cf0db8eee3e88e608d = false, this.v7369501f8651f11cd3b70790022e0bdb =
  0, this.v8770d281d70fecc1710af9dd0256ae0f = 0, typeof data == "string") {
    var f = pako.inflate(data, {
      to : "string"
    });
    data = f.split("").map(function(strUtf8) {
      return strUtf8.charCodeAt(0);
    });
  }
  this.data = data !== undefined ? data : [];
  if (e !== undefined) {
    /** @type {string} */
    this.vf5bf46324fb1ad1d5a865206dad6eb32 = e;
  }
  this.length = this.data.length;
  /** @type {string} */
  var funcExt = this.vf5bf46324fb1ad1d5a865206dad6eb32 == Endian.v41897d45660d1c3c6f4cc43660f75033 ? "BE" : "LE";
  /** @type {!Array} */
  var funcs = ["readInt32", "readInt16", "readUInt30", "readUInt32", "readUInt16", "readFloat32", "readFloat64", "writeUInt32", "writeFloat64"];
  var func;
  for (func in funcs) {
    this[funcs[func]] = this[funcs[func] + funcExt];
  }
  var funcMap = {
    readUnsignedByte : "readByte",
    writeUnsignedByte : "writeByte",
    readUnsignedInt : "readUInt32",
    readFloat : "readFloat32",
    readDouble : "readFloat64",
    writeDouble : "writeFloat64",
    readShort : "readInt16",
    readUnsignedShort : "readUInt16",
    readBoolean : "readBool",
    writeBoolean : "writeBool",
    readInt : "readInt32"
  };
  for (func in funcMap) {
    this[func] = this[funcMap[func]];
  }
}
/**
 * @param {number} a
 * @param {number} b
 * @return {undefined}
 */
function Point(a, b) {
  /** @type {number} */
  this.x = a;
  /** @type {number} */
  this.y = b;
}
/**
 * @param {?} _f
 * @param {?} c
 * @param {?} f
 * @return {undefined}
 */
function v13260862a5e36823cb5546b59af48c71(_f, c, f) {
  /** @type {string} */
  this.vef8d2b8c170a04b4db4153b8df9a515e = "4.3.0.6";
  var that = this;
  /** @type {number} */
  this.v6009dd16c5c8cdf90ca16f59b40a0c86 = 33.333333333333336;
  this.v7cc89c84ffe803bcbc1b9c0c03311608 = _f;
  this.v5fdc98237b88db17fd679441f9d49a0f = c;
  this.vb38ec11025af5f77fed59ec9c02ba631 = U.v00c10dd2afa65048c9519a223b6ce3cd(f);
  this.canvas = $("#sim-view-canvas");
  this.canvas.click(function(event) {
    that.v2c8c55808c5bad3b41e3da0c0a838da8(event);
  });
  this.canvas.mousedown(function(event) {
    that.vdc2f88e67acb2768716d43f467174e5c(event);
  });
  this.canvas.mouseup(function(e) {
    that.v08719502af10e937eaa8122d310cad9f(e);
  });
  this.canvas.mousemove(function(event) {
    that.onMouseMove(event);
  });
  this.canvas.bind("touchstart", function(event) {
    that.v1548eef244bda1da0d2e4b3453e25386(event);
  });
  this.canvas.bind("touchmove", function(event) {
    that.vd943b00af6807a4ecd577b69c54cd639(event);
  });
  this.canvas.bind("touchend", function(event) {
    that.v2fb3d73eca68cd0a5c5eaaf74e2a0ff3(event);
    that.vea1287eca9445a1dd99302e5d228ef46(event);
  });
  this.canvas.bind("touchcancel", function(event) {
    that.v274031ca168e217b24fa1e60d1efcb6f(event);
  });
  this.context = this.canvas[0].getContext("2d");
  /** @type {!Array} */
  this.v1282fa4bc8bedeaaf5dc2e076f512189 = [];
  /** @type {null} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = null;
  this.v7f24efd030d9a5f8e807999fc3812ff4 = $("#time-value");
  /** @type {!Array} */
  this.speeds = [.2, 1, 5, 61];
  /** @type {!Array} */
  this.vf6442652e6adf0d5d860f7078c90842f = [".5x", "1x", "20x", "100x"];
  this.vea7e3d3724eaf22d249e12deb4a1edfd = $("#speed-slider");
  this.vd78424fa9afb95084a1f370fe5214740 = $("#consensus-speed-indicator");
  this.vbb501f64c1632345b208860c55e93fbd = $("#start-stop-button");
  this.v396213dc48065a51be6107810901928f = $("#start-stop-button-icon");
  this.ve89e61de64c54a5f988c75c2050b0569 = $("#start-stop-button-text");
  this.vbb501f64c1632345b208860c55e93fbd.click(function(b) {
    that.v38333ca1319d3e2de0bb07384b1ed745();
  });
  $("#run-to-button").click(function(b) {
    that.vcbac2f4e4dc75d218d2e25687778d698();
  });
  $("#brandHeader .infoIcon").click(function(b) {
    that.vea5fa542d87a8735c4edcafaed21a303();
  });
  this.v6d3e99637ba057ad515e2d1533654047 = new Point(0, 0);
  this.v9d802e8d7c41edce2da401871368fd22 = $("#zoom-slider");
  /** @type {!Array} */
  this.v40b61d31168505a8bd84664bb8816db9 = [.75, .8, .85, .9, .95, 1];
  /** @type {number} */
  this.vacd138095667b40524e06d1f21f901c3 = 5;
  /** @type {number} */
  this.v3b8b854b52da3c49b1c643fd4eb8d4ec = this.vacd138095667b40524e06d1f21f901c3;
  this.vd8ed03237bb0e85e9dbde8cfa508f909 = {};
  this.vb9ed3705e6293aca37292aa84a0abf6f = {};
  /** @type {boolean} */
  this.running = false;
  /** @type {!Array} */
  this.v03f3c658d58e0dd2f3d07c04aa1abfee = [];
  /** @type {!Array} */
  this.vabbe19afd235991c70766de7f554b24d = [];
  /** @type {null} */
  this.imageAtlas = null;
  /** @type {number} */
  this.v2925fb445866fcc36863247b5767b30b = 0;
  /** @type {!Array} */
  this.v254210d9432905fa6adc5a952359bed3 = ["simulation logic", "lesson data", "graphics"];
  /** @type {string} */
  this.v4289c2f3204930eba7aee6a641e2a07f = "Weekly Profit (k = 1,000's)";
  /** @type {boolean} */
  this.designerModeEnabled = false;
  /** @type {null} */
  this.state = null;
  /** @type {!Array} */
  this.ve75b063959bfe5bb931e2607bde4d7f1 = [];
  /** @type {!Array} */
  this.vf1f079b203e52890ec1752d01442a621 = [];
  /** @type {!Array} */
  this.v501600104ab2cdad11634f24af2c1269 = [];
  /** @type {boolean} */
  this.va424747fc90ab402a8f56fb01d3a5e5f = true;
  /** @type {boolean} */
  this.vcc7062cb26b1bd0c46a2102a8506d4c4 = true;
  /** @type {boolean} */
  this.v49dac33e46e5dbe2ade373b2b06cc94e = true;
  /** @type {string} */
  this.securityToken = "";
  /** @type {string} */
  this.v86ed25da6f98a97ba78a0dedf9118ba2 = "";
  /** @type {number} */
  this.v58df98fb9e1d917fe19718dff7e29a65 = 0;
  /** @type {null} */
  this.v024c8c5b36685adf9bbeee284c0284e7 = null;
  /** @type {null} */
  this.vb04088fb75e4e51fbd11ca6e2f796d05 = null;
  /** @type {string} */
  this.v6f632cd35a0abd3341ffe233a1c9869f = "";
  /** @type {string} */
  this.serverURL = "";
  /** @type {string} */
  this.veb279052b1a3f161d4aa8ccf105cb358 = "";
  /** @type {number} */
  this.v486b6b76b55b6b83ee563fda8c618680 = 0;
  /** @type {number} */
  this.v36170dbc1017df1e0586cc2112e62e75 = 0;
  /** @type {null} */
  this.v193bb926ec99c1f36544962a1d44789e = null;
  /** @type {boolean} */
  this.vf643e528a9b84e13508c09352bce0ee1 = false;
  this.v89ad818a689f8b31b7223bf128562425 = {};
  this.ve9b1403cfff01386657f404141348827 = {};
  /** @type {boolean} */
  this.multiplayer = false;
  /** @type {!Array} */
  this.vc01518a0113992ddd0487eec4451b6dd = [];
  /** @type {number} */
  this.v9e058b496ab36ab35ead361b491d7c68 = 0;
  /** @type {number} */
  this.ve7f0cfe75faddc7e19845e9d80c05c09 = 0;
  /** @type {number} */
  this.v793296b910f0342dcfeaac3870c72b98 = 99;
  /** @type {boolean} */
  this.va6756a9fbedc852e5e0c575e757acb39 = false;
  /** @type {boolean} */
  this.v2fc3f8648d5e698da277680e5470405a = false;
  /** @type {number} */
  this.vf12d3fc22392c73b4c80b18fa471aa54 = 0;
  /** @type {number} */
  this.v38fe5f311cb99659e1d2b639902a04b7 = new Date * 1 - 10;
  /** @type {number} */
  this.vb0a9834b44cea4bfc6c52bc276195d60 = 10;
  this.v5d9e2f6fe6b6e17c991d4fe51f08abb8 = $("#fps-value");
  this.v4e8a77404b23deacd115b66026981dd6 = $("#renderTime-value");
  /** @type {!Array} */
  this.vdb14e33b6d4c53416b1fcf7ffca18e91 = [];
  v13260862a5e36823cb5546b59af48c71.instance = this;
}
/**
 * @return {?}
 */
function stopAndQuerySaved() {
  return v13260862a5e36823cb5546b59af48c71.instance.stopAndQuerySaved();
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} rev
 * @return {undefined}
 */
function v1847d6dd008ed9b56a6f12d60cf3baa6(a, b, rev) {
  v13260862a5e36823cb5546b59af48c71.call(this, a, b, rev);
}
/**
 * @return {undefined}
 */
function vab9f4aed6a0c608da64294e108ceb50c() {
  this.v95c7d6ec60eaada27f42897308442b93 = KMDate.v2fcf16dfff5594cfa1614c820237b41e;
}
/**
 * @param {?} view
 * @param {!Array} a
 * @param {!Function} f
 * @return {undefined}
 */
function vee8206b276787f6d065f935010a51f0c(view, a, f) {
  /** @type {number} */
  var i = 0;
  for (; i < a.length; ++i) {
    f.call(view, a[i]);
  }
}
/**
 * @param {!Date} y
 * @param {number} i
 * @param {number} v
 * @param {number} h
 * @param {number} m
 * @param {number} s
 * @param {number} ms
 * @return {undefined}
 */
function KMDate(y, i, v, h, m, s, ms) {
  if (y instanceof Date) {
    /** @type {!Date} */
    var dt = y;
    /** @type {number} */
    y = dt.getFullYear();
    /** @type {number} */
    i = dt.getMonth();
    /** @type {number} */
    v = dt.getDate();
    /** @type {number} */
    h = dt.getHours();
    /** @type {number} */
    m = dt.getMinutes();
    /** @type {number} */
    s = dt.getSeconds();
    /** @type {number} */
    ms = dt.getMilliseconds();
  }
  /** @type {!Date} */
  this.vce98bb10835aa209bf408c135f438d53 = new Date(2001, 0, 10, 0, 0, 0, 0);
  if (y != undefined) {
    this.vce98bb10835aa209bf408c135f438d53.setUTCFullYear(y);
  }
  if (i != undefined) {
    this.vce98bb10835aa209bf408c135f438d53.setUTCMonth(i);
  }
  if (v != undefined) {
    this.vce98bb10835aa209bf408c135f438d53.setUTCDate(v);
  }
  if (h != undefined) {
    this.vce98bb10835aa209bf408c135f438d53.setUTCHours(h);
  }
  if (m != undefined) {
    this.vce98bb10835aa209bf408c135f438d53.setUTCMinutes(m);
  }
  if (s != undefined) {
    this.vce98bb10835aa209bf408c135f438d53.setUTCSeconds(s);
  }
  if (ms != undefined) {
    this.vce98bb10835aa209bf408c135f438d53.setUTCMilliseconds(ms);
  }
}
/**
 * @param {!Object} b
 * @param {?} excludeFalseConflicts
 * @return {undefined}
 */
function v74d951e1ef91d0f189e177d58ae30d8e(b, excludeFalseConflicts) {
  this.location = new Point(b.x, b.y);
  this.v0c5b846ccaa2b9b45f0dfeb2b858f004 = excludeFalseConflicts;
  /** @type {null} */
  this.v1917f14965df083150b1374c9a97c9d7 = null;
  /** @type {number} */
  this.col = 0;
  /** @type {number} */
  this.row = 0;
  /** @type {boolean} */
  this.flipX = false;
  /** @type {!Array} */
  this.transform = [];
  /** @type {number} */
  this.v0b0a737fbac14d8cde26959a03edb178 = 0;
  /** @type {boolean} */
  this.clickable = true;
  /** @type {!Array} */
  this.v22710cf6916a48e141cc7ad7876eca98 = [];
  /** @type {!Array} */
  this.vabde4a187e855cd6fb04c0f6619f306f = [];
  /** @type {string} */
  this.font = "";
  /** @type {string} */
  this.fillStyle = "";
  /** @type {string} */
  this.textAlign = "start";
  /** @type {string} */
  this.text = "";
  /** @type {number} */
  this.alpha = 1;
  /** @type {null} */
  this.v793de667e5638a8684bd3ef05d3c7e8b = null;
  /** @type {null} */
  this.v7e5c485c26c0b1b3eb445634ab61d621 = null;
  /** @type {boolean} */
  this.cache = false;
  /** @type {string} */
  this.v22203dd5e6c61d88d23e19bbecf2d6f1 = "";
  /** @type {boolean} */
  this.vbaada8e78bed9c29ff9656ef7d38ee2c = false;
}
/**
 * @param {?} envId
 * @param {string} url
 * @param {?} cols
 * @param {?} rows
 * @param {number} firstLineToRender
 * @param {number} lastLineToRender
 * @param {!Array} language
 * @param {!Array} ngram_range
 * @return {undefined}
 */
function vf813c7d84bb4b3941f3712a3a50e9f2e(envId, url, cols, rows, firstLineToRender, lastLineToRender, language, ngram_range) {
  this.v8f706334c9f6339322c13ee8fe64b3af = envId;
  /** @type {null} */
  this.image = null;
  /** @type {string} */
  this.url = url;
  /** @type {number} */
  this.cols = Math.max(1, cols);
  /** @type {number} */
  this.rows = Math.max(1, rows);
  /** @type {number} */
  this.v7d55d9e86f9b71917657598c5783498e = firstLineToRender;
  /** @type {number} */
  this.v52c18112e052911261f543ef8d6f25cb = lastLineToRender;
  /** @type {!Array} */
  this.v2f12a37f9458da5c8d2fc5bf3ee59908 = language;
  /** @type {!Array} */
  this.v273d4301f8075b943efc60f4490e9ec9 = ngram_range;
}
/**
 * @param {?} a
 * @param {string} b
 * @param {string} tag
 * @return {undefined}
 */
function v5b2d49b6f83f05f0edcd351a1640c3e4(a, b, tag) {
  this.v8f706334c9f6339322c13ee8fe64b3af = a;
  this.url = b.replace(/([^:]\/)\/+/g, "$1");
  /** @type {null} */
  this.rows = null;
  /** @type {string} */
  this.type = tag;
}
/**
 * @param {?} envId
 * @param {string} url
 * @return {undefined}
 */
function vd3a20b3f053d0b94eba2b5fcbac7523d(envId, url) {
  this.v8f706334c9f6339322c13ee8fe64b3af = envId;
  /** @type {string} */
  this.url = url;
  /** @type {string} */
  this.v39c98e1a3aa9bd7d016b2710791c5d06 = "";
}
/**
 * @param {?} eventStr
 * @param {(Array|string)} a
 * @return {undefined}
 */
function v98d829b48a3d1a2b42d1454357ce024d(eventStr, a) {
  this.v8f706334c9f6339322c13ee8fe64b3af = eventStr;
  this.vfc9214bee2fe51fc220c868f8b575920 = _.isArray(a) ? a : [a];
  this.data = {};
}
/**
 * @param {?} envId
 * @param {string} url
 * @param {?} srcOrHref
 * @param {number} parentElement
 * @return {undefined}
 */
function v251b1192a8aabb238f203138491e353a(envId, url, srcOrHref, parentElement) {
  this.v8f706334c9f6339322c13ee8fe64b3af = envId;
  /** @type {string} */
  this.url = url;
  this.v0bffef285d80921ccd3581ec9176949d = srcOrHref;
  /** @type {number} */
  this.vb024f1202091e1d4ec998faf653fb572 = parentElement;
  /** @type {number} */
  this.v237f0c39a5876a2dea40152939ec9f7f = 0;
  /** @type {null} */
  this.data = null;
  /** @type {!Array} */
  this.pages = [];
  /** @type {null} */
  this.v5cfd2950ac4a986bdbf15c7b6d23d79f = null;
  /** @type {null} */
  this.vbf330b53209d0944c7cb53186c99d16c = null;
  this.vdda7a6d2851bf230166029a566d75e81 = {};
  /** @type {number} */
  this.v79b4a854ca27aff40a2568ed786ac60f = 1024;
  /** @type {number} */
  this.v2fd923c3e97a0724f3852547b4023696 = 0;
  /** @type {number} */
  this.v2926b9875acf8acb0800427415cb9f2f = 0;
  /** @type {number} */
  this.v32293d40f492de4f18cf76df38594417 = 0;
  /** @type {number} */
  this.v7c2162e1488027289d926b7d78a3ee55 = 0;
}
/**
 * @return {undefined}
 */
function v16cee3ee62f4283e2aa83ff23503aa30() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  this.v7554fd520f800257b7fbbc83fbcad801 = new Point(0, 0);
  this.v78a36276c7c9d57c54ebcd7e252c2fc5 = new Point(0, 0);
  /** @type {null} */
  this.v0f43c39807c96cd6fc98a5cc74759d9a = null;
  /** @type {!Array} */
  this.vf007717c61efd32d684694a8c20954de = [];
  /** @type {number} */
  this.v1091d737cec126d4163cba4d0f8963fd = 1;
  /** @type {number} */
  this.va359d4e8388ec27ff74fa1c2c7b7a983 = 0;
  /** @type {number} */
  this.v47ab9094f7763ada19867ee0131af83f = 0;
  /** @type {number} */
  this.v03eaec21ea318bf45ad1ccbb041ea5e4 = -1;
  /** @type {boolean} */
  this.flipX = false;
  /** @type {number} */
  this.vebc3a5aa83c5f1cd47eec10d259d0517 = 0;
}
/**
 * @param {number} altviewerURL
 * @return {undefined}
 */
function v05d11f0f2e0c1a6f360c8611189e4901(altviewerURL) {
  if (altviewerURL == undefined) {
    /** @type {number} */
    altviewerURL = Math.random() * U.vdfcca307a0489ee3baf51069dd57c8b3;
  }
  /** @type {number} */
  this.v160d845e0a5b9f70de589a9ec781864f = altviewerURL;
}
/**
 * @param {?} p1__3354_SHARP_
 * @return {undefined}
 */
function v2464891fa5ee15f3ab68694893198f32(p1__3354_SHARP_) {
  v05d11f0f2e0c1a6f360c8611189e4901.call(this, p1__3354_SHARP_);
  /** @type {number} */
  this.v4657b82405d9c8bc71fea22f91f1dfae = 0;
}
/**
 * @return {undefined}
 */
function vfe39ece2a85b3dcccfd78b6d58d6c9de() {
  /** @type {number} */
  this.v723d0dcccb1c7cb10810dbb95ac4ed89 = 1;
  /** @type {number} */
  this.v7050ee4bce90371b8567c65077126d42 = 0;
  /** @type {!Array} */
  this.v453a55e59fb4133da0172c66e3dd0483 = [];
  /** @type {!Array} */
  this.vdfdd9a680621240fac79d77e899b0098 = [];
  this.now = new KMDate;
  this.v5ef584a9983ae0f6c9cb691b041b4e1a;
  this.actions = {};
  this.vf668d872e21e06a0572f88c61501c532 = {};
  this.settings = {
    SimulatedSecondsPerStep : 90,
    RandomSeed : -1,
    RunToOffsetIntoDayInMinutes : 0,
    RunToChangeYearEnabled : false
  };
  /** @type {number} */
  this.v5284d44cb4057594dcd4e3d70d62bee5 = 0;
  /** @type {!Array} */
  this.v6cdb2ba3835850bcd5a621dfd4c7756b = [];
  /** @type {!Array} */
  this.v4b316bb4b1292e8513b0e7429bac4513 = [];
  /** @type {!Array} */
  this.v17e110444bb9b5cd6e74d14f2affc3a7 = [];
  /** @type {boolean} */
  this.v651ad1a6065df201e85a0b2da71805e3 = false;
  /** @type {boolean} */
  this.vc438281062ab7eb560b313dac8eb2a80 = false;
  /** @type {boolean} */
  this.v58eba1f018d212fd60a90a55e3a86b0a = false;
  /** @type {boolean} */
  this.v075a828610f3539bd644a217b12b95c5 = false;
  /** @type {boolean} */
  this.v27ab2a6a25e266c079d23d2ce787ff7d = false;
  /** @type {number} */
  this.v857e210de5749cc6dd2313995353b70e = 0;
  /** @type {null} */
  this.random = null;
  /** @type {string} */
  this.vb9161f93ce4eb651c0a1a206c43a6c60 = "";
  this.vb3670ede943a585f59501c027b504015 = KMDate.v14cbf0b8c1f93e62dd191db1badd576b;
  /** @type {number} */
  this.v6de6ecc0b365d3e59f96854a314535b5 = 0;
  /** @type {number} */
  this.vc8c559fb65c82f3cee4ed870b61903ef = 0;
  /** @type {number} */
  this.vff8ca6b02bee12b81f9c60bb2cf6b279 = 1;
  /** @type {boolean} */
  this.v4901907582c4139e2838819b2621a5e4 = false;
  /** @type {boolean} */
  this.v918097de0c67343d3404e06a560827e3 = false;
  /** @type {number} */
  this.v85068aafa6c229c3f798d6f44a25b3ed = 1;
  this.veb466fe749db774dc9171d7b22f9cbca = {};
  /** @type {null} */
  this.vaf2a576127494a53d0e079f0ed12d0e1 = null;
  /** @type {string} */
  this.v9e62738cf0f22f7d2b39eab0c266bcee = "h:mm tt";
}
/**
 * @return {undefined}
 */
function v65b9c18832fc7f2bbb412f3e0c656a16() {
  this.events = {};
}
/**
 * @param {string} name
 * @param {!Object} libraries
 * @return {undefined}
 */
function View(name, libraries) {
  /** @type {string} */
  this.name = name;
  /** @type {!Object} */
  this.v0c5b846ccaa2b9b45f0dfeb2b858f004 = libraries;
  /** @type {!Array} */
  this.overlays = [];
}
/**
 * @param {string} a
 * @return {undefined}
 */
function v61a128f3f62cccbce8cb9299d73ce611(a) {
  /** @type {string} */
  this.v892010908a3f0cac58cf3177818409a5 = a;
  /** @type {null} */
  this.selector = null;
  /** @type {!Array} */
  this.ve3c53318f3c028725251819eea78e8c8 = [];
}
/**
 * @param {?} p1__3354_SHARP_
 * @return {undefined}
 */
function vc41c7fe61eaff586a43ca6fdecb046f3(p1__3354_SHARP_) {
  v61a128f3f62cccbce8cb9299d73ce611.call(this, p1__3354_SHARP_);
  /** @type {number} */
  this.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.v3683420ee74216326a2ee2ec0ea39dfa;
  /** @type {number} */
  this.v939ab7e31e06cb168c77667585d89214 = vc41c7fe61eaff586a43ca6fdecb046f3.va2bf3f6c33874c0926985ffe21c9d205;
  /** @type {boolean} */
  this.vcc4f3aeb474c8f55ab8e9e27d1f0fd77 = false;
  /** @type {boolean} */
  this.v11492816a001fd45922999c10e9fe9db = true;
  /** @type {boolean} */
  this.v98186f991a7a8069f2f5775d991ac7e2 = false;
}
/**
 * @param {?} p1__3354_SHARP_
 * @return {undefined}
 */
function vb83b9117e3ceed59acbbd2d23058424a(p1__3354_SHARP_) {
  v61a128f3f62cccbce8cb9299d73ce611.call(this, p1__3354_SHARP_);
}
/**
 * @param {?} instance
 * @param {string} text
 * @param {number} extra
 * @param {!Object} level
 * @return {undefined}
 */
function Alert(instance, text, extra, level) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "Alert");
  if (text == undefined) {
    text = A.v87b8393064cbfa8977b32cec36a69d86().v7cc89c84ffe803bcbc1b9c0c03311608;
  }
  if (extra == undefined) {
    /** @type {number} */
    extra = Alert.OK;
  }
  if (level == undefined) {
    /** @type {null} */
    level = null;
  }
  /** @type {!Object} */
  this.vdc908e0be6c90d5723fba6b652380a22 = level;
  var test = this;
  var options = {};
  /** @type {string} */
  options.title = text;
  /** @type {boolean} */
  options.modal = true;
  /** @type {number} */
  options.minWidth = 350;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {};
  /** @type {number} */
  options.v939ab7e31e06cb168c77667585d89214 = vc41c7fe61eaff586a43ca6fdecb046f3.vcacb79bf77199483ddcc3e9f66ac49ed;
  /** @type {boolean} */
  options.v1b41fcbc06f79e8ed4b144b24b8f93cc = false;
  if (extra & Alert.OK) {
    /**
     * @param {?} e
     * @return {undefined}
     */
    options.buttons.OK = function(e) {
      test.v66abd861a11c3952c37ab8bb68048409(e, Alert.OK);
    };
  }
  if (extra & Alert.v6a489fc7ebc373a001c1badd1759c1eb) {
    /**
     * @param {?} message
     * @return {undefined}
     */
    options.buttons.Cancel = function(message) {
      test.v66abd861a11c3952c37ab8bb68048409(message, Alert.v6a489fc7ebc373a001c1badd1759c1eb);
    };
  }
  if (extra & Alert.vc20f5496a0e37947c331397006a83f07) {
    /**
     * @param {?} string
     * @return {undefined}
     */
    options.buttons.Yes = function(string) {
      test.v66abd861a11c3952c37ab8bb68048409(string, Alert.vc20f5496a0e37947c331397006a83f07);
    };
  }
  if (extra & Alert.ve332d6adb70bc5edb5e110e004c86fa5) {
    /**
     * @param {?} status
     * @return {undefined}
     */
    options.buttons.No = function(status) {
      test.v66abd861a11c3952c37ab8bb68048409(status, Alert.ve332d6adb70bc5edb5e110e004c86fa5);
    };
  }
  this.vf558f821741b5f58fcb7b4b4a75a7a4f = instance;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @param {?} tagsLabel
 * @param {!Object} addTagtitle
 * @param {boolean} deleteTagTitle
 * @return {undefined}
 */
function FinalAlert(tagsLabel, addTagtitle, deleteTagTitle) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "FinalAlert");
  if (addTagtitle == undefined) {
    addTagtitle = A.v87b8393064cbfa8977b32cec36a69d86().v7cc89c84ffe803bcbc1b9c0c03311608;
  }
  var options = {};
  /** @type {!Object} */
  options.title = addTagtitle;
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {};
  /** @type {boolean} */
  options.v1b41fcbc06f79e8ed4b144b24b8f93cc = false;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8;
  /** @type {number} */
  options.v939ab7e31e06cb168c77667585d89214 = vc41c7fe61eaff586a43ca6fdecb046f3.vcacb79bf77199483ddcc3e9f66ac49ed;
  this.vf558f821741b5f58fcb7b4b4a75a7a4f = tagsLabel;
  /** @type {boolean} */
  this.v0a801226f022f4a27105c9517479bf2b = deleteTagTitle === true;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function v5a80f85022622529c463a6ba2ff39861() {
}
/**
 * @param {string} message
 * @return {undefined}
 */
function vd074db6e4d56af7e2a6f1c1d5ea2fb38(message) {
  /** @type {string} */
  this.message = message;
}
/**
 * @return {undefined}
 */
function vc68951fcb00257396b06853901f0e510() {
  /** @type {string} */
  this.sessionToken = "";
  /** @type {string} */
  this.playerName = "player1";
  this.vabbe19afd235991c70766de7f554b24d = {};
  this.__v0a04a4b7bcb1b773c065a844bec23993 = {};
}
/**
 * @return {undefined}
 */
function v55d1ac7cab47e7eac4b6a3abf209b74e() {
  /** @type {string} */
  this.sessionToken = "";
  /** @type {string} */
  this.playerName = "player1";
}
/**
 * @param {!Element} requestWaterMask
 * @param {boolean} f
 * @return {undefined}
 */
function frmOpenLocal(requestWaterMask, f) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmOpenLocal");
  if (f == undefined) {
    /** @type {boolean} */
    f = false;
  }
  var c = this;
  var options = {};
  /** @type {string} */
  options.title = "Open Local";
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Cancel : function() {
      c.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Element} */
  this.v389ef5507550fcd5ede0e822e4ca2b76 = requestWaterMask;
  /** @type {boolean} */
  this.v3d85f210265965cf0db8eee3e88e608d = f;
  /** @type {null} */
  this.ve0027c3d010e287db837cc0bf574b973 = null;
}
/**
 * @param {!Object} childCompute
 * @param {!Element} bindingsSemaphore
 * @return {undefined}
 */
function frmSaveLocal(childCompute, bindingsSemaphore) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSaveLocal");
  var c = this;
  var options = {};
  /** @type {string} */
  options.title = "Save Local";
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      c.v9d98dfc75141f0888f8f658d2be9c659();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Element} */
  this.v389ef5507550fcd5ede0e822e4ca2b76 = bindingsSemaphore;
  var default_favicon = new vcb778ce41130b213653506a1f586b179;
  default_favicon.v0794e99849af353da2642d5a585704e3(childCompute);
  var nameArgs = default_favicon.toString();
  this.v636510007d5e32b5c263a63450c0b0a9 = v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(nameArgs);
}
/**
 * @param {!Object} childCompute
 * @param {?} bindingsSemaphore
 * @return {undefined}
 */
function frmExamineState(childCompute, bindingsSemaphore) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmExamineState");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Examine State";
  /** @type {number} */
  options.width = 800;
  /** @type {number} */
  options.height = 600;
  /** @type {boolean} */
  options.modal = false;
  /** @type {boolean} */
  options.resizable = true;
  options.buttons = {
    Summary : function() {
      b.vefb06aacae2c5bcd5e4ea3f0b8e011ac();
    },
    Diff : function() {
      b.v34a5b825e83e9b13fd9006fcaea30af4();
    },
    Close : function() {
      b.v9d98dfc75141f0888f8f658d2be9c659();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  this.v389ef5507550fcd5ede0e822e4ca2b76 = bindingsSemaphore;
  /** @type {!Date} */
  var firstDayOfYear = new Date;
  /** @type {number} */
  firstDayOfYear = firstDayOfYear.getTime();
  this.ve483eda65810789b71281091256f2805 = new vcb778ce41130b213653506a1f586b179(undefined, undefined, true);
  this.ve483eda65810789b71281091256f2805.v0794e99849af353da2642d5a585704e3(childCompute);
  /** @type {!Date} */
  var d = new Date;
  /** @type {number} */
  d = d.getTime();
  /** @type {number} */
  this.vae2c8a7bf9ec38574a93c9b417e13f01 = d - firstDayOfYear;
  /** @type {number} */
  this.vb14d99fb95fa5d320936c611e98349b4 = 0;
  /** @type {number} */
  this.vb0bac15954868a9d4e6d221f40d5be96 = 400;
}
/**
 * @return {undefined}
 */
function frmRunTo() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmRunTo");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Run To";
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  /** @type {string} */
  options.width = "auto";
  /** @type {number} */
  options.height = 380;
  options.buttons = {
    "Cancel Run To" : function() {
      b.v32eafc28c92bd05fea8990b0498ddb80();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @param {string} canCreateDiscussions
 * @return {undefined}
 */
function frmScoreboard(canCreateDiscussions) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmScoreboard");
  var prevPageButtonSprite = this;
  var options = {};
  /** @type {string} */
  options.title = "Scoreboard";
  /** @type {number} */
  options.width = 400;
  /** @type {number} */
  options.height = 200;
  /** @type {boolean} */
  options.modal = false;
  /** @type {boolean} */
  options.resizable = true;
  /** @type {number} */
  options.v939ab7e31e06cb168c77667585d89214 = vc41c7fe61eaff586a43ca6fdecb046f3.vcacb79bf77199483ddcc3e9f66ac49ed;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8;
  options.buttons = {};
  options.position = {
    my : "right",
    at : "right",
    of : window
  };
  /**
   * @return {undefined}
   */
  this.v819850ec8ffecac67030711398ce6ab3 = function() {
    prevPageButtonSprite.update();
  };
  /** @type {number} */
  this.mode = 0;
  /** @type {string} */
  this.vdd606d68383b61c1b6dc0a362c37f39e = canCreateDiscussions;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function frmPlayerList() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmPlayerList");
  var prevPageButtonSprite = this;
  var options = {};
  /** @type {string} */
  options.title = "Player List";
  /** @type {number} */
  options.width = 600;
  /** @type {number} */
  options.height = 250;
  /** @type {boolean} */
  options.modal = false;
  /** @type {boolean} */
  options.resizable = true;
  /** @type {number} */
  options.v939ab7e31e06cb168c77667585d89214 = vc41c7fe61eaff586a43ca6fdecb046f3.vcacb79bf77199483ddcc3e9f66ac49ed;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8;
  options.buttons = {};
  /**
   * @return {undefined}
   */
  this.v819850ec8ffecac67030711398ce6ab3 = function() {
    prevPageButtonSprite.update();
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @param {!Object} options
 * @param {!Element} suggestedVariableValueCallback
 * @return {undefined}
 */
function frmSettings(options, suggestedVariableValueCallback) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSettings");
  var b = this;
  var cfg = {};
  /** @type {string} */
  cfg.title = "Setting Editor";
  /** @type {number} */
  cfg.width = 600;
  /** @type {number} */
  cfg.height = 600;
  /** @type {boolean} */
  cfg.modal = true;
  /** @type {boolean} */
  cfg.resizable = false;
  cfg.buttons = {
    Save : function() {
      b.v312ac78e29ad3559240b1ecba05160be();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(cfg);
  this.settings = U.vbf0c0591d64e252a0d7d5f31135b0e7f(options);
  /** @type {!Element} */
  this.v389ef5507550fcd5ede0e822e4ca2b76 = suggestedVariableValueCallback;
}
/**
 * @return {undefined}
 */
function frmLicenseInfo() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmLicenseInfo");
  var b = this;
  var options = {};
  /** @type {number} */
  options.width = 500;
  /** @type {string} */
  options.title = "License Info";
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  /** @type {boolean} */
  this.expanded = false;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @param {string} i
 * @return {undefined}
 */
function frmTestSolution(i) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmTestSolution");
  /** @type {string} */
  this.va96f862b2e02794716de63e5b007ae28 = i;
  var rejectingServer = this;
  var options = {};
  /** @type {string} */
  options.title = "Test Solution " + i;
  /** @type {number} */
  options.width = 650;
  /** @type {number} */
  options.height = 550;
  /** @type {boolean} */
  options.resizable = true;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8;
  /** @type {number} */
  options.v939ab7e31e06cb168c77667585d89214 = vc41c7fe61eaff586a43ca6fdecb046f3.vcacb79bf77199483ddcc3e9f66ac49ed;
  options.buttons = {
    Close : function() {
      rejectingServer.close();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function City() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  /** @type {null} */
  this.v727174f11b72c46c5058bd7507361cc3 = null;
  /** @type {!Array} */
  this.v2db6af2b1f5a8cf42fd2e4f228202240 = [];
}
/**
 * @param {?} name
 * @param {?} data
 * @return {undefined}
 */
function v613d4f2132e130828cd3ce4bc8d385ba(name, data) {
  View.call(this, name, data);
}
/**
 * @return {undefined}
 */
function va523e7ef1a952b307bde51fffa209207() {
  v16cee3ee62f4283e2aa83ff23503aa30.call(this);
  /** @type {boolean} */
  this.initialized = false;
}
/**
 * @return {undefined}
 */
function v2293b4b55c00ff726961b8ed86d94131() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  /** @type {null} */
  this.block = null;
  /** @type {number} */
  this.v28ce758f394d88d264bf476143d16523 = 0;
  /** @type {null} */
  this.v49c9fa931644375b3c2fa70882fee2ce = null;
}
/**
 * @return {undefined}
 */
function BuildingType() {
  /** @type {number} */
  this.index = 0;
  /** @type {number} */
  this.v43bac1f08c50aaab27cb11b862390cb2 = 0;
  /** @type {number} */
  this.name = 0;
  /** @type {number} */
  this.v344040e50194bb0251a2791437e5096e = 0;
  /** @type {number} */
  this.height = 0;
  /** @type {boolean} */
  this.vf508d823d055bf88797cce75b7f41b8a = false;
}
/**
 * @return {undefined}
 */
function vc00a41ed71a34f15e6508cde0998e763() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  /** @type {number} */
  this.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f = 0;
  /** @type {number} */
  this.v4fb1e56fa30edc677394334a421f38c5 = 0;
  /** @type {!Array} */
  this.v4aa7c5b8f276e187bc7608435f56bc84 = [];
  /** @type {null} */
  this.v3326a0bcf3291f84296c11210a8fe9c5 = null;
}
/**
 * @return {undefined}
 */
function v3cc232995592894dd6b3cea55d7d7bdb() {
  /** @type {!Array} */
  this.ve094c9f8eca4c77d5b14de02f473b7a1 = [];
  /** @type {!Array} */
  this.vefd58e891af62442896babf7a05f6fbc = [];
  /** @type {number} */
  this.v5e665708978ebb95f5f86ffc64666719 = 0;
  /** @type {!Array} */
  this.vd617251ed8706086ec01e3a5ba7301eb = [];
  this.v750682521769f0af9a51cb15b22e33da;
  this.v12b47b9000a4da119ede05e684204827;
  this.v7319700429d753e1aaeedc58c69e71e9;
  this.v16b6a4298b7a8bbf44fdd2b500f360f4;
  this.v8fdcf6fc399e8c493570dc37923f646c;
  this.v8a45e26bed4e0363610b4758680b64bb;
  /** @type {boolean} */
  this.va940959cc6002cefce6a3c4b1bcb0161 = false;
  this.v43ac50a978b3944e15be71c3ebbf7f91;
}
/**
 * @param {string} p1__3354_SHARP_
 * @return {undefined}
 */
function frmFinancials(p1__3354_SHARP_) {
  if (!p1__3354_SHARP_) {
    /** @type {string} */
    p1__3354_SHARP_ = "frmFinancials";
  }
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, p1__3354_SHARP_);
  var options = {};
  /** @type {string} */
  options.title = "Financials";
  /** @type {number} */
  options.width = 800;
  /** @type {number} */
  options.height = 530;
  /** @type {boolean} */
  options.modal = false;
  /** @type {boolean} */
  options.resizable = true;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.v2a30a0e98cb0cceffb461cdc9181d000;
  options.buttons = this.vbf1725ec800e3c6d9ab70308db7d3d17();
  /** @type {number} */
  options.v939ab7e31e06cb168c77667585d89214 = vc41c7fe61eaff586a43ca6fdecb046f3.v559f16fdb10212ec447231e168281a11;
  /** @type {boolean} */
  options.vcc4f3aeb474c8f55ab8e9e27d1f0fd77 = true;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {number} */
  this.v744e28d6167afbf0edc66230e261e022 = 1;
  /** @type {number} */
  this.ve3d1e08169a495b4207b953be46249c1 = 0;
  /** @type {string} */
  this.v6446c350a9d11c6670e20c2707fff830 = ".dataTables_scrollBody";
  /** @type {number} */
  this.v453d35a91279ad2c6b5685c803246208 = 65;
}
/**
 * @return {undefined}
 */
function frmLoan() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmLoan");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Loans";
  /** @type {number} */
  options.width = 755;
  /** @type {number} */
  options.height = 420;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Array} */
  this.vda2d78568dc8a6184fbcff052f0cd311 = [];
  /** @type {!Array} */
  this.v8e7609333bd10ddf06894c3165635f35 = [];
}
/**
 * @return {undefined}
 */
function frmLoanc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmLoanc1");
}
/**
 * @return {undefined}
 */
function frmLoanc2() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmLoanc2");
  this.vc18d688e07091b27142e0fefc4e6b8b2;
}
/**
 * @return {undefined}
 */
function v8ec9cfde15d40d32a5eaa1641f0aaa53() {
  this.v44d042cf524ab6ea16413bfad2bcff20;
  this.vb8f406f927eca063c5666ee727ba7cb0;
  this.v1fbb9f87b3a9b049619870461fcf1fd5;
  this.vc06f9f72ba7ad0f9393755c740612d7d;
  this.vebb7cab821e63d2e543320983a815877;
}
/**
 * @return {undefined}
 */
function v8b85da9aeb5cb783e909bd40c41f5ace() {
  this.v6c665ba029eb89c335acd4951384045b;
  this.v1fbb9f87b3a9b049619870461fcf1fd5;
  this.veb690d1fa9b46e0d46eed02a4234a8b8;
  /** @type {!Array} */
  this.v829d9a73f83f5faf7023f900ac1b10fb = [];
  this.v1d0a4918d029323bed1e1c972ce216ef;
}
/**
 * @return {undefined}
 */
function v0a0bc0e06bd301c88fa635d36d81b3d1() {
  this.va99682c565f512a4382bbb893dc50f9d;
  this.vaa7fa74768cf893d9263fd66a88a9a65;
  this.v5b3f852e124273603283f3129d7748e3;
  this.va8b7701ce4a4886581f4fa8865277ccf;
  this.v8e7fd564b90f8b8b250f0dd4feb6e42e;
  this.vfc40dd1e44e9367329796e27a858fe66;
  this.v66cfa4d99c002b7293bd413ecd87ab95;
}
/**
 * @return {undefined}
 */
function v3e75d4904545279beb684b7466d12efb() {
  this.v370126b0b3ae6c2dc05c50b6c946edcc;
  this.vaa7fa74768cf893d9263fd66a88a9a65;
  this.v3e7de18457031a29b1344a76a91b774d;
  this.date;
  this.item;
  /** @type {boolean} */
  this.v4cb348255eb0eebcf6469486e371a5e8 = false;
  /** @type {boolean} */
  this.v74a93493b9151b8f51f20468237eafbd = false;
  /** @type {boolean} */
  this.v5ee12f36cfd91f717ceee9d6095b7034 = false;
}
/**
 * @return {undefined}
 */
function v287bd79df0f40555a0f28596c201c732() {
  /** @type {!Array} */
  this.vc0391634c656ce3563f26a9909ec6cad = [];
  /** @type {!Array} */
  this.v6fedaf02af89d68d2522f18c514ee322 = [];
}
/**
 * @return {undefined}
 */
function va17f4cc90d553e88968113a82a682309() {
}
/**
 * @return {undefined}
 */
function ctrlTransferCash() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "ctrlTransferCash");
  /** @type {number} */
  this.vf85a90eb80b00d96e1ed058740e877f8 = 0;
}
/**
 * @return {undefined}
 */
function ctrlPurchaseOrder() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "ctrlPurchaseOrder");
}
/**
 * @return {undefined}
 */
function ctrlPurchaseOrderc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "ctrlPurchaseOrderc1");
}
/**
 * @param {?} canCreateDiscussions
 * @return {undefined}
 */
function frmTransferCash(canCreateDiscussions) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmTransferCash");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Transfer Cash";
  /** @type {number} */
  options.width = 600;
  /** @type {number} */
  options.height = 320;
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = true;
  options.buttons = {
    "Transfer Cash" : function() {
      b.vc7d4629710913e269b772fd6c95e555c();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  /** @type {number} */
  this.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function frmMarketShare() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmMarketShare");
  var prevPageButtonSprite = this;
  var options = {};
  /** @type {string} */
  options.title = "Market Share";
  /** @type {number} */
  options.width = 660;
  /** @type {number} */
  options.height = 465;
  /** @type {boolean} */
  options.resizable = false;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  options.buttons = {
    Close : function() {
      prevPageButtonSprite.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /**
   * @return {undefined}
   */
  this.v819850ec8ffecac67030711398ce6ab3 = function() {
    prevPageButtonSprite.update();
  };
  /** @type {number} */
  this.v232715c8aabfffabc02e7e306e5bec9f = 13;
}
/**
 * @return {undefined}
 */
function vbf169736afe267c39b7e3f22954055c8() {
  /** @type {!Array} */
  this.entries = [];
}
/**
 * @return {undefined}
 */
function v340544280ff54fcd6b5dd4628723e666() {
  this.timeStamp;
  this.vaa7699d58c70513fc4b65f7e37e0eefb;
  this.v66cfa4d99c002b7293bd413ecd87ab95;
  this.vdad1d6541c10920dcb28a73c576525fe;
}
/**
 * @return {undefined}
 */
function vdec400fbe559b9dfe7818a889838150e() {
  /** @type {number} */
  this.vd959fdaf834c1de9ce3910939516017a = 0;
  /** @type {!Array} */
  this.points = [];
}
/**
 * @return {undefined}
 */
function v731bcbfae6eaacaf668b56619627de88() {
  /** @type {!Array} */
  this.stack = [];
  /** @type {number} */
  this.v79a8d4e6312fe4f7ee92c42d1413a6d1 = 365;
}
/**
 * @return {undefined}
 */
function v6eea0ee9bcae62902c74a878dee11a86() {
  /** @type {!Array} */
  this.series = [];
}
/**
 * @param {!Object} b
 * @return {undefined}
 */
function frmJournal(b) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmJournal");
  var options = {};
  /** @type {string} */
  options.title = "Actions Journal";
  /** @type {number} */
  options.width = 300;
  /** @type {number} */
  options.height = 500;
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = true;
  options.buttons = this.vbf1725ec800e3c6d9ab70308db7d3d17();
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Object} */
  this.v669ff646b5846079385e704f4920c16e = b;
}
/**
 * @return {undefined}
 */
function vb326bfaafc4ca10d8ed861abc97dbecc() {
}
/**
 * @param {string} logger
 * @return {undefined}
 */
function frmComments(logger) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmComments");
  var options = {};
  /** @type {string} */
  options.title = "Comments & Messages";
  /** @type {number} */
  options.width = 440;
  /** @type {number} */
  options.height = 500;
  /** @type {boolean} */
  options.modal = false;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.v2a30a0e98cb0cceffb461cdc9181d000;
  /** @type {boolean} */
  options.resizable = true;
  options.buttons = this.v338d402928944e8de3838e5691b4183a();
  /** @type {boolean} */
  this.v748c93e379bb48a307090a64412d2a10 = true;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {null} */
  this.date = null;
  /** @type {string} */
  this.log = logger;
}
/**
 * @param {string} message
 * @param {string} host
 * @param {string} token
 * @param {?} resultTokens
 * @return {undefined}
 */
function frmInstructorAuth(message, host, token, resultTokens) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmInstructorAuth");
  var b = this;
  var dialogOptions = {};
  /** @type {string} */
  dialogOptions.title = "Instructor Authentication Required";
  /** @type {number} */
  dialogOptions.width = 450;
  /** @type {number} */
  dialogOptions.height = 280;
  /** @type {boolean} */
  dialogOptions.modal = false;
  /** @type {boolean} */
  dialogOptions.resizable = false;
  dialogOptions.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  /** @type {string} */
  this.message = message;
  /** @type {string} */
  this.host = host;
  /** @type {string} */
  this.token = token;
  this.v008a22c3ecc263e06c8f2b318485ff20 = resultTokens;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(dialogOptions);
}
/**
 * @param {number} branchData
 * @param {number} beforeZero
 * @param {?} afterZero
 * @return {undefined}
 */
function frmProvideCash(branchData, beforeZero, afterZero) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmProvideCash");
  var b = this;
  var dialogOptions = {};
  /** @type {string} */
  dialogOptions.title = "Provide Cash";
  /** @type {number} */
  dialogOptions.width = 260;
  /** @type {number} */
  dialogOptions.height = 250;
  /** @type {boolean} */
  dialogOptions.modal = true;
  /** @type {boolean} */
  dialogOptions.resizable = false;
  dialogOptions.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  /** @type {number} */
  this.v0df2038b190164f2d2f938082373150d = branchData;
  /** @type {number} */
  this.v348fc90d5045edbb0526cf686ba1fb67 = beforeZero;
  this.v280b0e8f97f5fb60cfc6a0f957d4477e = afterZero;
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(dialogOptions);
}
/**
 * @param {number} a
 * @return {undefined}
 */
function va90451cb6693c26de1b0a7e889cb49ec(a) {
  /** @type {number} */
  this.v21a4a4bfd5925f74272a586c452a0c87 = a;
  this.vf00cc07f0c07b25db79021a9efee9380 = {};
  /** @type {number} */
  this.v579ee65bf7e4f22ec410e6a21d8d4d1c = 0;
}
/**
 * @return {undefined}
 */
function vfc59aae2aa4aa66893bf1167de9372ed() {
  /** @type {!Array} */
  this.data = [];
  /** @type {number} */
  this.ve1ed4ad6c8e89a7c3abeed91aa90e6f7 = 10;
}
/**
 * @return {undefined}
 */
function vba23fed1cde0c4dc1aa35591715fe27e() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  /** @type {boolean} */
  this.vbaada8e78bed9c29ff9656ef7d38ee2c = true;
  /** @type {null} */
  this.v597d7b5a4b1a10e8f3eb37527aa2a451 = null;
  /** @type {!Array} */
  this.nodes = [];
  /** @type {!Array} */
  this.v12b7bb797c6cdcfd2c3b27afb3677265 = [];
}
/**
 * @param {number} x
 * @param {number} value
 * @param {!Object} name
 * @param {number} d
 * @param {number} options
 * @param {number} width
 * @param {number} height
 * @return {undefined}
 */
function vb2b205c06fe0076137ece08af92e7b71(x, value, name, d, options, width, height) {
  this.x = x == undefined ? 0 : x;
  this.y = value == undefined ? 0 : value;
  this.name = name == undefined ? "" : name;
  this.width = width == undefined ? 8 : width;
  this.height = height == undefined ? 8 : height;
  this.vceeef9dc6eedb12b0f5027aac636b582 = d == undefined ? .5 : d;
  this.v4117418f7ade207bc11c664a8c68a5a5 = options == undefined ? .5 : options;
  /** @type {boolean} */
  this.v13838e83a8b3418e94cb2d83c662757e = false;
  /** @type {!Array} */
  this.nodes = [];
  /** @type {!Array} */
  this.v239e0a340f40a34cb341221291ec527c = [];
  /** @type {number} */
  this.weight = 0;
  this.__v1555e5c613ccf9727ac4868f6f8cf97b;
  this.__va4553455d2d621c5b1df9f817e0ab75f;
  this.__v9b8fe020d5797705e78b9d4f690c28a4;
}
/**
 * @return {undefined}
 */
function v2e77a3df130898b3d30893caa0d0fc05() {
  /** @type {!Array} */
  this.nodes = [];
}
/**
 * @return {undefined}
 */
function SurveyQuestion() {
  /** @type {string} */
  this.ShortName = "";
  /** @type {string} */
  this.Question = "";
  /** @type {null} */
  this.v5de2781193aad09bc0f0b17b09a59e96 = null;
  /** @type {string} */
  this.veb690d1fa9b46e0d46eed02a4234a8b8 = "";
  /** @type {string} */
  this.PossibleResponsesConcatenated = "";
  /** @type {string} */
  this.vc29e3bc5fbbb233940da68d20d9fb44c = "Chart";
}
/**
 * @return {undefined}
 */
function vf40f6c4ee436dae3bbdc45cd84a85c4d() {
  /** @type {!Array} */
  this.v426d4e4ef5152089d558d6a0ac62fb54 = [];
  /** @type {number} */
  this.vf2bd84043ec5a56b8e503ba914cb2d47 = 0;
}
/**
 * @return {undefined}
 */
function v7bd3541d4c2d607969ab46c323c50931() {
  this.date;
  this.vada55fa7c019f4894698dd08d7c55393;
  /** @type {!Array} */
  this.v342c356cf6942694690815b72ba817f4 = [];
  /** @type {!Array} */
  this.responses = [];
}
/**
 * @param {string} formatters
 * @param {string} customFormatters
 * @return {undefined}
 */
function frmSurvey(formatters, customFormatters) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSurvey");
  var b = this;
  var dialogOptions = {};
  /** @type {string} */
  dialogOptions.title = "New Survey";
  /** @type {number} */
  dialogOptions.width = 420;
  if (customFormatters) {
    /** @type {number} */
    dialogOptions.width = 704;
  }
  /** @type {number} */
  dialogOptions.height = 440;
  /** @type {boolean} */
  dialogOptions.modal = false;
  /** @type {boolean} */
  dialogOptions.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  dialogOptions.resizable = true;
  dialogOptions.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(dialogOptions);
  /** @type {!Array} */
  this.v10f732bb17fff774ece0f13caa51b207 = [];
  /** @type {string} */
  this.ve298102090efdbecd15862377d80a2ec = formatters;
  /** @type {string} */
  this.v729aaa9574add38f41ae949260f88f9d = customFormatters;
  this.v4aa4655e25af5596003edec8b91c0099;
  this.vaeefad6806efcdedc979224bc278f42f;
  /** @type {number} */
  this.va4a070df9a5818d6670d9b07fb13e0ad = 0;
  this.v669ff646b5846079385e704f4920c16e;
  this.v42a4a352d70ca92ef9f4722eab185077 = AppConstants.vf9803d18a9535f5da6aa08a3f21fea85 ? AppConstants.vf9803d18a9535f5da6aa08a3f21fea85 : 100;
}
/**
 * @return {undefined}
 */
function frmSurveyResults() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSurveyResults");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Survey Results";
  /** @type {number} */
  options.width = 800;
  /** @type {number} */
  options.height = 500;
  /** @type {boolean} */
  options.modal = false;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.v2a30a0e98cb0cceffb461cdc9181d000;
  /** @type {boolean} */
  options.resizable = true;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {null} */
  this.ve298102090efdbecd15862377d80a2ec = null;
  /** @type {!Array} */
  this.v10f732bb17fff774ece0f13caa51b207 = [];
  /** @type {!Array} */
  this.ve1416eab6a62f66d832a4d86babfbe66 = [];
}
/**
 * @return {undefined}
 */
function v2609cf4415e9e2bdeac9bc70c0e1d78d() {
  /** @type {string} */
  this.v0aa2ccaf3dc28c42e84242eb3a0c38e0 = "";
  /** @type {string} */
  this.lessonName = "Unnamed";
  this.head = new vb81ec444a84af038482cbc6245969e60;
  /** @type {number} */
  this.count = 1;
  /** @type {null} */
  this.v049485dd2b02564f94a24722b018257d = null;
  /** @type {null} */
  this.v82b5e076243c99ffdb251cf058db9467 = null;
  /** @type {null} */
  this.vf6a481365386663e38f59c5f684209b4 = null;
  /** @type {null} */
  this.v5451e8bb856695db31f8e38c3fa6225e = null;
  /** @type {string} */
  this.vac223975b746c8cb29eb4fb3dd23bb9e = "";
  /** @type {number} */
  this.v541ae3e46719cdf4986ac72dedf734bb = 0;
  /** @type {boolean} */
  this.v0484e2725ba2e51d69d3494affca6422 = true;
  /** @type {boolean} */
  this.vd349b7a6286106ec09b108320fdc6d78 = true;
  /** @type {boolean} */
  this.partialGoal = false;
  /** @type {boolean} */
  this.hasGoal = true;
  /** @type {number} */
  this.questionGradePoints = 80;
  /** @type {string} */
  this.vadc404ef3a5730a22c9f4b0dd8cd11e5 = "Goal: ";
}
/**
 * @param {?} a
 * @return {undefined}
 */
function vb81ec444a84af038482cbc6245969e60(a) {
  /** @type {string} */
  this.text = "";
  /** @type {null} */
  this.vbc4181043346c74b1fd88efbb1ab7e86 = null;
  /** @type {null} */
  this.prev = null;
  /** @type {null} */
  this.next = null;
  /** @type {null} */
  this.v025e854c552c2bdad82d7cc6f6ac452b = null;
  /** @type {null} */
  this.v5f91a37ad12cc44b30bf691de8038de1 = null;
  /** @type {null} */
  this.ve78976163e7fb6f4d1b210ba01bd04f9 = null;
  /** @type {null} */
  this.ve53fb3de638bc933558ffa3ec7f49d84 = null;
}
/**
 * @param {string} text
 * @return {undefined}
 */
function v6a71d3961b7436346bd593a991741a32(text) {
  /** @type {string} */
  this.text = text;
  /** @type {!Array} */
  this.v426d4e4ef5152089d558d6a0ac62fb54 = [];
}
/**
 * @param {string} data
 * @param {string} linkedEntities
 * @param {number} force
 * @return {undefined}
 */
function v19368ba11aaa28346bd88a60f0240c1b(data, linkedEntities, force) {
  /** @type {string} */
  this.text = data;
  /** @type {string} */
  this.formula = linkedEntities;
  /** @type {null} */
  this.v6974f70013846572a270ce8fd62e33a5 = null;
  /** @type {number} */
  this.vaaf375657dea7ffbf10dc9deaeda0282 = force;
  /** @type {null} */
  this.v1f81da6457378de31edc140df1893920 = null;
  /** @type {boolean} */
  this.v05133a42c6bbabed88024ad982dc66ec = true;
}
/**
 * @param {!Object} data
 * @return {undefined}
 */
function v66c57333da7c74fe1e71f772d64e7b5c(data) {
  /** @type {!Object} */
  this.state = data;
  this.step = data.head;
  this.goalMetMessage = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("goalMetMessage", U.vc0e6c88f8413e92781b652ae2786391a('Congratulations! You have met your goal. Your assignment has been saved.<br><br>To review your work, re-open this lesson. You will be in "review mode" where you can see, but not change, your work. If you are in a project, you can continue on just for fun!'));
  this.earlySubmissionEnabled = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("earlySubmissionEnabled", true);
  this.v3a15765132076d72d366c6cca1628943 = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("showContinuePanel", false);
  this.continuationText = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("continuationText", U.vc0e6c88f8413e92781b652ae2786391a("Your Sim has been submitted, and your grade is final.<br><br>You are now continuing the Sim. Your changes will be saved."));
  this.earlySubmissionYesNoMessage = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("earlySubmissionYesNoMessage", U.vc0e6c88f8413e92781b652ae2786391a("You have not reached your goal. Do you want to submit your work as final?"));
  this.earlySubmissionEndMessage = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("earlySubmissionEndMessage", U.vc0e6c88f8413e92781b652ae2786391a("You have chosen to complete this Sim before meeting your goal. Your completed assignment has been saved."));
  this.noGoalSubmissionEndMessage = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("noGoalSubmissionEndMessage", U.vc0e6c88f8413e92781b652ae2786391a("Your completed assignment has been saved."));
  this.displayGradeOutOf = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("displayGradeOutOf", 100);
  this.answersRandomOrder = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("answersRandomOrder", false);
}
/**
 * @param {?} p1__3354_SHARP_
 * @return {undefined}
 */
function v7110465ab3a4b46157d3a1e3a8cc2fe9(p1__3354_SHARP_) {
  v66c57333da7c74fe1e71f772d64e7b5c.call(this, p1__3354_SHARP_);
}
/**
 * @param {?} p1__3354_SHARP_
 * @return {undefined}
 */
function vd1b349dedc184083448183a67397800e(p1__3354_SHARP_) {
  v66c57333da7c74fe1e71f772d64e7b5c.call(this, p1__3354_SHARP_);
  for (; this.v7ca9047c3bffde03ac0e42854c79dd42() && this.step.v18a4a96a8068124e6cbc25e81c263694();) {
    this.v9db475ccb0d3a5c8e3d49c8aa3639b09();
  }
  this.start();
}
/**
 * @param {string} a
 * @param {!Object} b
 * @return {undefined}
 */
function cstmIAQuestion(a, b) {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "cstmIAQuestion");
  /** @type {string} */
  this.v32807337688fccef8615e097a02c12fa = a;
  /** @type {!Object} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = b;
}
/**
 * @param {string} a
 * @param {!Object} b
 * @param {?} variableNames
 * @return {undefined}
 */
function cstmIAAnswer(a, b, variableNames) {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "cstmIAAnswer");
  /** @type {string} */
  this.v32807337688fccef8615e097a02c12fa = a;
  /** @type {!Object} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = b;
  this.vaebd76e9a8cf8ebfbe6633b5d9f5130c = variableNames;
}
/**
 * @param {string} a
 * @param {!Object} b
 * @return {undefined}
 */
function cstmIAPanel(a, b) {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "cstmIAPanel");
  /** @type {string} */
  this.va1d4c079519e74028f642eb03ad9c6a6 = a;
  /** @type {!Object} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = b;
}
/**
 * @return {undefined}
 */
function ctrlSocialMediaBookedAd() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "ctrlSocialMediaBookedAd");
}
/**
 * @return {undefined}
 */
function frmSocialMedia() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSocialMedia");
  var options = {};
  /** @type {string} */
  options.title = "Promotion - Social Media";
  /** @type {number} */
  options.width = 675;
  /** @type {number} */
  options.height = 400;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  options.vcc4f3aeb474c8f55ab8e9e27d1f0fd77 = true;
  /** @type {boolean} */
  options.resizable = true;
  options.buttons = this.vbf1725ec800e3c6d9ab70308db7d3d17();
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Array} */
  this.vee8e15dc2407fa1ec3333867e4595568 = [];
  /** @type {!Array} */
  this.v3b66f752fa6fd586f1bc41029e374183 = [];
  /** @type {number} */
  this.vda9e67191f98a064bb69597a51e31a77 = -1;
}
/**
 * @return {undefined}
 */
function frmImagePicker() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmImagePicker");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Select Image";
  /** @type {number} */
  options.width = 350;
  /** @type {number} */
  options.height = 450;
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    "Select Image" : function() {
      b.vb540f788e8f32fe7332cc5f501463a2e();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {number} */
  this.vda9e67191f98a064bb69597a51e31a77 = 0;
  /** @type {!Array} */
  this.vee8e15dc2407fa1ec3333867e4595568 = [];
  /** @type {null} */
  this.v389ef5507550fcd5ede0e822e4ca2b76 = null;
}
/**
 * @return {undefined}
 */
function vd138cb05a88280b0280d6453d52bc72f() {
  Object.call(this);
}
/**
 * @param {?} data
 * @return {undefined}
 */
function App(data) {
  v1847d6dd008ed9b56a6f12d60cf3baa6.call(this, "Virtual Business - Sports & Entertainment", "2.4.0.1", data);
  /** @type {null} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = null;
  /** @type {null} */
  this.v32807337688fccef8615e097a02c12fa = null;
  this.ve75b063959bfe5bb931e2607bde4d7f1.push("City");
  /** @type {!Array} */
  this.speeds = [.2, 1, 5, 29, 61];
  /** @type {!Array} */
  this.vf6442652e6adf0d5d860f7078c90842f = [".5x", "1x", "20x", "50x", "100x"];
  /** @type {!Array} */
  this.v40b61d31168505a8bd84664bb8816db9 = [.4, .5, .6, .7, .8, .9, 1, 1.5, 2];
  /** @type {number} */
  this.vacd138095667b40524e06d1f21f901c3 = 6;
  /** @type {!Array} */
  this.v58850cf11697d83de198ad43938d6231 = [];
}
/**
 * @return {undefined}
 */
function va20ff9495db61599fbda0a1307761b5b() {
}
/**
 * @return {undefined}
 */
function v0c87bc68b008561aa880828b743ca7f3() {
  v2293b4b55c00ff726961b8ed86d94131.call(this);
  this.id;
}
/**
 * @return {undefined}
 */
function va764f23684cfdf5e93999c88d355dec8() {
  City.call(this);
  /** @type {number} */
  City.v64ef601857379d429114bd7619f88d25 = 8;
  /** @type {number} */
  City.v4f9631522dd19702292e41f3ce23c56c = 4;
  City.vf6f22933c29c631b7baf8e13ebadfccb = new Point(386, 160);
  /** @type {number} */
  City.v443299cf4a9fafafc9fa6571fac5228c = 98;
  /** @type {number} */
  City.vaa5069efaa246dd3658302529a1a5b1d = 1;
  /** @type {number} */
  City.v8e85a7086c2cb0ceabfffcc55a246a9a = 24;
  this.v9647890e3426cf937776da0d6749fe53 = {};
  /** @type {!Array} */
  this.v2db6af2b1f5a8cf42fd2e4f228202240 = [];
  /** @type {!Array} */
  this.v4cd021bff33912862705710a23dccdcd = [];
  /** @type {!Array} */
  this.vb8d49b229151f0596040f0ff3d4aeed1 = [];
}
/**
 * @return {undefined}
 */
function vdc7bffe0f07ec5a6ead012015e4ffad8() {
  vfe39ece2a85b3dcccfd78b6d58d6c9de.call(this);
  this.va1d4c079519e74028f642eb03ad9c6a6 = new v2609cf4415e9e2bdeac9bc70c0e1d78d;
  /** @type {!Array} */
  this.v453a55e59fb4133da0172c66e3dd0483 = [];
  /** @type {null} */
  this.v31553a41e2e13c4a913a43b655fe25d3 = null;
  /** @type {null} */
  this.vfe1a4fb7fcbfec9ad33ab48ff009f019 = null;
  /** @type {!Array} */
  this.staffing = [];
  /** @type {!Array} */
  this.media = [];
  /** @type {null} */
  this.v669ff646b5846079385e704f4920c16e = null;
  /** @type {null} */
  this.vb70772f1e6c6efce5af0e4890a9ddb5d = null;
  this.v6f7675c33a5ad05491d4a1542c66621e;
  /** @type {number} */
  this.vedab99cef22a1b8617af260d141c4a13 = -1;
  this.v7a98907ca09f7f7f7046bcfa89a2626c;
  /** @type {!Array} */
  this.v1ff735a91d221e1dd6051b6b2813ff13 = [];
  /** @type {!Array} */
  this.vb769a155273c6f5814e00dfd13079e79 = [];
  /** @type {!Array} */
  this.v6ba0582adfd2184003efe75c3dc68f9a = ["Storm", "Stallions", "Warriors", "Tigers", "Whales", "Cobras", "Wolves", "Lightning", "Lions"];
  /** @type {!Array} */
  this.vd17f15c857887a924f6dee50a6107ad0 = [];
  /** @type {!Array} */
  this.v3a4db6a91a73ad18148fb5f754ce0959 = [];
  /** @type {!Array} */
  this.events = [];
  /** @type {!Array} */
  this.ve4f83513bcfc1688cae2b4e0cf336998 = [];
  /** @type {!Array} */
  this.vf6b12e3405a265144ab359bfc9f6ef00 = [];
  /** @type {number} */
  this.vd61bb1e43a2872efc3e582a1ff6c2437 = 0;
  /** @type {number} */
  this.va1628170f17b5f33654bfa54257c8d67 = 0;
  /** @type {number} */
  this.v0807b10421945f1ffe532fa1aeabe3f6 = 0;
  /** @type {number} */
  this.v370b87cc0766a54544febc48ade06909 = 0;
  /** @type {boolean} */
  this.actions.bookEvent = true;
  /** @type {boolean} */
  this.actions.ticketPrices = true;
  /** @type {boolean} */
  this.actions.staffing = true;
  /** @type {boolean} */
  this.actions.parkingAction = true;
  /** @type {boolean} */
  this.actions.concessions = true;
  /** @type {boolean} */
  this.actions.socialMedia = true;
  /** @type {boolean} */
  this.actions.media = true;
  /** @type {boolean} */
  this.actions.sponsorships = true;
  /** @type {boolean} */
  this.actions.playerMgt = true;
  /** @type {boolean} */
  this.actions.marketResearch = true;
  /** @type {!Array} */
  this.settings.playerPositionsEditable = [];
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < AppConstants.v274a349231cba17047a0198b2cef8a6c.length; layer_i++) {
    /** @type {boolean} */
    this.actions["canEdit" + AppConstants.v274a349231cba17047a0198b2cef8a6c[layer_i]] = true;
  }
  /** @type {boolean} */
  this.actions.canEditParkingPrices = true;
  /** @type {boolean} */
  this.actions.canEditParkingLotsBuses = true;
  /** @type {boolean} */
  this.actions.canEditConcessionEmployees = true;
  /** @type {number} */
  this.settings.RandomSeed = -1;
  this.settings.StartDate = new KMDate(2023, 8, 2, 23, 59, 59, 0);
  this.settings.v053081410917e7246c7ca34a1f6eda56 = KMDate.v14cbf0b8c1f93e62dd191db1badd576b;
  /** @type {string} */
  this.settings.MessageFilter = "";
  /** @type {number} */
  this.settings.SimulatedSecondsPerStep = 120;
  /** @type {boolean} */
  this.settings.Injuries = false;
  /** @type {boolean} */
  this.settings.IgnoreRecordUtility = true;
  /** @type {boolean} */
  this.settings.MoveDown = false;
  /** @type {boolean} */
  this.settings.MustSetTeamName = false;
  /** @type {boolean} */
  this.settings.ShowSeasonProfit = false;
  /** @type {boolean} */
  this.settings.SuppressCashWarning = false;
  /** @type {boolean} */
  this.settings.SuppressFanRush = false;
  /** @type {boolean} */
  this.settings.biasFansYoungAndOld = false;
  /** @type {boolean} */
  this.settings.biasFansYoungAndMiddle = false;
  /** @type {boolean} */
  this.settings.biasFansYoung = false;
  /** @type {boolean} */
  this.settings.biasFansOld = false;
  /** @type {boolean} */
  this.settings.biasIncomeMoreUniform = false;
  /** @type {boolean} */
  this.settings.biasPlayersPoor = false;
  /** @type {boolean} */
  this.settings.considerPlayerFanAppeal = false;
  /** @type {number} */
  this.settings.availablePlayersPerPosition = 20;
  /** @type {boolean} */
  this.settings.overWeightKeyPositions = false;
  /** @type {number} */
  this.settings.ticketPriceToIncomeRatio = 1200;
  /** @type {boolean} */
  this.settings.autoPriceTickets = false;
  /** @type {number} */
  this.settings.socialMediaMultiplier = 1;
  /** @type {number} */
  this.settings.autoPriceGradient = 10;
  /** @type {number} */
  this.settings.tightnessOfBandMatchRequired = 1.5;
  /** @type {number} */
  this.settings.randomnessOfBandAppeal = .1;
  this.settings.bandMatchWeights = {
    vfbdfe532170e5dbbf837f354b26a815a : 1.5,
    v4d37e3a237cad1a1b32ec31fe574be6f : 1,
    vffd75135c8fd0917e65c50fcd7305848 : .5,
    ve75f5c321c63ab6fa35158ff3713014a : .25
  };
  /** @type {number} */
  this.settings.likelihoodOfPurchaseWithoutAdvertising = .25;
  /** @type {number} */
  this.settings.purchaseSocialEffectMultiplierForGames = .2;
  /** @type {number} */
  this.settings.purchaseSocialEffectMultiplierForConcerts = .2;
  /** @type {number} */
  this.settings.purchaseTraditionalEffectMultiplier = .18;
  /** @type {boolean} */
  this.settings.ignoreBudget = false;
  /** @type {boolean} */
  this.settings.WarnOnUnticketedEvents = false;
  /** @type {boolean} */
  this.settings.v72edbb16a217b1315c133e42bdde7edf = false;
  if (!this.vaf2a576127494a53d0e079f0ed12d0e1) {
    this.vaf2a576127494a53d0e079f0ed12d0e1 = new va20ff9495db61599fbda0a1307761b5b;
    /** @type {!Array} */
    this.v453a55e59fb4133da0172c66e3dd0483 = [this.vaf2a576127494a53d0e079f0ed12d0e1];
  }
}
/**
 * @return {undefined}
 */
function v768b3f7a5626de0e1a971c1dbec321b0() {
  /** @type {!Array} */
  this.v3f0a03122cd725a5242948c59851026b = [];
  /** @type {!Array} */
  this.v038adc13e59f04dbd989cc5cd42e844a = [];
  /** @type {!Array} */
  this.vfa76ca9c44ecc972ec2786890f439796 = [];
  /** @type {!Array} */
  this.v3fc7fc36b9963e67c3c7b99bd39c2c6c = [];
}
/**
 * @return {undefined}
 */
function v6fb33bd266b04b0ea62af001cd60d130() {
  v16cee3ee62f4283e2aa83ff23503aa30.call(this);
  /** @type {number} */
  this.state = v6fb33bd266b04b0ea62af001cd60d130.ve712bbacdea1d4b64dbdf9de54524232;
  /** @type {string} */
  this.v324e69474414ef937055f966030d7254 = "Stand";
}
/**
 * @return {undefined}
 */
function v09ce43066ba30cc08ebe2cafd2c4bd46() {
  v16cee3ee62f4283e2aa83ff23503aa30.call(this);
  /** @type {number} */
  this.state = v09ce43066ba30cc08ebe2cafd2c4bd46.vabc9b2e215c37755e63e8f6530f4b8ba;
  this.vaabc18195254e8fb4d4d192c5b751d7a;
  /** @type {!Array} */
  this.vbc02848020089300f7298e5e0de59dd7 = [];
}
/**
 * @return {undefined}
 */
function va9e642482127d2a8e086348a87917fba() {
  /** @type {!Array} */
  this.vca376faa2a83aa1afc63ed398cdfdc26 = [];
  /** @type {!Array} */
  this.v4cd021bff33912862705710a23dccdcd = [];
  /** @type {number} */
  this.vf566263bded5a95f0524bd61200fee11 = 0;
  /** @type {!Array} */
  this.v98d072375842b2a8b918f246e32ab2d7 = [];
  /** @type {number} */
  this.v2e6790bab0b64ea344ab2afdd3d26add = va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9 - 1 - 2;
  /** @type {!Array} */
  this.v8b591a6ae707f82d0c7bf7080524308b = [];
  /** @type {!Array} */
  this.vbe3923e0c95014385c197c49a41fc002 = [];
}
/**
 * @return {undefined}
 */
function v2b0bbff44f88e67381b9b655d66abefc() {
  v16cee3ee62f4283e2aa83ff23503aa30.call(this);
  /** @type {number} */
  this.v21f72e2c9e39ffcb9a4496e65db679c9 = 0;
  this.color;
  /** @type {number} */
  this.v171b78b7c1c220ad63fa32cc06cdf760 = -1;
  /** @type {number} */
  this.vd8e189fd73437b363a2066fce1d8ce54 = -1;
  /** @type {number} */
  this.vb25d5486f900ea3b825b14c7342e4f94 = -1;
  /** @type {number} */
  this.counter = 0;
  /** @type {number} */
  this.v40b7158210ad8fbb3de700fb50b5c3e6 = 0;
}
/**
 * @return {undefined}
 */
function v9a7f1a806a309bba718ecede2b1f1114() {
  v0c87bc68b008561aa880828b743ca7f3.call(this);
  /** @type {number} */
  this.v9d51984ff4936d94b97889a045747e81 = 0;
  /** @type {number} */
  this.vd9b9ff4bd698e68ba6434471a0928ef4 = 8;
  /** @type {number} */
  this.v9d5c35532bdbd424aad63e8cfd929b94 = 50;
  /** @type {number} */
  this.v4b19c5d77dd1a1b48e4c79ca1ee7629d = 0;
  /** @type {!Array} */
  this.v46c7ed5490f205d5b7351a9c86c8224b = [];
}
/**
 * @return {undefined}
 */
function Bus() {
  v16cee3ee62f4283e2aa83ff23503aa30.call(this);
  this.v9a7bd49e6c9f9a689b34fe9de7deea09;
  this.vb2149486a4663b74f78e41a472577786;
  /** @type {!Array} */
  this.v46c7ed5490f205d5b7351a9c86c8224b = [];
  /** @type {null} */
  this.v9b4e83515cd2c862aa3de485e2207966 = null;
  /** @type {boolean} */
  this.v70bbc65bd229b367c92fdea0614bf411 = false;
  /** @type {number} */
  this.state = -1;
  /** @type {number} */
  this.v92c17f52ed4b69939372da4588e398f7 = 40;
  /** @type {boolean} */
  this.v62ebbf1042f60ec6e3c20d3a751ebc4d = false;
}
/**
 * @return {undefined}
 */
function Event() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  /** @type {null} */
  this.date = null;
  this.eventType;
  this.v66cfa4d99c002b7293bd413ecd87ab95;
  /** @type {null} */
  this.vc72cc674d86a7bfb511cfc64153e6b43 = null;
  this.ticketPrices;
  /** @type {!Array} */
  this.v54abb4e4bc74d5f47568dd1e0a3bfd53 = [];
  /** @type {boolean} */
  this.v413fdf1809982118e1b70795610a9501 = false;
  /** @type {number} */
  this.trash = 0;
  this.v7da70da00b671455fcbb79c143c989fa = new vf2bb34e55351119c4462ae3c9fb0a288;
  this.random;
  /** @type {number} */
  this.v8ab87d247f3b1fe30140425c4498ad15 = 0;
  /** @type {number} */
  this.v0a7e381f60e6cc213e4126d26249ae83 = 0;
  /** @type {!Array} */
  this.v8f8491c225d2abbf8b262e22fbe97f5a = [];
  this.vab16aa458a4596ea3ac46e68100c6491;
  /** @type {number} */
  this.vdc7a139f00e0f433866839aeff8d7a54 = 0;
  /** @type {!Array} */
  this.v19628441547527e7756f5ca10c16c9f4 = [];
  /** @type {!Array} */
  this.vda1b1f9e42e1aee5b7c3cad5f97f53ef = [];
  /** @type {number} */
  this.vda4c8b43263bc1fa514b8e93a0bb8419 = 0;
}
/**
 * @return {undefined}
 */
function Game() {
  Event.call(this);
  /** @type {number} */
  this.v48d1284872c52fc381118313b6b55bab = 0;
  /** @type {number} */
  this.v39ad898bcff4a62b1727576de8887044 = 0;
  /** @type {string} */
  this.v8089c25fc3f552e40538d78e9fa87683 = "";
  /** @type {number} */
  this.period = 1;
  /** @type {number} */
  this.va26c7c83d406d822f5741b3d3c28199f = 900;
  this.vdfba98d9f87c5ee8c729fa0ef3903c5c;
  /** @type {number} */
  this.vfc0eccea96c8facd58ba53835d5347dd = 0;
  /** @type {number} */
  this.down = 0;
  /** @type {boolean} */
  this.va77baa57302716b9d64be45356f30d20 = true;
  /** @type {number} */
  this.v380e81f12a3033c62df9d9afe3bcd0ed = 0;
  /** @type {number} */
  this.v28e2b3398c38faea8d6e0a2d867e77cf = 30;
  /** @type {number} */
  this.vdcfd2df724811ddc7adc6363d3d96a64 = 0;
  /** @type {number} */
  this.v8fbd4afc15f4ff1af2004754fd85adf3 = 0;
  this.va586c015b3d05863ffa88fd7baa17df3;
  /** @type {number} */
  this.vf5584ee3b0ec9f630c963d9f94db0dd4 = 1;
  this.v2e81001431824a099f465d4c8a410174;
  this.vfa3bb1d11fa41679be963fe637c5b51a;
}
/**
 * @return {undefined}
 */
function Concert() {
  Event.call(this);
  /** @type {number} */
  this.v5a90e2b6a0b1c525625baeec1ac4dc4d = 180 * (60 / AppConstants.vf44e562edd0759bcb2d6c7e389a43e2a);
}
/**
 * @return {undefined}
 */
function Car() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
}
/**
 * @return {undefined}
 */
function Stadium() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  /** @type {!Array} */
  this.v3fa192483f2f0030dedaf04d80bf9d9d = [];
  this.v7b8b5820bd858d510372bf6a276f31a1;
}
/**
 * @return {undefined}
 */
function v55981732dc73c4f6196aee61b69fff5c() {
}
/**
 * @return {undefined}
 */
function va8050a0e7e7ce1bdbca32ed7d908183b() {
}
/**
 * @param {number} index
 * @return {undefined}
 */
function v075d96bd9afa88bfc29df9a76858c9a6(index) {
  /** @type {number} */
  this.index = index;
  /** @type {number} */
  this.v8f22857eac065a0c6662b19383c0d28b = 0;
  /** @type {number} */
  this.va4695f9def13ccf66ad9ed6ae95a136c = 0;
  /** @type {number} */
  this.vd8de30596f976e5afca84bb587b6bb41 = 0;
}
/**
 * @return {undefined}
 */
function v52b5b783e3ba5645ba556f8988087410() {
  this.position;
  /** @type {number} */
  this.v9d53fa0e2c7e450eeb138d587ae24210 = 0;
}
/**
 * @return {undefined}
 */
function v32dbe0e583786dbc8efde99083590832() {
  /** @type {!Array} */
  this.va2e8685aaa26fc8be2f8ebb695e5f0ff = [];
  /** @type {!Array} */
  this.includes = [];
  /** @type {!Array} */
  this.vf3e09cb39c9a11ba7b9739fd0c5e8bd8 = [];
  /** @type {number} */
  this.v593f1cd1f022086bd87c3de3db987bd8 = 0;
  /** @type {number} */
  this.vc5f3cc9e0931f0e39cae9028746c2eda = 0;
}
/**
 * @return {undefined}
 */
function v8f0ee361b1d63bf1a79eb16edf5933a1() {
  /** @type {number} */
  this.vb141cf7a711f6005f0f447e34f8f2dc2 = 0;
  /** @type {number} */
  this.v4f7c3084c74f060298d413aba2266780 = 0;
  /** @type {number} */
  this.vb8d49b229151f0596040f0ff3d4aeed1 = 0;
  /** @type {number} */
  this.v825d8229dbe774de006ff34938efc9b4 = 0;
}
/**
 * @return {undefined}
 */
function ve277db3fa261248cc476bca441fc0aef() {
  /** @type {number} */
  this.v40b7158210ad8fbb3de700fb50b5c3e6 = 0;
  /** @type {!Array} */
  this.v6c96cc2c3c7f80bcae66e7160d82921e = [];
  /** @type {!Array} */
  this.v5a8d8d064b26e34f8298fcaffcfd5d73 = [];
}
/**
 * @return {undefined}
 */
function v5c7834d87a4980303267c4128a34128d() {
  /** @type {number} */
  v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9 = 320;
  v3cc232995592894dd6b3cea55d7d7bdb.call(this);
}
/**
 * @return {undefined}
 */
function v9174ed493af6c02d7f2db29ea8a67f80() {
  vab9f4aed6a0c608da64294e108ceb50c.call(this);
  /** @type {number} */
  this.temp = 0;
}
/**
 * @return {undefined}
 */
function v9e58c00cb8ac8b69cee816bb8e1fba25() {
  v7bd3541d4c2d607969ab46c323c50931.call(this);
  this.v811c386c5ab4299281dc3dbdb0885c93 = new v05d11f0f2e0c1a6f360c8611189e4901(3576);
}
/**
 * @return {undefined}
 */
function vf2bb34e55351119c4462ae3c9fb0a288() {
  /** @type {number} */
  this.v3eb83ec31bc149b290e3ce618bca2724 = 0;
  /** @type {number} */
  this.v9ea7150aa365c7b5f38b2ae295bfb47d = 0;
  /** @type {number} */
  this.v7db28d9c9c03cdd67e696332c8ee1ca3 = 0;
  /** @type {number} */
  this.veee4e86782e3e33336ac7390d3c67430 = 0;
  /** @type {number} */
  this.ve3e99e8a3ecaf433bf05a7eeaf039ae6 = 0;
  /** @type {number} */
  this.vcd37f2b1888403f110ef2d840b46cdf9 = 0;
  /** @type {number} */
  this.vf1fabff5fa24626e87e802a306002a5c = 0;
  /** @type {number} */
  this.v1a47b8fc7863d32ec3862dd91cd88ead = 0;
  /** @type {number} */
  this.vb43b6cef31b30f26ef833d2b78ab5d61 = 0;
  /** @type {number} */
  this.ve345737021337c88cabe211376c6e86b = 0;
}
/**
 * @return {undefined}
 */
function SportsSocialMediaAd() {
  vd138cb05a88280b0280d6453d52bc72f.call(this);
}
/**
 * @return {undefined}
 */
function frmStaffing() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmStaffing");
  var b = this;
  var dialogOptions = {};
  /** @type {string} */
  dialogOptions.title = "Staffing";
  /** @type {number} */
  dialogOptions.width = 775;
  /** @type {number} */
  dialogOptions.height = 626;
  /** @type {boolean} */
  dialogOptions.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  dialogOptions.resizable = false;
  dialogOptions.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(dialogOptions);
  /** @type {!Array} */
  this.v22645af326825e1022a577521fde8b33 = [];
}
/**
 * @return {undefined}
 */
function frmStaffingc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmStaffingc1");
  /** @type {null} */
  this.v35f85e92b88150ee21abb5d1d2df5db1 = null;
}
/**
 * @return {undefined}
 */
function frmTicketPrices() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmTicketPrices");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Ticket Prices";
  /** @type {number} */
  options.width = 840;
  /** @type {number} */
  options.height = 640;
  /** @type {boolean} */
  options.resizable = false;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.v2a30a0e98cb0cceffb461cdc9181d000;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Array} */
  this.v46bfb30d94c31c7a5995b8986633e75f = [];
  /** @type {!Array} */
  this.v92f02500a009fdbdae32e0768800aec8 = [];
  /** @type {!Array} */
  this.events = [];
  /** @type {!Array} */
  this.v027ac65d114984fb5d4173f8c300833c = [];
  /** @type {!Array} */
  this.vafc40b839dc296f29e883015cd268b97 = [];
}
/**
 * @return {undefined}
 */
function frmTicketPricesc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmTicketPricesc1");
}
/**
 * @return {undefined}
 */
function frmMedia() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmMedia");
  var b = this;
  var dialogOptions = {};
  /** @type {string} */
  dialogOptions.title = "Traditional Media";
  /** @type {number} */
  dialogOptions.width = 750;
  /** @type {number} */
  dialogOptions.height = 380;
  /** @type {boolean} */
  dialogOptions.resizable = false;
  /** @type {number} */
  dialogOptions.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8;
  dialogOptions.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(dialogOptions);
  /** @type {!Array} */
  this.vb24c10cf496b056f0a44cad1a8f375ba = [];
}
/**
 * @return {undefined}
 */
function frmMediac1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmMediac1");
}
/**
 * @return {undefined}
 */
function frmConcessions() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmConcessions");
  var b = this;
  var dialogOptions = {};
  /** @type {string} */
  dialogOptions.title = "Concessions";
  /** @type {number} */
  dialogOptions.width = 720;
  /** @type {number} */
  dialogOptions.height = 480;
  /** @type {boolean} */
  dialogOptions.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  dialogOptions.resizable = false;
  dialogOptions.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(dialogOptions);
}
/**
 * @return {undefined}
 */
function frmConcessionsc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmConcessionsc1");
}
/**
 * @return {undefined}
 */
function frmSponsorships() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSponsorships");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Sponsor Offer";
  /** @type {number} */
  options.width = 700;
  /** @type {number} */
  options.height = 450;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    "Make Offer" : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Array} */
  this.v21584bcfca143cded57b3f4a81b7ad92 = [];
}
/**
 * @return {undefined}
 */
function frmSponsorshipsc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmSponsorshipsc1");
}
/**
 * @return {undefined}
 */
function frmBookEvent() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmBookEvent");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Book Event";
  /** @type {number} */
  options.width = 940;
  /** @type {number} */
  options.height = 640;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Array} */
  this.vf37cdda0d6c4749d74565bf7dd6d96c7 = [];
}
/**
 * @return {undefined}
 */
function frmBookEventc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmBookEventc1");
}
/**
 * @return {undefined}
 */
function frmStandings() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmStandings");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Standings";
  /** @type {number} */
  options.width = 350;
  /** @type {number} */
  options.height = 490;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {null} */
  this.va8419377bfc6aed8420a10bef2db97d9 = null;
}
/**
 * @return {undefined}
 */
function frmStandingsc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmStandingsc1");
}
/**
 * @return {undefined}
 */
function frmBandProfilesReport() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmBandProfilesReport");
  var rejectingServer = this;
  var options = {};
  /** @type {string} */
  options.title = "Band Research Report";
  /** @type {number} */
  options.width = 785;
  /** @type {number} */
  options.height = 630;
  /** @type {boolean} */
  options.resizable = true;
  /** @type {number} */
  options.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.v2a30a0e98cb0cceffb461cdc9181d000;
  options.buttons = {
    Close : function() {
      rejectingServer.close();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function frmBandProfilesReportc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmBandProfilesReportc1");
}
/**
 * @param {!Object} canCreateDiscussions
 * @return {undefined}
 */
function frmEventReport(canCreateDiscussions) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmEventReport");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Event Report";
  /** @type {number} */
  options.width = 500;
  /** @type {number} */
  options.height = 700;
  /** @type {boolean} */
  options.resizable = false;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  options.show = {
    effect : "fade"
  };
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Object} */
  this.v23642bc2ac00ebc04cdae165d42cd86c = canCreateDiscussions;
  /** @type {boolean} */
  this.v57ef304cc1c6c349fd252ea9b3656acd = false;
  /** @type {null} */
  this.v474c777cf9499330f14dd0cf08a2de9c = null;
}
/**
 * @return {undefined}
 */
function frmEventReportc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmEventReportc1");
}
/**
 * @param {?} b
 * @return {undefined}
 */
function frmCalendar(b) {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmCalendar");
  var c = this;
  var options = {};
  /** @type {string} */
  options.title = "Upcoming Events";
  if (b) {
    /** @type {string} */
    options.title = "Past Events";
  }
  /** @type {number} */
  options.width = 1e3;
  /** @type {number} */
  options.height = 500;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      c.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  this.v43271be4374be85ec2b6e4d65bd7efa0 = b;
}
/**
 * @return {undefined}
 */
function frmCalendarc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmCalendarc1");
}
/**
 * @return {undefined}
 */
function frmCalendar2() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmCalendar2");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Event Reports";
  /** @type {number} */
  options.width = 700;
  /** @type {number} */
  options.height = 560;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {!Array} */
  this.v078daa8797f388906b1daecf411fd2b0 = [];
}
/**
 * @return {undefined}
 */
function frmPlayerMgt() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmPlayerMgt");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Player Management";
  /** @type {number} */
  options.width = 720;
  /** @type {number} */
  options.height = 600;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function frmPlayerMgtc1() {
  vb83b9117e3ceed59acbbd2d23058424a.call(this, "frmPlayerMgtc1");
}
/**
 * @return {undefined}
 */
function frmParking() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmParking");
  var b = this;
  var dialogOptions = {};
  /** @type {string} */
  dialogOptions.title = "Parking";
  /** @type {number} */
  dialogOptions.width = 450;
  /** @type {number} */
  dialogOptions.height = 425;
  /** @type {boolean} */
  dialogOptions.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  dialogOptions.resizable = false;
  dialogOptions.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    },
    Cancel : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(dialogOptions);
}
/**
 * @return {undefined}
 */
function frmFinancialsSports() {
  frmFinancials.call(this, "frmFinancialsSports");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Financials";
  /** @type {number} */
  options.width = 679;
  /** @type {number} */
  options.height = 655;
  /** @type {boolean} */
  options.v11492816a001fd45922999c10e9fe9db = false;
  /** @type {boolean} */
  options.resizable = true;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
  /** @type {number} */
  this.v744e28d6167afbf0edc66230e261e022 = 1;
  /** @type {number} */
  this.vd846c60a4117dd49c0f47976d66df4dc = 0;
  /** @type {null} */
  this.va2b3cdfa1483ff99f6ba476ea1338c99 = null;
  /** @type {number} */
  this.v22982548b09bbf8013fdaf3b6681c4d1 = 200;
}
/**
 * @return {undefined}
 */
function frmSponsorResponse() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSponsorResponse");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Response from Sponsor";
  /** @type {number} */
  options.width = 330;
  /** @type {number} */
  options.height = 480;
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    Close : function() {
      b.v6c1b209c23d5bcc0cd1aee1109895a9e();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function v0b5ca45e98587db10df97b20977d764f() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSimpleInput");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Name Your Team";
  /** @type {number} */
  options.width = 300;
  /** @type {number} */
  options.height = 245;
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  /** @type {boolean} */
  options.v1b41fcbc06f79e8ed4b144b24b8f93cc = false;
  options.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
/**
 * @return {undefined}
 */
function v961fefa8c9ab62c72b9684fdb6003fb8() {
  vc41c7fe61eaff586a43ca6fdecb046f3.call(this, "frmSimpleInput");
  var b = this;
  var options = {};
  /** @type {string} */
  options.title = "Create Lesson State";
  /** @type {number} */
  options.width = 300;
  /** @type {number} */
  options.height = 200;
  /** @type {boolean} */
  options.modal = true;
  /** @type {boolean} */
  options.resizable = false;
  options.buttons = {
    OK : function() {
      b.v3a3a8e51ec1d2da43bd094ffe3ca26df();
    }
  };
  this.v5abc66b7877ad63fcd2cda7ba6566ea5(options);
}
var Endian = {
  v41897d45660d1c3c6f4cc43660f75033 : 0,
  LITTLE : 1
};
var Amf3Types = {
  vbd860bee0c2afe1f0f2f66fbdc9ee73a : 0,
  v9a8e445e7b32785f11b20a1a35649f9a : 1,
  v3a6e6c3c452cefb9e86e3fae6c55b4a3 : 2,
  vd0e1b0b6a57865c0be834c807fa8846c : 3,
  ve1e1a0f5d5da08056d24075d7064f20c : 4,
  v82df13093e1087e0379baae1e0945ee5 : 5,
  v462938f06a445587686cc0f1f555c83f : 6,
  v662748b00eaf862b81915422961b5e0b : 7,
  v8eaaf370d349b01bde9e826220696e56 : 8,
  vac30bbac68c038322097e496d4507bcd : 9,
  vd468c439d9c6049ae535802859b2df5b : 10,
  v75b93cadada4325dac21e6ef1181444d : 11,
  vbb7903b4ed7bd9bf558a09bae3e6c103 : 12,
  v644858be1c7ea805dc6e9f730d30ea82 : 17
};
vcb778ce41130b213653506a1f586b179.prototype.v9ed726368bc25cf11831b18accee7355 = function() {
  var outChance = this.data.map(function(code21) {
    return String.fromCharCode(code21);
  });
  return outChance.join("");
}, vcb778ce41130b213653506a1f586b179.prototype.toString = function() {
  var value = this.v9ed726368bc25cf11831b18accee7355();
  var body = pako.deflate(value, {
    to : "string"
  });
  return body;
}, vcb778ce41130b213653506a1f586b179.prototype.v20d7ce51dc08e6256243a3762d8a8aff = function(value) {
  return parseFloat(value) == parseInt(value) && !isNaN(value) ? true : false;
}, vcb778ce41130b213653506a1f586b179.prototype.readByte = function() {
  var dataEnv = this.data[this.pos++];
  return dataEnv & 255;
}, vcb778ce41130b213653506a1f586b179.prototype.writeByte = function(b) {
  return this.data.push(b), this.length++, 1;
}, vcb778ce41130b213653506a1f586b179.prototype.readBool = function() {
  return this.data[this.pos++] & 255 ? true : false;
}, vcb778ce41130b213653506a1f586b179.prototype.writeBool = function(value) {
  return this.writeByte(value ? 255 : 0);
}, vcb778ce41130b213653506a1f586b179.prototype.v1459db98f7a838e499c97d988f807262 = function() {
  return this.writeByte(Amf3Types.v9a8e445e7b32785f11b20a1a35649f9a);
}, vcb778ce41130b213653506a1f586b179.prototype.v186839903f0509acaf64f6899955de70 = function() {
  return this.writeByte(Amf3Types.vbd860bee0c2afe1f0f2f66fbdc9ee73a);
}, vcb778ce41130b213653506a1f586b179.prototype.v4e5dd0f5f0ec6cfdcda7c92debea49aa = function(value) {
  return this.writeByte(value ? Amf3Types.vd0e1b0b6a57865c0be834c807fa8846c : Amf3Types.v3a6e6c3c452cefb9e86e3fae6c55b4a3);
}, vcb778ce41130b213653506a1f586b179.prototype.v2cc9adf05031a1de6b6766d4bc3ff22c = function() {
  var i = this.readByte();
  var b2 = this.readByte();
  var b1 = this.readByte();
  var b0 = this.readByte();
  return i >= 64 ? undefined : b0 | b1 << 8 | b2 << 16 | i << 24;
}, vcb778ce41130b213653506a1f586b179.prototype.readUInt32BE = function() {
  var buffer = this.data;
  /** @type {number} */
  var bufferPos = (this.pos += 4) - 4;
  return (buffer[bufferPos] & 255) << 24 | (buffer[++bufferPos] & 255) << 16 | (buffer[++bufferPos] & 255) << 8 | buffer[++bufferPos] & 255;
}, vcb778ce41130b213653506a1f586b179.prototype.vfb5a3d2a08023039f8c35a78e8f5679f = function(val) {
  /** @type {number} */
  var s = 0;
  return s = s + this.writeByte(val >> 24 & 255), s = s + this.writeByte(val >> 16 & 255), s = s + this.writeByte(val >> 8 & 255), s = s + this.writeByte(val & 255), s;
}, vcb778ce41130b213653506a1f586b179.prototype.readInt32BE = function() {
  var buffer = this.data;
  /** @type {number} */
  var bufferPos = (this.pos += 4) - 4;
  /** @type {number} */
  var c = (buffer[bufferPos] & 255) << 24 | (buffer[++bufferPos] & 255) << 16 | (buffer[++bufferPos] & 255) << 8 | buffer[++bufferPos] & 255;
  return c >= 2147483648 ? c - 4294967296 : c;
}, vcb778ce41130b213653506a1f586b179.prototype.readUInt16BE = function() {
  var buffer = this.data;
  /** @type {number} */
  var bufferPos = (this.pos += 2) - 2;
  return (buffer[bufferPos] & 255) << 8 | buffer[++bufferPos] & 255;
}, vcb778ce41130b213653506a1f586b179.prototype.readInt16BE = function() {
  var buffer = this.data;
  /** @type {number} */
  var bufferPos = (this.pos += 2) - 2;
  /** @type {number} */
  var index = (buffer[bufferPos] & 255) << 8 | buffer[++bufferPos] & 255;
  return index >= 32768 ? index - 65536 : index;
}, vcb778ce41130b213653506a1f586b179.prototype.readFloat32BE = function() {
  var buffer = this.data;
  /** @type {number} */
  var bufferPos = (this.pos += 4) - 4;
  /** @type {number} */
  var c = buffer[bufferPos] & 255;
  /** @type {number} */
  var d = buffer[++bufferPos] & 255;
  /** @type {number} */
  var g = buffer[++bufferPos] & 255;
  /** @type {number} */
  var b4 = buffer[++bufferPos] & 255;
  /** @type {number} */
  var sign = 1 - (c >> 7 << 1);
  /** @type {number} */
  var exp = (c << 1 & 255 | d >> 7) - 127;
  /** @type {number} */
  var sig = (d & 127) << 16 | g << 8 | b4;
  return sig == 0 && exp == -127 ? 0 : sign * (1 + this.v9034c92e5369ad572294fc587044731f * sig) * this.pow(2, exp);
}, vcb778ce41130b213653506a1f586b179.prototype.readFloat64BE = function() {
  /** @type {!Array} */
  var ips = Array(8);
  /** @type {number} */
  var i = 0;
  for (; i < 8; ++i) {
    ips[i] = this.readByte();
  }
  return this.v64b2871d33f07de06568c30eaf027e27(ips, 11, 52);
}, vcb778ce41130b213653506a1f586b179.prototype.writeFloat64BE = function(key) {
  /** @type {number} */
  var val = 0;
  var array = this.v631e6b976ef25d2e54d4bd67aa1a480a(key, 11, 52);
  /** @type {number} */
  var i = 0;
  for (; i < 8; ++i) {
    val = val + this.writeByte(array[i]);
  }
  return val;
}, vcb778ce41130b213653506a1f586b179.prototype.v631e6b976ef25d2e54d4bd67aa1a480a = function(value, size, i) {
  /** @type {number} */
  var offset = (1 << size - 1) - 1;
  var label;
  var start;
  var days;
  if (isNaN(value)) {
    /** @type {number} */
    start = (1 << offset) - 1;
    /** @type {number} */
    days = 1;
    /** @type {number} */
    label = 0;
  } else {
    if (value === Infinity || value === -Infinity) {
      /** @type {number} */
      start = (1 << offset) - 1;
      /** @type {number} */
      days = 0;
      /** @type {number} */
      label = value < 0 ? 1 : 0;
    } else {
      if (value === 0) {
        /** @type {number} */
        start = 0;
        /** @type {number} */
        days = 0;
        /** @type {number} */
        label = 1 / value === -Infinity ? 1 : 0;
      } else {
        if (label = value < 0, value = Math.abs(value), value >= Math.pow(2, 1 - offset)) {
          /** @type {number} */
          var len = Math.min(Math.floor(Math.log(value) / Math.LN2), offset);
          /** @type {number} */
          start = len + offset;
          /** @type {number} */
          days = value * Math.pow(2, i - len) - Math.pow(2, i);
          if (days < 0) {
            start--;
          }
        } else {
          /** @type {number} */
          start = 0;
          /** @type {number} */
          days = value / Math.pow(2, 1 - offset - i);
        }
      }
    }
  }
  var index;
  /** @type {!Array} */
  var closeTagsForsummaryText = [];
  /** @type {number} */
  index = i;
  for (; index; index = index - 1) {
    closeTagsForsummaryText.push(days % 2 ? 1 : 0);
    /** @type {number} */
    days = Math.floor(days / 2);
  }
  /** @type {number} */
  index = size;
  for (; index; index = index - 1) {
    closeTagsForsummaryText.push(start % 2 ? 1 : 0);
    /** @type {number} */
    start = Math.floor(start / 2);
  }
  closeTagsForsummaryText.push(label ? 1 : 0);
  closeTagsForsummaryText.reverse();
  /** @type {string} */
  var g = closeTagsForsummaryText.join("");
  /** @type {!Array} */
  var resols = [];
  for (; g.length;) {
    resols.push(parseInt(g.substring(0, 8), 2));
    /** @type {string} */
    g = g.substring(8);
  }
  return resols;
}, vcb778ce41130b213653506a1f586b179.prototype.v64b2871d33f07de06568c30eaf027e27 = function(array, i, fbits) {
  /** @type {!Array} */
  var closeTagsForsummaryText = [];
  var length = array.length;
  for (; length; length = length - 1) {
    var value = array[length - 1];
    /** @type {number} */
    var Y4 = 8;
    for (; Y4; Y4 = Y4 - 1) {
      closeTagsForsummaryText.push(value % 2 ? 1 : 0);
      /** @type {number} */
      value = value >> 1;
    }
  }
  closeTagsForsummaryText.reverse();
  /** @type {string} */
  var container = closeTagsForsummaryText.join("");
  /** @type {number} */
  var bias = (1 << i - 1) - 1;
  /** @type {number} */
  var s = parseInt(container.substring(0, 1), 2) ? -1 : 1;
  /** @type {number} */
  var exponent = parseInt(container.substring(1, 1 + i), 2);
  /** @type {number} */
  var f = parseInt(container.substring(1 + i), 2);
  return exponent === (1 << i) - 1 ? f !== 0 ? NaN : s * Infinity : exponent > 0 ? s * Math.pow(2, exponent - bias) * (1 + f / Math.pow(2, fbits)) : f !== 0 ? s * Math.pow(2, -(bias - 1)) * (f / Math.pow(2, fbits)) : s * 0;
}, vcb778ce41130b213653506a1f586b179.prototype.v6b33b95812d3c0e07190ceca0ceef76f = function() {
  var b;
  /** @type {number} */
  var a = this.readByte() & 255;
  return a < 128 ? a : (b = (a & 127) << 7, a = this.readByte() & 255, a < 128 ? b | a : (b = (b | a & 127) << 7, a = this.readByte() & 255, a < 128 ? b | a : (b = (b | a & 127) << 8, a = this.readByte() & 255, b | a)));
}, vcb778ce41130b213653506a1f586b179.prototype.v385adafd0875009c1e2b45f7e2610acf = function(val) {
  /** @type {number} */
  var msg = 0;
  if (val < 128) {
    return msg = msg + this.writeByte(val), msg;
  } else {
    if (val < 16384) {
      return msg = msg + this.writeByte(val >> 7 & 127 | 128), msg = msg + this.writeByte(val & 127), msg;
    } else {
      if (val < 2097152) {
        return msg = msg + this.writeByte(val >> 14 & 127 | 128), msg = msg + this.writeByte(val >> 7 & 127 | 128), msg = msg + this.writeByte(val & 127), msg;
      } else {
        if (val < 1073741824) {
          return msg = msg + this.writeByte(val >> 22 & 127 | 128), msg = msg + this.writeByte(val >> 15 & 127 | 128), msg = msg + this.writeByte(val >> 8 & 127 | 128), msg = msg + this.writeByte(val & 255), msg;
        } else {
          throw new Error("Integer out of range: " + val);
        }
      }
    }
  }
}, vcb778ce41130b213653506a1f586b179.prototype.v59a3d9245b74c68165b3c4df593d26be = function() {
  var b0 = this.readByte();
  var b1 = this.readByte();
  var b2 = this.readByte();
  var i = this.readByte();
  return i >= 64 ? undefined : b0 | b1 << 8 | b2 << 16 | i << 24;
}, vcb778ce41130b213653506a1f586b179.prototype.vcc315325d44e28213bbc3d07859c7cb3 = function() {
  var data = this.data;
  var pos = this.pos += 4;
  /** @type {number} */
  var c = (data[--pos] & 255) << 24 | (data[--pos] & 255) << 16 | (data[--pos] & 255) << 8 | data[--pos] & 255;
  return c >= 2147483648 ? c - 4294967296 : c;
}, vcb778ce41130b213653506a1f586b179.prototype.v9eac79cb7e9bf30b56cb94d5e48b38cb = function() {
  var data = this.data;
  var pos = this.pos += 2;
  return (data[--pos] & 255) << 8 | data[--pos] & 255;
}, vcb778ce41130b213653506a1f586b179.prototype.v1a6541ad3781ffa61d4dbef782254839 = function() {
  var data = this.data;
  var pos = this.pos += 2;
  /** @type {number} */
  var index = (data[--pos] & 255) << 8 | data[--pos] & 255;
  return index >= 32768 ? index - 65536 : index;
}, vcb778ce41130b213653506a1f586b179.prototype.v7185d749d9c1532e30ff98b69aa03f21 = function() {
  var data = this.data;
  var pos = this.pos += 4;
  /** @type {number} */
  var c = data[--pos] & 255;
  /** @type {number} */
  var d = data[--pos] & 255;
  /** @type {number} */
  var g = data[--pos] & 255;
  /** @type {number} */
  var b4 = data[--pos] & 255;
  /** @type {number} */
  var sign = 1 - (c >> 7 << 1);
  /** @type {number} */
  var exp = (c << 1 & 255 | d >> 7) - 127;
  /** @type {number} */
  var sig = (d & 127) << 16 | g << 8 | b4;
  return sig == 0 && exp == -127 ? 0 : sign * (1 + this.v9034c92e5369ad572294fc587044731f * sig) * this.pow(2, exp);
}, vcb778ce41130b213653506a1f586b179.prototype.vb285851110c4c444b9efbce1218c9948 = function() {
  var data = this.data;
  var pos = this.pos += 8;
  /** @type {number} */
  var d = data[--pos] & 255;
  /** @type {number} */
  var e = data[--pos] & 255;
  /** @type {number} */
  var m = data[--pos] & 255;
  /** @type {number} */
  var random15bitNumber = data[--pos] & 255;
  /** @type {number} */
  var g = data[--pos] & 255;
  /** @type {number} */
  var i = data[--pos] & 255;
  /** @type {number} */
  var j = data[--pos] & 255;
  /** @type {number} */
  var b = data[--pos] & 255;
  /** @type {number} */
  var sign = 1 - (d >> 7 << 1);
  /** @type {number} */
  var exp = (d << 4 & 2047 | e >> 4) - 1023;
  /** @type {string} */
  var sig = ((e & 15) << 16 | m << 8 | random15bitNumber).toString(2) + (g >> 7 ? "1" : "0") + ((g & 127) << 24 | i << 16 | j << 8 | b).toString(2);
  return sig = parseInt(sig, 2), sig == 0 && exp == -1023 ? 0 : sign * (1 + this.va5c204310ecfeac09e69daf105a91190 * sig) * this.pow(2, exp);
}, vcb778ce41130b213653506a1f586b179.prototype.v2d01a4d3f6381072dd6bd11d1fc59be3 = function(b) {
  var val = b.getTime();
  return this.writeDouble(val);
}, vcb778ce41130b213653506a1f586b179.prototype.vba59fc450ae31f676904dcb887604aa8 = function() {
  var value = this.readDouble();
  /** @type {!Date} */
  var result = new Date;
  return result.setTime(value), result;
}, vcb778ce41130b213653506a1f586b179.prototype.v5951a6e3485c3ec9e0c9e99db4ed1c71 = function(extra_header_count) {
  /** @type {string} */
  var fullPath = "";
  for (; extra_header_count > 0;) {
    var unicodeLastChar = this.readUnsignedByte();
    /** @type {string} */
    fullPath = fullPath + String.fromCharCode(unicodeLastChar);
    extra_header_count--;
  }
  return fullPath;
}, vcb778ce41130b213653506a1f586b179.prototype.v622f3ad67d22085e0abbe1a0b4777118 = function(ast) {
  /** @type {number} */
  var s = 0;
  return s = s + this.writeByte(Amf3Types.v82df13093e1087e0379baae1e0945ee5), s = s + this.writeFloat64(ast), s;
}, vcb778ce41130b213653506a1f586b179.prototype.vb39451fc71980456577c45cb4973c12f = function(c) {
  /** @type {number} */
  var d = 0;
  return c >= -268435456 && c <= 268435455 ? (c = c & 536870911, d = d + this.writeByte(Amf3Types.ve1e1a0f5d5da08056d24075d7064f20c), d = d + this.v385adafd0875009c1e2b45f7e2610acf(c)) : d = d + this.v622f3ad67d22085e0abbe1a0b4777118(c), d;
}, vcb778ce41130b213653506a1f586b179.prototype.vc3578e333fb5a6983b988ae3ee10410f = function(re) {
  /** @type {number} */
  var s = 0;
  return s = s + this.writeByte(Amf3Types.v462938f06a445587686cc0f1f555c83f), s = s + this.va1b22c3c5798ed554f69c727333aeb4a(re), s;
}, vcb778ce41130b213653506a1f586b179.prototype.v94090abedf2a41ccb766f97a3d35703b = function(text) {
  /** @type {number} */
  var val = 0;
  var i = text.length;
  /** @type {number} */
  var next_tick_ts = 0;
  /** @type {number} */
  var start = 0;
  /** @type {number} */
  var l = 0;
  for (; l < i; l++) {
    start = text.charCodeAt(l);
    if (start <= 127) {
      next_tick_ts++;
    } else {
      if (start > 2047) {
        /** @type {number} */
        next_tick_ts = next_tick_ts + 3;
      } else {
        /** @type {number} */
        next_tick_ts = next_tick_ts + 2;
      }
    }
  }
  val = val + this.v385adafd0875009c1e2b45f7e2610acf(next_tick_ts << 1 | 1);
  /** @type {number} */
  l = 0;
  for (; l < i; l++) {
    start = text.charCodeAt(l);
    if (start <= 127) {
      val = val + this.writeByte(start);
    } else {
      if (start > 2047) {
        val = val + this.writeByte(224 | start >> 12 & 15);
        val = val + this.writeByte(128 | start >> 6 & 63);
        val = val + this.writeByte(128 | start >> 0 & 63);
      } else {
        val = val + this.writeByte(192 | start >> 6 & 31);
        val = val + this.writeByte(128 | start >> 0 & 63);
      }
    }
  }
  return val;
}, vcb778ce41130b213653506a1f586b179.prototype.va1b22c3c5798ed554f69c727333aeb4a = function(message) {
  /** @type {number} */
  var ret = 0;
  if (message.length == 0) {
    return ret = ret + this.v385adafd0875009c1e2b45f7e2610acf(1), ret;
  }
  var elem = {};
  return this.vda48251e8a2dee9803cdbcbb7529ee0b(message, elem) ? (ret = ret + elem.size, ret) : (ret = ret + this.v94090abedf2a41ccb766f97a3d35703b(message), ret);
}, vcb778ce41130b213653506a1f586b179.prototype.v6e87d2e0d1326bc8c070e314d74e9c71 = function() {
  return this.v5951a6e3485c3ec9e0c9e99db4ed1c71(this.readUnsignedShort());
}, vcb778ce41130b213653506a1f586b179.prototype.v16423012801fd7d9aa18942b64a40921 = function(len) {
  return this.v5951a6e3485c3ec9e0c9e99db4ed1c71(len);
}, vcb778ce41130b213653506a1f586b179.prototype.v330bda947a5a81b7d9b6fa70a3f7e89a = function() {
  return this.v5951a6e3485c3ec9e0c9e99db4ed1c71(this.readUInt30());
}, vcb778ce41130b213653506a1f586b179.prototype.vcd0aef06f6563704b316a6ebfb91321e = function(string) {
  var xmlDoc;
  if (window.DOMParser) {
    /** @type {!DOMParser} */
    var parser = new DOMParser;
    /** @type {(Document|null)} */
    xmlDoc = parser.parseFromString(string, "text/xml");
  } else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    /** @type {boolean} */
    xmlDoc.async = false;
    xmlDoc.loadXML(stc);
  }
  return xmlDoc;
}, vcb778ce41130b213653506a1f586b179.prototype.v4e2e675d7854f6218bde4900932013a5 = function() {
  var ruleTemplate = this.v330bda947a5a81b7d9b6fa70a3f7e89a();
  return this.vcd0aef06f6563704b316a6ebfb91321e(ruleTemplate);
}, vcb778ce41130b213653506a1f586b179.prototype.v05373e67d4d7cd01e37a1840474921de = function() {
  var ctrl = this.v6b33b95812d3c0e07190ceca0ceef76f();
  if ((ctrl & 1) == 0) {
    return this.v82ed9f0688cc63c22672b9ceae8862f4[ctrl >> 1];
  }
  /** @type {number} */
  var len = ctrl >> 1;
  if (0 == len) {
    return "";
  }
  var n = this.v5951a6e3485c3ec9e0c9e99db4ed1c71(len);
  return this.v82ed9f0688cc63c22672b9ceae8862f4.push(n), n;
}, vcb778ce41130b213653506a1f586b179.prototype.v6c7c1a5ae02054d9140bf8500cb9aff0 = function(ref) {
  var traitInfo = {};
  if (traitInfo.properties = [], (ref & 3) == 1) {
    return this.v51e0a4625ec29c984b5b615871aa5e91[ref >> 2];
  }
  /** @type {boolean} */
  traitInfo.v291845d1273f901a4529ed6360d5649c = (ref & 4) == 4;
  /** @type {boolean} */
  traitInfo.v3c66bca30d2e5598ffac7e310fbf2512 = (ref & 8) == 8;
  /** @type {number} */
  traitInfo.count = ref >> 4;
  traitInfo.className = this.v05373e67d4d7cd01e37a1840474921de();
  this.v51e0a4625ec29c984b5b615871aa5e91.push(traitInfo);
  /** @type {number} */
  var i = 0;
  for (; i < traitInfo.count; i++) {
    var falseySection = this.v05373e67d4d7cd01e37a1840474921de();
    traitInfo.properties.push(falseySection);
  }
  return traitInfo;
}, vcb778ce41130b213653506a1f586b179.prototype.ve937d3c46e28ba418c5817283494b541 = function(node) {
  /** @type {number} */
  var start = 0;
  var value = {};
  if (!this.v849e26051378f20c336460ac07a4ea95(node, value)) {
    /** @type {number} */
    var end = 0;
    /** @type {null} */
    var _ref1 = null;
    var color = node.v291845d1273f901a4529ed6360d5649c;
    if (!color) {
      _ref1 = node.properties;
      if (_ref1 != null) {
        end = _ref1.length;
      }
    }
    var depth = node.v3c66bca30d2e5598ffac7e310fbf2512;
    if (start = start + this.v385adafd0875009c1e2b45f7e2610acf((color ? 7 : 3) | (depth ? 8 : 0) | end << 4), start = start + this.va1b22c3c5798ed554f69c727333aeb4a(node.className), !color && _ref1 != null) {
      /** @type {number} */
      var i = 0;
      for (; i < end; ++i) {
        var t = node.properties[i];
        start = start + this.va1b22c3c5798ed554f69c727333aeb4a(t);
      }
    }
  } else {
    start = start + value.size;
  }
  return start;
}, vcb778ce41130b213653506a1f586b179.prototype.v09b697f54c69faceb92f2373600425bc = function(a) {
}, vcb778ce41130b213653506a1f586b179.prototype.v9edb659f16d992bac2b3f64a53db658c = function(a) {
  return 0;
}, vcb778ce41130b213653506a1f586b179.prototype.vafcc872cda0bf83853e41d57a2ee4ba9 = function(type) {
  if (this.v3d85f210265965cf0db8eee3e88e608d) {
    if (type.indexOf(".") != -1) {
      var filetypeOrder = type.split(".");
      type = filetypeOrder[filetypeOrder.length - 1];
    }
    if (type == "KMArray") {
      /** @type {string} */
      type = "Object";
    }
    if (type == "point") {
      /** @type {string} */
      type = "Point";
    }
    if (type == "StudentInstructions") {
      /** @type {string} */
      type = "Object";
    }
    if (type == "StudentStepData") {
      /** @type {string} */
      type = "Object";
    }
    if (type == "StudentStep") {
      /** @type {string} */
      type = "Object";
    }
    if (type == "StudentStepAnswer") {
      /** @type {string} */
      type = "Object";
    }
  }
  return type;
}, vcb778ce41130b213653506a1f586b179.prototype.vd5d9b6e1ede04531134ccede7276da2a = function(input) {
  if (this.v3d85f210265965cf0db8eee3e88e608d) {
    if (input != null && input.source != undefined) {
      return input.source;
    }
    if (input instanceof v0c87bc68b008561aa880828b743ca7f3) {
      /** @type {number} */
      var i = 0;
      for (; i < input.ve9917cfc7ae9d54de947daa239f8809b.length; ++i) {
        var data = input.ve9917cfc7ae9d54de947daa239f8809b[i];
        if (data.building != undefined) {
          data.v3ca0c66bfa2596b4a96f337386168602 = data.building.id;
          delete data.building;
        }
      }
    }
    input instanceof Offering;
  }
  return input;
}, vcb778ce41130b213653506a1f586b179.prototype.va2e48ff8db11a68387a5a264838dcfcc = function(data, i, value) {
  if (this.v3d85f210265965cf0db8eee3e88e608d) {
    if (typeof value == "number" && isNaN(value)) {
      console.log("NaN detected in property '" + i + "' setting to 0");
      /** @type {number} */
      value = 0;
    }
    if (data[i] === undefined && i != "building" && U.v26a4aec7e474843cb8d44213cfcf1699(data) != "Object") {
      console.log("prop missing: " + U.v26a4aec7e474843cb8d44213cfcf1699(data) + " : " + i);
    }
  }
  /** @type {number} */
  data[i] = value;
}, vcb778ce41130b213653506a1f586b179.prototype.vadd06da90bcbfab155139168f1c30c14 = function() {
  var marker$jscomp$0 = this.readByte();
  if (marker$jscomp$0 == Amf3Types.vbd860bee0c2afe1f0f2f66fbdc9ee73a) {
    return undefined;
  }
  if (marker$jscomp$0 == Amf3Types.v9a8e445e7b32785f11b20a1a35649f9a) {
    return null;
  }
  if (marker$jscomp$0 == Amf3Types.v3a6e6c3c452cefb9e86e3fae6c55b4a3) {
    return false;
  }
  if (marker$jscomp$0 == Amf3Types.vd0e1b0b6a57865c0be834c807fa8846c) {
    return true;
  }
  if (marker$jscomp$0 == Amf3Types.ve1e1a0f5d5da08056d24075d7064f20c) {
    var i$jscomp$9 = this.v6b33b95812d3c0e07190ceca0ceef76f();
    return i$jscomp$9 = i$jscomp$9 << 3 >> 3, i$jscomp$9;
  }
  if (marker$jscomp$0 == Amf3Types.v82df13093e1087e0379baae1e0945ee5) {
    var d$jscomp$27 = this.readDouble();
    return isNaN(d$jscomp$27) && console.log("Reading in a NaN! that is probably bad."), d$jscomp$27;
  }
  if (marker$jscomp$0 == Amf3Types.v462938f06a445587686cc0f1f555c83f) {
    var s$jscomp$2 = this.v05373e67d4d7cd01e37a1840474921de();
    return s$jscomp$2;
  }
  if (marker$jscomp$0 == Amf3Types.v662748b00eaf862b81915422961b5e0b) {
    s$jscomp$2 = this.v4e2e675d7854f6218bde4900932013a5();
    return this.vebc49caa9ced150a656b39ee8c53d0f7.push(s$jscomp$2), s$jscomp$2;
  }
  if (marker$jscomp$0 == Amf3Types.v8eaaf370d349b01bde9e826220696e56) {
    var v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 = this.v6b33b95812d3c0e07190ceca0ceef76f();
    if ((v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 & 1) == 0) {
      /** @type {number} */
      var index$jscomp$54 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
      var obj$jscomp$25 = this.vebc49caa9ced150a656b39ee8c53d0f7[index$jscomp$54];
      return obj$jscomp$25;
    }
    var value$jscomp$84 = this.vba59fc450ae31f676904dcb887604aa8();
    return this.vebc49caa9ced150a656b39ee8c53d0f7.push(value$jscomp$84), value$jscomp$84;
  }
  if (marker$jscomp$0 == Amf3Types.vac30bbac68c038322097e496d4507bcd) {
    v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 = this.v6b33b95812d3c0e07190ceca0ceef76f();
    if ((v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 & 1) == 0) {
      /** @type {number} */
      index$jscomp$54 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
      return this.vebc49caa9ced150a656b39ee8c53d0f7[index$jscomp$54];
    }
    /** @type {number} */
    var len$jscomp$0 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
    var key$jscomp$35 = this.v05373e67d4d7cd01e37a1840474921de();
    if (key$jscomp$35 == "") {
      /** @type {!Array} */
      var a$jscomp$125 = [];
      this.vebc49caa9ced150a656b39ee8c53d0f7.push(a$jscomp$125);
      /** @type {number} */
      i$jscomp$9 = 0;
      for (; i$jscomp$9 < len$jscomp$0; i$jscomp$9++) {
        value$jscomp$84 = this.vadd06da90bcbfab155139168f1c30c14();
        a$jscomp$125.push(value$jscomp$84);
      }
      return a$jscomp$125;
    }
    var result$jscomp$0 = {};
    this.vebc49caa9ced150a656b39ee8c53d0f7.push(result$jscomp$0);
    for (; key$jscomp$35 != "";) {
      result$jscomp$0[key$jscomp$35] = this.vadd06da90bcbfab155139168f1c30c14();
      key$jscomp$35 = this.v05373e67d4d7cd01e37a1840474921de();
    }
    /** @type {number} */
    i$jscomp$9 = 0;
    for (; i$jscomp$9 < len$jscomp$0; i$jscomp$9++) {
      result$jscomp$0[i$jscomp$9] = this.vadd06da90bcbfab155139168f1c30c14();
    }
    return result$jscomp$0;
  }
  if (marker$jscomp$0 == Amf3Types.vd468c439d9c6049ae535802859b2df5b) {
    v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 = this.v6b33b95812d3c0e07190ceca0ceef76f();
    if ((v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 & 1) == 0) {
      /** @type {number} */
      index$jscomp$54 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
      return this.vebc49caa9ced150a656b39ee8c53d0f7[index$jscomp$54];
    }
    var ti$jscomp$0 = this.v6c7c1a5ae02054d9140bf8500cb9aff0(v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0);
    var v291845d1273f901a4529ed6360d5649c$jscomp$0 = ti$jscomp$0.v291845d1273f901a4529ed6360d5649c;
    /** @type {null} */
    var o$jscomp$0 = null;
    if (v291845d1273f901a4529ed6360d5649c$jscomp$0) {
      o$jscomp$0 = this.v09b697f54c69faceb92f2373600425bc(ti$jscomp$0.className);
      this.vebc49caa9ced150a656b39ee8c53d0f7.push(o$jscomp$0);
    } else {
      var cname$jscomp$0 = this.vafcc872cda0bf83853e41d57a2ee4ba9(ti$jscomp$0.className);
      eval("o = new " + cname$jscomp$0 + "();");
      this.vebc49caa9ced150a656b39ee8c53d0f7.push(o$jscomp$0);
      len$jscomp$0 = ti$jscomp$0.properties.length;
      /** @type {number} */
      i$jscomp$9 = 0;
      for (; i$jscomp$9 < len$jscomp$0; i$jscomp$9++) {
        var propName$jscomp$0 = ti$jscomp$0.properties[i$jscomp$9];
        value$jscomp$84 = this.vadd06da90bcbfab155139168f1c30c14();
        this.va2e48ff8db11a68387a5a264838dcfcc(o$jscomp$0, propName$jscomp$0, value$jscomp$84);
      }
      if (ti$jscomp$0.v3c66bca30d2e5598ffac7e310fbf2512) {
        for (;;) {
          var name$jscomp$64 = this.v05373e67d4d7cd01e37a1840474921de();
          if (name$jscomp$64 == null || name$jscomp$64.length == 0) {
            break;
          }
          value$jscomp$84 = this.vadd06da90bcbfab155139168f1c30c14();
          o$jscomp$0[name$jscomp$64] = value$jscomp$84;
        }
      }
    }
    return o$jscomp$0 = this.vd5d9b6e1ede04531134ccede7276da2a(o$jscomp$0), o$jscomp$0;
  } else {
    if (marker$jscomp$0 == Amf3Types.v75b93cadada4325dac21e6ef1181444d) {
      v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 = this.v6b33b95812d3c0e07190ceca0ceef76f();
      if ((v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 & 1) == 0) {
        s$jscomp$2 = this.vcd0aef06f6563704b316a6ebfb91321e(this.vebc49caa9ced150a656b39ee8c53d0f7[v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1]);
        return s$jscomp$2;
      }
      /** @type {number} */
      len$jscomp$0 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
      if (0 == len$jscomp$0) {
        return this.vebc49caa9ced150a656b39ee8c53d0f7.push(null), null;
      }
      var str$jscomp$6 = this.v5951a6e3485c3ec9e0c9e99db4ed1c71(len$jscomp$0);
      var xml$jscomp$0 = this.vcd0aef06f6563704b316a6ebfb91321e(str$jscomp$6);
      return this.vebc49caa9ced150a656b39ee8c53d0f7.push(xml$jscomp$0), xml$jscomp$0;
    } else {
      if (marker$jscomp$0 == Amf3Types.vbb7903b4ed7bd9bf558a09bae3e6c103) {
        v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 = this.v6b33b95812d3c0e07190ceca0ceef76f();
        if ((v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 & 1) == 0) {
          /** @type {number} */
          index$jscomp$54 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
          return this.vebc49caa9ced150a656b39ee8c53d0f7[index$jscomp$54];
        }
        /** @type {number} */
        len$jscomp$0 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
        var ve483eda65810789b71281091256f2805$jscomp$0 = new vcb778ce41130b213653506a1f586b179;
        this.vebc49caa9ced150a656b39ee8c53d0f7.push(ve483eda65810789b71281091256f2805$jscomp$0);
        /** @type {number} */
        i$jscomp$9 = 0;
        for (; i$jscomp$9 < len$jscomp$0; i$jscomp$9++) {
          ve483eda65810789b71281091256f2805$jscomp$0.writeByte(this.readByte());
        }
        return ve483eda65810789b71281091256f2805$jscomp$0;
      } else {
        if (marker$jscomp$0 == Amf3Types.v644858be1c7ea805dc6e9f730d30ea82) {
          v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 = this.v6b33b95812d3c0e07190ceca0ceef76f();
          if ((v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 & 1) == 0) {
            /** @type {number} */
            index$jscomp$54 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
            return this.vebc49caa9ced150a656b39ee8c53d0f7[index$jscomp$54];
          }
          this.readBoolean();
          /** @type {number} */
          len$jscomp$0 = v1914b2ebe9688e8dfb7ad865839b52e9$jscomp$0 >> 1;
          /** @type {!Array} */
          d$jscomp$27 = new Array;
          this.vebc49caa9ced150a656b39ee8c53d0f7.push(d$jscomp$27);
          /** @type {number} */
          i$jscomp$9 = 0;
          for (; i$jscomp$9 < len$jscomp$0; i$jscomp$9++) {
            key$jscomp$35 = this.vadd06da90bcbfab155139168f1c30c14();
            value$jscomp$84 = this.vadd06da90bcbfab155139168f1c30c14();
            d$jscomp$27[key$jscomp$35] = value$jscomp$84;
          }
          return d$jscomp$27;
        } else {
          console.error("Unknown marker: " + marker$jscomp$0);
        }
      }
    }
  }
}, vcb778ce41130b213653506a1f586b179.prototype.v3e53c1a37386c9d42e2ff7806cd413bd = function(inst, pane) {
  var dateStr = this.vebc49caa9ced150a656b39ee8c53d0f7.indexOf(inst);
  return dateStr != -1 ? pane.size = this.v385adafd0875009c1e2b45f7e2610acf(dateStr << 1) : this.vebc49caa9ced150a656b39ee8c53d0f7.push(inst), dateStr != -1;
}, vcb778ce41130b213653506a1f586b179.prototype.v40079b92ed831120105f17d1ab6df343 = function(b, f) {
  /** @type {string} */
  var cls = Object.keys(b).toString();
  var frameInfo = this.v64e6b7d49ae71a32cf243eb800d2da83[cls];
  if (!frameInfo) {
    frameInfo = {
      table : [],
      v9343aafb941d878db910f9ace96f4a94 : []
    };
    this.v64e6b7d49ae71a32cf243eb800d2da83[cls] = frameInfo;
  }
  /** @type {number} */
  var a = frameInfo.table.indexOf(b);
  return a >= 0 ? (a = frameInfo.v9343aafb941d878db910f9ace96f4a94[a], f.size = this.v385adafd0875009c1e2b45f7e2610acf(a << 1)) : (frameInfo.table.push(b), frameInfo.v9343aafb941d878db910f9ace96f4a94.push(this.vebc49caa9ced150a656b39ee8c53d0f7.length), this.vebc49caa9ced150a656b39ee8c53d0f7.push(b)), a >= 0;
}, vcb778ce41130b213653506a1f586b179.prototype.v849e26051378f20c336460ac07a4ea95 = function(b, dst) {
  var bSortValue = b.__v5ef82fe2e0dfebf4431cf4bd10db2867;
  return bSortValue >= 0 ? dst.size = this.v385adafd0875009c1e2b45f7e2610acf(bSortValue << 2 | 1) : (b.__v5ef82fe2e0dfebf4431cf4bd10db2867 = this.vebc49caa9ced150a656b39ee8c53d0f7.length, this.v51e0a4625ec29c984b5b615871aa5e91.push(b)), bSortValue >= 0;
}, vcb778ce41130b213653506a1f586b179.prototype.vda48251e8a2dee9803cdbcbb7529ee0b = function(name, from) {
  var a = this.v3b2a2b78e14af303f112387188c37d98[name];
  return a == undefined && (a = this.v82ed9f0688cc63c22672b9ceae8862f4.indexOf(name)), a != -1 ? from.size = this.v385adafd0875009c1e2b45f7e2610acf(a << 1) : (this.v3b2a2b78e14af303f112387188c37d98[name] = this.v82ed9f0688cc63c22672b9ceae8862f4.length, this.v82ed9f0688cc63c22672b9ceae8862f4.push(name)), a != -1;
}, vcb778ce41130b213653506a1f586b179.prototype.v260584eab714d17b01edab1c43001dc1 = function(number) {
  var value = number.constructor.toString();
  var end = value.indexOf("function");
  var i = value.indexOf("(");
  var d = value.substring(end + 8, i).trim();
  return d;
}, vcb778ce41130b213653506a1f586b179.prototype.v0794e99849af353da2642d5a585704e3 = function(value, n) {
  if (_.isUndefined(n)) {
    /** @type {string} */
    n = "";
  }
  /** @type {number} */
  var total = 0;
  this.v7369501f8651f11cd3b70790022e0bdb++;
  /** @type {string} */
  var type = typeof value;
  if (value === null || type == "null") {
    total = total + this.v1459db98f7a838e499c97d988f807262();
    this.v34e6a05e9fe7930dcceee2b54b020a2f(n, " Null, size: ", total);
  } else {
    if (_.isUndefined(value)) {
      total = total + this.v186839903f0509acaf64f6899955de70();
      this.v34e6a05e9fe7930dcceee2b54b020a2f(n, " undefined, size: ", total);
    } else {
      if (type == "object") {
        var f = {};
        if (value instanceof Array) {
          var i = this.v32e55820aa96a5afb89315999ff32b93(value);
          if (i > 0 && i != value.length) {
            if (total = total + this.writeByte(Amf3Types.v644858be1c7ea805dc6e9f730d30ea82), !this.v40079b92ed831120105f17d1ab6df343(value, f)) {
              total = total + this.v385adafd0875009c1e2b45f7e2610acf(i << 1 | 1);
              total = total + this.writeBoolean(false);
              /** @type {number} */
              var j = 0;
              if (_.forOwn(value, _.bind(function(canCreateDiscussions, a, emsElems) {
                if (a.substring(0, 2) != "__") {
                  this.v0794e99849af353da2642d5a585704e3(a, a);
                  this.v0794e99849af353da2642d5a585704e3(emsElems[a], a);
                  j++;
                }
              }, this)), j != i) {
                throw new Error(U.vc0e6c88f8413e92781b652ae2786391a("Dictionary object: {0} key count mismatch: {1} written, expected {2}", [n, j, i]));
              }
            } else {
              total = total + f.size;
            }
          } else {
            if (total = total + this.writeByte(Amf3Types.vac30bbac68c038322097e496d4507bcd), !this.v40079b92ed831120105f17d1ab6df343(value, f)) {
              total = total + this.v385adafd0875009c1e2b45f7e2610acf(value.length << 1 | 1);
              this.va1b22c3c5798ed554f69c727333aeb4a("");
              /** @type {number} */
              var i = 0;
              for (; i < value.length; ++i) {
                var subValue = value[i];
                this.v0794e99849af353da2642d5a585704e3(subValue, n + " array index " + i);
              }
            } else {
              total = total + f.size;
            }
          }
          if (this.v796fcf789ad585f046b01dd1ca0babce) {
            this.v34e6a05e9fe7930dcceee2b54b020a2f(n, ": Array: ", total);
          }
        } else {
          if (value instanceof Date) {
            total = total + this.writeByte(Amf3Types.v8eaaf370d349b01bde9e826220696e56);
            if (this.v40079b92ed831120105f17d1ab6df343(value, f)) {
              total = total + f.size;
            } else {
              total = total + this.v385adafd0875009c1e2b45f7e2610acf(1);
              total = total + this.v2d01a4d3f6381072dd6bd11d1fc59be3(value);
            }
            if (this.v796fcf789ad585f046b01dd1ca0babce) {
              this.v34e6a05e9fe7930dcceee2b54b020a2f(n, " Date, size: ", total);
            }
          } else {
            if (total = total + this.writeByte(Amf3Types.vd468c439d9c6049ae535802859b2df5b), !this.v40079b92ed831120105f17d1ab6df343(value, f)) {
              var item = {
                v291845d1273f901a4529ed6360d5649c : false,
                v3c66bca30d2e5598ffac7e310fbf2512 : false,
                properties : []
              };
              item.className = U.v26a4aec7e474843cb8d44213cfcf1699(value);
              this.v83cfda8bb7805b2f5318b39cb98f65ea(item.className);
              var path;
              for (path in value) {
                if (value.hasOwnProperty(path)) {
                  /** @type {string} */
                  var item = typeof value[path];
                  if (item != "function" && path.substring(0, 2) != "__") {
                    item.properties.push(path);
                  }
                }
              }
              if (total = total + this.ve937d3c46e28ba418c5817283494b541(item), item.v291845d1273f901a4529ed6360d5649c) {
                total = total + this.v9edb659f16d992bac2b3f64a53db658c(item.className);
              } else {
                if (item.properties.length > 0) {
                  /** @type {number} */
                  var inputsSize = item.properties.length;
                  /** @type {number} */
                  i = 0;
                  for (; i < inputsSize; i++) {
                    n = item.properties[i];
                    this.v0794e99849af353da2642d5a585704e3(value[n], n);
                  }
                }
              }
              if (this.v796fcf789ad585f046b01dd1ca0babce) {
                this.v34e6a05e9fe7930dcceee2b54b020a2f(item.className + "/" + n, " object marker and traits table size: ", total);
                this.v12ae6285535b9445ac61903b8ec7abf3();
              }
            } else {
              total = total + f.size;
              if (this.v796fcf789ad585f046b01dd1ca0babce) {
                this.v34e6a05e9fe7930dcceee2b54b020a2f("&" + n, " ref size: ", total);
              }
            }
          }
        }
      } else {
        if (type == "number") {
          if (isNaN(value) == 1) {
            console.log("Writing out a NaN for property: %s! that is probably bad.", n);
          }
          if (this.v20d7ce51dc08e6256243a3762d8a8aff(value)) {
            total = total + this.vb39451fc71980456577c45cb4973c12f(value);
          } else {
            total = total + this.v622f3ad67d22085e0abbe1a0b4777118(value);
          }
          if (this.v796fcf789ad585f046b01dd1ca0babce) {
            this.v34e6a05e9fe7930dcceee2b54b020a2f(n, ": Number, size: ", total);
          }
        } else {
          if (type == "boolean") {
            total = total + this.v4e5dd0f5f0ec6cfdcda7c92debea49aa(value);
            if (this.v796fcf789ad585f046b01dd1ca0babce) {
              this.v34e6a05e9fe7930dcceee2b54b020a2f(n, ": Bool, size: ", total);
            }
          } else {
            if (type == "string") {
              total = total + this.vc3578e333fb5a6983b988ae3ee10410f(value);
              if (this.v796fcf789ad585f046b01dd1ca0babce) {
                this.v34e6a05e9fe7930dcceee2b54b020a2f(n, ": String, size: ", total);
              }
            }
          }
        }
      }
    }
  }
  return this.v7369501f8651f11cd3b70790022e0bdb--, this.v7369501f8651f11cd3b70790022e0bdb <= 0 && this.v3ccbef2b14576b2d14f478b958e6f739(), total;
}, vcb778ce41130b213653506a1f586b179.prototype.v3ccbef2b14576b2d14f478b958e6f739 = function() {
  if (this.v796fcf789ad585f046b01dd1ca0babce) {
    console.log("Scrubbing tables");
  }
  /** @type {!Array} */
  this.v82ed9f0688cc63c22672b9ceae8862f4 = [];
  this.v3b2a2b78e14af303f112387188c37d98 = {};
  this.v64e6b7d49ae71a32cf243eb800d2da83 = {};
  /** @type {!Array} */
  this.vebc49caa9ced150a656b39ee8c53d0f7 = [];
  /** @type {!Array} */
  this.v51e0a4625ec29c984b5b615871aa5e91 = [];
}, vcb778ce41130b213653506a1f586b179.prototype.v83cfda8bb7805b2f5318b39cb98f65ea = function(a) {
  if (this.v796fcf789ad585f046b01dd1ca0babce) {
    a === "undefined";
    if (!this.vda9ac3ad3786ce67271bd2bf8d8f8a4f[a]) {
      /** @type {number} */
      this.vda9ac3ad3786ce67271bd2bf8d8f8a4f[a] = 0;
    }
    if (!this.v4bd9a626707e6b4e0462491e46a62e8c[a]) {
      /** @type {number} */
      this.v4bd9a626707e6b4e0462491e46a62e8c[a] = 0;
    }
    if (!this.v17ddca99222eb790cd275c69ac607b08[a]) {
      /** @type {!Array} */
      this.v87396d652a1abb6ad660d181ec69d7e4[a] = [];
    }
    this.v0db142e16f0c27bb36605dd487bb9933.push(a);
    this.v4bd9a626707e6b4e0462491e46a62e8c[a]++;
    this.v8770d281d70fecc1710af9dd0256ae0f++;
  }
}, vcb778ce41130b213653506a1f586b179.prototype.v12ae6285535b9445ac61903b8ec7abf3 = function() {
  if (this.v796fcf789ad585f046b01dd1ca0babce) {
    var indexLookupKey = this.v0db142e16f0c27bb36605dd487bb9933.pop();
    /** @type {boolean} */
    this.v17ddca99222eb790cd275c69ac607b08[indexLookupKey] = true;
    this.v8770d281d70fecc1710af9dd0256ae0f--;
  }
}, vcb778ce41130b213653506a1f586b179.prototype.v34e6a05e9fe7930dcceee2b54b020a2f = function(i, n, total) {
  if (this.v796fcf789ad585f046b01dd1ca0babce) {
    /** @type {string} */
    var a = "";
    if (this.v0db142e16f0c27bb36605dd487bb9933.length > 0) {
      a = _.last(this.v0db142e16f0c27bb36605dd487bb9933);
    }
    /** @type {number} */
    var ip_icmp_offset = 2;
    for (; _.contains(this.v7b0b442be5c189cdc80d1386ea6074d5, a);) {
      a = this.v0db142e16f0c27bb36605dd487bb9933[this.v0db142e16f0c27bb36605dd487bb9933.length - ip_icmp_offset];
      ip_icmp_offset++;
    }
    this.vda9ac3ad3786ce67271bd2bf8d8f8a4f[a] += total;
    if (!this.v17ddca99222eb790cd275c69ac607b08[a]) {
      this.v87396d652a1abb6ad660d181ec69d7e4[a].push(i + n + total);
    }
  }
}, vcb778ce41130b213653506a1f586b179.prototype.v32e55820aa96a5afb89315999ff32b93 = function(data) {
  /** @type {number} */
  var sources = 0;
  return _.forOwn(data, function(canCreateDiscussions, OldString, isSlidingUp) {
    if (OldString.substring(0, 2) != "__") {
      sources++;
    }
  }), sources;
}, Point.prototype.getLength = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}, Point.prototype.clone = function() {
  return new Point(this.x, this.y);
}, Point.prototype.isEmpty = function() {
  return this.x == 0 && this.y == 0;
}, Point.empty = function() {
  return new Point(0, 0);
}, v13260862a5e36823cb5546b59af48c71.prototype = Object.create(Object.prototype), v13260862a5e36823cb5546b59af48c71.prototype.constructor = v13260862a5e36823cb5546b59af48c71, v13260862a5e36823cb5546b59af48c71.prototype.init = function() {
  /** @type {!Array} */
  this.v5f83a0aed041f58a990c304551300e85 = [];
  /** @type {!Array} */
  this.views = [];
  /** @type {number} */
  this.v1fa1413271e3e0e1ded56b84c99ed84a = 0;
  /** @type {string} */
  var componentsStr = "data/App-config.json";
  if (this.vabcd33e3b9c74fa33e39751d0b5bb0c4("AppConfig")) {
    componentsStr = this.vabcd33e3b9c74fa33e39751d0b5bb0c4("AppConfig");
  }
  appCfgUris = componentsStr.split(",");
  var chartbuilderData = new v98d829b48a3d1a2b42d1454357ce024d("AppConfig", appCfgUris);
  chartbuilderData.load(_.bind(function() {
    this.AppConfig = chartbuilderData.data;
    this.v8288c3c409cb6664f65ccdd797bdab15();
  }, this));
}, v13260862a5e36823cb5546b59af48c71.prototype.v8288c3c409cb6664f65ccdd797bdab15 = function() {
  var scope = this;
  if (this.v7dc6bea4f0da4bf13854a20c580bf31d(), this.vabcd33e3b9c74fa33e39751d0b5bb0c4("productDisplayName") && (this.v7cc89c84ffe803bcbc1b9c0c03311608 = this.vabcd33e3b9c74fa33e39751d0b5bb0c4("productDisplayName")), $("#product-name").html(this.v7cc89c84ffe803bcbc1b9c0c03311608), this.vabcd33e3b9c74fa33e39751d0b5bb0c4("css")) {
    var a = this.vabcd33e3b9c74fa33e39751d0b5bb0c4("css");
    if (_.isString(a)) {
      var c = a.split(",");
    } else {
      c = a;
    }
    this.v2a50a717db1698de9eb4781bac43cfc3 = c.length;
    if (this.v2a50a717db1698de9eb4781bac43cfc3 == 0) {
      $("body").show();
      this.vb04088fb75e4e51fbd11ca6e2f796d05.dialog("open");
    }
    _.forEach(c, function(b) {
      /** @type {!Element} */
      var el = document.createElement("link");
      /** @type {string} */
      el.type = "text/css";
      /** @type {string} */
      el.rel = "stylesheet";
      /**
       * @return {undefined}
       */
      el.onload = function() {
        A.v87b8393064cbfa8977b32cec36a69d86().v2a50a717db1698de9eb4781bac43cfc3--;
        if (A.v87b8393064cbfa8977b32cec36a69d86().v2a50a717db1698de9eb4781bac43cfc3 == 0) {
          $("body").show();
          A.v87b8393064cbfa8977b32cec36a69d86().vb04088fb75e4e51fbd11ca6e2f796d05.dialog("open");
        }
      };
      /** @type {string} */
      el.href = v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + "../" + b + ".css";
      $("head").append(el);
    });
  } else {
    $("body").show();
    A.v87b8393064cbfa8977b32cec36a69d86().vb04088fb75e4e51fbd11ca6e2f796d05.dialog("open");
  }
  Globalize.culture(Globalize.cultures["en-US"]);
  var config = Globalize.culture();
  /** @type {!Array} */
  config.numberFormat.currency.pattern = ["$-n", "$n"];
  /** @type {number} */
  var ki$13 = 0;
  for (; ki$13 < 5; ++ki$13) {
    this.v1282fa4bc8bedeaaf5dc2e076f512189.push([]);
  }
  /** @type {number} */
  ki$13 = 0;
  for (; ki$13 < this.speeds.length; ++ki$13) {
    var chatModal = $("<div class='consensus-speed-tick'>");
    chatModal.css("left", 5 + ki$13 * (112 / this.speeds.length) + "%");
    chatModal.appendTo($("#consensus-speed-slider"));
  }
  this.vd78424fa9afb95084a1f370fe5214740.css({
    left : 5 + 0 * (112 / A.v87b8393064cbfa8977b32cec36a69d86().speeds.length) + "%"
  });
  this.vd78424fa9afb95084a1f370fe5214740.show();
  this.vea7e3d3724eaf22d249e12deb4a1edfd.slider({
    min : 0,
    max : this.speeds.length - 1,
    value : 0
  });
  this.vea7e3d3724eaf22d249e12deb4a1edfd.bind("slidechange", function(selectedStatuses) {
    scope.ve5c9da9ef00311dc94fea33324bd0a32(selectedStatuses);
  });
  this.v9d802e8d7c41edce2da401871368fd22.slider({
    orientation : "vertical",
    range : "min",
    min : 0,
    max : this.v40b61d31168505a8bd84664bb8816db9.length - 1,
    value : this.vacd138095667b40524e06d1f21f901c3,
    change : _.bind(this.v6987735d07d8e15a18022c1d65c8abde, this)
  });
  $("#zoom-button-in").click(function() {
    scope.v9d802e8d7c41edce2da401871368fd22.slider("value", Math.min(scope.v9d802e8d7c41edce2da401871368fd22.slider("value") + 1, scope.v40b61d31168505a8bd84664bb8816db9.length - 1));
  });
  $("#zoom-button-out").click(function() {
    scope.v9d802e8d7c41edce2da401871368fd22.slider("value", Math.max(scope.v9d802e8d7c41edce2da401871368fd22.slider("value") - 1, 0));
  });
  $("#sim-view").scroll(function(b) {
    scope.vd87b04da8df74ea42ac00669b0d9c5ab(b);
  });
  this.v1d8e13eaa3dbf661d08c7876bee2a701();
  this.v55dba65915704fb0155ac74ac2479d86 = _.sum(this.vabbe19afd235991c70766de7f554b24d, "loadSize");
  async.map(this.vabbe19afd235991c70766de7f554b24d, function(field_order, reportMoveCallback) {
    /**
     * @param {?} s
     * @return {undefined}
     */
    var b = function(s) {
      reportMoveCallback();
      scope.v2925fb445866fcc36863247b5767b30b -= s.loadSize;
      scope.v609fa3f2d3855abce28310284c0c341a();
    };
    /**
     * @param {?} first
     * @return {undefined}
     */
    var name = function(first) {
      scope.v2925fb445866fcc36863247b5767b30b -= first;
      scope.v609fa3f2d3855abce28310284c0c341a();
    };
    field_order.load(b, name);
  }, function() {
    scope.va7230642e1efe5cb8038388896a7ede8();
  });
}, v13260862a5e36823cb5546b59af48c71.prototype.v609fa3f2d3855abce28310284c0c341a = function() {
  /** @type {number} */
  var duration = Math.min(1, 1 - this.v2925fb445866fcc36863247b5767b30b / this.v55dba65915704fb0155ac74ac2479d86);
  $("#uiLoadingLabel").text(U.vc0e6c88f8413e92781b652ae2786391a(", loading {0}", [this.v254210d9432905fa6adc5a952359bed3[Math.min(this.v254210d9432905fa6adc5a952359bed3.length - 1, Math.floor(duration * this.v254210d9432905fa6adc5a952359bed3.length))]]));
  /** @type {number} */
  var width = duration * 100;
  $("#uiLoadingBar").css("width", width + "%");
  if (duration < 1) {
    this.vddb8abb300fa9afff2e35a209587b3db.animate(duration);
  } else {
    this.vddb8abb300fa9afff2e35a209587b3db.set(duration);
  }
  $("#splashProgress").text(Math.round(width) + "%");
}, v13260862a5e36823cb5546b59af48c71.prototype.v7dc6bea4f0da4bf13854a20c580bf31d = function() {
  var $dialog = $("<div id=\"splashWrapper\" style='padding: 0;'>");
  $dialog.appendTo("body");
  var $button = $("<div class='vb_splash'>").appendTo($dialog);
  var name = A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("product", "");
  /** @type {string} */
  var f = v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + "images/assets/splash" + (name == "" ? "" : "_" + name) + ".png";
  $("<img crossorigin=\"anonymous\" alt='' style='width: 500px; height: 300px; margin: 0; padding: 0;' src='" + f + "'>").appendTo($button);
  var $label = $("<div style='position: absolute; left: 100px; top: 30px; width: 300px; margin: 0;'>");
  $("<h6 style='text-align: center;'>Please wait<span id=\"uiLoadingLabel\"></span>...</h6>").appendTo($label);
  $('<div class="progress progress-striped active"><div id="uiLoadingBar" class="bar progress-bar progress-bar-striped " style="width: 0%;"></div>').appendTo($label);
  $label.appendTo($button);
  var layersLi = $("<div class='vbclg_splash'>").appendTo($dialog);
  $('<div id="splashLesson">' + A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("lessonName", "") + "</div>").appendTo(layersLi);
  $('<div id="splashTM">Case Simulation<sup>&reg;</sup></div>').appendTo(layersLi);
  $('<div id="loaderContainer">').appendTo(layersLi);
  $('<div id="splashProgress">0%</div>').appendTo(layersLi);
  localThis = this;
  $dialog.dialog({
    width : 508,
    title : this.v7cc89c84ffe803bcbc1b9c0c03311608,
    resizable : false,
    modal : true,
    classes : {
      "ui-dialog" : "splashDialog"
    },
    autoOpen : false,
    open : function() {
      $(".ui-dialog-titlebar-close", this.parentNode).hide();
    },
    close : function(a, f) {
      localThis.vb04088fb75e4e51fbd11ca6e2f796d05.remove();
      /** @type {null} */
      this.vb04088fb75e4e51fbd11ca6e2f796d05 = null;
    },
    hide : {
      effect : "fadeOut",
      duration : 1e3
    }
  });
  this.vb04088fb75e4e51fbd11ca6e2f796d05 = $dialog;
  this.vddb8abb300fa9afff2e35a209587b3db = new window.ProgressBar.Circle("#loaderContainer", {
    color : "#ffffff",
    trailColor : "#0c6eb7",
    trailWidth : 6,
    strokeWidth : 6,
    easing : "linear",
    duration : 100
  });
}, v13260862a5e36823cb5546b59af48c71.prototype.v135a0b4786fcc3f3d0133d8ca6f556b9 = function() {
  if (this.vb04088fb75e4e51fbd11ca6e2f796d05) {
    try {
      this.vb04088fb75e4e51fbd11ca6e2f796d05.dialog("close");
    } catch (a) {
    }
    $();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.ve73dea9acbf620681c07bd7874aa1b91 = function(a, b) {
  if (_.isNumber(b)) {
    /** @type {number} */
    a.loadSize = b;
  } else {
    if (_.isFunction(a.v1c8360e08276fa426d5eaea5bcc38c52)) {
      a.loadSize = a.v1c8360e08276fa426d5eaea5bcc38c52();
    } else {
      /** @type {number} */
      a.loadSize = 1;
    }
  }
  this.v03f3c658d58e0dd2f3d07c04aa1abfee[a.v8f706334c9f6339322c13ee8fe64b3af] = a;
  this.vabbe19afd235991c70766de7f554b24d.push(a);
  this.v2925fb445866fcc36863247b5767b30b += a.loadSize;
}, v13260862a5e36823cb5546b59af48c71.prototype.vf9b9f28b5f2e28ff88a0d01459fcddeb = function(options) {
  /** @type {string} */
  var hash = options.v22203dd5e6c61d88d23e19bbecf2d6f1 + "_" + options.v0c5b846ccaa2b9b45f0dfeb2b858f004 + "_" + options.row + "_" + options.col + "_" + options.flipX + "_" + options.alpha + "_" + options.v22710cf6916a48e141cc7ad7876eca98.length + "_" + options.vabde4a187e855cd6fb04c0f6619f306f.length;
  /** @type {boolean} */
  var passedQuery = false;
  var canvas = this.v89ad818a689f8b31b7223bf128562425[hash];
  if (!canvas) {
    /** @type {boolean} */
    passedQuery = true;
    var inputRect = options.v4f7143c09e9e52ffbc346a53cbb26a8e();
    if (!inputRect) {
      return;
    }
    /** @type {number} */
    var g = Math.ceil(inputRect.right - inputRect.left);
    /** @type {number} */
    var h = Math.ceil(inputRect.bottom - inputRect.top);
    canvas = $("<canvas width='" + g + "' height='" + h + "'>")[0];
    /** @type {number} */
    canvas.vfa2ffa32f4585f9c06efd9d5fb0f66cb = options.location.x - inputRect.left;
    /** @type {number} */
    canvas.vd013f55ab5e02220232185af65931bc3 = options.location.y - inputRect.top;
  }
  if (passedQuery || options.vbaada8e78bed9c29ff9656ef7d38ee2c) {
    var d = canvas.getContext("2d");
    d.save();
    d.translate(-options.location.x + canvas.vfa2ffa32f4585f9c06efd9d5fb0f66cb, -options.location.y + canvas.vd013f55ab5e02220232185af65931bc3);
    options.draw(d);
    d.restore();
    this.v89ad818a689f8b31b7223bf128562425[hash] = canvas;
  }
  return canvas;
}, v13260862a5e36823cb5546b59af48c71.prototype.vba9bf9a2d711d8406903cc30096535a4 = function(i, value, type, dt, sec, name, lifecycle, context) {
  /** @type {number} */
  var _sliceWidth = value * dt;
  /** @type {number} */
  var _sliceHeight = type * sec;
  var image = $("<canvas width='" + _sliceWidth + "' height='" + _sliceHeight + "'>")[0];
  var _imageFBContext = image.getContext("2d");
  var _imageData = _imageFBContext.getImageData(0, 0, _sliceWidth, _sliceHeight);
  var data = _imageData.data;
  /** @type {number} */
  var k = 0;
  for (; k < context.length; ++k) {
    var info = context[k];
    var resource = this.vd158edc9dfa3e501e772c8418accaf12(info.v8f706334c9f6339322c13ee8fe64b3af);
    var e = this.ve9b1403cfff01386657f404141348827[resource.v8f706334c9f6339322c13ee8fe64b3af];
    if (e == undefined) {
      e = U.getImageData(resource.image);
      this.ve9b1403cfff01386657f404141348827[resource.v8f706334c9f6339322c13ee8fe64b3af] = e;
    }
    var m = e.data;
    /** @type {number} */
    var USUAL_HEIGHT = 255;
    /** @type {number} */
    var targetAxis = 255;
    /** @type {number} */
    var b = 255;
    if (info.color != undefined) {
      var value = info.color;
      /** @type {number} */
      b = value & 255;
      /** @type {number} */
      targetAxis = value >>> 8 & 255;
      /** @type {number} */
      USUAL_HEIGHT = value >>> 16 & 255;
    }
    var x = m.length;
    /** @type {number} */
    var col = 0;
    for (; col < x; col = col + 4) {
      var i = m[col + 3];
      if (i > 0) {
        /** @type {number} */
        var dt = i / 255;
        /** @type {number} */
        var rounded = m[col + 0] * USUAL_HEIGHT / 255;
        /** @type {number} */
        var mean = m[col + 1] * targetAxis / 255;
        /** @type {number} */
        var ymax = m[col + 2] * b / 255;
        data[col + 0] = data[col + 0] + dt * (rounded - data[col + 0]);
        data[col + 1] = data[col + 1] + dt * (mean - data[col + 1]);
        data[col + 2] = data[col + 2] + dt * (ymax - data[col + 2]);
        /** @type {number} */
        data[col + 3] = Math.max(data[col + 3], i);
      }
    }
  }
  _imageFBContext.putImageData(_imageData, 0, 0);
  var d = new vf813c7d84bb4b3941f3712a3a50e9f2e(i, "", value, type, dt, sec, name, lifecycle);
  return d.image = image, this.v03f3c658d58e0dd2f3d07c04aa1abfee[i] = d, this.vabbe19afd235991c70766de7f554b24d.push(d), d;
}, v13260862a5e36823cb5546b59af48c71.prototype.va7230642e1efe5cb8038388896a7ede8 = function() {
  var _this2 = this;
  this.vf2b22e5b1ed4baff7ab652d1267e9852();
  this.vaeb908ed67e23e2effa91c60386513e7(this.vb38ec11025af5f77fed59ec9c02ba631.designerModeEnabled);
  if (this.vf1ee7aab7993b2285a5f2819f03cf847("multiplayer") != undefined) {
    /** @type {boolean} */
    this.vb38ec11025af5f77fed59ec9c02ba631.multiplayer = true;
  }
  this.v54008ea5874183301ab6ea8c55154a31(this.vb38ec11025af5f77fed59ec9c02ba631.multiplayer == 1);
  if (this.vb38ec11025af5f77fed59ec9c02ba631.manualSaveEnabled != undefined && this.vb38ec11025af5f77fed59ec9c02ba631.manualSaveEnabled == 0) {
    $("#Save").remove();
  }
  if (this.vb38ec11025af5f77fed59ec9c02ba631.restartLessonEnabled != undefined && this.vb38ec11025af5f77fed59ec9c02ba631.restartLessonEnabled == 0) {
    $("#RestartLesson").remove();
  }
  var b = this.vb38ec11025af5f77fed59ec9c02ba631.securityToken;
  var i = this.vb38ec11025af5f77fed59ec9c02ba631.hostAddress;
  if (b && i) {
    this.securityToken = b;
    /** @type {string} */
    this.serverURL = U.v9484adc578b76127fbcc9efdcef316d7(i) + "/";
    /** @type {string} */
    var api_get_url = "https://" + this.serverURL + "backend/handshake/" + this.securityToken;
    $.get(api_get_url, function(b) {
      _this2.vb305e380a45dc9eee92670cabbee663d(b);
    });
  } else {
    if (this.designerModeEnabled) {
      setTimeout(function() {
        var state = _this2.v4e4196bb0c0f02581b3ed42ade5593d0();
        var oldInFunctionBody = _this2.v39aed12c67d8bcdc1ed07d14cddfd7ff();
        state.v938115dd55ae244bd4dd6d1aa904c4a9 = oldInFunctionBody;
        _this2.state = state;
        state.settings.LessonProjectID = _this2.vabcd33e3b9c74fa33e39751d0b5bb0c4("LessonProjectID");
        state.init();
        _this2.setState(state);
      }, 1);
    } else {
      $("body").empty();
    }
  }
  setInterval(function() {
    app.update();
  }, this.v6009dd16c5c8cdf90ca16f59b40a0c86);
  setInterval(function() {
    app.ve3c7f221fe8898c7a9709e7ec8581f17();
  }, 2e3);
  setInterval(function() {
    app.v9b195a675358eeeb42bedb59de1fec9d();
  }, Math.max(5, Math.floor(Number(this.vb38ec11025af5f77fed59ec9c02ba631.autosaveInterval))) * 1e3);
}, v13260862a5e36823cb5546b59af48c71.prototype.vb305e380a45dc9eee92670cabbee663d = function(a) {
  var QuickBase = this;
  if (a == "invalid token") {
    throw new Error("Handshake Error: Invalid Token");
  }
  /** @type {string} */
  this.v6f632cd35a0abd3341ffe233a1c9869f = a;
  /** @type {string} */
  var api_get_url = "https://" + this.serverURL + "backend/readEx/" + this.v6f632cd35a0abd3341ffe233a1c9869f;
  $.get(api_get_url, function(val) {
    QuickBase.vbf3e9361349c1176f0122b94cf941bfb(val);
  });
}, v13260862a5e36823cb5546b59af48c71.prototype.vbf3e9361349c1176f0122b94cf941bfb = function(val) {
  var text = this.vdb542f5964b693120cdccb4395cb8dbe(val);
  this.setState(text);
  signalLoadCompleteToLMS();
}, v13260862a5e36823cb5546b59af48c71.prototype.v1d8e13eaa3dbf661d08c7876bee2a701 = function() {
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("Alert", "../VBXF/sim/Alert.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("FinalAlert", "../VBXF/sim/FinalAlert.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmRunTo", "../VBXF/sim/frmRunTo.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmScoreboard", "../VBXF/sim/frmScoreboard.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmPlayerList", "../VBXF/sim/frmPlayerList.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSettings", "../VBXF/sim/frmSettings.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmOpenLocal", "../VBXF/sim/frmOpenLocal.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSaveLocal", "../VBXF/sim/frmSaveLocal.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmExamineState", "../VBXF/sim/frmExamineState.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmLicenseInfo", "../VBXF/sim/frmLicenseInfo.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmTestSolution", "../VBXF/sim/frmTestSolution.html"));
}, v13260862a5e36823cb5546b59af48c71.prototype.vc8cc06a7040ac6611a967371d4ca4a2d = function() {
  return this.vb38ec11025af5f77fed59ec9c02ba631.resourceRoot;
}, v13260862a5e36823cb5546b59af48c71.prototype.v95f91532f5d26784e6a15cd56a90103d = function(strip1) {
  return this.vb38ec11025af5f77fed59ec9c02ba631.resourceRoot + strip1;
}, v13260862a5e36823cb5546b59af48c71.prototype.v359abcfffa6d67a9b9f67e93bef327c7 = function(where) {
  if (this.state) {
    /** @type {number} */
    this.state.v6de6ecc0b365d3e59f96854a314535b5 = where;
    /** @type {boolean} */
    this.v49dac33e46e5dbe2ade373b2b06cc94e = true;
    if (this.multiplayer) {
      $("#consensus-speed-text").hide();
      $("#consensus-speed-vote-cast-text").show();
    }
    this.vbee376c0bae5a5bb92840e65cd0a702e();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.ve5c9da9ef00311dc94fea33324bd0a32 = function() {
  this.v359abcfffa6d67a9b9f67e93bef327c7(this.vea7e3d3724eaf22d249e12deb4a1edfd.slider("option", "value"));
}, v13260862a5e36823cb5546b59af48c71.prototype.v2de98680410eb26017a820cf9cdafd86 = function() {
  /** @type {number} */
  var a = 0;
  return this.multiplayer ? a = this.speeds[this.state.vc8c559fb65c82f3cee4ed870b61903ef] / A.vfe1c4eaec8ec40f848f9772196c532d3().vff8ca6b02bee12b81f9c60bb2cf6b279 : a = this.speeds[this.state.v6de6ecc0b365d3e59f96854a314535b5], a;
}, v13260862a5e36823cb5546b59af48c71.prototype.v6987735d07d8e15a18022c1d65c8abde = function(rawPads, i) {
  var roomName = i.value;
  if (this.v3b8b854b52da3c49b1c643fd4eb8d4ec = roomName, this.v486b6b76b55b6b83ee563fda8c618680 > 0) {
    var container = $("#sim-view");
    var diff = new Point($(container).scrollLeft() + $(container).width() / 2, $(container).scrollTop() + $(container).height() / 2);
    var dist = this.v486b6b76b55b6b83ee563fda8c618680;
    var distance = this.v36170dbc1017df1e0586cc2112e62e75;
    var labelPos = this.ve7dbdf95d53888d29cad98f02f3e380b();
    labelPos[0] = roomName;
    this.vb4c063c664cc1aff2ab149bdff726e5c();
    var hBottomRight = new Point(diff.x * (this.v486b6b76b55b6b83ee563fda8c618680 / dist), diff.y * (this.v36170dbc1017df1e0586cc2112e62e75 / distance));
    var offset = new Point(hBottomRight.x - .5 * $(container).width(), hBottomRight.y - .5 * $(container).height());
    $(container).scrollLeft(offset.x);
    $(container).scrollTop(offset.y);
    labelPos[1] = offset.x;
    labelPos[2] = offset.y;
  }
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.vd87b04da8df74ea42ac00669b0d9c5ab = function(event) {
  var a = this.ve7dbdf95d53888d29cad98f02f3e380b();
  a[1] = $(event.currentTarget).scrollLeft();
  a[2] = $(event.currentTarget).scrollTop();
}, v13260862a5e36823cb5546b59af48c71.prototype.ve7dbdf95d53888d29cad98f02f3e380b = function() {
  /** @type {string} */
  var name = "";
  if (this.state) {
    if (this.state.vaf2a576127494a53d0e079f0ed12d0e1) {
      /** @type {string} */
      name = name + (this.state.vaf2a576127494a53d0e079f0ed12d0e1.toString() + "_");
    }
    /** @type {string} */
    name = name + this.state.vb9161f93ce4eb651c0a1a206c43a6c60;
  }
  var a = this.vd8ed03237bb0e85e9dbde8cfa508f909[name];
  if (a == undefined) {
    if (a = [this.vacd138095667b40524e06d1f21f901c3, 0, 0], this.state) {
      var c = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (c) {
        var xhair = c.v085744687b2ef8b1bd8b69dfcb337dac();
        vf6ae569ac07d736e839c7757419193af = this.vacd138095667b40524e06d1f21f901c3;
        /** @type {!Array} */
        a = [vf6ae569ac07d736e839c7757419193af, 0, 0];
        /** @type {number} */
        a[1] = (xhair.x * this.v40b61d31168505a8bd84664bb8816db9[vf6ae569ac07d736e839c7757419193af] - $("#sim-view").width()) / 2;
        /** @type {number} */
        a[2] = (xhair.y * this.v40b61d31168505a8bd84664bb8816db9[vf6ae569ac07d736e839c7757419193af] - $("#sim-view").height()) / 2;
      }
    }
    /** @type {!Array} */
    this.vd8ed03237bb0e85e9dbde8cfa508f909[name] = a;
  }
  return a;
}, v13260862a5e36823cb5546b59af48c71.prototype.vec7d148b370829a3ba16b1dbd0ce1366 = function() {
  /** @type {string} */
  var value = "";
  if (this.state) {
    value = this.state.vb9161f93ce4eb651c0a1a206c43a6c60;
  }
  var path = this.vb9ed3705e6293aca37292aa84a0abf6f[value];
  return path == undefined && (path = {}, this.vb9ed3705e6293aca37292aa84a0abf6f[value] = path), path;
}, v13260862a5e36823cb5546b59af48c71.prototype.v38333ca1319d3e2de0bb07384b1ed745 = function() {
  if (this.running) {
    this.v36c4192050cb2f5f8163dc557303ee61();
  } else {
    this.startTime();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.startTime = function() {
  /** @type {boolean} */
  this.running = true;
  this.v396213dc48065a51be6107810901928f.addClass("start-stop-button-stop");
  this.v396213dc48065a51be6107810901928f.removeClass("start-stop-button-start");
  this.ve89e61de64c54a5f988c75c2050b0569.text(U.vc0e6c88f8413e92781b652ae2786391a("Stop"));
}, v13260862a5e36823cb5546b59af48c71.prototype.v36c4192050cb2f5f8163dc557303ee61 = function() {
  /** @type {boolean} */
  this.running = false;
  this.v396213dc48065a51be6107810901928f.addClass("start-stop-button-start");
  this.v396213dc48065a51be6107810901928f.removeClass("start-stop-button-stop");
  this.ve89e61de64c54a5f988c75c2050b0569.text(U.vc0e6c88f8413e92781b652ae2786391a("Start"));
  if (this.v9e058b496ab36ab35ead361b491d7c68 > 0) {
    this.vbee376c0bae5a5bb92840e65cd0a702e();
    /** @type {number} */
    this.v9e058b496ab36ab35ead361b491d7c68 = 0;
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vcbac2f4e4dc75d218d2e25687778d698 = function() {
  var $innerblock = new frmRunTo;
  $innerblock.show();
}, v13260862a5e36823cb5546b59af48c71.prototype.v98970b71ddad9094c8401e0604af056a = function() {
  this.state.vb3670ede943a585f59501c027b504015 = KMDate.v14cbf0b8c1f93e62dd191db1badd576b;
}, v13260862a5e36823cb5546b59af48c71.prototype.v27c3f3572e66d1e83d49936047773b90 = function(name) {
  return this.views.push(name), name;
}, v13260862a5e36823cb5546b59af48c71.prototype.getView = function(name) {
  /** @type {number} */
  var i = 0;
  for (; i < this.views.length; ++i) {
    var view = this.views[i];
    if (view.name == name) {
      return view;
    }
  }
  return null;
}, v13260862a5e36823cb5546b59af48c71.prototype.v9d06c44dc56ee26df3c45b6b0c7ee666 = function() {
  return this.state != null ? this.getView(this.state.vb9161f93ce4eb651c0a1a206c43a6c60) : null;
}, v13260862a5e36823cb5546b59af48c71.prototype.v4e7d3c69f1fd7d630bd4d4d35ccd7171 = function() {
  var scrollValues = this.ve7dbdf95d53888d29cad98f02f3e380b();
  if (this.v3b8b854b52da3c49b1c643fd4eb8d4ec != scrollValues[0]) {
    this.v3b8b854b52da3c49b1c643fd4eb8d4ec = scrollValues[0];
    this.v9d802e8d7c41edce2da401871368fd22.slider("option", "value", scrollValues[0]);
  }
  var $WINDOW = $("#sim-view");
  $WINDOW.scrollLeft(scrollValues[1]);
  $WINDOW.scrollTop(scrollValues[2]);
}, v13260862a5e36823cb5546b59af48c71.prototype.v25b05e5b2b3546cf034093b9c3147356 = function() {
  var QuickBase = this;
  var $this = $("#overlay-container");
  $this.find(".btn-group").on("show.bs.dropdown", function() {
    $this.css("zIndex", Math.max(3, U.v529b1422399ef1e14cbaa5634112b80f(".ui-dialog")) + 1);
  });
  $this.find(".btn-group").on("hidden.bs.dropdown", function() {
    $this.css("zIndex", 100);
  });
  var menu = $("#overlay-menu");
  menu.empty();
  var lastbc = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
  if ($this.toggle(lastbc != null && lastbc.overlays.length > 0), lastbc != null) {
    var declarations2hash = this.vec7d148b370829a3ba16b1dbd0ce1366();
    /** @type {number} */
    var i = 0;
    for (; i < lastbc.overlays.length; ++i) {
      var data = lastbc.overlays[i];
      var container = $("<li>");
      var item = $("<a href='#'>");
      /**
       * @param {!Object} $li
       * @param {string} val
       * @return {undefined}
       */
      var add = function($li, val) {
        $li.click(function() {
          QuickBase.va01cf9798e06c69fc501334136af3d22(val);
        });
      };
      item.text(" " + data.name);
      if (declarations2hash[data.id]) {
        $("<i class='fa fa-eye'></i>").prependTo(item);
      } else {
        $("<i class='fa fa-eye-slash'></i>").prependTo(item);
      }
      add(item, data.id);
      item.appendTo(container);
      container.appendTo(menu);
    }
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vddfec61fecbec52e46fed3c489a82112 = function(_search_text) {
  this.ve8d67a23810b90b6d9b13abd2c10391c(_search_text, true);
}, v13260862a5e36823cb5546b59af48c71.prototype.vd5c5c2f43ea6b178318bbda68a9cb546 = function(_search_text) {
  this.ve8d67a23810b90b6d9b13abd2c10391c(_search_text, false);
}, v13260862a5e36823cb5546b59af48c71.prototype.va1fc86895d39251f45e1176689c3ffb0 = function(component) {
  var hooksByComponent = this.vec7d148b370829a3ba16b1dbd0ce1366();
  return this.vf643e528a9b84e13508c09352bce0ee1 == 0 && hooksByComponent[component] == 1;
}, v13260862a5e36823cb5546b59af48c71.prototype.ve8d67a23810b90b6d9b13abd2c10391c = function(url, disabled) {
  var toolbar_disabledURLs = this.vec7d148b370829a3ba16b1dbd0ce1366();
  /** @type {boolean} */
  var check_select = toolbar_disabledURLs[url] != disabled;
  /** @type {boolean} */
  toolbar_disabledURLs[url] = disabled;
  /** @type {boolean} */
  this.vcc7062cb26b1bd0c46a2102a8506d4c4 = true;
  this.v25b05e5b2b3546cf034093b9c3147356();
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.va01cf9798e06c69fc501334136af3d22 = function(obj) {
  this.ve8d67a23810b90b6d9b13abd2c10391c(obj, !this.va1fc86895d39251f45e1176689c3ffb0(obj));
}, v13260862a5e36823cb5546b59af48c71.prototype.v3f26dfe56d3271901b563f6cf2b6aa65 = function() {
  return this.vf643e528a9b84e13508c09352bce0ee1;
}, v13260862a5e36823cb5546b59af48c71.prototype.vacb431f43b7a717920949ccfe30285fc = function(a) {
  /** @type {!Object} */
  this.vf643e528a9b84e13508c09352bce0ee1 = a;
}, v13260862a5e36823cb5546b59af48c71.prototype.vdb06d27d9f084ca2d555cf8cc6954346 = function(subComponent) {
  return this.va1fc86895d39251f45e1176689c3ffb0(subComponent);
}, v13260862a5e36823cb5546b59af48c71.prototype.v2efb546eeb41876c2e1ca3a963171e9d = function(type) {
  if (this.v9d06c44dc56ee26df3c45b6b0c7ee666()) {
    this.v9d06c44dc56ee26df3c45b6b0c7ee666().vd6b0d67aab8b6853508390473a8d6743();
  }
  this.state.vb9161f93ce4eb651c0a1a206c43a6c60 = type.name;
  this.v25b05e5b2b3546cf034093b9c3147356();
  type.v45ef6a50326edc3753b5f6c5d925763c();
  this.v4e7d3c69f1fd7d630bd4d4d35ccd7171();
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.v340558ffd115b57bc46b4fc03332c5c3 = function(name) {
  this.v2efb546eeb41876c2e1ca3a963171e9d(this.getView(name));
}, v13260862a5e36823cb5546b59af48c71.prototype.v9bc3e64a74aadf3ac50801f371aca44d = function() {
  /** @type {!Array} */
  var children = [];
  /** @type {number} */
  var i = 0;
  for (; i < views.length; ++i) {
    children.push(views[i]);
  }
  return children;
}, v13260862a5e36823cb5546b59af48c71.prototype.vb4c063c664cc1aff2ab149bdff726e5c = function() {
  var b = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
  if (b != null) {
    var len = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    var config = b.v085744687b2ef8b1bd8b69dfcb337dac().clone();
    if (config.x = Math.floor(config.x * len), config.y = Math.floor(config.y * len), this.v486b6b76b55b6b83ee563fda8c618680 != config.x || this.v36170dbc1017df1e0586cc2112e62e75 != config.y) {
      /** @type {number} */
      this.v486b6b76b55b6b83ee563fda8c618680 = config.x;
      /** @type {number} */
      this.v36170dbc1017df1e0586cc2112e62e75 = config.y;
      var $blockSelector = $("#sim-view-container");
      $blockSelector.css({
        width : config.x,
        height : config.y
      });
      this.canvas.attr({
        width : config.x,
        height : config.y
      });
      this.canvas.css({
        width : config.x,
        height : config.y
      });
      /** @type {boolean} */
      this.vcc7062cb26b1bd0c46a2102a8506d4c4 = true;
    }
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vf2c37d2d897f9a1a19d9f17637f472a7 = function() {
  return U.vc0e6c88f8413e92781b652ae2786391a("Cash:");
}, v13260862a5e36823cb5546b59af48c71.prototype.setState = function(s) {
  if (s) {
    if (this.vb38ec11025af5f77fed59ec9c02ba631.sessionToken != undefined && s.v938115dd55ae244bd4dd6d1aa904c4a9.sessionToken == "") {
      s.v938115dd55ae244bd4dd6d1aa904c4a9.sessionToken = this.vb38ec11025af5f77fed59ec9c02ba631.sessionToken;
    }
    if (this.vb38ec11025af5f77fed59ec9c02ba631.playerName != undefined) {
      s.v938115dd55ae244bd4dd6d1aa904c4a9.playerName = this.vb38ec11025af5f77fed59ec9c02ba631.playerName;
    }
  }
  /** @type {!Object} */
  this.state = s;
  /** @type {boolean} */
  this.va424747fc90ab402a8f56fb01d3a5e5f = true;
  /** @type {boolean} */
  this.v49dac33e46e5dbe2ade373b2b06cc94e = true;
  this.v25b05e5b2b3546cf034093b9c3147356();
  this.v4e7d3c69f1fd7d630bd4d4d35ccd7171();
  this.vbee376c0bae5a5bb92840e65cd0a702e();
  if (this.multiplayer) {
    this.ve0b94fa92cf7d0e5d5996a0ddb246147();
  }
  $(".omit_" + this.vabcd33e3b9c74fa33e39751d0b5bb0c4("product")).remove();
  this.v135a0b4786fcc3f3d0133d8ca6f556b9();
}, v13260862a5e36823cb5546b59af48c71.prototype.v78a0d9c392e941b31d879e634e670a93 = function(headsetType, bone_in) {
  this.v1282fa4bc8bedeaaf5dc2e076f512189[headsetType].push(bone_in);
}, v13260862a5e36823cb5546b59af48c71.prototype.v47b44c6d075887ab9a3527111f5d02f0 = function(mark, s) {
  this.v1282fa4bc8bedeaaf5dc2e076f512189[mark].vf81b17578abb97a8de755cddbf7f45a9(s);
}, v13260862a5e36823cb5546b59af48c71.prototype.vfb63fa4889c9631c1ff761da711e097a = function(permission_key) {
  var crossfilterable_layers = this.v1282fa4bc8bedeaaf5dc2e076f512189[permission_key].clone();
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < crossfilterable_layers.length; ++layer_i) {
    var layer = crossfilterable_layers[layer_i];
    layer();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.update = function() {
  /** @type {boolean} */
  this.v8c18e46eb5d590f9749ab5d58197cae5 = true;
  /** @type {boolean} */
  this.v2fc3f8648d5e698da277680e5470405a = false;
  try {
    if (this.state != null && this.running) {
      /** @type {number} */
      var miny = (new Date).getTime();
      var a = this.v2de98680410eb26017a820cf9cdafd86();
      if (a >= 1) {
        this.v1fa1413271e3e0e1ded56b84c99ed84a = a;
      } else {
        if (this.v1fa1413271e3e0e1ded56b84c99ed84a >= 1) {
          this.v1fa1413271e3e0e1ded56b84c99ed84a = a;
        } else {
          this.v1fa1413271e3e0e1ded56b84c99ed84a += a;
        }
      }
      /** @type {boolean} */
      var d = true;
      /** @type {number} */
      var e = 0;
      for (; e < Math.floor(this.v1fa1413271e3e0e1ded56b84c99ed84a); ++e) {
        if (!this.running) {
          break;
        }
        /** @type {number} */
        var h = (new Date).getTime() - miny;
        if (h > .8 * this.v6009dd16c5c8cdf90ca16f59b40a0c86) {
          /** @type {boolean} */
          d = false;
          break;
        }
        if (this.state.step(), this.v310226a67340f24ae532acd9e8b888c6(), this.state.now.getTime() > this.state.vb3670ede943a585f59501c027b504015.getTime()) {
          this.v36c4192050cb2f5f8163dc557303ee61();
          this.state.vb3670ede943a585f59501c027b504015 = KMDate.v14cbf0b8c1f93e62dd191db1badd576b;
          break;
        }
        if (this.state.settings.v053081410917e7246c7ca34a1f6eda56 != null && this.state.now.getTime() > this.state.settings.v053081410917e7246c7ca34a1f6eda56.getTime()) {
          this.v36c4192050cb2f5f8163dc557303ee61();
          this.v0b096efd60c1e6fd23a101d35f55d6e0();
          break;
        }
      }
      if (d || this.v9e058b496ab36ab35ead361b491d7c68 >= this.v793296b910f0342dcfeaac3870c72b98 || this.v9e058b496ab36ab35ead361b491d7c68 * this.v6009dd16c5c8cdf90ca16f59b40a0c86 > this.ve7f0cfe75faddc7e19845e9d80c05c09 * 10) {
        /** @type {number} */
        var g = (new Date).getTime();
        /** @type {number} */
        this.v9e058b496ab36ab35ead361b491d7c68 = 0;
        this.vbee376c0bae5a5bb92840e65cd0a702e();
        /** @type {number} */
        this.ve7f0cfe75faddc7e19845e9d80c05c09 = (new Date).getTime() - g;
        this.v4e8a77404b23deacd115b66026981dd6.html(U.vc0e6c88f8413e92781b652ae2786391a(" [rt={0} ms]", this.ve7f0cfe75faddc7e19845e9d80c05c09));
        this.v5d9e2f6fe6b6e17c991d4fe51f08abb8.css("background-color", "#CCFDCC");
      } else {
        var now = this.state.now;
        this.v9e058b496ab36ab35ead361b491d7c68++;
        this.v4e8a77404b23deacd115b66026981dd6.html(this.v4e8a77404b23deacd115b66026981dd6.html() + "+");
        this.v7f24efd030d9a5f8e807999fc3812ff4.html(now.format(this.state.v9e62738cf0f22f7d2b39eab0c266bcee) + " " + now.format("ddd MMM dd yyyy"));
        this.v5d9e2f6fe6b6e17c991d4fe51f08abb8.css("background-color", "#FF9999");
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
  if (this.v2fc3f8648d5e698da277680e5470405a = true, this.v8c18e46eb5d590f9749ab5d58197cae5 = false, this.designerModeEnabled) {
    var j = this.vf12d3fc22392c73b4c80b18fa471aa54;
    /** @type {number} */
    var maxAge = 1e3 / ((this.now = new Date) - this.v38fe5f311cb99659e1d2b639902a04b7);
    if (!_.isNaN(maxAge) && _.isFinite(maxAge)) {
      /** @type {number} */
      var whiteRating = (maxAge - this.vf12d3fc22392c73b4c80b18fa471aa54) / this.vb0a9834b44cea4bfc6c52bc276195d60;
      if (!_.isNaN(whiteRating)) {
        this.vf12d3fc22392c73b4c80b18fa471aa54 += whiteRating;
        /** @type {!Date} */
        this.v38fe5f311cb99659e1d2b639902a04b7 = this.now;
      }
    }
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v21a9d69bc839cf8aa2767723afd84ad7 = function(a_big_year) {
  /** @type {boolean} */
  this.running = true;
  /** @type {boolean} */
  this.v8c18e46eb5d590f9749ab5d58197cae5 = true;
  for (; this.state.now.getTime() <= a_big_year.getTime();) {
    this.state.step();
    this.v310226a67340f24ae532acd9e8b888c6();
  }
  this.v36c4192050cb2f5f8163dc557303ee61();
  this.state.vb3670ede943a585f59501c027b504015 = KMDate.v14cbf0b8c1f93e62dd191db1badd576b;
  /** @type {boolean} */
  this.running = false;
  /** @type {boolean} */
  this.v8c18e46eb5d590f9749ab5d58197cae5 = false;
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.v310226a67340f24ae532acd9e8b888c6 = function() {
  if (this.vdb14e33b6d4c53416b1fcf7ffca18e91.length > 0) {
    /** @type {boolean} */
    this.v8c18e46eb5d590f9749ab5d58197cae5 = false;
    _.forEach(this.vdb14e33b6d4c53416b1fcf7ffca18e91, function(realPrint) {
      realPrint.call();
    });
    this.vdb14e33b6d4c53416b1fcf7ffca18e91.ve8d2c88ded06dcb91c8f0d5b55dd3044();
    /** @type {boolean} */
    this.v8c18e46eb5d590f9749ab5d58197cae5 = true;
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vbee376c0bae5a5bb92840e65cd0a702e = function() {
  if (this.v858e48df06673105fb682150a58faa3a) {
    return;
  }
  if (this.v858e48df06673105fb682150a58faa3a = true, this.state != null) {
    if (this.va424747fc90ab402a8f56fb01d3a5e5f) {
      /** @type {boolean} */
      this.va424747fc90ab402a8f56fb01d3a5e5f = false;
      var styleTags = this.state.v453a55e59fb4133da0172c66e3dd0483;
      if (this.state.vaf2a576127494a53d0e079f0ed12d0e1 == null && this.ve75b063959bfe5bb931e2607bde4d7f1.indexOf(this.state.vb9161f93ce4eb651c0a1a206c43a6c60) == -1) {
        if (this.ve75b063959bfe5bb931e2607bde4d7f1.length > 0) {
          this.v340558ffd115b57bc46b4fc03332c5c3(this.ve75b063959bfe5bb931e2607bde4d7f1[0]);
        } else {
          console.log("Current view '" + this.state.vb9161f93ce4eb651c0a1a206c43a6c60 + "' is not marked as 'noEntitySafe'.  You should really have at least one 'noEntitySafeView'.");
        }
      }
      $("#uiViews").empty();
      /** @type {number} */
      var d = 0;
      /** @type {number} */
      var st = 0;
      for (; st < this.views.length; ++st) {
        var color = this.views[st];
        var h = color.v15913e291016542bf11cb1fcafc28519();
        if (h) {
          this.vdf04180d1244b956782644fb46b068b9("uiViews", d - 1, color.name, color.name);
          if (this.ve75b063959bfe5bb931e2607bde4d7f1.indexOf(color.name) == -1 && (this.state.vaf2a576127494a53d0e079f0ed12d0e1 == null || styleTags.length <= 0)) {
            this.v91c3decadf3f0cdd45ece53d4a36d8d0("uiViews", d);
          }
          ++d;
        }
      }
      if (styleTags.length > 0) {
        /** @type {!Array} */
        var subtypes = [];
        /** @type {number} */
        st = 0;
        for (; st < styleTags.length; ++st) {
          var i = styleTags[st];
          if (i.v2020540b63a842879572ac66e3edaad8() || _.isFunction(i.v6db42bb8080902e28813c2fdafd77266) && i.v6db42bb8080902e28813c2fdafd77266()) {
            /** @type {boolean} */
            h = true;
            if (_.isFunction(i.v15913e291016542bf11cb1fcafc28519)) {
              h = i.v15913e291016542bf11cb1fcafc28519();
            }
            if (h) {
              subtypes.push({
                e : i,
                i : st
              });
            }
          }
        }
        if (subtypes.length > 0) {
          this.v10416d6bfdd23fe44fdf51d21c7f4ed6("uiViews", d - 1);
          ++d;
          /** @type {number} */
          st = 0;
          for (; st < subtypes.length; ++st) {
            var next = subtypes[st];
            i = next.e;
            this.vdf04180d1244b956782644fb46b068b9("uiViews", d - 1, "changeEntity_" + next.i, i.toString(), i == this.state.vaf2a576127494a53d0e079f0ed12d0e1);
            if (!i.v2020540b63a842879572ac66e3edaad8() && _.isFunction(i.v6db42bb8080902e28813c2fdafd77266) && i.v6db42bb8080902e28813c2fdafd77266()) {
              $("#uiViews").children().last().addClass("retiredEntity");
            }
            ++d;
          }
        }
      }
      var i;
      for (i in this.state.actions) {
        if (this.state.actions.hasOwnProperty(i)) {
          var iterator = this.state.actions[i];
          var tmp = this.state.vaf2a576127494a53d0e079f0ed12d0e1;
          if (tmp == null) {
            if (this.v501600104ab2cdad11634f24af2c1269.indexOf(i) == -1) {
              /** @type {boolean} */
              iterator = false;
            }
          } else {
            if (_.isFunction(tmp.v2020540b63a842879572ac66e3edaad8)) {
              if (tmp.v2020540b63a842879572ac66e3edaad8()) {
                if (_.isFunction(tmp.v381479eac5e39d142b0586597f375ace) && !tmp.v381479eac5e39d142b0586597f375ace()) {
                  /** @type {boolean} */
                  iterator = false;
                }
              } else {
                /** @type {boolean} */
                iterator = false;
              }
            }
          }
          d = this.vdefea1bc2c554d82df75df6a206f1c10("uiActions", i);
          if (d >= 0) {
            this.v7903f4528f0a3a82acdb98c32102bde7("uiActions", d, iterator);
          }
        }
      }
      for (i in this.state.vf668d872e21e06a0572f88c61501c532) {
        if (this.state.vf668d872e21e06a0572f88c61501c532.hasOwnProperty(i)) {
          iterator = this.state.vf668d872e21e06a0572f88c61501c532[i];
          tmp = this.state.vaf2a576127494a53d0e079f0ed12d0e1;
          if (tmp == null) {
            if (this.vf1f079b203e52890ec1752d01442a621.indexOf(i) == -1) {
              /** @type {boolean} */
              iterator = false;
            }
          } else {
            if (_.isFunction(tmp.v2020540b63a842879572ac66e3edaad8) && !tmp.v2020540b63a842879572ac66e3edaad8()) {
              /** @type {boolean} */
              iterator = false;
            }
          }
          d = this.vdefea1bc2c554d82df75df6a206f1c10("uiReports", i);
          if (d >= 0) {
            this.v7903f4528f0a3a82acdb98c32102bde7("uiReports", d, iterator);
          }
        }
      }
    }
    color = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
    if (color != null) {
      if (this.vb4c063c664cc1aff2ab149bdff726e5c(), this.v5f83a0aed041f58a990c304551300e85 = this.renderView(this.context, color), this.v49dac33e46e5dbe2ade373b2b06cc94e) {
        /** @type {boolean} */
        this.v49dac33e46e5dbe2ade373b2b06cc94e = false;
        var oldPc = this.vea7e3d3724eaf22d249e12deb4a1edfd.slider("option", "value");
        if (oldPc != this.state.v6de6ecc0b365d3e59f96854a314535b5) {
          this.vea7e3d3724eaf22d249e12deb4a1edfd.slider("option", "value", this.state.v6de6ecc0b365d3e59f96854a314535b5);
        }
        $("#speed-value").html(this.vf6442652e6adf0d5d860f7078c90842f[this.state.v6de6ecc0b365d3e59f96854a314535b5]);
      }
      $("#critical-resource-key").html(this.vf2c37d2d897f9a1a19d9f17637f472a7());
      $("#critical-resource-value").html(this.state.v00a512e16e206d1d6c8a4b6e52142fb7());
      var now = this.state.now;
      this.v7f24efd030d9a5f8e807999fc3812ff4.html(now.format(this.state.v9e62738cf0f22f7d2b39eab0c266bcee) + " " + now.format("ddd MMM dd yyyy"));
    }
  } else {
    this.v7f24efd030d9a5f8e807999fc3812ff4.html("");
  }
  /** @type {boolean} */
  this.v858e48df06673105fb682150a58faa3a = false;
}, v13260862a5e36823cb5546b59af48c71.prototype.ve3c7f221fe8898c7a9709e7ec8581f17 = function() {
  try {
    if (this.state && this.vb38ec11025af5f77fed59ec9c02ba631.goalEvaluationEnabled == 1) {
      var level = this.state.settings.LessonProjectID;
      var adjustedLevel = this.evaluateGoal(level);
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
  $("#fps-value").html(this.vf12d3fc22392c73b4c80b18fa471aa54.toFixed(1));
}, v13260862a5e36823cb5546b59af48c71.prototype.v9b195a675358eeeb42bedb59de1fec9d = function() {
  try {
    if (this.vb38ec11025af5f77fed59ec9c02ba631.autoSaveEnabled == 1 && this.state) {
      if (this.v58df98fb9e1d917fe19718dff7e29a65 > 0) {
        return;
      }
      this.v4680cebb2ea66de6102c02e228425334();
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.renderView = function(ctx, name, data) {
  if (ctx.save(), !data) {
    ctx.clearRect(0, 0, this.v486b6b76b55b6b83ee563fda8c618680, this.v36170dbc1017df1e0586cc2112e62e75);
    var scaleMax = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    ctx.scale(scaleMax, scaleMax);
  }
  var c = this.imageAtlas.vff5c2344f167d57b7970a504a72f3a80(name.v0c5b846ccaa2b9b45f0dfeb2b858f004);
  if (c) {
    this.imageAtlas.drawImage(ctx, c, 0, 0, 0, 0);
  } else {
    c = this.vd158edc9dfa3e501e772c8418accaf12(name.v0c5b846ccaa2b9b45f0dfeb2b858f004);
    if (c) {
      ctx.drawImage(c.image, 0, 0);
    }
  }
  var e = name.va2d78265764a9d326f92455033ffb2a5();
  return this.v7b5e9700c923ca5e83fbe7c573274fa2(ctx, e), ctx.restore(), this.vcc7062cb26b1bd0c46a2102a8506d4c4 = false, e;
}, v13260862a5e36823cb5546b59af48c71.prototype.v7b5e9700c923ca5e83fbe7c573274fa2 = function(ctx, e) {
  /** @type {null} */
  var b = null;
  /** @type {number} */
  var i = 0;
  for (; i < e.length; ++i) {
    if (b = e[i], b.cache && this.va6756a9fbedc852e5e0c575e757acb39) {
      var o = this.vf9b9f28b5f2e28ff88a0d01459fcddeb(b);
      if (o) {
        ctx.drawImage(o, Math.floor(b.location.x - o.vfa2ffa32f4585f9c06efd9d5fb0f66cb), Math.floor(b.location.y - o.vd013f55ab5e02220232185af65931bc3));
      }
    } else {
      b.draw(ctx);
    }
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v559f9caa6b11ab158a557efde93704db = function(message) {
  this.v36c4192050cb2f5f8163dc557303ee61();
  this.v98970b71ddad9094c8401e0604af056a();
  Alert.show(message, this.v7cc89c84ffe803bcbc1b9c0c03311608);
}, v13260862a5e36823cb5546b59af48c71.prototype.v54f9c1e736ab8913a0eddc2aea31b21e = function(d) {
  var browserStrings = this.v5f83a0aed041f58a990c304551300e85.clone();
  if (browserStrings != null) {
    /** @type {number} */
    var b = browserStrings.length - 1;
    for (; b >= 0; --b) {
      var momentified = browserStrings[b].v54f9c1e736ab8913a0eddc2aea31b21e(d);
      if (momentified) {
        return momentified;
      }
    }
  }
  return null;
}, v13260862a5e36823cb5546b59af48c71.prototype.veca42d9456fb9972a373e3ce21d20b60 = function(p0) {
  var p1 = new Point(this.v6d3e99637ba057ad515e2d1533654047.x - p0.v0f660c48b7d2f092a53a1b65a9039e39, this.v6d3e99637ba057ad515e2d1533654047.y - p0.v270a96ae2b77c18fe63278ebb0f7e6ee);
  return p1.getLength() <= 10;
}, v13260862a5e36823cb5546b59af48c71.prototype.v1548eef244bda1da0d2e4b3453e25386 = function(event) {
  try {
    var evt = event.originalEvent;
    var touch = evt.changedTouches[0];
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.pageX = Math.floor(touch.pageX), event.pageY = Math.floor(touch.pageY), event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(touch.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(touch.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      var b = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      this.v6d3e99637ba057ad515e2d1533654047 = new Point(event.v0f660c48b7d2f092a53a1b65a9039e39, event.v270a96ae2b77c18fe63278ebb0f7e6ee);
      if (b) {
        b.v1548eef244bda1da0d2e4b3453e25386(event);
      }
      var tiUtil = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (tiUtil != null) {
        tiUtil.v1548eef244bda1da0d2e4b3453e25386(event, b);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vd943b00af6807a4ecd577b69c54cd639 = function(event) {
  try {
    var evt = event.originalEvent;
    var touch = evt.changedTouches[0];
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.pageX = Math.floor(touch.pageX), event.pageY = Math.floor(touch.pageY), event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(touch.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(touch.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      var b = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      if (b) {
        if (this.v193bb926ec99c1f36544962a1d44789e != null) {
          if (this.v193bb926ec99c1f36544962a1d44789e.v1917f14965df083150b1374c9a97c9d7 != b.v1917f14965df083150b1374c9a97c9d7) {
            this.v193bb926ec99c1f36544962a1d44789e.v49699fc30ba5b5829b8478e248d8838c(event);
          }
        } else {
          b.v12b5d29d2aab1c5e9bc8649ece6d1b90(event);
        }
        this.v193bb926ec99c1f36544962a1d44789e = b;
        b.vd943b00af6807a4ecd577b69c54cd639(event);
      } else {
        if (this.v193bb926ec99c1f36544962a1d44789e != null) {
          this.v193bb926ec99c1f36544962a1d44789e.v49699fc30ba5b5829b8478e248d8838c(event);
        }
        /** @type {null} */
        this.v193bb926ec99c1f36544962a1d44789e = null;
      }
      var tiUtil = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (tiUtil != null) {
        tiUtil.vd943b00af6807a4ecd577b69c54cd639(event, b);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v2fb3d73eca68cd0a5c5eaaf74e2a0ff3 = function(event) {
  try {
    var evt = event.originalEvent;
    var touch = evt.changedTouches[0];
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.pageX = Math.floor(touch.pageX), event.pageY = Math.floor(touch.pageY), event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(touch.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(touch.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      var b = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      if (b) {
        b.v2fb3d73eca68cd0a5c5eaaf74e2a0ff3(event);
      }
      var tiUtil = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (tiUtil != null) {
        tiUtil.v2fb3d73eca68cd0a5c5eaaf74e2a0ff3(event, b);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v274031ca168e217b24fa1e60d1efcb6f = function(event) {
  try {
    var evt = event.originalEvent;
    var touch = evt.changedTouches[0];
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.pageX = Math.floor(touch.pageX), event.pageY = Math.floor(touch.pageY), event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(touch.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(touch.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      var b = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      if (b) {
        b.v274031ca168e217b24fa1e60d1efcb6f(event);
      }
      var tiUtil = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (tiUtil != null) {
        tiUtil.v274031ca168e217b24fa1e60d1efcb6f(event, b);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vea1287eca9445a1dd99302e5d228ef46 = function(event) {
  try {
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(event.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(event.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      /** @type {null} */
      var item = null;
      if (this.veca42d9456fb9972a373e3ce21d20b60(event)) {
        item = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      }
      if (item) {
        item.vea1287eca9445a1dd99302e5d228ef46(event);
      }
      var tiUtil = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (tiUtil != null) {
        tiUtil.vea1287eca9445a1dd99302e5d228ef46(event, item);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vdc2f88e67acb2768716d43f467174e5c = function(event) {
  try {
    if (this.designerModeEnabled && (event.shiftKey || event.ctrlKey || event.altKey)) {
      return false;
    }
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(event.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(event.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      var b = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      this.v6d3e99637ba057ad515e2d1533654047 = new Point(event.v0f660c48b7d2f092a53a1b65a9039e39, event.v270a96ae2b77c18fe63278ebb0f7e6ee);
      if (b) {
        b.vdc2f88e67acb2768716d43f467174e5c(event);
      }
      var tiUtil = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (tiUtil != null) {
        tiUtil.vdc2f88e67acb2768716d43f467174e5c(event, b);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v08719502af10e937eaa8122d310cad9f = function(e) {
  try {
    var paletteHandlePosition = $(e.currentTarget).offset();
    var a = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (e.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(e.pageX) - Math.floor(paletteHandlePosition.left)) / a, e.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(e.pageY) - Math.floor(paletteHandlePosition.top)) / a, this.state != null) {
      var x = this.v54f9c1e736ab8913a0eddc2aea31b21e(e);
      if (x && this.designerModeEnabled && (e.shiftKey || e.ctrlKey || e.altKey)) {
        /** @type {number} */
        var g = 0;
        /** @type {number} */
        var b = 0;
        if (e.shiftKey && !e.ctrlKey && !e.altKey) {
          /** @type {number} */
          b = -1;
        } else {
          if (e.ctrlKey && !e.shiftKey && !e.altKey) {
            /** @type {number} */
            b = 1;
          } else {
            if (e.shiftKey && e.ctrlKey && !e.altKey) {
              /** @type {number} */
              g = -1;
            } else {
              if (e.shiftKey && e.altKey && !e.ctrlKey) {
                /** @type {number} */
                g = 1;
              }
            }
          }
        }
        this.context.save();
        a = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
        return this.context.scale(a, a), x.vef450b53cda007c38e17f579f345877b(g, b, this.context), this.context.restore(), false;
      }
      if (x) {
        x.v08719502af10e937eaa8122d310cad9f(e);
      }
      var nodes = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (nodes != null) {
        nodes.v08719502af10e937eaa8122d310cad9f(e, x);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v2c8c55808c5bad3b41e3da0c0a838da8 = function(event) {
  try {
    if (this.designerModeEnabled && (event.shiftKey || event.ctrlKey || event.altKey)) {
      return false;
    }
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(event.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(event.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      /** @type {null} */
      var item = null;
      if (this.veca42d9456fb9972a373e3ce21d20b60(event)) {
        item = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      }
      if (item) {
        item.v2c8c55808c5bad3b41e3da0c0a838da8(event);
      }
      var tiUtil = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (tiUtil != null) {
        tiUtil.v2c8c55808c5bad3b41e3da0c0a838da8(event, item);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.onMouseMove = function(event) {
  try {
    if (this.designerModeEnabled && (event.shiftKey || event.ctrlKey || event.altKey)) {
      return false;
    }
    var paletteHandlePosition = $(event.currentTarget).offset();
    var span = this.v40b61d31168505a8bd84664bb8816db9[this.v3b8b854b52da3c49b1c643fd4eb8d4ec];
    if (event.v0f660c48b7d2f092a53a1b65a9039e39 = (Math.floor(event.pageX) - Math.floor(paletteHandlePosition.left)) / span, event.v270a96ae2b77c18fe63278ebb0f7e6ee = (Math.floor(event.pageY) - Math.floor(paletteHandlePosition.top)) / span, this.state != null) {
      var evt = this.v54f9c1e736ab8913a0eddc2aea31b21e(event);
      if (evt) {
        if (this.v193bb926ec99c1f36544962a1d44789e != null) {
          if (this.v193bb926ec99c1f36544962a1d44789e.v1917f14965df083150b1374c9a97c9d7 != evt.v1917f14965df083150b1374c9a97c9d7) {
            this.v193bb926ec99c1f36544962a1d44789e.onMouseLeave(event);
          }
        } else {
          evt.v90cabce0ce0fad4d69dc9c0dd3f2007c(event);
        }
        this.v193bb926ec99c1f36544962a1d44789e = evt;
        evt.onMouseMove(event);
      } else {
        if (this.v193bb926ec99c1f36544962a1d44789e != null) {
          this.v193bb926ec99c1f36544962a1d44789e.onMouseLeave(event);
        }
        /** @type {null} */
        this.v193bb926ec99c1f36544962a1d44789e = null;
      }
      var self = this.v9d06c44dc56ee26df3c45b6b0c7ee666();
      if (self != null) {
        self.onMouseMove(event, evt);
      }
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vd158edc9dfa3e501e772c8418accaf12 = function(ballNumber) {
  return this.v03f3c658d58e0dd2f3d07c04aa1abfee[ballNumber];
}, v13260862a5e36823cb5546b59af48c71.prototype.v9a7b956672919fe4f05764f54c02e4f9 = function(gtime) {
  if (gtime != this.state.vaf2a576127494a53d0e079f0ed12d0e1) {
    /** @type {string} */
    this.state.vaf2a576127494a53d0e079f0ed12d0e1 = gtime;
    /** @type {boolean} */
    this.va424747fc90ab402a8f56fb01d3a5e5f = true;
    this.vbee376c0bae5a5bb92840e65cd0a702e();
    this.v4e7d3c69f1fd7d630bd4d4d35ccd7171();
    this.va44b82ecb181f1103b1c3bb284745ecc();
    var crossfilterable_layers = vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.clone();
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < crossfilterable_layers.length; ++layer_i) {
      var layer = crossfilterable_layers[layer_i];
      layer.va44b82ecb181f1103b1c3bb284745ecc();
    }
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v2818b45dc0b0ad11ac499bd2d19ba64e = function(bone_in) {
  this.state.v453a55e59fb4133da0172c66e3dd0483.push(bone_in);
  /** @type {boolean} */
  this.va424747fc90ab402a8f56fb01d3a5e5f = true;
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.v7a6752fbb7ad4a24faa076c893ff7020 = function(mode) {
  if (mode != null && (this.state.v453a55e59fb4133da0172c66e3dd0483.vf81b17578abb97a8de755cddbf7f45a9(mode), this.va424747fc90ab402a8f56fb01d3a5e5f = true, this.state.vaf2a576127494a53d0e079f0ed12d0e1 == mode)) {
    /** @type {null} */
    var eventMark = null;
    var d = this.state.v453a55e59fb4133da0172c66e3dd0483;
    /** @type {number} */
    var i = 0;
    for (; i < d.length; ++i) {
      var e = d[i];
      if (e.v2020540b63a842879572ac66e3edaad8()) {
        eventMark = e;
        break;
      }
    }
    this.v9a7b956672919fe4f05764f54c02e4f9(eventMark);
  }
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.va44b82ecb181f1103b1c3bb284745ecc = function() {
}, v13260862a5e36823cb5546b59af48c71.prototype.veb454d77ab7b624357ed04915af03732 = function(s, database) {
  var res = this;
  try {
    if (this.v80d0e657dafdb749d1e04d3150aff253(s) == 0) {
      return Alert.show("That menu item is used in other lessons but is not active in this lesson."), false;
    }
    if (s.indexOf("changeEntity") != -1) {
      var mask_gtime = this.state.v453a55e59fb4133da0172c66e3dd0483[parseInt(s.substring(s.indexOf("_") + 1))];
      this.v9a7b956672919fe4f05764f54c02e4f9(mask_gtime);
    }
    switch(s) {
      case "Save":
        this.v4680cebb2ea66de6102c02e228425334();
        break;
      case "Scoreboard":
        this.v670bb35209645a558e4464b05fdf0b96();
        break;
      case "PlayerList":
        this.ve127274f0ef08d381d98f4c87954fc93();
        break;
      case "About":
        Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Product Version: {0}<br>Engine Version: {1}<br>&reg; {2}, <a target='_blank' href='http://www.knowledgematters.com'>Knowledge Matters, Inc</a>. All rights reserved.", [this.v5fdc98237b88db17fd679441f9d49a0f, this.vef8d2b8c170a04b4db4153b8df9a515e, (new Date).getFullYear()]));
        break;
      case "RestartLesson":
        if (this.vb38ec11025af5f77fed59ec9c02ba631.restartLessonEnabled) {
          Alert.show(res.vb38ec11025af5f77fed59ec9c02ba631.restartLessonMessage, U.vc0e6c88f8413e92781b652ae2786391a("Restart Lesson"), Alert.vc20f5496a0e37947c331397006a83f07 | Alert.ve332d6adb70bc5edb5e110e004c86fa5, function(b) {
            if (b.vb6050b7f11623a051333e19572049a70 == Alert.vc20f5496a0e37947c331397006a83f07) {
              res.v1cd8a3531ef723f62be693e03e34002c();
            }
          });
        } else {
          Alert.show(res.vb38ec11025af5f77fed59ec9c02ba631.restartLessonMessage, U.vc0e6c88f8413e92781b652ae2786391a("Restart Lesson"));
        }
        break;
      case "EnabledActions":
        if (this.vbad94fa5546081913a4ab0546e4d33e6()) {
          var $innerblock = new frmSettings(this.state.actions, function(logonResp, users) {
            if (logonResp.vb6050b7f11623a051333e19572049a70 == Alert.OK) {
              res.ve8317653e7dd85c5e9667b1b30f438cc(users);
            }
          });
          $innerblock.show();
        }
        break;
      case "SIMSettings":
        if (this.vbad94fa5546081913a4ab0546e4d33e6()) {
          $innerblock = new frmSettings(this.state.settings, function(logonResp, p_dom_object_id) {
            if (logonResp.vb6050b7f11623a051333e19572049a70 == Alert.OK) {
              res.state.v392f7ba1a8fd3f32b7ed3afac38c2655(p_dom_object_id);
              res.vbee376c0bae5a5bb92840e65cd0a702e();
            }
          });
          $innerblock.show();
        }
        break;
      case "SaveLocal":
        if (this.vbad94fa5546081913a4ab0546e4d33e6()) {
          this.v45fcedb8570e9ab4a4ed97c7153aa0df();
        }
        break;
      case "OpenLocal":
        if (this.vbad94fa5546081913a4ab0546e4d33e6()) {
          this.v40c27677d9e91b8198338ae35382be38();
        }
        break;
      case "ExamineState":
        if (this.vbad94fa5546081913a4ab0546e4d33e6()) {
          var $innerblock = new frmExamineState(A.vfe1c4eaec8ec40f848f9772196c532d3());
          $innerblock.show();
        }
        break;
      case "CreateCheckpoint":
        this.vafef574d99ae041c255a0d56f31da843();
        break;
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vbabcd42b769666597a78c363c119b085 = function(a) {
  var tagsID = $(a.target).attr("id");
  this.v89cfa94b285da94ee975ebbf20382de2(tagsID, a);
}, v13260862a5e36823cb5546b59af48c71.prototype.v89cfa94b285da94ee975ebbf20382de2 = function(id$jscomp$5, param$jscomp$3) {
  switch(id$jscomp$5) {
    case "RestoreCheckpoint":
      this.v593e0d4f528acfa25106770fcd50a8a4();
      break;
    case "CreateCheckpoint":
      this.vafef574d99ae041c255a0d56f31da843();
      break;
    case "DisplayContent":
      this.v28fcb5159d93e3b87166ef3209c1ecd9($(param$jscomp$3.target));
      break;
    case "ExecuteCode":
      eval(param$jscomp$3);
      break;
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v1cd8a3531ef723f62be693e03e34002c = function() {
  FinalAlert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please Wait..."), this.v7cc89c84ffe803bcbc1b9c0c03311608, false);
  this.suppressCloseMsg();
  /** @type {string} */
  document.location.href = "https://" + this.serverURL + "sim/reset/" + this.v6f632cd35a0abd3341ffe233a1c9869f;
}, v13260862a5e36823cb5546b59af48c71.prototype.v40c27677d9e91b8198338ae35382be38 = function() {
  var editableVis = this;
  var appState = new frmOpenLocal(function(logonResp) {
    if (logonResp.vb6050b7f11623a051333e19572049a70 == Alert.OK) {
      editableVis.setState(appState.ve0027c3d010e287db837cc0bf574b973);
      editableVis.vbee376c0bae5a5bb92840e65cd0a702e();
    }
  });
  appState.show();
}, v13260862a5e36823cb5546b59af48c71.prototype.vee273821efcc4be3185066e3593ac65a = function() {
  var pin = this;
  var body = new frmOpenLocal(function(logonResp) {
    if (logonResp.vb6050b7f11623a051333e19572049a70 == Alert.OK) {
      pin.state = body.ve0027c3d010e287db837cc0bf574b973;
      pin.vbee376c0bae5a5bb92840e65cd0a702e();
    }
  }, true);
  body.show();
}, v13260862a5e36823cb5546b59af48c71.prototype.v45fcedb8570e9ab4a4ed97c7153aa0df = function() {
  var $innerblock = new frmSaveLocal(A.vfe1c4eaec8ec40f848f9772196c532d3(), function(a) {
  });
  $innerblock.show();
}, v13260862a5e36823cb5546b59af48c71.prototype.vf2b22e5b1ed4baff7ab652d1267e9852 = function() {
  var isCursorOverElement = this;
  $(".dropdown-toggle").removeAttr("disabled");
  var wizard_button = $("#menu").children().find("a");
  wizard_button.click(function(event) {
    var el = event.currentTarget.id;
    if (el) {
      isCursorOverElement.veb454d77ab7b624357ed04915af03732(el, event);
    }
  });
}, v13260862a5e36823cb5546b59af48c71.prototype.vdefea1bc2c554d82df75df6a206f1c10 = function(active, value) {
  var $appointment = $("#" + active).children();
  /** @type {number} */
  var i = 0;
  for (; i < $appointment.length; ++i) {
    var groupElem = $appointment.eq(i);
    var $toolbarItems = groupElem.children();
    if ($toolbarItems.length > 0 && $toolbarItems.eq(0).attr("id") == value) {
      return i;
    }
  }
  return -1;
}, v13260862a5e36823cb5546b59af48c71.prototype.vdf04180d1244b956782644fb46b068b9 = function(clazz, n, t, format, formatters) {
  var followup = this;
  var b = $("<li>");
  var form = $("<a href='#'>");
  form.attr("id", t);
  if (formatters == 1) {
    /** @type {string} */
    format = " " + format;
  }
  form.text(format);
  if (formatters == 1) {
    $("<i class='fa fa-chevron-right' aria-hidden='true'></i>").prependTo(form);
  }
  form.click(function(event) {
    if (event.currentTarget.id) {
      followup.veb454d77ab7b624357ed04915af03732(event.currentTarget.id, event);
    }
  });
  form.appendTo(b);
  if ($("#" + clazz).children().length <= 0) {
    $("#" + clazz).append(b);
  } else {
    $("#" + clazz).children().eq(n).after(b);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v283545384c0568e2f23251ce4cafdafd = function(actionId, query) {
  $("#" + actionId).children().eq(query).remove();
}, v13260862a5e36823cb5546b59af48c71.prototype.v10416d6bfdd23fe44fdf51d21c7f4ed6 = function(b, status) {
  var $sobutton = $("<li class='divider'>");
  $("#" + b).children().eq(status).after($sobutton);
}, v13260862a5e36823cb5546b59af48c71.prototype.vc098a7fcd839940d9807628f3316b055 = function(sid, val) {
  var isCursorOverElement = this;
  var elem = $("#" + sid).children().eq(val).children().eq(0);
  elem.removeAttr("disabled");
  elem.unbind("click");
  elem.css("color", "#000");
  elem.click(function(event) {
    var el = event.currentTarget.id;
    if (el) {
      isCursorOverElement.veb454d77ab7b624357ed04915af03732(el, event);
    }
  });
}, v13260862a5e36823cb5546b59af48c71.prototype.v91c3decadf3f0cdd45ece53d4a36d8d0 = function(sid, val) {
  var a = $("#" + sid).children().eq(val).children().eq(0);
  a.attr("disabled", "disabled");
  a.css("color", "#C0C0C0");
}, v13260862a5e36823cb5546b59af48c71.prototype.vb29dd283f0cbd8bc05496050e0d1792a = function(b, status) {
  var field = $("#" + b).children().eq(status);
  return field.attr("disabled") == "disabled";
}, v13260862a5e36823cb5546b59af48c71.prototype.v7903f4528f0a3a82acdb98c32102bde7 = function(pid, interval, fn) {
  if (fn) {
    this.vc098a7fcd839940d9807628f3316b055(pid, interval);
  } else {
    this.v91c3decadf3f0cdd45ece53d4a36d8d0(pid, interval);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v670bb35209645a558e4464b05fdf0b96 = function() {
  var DemoCallBack = new frmScoreboard(this.v4289c2f3204930eba7aee6a641e2a07f);
  DemoCallBack.init();
  DemoCallBack.show();
}, v13260862a5e36823cb5546b59af48c71.prototype.ve127274f0ef08d381d98f4c87954fc93 = function() {
  var DemoCallBack = new frmPlayerList;
  DemoCallBack.init();
  DemoCallBack.show();
}, v13260862a5e36823cb5546b59af48c71.prototype.vea5fa542d87a8735c4edcafaed21a303 = function() {
  var $innerblock = new frmLicenseInfo;
  $innerblock.show();
}, v13260862a5e36823cb5546b59af48c71.prototype.v54008ea5874183301ab6ea8c55154a31 = function(canCreateDiscussions) {
  if (this.multiplayer = canCreateDiscussions, this.multiplayer) {
    this.veb279052b1a3f161d4aa8ccf105cb358 = this.vb38ec11025af5f77fed59ec9c02ba631.multiplayerHostAddress;
    var name = this.vf1ee7aab7993b2285a5f2819f03cf847("playerName");
    if (name != undefined) {
      this.vb38ec11025af5f77fed59ec9c02ba631.playerName = name;
    }
    var uid = this.vf1ee7aab7993b2285a5f2819f03cf847("sessionToken");
    if (uid != undefined) {
      this.vb38ec11025af5f77fed59ec9c02ba631.sessionToken = uid;
    }
    $("#consensus-speed-container").css("display", "inline-block");
    $("#start-stop-button").hide();
    $("#start-stop-button").unbind("click");
    $("#run-to-button").hide();
    $("#run-to-button").unbind("click");
    this.v670bb35209645a558e4464b05fdf0b96();
    this.startTime();
    setInterval(function() {
      app.ve0b94fa92cf7d0e5d5996a0ddb246147();
    }, 1e4);
  } else {
    $(".multiplayer").remove();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vaeb908ed67e23e2effa91c60386513e7 = function(a) {
  /** @type {string} */
  this.designerModeEnabled = a;
  if (this.designerModeEnabled) {
    this.v9d1327776f3c3332ee003abecbe9bd2d = U.vc15ad9cc7370637e6a15a790a3e70c08();
  } else {
    $(".designerMode").remove();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v1ff69a4c0285c65e2c6ec7a9fda88e6e = function() {
  var crossfilterable_layers = this.vc01518a0113992ddd0487eec4451b6dd.clone();
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < crossfilterable_layers.length; ++layer_i) {
    var layer = crossfilterable_layers[layer_i];
    layer();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.ved3fea8761b9737532a8785f9afb4fa2 = function(bone_in) {
  this.vc01518a0113992ddd0487eec4451b6dd.push(bone_in);
}, v13260862a5e36823cb5546b59af48c71.prototype.v2ab8dbcf97e88592a0784f7bdbfaaa2e = function(childCompute) {
  this.vc01518a0113992ddd0487eec4451b6dd.vf81b17578abb97a8de755cddbf7f45a9(childCompute);
}, v13260862a5e36823cb5546b59af48c71.prototype.ve0b94fa92cf7d0e5d5996a0ddb246147 = function() {
  if (this.state) {
    this.state.ve0b94fa92cf7d0e5d5996a0ddb246147();
    this.state.v97c8d98909cca1a73e7f02c2f3059a3d();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vbad94fa5546081913a4ab0546e4d33e6 = function() {
  return this.designerModeEnabled == 1;
}, v13260862a5e36823cb5546b59af48c71.prototype.ve8317653e7dd85c5e9667b1b30f438cc = function(name) {
  this.state.actions = U.v00c10dd2afa65048c9519a223b6ce3cd(name);
  /** @type {boolean} */
  this.va424747fc90ab402a8f56fb01d3a5e5f = true;
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.v5a32248434c1da106e04791d3f125645 = function(level) {
  var adjustedLevel = this.v80d0e657dafdb749d1e04d3150aff253(level);
  return this.state.vaf2a576127494a53d0e079f0ed12d0e1 == null && this.v501600104ab2cdad11634f24af2c1269.indexOf(level) == -1 && (adjustedLevel = false), adjustedLevel;
}, v13260862a5e36823cb5546b59af48c71.prototype.v80d0e657dafdb749d1e04d3150aff253 = function(i) {
  var ed;
  return this.state.actions[i] != undefined && (ed = this.state.actions[i]), this.state.vf668d872e21e06a0572f88c61501c532[i] != undefined && (ed = this.state.vf668d872e21e06a0572f88c61501c532[i]), ed;
}, v13260862a5e36823cb5546b59af48c71.prototype.isDisabled = function(view) {
  if (this.state.actions[view] == undefined) {
    return false;
  }
  /** @type {boolean} */
  var b = !this.state.actions[view];
  return this.state.vaf2a576127494a53d0e079f0ed12d0e1 == null && this.v501600104ab2cdad11634f24af2c1269.indexOf(view) == -1 && (b = true), b;
}, v13260862a5e36823cb5546b59af48c71.prototype.enable = function(f) {
  this.v6aee08203b977b2965128533f1d987d6(f, true);
}, v13260862a5e36823cb5546b59af48c71.prototype.disable = function(k) {
  this.v6aee08203b977b2965128533f1d987d6(k, false);
}, v13260862a5e36823cb5546b59af48c71.prototype.v6aee08203b977b2965128533f1d987d6 = function(j, max) {
  /** @type {!Function} */
  this.state.actions[j] = max;
  /** @type {boolean} */
  this.va424747fc90ab402a8f56fb01d3a5e5f = true;
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.v5ba358a44e4aa51a21149ac0ec8ef57f = function() {
  this.v0668bf3af089e7080f0fa3a1189b2764(true);
}, v13260862a5e36823cb5546b59af48c71.prototype.v0bb25468767ae45c13e02699c2914bbc = function() {
  this.v0668bf3af089e7080f0fa3a1189b2764(false);
}, v13260862a5e36823cb5546b59af48c71.prototype.v0668bf3af089e7080f0fa3a1189b2764 = function(b) {
  var i;
  for (i in this.state.actions) {
    if (this.state.actions.hasOwnProperty(i)) {
      /** @type {!Function} */
      this.state.actions[i] = b;
    }
  }
  /** @type {boolean} */
  this.va424747fc90ab402a8f56fb01d3a5e5f = true;
  this.vbee376c0bae5a5bb92840e65cd0a702e();
}, v13260862a5e36823cb5546b59af48c71.prototype.evaluateGoal = function(zoomLevel) {
  var _this = {};
  return _this.complete = true, _this.v2b06b88b4b74e9bad008259a615da76b = "", _this.progress = 1, _this;
}, v13260862a5e36823cb5546b59af48c71.prototype.stopAndQuerySaved = function() {
  if (this.v36c4192050cb2f5f8163dc557303ee61(), this.vb38ec11025af5f77fed59ec9c02ba631.manualSaveEnabled == 1) {
    return true;
  }
  var level = new vcb778ce41130b213653506a1f586b179;
  var adjustedLevel = this.state.v056e6ac702d93d816bd32676dd366675(level);
  return adjustedLevel == this.v86ed25da6f98a97ba78a0dedf9118ba2;
}, v13260862a5e36823cb5546b59af48c71.prototype.suppressCloseMsg = function() {
  if (typeof suppressCloseMsg == "function") {
    suppressCloseMsg();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vddaf63a727fee74679d504b575b2220b = function(targets, buildCache) {
  if (this.state && this.state.v4901907582c4139e2838819b2621a5e4 == 0) {
    /** @type {boolean} */
    this.state.v4901907582c4139e2838819b2621a5e4 = true;
    if (buildCache == 1) {
      /** @type {boolean} */
      this.state.v918097de0c67343d3404e06a560827e3 = true;
    }
    A.v87b8393064cbfa8977b32cec36a69d86().v36c4192050cb2f5f8163dc557303ee61();
    this.v4680cebb2ea66de6102c02e228425334(function() {
      A.v87b8393064cbfa8977b32cec36a69d86().vd555ac80a0d021471a81f19497f2ec2c(targets, U.vc0e6c88f8413e92781b652ae2786391a("Sim Over"));
    });
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vd555ac80a0d021471a81f19497f2ec2c = function(a, fn) {
  try {
    simComplete();
  } catch (a) {
  }
  this.v36c4192050cb2f5f8163dc557303ee61();
  this.suppressCloseMsg();
  FinalAlert.show(a, fn, true);
  /** @type {boolean} */
  this.vb38ec11025af5f77fed59ec9c02ba631.autoSaveEnabled = false;
}, v13260862a5e36823cb5546b59af48c71.prototype.v0b096efd60c1e6fd23a101d35f55d6e0 = function() {
  this.v07e90ab0ba4baa37594036d634383bbc();
}, v13260862a5e36823cb5546b59af48c71.prototype.v07e90ab0ba4baa37594036d634383bbc = function() {
  this.vbb501f64c1632345b208860c55e93fbd.off("click");
  this.vbb501f64c1632345b208860c55e93fbd.unbind("click");
  this.vbb501f64c1632345b208860c55e93fbd.attr("disabled", "disabled");
  $("#run-to-button").off("click");
  $("#run-to-button").unbind("click");
  $("#run-to-button").attr("disabled", "disabled");
}, v13260862a5e36823cb5546b59af48c71.prototype.vdb542f5964b693120cdccb4395cb8dbe = function(diff) {
  /** @type {null} */
  var c = null;
  if (diff) {
    if (diff.status != 0) {
      Alert.show("Read failure<br>Status:" + diff.status + "<br>Message:" + diff.message, "Read Error");
    } else {
      if (diff.data.length > 0) {
        var num2 = v5a80f85022622529c463a6ba2ff39861.v0ed275c686852894092dbd89747e66d4(diff.data);
        num2 = v5a80f85022622529c463a6ba2ff39861.v0ed275c686852894092dbd89747e66d4(num2);
        var num2Expression = new vcb778ce41130b213653506a1f586b179(num2);
        c = num2Expression.vadd06da90bcbfab155139168f1c30c14();
      }
    }
  } else {
    Alert.show("Read returned no data", "Read Error");
  }
  return c;
}, v13260862a5e36823cb5546b59af48c71.prototype.v6f2d4980594b741cffcec6e709def7d4 = function() {
  var a = {};
  return a;
}, v13260862a5e36823cb5546b59af48c71.prototype.v55fa3178bd76390b626362ac0e998b10 = function() {
  $("#async-event-indicator-value").text(U.vc0e6c88f8413e92781b652ae2786391a("Saving..."));
  $("#async-event-indicator").show();
}, v13260862a5e36823cb5546b59af48c71.prototype.vd059c51b9fef739676ca6951436f703b = function(zoomAware) {
  if (!zoomAware) {
    $("#async-event-indicator").hide();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v4680cebb2ea66de6102c02e228425334 = function(stateOrChange) {
  if (_.isFunction(stateOrChange)) {
    /** @type {!Function} */
    this.ve20836b554d59d803a50fc5d7d8a6eb1 = stateOrChange;
  }
  var recentList = this;
  return this.serverURL != "" && this.vb38ec11025af5f77fed59ec9c02ba631.manualSaveEnabled == 1 ? (this.v55fa3178bd76390b626362ac0e998b10(), setTimeout(_.bind(function() {
    var output = new vcb778ce41130b213653506a1f586b179;
    try {
      output.v0794e99849af353da2642d5a585704e3(this.state);
    } catch (controlFlowAction) {
      output.v3ccbef2b14576b2d14f478b958e6f739();
      this.v5491f70ce6295261c82df825f10fd32d(controlFlowAction.message, true);
      return;
    }
    var e = output.toString();
    var b = SHA256_hash(e);
    if (b != this.v86ed25da6f98a97ba78a0dedf9118ba2) {
      var f = v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(e);
      this.vc1b0b55ce3056d69b2ebe85049935c59 = b;
      var out = {};
      out.hash = b;
      out.data = output;
      var train1or = this.v6f2d4980594b741cffcec6e709def7d4();
      var billingInfo = v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(JSON.stringify(train1or));
      /** @type {string} */
      var requestOrUrl = "https://" + this.serverURL + "backend/saveEx/" + this.v6f632cd35a0abd3341ffe233a1c9869f;
      return $.ajax({
        type : "POST",
        url : requestOrUrl,
        data : {
          data : f,
          metadata : billingInfo,
          stateHash : b
        },
        success : function(a) {
          recentList.v05110965c77ea744ee62060f6913b966(a, b);
        },
        error : function(f) {
          recentList.vcb6a7f2c62dbdff8b736bd9cd01211a7(f);
        },
        dataType : "html"
      }), this.v58df98fb9e1d917fe19718dff7e29a65++, this.vd059c51b9fef739676ca6951436f703b(true), out;
    }
    this.v9f9a7aea55614f2424be2cb7143ffb29();
    this.vd059c51b9fef739676ca6951436f703b();
  }, this), 100)) : this.ve20836b554d59d803a50fc5d7d8a6eb1 && (this.ve20836b554d59d803a50fc5d7d8a6eb1.call(), delete this.ve20836b554d59d803a50fc5d7d8a6eb1), null;
}, v13260862a5e36823cb5546b59af48c71.prototype.v05110965c77ea744ee62060f6913b966 = function(b, rect) {
  /** @type {null} */
  var handle = null;
  try {
    /** @type {*} */
    handle = JSON.parse(b);
  } catch (a) {
    this.v5491f70ce6295261c82df825f10fd32d(U.vc0e6c88f8413e92781b652ae2786391a("An unknown response was received from the server"), true);
    return;
  }
  if (handle.status == 0) {
    /** @type {number} */
    this.v58df98fb9e1d917fe19718dff7e29a65 = 0;
    this.v67929fba2747fb38e597c2d7a1de9c31();
    /** @type {!Date} */
    this.v42033e0fae32b80bba2ffe8f1c6c5680 = new Date;
    this.vd059c51b9fef739676ca6951436f703b();
    if (this.ve20836b554d59d803a50fc5d7d8a6eb1) {
      this.ve20836b554d59d803a50fc5d7d8a6eb1.call();
      delete this.ve20836b554d59d803a50fc5d7d8a6eb1;
    }
    /** @type {string} */
    this.v86ed25da6f98a97ba78a0dedf9118ba2 = rect;
    saveComplete();
  } else {
    this.v9ca0a800404bf4eb12ab7e4c5089b6bf(handle);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vcb6a7f2c62dbdff8b736bd9cd01211a7 = function(data) {
  if (this.v58df98fb9e1d917fe19718dff7e29a65 <= 1) {
    this.v0a9def187f96e36817a9433854190794();
  } else {
    this.v5491f70ce6295261c82df825f10fd32d(U.vc0e6c88f8413e92781b652ae2786391a("Please check your connection to the Internet.<br>Technical Error Detail: {0}", [data.statusText]), true);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v9ca0a800404bf4eb12ab7e4c5089b6bf = function(n) {
  if (n.status == -1) {
    this.v06603d962f8fd99d6df77cbff02e1898();
  } else {
    this.v5491f70ce6295261c82df825f10fd32d(U.vc0e6c88f8413e92781b652ae2786391a("Server Error: {0}", [n.message]), n.va1e3e2bbfe68a98703d5a2e807456a69);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v5491f70ce6295261c82df825f10fd32d = function(lat, rot) {
  if (this.v024c8c5b36685adf9bbeee284c0284e7 == null) {
    this.v36c4192050cb2f5f8163dc557303ee61();
    var views = U.vc0e6c88f8413e92781b652ae2786391a("We're having trouble saving your Sim");
    if (rot) {
      views = views + U.vc0e6c88f8413e92781b652ae2786391a(", but we'll keep trying every 10 seconds...<br><br>");
    } else {
      /** @type {string} */
      views = views + ".<br><br>";
    }
    this.v024c8c5b36685adf9bbeee284c0284e7 = FinalAlert.show(U.vc0e6c88f8413e92781b652ae2786391a(views + "{0}", [lat]), U.vc0e6c88f8413e92781b652ae2786391a("Trying to Save Sim"), false);
  }
  if (rot) {
    this.v0a9def187f96e36817a9433854190794();
  } else {
    this.v07e90ab0ba4baa37594036d634383bbc();
    this.v2a548a77dc3dca04fb52bd99fe0d1c6b();
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v67929fba2747fb38e597c2d7a1de9c31 = function() {
  if (this.v024c8c5b36685adf9bbeee284c0284e7 != null) {
    this.v024c8c5b36685adf9bbeee284c0284e7.close();
    /** @type {null} */
    this.v024c8c5b36685adf9bbeee284c0284e7 = null;
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.va9d367fc40ad3fdf46ab0a8410f2b55e = function() {
  this.v4680cebb2ea66de6102c02e228425334();
}, v13260862a5e36823cb5546b59af48c71.prototype.v0a9def187f96e36817a9433854190794 = function() {
  var a = this;
  setTimeout(function() {
    a.v4680cebb2ea66de6102c02e228425334();
  }, 1e4);
}, v13260862a5e36823cb5546b59af48c71.prototype.v9f9a7aea55614f2424be2cb7143ffb29 = function() {
  var ImmutableVector = this;
  /** @type {number} */
  var baseName = Math.floor(Math.random() * 1e4);
  /** @type {string} */
  var testFile = "https://" + this.serverURL + "backend/isLoggedIn/" + this.v6f632cd35a0abd3341ffe233a1c9869f + "/" + this.state.v320dc1600b566774aa8067479359e825() + "/" + baseName;
  $.ajax({
    url : testFile,
    success : function(val) {
      ImmutableVector.vd810bb698a30fa5444ff5d5b8f773bfd(val);
    },
    error : function(element) {
      ImmutableVector.v4dd4c84f72fa143889547ef69f082c23(element);
    },
    dataType : "json"
  });
}, v13260862a5e36823cb5546b59af48c71.prototype.v4dd4c84f72fa143889547ef69f082c23 = function(suppressDisabledCheck) {
}, v13260862a5e36823cb5546b59af48c71.prototype.vd810bb698a30fa5444ff5d5b8f773bfd = function(result) {
  if (result != null) {
    var token = result.v76883cac461ec5b714dfd2693fddc6f5;
    if (result.status < 0) {
      this.v36c4192050cb2f5f8163dc557303ee61();
      FinalAlert.show(result.message, "Multiple Window Violation Detected", false);
      return;
    }
    if (token == "false") {
      this.v06603d962f8fd99d6df77cbff02e1898();
    }
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v06603d962f8fd99d6df77cbff02e1898 = function() {
  this.v67929fba2747fb38e597c2d7a1de9c31();
  this.v36c4192050cb2f5f8163dc557303ee61();
  /** @type {boolean} */
  this.vb38ec11025af5f77fed59ec9c02ba631.autoSaveEnabled = false;
  this.suppressCloseMsg();
  FinalAlert.show(U.vc0e6c88f8413e92781b652ae2786391a("You have been logged out. Please close this browser window and log back in to continue using Virtual Business."), U.vc0e6c88f8413e92781b652ae2786391a("Logged Out"), false);
}, v13260862a5e36823cb5546b59af48c71.prototype.v18b787c851fb531af767cb510d7ec0b6 = function(err) {
  if (err instanceof vd074db6e4d56af7e2a6f1c1d5ea2fb38) {
    Alert.show(err.message);
  } else {
    if (this.designerModeEnabled) {
      throw Alert.show("An exception occured, check the console for more detail."), err;
    } else {
      Alert.show("An error was encountered:<br>" + err.message);
    }
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vf1ee7aab7993b2285a5f2819f03cf847 = function(sKey) {
  var data = undefined;
  return this.v9d1327776f3c3332ee003abecbe9bd2d != undefined && (data = this.v9d1327776f3c3332ee003abecbe9bd2d[sKey]), data;
}, v13260862a5e36823cb5546b59af48c71.prototype.v57da4192525d57d9b6e0793c3e29774a = function(a, b) {
  return KMDate.v2262d4fcbfe892cd2a52876c78815765(b, a);
}, v13260862a5e36823cb5546b59af48c71.prototype.v39aed12c67d8bcdc1ed07d14cddfd7ff = function() {
  /** @type {null} */
  var a = null;
  return this.multiplayer ? a = new v55d1ac7cab47e7eac4b6a3abf209b74e : a = new vc68951fcb00257396b06853901f0e510, a;
}, v13260862a5e36823cb5546b59af48c71.prototype.vce86c0591ca862844982251109494278 = function() {
  return this.multiplayer;
}, v13260862a5e36823cb5546b59af48c71.prototype.v97c8d98909cca1a73e7f02c2f3059a3d = function(status, e, f) {
  this.state.v938115dd55ae244bd4dd6d1aa904c4a9.v6cd4a743b490f8c220bcbf129550100b(status, e, f);
}, v13260862a5e36823cb5546b59af48c71.prototype.v731990d8f94fe81c012c72285e4ac202 = function(a, b) {
  this.state.v938115dd55ae244bd4dd6d1aa904c4a9.v8cc4387f68224cdbcbf603449b319524(a, b);
}, v13260862a5e36823cb5546b59af48c71.prototype.v26546a0426f6ca3c76d2af727e6606db = function(a) {
  this.state.v938115dd55ae244bd4dd6d1aa904c4a9.vedd24ae856673c8537da9ccd827a07cb(a);
}, v13260862a5e36823cb5546b59af48c71.prototype.vaf452bb3460e8b1f7a9b5dfe1b11346a = function() {
  return this.designerModeEnabled && _.isObject(this.v9d1327776f3c3332ee003abecbe9bd2d) && this.v9d1327776f3c3332ee003abecbe9bd2d.testSolution == "true" ? true : false;
}, v13260862a5e36823cb5546b59af48c71.prototype.vf3f41d9bc3f271b62f68de0509c38d4e = function() {
  try {
    if (_.isObject(this.v9d1327776f3c3332ee003abecbe9bd2d) && _.isString(this.v9d1327776f3c3332ee003abecbe9bd2d.SaveTo) && _.isString(this.v9d1327776f3c3332ee003abecbe9bd2d.LessonProjectID)) {
      /**
       * @param {?} path
       * @return {undefined}
       */
      var _writeFile = function(path) {
        if (!fso.FolderExists(path)) {
          _writeFile(fso.GetParentFolderName(path));
          fso.CreateFolder(path);
        }
      };
      var fso = new ActiveXObject("Scripting.FileSystemObject");
      _writeFile(this.v9d1327776f3c3332ee003abecbe9bd2d.SaveTo);
      var file = this.v9d1327776f3c3332ee003abecbe9bd2d.LessonProjectID;
      if (this.vaf452bb3460e8b1f7a9b5dfe1b11346a()) {
        /** @type {string} */
        file = file + "_TS";
      }
      var _file = fso.CreateTextFile(this.v9d1327776f3c3332ee003abecbe9bd2d.SaveTo + "\\" + file, true);
      var util = new vcb778ce41130b213653506a1f586b179;
      util.v0794e99849af353da2642d5a585704e3(this.state);
      var _contents = v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(util.toString());
      _file.Write(_contents);
      _file.Close();
      if (!_.isUndefined(window.opener) && _.isFunction(window.opener.onTemplateGenerated)) {
        window.opener.onTemplateGenerated();
      }
    }
  } catch (default_favicon) {
    alert("Failed to write sim template file.  This will only work in designer mode in IE as a Trusted Site with modified security settings. Error:" + default_favicon.toString());
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vafef574d99ae041c255a0d56f31da843 = function() {
  var rejectingServer = Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Creating a restore checkpoint for Sim..."), U.vc0e6c88f8413e92781b652ae2786391a("Creating Checkpoint"), 0);
  setTimeout(_.bind(function() {
    delete this.state.vac40e36d7772c58f6669e3cf2f0f2698;
    var util = new vcb778ce41130b213653506a1f586b179;
    util.v0794e99849af353da2642d5a585704e3(this.state);
    var e = util.toString();
    this.state.vac40e36d7772c58f6669e3cf2f0f2698 = v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(e);
    rejectingServer.close();
  }, this), 10);
}, v13260862a5e36823cb5546b59af48c71.prototype.v593e0d4f528acfa25106770fcd50a8a4 = function() {
  if (this.state.vac40e36d7772c58f6669e3cf2f0f2698) {
    this.v16807f6bcd8fff2766522723e717992c = this.state.vac40e36d7772c58f6669e3cf2f0f2698;
    this.v36c4192050cb2f5f8163dc557303ee61();
    var crossfilterable_layers = vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.clone();
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < crossfilterable_layers.length; ++layer_i) {
      var layer = crossfilterable_layers[layer_i];
      layer.close();
    }
    delete this.state;
    var rejectingServer = Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Restoring to previous point in Sim..."), U.vc0e6c88f8413e92781b652ae2786391a("Restoring Checkpoint"), 0);
    setTimeout(_.bind(function() {
      var debug_tableTree = v5a80f85022622529c463a6ba2ff39861.v0ed275c686852894092dbd89747e66d4(this.v16807f6bcd8fff2766522723e717992c);
      var model = new vcb778ce41130b213653506a1f586b179(debug_tableTree);
      var st = model.vadd06da90bcbfab155139168f1c30c14();
      this.setState(st);
      model = new vcb778ce41130b213653506a1f586b179;
      model.v0794e99849af353da2642d5a585704e3(this.state);
      var e = model.toString();
      this.state.vac40e36d7772c58f6669e3cf2f0f2698 = v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(e);
      this.vbee376c0bae5a5bb92840e65cd0a702e();
      delete this.v16807f6bcd8fff2766522723e717992c;
      rejectingServer.close();
    }, this), 10);
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.v28fcb5159d93e3b87166ef3209c1ecd9 = function(element) {
  var result = $('<iframe id="extContent" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>');
  var a = this.vc8cc06a7040ac6611a967371d4ca4a2d();
  if (a.indexOf("//") >= 0) {
    a = a.substr(a.indexOf("//") + 2);
  }
  a = a.substr(a.indexOf("/"));
  var d = a + element.attr("data-href");
  var title = element.attr("data-title");
  var width = element.attr("data-width");
  var bkp = element.attr("data-height");
  result.attr({
    width : +width,
    src : d,
    height : +bkp,
    name : title
  });
  var dialogBox = $("<div><a class='printLessonContentIframe btn btn-default' href='#'></a></div>").append(result).appendTo("body").dialog({
    autoOpen : false,
    resizable : false,
    width : "auto",
    height : "auto",
    classes : {
      "ui-dialog" : "iFrameContentDialog"
    },
    dragStart : function() {
      $(this).parent().width(width);
    },
    dragStop : function() {
      $(this).parent().width(width);
    },
    close : function() {
      result.attr("src", "");
      $(this).dialog("destroy").remove();
    }
  });
  $(".printLessonContentIframe").on("click", function() {
    $(this).siblings("iframe")[0].contentWindow.print();
  });
  dialogBox.dialog("option", "title", title).dialog("open");
}, v13260862a5e36823cb5546b59af48c71.prototype.vd0f687eee85fde566ae2560bd231dabe = function(message, data) {
  this.v36c4192050cb2f5f8163dc557303ee61();
  if (!this.v135a0545e341530fcfccefb7860ee1a6) {
    /** @type {boolean} */
    this.v135a0545e341530fcfccefb7860ee1a6 = true;
    Alert.show(message, data, Alert.OK, _.bind(function(a) {
      this.v593e0d4f528acfa25106770fcd50a8a4();
      delete this.v135a0545e341530fcfccefb7860ee1a6;
    }, this));
  }
}, v13260862a5e36823cb5546b59af48c71.prototype.vabcd33e3b9c74fa33e39751d0b5bb0c4 = function(name, position) {
  var prop = position;
  return this.vb38ec11025af5f77fed59ec9c02ba631 && !_.isUndefined(this.vb38ec11025af5f77fed59ec9c02ba631[name]) && (prop = this.vb38ec11025af5f77fed59ec9c02ba631[name]), this.vb38ec11025af5f77fed59ec9c02ba631.designerModeEnabled && !_.isUndefined(U.vc15ad9cc7370637e6a15a790a3e70c08()[name]) && (prop = U.vc15ad9cc7370637e6a15a790a3e70c08()[name]), this.AppConfig && !_.isUndefined(this.AppConfig[name]) && (prop = this.AppConfig[name]), prop;
}, v13260862a5e36823cb5546b59af48c71.prototype.v8ce6d48d3215116f1ffc78e757ba4ef1 = function(description) {
  /** @type {string} */
  var requestOrUrl = "https://" + this.serverURL + "backend/userReportedLicenseViolation/" + this.v6f632cd35a0abd3341ffe233a1c9869f;
  $.ajax({
    type : "POST",
    url : requestOrUrl,
    data : {
      message : description
    }
  });
}, v13260862a5e36823cb5546b59af48c71.prototype.v3afce6c0af976f1cb876b10409e9ecc5 = function(cX1) {
  this.vdb14e33b6d4c53416b1fcf7ffca18e91.vc2b55451d6b5a973b456d3ad090abf8d(cX1);
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype = Object.create(v13260862a5e36823cb5546b59af48c71.prototype), v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.constructor = v1847d6dd008ed9b56a6f12d60cf3baa6, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v6d5f0970fd6e58bfa65e8168c9a2b788 = function() {
  var EditRoute = this;
  var finalMatrix = this.state.settings.LessonProjectID;
  /** @type {string} */
  var api_get_url = "data/lessons/" + finalMatrix + ".json?r=" + Math.floor(Math.random() * 1e3).toString();
  $.get(api_get_url, function(item) {
    EditRoute.v996822fa2b0af5298d6ddfdee86cf61a(finalMatrix, item);
  });
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v996822fa2b0af5298d6ddfdee86cf61a = function(m, config) {
  var data = new v2609cf4415e9e2bdeac9bc70c0e1d78d;
  data.v0aa2ccaf3dc28c42e84242eb3a0c38e0 = m;
  if (A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("lessonName", "") == "") {
    A.v87b8393064cbfa8977b32cec36a69d86().vb38ec11025af5f77fed59ec9c02ba631.lessonName = config.lessonName;
  }
  if (config.v0484e2725ba2e51d69d3494affca6422 != undefined) {
    data.v0484e2725ba2e51d69d3494affca6422 = config.v0484e2725ba2e51d69d3494affca6422;
  }
  if (config.vd349b7a6286106ec09b108320fdc6d78 != undefined) {
    data.vd349b7a6286106ec09b108320fdc6d78 = config.vd349b7a6286106ec09b108320fdc6d78;
  }
  var view = new v7110465ab3a4b46157d3a1e3a8cc2fe9(data);
  data = _.merge(data, config.metadata);
  var steps = config.steps;
  /** @type {number} */
  var i = 0;
  for (; i < steps.length; ++i) {
    var item = steps[i];
    var b = new vb81ec444a84af038482cbc6245969e60;
    b.v025e854c552c2bdad82d7cc6f6ac452b = item.v025e854c552c2bdad82d7cc6f6ac452b != undefined ? item.v025e854c552c2bdad82d7cc6f6ac452b : null;
    if (!_.isUndefined(item.v39b69119e0c66a4c280fd84717d8c6c6)) {
      b.v39b69119e0c66a4c280fd84717d8c6c6 = item.v39b69119e0c66a4c280fd84717d8c6c6;
      if (item.vc174103d06944e3dcc964865c9fe908a) {
        b.vc174103d06944e3dcc964865c9fe908a = item.vc174103d06944e3dcc964865c9fe908a;
      }
    }
    view.v04cd2ba3a7b43a07ba81e9505025e373(b);
    view.setText(item.text);
    var styles = item.vbc4181043346c74b1fd88efbb1ab7e86;
    if (styles) {
      if (view.vda32bea161cc3e1fc0de61b0be2c02b1(new v6a71d3961b7436346bd593a991741a32(styles.text)), styles.v426d4e4ef5152089d558d6a0ac62fb54.length <= 0) {
        throw new Error("No answers specified for question!");
      }
      /** @type {number} */
      var i = 0;
      for (; i < styles.v426d4e4ef5152089d558d6a0ac62fb54.length; ++i) {
        var cell = styles.v426d4e4ef5152089d558d6a0ac62fb54[i];
        /** @type {boolean} */
        var floatLength = cell.vaaf375657dea7ffbf10dc9deaeda0282 != undefined && cell.vaaf375657dea7ffbf10dc9deaeda0282 == 1;
        var toMonth = cell.formula != undefined ? cell.formula : null;
        view.v64b03fa302676518f17fc0cf14263d2e(new v19368ba11aaa28346bd88a60f0240c1b(cell.text, toMonth, floatLength));
      }
    }
  }
  view.v2785a40d7de62720def3cbea9ffb8c55();
  view.vb6f8485884373ffdddfe77a79cbe99b2();
  /** @type {null} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = null;
  /** @type {null} */
  this.state.va1d4c079519e74028f642eb03ad9c6a6 = null;
  this.v00d7380bbaadba3765a704fe18e98215(data);
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v00d7380bbaadba3765a704fe18e98215 = function(tpl) {
  /** @type {null} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = null;
  /** @type {string} */
  this.state.va1d4c079519e74028f642eb03ad9c6a6 = tpl;
  this.v83a32b210710422f615794e02ba5977b();
  this.vf3f41d9bc3f271b62f68de0509c38d4e();
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v83a32b210710422f615794e02ba5977b = function() {
  /** @type {null} */
  this.v5f4cdb6ea6de093c616bf3c15856623b = null;
  if (this.v32807337688fccef8615e097a02c12fa != null) {
    this.v32807337688fccef8615e097a02c12fa.remove();
  }
  /** @type {null} */
  this.v32807337688fccef8615e097a02c12fa = null;
  var _txs = this.state.va1d4c079519e74028f642eb03ad9c6a6;
  if (_txs != null) {
    $("#brandHeader .lessonDisplayName").text(this.vabcd33e3b9c74fa33e39751d0b5bb0c4("lessonName", ""));
    var geoJSON_str = this.vabcd33e3b9c74fa33e39751d0b5bb0c4("licensedToSchool", false);
    if (geoJSON_str) {
      $(".brandLicensee").text(geoJSON_str);
      var c = $(".brandLicensee").clone().appendTo("body");
      var d = c.outerWidth(true);
      c.remove();
      var backoffDelay = $(window).width();
      var Yxlabel = $("#brandHeader .lessonDisplayName").width();
      /** @type {number} */
      var Ymain = backoffDelay / 2;
      /** @type {number} */
      var currentMaxday = 2 * (Ymain - (Yxlabel + 20));
      if (d <= currentMaxday) {
        $(".brandLicenseText").css("visibility", "visible");
        $(".brandLicensee").css("visibility", "visible");
      }
    }
    if (this.designerModeEnabled) {
      this.v5f4cdb6ea6de093c616bf3c15856623b = new v7110465ab3a4b46157d3a1e3a8cc2fe9(_txs);
    } else {
      this.v5f4cdb6ea6de093c616bf3c15856623b = new vd1b349dedc184083448183a67397800e(_txs);
    }
    if (this.v5f4cdb6ea6de093c616bf3c15856623b.answersRandomOrder) {
      _txs.vc60d2e09c50d152724255fcbdf905892();
    }
    this.v32807337688fccef8615e097a02c12fa = new cstmIAPanel(_txs, this.v5f4cdb6ea6de093c616bf3c15856623b);
    this.v32807337688fccef8615e097a02c12fa.v4cfcb53978fd83231c75b36f997e0b9e($("#instruction-pane"));
    this.v32807337688fccef8615e097a02c12fa.v9b5082d15f260cb8c11eb8b1277bc5ae();
  }
}, v1847d6dd008ed9b56a6f12d60cf3baa6.vfa24e64fd280ac294cb2c3b9f2a2f3f5 = 4, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v153b7e3baa828a58e1cd26f3f062decb = function() {
  /** @type {number} */
  var a = -1;
  return this.state.v918097de0c67343d3404e06a560827e3 ? a = v1847d6dd008ed9b56a6f12d60cf3baa6.vfa24e64fd280ac294cb2c3b9f2a2f3f5 : a = this.v5f4cdb6ea6de093c616bf3c15856623b.v0a3909c18cb9353d50fea436a682a98e(), a;
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v994d2493dcc2e547a8d7555604955b9b = function(boundContext) {
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v6f2d4980594b741cffcec6e709def7d4 = function() {
  var that = v13260862a5e36823cb5546b59af48c71.prototype.v6f2d4980594b741cffcec6e709def7d4.call(this);
  var _payload = new v7110465ab3a4b46157d3a1e3a8cc2fe9(this.state.va1d4c079519e74028f642eb03ad9c6a6);
  var max_lines = _payload.v85d3ec3b57e10a644653ebd156127a1c();
  that.partialGoal = this.state.va1d4c079519e74028f642eb03ad9c6a6.partialGoal;
  that.hasGoal = this.state.va1d4c079519e74028f642eb03ad9c6a6.hasGoal;
  that.questionGradePoints = this.state.va1d4c079519e74028f642eb03ad9c6a6.questionGradePoints;
  that.studentStatus = this.v153b7e3baa828a58e1cd26f3f062decb();
  that.projectGrade = _payload.v54c686ebedd549e011a9c239a0bda52d();
  that.totalSteps = max_lines;
  /** @type {!Array} */
  that.studentStepData = [];
  /** @type {number} */
  that.competitionScore = 0;
  that.competitionScoreName = this.state.vc0a206eaca83c0272c7883abfde9a708();
  that.competitionScore = U.round(this.state.v5171d2b8a803a139e8c66c9697632b27(), 2);
  that.simTicks = A.vfe1c4eaec8ec40f848f9772196c532d3().v320dc1600b566774aa8067479359e825();
  this.v994d2493dcc2e547a8d7555604955b9b(that);
  /** @type {number} */
  var line_idx = 0;
  for (; line_idx < max_lines; ++line_idx) {
    var step = _payload.step;
    if (step.v0b88353cab2ac84c769c816374c04688() == 1 || line_idx == max_lines - 1) {
      var track = {};
      that.studentStepData.push(track);
      /** @type {!Array} */
      track.wrongAnswers = [];
      var canvasList = _payload.vf17cf019f3d08beae6fd901e2c35dbfc();
      /** @type {number} */
      var i = 0;
      for (; i < canvasList.length; ++i) {
        var each = canvasList[i];
        if (each.v64885c753f1a2ac4cb90660ac56b0ebf() == 1 && each.vd86e6406fa6b6be128a500e650f063c0() == 0) {
          track.wrongAnswers.push(i);
        }
      }
      track.completed = step.vd2cfefc7ba62bcd6af8f423b6a43419e();
      track.startTime = step.v802454d27ba3fb2ab7b9c02da9a43e52() ? step.v5f91a37ad12cc44b30bf691de8038de1.getTime() : null;
      track.endTime = step.vd2cfefc7ba62bcd6af8f423b6a43419e() ? step.ve78976163e7fb6f4d1b210ba01bd04f9.getTime() : null;
    }
    _payload.v9db475ccb0d3a5c8e3d49c8aa3639b09();
  }
  return that;
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v0b096efd60c1e6fd23a101d35f55d6e0 = function() {
  if (v13260862a5e36823cb5546b59af48c71.prototype.v0b096efd60c1e6fd23a101d35f55d6e0.call(this), this.ve3c7f221fe8898c7a9709e7ec8581f17(), this.v5f4cdb6ea6de093c616bf3c15856623b.vae1f2e4943997b71fd998e8427bfaf5a(true)) {
    this.v32807337688fccef8615e097a02c12fa.v9b5082d15f260cb8c11eb8b1277bc5ae();
    if (this.v5f4cdb6ea6de093c616bf3c15856623b.vfd9f85e6ef4d150d380d673bd9c14e6c()) {
      this.v32807337688fccef8615e097a02c12fa.v3b3a7b2ac5fd147e76038ef35d002c95();
    }
    var a = this.v5f4cdb6ea6de093c616bf3c15856623b.v0a3909c18cb9353d50fea436a682a98e();
    if (a == v2609cf4415e9e2bdeac9bc70c0e1d78d.v8e7ac9ecdf488c922ea4c6aa040d9530) {
      this.v36c4192050cb2f5f8163dc557303ee61();
      this.v4680cebb2ea66de6102c02e228425334(_.bind(function() {
        this.vd555ac80a0d021471a81f19497f2ec2c(this.vb38ec11025af5f77fed59ec9c02ba631.stopDateReachedMessage, U.vc0e6c88f8413e92781b652ae2786391a("Stop Date Reached"));
      }, this));
    }
  }
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.vb7a2577bb36a4fb04dca9d0d6bf59c6c = function(cX1) {
  this.vd555ac80a0d021471a81f19497f2ec2c(cX1, U.vc0e6c88f8413e92781b652ae2786391a("Error Detected"));
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.vae1f2e4943997b71fd998e8427bfaf5a = function(a) {
  if (this.v5f4cdb6ea6de093c616bf3c15856623b != null && this.v5f4cdb6ea6de093c616bf3c15856623b.vae1f2e4943997b71fd998e8427bfaf5a(a.complete, a.v2b06b88b4b74e9bad008259a615da76b, a.progress)) {
    this.v32807337688fccef8615e097a02c12fa.v9b5082d15f260cb8c11eb8b1277bc5ae();
    var b = this.v5f4cdb6ea6de093c616bf3c15856623b.v0a3909c18cb9353d50fea436a682a98e();
    if (b == v2609cf4415e9e2bdeac9bc70c0e1d78d.v8e7ac9ecdf488c922ea4c6aa040d9530) {
      A.v87b8393064cbfa8977b32cec36a69d86().v36c4192050cb2f5f8163dc557303ee61();
      A.v87b8393064cbfa8977b32cec36a69d86().v4680cebb2ea66de6102c02e228425334(_.bind(function() {
        A.v87b8393064cbfa8977b32cec36a69d86().vd555ac80a0d021471a81f19497f2ec2c(this.v5f4cdb6ea6de093c616bf3c15856623b.goalMetMessage, U.vc0e6c88f8413e92781b652ae2786391a("Goal Complete"));
      }, this));
    }
  }
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.evaluateGoal = function(level) {
  var s = v13260862a5e36823cb5546b59af48c71.prototype.evaluateGoal.call(this, level);
  return s.complete = false, s.progress = 0, _.isUndefined(A.vfe1c4eaec8ec40f848f9772196c532d3().va1d4c079519e74028f642eb03ad9c6a6) || _.isObject(this.v9d1327776f3c3332ee003abecbe9bd2d) && this.v9d1327776f3c3332ee003abecbe9bd2d.evaluateGoal == "true" && (this.state.va1d4c079519e74028f642eb03ad9c6a6.v82b5e076243c99ffdb251cf058db9467 || (this.state.va1d4c079519e74028f642eb03ad9c6a6.v82b5e076243c99ffdb251cf058db9467 = new Date)), s;
}, v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v2a548a77dc3dca04fb52bd99fe0d1c6b = function() {
  try {
    simShowReviewWarning();
  } catch (a) {
  }
  /** @type {boolean} */
  this.vb38ec11025af5f77fed59ec9c02ba631.autoSaveEnabled = false;
  /** @type {boolean} */
  this.vb38ec11025af5f77fed59ec9c02ba631.manualSaveEnabled = false;
  /** @type {boolean} */
  this.vb38ec11025af5f77fed59ec9c02ba631.restartLessonEnabled = false;
  /** @type {string} */
  this.vb38ec11025af5f77fed59ec9c02ba631.restartLessonMessage = "You are reviewing your completed Sim exercise and cannot restart the lesson.";
  /** @type {boolean} */
  this.vb38ec11025af5f77fed59ec9c02ba631.goalEvaluationEnabled = false;
  /** @type {boolean} */
  this.vb38ec11025af5f77fed59ec9c02ba631.earlySubmissionEnabled = false;
  /** @type {boolean} */
  this.v5f4cdb6ea6de093c616bf3c15856623b.earlySubmissionEnabled = false;
  this.v32807337688fccef8615e097a02c12fa.v9b5082d15f260cb8c11eb8b1277bc5ae();
}, vab9f4aed6a0c608da64294e108ceb50c.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  return true;
}, vab9f4aed6a0c608da64294e108ceb50c.prototype.v27ab2a6a25e266c079d23d2ce787ff7d = function() {
}, vab9f4aed6a0c608da64294e108ceb50c.prototype.v075a828610f3539bd644a217b12b95c5 = function() {
}, vab9f4aed6a0c608da64294e108ceb50c.prototype.v58eba1f018d212fd60a90a55e3a86b0a = function() {
}, vab9f4aed6a0c608da64294e108ceb50c.prototype.v651ad1a6065df201e85a0b2da71805e3 = function() {
}, Array.prototype.vc2b55451d6b5a973b456d3ad090abf8d = function(a) {
  this.push(a);
}, Array.prototype.vfa21e3bf8ea9d4320d8597afc1052baf = function(array) {
  /** @type {number} */
  var i = 0;
  for (; i < array.length; ++i) {
    this.push(array[i]);
  }
}, Array.prototype.getItemIndex = function(item) {
  return this.indexOf(item);
}, Array.prototype.size = function() {
  /** @type {number} */
  var maxBucketSize = 0;
  var i;
  for (i in this) {
    if (this.hasOwnProperty(i)) {
      maxBucketSize++;
    }
  }
  return maxBucketSize;
}, Array.prototype.vca48a4d192a1c3fdc8f15c910420fc7e = function(num) {
  return this.splice(num, 1)[0];
}, Array.prototype.clone = function() {
  return this.concat();
}, Array.prototype.contains = function(value) {
  return this.indexOf(value) != -1;
}, Array.prototype.v1648352dbaef4fd82fb8158969974646 = function(obj, i) {
  this.splice(i, 0, obj);
}, Array.prototype.vf81b17578abb97a8de755cddbf7f45a9 = function(value) {
  /** @type {number} */
  var i = this.indexOf(value);
  return i > -1 ? this.splice(i, 1)[0] : null;
}, Array.prototype.ve8d2c88ded06dcb91c8f0d5b55dd3044 = function() {
  /** @type {number} */
  this.length = 0;
}, Array.prototype.v68135a2b40c79a3f77a098c466fceeac = function() {
  return this.pop();
}, Array.prototype.vd5125c70224d51bac0e40c325a8e8c1b = function() {
  return this.shift();
}, Array.prototype.va328290d3c67f1f31ff56007b8e2f550 = function() {
  this.push();
}, Array.prototype.v135774e276edbb283fba10cca4f3a120 = function(only) {
  this.unshift(only);
}, Array.prototype.shuffle = function(arr) {
  var route = new v05d11f0f2e0c1a6f360c8611189e4901(arr);
  this.sort(function(b, canCreateDiscussions) {
    return route.va7f5b666e153a7fd316b95fa2a8560ac() < .5 ? -1 : 1;
  });
}, String.prototype.startsWith = function(search) {
  return this.indexOf(search) == 0;
}, String.prototype.endsWith = function(value) {
  return this.indexOf(value, this.length - value.length) !== -1;
}, String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, "");
}, String.prototype.v9386198f1f840d774f6dd42faec29c0a = function() {
  return this.replace(/^\s+/, "");
}, String.prototype.rtrim = function() {
  return this.replace(/\s+$/, "");
}, KMDate.prototype.clone = function() {
  return new KMDate(this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
}, KMDate.prototype.addMonths = function(value) {
  /** @type {number} */
  value = Math.floor(value);
  var d = this.clone();
  if (value == 0) {
    return d;
  }
  var oldCondition = U.sign(value);
  /** @type {number} */
  var i = Math.abs(value);
  /** @type {number} */
  var whichFriend = 0;
  for (; whichFriend < i;) {
    var f = d.getMonth();
    d.setTime(d.getTime() + oldCondition * 60 * 60 * 24 * 1e3);
    if (f != d.getMonth()) {
      whichFriend++;
    }
  }
  return d;
}, KMDate.prototype.getTime = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getTime();
}, KMDate.prototype.setTime = function(time) {
  return this.vce98bb10835aa209bf408c135f438d53.setTime(time);
}, KMDate.prototype.getTimezoneOffset = function() {
  return 0;
}, KMDate.prototype.getDate = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCDate();
}, KMDate.prototype.getDay = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCDay();
}, KMDate.prototype.getFullYear = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCFullYear();
}, KMDate.prototype.getHours = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCHours();
}, KMDate.prototype.getMilliseconds = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCMilliseconds();
}, KMDate.prototype.getMinutes = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCMinutes();
}, KMDate.prototype.getMonth = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCMonth();
}, KMDate.prototype.getSeconds = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCSeconds();
}, KMDate.prototype.getUTCDate = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCDate();
}, KMDate.prototype.getUTCDay = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCDay();
}, KMDate.prototype.getUTCFullYear = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCFullYear();
}, KMDate.prototype.getUTCHours = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCHours();
}, KMDate.prototype.getUTCMilliseconds = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCMilliseconds();
}, KMDate.prototype.getUTCMinutes = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCMinutes();
}, KMDate.prototype.getUTCMonth = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCMonth();
}, KMDate.prototype.getUTCSeconds = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getUTCSeconds();
}, KMDate.prototype.parse = function(chunk) {
  return this.vce98bb10835aa209bf408c135f438d53.parse(chunk);
}, KMDate.prototype.setDate = function(date) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCDate(date);
}, KMDate.prototype.v1abda797fd46fb4306956335ef605dd5 = function(a) {
  this.vce98bb10835aa209bf408c135f438d53.v6c9771458b7df827ef05aa9de7be0773(a);
}, KMDate.prototype.setFullYear = function(y) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCFullYear(y);
}, KMDate.prototype.setHours = function(hours) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCHours(hours);
}, KMDate.prototype.setMilliseconds = function(ms) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCMilliseconds(ms);
}, KMDate.prototype.setMinutes = function(minutes) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCMinutes(minutes);
}, KMDate.prototype.setMonth = function(month) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCMonth(month);
}, KMDate.prototype.setSeconds = function(seconds) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCSeconds(seconds);
}, KMDate.prototype.setUTCDate = function(date) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCDate(date);
}, KMDate.prototype.v6c9771458b7df827ef05aa9de7be0773 = function(v02) {
  this.vce98bb10835aa209bf408c135f438d53.v6c9771458b7df827ef05aa9de7be0773(v02);
}, KMDate.prototype.setUTCFullYear = function(y) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCFullYear(y);
}, KMDate.prototype.setUTCHours = function(hours) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCHours(hours);
}, KMDate.prototype.setUTCMilliseconds = function(ms) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCMilliseconds(ms);
}, KMDate.prototype.setUTCMinutes = function(minutes) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCMinutes(minutes);
}, KMDate.prototype.setUTCMonth = function(month) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCMonth(month);
}, KMDate.prototype.setUTCSeconds = function(seconds) {
  this.vce98bb10835aa209bf408c135f438d53.setUTCSeconds(seconds);
}, KMDate.prototype.toString = function() {
  return this.vce98bb10835aa209bf408c135f438d53.toUTCString();
}, KMDate.prototype.toDateString = function() {
  return this.format("ddd MMM dd yyyy");
}, KMDate.prototype.toTimeString = function() {
  return this.format("hh:mm:ss");
}, KMDate.prototype.toUTCString = function() {
  return this.vce98bb10835aa209bf408c135f438d53.toUTCString();
}, KMDate.prototype.valueOf = function() {
  return this.vce98bb10835aa209bf408c135f438d53.getTime();
}, KMDate.v2fcf16dfff5594cfa1614c820237b41e = new KMDate(1970, 0, 1, 0, 0, 0, 0), KMDate.v14cbf0b8c1f93e62dd191db1badd576b = new KMDate(2100, 0, 1, 0, 0, 0, 0), KMDate.prototype.vd27af54bb43bf6cb309906fc314fd5b3 = function() {
  return this.getDay();
}, KMDate.prototype.v7628c449dcbc7c6cc28cd061c26945cf = function(value) {
  var d = this.clone();
  return d.setTime(d.getTime() + value), d;
}, KMDate.prototype.vf4bec6d559025027a2d14be42bfe4f9a = function(swfUrlStr) {
  var d = this.clone();
  return d.setTime(d.getTime() + swfUrlStr * 1e3), d;
}, KMDate.prototype.addMinutes = function(value) {
  var d = this.clone();
  return d.setTime(d.getTime() + value * 60 * 1e3), d;
}, KMDate.prototype.v614cd05d79c31818a9f2183e2d9bc867 = function(partKeys) {
  var d = this.clone();
  return d.setTime(d.getTime() + partKeys * 60 * 60 * 1e3), d;
}, KMDate.prototype.addDays = function(days) {
  var d = this.clone();
  return d.setTime(d.getTime() + days * 60 * 60 * 24 * 1e3), d;
}, KMDate.prototype.v3d50f6a38b9e18ec7d6869a9c756a637 = function() {
  return this.format("MMM d yyyy");
}, KMDate.prototype.v28a452ca4f46ee7b804495d69f710179 = function() {
  return this.format("M/d/yyyy");
}, KMDate.prototype.vc03d23e2f68882b2997af060948a96d1 = function() {
  return this.format("hh:mm tt");
}, KMDate.prototype.format = function(format) {
  return Globalize.format(this, format);
}, KMDate.prototype.vd4ec57b8a63cc9c153b7464b5b122aff = function() {
  return this.getTime() == KMDate.v2fcf16dfff5594cfa1614c820237b41e.getTime();
}, KMDate.prototype.vd3d91027e2c775a982f70fa24ff451bb = function() {
  return this.getTime() == KMDate.v14cbf0b8c1f93e62dd191db1badd576b.getTime();
}, KMDate.v32706bdbf9f9581e665e9a40d255afc8 = function(a, b) {
  return (a.getTime() - b.getTime()) / 864e5;
}, KMDate.v2262d4fcbfe892cd2a52876c78815765 = function(a, b) {
  return (a.getTime() - b.getTime()) / 36e5;
}, KMDate.v8d19dc02b39be6ea77d183b4cd5949ef = function(a, b) {
  return (a.getTime() - b.getTime()) / 6e4;
}, KMDate.vb915c70ef0cc28589441fe3eebdeb89d = function(logger, from) {
  return (logger.getTime() - from.getTime()) / 1e3;
}, KMDate.prototype.v8c61c72ae33ffd29d01ab1797e4acc34 = function(a, b) {
  return a.getTime() - b.getTime();
}, KMDate.prototype.v976c06c7cb040fb18b380e5c8a8bb6c4 = function(val) {
  return val.getDate() == this.getDate() && val.getMonth() == this.getMonth() && val.getFullYear() == this.getFullYear();
}, KMDate.prototype.vd9653f0b1d7bbb4e1f6dca7e9cdec4c4 = function(sentTime) {
  return sentTime.getMonth() == this.getMonth() && sentTime.getFullYear() == this.getFullYear();
}, KMDate.prototype.vab058fc378b97b670a402982ef18a843 = function(b, aStack) {
  return Math.floor(KMDate.v32706bdbf9f9581e665e9a40d255afc8(b, aStack) / 7) == Math.floor(KMDate.v32706bdbf9f9581e665e9a40d255afc8(this, aStack) / 7);
}, KMDate.prototype.v0a032e7a358add70c7a68bfdc3275fce = function() {
  var day = this.getDay();
  return day > 0 && day < 6;
}, KMDate.prototype.vd7cff435a25d73aafbe29eebf58192e2 = function() {
  /** @type {!Date} */
  var expected_date2 = new Date(this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
  return expected_date2;
}, Date.prototype.format = function(format) {
  return Globalize.format(this, format);
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.onMouseMove = function(event) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v2c8c55808c5bad3b41e3da0c0a838da8 = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.vdc2f88e67acb2768716d43f467174e5c = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v08719502af10e937eaa8122d310cad9f = function(a22) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v90cabce0ce0fad4d69dc9c0dd3f2007c = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.onMouseLeave = function(event) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.vd943b00af6807a4ecd577b69c54cd639 = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v1548eef244bda1da0d2e4b3453e25386 = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v2fb3d73eca68cd0a5c5eaaf74e2a0ff3 = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.vea1287eca9445a1dd99302e5d228ef46 = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v274031ca168e217b24fa1e60d1efcb6f = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v12b5d29d2aab1c5e9bc8649ece6d1b90 = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v49699fc30ba5b5829b8478e248d8838c = function(type) {
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.draw = function(ctx) {
  /** @type {number} */
  this.location.x = Math.floor(this.location.x);
  /** @type {number} */
  this.location.y = Math.floor(this.location.y);
  if (this.v793de667e5638a8684bd3ef05d3c7e8b) {
    ctx.save();
    this.v793de667e5638a8684bd3ef05d3c7e8b(this, ctx);
    ctx.restore();
  }
  /** @type {number} */
  var child = 0;
  for (; child < this.v22710cf6916a48e141cc7ad7876eca98.length; ++child) {
    var obj = this.v22710cf6916a48e141cc7ad7876eca98[child];
    if (obj.cache && A.v87b8393064cbfa8977b32cec36a69d86().va6756a9fbedc852e5e0c575e757acb39) {
      var d = A.v87b8393064cbfa8977b32cec36a69d86().vf9b9f28b5f2e28ff88a0d01459fcddeb(obj);
      if (d) {
        var pos = new Point(obj.location.x - d.vfa2ffa32f4585f9c06efd9d5fb0f66cb, obj.location.y - d.vd013f55ab5e02220232185af65931bc3);
        ctx.drawImage(d, Math.floor(pos.x), Math.floor(pos.y));
      }
    } else {
      obj.draw(ctx);
    }
  }
  if (this.v0c5b846ccaa2b9b45f0dfeb2b858f004 != null) {
    var e = v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.vff5c2344f167d57b7970a504a72f3a80(this.v0c5b846ccaa2b9b45f0dfeb2b858f004);
    if (e != null) {
      var pubDateEl = e.v7d55d9e86f9b71917657598c5783498e;
      var psNode = e.v52c18112e052911261f543ef8d6f25cb;
      pos = new Point(this.location.x - e.v2f12a37f9458da5c8d2fc5bf3ee59908, this.location.y - e.v273d4301f8075b943efc60f4490e9ec9);
      ctx.save();
      if (this.transform.length > 0) {
        ctx.transform(this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5]);
      }
      if (this.flipX) {
        ctx.scale(-1, 1);
        ctx.translate(-(pos.x + this.location.x + e.v2f12a37f9458da5c8d2fc5bf3ee59908), 0);
      }
      ctx.globalAlpha = this.alpha;
      try {
        if (this.color) {
          if (this.v1895b802eec2e417714fd3f3d5b96062 != undefined) {
            v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.vb49993fa5485a0dc148ab79f5c26c94a(ctx, e, this.col, this.row, pos.x, pos.y, this.color, this.v1895b802eec2e417714fd3f3d5b96062);
          } else {
            v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.vb49993fa5485a0dc148ab79f5c26c94a(ctx, e, this.col, this.row, pos.x, pos.y, this.color);
          }
        } else {
          v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.drawImage(ctx, e, this.col, this.row, pos.x, pos.y);
        }
      } catch (controlFlowAction) {
        console.error("Error drawing image: " + this.v0c5b846ccaa2b9b45f0dfeb2b858f004 + ", exception: " + controlFlowAction.message);
      }
      ctx.restore();
    } else {
      console.log("cannot find image " + this.v0c5b846ccaa2b9b45f0dfeb2b858f004);
    }
  }
  if (this.text != "") {
    ctx.save();
    if (this.transform.length > 0) {
      ctx.transform(this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5]);
    }
    ctx.textAlign = this.textAlign;
    ctx.v450414314812e524c5c6790554a4c6dc = this.v450414314812e524c5c6790554a4c6dc;
    ctx.font = this.font;
    ctx.fillStyle = this.fillStyle;
    ctx.fillText(this.text, this.location.x, this.location.y);
    ctx.restore();
  }
  /** @type {number} */
  child = 0;
  for (; child < this.vabde4a187e855cd6fb04c0f6619f306f.length; ++child) {
    obj = this.vabde4a187e855cd6fb04c0f6619f306f[child];
    if (obj.cache && A.v87b8393064cbfa8977b32cec36a69d86().va6756a9fbedc852e5e0c575e757acb39) {
      d = A.v87b8393064cbfa8977b32cec36a69d86().vf9b9f28b5f2e28ff88a0d01459fcddeb(obj);
      if (d) {
        pos = new Point(obj.location.x - d.vfa2ffa32f4585f9c06efd9d5fb0f66cb, obj.location.y - d.vd013f55ab5e02220232185af65931bc3);
        ctx.drawImage(d, Math.floor(pos.x), Math.floor(pos.y));
      }
    } else {
      obj.draw(ctx);
    }
  }
  if (this.v7e5c485c26c0b1b3eb445634ab61d621) {
    ctx.save();
    this.v7e5c485c26c0b1b3eb445634ab61d621(this, ctx);
    ctx.restore();
  }
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v54f9c1e736ab8913a0eddc2aea31b21e = function(a) {
  /** @type {number} */
  var indexLookupKey = this.vabde4a187e855cd6fb04c0f6619f306f.length - 1;
  for (; indexLookupKey >= 0; --indexLookupKey) {
    var lia_2 = this.vabde4a187e855cd6fb04c0f6619f306f[indexLookupKey].v54f9c1e736ab8913a0eddc2aea31b21e(a);
    if (lia_2) {
      return lia_2;
    }
  }
  if (this.clickable && this.v0c5b846ccaa2b9b45f0dfeb2b858f004 != null) {
    var item = v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.vff5c2344f167d57b7970a504a72f3a80(this.v0c5b846ccaa2b9b45f0dfeb2b858f004);
    if (item != null) {
      /** @type {number} */
      var x2 = this.flipX ? item.v7d55d9e86f9b71917657598c5783498e - item.v2f12a37f9458da5c8d2fc5bf3ee59908 - (item.v7d55d9e86f9b71917657598c5783498e - (item.f[0][3] + item.f[0][5])) : item.v2f12a37f9458da5c8d2fc5bf3ee59908 - item.f[0][3];
      var b = new Point(Math.floor(this.location.x - x2), Math.floor(this.location.y - item.v273d4301f8075b943efc60f4490e9ec9 + item.f[0][4]));
      if (a.v0f660c48b7d2f092a53a1b65a9039e39 >= b.x && a.v270a96ae2b77c18fe63278ebb0f7e6ee >= b.y && a.v0f660c48b7d2f092a53a1b65a9039e39 < b.x + item.f[0][5] && a.v270a96ae2b77c18fe63278ebb0f7e6ee < b.y + item.f[0][6]) {
        if (this.flipX) {
          /** @type {number} */
          var daywidth = a.v0f660c48b7d2f092a53a1b65a9039e39 - b.x;
          if (daywidth >= 0) {
            var pos = v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.v71e85883d43313e79449f97f99922efe(item, this.col, this.row, item.f[0][5] - Math.floor(daywidth), Math.floor(a.v270a96ae2b77c18fe63278ebb0f7e6ee - b.y));
            if (pos > 0) {
              return this;
            }
          }
        } else {
          pos = v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.v71e85883d43313e79449f97f99922efe(item, this.col, this.row, Math.floor(a.v0f660c48b7d2f092a53a1b65a9039e39 - b.x), Math.floor(a.v270a96ae2b77c18fe63278ebb0f7e6ee - b.y));
          if (pos > 0) {
            return this;
          }
        }
      }
    }
  }
  /** @type {number} */
  indexLookupKey = this.v22710cf6916a48e141cc7ad7876eca98.length - 1;
  for (; indexLookupKey >= 0; --indexLookupKey) {
    lia_2 = this.v22710cf6916a48e141cc7ad7876eca98[indexLookupKey].v54f9c1e736ab8913a0eddc2aea31b21e(a);
    if (lia_2) {
      return lia_2;
    }
  }
  return null;
}, v74d951e1ef91d0f189e177d58ae30d8e.vdfc12222809106829ad71bf9ca8b2d12 = function(b, a) {
  return b.v0b0a737fbac14d8cde26959a03edb178 == a.v0b0a737fbac14d8cde26959a03edb178 ? a.location.y > b.location.y ? -1 : a.location.y == b.location.y ? a.location.x < b.location.x ? -1 : 1 : 1 : a.v0b0a737fbac14d8cde26959a03edb178 > b.v0b0a737fbac14d8cde26959a03edb178 ? -1 : 1;
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v4f7143c09e9e52ffbc346a53cbb26a8e = function(position) {
  var handleEndCanvas = v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.vff5c2344f167d57b7970a504a72f3a80(this.v0c5b846ccaa2b9b45f0dfeb2b858f004);
  if (!handleEndCanvas) {
    if (this.v22710cf6916a48e141cc7ad7876eca98.length == 0 && this.vabde4a187e855cd6fb04c0f6619f306f.length == 0) {
      return position;
    } else {
      handleEndCanvas = {
        v7d55d9e86f9b71917657598c5783498e : 1,
        v52c18112e052911261f543ef8d6f25cb : 1,
        v2f12a37f9458da5c8d2fc5bf3ee59908 : 1,
        v273d4301f8075b943efc60f4490e9ec9 : 1
      };
    }
  }
  /** @type {number} */
  var left = this.location.x - handleEndCanvas.v7d55d9e86f9b71917657598c5783498e - Math.abs(handleEndCanvas.v2f12a37f9458da5c8d2fc5bf3ee59908 - handleEndCanvas.v7d55d9e86f9b71917657598c5783498e / 2);
  var x = this.location.x + handleEndCanvas.v7d55d9e86f9b71917657598c5783498e + Math.abs(handleEndCanvas.v2f12a37f9458da5c8d2fc5bf3ee59908 - handleEndCanvas.v7d55d9e86f9b71917657598c5783498e / 2);
  /** @type {number} */
  var height = this.location.y - handleEndCanvas.v52c18112e052911261f543ef8d6f25cb - Math.abs(handleEndCanvas.v273d4301f8075b943efc60f4490e9ec9 - handleEndCanvas.v52c18112e052911261f543ef8d6f25cb / 2);
  var y = this.location.y + handleEndCanvas.v52c18112e052911261f543ef8d6f25cb + Math.abs(handleEndCanvas.v273d4301f8075b943efc60f4490e9ec9 - handleEndCanvas.v52c18112e052911261f543ef8d6f25cb / 2);
  return position ? (position.left = Math.min(position.left, left), position.right = Math.max(position.right, x), position.top = Math.min(position.top, height), position.bottom = Math.max(position.bottom, y)) : position = {
    left : left,
    right : x,
    top : height,
    bottom : y
  }, _.each(_.union(this.v22710cf6916a48e141cc7ad7876eca98, this.vabde4a187e855cd6fb04c0f6619f306f), function(mediaModel) {
    position = mediaModel.v4f7143c09e9e52ffbc346a53cbb26a8e(position);
  }, this), position;
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.v37b29309a04e76d4337b499e5cff8fc6 = function(ctx) {
  if (this.v0c5b846ccaa2b9b45f0dfeb2b858f004 != null) {
    var canvas = v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.vff5c2344f167d57b7970a504a72f3a80(this.v0c5b846ccaa2b9b45f0dfeb2b858f004);
    if (canvas != null) {
      var width = canvas.v7d55d9e86f9b71917657598c5783498e;
      var h = canvas.v52c18112e052911261f543ef8d6f25cb;
      var pos = new Point(this.location.x - canvas.v2f12a37f9458da5c8d2fc5bf3ee59908, this.location.y - canvas.v273d4301f8075b943efc60f4490e9ec9);
      ctx.save();
      if (this.transform.length > 0) {
        ctx.transform(this.transform[0], this.transform[1], this.transform[2], this.transform[3], this.transform[4], this.transform[5]);
      }
      if (this.flipX) {
        ctx.scale(-1, 1);
        ctx.translate(-(pos.x + this.location.x + canvas.v2f12a37f9458da5c8d2fc5bf3ee59908), 0);
      }
      v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.drawImage(ctx, canvas, this.col, this.row, pos.x, pos.y, width, h);
      ctx.strokeRect(pos.x, pos.y, width, h);
      /** @type {string} */
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(this.location.x - 3, this.location.y - 3, 6, 6);
      ctx.restore();
    }
  }
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.vef450b53cda007c38e17f579f345877b = function(width, height, start) {
  this.location.x += width;
  this.location.y += height;
  this.draw(start);
}, v74d951e1ef91d0f189e177d58ae30d8e.prototype.vbaa69230893d6d2f0ae8d595728cb432 = function() {
  if (!this.v1917f14965df083150b1374c9a97c9d7) {
    this.v1917f14965df083150b1374c9a97c9d7 = this.v0c5b846ccaa2b9b45f0dfeb2b858f004;
  }
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  this.onMouseMove = function(event) {
    A.v87b8393064cbfa8977b32cec36a69d86().canvas.css("cursor", "pointer");
  };
  /**
   * @param {!Event} event
   * @return {undefined}
   */
  this.onMouseLeave = function(event) {
    A.v87b8393064cbfa8977b32cec36a69d86().canvas.css("cursor", "default");
  };
}, vf813c7d84bb4b3941f3712a3a50e9f2e.prototype.load = function(b) {
  var o = this;
  /** @type {!Image} */
  this.image = new Image;
  /**
   * @return {undefined}
   */
  this.image.onload = function() {
    if (o.v7d55d9e86f9b71917657598c5783498e == undefined) {
      /** @type {number} */
      o.v7d55d9e86f9b71917657598c5783498e = o.image.width / o.cols;
    }
    if (o.v52c18112e052911261f543ef8d6f25cb == undefined) {
      /** @type {number} */
      o.v52c18112e052911261f543ef8d6f25cb = o.image.height / o.rows;
    }
    b(o);
  };
  /** @type {string} */
  this.image.crossOrigin = "anonymous";
  this.image.src = v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + this.url;
}, v5b2d49b6f83f05f0edcd351a1640c3e4.prototype.load = function(n) {
  var out = this;
  $.get(v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + this.url, function(data) {
    out.rows = v5b2d49b6f83f05f0edcd351a1640c3e4.parse(data, out.type);
    n(out);
  });
}, v5b2d49b6f83f05f0edcd351a1640c3e4.parse = function(str, l) {
  var html_passwords_serialize = str.toString();
  html_passwords_serialize = html_passwords_serialize.replace(/\r\n/g, "\n");
  var dragAreas = html_passwords_serialize.split("\n");
  if (dragAreas.length <= 0) {
    throw new Error("Splitting record data by \\n yielded no records!");
  }
  /** @type {!Array} */
  var simplified = [];
  var target;
  var variable;
  /** @type {boolean} */
  var g = true;
  /** @type {boolean} */
  var e = false;
  /** @type {number} */
  var i = 0;
  for (; i < dragAreas.length; ++i) {
    var d = dragAreas[i];
    if (d.length > 0) {
      if (g) {
        target = d.split("\t");
        /** @type {boolean} */
        g = false;
        /** @type {boolean} */
        e = true;
      } else {
        if (e) {
          variable = d.split("\t");
          /** @type {boolean} */
          e = false;
        } else {
          var i = v5b2d49b6f83f05f0edcd351a1640c3e4.v908cb187ead78ac82baacb1f8bfb3a24(l, d, target, variable);
          simplified.push(i);
        }
      }
    }
  }
  return simplified;
}, v5b2d49b6f83f05f0edcd351a1640c3e4.v908cb187ead78ac82baacb1f8bfb3a24 = function(type$jscomp$113, dat$jscomp$0, propertyData$jscomp$0, typeData$jscomp$0) {
  var values$jscomp$5 = dat$jscomp$0.split("\t");
  if (values$jscomp$5.length != propertyData$jscomp$0.length) {
    console.log("Data consistency check failed while reading table for type '" + type$jscomp$113 + "' please check the table file for consistent tabs.");
  }
  eval("var newObject = new " + type$jscomp$113 + "();");
  /** @type {number} */
  var i$jscomp$20 = 0;
  for (; i$jscomp$20 < propertyData$jscomp$0.length; ++i$jscomp$20) {
    var prop$jscomp$4 = propertyData$jscomp$0[i$jscomp$20];
    v5b2d49b6f83f05f0edcd351a1640c3e4.v5a0ed1e9eb3fca8aac1c2168935be137(newObject, prop$jscomp$4, values$jscomp$5[i$jscomp$20], typeData$jscomp$0[i$jscomp$20]);
  }
  return newObject;
}, v5b2d49b6f83f05f0edcd351a1640c3e4.v5a0ed1e9eb3fca8aac1c2168935be137 = function(obj, a, v, type) {
  if (type == "int") {
    /** @type {number} */
    obj[a] = parseInt(v);
  } else {
    if (type == "number") {
      /** @type {number} */
      obj[a] = parseFloat(v);
    } else {
      if (type == "boolean") {
        var writePermissions = v.toLowerCase();
        if (writePermissions == "false") {
          /** @type {boolean} */
          obj[a] = false;
        } else {
          /** @type {boolean} */
          obj[a] = true;
        }
      } else {
        if (type == "string") {
          /** @type {string} */
          obj[a] = v;
        } else {
          throw new Error("The value " + v + " for the property " + a + " could not be converted to this.type " + type + ".");
        }
      }
    }
  }
}, vd3a20b3f053d0b94eba2b5fcbac7523d.prototype.load = function(k) {
  var params = this;
  $.get(v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + this.url, function(docDom) {
    params.v39c98e1a3aa9bd7d016b2710791c5d06 = docDom;
    k(params);
  });
}, vd3a20b3f053d0b94eba2b5fcbac7523d.prototype.v4b8b6ade5ab1fbe18dced948a5ae9bdd = function() {
  return $(_.trim(this.v39c98e1a3aa9bd7d016b2710791c5d06));
}, v98d829b48a3d1a2b42d1454357ce024d.prototype.load = function(c) {
  var self = this;
  var GROUP_UPDATE_INFO_URL = this.vfc9214bee2fe51fc220c868f8b575920.shift().replace(/([^:]\/)\/+/g, "$1");
  $.ajax({
    url : v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + GROUP_UPDATE_INFO_URL,
    dataType : "json",
    success : function(b) {
      _.merge(self.data, b);
      if (self.vfc9214bee2fe51fc220c868f8b575920.length > 0) {
        self.load(c);
      } else {
        c(self);
      }
    },
    error : function(deleted_model, err, op) {
      console.error("error loading '" + GROUP_UPDATE_INFO_URL + "' potentially a JSON syntax error?");
    }
  });
}, v251b1192a8aabb238f203138491e353a.v005684b915b5a97d60be77c943b3e4a4 = {
  v6f6af5821e7f2c9e462faf23399467d4 : 0,
  v2a2466df80efaf2ecfb92b22df8f50f5 : 1
}, v251b1192a8aabb238f203138491e353a.prototype.vff5c2344f167d57b7970a504a72f3a80 = function(type) {
  return this.data[type];
}, v251b1192a8aabb238f203138491e353a.prototype.v8c9f88e1e8f08a495ed718e4eee92167 = function(s, ch, i) {
  var src = this.vff5c2344f167d57b7970a504a72f3a80(s);
  var img_options = src.f[i * src.cols + ch];
  return {
    width : img_options[5],
    height : img_options[6]
  };
}, v251b1192a8aabb238f203138491e353a.vf7625e7f966d1b5f69e4ab41f1b5c11b = 500, v251b1192a8aabb238f203138491e353a.prototype.v1c8360e08276fa426d5eaea5bcc38c52 = function() {
  return 1 + this.vb024f1202091e1d4ec998faf653fb572 * v251b1192a8aabb238f203138491e353a.vf7625e7f966d1b5f69e4ab41f1b5c11b;
}, v251b1192a8aabb238f203138491e353a.prototype.load = function(a, fn) {
  var self = this;
  /**
   * @return {undefined}
   */
  var init = function() {
    if (self.data.pages && (self.vb024f1202091e1d4ec998faf653fb572 = self.data.pages, self.data = self.data.vdff4ac030f06153a5cd7fce8393c6287), self.pages.length < self.vb024f1202091e1d4ec998faf653fb572) {
      /** @type {!Image} */
      var img = new Image;
      /**
       * @return {undefined}
       */
      img.onload = function() {
        /** @type {boolean} */
        img.v0acdb25013fe1aaae64a44ee88a827bc = true;
        window.URL.revokeObjectURL(img.src);
        var results = _.filter(self.pages, function(a) {
          return a.v0acdb25013fe1aaae64a44ee88a827bc;
        });
        if (results.length == self.vb024f1202091e1d4ec998faf653fb572) {
          a(self);
        }
      };
      /** @type {string} */
      img.crossOrigin = "anonymous";
      var _li = self.pages.length;
      self.pages.push(img);
      /** @type {string} */
      var _audioURL = v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + self.v0bffef285d80921ccd3581ec9176949d + "page" + _li + ".png";
      /** @type {!XMLHttpRequest} */
      var request = new XMLHttpRequest;
      /** @type {number} */
      var lastBytesLoaded = 0;
      /** @type {boolean} */
      var h = false;
      request.addEventListener("progress", function(event) {
        if (!event.lengthComputable) {
          /** @type {boolean} */
          h = true;
          return;
        }
        /** @type {number} */
        var dist = (event.loaded - lastBytesLoaded) / event.total;
        lastBytesLoaded = event.loaded;
        fn(dist * v251b1192a8aabb238f203138491e353a.vf7625e7f966d1b5f69e4ab41f1b5c11b);
        self.loadSize -= dist * v251b1192a8aabb238f203138491e353a.vf7625e7f966d1b5f69e4ab41f1b5c11b;
      });
      request.addEventListener("load", function(canCreateDiscussions) {
        if (this.status == 200) {
          /** @type {!Blob} */
          var blob = new Blob([this.response], {
            type : "image/png"
          });
        }
        img.src = window.URL.createObjectURL(blob);
        if (h) {
          fn(v251b1192a8aabb238f203138491e353a.vf7625e7f966d1b5f69e4ab41f1b5c11b);
        }
        init();
      });
      request.open("GET", _audioURL, true);
      /** @type {string} */
      request.responseType = "blob";
      request.send(null);
    }
  };
  $.ajax({
    url : v13260862a5e36823cb5546b59af48c71.instance.vc8cc06a7040ac6611a967371d4ca4a2d() + this.url + "?r=1",
    dataType : "json",
    success : function(d) {
      /** @type {string} */
      self.data = d;
      fn(1);
      self.loadSize--;
      init();
    },
    error : function(deleted_model, err, op) {
      console.error("error loading '" + self.url + "' potentially a JSON syntax error?");
    }
  });
  var _ff = U.vbd63f13862e2b4ca4c6354cffb8123c0(this.v79b4a854ca27aff40a2568ed786ac60f, this.v79b4a854ca27aff40a2568ed786ac60f);
  this.v5cfd2950ac4a986bdbf15c7b6d23d79f = _ff.canvas;
  this.vbf330b53209d0944c7cb53186c99d16c = _ff.context;
}, v251b1192a8aabb238f203138491e353a.prototype.v53abe54ee656127611f8e011255e96b2 = function(b, i, x) {
  if (_.isString(b)) {
    b = this.vff5c2344f167d57b7970a504a72f3a80(b);
  }
  var a = b.f[x * b.cols + i];
  var page = this.pages[a[0]];
  var $realtime = $("<canvas width=" + b.v7d55d9e86f9b71917657598c5783498e + "px height=" + b.v52c18112e052911261f543ef8d6f25cb + "px>");
  var lCanvas = $realtime[0];
  var _context = lCanvas.getContext("2d");
  return _context.drawImage(this.pages[a[0]], a[1], a[2], a[5], a[6], a[3], a[4], a[5], a[6]), lCanvas.toDataURL();
}, v251b1192a8aabb238f203138491e353a.prototype.vbf8e2df2ca388d714195e268a3817f20 = function(b, i, x) {
  if (_.isString(b)) {
    b = this.vff5c2344f167d57b7970a504a72f3a80(b);
  }
  var region = b.f[x * b.cols + i];
  var page = this.pages[region[0]];
  var $realtime = $("<canvas width=" + region[5] + "px height=" + region[6] + "px>");
  var lCanvas = $realtime[0];
  var ctx = lCanvas.getContext("2d");
  return ctx.drawImage(this.pages[region[0]], region[1], region[2], region[5], region[6], 0, 0, region[5], region[6]), lCanvas.toDataURL();
}, v251b1192a8aabb238f203138491e353a.prototype.vf012641c8e96bcac5ad5e80805c8a1d6 = function(path, from, body, i) {
  path.attr("src", this.v53abe54ee656127611f8e011255e96b2(from, body, i));
}, v251b1192a8aabb238f203138491e353a.prototype.vb49993fa5485a0dc148ab79f5c26c94a = function(ctx, result, j, i, dx, dy, index, searcharg) {
  var a = result.f[i * result.cols + j];
  if (a[5] <= 0 || a[6] <= 0) {
    return;
  }
  if (index == 16777215) {
    ctx.drawImage(this.pages[a[0]], a[1], a[2], a[5], a[6], a[3] + dx, a[4] + dy, a[5], a[6]);
  } else {
    if (searcharg == undefined) {
      /** @type {number} */
      searcharg = v251b1192a8aabb238f203138491e353a.v005684b915b5a97d60be77c943b3e4a4.v6f6af5821e7f2c9e462faf23399467d4;
    }
    /** @type {string} */
    var name = a[0] + "_" + a[1] + "_" + a[2] + "_" + a[5] + "_" + a[6] + "_" + index;
    var frame = this.vdda7a6d2851bf230166029a566d75e81[name];
    if (frame == undefined) {
      if (this.v2926b9875acf8acb0800427415cb9f2f + a[5] >= this.v79b4a854ca27aff40a2568ed786ac60f) {
        /** @type {number} */
        this.v2926b9875acf8acb0800427415cb9f2f = 0;
        this.v32293d40f492de4f18cf76df38594417 += this.v7c2162e1488027289d926b7d78a3ee55;
      }
      if (this.v32293d40f492de4f18cf76df38594417 + a[6] >= this.v79b4a854ca27aff40a2568ed786ac60f) {
        /** @type {number} */
        this.v2926b9875acf8acb0800427415cb9f2f = 0;
        /** @type {number} */
        this.v32293d40f492de4f18cf76df38594417 = 0;
        /** @type {number} */
        this.v7c2162e1488027289d926b7d78a3ee55 = 0;
        this.vdda7a6d2851bf230166029a566d75e81 = {};
        this.vbf330b53209d0944c7cb53186c99d16c.clearRect(0, 0, this.v79b4a854ca27aff40a2568ed786ac60f, this.v79b4a854ca27aff40a2568ed786ac60f);
      }
      /** @type {!Array} */
      frame = [this.v2926b9875acf8acb0800427415cb9f2f, this.v32293d40f492de4f18cf76df38594417];
      /** @type {number} */
      this.v7c2162e1488027289d926b7d78a3ee55 = Math.max(this.v7c2162e1488027289d926b7d78a3ee55, a[6]);
      /** @type {!Array} */
      this.vdda7a6d2851bf230166029a566d75e81[name] = frame;
      /** @type {number} */
      var maskedIndex = index & 255;
      /** @type {number} */
      var k = index >> 8 & 255;
      /** @type {number} */
      var rightFactor = index >> 16 & 255;
      this.vbf330b53209d0944c7cb53186c99d16c.drawImage(this.pages[a[0]], a[1], a[2], a[5], a[6], this.v2926b9875acf8acb0800427415cb9f2f, this.v32293d40f492de4f18cf76df38594417, a[5], a[6]);
      var imageData = this.vbf330b53209d0944c7cb53186c99d16c.getImageData(this.v2926b9875acf8acb0800427415cb9f2f, this.v32293d40f492de4f18cf76df38594417, a[5], a[6]);
      var data = imageData.data;
      switch(searcharg) {
        case v251b1192a8aabb238f203138491e353a.v005684b915b5a97d60be77c943b3e4a4.v6f6af5821e7f2c9e462faf23399467d4:
          /** @type {number} */
          var offset = 0;
          for (; offset < data.length; offset = offset + 4) {
            /** @type {number} */
            data[offset] = data[offset] * rightFactor / 255;
            /** @type {number} */
            data[offset + 1] = data[offset + 1] * k / 255;
            /** @type {number} */
            data[offset + 2] = data[offset + 2] * maskedIndex / 255;
          }
          break;
        case v251b1192a8aabb238f203138491e353a.v005684b915b5a97d60be77c943b3e4a4.v2a2466df80efaf2ecfb92b22df8f50f5:
          /** @type {number} */
          offset = 0;
          for (; offset < data.length; offset = offset + 4) {
            /** @type {number} */
            data[offset] = U.clamp(1 - (1 - data[offset] / 255) / (rightFactor / 255)) * 255;
            /** @type {number} */
            data[offset + 1] = U.clamp(1 - (1 - data[offset + 1] / 255) / (k / 255)) * 255;
            /** @type {number} */
            data[offset + 2] = U.clamp(1 - (1 - data[offset + 2] / 255) / (maskedIndex / 255)) * 255;
          }
          break;
      }
      this.vbf330b53209d0944c7cb53186c99d16c.putImageData(imageData, this.v2926b9875acf8acb0800427415cb9f2f, this.v32293d40f492de4f18cf76df38594417);
      this.v2926b9875acf8acb0800427415cb9f2f += a[5];
    }
    ctx.drawImage(this.v5cfd2950ac4a986bdbf15c7b6d23d79f, frame[0], frame[1], a[5], a[6], a[3] + dx, a[4] + dy, a[5], a[6]);
  }
}, v251b1192a8aabb238f203138491e353a.prototype.drawImage = function(ctx, c, b, x, dx, dy) {
  var source = c.f[x * c.cols + b];
  if (source[5] <= 0 || source[6] <= 0) {
    return;
  }
  ctx.drawImage(this.pages[source[0]], source[1], source[2], source[5], source[6], source[3] + dx, source[4] + dy, source[5], source[6]);
}, v251b1192a8aabb238f203138491e353a.prototype.v71e85883d43313e79449f97f99922efe = function(model, _, i, x, y) {
  var region = model.f[i * model.cols + _];
  var $realtime = $("<canvas>");
  var regionCanvas = $realtime[0];
  var ctx = regionCanvas.getContext("2d");
  regionCanvas.width = region[5];
  regionCanvas.height = region[6];
  if (region[5] > 0 && region[6] > 0) {
    ctx.drawImage(this.pages[region[0]], region[1], region[2], region[5], region[6], 0, 0, region[5], region[6]);
  }
  /** @type {number} */
  x = Math.max(0, Math.min(regionCanvas.width - 1, x));
  /** @type {number} */
  y = Math.max(0, Math.min(regionCanvas.height - 1, y));
  var g = ctx.getImageData(x, y, 1, 1);
  return g.data[3];
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), v16cee3ee62f4283e2aa83ff23503aa30.prototype.constructor = v16cee3ee62f4283e2aa83ff23503aa30, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v5ade6f2f5a1f2d10c4bb670808c99f85 = function() {
  return this.v7554fd520f800257b7fbbc83fbcad801.clone();
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v46d9c2aea57ee009b9ab339d4478978a = function(a) {
  this.v7554fd520f800257b7fbbc83fbcad801 = a.clone();
  this.v76322c01d080c418c8047a103708ac74();
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v7d621940c197d52e7b9b3f34ecd47565 = function() {
  return this.v78a36276c7c9d57c54ebcd7e252c2fc5.clone();
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v2735e1edb125e89ab566ab1cef76d0d8 = function(prefixTransliterations) {
  this.v78a36276c7c9d57c54ebcd7e252c2fc5 = prefixTransliterations.clone();
  this.v76322c01d080c418c8047a103708ac74();
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.vacc9dc0670a2a73a01ec27dcb962c593 = function() {
  return this.v0f43c39807c96cd6fc98a5cc74759d9a;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.vcecae7630817bbe4e45a64aabde08a54 = function(a) {
  this.v0f43c39807c96cd6fc98a5cc74759d9a = a.clone();
  if (this.v0f43c39807c96cd6fc98a5cc74759d9a != null && this.v0f43c39807c96cd6fc98a5cc74759d9a.length > 0) {
    this.v2735e1edb125e89ab566ab1cef76d0d8(this.v0f43c39807c96cd6fc98a5cc74759d9a[0]);
    this.v0f43c39807c96cd6fc98a5cc74759d9a.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  } else {
    this.v2735e1edb125e89ab566ab1cef76d0d8(this.v5ade6f2f5a1f2d10c4bb670808c99f85());
  }
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v6c6af636a90a4cd0693bc2098e47580f = function() {
  return this.v1091d737cec126d4163cba4d0f8963fd;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v359abcfffa6d67a9b9f67e93bef327c7 = function(actual_score) {
  /** @type {number} */
  this.v1091d737cec126d4163cba4d0f8963fd = actual_score;
  this.v76322c01d080c418c8047a103708ac74();
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.vb89349ff94c58c5b1ee3e477794c167b = function(a) {
  return this.v6c6af636a90a4cd0693bc2098e47580f() / a;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.vdd0a665d52ffc6144efaf99c9beec74c = function(b, mapSize) {
  this.v359abcfffa6d67a9b9f67e93bef327c7(b * mapSize);
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v76322c01d080c418c8047a103708ac74 = function() {
  if (!this.v324a28bb5c50ed83b064d9f13e915b23) {
    this.v324a28bb5c50ed83b064d9f13e915b23 = {
      dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
    };
  }
  this.v5e8b6d592234e517098ff97595f68703 = this.v324a28bb5c50ed83b064d9f13e915b23.dt;
  var time = U.vc1f415498343451365676d8a0e41ec71(this.v78a36276c7c9d57c54ebcd7e252c2fc5, this.v7554fd520f800257b7fbbc83fbcad801);
  if (time == 0) {
    /** @type {number} */
    this.v03eaec21ea318bf45ad1ccbb041ea5e4 = 0;
    /** @type {number} */
    this.va359d4e8388ec27ff74fa1c2c7b7a983 = 0;
    /** @type {number} */
    this.v47ab9094f7763ada19867ee0131af83f = 0;
    return;
  }
  /** @type {number} */
  var speed = this.v1091d737cec126d4163cba4d0f8963fd / time;
  /** @type {number} */
  var growth = (this.v78a36276c7c9d57c54ebcd7e252c2fc5.x - this.v7554fd520f800257b7fbbc83fbcad801.x) * speed;
  /** @type {number} */
  var accelSpeed = (this.v78a36276c7c9d57c54ebcd7e252c2fc5.y - this.v7554fd520f800257b7fbbc83fbcad801.y) * speed;
  /** @type {number} */
  this.va359d4e8388ec27ff74fa1c2c7b7a983 = growth * this.v324a28bb5c50ed83b064d9f13e915b23.dt;
  /** @type {number} */
  this.v47ab9094f7763ada19867ee0131af83f = accelSpeed * this.v324a28bb5c50ed83b064d9f13e915b23.dt;
  /** @type {number} */
  this.v03eaec21ea318bf45ad1ccbb041ea5e4 = 1 / (speed * this.v324a28bb5c50ed83b064d9f13e915b23.dt);
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.ve8242717100aa0bda70572e93fec612f = function() {
  if (this.v324a28bb5c50ed83b064d9f13e915b23 || (this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  }), this.v324a28bb5c50ed83b064d9f13e915b23.dt != this.v5e8b6d592234e517098ff97595f68703 && this.v76322c01d080c418c8047a103708ac74(), this.v03eaec21ea318bf45ad1ccbb041ea5e4 < 0 && (this.v76322c01d080c418c8047a103708ac74(), delete this.dx, delete this.dy), this.v7554fd520f800257b7fbbc83fbcad801.x += this.va359d4e8388ec27ff74fa1c2c7b7a983, this.v7554fd520f800257b7fbbc83fbcad801.y += this.v47ab9094f7763ada19867ee0131af83f, this.v03eaec21ea318bf45ad1ccbb041ea5e4 > 1) {
    return this.v324a28bb5c50ed83b064d9f13e915b23.dt = 0, this.v03eaec21ea318bf45ad1ccbb041ea5e4--, false;
  }
  this.v324a28bb5c50ed83b064d9f13e915b23.dt -= this.v03eaec21ea318bf45ad1ccbb041ea5e4-- * v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep;
  /** @type {boolean} */
  var a = true;
  return this.v7554fd520f800257b7fbbc83fbcad801.x = this.v78a36276c7c9d57c54ebcd7e252c2fc5.x, this.v7554fd520f800257b7fbbc83fbcad801.y = this.v78a36276c7c9d57c54ebcd7e252c2fc5.y, this.v0f43c39807c96cd6fc98a5cc74759d9a != null && this.v0f43c39807c96cd6fc98a5cc74759d9a.length > 0 && (this.v78a36276c7c9d57c54ebcd7e252c2fc5.x = this.v0f43c39807c96cd6fc98a5cc74759d9a[0].x, this.v78a36276c7c9d57c54ebcd7e252c2fc5.y = this.v0f43c39807c96cd6fc98a5cc74759d9a[0].y, this.v76322c01d080c418c8047a103708ac74(),
  this.v0f43c39807c96cd6fc98a5cc74759d9a.shift(), this.vf007717c61efd32d684694a8c20954de != null && this.vf007717c61efd32d684694a8c20954de.length > 0 && (this.v359abcfffa6d67a9b9f67e93bef327c7(this.vf007717c61efd32d684694a8c20954de[0]), this.vf007717c61efd32d684694a8c20954de.shift()), a = false), a;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v67f755d57e224475f8072c6d8b61d958 = function(inPtB) {
  return Math.sqrt(Math.pow(this.v7554fd520f800257b7fbbc83fbcad801.x - inPtB.x, 2) + Math.pow(this.v7554fd520f800257b7fbbc83fbcad801.y - inPtB.y, 2));
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.orientation = function() {
  /** @type {string} */
  var possibleDirections = "";
  return this.v47ab9094f7763ada19867ee0131af83f > 0 ? possibleDirections = possibleDirections + "S" : possibleDirections = possibleDirections + "N", this.va359d4e8388ec27ff74fa1c2c7b7a983 > 0 ? possibleDirections = possibleDirections + "E" : possibleDirections = possibleDirections + "W", possibleDirections;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v0b0231b5de3180b1b9b2365576e17531 = function() {
  var rect = {};
  return this.va359d4e8388ec27ff74fa1c2c7b7a983 <= 0 && this.v47ab9094f7763ada19867ee0131af83f < 0 && (rect.flipX = false, rect.index = 0), this.va359d4e8388ec27ff74fa1c2c7b7a983 >= 0 && this.v47ab9094f7763ada19867ee0131af83f < 0 && (rect.flipX = true, rect.index = 0), this.va359d4e8388ec27ff74fa1c2c7b7a983 <= 0 && this.v47ab9094f7763ada19867ee0131af83f >= 0 && (rect.flipX = false, rect.index = 1), this.va359d4e8388ec27ff74fa1c2c7b7a983 >= 0 && this.v47ab9094f7763ada19867ee0131af83f >= 0 && (rect.flipX =
  true, rect.index = 1), rect;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v7fb2c825480a8b1394d73cc7b5b8ba45 = function() {
  /** @type {number} */
  var value = Math.atan2(-this.v47ab9094f7763ada19867ee0131af83f, this.va359d4e8388ec27ff74fa1c2c7b7a983);
  return value = value * (180 / Math.PI), value < 0 && (value = value + 360), value >= 345 && value < 360 || value >= 0 && value < 15 ? "E" : value >= 15 && value < 67.5 ? "NE" : value >= 67.5 && value < 112.5 ? "N" : value >= 112.5 && value < 165 ? "NW" : value >= 165 && value < 195 ? "W" : value >= 195 && value < 248.5 ? "SW" : value >= 248.5 && value < 292.5 ? "S" : value >= 292.5 && value < 345 ? "SE" : value.toString() + "Error";
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.v3c78316160c0d25a93a989de5782ae11 = function() {
  /** @type {number} */
  var value = Math.atan2(-this.v47ab9094f7763ada19867ee0131af83f, this.va359d4e8388ec27ff74fa1c2c7b7a983);
  return value = value * (180 / Math.PI), value < 0 && (value = value + 360), value >= 345 && value < 360 || value >= 0 && value < 15 ? 2 : value >= 15 && value < 67.5 ? 3 : value >= 67.5 && value < 112.5 ? 4 : value >= 112.5 && value < 165 ? 5 : value >= 165 && value < 195 ? 6 : value >= 195 && value < 248.5 ? 7 : value >= 248.5 && value < 292.5 ? 0 : value >= 292.5 && value < 345 ? 1 : -1;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.vcbb06068244e8b84596afe5f17f27ca1 = function() {
  return this.vf007717c61efd32d684694a8c20954de;
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.vf1cac9e1e9820afb63a8a4296c157368 = function(prefixTransliterations) {
  this.vf007717c61efd32d684694a8c20954de = prefixTransliterations.clone();
  if (this.vf007717c61efd32d684694a8c20954de != null && this.vf007717c61efd32d684694a8c20954de.length > 0) {
    this.v359abcfffa6d67a9b9f67e93bef327c7(this.vf007717c61efd32d684694a8c20954de[0]);
    this.vf007717c61efd32d684694a8c20954de.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
}, v16cee3ee62f4283e2aa83ff23503aa30.prototype.ve8b5a86145837d972a1f03d6fd2e0b0d = function(name, format) {
  /** @type {!Array} */
  var breakMap = [];
  var s = v13260862a5e36823cb5546b59af48c71.instance.imageAtlas.vff5c2344f167d57b7970a504a72f3a80(name);
  if (s == null) {
    console.error("Could not get resource for MovableActiveObject with imageName: " + name);
  }
  var target = new v74d951e1ef91d0f189e177d58ae30d8e(this.v5ade6f2f5a1f2d10c4bb670808c99f85(), name);
  var object = this.v0b0231b5de3180b1b9b2365576e17531();
  return format != undefined && (object.index = format[0] == "N" ? 0 : 1, object.flipX = format[1] == "E"), s.rows > 1 && (target.row = object.index), target.col = (v13260862a5e36823cb5546b59af48c71.instance.state.v857e210de5749cc6dd2313995353b70e + this.vebc3a5aa83c5f1cd47eec10d259d0517) % s.cols, target.flipX = object.flipX, breakMap.vc2b55451d6b5a973b456d3ad090abf8d(target), breakMap;
}, v05d11f0f2e0c1a6f360c8611189e4901.prototype = Object.create(Object.prototype), v05d11f0f2e0c1a6f360c8611189e4901.prototype.constructor = v05d11f0f2e0c1a6f360c8611189e4901, v05d11f0f2e0c1a6f360c8611189e4901.prototype.next = function(v) {
  return v == undefined && (v = U.vdfcca307a0489ee3baf51069dd57c8b3), v = Math.floor(v), Math.floor(this.va7f5b666e153a7fd316b95fa2a8560ac() * v);
}, v05d11f0f2e0c1a6f360c8611189e4901.prototype.va7f5b666e153a7fd316b95fa2a8560ac = function() {
  /** @type {number} */
  var a = this.v160d845e0a5b9f70de589a9ec781864f * 16807 % 2147483647;
  /** @type {number} */
  this.v160d845e0a5b9f70de589a9ec781864f = a;
  /** @type {number} */
  var b = this.v160d845e0a5b9f70de589a9ec781864f / 2147483647 + 233e-12;
  return b;
}, v05d11f0f2e0c1a6f360c8611189e4901.prototype.vc620340a78b452026a29f2ec05b4664f = function(op, cursor) {
  return Math.floor(this.va7f5b666e153a7fd316b95fa2a8560ac() * (cursor - op)) + op;
}, v2464891fa5ee15f3ab68694893198f32.prototype = Object.create(v05d11f0f2e0c1a6f360c8611189e4901.prototype), v2464891fa5ee15f3ab68694893198f32.prototype.constructor = v2464891fa5ee15f3ab68694893198f32, v2464891fa5ee15f3ab68694893198f32.prototype.va7f5b666e153a7fd316b95fa2a8560ac = function() {
  var startStep = v05d11f0f2e0c1a6f360c8611189e4901.prototype.va7f5b666e153a7fd316b95fa2a8560ac.call(this);
  /** @type {string} */
  var val = "CALL NUM: " + this.v4657b82405d9c8bc71fea22f91f1dfae++ + " returning: " + startStep;
  return A.vfe1c4eaec8ec40f848f9772196c532d3() && (val = val + (" at " + A.vfe1c4eaec8ec40f848f9772196c532d3().now.v3d50f6a38b9e18ec7d6869a9c756a637() + " " + A.vfe1c4eaec8ec40f848f9772196c532d3().now.toTimeString())), console.log(val), console.trace(), startStep;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048 = 0, vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a = 1, vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353 = 2, vfe39ece2a85b3dcccfd78b6d58d6c9de.v03dd3a607848d3852c5d2d6ba0e45ea2 = 3, vfe39ece2a85b3dcccfd78b6d58d6c9de.vb4f7d08573430f974708d7e4a29b9eb2 = 4, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.init = function() {
  /** @type {number} */
  var b = 0;
  for (; b < 5; b++) {
    this.v4b316bb4b1292e8513b0e7429bac4513.push([]);
    this.v17e110444bb9b5cd6e74d14f2affc3a7.push([]);
  }
  var limit = this.settings.RandomSeed;
  if (limit == -1) {
    limit = _.floor(Math.random() * 2147483647);
    this.settings.RandomSeed = limit;
    this.random = new v05d11f0f2e0c1a6f360c8611189e4901(limit);
  } else {
    this.random = new v05d11f0f2e0c1a6f360c8611189e4901(limit);
  }
  if (this.settings.StartDate != null) {
    this.now = this.settings.StartDate;
  } else {
    this.now = new KMDate(2015, 1, 1);
  }
  this.v5ef584a9983ae0f6c9cb691b041b4e1a = this.now.getTime();
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v6865b56811669f2eac31d4d77b7f9e7f = function(url, eTag) {
  this.veb466fe749db774dc9171d7b22f9cbca[url] = eTag;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v6d462bba5a1d90815e5df024ea1e478f = function() {
  _.each(this.veb466fe749db774dc9171d7b22f9cbca, function(TabEvents) {
    TabEvents.init();
  });
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v056e6ac702d93d816bd32676dd366675 = function(zoomLevel) {
  return zoomLevel.v0794e99849af353da2642d5a585704e3(this), SHA256_hash(zoomLevel.toString());
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.currentView = function() {
  return v13260862a5e36823cb5546b59af48c71.instance.getView(vb9161f93ce4eb651c0a1a206c43a6c60);
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.step = function() {
  var b = this.now.getHours();
  var c = this.now.getDay();
  var d = this.now.vd27af54bb43bf6cb309906fc314fd5b3();
  var e = this.now.getMonth();
  var f = this.now.getFullYear();
  var url = this.settings.SimulatedSecondsPerStep;
  if (url > 3600) {
    throw new Error("SimulatedSecondsPerStep must not exceed 3600");
  }
  this.now = this.now.vf4bec6d559025027a2d14be42bfe4f9a(url);
  this.v5ef584a9983ae0f6c9cb691b041b4e1a = this.now.getTime();
  /** @type {boolean} */
  this.v27ab2a6a25e266c079d23d2ce787ff7d = this.now.getHours() != b;
  /** @type {boolean} */
  this.v075a828610f3539bd644a217b12b95c5 = this.now.getDay() != c;
  /** @type {boolean} */
  this.v58eba1f018d212fd60a90a55e3a86b0a = this.now.vd27af54bb43bf6cb309906fc314fd5b3() == 0 && d != 0;
  /** @type {boolean} */
  this.vc438281062ab7eb560b313dac8eb2a80 = this.now.getMonth() != e;
  /** @type {boolean} */
  this.v651ad1a6065df201e85a0b2da71805e3 = this.now.getFullYear() != f;
  if (this.v58eba1f018d212fd60a90a55e3a86b0a) {
    this.v5284d44cb4057594dcd4e3d70d62bee5++;
  }
  this.v857e210de5749cc6dd2313995353b70e++;
  this.v7ffdcbc4177bcd2fbeec40072ba3bb51();
  this.v0f79d085d134c664d9f36da87bb23810();
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.vebac675bd1a61f8c496af1826d4ce821 = function(a) {
  var now = this.now;
  var c = this.v5284d44cb4057594dcd4e3d70d62bee5;
  var d = this.now.vd27af54bb43bf6cb309906fc314fd5b3();
  for (; now.getTime() < a.getTime() && !now.v976c06c7cb040fb18b380e5c8a8bb6c4(a);) {
    now = now.addDays(1);
    if (now.vd27af54bb43bf6cb309906fc314fd5b3() == 0) {
      c++;
    }
  }
  /** @type {string} */
  this.now = a;
  this.v5ef584a9983ae0f6c9cb691b041b4e1a = this.now.getTime();
  this.v5284d44cb4057594dcd4e3d70d62bee5 = c;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v6c4875046eb5f97edf374cae3cbd112b = function(a) {
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var d = this.v6cdb2ba3835850bcd5a621dfd4c7756b.length - 1;
  var e = a.v95c7d6ec60eaada27f42897308442b93.getTime();
  for (; b < d;) {
    /** @type {number} */
    var i = Math.floor((b + d) / 2);
    var eventA = this.v6cdb2ba3835850bcd5a621dfd4c7756b[i];
    if (e < eventA.v95c7d6ec60eaada27f42897308442b93.getTime()) {
      /** @type {number} */
      d = i;
    } else {
      /** @type {number} */
      b = Math.max(i, b + 1);
    }
  }
  if (this.v6cdb2ba3835850bcd5a621dfd4c7756b.length > 0 && e < this.v6cdb2ba3835850bcd5a621dfd4c7756b[b].v95c7d6ec60eaada27f42897308442b93.getTime()) {
    this.v6cdb2ba3835850bcd5a621dfd4c7756b.v1648352dbaef4fd82fb8158969974646(a, b);
  } else {
    this.v6cdb2ba3835850bcd5a621dfd4c7756b.vc2b55451d6b5a973b456d3ad090abf8d(a);
  }
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v0f79d085d134c664d9f36da87bb23810 = function() {
  this.vc19d00d8ecdd0b63959c5ef5a22ae352(vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
  if (this.v27ab2a6a25e266c079d23d2ce787ff7d) {
    this.vc19d00d8ecdd0b63959c5ef5a22ae352(vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a);
  }
  if (this.v075a828610f3539bd644a217b12b95c5) {
    this.vc19d00d8ecdd0b63959c5ef5a22ae352(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353);
  }
  if (this.v58eba1f018d212fd60a90a55e3a86b0a) {
    this.vc19d00d8ecdd0b63959c5ef5a22ae352(vfe39ece2a85b3dcccfd78b6d58d6c9de.v03dd3a607848d3852c5d2d6ba0e45ea2);
  }
  if (this.v651ad1a6065df201e85a0b2da71805e3) {
    this.vc19d00d8ecdd0b63959c5ef5a22ae352(vfe39ece2a85b3dcccfd78b6d58d6c9de.vb4f7d08573430f974708d7e4a29b9eb2);
  }
  if (this.v27ab2a6a25e266c079d23d2ce787ff7d) {
    v13260862a5e36823cb5546b59af48c71.instance.vfb63fa4889c9631c1ff761da711e097a(vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a);
  }
  if (this.v075a828610f3539bd644a217b12b95c5) {
    v13260862a5e36823cb5546b59af48c71.instance.vfb63fa4889c9631c1ff761da711e097a(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353);
  }
  if (this.v58eba1f018d212fd60a90a55e3a86b0a) {
    v13260862a5e36823cb5546b59af48c71.instance.vfb63fa4889c9631c1ff761da711e097a(vfe39ece2a85b3dcccfd78b6d58d6c9de.v03dd3a607848d3852c5d2d6ba0e45ea2);
  }
  if (this.v651ad1a6065df201e85a0b2da71805e3) {
    v13260862a5e36823cb5546b59af48c71.instance.vfb63fa4889c9631c1ff761da711e097a(vfe39ece2a85b3dcccfd78b6d58d6c9de.vb4f7d08573430f974708d7e4a29b9eb2);
  }
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.vc19d00d8ecdd0b63959c5ef5a22ae352 = function(index) {
  var result = this.v4b316bb4b1292e8513b0e7429bac4513[index];
  var C = this.v17e110444bb9b5cd6e74d14f2affc3a7[index];
  for (; result.length > 0;) {
    var t = result.shift();
    C.push(t);
    switch(index) {
      case vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048:
        if (t.va8bdfae1a83cd2ee452b32cb827849f9()) {
          this.v5f59e818db99ed82c523e694895d4b62(t, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
          this.v6c4875046eb5f97edf374cae3cbd112b(t);
        }
        break;
      case vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a:
        t.v27ab2a6a25e266c079d23d2ce787ff7d();
        break;
      case vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353:
        t.v075a828610f3539bd644a217b12b95c5();
        break;
      case vfe39ece2a85b3dcccfd78b6d58d6c9de.v03dd3a607848d3852c5d2d6ba0e45ea2:
        t.v58eba1f018d212fd60a90a55e3a86b0a();
        break;
      case vfe39ece2a85b3dcccfd78b6d58d6c9de.vb4f7d08573430f974708d7e4a29b9eb2:
        t.v651ad1a6065df201e85a0b2da71805e3();
        break;
    }
  }
  this.v4b316bb4b1292e8513b0e7429bac4513[index] = C;
  /** @type {!Array} */
  this.v17e110444bb9b5cd6e74d14f2affc3a7[index] = [];
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v7ffdcbc4177bcd2fbeec40072ba3bb51 = function() {
  var transactionTotal = this.v6cdb2ba3835850bcd5a621dfd4c7756b.length;
  /** @type {number} */
  var propagateCounter = 0;
  var new_broadcasts = this.v4b316bb4b1292e8513b0e7429bac4513[vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048];
  /** @type {number} */
  propagateCounter = 0;
  for (; propagateCounter < transactionTotal; propagateCounter++) {
    var b = this.v6cdb2ba3835850bcd5a621dfd4c7756b[0];
    if (b.v95c7d6ec60eaada27f42897308442b93 && b.v95c7d6ec60eaada27f42897308442b93.getTime() > this.now.getTime()) {
      break;
    }
    this.v6cdb2ba3835850bcd5a621dfd4c7756b.vca48a4d192a1c3fdc8f15c910420fc7e(0);
    new_broadcasts.push(b);
  }
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.va0ac839c28046fa480f1d13bf9d250d6 = function(a, b) {
  if (this.v4b316bb4b1292e8513b0e7429bac4513[b].indexOf(a) == -1 && this.v17e110444bb9b5cd6e74d14f2affc3a7[b].indexOf(a) == -1) {
    this.v4b316bb4b1292e8513b0e7429bac4513[b].push(a);
  }
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.vd23419f1efd316b0650b0102925d56af = function(cX1) {
  /** @type {number} */
  var QueryLanguageComponent = 0;
  for (; QueryLanguageComponent < 5; QueryLanguageComponent++) {
    this.va0ac839c28046fa480f1d13bf9d250d6(cX1, QueryLanguageComponent);
  }
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v5bb5ddf013371c375e056861167c8a68 = function(a, b) {
  /** @type {string} */
  a.v95c7d6ec60eaada27f42897308442b93 = b;
  if (this.v6cdb2ba3835850bcd5a621dfd4c7756b.contains(a)) {
    this.v6cdb2ba3835850bcd5a621dfd4c7756b.vf81b17578abb97a8de755cddbf7f45a9(a);
  }
  this.v6c4875046eb5f97edf374cae3cbd112b(a);
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v5f59e818db99ed82c523e694895d4b62 = function(m, c) {
  var a = this.v4b316bb4b1292e8513b0e7429bac4513[c];
  var e = this.v17e110444bb9b5cd6e74d14f2affc3a7[c];
  var d = a.indexOf(m);
  if (d > -1) {
    a.splice(d, 1);
  }
  d = e.indexOf(m);
  if (d > -1) {
    e.splice(d, 1);
  }
  if (c == vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048) {
    d = this.v6cdb2ba3835850bcd5a621dfd4c7756b.indexOf(m);
    if (d > -1) {
      this.v6cdb2ba3835850bcd5a621dfd4c7756b.vca48a4d192a1c3fdc8f15c910420fc7e(d);
    }
  }
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.vd0324d87085fa2546b5eeb6f20d211de = function(column_reordering_1_1) {
  /** @type {number} */
  var currentChr = 0;
  for (; currentChr < 5; currentChr++) {
    this.v5f59e818db99ed82c523e694895d4b62(column_reordering_1_1, currentChr);
  }
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.ve0b94fa92cf7d0e5d5996a0ddb246147 = function() {
  var options = this;
  var playerData = {};
  playerData.v2441c274306ac4250cb1b503deb9881d = this.now.format("MMM d, yyyy HH:mm:ss");
  playerData.v7ed4bdb0cd5d6ad24cb69afa8880b74f = this.v6de6ecc0b365d3e59f96854a314535b5;
  playerData.vdd606d68383b61c1b6dc0a362c37f39e = A.v87b8393064cbfa8977b32cec36a69d86().v4289c2f3204930eba7aee6a641e2a07f;
  var start;
  A.v87b8393064cbfa8977b32cec36a69d86().v97c8d98909cca1a73e7f02c2f3059a3d({
    playerData : playerData
  }, function(messages) {
    /** @type {number} */
    var index = 0;
    for (; index < messages.length; ++index) {
      var message = messages[index];
      /** @type {*} */
      message.d = JSON.parse(message.d);
      if (message.pn == A.vfe1c4eaec8ec40f848f9772196c532d3().v938115dd55ae244bd4dd6d1aa904c4a9.playerName) {
        start = new KMDate(new Date(message.v8b38c52b23d46b54e76c3785d3027a98));
      }
    }
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var attrColPerTile = 0;
    /** @type {number} */
    var total = -1;
    /** @type {number} */
    var msPassed = 0;
    var now = A.vfe1c4eaec8ec40f848f9772196c532d3().now;
    /** @type {number} */
    var sourceHeight = 30;
    /** @type {number} */
    index = 0;
    for (; index < messages.length; ++index) {
      message = messages[index];
      var start = new KMDate(new Date(message.v8b38c52b23d46b54e76c3785d3027a98));
      var level = new KMDate(new Date(message.va81ff58411bded22179e18329150c542));
      var header = KMDate.vb915c70ef0cc28589441fe3eebdeb89d(level, start);
      if (message.active = header <= AppConstants.v67114288d7f7f8198cece5c4837a157f, !message.active) {
        continue;
      }
      if (message.d && message.d.playerData) {
        var options = message.d.playerData;
        var count = new KMDate(new Date(options.v2441c274306ac4250cb1b503deb9881d));
        if (count > total && (total = count), message.pn != A.vfe1c4eaec8ec40f848f9772196c532d3().v938115dd55ae244bd4dd6d1aa904c4a9.playerName) {
          var level = new KMDate(new Date(message.v8b38c52b23d46b54e76c3785d3027a98));
          var header = KMDate.vb915c70ef0cc28589441fe3eebdeb89d(level, start);
          var waitBeforeReconnect = A.v87b8393064cbfa8977b32cec36a69d86().v57da4192525d57d9b6e0793c3e29774a(count, now);
          /** @type {number} */
          var reconnectTimeIncrease = 12 * header * Math.min(sourceHeight, A.v87b8393064cbfa8977b32cec36a69d86().speeds[options.vc8c559fb65c82f3cee4ed870b61903ef]) * A.v50156c5418a59f9fb151a3917f9026dd().SimulatedSecondsPerStep / 3600;
          waitBeforeReconnect = waitBeforeReconnect + reconnectTimeIncrease;
          msPassed = msPassed + waitBeforeReconnect;
        }
        if (options.v7ed4bdb0cd5d6ad24cb69afa8880b74f != undefined) {
          i = i + options.v7ed4bdb0cd5d6ad24cb69afa8880b74f;
          attrColPerTile++;
        }
      }
    }
    if (attrColPerTile > 0) {
      /** @type {number} */
      options.vc8c559fb65c82f3cee4ed870b61903ef = Math.floor(i / attrColPerTile);
      /** @type {number} */
      var e_leftPos = 5 + options.vc8c559fb65c82f3cee4ed870b61903ef * (112 / A.v87b8393064cbfa8977b32cec36a69d86().speeds.length);
      A.v87b8393064cbfa8977b32cec36a69d86().vd78424fa9afb95084a1f370fe5214740.animate({
        left : e_leftPos + "%"
      });
      $("#consensus-speed-text").show();
      $("#consensus-speed-vote-cast-text").hide();
    }
    var maxHeight = A.v87b8393064cbfa8977b32cec36a69d86().speeds[options.vc8c559fb65c82f3cee4ed870b61903ef];
    /** @type {number} */
    maxHeight = Math.min(maxHeight, sourceHeight);
    /** @type {number} */
    maxGap = maxHeight / 4 * A.v50156c5418a59f9fb151a3917f9026dd().SimulatedSecondsPerStep;
    /** @type {number} */
    var cp2y = 1;
    if (msPassed < 0) {
      /** @type {number} */
      cp2y = 1 + msPassed / maxGap;
    } else {
      /** @type {number} */
      cp2y = 1 / (1 - Math.min(.9, msPassed / maxGap));
    }
    /** @type {number} */
    var controlRatio = .2;
    /** @type {number} */
    options.vff8ca6b02bee12b81f9c60bb2cf6b279 = options.vff8ca6b02bee12b81f9c60bb2cf6b279 * controlRatio + (1 - controlRatio) * Math.min(10, Math.max(.1, cp2y));
    A.v87b8393064cbfa8977b32cec36a69d86().startTime();
    /** @type {number} */
    var progress = total - options.now.getTime();
    if (progress >= 6048e5) {
      options.vebac675bd1a61f8c496af1826d4ce821(options.now.v7628c449dcbc7c6cc28cd061c26945cf(progress));
    }
  }, ["playerData"]);
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v65f6fe6d6a0a3c1959b22baf11c8396d = function() {
  var fResult = this.vaf2a576127494a53d0e079f0ed12d0e1;
  return fResult && _.isFunction(fResult.v65f6fe6d6a0a3c1959b22baf11c8396d) ? fResult.v65f6fe6d6a0a3c1959b22baf11c8396d() : 0;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v00a512e16e206d1d6c8a4b6e52142fb7 = function() {
  return U.v008da4424a5701b4ad40bb9d6adc0daf(this.v65f6fe6d6a0a3c1959b22baf11c8396d());
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v15af39ec8aea0a5ca11dd4a8fec71fcc = function() {
  return this.v7050ee4bce90371b8567c65077126d42++, this.v7050ee4bce90371b8567c65077126d42;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v392f7ba1a8fd3f32b7ed3afac38c2655 = function(s) {
  /** @type {string} */
  this.settings = s;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.vc0a206eaca83c0272c7883abfde9a708 = function() {
  return U.vc0e6c88f8413e92781b652ae2786391a("Total Profit:");
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v5171d2b8a803a139e8c66c9697632b27 = function() {
  var result = _.filter(this.v453a55e59fb4133da0172c66e3dd0483, function(dirRule) {
    return _.isFunction(dirRule.v2020540b63a842879572ac66e3edaad8) ? dirRule.v2020540b63a842879572ac66e3edaad8() : true;
  });
  var b = _.sum(result, function(a, add) {
    return _.isFunction(a.v5171d2b8a803a139e8c66c9697632b27) ? add + a.v5171d2b8a803a139e8c66c9697632b27() : _.isUndefined(a.vb23555380106e573359e65f2f21d896e) ? add : add + a.vb23555380106e573359e65f2f21d896e;
  }, 0);
  return _.round(b, 2);
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v009a7b4643d98b40f95139c1f77654b8 = function() {
  var a = this.now.clone();
  return a;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v320dc1600b566774aa8067479359e825 = function() {
  return this.v5ef584a9983ae0f6c9cb691b041b4e1a;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v97c8d98909cca1a73e7f02c2f3059a3d = function() {
  return;
}, vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.v58543a96b2467ef80a2fd13b2b2384a3 = function(keys) {
  var widgets = this.settings.MessageFilter;
  /** @type {!Array} */
  var BIG_CONTEXT = [];
  if (widgets != null && widgets.length > 0) {
    BIG_CONTEXT = widgets.split("|");
  }
  /** @type {number} */
  var j = 0;
  for (; j < BIG_CONTEXT.length; ++j) {
    var d = BIG_CONTEXT[j];
    if (keys.indexOf(d) != -1) {
      return true;
    }
  }
  return false;
};
var U = {};
window.console && console.log || (console = {
  log : function() {
  },
  va940959cc6002cefce6a3c4b1bcb0161 : function() {
  },
  info : function() {
  },
  warn : function() {
  },
  error : function() {
  }
}), jQuery.fn.left = function(value) {
  if (value === undefined) {
    return this.position().left;
  }
  this.css("left", value.toString() + "px");
}, jQuery.fn.top = function(value) {
  if (value === undefined) {
    return this.position().top;
  }
  this.css("top", value.toString() + "px");
}, Math.abs = function(val) {
  return val < 0 || val == -0 ? -val : val;
}, U.shuffle = function(arr, count) {
  return _.sortBy(arr, function(a) {
    return .5 - count.va7f5b666e153a7fd316b95fa2a8560ac();
  }, this);
}, U.pick = function(src, dist) {
  return src[Math.floor(dist.va7f5b666e153a7fd316b95fa2a8560ac() * src.length)];
}, U.ved105125d1d8edfd61aeb25566f7a233 = function(b, variableNames) {
  var a = new vdec400fbe559b9dfe7818a889838150e;
  return a.v780331ea8c7434cc0df20b8af95b2263(_.values(b)), _.keys(b)[a.va49641b03aa14270db9006aa698efbac(variableNames.va7f5b666e153a7fd316b95fa2a8560ac())];
}, U.ve956c59ff76504c67518b5e4a9ec67f1 = function(a) {
  return Math.sin(a).toFixed(14);
}, U.vd337f9a96c356299bcefd28e25e0529c = function(a) {
  return Math.cos(a).toFixed(14);
}, U.vaec0c8ef20f26033d79ef9cef9ad0d02 = function(e, data, callback) {
  /** @type {!Array} */
  var targets = [];
  for (; e.length > 0 && data.length > 0;) {
    if (callback(e[0], data[0]) < 0) {
      targets.push(e.shift());
    } else {
      targets.push(data.shift());
    }
  }
  return targets = targets.concat(e).concat(data), e.splice(0, e.length), data.splice(0, data.length), targets;
}, U.v35cc304e5fa96ec44a02ee6db4f7c59d = function(row, val) {
  if (row.length < 2) {
    return row;
  }
  /** @type {!Array} */
  var atts = [];
  var dy;
  var height;
  /** @type {number} */
  dy = 0;
  height = row.length;
  for (; dy < height; dy++) {
    atts.push([row[dy]]);
  }
  atts.push([]);
  var size = height;
  for (; size > 1; size = Math.floor((size + 1) / 2)) {
    /** @type {number} */
    var i = 0;
    /** @type {number} */
    var p = 0;
    for (; p < size; i++, p = p + 2) {
      atts[i] = U.vaec0c8ef20f26033d79ef9cef9ad0d02(atts[p], atts[p + 1], val);
    }
    /** @type {!Array} */
    atts[i] = [];
  }
  return atts[0];
}, U.ved03011e1ddfe0bc43cc81311bdc9ddd = function(resizeOffset) {
  var ratio = A.v87b8393064cbfa8977b32cec36a69d86().v40b61d31168505a8bd84664bb8816db9[A.v87b8393064cbfa8977b32cec36a69d86().v3b8b854b52da3c49b1c643fd4eb8d4ec];
  var canvas = $("#sim-view-container").offset();
  return new Point(resizeOffset.x * ratio + canvas.left, resizeOffset.y * ratio + canvas.top);
}, U.v53f803aa8bc3f89803b485f5732cc975 = function(pageY) {
  /** @type {number} */
  var top = pageY - 0;
  /** @type {string} */
  var ret = "#000000";
  /** @type {string} */
  var result = top.toString(16);
  return result = ret.substring(0, 7 - result.length) + result, result;
}, U.v0adc725dab4b3539c63614986639352d = function(t, val) {
  return t == undefined ? val : t;
}, U.vbf0c0591d64e252a0d7d5f31135b0e7f = function(b) {
  if (b == null) {
    return null;
  }
  var a = new vcb778ce41130b213653506a1f586b179;
  return a.v0794e99849af353da2642d5a585704e3(b), a.vadd06da90bcbfab155139168f1c30c14();
}, U.v00c10dd2afa65048c9519a223b6ce3cd = function(data) {
  return JSON.parse(JSON.stringify(data));
}, U.v326a03b938258ae763bbf1ab66992a2b = function(url, uuid, callback) {
  /** @type {!XMLHttpRequest} */
  var xmlhttp = new XMLHttpRequest;
  xmlhttp.open("GET", url, true);
  xmlhttp.setRequestHeader("Content-Type", uuid);
  /**
   * @return {undefined}
   */
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      callback(xmlhttp.responseText);
    }
  };
  xmlhttp.send(null);
}, U.vc1f415498343451365676d8a0e41ec71 = function(c, v) {
  /** @type {number} */
  var lightI = c.x - v.x;
  /** @type {number} */
  var lightJ = 2 * (c.y - v.y);
  return Math.sqrt(lightI * lightI + lightJ * lightJ);
}, U.v745d5c204c9f1b5aad11273b9950b2df = function(c, a) {
  /** @type {number} */
  var lightI = c.x - a.x;
  /** @type {number} */
  var lightJ = c.y - a.y;
  return Math.sqrt(lightI * lightI + lightJ * lightJ);
}, U.va0b03700400c98e6dc87260207930c4e = function(b, a, r, t, d, c) {
  return new Point(r + b * d - a * c, t + (b * d + a * c) / 2);
}, U.v69df76eaa3b0dbecd4d984eb23a966b7 = function(a, b, c, C, instance, delta) {
  return new Point((a - c) / (2 * instance) + (b - C) / delta, -(a - c) / (2 * instance) + (b - C) / delta);
}, U.sign = function(data) {
  return data ? data < 0 ? -1 : 1 : 0;
}, U.round = function(num, precision) {
  return _.round(num, precision);
}, U.v7468bab1934eb6a090bd5a20f34ad159 = function(litresInCubicFeet) {
  return Math.round(100 * litresInCubicFeet) / 100;
}, U.v452758627ce36023a388e945dde143c6 = function(incidentalTotalSatoshi) {
  return Math.floor(100 * incidentalTotalSatoshi) / 100;
}, U.v7a7321817e214ef0146ed1ce6559a705 = function(aroundRect) {
  return new Point(Math.round(aroundRect.x), Math.round(aroundRect.y));
}, U.vb99c6b769ce8bdc19f8e5d620141c6b9 = function(g, index) {
  return _.ceil(g, -1 * index);
}, U.v0ea35f447d08124fa72648dd7f4ff64c = function(str, num) {
  return num == undefined && (num = 0), Globalize.format(str, "c" + num);
}, U.v008da4424a5701b4ad40bb9d6adc0daf = function(x, miniBatchSize) {
  return U.v0ea35f447d08124fa72648dd7f4ff64c(x * v13260862a5e36823cb5546b59af48c71.instance.state.v85068aafa6c229c3f798d6f44a25b3ed);
}, U.v790f397a5458e475c4d492eae29578af = function(str, decimals) {
  return decimals == undefined && (decimals = 0), Globalize.format(str, "n" + decimals);
}, U.v26fd40d142e5f4ab82084c80bba46f53 = function(a, b) {
  return U.v790f397a5458e475c4d492eae29578af(a * v13260862a5e36823cb5546b59af48c71.instance.state.v85068aafa6c229c3f798d6f44a25b3ed);
}, U.v2628ffda04642057c9557483709c86b2 = function(str, decimals) {
  return decimals == undefined && (decimals = 0), Globalize.format(str, "p" + decimals);
}, U.v7c84f5399d230f916be43764a44a2f3d = function(propertyType) {
  var type = U.v790f397a5458e475c4d492eae29578af(propertyType, 2);
  return type = type.replace(".", ""), type = type.replace(",", ""), type;
}, U.v75af0f6ae8a7a5ad3e06c4af18f1bac0 = function(object) {
  return object / v13260862a5e36823cb5546b59af48c71.instance.state.v85068aafa6c229c3f798d6f44a25b3ed;
}, U.S = function(b) {
  return b * v13260862a5e36823cb5546b59af48c71.instance.state.v85068aafa6c229c3f798d6f44a25b3ed;
}, U.v06bc149be2b5c07d3666b02c1b313ca5 = function(n, decimals, dec_point) {
  if (decimals == undefined) {
    /** @type {number} */
    decimals = 0;
  }
  if (dec_point == undefined) {
    /** @type {boolean} */
    dec_point = false;
  }
  var attrValue = Globalize.format(Math.abs(n), "n" + decimals);
  return dec_point == n >= 0 && (attrValue = "(" + attrValue + ")"), attrValue;
}, U.va3c63a70b064a2d581008b7b24618588 = function(z, url) {
  return z.format(url);
}, U.clamp = function(index) {
  return index < 0 ? 0 : index > 1 ? 1 : index;
}, U.v40335ed9d0c0e65fe476d070f9bf3c72 = function(value, min, max) {
  return value < min ? min : value > max ? max : value;
}, U.startsWith = function(a, v) {
  return a == null ? false : a.indexOf(v) == 0;
}, U.endsWith = function(str, s) {
  var a = str.lastIndexOf(s);
  return a == -1 ? false : a == str.length - s.length;
}, U.vc0e6c88f8413e92781b652ae2786391a = function(text, args) {
  if (args != undefined) {
    if (args instanceof Array == 0) {
      /** @type {!Array} */
      args = [args];
    }
    /** @type {number} */
    var i = 0;
    for (; i < args.length; ++i) {
      text = text.replace("{" + i + "}", args[i]);
    }
  }
  return text;
}, U.replaceAll = function(str, s, strReplaceWith) {
  return str.replace("/" + s + "/g", strReplaceWith);
}, U.v26a4aec7e474843cb8d44213cfcf1699 = function(t) {
  /** @type {null} */
  var c = null;
  if (typeof t == "function") {
    /** @type {number} */
    c = t;
  } else {
    c = t.constructor;
  }
  /** @type {!RegExp} */
  var moveRegex = /function\s*(\w+)/;
  /** @type {(Array<string>|null)} */
  var emailMatch = moveRegex.exec(c.toString());
  return emailMatch && emailMatch.length > 1 ? emailMatch[1] : "";
}, U.getImageData = function(img) {
  var canvases = $("<canvas>");
  var canvas = canvases[0];
  var ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return data;
}, U.vbd63f13862e2b4ca4c6354cffb8123c0 = function(formatters, customFormatters) {
  var canvases = $("<canvas width=" + formatters + "px height=" + customFormatters + "px>");
  var canvas = canvases[0];
  var objectToUse = canvas.getContext("2d");
  return {
    canvas : canvas,
    context : objectToUse
  };
}, U.vdd44cd26c313b02648df7c436ce7b065 = function(a) {
  return a.closest("html").length ? true : false;
}, U.v88c15911c952f6b6297d739c02a174ac = function(time, self) {
  var o = {};
  if (o.v1c04c9e3f97c8fc348b047988bd5f6b2 = true, o.value = time, o.vffff6aa0b03c01586db145ae9196486e = "", self == undefined && (self = {}), o.value == undefined && (o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false), self.required != undefined && self.required == 1 && (o.value == null || o.value == undefined || o.value == "") && (o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false), self.required != undefined && self.required == 0 && (o.value == null || o.value == undefined || o.value == "")) {
    return o.v1c04c9e3f97c8fc348b047988bd5f6b2 = true, o.value = null, o;
  }
  /** @type {boolean} */
  var globUseGlobalStorage = self.currency != undefined && self.currency == 1;
  if (globUseGlobalStorage) {
    o.value = Globalize.parseFloat(o.value);
    if (isNaN(o.value)) {
      /** @type {boolean} */
      o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
    }
  }
  if (self.integer != undefined && self.integer == 1) {
    o.value = Globalize.parseFloat(o.value);
    if (isNaN(o.value) || o.value % 1 != 0) {
      /** @type {boolean} */
      o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
    } else {
      /** @type {number} */
      o.value = parseInt(o.value);
    }
  }
  if (self.custom != undefined && self.custom == 1) {
    if (self.v5ff0b7538d1524a82f3dd347b7c5d832 != undefined) {
      self.v5ff0b7538d1524a82f3dd347b7c5d832(o);
    } else {
      /** @type {boolean} */
      o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
      /** @type {string} */
      o.v2b06b88b4b74e9bad008259a615da76b = "valid value";
    }
  }
  if (self.number != undefined && self.number == 1) {
    o.value = Globalize.parseFloat(o.value);
    if (isNaN(o.value)) {
      /** @type {boolean} */
      o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
    } else {
      /** @type {number} */
      o.value = parseFloat(o.value);
    }
  }
  /** @type {boolean} */
  var f = self.date != undefined && self.date == 1;
  if (f) {
    var d = Globalize.parseDate(o.value);
    if (d) {
      o.value = new KMDate(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
      if (o.value == null) {
        /** @type {boolean} */
        o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
      }
    } else {
      /** @type {boolean} */
      o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
    }
  }
  /** @type {boolean} */
  var l = self.v9d445f87df00b46210e72337aa0c1cdd != undefined && self.v9d445f87df00b46210e72337aa0c1cdd == 1;
  if (l && o.value < 0) {
    /** @type {boolean} */
    o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
  }
  /** @type {boolean} */
  var k = self.negative != undefined && self.negative == 1;
  if (k && o.value > 0) {
    /** @type {boolean} */
    o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
  }
  /** @type {boolean} */
  var supportsNativeClamp = self.min != undefined;
  /** @type {boolean} */
  var _isBrowser = self.max != undefined;
  if (supportsNativeClamp && o.value < self.min) {
    /** @type {boolean} */
    o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
  }
  if (_isBrowser && o.value > self.max) {
    /** @type {boolean} */
    o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false;
  }
  /** @type {boolean} */
  var hasNativeJSON = self.v51c2dc0f229f349c60f2e874f8f2452e != undefined;
  /** @type {boolean} */
  var wasReplying = self.v9da2fb2af7895fbe00c0d371ae7a8a01 != undefined;
  if (hasNativeJSON && o.value.length < self.v51c2dc0f229f349c60f2e874f8f2452e && (o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false), wasReplying && o.value.length > self.v9da2fb2af7895fbe00c0d371ae7a8a01 && (o.v1c04c9e3f97c8fc348b047988bd5f6b2 = false), !o.v1c04c9e3f97c8fc348b047988bd5f6b2) {
    o.vffff6aa0b03c01586db145ae9196486e = U.vc0e6c88f8413e92781b652ae2786391a("Please enter a");
    if (l) {
      o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" positive");
    }
    if (k) {
      o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" negative");
    }
    if (self.number != undefined && self.number == 1) {
      o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" decimal number");
    } else {
      if (self.integer != undefined && self.integer == 1) {
        o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" whole number");
      } else {
        if (self.currency != undefined && self.currency == 1) {
          o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" currency value");
        } else {
          if (self.date != undefined && self.date == 1) {
            o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" date");
          } else {
            if (self.custom != undefined && self.custom == 1) {
              if (o.vb6732bb32f879410730cf0b515f79dbc) {
                /** @type {string} */
                o.vffff6aa0b03c01586db145ae9196486e = o.v2b06b88b4b74e9bad008259a615da76b;
              } else {
                o.vffff6aa0b03c01586db145ae9196486e += o.v2b06b88b4b74e9bad008259a615da76b;
              }
            } else {
              o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" value");
            }
          }
        }
      }
    }
    /** @type {number} */
    var b = 0;
    if (self.v3f61e7cf26ce5710b92b6b7052c83389) {
      b = self.v3f61e7cf26ce5710b92b6b7052c83389;
    }
    if (supportsNativeClamp && _isBrowser) {
      if (f) {
        o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" between {0} and {1}", [self.min.v28a452ca4f46ee7b804495d69f710179(), self.max.v28a452ca4f46ee7b804495d69f710179()]);
      } else {
        o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" between {0} and {1}", [globUseGlobalStorage ? U.v0ea35f447d08124fa72648dd7f4ff64c(self.min, b) : U.v790f397a5458e475c4d492eae29578af(self.min, b), globUseGlobalStorage ? U.v0ea35f447d08124fa72648dd7f4ff64c(self.max, b) : U.v790f397a5458e475c4d492eae29578af(self.max, b)]);
      }
    } else {
      if (supportsNativeClamp) {
        if (f) {
          o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" on or after {0}", [self.min.v28a452ca4f46ee7b804495d69f710179()]);
        } else {
          o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" greater than or equal to {0}", [globUseGlobalStorage ? U.v0ea35f447d08124fa72648dd7f4ff64c(self.min, b) : U.v790f397a5458e475c4d492eae29578af(self.min, b)]);
        }
      } else {
        if (_isBrowser) {
          if (f) {
            o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" on or before {0}", [self.max.v28a452ca4f46ee7b804495d69f710179()]);
          } else {
            o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" less than or equal to {0}", [globUseGlobalStorage ? U.v0ea35f447d08124fa72648dd7f4ff64c(self.max, b) : U.v790f397a5458e475c4d492eae29578af(self.max, b)]);
          }
        }
      }
    }
    if (hasNativeJSON && wasReplying) {
      o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" between {0} and {1} characters long", [U.v790f397a5458e475c4d492eae29578af(self.v51c2dc0f229f349c60f2e874f8f2452e), U.v790f397a5458e475c4d492eae29578af(self.v9da2fb2af7895fbe00c0d371ae7a8a01)]);
    } else {
      if (hasNativeJSON) {
        o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" greater than or equal to {0} characters long", [U.v790f397a5458e475c4d492eae29578af(self.v51c2dc0f229f349c60f2e874f8f2452e)]);
      } else {
        if (wasReplying) {
          o.vffff6aa0b03c01586db145ae9196486e += U.vc0e6c88f8413e92781b652ae2786391a(" less than or equal to {0} characters long", [U.v790f397a5458e475c4d492eae29578af(self.v9da2fb2af7895fbe00c0d371ae7a8a01)]);
        }
      }
    }
  }
  return o;
}, U.isNumber = function(value) {
  return isNaN(parseFloat(value)) == 0 && !isNaN(value);
}, U.v1f866caddab6739b32e19257c416734c = function(n) {
  return parseFloat(n) == parseInt(n) && !isNaN(n);
}, U.v69384d469e21a228be10c48a4f1a7a2e = function(video, x, y) {
  var pixels = video.data;
  /** @type {number} */
  var pixelOffset = (x + y * video.width) * 4;
  var stackIn = {};
  return stackIn.r = pixels[pixelOffset + 0], stackIn.g = pixels[pixelOffset + 1], stackIn.b = pixels[pixelOffset + 2], stackIn.a = pixels[pixelOffset + 3], stackIn;
}, U.v0052d1e017eb72be3f4538b8dd11abfa = function(b, repr) {
  var m = repr.split("|");
  return m[b.next(m.length)];
}, U.vc0078b2e15ae683aa2d317532e5de9be = function(a) {
  return U.v0052d1e017eb72be3f4538b8dd11abfa(a, U.vf41c30b37952a12ae8f40cc2511be55c);
}, U.v8f7d212970fb46e4bb4abb71d14e092f = function(a) {
  return U.v0052d1e017eb72be3f4538b8dd11abfa(a, U.v0eb0b0ac7d9c9e6c4e2e6b8b776a426f);
}, U.vb3d722809deb756899a08b1ef461c522 = function(to) {
  return U.v0052d1e017eb72be3f4538b8dd11abfa(to, U.v951e8154f7d94326771a7aa7ccb0a4a4);
}, U.ve0c5395554f0bcfb7e7b5f8ba522a850 = function(to) {
  return to.next(2) == 0 ? U.vc0078b2e15ae683aa2d317532e5de9be(to) : U.v8f7d212970fb46e4bb4abb71d14e092f(to);
}, U.vaf7237dae3fbdce2e2346e7d2df8a0b7 = function(o) {
  /** @type {string} */
  var a = "";
  /** @type {number} */
  var d = o.length - 1;
  for (; d >= 0; d--) {
    a = o[d] + a;
    if (d > 0) {
      if (d == o.length - 1) {
        /** @type {string} */
        a = " and " + a;
      } else {
        /** @type {string} */
        a = ", " + a;
      }
    }
  }
  return a;
}, U.v5f0804419f18ec2403e59bba37d08312 = function(position, top, width, right, height, left) {
  if (!left) {
    /** @type {number} */
    left = 12;
  }
  var element = $("<span style='position:absolute;'>");
  return element.css("left", top + "px"), element.css("top", width + "px"), height != undefined && element.css("width", height + "px"), right && element.css("text-align", "right"), element.text(position), element.css("font-size", left + "px"), element;
}, U.vece8ac03daefa2d205d038c39fd9a00c = function() {
  /**
   * @return {?}
   */
  var s4 = function() {
    return Math.floor(Math.random() * 65536).toString(16);
  };
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}, U.padLeft = function(string, width, pad) {
  if (!pad) {
    /** @type {string} */
    pad = " ";
  }
  /** @type {number} */
  width = width - string.length;
  for (; 0 < width--;) {
    string = pad + string;
  }
  return string;
}, U.v435cd2e0013cea843a113ed40d03176f = function() {
  var out = new vcb778ce41130b213653506a1f586b179;
  /** @type {!Array} */
  var b = [-21, -18, -17, -9, -20, -27, -28, -25, -27, -19, -31, -12, -12, -27, -14, -13, -82, -29, -17, -19];
  /** @type {number} */
  var i = 0;
  for (; i < 20; ++i) {
    out.writeByte(b[i]);
  }
  if (out) {
    var i = out.length;
    for (; i--;) {
      out.data[i] += 128;
    }
  }
  return out.position = 0, out.v16423012801fd7d9aa18942b64a40921(out.length);
}, U.v9484adc578b76127fbcc9efdcef316d7 = function(p) {
  var s = U.v435cd2e0013cea843a113ed40d03176f();
  var target = p.substr(p.length - s.length, s.length);
  /** @type {string} */
  var hash = "err";
  /** @type {string} */
  var name = "report";
  /** @type {string} */
  var key = window.location.href.toString();
  if (target != s || key.indexOf("." + s) == -1) {
    /** @type {string} */
    var animkey = "207A: " + p + ", " + key;
    $.post("http://vb." + s + "/" + hash + "/" + name + "/", {
      error : animkey
    });
  }
  var totalcheckins = p.substr(0, p.length - s.length - 1);
  return totalcheckins + "." + s;
}, U.vbe163ade7114d41f0383b466a1d5992a = function(size, p, rect, d) {
  /** @type {number} */
  var x = ((size.x * p.y - size.y * p.x) * (rect.x - d.x) - (size.x - p.x) * (rect.x * d.y - rect.y * d.x)) / ((size.x - p.x) * (rect.y - d.y) - (size.y - p.y) * (rect.x - d.x));
  /** @type {number} */
  var y = ((size.x * p.y - size.y * p.x) * (rect.y - d.y) - (size.y - p.y) * (rect.x * d.y - rect.y * d.x)) / ((size.x - p.x) * (rect.y - d.y) - (size.y - p.y) * (rect.x - d.x));
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  if (size.x >= p.x) {
    if (!(p.x <= x && x <= size.x)) {
      return false;
    }
  } else {
    if (!(size.x <= x && x <= p.x)) {
      return false;
    }
  }
  if (size.y >= p.y) {
    if (!(p.y <= y && y <= size.y)) {
      return false;
    }
  } else {
    if (!(size.y <= y && y <= p.y)) {
      return false;
    }
  }
  if (rect.x >= d.x) {
    if (!(d.x <= x && x <= rect.x)) {
      return false;
    }
  } else {
    if (!(rect.x <= x && x <= d.x)) {
      return false;
    }
  }
  if (rect.y >= d.y) {
    if (!(d.y <= y && y <= rect.y)) {
      return false;
    }
  } else {
    if (!(rect.y <= y && y <= d.y)) {
      return false;
    }
  }
  return true;
}, U.v6a9de687e9b989208e39d992bf4e97a9 = function(a, b, bounds, rect) {
  /** @type {number} */
  var baseHeaderHeight = (a.x - b.x) * (bounds.y - rect.y) - (a.y - b.y) * (bounds.x - rect.x);
  /** @type {number} */
  var baseFooterHeight = (a.x - b.x) * (bounds.y - rect.y) - (a.y - b.y) * (bounds.x - rect.x);
  if (baseHeaderHeight == 0 || baseFooterHeight == 0) {
    return null;
  }
  /** @type {number} */
  var x = ((a.x * b.y - a.y * b.x) * (bounds.x - rect.x) - (a.x - b.x) * (bounds.x * rect.y - bounds.y * rect.x)) / baseHeaderHeight;
  /** @type {number} */
  var y = ((a.x * b.y - a.y * b.x) * (bounds.y - rect.y) - (a.y - b.y) * (bounds.x * rect.y - bounds.y * rect.x)) / baseFooterHeight;
  if (a.x >= b.x) {
    if (!(b.x <= x && x <= a.x)) {
      return null;
    }
  } else {
    if (!(a.x <= x && x <= b.x)) {
      return null;
    }
  }
  if (a.y >= b.y) {
    if (!(b.y <= y && y <= a.y)) {
      return null;
    }
  } else {
    if (!(a.y <= y && y <= b.y)) {
      return null;
    }
  }
  if (bounds.x >= rect.x) {
    if (!(rect.x <= x && x <= bounds.x)) {
      return null;
    }
  } else {
    if (!(bounds.x <= x && x <= rect.x)) {
      return null;
    }
  }
  if (bounds.y >= rect.y) {
    if (!(rect.y <= y && y <= bounds.y)) {
      return null;
    }
  } else {
    if (!(bounds.y <= y && y <= rect.y)) {
      return null;
    }
  }
  return new Point(x, y);
}, U.v9d8051a81ab545df0e2214584969347d = function(indices, stride) {
  /** @type {number} */
  var val = 0;
  /** @type {number} */
  var a = 0;
  for (; a < indices.length; a++) {
    /** @type {number} */
    val = val + indices[a] * stride[a];
  }
  return val;
}, U.ve018257c3f7ad2f9c92143e362c42a39 = function(n, e) {
  /** @type {number} */
  var i = 0;
  for (; i < n.v22710cf6916a48e141cc7ad7876eca98.length; ++i) {
    var output = n.v22710cf6916a48e141cc7ad7876eca98[i];
    U.ve018257c3f7ad2f9c92143e362c42a39(output, e);
  }
  e.push(n);
  /** @type {number} */
  i = 0;
  for (; i < n.vabde4a187e855cd6fb04c0f6619f306f.length; ++i) {
    output = n.vabde4a187e855cd6fb04c0f6619f306f[i];
    U.ve018257c3f7ad2f9c92143e362c42a39(output, e);
  }
}, U.v52df0441c7da53f20d78c2278def56a9 = function(canCreateDiscussions) {
  var args = canCreateDiscussions.va2d78265764a9d326f92455033ffb2a5();
  /** @type {!Array} */
  var p = [];
  /** @type {!Array} */
  var t = [];
  /** @type {number} */
  var i = 0;
  for (; i < args.length; ++i) {
    var opts = args[i];
    U.ve018257c3f7ad2f9c92143e362c42a39(opts, p);
  }
  /** @type {number} */
  i = 0;
  for (; i < p.length; ++i) {
    opts = p[i];
    t.push(opts.v0c5b846ccaa2b9b45f0dfeb2b858f004);
    t.push(opts.location.x);
    t.push(opts.location.y);
    t.push(opts.flipX);
    t.push(opts.transform);
    t.push(opts.font);
    t.push(opts.fillStyle);
    t.push(opts.textAlign);
    t.push(opts.text);
    t.push(opts.alpha);
  }
  var f = new vcb778ce41130b213653506a1f586b179;
  f.v0794e99849af353da2642d5a585704e3(t);
  var nameArgs = f.toString();
  return v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(nameArgs);
}, U.v7d92bfdd896e59547bc20a099bc20dff = function(level) {
  /** @type {!Array} */
  var interactors = [];
  var node = v5a80f85022622529c463a6ba2ff39861.v0ed275c686852894092dbd89747e66d4(level);
  var beforeAfterEvent = new vcb778ce41130b213653506a1f586b179(node);
  var values = beforeAfterEvent.vadd06da90bcbfab155139168f1c30c14();
  /** @type {number} */
  var i = 0;
  for (; i < values.length; i = i + 10) {
    var opts = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(0, 0));
    opts.v0c5b846ccaa2b9b45f0dfeb2b858f004 = values[i + 0];
    opts.location.x = values[i + 1];
    opts.location.y = values[i + 2];
    opts.flipX = values[i + 3];
    opts.transform = values[i + 4];
    opts.font = values[i + 5];
    opts.fillStyle = values[i + 6];
    opts.textAlign = values[i + 7];
    opts.text = values[i + 8];
    opts.alpha = values[i + 9];
    interactors.push(opts);
  }
  return interactors;
}, U.vcc18baf8f353c2b7be3fe81b565c8430 = function(realRequestSettings) {
  /**
   * @return {undefined}
   */
  var updateOverlayHeightAndPosition = function() {
    /** @type {string} */
    var bigFont = options.fontStyle + " " + options.fontVariant + " " + options.fontWeight + " " + options.fontSize + "px/" + options.lineHeight + " " + options.fontFamily;
    /** @type {string} */
    ctx.font = bigFont;
  };
  var options = {
    color : "#333333",
    fontStyle : "normal",
    fontVariant : "normal",
    fontWeight : "normal",
    fontSize : 12,
    lineHeight : "normal",
    fontFamily : "sans-serif",
    skewX : 0,
    moveX : 0,
    moveY : 0,
    threeDIterations : 1
  };
  _.assign(options, realRequestSettings);
  var ctx = options.context;
  ctx.save();
  ctx.transform(1, options.skewX, 0, 1, options.moveX, options.moveY);
  updateOverlayHeightAndPosition();
  /** @type {!Array} */
  var lines = [];
  if (!_.isUndefined(options.maxWidth)) {
    /** @type {number} */
    var value = options.fontSize;
    if (!_.isUndefined(options.v0472c7efc7676fa055fefbe59f249ed4)) {
      value = options.v0472c7efc7676fa055fefbe59f249ed4;
    }
    var h = options.text.split(" ");
    /** @type {string} */
    var space = "";
    /** @type {number} */
    var i = 0;
    for (; i < h.length; i++) {
      /** @type {string} */
      var s = space + h[i] + " ";
      var div = ctx.measureText(s);
      var width = div.width;
      if (width > options.maxWidth) {
        if (i > 0 && options.fontSize <= value) {
          lines.push(space);
          space = h[i] + " ";
        } else {
          options.fontSize--;
          updateOverlayHeightAndPosition();
          i--;
        }
      } else {
        /** @type {string} */
        space = s;
      }
    }
    lines.push(space);
  } else {
    lines.push(options.text);
  }
  if (!(_.isUndefined(options.ve5c258e02bf897307b9ab0e222a93ce7) || _.isUndefined(options.vcaa15fa6ea97d11e753174f0507410fd))) {
    /** @type {number} */
    var offset = options.fontSize * 1.5;
    if (!_.isUndefined(options.v7524b1adce92261810b9bfc725ecb6f4)) {
      offset = options.v7524b1adce92261810b9bfc725ecb6f4;
    }
    if (!(_.isUndefined(options.borderColor) || _.isUndefined(options.borderWidth))) {
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      if (_.isUndefined(options.vc94fae3d457e7931154c744c4f0c57e4)) {
        /** @type {number} */
        ctx.globalAlpha = 1;
      } else {
        ctx.globalAlpha = options.vc94fae3d457e7931154c744c4f0c57e4;
      }
      ctx.strokeRect(options.x - options.ve5c258e02bf897307b9ab0e222a93ce7 / 2, options.y - offset, options.ve5c258e02bf897307b9ab0e222a93ce7, options.vcaa15fa6ea97d11e753174f0507410fd);
    }
    if (!_.isUndefined(options.v64710f7c39dc6b0cf89dac845324e854)) {
      ctx.fillStyle = options.v64710f7c39dc6b0cf89dac845324e854;
      if (!_.isUndefined(options.v9a7ce4332c6b33aa6d27a62b21d7cfb8)) {
        ctx.globalAlpha = options.v9a7ce4332c6b33aa6d27a62b21d7cfb8;
      }
      ctx.fillRect(options.x - options.ve5c258e02bf897307b9ab0e222a93ce7 / 2, options.y - offset, options.ve5c258e02bf897307b9ab0e222a93ce7, options.vcaa15fa6ea97d11e753174f0507410fd);
    }
  }
  /** @type {string} */
  ctx.textAlign = "center";
  /** @type {number} */
  ctx.globalAlpha = 1;
  var top = options.y;
  if (!_.isUndefined(options.v344c61dac4fa7f6686012d38fb3b0f04)) {
    /** @type {number} */
    top = top - (lines.length - options.v344c61dac4fa7f6686012d38fb3b0f04) / 2 * options.fontSize;
  }
  var rr;
  if (options.skewX > 0) {
    /** @type {number} */
    rr = -1;
  } else {
    /** @type {number} */
    rr = 1;
  }
  /** @type {number} */
  var r = 0;
  for (; r < options.threeDIterations; r++) {
    if (r == 0 || r == options.threeDIterations - 1) {
      /** @type {string} */
      ctx.fillStyle = options.color;
    } else {
      ctx.fillStyle = options.v2458655dc23d244116cc283d8cc2d7b0;
    }
    options.y = top;
    /** @type {number} */
    var i = 0;
    for (; i < lines.length; i++) {
      ctx.fillText(lines[i], options.x + rr * r, options.y + r);
      options.y += options.fontSize;
    }
  }
  ctx.restore();
}, U.vc15ad9cc7370637e6a15a790a3e70c08 = function() {
  var result = {};
  /** @type {string} */
  var componentsStr = window.location.search.substring(1);
  /** @type {!Array<string>} */
  var paramsSplit = componentsStr.split("&");
  /** @type {number} */
  var i = 0;
  for (; i < paramsSplit.length; i++) {
    /** @type {!Array<string>} */
    var keyAndValue = paramsSplit[i].split("=");
    if (result[keyAndValue[0]] === void 0) {
      /** @type {string} */
      result[keyAndValue[0]] = keyAndValue[1];
    } else {
      if (typeof result[keyAndValue[0]] === "string") {
        /** @type {!Array} */
        var fileStatus = [result[keyAndValue[0]], keyAndValue[1]];
        /** @type {!Array} */
        result[keyAndValue[0]] = fileStatus;
      } else {
        result[keyAndValue[0]].push(keyAndValue[1]);
      }
    }
  }
  return result;
}, U.v141c015200184033ae578dc51280fcfe = function(n) {
  if (parseFloat(n) == parseInt(n) && !isNaN(n)) {
    /** @type {!Array} */
    var s = ["th", "st", "nd", "rd"];
    /** @type {number} */
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }
  return n;
}, U.v5334d2d031b9b85aef650f0c74394bbd = function(c, e) {
  e(c);
  /** @type {number} */
  var i = 0;
  for (; i < c.v22710cf6916a48e141cc7ad7876eca98.length; i++) {
    var t = c.v22710cf6916a48e141cc7ad7876eca98[i];
    U.v5334d2d031b9b85aef650f0c74394bbd(t, e);
  }
  /** @type {number} */
  i = 0;
  for (; i < c.vabde4a187e855cd6fb04c0f6619f306f.length; i++) {
    var a = c.vabde4a187e855cd6fb04c0f6619f306f[i];
    U.v5334d2d031b9b85aef650f0c74394bbd(a, e);
  }
}, U.v2e9100443c8af678afc19b59328f27c6 = function(x, d, lazyLayout) {
  if (x == undefined) {
    /** @type {number} */
    x = 0;
  }
  if (d == undefined) {
    /** @type {number} */
    d = 1;
  }
  var lightI;
  var lightJ;
  var rds;
  do {
    var g = lazyLayout.va7f5b666e153a7fd316b95fa2a8560ac();
    var h = lazyLayout.va7f5b666e153a7fd316b95fa2a8560ac();
    /** @type {number} */
    lightI = 2 * g - 1;
    /** @type {number} */
    lightJ = 2 * h - 1;
    /** @type {number} */
    rds = lightI * lightI + lightJ * lightJ;
  } while (rds > 1);
  return X = Math.sqrt(-2 * Math.log(rds) / rds) * lightI, X = x + Math.sqrt(d) * X, X;
}, U.v89a7b244f490bcd032d03a653ecec32a = function(nameOfRoute) {
  return _.reduce(nameOfRoute.split(""), function(a, strUtf8) {
    return a + strUtf8.charCodeAt(0);
  }, 0);
}, U.v190ec983a859dc4055e9229984c75a87 = function(str, count) {
  return count == 1 ? str : str.slice(-1) === "y" ? str.charAt(str.length - 2).va9561de3cbae547424311d74662f3fb4() ? str + "s" : str.slice(0, -1) + "ies" : str.substring(str.length - 2) === "us" ? str.slice(0, -2) + "i" : ["ch", "sh"].indexOf(str.substring(str.length - 2)) !== -1 || ["x", "s"].indexOf(str.slice(-1)) !== -1 ? _.endsWith(str, "Tech") ? str + "s" : str + "es" : str + "s";
}, U.v9cc3999b7638aeaaaddcb6d6e74ff4bd = function(obj, instance, type, _, s, m) {
  /** @type {string} */
  var nav_item_id_prefix = "dlFrame_" + _;
  var b = A.v87b8393064cbfa8977b32cec36a69d86().v95f91532f5d26784e6a15cd56a90103d("bin/getFile.php");
  if (b.indexOf("//") >= 0) {
    var string = b.substr(b.indexOf("//") + 2);
  } else {
    string = b;
  }
  string = string.substr(string.indexOf("/"));
  var a = $("<form style='display: none;' action='" + string + "' method='POST' target='" + nav_item_id_prefix + "'>");
  var markerNav = $("<input name='mode' type='hidden' value='" + instance + "'>");
  markerNav.appendTo(a);
  var mascotImage = $("<input name='mimeType' type='hidden' value='" + type + "'>");
  mascotImage.appendTo(a);
  var l = $("<input name='filename' type='hidden' value='" + _ + "'>");
  l.appendTo(a);
  var requiredCSS = $("<input name='data' type='hidden' value=\"" + v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(m) + '">');
  requiredCSS.appendTo(a);
  var imgC = $("<iframe style='display: none;' name='" + nav_item_id_prefix + "'>");
  imgC.appendTo(a);
  var d = $("<a href='#'>");
  d.text(s);
  d.click(function() {
    a.submit();
  });
  d.appendTo(obj);
  a.appendTo(obj);
}, U.ve7b74f7baae1054a9b87db8cda0d00fc = function(a, tension) {
  return "data:" + a + ";base64," + v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be(tension);
}, U.v4b3a34188e801472f1a7ca940cce662e = function(jsd) {
  return jsd.setSeconds(0), jsd.setMilliseconds(0), jsd.setMinutes(0), jsd.setHours(0), jsd;
}, U.v529b1422399ef1e14cbaa5634112b80f = function(a) {
  return Math.max(0, Math.max.apply(null, $.map((a || "*") === "*" ? $.makeArray(document.getElementsByTagName("*")) : $(a), function(entryEl) {
    return parseFloat($(entryEl).css("z-index")) || null;
  })));
}, U.v1530baaaf05af88b5394f3c8657af96a = function(ca) {
  var a = ca.getHours();
  return a < 12 ? U.vc0e6c88f8413e92781b652ae2786391a("morning") : a < 18 ? U.vc0e6c88f8413e92781b652ae2786391a("afternoon") : U.vc0e6c88f8413e92781b652ae2786391a("evening");
}, U.vdfcca307a0489ee3baf51069dd57c8b3 = 2147483647, U.v41801985ef2ba08bd8a00cb405eee93f = 16711680, U.ve0abb88a035ddf91f36aab6261b9ec78 = 9498256, U.vd061a50b853f9b5977739d58664c2a1f = 32768, U.veabf98339600d038bcb8c07c3d68c817 = 255, U.v73aa124e9d0eeeae97ee8c88097e4a84 = 0, U.ved8ae424daa7f28e53e59f986d8f5c2a = 16777215, U.va534729dab73befb34cfc09098830727 = 65535, U.vdbef0c9b1ff557f5be423db0fb51c4f8 = 16711935, U.v47c3ac0f62e4f938a8f06996190ab22b = 16776960, U.va4161b4e4d23028cb5c4c22e7fe02b7c =
16753920, U.vb01400603b00d5b85d381cbfdc807eb9 = 13421772, U.v2981effd7b0f8e825ea3d1138c7b50c4 = 10066329, U.v1f73280771982381f70ff91699632ee1 = 6710886, U.v8102f1af8894787d5e19aa46ced78a9d = 11393254, U.v5c56a6fffe14327734e85b3492a8874f = 15761536, U.v0eb0b0ac7d9c9e6c4e2e6b8b776a426f = "Magdalena|Deborah|Josephine|Nikki|Donna|Matilda|Judy|Maureen|Sue|Kathy|Stephanie|Kearney|Mason|Charlene|Anne|Sharon|Adele|Esabel|Antoinette|Belinda|Thelma|Sophie|Tamara|Ilia|Danielle|Emmy|Marguerite|Mae|Paulette|Shelley|Corrinne|Claudia|Kiley|Laurene|Aline|Janina|Claire|Yolanda|Tia|Juliette|Renee|Jocelyn|Nadine|Irene|Beatrice|Luisa|Amanda|Lorna|Joan|Cherrilyn",
U.vf41c30b37952a12ae8f40cc2511be55c = "Chuck|Maurice|Anthony|Keith|Gerard|Luke|Peter|Andrew|Jed|William|Eric|Brian|Francis|Thomas|Josh|Sean|Calvin|Roland|Everett|Kamal|Hubert|Bruce|Malcolm|Addison|Russell|Armand|Hugh|Eddie|Lawrence|Stanley|Olaf|David|Alphonse|Dewayne|Jack|Chas|Leonard|Alvin|Kenneth|Edmund|Harold|John|Mario|Miguel|Lloyd|Max|Irving|Howard|Bart|Ronald", U.v951e8154f7d94326771a7aa7ccb0a4a4 = "Abrams|Alifano|Barrett|Beaudry|Coakley|Cygan|Demoura|Donnelly|Espinosa|Eisold|Ferrell|Fitzgerald|Ginley|Gorzocoski|Hedrick|Hawkins|Illig|Jordan|Johnson|Kadouri|Koetsch|Lafontaine|Lewonchuk|Maruca|Mudry|Nichting|Nestor|Olsson|Overtreet|Pinette|Poe|Quijada|Quates|Rancke|Robidoux|Slovack|Skwira|Thorpe|Tsai|Ukrainecs|Ustach|Vermouth|Vyce|Worthington|Winnie|Yearwood|Zina|Zucco|Renfrew|Haywood|Allder|Arcouette|Beane|Blunda|Costa|Czech|Denery|Doyle|Emery|Evans|Fillion|Frazzetta|Gilmour|Greco|Hewson|Hunter|Ingram|Isabelle|Jenks|Joyal|Keaton|Kimball|Laforce|Lynch|Matlock|McMullen|Niemand|Nassar|Obert|Oppel|Pazzaglia|Pesta|Price|Quill|Quynn|Ramsay|Ribnicky|Sacco|Sienko|Spaduzzi|Tageh|Turner|Tyrell|Whitsett|Witek|Zundell|Pugh|Moore|Fernanez|Davis",
v65b9c18832fc7f2bbb412f3e0c656a16.prototype.constructor = v65b9c18832fc7f2bbb412f3e0c656a16, v65b9c18832fc7f2bbb412f3e0c656a16.prototype.trigger = function(eventName) {
  var labelChildNodes = this.events[eventName] || [];
  /** @type {!Array<?>} */
  args = Array.prototype.slice.call(arguments, 1);
  /** @type {number} */
  var z = 0;
  for (; z < labelChildNodes.length; ++z) {
    var self = labelChildNodes[z];
    self.other[self.method].apply(self.other, args);
  }
}, v65b9c18832fc7f2bbb412f3e0c656a16.prototype.v49ea327f13bf90595e88867183e3c3b3 = function(to, idx, load) {
  var args = this.events[idx] || [];
  this.events[idx] = args;
  args.push({
    other : to,
    method : load
  });
}, v65b9c18832fc7f2bbb412f3e0c656a16.prototype.vd6c9da16407e661030f373213edab049 = function(data, layer, id) {
  var key;
  for (key in this.events) {
    if (this.events.hasOwnProperty(key)) {
      var array = this.events[key];
      /** @type {number} */
      var i = 0;
      for (; i < array.length; ++i) {
        var item = array[i];
        if ((data == undefined || item.other == data) && (layer == undefined || layer == key) && (id == undefined || item.method == id)) {
          array[i] = array[array.length - 1];
          array.length--;
          i--;
        }
      }
    }
  }
}, View.prototype.v2c8c55808c5bad3b41e3da0c0a838da8 = function(type) {
}, View.prototype.vdc2f88e67acb2768716d43f467174e5c = function(type) {
}, View.prototype.v08719502af10e937eaa8122d310cad9f = function(a22) {
}, View.prototype.onMouseMove = function(event) {
}, View.prototype.v1548eef244bda1da0d2e4b3453e25386 = function(type) {
}, View.prototype.vd943b00af6807a4ecd577b69c54cd639 = function(type) {
}, View.prototype.v2fb3d73eca68cd0a5c5eaaf74e2a0ff3 = function(type) {
}, View.prototype.vea1287eca9445a1dd99302e5d228ef46 = function(type) {
}, View.prototype.v274031ca168e217b24fa1e60d1efcb6f = function(type) {
}, View.prototype.v02b056e930cff9954b96608f731c25ab = function(sectionParam, macro) {
  this.overlays.push({
    id : sectionParam,
    name : macro
  });
}, View.prototype.v13d4ec01ed458aa1f8b179e1c2437a43 = function(newWayId) {
  _.remove(this.overlays, {
    id : newWayId
  });
}, View.prototype.v45ef6a50326edc3753b5f6c5d925763c = function() {
}, View.prototype.vd6b0d67aab8b6853508390473a8d6743 = function() {
}, View.prototype.v085744687b2ef8b1bd8b69dfcb337dac = function() {
  return new Point(790, 522);
}, View.prototype.v15913e291016542bf11cb1fcafc28519 = function() {
  return true;
}, View.prototype.va2d78265764a9d326f92455033ffb2a5 = function() {
  return [];
}, v61a128f3f62cccbce8cb9299d73ce611.prototype = Object.create(Object.prototype), v61a128f3f62cccbce8cb9299d73ce611.prototype.constructor = v61a128f3f62cccbce8cb9299d73ce611, v61a128f3f62cccbce8cb9299d73ce611.prototype.v07a2bcda8ad187ae9703e07ad6eeb928 = function() {
  return this.selector;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.getElement = function() {
  return this.selector[0];
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v5f48d568f84067416af81e64e14507c9 = function(a) {
  a.addClass("disabled");
  a.children().removeAttr("href");
  a.children().removeAttr("data-toggle");
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v2beb58a0ad35f3248c3ae2c52688d5f3 = function(a) {
  a.removeClass("disabled");
  a.children().attr("href", "#");
  a.children().attr("data-toggle", "tab");
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v16695936c38a628e85ecd796786f9ea2 = function(a, b) {
  this.selector.find(".nav-tabs").children().removeClass("active");
  this.selector.find(".tab-pane").removeClass("active");
  a.addClass("active");
  b.addClass("active");
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vb23354d011a0e16f4f4fb3afcd425697 = function(r, i) {
  r.attr("disabled", !i);
  r.attr("readonly", !i);
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vb2882799442277da900ab0a41c644e08 = function($aInput) {
  return !$aInput.attr("disabled");
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vda984d3332d2ec2db18db6c095155b94 = function(senderCheckbox) {
  return senderCheckbox.attr("checked");
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v72e04914c7cec688d0bf351cfd07e583 = function(a, b) {
  a.attr("checked", b);
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v7b2414fd4f791c2847f4cc04cca8ab39 = function(a) {
  return $(a).is(":checked");
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vb3cb4254c2eb85a07766a6a441d40e29 = function(a, b) {
  a.attr("checked", b);
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v864febdafb7a28e75280a3306761e469 = function(n) {
  return n[0].selectedIndex;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v00a94e177afe39f3cefb7b639e554084 = function(cmds, n) {
  /** @type {number} */
  cmds[0].selectedIndex = n;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vb9b521b0a24fc9d944aff9c76cbce402 = function(a) {
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v41200f3d167433813131b1feb042dbca = function(a, b) {
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vc22528f6f67c96a40e226f7422a34b41 = function(b) {
  var $words = this.v9a8411e63aa80d47ff1b3f059067fffd(b);
  return $words.length <= 0 ? null : $words[0];
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vda382259ac0b8ca429107a6d4220772a = function(input, max_out) {
  var b = input.find("option");
  /** @type {number} */
  var a = 0;
  for (; a < b.length; ++a) {
    var _ref_a = b.eq(a);
    if (_ref_a[0].vf62ce8fea4b5be7fb9993944e69f1a17 == max_out) {
      /** @type {number} */
      input[0].selectedIndex = a;
      return;
    }
  }
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v9a8411e63aa80d47ff1b3f059067fffd = function(d) {
  var crossfilterable_layers = d.find("option:selected");
  /** @type {!Array} */
  var newNodeLists = [];
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < crossfilterable_layers.length; ++layer_i) {
    newNodeLists.push(crossfilterable_layers[layer_i].vf62ce8fea4b5be7fb9993944e69f1a17);
  }
  return newNodeLists;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v2584035ea0475e47ec271a36d5cfb345 = function(b, variableNames) {
  var wordsInLine = b.find("option").filter(function() {
    return $(this).html() == variableNames;
  });
  return wordsInLine.length <= 0 ? -1 : wordsInLine.index();
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v24ef354e1e54200d10606158577a3a99 = function(m, b, c) {
  var sel = $("<option></option>");
  sel.text(c ? c(b).toString() : b.toString());
  /** @type {string} */
  sel[0].vf62ce8fea4b5be7fb9993944e69f1a17 = b;
  m.append(sel);
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vc85905445b80cd56d359581eaf15dab5 = function(m, d, tx) {
  /** @type {number} */
  var i = 0;
  for (; i < d.length; ++i) {
    this.v24ef354e1e54200d10606158577a3a99(m, d[i], tx);
  }
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vd6d9520150bcdad0acf25abbbbfe89f6 = function(page_range) {
  var filteredTasks = page_range.find("option");
  /** @type {!Array} */
  var newNodeLists = [];
  /** @type {number} */
  var i = 0;
  for (; i < filteredTasks.length; ++i) {
    newNodeLists.push(filteredTasks[i].vf62ce8fea4b5be7fb9993944e69f1a17);
  }
  return newNodeLists;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v9588dce3b74a5eaab0b9da4b7ba2eace = function(postboard) {
  return postboard.children().length;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v244018a8ba875620793d1c143d9d54e8 = function() {
  /** @type {!Array} */
  var args = [];
  args.unshift(this.selector);
  for (; args.length > 0;) {
    var a = args.shift();
    var i = a.attr("id");
    if (i != undefined) {
      this[i] = a;
    }
    var imagesLen = a.children().length;
    /** @type {number} */
    var j = 0;
    for (; j < imagesLen; ++j) {
      args.unshift(a.children().eq(j));
    }
  }
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vfe402cf66166d19275fc24a95679b98d = function(a) {
  return a[0].vced8a126f9ce53e6b552155aa35e163a;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v2c250f577f1ea216a56abfccb18b3b0e = function(sId, opts) {
  if (opts.placement == undefined) {
    /** @type {string} */
    opts.placement = "right";
  }
  /** @type {string} */
  opts.trigger = "manual";
  /** @type {!Object} */
  sId[0].vced8a126f9ce53e6b552155aa35e163a = opts;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v7bec59a066d36533e7ec0119ce213c6f = function(a, layerName) {
  return a[0].vced8a126f9ce53e6b552155aa35e163a[layerName];
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vc6b04fbd6f6093abb7168c5b3691f369 = function(eventStr, a, b) {
  /** @type {boolean} */
  eventStr[0].vced8a126f9ce53e6b552155aa35e163a[a] = b;
  /** @type {boolean} */
  eventStr[0].vced8a126f9ce53e6b552155aa35e163a.v72bd5c2b6a14fb05fc0083aa71b575e4 = false;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v2a3e216374fbe18dba3811397a148ba6 = function(aNode, aAttribute) {
  delete aNode[0].vced8a126f9ce53e6b552155aa35e163a[aAttribute];
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vb91883bc74eb846dcb5876098c22d085 = function(element, c) {
  this.v2c250f577f1ea216a56abfccb18b3b0e(element, c);
  /**
   * @param {!Object} options
   * @return {?}
   */
  var init = function(options) {
    if (options.v40604f2250c8596859e9bed2b7eca6ce) {
      options.v40604f2250c8596859e9bed2b7eca6ce(element, options);
    }
    var d = element.val();
    if (options.date != undefined && options.date == 1) {
      var check = element.datepicker("getDate");
      if (check == null) {
        /** @type {string} */
        d = "";
      }
    }
    var node = U.v88c15911c952f6b6297d739c02a174ac(d, options);
    var expandedUrl = node.vffff6aa0b03c01586db145ae9196486e;
    return node.v1c04c9e3f97c8fc348b047988bd5f6b2 == 0 ? (options.title = expandedUrl, options.template = '<div class="tooltip" style="white-space: normal;" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', options.v72bd5c2b6a14fb05fc0083aa71b575e4 || (options.v72bd5c2b6a14fb05fc0083aa71b575e4 = true, options.ved12e66b6f8790708e8f6ae2a7d40b5a = false, element.tooltip("destroy"), element.tooltip(options)), options.ved12e66b6f8790708e8f6ae2a7d40b5a || (options.ved12e66b6f8790708e8f6ae2a7d40b5a =
    true, element.attr("title", options.title).tooltip("fixTitle").tooltip("show"))) : options.ved12e66b6f8790708e8f6ae2a7d40b5a && (options.ved12e66b6f8790708e8f6ae2a7d40b5a = false, element.tooltip("hide")), options.v24eea96b22ef2bcbf18e221b6a71c9f3 && options.v24eea96b22ef2bcbf18e221b6a71c9f3(element, options, node), node;
  };
  element.keyup(function() {
    init(element[0].vced8a126f9ce53e6b552155aa35e163a);
  });
  element.change(function() {
    init(element[0].vced8a126f9ce53e6b552155aa35e163a);
  });
  /**
   * @return {?}
   */
  element[0].vb6fc34bf7df3d5d15ca999db3abe10b9 = function() {
    return init(element[0].vced8a126f9ce53e6b552155aa35e163a);
  };
  this.ve3c53318f3c028725251819eea78e8c8.push(element);
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v88c15911c952f6b6297d739c02a174ac = function(name) {
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < this.ve3c53318f3c028725251819eea78e8c8.length; ++layer_i) {
    var layer = this.ve3c53318f3c028725251819eea78e8c8[layer_i];
    if (layer == name) {
      var c = layer.input[0].vb6fc34bf7df3d5d15ca999db3abe10b9();
      return c;
    }
  }
  return null;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.vb05524ee3429ec38953d9eb4f3f2f363 = function(items) {
  var localStorageObject = {};
  /** @type {!Array} */
  localStorageObject.ve3c53318f3c028725251819eea78e8c8 = [];
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < this.ve3c53318f3c028725251819eea78e8c8.length; ++layer_i) {
    var layer = this.ve3c53318f3c028725251819eea78e8c8[layer_i];
    /** @type {boolean} */
    var item = true;
    if (items && items.indexOf(layer) == -1 && (item = false), item) {
      var falseySection = layer[0].vb6fc34bf7df3d5d15ca999db3abe10b9();
      if (falseySection.v1c04c9e3f97c8fc348b047988bd5f6b2 != 1) {
        localStorageObject.ve3c53318f3c028725251819eea78e8c8.push(falseySection);
      }
    }
  }
  return localStorageObject.v1c04c9e3f97c8fc348b047988bd5f6b2 = localStorageObject.ve3c53318f3c028725251819eea78e8c8.length <= 0, localStorageObject;
}, v61a128f3f62cccbce8cb9299d73ce611.prototype.v54c2849df4d1306e7988f0cb953901d1 = function(name) {
  var c = {};
  /** @type {!Array} */
  c.ve3c53318f3c028725251819eea78e8c8 = [];
  /** @type {number} */
  var i = 0;
  for (; i < this.ve3c53318f3c028725251819eea78e8c8.length; ++i) {
    var match = this.ve3c53318f3c028725251819eea78e8c8[i];
    if (match == name) {
      var tblr = U.v88c15911c952f6b6297d739c02a174ac(match.val(), match[0].vced8a126f9ce53e6b552155aa35e163a);
      return tblr.value;
    }
  }
  throw new Error("validator not found for input");
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype = Object.create(v61a128f3f62cccbce8cb9299d73ce611.prototype), vc41c7fe61eaff586a43ca6fdecb046f3.prototype.constructor = vc41c7fe61eaff586a43ca6fdecb046f3, vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61 = [], vc41c7fe61eaff586a43ca6fdecb046f3.v3683420ee74216326a2ee2ec0ea39dfa = 0, vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8 = 1, vc41c7fe61eaff586a43ca6fdecb046f3.v2a30a0e98cb0cceffb461cdc9181d000 = 2, vc41c7fe61eaff586a43ca6fdecb046f3.va2bf3f6c33874c0926985ffe21c9d205 =
0, vc41c7fe61eaff586a43ca6fdecb046f3.vcacb79bf77199483ddcc3e9f66ac49ed = 1, vc41c7fe61eaff586a43ca6fdecb046f3.v559f16fdb10212ec447231e168281a11 = 2, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v5abc66b7877ad63fcd2cda7ba6566ea5 = function(options) {
  var tile = this;
  var c = v13260862a5e36823cb5546b59af48c71.instance.vd158edc9dfa3e501e772c8418accaf12(this.v892010908a3f0cac58cf3177818409a5);
  if (!c) {
    throw new Error("Could not find HTMLResource '" + this.v892010908a3f0cac58cf3177818409a5 + "' for form.");
  }
  this.selector = c.v4b8b6ade5ab1fbe18dced948a5ae9bdd();
  /** @type {boolean} */
  options.closeOnEscape = false;
  if (options.v1b41fcbc06f79e8ed4b144b24b8f93cc != undefined && options.v1b41fcbc06f79e8ed4b144b24b8f93cc == 0) {
    /**
     * @return {undefined}
     */
    options.open = function() {
      $(".ui-dialog-titlebar-close", this.parentNode).hide();
    };
  }
  /**
   * @return {?}
   */
  options.beforeClose = function() {
    return tile.v4b4531397140e86a5228f4cc44920a7a();
  };
  /**
   * @return {undefined}
   */
  options.close = function() {
    tile.onClose();
    tile.vefae698737bd6e081ef9b2dea318f381();
  };
  /**
   * @param {!Function} cellRect
   * @param {?} pixelRect
   * @return {undefined}
   */
  options.resize = function(cellRect, pixelRect) {
    tile.v8cd79226d01ede570a67dbb0a7ead011(cellRect, pixelRect);
  };
  /**
   * @param {?} noVisiCheck
   * @param {?} needsMoreTime
   * @return {undefined}
   */
  options.focus = function(noVisiCheck, needsMoreTime) {
    tile.v4e6028f2249eafa37bc3fdcd87be65b4();
  };
  /** @type {boolean} */
  options.autoOpen = false;
  if (options.v18b11d05a6da1ae0865516d4ca5d017e != undefined) {
    this.v18b11d05a6da1ae0865516d4ca5d017e = options.v18b11d05a6da1ae0865516d4ca5d017e;
  }
  if (options.v939ab7e31e06cb168c77667585d89214 != undefined) {
    this.v939ab7e31e06cb168c77667585d89214 = options.v939ab7e31e06cb168c77667585d89214;
  }
  if (options.vcc4f3aeb474c8f55ab8e9e27d1f0fd77 != undefined) {
    this.vcc4f3aeb474c8f55ab8e9e27d1f0fd77 = options.vcc4f3aeb474c8f55ab8e9e27d1f0fd77;
  }
  if (options.v11492816a001fd45922999c10e9fe9db != undefined) {
    if (options.v11492816a001fd45922999c10e9fe9db) {
      /** @type {number} */
      this.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.v3683420ee74216326a2ee2ec0ea39dfa;
    } else {
      /** @type {number} */
      this.v18b11d05a6da1ae0865516d4ca5d017e = vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8;
    }
  }
  if (this.v304659b3f04ddcb8ce749a372c9a35ae()) {
    this.selector.appendTo(v13260862a5e36823cb5546b59af48c71.instance.canvas.parent());
    this.selector.dialog(options);
    this.selector[0].i = this;
    this.v244018a8ba875620793d1c143d9d54e8();
  }
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.show = function() {
  if (this.v304659b3f04ddcb8ce749a372c9a35ae()) {
    vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.push(this);
    if (_.isFunction(this.v76c4256a41192e3bfe56291497395995)) {
      this.v76c4256a41192e3bfe56291497395995();
    }
    this.selector.dialog("open");
    this.v25858949839469d7389869d7422938d5();
    this.v792efcddeab5ba6e97eb0ce3badcdd6e();
    /**
     * @param {!Event} evt
     * @return {undefined}
     */
    var removeSelectedFile = function(evt) {
      if ($(evt.relatedTarget).parent()) {
        var titleInputId = $(evt.relatedTarget).parent().attr("id");
        if (titleInputId) {
          $(evt.relatedTarget).parents(".nav-tabs").find("#" + titleInputId).trigger("kmi_lostFocus");
        }
      }
    };
    return $(".nav-tabs > li").on("shown", removeSelectedFile), $(".nav-tabs > li").on("shown.bs.tab", removeSelectedFile), true;
  }
  /** @type {number} */
  var i = 0;
  for (; i < vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.length; ++i) {
    if (this.compare(vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61[i])) {
      vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61[i].moveToTop();
      break;
    }
  }
  return false;
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v792efcddeab5ba6e97eb0ce3badcdd6e = function() {
  $(".nav-tabs > li").each(function() {
    var target = $(this).attr("id");
    if (A.v87b8393064cbfa8977b32cec36a69d86().isDisabled(target)) {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        var a = $(this).next();
        if (a.length > 0) {
          a.find("a").tab("show");
          a.addClass("active");
        }
      }
      $(this).addClass("disabled");
      $(this).find("a").removeAttr("data-toggle");
    }
  });
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.va44b82ecb181f1103b1c3bb284745ecc = function() {
  if (v13260862a5e36823cb5546b59af48c71.instance.state.vaf2a576127494a53d0e079f0ed12d0e1 == null && this.vcc4f3aeb474c8f55ab8e9e27d1f0fd77 == 1) {
    this.close();
  } else {
    switch(this.v939ab7e31e06cb168c77667585d89214) {
      case vc41c7fe61eaff586a43ca6fdecb046f3.va2bf3f6c33874c0926985ffe21c9d205:
        this.close();
        break;
      case vc41c7fe61eaff586a43ca6fdecb046f3.vcacb79bf77199483ddcc3e9f66ac49ed:
        break;
      case vc41c7fe61eaff586a43ca6fdecb046f3.v559f16fdb10212ec447231e168281a11:
        if (this.update != undefined) {
          this.update();
        }
        break;
    }
  }
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v304659b3f04ddcb8ce749a372c9a35ae = function() {
  /** @type {!Array} */
  var inputs = [];
  /** @type {number} */
  var i = 0;
  for (; i < vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.length; ++i) {
    if (this.compare(vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61[i])) {
      inputs.push(vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61[i]);
    }
  }
  switch(this.v18b11d05a6da1ae0865516d4ca5d017e) {
    case vc41c7fe61eaff586a43ca6fdecb046f3.v3683420ee74216326a2ee2ec0ea39dfa:
      return true;
    case vc41c7fe61eaff586a43ca6fdecb046f3.vc59a7be887ad0ec726cdddbacfe21ff8:
      return inputs.length <= 0;
    case vc41c7fe61eaff586a43ca6fdecb046f3.v2a30a0e98cb0cceffb461cdc9181d000:
      /** @type {number} */
      i = 0;
      for (; i < inputs.length; ++i) {
        var input = inputs[i];
        input.close();
      }
      return true;
    default:
      console.log("Invalid setting for newInstanceBehavior!");
      break;
  }
  return false;
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.compare = function(showFn) {
  return this.v892010908a3f0cac58cf3177818409a5 == showFn.v892010908a3f0cac58cf3177818409a5;
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v174ac2660b098f088b885ab10317975b = function(key, button) {
  var buttons = this.selector.dialog("option", "buttons");
  buttons[key] = button;
  this.selector.dialog("option", "buttons", buttons);
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.va33726c76189d2bf880774ad373d71a9 = function(del_label) {
  var buttons = this.selector.dialog("option", "buttons");
  delete buttons[del_label];
  this.selector.dialog("option", "buttons", buttons);
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.vc19554bf557a1187f872f23613383cb2 = function(body) {
  this.selector.dialog("option", "title", body);
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.moveToTop = function() {
  this.selector.dialog("moveToTop");
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.position = function(position) {
  this.selector.dialog("option", "position", position);
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.close = function() {
  if (this.selector && this.v98186f991a7a8069f2f5775d991ac7e2 == 0) {
    this.selector.trigger("kmi_lostFocus");
    if (this.selector.dialog("isOpen")) {
      this.selector.dialog("close");
    }
  }
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.vefae698737bd6e081ef9b2dea318f381 = function() {
  /** @type {boolean} */
  this.v98186f991a7a8069f2f5775d991ac7e2 = true;
  this.selector.remove();
  vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.vf81b17578abb97a8de755cddbf7f45a9(this);
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v8cd79226d01ede570a67dbb0a7ead011 = function(cellRect, pixelRect) {
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v95c9eb66d5e1855b5f3fb7fcd2746215 = function() {
  return false;
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v4b4531397140e86a5228f4cc44920a7a = function() {
  if (this.vd282b992a74b0e64da9ef1f77ed18c4f) {
    return;
  }
  if (this.v95c9eb66d5e1855b5f3fb7fcd2746215()) {
    var rejectingServer = this;
    return Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Exit without saving changes to {0} form?", this.selector.dialog("option", "title")), U.vc0e6c88f8413e92781b652ae2786391a("Save Changes"), Alert.vc20f5496a0e37947c331397006a83f07 | Alert.ve332d6adb70bc5edb5e110e004c86fa5, function(b) {
      if (b.vb6050b7f11623a051333e19572049a70 == Alert.vc20f5496a0e37947c331397006a83f07) {
        /** @type {boolean} */
        rejectingServer.vd282b992a74b0e64da9ef1f77ed18c4f = true;
        rejectingServer.close();
      } else {
        /** @type {boolean} */
        rejectingServer.vd282b992a74b0e64da9ef1f77ed18c4f = false;
      }
    }), false;
  }
  return true;
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.onClose = function() {
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v4e6028f2249eafa37bc3fdcd87be65b4 = function() {
  var crossfilterable_layers = vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.clone();
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < crossfilterable_layers.length; ++layer_i) {
    var nis = crossfilterable_layers[layer_i];
    if (nis !== this) {
      nis.vb1a64dd5a62f88f19b818c858c3b3456();
      nis.selector.trigger("kmi_lostFocus");
    }
  }
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.vb1a64dd5a62f88f19b818c858c3b3456 = function() {
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v6091a3326b897c6592c298a18028c85f = function() {
  var a = this.selector.find("img[src^='images/assets/']").each(function() {
    var a = $(this).attr("src");
    a = A.v87b8393064cbfa8977b32cec36a69d86().v95f91532f5d26784e6a15cd56a90103d(a);
    $(this).attr("src", a);
    $(this).attr("crossorigin", "anonymous");
  });
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v3d86469d81d166a33db1a6056f8b506a = function() {
  return [{
    text : "OK",
    click : _.bind(function() {
      if (this.v7734af673296fca5fa1c5db92a239a03() !== false) {
        this.close();
      }
    }, this),
    class : "btn btn-default"
  }, {
    text : "Cancel",
    click : _.bind(function() {
      this.close();
    }, this),
    class : "btn btn-default"
  }];
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v7abca19a4bb0b70508cb1c7751e5a619 = function() {
  return [{
    text : "Cancel",
    click : _.bind(function() {
      this.close();
    }, this),
    class : "btn btn-default"
  }];
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.vbf1725ec800e3c6d9ab70308db7d3d17 = function() {
  return [{
    text : "Close",
    click : _.bind(function() {
      this.close();
    }, this),
    class : "btn btn-default"
  }];
}, vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v338d402928944e8de3838e5691b4183a = function() {
  return [{
    text : "Refresh",
    click : _.bind(function() {
      this.refresh();
    }, this),
    class : "btn btn-default"
  }, {
    text : "Close",
    click : _.bind(function() {
      this.close();
    }, this),
    class : "btn btn-default"
  }];
}, vb83b9117e3ceed59acbbd2d23058424a.prototype = Object.create(v61a128f3f62cccbce8cb9299d73ce611.prototype), vb83b9117e3ceed59acbbd2d23058424a.prototype.constructor = vb83b9117e3ceed59acbbd2d23058424a, vb83b9117e3ceed59acbbd2d23058424a.prototype.createElement = function() {
  var a = v13260862a5e36823cb5546b59af48c71.instance.vd158edc9dfa3e501e772c8418accaf12(this.v892010908a3f0cac58cf3177818409a5);
  if (!a) {
    throw new Error("Could not find HTMLResource '" + this.v892010908a3f0cac58cf3177818409a5 + "' for user control.");
  }
  this.selector = a.v4b8b6ade5ab1fbe18dced948a5ae9bdd();
  this.selector[0].i = this;
  this.v244018a8ba875620793d1c143d9d54e8();
}, vb83b9117e3ceed59acbbd2d23058424a.prototype.create = function() {
  return this.createElement(), this.selector;
}, vb83b9117e3ceed59acbbd2d23058424a.prototype.v4cfcb53978fd83231c75b36f997e0b9e = function(parentDomElem) {
  this.create().appendTo(parentDomElem);
  this.v25858949839469d7389869d7422938d5();
}, vb83b9117e3ceed59acbbd2d23058424a.prototype.vd3eadeb5433b85a736c79ae973480e82 = function(value) {
  this.selector.append(value);
}, vb83b9117e3ceed59acbbd2d23058424a.prototype.remove = function() {
  this.selector.remove();
  /** @type {null} */
  this.selector = null;
}, Alert.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), Alert.prototype.constructor = Alert, Alert.vc20f5496a0e37947c331397006a83f07 = 1, Alert.ve332d6adb70bc5edb5e110e004c86fa5 = 2, Alert.OK = 4, Alert.v6a489fc7ebc373a001c1badd1759c1eb = 8, Alert.show = function(id, options, type, icon) {
  var panel = new Alert(id, options, type, icon);
  return panel.show(), panel;
}, Alert.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v9f2a242fc92c9a254dc749c8029d696b.html(this.vf558f821741b5f58fcb7b4b4a75a7a4f);
}, Alert.prototype.v66abd861a11c3952c37ab8bb68048409 = function(b, a) {
  this.close();
  if (this.vdc908e0be6c90d5723fba6b652380a22 != null) {
    /** @type {number} */
    b.vb6050b7f11623a051333e19572049a70 = a;
    this.vdc908e0be6c90d5723fba6b652380a22(b);
  }
}, FinalAlert.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), FinalAlert.prototype.constructor = FinalAlert, FinalAlert.show = function(input, options, d) {
  var select = new FinalAlert(input, options, d);
  return select.show(), select;
}, FinalAlert.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v9f2a242fc92c9a254dc749c8029d696b.html(this.vf558f821741b5f58fcb7b4b4a75a7a4f);
  if (this.v0a801226f022f4a27105c9517479bf2b) {
    this.v21f5bf135897186593c7cf1a3ebd7675.show();
  }
  this.v306ee0d0dee2186ce96129af3656c71b.click(function() {
    window.close();
  });
  this.v0ec2dce44e65ae6e3b2016e09beb51bf.click(_.bind(function() {
    A.v87b8393064cbfa8977b32cec36a69d86().v2a548a77dc3dca04fb52bd99fe0d1c6b();
    this.close();
  }, this));
}, v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", v5a80f85022622529c463a6ba2ff39861.ve994a1672c13d9007f132a6050a9b2be = function(t) {
  /** @type {string} */
  var s = "";
  var i;
  var q;
  /** @type {string} */
  var value = "";
  var j;
  var m;
  var h;
  /** @type {string} */
  var b = "";
  /** @type {number} */
  var n = 0;
  do {
    i = t.charCodeAt(n++);
    q = t.charCodeAt(n++);
    value = t.charCodeAt(n++);
    /** @type {number} */
    j = i >> 2;
    /** @type {number} */
    m = (i & 3) << 4 | q >> 4;
    /** @type {number} */
    h = (q & 15) << 2 | value >> 6;
    /** @type {number} */
    b = value & 63;
    if (isNaN(q)) {
      /** @type {number} */
      h = b = 64;
    } else {
      if (isNaN(value)) {
        /** @type {number} */
        b = 64;
      }
    }
    /** @type {string} */
    s = s + v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.charAt(j) + v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.charAt(m) + v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.charAt(h) + v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.charAt(b);
    /** @type {string} */
    i = q = value = "";
    /** @type {string} */
    j = m = h = b = "";
  } while (n < t.length);
  return s;
}, v5a80f85022622529c463a6ba2ff39861.v0ed275c686852894092dbd89747e66d4 = function(input) {
  /** @type {string} */
  var output = "";
  var id;
  var key;
  /** @type {string} */
  var data = "";
  var byte1;
  var byte2;
  var phpval;
  /** @type {string} */
  var quot = "";
  /** @type {number} */
  var i = 0;
  /** @type {!RegExp} */
  var rxAnimationUsage = /[^A-Za-z0-9\+\/=]/g;
  if (rxAnimationUsage.exec(input)) {
    alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
  }
  input = input.replace(/[^A-Za-z0-9\+\/=]/g, "");
  do {
    /** @type {number} */
    byte1 = v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.indexOf(input.charAt(i++));
    /** @type {number} */
    byte2 = v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.indexOf(input.charAt(i++));
    /** @type {number} */
    phpval = v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.indexOf(input.charAt(i++));
    /** @type {number} */
    quot = v5a80f85022622529c463a6ba2ff39861.v36e5dad9e15b574340ec6d0ceef8a5ff.indexOf(input.charAt(i++));
    /** @type {number} */
    id = byte1 << 2 | byte2 >> 4;
    /** @type {number} */
    key = (byte2 & 15) << 4 | phpval >> 2;
    /** @type {number} */
    data = (phpval & 3) << 6 | quot;
    /** @type {string} */
    output = output + String.fromCharCode(id);
    if (phpval != 64) {
      /** @type {string} */
      output = output + String.fromCharCode(key);
    }
    if (quot != 64) {
      /** @type {string} */
      output = output + String.fromCharCode(data);
    }
    /** @type {string} */
    id = key = data = "";
    /** @type {string} */
    byte1 = byte2 = phpval = quot = "";
  } while (i < input.length);
  return output;
}, vd074db6e4d56af7e2a6f1c1d5ea2fb38.prototype = Object.create(Error.prototype), vd074db6e4d56af7e2a6f1c1d5ea2fb38.prototype.constructor = vd074db6e4d56af7e2a6f1c1d5ea2fb38, vc68951fcb00257396b06853901f0e510.prototype.v6cd4a743b490f8c220bcbf129550100b = function(h, el, data) {
  var count = this.__v0a04a4b7bcb1b773c065a844bec23993[this.playerName];
  if (count == undefined) {
    count = {};
    this.__v0a04a4b7bcb1b773c065a844bec23993[this.playerName] = count;
  }
  var t;
  for (t in h) {
    if (h.hasOwnProperty(t)) {
      var i = h[t];
      /** @type {*} */
      count[t] = JSON.parse(JSON.stringify(i));
    }
  }
  /** @type {!Array} */
  var pre = [];
  var e;
  for (e in this.__v0a04a4b7bcb1b773c065a844bec23993) {
    if (this.__v0a04a4b7bcb1b773c065a844bec23993.hasOwnProperty(e)) {
      count = this.__v0a04a4b7bcb1b773c065a844bec23993[e];
      var self = {};
      /** @type {string} */
      self.pn = e;
      /** @type {string} */
      self.va81ff58411bded22179e18329150c542 = "2000-01-01T00:00:00";
      /** @type {string} */
      self.v8b38c52b23d46b54e76c3785d3027a98 = "2000-01-01T00:00:00";
      self.d = {};
      /** @type {number} */
      var i = 0;
      for (; i < data.length; ++i) {
        var a = data[i];
        var c = count[a];
        if (c == undefined) {
          /** @type {null} */
          c = null;
        }
        self.d[a] = c;
      }
      /** @type {string} */
      self.d = JSON.stringify(self.d);
      pre.push(self);
    }
  }
  el(pre);
}, vc68951fcb00257396b06853901f0e510.prototype.v8cc4387f68224cdbcbf603449b319524 = function(name, contextBuilder) {
  var context = {};
  var result = this.vabbe19afd235991c70766de7f554b24d[name];
  if (!result) {
    /** @type {boolean} */
    result = true;
    /** @type {boolean} */
    this.vabbe19afd235991c70766de7f554b24d[name] = true;
  }
  context.result = result;
  contextBuilder(context);
}, vc68951fcb00257396b06853901f0e510.prototype.vedd24ae856673c8537da9ccd827a07cb = function(otherFile) {
  /** @type {boolean} */
  this.vabbe19afd235991c70766de7f554b24d[otherFile] = false;
}, v55d1ac7cab47e7eac4b6a3abf209b74e.prototype.v6cd4a743b490f8c220bcbf129550100b = function(d, t, f) {
  var result = {
    st : this.sessionToken,
    pn : this.playerName,
    d : JSON.stringify(d),
    ss : A.v87b8393064cbfa8977b32cec36a69d86().v6f632cd35a0abd3341ffe233a1c9869f
  };
  if (f != undefined) {
    result.vabcad5cc789a72894f89235755afa25a = f.join("|");
  }
  /** @type {number} */
  var GROUP_UPDATE_INFO_URL = Math.floor(Math.random() * 1e6);
  $.ajax({
    url : "https://" + A.v87b8393064cbfa8977b32cec36a69d86().veb279052b1a3f161d4aa8ccf105cb358 + "/mp/submit_data/r" + GROUP_UPDATE_INFO_URL,
    type : "POST",
    data : result,
    success : function(a) {
      t(a);
    },
    dataType : "json"
  });
}, v55d1ac7cab47e7eac4b6a3abf209b74e.prototype.v155e8d4f1d781572b4a7bc2296638a64 = function(encType) {
  /** @type {string} */
  var item = JSON.stringify(encType);
  /** @type {number} */
  var GROUP_UPDATE_INFO_URL = Math.floor(Math.random() * 1e6);
  $.ajax({
    url : "https://" + A.v87b8393064cbfa8977b32cec36a69d86().veb279052b1a3f161d4aa8ccf105cb358 + "/mp/submit_data/r" + GROUP_UPDATE_INFO_URL,
    type : "POST",
    data : {
      st : this.sessionToken,
      pn : this.playerName,
      d : item,
      ss : A.v87b8393064cbfa8977b32cec36a69d86().v6f632cd35a0abd3341ffe233a1c9869f
    }
  });
}, v55d1ac7cab47e7eac4b6a3abf209b74e.prototype.getData = function(fn, b) {
  var result = {
    st : this.sessionToken
  };
  if (b != undefined) {
    result.vabcad5cc789a72894f89235755afa25a = b.join("|");
  }
  /** @type {number} */
  var GROUP_UPDATE_INFO_URL = Math.floor(Math.random() * 1e4);
  $.ajax({
    url : "https://" + A.v87b8393064cbfa8977b32cec36a69d86().veb279052b1a3f161d4aa8ccf105cb358 + "/mp/get_data?r=" + GROUP_UPDATE_INFO_URL,
    type : "POST",
    data : result,
    success : function(responce) {
      fn(responce);
    },
    dataType : "json"
  });
}, v55d1ac7cab47e7eac4b6a3abf209b74e.prototype.v8cc4387f68224cdbcbf603449b319524 = function(options, contextBuilder) {
  $.ajax({
    url : "https://" + A.v87b8393064cbfa8977b32cec36a69d86().veb279052b1a3f161d4aa8ccf105cb358 + "/mp/request_resource",
    type : "POST",
    data : {
      st : this.sessionToken,
      pn : this.playerName,
      rk : options,
      ss : A.v87b8393064cbfa8977b32cec36a69d86().v6f632cd35a0abd3341ffe233a1c9869f
    },
    success : function(context) {
      contextBuilder(context);
    },
    dataType : "json"
  });
}, v55d1ac7cab47e7eac4b6a3abf209b74e.prototype.vedd24ae856673c8537da9ccd827a07cb = function(strip1) {
  $.post("https://" + A.v87b8393064cbfa8977b32cec36a69d86().veb279052b1a3f161d4aa8ccf105cb358 + "/mp/release_resource", {
    st : this.sessionToken,
    pn : this.playerName,
    rk : strip1,
    ss : A.v87b8393064cbfa8977b32cec36a69d86().v6f632cd35a0abd3341ffe233a1c9869f
  });
}, frmOpenLocal.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmOpenLocal.prototype.constructor = frmOpenLocal, frmOpenLocal.prototype.v25858949839469d7389869d7422938d5 = function() {
  var siteManagementRef = this;
  this.v06cffd6704f0437c0affeded92d2cddb.change(function(users) {
    siteManagementRef.vf876f9b67648db0853f4d11661152f8e(users);
  });
}, frmOpenLocal.prototype.vf876f9b67648db0853f4d11661152f8e = function(event) {
  var rejectingServer = this;
  var files = event.target.files;
  var file = files[0];
  if (file) {
    /** @type {!FileReader} */
    var reader = new FileReader;
    reader.onload = function(rejectedItem) {
      return function(fileLoadedEvent) {
        var msgB = v5a80f85022622529c463a6ba2ff39861.v0ed275c686852894092dbd89747e66d4(fileLoadedEvent.target.result);
        var b = new vcb778ce41130b213653506a1f586b179(msgB);
        if (rejectingServer.v3d85f210265965cf0db8eee3e88e608d) {
          /** @type {boolean} */
          b.v3d85f210265965cf0db8eee3e88e608d = true;
        }
        rejectingServer.ve0027c3d010e287db837cc0bf574b973 = b.vadd06da90bcbfab155139168f1c30c14();
        rejectingServer.close();
        if (rejectingServer.v389ef5507550fcd5ede0e822e4ca2b76) {
          rejectingServer.v389ef5507550fcd5ede0e822e4ca2b76({
            vb6050b7f11623a051333e19572049a70 : Alert.OK
          });
        }
      };
    }(file);
    reader.readAsText(file);
  }
}, frmOpenLocal.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
  if (this.v389ef5507550fcd5ede0e822e4ca2b76) {
    this.v389ef5507550fcd5ede0e822e4ca2b76({
      vb6050b7f11623a051333e19572049a70 : Alert.Cancel
    });
  }
}, frmSaveLocal.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmSaveLocal.prototype.constructor = frmSaveLocal, frmSaveLocal.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v20871860ed0b290a162f1b51a36ff49f.attr("href", "data:text/plain," + this.v636510007d5e32b5c263a63450c0b0a9);
}, frmSaveLocal.prototype.v9d98dfc75141f0888f8f658d2be9c659 = function() {
  this.close();
  if (this.v389ef5507550fcd5ede0e822e4ca2b76) {
    this.v389ef5507550fcd5ede0e822e4ca2b76({
      vb6050b7f11623a051333e19572049a70 : Alert.OK
    });
  }
}, frmExamineState.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmExamineState.prototype.constructor = frmExamineState, frmExamineState.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.vefb06aacae2c5bcd5e4ea3f0b8e011ac();
}, frmExamineState.prototype.vefb06aacae2c5bcd5e4ea3f0b8e011ac = function() {
  /** @type {string} */
  var result = "<h3 id='top'>Total size: " + Math.round(this.ve483eda65810789b71281091256f2805.data.length / 1024) + " KB, compressed: " + Math.round(this.ve483eda65810789b71281091256f2805.toString().length / 1024) + " KB</h3>";
  if (result = result + ("Byte array serialization took: " + this.vae2c8a7bf9ec38574a93c9b417e13f01 + " ms.<br><br>"), this.ve483eda65810789b71281091256f2805.vda9ac3ad3786ce67271bd2bf8d8f8a4f) {
    var expiredPokemons = _.sortBy(_.keys(this.ve483eda65810789b71281091256f2805.vda9ac3ad3786ce67271bd2bf8d8f8a4f), function(ballNumber) {
      return -this.ve483eda65810789b71281091256f2805.vda9ac3ad3786ce67271bd2bf8d8f8a4f[ballNumber];
    }, this);
    result = result + "By Object:<br><table><thead><th>Class</th><th>Total Bytes</th><th>Num Instances</th><th>Ave. Size Per Instance</th><tbody>";
    _.each(expiredPokemons, function(b) {
      result = result + ("<tr><td><a class='className' id='" + b + "'>" + b + "</a></td><td>" + this.ve483eda65810789b71281091256f2805.vda9ac3ad3786ce67271bd2bf8d8f8a4f[b] + "</td><td>" + this.ve483eda65810789b71281091256f2805.v4bd9a626707e6b4e0462491e46a62e8c[b] + "</td>");
      /** @type {string} */
      result = result + ("<td>" + Math.round(this.ve483eda65810789b71281091256f2805.vda9ac3ad3786ce67271bd2bf8d8f8a4f[b] / this.ve483eda65810789b71281091256f2805.v4bd9a626707e6b4e0462491e46a62e8c[b]) + "</td>");
      /** @type {string} */
      result = result + "</tr>";
    }, this);
    result = result + ("</tbody></table>Total size of objects:" + _.reduce(this.ve483eda65810789b71281091256f2805.vda9ac3ad3786ce67271bd2bf8d8f8a4f, function(h0, a) {
      return h0 + a;
    }, 0));
    result = result + "<div id='dialog'></div>";
  }
  this.log.html(result);
  var DISMENU = this.ve483eda65810789b71281091256f2805.v87396d652a1abb6ad660d181ec69d7e4;
  this.log.find(".className").click(function() {
    var n = DISMENU[$(this).attr("id")].join("<br>");
    $("#dialog").html(n).dialog({
      width : 700
    });
  });
}, frmExamineState.prototype.v34a5b825e83e9b13fd9006fcaea30af4 = function() {
  if (this.v1954c1c35f8ff27a5d842efe204e3f8f = A.vfe1c4eaec8ec40f848f9772196c532d3(), this.v1954c1c35f8ff27a5d842efe204e3f8f.__v7b394eaaef40e0f23ed5cfa27a84e162 || (this.v1954c1c35f8ff27a5d842efe204e3f8f.__v7b394eaaef40e0f23ed5cfa27a84e162 = 1), this.v1954c1c35f8ff27a5d842efe204e3f8f.__v62d7fadd6fbdd37c20f318a8570aa401 || (this.v1954c1c35f8ff27a5d842efe204e3f8f.__v62d7fadd6fbdd37c20f318a8570aa401 = {}), this.vb8ceead3733ca8a536b9cc08484d4bb9(this.v1954c1c35f8ff27a5d842efe204e3f8f), this.html = [],
  this.log.html(""), this.diff = {}, this.vfee498726be7ecb679589a48d930a03f = {}, this.ve011526d65c43ed2fd47b1dc613a437a = {}, _.forIn(this.state.__v62d7fadd6fbdd37c20f318a8570aa401, function(b, k, canCreateDiscussions) {
    this.vfee498726be7ecb679589a48d930a03f[k] = this.state.__v59f440fbb38d47551f8e11c604d98fcb[k];
  }, this), this.v036a0f4633e0f52796421e3749fea315 = {}, this.v74f3a4c015bf97525102869eb53d22fb(this.v1954c1c35f8ff27a5d842efe204e3f8f, this.state, "diff"), this.v98aad1596d71b36c159d4aadd0983b5f(this.v1954c1c35f8ff27a5d842efe204e3f8f), this.html.length == 0) {
    this.log.html("no differences");
  } else {
    var exports = new vcb778ce41130b213653506a1f586b179;
    exports.v0794e99849af353da2642d5a585704e3(this.diff);
    var expRecords = exports.toString();
    /** @type {string} */
    var result = "";
    /** @type {string} */
    result = result + ("<h3>Differences, totalling: " + expRecords.length + " bytes.</h3>");
    exports = new vcb778ce41130b213653506a1f586b179;
    exports.v0794e99849af353da2642d5a585704e3(this.v036a0f4633e0f52796421e3749fea315);
    expRecords = exports.toString();
    /** @type {string} */
    result = result + ("<h3>" + _.size(this.v036a0f4633e0f52796421e3749fea315) + " additions, totalling: " + expRecords.length + " bytes.</h3>");
    /** @type {string} */
    result = result + ("<h3>" + _.size(this.vfee498726be7ecb679589a48d930a03f) + " objects removed:</h3>");
    this.log.html(result);
    _.each(this.v036a0f4633e0f52796421e3749fea315, function(event) {
      this.state.__v62d7fadd6fbdd37c20f318a8570aa401[event.v8c75c1cb072261a8f9b97a37ccbab2e1] = event;
    }, this);
    _.forInRight(this.vfee498726be7ecb679589a48d930a03f, function(throwValue, flagOrFlags) {
      this.vf19bd3eacc0481299a312abacb422081(this.state, throwValue);
      delete this.state.__v62d7fadd6fbdd37c20f318a8570aa401[flagOrFlags];
      delete this.v1954c1c35f8ff27a5d842efe204e3f8f.__v62d7fadd6fbdd37c20f318a8570aa401[flagOrFlags];
    }, this);
    _.forOwn(this.ve011526d65c43ed2fd47b1dc613a437a, function(fontGrp, xtile, canCreateDiscussions) {
      _.each(fontGrp, function(ytile) {
        delete this.state.__v62d7fadd6fbdd37c20f318a8570aa401[xtile][ytile];
      }, this);
    }, this);
    this.v0dbfeb875b14c11a418a9022a7d3cae3(this.state, this.diff);
    this.vbd79c01b36e6ea7bc3a1986e63fe66ce(this.state, this.state.__v62d7fadd6fbdd37c20f318a8570aa401);
    this.v98aad1596d71b36c159d4aadd0983b5f(this.state);
    this.vb8ceead3733ca8a536b9cc08484d4bb9(this.state);
  }
}, frmExamineState.prototype.v74f3a4c015bf97525102869eb53d22fb = function(schema, obj) {
  /** @type {string} */
  var schemaType = typeof schema;
  if (schemaType == "object") {
    /** @type {boolean} */
    schema.__v7a3ea4927aec0a70b3c6ddced189c08d = true;
    if (!_.isDate(schema)) {
      delete this.vfee498726be7ecb679589a48d930a03f[schema.v8c75c1cb072261a8f9b97a37ccbab2e1];
    }
  }
  var expiredPokemons = _.difference(_.keys(obj), _.keys(schema));
  _.each(expiredPokemons, function(cX1) {
    if (!this.ve011526d65c43ed2fd47b1dc613a437a[obj.v8c75c1cb072261a8f9b97a37ccbab2e1]) {
      /** @type {!Array} */
      this.ve011526d65c43ed2fd47b1dc613a437a[obj.v8c75c1cb072261a8f9b97a37ccbab2e1] = [];
    }
    this.ve011526d65c43ed2fd47b1dc613a437a[obj.v8c75c1cb072261a8f9b97a37ccbab2e1].vc2b55451d6b5a973b456d3ad090abf8d(cX1);
  }, this);
  _.forIn(schema, function(item, i, canCreateDiscussions) {
    if (i.substring(0, 2) == "__") {
      return;
    }
    if (item || (_.isUndefined(obj[i]) && !_.isUndefined(item) && this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, item), obj[i] && this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, item)), item && item.__v7a3ea4927aec0a70b3c6ddced189c08d) {
      if (!(obj[i] && obj[i].v8c75c1cb072261a8f9b97a37ccbab2e1) || obj[i].v8c75c1cb072261a8f9b97a37ccbab2e1 != item.v8c75c1cb072261a8f9b97a37ccbab2e1) {
        this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, "&&" + item.v8c75c1cb072261a8f9b97a37ccbab2e1);
      }
      return;
    }
    if (item && item.v8c75c1cb072261a8f9b97a37ccbab2e1) {
      if (!this.state.__v62d7fadd6fbdd37c20f318a8570aa401[item.v8c75c1cb072261a8f9b97a37ccbab2e1]) {
        this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, "&&" + item.v8c75c1cb072261a8f9b97a37ccbab2e1);
        this.ve89e3bfd0c94a0d9efcf409a2c8a92f2(item);
        return;
      } else {
        if (_.isUndefined(item.v9b0d121fa92036f8189d310be9b247c7) || item.v9b0d121fa92036f8189d310be9b247c7) {
          return (!(obj[i] && obj[i].v8c75c1cb072261a8f9b97a37ccbab2e1) || obj[i].v8c75c1cb072261a8f9b97a37ccbab2e1 != item.v8c75c1cb072261a8f9b97a37ccbab2e1) && this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, "&&" + item.v8c75c1cb072261a8f9b97a37ccbab2e1), this.v74f3a4c015bf97525102869eb53d22fb(item, this.state.__v62d7fadd6fbdd37c20f318a8570aa401[item.v8c75c1cb072261a8f9b97a37ccbab2e1]);
        } else {
          /** @type {string} */
          var feature = "here";
          return;
        }
      }
    }
    /** @type {string} */
    var t = typeof item;
    if (t == "function") {
      return;
    }
    if (!obj || _.isUndefined(obj[i]) && !_.isUndefined(item)) {
      this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, item);
      this.html.vc2b55451d6b5a973b456d3ad090abf8d(obj.v8c75c1cb072261a8f9b97a37ccbab2e1 + "[" + i + "] is new2");
    } else {
      if (t == "object") {
        if (item) {
          if (_.isUndefined(item.v9b0d121fa92036f8189d310be9b247c7) || item.v9b0d121fa92036f8189d310be9b247c7) {
            if (item.v8c75c1cb072261a8f9b97a37ccbab2e1) {
              return this.v74f3a4c015bf97525102869eb53d22fb(item, this.state.__v62d7fadd6fbdd37c20f318a8570aa401[item.v8c75c1cb072261a8f9b97a37ccbab2e1]);
            } else {
              if (_.isDate(item)) {
                /** @type {boolean} */
                match = item.getTime() == obj[i].getTime();
                if (!match) {
                  this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, item);
                  this.html.vc2b55451d6b5a973b456d3ad090abf8d(obj.v8c75c1cb072261a8f9b97a37ccbab2e1 + "[" + i + "] changed");
                }
                return;
              }
              return this.v74f3a4c015bf97525102869eb53d22fb(item, obj[i]);
            }
          } else {
            /** @type {string} */
            feature = "here";
            return;
          }
        }
      } else {
        if (obj[i] != item) {
          this.vd1066594a3444cc93b264d3bc1e4fd80(obj.v8c75c1cb072261a8f9b97a37ccbab2e1, i, item);
          this.html.vc2b55451d6b5a973b456d3ad090abf8d(obj.v8c75c1cb072261a8f9b97a37ccbab2e1 + "[" + i + "] changed");
        }
      }
    }
  }, this);
}, frmExamineState.prototype.vd1066594a3444cc93b264d3bc1e4fd80 = function(key, a, obj) {
  U.startsWith(a, "__");
  var observable = _.forIn(obj, function(_a, event, eventsDict) {
    if (_a && _a.v8c75c1cb072261a8f9b97a37ccbab2e1) {
      /** @type {string} */
      eventsDict[event] = "&&" + _a.v8c75c1cb072261a8f9b97a37ccbab2e1;
    }
  });
  if (!this.diff[key]) {
    this.diff[key] = {};
  }
  this.diff[key][a] = observable;
}, frmExamineState.prototype.vf19bd3eacc0481299a312abacb422081 = function(that, error) {
  console.log("delete: " + error);
  var historical_metrics = that;
  var widgets = error.split("^^");
  var collector = widgets.pop();
  historical_metrics = that.__v62d7fadd6fbdd37c20f318a8570aa401[widgets[0]];
  if (!historical_metrics) {
    console.log("Could not find object with _oid: " + widgets[0] + " in order to delete key: " + collector);
    return;
  }
  delete historical_metrics[collector];
}, frmExamineState.prototype.ve89e3bfd0c94a0d9efcf409a2c8a92f2 = function(object$jscomp$0) {
  var objectClone$jscomp$0 = {};
  if (object$jscomp$0 && object$jscomp$0.constructor) {
    var constructorName$jscomp$0 = vcb778ce41130b213653506a1f586b179.prototype.v260584eab714d17b01edab1c43001dc1(object$jscomp$0);
    /** @type {*} */
    objectClone$jscomp$0 = eval("new " + constructorName$jscomp$0 + "()");
    var keysToDelete$jscomp$0 = _.difference(_.keys(objectClone$jscomp$0), _.keys(object$jscomp$0));
    _.each(keysToDelete$jscomp$0, function(property) {
      delete objectClone$jscomp$0[property];
    }, this);
  }
  if (object$jscomp$0 && object$jscomp$0.v8c75c1cb072261a8f9b97a37ccbab2e1) {
    if (!this.state.__v62d7fadd6fbdd37c20f318a8570aa401[object$jscomp$0.v8c75c1cb072261a8f9b97a37ccbab2e1]) {
      /** @type {*} */
      this.v036a0f4633e0f52796421e3749fea315[object$jscomp$0.v8c75c1cb072261a8f9b97a37ccbab2e1] = objectClone$jscomp$0;
    }
    delete this.vfee498726be7ecb679589a48d930a03f[object$jscomp$0.v8c75c1cb072261a8f9b97a37ccbab2e1];
  }
  _.forIn(object$jscomp$0, function(node, property, canCreateDiscussions) {
    if (objectClone$jscomp$0[property] = node, node && node.v8c75c1cb072261a8f9b97a37ccbab2e1 && (objectClone$jscomp$0[property] = "&&" + node.v8c75c1cb072261a8f9b97a37ccbab2e1, this.state.__v62d7fadd6fbdd37c20f318a8570aa401[node.v8c75c1cb072261a8f9b97a37ccbab2e1])) {
      delete this.vfee498726be7ecb679589a48d930a03f[node.v8c75c1cb072261a8f9b97a37ccbab2e1];
      return;
    }
    if (typeof node == "object") {
      if (node && node.v8c75c1cb072261a8f9b97a37ccbab2e1 && this.v036a0f4633e0f52796421e3749fea315[node.v8c75c1cb072261a8f9b97a37ccbab2e1]) {
        return;
      }
      this.ve89e3bfd0c94a0d9efcf409a2c8a92f2(node);
    }
  }, this);
}, frmExamineState.prototype.v0dbfeb875b14c11a418a9022a7d3cae3 = function(branch, name, prefixAgnostic) {
  _.forIn(this.diff, function(rewriteConfig, c) {
    _.forIn(rewriteConfig, function(App, a) {
      branch.__v62d7fadd6fbdd37c20f318a8570aa401[c][a] = App;
    });
  });
}, frmExamineState.prototype.vbd79c01b36e6ea7bc3a1986e63fe66ce = function(obj, args) {
  /** @type {boolean} */
  obj.__v7a3ea4927aec0a70b3c6ddced189c08d = true;
  _.forIn(obj, function(val, jobName, opts) {
    if (_.isString(val) && val.substring(0, 2) == "&&") {
      /** @type {number} */
      var i = parseInt(val.substring(2));
      opts[jobName] = args[i];
    }
    if (typeof val == "object" && val && !val.__v7a3ea4927aec0a70b3c6ddced189c08d && (_.isUndefined(val.__v5447cf524cb2e46161ba832c31d071fd) || val.__v5447cf524cb2e46161ba832c31d071fd)) {
      this.vbd79c01b36e6ea7bc3a1986e63fe66ce(val, args);
    }
  }, this);
}, frmExamineState.prototype.v98aad1596d71b36c159d4aadd0983b5f = function(data) {
  delete data.__v7a3ea4927aec0a70b3c6ddced189c08d;
  if (_.isUndefined(data.v9b0d121fa92036f8189d310be9b247c7) || data.v9b0d121fa92036f8189d310be9b247c7) {
    _.forIn(data, function(data, canCreateDiscussions, isSlidingUp) {
      if (data && data.__v7a3ea4927aec0a70b3c6ddced189c08d) {
        /** @type {string} */
        var t = typeof data;
        if (t == "object") {
          this.v98aad1596d71b36c159d4aadd0983b5f(data);
        }
      }
    }, this);
  }
}, frmExamineState.prototype.vb8ceead3733ca8a536b9cc08484d4bb9 = function(item) {
  item.__v62d7fadd6fbdd37c20f318a8570aa401 = {};
  this.vd5149433b4a97f9aca17a2406f4ff763(item, "", item);
  this.v98aad1596d71b36c159d4aadd0983b5f(item);
}, frmExamineState.prototype.vd5149433b4a97f9aca17a2406f4ff763 = function(b, dst, a) {
  if (!_.isDate(b)) {
    if (b.v8c75c1cb072261a8f9b97a37ccbab2e1) {
      /** @type {number} */
      a.__v7b394eaaef40e0f23ed5cfa27a84e162 = Math.max(a.__v7b394eaaef40e0f23ed5cfa27a84e162, b.v8c75c1cb072261a8f9b97a37ccbab2e1 + 1);
    } else {
      /** @type {number} */
      b.v8c75c1cb072261a8f9b97a37ccbab2e1 = a.__v7b394eaaef40e0f23ed5cfa27a84e162++;
    }
    /** @type {string} */
    a.__v62d7fadd6fbdd37c20f318a8570aa401[b.v8c75c1cb072261a8f9b97a37ccbab2e1] = b;
    /** @type {string} */
    a.__v59f440fbb38d47551f8e11c604d98fcb[b.v8c75c1cb072261a8f9b97a37ccbab2e1] = dst;
  }
  /** @type {boolean} */
  b.__v7a3ea4927aec0a70b3c6ddced189c08d = true;
  if (_.isUndefined(b.v9b0d121fa92036f8189d310be9b247c7) || b.v9b0d121fa92036f8189d310be9b247c7) {
    _.forIn(b, function(e, OldString, canCreateDiscussions) {
      if (OldString.substring(0, 2) == "__") {
        return;
      }
      if (e && !e.__v7a3ea4927aec0a70b3c6ddced189c08d) {
        /** @type {string} */
        var t = typeof e;
        if (t == "object") {
          this.vd5149433b4a97f9aca17a2406f4ff763(e, b.v8c75c1cb072261a8f9b97a37ccbab2e1 + "^^" + OldString, a);
        }
      }
    }, this);
  }
}, frmExamineState.prototype.v9d98dfc75141f0888f8f658d2be9c659 = function() {
  this.close();
  if (this.v389ef5507550fcd5ede0e822e4ca2b76) {
    this.v389ef5507550fcd5ede0e822e4ca2b76({
      vb6050b7f11623a051333e19572049a70 : Alert.OK
    });
  }
}, frmRunTo.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmRunTo.prototype.constructor = frmRunTo, frmRunTo.prototype.v25858949839469d7389869d7422938d5 = function() {
  var now = this;
  v13260862a5e36823cb5546b59af48c71.instance.v36c4192050cb2f5f8163dc557303ee61();
  var d = v13260862a5e36823cb5546b59af48c71.instance.state.now;
  var dTempDate1 = v13260862a5e36823cb5546b59af48c71.instance.state.vb3670ede943a585f59501c027b504015;
  var dTempDate2 = d.addDays(1);
  if (v13260862a5e36823cb5546b59af48c71.instance.state.settings.RunToOffsetIntoDayInMinutes != undefined) {
    var e = d.getHours() * 60 + d.getMinutes();
    if (e < v13260862a5e36823cb5546b59af48c71.instance.state.settings.RunToOffsetIntoDayInMinutes) {
      dTempDate2 = d;
    }
  }
  if (!(dTempDate1 < KMDate.v14cbf0b8c1f93e62dd191db1badd576b)) {
    dTempDate1 = dTempDate2;
  }
  this.v35bff1ac08d7592b4173acf8eec5b533.datepicker({
    minDate : new Date(dTempDate2.getFullYear(), dTempDate2.getMonth(), dTempDate2.getDate(), 0, 0, 0, 0),
    changeYear : v13260862a5e36823cb5546b59af48c71.instance.state.settings.RunToChangeYearEnabled,
    defaultDate : new Date(dTempDate1.getFullYear(), dTempDate1.getMonth(), dTempDate1.getDate(), 0, 0, 0, 0),
    onSelect : function() {
      now.vf30089b18c1b7048f35641db9cb458ca();
    }
  });
}, frmRunTo.prototype.vf30089b18c1b7048f35641db9cb458ca = function() {
  var target = new KMDate(this.v35bff1ac08d7592b4173acf8eec5b533.datepicker("getDate"));
  if (target) {
    if (v13260862a5e36823cb5546b59af48c71.instance.state.settings.RunToOffsetIntoDayInMinutes != undefined) {
      target = target.addMinutes(v13260862a5e36823cb5546b59af48c71.instance.state.settings.RunToOffsetIntoDayInMinutes);
    }
    v13260862a5e36823cb5546b59af48c71.instance.state.vb3670ede943a585f59501c027b504015 = target;
    v13260862a5e36823cb5546b59af48c71.instance.startTime();
  } else {
    v13260862a5e36823cb5546b59af48c71.instance.state.vb3670ede943a585f59501c027b504015 = KMDate.v14cbf0b8c1f93e62dd191db1badd576b;
    v13260862a5e36823cb5546b59af48c71.instance.v36c4192050cb2f5f8163dc557303ee61();
  }
  this.close();
}, frmRunTo.prototype.v32eafc28c92bd05fea8990b0498ddb80 = function() {
  v13260862a5e36823cb5546b59af48c71.instance.v98970b71ddad9094c8401e0604af056a();
  v13260862a5e36823cb5546b59af48c71.instance.v36c4192050cb2f5f8163dc557303ee61();
  this.close();
}, frmScoreboard.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmScoreboard.prototype.constructor = frmScoreboard, frmScoreboard.prototype.init = function() {
}, frmScoreboard.prototype.v25858949839469d7389869d7422938d5 = function() {
  var a = this;
  this.v5c91a499de831d68eeabd0ecf2eb67dd.text(this.vdd606d68383b61c1b6dc0a362c37f39e);
  this.v3c1ac4a1cd6d2967715ae2c500a2e1a8.click(function(b) {
    /** @type {number} */
    a.mode = 0;
    a.update();
  });
  this.v821ff6e1116294a84c6694914765e7c9.click(function(b) {
    /** @type {number} */
    a.mode = 1;
    a.update();
  });
  this.v3c1ac4a1cd6d2967715ae2c500a2e1a8.bootstrap_button("toggle");
  this.v3c1ac4a1cd6d2967715ae2c500a2e1a8.focus();
  this.update();
  A.v87b8393064cbfa8977b32cec36a69d86().ved3fea8761b9737532a8785f9afb4fa2(this.v819850ec8ffecac67030711398ce6ab3);
}, frmScoreboard.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v2ab8dbcf97e88592a0784f7bdbfaaa2e(this.v819850ec8ffecac67030711398ce6ab3);
}, frmScoreboard.prototype.update = function() {
  this.va069244375d7dd97998ebd5e93bf146c.height(this.selector.height() - (this.v4856c718c5107fa4f5e2d5f86a466dc2.height() + this.v5c91a499de831d68eeabd0ecf2eb67dd.height()));
  /** @type {null} */
  var labelChildNodes = null;
  /** @type {!Array} */
  var options = [];
  if (A.vfe1c4eaec8ec40f848f9772196c532d3() && (labelChildNodes = A.vfe1c4eaec8ec40f848f9772196c532d3().veb9fe1ccaf09f6da48d4f05d82c7e87d, labelChildNodes)) {
    /** @type {number} */
    var z = 0;
    for (; z < labelChildNodes.length; ++z) {
      var self = labelChildNodes[z];
      if (this.mode == 0) {
        /** @type {number} */
        var pri_sum = 0;
        if (self.d) {
          /** @type {number} */
          var i = 0;
          for (; i < self.d.v13d5e688c098cad8c5b534d445e1151f.length; ++i) {
            var item = self.d.v13d5e688c098cad8c5b534d445e1151f[i];
            pri_sum = pri_sum + item.v71485676f5024ada0c050283b0866d99;
          }
        }
        options.push({
          name : self.pn,
          active : self.active,
          v94636109d89305a57f5974ac92748382 : pri_sum
        });
      } else {
        if (this.mode == 1 && self.d) {
          /** @type {number} */
          i = 0;
          for (; i < self.d.v13d5e688c098cad8c5b534d445e1151f.length; ++i) {
            item = self.d.v13d5e688c098cad8c5b534d445e1151f[i];
            options.push({
              name : item.name,
              active : self.active,
              v94636109d89305a57f5974ac92748382 : item.v71485676f5024ada0c050283b0866d99
            });
          }
        }
      }
    }
  }
  this.plot(options);
}, frmScoreboard.prototype.plot = function(f) {
  var options = {
    xaxis : {
      tickFormatter : function(value, axis) {
        return U.v0ea35f447d08124fa72648dd7f4ff64c(U.round(value / 1e3, 2)) + "k";
      },
      max : 0,
      color : "#FFFFFF",
      font : {
        size : 14,
        lineHeight : 13,
        family : "Arial,sans-serif",
        color : "#444444"
      }
    },
    yaxis : {
      ticks : [],
      axisLabelUseCanvas : true,
      max : f.length,
      font : {
        size : 14,
        lineHeight : 13,
        family : "Arial,sans-serif",
        color : "#444444"
      }
    }
  };
  options.yaxis.max = f.length;
  /** @type {!Array} */
  var data = [];
  /** @type {number} */
  var left = 0;
  /** @type {number} */
  var max = 0;
  /** @type {number} */
  var i = 0;
  for (; i < f.length; i++) {
    var p2 = f[i];
    options.yaxis.ticks.push([i, p2.name]);
    var border;
    if (p2.active) {
      /** @type {({colors: !Array})} */
      border = p2.v94636109d89305a57f5974ac92748382 <= 0 ? {
        colors : ["#CC0000", "#990000"]
      } : {
        colors : ["#0080CC", "#005299"]
      };
    } else {
      border = {
        colors : ["#E0E0E0", "#CCCCCC"]
      };
    }
    data.push({
      data : [[p2.v94636109d89305a57f5974ac92748382, i]],
      bars : {
        show : true,
        horizontal : true,
        align : "center",
        barWidth : .5,
        fill : true,
        lineWidth : 0,
        fillColor : border
      }
    });
    /** @type {number} */
    left = Math.min(left, p2.v94636109d89305a57f5974ac92748382);
    /** @type {number} */
    max = Math.max(max, p2.v94636109d89305a57f5974ac92748382);
    /** @type {number} */
    options.xaxis.min = Math.min(left, Math.max(0, max));
    /** @type {number} */
    options.xaxis.max = Math.max(max, Math.max(left, 5e3));
  }
  $.plot(this.va069244375d7dd97998ebd5e93bf146c, data, options);
}, frmScoreboard.prototype.v8cd79226d01ede570a67dbb0a7ead011 = function() {
  this.update();
}, frmPlayerList.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmPlayerList.prototype.constructor = frmPlayerList, frmPlayerList.prototype.init = function() {
}, frmPlayerList.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.update();
  A.v87b8393064cbfa8977b32cec36a69d86().ved3fea8761b9737532a8785f9afb4fa2(this.v819850ec8ffecac67030711398ce6ab3);
}, frmPlayerList.prototype.v3cdd2764278c7355968cfdb06ee41b26 = function(props, map) {
  /** @type {string} */
  var color = props.active ? "#000" : "#ccc";
  var b = $("<div style='display: inline-block; margin-right: 15px;'>");
  if (map.icon) {
    var mascotImage = $("<img style='display: block; margin: auto;'>");
    mascotImage.attr("src", A.v87b8393064cbfa8977b32cec36a69d86().imageAtlas.vbf8e2df2ca388d714195e268a3817f20(props.active ? map.icon : map.v1eef6ccf3979fa4d948a9eedee870b86, 0, 0));
    mascotImage.appendTo(b);
  }
  var c = $("<h4>");
  c.css("color", color);
  c.text(map.name);
  c.appendTo(b);
  var d = $("<p>");
  d.css("color", color);
  /** @type {string} */
  var result = "";
  /** @type {string} */
  result = result + U.vc0e6c88f8413e92781b652ae2786391a("<b>Player:</b> {0}<br>", [props.pn]);
  if (map.type) {
    /** @type {string} */
    result = result + U.vc0e6c88f8413e92781b652ae2786391a("<b>Type:</b> {0}<br>", [map.type]);
  }
  d.html(result);
  d.appendTo(b);
  b.appendTo(this.vb4314863627c9934d5c66ddcec703073);
}, frmPlayerList.prototype.update = function() {
  var $jsilxna = this;
  /** @type {null} */
  var dataIn = null;
  if (this.vb4314863627c9934d5c66ddcec703073.empty(), A.vfe1c4eaec8ec40f848f9772196c532d3() && (dataIn = A.vfe1c4eaec8ec40f848f9772196c532d3().veb9fe1ccaf09f6da48d4f05d82c7e87d, dataIn)) {
    /** @type {number} */
    var i = 0;
    for (; i < dataIn.length; ++i) {
      var b = dataIn[i];
      if (b.d) {
        /** @type {number} */
        var i = 0;
        for (; i < b.d.v13d5e688c098cad8c5b534d445e1151f.length; ++i) {
          var key = b.d.v13d5e688c098cad8c5b534d445e1151f[i];
          $jsilxna.v3cdd2764278c7355968cfdb06ee41b26(b, key);
        }
      }
    }
  }
}, frmPlayerList.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v2ab8dbcf97e88592a0784f7bdbfaaa2e(this.v819850ec8ffecac67030711398ce6ab3);
}, frmSettings.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmSettings.prototype.constructor = frmSettings, frmSettings.prototype.v25858949839469d7389869d7422938d5 = function() {
  var flyingAnimals = this;
  _.forEach(_.sortBy(_.keys(this.settings)), _.bind(function(i) {
    if (this.settings.hasOwnProperty(i)) {
      var value = flyingAnimals.settings[i];
      /** @type {string} */
      var type = typeof value;
      this.v816eca051cdc5ec7d1981b280cc323e2(i, value, type);
    }
  }, this));
}, frmSettings.prototype.v816eca051cdc5ec7d1981b280cc323e2 = function(name, value, type) {
  var self = this;
  var f = $("<tr>");
  var g = $("<td>");
  g.text(name);
  g.appendTo(f);
  var c = $("<td>");
  if (type == "object") {
    if (value instanceof KMDate) {
      var elem = $("<input type='text'>");
      elem.datepicker({
        onClose : function(dateText) {
          self.settings[name] = new KMDate(new Date(dateText));
        }
      });
      elem.datepicker("setDate", value.vd7cff435a25d73aafbe29eebf58192e2());
      elem.appendTo(c);
    }
  } else {
    if (type == "boolean") {
      elem = $("<input type='checkbox'>");
      if (value) {
        elem.attr("checked", "checked");
      }
      elem.click(function() {
        self.settings[name] = elem.is(":checked");
      });
      elem.appendTo(c);
    } else {
      elem = $("<input type='text'>");
      elem.val(value.toString());
      elem.change(function() {
        self.settings[name] = elem.val();
      });
      elem.appendTo(c);
    }
  }
  c.appendTo(f);
  f.appendTo(self.v0b48464bb1ac859e9bf119b987295287);
}, frmSettings.prototype.v312ac78e29ad3559240b1ecba05160be = function() {
  this.close();
  if (this.v389ef5507550fcd5ede0e822e4ca2b76) {
    this.v389ef5507550fcd5ede0e822e4ca2b76({
      vb6050b7f11623a051333e19572049a70 : Alert.OK
    }, this.settings);
  }
}, frmSettings.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
  if (this.v389ef5507550fcd5ede0e822e4ca2b76) {
    this.v389ef5507550fcd5ede0e822e4ca2b76({
      vb6050b7f11623a051333e19572049a70 : Alert.OK
    }, this.settings);
  }
}, frmLicenseInfo.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmLicenseInfo.prototype.constructor = frmLicenseInfo, frmLicenseInfo.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.vef8acfd8c83ef9a7155c9978f80d0a57.text(A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("licensedToSchool", false));
  this.v7d71b06b4c9069505630e3c2d9665258.click(_.bind(function() {
    if (!this.expanded) {
      /** @type {boolean} */
      this.expanded = true;
      this.vdfcd85a057b0bc12ef1d7dc688496050.slideDown();
      this.vbc211b93d96c7b5d31d7578e5c31312e.click(_.bind(function() {
        var extraFieldsDescription = this.vdb23e0968d03d4ad8beeab411e206a7d.val();
        if (A.v87b8393064cbfa8977b32cec36a69d86().serverURL) {
          A.v87b8393064cbfa8977b32cec36a69d86().v8ce6d48d3215116f1ffc78e757ba4ef1(extraFieldsDescription);
        }
        this.close();
        Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Thank you - your report has been sent."));
      }, this));
    }
  }, this));
}, frmLicenseInfo.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmTestSolution.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmTestSolution.prototype.constructor = frmTestSolution, frmTestSolution.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.ve0cc9e9be43b05ad3a9e3891519f2f33.html(this.va96f862b2e02794716de63e5b007ae28);
  this.v2277257e6147ea39d826793f979a1755("Started at: " + (new Date).toTimeString());
}, frmTestSolution.prototype.v2277257e6147ea39d826793f979a1755 = function(a) {
  this.results.append("<tr><td>" + A.vfe1c4eaec8ec40f848f9772196c532d3().now.format("M/d/yyyy hh:mm tt") + "</td><td>" + a + "</td></tr>");
}, City.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), City.v4f9631522dd19702292e41f3ce23c56c = 8, City.v64ef601857379d429114bd7619f88d25 = 3, City.vaa5069efaa246dd3658302529a1a5b1d = 3, City.v3331768b8784de94b8be6195db8aeb7d = 28.83, City.vd39ce9e6bdde853d848322f2782e4be6 = 24.6, City.v3c84bd376fc4d4288af347a33b07bed1 = [], City.v443299cf4a9fafafc9fa6571fac5228c = 45.42, City.v8e85a7086c2cb0ceabfffcc55a246a9a = 23, City.v1e862f93b2a7f041fcb97375c8c7e69a = 49, City.vf6f22933c29c631b7baf8e13ebadfccb =
new Point(342, 69), City.prototype.vfe86374f24d481678b492aa3ebfb920d = function() {
  /** @type {!Array} */
  this.v727174f11b72c46c5058bd7507361cc3 = [];
  /** @type {number} */
  var s = 0;
  for (; s < City.v64ef601857379d429114bd7619f88d25; s++) {
    this.v727174f11b72c46c5058bd7507361cc3.vc2b55451d6b5a973b456d3ad090abf8d(new Array(City.v4f9631522dd19702292e41f3ce23c56c));
  }
  /** @type {number} */
  var a = 0;
  for (; a < City.v4f9631522dd19702292e41f3ce23c56c; a++) {
    /** @type {number} */
    var b = 0;
    for (; b < City.v64ef601857379d429114bd7619f88d25; b++) {
      var p = new vc00a41ed71a34f15e6508cde0998e763;
      p.init(this, b, a);
      this.v727174f11b72c46c5058bd7507361cc3[b][a] = p;
    }
  }
}, City.prototype.v9d022760df6993ba095f730bb501eda0 = function(a, b) {
  return this.v727174f11b72c46c5058bd7507361cc3[a][b];
}, City.prototype.v574e65c426ebf81dd8ffc4d9dd7167ef = function(a, b, c) {
  return this.v9d022760df6993ba095f730bb501eda0(a, b).v574e65c426ebf81dd8ffc4d9dd7167ef(c);
}, City.prototype.v17375574bbfb9faabcb31b14b68745a3 = function(a, f, m, t) {
  this.v9d022760df6993ba095f730bb501eda0(a, f).v17375574bbfb9faabcb31b14b68745a3(m, t);
}, City.prototype.v620a8a217f581ffb6e04961d6df9f591 = function() {
  /** @type {!Array} */
  var c = [];
  /** @type {number} */
  var valueProgess = 0;
  for (; valueProgess < City.v64ef601857379d429114bd7619f88d25; valueProgess++) {
    /** @type {number} */
    var QueryLanguageComponent = 0;
    for (; QueryLanguageComponent < City.v4f9631522dd19702292e41f3ce23c56c; QueryLanguageComponent++) {
      c.vfa21e3bf8ea9d4320d8597afc1052baf(this.v9d022760df6993ba095f730bb501eda0(valueProgess, QueryLanguageComponent).v620a8a217f581ffb6e04961d6df9f591());
    }
  }
  return c;
}, City.v4668dbdefad164b9c5a046f99f4cb58a = function(editWindow) {
  var width = editWindow.x;
  var x = editWindow.y;
  /** @type {number} */
  var p3x2 = (2 * x - width - 2 * vf6f22933c29c631b7baf8e13ebadfccb.y + vf6f22933c29c631b7baf8e13ebadfccb.x) / (2 * v1e862f93b2a7f041fcb97375c8c7e69a);
  /** @type {number} */
  var cornerOffset = (2 * x + width - vf6f22933c29c631b7baf8e13ebadfccb.x - 2 * vf6f22933c29c631b7baf8e13ebadfccb.y) / (2 * v443299cf4a9fafafc9fa6571fac5228c);
  return new Point(p3x2, cornerOffset);
}, City.prototype.veb0ebf9a09a8ca429c96346438be2241 = function() {
  /** @type {number} */
  var valueProgess = 0;
  for (; valueProgess < City.v64ef601857379d429114bd7619f88d25; valueProgess++) {
    /** @type {number} */
    var QueryLanguageComponent = 0;
    for (; QueryLanguageComponent < City.v4f9631522dd19702292e41f3ce23c56c; QueryLanguageComponent++) {
      /** @type {number} */
      var currentChr = 0;
      for (; currentChr < City.vaa5069efaa246dd3658302529a1a5b1d; currentChr++) {
        if (this.v574e65c426ebf81dd8ffc4d9dd7167ef(valueProgess, QueryLanguageComponent, currentChr) == null) {
          return false;
        }
      }
    }
  }
  return true;
}, City.prototype.v39e15246ec129b1be63c7c77dae2f7b7 = function(i, v) {
  if (v == undefined) {
    v = v13260862a5e36823cb5546b59af48c71.instance.state.random;
  }
  /** @type {!Array} */
  var row = [];
  /** @type {number} */
  var val = 0;
  for (; val < City.v64ef601857379d429114bd7619f88d25; val++) {
    /** @type {number} */
    var change = 0;
    for (; change < City.v4f9631522dd19702292e41f3ce23c56c; change++) {
      /** @type {number} */
      var type = 0;
      for (; type < City.vaa5069efaa246dd3658302529a1a5b1d; type++) {
        if (this.v574e65c426ebf81dd8ffc4d9dd7167ef(val, change, type) != null && this.v574e65c426ebf81dd8ffc4d9dd7167ef(val, change, type) != "TAKEN" && this.v574e65c426ebf81dd8ffc4d9dd7167ef(val, change, type).v49c9fa931644375b3c2fa70882fee2ce.index == i) {
          row.vc2b55451d6b5a973b456d3ad090abf8d(this.v574e65c426ebf81dd8ffc4d9dd7167ef(val, change, type));
        }
      }
    }
  }
  /** @type {number} */
  var x = row.length;
  return x == 0 ? null : row[v.next(x)];
}, City.prototype.v854dcadf50a92e2bd4a8ed07781ee65e = function(i) {
  /** @type {!Array} */
  var other_list = [];
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < this.v727174f11b72c46c5058bd7507361cc3.length; ++layer_i) {
    var layer = this.v727174f11b72c46c5058bd7507361cc3[layer_i];
    /** @type {number} */
    var i = 0;
    for (; i < layer.length; ++i) {
      var ll = layer[i];
      /** @type {number} */
      var last = 0;
      for (; last < City.vaa5069efaa246dd3658302529a1a5b1d; last++) {
        if (ll.v574e65c426ebf81dd8ffc4d9dd7167ef(last) != null) {
          var d = ll.v574e65c426ebf81dd8ffc4d9dd7167ef(last);
          if (_.isNumber(i)) {
            if (!d.v49c9fa931644375b3c2fa70882fee2ce) {
              continue;
            }
            if (d.v49c9fa931644375b3c2fa70882fee2ce.index != i) {
              continue;
            }
          }
          other_list.vc2b55451d6b5a973b456d3ad090abf8d(d);
        }
      }
    }
  }
  return other_list;
}, City.prototype.vd949cac68a64e80395a7b07954cab626 = function(type, acc, chunk, loaded) {
  /** @type {!Array} */
  var block = [];
  /** @type {number} */
  var Mocker = 0;
  /** @type {number} */
  var cur = 0;
  /** @type {number} */
  var appendText = 0;
  /** @type {number} */
  var resetX = 0;
  do {
    if (type + Mocker < City.v64ef601857379d429114bd7619f88d25 && acc + cur < City.v4f9631522dd19702292e41f3ce23c56c && this.v727174f11b72c46c5058bd7507361cc3[type + Mocker][acc + cur].v4aa7c5b8f276e187bc7608435f56bc84[chunk + appendText] == null) {
      block.vc2b55451d6b5a973b456d3ad090abf8d({
        block : this.v727174f11b72c46c5058bd7507361cc3[type + Mocker][acc + cur],
        v9b4e83515cd2c862aa3de485e2207966 : chunk + appendText
      });
    }
    resetX++;
    appendText++;
    if (chunk + appendText == City.vaa5069efaa246dd3658302529a1a5b1d || resetX == loaded.vd85b605c0636b6d406986ecc10320485.x) {
      /** @type {number} */
      appendText = 0;
      Mocker++;
      if (resetX == loaded.vd85b605c0636b6d406986ecc10320485.x) {
        /** @type {number} */
        Mocker = 0;
        cur++;
        /** @type {number} */
        resetX = 0;
      }
    }
  } while (cur < loaded.vd85b605c0636b6d406986ecc10320485.y);
  return block;
}, City.prototype.v4dfcc6c8dc91c140e8053df8d4dbf574 = function(result) {
  var b = this.v727174f11b72c46c5058bd7507361cc3[result.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f][result.v4fb1e56fa30edc677394334a421f38c5].v4aa7c5b8f276e187bc7608435f56bc84[result.v28ce758f394d88d264bf476143d16523];
  return b == null ? 0 : b.vd268085fd615bf322569c3abd211928f();
}, City.transform = function(n, i, c) {
  /** @type {number} */
  var w = n * City.v1e862f93b2a7f041fcb97375c8c7e69a;
  /** @type {number} */
  w = w + c * City.v8e85a7086c2cb0ceabfffcc55a246a9a;
  /** @type {number} */
  var x = i * City.v443299cf4a9fafafc9fa6571fac5228c;
  return new Point(City.vf6f22933c29c631b7baf8e13ebadfccb.x - w + x, City.vf6f22933c29c631b7baf8e13ebadfccb.y + w / 2 + x / 2);
}, City.prototype.vb912ab65bc2d726bbb69ab3485173274 = function(options, f) {
  if (!options) {
    options = A.vfe1c4eaec8ec40f848f9772196c532d3().random;
  }
  var tf = U.pick(f, options);
  /** @type {!Array} */
  var b = [];
  /** @type {number} */
  var g = 0;
  if (options.next(4) == 0) {
    do {
      /** @type {number} */
      var py = tf.y + options.next(7) + options.next(7) + options.next(7) - 9;
    } while ((py < 1 || py >= City.v4f9631522dd19702292e41f3ce23c56c) && g++ < 100);
    /** @type {!Array} */
    b = [new Point(0, py + 0), new Point(City.v64ef601857379d429114bd7619f88d25 - 1.3, py + 0)];
  } else {
    do {
      /** @type {number} */
      var value = tf.x + options.next(3) + options.next(5) + options.next(5) - 5;
    } while ((value < 1 || value > City.v64ef601857379d429114bd7619f88d25) && g++ < 100);
    /** @type {!Array} */
    b = [new Point(value - .48, 0), new Point(value - .48, City.v4f9631522dd19702292e41f3ce23c56c - .9)];
  }
  if (options.next(2) == 0) {
    b.reverse();
  }
  /** @type {number} */
  var i = 0;
  for (; i < 2; i++) {
    b[i] = City.transform(b[i].x, b[i].y, 0);
  }
  return b;
}, City.prototype.v3debb023e8ebbc27dd85a4b089e932ad = function(cN) {
  /** @type {number} */
  var c = 0;
  for (; c < cN; c++) {
    var b = new va523e7ef1a952b307bde51fffa209207;
    b.init(c);
    A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(b, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    this.v2db6af2b1f5a8cf42fd2e4f228202240.vc2b55451d6b5a973b456d3ad090abf8d(b);
  }
}, City.prototype.v095ab0f727e22c7cfbf76fb95308cf5e = function(a, b) {
  var sort = City.transform(a.v88673f3a94c8c528027180ca500b6677(), a.vc7ba4f1f8b072680b2f0c0e1b2565338(), a.v04c927fcd02402470c9d009cce4f0181());
  var sortAscending = City.transform(b.v88673f3a94c8c528027180ca500b6677(), b.vc7ba4f1f8b072680b2f0c0e1b2565338(), b.v04c927fcd02402470c9d009cce4f0181());
  var sortFields = U.vc1f415498343451365676d8a0e41ec71(sort, sortAscending);
  return sortFields;
}, v613d4f2132e130828cd3ce4bc8d385ba.prototype = Object.create(View.prototype), v613d4f2132e130828cd3ce4bc8d385ba.prototype.constructor = v613d4f2132e130828cd3ce4bc8d385ba, v613d4f2132e130828cd3ce4bc8d385ba.prototype.va2d78265764a9d326f92455033ffb2a5 = function() {
  var a = View.prototype.va2d78265764a9d326f92455033ffb2a5.call(this);
  /** @type {number} */
  var ct = 0;
  for (; ct < City.v64ef601857379d429114bd7619f88d25; ct++) {
    /** @type {number} */
    var yy2 = 0;
    for (; yy2 < City.v4f9631522dd19702292e41f3ce23c56c; yy2++) {
      if (yy2 % 2 == 0) {
        var def = U.v7a7321817e214ef0146ed1ce6559a705(City.transform(ct + .5, yy2 - 1, 0));
        a.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(def, "cityTile"));
      }
    }
  }
  var d = A.vfe1c4eaec8ec40f848f9772196c532d3();
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < d.v3326a0bcf3291f84296c11210a8fe9c5.v2db6af2b1f5a8cf42fd2e4f228202240.length; layer_i++) {
    a.vc2b55451d6b5a973b456d3ad090abf8d(d.v3326a0bcf3291f84296c11210a8fe9c5.v2db6af2b1f5a8cf42fd2e4f228202240[layer_i].vc40d087825dbf82f2a30a6900e15634e());
  }
  return a.vfa21e3bf8ea9d4320d8597afc1052baf(d.v3326a0bcf3291f84296c11210a8fe9c5.v620a8a217f581ffb6e04961d6df9f591()), a;
}, v613d4f2132e130828cd3ce4bc8d385ba.prototype.v085744687b2ef8b1bd8b69dfcb337dac = function() {
  /** @type {number} */
  var a = 1;
  /** @type {number} */
  var b = 1;
  return City.v64ef601857379d429114bd7619f88d25 > 6 && (a = 1 + City.v64ef601857379d429114bd7619f88d25 * .15, b = 1 + City.v64ef601857379d429114bd7619f88d25 * .1), new Point(Math.floor(a * 800 * 1 / .68), Math.floor(b * 500 * 1 / .68));
}, v613d4f2132e130828cd3ce4bc8d385ba.prototype.v8cfa8d25be8930c55b988992372bdf4c = function(i, t, error, value) {
  if (value == undefined) {
    /** @type {boolean} */
    value = true;
  }
  var lastClick = U.v7a7321817e214ef0146ed1ce6559a705(City.transform(t.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f, t.v4fb1e56fa30edc677394334a421f38c5, t.v28ce758f394d88d264bf476143d16523));
  var y = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4dfcc6c8dc91c140e8053df8d4dbf574(t);
  var bigCirclePos = new Point(lastClick.x + 2, lastClick.y - y);
  var beforeAfterEvent = new v74d951e1ef91d0f189e177d58ae30d8e(bigCirclePos, i + (value ? "" : "-inactive"));
  var ctx = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(bigCirclePos.x, bigCirclePos.y - 24), null);
  return ctx.text = error, ctx.textAlign = "center", ctx.font = "8pt arial", ctx.fillStyle = value ? "#FFFFFF" : "#CCCCCC", beforeAfterEvent.vabde4a187e855cd6fb04c0f6619f306f.vc2b55451d6b5a973b456d3ad090abf8d(ctx), beforeAfterEvent;
}, va523e7ef1a952b307bde51fffa209207.prototype = Object.create(v16cee3ee62f4283e2aa83ff23503aa30.prototype), va523e7ef1a952b307bde51fffa209207.prototype.constructor = va523e7ef1a952b307bde51fffa209207, va523e7ef1a952b307bde51fffa209207.prototype.init = function(value) {
  this.v46d9c2aea57ee009b9ab339d4478978a(new Point(-100, -100));
  this.v811c386c5ab4299281dc3dbdb0885c93 = new v05d11f0f2e0c1a6f360c8611189e4901((value + 1) * 3689);
}, va523e7ef1a952b307bde51fffa209207.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  if (this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  }, !this.initialized || this.ve8242717100aa0bda70572e93fec612f()) {
    /** @type {boolean} */
    this.initialized = true;
    this.v359abcfffa6d67a9b9f67e93bef327c7(.1 + this.v811c386c5ab4299281dc3dbdb0885c93.va7f5b666e153a7fd316b95fa2a8560ac() * .1);
    var valueProgess = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.vb912ab65bc2d726bbb69ab3485173274(this.v811c386c5ab4299281dc3dbdb0885c93);
    this.v46d9c2aea57ee009b9ab339d4478978a(valueProgess[0]);
    this.vcecae7630817bbe4e45a64aabde08a54(valueProgess);
  }
  return false;
}, va523e7ef1a952b307bde51fffa209207.prototype.vc40d087825dbf82f2a30a6900e15634e = function() {
  /** @type {string} */
  var a = "NESW";
  return this.va359d4e8388ec27ff74fa1c2c7b7a983 * this.v47ab9094f7763ada19867ee0131af83f > 0 && (a = "NWSE"), new v74d951e1ef91d0f189e177d58ae30d8e(this.v5ade6f2f5a1f2d10c4bb670808c99f85(), "Car" + a);
}, v2293b4b55c00ff726961b8ed86d94131.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), v2293b4b55c00ff726961b8ed86d94131.prototype.init = function(b, a, v) {
  /** @type {!Object} */
  this.block = b;
  /** @type {number} */
  this.v28ce758f394d88d264bf476143d16523 = a;
  /** @type {number} */
  this.v49c9fa931644375b3c2fa70882fee2ce = v;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.v88673f3a94c8c528027180ca500b6677 = function() {
  return this.block.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.vc7ba4f1f8b072680b2f0c0e1b2565338 = function() {
  return this.block.v4fb1e56fa30edc677394334a421f38c5;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.v04c927fcd02402470c9d009cce4f0181 = function() {
  return this.v28ce758f394d88d264bf476143d16523;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.v56f2f4dba7c284802630f7f769caa58f = function() {
  return {
    v93cfbeb28fa5357a3e0c8d1b4fbbbe1f : this.block.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f,
    v4fb1e56fa30edc677394334a421f38c5 : this.block.v4fb1e56fa30edc677394334a421f38c5,
    v28ce758f394d88d264bf476143d16523 : this.v28ce758f394d88d264bf476143d16523
  };
}, v2293b4b55c00ff726961b8ed86d94131.prototype.v620a8a217f581ffb6e04961d6df9f591 = function() {
  /** @type {!Array} */
  var canvasLayersManager = [];
  var _defaults = U.v7a7321817e214ef0146ed1ce6559a705(City.transform(this.v88673f3a94c8c528027180ca500b6677(), this.vc7ba4f1f8b072680b2f0c0e1b2565338(), this.v28ce758f394d88d264bf476143d16523));
  var j = new v74d951e1ef91d0f189e177d58ae30d8e(_defaults, "BuildingSmall" + this.v49c9fa931644375b3c2fa70882fee2ce.index);
  return j.v1917f14965df083150b1374c9a97c9d7 = this, canvasLayersManager.vc2b55451d6b5a973b456d3ad090abf8d(j), canvasLayersManager;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.vc4720412261f742df19cb39ad63338a0 = function() {
  return this.v04c927fcd02402470c9d009cce4f0181() == 0 && this.v88673f3a94c8c528027180ca500b6677() != 0 ? this.v88673f3a94c8c528027180ca500b6677() - 1 : this.v04c927fcd02402470c9d009cce4f0181() == City.vaa5069efaa246dd3658302529a1a5b1d - 1 ? this.v88673f3a94c8c528027180ca500b6677() : -1;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.v2d39bc4e021dfd981b521070b65f5024 = function() {
  var a = U.vc0e6c88f8413e92781b652ae2786391a("Street {0}, Avenue {1},  Lot {2}", [this.vc7ba4f1f8b072680b2f0c0e1b2565338() + 1, this.v88673f3a94c8c528027180ca500b6677() + 1, this.v04c927fcd02402470c9d009cce4f0181() + 1]);
  return a;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.vd268085fd615bf322569c3abd211928f = function() {
  var c = A.v87b8393064cbfa8977b32cec36a69d86().imageAtlas.v8c9f88e1e8f08a495ed718e4eee92167(this.vc776811146b88f58262c38bf95653534(), 0, 0);
  /** @type {number} */
  var phi = c.height - 10;
  var selectedControlPoint = this.v49c9fa931644375b3c2fa70882fee2ce.vd85b605c0636b6d406986ecc10320485;
  return selectedControlPoint != undefined && (selectedControlPoint.x == 2 && selectedControlPoint.y == 1 && (phi = phi - 20), selectedControlPoint.x == 2 && selectedControlPoint.y == 2 && (phi = phi - 40)), phi;
}, v2293b4b55c00ff726961b8ed86d94131.prototype.vc776811146b88f58262c38bf95653534 = function() {
  return "building" + this.v49c9fa931644375b3c2fa70882fee2ce.index;
}, BuildingType.prototype = Object.create(Object.prototype), BuildingType.prototype.constructor = BuildingType, vc00a41ed71a34f15e6508cde0998e763.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), vc00a41ed71a34f15e6508cde0998e763.prototype.constructor = vc00a41ed71a34f15e6508cde0998e763, vc00a41ed71a34f15e6508cde0998e763.prototype.init = function(b, c, d) {
  /** @type {!Object} */
  this.v3326a0bcf3291f84296c11210a8fe9c5 = b;
  /** @type {number} */
  this.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f = c;
  /** @type {number} */
  this.v4fb1e56fa30edc677394334a421f38c5 = d;
  /** @type {!Array} */
  this.v4aa7c5b8f276e187bc7608435f56bc84 = [];
  /** @type {number} */
  var a = 0;
  for (; a < City.vaa5069efaa246dd3658302529a1a5b1d; a++) {
    this.v4aa7c5b8f276e187bc7608435f56bc84.vc2b55451d6b5a973b456d3ad090abf8d(null);
  }
}, vc00a41ed71a34f15e6508cde0998e763.prototype.v574e65c426ebf81dd8ffc4d9dd7167ef = function(a) {
  if (a >= City.vaa5069efaa246dd3658302529a1a5b1d) {
    throw new Error("lot index out of bounds");
  }
  return this.v4aa7c5b8f276e187bc7608435f56bc84[a];
}, vc00a41ed71a34f15e6508cde0998e763.prototype.v17375574bbfb9faabcb31b14b68745a3 = function(i, r) {
  if (i >= City.vaa5069efaa246dd3658302529a1a5b1d) {
    throw new Error("lot index out of bounds");
  }
  if (r) {
    r.block = this;
    /** @type {number} */
    r.v28ce758f394d88d264bf476143d16523 = i;
  }
  /** @type {!Object} */
  this.v4aa7c5b8f276e187bc7608435f56bc84[i] = r;
}, vc00a41ed71a34f15e6508cde0998e763.prototype.v620a8a217f581ffb6e04961d6df9f591 = function() {
  /** @type {!Array} */
  var b = [];
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < City.vaa5069efaa246dd3658302529a1a5b1d; indexLookupKey++) {
    if (this.v4aa7c5b8f276e187bc7608435f56bc84[indexLookupKey] != null && this.v4aa7c5b8f276e187bc7608435f56bc84[indexLookupKey] != "TAKEN") {
      b.vfa21e3bf8ea9d4320d8597afc1052baf(this.v4aa7c5b8f276e187bc7608435f56bc84[indexLookupKey].v620a8a217f581ffb6e04961d6df9f591());
    }
  }
  return b;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype = Object.create(Object.prototype), v3cc232995592894dd6b3cea55d7d7bdb.prototype.constructor = v3cc232995592894dd6b3cea55d7d7bdb, v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a = 0, v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620 = 1, v3cc232995592894dd6b3cea55d7d7bdb.v3da6faa67bfb1547709817d8ddaa9b98 = 2, v3cc232995592894dd6b3cea55d7d7bdb.vedf6d2b0c294afca439f45252040ce06 = 3, v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770 =
4, v3cc232995592894dd6b3cea55d7d7bdb.v0f1282edec774ba600ddb48ac88f1ef0 = 5, v3cc232995592894dd6b3cea55d7d7bdb.v6bc0d978a63de953dd66d6c98f94044f = 6, v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c = 7, v3cc232995592894dd6b3cea55d7d7bdb.v5b021be61ea8eb151e77d248345a2f33 = 8, v3cc232995592894dd6b3cea55d7d7bdb.v2e73731fd911fe805741863afe4b00c2 = 9, v3cc232995592894dd6b3cea55d7d7bdb.v4d0afefe5f0e1e39dbfab71bab10bc6b = "Profit", v3cc232995592894dd6b3cea55d7d7bdb.vbd0653ed49346df6193b1c12aee51d0b =
"Revenue", v3cc232995592894dd6b3cea55d7d7bdb.v674f4ce69520a39356c0a531a900ea11 = "Retained Earnings", v3cc232995592894dd6b3cea55d7d7bdb.prototype.init = function(a, b) {
  /** @type {!Object} */
  this.vefd58e891af62442896babf7a05f6fbc = a;
  /** @type {number} */
  this.v750682521769f0af9a51cb15b22e33da = b;
}, v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9 = 208, v3cc232995592894dd6b3cea55d7d7bdb.vf934c2f88d36e4e777c25cad2758c85b = 52, v3cc232995592894dd6b3cea55d7d7bdb.v4ea70f3de21d1848658188dcf3bd6bc1 = true, v3cc232995592894dd6b3cea55d7d7bdb.v6492cc4a98f01e8a045ab44ac5b52db5 = true, v3cc232995592894dd6b3cea55d7d7bdb.v5fdf911e91660fed29009167423dfb1b = true, v3cc232995592894dd6b3cea55d7d7bdb.v1d011f28a123c68d41beb46661b807a0 = 5, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v438c8a131f3163991b12517276264ca9 =
function(name, e) {
  var a;
  if (e != v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c && e != v3cc232995592894dd6b3cea55d7d7bdb.v2e73731fd911fe805741863afe4b00c2) {
    a = new v8b85da9aeb5cb783e909bd40c41f5ace;
    a.v2baf0369ebd0516988acb12ce916d371(name, e);
    this.vd617251ed8706086ec01e3a5ba7301eb.vc2b55451d6b5a973b456d3ad090abf8d(a);
    this.ve094c9f8eca4c77d5b14de02f473b7a1[a.v6c665ba029eb89c335acd4951384045b] = a;
    if (e == v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a) {
      this.v12b47b9000a4da119ede05e684204827 = a;
    }
    if (e == v3cc232995592894dd6b3cea55d7d7bdb.v3da6faa67bfb1547709817d8ddaa9b98) {
      this.v7319700429d753e1aaeedc58c69e71e9 = a;
    }
    if (e == v3cc232995592894dd6b3cea55d7d7bdb.v0f1282edec774ba600ddb48ac88f1ef0) {
      this.v16b6a4298b7a8bbf44fdd2b500f360f4 = a;
    }
    if (e == v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620) {
      this.v8fdcf6fc399e8c493570dc37923f646c = a;
    }
    if (e == v3cc232995592894dd6b3cea55d7d7bdb.v6bc0d978a63de953dd66d6c98f94044f) {
      this.v8a45e26bed4e0363610b4758680b64bb = a;
    }
  } else {
    var c = new v8b85da9aeb5cb783e909bd40c41f5ace;
    c.v2baf0369ebd0516988acb12ce916d371(name + " - Total", e);
    this.vd617251ed8706086ec01e3a5ba7301eb.vc2b55451d6b5a973b456d3ad090abf8d(c);
    this.ve094c9f8eca4c77d5b14de02f473b7a1[c.v6c665ba029eb89c335acd4951384045b] = c;
    var target = new v8b85da9aeb5cb783e909bd40c41f5ace;
    target.v2baf0369ebd0516988acb12ce916d371(name + " - Total (units)", e);
    this.vd617251ed8706086ec01e3a5ba7301eb.vc2b55451d6b5a973b456d3ad090abf8d(target);
    this.ve094c9f8eca4c77d5b14de02f473b7a1[target.v6c665ba029eb89c335acd4951384045b] = target;
    /** @type {number} */
    var url = 0;
    for (; url < this.vefd58e891af62442896babf7a05f6fbc.length; ++url) {
      var $ = this.vefd58e891af62442896babf7a05f6fbc[url];
      a = new v8b85da9aeb5cb783e909bd40c41f5ace;
      a.v1d84fcbefa8cd90c7bb2b5188304933f(name + " - " + $, e, c);
      this.ve094c9f8eca4c77d5b14de02f473b7a1[a.v6c665ba029eb89c335acd4951384045b] = a;
      a = new v8b85da9aeb5cb783e909bd40c41f5ace;
      a.v1d84fcbefa8cd90c7bb2b5188304933f(name + " - " + $ + " (units)", e, target);
      this.ve094c9f8eca4c77d5b14de02f473b7a1[a.v6c665ba029eb89c335acd4951384045b] = a;
    }
  }
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vd9840470f425368b9b720f709d3ee476 = function(prop, view, name) {
  if (!(view != v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c && view != v3cc232995592894dd6b3cea55d7d7bdb.v2e73731fd911fe805741863afe4b00c2)) {
    throw new Error("Sub this.accounts are automatically added for this.accounts of type Product. Do not add them explicitly.");
  }
  var html = new v8b85da9aeb5cb783e909bd40c41f5ace;
  html.v1d84fcbefa8cd90c7bb2b5188304933f(prop, view, this.v31f01af92c29ad23170a09284f213eb2(name));
  this.ve094c9f8eca4c77d5b14de02f473b7a1[html.v6c665ba029eb89c335acd4951384045b] = html;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v76f2984839d423b5ebb78d595c5db837 = function(i, m) {
  if (m != v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c && m != v3cc232995592894dd6b3cea55d7d7bdb.v2e73731fd911fe805741863afe4b00c2) {
    throw new Error("AddProductSubAccount is only to be called for product type accounts.");
  }
  var oldObjList = _.filter(this.vd617251ed8706086ec01e3a5ba7301eb, function(DOMGeom) {
    return DOMGeom.vb6b105804765c7fb8a13132218994233(m);
  });
  _.forEach(oldObjList, _.bind(function(args) {
    var spider_circle_ = args.v6c665ba029eb89c335acd4951384045b.split(" - ")[0];
    /** @type {string} */
    var s = spider_circle_ + " - " + i;
    /** @type {string} */
    s = s + (_.endsWith(args.v6c665ba029eb89c335acd4951384045b, "(units)") ? " (units)" : "");
    if (!this.ve094c9f8eca4c77d5b14de02f473b7a1[s]) {
      acc = new v8b85da9aeb5cb783e909bd40c41f5ace;
      acc.v1d84fcbefa8cd90c7bb2b5188304933f(s, m, args);
      this.ve094c9f8eca4c77d5b14de02f473b7a1[acc.v6c665ba029eb89c335acd4951384045b] = acc;
    }
  }, this));
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v31f01af92c29ad23170a09284f213eb2 = function(name) {
  return this.ve094c9f8eca4c77d5b14de02f473b7a1[name];
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vabe5369fddac296adb56cc7a33e9265f = function(name, a, b) {
    sdpj
  if (a == undefined) {
    /** @type {number} */
    a = -1;
  }
  if (b == undefined) {
    /** @type {number} */
    b = v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a;
  }
  if (a == -1) {
    a = v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5;
  }
  var s = this.v31f01af92c29ad23170a09284f213eb2(name);
  if (b != v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a) {
    /** @type {number} */
    var c = (a + 1) * v3cc232995592894dd6b3cea55d7d7bdb.v1525f912ac3ca6990e33c69e6aed83f8[b] - 1;
    if (s.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770 || s.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vedf6d2b0c294afca439f45252040ce06) {
      return this.vabe5369fddac296adb56cc7a33e9265f(name, c, v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a);
    } else {
      /** @type {number} */
      var html = 0;
      /** @type {number} */
      var x = c - v3cc232995592894dd6b3cea55d7d7bdb.v1525f912ac3ca6990e33c69e6aed83f8[b] + 1;
      for (; x <= c; x++) {
        html = html + this.vabe5369fddac296adb56cc7a33e9265f(name, x, v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a);
      }
      return html;
    }
  } else {
    if (this.v9e22db9eee3512d1ce3bbedd7bcc9073(a), s.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v0f1282edec774ba600ddb48ac88f1ef0) {
      return this.v12b47b9000a4da119ede05e684204827.v494ebaed17fa4aa081b9dc4978e95063(this.vf04dcdb3354144640f756c274bf3f245(a)) - this.v7319700429d753e1aaeedc58c69e71e9.v494ebaed17fa4aa081b9dc4978e95063(this.vf04dcdb3354144640f756c274bf3f245(a));
    } else {
      if (s.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v6bc0d978a63de953dd66d6c98f94044f) {
        /** @type {number} */
        var p = 0;
        /** @type {number} */
        var i = 0;
        for (; i < this.vd617251ed8706086ec01e3a5ba7301eb.length; ++i) {
          var content = this.vd617251ed8706086ec01e3a5ba7301eb[i];
          if (content.veb690d1fa9b46e0d46eed02a4234a8b8 == null && content.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620) {
            p = p + content.v494ebaed17fa4aa081b9dc4978e95063(this.vf04dcdb3354144640f756c274bf3f245(a));
          }
        }
        return this.vabe5369fddac296adb56cc7a33e9265f("Gross Margin", a, b) - p;
      } else {
        return s.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c ? s.v494ebaed17fa4aa081b9dc4978e95063(this.v1e1400b51bbd7920791eade59ff834e4(a)) : s.v494ebaed17fa4aa081b9dc4978e95063(this.vf04dcdb3354144640f756c274bf3f245(a));
      }
    }
  }
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vf04dcdb3354144640f756c274bf3f245 = function(linesstrip) {
  return linesstrip % v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v1e1400b51bbd7920791eade59ff834e4 = function(linesstrip) {
  return linesstrip % v3cc232995592894dd6b3cea55d7d7bdb.vf934c2f88d36e4e777c25cad2758c85b;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v9e22db9eee3512d1ce3bbedd7bcc9073 = function(strip1) {
  if (v3cc232995592894dd6b3cea55d7d7bdb.v5fdf911e91660fed29009167423dfb1b && this.v5e665708978ebb95f5f86ffc64666719 < strip1) {
    var QueryLanguageComponent = this.v5e665708978ebb95f5f86ffc64666719 + 1;
    for (; QueryLanguageComponent <= strip1; QueryLanguageComponent++) {
      this.vea44a90636cb57f56a9e77292688e585(QueryLanguageComponent);
    }
    /** @type {number} */
    this.v5e665708978ebb95f5f86ffc64666719 = strip1;
  }
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vb4c9cca6eb90b6fb0855241e02fbba30 = function(m, b, name, a) {
  this.v9e22db9eee3512d1ce3bbedd7bcc9073(a);
  var content = this.v31f01af92c29ad23170a09284f213eb2(m);
  var t = this.v31f01af92c29ad23170a09284f213eb2(name);
  if (content.v7705ec9690ba44141595e911ce090070(this.vf04dcdb3354144640f756c274bf3f245(a), b), t.vc699f1e4a0dd4ef39a128844360fdbec(this.vf04dcdb3354144640f756c274bf3f245(a), b), _.isObject(this.v43ac50a978b3944e15be71c3ebbf7f91)) {
    var d = v13260862a5e36823cb5546b59af48c71.instance.state.now;
    return a != v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5 && (d = this.vbad75a4b846cce58f7972884f27f653d(a)), this.v43ac50a978b3944e15be71c3ebbf7f91.v1f77925380d4fb856b06e91b0232a18a(content, b, t, d);
  }
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v01859ba9e7439f2a5b7f5a04bbdcae01 = function(m, b, status) {
  return this.vb4c9cca6eb90b6fb0855241e02fbba30(m, b, status, v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5);
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v0f22a7fc7fd6c7de923180947190b310 = function(m, b, name, callsPerIteration, f, data, p, a) {
  this.v9e22db9eee3512d1ce3bbedd7bcc9073(a);
  this.vb4c9cca6eb90b6fb0855241e02fbba30(m, b, name, this.vf04dcdb3354144640f756c274bf3f245(a));
  /** @type {number} */
  var i = 0;
  for (; i < data.length; ++i) {
    var d = data[i];
    this.v31f01af92c29ad23170a09284f213eb2(d + " - " + callsPerIteration).v7705ec9690ba44141595e911ce090070(this.v1e1400b51bbd7920791eade59ff834e4(a), b);
    this.v31f01af92c29ad23170a09284f213eb2(d + " - " + callsPerIteration + " (units)").v7705ec9690ba44141595e911ce090070(this.v1e1400b51bbd7920791eade59ff834e4(a), f);
  }
  /** @type {number} */
  i = 0;
  for (; i < p.length; ++i) {
    d = p[i];
    this.v31f01af92c29ad23170a09284f213eb2(d + " - " + callsPerIteration).vc699f1e4a0dd4ef39a128844360fdbec(this.v1e1400b51bbd7920791eade59ff834e4(a), b);
    this.v31f01af92c29ad23170a09284f213eb2(d + " - " + callsPerIteration + " (units)").vc699f1e4a0dd4ef39a128844360fdbec(this.v1e1400b51bbd7920791eade59ff834e4(a), f);
  }
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vecc398afd2a0d0e16f99f310fbcb10a5 = function(lon, s, name, callsPerIteration, f, partial, params) {
  this.v0f22a7fc7fd6c7de923180947190b310(lon, s, name, callsPerIteration, f, partial, params, v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5);
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v1bd4c2ffcfef1ddc6c17739ca01e6f69 = function(apexdist, column_reordering_1_1) {
  this.v28cf1721049c64f886b1156cc94dcf96(apexdist, column_reordering_1_1, v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5);
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v28cf1721049c64f886b1156cc94dcf96 = function(c, m, a) {
  var b = this.v31f01af92c29ad23170a09284f213eb2(c);
  if (!(b.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v5b021be61ea8eb151e77d248345a2f33 || b.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v2e73731fd911fe805741863afe4b00c2)) {
    throw new Error("Double entry accounting violation.");
  }
  this.v9e22db9eee3512d1ce3bbedd7bcc9073(a);
  b.v7705ec9690ba44141595e911ce090070(this.vf04dcdb3354144640f756c274bf3f245(a), m);
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.ve6e9bf3022d537bd5038b3394e114481 = function(a, b, areMutuallyExclusive) {
  this.v48358cf58530264108042563c139deef(a, b, areMutuallyExclusive, v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5);
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v48358cf58530264108042563c139deef = function(callback, initialValue, parentFieldsAreMutuallyExclusive, fieldMap1) {
  this.v28cf1721049c64f886b1156cc94dcf96(callback + " - " + parentFieldsAreMutuallyExclusive, initialValue, fieldMap1);
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vbad75a4b846cce58f7972884f27f653d = function(d, ent) {
  if (ent == undefined) {
    /** @type {number} */
    ent = v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a;
  }
  /** @type {number} */
  var b = (d + 1) * v3cc232995592894dd6b3cea55d7d7bdb.v1525f912ac3ca6990e33c69e6aed83f8[ent] - 1;
  var c = this.v750682521769f0af9a51cb15b22e33da.addDays(b * 7);
  return c;
}, v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a = 0, v3cc232995592894dd6b3cea55d7d7bdb.vbe7a81eb90ef4af01a540f32d39374ed = 1, v3cc232995592894dd6b3cea55d7d7bdb.va1ed5c295083f034327904db51a9efdc = 2, v3cc232995592894dd6b3cea55d7d7bdb.v1525f912ac3ca6990e33c69e6aed83f8 = [1, 13, 52], v3cc232995592894dd6b3cea55d7d7bdb.prototype.v2ea97ef42d4527db0ab4e00108f9a297 = function(a) {
  switch(a) {
    case v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a:
      return U.vc0e6c88f8413e92781b652ae2786391a("Weekly");
    case v3cc232995592894dd6b3cea55d7d7bdb.vbe7a81eb90ef4af01a540f32d39374ed:
      return U.vc0e6c88f8413e92781b652ae2786391a("Quarterly");
    case v3cc232995592894dd6b3cea55d7d7bdb.va1ed5c295083f034327904db51a9efdc:
      return U.vc0e6c88f8413e92781b652ae2786391a("Annual");
    default:
      throw new Error("Bad frequency passed into Frequency name");
  }
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vcbc6230bd93d971fd4b5e58c688cde92 = function(partsVertically, id) {
  /** @type {!Array} */
  var ValidationService = [];
  if (partsVertically == U.vc0e6c88f8413e92781b652ae2786391a("Income Statement")) {
    /** @type {number} */
    var i = 0;
    for (; i < this.vd617251ed8706086ec01e3a5ba7301eb.length; ++i) {
      var val = this.vd617251ed8706086ec01e3a5ba7301eb[i];
      if (val.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a) {
        ValidationService.vc2b55451d6b5a973b456d3ad090abf8d(val);
        ValidationService.vfa21e3bf8ea9d4320d8597afc1052baf(val.v9651bebb19e55996cbcaa423b5be432c(id));
      }
    }
    if (v3cc232995592894dd6b3cea55d7d7bdb.v6492cc4a98f01e8a045ab44ac5b52db5) {
      /** @type {number} */
      i = 0;
      for (; i < this.vd617251ed8706086ec01e3a5ba7301eb.length; ++i) {
        val = this.vd617251ed8706086ec01e3a5ba7301eb[i];
        if (val.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v3da6faa67bfb1547709817d8ddaa9b98) {
          ValidationService.vc2b55451d6b5a973b456d3ad090abf8d(val);
          ValidationService.vfa21e3bf8ea9d4320d8597afc1052baf(val.v9651bebb19e55996cbcaa423b5be432c(id));
        }
      }
    }
    if (v3cc232995592894dd6b3cea55d7d7bdb.v4ea70f3de21d1848658188dcf3bd6bc1) {
      ValidationService.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2("Gross Margin"));
    }
    /** @type {number} */
    i = 0;
    for (; i < this.vd617251ed8706086ec01e3a5ba7301eb.length; ++i) {
      val = this.vd617251ed8706086ec01e3a5ba7301eb[i];
      if (val.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620) {
        ValidationService.vc2b55451d6b5a973b456d3ad090abf8d(val);
        ValidationService.vfa21e3bf8ea9d4320d8597afc1052baf(val.v9651bebb19e55996cbcaa423b5be432c(id));
      }
    }
    ValidationService.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2(v3cc232995592894dd6b3cea55d7d7bdb.v4d0afefe5f0e1e39dbfab71bab10bc6b));
  } else {
    if (partsVertically == U.vc0e6c88f8413e92781b652ae2786391a("Balance Sheet")) {
      val = this.v31f01af92c29ad23170a09284f213eb2("Assets");
      ValidationService.vc2b55451d6b5a973b456d3ad090abf8d(val);
      ValidationService.vfa21e3bf8ea9d4320d8597afc1052baf(val.v9651bebb19e55996cbcaa423b5be432c(id));
      val = this.v31f01af92c29ad23170a09284f213eb2("Liabilities Plus Equity");
      ValidationService.vc2b55451d6b5a973b456d3ad090abf8d(val);
      ValidationService.vfa21e3bf8ea9d4320d8597afc1052baf(val.v9651bebb19e55996cbcaa423b5be432c(id));
    } else {
      throw new Error("Statement name incorrect.");
    }
  }
  return ValidationService;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vbf5b7bd887d29c5980fa37082b469445 = function(b) {
  /** @type {!Array} */
  var a = [];
  if (b == U.vc0e6c88f8413e92781b652ae2786391a("Income Statement")) {
    a.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2(v3cc232995592894dd6b3cea55d7d7bdb.vbd0653ed49346df6193b1c12aee51d0b));
    if (v3cc232995592894dd6b3cea55d7d7bdb.v4ea70f3de21d1848658188dcf3bd6bc1) {
      a.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2("Gross Margin"));
    }
    a.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2(v3cc232995592894dd6b3cea55d7d7bdb.v4d0afefe5f0e1e39dbfab71bab10bc6b));
  } else {
    if (b == U.vc0e6c88f8413e92781b652ae2786391a("Balance Sheet")) {
      a.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2("Assets"));
      a.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2("Liabilities"));
      a.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2("Equity"));
    } else {
      throw new Error("Statement name incorrect.");
    }
  }
  return a;
}, v3cc232995592894dd6b3cea55d7d7bdb.vcf303b7881442e2ea2a769fda556ada0 = false, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v1559b1d649643eaab16560591abadd77 = function(p, f, forceClassBase) {
  /** @type {!Array} */
  var c = [];
  /** @type {string} */
  var trailopt = "";
  if (forceClassBase) {
    trailopt = U.vc0e6c88f8413e92781b652ae2786391a(" (units)");
  }
  /** @type {number} */
  var i = 0;
  for (; i < p.length; ++i) {
    var api = p[i];
    /** @type {number} */
    var a = 0;
    for (; a < f.length; ++a) {
      var size = f[a];
      c.vc2b55451d6b5a973b456d3ad090abf8d(this.v31f01af92c29ad23170a09284f213eb2(api + " - " + size + trailopt));
    }
  }
  return c;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vea44a90636cb57f56a9e77292688e585 = function(b) {
  var aEnd = this.vabe5369fddac296adb56cc7a33e9265f(v3cc232995592894dd6b3cea55d7d7bdb.v4d0afefe5f0e1e39dbfab71bab10bc6b, b - 1, v3cc232995592894dd6b3cea55d7d7bdb.v97e43c5c46f32528bace6097e218a15a);
  var atlines = this.v7fc95c5d057152d5d97fb81c53adce8a();
  /** @type {number} */
  var i = 0;
  for (; i < atlines.length; ++i) {
    var a = atlines[i];
    if (a.v829d9a73f83f5faf7023f900ac1b10fb.length == 0) {
      if (a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c) {
        a.ve21c22e66ceca45c54eda9f811e901f9(this.v1e1400b51bbd7920791eade59ff834e4(b));
      } else {
        a.ve21c22e66ceca45c54eda9f811e901f9(this.vf04dcdb3354144640f756c274bf3f245(b));
      }
      if (a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770) {
        if (a.v6c665ba029eb89c335acd4951384045b == v3cc232995592894dd6b3cea55d7d7bdb.v674f4ce69520a39356c0a531a900ea11) {
          a.vc699f1e4a0dd4ef39a128844360fdbec(this.vf04dcdb3354144640f756c274bf3f245(b - 1), aEnd);
        }
        a.vc699f1e4a0dd4ef39a128844360fdbec(this.vf04dcdb3354144640f756c274bf3f245(b), a.v494ebaed17fa4aa081b9dc4978e95063(this.vf04dcdb3354144640f756c274bf3f245(b - 1)));
      } else {
        if (a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vedf6d2b0c294afca439f45252040ce06) {
          a.v7705ec9690ba44141595e911ce090070(this.vf04dcdb3354144640f756c274bf3f245(b), a.v494ebaed17fa4aa081b9dc4978e95063(this.vf04dcdb3354144640f756c274bf3f245(b - 1)));
        } else {
          if (a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c && a.v6c665ba029eb89c335acd4951384045b.startsWith("Inventory")) {
            a.v7705ec9690ba44141595e911ce090070(this.v1e1400b51bbd7920791eade59ff834e4(b), a.v494ebaed17fa4aa081b9dc4978e95063(this.v1e1400b51bbd7920791eade59ff834e4(b - 1)));
          }
        }
      }
    }
  }
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v7fc95c5d057152d5d97fb81c53adce8a = function() {
  /** @type {!Array} */
  var bAnimator = [];
  /** @type {number} */
  var figure = 0;
  for (; figure < this.vd617251ed8706086ec01e3a5ba7301eb.length; ++figure) {
    var f = this.vd617251ed8706086ec01e3a5ba7301eb[figure];
    bAnimator.vc2b55451d6b5a973b456d3ad090abf8d(f);
    var geoJsonFeatures = f.v890bfebdaba83f21a575a1a68961b0f0();
    /** @type {number} */
    var i = 0;
    for (; i < geoJsonFeatures.length; ++i) {
      var f = geoJsonFeatures[i];
      bAnimator.vc2b55451d6b5a973b456d3ad090abf8d(f);
    }
  }
  return bAnimator;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v57be994650b1872d052869b4df57bac1 = function() {
  /** @type {number} */
  var maxPrimaryDepth = 1;
  return vee8206b276787f6d065f935010a51f0c(this, this.v7fc95c5d057152d5d97fb81c53adce8a(), function(b) {
    /** @type {number} */
    maxPrimaryDepth = Math.max(b.v26a49f9685192d739033d02fff40b9fd(), maxPrimaryDepth);
  }), maxPrimaryDepth;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vc9782ece374209e892894042072e3470 = function(e, f, duration) {
  /** @type {number} */
  var ItemsCount = v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9;
  /** @type {number} */
  v3cc232995592894dd6b3cea55d7d7bdb.v1d011f28a123c68d41beb46661b807a0 = v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9;
  /** @type {number} */
  this.v24898e68733d61a21230dac35dca58ab = Math.max(0, v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5 - (ItemsCount - 1));
  /** @type {number} */
  this.v3470a58fa3eb785de8f997c3e53d3c03 = Math.min(ItemsCount - 1, v13260862a5e36823cb5546b59af48c71.instance.state.v5284d44cb4057594dcd4e3d70d62bee5);
  if (this.va940959cc6002cefce6a3c4b1bcb0161) {
    this.v3470a58fa3eb785de8f997c3e53d3c03++;
  }
  /** @type {string} */
  var fx = "<thead><tr>";
  /** @type {string} */
  fx = fx + ("<th><div style='width:" + duration + "px'></div></th>");
  /** @type {number} */
  var BidirectionalSubject = this.v24898e68733d61a21230dac35dca58ab;
  for (; BidirectionalSubject < this.v24898e68733d61a21230dac35dca58ab + this.v3470a58fa3eb785de8f997c3e53d3c03; BidirectionalSubject++) {
    /** @type {string} */
    fx = fx + ("<th>" + this.vbad75a4b846cce58f7972884f27f653d(BidirectionalSubject).v3d50f6a38b9e18ec7d6869a9c756a637() + "</th>");
  }
  /** @type {string} */
  fx = fx + "</tr></thead>";
  /** @type {number} */
  var i = 0;
  for (; i < e.length; i++) {
    fx = fx + this.vd06accde9083b26d6101db7a87fa0d0a(e[i], f, false, 0);
  }
  return fx;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vd06accde9083b26d6101db7a87fa0d0a = function(data, key, val) {
  /** @type {string} */
  var url = "";
  if (data.v829d9a73f83f5faf7023f900ac1b10fb.length == 0 || data.v26a49f9685192d739033d02fff40b9fd() == key) {
    url = url + this.v431e63681e232208f33243663f4eb126(data, val, false);
  } else {
    url = url + ("<tr><td>" + this.vc74672f7b0ac8e67e7bfab796b3bd533(data.v26a49f9685192d739033d02fff40b9fd()) + this.vf0fe2984cc7bbac16ee41e9f76d31fac(data) + "</td>");
    _.times(this.v3470a58fa3eb785de8f997c3e53d3c03, function() {
      url = url + "<td></td>";
    });
    url = url + "</tr>";
    /** @type {number} */
    var tupleIndex = 0;
    for (; tupleIndex < data.v829d9a73f83f5faf7023f900ac1b10fb.length; tupleIndex++) {
      url = url + this.vd06accde9083b26d6101db7a87fa0d0a(data.v829d9a73f83f5faf7023f900ac1b10fb[tupleIndex], key, tupleIndex == data.v829d9a73f83f5faf7023f900ac1b10fb.length - 1);
    }
    url = url + this.v431e63681e232208f33243663f4eb126(data, false, true);
  }
  return url;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v431e63681e232208f33243663f4eb126 = function(u, f, redrawCube) {
  /** @type {string} */
  var x = "";
  /** @type {string} */
  x = x + ("<tr><td>" + this.vc74672f7b0ac8e67e7bfab796b3bd533(u.v26a49f9685192d739033d02fff40b9fd()));
  if (redrawCube) {
    /** @type {string} */
    x = x + (this.vc74672f7b0ac8e67e7bfab796b3bd533(1) + "Total " + U.vc0e6c88f8413e92781b652ae2786391a(u.v6c665ba029eb89c335acd4951384045b) + "</td>");
  } else {
    /** @type {string} */
    x = x + (this.vf0fe2984cc7bbac16ee41e9f76d31fac(u) + "</td>");
  }
  /** @type {string} */
  var c = "";
  if (f) {
    /** @type {string} */
    c = "border-bottom:1px solid #000000;";
  }
  if (u.v6c665ba029eb89c335acd4951384045b == v3cc232995592894dd6b3cea55d7d7bdb.v4d0afefe5f0e1e39dbfab71bab10bc6b) {
    /** @type {string} */
    c = "border-bottom:3px double #000000;";
  }
  var valueProgess = this.v24898e68733d61a21230dac35dca58ab;
  for (; valueProgess < this.v24898e68733d61a21230dac35dca58ab + this.v3470a58fa3eb785de8f997c3e53d3c03; valueProgess++) {
    var value = this.vabe5369fddac296adb56cc7a33e9265f(u.v6c665ba029eb89c335acd4951384045b, valueProgess);
    /** @type {string} */
    x = x + ("<td style='text-align:right;" + c + "'>" + U.v26fd40d142e5f4ab82084c80bba46f53(value) + "</td>");
  }
  return x = x + "</tr>", x;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vc74672f7b0ac8e67e7bfab796b3bd533 = function(near) {
  /** @type {string} */
  var pix_color = "";
  /** @type {number} */
  var myDist = 0;
  for (; myDist < near * 3; myDist++) {
    /** @type {string} */
    pix_color = pix_color + "&nbsp;";
  }
  return pix_color;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vf0fe2984cc7bbac16ee41e9f76d31fac = function(u) {
  return u.v26a49f9685192d739033d02fff40b9fd() == 0 ? "<strong>" + U.vc0e6c88f8413e92781b652ae2786391a(u.v6c665ba029eb89c335acd4951384045b) + "</strong>" : u.v6c665ba029eb89c335acd4951384045b;
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v9ce8850e98b531e44cf46dd44a095ca6 = function(fontGrp) {
  _.each(fontGrp, function(params) {
    var a = this.v31f01af92c29ad23170a09284f213eb2(params.v96813d4fbae66f2c858c67c440e37cf8);
    a.number = params.vd30a4f9b10c06e7324d2d2f0f0526cdc;
    /** @type {number} */
    a.vc9ee3859aa7402d984a69b778427f0d3 = -1;
    if (a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620 || a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vedf6d2b0c294afca439f45252040ce06) {
      /** @type {number} */
      a.vc9ee3859aa7402d984a69b778427f0d3 = 1;
    }
    a.va8275386959d2bd004baab6f4cc64290 = params.va8275386959d2bd004baab6f4cc64290;
  }, this);
}, v3cc232995592894dd6b3cea55d7d7bdb.prototype.v6ca29e8755cb59ca16c66608647c9bcb = function() {
  var b = this.v7fc95c5d057152d5d97fb81c53adce8a();
  var bkeys = _.filter(b, function(a) {
    return !_.isUndefined(a.number);
  });
  return bkeys.sort(function floydWarshallPath(v1, v2) {
    return v1.number < v2.number ? -1 : 1;
  }), bkeys;
}, frmFinancials.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmFinancials.prototype.constructor = frmFinancials, frmFinancials.prototype.init = function(type, a) {
  /** @type {number} */
  this.v22982548b09bbf8013fdaf3b6681c4d1 = type;
  if (a == undefined) {
    /** @type {string} */
    this.v5e96c9dd89f2083667b64865e646f8c2 = "Income Statement";
  } else {
    /** @type {number} */
    this.v5e96c9dd89f2083667b64865e646f8c2 = a;
  }
}, frmFinancials.prototype.v25858949839469d7389869d7422938d5 = function() {
  var prevPageButtonSprite = this;
  this.v47019e0ca81afc31dd0dcc05e975161a();
  prevPageButtonSprite.update();
  /**
   * @return {undefined}
   */
  this.va2b3cdfa1483ff99f6ba476ea1338c99 = function() {
    prevPageButtonSprite.update();
  };
  A.v87b8393064cbfa8977b32cec36a69d86().v78a0d9c392e941b31d879e634e670a93(vfe39ece2a85b3dcccfd78b6d58d6c9de.v03dd3a607848d3852c5d2d6ba0e45ea2, this.va2b3cdfa1483ff99f6ba476ea1338c99);
}, frmFinancials.prototype.v47019e0ca81afc31dd0dcc05e975161a = function() {
  var prevPageButtonSprite = this;
  this.vd8844b64c094be89487bdd129159c17a.on("change click", function(b) {
    /** @type {number} */
    prevPageButtonSprite.v744e28d6167afbf0edc66230e261e022 = 0;
    prevPageButtonSprite.update();
  });
  this.v40b0eea1ae1a62d0a0aebc71d9bbdf2f.on("change click", function(b) {
    /** @type {number} */
    prevPageButtonSprite.v744e28d6167afbf0edc66230e261e022 = 1;
    prevPageButtonSprite.update();
  });
  this.v48a40ec2ad57c1ade599a08a394af52c.on("change click", function(b) {
    /** @type {number} */
    prevPageButtonSprite.v744e28d6167afbf0edc66230e261e022 = 2;
    prevPageButtonSprite.update();
  });
  this.v40b0eea1ae1a62d0a0aebc71d9bbdf2f.focus();
}, frmFinancials.prototype.update = function() {
  var default_favicon = v13260862a5e36823cb5546b59af48c71.instance.state.vaf2a576127494a53d0e079f0ed12d0e1;
  this.v56caaf8c733ad85ab710ea84061d7a47();
  if (this.dataTable) {
    this.dataTable.destroy();
  }
  var MSG_WEB_SOCKET_CLOSE = default_favicon.v4aa4655e25af5596003edec8b91c0099.vcbc6230bd93d971fd4b5e58c688cde92(this.v5e96c9dd89f2083667b64865e646f8c2, 1);
  var formattedChosenQuestion = default_favicon.v4aa4655e25af5596003edec8b91c0099.vc9782ece374209e892894042072e3470(MSG_WEB_SOCKET_CLOSE, this.v744e28d6167afbf0edc66230e261e022, this.v22982548b09bbf8013fdaf3b6681c4d1, this.ve3d1e08169a495b4207b953be46249c1);
  this.v2e95b93ae8b6e5d75d23668235722e07.html(formattedChosenQuestion);
  this.vc19554bf557a1187f872f23613383cb2(U.vc0e6c88f8413e92781b652ae2786391a("{0} for {1}", [this.v5e96c9dd89f2083667b64865e646f8c2, default_favicon.toString()]));
  this.v387cc9b4da957e8322160a1ba307f147();
  this.v0dc6e4eb091f953eb5db9fd3801d44c4();
}, frmFinancials.prototype.v387cc9b4da957e8322160a1ba307f147 = function(result) {
  if (_.isUndefined(result)) {
    /** @type {number} */
    result = this.selector.dialog("option", "width") - 35;
  }
  var readersLength = this.v2e95b93ae8b6e5d75d23668235722e07.find("th").length;
  var value = this.v22982548b09bbf8013fdaf3b6681c4d1 + (readersLength - 1) * 120 + 15;
  if (value > result) {
    /** @type {string} */
    value = "100%";
  }
  this.selector.find(".financialStatementScopeDiv").width(value);
  this.dataTable = this.v2e95b93ae8b6e5d75d23668235722e07.DataTable({
    paging : false,
    ordering : false,
    info : false,
    searching : false,
    scrollCollapse : true,
    autoWidth : false,
    columnDefs : [{
      width : this.v22982548b09bbf8013fdaf3b6681c4d1,
      targets : 0
    }, {
      width : "120px",
      targets : "_all"
    }],
    scrollY : this.selector.height() - this.v453d35a91279ad2c6b5685c803246208 + "px",
    scrollX : true,
    fixedColumns : {
      leftColumns : 1
    }
  });
}, frmFinancials.prototype.v8cd79226d01ede570a67dbb0a7ead011 = function(cellRect, pixelRect) {
  this.v56caaf8c733ad85ab710ea84061d7a47();
  vc41c7fe61eaff586a43ca6fdecb046f3.prototype.v8cd79226d01ede570a67dbb0a7ead011.call(this);
  this.dataTable.destroy();
  this.v387cc9b4da957e8322160a1ba307f147(pixelRect.size.width - 35);
  this.v0dc6e4eb091f953eb5db9fd3801d44c4();
}, frmFinancials.prototype.v56caaf8c733ad85ab710ea84061d7a47 = function() {
  var cells = this.selector.find(this.v6446c350a9d11c6670e20c2707fff830);
  if (this.v8d02e66f74a89defde44d6903669ab2a = true, this.v1cad5d576dc2d83c67e78cc326f3cb19 = 0, cells.length > 0) {
    var w = cells[0].scrollWidth;
    var timeBarWidth = cells[0].clientWidth;
    this.v77d0db2c6d37bb3bc9a23347f3006581 = cells.scrollLeft();
    /** @type {boolean} */
    this.v8d02e66f74a89defde44d6903669ab2a = this.v77d0db2c6d37bb3bc9a23347f3006581 + timeBarWidth + 5 > w;
    this.vfde43f0592664e84069fa80c66b18b70 = cells.scrollTop();
  }
}, frmFinancials.prototype.v0dc6e4eb091f953eb5db9fd3801d44c4 = function() {
  if (te = this.selector.find(this.v6446c350a9d11c6670e20c2707fff830), te.scrollLeft(this.v77d0db2c6d37bb3bc9a23347f3006581), te.scrollTop(this.vfde43f0592664e84069fa80c66b18b70), this.v8d02e66f74a89defde44d6903669ab2a) {
    var scrollWidth = te[0].scrollWidth;
    var width = te[0].clientWidth;
    te.animate({
      scrollLeft : scrollWidth - width
    }, {
      duration : 800
    });
  }
}, frmFinancials.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v47b44c6d075887ab9a3527111f5d02f0(vfe39ece2a85b3dcccfd78b6d58d6c9de.v03dd3a607848d3852c5d2d6ba0e45ea2, this.va2b3cdfa1483ff99f6ba476ea1338c99);
  if (this.dataTable) {
    this.dataTable.destroy();
  }
}, frmLoan.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmLoan.prototype.constructor = frmLoan, frmLoan.prototype.init = function(b, c, f, k, v, format, type) {
  /** @type {!Object} */
  this.v212ce13c24bade70e76580c6740766ee = b;
  /** @type {number} */
  this.v429db99f6d762266898972bac527aa77 = c;
  /** @type {number} */
  this.v49a51b3e6acd085bab005f8ab59aeb82 = f;
  /** @type {string} */
  this.v805de10de4b00f338013d90bf63fcdd3 = k;
  /** @type {number} */
  this.v4aa4655e25af5596003edec8b91c0099 = v;
  /** @type {number} */
  this.v294930318effae8c73f06c0a5a619681 = format;
  /** @type {!Object} */
  this.v669ff646b5846079385e704f4920c16e = type;
}, frmLoan.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.va9d0554ff00670c8363f119b08e70fd2.html(this.v212ce13c24bade70e76580c6740766ee);
  /** @type {number} */
  var i = 0;
  for (; i < this.v49a51b3e6acd085bab005f8ab59aeb82.length; ++i) {
    var cruxChart = new frmLoanc2;
    cruxChart.init(this, this.v49a51b3e6acd085bab005f8ab59aeb82[i]);
    cruxChart.v4cfcb53978fd83231c75b36f997e0b9e(this.vcdc83deb5beb410fa8a1b61c1a357729);
    this.vda2d78568dc8a6184fbcff052f0cd311.push(cruxChart);
  }
  if (this.v805de10de4b00f338013d90bf63fcdd3.length == 0) {
    this.v5f48d568f84067416af81e64e14507c9(this.v113ab69b6b1e5271b32a11f58b1aa4d8);
  }
  /** @type {number} */
  i = 0;
  for (; i < this.v805de10de4b00f338013d90bf63fcdd3.length; ++i) {
    cruxChart = new frmLoanc1;
    cruxChart.init(this.v805de10de4b00f338013d90bf63fcdd3[i]);
    cruxChart.v4cfcb53978fd83231c75b36f997e0b9e(this.v8cac58859c499d88812adb3d7716c27d);
    this.v8e7609333bd10ddf06894c3165635f35.push(cruxChart);
  }
  var consoleServer = this;
  this.v545139653019c8fd3f61f6aaf739e47e.click(function() {
    /** @type {number} */
    var i = 0;
    for (; i < consoleServer.v8e7609333bd10ddf06894c3165635f35.length; ++i) {
      var listener = consoleServer.v8e7609333bd10ddf06894c3165635f35[i];
      var f = listener.vb05524ee3429ec38953d9eb4f3f2f363();
      if (!f.v1c04c9e3f97c8fc348b047988bd5f6b2) {
        Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
        return;
      }
    }
    var g = U.vc0e6c88f8413e92781b652ae2786391a("Made payments on the following loans:");
    /** @type {!Array} */
    var e = [];
    /** @type {number} */
    i = 0;
    for (; i < consoleServer.v8e7609333bd10ddf06894c3165635f35.length; ++i) {
      listener = consoleServer.v8e7609333bd10ddf06894c3165635f35[i];
      var params = listener.v54c2849df4d1306e7988f0cb953901d1(listener.v520cb0dce9b4943b7f1ebc8c86dcf3af);
      e.push([U.vc0e6c88f8413e92781b652ae2786391a("Balance: {0}<br>Due: {1}", [U.v0ea35f447d08124fa72648dd7f4ff64c(listener.vc18d688e07091b27142e0fefc4e6b8b2.v1fbb9f87b3a9b049619870461fcf1fd5), listener.vc18d688e07091b27142e0fefc4e6b8b2.v44d042cf524ab6ea16413bfad2bcff20.v3d50f6a38b9e18ec7d6869a9c756a637()]), U.vc0e6c88f8413e92781b652ae2786391a("Paid: {0}", U.v0ea35f447d08124fa72648dd7f4ff64c(params))]);
      consoleServer.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(g, e);
      listener.vc18d688e07091b27142e0fefc4e6b8b2.v1fbb9f87b3a9b049619870461fcf1fd5 -= params;
      if (listener.vc18d688e07091b27142e0fefc4e6b8b2.v1fbb9f87b3a9b049619870461fcf1fd5 <= 0) {
        consoleServer.v805de10de4b00f338013d90bf63fcdd3.vf81b17578abb97a8de755cddbf7f45a9(listener.vc18d688e07091b27142e0fefc4e6b8b2);
      }
      consoleServer.v4aa4655e25af5596003edec8b91c0099.v01859ba9e7439f2a5b7f5a04bbdcae01(consoleServer.v294930318effae8c73f06c0a5a619681, params, "Cash");
    }
    Alert.show("Loan payments made.");
    A.v87b8393064cbfa8977b32cec36a69d86().vbee376c0bae5a5bb92840e65cd0a702e();
    consoleServer.close();
  });
}, frmLoan.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmLoanc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmLoanc1.prototype.constructor = frmLoanc1, frmLoanc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v43b6dea18936d9253afbb111a3c20131.text(this.vc18d688e07091b27142e0fefc4e6b8b2.v285f65f4cfb19c6067279d690600075d());
  this.v520cb0dce9b4943b7f1ebc8c86dcf3af.val(0);
  this.vb91883bc74eb846dcb5876098c22d085(this.v520cb0dce9b4943b7f1ebc8c86dcf3af, {
    placement : "left",
    integer : true,
    min : 0,
    max : this.vc18d688e07091b27142e0fefc4e6b8b2.v1fbb9f87b3a9b049619870461fcf1fd5
  });
}, frmLoanc1.prototype.init = function(value) {
  /** @type {!Object} */
  this.vc18d688e07091b27142e0fefc4e6b8b2 = value;
}, frmLoanc2.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmLoanc2.prototype.constructor = frmLoanc2, frmLoanc2.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v43b6dea18936d9253afbb111a3c20131.text(this.vc18d688e07091b27142e0fefc4e6b8b2.v863b40ac0416e30464b61284cabfefae());
  var parentPg = this;
  this.vd5ce1176b7b94db14982544c97f88ecd.click(function() {
    parentPg.parent.v805de10de4b00f338013d90bf63fcdd3.vc2b55451d6b5a973b456d3ad090abf8d(parentPg.vc18d688e07091b27142e0fefc4e6b8b2);
    var b = U.vc0e6c88f8413e92781b652ae2786391a("Took out a loan for {0}.", parentPg.vc18d688e07091b27142e0fefc4e6b8b2.v863b40ac0416e30464b61284cabfefae());
    if (parentPg.parent.v669ff646b5846079385e704f4920c16e != undefined) {
      parentPg.parent.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(b);
    }
    if (parentPg.parent.v4aa4655e25af5596003edec8b91c0099 != undefined) {
      parentPg.parent.v4aa4655e25af5596003edec8b91c0099.v01859ba9e7439f2a5b7f5a04bbdcae01("Cash", parentPg.vc18d688e07091b27142e0fefc4e6b8b2.v1fbb9f87b3a9b049619870461fcf1fd5, parentPg.parent.v294930318effae8c73f06c0a5a619681);
    }
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Congratulations! You got the loan."));
    A.v87b8393064cbfa8977b32cec36a69d86().vbee376c0bae5a5bb92840e65cd0a702e();
    parentPg.parent.close();
  });
}, frmLoanc2.prototype.init = function(value, source) {
  /** @type {!Object} */
  this.parent = value;
  /** @type {number} */
  this.vc18d688e07091b27142e0fefc4e6b8b2 = source;
}, v8ec9cfde15d40d32a5eaa1641f0aaa53.prototype = Object.create(Object.prototype), v8ec9cfde15d40d32a5eaa1641f0aaa53.prototype.constructor = v8ec9cfde15d40d32a5eaa1641f0aaa53, v8ec9cfde15d40d32a5eaa1641f0aaa53.vea72c8e91b35c1024fdb647cc3780262 = 14, v8ec9cfde15d40d32a5eaa1641f0aaa53.prototype.init = function(b, c, a) {
  this.vc06f9f72ba7ad0f9393755c740612d7d = A.vfe1c4eaec8ec40f848f9772196c532d3().now;
  this.v44d042cf524ab6ea16413bfad2bcff20 = this.vc06f9f72ba7ad0f9393755c740612d7d.addDays(a * 30);
  /** @type {number} */
  this.v1fbb9f87b3a9b049619870461fcf1fd5 = b;
  /** @type {number} */
  this.vb8f406f927eca063c5666ee727ba7cb0 = c;
  /** @type {number} */
  this.vebb7cab821e63d2e543320983a815877 = a;
}, v8ec9cfde15d40d32a5eaa1641f0aaa53.prototype.v863b40ac0416e30464b61284cabfefae = function() {
  return U.vc0e6c88f8413e92781b652ae2786391a("{0} for {1} months at {2} interest rate", [U.v0ea35f447d08124fa72648dd7f4ff64c(this.v1fbb9f87b3a9b049619870461fcf1fd5), U.v790f397a5458e475c4d492eae29578af(this.vebb7cab821e63d2e543320983a815877), U.v2628ffda04642057c9557483709c86b2(this.vb8f406f927eca063c5666ee727ba7cb0)]);
}, v8ec9cfde15d40d32a5eaa1641f0aaa53.prototype.v285f65f4cfb19c6067279d690600075d = function() {
  return U.vc0e6c88f8413e92781b652ae2786391a("Balance: {0}, Due Date: {1}, Interest Rate: {2}", [U.v0ea35f447d08124fa72648dd7f4ff64c(this.v1fbb9f87b3a9b049619870461fcf1fd5), this.v44d042cf524ab6ea16413bfad2bcff20.v3d50f6a38b9e18ec7d6869a9c756a637(), U.v2628ffda04642057c9557483709c86b2(this.vb8f406f927eca063c5666ee727ba7cb0)]);
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype = Object.create(Object.prototype), v8b85da9aeb5cb783e909bd40c41f5ace.prototype.constructor = v8b85da9aeb5cb783e909bd40c41f5ace, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v2baf0369ebd0516988acb12ce916d371 = function(e, n) {
  if (this.v6c665ba029eb89c335acd4951384045b = e, this.v1d0a4918d029323bed1e1c972ce216ef = n, n != v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c) {
    /** @type {!Array} */
    this.v1fbb9f87b3a9b049619870461fcf1fd5 = new Array(v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9);
    /** @type {number} */
    var indexLookupKey = 0;
    for (; indexLookupKey < v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9; indexLookupKey++) {
      /** @type {number} */
      this.v1fbb9f87b3a9b049619870461fcf1fd5[indexLookupKey] = 0;
    }
  } else {
    /** @type {!Array} */
    this.v1fbb9f87b3a9b049619870461fcf1fd5 = new Array(v3cc232995592894dd6b3cea55d7d7bdb.vf934c2f88d36e4e777c25cad2758c85b);
    /** @type {number} */
    indexLookupKey = 0;
    for (; indexLookupKey < v3cc232995592894dd6b3cea55d7d7bdb.vf934c2f88d36e4e777c25cad2758c85b; indexLookupKey++) {
      /** @type {number} */
      this.v1fbb9f87b3a9b049619870461fcf1fd5[indexLookupKey] = 0;
    }
  }
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v1d84fcbefa8cd90c7bb2b5188304933f = function(o, f, a) {
  if (this.v6c665ba029eb89c335acd4951384045b = o, this.v1d0a4918d029323bed1e1c972ce216ef = f, this.veb690d1fa9b46e0d46eed02a4234a8b8 = a, a.v829d9a73f83f5faf7023f900ac1b10fb.vc2b55451d6b5a973b456d3ad090abf8d(this), f != v3cc232995592894dd6b3cea55d7d7bdb.vb7db427278642a258af03a414b39be7c) {
    /** @type {!Array} */
    this.v1fbb9f87b3a9b049619870461fcf1fd5 = new Array(v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9);
    /** @type {number} */
    var indexLookupKey = 0;
    for (; indexLookupKey < v3cc232995592894dd6b3cea55d7d7bdb.v73c76918e0a31aa8f76c454534216bb9; indexLookupKey++) {
      /** @type {number} */
      this.v1fbb9f87b3a9b049619870461fcf1fd5[indexLookupKey] = 0;
    }
  } else {
    /** @type {!Array} */
    this.v1fbb9f87b3a9b049619870461fcf1fd5 = new Array(v3cc232995592894dd6b3cea55d7d7bdb.vf934c2f88d36e4e777c25cad2758c85b);
    /** @type {number} */
    indexLookupKey = 0;
    for (; indexLookupKey < v3cc232995592894dd6b3cea55d7d7bdb.vf934c2f88d36e4e777c25cad2758c85b; indexLookupKey++) {
      /** @type {number} */
      this.v1fbb9f87b3a9b049619870461fcf1fd5[indexLookupKey] = 0;
    }
  }
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v494ebaed17fa4aa081b9dc4978e95063 = function(context) {
  /** @type {number} */
  var parts = 0;
  if (this.v829d9a73f83f5faf7023f900ac1b10fb.length == 0) {
    return this.v1fbb9f87b3a9b049619870461fcf1fd5[context];
  } else {
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < this.v829d9a73f83f5faf7023f900ac1b10fb.length; ++layer_i) {
      var layer = this.v829d9a73f83f5faf7023f900ac1b10fb[layer_i];
      parts = parts + layer.v494ebaed17fa4aa081b9dc4978e95063(context);
    }
    return parts;
  }
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v7705ec9690ba44141595e911ce090070 = function(name, val) {
  if (this.v829d9a73f83f5faf7023f900ac1b10fb.length != 0) {
    throw new Error("Attempt to set aggregate account this.balance not allowed.");
  }
  if (this.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770 || this.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a) {
    this.v1fbb9f87b3a9b049619870461fcf1fd5[name] -= val;
  } else {
    this.v1fbb9f87b3a9b049619870461fcf1fd5[name] += val;
  }
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.vc699f1e4a0dd4ef39a128844360fdbec = function(zoom, a) {
  this.v7705ec9690ba44141595e911ce090070(zoom, -a);
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v890bfebdaba83f21a575a1a68961b0f0 = function() {
  /** @type {!Array} */
  var QuickBase = [];
  /** @type {number} */
  var i = 0;
  for (; i < this.v829d9a73f83f5faf7023f900ac1b10fb.length; ++i) {
    var val = this.v829d9a73f83f5faf7023f900ac1b10fb[i];
    QuickBase.vc2b55451d6b5a973b456d3ad090abf8d(val);
    QuickBase.vfa21e3bf8ea9d4320d8597afc1052baf(val.v890bfebdaba83f21a575a1a68961b0f0());
  }
  return QuickBase;
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v9651bebb19e55996cbcaa423b5be432c = function(position) {
  /** @type {!Array} */
  var shape = [];
  /** @type {number} */
  var i = 0;
  for (; i < this.v829d9a73f83f5faf7023f900ac1b10fb.length; ++i) {
    var j = this.v829d9a73f83f5faf7023f900ac1b10fb[i];
    if (j.v26a49f9685192d739033d02fff40b9fd() < position) {
      shape.vc2b55451d6b5a973b456d3ad090abf8d(j);
      shape.vfa21e3bf8ea9d4320d8597afc1052baf(j.v9651bebb19e55996cbcaa423b5be432c(position));
    }
  }
  return shape;
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v26a49f9685192d739033d02fff40b9fd = function() {
  var div = this;
  /** @type {number} */
  var b = 0;
  for (; div.veb690d1fa9b46e0d46eed02a4234a8b8 != null;) {
    div = div.veb690d1fa9b46e0d46eed02a4234a8b8;
    b++;
  }
  return b;
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.v31f01af92c29ad23170a09284f213eb2 = function(name) {
  if (this.v6c665ba029eb89c335acd4951384045b == name) {
    return this;
  } else {
    if (this.v829d9a73f83f5faf7023f900ac1b10fb.length > 0) {
      /** @type {number} */
      var layer_i = 0;
      for (; layer_i < this.v829d9a73f83f5faf7023f900ac1b10fb.length; ++layer_i) {
        var layer = this.v829d9a73f83f5faf7023f900ac1b10fb[layer_i];
        if (layer.v31f01af92c29ad23170a09284f213eb2(name) != null) {
          return layer.v31f01af92c29ad23170a09284f213eb2(name);
        }
      }
    }
    return null;
  }
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.ve21c22e66ceca45c54eda9f811e901f9 = function(ballNumber) {
  /** @type {number} */
  this.v1fbb9f87b3a9b049619870461fcf1fd5[ballNumber] = 0;
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.ve6a4cb56dc690c6af8876fde561be3b3 = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < this.v1fbb9f87b3a9b049619870461fcf1fd5; ++indexLookupKey) {
    var currentIndex = this.v1fbb9f87b3a9b049619870461fcf1fd5[indexLookupKey];
    if (currentIndex != 0) {
      return false;
    }
  }
  return true;
}, v8b85da9aeb5cb783e909bd40c41f5ace.prototype.vb6b105804765c7fb8a13132218994233 = function(includeAll) {
  return this.v1d0a4918d029323bed1e1c972ce216ef == includeAll;
}, v0a0bc0e06bd301c88fa635d36d81b3d1.prototype = Object.create(Object.prototype), v0a0bc0e06bd301c88fa635d36d81b3d1.prototype.constructor = v0a0bc0e06bd301c88fa635d36d81b3d1, v0a0bc0e06bd301c88fa635d36d81b3d1.prototype.init = function(props, d, v, c, f, a, b) {
  if (a == undefined) {
    /** @type {null} */
    a = null;
  }
  if (b == undefined) {
    /** @type {null} */
    b = null;
  }
  /** @type {number} */
  this.va99682c565f512a4382bbb893dc50f9d = a;
  /** @type {!Object} */
  this.v66cfa4d99c002b7293bd413ecd87ab95 = b;
  /** @type {!Object} */
  this.vaa7fa74768cf893d9263fd66a88a9a65 = props;
  /** @type {number} */
  this.v5b3f852e124273603283f3129d7748e3 = d;
  /** @type {number} */
  this.va8b7701ce4a4886581f4fa8865277ccf = v;
  /** @type {string} */
  this.v8e7fd564b90f8b8b250f0dd4feb6e42e = c;
  /** @type {number} */
  this.vfc40dd1e44e9367329796e27a858fe66 = f;
}, v3e75d4904545279beb684b7466d12efb.prototype = Object.create(Object.prototype), v3e75d4904545279beb684b7466d12efb.prototype.constructor = v3e75d4904545279beb684b7466d12efb, v3e75d4904545279beb684b7466d12efb.prototype.init = function(type, str, x, y, value) {
  /** @type {!Object} */
  this.v370126b0b3ae6c2dc05c50b6c946edcc = type;
  /** @type {number} */
  this.vaa7fa74768cf893d9263fd66a88a9a65 = str;
  /** @type {number} */
  this.v3e7de18457031a29b1344a76a91b774d = x;
  /** @type {number} */
  this.date = y;
  if (!_.isUndefined(value)) {
    /** @type {number} */
    this.item = value;
  }
}, v287bd79df0f40555a0f28596c201c732.prototype = Object.create(Object.prototype), v287bd79df0f40555a0f28596c201c732.prototype.constructor = v287bd79df0f40555a0f28596c201c732, v287bd79df0f40555a0f28596c201c732.prototype.init = function(value) {
  /** @type {!Object} */
  this.v6fedaf02af89d68d2522f18c514ee322 = value;
}, v287bd79df0f40555a0f28596c201c732.prototype.v1f77925380d4fb856b06e91b0232a18a = function(c, t, a, b) {
  var type = this.v6fedaf02af89d68d2522f18c514ee322[c.v6c665ba029eb89c335acd4951384045b + "|" + a.v6c665ba029eb89c335acd4951384045b];
  if (type != undefined) {
    /** @type {number} */
    var moduleId = this.vc0391634c656ce3563f26a9909ec6cad.length - 1;
    for (; moduleId >= 0; moduleId--) {
      var me = this.vc0391634c656ce3563f26a9909ec6cad[moduleId];
      if ((type == "M" && b.vd9653f0b1d7bbb4e1f6dca7e9cdec4c4(me.date) || type == "W" && b.vab058fc378b97b670a402982ef18a843(me.date, A.vfe1c4eaec8ec40f848f9772196c532d3().settings.StartDate) || type == "D" && b.v976c06c7cb040fb18b380e5c8a8bb6c4(me.date)) && me.v370126b0b3ae6c2dc05c50b6c946edcc.v6c665ba029eb89c335acd4951384045b == c.v6c665ba029eb89c335acd4951384045b && me.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b == a.v6c665ba029eb89c335acd4951384045b) {
        return me.vaa7fa74768cf893d9263fd66a88a9a65 += t, me.date = b, me;
      }
    }
  }
  var e = new v3e75d4904545279beb684b7466d12efb;
  return e.init(c, t, a, b), this.vc0391634c656ce3563f26a9909ec6cad.vc2b55451d6b5a973b456d3ad090abf8d(e), e;
}, v287bd79df0f40555a0f28596c201c732.prototype.v8735d0dd3b317dd9ddf0fbda2f743816 = function(conf, value, text, i, nr) {
  if (i == undefined) {
    /** @type {boolean} */
    i = false;
  }
  if (nr == undefined) {
    /** @type {boolean} */
    nr = false;
  }
  var commitsToMake = _.filter(this.vc0391634c656ce3563f26a9909ec6cad, function(b) {
    return b.v370126b0b3ae6c2dc05c50b6c946edcc.v6c665ba029eb89c335acd4951384045b == conf.v6c665ba029eb89c335acd4951384045b || b.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b == conf.v6c665ba029eb89c335acd4951384045b;
  }, this);
  if (i) {
    commitsToMake = _.filter(commitsToMake, function(options) {
      return !(options.v74a93493b9151b8f51f20468237eafbd && options.date.getFullYear() == text && options.date.getMonth() == value);
    }, this);
  }
  /** @type {number} */
  var b = 0;
  return _.each(commitsToMake, function(self) {
    if (self.date.getFullYear() > text || self.date.getFullYear() == text && self.date.getMonth() > value) {
      return;
    }
    if (self.date.getFullYear() == text && self.date.getMonth() == value && self.v5ee12f36cfd91f717ceee9d6095b7034 && !(nr && conf.v6c665ba029eb89c335acd4951384045b == "Owner's Capital")) {
      return;
    }
    /** @type {number} */
    var wt = 1;
    if (self.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b == conf.v6c665ba029eb89c335acd4951384045b) {
      /** @type {number} */
      wt = -1;
    }
    b = b + self.vaa7fa74768cf893d9263fd66a88a9a65 * conf.vc9ee3859aa7402d984a69b778427f0d3 * wt;
  }, this), b = U.round(b, 2), b;
}, v287bd79df0f40555a0f28596c201c732.prototype.v5c5a94c066c1b08fb6d7e81d953ff109 = function(cover_photo_to_crop, coords, data, left) {
  /** @type {number} */
  var s = 0;
  switch(coords) {
    case "Net Income":
      var r = cover_photo_to_crop.v6ca29e8755cb59ca16c66608647c9bcb();
      var q = _.filter(r, function(a) {
        return a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a;
      });
      var max = _.filter(r, function(a) {
        return a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620;
      });
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var c = 0;
      i = _.reduce(q, function(written, fd) {
        return written + this.v8735d0dd3b317dd9ddf0fbda2f743816(fd, data, left);
      }, 0, this);
      c = _.reduce(max, function(written, fd) {
        return written + this.v8735d0dd3b317dd9ddf0fbda2f743816(fd, data, left);
      }, 0, this);
      /** @type {number} */
      s = i - c;
      break;
    case "Assets":
      r = cover_photo_to_crop.v6ca29e8755cb59ca16c66608647c9bcb();
      r = _.filter(r, function(a) {
        return a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vedf6d2b0c294afca439f45252040ce06;
      });
      s = _.reduce(r, function(written, fd) {
        return written + this.v8735d0dd3b317dd9ddf0fbda2f743816(fd, data, left);
      }, 0, this);
      break;
    case "Liabilities":
      r = cover_photo_to_crop.v6ca29e8755cb59ca16c66608647c9bcb();
      r = _.filter(r, function(a) {
        return a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770;
      });
      s = _.reduce(r, function(written, fd) {
        return written + this.v8735d0dd3b317dd9ddf0fbda2f743816(fd, data, left, false, true);
      }, 0, this);
      break;
    case "Return on Sales":
      r = cover_photo_to_crop.v6ca29e8755cb59ca16c66608647c9bcb();
      q = _.filter(r, function(a) {
        return a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a;
      });
      max = _.filter(r, function(a) {
        return a.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620;
      });
      /** @type {number} */
      i = 0;
      /** @type {number} */
      c = 0;
      i = _.reduce(q, function(written, fd) {
        return written + this.v8735d0dd3b317dd9ddf0fbda2f743816(fd, data, left);
      }, 0, this);
      c = _.reduce(max, function(written, fd) {
        return written + this.v8735d0dd3b317dd9ddf0fbda2f743816(fd, data, left);
      }, 0, this);
      /** @type {number} */
      s = (i - c) / Math.max(1, i);
      break;
  }
  return s;
}, v287bd79df0f40555a0f28596c201c732.v3aa9a2fdfd3e599b617253968035247a = function(p, m, val, div) {
  /** @type {number} */
  var scale = 4;
  /** @type {number} */
  var width = 90;
  /** @type {number} */
  var value = 50;
  /** @type {number} */
  var height = 8;
  /** @type {string} */
  var original_color = "rgba(60,92,90, 0.7)";
  /** @type {number} */
  var keyboardHeight = 10;
  var j = new v05d11f0f2e0c1a6f360c8611189e4901;
  var currAvailLayers = vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.clone();
  var found = _.find(currAvailLayers, function(a) {
    return a instanceof frmAcctgJournal;
  });
  if (!_.isUndefined(found) && A.v87b8393064cbfa8977b32cec36a69d86().vdb06d27d9f084ca2d555cf8cc6954346("animateTransactions")) {
    if (val.v3e7de18457031a29b1344a76a91b774d.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a) {
      /** @type {string} */
      original_color = "rgba(6,92,39, 0.7)";
    }
    if (val.v370126b0b3ae6c2dc05c50b6c946edcc.v1d0a4918d029323bed1e1c972ce216ef == v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620) {
      /** @type {string} */
      original_color = "rgba(142,16,16, 0.7)";
    }
    var rowWithMoreColumns = found.selector.parent();
    var anchorBoundingBoxViewport = rowWithMoreColumns.offset();
    var point = {
      x : anchorBoundingBoxViewport.left + 200,
      y : anchorBoundingBoxViewport.top + 220
    };
    var element = $("<div class='animatedTransaction' style='position:absolute; border: 2px solid #999999;'></div>;");
    element.css("width", width + "px");
    element.css("height", value + "px");
    element.css("left", p.x + "px");
    element.css("top", p.y + "px");
    element.css("padding", "10px");
    element.css("font-size", height + "px");
    element.css("background-color", original_color);
    element.css("border-radius", keyboardHeight + "px");
    element.css("color", "white");
    element.css("z-index", 999999);
    /** @type {boolean} */
    val.v4cb348255eb0eebcf6469486e371a5e8 = true;
    element[0].vb8d06c6b54b8778b81a2e5e73245da15 = val;
    element.html(U.vc0e6c88f8413e92781b652ae2786391a("<p><b>{0}</b></p><p>Amount: {1}</p><p>Debit: {2}</p><p>Credit: {3}</p>", [div, U.v0ea35f447d08124fa72648dd7f4ff64c(val.vaa7fa74768cf893d9263fd66a88a9a65), val.v370126b0b3ae6c2dc05c50b6c946edcc.v6c665ba029eb89c335acd4951384045b, val.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b]));
    element.appendTo($("body"));
    element.animate({
      left : p.x + (point.x - p.x) * j.va7f5b666e153a7fd316b95fa2a8560ac() * .6 + .2 + "px",
      top : p.y + (point.y - p.y) * j.va7f5b666e153a7fd316b95fa2a8560ac() * .6 + .2 + "px",
      fontSize : height * scale + "px",
      width : width * scale + "px",
      height : value * scale + "px"
    }, 3e3);
    element.animate({
      left : point.x + "px",
      top : point.y + "px",
      fontSize : height + "px",
      width : width + "px",
      height : value + "px"
    }, 3e3, "swing", function() {
      /** @type {boolean} */
      this.vb8d06c6b54b8778b81a2e5e73245da15.v4cb348255eb0eebcf6469486e371a5e8 = false;
      $(this).remove();
      var currAvailLayers = vc41c7fe61eaff586a43ca6fdecb046f3.v69f95556c951ff3929357b6427c37a61.clone();
      var gaugeObject = _.find(currAvailLayers, function(t) {
        return t instanceof m;
      });
      if (!_.isUndefined(gaugeObject)) {
        gaugeObject.refresh(true);
      }
    });
  }
}, v287bd79df0f40555a0f28596c201c732.prototype.vd7dd26a9c9fe3d90249572431919be98 = function(proteinId1, proteinId2) {
  var value = _.filter(this.vc0391634c656ce3563f26a9909ec6cad, function(a) {
    return a.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b == "Sales";
  });
  var result = {};
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.vb5e0ad8985030469657237cd8289bfda.length; i++) {
    var course = AppConstants.vb5e0ad8985030469657237cd8289bfda[i];
    result[course.vda3ec027644dda8c45f3e9ac5c2197d9] = {
      name : course.vda3ec027644dda8c45f3e9ac5c2197d9,
      v9a9fe9a4f9d39e0a6e300b043432570c : 0,
      v7f2b58291f4e1ff7cc5d90949f977788 : 0
    };
  }
  return _.each(value, function(s) {
    if (s.date.getFullYear() == proteinId2 && s.date.getMonth() == proteinId1) {
      result[s.item].v9a9fe9a4f9d39e0a6e300b043432570c++;
      result[s.item].v7f2b58291f4e1ff7cc5d90949f977788 += s.vaa7fa74768cf893d9263fd66a88a9a65;
    }
  }, this), result;
}, va17f4cc90d553e88968113a82a682309.prototype = Object.create(Object.prototype), va17f4cc90d553e88968113a82a682309.prototype.constructor = va17f4cc90d553e88968113a82a682309, va17f4cc90d553e88968113a82a682309.prototype.v110e5f5497ed6b8892fa1a69e53238fd = function(d) {
  /** @type {string} */
  var logs = "\t";
  /** @type {string} */
  var result = "";
  result = result + ("!TRNS" + logs + "TRNSTYPE" + logs + "DATE" + logs + "ACCNT" + logs + "AMOUNT" + logs + "NAME" + "\n");
  result = result + ("!SPL" + logs + "TRNSTYPE" + logs + "DATE" + logs + "ACCNT" + logs + "AMOUNT" + logs + "INVITEM" + logs + "NAME" + "\n");
  result = result + "!ENDTRNS\n";
  var value = _.filter(d, function(a) {
    return !a.v5ee12f36cfd91f717ceee9d6095b7034;
  });
  return _.each(value, function(a) {
    if (a.veca0e5a1ed7920fa38927125079533f4 != undefined && a.veca0e5a1ed7920fa38927125079533f4.substring(0, 1) == "I") {
      if (a.v370126b0b3ae6c2dc05c50b6c946edcc.v6c665ba029eb89c335acd4951384045b == "Cash") {
        result = result + this.vb6d8e24f1ce24c88113f7735369dcda9("CASH SALE", a);
      } else {
        result = result + this.vb6d8e24f1ce24c88113f7735369dcda9("INVOICE", a);
      }
    } else {
      if (a.veca0e5a1ed7920fa38927125079533f4 != undefined && a.veca0e5a1ed7920fa38927125079533f4.substring(0, 1) == "C") {
        result = result + this.vb6d8e24f1ce24c88113f7735369dcda9("CHECK", a, true);
      } else {
        if (a.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b == "Accounts Receivable") {
          result = result + this.vb6d8e24f1ce24c88113f7735369dcda9("PAYMENT", a);
        } else {
          if (a.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b == "Accounts Payable") {
            result = result + this.vb6d8e24f1ce24c88113f7735369dcda9("BILL", a, true);
          } else {
            result = result + this.vb6d8e24f1ce24c88113f7735369dcda9("GENERAL JOURNAL", a);
          }
        }
      }
    }
  }, this), result;
}, va17f4cc90d553e88968113a82a682309.prototype.vb6d8e24f1ce24c88113f7735369dcda9 = function(data, params, non_state) {
  /** @type {string} */
  var user = "\t";
  /** @type {string} */
  var s = "";
  /** @type {string} */
  var url = user;
  if (!_.isUndefined(params.item)) {
    /** @type {string} */
    url = url + params.item;
  }
  /** @type {string} */
  var content = user;
  return _.isUndefined(params.name) || (content = content + params.name), non_state ? (s = s + ("TRNS" + user + data + user + params.date.format("MM/dd/yy") + user + params.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b + user + -params.vaa7fa74768cf893d9263fd66a88a9a65 + content + "\n"), s = s + ("SPL" + user + data + user + params.date.format("MM/dd/yy") + user + params.v370126b0b3ae6c2dc05c50b6c946edcc.v6c665ba029eb89c335acd4951384045b + user + params.vaa7fa74768cf893d9263fd66a88a9a65 +
  url + content + "\n")) : (s = s + ("TRNS" + user + data + user + params.date.format("MM/dd/yy") + user + params.v370126b0b3ae6c2dc05c50b6c946edcc.v6c665ba029eb89c335acd4951384045b + user + params.vaa7fa74768cf893d9263fd66a88a9a65 + content + "\n"), s = s + ("SPL" + user + data + user + params.date.format("MM/dd/yy") + user + params.v3e7de18457031a29b1344a76a91b774d.v6c665ba029eb89c335acd4951384045b + user + -params.vaa7fa74768cf893d9263fd66a88a9a65 + url + content + "\n")), s = s + "ENDTRNS\n",
  s;
}, va17f4cc90d553e88968113a82a682309.prototype.va1e2f1ae78dcae15ecf3dc5c679538b4 = function(schema) {
  /** @type {string} */
  var name = "\t";
  /** @type {string} */
  var fields = "";
  return fields = fields + ("!ACCNT" + name + "NAME" + name + "ACCNTTYPE" + name + "ACCNUM" + "\n"), _.each(schema, function(error) {
    fields = fields + ("ACCNT" + name + error.v6c665ba029eb89c335acd4951384045b + name + error.va8275386959d2bd004baab6f4cc64290 + name + error.number + "\n");
  }, this), fields;
}, va17f4cc90d553e88968113a82a682309.prototype.v096ce1755d9f72bf74eb919481a9a5e4 = function(schema) {
  /** @type {string} */
  var databases = "\t";
  /** @type {string} */
  var fields = "";
  return fields = fields + ("!INVITEM" + databases + "NAME" + databases + "INVITEMTYPE" + databases + "ACCNT" + "\n"), _.each(schema, function(options) {
    fields = fields + ("INVITEM" + databases + options.vda3ec027644dda8c45f3e9ac5c2197d9 + databases + "SERV" + databases + "Sales" + "\n");
  }, this), fields;
}, va17f4cc90d553e88968113a82a682309.prototype.v7d96670e5c0627b0dc1f114b003af5b2 = function(schema) {
  /** @type {string} */
  var logs = "\t";
  /** @type {string} */
  var fields = "";
  return fields = fields + ("!CUST" + logs + "NAME" + "\n"), _.each(schema, function(NAME) {
    fields = fields + ("CUST" + logs + NAME + "\n");
  }, this), fields;
}, va17f4cc90d553e88968113a82a682309.prototype.vdb69fddffdf1d5668f39ece5819d3940 = function(schema) {
  /** @type {string} */
  var logs = "\t";
  /** @type {string} */
  var fields = "";
  return fields = fields + ("!VEND" + logs + "NAME" + "\n"), _.each(schema, function(NAME) {
    fields = fields + ("VEND" + logs + NAME + "\n");
  }, this), fields;
}, ctrlTransferCash.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), ctrlTransferCash.prototype.constructor = ctrlTransferCash, ctrlTransferCash.prototype.init = function(value) {
  /** @type {!Object} */
  this.v453a55e59fb4133da0172c66e3dd0483 = value;
}, ctrlTransferCash.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v9e34ce007a9c8b09e05b0c2c83a87486.change(_.bind(this.update, this));
  this.v618be4aabc22357aa49cf42b45fa26de.change(_.bind(this.update, this));
  this.v6bfb8f3c6bbc2cf36f1734a337472c28.val(U.v0ea35f447d08124fa72648dd7f4ff64c(0));
  _.each(this.v453a55e59fb4133da0172c66e3dd0483, function(a) {
    var b = a.v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Cash");
    if (b > 0) {
      this.v24ef354e1e54200d10606158577a3a99(this.v9e34ce007a9c8b09e05b0c2c83a87486, a.name);
    }
    this.v24ef354e1e54200d10606158577a3a99(this.v618be4aabc22357aa49cf42b45fa26de, a.name);
  }, this);
  this.vb91883bc74eb846dcb5876098c22d085(this.v6bfb8f3c6bbc2cf36f1734a337472c28, {
    placement : "right",
    currency : true,
    min : 1,
    max : this.vb8cdc969d6a3db6e01a7151a53bf994c
  });
  this.vf85a90eb80b00d96e1ed058740e877f8 = this.v74fe5a63b5e6f91cdc0d601e282413d6().v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Cash");
  this.vc6b04fbd6f6093abb7168c5b3691f369(this.v6bfb8f3c6bbc2cf36f1734a337472c28, "max", this.vf85a90eb80b00d96e1ed058740e877f8);
  this.v6bfb8f3c6bbc2cf36f1734a337472c28.change(_.bind(function() {
    var d = this.v54c2849df4d1306e7988f0cb953901d1(this.v6bfb8f3c6bbc2cf36f1734a337472c28);
    this.v6bfb8f3c6bbc2cf36f1734a337472c28.val(U.v0ea35f447d08124fa72648dd7f4ff64c(d));
  }, this));
  this.update();
}, ctrlTransferCash.prototype.update = function() {
  var a = this.v74fe5a63b5e6f91cdc0d601e282413d6();
  if (this.v8185b65f4676bd6ab538f64b515a65bd() == a) {
    var b = this.v864febdafb7a28e75280a3306761e469(this.v618be4aabc22357aa49cf42b45fa26de);
    if (b < this.v453a55e59fb4133da0172c66e3dd0483.length - 1) {
      this.v00a94e177afe39f3cefb7b639e554084(this.v618be4aabc22357aa49cf42b45fa26de, b + 1);
    } else {
      this.v00a94e177afe39f3cefb7b639e554084(this.v618be4aabc22357aa49cf42b45fa26de, b - 1);
    }
  }
  this.v71bf9fdc91e3bf2cee0f1a02a0c02cfd.html(U.v0ea35f447d08124fa72648dd7f4ff64c(this.v8185b65f4676bd6ab538f64b515a65bd().v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Cash")));
  if (this.vf85a90eb80b00d96e1ed058740e877f8 != a.v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Cash")) {
    this.vf85a90eb80b00d96e1ed058740e877f8 = a.v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Cash");
    this.vc6b04fbd6f6093abb7168c5b3691f369(this.v6bfb8f3c6bbc2cf36f1734a337472c28, "max", this.vf85a90eb80b00d96e1ed058740e877f8);
    this.vb05524ee3429ec38953d9eb4f3f2f363();
  }
  this.v332c901e3cf257670a86f910027c0ada.html(U.v0ea35f447d08124fa72648dd7f4ff64c(this.vf85a90eb80b00d96e1ed058740e877f8));
}, ctrlTransferCash.prototype.v43140d4d133873a1aa108ccc6e4b60de = function(c) {
  var a = this.vc22528f6f67c96a40e226f7422a34b41(c);
  var b = _.find(this.v453a55e59fb4133da0172c66e3dd0483, function(fn) {
    return a == fn.name;
  });
  return b;
}, ctrlTransferCash.prototype.v74fe5a63b5e6f91cdc0d601e282413d6 = function() {
  return this.v43140d4d133873a1aa108ccc6e4b60de(this.v9e34ce007a9c8b09e05b0c2c83a87486);
}, ctrlTransferCash.prototype.v8185b65f4676bd6ab538f64b515a65bd = function() {
  return this.v43140d4d133873a1aa108ccc6e4b60de(this.v618be4aabc22357aa49cf42b45fa26de);
}, ctrlTransferCash.prototype.vb58534efc4c4429c39c2ef2b1b72d55e = function() {
  return this.v54c2849df4d1306e7988f0cb953901d1(this.v6bfb8f3c6bbc2cf36f1734a337472c28);
}, ctrlPurchaseOrder.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), ctrlPurchaseOrder.prototype.constructor = ctrlPurchaseOrder, ctrlPurchaseOrder.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.refresh();
}, ctrlPurchaseOrder.prototype.refresh = function() {
  this.v0926aaaea52eb92d099ff645574b8f57.empty();
  _.each(this.vd823a7d1f0a05e4b3b10eeb58234c605, function(r) {
    var a = $("<th>");
    a.html(r.name);
    a.insertAfter(this.vc447ff7913f556064a56ce417afd2508);
  }, this);
  _.each(this.items, function(c) {
    var a = new ctrlPurchaseOrderc1;
    a.init(c, this.v7229872c64a396c6678aacb6998d3ad3, this.vd823a7d1f0a05e4b3b10eeb58234c605);
    a.v4cfcb53978fd83231c75b36f997e0b9e(this.v0926aaaea52eb92d099ff645574b8f57);
  }, this);
}, ctrlPurchaseOrder.prototype.init = function(v, n, a) {
  /** @type {!Object} */
  this.items = v;
  this.v7229872c64a396c6678aacb6998d3ad3;
  /** @type {number} */
  this.vd823a7d1f0a05e4b3b10eeb58234c605 = a;
}, ctrlPurchaseOrderc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), ctrlPurchaseOrderc1.prototype.constructor = ctrlPurchaseOrderc1, ctrlPurchaseOrderc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v515f83f8408c9531e8e1c6c181c73821.text(this.item.name);
  this.v962ed5eb3cd4cc1299f35e7feb4b9660.html(U.v0ea35f447d08124fa72648dd7f4ff64c(this.item.v7c47592e85f6d272b53c78275c25221b, 2));
  _.each(_.keys(this.vd823a7d1f0a05e4b3b10eeb58234c605), function(b) {
    var $suggest = $("<td>");
    $suggest.html(U.v790f397a5458e475c4d492eae29578af(A.vfe1c4eaec8ec40f848f9772196c532d3().random.next(90)));
    $suggest.insertAfter(this.v8021e5c48fd9cfc5eec9dedeba998f5c);
  }, this);
  this.v25e579981e60c763d581da0518aa8993.val(0);
  this.vb91883bc74eb846dcb5876098c22d085(this.v25e579981e60c763d581da0518aa8993, {
    placement : "left",
    currency : true,
    min : 0,
    max : this.v7229872c64a396c6678aacb6998d3ad3
  });
}, ctrlPurchaseOrderc1.prototype.init = function(a, c, d) {
  /** @type {!Object} */
  this.item = a;
  /** @type {number} */
  this.v7229872c64a396c6678aacb6998d3ad3 = c;
  /** @type {number} */
  this.vd823a7d1f0a05e4b3b10eeb58234c605 = d;
}, frmTransferCash.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmTransferCash.prototype.constructor = frmTransferCash, frmTransferCash.prototype.init = function(value) {
  /** @type {!Object} */
  this.v453a55e59fb4133da0172c66e3dd0483 = value;
}, frmTransferCash.prototype.v25858949839469d7389869d7422938d5 = function() {
  if (_.isUndefined(this.v453a55e59fb4133da0172c66e3dd0483)) {
    this.v453a55e59fb4133da0172c66e3dd0483 = A.vfe1c4eaec8ec40f848f9772196c532d3().v453a55e59fb4133da0172c66e3dd0483;
  }
  this.v52254b805ab35af376dc3e7ab2a17c01 = new ctrlTransferCash;
  this.v52254b805ab35af376dc3e7ab2a17c01.init(this.v453a55e59fb4133da0172c66e3dd0483);
  this.v52254b805ab35af376dc3e7ab2a17c01.v4cfcb53978fd83231c75b36f997e0b9e(this.v7d5b811d940ae3db6861f4de20682656);
}, frmTransferCash.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmTransferCash.prototype.vc7d4629710913e269b772fd6c95e555c = function() {
  if (!this.v52254b805ab35af376dc3e7ab2a17c01.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2) {
    return;
  }
  var allBox = this.v52254b805ab35af376dc3e7ab2a17c01.v74fe5a63b5e6f91cdc0d601e282413d6();
  var engineDiscovery = this.v52254b805ab35af376dc3e7ab2a17c01.v8185b65f4676bd6ab538f64b515a65bd();
  var a = this.v52254b805ab35af376dc3e7ab2a17c01.vb58534efc4c4429c39c2ef2b1b72d55e();
  var c = allBox.v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Cash");
  if (c < a) {
    a = c;
  }
  allBox.v4aa4655e25af5596003edec8b91c0099.v01859ba9e7439f2a5b7f5a04bbdcae01("Paid-in Capital", a, "Cash");
  engineDiscovery.v4aa4655e25af5596003edec8b91c0099.v01859ba9e7439f2a5b7f5a04bbdcae01("Cash", a, "Paid-in Capital");
  engineDiscovery.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Cash transferred into business:"), [["Amount", U.v0ea35f447d08124fa72648dd7f4ff64c(a, 2)], ["From", allBox.name]]);
  allBox.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Cash transferred from business:"), [["Amount", U.v0ea35f447d08124fa72648dd7f4ff64c(a, 2)], ["To", engineDiscovery.name]]);
  if (!A.v87b8393064cbfa8977b32cec36a69d86().running) {
    A.v87b8393064cbfa8977b32cec36a69d86().vbee376c0bae5a5bb92840e65cd0a702e();
  }
  if (a == this.v52254b805ab35af376dc3e7ab2a17c01.vb58534efc4c4429c39c2ef2b1b72d55e()) {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("You have transferred {0} from {1} to {2}.", [U.v0ea35f447d08124fa72648dd7f4ff64c(a), allBox.name, engineDiscovery.name]));
  } else {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("The requested transfer amount was greater than the current cash balance at {0}.  You have transferred the entire cash balance of {1} from {2} to {3}.", [allBox.name, U.v0ea35f447d08124fa72648dd7f4ff64c(a), allBox.name, engineDiscovery.name]));
  }
  this.close();
}, frmMarketShare.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmMarketShare.prototype.constructor = frmMarketShare, frmMarketShare.vef25c93e9620c7a879c4cf12a9655c1b = 5, frmMarketShare.prototype.init = function(value) {
}, frmMarketShare.prototype.v25858949839469d7389869d7422938d5 = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().ved3fea8761b9737532a8785f9afb4fa2(this.v819850ec8ffecac67030711398ce6ab3);
  this.update();
}, frmMarketShare.prototype.update = function() {
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().vc210660e70f1d3e083f43db1eacb6c59();
  if (a.length > 0) {
    var f = _.max(a, "lastWeek");
    var i = f.lastWeek;
    /** @type {number} */
    var iii = Math.max(0, i - f.data.length + 1);
    /** @type {!Array} */
    var chart_data = [];
    /** @type {number} */
    var widestInView = 0;
    /** @type {number} */
    var starMaxMin = 0;
    /** @type {number} */
    var j = 0;
    for (; j < a.length; j++) {
      /** @type {!Array} */
      var d3MapTile = [];
      /** @type {number} */
      var ij = iii;
      for (; ij <= i; ij++) {
        if (ij <= a[j].lastWeek) {
          /** @type {number} */
          var EDGE_AUX = ij - (a[j].lastWeek - a[j].data.length + 1);
          var mapHeight = a[j].data[EDGE_AUX];
          var dEndDateTime = A.vfe1c4eaec8ec40f848f9772196c532d3().settings.StartDate.addDays(7 * ij);
          d3MapTile.vc2b55451d6b5a973b456d3ad090abf8d([dEndDateTime.getTime(), mapHeight]);
          /** @type {number} */
          widestInView = Math.max(widestInView, mapHeight);
          /** @type {number} */
          starMaxMin = Math.max(starMaxMin, dEndDateTime.getTime());
        }
      }
      chart_data.vc2b55451d6b5a973b456d3ad090abf8d({
        label : a[j].v178bede4cd0aee6d9d8fb61612b3705e,
        data : d3MapTile
      });
    }
    var options = {
      xaxis : {
        show : true,
        mode : "time",
        timeformat : "%m/%d",
        color : "#FFFFFF",
        max : starMaxMin < A.vfe1c4eaec8ec40f848f9772196c532d3().settings.StartDate.addDays(30).getTime() ? A.vfe1c4eaec8ec40f848f9772196c532d3().settings.StartDate.addDays(30).getTime() : null,
        minTickSize : [7, "day"],
        font : {
          size : 14,
          lineHeight : 13,
          family : "Arial,sans-serif",
          color : "#222222"
        }
      },
      yaxis : {
        max : widestInView < 100 ? 100 : null,
        min : 0,
        show : true,
        font : {
          size : 14,
          lineHeight : 13,
          family : "Arial,sans-serif",
          color : "#222222"
        }
      },
      legend : {
        labelBoxBorderColor : "#FFFFFF",
        backgroundOpacity : .2,
        container : this.v040ff0a009b0e5ddd5bdc627a83fe834
      },
      series : {
        lines : {
          lineWidth : this.veb8eca67e4e2d938b447937e72dffd69 == 0 ? 5 : 2
        }
      },
      colors : this.veb8eca67e4e2d938b447937e72dffd69 == 0 ? ["#0080CC"] : ["#0080CC", "#8000CC", "#00CC80", "#CC0080", "#BBBB00"]
    };
    $.plot(this.v4499134024cabfd0d7f0c864c98e995d, chart_data, options);
  }
}, frmMarketShare.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmMarketShare.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v2ab8dbcf97e88592a0784f7bdbfaaa2e(this.v819850ec8ffecac67030711398ce6ab3);
}, vbf169736afe267c39b7e3f22954055c8.prototype = Object.create(Object.prototype), vbf169736afe267c39b7e3f22954055c8.prototype.constructor = vbf169736afe267c39b7e3f22954055c8, vbf169736afe267c39b7e3f22954055c8.prototype.v867852f67dd46e2cbcba2a3046118934 = function(a, b) {
  if (A.v87b8393064cbfa8977b32cec36a69d86().v2fc3f8648d5e698da277680e5470405a) {
    var e = new v340544280ff54fcd6b5dd4628723e666;
    e.init(a, b);
    e.timeStamp = v13260862a5e36823cb5546b59af48c71.instance.state.now;
    /** @type {!Date} */
    e.vaa7699d58c70513fc4b65f7e37e0eefb = new Date;
    this.entries.push(e);
  }
}, vbf169736afe267c39b7e3f22954055c8.prototype.v7057de3ad1a960f1eb89f983acd8a45f = function() {
  return this.entries.length;
}, vbf169736afe267c39b7e3f22954055c8.prototype.vfcaa9369f69af3cc016fa918c163888a = function() {
  /** @type {!Array} */
  this.entries = [];
}, v340544280ff54fcd6b5dd4628723e666.prototype = Object.create(Object.prototype), v340544280ff54fcd6b5dd4628723e666.prototype.constructor = v340544280ff54fcd6b5dd4628723e666, v340544280ff54fcd6b5dd4628723e666.prototype.init = function(a, b) {
  /** @type {!Object} */
  this.v66cfa4d99c002b7293bd413ecd87ab95 = a;
  /** @type {number} */
  this.vdad1d6541c10920dcb28a73c576525fe = b;
}, vdec400fbe559b9dfe7818a889838150e.prototype = Object.create(Object.prototype), vdec400fbe559b9dfe7818a889838150e.prototype.constructor = vdec400fbe559b9dfe7818a889838150e, vdec400fbe559b9dfe7818a889838150e.prototype.vc5ddf3be28c0516f0c5d2c2a147d8838 = function(v_points) {
  /** @type {number} */
  this.points = v_points;
  /** @type {number} */
  var i = 0;
  for (; i < this.points.length; i++) {
    /** @type {number} */
    var j = 0;
    for (; j < this.points.length; j++) {
      if (i != j && this.points[i].x == this.points[j].x) {
        throw new Error("Duplicate x values in response curve.");
      }
    }
  }
}, vdec400fbe559b9dfe7818a889838150e.prototype.v7ed81754666bc307b582b08b95022033 = function(d, i) {
  /** @type {!Array} */
  this.points = [];
  /** @type {number} */
  var n = 0;
  _.each(d, function(S) {
    return n = n + S[i];
  });
  /** @type {number} */
  var w = 0;
  /** @type {number} */
  var x = 0;
  for (; x < d.length; x++) {
    var a = d[x];
    /** @type {number} */
    w = w + a[i] / n;
    var p = new Point(w, x);
    this.points.vc2b55451d6b5a973b456d3ad090abf8d(p);
  }
}, vdec400fbe559b9dfe7818a889838150e.prototype.v780331ea8c7434cc0df20b8af95b2263 = function(hierarchies) {
  /** @type {!Array} */
  this.points = [];
  /** @type {number} */
  var n = 0;
  _.each(hierarchies, function(p) {
    return n = n + p;
  });
  /** @type {number} */
  var w = 0;
  /** @type {number} */
  var i = 0;
  for (; i < hierarchies.length; i++) {
    var h = hierarchies[i];
    /** @type {number} */
    w = w + h / n;
    var pt = new Point(w, i);
    this.points.vc2b55451d6b5a973b456d3ad090abf8d(pt);
  }
}, vdec400fbe559b9dfe7818a889838150e.prototype.v6215d55dd21238326b318d42e272732b = function(offset, end) {
  /** @type {number} */
  var start = Number.NEGATIVE_INFINITY;
  /** @type {number} */
  var i = 0;
  for (; i < this.points.length; i++) {
    if (offset < this.points[i].x) {
      if (i == 0) {
        start = this.points[i].y;
      } else {
        start = this.points[i - 1].y + (this.points[i].y - this.points[i - 1].y) * (offset - this.points[i - 1].x) / (this.points[i].x - this.points[i - 1].x);
      }
      break;
    }
  }
  return Number.NEGATIVE_INFINITY == start && (start = this.points[this.points.length - 1].y), end != undefined ? start + (end.va7f5b666e153a7fd316b95fa2a8560ac() - .5) * this.vd959fdaf834c1de9ce3910939516017a : start;
}, vdec400fbe559b9dfe7818a889838150e.prototype.va49641b03aa14270db9006aa698efbac = function(docX) {
  /** @type {number} */
  var i = 0;
  for (; i < this.points.length; i++) {
    if (docX < this.points[i].x) {
      return this.points[i].y;
    }
  }
  return this.points[this.points.length - 1];
}, vdec400fbe559b9dfe7818a889838150e.prototype.v88f655506ccb652674d3c74257ec9725 = function() {
  /** @type {number} */
  var val = 0;
  /** @type {number} */
  var i = 1;
  for (; i < this.points.length; i++) {
    /** @type {number} */
    val = val + (this.points[i].x - this.points[i - 1].x) * this.points[i].y;
  }
  return val;
}, v731bcbfae6eaacaf668b56619627de88.prototype = Object.create(Object.prototype), v731bcbfae6eaacaf668b56619627de88.prototype.constructor = v731bcbfae6eaacaf668b56619627de88, v731bcbfae6eaacaf668b56619627de88.prototype.init = function(value) {
  if (value == undefined) {
    /** @type {number} */
    value = 365;
  }
  /** @type {!Object} */
  this.v79a8d4e6312fe4f7ee92c42d1413a6d1 = value;
}, v731bcbfae6eaacaf668b56619627de88.prototype.v0215cdded808aad58768e3f1d8e46a76 = function(num) {
  return A.vfe1c4eaec8ec40f848f9772196c532d3().v58543a96b2467ef80a2fd13b2b2384a3(num);
}, v731bcbfae6eaacaf668b56619627de88.prototype.v1db074a964f257469555e0d475ba5420 = function() {
  var d = v13260862a5e36823cb5546b59af48c71.instance.state.now;
  if (this.stack.length <= 0 || KMDate.v32706bdbf9f9581e665e9a40d255afc8(d, this.stack[0].date) > 1 || d.getDate() > this.stack[0].date.getDate()) {
    this.stack.unshift({
      date : d,
      va2ef96a7884f43d711d3423757d33879 : {}
    });
  }
  var change = this.stack[0];
  for (; true;) {
    var item = this.stack[this.stack.length - 1];
    /** @type {number} */
    var d = Math.ceil(KMDate.v32706bdbf9f9581e665e9a40d255afc8(change.date, item.date));
    if (d < this.v79a8d4e6312fe4f7ee92c42d1413a6d1) {
      break;
    }
    this.stack.pop();
  }
  return change;
}, v731bcbfae6eaacaf668b56619627de88.prototype.vd2cdb552d67119666f87496ea61e97b7 = function(color, num) {
  /** @type {string} */
  var i = color + "|" + num;
  var resizedObj = this.v1db074a964f257469555e0d475ba5420();
  if (resizedObj.va2ef96a7884f43d711d3423757d33879[i] == undefined) {
    /** @type {number} */
    resizedObj.va2ef96a7884f43d711d3423757d33879[i] = 1;
  } else {
    resizedObj.va2ef96a7884f43d711d3423757d33879[i] = resizedObj.va2ef96a7884f43d711d3423757d33879[i] + 1;
  }
}, v731bcbfae6eaacaf668b56619627de88.prototype.comment = function(projectId, mergerequestId) {
  if (this.v0215cdded808aad58768e3f1d8e46a76(mergerequestId) == 0) {
    this.vd2cdb552d67119666f87496ea61e97b7(projectId, mergerequestId);
  }
}, v6eea0ee9bcae62902c74a878dee11a86.prototype = Object.create(Object.prototype), v6eea0ee9bcae62902c74a878dee11a86.prototype.constructor = v6eea0ee9bcae62902c74a878dee11a86, v6eea0ee9bcae62902c74a878dee11a86.v48af8d03aad6e19f0d3ecf28a4c377af = 0, v6eea0ee9bcae62902c74a878dee11a86.v631511dd3512e1a0f074b6ec587eed89 = 1, v6eea0ee9bcae62902c74a878dee11a86.prototype.init = function(data, template) {
  this.parse(template);
  /** @type {!Object} */
  this.frequency = data;
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.post = function(id, i, base) {
  var s = this.series[id];
  if (!_.isObject(s)) {
    Alert.show("Trying to add data to undefined time series: " + id);
  } else {
    var index = s.values;
    if (_.isObject(index)) {
      index[this.vedf8b63dc39b6c9a12f63869328aecb9(i)] = base + this.getValue(id, i);
    } else {
      Alert.show("Trying to add data to non base-level time series: " + id);
    }
  }
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.getValue = function(index, value, i) {
  var option = this.series[index];
  if (!_.isObject(option)) {
    Alert.show("Invalid series id, " + index + ", passed to TimeSeriesSet.getValue.");
  }
  var data = option.values;
  if (_.isObject(data)) {
    /** @type {number} */
    var c = 0;
    var key = this.vedf8b63dc39b6c9a12f63869328aecb9(value);
    return _.isUndefined(i) ? _.isUndefined(data[key]) || (c = data[key]) : _.each(_.keys(data), function(pos) {
      if (this.v6a301b442aa4cf52f49e4c55d5aa2a18(pos, key, i)) {
        c = c + data[pos];
      }
    }, this), c;
  }
  var value = option.vba36765f218dc28a3727986a2c52d4fe;
  if (_.isObject(value) && value.length > 0) {
    /** @type {number} */
    var result = 0;
    return _.each(value, function(key) {
      result = result + this.getValue(key, value, i);
    }, this), result;
  }
  var cb = option.formula;
  if (!_.isUndefined(cb)) {
    return this.ve438a22f5df945822fb32c7694c2631f(cb, value, i);
  }
  Alert.show("No way to compute value of, " + index + ", passed to TimeSeriesSet.getValue. Check json definition.");
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.v6a301b442aa4cf52f49e4c55d5aa2a18 = function(by, y, pid) {
  switch(pid) {
    case "YTD":
      return by.substring(0, 4) == y.substring(0, 4) && by <= y;
    case "MTD":
      return by.substring(0, 4) == y.substring(0, 4) && by.substring(5, 7) == y.substring(5, 7) && by <= y;
    case "CY":
      return by.substring(0, 4) == y.substring(0, 4);
    case "CM":
      return by.substring(0, 4) == y.substring(0, 4) && by.substring(5, 7) == y.substring(5, 7);
    case "YTDEM":
      return by.substring(0, 4) == y.substring(0, 4) && by.substring(5, 7) <= y.substring(5, 7);
  }
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.vedf8b63dc39b6c9a12f63869328aecb9 = function(a) {
  var default_favicon = a.getMonth();
  switch(this.frequency) {
    case v6eea0ee9bcae62902c74a878dee11a86.v48af8d03aad6e19f0d3ecf28a4c377af:
      return a.getFullYear() + "-" + U.padLeft(default_favicon.toString(), 2, "0");
    case v6eea0ee9bcae62902c74a878dee11a86.v631511dd3512e1a0f074b6ec587eed89:
      var gasEstimates = a.getDate();
      return a.getFullYear() + "-" + U.padLeft(default_favicon.toString(), 2, "0") + "-" + U.padLeft(gasEstimates.toString(), 2, "0");
  }
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.parse = function(obj) {
  _.each(obj, function(s) {
    /** @type {string} */
    this.series[s.id] = s;
  }, this);
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.v268938d6e2326b1287bfd2283a6eea04 = function(index) {
  return this.series[index].name;
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.v4809b7941826b253b04b2f04c41650e1 = function(index) {
  /** @type {boolean} */
  var b = !_.isUndefined(this.series[index].v4809b7941826b253b04b2f04c41650e1) && this.series[index].v4809b7941826b253b04b2f04c41650e1 == 1;
  return b;
}, v6eea0ee9bcae62902c74a878dee11a86.prototype.ve438a22f5df945822fb32c7694c2631f = function(formula$jscomp$0, date$jscomp$2, aggregationMode$jscomp$0) {
  var f$jscomp$112 = formula$jscomp$0.replace(/{/g, 'this.getValue("');
  f$jscomp$112 = f$jscomp$112.replace(/}/g, '",date,aggregationMode)');
  /** @type {*} */
  var val$jscomp$0 = eval(f$jscomp$112);
  return val$jscomp$0;
}, frmJournal.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmJournal.prototype.constructor = frmJournal, frmJournal.prototype.v25858949839469d7389869d7422938d5 = function() {
  /** @type {string} */
  var scrolltable = "";
  /** @type {number} */
  var i = 0;
  for (; i < this.v669ff646b5846079385e704f4920c16e.entries.length; i++) {
    var device = this.v669ff646b5846079385e704f4920c16e.entries[i];
    if (scrolltable = scrolltable + ("<h5>" + device.timeStamp.v3d50f6a38b9e18ec7d6869a9c756a637() + " " + device.timeStamp.vc03d23e2f68882b2997af060948a96d1() + "</h5>"), scrolltable = scrolltable + ("<p>" + device.v66cfa4d99c002b7293bd413ecd87ab95 + "</p>"), device.vdad1d6541c10920dcb28a73c576525fe != undefined) {
      /** @type {number} */
      var i = 0;
      for (; i < device.vdad1d6541c10920dcb28a73c576525fe.length; i++) {
        var oembedView = device.vdad1d6541c10920dcb28a73c576525fe[i];
        /** @type {string} */
        scrolltable = scrolltable + ("<div style='display:inline-block;'>" + oembedView[0] + "</div>");
        /** @type {string} */
        scrolltable = scrolltable + ("<div style='display:inline-block;float:right;'>" + oembedView[1] + "</div><br>");
      }
    }
    /** @type {string} */
    scrolltable = scrolltable + "<hr>";
  }
  this.vb86693e9982398a72ff4c45126a423b3.html(scrolltable);
}, frmJournal.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, vb326bfaafc4ca10d8ed861abc97dbecc.prototype.v4cfcb53978fd83231c75b36f997e0b9e = function() {
  var p = $("<div id='uiSubMenu' class='sub-menu'>");
  var c = $('<p>Living <a href="#" style="float: right; onclick="$(\'#uiSubMenu\').remove();"><i class="icon-remove"></i></a></p>');
  c.appendTo(p);
  var b = $("<ul>");
  li = $("<li class='divider'></li>");
  li.appendTo(b);
  li = $("<li><a href='#'>Test Item</a></li>");
  li.appendTo(b);
  li = $("<li class='divider'></li>");
  li.appendTo(b);
  b.appendTo(p);
  p.css({
    left : "50%",
    top : "50%"
  });
  p.appendTo($("body"));
  p.show();
}, vb326bfaafc4ca10d8ed861abc97dbecc.show = function() {
  var a = new vb326bfaafc4ca10d8ed861abc97dbecc;
  a.v4cfcb53978fd83231c75b36f997e0b9e();
}, frmComments.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmComments.prototype.constructor = frmComments, frmComments.prototype.v25858949839469d7389869d7422938d5 = function() {
  var options = this;
  this.date = v13260862a5e36823cb5546b59af48c71.instance.state.now;
  this.v2aa871a7873fc991fb996d28be97d8aa();
  this.v47c02d343e9d76d3cad7824388726241.click(function() {
    options.date = options.date.addDays(-1);
    /** @type {boolean} */
    options.v748c93e379bb48a307090a64412d2a10 = false;
    options.v2aa871a7873fc991fb996d28be97d8aa();
  });
  this.v8141e65cbc9d45a8d85d00d543f5fae5.click(function() {
    var d = v13260862a5e36823cb5546b59af48c71.instance.state.now;
    options.date = options.date.addDays(1);
    /** @type {boolean} */
    var c = options.date.getFullYear() == d.getFullYear() && options.date.getMonth() == d.getMonth() && options.date.getDate() == d.getDate();
    if (c || options.date.getTime() >= d.getTime()) {
      options.date = d;
      /** @type {boolean} */
      options.v748c93e379bb48a307090a64412d2a10 = true;
    }
    options.v2aa871a7873fc991fb996d28be97d8aa();
  });
  /**
   * @return {undefined}
   */
  this.va2b3cdfa1483ff99f6ba476ea1338c99 = function() {
    options.autoRefresh();
  };
  A.v87b8393064cbfa8977b32cec36a69d86().v78a0d9c392e941b31d879e634e670a93(vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a, this.va2b3cdfa1483ff99f6ba476ea1338c99);
}, frmComments.prototype.v2aa871a7873fc991fb996d28be97d8aa = function() {
  if (this.v9094d8d6b41c77c1816c94bc58b6c4ec.text(this.date.format("ddd, MMM d, yyyy")), this.date < A.v50156c5418a59f9fb151a3917f9026dd().StartDate) {
    this.vb86693e9982398a72ff4c45126a423b3.html(U.vc0e6c88f8413e92781b652ae2786391a("<b>No messages from before {0}.</b>", A.v50156c5418a59f9fb151a3917f9026dd().StartDate.addMinutes(1).v3d50f6a38b9e18ec7d6869a9c756a637()));
    return;
  }
  var year = A.vfe1c4eaec8ec40f848f9772196c532d3().now.addDays(-this.log.v79a8d4e6312fe4f7ee92c42d1413a6d1);
  if (this.date < year || this.date.v976c06c7cb040fb18b380e5c8a8bb6c4(year)) {
    this.vb86693e9982398a72ff4c45126a423b3.html(U.vc0e6c88f8413e92781b652ae2786391a("<tr><td><b>Comments and messages are kept for {0} days.</b></td></tr><tr><td><b>Comments for {1} are no longer available.</b></td></tr>", [this.log.v79a8d4e6312fe4f7ee92c42d1413a6d1, this.date.v3d50f6a38b9e18ec7d6869a9c756a637()]));
    return;
  }
  var data = {};
  /** @type {number} */
  var i = 0;
  for (; i < this.log.stack.length; ++i) {
    var file = this.log.stack[i];
    if (file.date.getFullYear() == this.date.getFullYear() && file.date.getMonth() == this.date.getMonth() && file.date.getDate() == this.date.getDate()) {
      data = file.va2ef96a7884f43d711d3423757d33879;
      break;
    }
  }
  /** @type {!Array} */
  var result = [];
  var key;
  for (key in data) {
    if (data.hasOwnProperty(key)) {
      /** @type {!Array<string>} */
      var fields = key.split("|");
      result.vc2b55451d6b5a973b456d3ad090abf8d({
        source : fields[0],
        comment : fields[1],
        count : data[key]
      });
    }
  }
  result = _.sortBy(result, function(asyncsRunning) {
    return -1 * asyncsRunning.count;
  });
  /** @type {string} */
  var scrolltable = "";
  _.each(result, function(b) {
    scrolltable = scrolltable + ("<tr><td><strong>" + b.source + "</strong></td><td>" + b.comment + "</td><td style='text-align:right'><span class='badge'>" + U.v26fd40d142e5f4ab82084c80bba46f53(b.count) + "</span></td></tr>");
  });
  this.vb86693e9982398a72ff4c45126a423b3.empty();
  this.vb86693e9982398a72ff4c45126a423b3.html(scrolltable);
}, frmComments.prototype.autoRefresh = function() {
  if (this.v748c93e379bb48a307090a64412d2a10) {
    this.date = v13260862a5e36823cb5546b59af48c71.instance.state.now;
    this.v2aa871a7873fc991fb996d28be97d8aa();
  }
}, frmComments.prototype.refresh = function() {
  this.date = v13260862a5e36823cb5546b59af48c71.instance.state.now;
  this.v2aa871a7873fc991fb996d28be97d8aa();
}, frmComments.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v47b44c6d075887ab9a3527111f5d02f0(vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a, this.va2b3cdfa1483ff99f6ba476ea1338c99);
}, frmInstructorAuth.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmInstructorAuth.prototype.constructor = frmInstructorAuth, frmInstructorAuth.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v96a314438c0193c0891b3f30cdd60c42.text(this.message);
  this.vb91883bc74eb846dcb5876098c22d085(this.v5efb483796236e0b3c5f56954c9df9e4, {
    placement : "bottom",
    required : true,
    v9da2fb2af7895fbe00c0d371ae7a8a01 : 256
  });
  this.vb91883bc74eb846dcb5876098c22d085(this.v114fa9744b6acd0d27c60d3c00a786f6, {
    placement : "bottom",
    required : true,
    v9da2fb2af7895fbe00c0d371ae7a8a01 : 32
  });
  if (A.v87b8393064cbfa8977b32cec36a69d86().designerModeEnabled == 1) {
    this.v9fa74cf8740110edafccea5dbafcd0e4();
  }
}, frmInstructorAuth.prototype.v9fa74cf8740110edafccea5dbafcd0e4 = function() {
  this.close();
  if (this.v008a22c3ecc263e06c8f2b318485ff20) {
    this.v008a22c3ecc263e06c8f2b318485ff20();
  }
}, frmInstructorAuth.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  var flax = this;
  if (this.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2) {
    var unameOther = this.v54c2849df4d1306e7988f0cb953901d1(this.v5efb483796236e0b3c5f56954c9df9e4);
    var pwd = this.v54c2849df4d1306e7988f0cb953901d1(this.v114fa9744b6acd0d27c60d3c00a786f6);
    $.ajax({
      type : "POST",
      url : this.host + "backend/instructorValidate",
      data : {
        token : this.token,
        email : unameOther,
        password : hex_md5(pwd)
      },
      success : function(b) {
        flax.v8a9e279249ce410177fd2329a0ef32a3(b);
      },
      error : function(b) {
        flax.vaa1af4d929ccd536aaab83b7d564018b(b);
      },
      dataType : "text"
    });
  } else {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
  }
}, frmInstructorAuth.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmInstructorAuth.prototype.vaa1af4d929ccd536aaab83b7d564018b = function(type, terria, url) {
  Alert.show("An communication error with the server has occured.<br>Status: " + terria + "<br>Error: " + url, "Authentication Error");
}, frmInstructorAuth.prototype.v8a9e279249ce410177fd2329a0ef32a3 = function(b) {
  try {
    /** @type {*} */
    var a = JSON.parse(b);
    if (a.status == 1) {
      this.v9fa74cf8740110edafccea5dbafcd0e4();
    } else {
      Alert.show("The information provided could not be used to authenticate this action.", "Authentication Failure");
    }
  } catch (a) {
    Alert.show("The server returned information in an unexpected format.", "Authentication Error");
  }
}, frmInstructorAuth.prototype.onClose = function() {
  this.v5efb483796236e0b3c5f56954c9df9e4.val("");
  this.v114fa9744b6acd0d27c60d3c00a786f6.val("");
}, frmInstructorAuth.show = function(message, data, start, options) {
  var ret = new frmInstructorAuth(message, data, start, options);
  return ret.show(), ret;
}, frmProvideCash.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmProvideCash.prototype.constructor = frmProvideCash, frmProvideCash.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.vb91883bc74eb846dcb5876098c22d085(this.v6c98d4d14e7641e96c574ea2a351e700, {
    placement : "bottom",
    currency : true,
    min : this.v0df2038b190164f2d2f938082373150d,
    max : this.v348fc90d5045edbb0526cf686ba1fb67
  });
}, frmProvideCash.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  if (this.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2) {
    var artistTrack = this.v54c2849df4d1306e7988f0cb953901d1(this.v6c98d4d14e7641e96c574ea2a351e700);
    if (this.v280b0e8f97f5fb60cfc6a0f957d4477e) {
      this.v280b0e8f97f5fb60cfc6a0f957d4477e(artistTrack);
    }
    A.v87b8393064cbfa8977b32cec36a69d86().vbee376c0bae5a5bb92840e65cd0a702e();
    this.close();
  } else {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors."));
  }
}, frmProvideCash.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.constructor = va90451cb6693c26de1b0a7e889cb49ec, va90451cb6693c26de1b0a7e889cb49ec.prototype.v813efe3a6c19bd50bf622c38564b67a4 = function(nodeName, fn) {
  if (!this.vf00cc07f0c07b25db79021a9efee9380[nodeName]) {
    /** @type {!Array} */
    this.vf00cc07f0c07b25db79021a9efee9380[nodeName] = [];
    /** @type {number} */
    i = 0;
    for (; i < this.v21a4a4bfd5925f74272a586c452a0c87; i++) {
      this.vf00cc07f0c07b25db79021a9efee9380[nodeName].vc2b55451d6b5a973b456d3ad090abf8d(0);
    }
  }
  if (!_.isUndefined(fn)) {
    /** @type {number} */
    this.v579ee65bf7e4f22ec410e6a21d8d4d1c = fn;
  }
  /** @type {number} */
  var c = this.v579ee65bf7e4f22ec410e6a21d8d4d1c % this.v21a4a4bfd5925f74272a586c452a0c87;
  return c;
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.v44c1a3e86179c154513849b0c0c7d845 = function(name, val, type) {
  var i = this.v813efe3a6c19bd50bf622c38564b67a4(name, type);
  this.vf00cc07f0c07b25db79021a9efee9380[name][i] += val;
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.vc33c83d224a4e13c95d20591e913bd3e = function(a, slice, fn) {
  var i = this.v813efe3a6c19bd50bf622c38564b67a4(a, fn);
  this.vf00cc07f0c07b25db79021a9efee9380[a][i] = slice;
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.v075a828610f3539bd644a217b12b95c5 = function(multi_valued) {
  if (_.isUndefined(multi_valued)) {
    this.v579ee65bf7e4f22ec410e6a21d8d4d1c++;
  } else {
    /** @type {number} */
    this.v579ee65bf7e4f22ec410e6a21d8d4d1c = multi_valued;
  }
  /** @type {number} */
  var id = this.v579ee65bf7e4f22ec410e6a21d8d4d1c % this.v21a4a4bfd5925f74272a586c452a0c87;
  var crossfilterable_layers = _.keys(this.vf00cc07f0c07b25db79021a9efee9380);
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < crossfilterable_layers.length; layer_i++) {
    var IS_HANDLED = crossfilterable_layers[layer_i];
    /** @type {number} */
    this.vf00cc07f0c07b25db79021a9efee9380[IS_HANDLED][id] = 0;
  }
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.getData = function(c) {
  if (!this.vf00cc07f0c07b25db79021a9efee9380[c] || _.isUndefined(this.v579ee65bf7e4f22ec410e6a21d8d4d1c)) {
    return [];
  }
  var r = this.v813efe3a6c19bd50bf622c38564b67a4(c);
  /** @type {!Array} */
  var values = [];
  /** @type {number} */
  var l = r - 1;
  for (; l >= 0; l--) {
    values.v135774e276edbb283fba10cca4f3a120(this.vf00cc07f0c07b25db79021a9efee9380[c][l]);
  }
  /** @type {number} */
  l = this.vf00cc07f0c07b25db79021a9efee9380[c].length - 1;
  for (; l > r; l--) {
    values.v135774e276edbb283fba10cca4f3a120(this.vf00cc07f0c07b25db79021a9efee9380[c][l]);
  }
  return values;
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.v56100d152191cc0094194d65fad29ea9 = function(name) {
  var prop = this.v813efe3a6c19bd50bf622c38564b67a4(name);
  return this.vf00cc07f0c07b25db79021a9efee9380[name][prop];
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.vf86ca82c8cf22e94d3b922e1bbf6c325 = function(component) {
  var items = this.getData(component);
  /** @type {!Array} */
  var expectShasums = [0, 0, 0, 0, 0, 0, 0];
  /** @type {number} */
  var i = 0;
  for (; i < 7 && items.length > i; i++) {
    /** @type {number} */
    var name = (this.v579ee65bf7e4f22ec410e6a21d8d4d1c - 2 - i) % 7;
    if (name < 0) {
      break;
    }
    expectShasums[name] = items[6 - i];
  }
  return expectShasums;
}, va90451cb6693c26de1b0a7e889cb49ec.prototype.vf4042fa3f327981a0c15f86739ae34b6 = function() {
  return this.v579ee65bf7e4f22ec410e6a21d8d4d1c;
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.init = function(b, c) {
  /** @type {!Object} */
  this.ve1ed4ad6c8e89a7c3abeed91aa90e6f7 = b;
  /** @type {number} */
  var a = 0;
  for (; a < this.ve1ed4ad6c8e89a7c3abeed91aa90e6f7; a++) {
    this.v867852f67dd46e2cbcba2a3046118934(c);
  }
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.v867852f67dd46e2cbcba2a3046118934 = function(val) {
  this.data.vc2b55451d6b5a973b456d3ad090abf8d(val);
  if (this.data.length > this.ve1ed4ad6c8e89a7c3abeed91aa90e6f7) {
    this.data.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.v2e86022cb1cfdc33bf43d35636eb48de = function(a) {
  this.v867852f67dd46e2cbcba2a3046118934(a);
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.vc33686b190e32da00fcdd33ce91b7bfd = function() {
  if (this.v35d4189c436390a3b1b0b72e803d6fc6()) {
    return 0;
  } else {
    /** @type {number} */
    var s = 0;
    /** @type {number} */
    var i = 0;
    for (; i < this.data.length; ++i) {
      s = s + this.data[i];
    }
    return s / this.data.length;
  }
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.v35d4189c436390a3b1b0b72e803d6fc6 = function() {
  return this.data.length == 0;
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.va7aa5c30f19fbb6ac8e557619097a83a = function(min) {
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var i = 0;
  for (; i < this.data.length; ++i) {
    if (this.data[i] < min) {
      b++;
    }
  }
  return b;
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.ve2e7f052f697aee2cbc69f24304533f5 = function() {
  return this.data.length;
}, vfc59aae2aa4aa66893bf1167de9372ed.prototype.vca84d760c62a7932eaa14ca5e0a7a339 = function() {
  return this.ve1ed4ad6c8e89a7c3abeed91aa90e6f7;
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), vba23fed1cde0c4dc1aa35591715fe27e.prototype.constructor = vba23fed1cde0c4dc1aa35591715fe27e, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v997e25ab455735eebb25b1a45299481e = function(node, nodes) {
  if (nodes == undefined && (nodes = null), this.nodes.push(node), nodes != null) {
    node.nodes = node.nodes.concat(nodes);
    /** @type {number} */
    var i = 0;
    for (; i < nodes.length; ++i) {
      var current = nodes[i];
      current.nodes.push(node);
    }
  }
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v183bb744463db672a74c31a0e94a10ae = function() {
  /** @type {number} */
  var i = 0;
  for (; i < this.nodes.length; ++i) {
    var elem = this.nodes[i];
    if (elem.name.length > 0) {
      this.v12b7bb797c6cdcfd2c3b27afb3677265[elem.name.toUpperCase()] = elem;
    }
  }
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.load = function(n) {
  /** @type {string} */
  this.v597d7b5a4b1a10e8f3eb37527aa2a451 = n;
  var p = n.data;
  /** @type {!Array} */
  this.nodes = [];
  /** @type {number} */
  var i = 0;
  for (; i < p.nodes.length; ++i) {
    var b = p.nodes[i];
    this.nodes.push(new vb2b205c06fe0076137ece08af92e7b71(b.x, b.y, b.name, b.vceeef9dc6eedb12b0f5027aac636b582, b.v4117418f7ade207bc11c664a8c68a5a5, b.width, b.height));
  }
  /** @type {number} */
  i = 0;
  for (; i < p.v15560d24c9801c53f1df0b75c0d78c2b.length; ++i) {
    var mutation = p.v15560d24c9801c53f1df0b75c0d78c2b[i];
    this.nodes[mutation.v488ce4054e3eda377d979b81b162012d].nodes.push(this.nodes[mutation.v191e441f00a15fe4b3d56e45688d7fe7]);
    this.nodes[mutation.v191e441f00a15fe4b3d56e45688d7fe7].nodes.push(this.nodes[mutation.v488ce4054e3eda377d979b81b162012d]);
  }
  this.v183bb744463db672a74c31a0e94a10ae();
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.vf115a17cb1cf940ff5d11c76c0286943 = function() {
  var ld = this;
  if (this.vbaada8e78bed9c29ff9656ef7d38ee2c) {
    /** @type {boolean} */
    this.vbaada8e78bed9c29ff9656ef7d38ee2c = false;
    this.v597d7b5a4b1a10e8f3eb37527aa2a451.load(function() {
      ld.load(ld.v597d7b5a4b1a10e8f3eb37527aa2a451);
      /** @type {boolean} */
      ld.vbaada8e78bed9c29ff9656ef7d38ee2c = true;
      v13260862a5e36823cb5546b59af48c71.instance.vbee376c0bae5a5bb92840e65cd0a702e();
    });
  }
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v1c7b787666952f2c8083cafd92dbda3d = function(interval_ms) {
  if (interval_ms == undefined) {
    /** @type {number} */
    interval_ms = 2e3;
  }
  var b = this;
  setInterval(function() {
    b.vf115a17cb1cf940ff5d11c76c0286943();
  }, interval_ms);
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v25deb183138b7951a8b404efe7cade27 = function(type) {
  var a = this.v12b7bb797c6cdcfd2c3b27afb3677265[type.toUpperCase()];
  if (a != null) {
    return a;
  }
  throw new Error("Could not find node '" + type + "' in place map.  Did you forget to hash your this.nodes?");
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v56b80c6dea8fe952b79de2f56fa3cf3c = function(shortMonthName) {
  var a = this.v12b7bb797c6cdcfd2c3b27afb3677265[shortMonthName.toUpperCase()];
  return a;
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v649e7d3352b18a5de31a8680e2f028a4 = function(a, b) {
  return this.va20f5727042bf7e88990f9e7663e8023(a, this.v25deb183138b7951a8b404efe7cade27(b));
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.va20f5727042bf7e88990f9e7663e8023 = function(boardSquare, antSquare) {
  return boardSquare.x == antSquare.x && boardSquare.y == antSquare.y;
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.va9a2bd302fd9f91ebfeed0cffe696d85 = function(char, type) {
  return this.vd862f3bb46a22cd56c0ccddc54f1d2f6(this.v25deb183138b7951a8b404efe7cade27(char), this.v25deb183138b7951a8b404efe7cade27(type));
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.vd862f3bb46a22cd56c0ccddc54f1d2f6 = function(style, attr, val) {
  var link = new v2e77a3df130898b3d30893caa0d0fc05;
  if (style == attr) {
    return link.nodes.push(attr), link;
  }
  if (attr.v8f44230e8ec1c46f63550a4d6a538243(val)) {
    return null;
  }
  var a;
  var poly;
  var n;
  var part;
  /** @type {number} */
  var j = 0;
  for (; j < this.nodes.length; ++j) {
    var anode = this.nodes[j];
    /** @type {number} */
    anode.__va4553455d2d621c5b1df9f817e0ab75f = U.vdfcca307a0489ee3baf51069dd57c8b3 - 1;
    /** @type {boolean} */
    anode.__v1555e5c613ccf9727ac4868f6f8cf97b = false;
    /** @type {null} */
    anode.__v9b8fe020d5797705e78b9d4f690c28a4 = null;
  }
  /** @type {number} */
  style.__va4553455d2d621c5b1df9f817e0ab75f = 0;
  /** @type {boolean} */
  style.__v1555e5c613ccf9727ac4868f6f8cf97b = false;
  /** @type {null} */
  style.__v9b8fe020d5797705e78b9d4f690c28a4 = null;
  /** @type {number} */
  j = 0;
  for (; j < this.nodes.length; j++) {
    /** @type {number} */
    var id = 0;
    /** @type {number} */
    var m = U.vdfcca307a0489ee3baf51069dd57c8b3 - 1 + 1;
    /** @type {number} */
    var i = 0;
    for (; i < this.nodes.length; i++) {
      if (!this.nodes[i].__v1555e5c613ccf9727ac4868f6f8cf97b && this.nodes[i].__va4553455d2d621c5b1df9f817e0ab75f < m) {
        /** @type {number} */
        id = i;
        m = this.nodes[i].__va4553455d2d621c5b1df9f817e0ab75f;
      }
    }
    a = this.nodes[id];
    var Cpoints = a.v5ade6f2f5a1f2d10c4bb670808c99f85();
    var polys = a.v915558e0237a7defe819fa0566e813ea();
    /** @type {number} */
    i = 0;
    for (; i < polys.length; i++) {
      poly = polys[i];
      var point = poly.v5ade6f2f5a1f2d10c4bb670808c99f85();
      /** @type {number} */
      var speed = point.x - Cpoints.x;
      /** @type {number} */
      var X3 = point.y - Cpoints.y;
      /** @type {number} */
      part = Math.sqrt(speed * speed + X3 * X3 * 4);
      part = part + (poly.weight ? poly.weight : 0);
      /** @type {number} */
      n = Math.floor(U.v40335ed9d0c0e65fe476d070f9bf3c72(part, 0, U.vdfcca307a0489ee3baf51069dd57c8b3 - 1));
      if (poly.__va4553455d2d621c5b1df9f817e0ab75f > a.__va4553455d2d621c5b1df9f817e0ab75f + n && (a.v8f44230e8ec1c46f63550a4d6a538243(val) == 0 || a == style)) {
        poly.__va4553455d2d621c5b1df9f817e0ab75f = a.__va4553455d2d621c5b1df9f817e0ab75f + n;
        poly.__v9b8fe020d5797705e78b9d4f690c28a4 = a;
      }
    }
    /** @type {boolean} */
    a.__v1555e5c613ccf9727ac4868f6f8cf97b = true;
  }
  if (attr.__va4553455d2d621c5b1df9f817e0ab75f < 0 || attr.__va4553455d2d621c5b1df9f817e0ab75f >= U.vdfcca307a0489ee3baf51069dd57c8b3 - 1) {
    return null;
  }
  /** @type {string} */
  a = attr;
  for (; a != null;) {
    link.nodes.splice(0, 0, a);
    a = a.__v9b8fe020d5797705e78b9d4f690c28a4;
  }
  return link;
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.vf017904eace7c20541ddee1179dbda0a = function(name, sc) {
  /** @type {number} */
  var best_part_step_diff = Number.MAX_VALUE;
  /** @type {null} */
  var c = null;
  /** @type {number} */
  var i = 0;
  for (; i < this.nodes.length; ++i) {
    var d = this.nodes[i];
    var tmp_step_diff = U.vc1f415498343451365676d8a0e41ec71(name, d.v5ade6f2f5a1f2d10c4bb670808c99f85());
    if (tmp_step_diff < best_part_step_diff) {
      c = d;
      best_part_step_diff = tmp_step_diff;
    }
  }
  return this.vd862f3bb46a22cd56c0ccddc54f1d2f6(c, this.v25deb183138b7951a8b404efe7cade27(sc));
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.link = function(link, source) {
  link.link(source);
  source.link(link);
  if (source.nodes.indexOf(link) == -1) {
    source.nodes.push(link);
  }
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v030a55965968521e41fca2aba7c20ee3 = function(op, callback) {
  if (op.nodes.indexOf(callback) == -1) {
    op.nodes.push(callback);
  }
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.vf817e8327a50208513cdacfa033edbbd = function(tensor1, tensor2) {
  tensor1.vf817e8327a50208513cdacfa033edbbd(tensor2);
  tensor2.vf817e8327a50208513cdacfa033edbbd(tensor1);
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v5ca474ba33e70493cf9fdbf143a96d8e = function(tensor1, tensor2) {
  tensor1.v5ca474ba33e70493cf9fdbf143a96d8e(tensor2);
  tensor2.v5ca474ba33e70493cf9fdbf143a96d8e(tensor1);
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.v94ea211203a10dd72a3d0ba81c3690b2 = function(date, days) {
  /** @type {number} */
  var i = 0;
  for (; i < this.nodes.length; i++) {
    var bnode = this.nodes[i];
    if (U.v745d5c204c9f1b5aad11273b9950b2df(date, bnode.v5ade6f2f5a1f2d10c4bb670808c99f85()) < days) {
      return bnode;
    }
  }
  return null;
}, vba23fed1cde0c4dc1aa35591715fe27e.prototype.va24e4399043fbfc62fcedf0cda9c4118 = function(f) {
  /** @type {number} */
  var best_part_step_diff = Number.MAX_VALUE;
  /** @type {null} */
  var lastSubject = null;
  /** @type {number} */
  var i = 0;
  for (; i < this.nodes.length; ++i) {
    var bnode = this.nodes[i];
    var tmp_step_diff = U.vc1f415498343451365676d8a0e41ec71(f, bnode.v5ade6f2f5a1f2d10c4bb670808c99f85());
    if (tmp_step_diff < best_part_step_diff) {
      lastSubject = bnode;
      best_part_step_diff = tmp_step_diff;
    }
  }
  return lastSubject;
}, vb2b205c06fe0076137ece08af92e7b71.prototype.v5ade6f2f5a1f2d10c4bb670808c99f85 = function() {
  return new Point(this.x, this.y);
}, vb2b205c06fe0076137ece08af92e7b71.prototype.v46d9c2aea57ee009b9ab339d4478978a = function(data) {
  this.x = data.x;
  this.y = data.y;
}, vb2b205c06fe0076137ece08af92e7b71.prototype.vfff0f97c546545307ccc1d0bc8788d8e = function(layer) {
  var arr = layer.next(this.width);
  var h = layer.next(this.height);
  var originGeometry = U.va0b03700400c98e6dc87260207930c4e(this.vceeef9dc6eedb12b0f5027aac636b582 * this.width / 1, this.v4117418f7ade207bc11c664a8c68a5a5 * this.height / 1, 0, 0, 1, 1);
  var pos = U.va0b03700400c98e6dc87260207930c4e(arr, h, this.x - originGeometry.x, this.y - originGeometry.y, 1, 1);
  return new Point(Math.floor(pos.x), Math.floor(pos.y));
}, vb2b205c06fe0076137ece08af92e7b71.prototype.v8f44230e8ec1c46f63550a4d6a538243 = function() {
  return this.v13838e83a8b3418e94cb2d83c662757e;
}, vb2b205c06fe0076137ece08af92e7b71.prototype.v915558e0237a7defe819fa0566e813ea = function() {
  return this.nodes;
}, vb2b205c06fe0076137ece08af92e7b71.prototype.link = function(fn) {
  if (this.nodes.indexOf(fn) == -1) {
    this.nodes.push(fn);
  }
}, vb2b205c06fe0076137ece08af92e7b71.prototype.vf817e8327a50208513cdacfa033edbbd = function(element) {
  this.nodes.vf81b17578abb97a8de755cddbf7f45a9(element);
  this.v239e0a340f40a34cb341221291ec527c.vc2b55451d6b5a973b456d3ad090abf8d(element);
}, vb2b205c06fe0076137ece08af92e7b71.prototype.v5ca474ba33e70493cf9fdbf143a96d8e = function(element) {
  if (_.includes(this.v239e0a340f40a34cb341221291ec527c, element)) {
    this.nodes.vc2b55451d6b5a973b456d3ad090abf8d(element);
    this.v239e0a340f40a34cb341221291ec527c.vf81b17578abb97a8de755cddbf7f45a9(element);
  }
}, v2e77a3df130898b3d30893caa0d0fc05.prototype.v95c3eef9b0701a2beb0582b95eb5d466 = function() {
  /** @type {!Array} */
  var p = [];
  /** @type {number} */
  var i = 1;
  for (; i < this.nodes.length; i++) {
    var item = this.nodes[i].v5ade6f2f5a1f2d10c4bb670808c99f85();
    if (_.isObject(this.nodes[i].vcfad8a9ea01981926be8ae4009bebd76)) {
      plo = this.nodes[i].vcfad8a9ea01981926be8ae4009bebd76;
      /** @type {number} */
      var offsetX = offsetY = 0;
      if (_.isNumber(plo.x) && _.isNumber(plo.y)) {
        offsetX = plo.x;
        offsetY = plo.y;
      } else {
        if (_.isObject(plo)) {
          var dialogGeometry = this.nodes[i - 1].v5ade6f2f5a1f2d10c4bb670808c99f85();
          var containerGeometry = this.nodes[i].v5ade6f2f5a1f2d10c4bb670808c99f85();
          /** @type {string} */
          var dir = "";
          if (dialogGeometry.x - containerGeometry.x < 0) {
            if (dialogGeometry.y - containerGeometry.y < 0) {
              /** @type {string} */
              dir = "NW";
            } else {
              /** @type {string} */
              dir = "SW";
            }
          } else {
            if (dialogGeometry.y - containerGeometry.y < 0) {
              /** @type {string} */
              dir = "NE";
            } else {
              /** @type {string} */
              dir = "SE";
            }
          }
          offsetX = plo[dir].x;
          offsetY = plo[dir].y;
        }
      }
      if (item.x += offsetX, item.y += offsetY, p.length > 0) {
        var shape = p[p.length - 1];
        shape.x += offsetX;
        shape.y += offsetY;
      }
    }
    p.vc2b55451d6b5a973b456d3ad090abf8d(item);
  }
  return p;
}, v2e77a3df130898b3d30893caa0d0fc05.prototype.v3278916e888aa6e0de12ea260d445ba0 = function(area) {
  /** @type {!Array} */
  var removedRelations = [];
  /** @type {number} */
  var i = 1;
  for (; i < this.nodes.length; i++) {
    var length = this.nodes[i].vfff0f97c546545307ccc1d0bc8788d8e(area);
    removedRelations.vc2b55451d6b5a973b456d3ad090abf8d(length);
  }
  return removedRelations;
}, v2e77a3df130898b3d30893caa0d0fc05.prototype.v0f45ff51d768e1700d15e728e89726ab = function() {
  if (!_.isUndefined(this.__va4553455d2d621c5b1df9f817e0ab75f)) {
    return this.__va4553455d2d621c5b1df9f817e0ab75f;
  }
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var i = 1;
  for (; i < this.nodes.length; i++) {
    b = b + U.vc1f415498343451365676d8a0e41ec71(this.nodes[i].v5ade6f2f5a1f2d10c4bb670808c99f85(), this.nodes[i - 1].v5ade6f2f5a1f2d10c4bb670808c99f85());
  }
  return this.__va4553455d2d621c5b1df9f817e0ab75f = b, b;
}, v2e77a3df130898b3d30893caa0d0fc05.prototype.v3b9ff453a7835400c5c53ea9d93d24ac = function() {
  return _.last(this.nodes);
}, SurveyQuestion.prototype = Object.create(Object.prototype), SurveyQuestion.prototype.constructor = SurveyQuestion, SurveyQuestion.prototype.v7b6c55a8bc518dc2d3425fba0516439c = function() {
  return this.v5de2781193aad09bc0f0b17b09a59e96;
}, SurveyQuestion.prototype.v169a83c01d16495a1ed9588db2ed0e61 = function(a) {
  /** @type {string} */
  this.v5de2781193aad09bc0f0b17b09a59e96 = a;
}, SurveyQuestion.vdbc2ea6bdc2db03fbbfead3249b3692d = function(name, format, layerId, scrollScaleX) {
  var layer = new SurveyQuestion;
  return layer.ShortName = name, layer.Question = format, layer.PossibleResponsesConcatenated = layerId, layer.vc29e3bc5fbbb233940da68d20d9fb44c = scrollScaleX, layer;
}, SurveyQuestion.prototype.toString = function() {
  return this.Question;
}, vf40f6c4ee436dae3bbdc45cd84a85c4d.prototype = Object.create(Object.prototype), vf40f6c4ee436dae3bbdc45cd84a85c4d.prototype.constructor = vf40f6c4ee436dae3bbdc45cd84a85c4d, vf40f6c4ee436dae3bbdc45cd84a85c4d.prototype.init = function(value) {
  /** @type {!Object} */
  this.vf2bd84043ec5a56b8e503ba914cb2d47 = value;
}, vf40f6c4ee436dae3bbdc45cd84a85c4d.prototype.vdca2eb9598fb21d350a4712ebcd9a9b0 = function() {
  return this.v426d4e4ef5152089d558d6a0ac62fb54;
}, vf40f6c4ee436dae3bbdc45cd84a85c4d.prototype.vf1cf44850127a594a5f821e9e9c9399d = function(key) {
  this.v426d4e4ef5152089d558d6a0ac62fb54.push(key);
}, vf40f6c4ee436dae3bbdc45cd84a85c4d.prototype.vf943a541993e6e9c1de175be37b3fd30 = function() {
  return this.vf2bd84043ec5a56b8e503ba914cb2d47;
}, v7bd3541d4c2d607969ab46c323c50931.prototype = Object.create(Object.prototype), v7bd3541d4c2d607969ab46c323c50931.prototype.constructor = v7bd3541d4c2d607969ab46c323c50931, v7bd3541d4c2d607969ab46c323c50931.v329e5fb00544a42e285fe20e9b99df61 = 5, v7bd3541d4c2d607969ab46c323c50931.v6fa6b44534e80599f4d812fe2f49672d = 500, v7bd3541d4c2d607969ab46c323c50931.v15a2ed14f8009f030417005f7d1bb7fd = 5, v7bd3541d4c2d607969ab46c323c50931.v43a74dd5e988971306e6a3cd65a2d158 = .5, v7bd3541d4c2d607969ab46c323c50931.v5388e7babe3d3b6bdc464e6a1da8ea91 =
U.vc0e6c88f8413e92781b652ae2786391a("Customers"), v7bd3541d4c2d607969ab46c323c50931.vcdb67c2ab0f166fe2b67bb4890c7fed8, v7bd3541d4c2d607969ab46c323c50931.prototype.v1e43ac98bb58d131f2f159f7d27e9ad4 = function(a) {
  throw new Error("Survey.Execute not overridden.");
}, v7bd3541d4c2d607969ab46c323c50931.prototype.vc70f4b5fcf1669f01d9b924bba55376e = function(a, b, variableNames) {
  return;
}, v7bd3541d4c2d607969ab46c323c50931.prototype.toString = function() {
  return this.date.v3d50f6a38b9e18ec7d6869a9c756a637();
}, v7bd3541d4c2d607969ab46c323c50931.prototype.v0f8348087640228b80d5394ac60cc829 = function() {
  return this.date;
}, v7bd3541d4c2d607969ab46c323c50931.prototype.v8a3981e99a87e3bb3767af61644957d4 = function() {
  return this.vada55fa7c019f4894698dd08d7c55393;
}, v7bd3541d4c2d607969ab46c323c50931.prototype.v36ff47034a925191caffe53f9de1e418 = function() {
  return this.responses;
}, v7bd3541d4c2d607969ab46c323c50931.v9152f68a59491a82ba040c8c800c4ca5 = function(type) {
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < vcdb67c2ab0f166fe2b67bb4890c7fed8.length; ++layer_i) {
    var layer = vcdb67c2ab0f166fe2b67bb4890c7fed8[layer_i];
    if (layer.ShortName == type) {
      return layer;
    }
  }
  return null;
}, v7bd3541d4c2d607969ab46c323c50931.v98c9ac1c1573a47610d2cc733e0955a4 = function(canCreateDiscussions) {
  /** @type {!Object} */
  vcdb67c2ab0f166fe2b67bb4890c7fed8 = canCreateDiscussions;
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < vcdb67c2ab0f166fe2b67bb4890c7fed8.length; ++layer_i) {
    var layer = vcdb67c2ab0f166fe2b67bb4890c7fed8[layer_i];
    layer.v169a83c01d16495a1ed9588db2ed0e61(layer.PossibleResponsesConcatenated.split("|"));
    /** @type {null} */
    layer.PossibleResponsesConcatenated = null;
  }
}, v7bd3541d4c2d607969ab46c323c50931.prototype.v01b497a588e9330590d2c168d1076eea = function() {
  /** @type {number} */
  var localStyleSheet = v7bd3541d4c2d607969ab46c323c50931.v15a2ed14f8009f030417005f7d1bb7fd * this.responses.length;
  /** @type {number} */
  var file = v7bd3541d4c2d607969ab46c323c50931.v43a74dd5e988971306e6a3cd65a2d158 * this.v342c356cf6942694690815b72ba817f4.length * this.responses.length;
  return v7bd3541d4c2d607969ab46c323c50931.v6fa6b44534e80599f4d812fe2f49672d + localStyleSheet + file;
}, frmSurvey.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmSurvey.prototype.constructor = frmSurvey, frmSurvey.prototype.v25858949839469d7389869d7422938d5 = function() {
  var b = this;
  this.vd95cb0f4312bc73eb68c1e7da528d72b.empty();
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8.length; layer_i++) {
    var layer = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[layer_i];
    if (layer.hidden === true) {
      continue;
    }
    var d = $("<div class='checkbox'>");
    var e = $("<label class='labelbs2'><input type=checkbox id='q" + layer_i + "'>" + layer.Question + "</label>");
    e.click(function() {
      b.v810d7e10ce51070875abd35eb67de7b9();
    });
    e.appendTo(d);
    d.appendTo(this.vd95cb0f4312bc73eb68c1e7da528d72b);
  }
  if (this.v729aaa9574add38f41ae949260f88f9d) {
    this.v50db18086be1167fc8a783b6b8f4bdcf.addClass("col-xs-4 minpad");
    this.va238ef6ef3ae62e9eb35381ba77295f3.removeClass("col-xs-12").addClass("col-xs-8");
    this.v50db18086be1167fc8a783b6b8f4bdcf.css("display", "inline");
    this.vb91883bc74eb846dcb5876098c22d085(this.v75598bfda83c9da49e0504ad56f78b09, {
      placement : "bottom",
      integer : true,
      min : 0,
      max : 10 * this.v42a4a352d70ca92ef9f4722eab185077
    });
  }
  this.v75598bfda83c9da49e0504ad56f78b09.val(this.v42a4a352d70ca92ef9f4722eab185077);
  this.v75598bfda83c9da49e0504ad56f78b09.keyup(function() {
    b.v3dcc5d82b4caf51cf1390cbb3ec2f9ca();
  });
  this.v3dcc5d82b4caf51cf1390cbb3ec2f9ca();
}, frmSurvey.prototype.v2451de4d5dc37ddba7a3bf30b2610f9d = function(a, b) {
  /** @type {!Array} */
  this.v4aa4655e25af5596003edec8b91c0099 = a;
  this.vaeefad6806efcdedc979224bc278f42f = b;
}, frmSurvey.prototype.vc01c694811d1f8812e633ef525deaeea = function(a) {
  /** @type {!Object} */
  this.v669ff646b5846079385e704f4920c16e = a;
}, frmSurvey.prototype.ve80ceb2a885094b26bedbcf921bd14e5 = function(a, b) {
  /** @type {!Object} */
  this.v10f732bb17fff774ece0f13caa51b207 = a;
  this.v2b6faf3527802d72b604837f5be622b0 = b;
}, frmSurvey.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  if (this.v729aaa9574add38f41ae949260f88f9d && !this.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2) {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please re-enter Number to Survey"));
    return;
  }
  this.ve298102090efdbecd15862377d80a2ec.date = v13260862a5e36823cb5546b59af48c71.instance.state.now;
  /** @type {number} */
  var i = 0;
  for (; i < v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8.length; ++i) {
    var valueProgess = this.vd95cb0f4312bc73eb68c1e7da528d72b.find("#q" + i);
    if (this.v7b2414fd4f791c2847f4cc04cca8ab39(valueProgess)) {
      this.ve298102090efdbecd15862377d80a2ec.v342c356cf6942694690815b72ba817f4.vc2b55451d6b5a973b456d3ad090abf8d(v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[i]);
    }
  }
  if (this.ve298102090efdbecd15862377d80a2ec.v342c356cf6942694690815b72ba817f4.length == 0) {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("You must select at least one question."), U.vc0e6c88f8413e92781b652ae2786391a("Input Required"));
    return;
  }
  if (this.v729aaa9574add38f41ae949260f88f9d) {
    this.ve298102090efdbecd15862377d80a2ec.v0bd019d672b73b0ba7aad1021de6846c(this.v54c2849df4d1306e7988f0cb953901d1(this.v75598bfda83c9da49e0504ad56f78b09));
  } else {
    this.ve298102090efdbecd15862377d80a2ec.v0bd019d672b73b0ba7aad1021de6846c(this.v42a4a352d70ca92ef9f4722eab185077);
  }
  if (this.v4aa4655e25af5596003edec8b91c0099 != undefined) {
    this.v4aa4655e25af5596003edec8b91c0099.v01859ba9e7439f2a5b7f5a04bbdcae01(this.vaeefad6806efcdedc979224bc278f42f, this.va4a070df9a5818d6670d9b07fb13e0ad, "Cash");
  }
  /** @type {!Array} */
  var c = [];
  if (this.v10f732bb17fff774ece0f13caa51b207 != undefined) {
    this.v10f732bb17fff774ece0f13caa51b207.vc2b55451d6b5a973b456d3ad090abf8d(this.ve298102090efdbecd15862377d80a2ec);
    if (this.v10f732bb17fff774ece0f13caa51b207.length > this.v2b6faf3527802d72b604837f5be622b0) {
      this.v10f732bb17fff774ece0f13caa51b207.vca48a4d192a1c3fdc8f15c910420fc7e(0);
    }
    c = this.v10f732bb17fff774ece0f13caa51b207;
  } else {
    c.vc2b55451d6b5a973b456d3ad090abf8d(this.ve298102090efdbecd15862377d80a2ec);
  }
  if (this.v669ff646b5846079385e704f4920c16e != undefined) {
    this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Conducted survey at cost of {0}.", U.v0ea35f447d08124fa72648dd7f4ff64c(this.va4a070df9a5818d6670d9b07fb13e0ad)));
  }
  var b = new frmSurveyResults;
  b.init(c);
  b.show();
  this.close();
}, frmSurvey.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmSurvey.prototype.v810d7e10ce51070875abd35eb67de7b9 = function() {
  this.v3dcc5d82b4caf51cf1390cbb3ec2f9ca();
}, frmSurvey.prototype.v5b16c7bb85eea69dc66de7eacc458546 = function() {
  this.v3dcc5d82b4caf51cf1390cbb3ec2f9ca();
}, frmSurvey.prototype.v3dcc5d82b4caf51cf1390cbb3ec2f9ca = function() {
  if (this.v729aaa9574add38f41ae949260f88f9d) {
    /** @type {number} */
    var value = 0;
    /** @type {number} */
    var i = 0;
    for (; i < v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8.length; ++i) {
      var valueProgess = this.vd95cb0f4312bc73eb68c1e7da528d72b.find("#q" + i);
      if (this.v7b2414fd4f791c2847f4cc04cca8ab39(valueProgess)) {
        value++;
      }
    }
    var factor = this.v54c2849df4d1306e7988f0cb953901d1(this.v75598bfda83c9da49e0504ad56f78b09);
    /** @type {number} */
    var n = v7bd3541d4c2d607969ab46c323c50931.v15a2ed14f8009f030417005f7d1bb7fd * factor;
    /** @type {number} */
    var d = v7bd3541d4c2d607969ab46c323c50931.v43a74dd5e988971306e6a3cd65a2d158 * value * factor;
    /** @type {number} */
    this.va4a070df9a5818d6670d9b07fb13e0ad = v7bd3541d4c2d607969ab46c323c50931.v6fa6b44534e80599f4d812fe2f49672d + n + d;
    this.v8f9930e7fc2d74a247257d9ffbbe3a47.text(U.v008da4424a5701b4ad40bb9d6adc0daf(v7bd3541d4c2d607969ab46c323c50931.v6fa6b44534e80599f4d812fe2f49672d));
    this.v7127d4da0a71ae5619c2512e5cadfe2c.text(U.v008da4424a5701b4ad40bb9d6adc0daf(n));
    this.v01c2216aefaa8d6e005a40ef788b357e.text(U.v008da4424a5701b4ad40bb9d6adc0daf(d));
    this.vca4b31a717451dac2655b358b7eff369.text(U.v008da4424a5701b4ad40bb9d6adc0daf(this.va4a070df9a5818d6670d9b07fb13e0ad));
  }
}, frmSurvey.prototype.va7e8209bf2f62c2da8111e05ec92283d = function() {
  this.v3dcc5d82b4caf51cf1390cbb3ec2f9ca();
}, frmSurveyResults.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmSurveyResults.prototype.constructor = frmSurveyResults, frmSurveyResults.v92975c26c5ea9830c2ab4475a2066d53 = 15, frmSurveyResults.prototype.init = function(value) {
  /** @type {!Object} */
  this.v10f732bb17fff774ece0f13caa51b207 = value;
}, frmSurveyResults.prototype.v25858949839469d7389869d7422938d5 = function() {
  var a = this;
  if (this.v10f732bb17fff774ece0f13caa51b207.length == 0) {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please take a survey first."), U.vc0e6c88f8413e92781b652ae2786391a("Survey Required"));
    this.close();
    return;
  }
  this.vf8fd0275f7602d3868c98db2b7214ffe.change(function() {
    a.vbf105484b56fe24b00221b03b9a74cdb();
  });
  this.vc85905445b80cd56d359581eaf15dab5(this.vf8fd0275f7602d3868c98db2b7214ffe, this.v10f732bb17fff774ece0f13caa51b207);
  this.v00a94e177afe39f3cefb7b639e554084(this.vf8fd0275f7602d3868c98db2b7214ffe, this.v10f732bb17fff774ece0f13caa51b207.length - 1);
  this.v8d73e562d733cda9143ea8b3f66ceb1e.change(function() {
    a.v95ce10c16536015b1a1e1910065f5534();
  });
  this.vf8fd0275f7602d3868c98db2b7214ffe.removeAttr("disabled");
  this.v8d73e562d733cda9143ea8b3f66ceb1e.removeAttr("disabled");
  this.vbf105484b56fe24b00221b03b9a74cdb();
}, frmSurveyResults.prototype.v0c9fbf583e4428193e76fd220a8991be = function(b, c) {
  /** @type {number} */
  var house = 0;
  /** @type {!Array} */
  var uhouse = [];
  /** @type {!Array} */
  var ticks = [];
  /** @type {boolean} */
  var horizontal = false;
  if (!_.isUndefined(b.Horizontal) && b.Horizontal == 1) {
    /** @type {boolean} */
    horizontal = true;
  }
  /** @type {number} */
  var i = 0;
  for (; i < c.length; i++) {
    var mapping = c[i];
    if (horizontal) {
      uhouse.vc2b55451d6b5a973b456d3ad090abf8d([mapping.v080899590c31a724ea02729b667c2826, house]);
    } else {
      uhouse.vc2b55451d6b5a973b456d3ad090abf8d([house, mapping.v080899590c31a724ea02729b667c2826]);
    }
    ticks.vc2b55451d6b5a973b456d3ad090abf8d([house, mapping.response]);
    house++;
  }
  this.plot.height(300);
  if (c.length > 15) {
    this.plot.height(300 + (c.length - 15) * 20);
  }
  var options = {
    xaxis : {
      ticks : ticks,
      color : "#FFFFFF",
      font : {
        size : 14,
        lineHeight : 13,
        family : "Arial,sans-serif",
        color : "#444444"
      }
    },
    yaxis : {
      font : {
        size : 14,
        lineHeight : 13,
        family : "Arial,sans-serif",
        color : "#444444"
      }
    }
  };
  if (horizontal) {
    delete options.xaxis.ticks;
    /** @type {!Array} */
    options.yaxis.ticks = ticks;
  }
  $.plot(this.plot, [{
    data : uhouse,
    bars : {
      show : true,
      barWidth : .5,
      align : "center",
      horizontal : horizontal,
      lineWidth : 0,
      fillColor : {
        colors : ["#0080CC", "#005299"]
      }
    }
  }], options);
}, frmSurveyResults.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmSurveyResults.prototype.vbf105484b56fe24b00221b03b9a74cdb = function() {
  var e = this;
  this.ve298102090efdbecd15862377d80a2ec = this.vc22528f6f67c96a40e226f7422a34b41(this.vf8fd0275f7602d3868c98db2b7214ffe);
  this.v8d73e562d733cda9143ea8b3f66ceb1e.empty();
  this.vc85905445b80cd56d359581eaf15dab5(this.v8d73e562d733cda9143ea8b3f66ceb1e, this.ve298102090efdbecd15862377d80a2ec.v342c356cf6942694690815b72ba817f4);
  this.v00a94e177afe39f3cefb7b639e554084(this.v8d73e562d733cda9143ea8b3f66ceb1e, 0);
  /** @type {string} */
  var miss_badge = "<h5>Include People Who Answered:</h5>";
  /** @type {number} */
  var i = 0;
  for (; i < this.ve298102090efdbecd15862377d80a2ec.v342c356cf6942694690815b72ba817f4.length; i++) {
    var layer = this.ve298102090efdbecd15862377d80a2ec.v342c356cf6942694690815b72ba817f4[i];
    if (layer.vc29e3bc5fbbb233940da68d20d9fb44c == "Chart") {
      /** @type {string} */
      miss_badge = miss_badge + ("<label>" + layer.Question + "</label>");
      /** @type {number} */
      var g = 0;
      for (; g < layer.v5de2781193aad09bc0f0b17b09a59e96.length; g++) {
        /** @type {string} */
        miss_badge = miss_badge + ("<div class='checkbox' id='q" + i + "r" + g + "'><label><input type=checkbox checked='checked' />" + layer.v5de2781193aad09bc0f0b17b09a59e96[g] + "</label></div>");
      }
    }
  }
  this.vfc77c18b67f13f76b4cb0b32fc56a7b9.html(miss_badge);
  this.vfc77c18b67f13f76b4cb0b32fc56a7b9.find("input").click(function(a) {
    e.v94ee16185d0279bc51b95052b52466bc(a);
  });
  this.v95ce10c16536015b1a1e1910065f5534();
}, frmSurveyResults.prototype.v94ee16185d0279bc51b95052b52466bc = function(strip1) {
  this.v95ce10c16536015b1a1e1910065f5534();
}, frmSurveyResults.prototype.v9cbdc43ac12a728a74a938ff18bad0df = function(d) {
  /** @type {number} */
  var i = 0;
  for (; i < this.ve298102090efdbecd15862377d80a2ec.v342c356cf6942694690815b72ba817f4.length; i++) {
    var obj = this.ve298102090efdbecd15862377d80a2ec.v342c356cf6942694690815b72ba817f4[i];
    var b = this.vfc77c18b67f13f76b4cb0b32fc56a7b9.find("#q" + i + "r" + d.v426d4e4ef5152089d558d6a0ac62fb54[i]);
    if (b.size() > 0) {
      var c = b.find("input");
      if (c == null) {
        throw new Error("couldn't find " + obj.ShortName + d.v426d4e4ef5152089d558d6a0ac62fb54[i]);
      }
      if (!this.v7b2414fd4f791c2847f4cc04cca8ab39(c)) {
        return false;
      }
    }
  }
  return true;
}, frmSurveyResults.prototype.v95ce10c16536015b1a1e1910065f5534 = function() {
  /** @type {!Array} */
  var Y = [];
  var b = this.vc22528f6f67c96a40e226f7422a34b41(this.v8d73e562d733cda9143ea8b3f66ceb1e);
  if (b.vc29e3bc5fbbb233940da68d20d9fb44c == "Chart") {
    /** @type {!Array} */
    var html5_elements_array = [];
    /** @type {number} */
    var a = 0;
    for (; a < b.v5de2781193aad09bc0f0b17b09a59e96.length; a++) {
      html5_elements_array.push(0);
    }
    _.forEach(this.ve298102090efdbecd15862377d80a2ec.v36ff47034a925191caffe53f9de1e418(), _.bind(function(searchDefinition) {
      if (this.v9cbdc43ac12a728a74a938ff18bad0df(searchDefinition)) {
        var b = searchDefinition.v426d4e4ef5152089d558d6a0ac62fb54[this.v864febdafb7a28e75280a3306761e469(this.v8d73e562d733cda9143ea8b3f66ceb1e)];
        if (b instanceof Array) {
          _.each(b, function(a) {
            html5_elements_array[a]++;
          });
        } else {
          a = b;
          html5_elements_array[a]++;
        }
      }
    }, this));
    /** @type {number} */
    a = 0;
    for (; a < b.v5de2781193aad09bc0f0b17b09a59e96.length; a++) {
      /** @type {boolean} */
      var resizeClickPositionX = false;
      if (_.isUndefined(b.SuppressZeroResponses) ? resizeClickPositionX = b.v5de2781193aad09bc0f0b17b09a59e96.length >= frmSurveyResults.v92975c26c5ea9830c2ab4475a2066d53 : resizeClickPositionX = b.SuppressZeroResponses, resizeClickPositionX && html5_elements_array[a] == 0) {
        continue;
      }
      Y.vc2b55451d6b5a973b456d3ad090abf8d({
        response : b.v5de2781193aad09bc0f0b17b09a59e96[a],
        v080899590c31a724ea02729b667c2826 : html5_elements_array[a]
      });
    }
    this.plot.show();
    this.ve030b163f4c47f06c0e252f50aef7696.hide();
    this.v0c9fbf583e4428193e76fd220a8991be(b, Y);
  } else {
    /** @type {!Array} */
    var QueryLanguageComponent = [];
    _.forEach(this.ve298102090efdbecd15862377d80a2ec.v36ff47034a925191caffe53f9de1e418(), _.bind(function(searchDefinition) {
      if (this.v9cbdc43ac12a728a74a938ff18bad0df(searchDefinition)) {
        QueryLanguageComponent.vc2b55451d6b5a973b456d3ad090abf8d(searchDefinition.v426d4e4ef5152089d558d6a0ac62fb54[this.v864febdafb7a28e75280a3306761e469(this.v8d73e562d733cda9143ea8b3f66ceb1e)]);
      }
    }, this));
    this.plot.hide();
    this.ve030b163f4c47f06c0e252f50aef7696.show();
    this.ve298102090efdbecd15862377d80a2ec.vc70f4b5fcf1669f01d9b924bba55376e(b, QueryLanguageComponent, this.ve030b163f4c47f06c0e252f50aef7696);
  }
}, frmSurveyResults.prototype.vf77267355370b712a42733f58f1bb173 = function() {
  this.v9c4e76e792f6661e09f59973a1ba60f7();
}, frmSurveyResults.prototype.v60817f002ef6a6dcdde663d6f0ab655c = function() {
  this.v9c4e76e792f6661e09f59973a1ba60f7();
}, frmSurveyResults.prototype.vab58b343cdddf1c52ea6f9d6c5ba4ab0 = function() {
  this.v9c4e76e792f6661e09f59973a1ba60f7();
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype = Object.create(Object.prototype), v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.constructor = v2609cf4415e9e2bdeac9bc70c0e1d78d, v2609cf4415e9e2bdeac9bc70c0e1d78d.vaf25e507dca82a8a4f14b61667a122f6 = 0, v2609cf4415e9e2bdeac9bc70c0e1d78d.v9567602541add67761b8de79d19cfccb = 1, v2609cf4415e9e2bdeac9bc70c0e1d78d.v3645b5af08ae133b536c9b5b839d3a4d = 2, v2609cf4415e9e2bdeac9bc70c0e1d78d.v8e7ac9ecdf488c922ea4c6aa040d9530 = 3, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.vdcaa29a0b13f88397f460b1b978ac54f =
function() {
  return this.vac223975b746c8cb29eb4fb3dd23bb9e;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.v54c686ebedd549e011a9c239a0bda52d = function() {
  return this.v541ae3e46719cdf4986ac72dedf734bb;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.v1dcdc0066b513d7d0c0fc78e3091f492 = function() {
  return this.v0484e2725ba2e51d69d3494affca6422;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.ved5c1e2b9f20adfe981e69d534c4ad18 = function() {
  return this.vd349b7a6286106ec09b108320fdc6d78;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.v1f10002aafeec3f9f70bfda8251e3a00 = function() {
  return this.v049485dd2b02564f94a24722b018257d != null;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.ve85f24daf8f610e5724bcc000f1e60ac = function() {
  if (this.v049485dd2b02564f94a24722b018257d == null) {
    /** @type {!Date} */
    this.v049485dd2b02564f94a24722b018257d = new Date;
  }
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.vfecb515f393e1763a171ef62dc8d6894 = function() {
  return this.v82b5e076243c99ffdb251cf058db9467 != null;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.v464194004d604c0a01de4c3d6583d6ae = function() {
  if (this.v82b5e076243c99ffdb251cf058db9467 == null) {
    /** @type {!Date} */
    this.v82b5e076243c99ffdb251cf058db9467 = new Date;
  }
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.v40579c0424f1a9089dd2f53646eab907 = function() {
  return this.vf6a481365386663e38f59c5f684209b4 != null;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.v411791539f1025e5709072806aaa88b2 = function() {
  if (this.vf6a481365386663e38f59c5f684209b4 == null) {
    /** @type {!Date} */
    this.vf6a481365386663e38f59c5f684209b4 = new Date;
  }
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.veeb1e6b2a6705038dda3a20889b4abb8 = function() {
  return this.v5451e8bb856695db31f8e38c3fa6225e != null;
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.submit = function() {
  if (this.v5451e8bb856695db31f8e38c3fa6225e == null) {
    /** @type {!Date} */
    this.v5451e8bb856695db31f8e38c3fa6225e = new Date;
  }
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.vc60d2e09c50d152724255fcbdf905892 = function() {
  /** @type {!Date} */
  var semiannualPing = new Date;
  var err = new v05d11f0f2e0c1a6f360c8611189e4901(semiannualPing.getTime());
  var chunk = this.head;
  for (; chunk != null;) {
    chunk.vc60d2e09c50d152724255fcbdf905892(err);
    chunk = chunk.next;
  }
}, v2609cf4415e9e2bdeac9bc70c0e1d78d.prototype.vdb6830c9272b35533eb3835a76ba959a = function(a) {
  return this.v2f00ec5a8ac2474f25fe7387898b806c[A.v87b8393064cbfa8977b32cec36a69d86().vabcd33e3b9c74fa33e39751d0b5bb0c4("goalDifficultyLevel", 3) - 1][a];
}, vb81ec444a84af038482cbc6245969e60.prototype = Object.create(Object.prototype), vb81ec444a84af038482cbc6245969e60.prototype.constructor = vb81ec444a84af038482cbc6245969e60, vb81ec444a84af038482cbc6245969e60.prototype.vab7c07240d27fc08c0220264d645d8a8 = function() {
  return this.v025e854c552c2bdad82d7cc6f6ac452b != null ? eval(this.v025e854c552c2bdad82d7cc6f6ac452b) : true;
}, vb81ec444a84af038482cbc6245969e60.prototype.start = function() {
  if (this.v5f91a37ad12cc44b30bf691de8038de1 == null) {
    /** @type {!Date} */
    this.v5f91a37ad12cc44b30bf691de8038de1 = new Date;
    if (this.vbc4181043346c74b1fd88efbb1ab7e86) {
      this.vbc4181043346c74b1fd88efbb1ab7e86.start();
    }
  }
  if (this.v39b69119e0c66a4c280fd84717d8c6c6) {
    A.v87b8393064cbfa8977b32cec36a69d86().v89cfa94b285da94ee975ebbf20382de2(this.v39b69119e0c66a4c280fd84717d8c6c6, this.vc174103d06944e3dcc964865c9fe908a);
  }
}, vb81ec444a84af038482cbc6245969e60.prototype.complete = function() {
  if (this.ve78976163e7fb6f4d1b210ba01bd04f9 == null) {
    /** @type {!Date} */
    this.ve78976163e7fb6f4d1b210ba01bd04f9 = new Date;
  }
}, vb81ec444a84af038482cbc6245969e60.prototype.progress = function() {
  if (this.ve53fb3de638bc933558ffa3ec7f49d84 == null) {
    /** @type {!Date} */
    this.ve53fb3de638bc933558ffa3ec7f49d84 = new Date;
  }
}, vb81ec444a84af038482cbc6245969e60.prototype.v802454d27ba3fb2ab7b9c02da9a43e52 = function() {
  return this.v5f91a37ad12cc44b30bf691de8038de1 != null;
}, vb81ec444a84af038482cbc6245969e60.prototype.vd2cfefc7ba62bcd6af8f423b6a43419e = function() {
  return this.ve78976163e7fb6f4d1b210ba01bd04f9 != null;
}, vb81ec444a84af038482cbc6245969e60.prototype.v18a4a96a8068124e6cbc25e81c263694 = function() {
  return this.ve53fb3de638bc933558ffa3ec7f49d84 != null;
}, vb81ec444a84af038482cbc6245969e60.prototype.v0b88353cab2ac84c769c816374c04688 = function() {
  return this.vbc4181043346c74b1fd88efbb1ab7e86 != null;
}, vb81ec444a84af038482cbc6245969e60.prototype.vc60d2e09c50d152724255fcbdf905892 = function(chunks) {
  if (this.v0b88353cab2ac84c769c816374c04688()) {
    this.vbc4181043346c74b1fd88efbb1ab7e86.vc60d2e09c50d152724255fcbdf905892(chunks);
  }
}, v6a71d3961b7436346bd593a991741a32.prototype = Object.create(Object.prototype), v6a71d3961b7436346bd593a991741a32.prototype.constructor = v6a71d3961b7436346bd593a991741a32, v6a71d3961b7436346bd593a991741a32.prototype.start = function() {
  /** @type {number} */
  var i = 0;
  for (; i < this.v426d4e4ef5152089d558d6a0ac62fb54.length; ++i) {
    this.v426d4e4ef5152089d558d6a0ac62fb54[i].start();
  }
}, v6a71d3961b7436346bd593a991741a32.prototype.vc60d2e09c50d152724255fcbdf905892 = function(count) {
  this.v426d4e4ef5152089d558d6a0ac62fb54 = U.shuffle(this.v426d4e4ef5152089d558d6a0ac62fb54, count);
}, v19368ba11aaa28346bd88a60f0240c1b.prototype = Object.create(Object.prototype), v19368ba11aaa28346bd88a60f0240c1b.prototype.constructor = v19368ba11aaa28346bd88a60f0240c1b, v19368ba11aaa28346bd88a60f0240c1b.prototype.getText = function() {
  return this.formula != null && this.v6974f70013846572a270ce8fd62e33a5 == null && (this.v6974f70013846572a270ce8fd62e33a5 = new Date, this.text = eval(this.formula)), this.text;
}, v19368ba11aaa28346bd88a60f0240c1b.prototype.start = function() {
}, v19368ba11aaa28346bd88a60f0240c1b.prototype.ve6e71224978e62679facebbbd3092c1c = function() {
  if (this.v1f81da6457378de31edc140df1893920 == null) {
    /** @type {!Date} */
    this.v1f81da6457378de31edc140df1893920 = new Date;
  }
  /** @type {boolean} */
  this.v05133a42c6bbabed88024ad982dc66ec = false;
}, v19368ba11aaa28346bd88a60f0240c1b.prototype.vf54368e5465a6424c7b13edea0dc5514 = function() {
  return this.v05133a42c6bbabed88024ad982dc66ec;
}, v19368ba11aaa28346bd88a60f0240c1b.prototype.vc6b95c3a3df74c309b33550a5a7e3efa = function(addedRenderer) {
  /** @type {boolean} */
  this.v05133a42c6bbabed88024ad982dc66ec = addedRenderer;
}, v19368ba11aaa28346bd88a60f0240c1b.prototype.v64885c753f1a2ac4cb90660ac56b0ebf = function() {
  return this.v1f81da6457378de31edc140df1893920 != null;
}, v19368ba11aaa28346bd88a60f0240c1b.prototype.vd86e6406fa6b6be128a500e650f063c0 = function() {
  return this.vaaf375657dea7ffbf10dc9deaeda0282;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype = Object.create(Object.prototype), v66c57333da7c74fe1e71f772d64e7b5c.prototype.constructor = v66c57333da7c74fe1e71f772d64e7b5c, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v8609d971a7f9d9e9a59d9b67c6193db4 = function() {
  /** @type {number} */
  var b = 1;
  var cur = this.state.head;
  for (; cur != this.step;) {
    cur = cur.next;
    b++;
  }
  return b;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v85d3ec3b57e10a644653ebd156127a1c = function() {
  return this.state.count;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.getText = function() {
  return _.includes(this.step.text, "{goalMetric") ? this.step.text.replace(/\{goalMetric(\d)\}/gi, _.bind(function(b, type) {
    return U.v790f397a5458e475c4d492eae29578af(this.state.vdb6830c9272b35533eb3835a76ba959a(type));
  }, this)) : this.step.text;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v0da9dd2e268f1727da1ce0f4796e2b87 = function() {
  return this.step.vbc4181043346c74b1fd88efbb1ab7e86;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v54c686ebedd549e011a9c239a0bda52d = function() {
  return this.state.v54c686ebedd549e011a9c239a0bda52d();
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vf17cf019f3d08beae6fd901e2c35dbfc = function() {
  /** @type {!Array} */
  var a = [];
  return this.step.vbc4181043346c74b1fd88efbb1ab7e86 && (a = this.step.vbc4181043346c74b1fd88efbb1ab7e86.v426d4e4ef5152089d558d6a0ac62fb54.clone()), a;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vc8b676833bd2a234af6258d5b0eaed0b = function(layerNum) {
  /** @type {null} */
  var tilesOnLayer = null;
  return this.step.vbc4181043346c74b1fd88efbb1ab7e86 && (tilesOnLayer = this.step.vbc4181043346c74b1fd88efbb1ab7e86.v426d4e4ef5152089d558d6a0ac62fb54[layerNum]), tilesOnLayer;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vedc9a4dbd210fcc9ed309e405e8de7bd = function(ballNumber) {
  if (this.step.vbc4181043346c74b1fd88efbb1ab7e86) {
    var ball = this.step.vbc4181043346c74b1fd88efbb1ab7e86.v426d4e4ef5152089d558d6a0ac62fb54[ballNumber];
    if (ball) {
      if (this.v8952f25f380fb73d1e38bd82de829e3e()) {
        ball.ve6e71224978e62679facebbbd3092c1c();
      }
      this.v607f6680dc5173c5e949c0d186a115bf();
    }
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.complete = function() {
  if (this.step.vd2cfefc7ba62bcd6af8f423b6a43419e() == 0 && this.v8952f25f380fb73d1e38bd82de829e3e()) {
    this.step.complete();
    if (!this.v203448c3720a1d2ac0ebc015b21870e6()) {
      this.state.v464194004d604c0a01de4c3d6583d6ae();
    }
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v800f60f6c2b93d4bdd9176061ba61cb8 = function() {
  return false;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v8952f25f380fb73d1e38bd82de829e3e = function() {
  return false;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v857f3b45740435c1124ac095fd179cb3 = function() {
  return this.step.prev == null;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v8e7764e3203046f9adc22fbb5623d81f = function() {
  return this.step.next == null;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v203448c3720a1d2ac0ebc015b21870e6 = function() {
  var node = this.step.next;
  for (; node != null;) {
    if (node.v0b88353cab2ac84c769c816374c04688()) {
      return true;
    }
    node = node.next;
  }
  return false;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vd2cfefc7ba62bcd6af8f423b6a43419e = function() {
  return this.step.vd2cfefc7ba62bcd6af8f423b6a43419e();
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v7ca9047c3bffde03ac0e42854c79dd42 = function() {
  return this.step.next != null;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vb74ee64fc703e9b33950f3ec997738c0 = function() {
  return this.step.prev != null;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vfe1ab0477d3295432062d7784f689f08 = function() {
  return this.state.veeb1e6b2a6705038dda3a20889b4abb8() == 0 ? true : false;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.start = function() {
  if (this.step.v802454d27ba3fb2ab7b9c02da9a43e52() == 0 && this.v8952f25f380fb73d1e38bd82de829e3e()) {
    if (this.v857f3b45740435c1124ac095fd179cb3()) {
      this.state.ve85f24daf8f610e5724bcc000f1e60ac();
    }
    this.step.start();
    this.v607f6680dc5173c5e949c0d186a115bf();
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.progress = function() {
  if (!this.step.v18a4a96a8068124e6cbc25e81c263694()) {
    if (this.v8952f25f380fb73d1e38bd82de829e3e()) {
      this.step.progress();
    }
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v9db475ccb0d3a5c8e3d49c8aa3639b09 = function() {
  if (this.v7ca9047c3bffde03ac0e42854c79dd42()) {
    /** @type {boolean} */
    var a = true;
    if (this.v8952f25f380fb73d1e38bd82de829e3e()) {
      var data = this.step.vab7c07240d27fc08c0220264d645d8a8();
      if (!(data === true)) {
        Alert.show(data);
        /** @type {boolean} */
        a = false;
      }
    }
    if (a) {
      this.progress();
      this.step = this.step.next;
      this.start();
    }
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v7b8bf2ac492120241b29a8c82ff823dd = function() {
  if (this.vb74ee64fc703e9b33950f3ec997738c0()) {
    this.step = this.step.prev;
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.submit = function() {
  var file = this;
  if (this.vfe1ab0477d3295432062d7784f689f08()) {
    file.progress();
    file.state.submit();
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v2785a40d7de62720def3cbea9ffb8c55 = function() {
  for (; this.vb74ee64fc703e9b33950f3ec997738c0();) {
    this.v7b8bf2ac492120241b29a8c82ff823dd();
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v607f6680dc5173c5e949c0d186a115bf = function() {
  var a = this.v457d87ae8ca3d346c858c8cdaf896929();
  if (a) {
    this.complete();
  }
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v457d87ae8ca3d346c858c8cdaf896929 = function() {
  return false;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vae1f2e4943997b71fd998e8427bfaf5a = function(root, fn, name) {
  /** @type {boolean} */
  var _localExports = false;
  return this.state.v40579c0424f1a9089dd2f53646eab907() || (fn && this.state.vac223975b746c8cb29eb4fb3dd23bb9e != fn && (_localExports = true, this.state.vac223975b746c8cb29eb4fb3dd23bb9e = fn), name && this.state.v541ae3e46719cdf4986ac72dedf734bb != name && (_localExports = true, this.state.v541ae3e46719cdf4986ac72dedf734bb = name), this.state.v40579c0424f1a9089dd2f53646eab907() != root && (_localExports = true), root && this.state.v411791539f1025e5709072806aaa88b2()), _localExports;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v1feeac4319d478f11a1492faa29bedf4 = function() {
  return this.v3a15765132076d72d366c6cca1628943;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v1f9df860ebde4c9413655dcda0a1a197 = function() {
  return this.earlySubmissionEnabled;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.v0a3909c18cb9353d50fea436a682a98e = function() {
  return this.v1feeac4319d478f11a1492faa29bedf4() ? v2609cf4415e9e2bdeac9bc70c0e1d78d.v9567602541add67761b8de79d19cfccb : this.state.v40579c0424f1a9089dd2f53646eab907() ? v2609cf4415e9e2bdeac9bc70c0e1d78d.v8e7ac9ecdf488c922ea4c6aa040d9530 : this.state.veeb1e6b2a6705038dda3a20889b4abb8() ? v2609cf4415e9e2bdeac9bc70c0e1d78d.v3645b5af08ae133b536c9b5b839d3a4d : this.state.vfecb515f393e1763a171ef62dc8d6894() ? v2609cf4415e9e2bdeac9bc70c0e1d78d.v9567602541add67761b8de79d19cfccb : v2609cf4415e9e2bdeac9bc70c0e1d78d.vaf25e507dca82a8a4f14b61667a122f6;
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vb3833c28c256ca9c9af7728d015eacaa = function() {
  var a = this.v0a3909c18cb9353d50fea436a682a98e();
  switch(a) {
    case v2609cf4415e9e2bdeac9bc70c0e1d78d.v8e7ac9ecdf488c922ea4c6aa040d9530:
      return U.vc0e6c88f8413e92781b652ae2786391a("Completed");
    case v2609cf4415e9e2bdeac9bc70c0e1d78d.v3645b5af08ae133b536c9b5b839d3a4d:
      return U.vc0e6c88f8413e92781b652ae2786391a("Submitted Early");
    case v2609cf4415e9e2bdeac9bc70c0e1d78d.v9567602541add67761b8de79d19cfccb:
      return U.vc0e6c88f8413e92781b652ae2786391a("Working on Goal");
    case v2609cf4415e9e2bdeac9bc70c0e1d78d.vaf25e507dca82a8a4f14b61667a122f6:
      return U.vc0e6c88f8413e92781b652ae2786391a("Working on Steps");
  }
  return "";
}, v66c57333da7c74fe1e71f772d64e7b5c.prototype.vfd9f85e6ef4d150d380d673bd9c14e6c = function() {
  return this.state.vfecb515f393e1763a171ef62dc8d6894() ? this.state.v1dcdc0066b513d7d0c0fc78e3091f492() : this.state.ved5c1e2b9f20adfe981e69d534c4ad18();
}, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype = Object.create(v66c57333da7c74fe1e71f772d64e7b5c.prototype), v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.constructor = v7110465ab3a4b46157d3a1e3a8cc2fe9, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.v800f60f6c2b93d4bdd9176061ba61cb8 = function() {
  return true;
}, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.v04cd2ba3a7b43a07ba81e9505025e373 = function(c) {
  c.next = this.step.next;
  c.prev = this.step;
  if (this.step.next) {
    /** @type {!Object} */
    this.step.next.prev = c;
  }
  /** @type {!Object} */
  this.step.next = c;
  /** @type {!Object} */
  this.step = c;
  this.state.count++;
}, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.setText = function(text) {
  return this.step.text = text;
}, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.vda32bea161cc3e1fc0de61b0be2c02b1 = function(a) {
  /** @type {string} */
  this.step.vbc4181043346c74b1fd88efbb1ab7e86 = a;
}, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.v64b03fa302676518f17fc0cf14263d2e = function(bone_in) {
  var value = this.step.vbc4181043346c74b1fd88efbb1ab7e86;
  if (value) {
    value.v426d4e4ef5152089d558d6a0ac62fb54.push(bone_in);
  }
}, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.v8952f25f380fb73d1e38bd82de829e3e = function() {
  return false;
}, v7110465ab3a4b46157d3a1e3a8cc2fe9.prototype.vb6f8485884373ffdddfe77a79cbe99b2 = function() {
  if (this.step.prev == null && this.step.next == null) {
    throw new Error("Cannot remove the last step, there must always be at least one step");
  }
  if (this.step.prev) {
    this.step.prev.next = this.step.next;
  }
  if (this.step.next) {
    this.step.next.prev = this.step.prev;
  }
  if (this.step.prev != null) {
    this.step = this.step.prev;
  } else {
    this.step = this.step.next;
    this.state.head = this.step;
  }
  this.state.count--;
}, vd1b349dedc184083448183a67397800e.prototype = Object.create(v66c57333da7c74fe1e71f772d64e7b5c.prototype), vd1b349dedc184083448183a67397800e.prototype.constructor = vd1b349dedc184083448183a67397800e, vd1b349dedc184083448183a67397800e.prototype.v7ca9047c3bffde03ac0e42854c79dd42 = function() {
  return v66c57333da7c74fe1e71f772d64e7b5c.prototype.v7ca9047c3bffde03ac0e42854c79dd42.call(this) ? this.step.vd2cfefc7ba62bcd6af8f423b6a43419e() : false;
}, vd1b349dedc184083448183a67397800e.prototype.vfe1ab0477d3295432062d7784f689f08 = function() {
  var a = v66c57333da7c74fe1e71f772d64e7b5c.prototype.vfe1ab0477d3295432062d7784f689f08.call(this);
  return a ? true : false;
}, vd1b349dedc184083448183a67397800e.prototype.vedc9a4dbd210fcc9ed309e405e8de7bd = function(p1__3354_SHARP_) {
  v66c57333da7c74fe1e71f772d64e7b5c.prototype.vedc9a4dbd210fcc9ed309e405e8de7bd.call(this, p1__3354_SHARP_);
  /** @type {boolean} */
  var d = false;
  var geohash = this.vf17cf019f3d08beae6fd901e2c35dbfc();
  /** @type {number} */
  var i = 0;
  for (; i < geohash.length; ++i) {
    var c = geohash[i];
    if (c.v64885c753f1a2ac4cb90660ac56b0ebf() && c.vd86e6406fa6b6be128a500e650f063c0()) {
      /** @type {boolean} */
      d = true;
    }
  }
  if (d) {
    geohash = this.vf17cf019f3d08beae6fd901e2c35dbfc();
    /** @type {number} */
    i = 0;
    for (; i < geohash.length; ++i) {
      c = geohash[i];
      if (this.v8952f25f380fb73d1e38bd82de829e3e()) {
        c.vc6b95c3a3df74c309b33550a5a7e3efa(false);
      }
    }
  }
}, vd1b349dedc184083448183a67397800e.prototype.v8952f25f380fb73d1e38bd82de829e3e = function() {
  return true;
}, vd1b349dedc184083448183a67397800e.prototype.v457d87ae8ca3d346c858c8cdaf896929 = function() {
  var a = v66c57333da7c74fe1e71f772d64e7b5c.prototype.v457d87ae8ca3d346c858c8cdaf896929.call(this);
  /** @type {boolean} */
  a = true;
  /** @type {boolean} */
  var d = false;
  var crossfilterable_layers = this.vf17cf019f3d08beae6fd901e2c35dbfc();
  if (crossfilterable_layers.length > 0) {
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < crossfilterable_layers.length; ++layer_i) {
      var layer = crossfilterable_layers[layer_i];
      if (layer.v64885c753f1a2ac4cb90660ac56b0ebf() && layer.vd86e6406fa6b6be128a500e650f063c0()) {
        /** @type {boolean} */
        d = true;
      }
    }
    if (d == 0) {
      /** @type {boolean} */
      a = false;
    }
  }
  return a;
}, cstmIAQuestion.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), cstmIAQuestion.prototype.constructor = cstmIAQuestion, cstmIAQuestion.prototype.v25858949839469d7389869d7422938d5 = function() {
  var out = this.v5f4cdb6ea6de093c616bf3c15856623b.v0da9dd2e268f1727da1ce0f4796e2b87();
  this.v3fd47ba9816429df46e0e1a83ad6237d.html(out.text);
  this.v0937c582b18d49750a0a5c260165856b.empty();
  /** @type {number} */
  var a = 0;
  for (; a < out.v426d4e4ef5152089d558d6a0ac62fb54.length; ++a) {
    var req_text = out.v426d4e4ef5152089d558d6a0ac62fb54[a];
    var pointer = new cstmIAAnswer(this.v32807337688fccef8615e097a02c12fa, this.v5f4cdb6ea6de093c616bf3c15856623b, a);
    pointer.v4cfcb53978fd83231c75b36f997e0b9e(this.v0937c582b18d49750a0a5c260165856b);
  }
}, cstmIAAnswer.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), cstmIAAnswer.prototype.constructor = cstmIAAnswer, cstmIAAnswer.prototype.v25858949839469d7389869d7422938d5 = function() {
  var b = this;
  var element = this.v5f4cdb6ea6de093c616bf3c15856623b.vc8b676833bd2a234af6258d5b0eaed0b(this.vaebd76e9a8cf8ebfbe6633b5d9f5130c);
  this.v3fd47ba9816429df46e0e1a83ad6237d.html(element.getText());
  this.v72e04914c7cec688d0bf351cfd07e583(this.v7bc590baa81f45702e8356d236c2c8f9, element.v64885c753f1a2ac4cb90660ac56b0ebf() && element.vd86e6406fa6b6be128a500e650f063c0());
  this.v7bc590baa81f45702e8356d236c2c8f9.click(function() {
    b.vdd4f52acdc7b64dd4875ef7a0c3d30f2();
  });
  this.vb23354d011a0e16f4f4fb3afcd425697(this.v7bc590baa81f45702e8356d236c2c8f9, element.vf54368e5465a6424c7b13edea0dc5514());
  var c = this.v5f4cdb6ea6de093c616bf3c15856623b.v800f60f6c2b93d4bdd9176061ba61cb8();
  if (element.v64885c753f1a2ac4cb90660ac56b0ebf() || c) {
    this.vc5a8a53c2e6128a2112d2d4171ec358b(element);
  }
}, cstmIAAnswer.prototype.vc5a8a53c2e6128a2112d2d4171ec358b = function(suppressDisabledCheck) {
  this.v7bc590baa81f45702e8356d236c2c8f9.hide();
  if (suppressDisabledCheck.vd86e6406fa6b6be128a500e650f063c0()) {
    this.v1586e62cb30ed6be0c2eb40056b766d5.css("display", "inline-block");
    this.vd106f62d3dd3e620caa872058e8ac8ae.hide();
  } else {
    this.v1586e62cb30ed6be0c2eb40056b766d5.hide();
    this.vd106f62d3dd3e620caa872058e8ac8ae.css("display", "inline-block");
  }
  this.v3fd47ba9816429df46e0e1a83ad6237d.addClass(suppressDisabledCheck.vd86e6406fa6b6be128a500e650f063c0() ? "iaStepAnswerCorrect" : "iaStepAnswerIncorrect");
}, cstmIAAnswer.prototype.vdd4f52acdc7b64dd4875ef7a0c3d30f2 = function() {
  this.v5f4cdb6ea6de093c616bf3c15856623b.vedc9a4dbd210fcc9ed309e405e8de7bd(this.vaebd76e9a8cf8ebfbe6633b5d9f5130c);
  this.v32807337688fccef8615e097a02c12fa.v9b5082d15f260cb8c11eb8b1277bc5ae();
}, cstmIAPanel.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), cstmIAPanel.prototype.constructor = cstmIAPanel, cstmIAPanel.prototype.v25858949839469d7389869d7422938d5 = function() {
  var self = this;
  /**
   * @return {undefined}
   */
  this.v5f4cdb6ea6de093c616bf3c15856623b.vc9d104dbc44b382858444790101f211d = function() {
    self.update();
  };
  this.v82539666111a8872d88d89692eeb7e8e.click(function() {
    self.v2e4f10ad01b426e6a61281d11a8d2f70();
  });
  this.v8141e65cbc9d45a8d85d00d543f5fae5.click(function() {
    self.v914d72cc401b49077e3aae56ee69ec8e();
  });
  this.v429a5b4e8b909c62a0f91af5d2cc8ef8.click(function() {
    self.v4e59e2549b9fca823e3d9247a639e50f();
  });
  if ($("#instruction-pane").css("position") == "relative") {
    this.v6047b69c8a310baba26d5e2b4c9745f3.css("max-height", window.innerHeight - 294);
    $(window).resize(function() {
      self.v6047b69c8a310baba26d5e2b4c9745f3.css("max-height", window.innerHeight - 294);
      self.v15534a76234b4251c0428deeed87f88e(self.v6047b69c8a310baba26d5e2b4c9745f3);
    });
  }
  this.v6047b69c8a310baba26d5e2b4c9745f3.scroll(function() {
    self.v15534a76234b4251c0428deeed87f88e($(this));
  });
}, cstmIAPanel.prototype.v9b5082d15f260cb8c11eb8b1277bc5ae = function() {
  var ObjectOperation = this;
  this.vdcb6b5baaa05212e029dfaa27fcc9be0 = this.selector.find(".ui-status-link:visible");
  this.vbb5f93de24c01fca8aaa6311f3a55b74 = this.selector.find(".ui-status:visible");
  this.vdcb6b5baaa05212e029dfaa27fcc9be0.on("click", _.bind(function() {
    /** @type {boolean} */
    this.vfe140cb3e0738d28bbd0446fb78c730b = true;
    this.v3b3a7b2ac5fd147e76038ef35d002c95();
  }, this));
  this.v545161b2622e693157bef1f54295e409.text(this.v5f4cdb6ea6de093c616bf3c15856623b.v8609d971a7f9d9e9a59d9b67c6193db4());
  this.v60f36bb07db2bc067b95fa9bdaf2a9b9.text(this.v5f4cdb6ea6de093c616bf3c15856623b.v85d3ec3b57e10a644653ebd156127a1c());
  this.v3fd47ba9816429df46e0e1a83ad6237d.html(this.v5f4cdb6ea6de093c616bf3c15856623b.getText());
  var b = this.v3fd47ba9816429df46e0e1a83ad6237d.find("img");
  /** @type {number} */
  var i = 0;
  for (; i < b.length; ++i) {
    b.eq(i).attr("src", v13260862a5e36823cb5546b59af48c71.instance.v95f91532f5d26784e6a15cd56a90103d(b.eq(i).attr("src")));
  }
  var wizard_button = this.v3fd47ba9816429df46e0e1a83ad6237d.find("a");
  wizard_button.click(function(a) {
    ObjectOperation.v361fef7f07d8f50ecaa8a62883e8a060(a);
  });
  this.v9e43f9bfccbb16b4e0993d87012e0ca7.empty();
  var c = this.v5f4cdb6ea6de093c616bf3c15856623b.v0da9dd2e268f1727da1ce0f4796e2b87();
  if (c) {
    var g = new cstmIAQuestion(this, this.v5f4cdb6ea6de093c616bf3c15856623b);
    g.v4cfcb53978fd83231c75b36f997e0b9e(this.v9e43f9bfccbb16b4e0993d87012e0ca7);
  }
  var h = this.v5f4cdb6ea6de093c616bf3c15856623b.v8e7764e3203046f9adc22fbb5623d81f();
  var w = this.v5f4cdb6ea6de093c616bf3c15856623b.vd2cfefc7ba62bcd6af8f423b6a43419e();
  this.vb23354d011a0e16f4f4fb3afcd425697(this.v82539666111a8872d88d89692eeb7e8e, this.v5f4cdb6ea6de093c616bf3c15856623b.vb74ee64fc703e9b33950f3ec997738c0());
  this.vb23354d011a0e16f4f4fb3afcd425697(this.v8141e65cbc9d45a8d85d00d543f5fae5, this.v5f4cdb6ea6de093c616bf3c15856623b.v7ca9047c3bffde03ac0e42854c79dd42());
  this.v82539666111a8872d88d89692eeb7e8e.toggle(true);
  this.v8141e65cbc9d45a8d85d00d543f5fae5.toggle(true);
  this.v429a5b4e8b909c62a0f91af5d2cc8ef8.toggle(false);
  if (h == 1 && w == 1) {
    this.v8141e65cbc9d45a8d85d00d543f5fae5.toggle(false);
    this.v429a5b4e8b909c62a0f91af5d2cc8ef8.toggle(this.v5f4cdb6ea6de093c616bf3c15856623b.v1f9df860ebde4c9413655dcda0a1a197() && this.va1d4c079519e74028f642eb03ad9c6a6.veeb1e6b2a6705038dda3a20889b4abb8() == 0);
  }
  if (this.v5f4cdb6ea6de093c616bf3c15856623b.v1feeac4319d478f11a1492faa29bedf4()) {
    this.v823edac3d33c5d0dbc7b812862ac4f0a.html(U.vc0e6c88f8413e92781b652ae2786391a("Continuation Mode"));
    this.v3fd47ba9816429df46e0e1a83ad6237d.html(this.v5f4cdb6ea6de093c616bf3c15856623b.continuationText);
    this.v9e43f9bfccbb16b4e0993d87012e0ca7.empty();
    this.v33d8ec925067b83a3aac2229bb589498.toggle(false);
  }
  var currentFileOpen = this.v5f4cdb6ea6de093c616bf3c15856623b.vfd9f85e6ef4d150d380d673bd9c14e6c();
  var geoJSON_str = this.v5f4cdb6ea6de093c616bf3c15856623b.vb3833c28c256ca9c9af7728d015eacaa();
  this.vbb5f93de24c01fca8aaa6311f3a55b74.toggle(currentFileOpen);
  this.vd5deee2146777a1f93aa41ab97da644b.text(geoJSON_str);
  this.v5b474e99ba90392949d7662344042669.text(this.v8b0a072695b58b0a45136c53e73acace());
  this.vbb5f93de24c01fca8aaa6311f3a55b74.find(".popover-content").html(this.v95a180449b8c7af203195c039ad2e96c());
  this.v15534a76234b4251c0428deeed87f88e(this.v6047b69c8a310baba26d5e2b4c9745f3);
}, cstmIAPanel.prototype.v38c39b145c08119aa3c22db19f2652cf = function() {
  var n = this.v5f4cdb6ea6de093c616bf3c15856623b.v0a3909c18cb9353d50fea436a682a98e();
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var a = 0;
  /** @type {number} */
  var shtStart = 0;
  /** @type {number} */
  var start_gradient = 0;
  /** @type {number} */
  var maxTime = 0;
  var quiet = this.va1d4c079519e74028f642eb03ad9c6a6.questionGradePoints;
  /** @type {number} */
  var numLEDs = 0;
  /** @type {number} */
  var col = 100;
  var e = new v66c57333da7c74fe1e71f772d64e7b5c(this.va1d4c079519e74028f642eb03ad9c6a6);
  for (; e.v7ca9047c3bffde03ac0e42854c79dd42();) {
    var x = e.vf17cf019f3d08beae6fd901e2c35dbfc();
    shtStart = shtStart + x.length;
    /** @type {number} */
    var i = 0;
    for (; i < x.length; ++i) {
      var suit = x[i];
      if (suit.v64885c753f1a2ac4cb90660ac56b0ebf()) {
        a++;
        if (suit.vd86e6406fa6b6be128a500e650f063c0()) {
          b++;
        }
      }
    }
    e.v9db475ccb0d3a5c8e3d49c8aa3639b09();
  }
  numLEDs = this.va1d4c079519e74028f642eb03ad9c6a6.v54c686ebedd549e011a9c239a0bda52d();
  if (a > 0) {
    /** @type {number} */
    start_gradient = b / a;
  }
  if (a > 0) {
    /** @type {number} */
    maxTime = b * quiet / a;
  }
  /** @type {boolean} */
  var float = n != v2609cf4415e9e2bdeac9bc70c0e1d78d.vaf25e507dca82a8a4f14b61667a122f6;
  return col = col - quiet, {
    vfdea2418dc80a69ed5b3877bad813bb7 : shtStart,
    v0c5bc48dded3951bc508a3bc1d7ebe09 : float,
    v6464b19f04022be0fc66c6a21e5f1cc3 : this.vd068d228aecc1b1ea1005b5478552381(maxTime),
    v8c050a2a7c15c12449c29d86b8f3ba20 : this.vd068d228aecc1b1ea1005b5478552381(quiet),
    vaaf375657dea7ffbf10dc9deaeda0282 : b,
    v9e094105789677f33d2a6b4d92ff3351 : a,
    vb38fa3036eb39471d5e01292c85b716b : start_gradient,
    v5f0b9f7ee31205785c77ff5913205bdd : this.vd068d228aecc1b1ea1005b5478552381(numLEDs * col),
    v5750038ef32d4e2903b4f8f123d144c8 : this.vd068d228aecc1b1ea1005b5478552381(col)
  };
}, cstmIAPanel.prototype.v95a180449b8c7af203195c039ad2e96c = function() {
  var e = this.v38c39b145c08119aa3c22db19f2652cf();
  /** @type {string} */
  var t = "";
  return e.vfdea2418dc80a69ed5b3877bad813bb7 > 0 && (t = t + "<p>", t = t + ("<strong>" + U.vc0e6c88f8413e92781b652ae2786391a("Questions: {0} of {1} points", [U.v790f397a5458e475c4d492eae29578af(e.v6464b19f04022be0fc66c6a21e5f1cc3), U.v790f397a5458e475c4d492eae29578af(e.v8c050a2a7c15c12449c29d86b8f3ba20)]) + "</strong><br>"), t = t + (U.vc0e6c88f8413e92781b652ae2786391a("Total Correct = {0}", [e.vaaf375657dea7ffbf10dc9deaeda0282]) + "<br>"), t = t + (U.vc0e6c88f8413e92781b652ae2786391a("Total # of Tries = {0}",
  [e.v9e094105789677f33d2a6b4d92ff3351]) + "<br>"), e.v0c5bc48dded3951bc508a3bc1d7ebe09 && (t = t + (U.vc0e6c88f8413e92781b652ae2786391a("Score = {0} or ({1}&divide;{2})", [U.v2628ffda04642057c9557483709c86b2(e.vb38fa3036eb39471d5e01292c85b716b), e.vaaf375657dea7ffbf10dc9deaeda0282, e.v9e094105789677f33d2a6b4d92ff3351]) + "<br>")), t = t + "</p>"), e.v0c5bc48dded3951bc508a3bc1d7ebe09 && this.va1d4c079519e74028f642eb03ad9c6a6.hasGoal && (t = t + "<p>", t = t + ("<strong>" + U.vc0e6c88f8413e92781b652ae2786391a("{0}{1} of {2} points",
  [this.va1d4c079519e74028f642eb03ad9c6a6.vadc404ef3a5730a22c9f4b0dd8cd11e5, U.v790f397a5458e475c4d492eae29578af(e.v5f0b9f7ee31205785c77ff5913205bdd), U.v790f397a5458e475c4d492eae29578af(e.v5750038ef32d4e2903b4f8f123d144c8)]) + "</strong><br>"), t = t + (this.va1d4c079519e74028f642eb03ad9c6a6.vdcaa29a0b13f88397f460b1b978ac54f() + "<br>"), t = t + "</p>"), t;
}, cstmIAPanel.prototype.v8b0a072695b58b0a45136c53e73acace = function() {
  var tl = this.v38c39b145c08119aa3c22db19f2652cf();
  return U.vc0e6c88f8413e92781b652ae2786391a("{0} of {1} points", [tl.v6464b19f04022be0fc66c6a21e5f1cc3 + tl.v5f0b9f7ee31205785c77ff5913205bdd, tl.v8c050a2a7c15c12449c29d86b8f3ba20 + tl.v5750038ef32d4e2903b4f8f123d144c8]);
}, cstmIAPanel.prototype.v3b3a7b2ac5fd147e76038ef35d002c95 = function() {
  if (this.vdcb6b5baaa05212e029dfaa27fcc9be0.next("div.popover:visible").length == 0) {
    this.vdcb6b5baaa05212e029dfaa27fcc9be0.popover({
      title : 'Grade Details  <a id=\'closeStatus\' href="#" style="float: right;"><span id="closeStatus" class="glyphicon glyphicon-remove" aria-hidden="true"\'></span></a>',
      html : true,
      content : this.v95a180449b8c7af203195c039ad2e96c(),
      trigger : "manual",
      placement : "top"
    });
    this.vdcb6b5baaa05212e029dfaa27fcc9be0.popover("show");
    this.vdcb6b5baaa05212e029dfaa27fcc9be0.on("shown.bs.popover", _.bind(function() {
      $("#closeStatus").click(_.bind(function() {
        /** @type {boolean} */
        this.vfe140cb3e0738d28bbd0446fb78c730b = false;
        this.vdcb6b5baaa05212e029dfaa27fcc9be0.popover("destroy");
      }, this));
    }, this));
  }
}, cstmIAPanel.prototype.v361fef7f07d8f50ecaa8a62883e8a060 = function(a_val) {
  if (v13260862a5e36823cb5546b59af48c71.instance.vbabcd42b769666597a78c363c119b085) {
    v13260862a5e36823cb5546b59af48c71.instance.vbabcd42b769666597a78c363c119b085(a_val);
  }
}, cstmIAPanel.prototype.v914d72cc401b49077e3aae56ee69ec8e = function() {
  this.v5f4cdb6ea6de093c616bf3c15856623b.v9db475ccb0d3a5c8e3d49c8aa3639b09();
  /** @type {boolean} */
  this.vfe140cb3e0738d28bbd0446fb78c730b = false;
  this.v9b5082d15f260cb8c11eb8b1277bc5ae();
  this.v6047b69c8a310baba26d5e2b4c9745f3.scrollTop(0);
}, cstmIAPanel.prototype.v2e4f10ad01b426e6a61281d11a8d2f70 = function() {
  this.v5f4cdb6ea6de093c616bf3c15856623b.v7b8bf2ac492120241b29a8c82ff823dd();
  /** @type {boolean} */
  this.vfe140cb3e0738d28bbd0446fb78c730b = false;
  this.v9b5082d15f260cb8c11eb8b1277bc5ae();
  this.v6047b69c8a310baba26d5e2b4c9745f3.scrollTop(0);
}, cstmIAPanel.prototype.v4e59e2549b9fca823e3d9247a639e50f = function() {
  var SubmitFormComponent = this;
  if (this.va1d4c079519e74028f642eb03ad9c6a6.hasGoal) {
    Alert.show(this.v5f4cdb6ea6de093c616bf3c15856623b.earlySubmissionYesNoMessage, U.vc0e6c88f8413e92781b652ae2786391a("Early Submission"), Alert.vc20f5496a0e37947c331397006a83f07 | Alert.ve332d6adb70bc5edb5e110e004c86fa5, function(b) {
      if (b.vb6050b7f11623a051333e19572049a70 == Alert.vc20f5496a0e37947c331397006a83f07) {
        SubmitFormComponent.v5f4cdb6ea6de093c616bf3c15856623b.submit();
        v13260862a5e36823cb5546b59af48c71.instance.vddaf63a727fee74679d504b575b2220b(SubmitFormComponent.v5f4cdb6ea6de093c616bf3c15856623b.earlySubmissionEndMessage, false);
        SubmitFormComponent.v9b5082d15f260cb8c11eb8b1277bc5ae();
      }
    });
  } else {
    this.va1d4c079519e74028f642eb03ad9c6a6.v411791539f1025e5709072806aaa88b2();
    SubmitFormComponent.v5f4cdb6ea6de093c616bf3c15856623b.submit();
    v13260862a5e36823cb5546b59af48c71.instance.vddaf63a727fee74679d504b575b2220b(SubmitFormComponent.v5f4cdb6ea6de093c616bf3c15856623b.noGoalSubmissionEndMessage, false);
    SubmitFormComponent.v9b5082d15f260cb8c11eb8b1277bc5ae();
  }
}, cstmIAPanel.prototype.vd068d228aecc1b1ea1005b5478552381 = function(name) {
  return _.round(name * this.v5f4cdb6ea6de093c616bf3c15856623b.displayGradeOutOf / 100);
}, cstmIAPanel.prototype.v15534a76234b4251c0428deeed87f88e = function($this) {
  if (Math.abs($this[0].scrollHeight - $this.scrollTop() - $this.height()) > 3) {
    $(".ia-panel .step-container").addClass("text-box-shadow-bottom");
  } else {
    $(".ia-panel .step-container").removeClass("text-box-shadow-bottom");
  }
}, ctrlSocialMediaBookedAd.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), ctrlSocialMediaBookedAd.prototype.constructor = ctrlSocialMediaBookedAd, ctrlSocialMediaBookedAd.prototype.v25858949839469d7389869d7422938d5 = function() {
  var a = this;
  this.vebe0afabb0b6fa355580ccff50a785c7.text(this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e.name);
  this.v15fa9a3c6304d8b62fda7f98db9a1c9e.text(U.v008da4424a5701b4ad40bb9d6adc0daf(this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e.v634b3c0a9bd6a8c5832ce0f9a293a81b()));
  this.v6b4a7ea802b3a9ce0ebd1fcefaeaaa2f.text(U.v008da4424a5701b4ad40bb9d6adc0daf(this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e.v41d0f79952e9b7db2521f39415baff6a()));
  this.v918bcfce55b6ce8459628e28063c1b71.text(this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e.start.format("M/d/yyyy"));
  this.v977d6213f4a09d29fa4134b7e35f675a.text(this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e.end.format("M/d/yyyy"));
  if (this.vea050cd3ac04e81d33a6f8bc0a370ba3) {
    this.vf285c65fba1f5966d03002da5e1300b1.text(U.v26fd40d142e5f4ab82084c80bba46f53(this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e.v80926e8f41285f22fcb1d3fcde45ea2f()));
  } else {
    this.vf83a7a4fb8cad22e72447cf37d9e9e72.hide();
  }
  this.v8f9a8d02b590b5327b59f56f4a18fd6d.text(U.v26fd40d142e5f4ab82084c80bba46f53(this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e.vf819be597207d35d9135bd36e1e41991()));
  this.v098cd3998f4f68d8aebb6ae11e2d16ce.click(_.bind(function() {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v733015c98c79cf895db8ebb0e5cdb5f9(a.v2abbcfa7ef48bc63b2cb1b5fef05ae9e);
    a.selector.remove();
  }, this));
}, ctrlSocialMediaBookedAd.prototype.init = function(a, b) {
  /** @type {!Object} */
  this.v2abbcfa7ef48bc63b2cb1b5fef05ae9e = a;
  /** @type {number} */
  this.vea050cd3ac04e81d33a6f8bc0a370ba3 = b;
}, frmSocialMedia.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmSocialMedia.prototype.constructor = frmSocialMedia, frmSocialMedia.prototype.init = function(options) {
  if (!options) {
    options = {
      v1303bc0716ceded960976daeeaa4f6c0 : "SportsSocialMediaAd",
      v8b628ff3cd2f6a4351f2fa8344c75a71 : {
        count : 12,
        prefix : "StadiumViewAd"
      },
      events : A.vfe1c4eaec8ec40f848f9772196c532d3().events,
      v9ba3ff5a78d674d000205dc6a583219c : [{
        label : "Location:",
        v54cf8bb23ef0ee6085e9ec5cf9896893 : 3
      }, {
        label : "Age:",
        v54cf8bb23ef0ee6085e9ec5cf9896893 : 0
      }, {
        label : "Gender:",
        v54cf8bb23ef0ee6085e9ec5cf9896893 : 1
      }, {
        label : "Interests:",
        v54cf8bb23ef0ee6085e9ec5cf9896893 : 5,
        v5ac945557a3d86d1bd8ff2b46a0ac74d : [0]
      }, {
        label : "Music Preference:",
        v54cf8bb23ef0ee6085e9ec5cf9896893 : 4
      }],
      v26e73dfe3a56f3206d300be6cb681dfc : A.vfe1c4eaec8ec40f848f9772196c532d3().v02c54057b3494e305c7036bdac0cfbfe,
      v9a941cbaf3c3e1598827ad2e7c3f75d8 : ["Campaign"],
      v9aa7ee31729cf3597520195cd575b806 : ["Facebook"],
      v6402c910deb69a6de4b01c067262837a : "fa-ticket",
      v67910c26740c13bc3df1edc978bb204d : AppConstants.ve05a4ce74a9299e609b4471bce0365bc,
      v9dafcc58bfcfa14698a25f85b8b6c422 : 0,
      vea050cd3ac04e81d33a6f8bc0a370ba3 : false
    };
  }
  /** @type {!Object} */
  this.config = options;
  /** @type {!Array} */
  this.v3b66f752fa6fd586f1bc41029e374183 = [];
  /** @type {number} */
  var n = 0;
  for (; n < this.config.v8b628ff3cd2f6a4351f2fa8344c75a71.count; ++n) {
    this.vee8e15dc2407fa1ec3333867e4595568.push(this.config.v8b628ff3cd2f6a4351f2fa8344c75a71.prefix + n);
    this.v3b66f752fa6fd586f1bc41029e374183.push(n);
  }
  /** @type {number} */
  var cluster_index = 1983;
  this.vee8e15dc2407fa1ec3333867e4595568.shuffle(cluster_index);
  this.v3b66f752fa6fd586f1bc41029e374183.shuffle(cluster_index);
}, frmSocialMedia.prototype.v25858949839469d7389869d7422938d5 = function() {
  var self = this;
  /** @type {number} */
  this.v144f3285037788b94d6c3ab1c0121f5b = 2e3;
  this.v0ecc93c0cd273f36eae30fbb9e7adf49.datepicker();
  this.v03be7f8a6ca4386b4312267efb068eaa.datepicker();
  this.v0ecc93c0cd273f36eae30fbb9e7adf49.datepicker("setDate", A.vfe1c4eaec8ec40f848f9772196c532d3().now);
  this.v03be7f8a6ca4386b4312267efb068eaa.datepicker("setDate", KMDate.v14cbf0b8c1f93e62dd191db1badd576b);
  this.vb91883bc74eb846dcb5876098c22d085(this.v03be7f8a6ca4386b4312267efb068eaa, {
    placement : "bottom",
    date : true,
    required : true
  });
  this.selector.find("input[type=radio][name=endDateRadios]").change(function() {
    if (this.value == "0") {
      self.v2a3e216374fbe18dba3811397a148ba6(self.v03be7f8a6ca4386b4312267efb068eaa, "required");
      self.v03be7f8a6ca4386b4312267efb068eaa.css("visibility", "hidden");
    } else {
      self.vc6b04fbd6f6093abb7168c5b3691f369(self.v03be7f8a6ca4386b4312267efb068eaa, "required", true);
      self.v03be7f8a6ca4386b4312267efb068eaa.css("visibility", "visible");
    }
  });
  this.v72e04914c7cec688d0bf351cfd07e583(this.v24bb33d94471a4b45ec97506ffeb0532, true);
  this.v24bb33d94471a4b45ec97506ffeb0532.change();
  /** @type {boolean} */
  var g = true;
  if (!this.config.events) {
    this.v01ecdb8eda7eb98ddeaeba6de0ed290d.remove();
  } else {
    if (this.config.events.length == 0) {
      this.vca74b57cc21b62f0ec859321c025c58c.empty();
      var subtitles_selector = $("<h5></h5>");
      subtitles_selector.html(U.vc0e6c88f8413e92781b652ae2786391a("No events currently booked.<br>To create a social media ad, book an event first."));
      subtitles_selector.appendTo(this.vca74b57cc21b62f0ec859321c025c58c);
      /** @type {boolean} */
      g = false;
    } else {
      this.va269105e13fc39be7a138407825f03b8.change(function(b) {
        self.vd1cbb200ec3811ac62aaf1c68973e127(b);
      });
      this.vc85905445b80cd56d359581eaf15dab5(this.va269105e13fc39be7a138407825f03b8, A.vfe1c4eaec8ec40f848f9772196c532d3().events);
      this.v00a94e177afe39f3cefb7b639e554084(this.va269105e13fc39be7a138407825f03b8, 0);
      this.vd1cbb200ec3811ac62aaf1c68973e127();
    }
  }
  if (g) {
    this.selector.dialog("option", "height", 600);
    /** @type {number} */
    var b = 0;
    for (; b < this.config.v9ba3ff5a78d674d000205dc6a583219c.length; b++) {
      var content = this.config.v9ba3ff5a78d674d000205dc6a583219c[b];
      var now = U.vc0e6c88f8413e92781b652ae2786391a("<label>{0}</label><div>", content.label.replace("{entityName}", A.vfe1c4eaec8ec40f848f9772196c532d3().vaf2a576127494a53d0e079f0ed12d0e1.toString()));
      var monitoringResult = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[content.v54cf8bb23ef0ee6085e9ec5cf9896893];
      /** @type {number} */
      var i = 0;
      for (; i < monitoringResult.v5de2781193aad09bc0f0b17b09a59e96.length; i++) {
        /** @type {string} */
        now = now + ("<div><label class='labelbs2'><input type=checkbox > " + monitoringResult.v5de2781193aad09bc0f0b17b09a59e96[i] + "</label></div>");
      }
      /** @type {string} */
      now = now + "</div>";
      var w = this["target" + b];
      w.html(now);
      w.find("input").click(function(b) {
        self.update(b);
      });
      if (content.v5ac945557a3d86d1bd8ff2b46a0ac74d) {
        _.forEach(content.v5ac945557a3d86d1bd8ff2b46a0ac74d, function(a) {
          w.find("input:eq(" + a + ")").prop("checked", true).parents("div").first().hide();
        });
      }
    }
    _.forEach(this.config.v9a941cbaf3c3e1598827ad2e7c3f75d8, function(not) {
      self.v24ef354e1e54200d10606158577a3a99(self.va64df8427d54ec38f7e344f787f9eb98, not + " Budget");
    });
    this.va64df8427d54ec38f7e344f787f9eb98.change(function() {
      var USERNAME_CLS = self.vd78c85ea564436eb68c887d307e89fe8();
      self.selector.find(".budget").hide();
      self.selector.find("." + USERNAME_CLS).show();
    });
    this.vda382259ac0b8ca429107a6d4220772a(this.va64df8427d54ec38f7e344f787f9eb98, this.config.v9a941cbaf3c3e1598827ad2e7c3f75d8[0] + " Budget");
    this.va64df8427d54ec38f7e344f787f9eb98.change();
    this.vb91883bc74eb846dcb5876098c22d085(this.uiBudgetAmount, {
      placement : "bottom",
      currency : true,
      min : 1,
      max : 1e6
    });
    if (this.config.v9aa7ee31729cf3597520195cd575b806.length == 1) {
      this.vb5c5feae076f8f68264517efa9e97488.hide();
      this.selector.find(".panel-heading").hide();
    }
    _.forEach(this.config.v9aa7ee31729cf3597520195cd575b806, function(ColorRange) {
      self["uiPlatform" + ColorRange].prop("checked", true);
    });
    this.ve52139272aba5b52af261ab940231e6b.click(function() {
      var b = new frmImagePicker;
      b.init(self.vee8e15dc2407fa1ec3333867e4595568, function(b) {
        self.v389ef5507550fcd5ede0e822e4ca2b76(b);
      });
      b.show();
    });
    this.v8eb8b47039d5afb227771e809696f5f3.keyup(function() {
      self.selector.find(".uiAdText").text(self.v8eb8b47039d5afb227771e809696f5f3.val());
      self.update();
    });
    this.v93e66dab94682f08774ef0e6b0ce2155.keyup(function() {
      self.vfacc6d98daa450e99728fa1bee4c5fb2.text(self.v93e66dab94682f08774ef0e6b0ce2155.val());
      self.update();
    });
    this.v9d836bff8836f70b08ad6cf8a2f953cf.click(function(b) {
      self.v3ae9dd013ad3ad28d75e609b9357474a(b);
    });
    if (this.config.vea050cd3ac04e81d33a6f8bc0a370ba3 === false) {
      this.v4abf57cf17f2650d0a3010b61189549e.hide();
    }
    this.v5d8abae7ab39a420f9c1bef751e0aa33.addClass(this.config.v6402c910deb69a6de4b01c067262837a);
    this.v84e77e9fba95d2bf69f5c39e1349dc0a.html("@" + A.vfe1c4eaec8ec40f848f9772196c532d3().vaf2a576127494a53d0e079f0ed12d0e1.va1a9256b841b3cba31acaee5ae938127(this.vc22528f6f67c96a40e226f7422a34b41(this.va269105e13fc39be7a138407825f03b8)));
    this.vb91883bc74eb846dcb5876098c22d085(this.v93e66dab94682f08774ef0e6b0ce2155, {
      placement : "top",
      required : true
    });
    this.vb91883bc74eb846dcb5876098c22d085(this.v8eb8b47039d5afb227771e809696f5f3, {
      placement : "top",
      required : true
    });
    this.vb91883bc74eb846dcb5876098c22d085(this.v515f83f8408c9531e8e1c6c181c73821, {
      placement : "top",
      required : true
    });
    this.vb91883bc74eb846dcb5876098c22d085(this.v0ecc93c0cd273f36eae30fbb9e7adf49, {
      placement : "top",
      date : true,
      required : true
    });
    this.update();
  }
  this.v74ff2df5e5049ffec7a061cd674c061c();
  /**
   * @return {undefined}
   */
  this.va8419377bfc6aed8420a10bef2db97d9 = function() {
    self.v74ff2df5e5049ffec7a061cd674c061c();
  };
  A.v87b8393064cbfa8977b32cec36a69d86().v78a0d9c392e941b31d879e634e670a93(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va8419377bfc6aed8420a10bef2db97d9);
}, frmSocialMedia.prototype.update = function(c) {
  var b = this;
  /** @type {number} */
  this.v144f3285037788b94d6c3ab1c0121f5b = 0;
  var a = this.v2dd91eaa6fcd89ccd783615d41e89c4b();
  vee8206b276787f6d065f935010a51f0c(this, this.config.v26e73dfe3a56f3206d300be6cb681dfc, function(simplePermissionResolver) {
    if (simplePermissionResolver.vc3effcd23d6a6b02fe9cbd1b1916754a(a)) {
      b.v144f3285037788b94d6c3ab1c0121f5b++;
    }
  });
  this.v144f3285037788b94d6c3ab1c0121f5b *= AppConstants.vc193bb6e31c995632984f31ab00fb382;
  this.ved34b3fdbbac4739cdc803af70870d23.text(U.vc0e6c88f8413e92781b652ae2786391a("{0} people", U.v26fd40d142e5f4ab82084c80bba46f53(this.v144f3285037788b94d6c3ab1c0121f5b)));
  this.vc5b47004825f0e690af79be6681b595b.html(this.v2a0392022c07f23d3c6c3fdc96fd6917(a));
}, frmSocialMedia.prototype.v2dd91eaa6fcd89ccd783615d41e89c4b = function() {
  /** @type {*} */
  var v2abbcfa7ef48bc63b2cb1b5fef05ae9e$jscomp$0 = eval("new " + this.config.v1303bc0716ceded960976daeeaa4f6c0 + "()");
  /** @type {!Array} */
  v9ba3ff5a78d674d000205dc6a583219c = [];
  /** @type {number} */
  var i$jscomp$45 = 0;
  for (; i$jscomp$45 < this.config.v9ba3ff5a78d674d000205dc6a583219c.length; i$jscomp$45++) {
    var numHiddenAlwaysChecked$jscomp$0 = this.config.v9ba3ff5a78d674d000205dc6a583219c[i$jscomp$45].v5ac945557a3d86d1bd8ff2b46a0ac74d ? this.config.v9ba3ff5a78d674d000205dc6a583219c[i$jscomp$45].v5ac945557a3d86d1bd8ff2b46a0ac74d.length : 0;
    var t$jscomp$2 = this.vad1c8d065bddec38e2ce845dbd58d548(this["target" + i$jscomp$45].find("input"), numHiddenAlwaysChecked$jscomp$0);
    v9ba3ff5a78d674d000205dc6a583219c.vc2b55451d6b5a973b456d3ad090abf8d(t$jscomp$2);
  }
  var event$jscomp$0 = this.vc22528f6f67c96a40e226f7422a34b41(this.va269105e13fc39be7a138407825f03b8);
  var endDate$jscomp$0 = KMDate.v14cbf0b8c1f93e62dd191db1badd576b;
  if (this.v16136cb06deaee4201ff7aa124ae1cc1.is(":checked")) {
    endDate$jscomp$0 = new KMDate(this.v03be7f8a6ca4386b4312267efb068eaa.datepicker("getDate"));
  }
  /** @type {number} */
  var campaignBudget$jscomp$0 = 0;
  /** @type {number} */
  var vf4f59ced3c2961312e8076ce98a275d0$jscomp$0 = 0;
  return this.vd78c85ea564436eb68c887d307e89fe8() == "Campaign" ? campaignBudget$jscomp$0 = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(this.v54c2849df4d1306e7988f0cb953901d1(this.uiBudgetAmount)) : vf4f59ced3c2961312e8076ce98a275d0$jscomp$0 = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(this.v54c2849df4d1306e7988f0cb953901d1(this.uiBudgetAmount)), v2abbcfa7ef48bc63b2cb1b5fef05ae9e$jscomp$0.init(event$jscomp$0, A.vfe1c4eaec8ec40f848f9772196c532d3().vaf2a576127494a53d0e079f0ed12d0e1, this.config.v67910c26740c13bc3df1edc978bb204d,
  this.config.v9dafcc58bfcfa14698a25f85b8b6c422, this.v93e66dab94682f08774ef0e6b0ce2155.val(), this.v8eb8b47039d5afb227771e809696f5f3.val(), this.v3b66f752fa6fd586f1bc41029e374183[this.vda9e67191f98a064bb69597a51e31a77], this.v515f83f8408c9531e8e1c6c181c73821.val(), campaignBudget$jscomp$0, vf4f59ced3c2961312e8076ce98a275d0$jscomp$0, new KMDate(this.v0ecc93c0cd273f36eae30fbb9e7adf49.datepicker("getDate")), endDate$jscomp$0, v9ba3ff5a78d674d000205dc6a583219c), v2abbcfa7ef48bc63b2cb1b5fef05ae9e$jscomp$0;
}, frmSocialMedia.prototype.v3ae9dd013ad3ad28d75e609b9357474a = function(end_time) {
  if (this.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2 == 0) {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
    return;
  }
  var QueryLanguageComponent = this.v2dd91eaa6fcd89ccd783615d41e89c4b();
  A.vfe1c4eaec8ec40f848f9772196c532d3().v68c33c5087902d5d889f5a5d43c5609d(QueryLanguageComponent);
  Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Your ad has been booked. To check on ad effectiveness or to cancel the ad, use Booked Ads area at the bottom of this form."));
  this.v74ff2df5e5049ffec7a061cd674c061c();
}, frmSocialMedia.prototype.vad1c8d065bddec38e2ce845dbd58d548 = function(c, outs) {
  /** @type {!Array} */
  var backPlugins = [];
  /** @type {number} */
  var j = 0;
  for (; j < c.length; j++) {
    if (this.v7b2414fd4f791c2847f4cc04cca8ab39(c.eq(j))) {
      backPlugins.vc2b55451d6b5a973b456d3ad090abf8d(j);
    }
  }
  if (backPlugins.length == outs) {
    /** @type {!Array} */
    backPlugins = [];
    /** @type {number} */
    j = 0;
    for (; j < c.length; j++) {
      backPlugins.vc2b55451d6b5a973b456d3ad090abf8d(j);
    }
  }
  return backPlugins;
}, frmSocialMedia.prototype.v389ef5507550fcd5ede0e822e4ca2b76 = function(result) {
  if (result.vb6050b7f11623a051333e19572049a70 == Alert.OK) {
    this.vda9e67191f98a064bb69597a51e31a77 = result.index;
    var QueryLanguageComponent = this.vee8e15dc2407fa1ec3333867e4595568[result.index];
    this.v7c664b7a4f17e9fa371acf932e7fa0f4.attr("src", A.v87b8393064cbfa8977b32cec36a69d86().imageAtlas.vbf8e2df2ca388d714195e268a3817f20(QueryLanguageComponent, 0, 0));
  }
}, frmSocialMedia.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v47b44c6d075887ab9a3527111f5d02f0(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va8419377bfc6aed8420a10bef2db97d9);
}, frmSocialMedia.prototype.v2a0392022c07f23d3c6c3fdc96fd6917 = function(strip1) {
  var crossfilterable_layers = strip1.vd74843ad779680b8b53f5ef22092218b();
  if (crossfilterable_layers.length > 0) {
    /** @type {string} */
    var a = "";
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < crossfilterable_layers.length; layer_i++) {
      /** @type {string} */
      a = a + (crossfilterable_layers[layer_i] + ", ");
    }
    return a = a.substring(0, a.length - 2), U.vc0e6c88f8413e92781b652ae2786391a("<span class='label label-info'>Heads up!</span> Your headline or text should contain {0}.", a);
  } else {
    return "";
  }
}, frmSocialMedia.prototype.v74ff2df5e5049ffec7a061cd674c061c = function() {
  this.v4f20a267897733b9d6415a7390c3ed9f.empty();
  /** @type {number} */
  var category = 0;
  for (; category < A.vfe1c4eaec8ec40f848f9772196c532d3().v1eab4bee75e197c02188c0130ba375c4.length; category++) {
    var c = A.vfe1c4eaec8ec40f848f9772196c532d3().v1eab4bee75e197c02188c0130ba375c4[category];
    if (c.v19b0e59fd9e60e73c916593d2966c14a.v2020540b63a842879572ac66e3edaad8()) {
      var utils = new ctrlSocialMediaBookedAd;
      utils.init(c, this.config.vea050cd3ac04e81d33a6f8bc0a370ba3);
      utils.v4cfcb53978fd83231c75b36f997e0b9e(this.v4f20a267897733b9d6415a7390c3ed9f);
    }
  }
}, frmSocialMedia.prototype.vd1cbb200ec3811ac62aaf1c68973e127 = function(end_time) {
  var e = this.vc22528f6f67c96a40e226f7422a34b41(this.va269105e13fc39be7a138407825f03b8);
  var date = e.date;
  this.v0ecc93c0cd273f36eae30fbb9e7adf49.datepicker("setDate", date.addDays(-A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad));
  this.v03be7f8a6ca4386b4312267efb068eaa.datepicker("setDate", date);
  this.v72e04914c7cec688d0bf351cfd07e583(this.v16136cb06deaee4201ff7aa124ae1cc1, true);
  this.v16136cb06deaee4201ff7aa124ae1cc1.change();
  this.v84e77e9fba95d2bf69f5c39e1349dc0a.html("@" + A.vfe1c4eaec8ec40f848f9772196c532d3().vaf2a576127494a53d0e079f0ed12d0e1.va1a9256b841b3cba31acaee5ae938127(e));
}, frmSocialMedia.prototype.vd78c85ea564436eb68c887d307e89fe8 = function() {
  return _.words(this.vc22528f6f67c96a40e226f7422a34b41(this.va64df8427d54ec38f7e344f787f9eb98))[0];
}, frmImagePicker.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmImagePicker.prototype.constructor = frmImagePicker, frmImagePicker.prototype.init = function(a, b) {
  /** @type {!Object} */
  this.vee8e15dc2407fa1ec3333867e4595568 = a;
  /** @type {!Function} */
  this.v389ef5507550fcd5ede0e822e4ca2b76 = b;
}, frmImagePicker.prototype.v25858949839469d7389869d7422938d5 = function() {
  var _indexeddbManager2 = this;
  /** @type {number} */
  var category = 0;
  for (; category < this.vee8e15dc2407fa1ec3333867e4595568.length; category++) {
    var c = this.vee8e15dc2407fa1ec3333867e4595568[category];
    var b = $("<div>");
    b.addClass("item");
    if (category == 0) {
      b.addClass("active");
    }
    var res = $('<img crossorigin="anonymous">');
    res.attr("src", A.v87b8393064cbfa8977b32cec36a69d86().imageAtlas.vbf8e2df2ca388d714195e268a3817f20(c, 0, 0));
    res.attr("alt", "");
    res.appendTo(b);
    b.appendTo(this.vfe4a21d8c93ea7e31d2b8ce6646b9192);
  }
  this.vd6a870d3efe6ae34263f3240215360c3.carousel({
    interval : U.vdfcca307a0489ee3baf51069dd57c8b3
  });
  this.vd6a870d3efe6ae34263f3240215360c3.bind("slid.bs.carousel", function(a) {
    _indexeddbManager2.vda9e67191f98a064bb69597a51e31a77 = _indexeddbManager2.vfe4a21d8c93ea7e31d2b8ce6646b9192.find(".item").index(_indexeddbManager2.vfe4a21d8c93ea7e31d2b8ce6646b9192.find(".active"));
  });
}, frmImagePicker.prototype.vb540f788e8f32fe7332cc5f501463a2e = function(a) {
  this.close();
  if (this.v389ef5507550fcd5ede0e822e4ca2b76) {
    this.v389ef5507550fcd5ede0e822e4ca2b76({
      vb6050b7f11623a051333e19572049a70 : Alert.OK,
      index : this.vda9e67191f98a064bb69597a51e31a77
    });
  }
}, frmImagePicker.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
  if (this.v389ef5507550fcd5ede0e822e4ca2b76) {
    this.v389ef5507550fcd5ede0e822e4ca2b76({
      vb6050b7f11623a051333e19572049a70 : Alert.v6a489fc7ebc373a001c1badd1759c1eb
    });
  }
}, vd138cb05a88280b0280d6453d52bc72f.prototype = Object.create(Object.prototype), vd138cb05a88280b0280d6453d52bc72f.prototype.constructor = vd138cb05a88280b0280d6453d52bc72f, vd138cb05a88280b0280d6453d52bc72f.prototype.init = function(type, d, c, word, index, value, id, pkg, ctx, userId, start, end, startOptions) {
  /** @type {!Object} */
  this.event = type;
  /** @type {number} */
  this.v19b0e59fd9e60e73c916593d2966c14a = d;
  /** @type {number} */
  this.v67910c26740c13bc3df1edc978bb204d = c;
  /** @type {!Object} */
  this.v9dafcc58bfcfa14698a25f85b8b6c422 = word;
  /** @type {number} */
  this.v5ae1c15d7e62dad6e01739890ebff05c = index;
  /** @type {number} */
  this.text = value;
  /** @type {number} */
  this.vda9e67191f98a064bb69597a51e31a77 = id;
  /** @type {string} */
  this.name = pkg;
  /** @type {number} */
  this.v0875cd0d35de060fac2413e2561ed3e8 = ctx;
  /** @type {number} */
  this.vf4f59ced3c2961312e8076ce98a275d0 = userId;
  /** @type {string} */
  this.start = start;
  /** @type {number} */
  this.end = end;
  /** @type {!Array} */
  this.v9ba3ff5a78d674d000205dc6a583219c = startOptions;
  /** @type {number} */
  this.cost = 0;
  this.v6eeccac475c117b1fc0fca078cf5758a = new va90451cb6693c26de1b0a7e889cb49ec(7);
  /** @type {number} */
  this.impressions = 0;
  /** @type {number} */
  this.clicks = 0;
  /** @type {number} */
  this.v428996a5a3176dd7d2c14f50f1b7eb06 = 0;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.vd74843ad779680b8b53f5ef22092218b = function() {
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v22570d004e4ad923cabf52b851981bf4 = function() {
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v8a943411f0ccea2ca6d7da95da60ea5a = function() {
  return this.start && A.vfe1c4eaec8ec40f848f9772196c532d3().now < this.start ? false : this.end && A.vfe1c4eaec8ec40f848f9772196c532d3().now > this.end ? false : true;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v075a828610f3539bd644a217b12b95c5 = function() {
  this.v6eeccac475c117b1fc0fca078cf5758a.v075a828610f3539bd644a217b12b95c5();
  this.v428996a5a3176dd7d2c14f50f1b7eb06++;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v634b3c0a9bd6a8c5832ce0f9a293a81b = function() {
  return this.v0875cd0d35de060fac2413e2561ed3e8 > 0 ? this.v0875cd0d35de060fac2413e2561ed3e8 : this.vf4f59ced3c2961312e8076ce98a275d0 > 0 ? this.vf4f59ced3c2961312e8076ce98a275d0 : 0;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v41d0f79952e9b7db2521f39415baff6a = function() {
  return this.vf4f59ced3c2961312e8076ce98a275d0 > 0 ? this.v29663747acefad7866fb6eac44c3f9dd("cost") : this.cost;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.vf819be597207d35d9135bd36e1e41991 = function() {
  return this.vf4f59ced3c2961312e8076ce98a275d0 > 0 ? this.v29663747acefad7866fb6eac44c3f9dd("clicks") : this.clicks;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v80926e8f41285f22fcb1d3fcde45ea2f = function() {
  return this.vf4f59ced3c2961312e8076ce98a275d0 > 0 ? this.v29663747acefad7866fb6eac44c3f9dd("impressions") : this.impressions;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.vfabd3e9a65423b9692804fecc7e9e066 = function() {
  return this.v0e9059fbcc7d60e9041930c6e3593082() > 0;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v0e9059fbcc7d60e9041930c6e3593082 = function() {
  /** @type {number} */
  var minPxPerValUnit = 99999999999;
  if (this.v0875cd0d35de060fac2413e2561ed3e8 > 0) {
    /** @type {number} */
    minPxPerValUnit = this.v0875cd0d35de060fac2413e2561ed3e8 - this.cost;
  }
  /** @type {number} */
  var dtStep = 99999999999;
  return this.vf4f59ced3c2961312e8076ce98a275d0 > 0 && (dtStep = this.vf4f59ced3c2961312e8076ce98a275d0 - this.v6eeccac475c117b1fc0fca078cf5758a.v56100d152191cc0094194d65fad29ea9("cost")), Math.min(minPxPerValUnit, dtStep);
}, vd138cb05a88280b0280d6453d52bc72f.prototype.ve9f49046b906dcea8eb4d9668ce191e8 = function() {
  return this.impressions += AppConstants.vc193bb6e31c995632984f31ab00fb382, this.v6eeccac475c117b1fc0fca078cf5758a.v44c1a3e86179c154513849b0c0c7d845("impressions", AppConstants.vc193bb6e31c995632984f31ab00fb382), this.v9dafcc58bfcfa14698a25f85b8b6c422 > 0 ? this.veaa416f0ee1b1125b0724759f821620c(this.v9dafcc58bfcfa14698a25f85b8b6c422 / 1e3) : void 0;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v3dd84f48e4a0a9c71b39c201bb0374ab = function() {
  return this.clicks++, this.v6eeccac475c117b1fc0fca078cf5758a.v44c1a3e86179c154513849b0c0c7d845("clicks", 1), this.v67910c26740c13bc3df1edc978bb204d > 0 ? this.veaa416f0ee1b1125b0724759f821620c(this.v67910c26740c13bc3df1edc978bb204d) : 0;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.veaa416f0ee1b1125b0724759f821620c = function(cost) {
  /** @type {number} */
  cost = Math.min(cost, this.v0e9059fbcc7d60e9041930c6e3593082());
  return this.cost += cost, this.v6eeccac475c117b1fc0fca078cf5758a.v44c1a3e86179c154513849b0c0c7d845("cost", cost), cost;
}, vd138cb05a88280b0280d6453d52bc72f.prototype.v29663747acefad7866fb6eac44c3f9dd = function(name) {
  var result = this.v6eeccac475c117b1fc0fca078cf5758a.getData(name);
  return result.length == 0 ? 0 : Math.round(_.sum(result) / Math.min(this.v428996a5a3176dd7d2c14f50f1b7eb06, result.length));
};
var A = {};
A.v87b8393064cbfa8977b32cec36a69d86 = function() {
  return v13260862a5e36823cb5546b59af48c71.instance;
}, A.vfe1c4eaec8ec40f848f9772196c532d3 = function() {
  return v13260862a5e36823cb5546b59af48c71.instance.state;
}, A.v50156c5418a59f9fb151a3917f9026dd = function() {
  return v13260862a5e36823cb5546b59af48c71.instance.state.settings;
}, App.prototype = Object.create(v1847d6dd008ed9b56a6f12d60cf3baa6.prototype), App.prototype.constructor = App, App.prototype.init = function() {
  v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.init.call(this);
  var config = Globalize.culture();
  /** @type {!Array} */
  config.numberFormat.currency.pattern = ["($n)", "$n"];
}, App.v0b80be0fe683ced875570d0901cb9a08 = KMDate.v2fcf16dfff5594cfa1614c820237b41e, App.v8252cb86c8a2011cc11d17a3fca89bf7 = true, App.prototype.v1d8e13eaa3dbf661d08c7876bee2a701 = function() {
  this.v27c3f3572e66d1e83d49936047773b90(new v613d4f2132e130828cd3ce4bc8d385ba("City", "CityBack"));
  var contollerName = this.vabcd33e3b9c74fa33e39751d0b5bb0c4("atlasFolder", "");
  this.imageAtlas = new v251b1192a8aabb238f203138491e353a("imageAtlas", "images/assets/" + contollerName + "/atlas.json", "images/assets/" + contollerName + "/", 3);
  this.ve73dea9acbf620681c07bd7874aa1b91(this.imageAtlas);
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSponsorships", "vbs2/forms/frmSponsorships.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSponsorshipsc1", "vbs2/forms/frmSponsorshipsc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmBookEvent", "vbs2/forms/frmBookEvent.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmBookEventc1", "vbs2/forms/frmBookEventc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmCalendar2", "vbs2/forms/frmCalendar2.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmCalendar", "vbs2/forms/frmCalendar.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmCalendarc1", "vbs2/forms/frmCalendarc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmConcessions", "vbs2/forms/frmConcessions.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmConcessionsc1", "vbs2/forms/frmConcessionsc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmEventReport", "vbs2/forms/frmEventReport.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmEventReportc1", "vbs2/forms/frmEventReportc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmFinancialsSports", "vbs2/forms/frmFinancialsSports.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmMedia", "vbs2/forms/frmMedia.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmMediac1", "vbs2/forms/frmMediac1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmParking", "vbs2/forms/frmParking.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmPlayerMgt", "vbs2/forms/frmPlayerMgt.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmPlayerMgtc1", "vbs2/forms/frmPlayerMgtc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSimpleInput", "vbs2/forms/frmSimpleInput.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSponsorResponse", "vbs2/forms/frmSponsorResponse.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSponsorships", "vbs2/forms/frmSponsorships.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSponsorshipsc1", "vbs2/forms/frmSponsorshipsc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmStaffing", "vbs2/forms/frmStaffing.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmStaffingc1", "vbs2/forms/frmStaffingc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmStandings", "vbs2/forms/frmStandings.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmStandingsc1", "vbs2/forms/frmStandingsc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmTicketPrices", "vbs2/forms/frmTicketPrices.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmTicketPricesc1", "vbs2/forms/frmTicketPricesc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmBandProfilesReport", "vbs2/forms/frmBandProfilesReport.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmBandProfilesReportc1", "vbs2/forms/frmBandProfilesReportc1.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSocialMedia", "../VBXF/socialMedia/frmSocialMedia.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmImagePicker", "../VBXF/socialMedia/frmImagePicker.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("ctrlSocialMediaBookedAd", "../VBXF/socialMedia/ctrlSocialMediaBookedAd.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSurvey", "../VBXF/survey/frmSurvey.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmSurveyResults", "../VBXF/survey/frmSurveyResults.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmFinancials", "../VBXF/biz/frmFinancials.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmJournal", "../VBXF/components/frmJournal.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmInstructorAuth", "../VBXF/components/frmInstructorAuth.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("frmProvideCash", "../VBXF/components/frmProvideCash.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("cstmIAPanel", "../VBXF/ia/cstmIAPanel.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("cstmIAQuestion", "../VBXF/ia/cstmIAQuestion.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new vd3a20b3f053d0b94eba2b5fcbac7523d("cstmIAAnswer", "../VBXF/ia/cstmIAAnswer.html"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v5b2d49b6f83f05f0edcd351a1640c3e4("BuildingTypes", "tables/BuildingTypes.txt", "BuildingType"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v5b2d49b6f83f05f0edcd351a1640c3e4("SurveyQuestions", "tables/SurveyQuestions.txt", "SurveyQuestion"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("ConcessionMap", "data/ConcessionMap.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("ParkingMap", "data/ParkingMap.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("StadiumMap", "data/StadiumMap.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("BandDataCollegeMRL", "data/BandDataCollegeMRL.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("BandDataCollegeMRC", "data/BandDataCollegeMRC.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("BandDataCollegeSegL", "data/BandDataCollegeSegL.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("BandDataCollegeSegC", "data/BandDataCollegeSegC.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("BandDataCollegeVPL", "data/BandDataCollegeVPL.json"));
  this.ve73dea9acbf620681c07bd7874aa1b91(new v98d829b48a3d1a2b42d1454357ce024d("BandDataCollegeVPC", "data/BandDataCollegeVPC.json"));
  this.v27c3f3572e66d1e83d49936047773b90(new StadiumView("Stadium"));
  this.v27c3f3572e66d1e83d49936047773b90(new ConcessionsView("Concessions", "ConcessionsBack"));
  this.v27c3f3572e66d1e83d49936047773b90(new ParkingView("Parking", "ParkingBack"));
  v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.v1d8e13eaa3dbf661d08c7876bee2a701.call(this);
}, App.prototype.va7230642e1efe5cb8038388896a7ede8 = function() {
  v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.va7230642e1efe5cb8038388896a7ede8.call(this);
  this.vfadc6bbdc8c1ee6e5ff9c6b34e7b0352 = new vba23fed1cde0c4dc1aa35591715fe27e;
  this.vfadc6bbdc8c1ee6e5ff9c6b34e7b0352.load(A.v87b8393064cbfa8977b32cec36a69d86().vd158edc9dfa3e501e772c8418accaf12("ConcessionMap"));
  this.vf252aa2b1e3ffe0ec1a5f9434ea1cb2e = new vba23fed1cde0c4dc1aa35591715fe27e;
  this.vf252aa2b1e3ffe0ec1a5f9434ea1cb2e.load(this.vd158edc9dfa3e501e772c8418accaf12("ParkingMap"));
  this.v8d45560ed400ebd1f03af3fc6d1488ba = new vba23fed1cde0c4dc1aa35591715fe27e;
  this.v8d45560ed400ebd1f03af3fc6d1488ba.load(this.vd158edc9dfa3e501e772c8418accaf12("StadiumMap"));
  City.v3c84bd376fc4d4288af347a33b07bed1 = this.vd158edc9dfa3e501e772c8418accaf12("BuildingTypes").rows;
  v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8 = this.vd158edc9dfa3e501e772c8418accaf12("SurveyQuestions").rows;
  vee8206b276787f6d065f935010a51f0c(this, v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8, function(relativeResource) {
    relativeResource.v5de2781193aad09bc0f0b17b09a59e96 = relativeResource.PossibleResponsesConcatenated.split("|");
  });
  var view = this.getView("Stadium");
  if (view && this.designerModeEnabled) {
    view.v02b056e930cff9954b96608f731c25ab("adAnalytics", U.vc0e6c88f8413e92781b652ae2786391a("Ad Analytics"));
  }
}, App.prototype.v4e4196bb0c0f02581b3ed42ade5593d0 = function() {
  var a = new vdc7bffe0f07ec5a6ead012015e4ffad8;
  return a;
}, App.prototype.update = function() {
  v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.update.call(this);
}, App.prototype.veb454d77ab7b624357ed04915af03732 = function(e, type) {
  try {
    if (v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.veb454d77ab7b624357ed04915af03732.call(this, e, type) == 0) {
      return;
    }
    switch(e) {
      case "ActionsJournal":
        var a = new frmJournal(A.vfe1c4eaec8ec40f848f9772196c532d3().v669ff646b5846079385e704f4920c16e);
        a.show();
        break;
      case "ProvideCash":
        /**
         * @return {undefined}
         */
        var message = function() {
          var $innerblock = new frmProvideCash(-1e7, 1e7, function(range) {
            A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.v01859ba9e7439f2a5b7f5a04bbdcae01("Cash", U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(range), "Paid-in Capital");
            A.vfe1c4eaec8ec40f848f9772196c532d3().v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Instructor provided {0} in cash.", U.v0ea35f447d08124fa72648dd7f4ff64c(range)));
          });
          $innerblock.show();
        };
        frmInstructorAuth.show(U.vc0e6c88f8413e92781b652ae2786391a("This feature lets your instructor provide emergency extra cash to your business. It's most useful in projects where you may have spent a long time setting up your business and do not want to go out of business."), "https://" + this.serverURL, A.v87b8393064cbfa8977b32cec36a69d86().v6f632cd35a0abd3341ffe233a1c9869f, message);
        break;
      case "LoadLessonIAState":
        this.v6d5f0970fd6e58bfa65e8168c9a2b788();
        break;
      case "City":
        A.v87b8393064cbfa8977b32cec36a69d86().v340558ffd115b57bc46b4fc03332c5c3("City");
        break;
      case "Stadium":
        A.v87b8393064cbfa8977b32cec36a69d86().v340558ffd115b57bc46b4fc03332c5c3("Stadium");
        break;
      case "Parking":
        A.v87b8393064cbfa8977b32cec36a69d86().v340558ffd115b57bc46b4fc03332c5c3("Parking");
        break;
      case "Concessions":
        A.v87b8393064cbfa8977b32cec36a69d86().v340558ffd115b57bc46b4fc03332c5c3("Concessions");
        break;
      case "financials":
        a = new frmFinancialsSports;
        a.show();
        break;
      case "calendar2":
        a = new frmCalendar2;
        a.init(A.vfe1c4eaec8ec40f848f9772196c532d3().events);
        a.show();
        break;
      case "calendar":
        a = new frmCalendar(false);
        a.init(A.vfe1c4eaec8ec40f848f9772196c532d3().events);
        a.show();
        break;
      case "calendarPast":
        a = new frmCalendar(true);
        a.init(A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998);
        a.show();
        break;
      case "standings":
        a = new frmStandings;
        a.show();
        break;
      case "bandProfilesReport":
        a = new frmBandProfilesReport;
        a.show();
        break;
      case "marketResearch":
        var cXAPI = A.vfe1c4eaec8ec40f848f9772196c532d3();
        a = new frmSurvey(new v9e58c00cb8ac8b69cee816bb8e1fba25, false);
        if (cXAPI != null) {
          a.vc01c694811d1f8812e633ef525deaeea(cXAPI.v669ff646b5846079385e704f4920c16e);
        }
        a.show();
        break;
      case "staffing":
        if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
          a = new frmStaffing;
          a.show();
        }
        break;
      case "ticketPrices":
        a = new frmTicketPrices;
        a.show();
        break;
      case "media":
        a = new frmMedia;
        a.show();
        break;
      case "socialMedia":
        a = new frmSocialMedia;
        a.init();
        a.show();
        break;
      case "concessions":
        if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
          a = new frmConcessions;
          a.show();
        }
        break;
      case "playerMgt":
        if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
          a = new frmPlayerMgt;
          a.show();
        }
        break;
      case "parkingAction":
        if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
          a = new frmParking;
          a.show();
        }
        break;
      case "sponsorships":
        A.v87b8393064cbfa8977b32cec36a69d86().v340558ffd115b57bc46b4fc03332c5c3("City");
        Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("To sell a sponsorship, click one of the taller buildings in the City view."), U.vc0e6c88f8413e92781b652ae2786391a("Sponsorships"));
        break;
      case "bookEvent":
        a = new frmBookEvent;
        a.init(A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00);
        a.show();
        break;
    }
  } catch (legitError) {
    this.v18b787c851fb531af767cb510d7ec0b6(legitError);
  }
}, App.prototype.evaluateGoal = function(name) {
  var a = v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.evaluateGoal.call(this, name);
  if (_.isUndefined(A.vfe1c4eaec8ec40f848f9772196c532d3().va1d4c079519e74028f642eb03ad9c6a6)) {
    return a;
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().va1d4c079519e74028f642eb03ad9c6a6.vfecb515f393e1763a171ef62dc8d6894()) {
    var scope = A.vfe1c4eaec8ec40f848f9772196c532d3();
    var assert = scope.v4aa4655e25af5596003edec8b91c0099;
    switch(name) {
      case "test":
        /** @type {number} */
        var d = 5e6;
        var input = A.vfe1c4eaec8ec40f848f9772196c532d3().v0807b10421945f1ffe532fa1aeabe3f6;
        /** @type {number} */
        a.progress = Math.max(0, Math.min(1, input / U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)));
        a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your highest season profit so far is {0}. Your goal is {1}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(input), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "ticketPricing":
        /** @type {number} */
        d = 415e3;
        /** @type {number} */
        a.progress = 0;
        var self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(2);
        if (self != undefined) {
          var value = assert.vabe5369fddac296adb56cc7a33e9265f("Profit", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          if (value >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)) {
            /** @type {number} */
            a.progress = 1;
          } else {
            a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your profit for the last game was {0}. Your goal is {1}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(value), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "staffing":
        /** @type {number} */
        a.progress = 0;
        /** @type {number} */
        d = 2e5;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(3);
        if (self != undefined) {
          var t = assert.vabe5369fddac296adb56cc7a33e9265f("Fan Injuries", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          var value = assert.vabe5369fddac296adb56cc7a33e9265f("Ushers", self.v6df93cee8d46ebc1cd5d0ef23df99e6b) + assert.vabe5369fddac296adb56cc7a33e9265f("Stadium Security", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          if (self.vab16aa458a4596ea3ac46e68100c6491 == 0 && value <= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d) && t == 0) {
            /** @type {number} */
            a.progress = 1;
          } else {
            if (value > U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your spending on stadium staff for the last event was {0}. Your goal is {1}. ", [U.v008da4424a5701b4ad40bb9d6adc0daf(value), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
            }
            if (self.vab16aa458a4596ea3ac46e68100c6491 > 0) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("You had {0} fans move down at your last event. ", U.v26fd40d142e5f4ab82084c80bba46f53(self.vab16aa458a4596ea3ac46e68100c6491));
            }
            if (t > 0) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("You were sued for fan injuries at your last event. ");
            }
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "parking":
        /** @type {number} */
        a.progress = 0;
        /** @type {number} */
        d = 27e4;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(0);
        if (self != undefined) {
          var n = assert.vabe5369fddac296adb56cc7a33e9265f("Parking", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          if (n > U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)) {
            /** @type {number} */
            a.progress = 1;
          } else {
            a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your total parking revenue for the last event was {0}. Your goal is {1}. ", [U.v008da4424a5701b4ad40bb9d6adc0daf(n), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "concessions":
        /** @type {number} */
        a.progress = 0;
        /** @type {number} */
        d = 1e5;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(1);
        if (self != undefined) {
          n = assert.vabe5369fddac296adb56cc7a33e9265f("Concessions", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          var val = assert.vabe5369fddac296adb56cc7a33e9265f("COGS", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          var v = assert.vabe5369fddac296adb56cc7a33e9265f("Concession Workers", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          var m = assert.vabe5369fddac296adb56cc7a33e9265f("Concession Stands", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          /** @type {number} */
          value = n - val - v - m;
          if (value > U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)) {
            /** @type {number} */
            a.progress = 1;
          } else {
            a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your concessions revenue for the last event was {0}. Your concession expenses were: cost of goods {1}, staff {2}, stands {3}. Your concessions profit was {4}. Your profit goal is {5}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(n), U.v008da4424a5701b4ad40bb9d6adc0daf(val), U.v008da4424a5701b4ad40bb9d6adc0daf(v), U.v008da4424a5701b4ad40bb9d6adc0daf(m), U.v008da4424a5701b4ad40bb9d6adc0daf(value), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "ingress":
        /** @type {number} */
        d = 205e3;
        /** @type {number} */
        a.progress = 0;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(2);
        if (self != undefined) {
          var value = assert.vabe5369fddac296adb56cc7a33e9265f("Satellite Lots ", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          value = value + assert.vabe5369fddac296adb56cc7a33e9265f("Busses", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          value = value + assert.vabe5369fddac296adb56cc7a33e9265f("Ticket Takers", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          value = value + assert.vabe5369fddac296adb56cc7a33e9265f("Parking Cashiers", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          value = value + assert.vabe5369fddac296adb56cc7a33e9265f("Parking Attendants", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          if (value <= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d) && self.v8f8491c225d2abbf8b262e22fbe97f5a.size() == 0) {
            /** @type {number} */
            a.progress = 1;
          } else {
            if (self.v8f8491c225d2abbf8b262e22fbe97f5a.size() > 0) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("At your last event, you had customer complaints. Check your Event Report. ");
            } else {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("At your last event, you met your goal of having no customer complaints. ");
            }
            if (value > U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your parking related spending was {0}. Your goal is {1} or lower.", [U.v008da4424a5701b4ad40bb9d6adc0daf(value), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
            } else {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your parking related spending was {0}. You met your goal of {1} or lower.", [U.v008da4424a5701b4ad40bb9d6adc0daf(value), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
            }
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "pickingBand":
        /** @type {number} */
        a.progress = 0;
        /** @type {number} */
        d = 705e3;
        input = A.vfe1c4eaec8ec40f848f9772196c532d3().v0807b10421945f1ffe532fa1aeabe3f6;
        if (input >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)) {
          /** @type {number} */
          a.progress = 1;
        } else {
          a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your season profit so far is {0}. Your goal is {1}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(input), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "traditionalMedia":
        /** @type {number} */
        a.progress = 0;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(2);
        /** @type {number} */
        var start = 1e5;
        /** @type {number} */
        var node = 13e3;
        if (self != undefined) {
          var codeStart = assert.vabe5369fddac296adb56cc7a33e9265f("Traditional Media", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          var offset = self.v5f33401ce224a4ceb44ca8df8fb8ddb4();
          if (codeStart <= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(start) && offset >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(node)) {
            /** @type {number} */
            a.progress = 1;
          } else {
            if (codeStart > U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(start)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your spending on traditional media promotion for the last event was above the goal.");
            }
            if (offset >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(node)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your attendance for the last event was below the goal.");
            }
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "socialMedia":
        /** @type {number} */
        a.progress = 0;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(2);
        /** @type {number} */
        start = 5e4;
        /** @type {number} */
        node = 6e3;
        if (self != undefined) {
          codeStart = assert.vabe5369fddac296adb56cc7a33e9265f("Social Media", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          offset = self.v5f33401ce224a4ceb44ca8df8fb8ddb4();
          if (codeStart <= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(start) && offset >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(node)) {
            /** @type {number} */
            a.progress = 1;
          } else {
            if (codeStart > U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(start)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your spending on socia media promotion for the last event was above the goal.");
            }
            if (offset < U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(node)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your attendance for the last event was below the goal.");
            }
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "sponsorships":
        /** @type {number} */
        d = 13e5;
        /** @type {number} */
        a.progress = 0;
        var assetStats = scope.vb769a155273c6f5814e00dfd13079e79[scope.vb769a155273c6f5814e00dfd13079e79.length - 1];
        var kvs = assert.vabe5369fddac296adb56cc7a33e9265f("Sponsorships", assetStats.v6df93cee8d46ebc1cd5d0ef23df99e6b);
        if (kvs >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d)) {
          /** @type {number} */
          a.progress = 1;
        } else {
          a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your sponsorship revenue is {0}. Your goal is {1}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(kvs), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        /** @type {boolean} */
        var remote = true;
        /** @type {number} */
        var i = 0;
        for (; i < AppConstants.v3dc21c661fe07a5e52f1899265b6f03e.length && remote == 1; i++) {
          if (_.isUndefined(scope.ve6f4e105cfb31f8ce52e52fc02dad3ef[i]) || scope.ve6f4e105cfb31f8ce52e52fc02dad3ef[i].length < AppConstants.v3dc21c661fe07a5e52f1899265b6f03e[i]) {
            /** @type {boolean} */
            remote = false;
          }
        }
        if (a.progress < 1 && remote) {
          this.vd0f687eee85fde566ae2560bd231dabe(U.vc0e6c88f8413e92781b652ae2786391a("<p>Sorry, you did not meet the goal.</p><p>{0}</p><p>Let's go back to the start of the goal step and try it again.</p>", [a.v2b06b88b4b74e9bad008259a615da76b]), U.vc0e6c88f8413e92781b652ae2786391a("Missed Goal, Try Again"));
        }
        break;
      case "playerManagement":
        /** @type {number} */
        a.progress = 0;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v63ec58f85edd0930f9c91d005982c7a9(3);
        /** @type {number} */
        start = 0;
        /** @type {number} */
        node = 3e6;
        if (self != undefined) {
          /** @type {number} */
          var projection = assert.vabe5369fddac296adb56cc7a33e9265f("Player Salaries", self.v6df93cee8d46ebc1cd5d0ef23df99e6b) * AppConstants.vfa371ff1fe334e349e7626d4ecebbdce;
          value = assert.vabe5369fddac296adb56cc7a33e9265f("Profit", self.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          if (value >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(start) && projection <= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(node)) {
            /** @type {number} */
            a.progress = 1;
          } else {
            if (value < U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(start)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your profit for the last event was below the goal.");
            }
            if (offset >= U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(node)) {
              a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your salary level for the last event was above the goal.");
            }
          }
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "project":
        /** @type {number} */
        d = 5e6;
        input = A.vfe1c4eaec8ec40f848f9772196c532d3().v0807b10421945f1ffe532fa1aeabe3f6;
        /** @type {number} */
        a.progress = Math.max(0, Math.min(1, (input - U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(-d)) / (2 * U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d))));
        a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your highest season profit so far is {0}. Your goal is {1}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(input), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "COLLMKTG_MarketResearchC":
        d = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(this.state.va1d4c079519e74028f642eb03ad9c6a6.vdb6830c9272b35533eb3835a76ba959a(1));
        /** @type {number} */
        var b = 0;
        _.each(A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998, function(a) {
          b = b + a.v5f33401ce224a4ceb44ca8df8fb8ddb4();
        });
        /** @type {number} */
        a.progress = Math.max(0, Math.min(1, b / d));
        a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your total attendance, through today, is {0}. Your goal is {1}.", [U.v26fd40d142e5f4ab82084c80bba46f53(b), U.v26fd40d142e5f4ab82084c80bba46f53(d)]);
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "COLLMKTG_SegmentationC":
        d = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(this.state.va1d4c079519e74028f642eb03ad9c6a6.vdb6830c9272b35533eb3835a76ba959a(0));
        /** @type {number} */
        b = 0;
        var size = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(this.state.va1d4c079519e74028f642eb03ad9c6a6.vdb6830c9272b35533eb3835a76ba959a(1));
        /** @type {number} */
        var value = 0;
        _.each(A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998, function(currentWsdl) {
          b = b + currentWsdl.v5f33401ce224a4ceb44ca8df8fb8ddb4();
          value = value + assert.vabe5369fddac296adb56cc7a33e9265f("Promotion", currentWsdl.v6df93cee8d46ebc1cd5d0ef23df99e6b);
        });
        _.each(A.vfe1c4eaec8ec40f848f9772196c532d3().events, function(currentWsdl) {
          value = value + assert.vabe5369fddac296adb56cc7a33e9265f("Promotion", currentWsdl.v6df93cee8d46ebc1cd5d0ef23df99e6b);
        });
        /** @type {number} */
        a.progress = Math.max(0, Math.min(1, b / d));
        a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your total attendance, through today, is {0}. Your goal is {1} total attendance. ", [U.v26fd40d142e5f4ab82084c80bba46f53(b), U.v26fd40d142e5f4ab82084c80bba46f53(d)]);
        if (value <= size) {
          a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your spending of {0} is within your budget of {1}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(value), U.v008da4424a5701b4ad40bb9d6adc0daf(size)]);
        } else {
          a.v2b06b88b4b74e9bad008259a615da76b += U.vc0e6c88f8413e92781b652ae2786391a("Your spending of {0} is over your budget of {1}. You will lose one point for every thousand dollars over budget.", [U.v008da4424a5701b4ad40bb9d6adc0daf(value), U.v008da4424a5701b4ad40bb9d6adc0daf(size)]);
          a.progress -= Math.ceil((value - size) / U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(1e3)) / 100;
          /** @type {number} */
          a.progress = Math.max(0, a.progress);
        }
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "COLLMKTG_EthicsC":
        d = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(this.state.va1d4c079519e74028f642eb03ad9c6a6.vdb6830c9272b35533eb3835a76ba959a(0));
        /** @type {number} */
        b = 0;
        _.each(A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998, function(todoInfo) {
          if (todoInfo.date > new KMDate(2022, 8, 20)) {
            b = b + todoInfo.v5f33401ce224a4ceb44ca8df8fb8ddb4();
          }
        });
        /** @type {number} */
        a.progress = Math.max(0, Math.min(1, b / d));
        a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your total attendance for the final six games, through today, is {0}. Your goal is {1}.", [U.v26fd40d142e5f4ab82084c80bba46f53(b), U.v26fd40d142e5f4ab82084c80bba46f53(d)]);
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
      case "COLLMKTG_VPSportsEntertainmentC":
        d = this.state.va1d4c079519e74028f642eb03ad9c6a6.vdb6830c9272b35533eb3835a76ba959a(0);
        input = A.vfe1c4eaec8ec40f848f9772196c532d3().v0807b10421945f1ffe532fa1aeabe3f6;
        /** @type {number} */
        a.progress = Math.max(0, Math.min(1, (input - U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(-d)) / (2 * U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(d))));
        a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Your season profit so far is {0}. Your goal is {1}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(input), U.v0ea35f447d08124fa72648dd7f4ff64c(d)]);
        /** @type {boolean} */
        a.complete = a.progress == 1;
        break;
    }
  }
  return a.complete && (a.v2b06b88b4b74e9bad008259a615da76b = U.vc0e6c88f8413e92781b652ae2786391a("Congratulations! You have met the goal.")), this.vae1f2e4943997b71fd998e8427bfaf5a(a), a;
}, App.prototype.vbee376c0bae5a5bb92840e65cd0a702e = function() {
  v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.vbee376c0bae5a5bb92840e65cd0a702e.call(this);
  var showPackageUse = A.v50156c5418a59f9fb151a3917f9026dd().ShowSeasonProfit;
  /** @type {boolean} */
  var showExamples = A.vfe1c4eaec8ec40f848f9772196c532d3().now.getFullYear() > A.v50156c5418a59f9fb151a3917f9026dd().StartDate.getFullYear();
  $("#vital-sign-lastSeasonProfit").css("display", showPackageUse && showExamples ? "inline" : "none");
  $("#vital-sign-lastSeasonProfit-value").html(U.v008da4424a5701b4ad40bb9d6adc0daf(A.vfe1c4eaec8ec40f848f9772196c532d3().vfa07d262205646e6a7f5064eeefdefe6(A.vfe1c4eaec8ec40f848f9772196c532d3().now.getFullYear() - 1)));
  $("#vital-sign-seasonProfit").css("display", showPackageUse ? "inline" : "none");
  $("#vital-sign-seasonProfit-value").html(U.v008da4424a5701b4ad40bb9d6adc0daf(A.vfe1c4eaec8ec40f848f9772196c532d3().vfa07d262205646e6a7f5064eeefdefe6(A.vfe1c4eaec8ec40f848f9772196c532d3().now.getFullYear())));
  /** @type {number} */
  A.vfe1c4eaec8ec40f848f9772196c532d3().v0807b10421945f1ffe532fa1aeabe3f6 = Math.max(A.vfe1c4eaec8ec40f848f9772196c532d3().v0807b10421945f1ffe532fa1aeabe3f6, A.vfe1c4eaec8ec40f848f9772196c532d3().vfa07d262205646e6a7f5064eeefdefe6(A.vfe1c4eaec8ec40f848f9772196c532d3().now.getFullYear()));
}, App.prototype.vaeb908ed67e23e2effa91c60386513e7 = function(p1__3354_SHARP_) {
  v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.vaeb908ed67e23e2effa91c60386513e7.call(this, p1__3354_SHARP_);
  if (!p1__3354_SHARP_) {
    $("#LoadLessonIAState").remove();
  }
}, App.prototype.setState = function(uri) {
  if (v1847d6dd008ed9b56a6f12d60cf3baa6.prototype.setState.call(this, uri), this.v83a32b210710422f615794e02ba5977b(), this.v9d06c44dc56ee26df3c45b6b0c7ee666() == null && this.v340558ffd115b57bc46b4fc03332c5c3("City"), !this.designerModeEnabled && this.state.settings.MustSetTeamName) {
    var $innerblock = new v0b5ca45e98587db10df97b20977d764f;
    $innerblock.show();
    /** @type {boolean} */
    this.state.settings.MustSetTeamName = false;
  }
}, App.prototype.v994d2493dcc2e547a8d7555604955b9b = function(dictionary) {
  /** @type {!Array} */
  dictionary.seasonProfitData = [];
  /** @type {!Array} */
  dictionary.winningPercentageData = [];
  /** @type {number} */
  var atime = 0;
  /** @type {number} */
  var layer_i = 0;
  var time = A.vfe1c4eaec8ec40f848f9772196c532d3().vedab99cef22a1b8617af260d141c4a13 + 1;
  var fc_chart = A.v50156c5418a59f9fb151a3917f9026dd().StartDate.getFullYear();
  for (; atime <= 0 || atime < time;) {
    var range = A.vfe1c4eaec8ec40f848f9772196c532d3().vfa07d262205646e6a7f5064eeefdefe6(fc_chart + layer_i);
    range = U.S(range);
    dictionary.seasonProfitData.push(U.round(range, 2));
    /** @type {number} */
    var e = 0;
    if (layer_i < A.vfe1c4eaec8ec40f848f9772196c532d3().v0faf23ab469bf09c0425c0af14aff4d6.length) {
      e = A.vfe1c4eaec8ec40f848f9772196c532d3().v0faf23ab469bf09c0425c0af14aff4d6[layer_i][0].v4c97ba091a1c793f8e3540e0470c67fe();
    } else {
      e = A.vfe1c4eaec8ec40f848f9772196c532d3().v02f93565126d56d279f100e7ca2660b4[0].v4c97ba091a1c793f8e3540e0470c67fe();
    }
    dictionary.winningPercentageData.push(U.round(e, 2));
    ++layer_i;
    ++atime;
  }
}, va20ff9495db61599fbda0a1307761b5b.prototype = Object.create(Object.prototype), va20ff9495db61599fbda0a1307761b5b.prototype.constructor = va20ff9495db61599fbda0a1307761b5b, va20ff9495db61599fbda0a1307761b5b.prototype.v2020540b63a842879572ac66e3edaad8 = function() {
  return true;
}, va20ff9495db61599fbda0a1307761b5b.prototype.toString = function() {
  return A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[0];
}, va20ff9495db61599fbda0a1307761b5b.prototype.va1a9256b841b3cba31acaee5ae938127 = function(game) {
  return game instanceof Game ? "go" + this.toString() + "!" : A.vfe1c4eaec8ec40f848f9772196c532d3().v1f401f9c75488d9e8d930d220f31a388() + " Events";
}, v0c87bc68b008561aa880828b743ca7f3.prototype = Object.create(v2293b4b55c00ff726961b8ed86d94131.prototype), v0c87bc68b008561aa880828b743ca7f3.prototype.constructor = v0c87bc68b008561aa880828b743ca7f3, v0c87bc68b008561aa880828b743ca7f3.prototype.init = function(b, c, a) {
  v2293b4b55c00ff726961b8ed86d94131.prototype.init.call(this, b, c, a);
  this.id = A.vfe1c4eaec8ec40f848f9772196c532d3().v15af39ec8aea0a5ca11dd4a8fec71fcc();
}, v0c87bc68b008561aa880828b743ca7f3.prototype.v863b40ac0416e30464b61284cabfefae = function() {
  return this.v49c9fa931644375b3c2fa70882fee2ce.name;
}, v0c87bc68b008561aa880828b743ca7f3.prototype.v620a8a217f581ffb6e04961d6df9f591 = function() {
  /** @type {!Array} */
  var array = [];
  var self = this;
  /** @type {null} */
  var item = null;
  var name = U.v7a7321817e214ef0146ed1ce6559a705(City.transform(this.v88673f3a94c8c528027180ca500b6677(), this.vc7ba4f1f8b072680b2f0c0e1b2565338(), this.v04c927fcd02402470c9d009cce4f0181()));
  if (this.v49c9fa931644375b3c2fa70882fee2ce.index == 8) {
    item = new v74d951e1ef91d0f189e177d58ae30d8e(name);
    /**
     * @param {!Object} b
     * @param {!CanvasRenderingContext2D} context
     * @return {undefined}
     */
    item.v793de667e5638a8684bd3ef05d3c7e8b = function(b, context) {
      context.translate(b.location.x - 10, b.location.y - 95);
      context.scale(.19, .19);
      var locals = A.v87b8393064cbfa8977b32cec36a69d86().getView("Stadium");
      A.v87b8393064cbfa8977b32cec36a69d86().renderView(context, locals, true);
    };
  } else {
    var e = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
    item = new v74d951e1ef91d0f189e177d58ae30d8e(name, "BuildingSmall" + this.v49c9fa931644375b3c2fa70882fee2ce.index + e);
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    item.v2c8c55808c5bad3b41e3da0c0a838da8 = function(event) {
      self.clickHandler(event);
    };
  }
  return array.vc2b55451d6b5a973b456d3ad090abf8d(item), array;
}, v0c87bc68b008561aa880828b743ca7f3.prototype.clickHandler = function(event) {
  if (this.v49c9fa931644375b3c2fa70882fee2ce.index >= 0 && this.v49c9fa931644375b3c2fa70882fee2ce.index < 7) {
    if (A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("sponsorships")) {
      var DemoCallBack = new frmSponsorships;
      DemoCallBack.init(this.v49c9fa931644375b3c2fa70882fee2ce.index);
      DemoCallBack.show();
    } else {
      Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Sponsorship is disabled for this lesson."));
    }
  }
}, va764f23684cfdf5e93999c88d355dec8.prototype = Object.create(City.prototype), va764f23684cfdf5e93999c88d355dec8.prototype.constructor = va764f23684cfdf5e93999c88d355dec8, va764f23684cfdf5e93999c88d355dec8.prototype.v632f98b179df940bbfdb72c39098a352 = function() {
  City.prototype.vfe86374f24d481678b492aa3ebfb920d.call(this);
  /** @type {number} */
  var j = 0;
  for (; j < this.v727174f11b72c46c5058bd7507361cc3.length; j++) {
    var ind = this.v727174f11b72c46c5058bd7507361cc3[j];
    /** @type {number} */
    var d = 0;
    for (; d < ind.length; d++) {
      var b = ind[d];
      var c = new v0c87bc68b008561aa880828b743ca7f3;
      c.init(b, 0, City.v3c84bd376fc4d4288af347a33b07bed1[7]);
      b.v17375574bbfb9faabcb31b14b68745a3(0, c);
    }
  }
  var c = this.v9d022760df6993ba095f730bb501eda0(1, 0);
  var h = new v0c87bc68b008561aa880828b743ca7f3;
  h.init(c, 0, City.v3c84bd376fc4d4288af347a33b07bed1[8]);
  c.v17375574bbfb9faabcb31b14b68745a3(0, h);
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.v47f93feadbc4a49fd383bb57098607a6; i++) {
    b = this.v39e15246ec129b1be63c7c77dae2f7b7(7).block;
    for (; b.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f < 2 && b.v4fb1e56fa30edc677394334a421f38c5 < 1;) {
      b = this.v39e15246ec129b1be63c7c77dae2f7b7(7).block;
    }
    var f = new v9a7f1a806a309bba718ecede2b1f1114;
    f.init(b, 0, City.v3c84bd376fc4d4288af347a33b07bed1[9]);
    b.v17375574bbfb9faabcb31b14b68745a3(0, f);
    this.vb8d49b229151f0596040f0ff3d4aeed1.vc2b55451d6b5a973b456d3ad090abf8d(f);
  }
  this.v2ecbf47484206af649eebb5fe0d5f0e0 = new v9a7f1a806a309bba718ecede2b1f1114;
  /** @type {number} */
  this.v2ecbf47484206af649eebb5fe0d5f0e0.vd9ddbcd17e68fd3c44c5afb6cc2e4d41 = 1e3;
  /** @type {number} */
  i = 0;
  for (; i < 7; i++) {
    b = this.v39e15246ec129b1be63c7c77dae2f7b7(7).block;
    for (; b.v93cfbeb28fa5357a3e0c8d1b4fbbbe1f < 3 && b.v4fb1e56fa30edc677394334a421f38c5 < 1;) {
      b = this.v39e15246ec129b1be63c7c77dae2f7b7(7).block;
    }
    c = new v0c87bc68b008561aa880828b743ca7f3;
    c.init(b, 0, City.v3c84bd376fc4d4288af347a33b07bed1[i]);
    b.v17375574bbfb9faabcb31b14b68745a3(0, c);
  }
  /** @type {number} */
  i = 0;
  for (; i < 20; i++) {
    var valueProgess = new va523e7ef1a952b307bde51fffa209207;
    A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(valueProgess, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    this.v2db6af2b1f5a8cf42fd2e4f228202240.vc2b55451d6b5a973b456d3ad090abf8d(valueProgess);
  }
}, va764f23684cfdf5e93999c88d355dec8.prototype.vb912ab65bc2d726bbb69ab3485173274 = function() {
  var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().random;
  /** @type {!Array} */
  var a = [];
  if (rnd.next(2) == 0) {
    var th = rnd.next(City.v4f9631522dd19702292e41f3ce23c56c);
    /** @type {!Array} */
    a = [new Point(0, th + .4), new Point(City.v64ef601857379d429114bd7619f88d25 - 1.3, th + .4)];
  } else {
    var xmin = rnd.next(City.v64ef601857379d429114bd7619f88d25);
    /** @type {!Array} */
    a = [new Point(xmin - .5, 0), new Point(xmin - .5, City.v4f9631522dd19702292e41f3ce23c56c - .6)];
  }
  if (rnd.next(2) == 0) {
    a.reverse();
  }
  /** @type {number} */
  var j = 0;
  for (; j < 2; j++) {
    a[j] = City.transform(a[j].x, a[j].y, 0);
  }
  return a;
};
var AppConstants = {};
AppConstants.vec069d60fe965032ee1f618c5fa6ac54 = 9, AppConstants.v02d7b08ac5cea0a7c21c73f891d746ab = 800, AppConstants.v49c8898981d3980f5f283dd53a9b8963 = .19, AppConstants.vfb1d103d47b20eec473331f8512352c5 = 12, AppConstants.v3c25fa1c87709911231f9a9d42ef7312 = 4, AppConstants.vb521784636f5e0dc01ece715253c9df2 = 16, AppConstants.v47f93feadbc4a49fd383bb57098607a6 = 10, AppConstants.v806298d0971e753dccf10a897084f1d4 = .33, AppConstants.vf44e562edd0759bcb2d6c7e389a43e2a = 5, AppConstants.vfa371ff1fe334e349e7626d4ecebbdce =
16, AppConstants.v1b4c75aa8e36daea4f81d74848af9713 = 3250, AppConstants.vd9de7eceaa9cd35f5b5150a42b21c277 = 9e3, AppConstants.v1b7f10a936e1b86d4f78b437f1d3c144 = 45, AppConstants.ve0ccd5a2b701f34020674a11fd1c2dcf = 3, AppConstants.vdb4b54deef995f0012f3a10f72b96fd8 = 80, AppConstants.vc1a65975468de96cd51e2d00e887bf09 = 100, AppConstants.v94e8542c080678d95bb9c696755b06a9 = 30, AppConstants.vf183dcdbf5eb8144ecf01959900a559e = 2272.72, AppConstants.v95c1f492b98bc48117e716dd8affec4f = 100, AppConstants.ve05a4ce74a9299e609b4471bce0365bc =
2, AppConstants.v73fc75654481dab89ec40b1cc4cbc7d6 = 3030.3, AppConstants.v7dd19d3debcb8c43e9f6e9195397dbad = 3030.3, AppConstants.vbce4d2b5fca611cb37028ef1ceaa8289 = 3030.3, AppConstants.vdabcd80f09042d4c53d86e04149dc8b7 = 1e5, AppConstants.v274a349231cba17047a0198b2cef8a6c = ["Ushers", "Stadium Security", "Ticket Takers", "Parking Cashiers", "Parking Attendants"], AppConstants.ve7e00fcf0ba74551dcd2ca383eb2b6c8 = ["Helps customers find seats. Prevents customers from moving to better seats.", "Maintains order and prevents fans from disrupting event.",
"Collects tickets. Two required per booth. There are 10 ticket booths.", "Collects payment at main lot. Two required per booth. There are 8 parking booths.", "Directs traffic within the main lot to speed ingress and egress."], AppConstants.ve60a6cbf837109947e2a4ab24519035a = [16, 24, 22, 18, 14], AppConstants.v716a7afaa227489336979bb194f498af = [400, 300, -1, -1, -1], AppConstants.v2d0e0d1cef70fa3af1f35dc5ca0d8001 = ["Capacity is 400 attendees per staffer.", "Capacity is 300 attendees per staffer.",
"Capacity is 1,460 attendees per staffer.", "Capacity is 525 attendees per staffer. *", "Capacity is 200 attendees per staffer. *"], AppConstants.vc426f0691decde723f2846a7af194e9b = [500, 500, 20, 16, 500], AppConstants.vff92e4a2e8ba2e007ab7bf70a559e0fb = [0, 0, 0, 2, 0], AppConstants.vb5e4ce32c29e49d46ad3e91743fd553e = [["Floor - Front", "Floor - Rear"], ["Lower Level - Middle", "Lower Level - Side"], ["Middle Level - Middle", "Middle Level - Side"], ["Upper Level - Middle", "Upper Level - Side"]],
AppConstants.vfcc3427da6e572db73c24b90a471fa1a = ["Print Media", "TV/Cable", "Radio"], AppConstants.v4e354fc4126285e50180378cebe3c1ab = ["Print media includes newspapers, magazines, journals.", "TV/Cable advertising includes broadcast and cable channels.", "Radio advertising includes all formats of radio stations."], AppConstants.v2eb4fc10d3603ad44e67e9a043292151 = [17, 20, 10], AppConstants.vc193bb6e31c995632984f31ab00fb382 = 42.34, AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44 = ["Popcorn", "Ice Cream",
"Pretzels", "Bottled Soda", "Fountain Drinks", "Chips"], AppConstants.v6a97499fbe0b2c1cf3fd63476ac38da0 = [.86, .95, .83, .95, .72, .69], AppConstants.v089fb388088a482d2c425bd0f8c4a57f = [.55, .67, .22, .57, .75, .24], AppConstants.vd4283acd004a59a240453891095d5b36 = [.9, 1.3, .9, 1.1, 1.1, .7], AppConstants.v5e7161ebab967028ebe89b678dd49171 = 200, AppConstants.vca8ae6e55aec490d5a97a8938dcd4e6a = 14, AppConstants.v7534e27db5dc624a879d255854c308a7 = 10, AppConstants.vbeddc7db8aad49145004817806c994aa =
["USA Bank", "FixMeUp Hospital", "SportsCo", "LOTSA Law Associates", "Humongous Insurance", "Big Box Hardware", "Bright Bulb Energy", "TripleClick", "Dippin Donuts", "Burger Prince", "Hey Mommy", "Ultimate Buy"], AppConstants.v013fac63de5c8640f6d2de5a0924b6be = ["Banking", "Healthcare", "Sporting Goods", "Law", "Insurance", "Retailing", "Energy", "Internet Advertising", "Breakfast Food", "Fast Food", "Domain Registration", "Electronics"], AppConstants.ve81a9e8e143d6eff6a1b19bf2f791aa2 = [2e4, 6e3,
2500, 1500, 2e4, 1e4, 44e3, 17e3, 1e4, 2e4, 6e3, 1e4], AppConstants.v1d259387f3274a7359abaeaf01c1e51c = [.7, .5, 1, .7, .7, .8, .6, .7, .8, .7, .8, .7], AppConstants.vc69a0bfea595701b9e74a61d65c52ad6 = ["Field Level Sign", "Ticket Booth Sign", "Scoreboard Sign", "Skybox", "Stadium Naming Rights"], AppConstants.v3dc21c661fe07a5e52f1899265b6f03e = [3, 1, 1, 3, 1], AppConstants.v41d5b410e9a302c7922003bf33177e3e = [1e3, 4e3, 8e3, 8e3, 4e4], AppConstants.vdc4daad68e2dd75bac89def9f99b2470 = [800, 3e3,
7e3, -1, -1], AppConstants.v8d85cfd7d97ee75fe8a84dae51684460 = ["Bruno Earth|The Green Peas|M&M|Pl!nk|Justin Beeper|J too Low|5 Cents|ROFL|Flow Rider|$heka|Howl City|Reblecca Back|Britney Spearmint|Nicky Mirage|Lady haha|Bull Pit|Katy Ferry|Sea Low", "Nillie Welson|Mississippi|Gone Fishin'|Southern Boys|Denim Brothers|Gumbo|Dixie Sun|Bubba's Tractor|Shaina Twang|Rodeo Road|Spurs 'n' Mud|Faith Valley|Rattlesnake Revival|Ghost Town Settlers|Lonely Highway|Taylor Slow|Carrie Would|Nashville Stars",
"Dark Morning|Metallic|Plutonium|AD/BC|Black|Loud Music|Shred|Mossy Ozborn|Hiss|Pyrotechnica|Screaming Riffs|Thunder Axe|Hard Ground|Broken Charge|Iron Lad|Warrior|The Abyss|Octane X", "Lincoln's Park|Cold Day|Ice Patrol|Smashing Apples|The Black Stripes|Videohead|Breezer|Redcard|Goatee A|Audiocolor|Diet Water|Kings of Lions|Phillip Lips|Boring.|Match Socks 21|Marooned|Trainwreck|A Dell", "King|YY Top|Tons of Roses|Rolling Rocks|Pretty Tom|Bon Jovial|Van Hello|The Scarabs|Light Red Floyd|Carbon Zeppelin|Aerojones|Hawks|Purple Oyster Club|Ed & the Crew|Sticks|The Hoo|Lynn Skin|Fastback"],
vdc7bffe0f07ec5a6ead012015e4ffad8.prototype = Object.create(vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype), vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.constructor = vdc7bffe0f07ec5a6ead012015e4ffad8, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.init = function() {
  if (this.settings.LessonProjectID != "") {
    this.va7f64629254facb890bd9e3401532293(this.settings.LessonProjectID);
  }
  vfe39ece2a85b3dcccfd78b6d58d6c9de.prototype.init.call(this);
  this.v669ff646b5846079385e704f4920c16e = new vbf169736afe267c39b7e3f22954055c8;
  if (this.settings.RandomSeed != -1) {
    this.random = new v05d11f0f2e0c1a6f360c8611189e4901(this.settings.RandomSeed);
  }
  var random = this.random;
  /** @type {number} */
  this.v85068aafa6c229c3f798d6f44a25b3ed = 33;
  this.v3326a0bcf3291f84296c11210a8fe9c5 = new va764f23684cfdf5e93999c88d355dec8;
  this.v3326a0bcf3291f84296c11210a8fe9c5.v632f98b179df940bbfdb72c39098a352();
  this.staffing.Ushers = AppConstants.vff92e4a2e8ba2e007ab7bf70a559e0fb[0];
  this.staffing["Stadium Security"] = AppConstants.vff92e4a2e8ba2e007ab7bf70a559e0fb[1];
  this.staffing["Ticket Takers"] = AppConstants.vff92e4a2e8ba2e007ab7bf70a559e0fb[2];
  this.staffing["Parking Cashiers"] = AppConstants.vff92e4a2e8ba2e007ab7bf70a559e0fb[3];
  this.staffing["Parking Attendants"] = AppConstants.vff92e4a2e8ba2e007ab7bf70a559e0fb[4];
  this.vfe1a4fb7fcbfec9ad33ab48ff009f019 = new va9e642482127d2a8e086348a87917fba;
  this.vfe1a4fb7fcbfec9ad33ab48ff009f019.init();
  this.vdadb3802808c4dad6e637cd29bd9e7b5 = new v8f0ee361b1d63bf1a79eb16edf5933a1;
  this.v9f7821688406340f747104ce90941912 = new v32dbe0e583786dbc8efde99083590832;
  this.v9f7821688406340f747104ce90941912.init();
  this.v7519bb6ac11da6bc216233d376ca809e = new v768b3f7a5626de0e1a971c1dbec321b0;
  this.v7519bb6ac11da6bc216233d376ca809e.init(6);
  this.v7a98907ca09f7f7f7046bcfa89a2626c = new Stadium;
  this.v7a98907ca09f7f7f7046bcfa89a2626c.init();
  /** @type {!Array} */
  this.v02c54057b3494e305c7036bdac0cfbfe = [];
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < AppConstants.v02d7b08ac5cea0a7c21c73f891d746ab; indexLookupKey++) {
    var d = new ve277db3fa261248cc476bca441fc0aef;
    d.init();
    this.v02c54057b3494e305c7036bdac0cfbfe.vc2b55451d6b5a973b456d3ad090abf8d(d);
  }
  /** @type {number} */
  this.v5337a3f5b6e19fca89ba6593cec22fad = 6;
  this.vb70772f1e6c6efce5af0e4890a9ddb5d = new v9174ed493af6c02d7f2db29ea8a67f80;
  this.va0ac839c28046fa480f1d13bf9d250d6(this.vb70772f1e6c6efce5af0e4890a9ddb5d, vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a);
  this.va0ac839c28046fa480f1d13bf9d250d6(this.vb70772f1e6c6efce5af0e4890a9ddb5d, vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353);
  /** @type {!Array} */
  var e = [];
  /** @type {number} */
  indexLookupKey = 0;
  for (; indexLookupKey < 7; indexLookupKey++) {
    var c = random.next(AppConstants.vbeddc7db8aad49145004817806c994aa.length);
    for (; e.contains(c);) {
      c = random.next(AppConstants.vbeddc7db8aad49145004817806c994aa.length);
    }
    e.vc2b55451d6b5a973b456d3ad090abf8d(c);
    var f = new v55981732dc73c4f6196aee61b69fff5c;
    f.init(c);
    this.v1ff735a91d221e1dd6051b6b2813ff13.vc2b55451d6b5a973b456d3ad090abf8d(f);
  }
  /** @type {!Array} */
  this.v1eab4bee75e197c02188c0130ba375c4 = [];
  /** @type {number} */
  this.media["Print Media"] = 0;
  /** @type {number} */
  this.media["TV/Cable"] = 0;
  /** @type {number} */
  this.media.Radio = 0;
  /** @type {number} */
  this.v4c8f9860a24dad19870cf3b0347e197a = 1;
  this.v83d389c6d6592d362f10b4c1d3e044d7();
  this.v4aa4655e25af5596003edec8b91c0099 = new v5c7834d87a4980303267c4128a34128d;
  this.v4aa4655e25af5596003edec8b91c0099.init(null, this.settings.StartDate);
  this.vbc50549c286ff260db741c223334d400();
  /** @type {number} */
  indexLookupKey = 0;
  for (; indexLookupKey < AppConstants.vec069d60fe965032ee1f618c5fa6ac54; indexLookupKey++) {
    this.vd17f15c857887a924f6dee50a6107ad0[indexLookupKey] = this.random.vc620340a78b452026a29f2ec05b4664f(100, 570);
  }
  /** @type {!Array} */
  this.v0faf23ab469bf09c0425c0af14aff4d6 = [];
  this.v8a0266d567dcb1515040d7feeec1bc3b();
  /** @type {!Array} */
  this.v51ae51a502d9f62fe2e47b89b853c971 = [];
  this.vfe8a541a8f491774bfd6bcc6d5d29684();
  this.vb71ed2d13d22814408df17a94036f7ad();
  /** @type {number} */
  this.v57156287d28b6f1f9fae2cb2ee871735 = 18;
  /** @type {number} */
  this.v328f7bc2cc134d4bf360a76718f5d836 = 1;
  if (this.settings.LessonProjectID != "") {
    this.v922a4ebb3ffcc9aa9636fd1efd18ff40(this.settings.LessonProjectID);
  }
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vbc50549c286ff260db741c223334d400 = function() {
  this.v4aa4655e25af5596003edec8b91c0099.v438c8a131f3163991b12517276264ca9("Revenue", v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a);
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Ticket Sales", v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Revenue");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Concessions", v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Revenue");
  this.v4aa4655e25af5596003edec8b91c0099.v438c8a131f3163991b12517276264ca9("COGS", v3cc232995592894dd6b3cea55d7d7bdb.v3da6faa67bfb1547709817d8ddaa9b98);
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Concessions ", v3cc232995592894dd6b3cea55d7d7bdb.v3da6faa67bfb1547709817d8ddaa9b98, "COGS");
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; layer_i++) {
    this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476(AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i], v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Concessions");
    this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476(AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i] + " ", v3cc232995592894dd6b3cea55d7d7bdb.v3da6faa67bfb1547709817d8ddaa9b98, "Concessions ");
  }
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Parking", v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Revenue");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Main Lot", v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Parking");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Satellite Lots", v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Parking");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Sponsorships", v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Revenue");
  /** @type {number} */
  layer_i = 0;
  for (; layer_i < AppConstants.vc69a0bfea595701b9e74a61d65c52ad6.length; layer_i++) {
    this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476(AppConstants.vc69a0bfea595701b9e74a61d65c52ad6[layer_i], v3cc232995592894dd6b3cea55d7d7bdb.v6a6dedc827e4cae67ab5928477e4845a, "Sponsorships");
  }
  this.v4aa4655e25af5596003edec8b91c0099.v438c8a131f3163991b12517276264ca9("Gross Margin", v3cc232995592894dd6b3cea55d7d7bdb.v0f1282edec774ba600ddb48ac88f1ef0);
  this.v4aa4655e25af5596003edec8b91c0099.v438c8a131f3163991b12517276264ca9("Expenses", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620);
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Staffing", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Expenses");
  vee8206b276787f6d065f935010a51f0c(this, AppConstants.v274a349231cba17047a0198b2cef8a6c, function(pool_size) {
    this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476(pool_size, v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Staffing");
  });
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Concession Workers", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Staffing");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Parking ", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Expenses");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Satellite Lots ", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Parking ");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Busses", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Parking ");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Talent", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Expenses");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Promotion", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Expenses");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Traditional Media", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Promotion");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Social Media", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Promotion");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Player Salaries", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Talent");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Artist Fees", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Talent");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Artist Profit Cut", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Talent");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Fines/Lawsuits", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Expenses");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Fan Injuries", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Fines/Lawsuits");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Parking Mayhem", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Fines/Lawsuits");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Trash on Field", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Fines/Lawsuits");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Facilities", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Expenses");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Concession Stands", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Facilities");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Other Facility Fees", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Facilities");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Refunds", v3cc232995592894dd6b3cea55d7d7bdb.vd266747db0781d65cd241dd06eaa8620, "Expenses");
  this.v4aa4655e25af5596003edec8b91c0099.v438c8a131f3163991b12517276264ca9("Profit", v3cc232995592894dd6b3cea55d7d7bdb.v6bc0d978a63de953dd66d6c98f94044f);
  this.v4aa4655e25af5596003edec8b91c0099.v438c8a131f3163991b12517276264ca9("Assets", v3cc232995592894dd6b3cea55d7d7bdb.vedf6d2b0c294afca439f45252040ce06);
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Cash", v3cc232995592894dd6b3cea55d7d7bdb.vedf6d2b0c294afca439f45252040ce06, "Assets");
  this.v4aa4655e25af5596003edec8b91c0099.v438c8a131f3163991b12517276264ca9("Liabilities Plus Equity", v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770);
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Equity", v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770, "Liabilities Plus Equity");
  this.v4aa4655e25af5596003edec8b91c0099.vd9840470f425368b9b720f709d3ee476("Paid-in Capital", v3cc232995592894dd6b3cea55d7d7bdb.vc948b13e0312bf00f83d68309a402770, "Equity");
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v67eb3b6725ff7435a11f93dad0657d00 = function(n) {
  var random = this.random;
  var helpers = new Concert;
  var settings = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[4].v5de2781193aad09bc0f0b17b09a59e96;
  var data = random.next(settings.length);
  var id = this.vd2fb7e40ee0cb312928e4aaeadcbc170(data, random);
  /** @type {number} */
  var h = .5;
  /** @type {number} */
  var r = .1 + random.next(2) * .05;
  var height = random.vc620340a78b452026a29f2ec05b4664f(100, 700);
  var p = random.vc620340a78b452026a29f2ec05b4664f(15, 40) + height / 20;
  /** @type {number} */
  var hue = height * p * (.3 + random.va7f5b666e153a7fd316b95fa2a8560ac() * .4);
  /** @type {number} */
  var g = 0;
  for (; g < 3; g++) {
    helpers = new Concert;
    var b = this.now.addDays(random.next(4));
    b = b.v614cd05d79c31818a9f2183e2d9bc867(16);
    var v = _.round(hue * (.8 + random.va7f5b666e153a7fd316b95fa2a8560ac() * .4), -2);
    helpers.init(b, id, data, v, h, r, height, p, this.random.next());
    this.vf6b12e3405a265144ab359bfc9f6ef00.vc2b55451d6b5a973b456d3ad090abf8d(helpers);
  }
  this.vf6b12e3405a265144ab359bfc9f6ef00 = this.vf6b12e3405a265144ab359bfc9f6ef00.sort(Event.compare);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v0b58575cf45dc7164606a3389457e4ed = function() {
  return this.now.getHours() > 18 || this.now.getHours() < 7 ? "N" : "";
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v8a0266d567dcb1515040d7feeec1bc3b = function() {
  if (this.v02f93565126d56d279f100e7ca2660b4 != undefined) {
    this.v0faf23ab469bf09c0425c0af14aff4d6.vc2b55451d6b5a973b456d3ad090abf8d(this.v02f93565126d56d279f100e7ca2660b4);
  }
  /** @type {!Array} */
  this.v02f93565126d56d279f100e7ca2660b4 = [];
  /** @type {number} */
  var a = 0;
  for (; a < AppConstants.vec069d60fe965032ee1f618c5fa6ac54; a++) {
    this.v02f93565126d56d279f100e7ca2660b4.vc2b55451d6b5a973b456d3ad090abf8d(new v075d96bd9afa88bfc29df9a76858c9a6(a));
  }
  /** @type {number} */
  this.v32eb9ae121e49a8cc1c6fdba96766798 = 0;
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v9d4a7f431c589283eeef09b919fd3142 = function() {
  /** @type {!Array} */
  var wpActive = [];
  /** @type {number} */
  var i = 1;
  for (; i < AppConstants.vec069d60fe965032ee1f618c5fa6ac54; i++) {
    wpActive.vc2b55451d6b5a973b456d3ad090abf8d(false);
  }
  /** @type {number} */
  i = 0;
  for (; i < AppConstants.vec069d60fe965032ee1f618c5fa6ac54; i++) {
    if (!wpActive[i]) {
      /** @type {number} */
      var j = (i + this.v32eb9ae121e49a8cc1c6fdba96766798 + 1) % AppConstants.vec069d60fe965032ee1f618c5fa6ac54;
      if (wpActive[j] = true, i != 0 && j != 0) {
        if (this.random.next(10) == 1) {
          this.v02f93565126d56d279f100e7ca2660b4[i].vd8de30596f976e5afca84bb587b6bb41++;
          this.v02f93565126d56d279f100e7ca2660b4[j].vd8de30596f976e5afca84bb587b6bb41++;
        } else {
          var d = this.random.next(2);
          if (d == 0) {
            this.v02f93565126d56d279f100e7ca2660b4[i].v8f22857eac065a0c6662b19383c0d28b++;
            this.v02f93565126d56d279f100e7ca2660b4[j].va4695f9def13ccf66ad9ed6ae95a136c++;
          } else {
            this.v02f93565126d56d279f100e7ca2660b4[i].va4695f9def13ccf66ad9ed6ae95a136c++;
            this.v02f93565126d56d279f100e7ca2660b4[j].v8f22857eac065a0c6662b19383c0d28b++;
          }
        }
      }
    }
  }
  this.v32eb9ae121e49a8cc1c6fdba96766798++;
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vfe8a541a8f491774bfd6bcc6d5d29684 = function() {
  var random = this.random;
  /** @type {number} */
  var index = 0;
  for (; index < this.settings.availablePlayersPerPosition; index++) {
    var D = new v52b5b783e3ba5645ba556f8988087410;
    D.init();
    /** @type {string} */
    D.position = "Quarterback";
    D.vdbe6b3e8a012a229f29f7f76683ed815 = random.vc620340a78b452026a29f2ec05b4664f(15e4, 5e5);
    /** @type {number} */
    D.PCT = random.va7f5b666e153a7fd316b95fa2a8560ac() * .5 + .2;
    D.INT = random.vc620340a78b452026a29f2ec05b4664f(0, 20);
    this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(D);
  }
  /** @type {number} */
  index = 0;
  for (; index < this.settings.availablePlayersPerPosition; index++) {
    D = new v52b5b783e3ba5645ba556f8988087410;
    D.init();
    /** @type {string} */
    D.position = "Runningback";
    D.vdbe6b3e8a012a229f29f7f76683ed815 = random.vc620340a78b452026a29f2ec05b4664f(15e4, 5e5);
    /** @type {number} */
    D.YPC = random.va7f5b666e153a7fd316b95fa2a8560ac() * 5 + 1;
    D.TD = random.vc620340a78b452026a29f2ec05b4664f(0, 28);
    this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(D);
  }
  /** @type {number} */
  index = 0;
  for (; index < this.settings.availablePlayersPerPosition; index++) {
    D = new v52b5b783e3ba5645ba556f8988087410;
    D.init();
    /** @type {string} */
    D.position = "Receiver";
    D.vdbe6b3e8a012a229f29f7f76683ed815 = random.vc620340a78b452026a29f2ec05b4664f(15e4, 5e5);
    /** @type {number} */
    D.YPC = random.va7f5b666e153a7fd316b95fa2a8560ac() * 25;
    D.TD = random.vc620340a78b452026a29f2ec05b4664f(0, 18);
    this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(D);
  }
  /** @type {number} */
  index = 0;
  for (; index < this.settings.availablePlayersPerPosition; index++) {
    D = new v52b5b783e3ba5645ba556f8988087410;
    D.init();
    /** @type {string} */
    D.position = "Linebacker";
    D.vdbe6b3e8a012a229f29f7f76683ed815 = random.vc620340a78b452026a29f2ec05b4664f(15e4, 5e5);
    D.TAC = random.vc620340a78b452026a29f2ec05b4664f(0, 170);
    D.SAC = random.vc620340a78b452026a29f2ec05b4664f(0, 20);
    this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(D);
  }
  /** @type {number} */
  index = 0;
  for (; index < this.settings.availablePlayersPerPosition; index++) {
    D = new v52b5b783e3ba5645ba556f8988087410;
    D.init();
    /** @type {string} */
    D.position = "Defensiveback";
    D.vdbe6b3e8a012a229f29f7f76683ed815 = random.vc620340a78b452026a29f2ec05b4664f(15e4, 5e5);
    D.TAC = random.vc620340a78b452026a29f2ec05b4664f(0, 100);
    D.INT = random.vc620340a78b452026a29f2ec05b4664f(0, 10);
    this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(D);
  }
  /** @type {number} */
  index = 0;
  for (; index < this.settings.availablePlayersPerPosition; index++) {
    D = new v52b5b783e3ba5645ba556f8988087410;
    D.init();
    /** @type {string} */
    D.position = "Kicker";
    D.vdbe6b3e8a012a229f29f7f76683ed815 = random.vc620340a78b452026a29f2ec05b4664f(15e4, 5e5);
    /** @type {number} */
    D.PCT = random.va7f5b666e153a7fd316b95fa2a8560ac() / 2 + .5;
    D.LNG = random.vc620340a78b452026a29f2ec05b4664f(50, 59);
    this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(D);
  }
  /** @type {number} */
  index = 0;
  for (; index < this.settings.availablePlayersPerPosition; index++) {
    D = new v52b5b783e3ba5645ba556f8988087410;
    D.init();
    /** @type {string} */
    D.position = "Punter";
    D.vdbe6b3e8a012a229f29f7f76683ed815 = random.vc620340a78b452026a29f2ec05b4664f(15e4, 5e5);
    /** @type {number} */
    D.AVG = random.va7f5b666e153a7fd316b95fa2a8560ac() * 15 + 35;
    /** @type {number} */
    D.HT = random.va7f5b666e153a7fd316b95fa2a8560ac() * 4 + 3;
    this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(D);
  }
  this.ve538d677ff3f2c85a67ec913c72e4b5a = this.vd23c19d475fb9c8ced96488d884a6813(this.v3a4db6a91a73ad18148fb5f754ce0959);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vb71ed2d13d22814408df17a94036f7ad = function() {
  /** @type {number} */
  var i = 0;
  for (; i < v52b5b783e3ba5645ba556f8988087410.vdef48fac8859c7c1f1965ce7194d2a82.length; i++) {
    /** @type {number} */
    var d = 0;
    /** @type {number} */
    var name = this.v3a4db6a91a73ad18148fb5f754ce0959.length - 1;
    for (; name >= 0; name--) {
      if (d < 2 && v52b5b783e3ba5645ba556f8988087410.vdef48fac8859c7c1f1965ce7194d2a82[i] == this.v3a4db6a91a73ad18148fb5f754ce0959[name].position) {
        var b = this.v3a4db6a91a73ad18148fb5f754ce0959[name];
        if (this.settings.biasPlayersPoor && b.v772baa145b33086af202a834750a648f() > -1 && b.v39f881891f4522456242ebe813a11508() > this.ve538d677ff3f2c85a67ec913c72e4b5a[b.v772baa145b33086af202a834750a648f()]) {
          continue;
        }
        this.v51ae51a502d9f62fe2e47b89b853c971.vc2b55451d6b5a973b456d3ad090abf8d(b);
        this.v3a4db6a91a73ad18148fb5f754ce0959.vca48a4d192a1c3fdc8f15c910420fc7e(name);
        d++;
      }
    }
  }
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vd23c19d475fb9c8ced96488d884a6813 = function(data) {
  /** @type {number} */
  var sx = 0;
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var sy = 0;
  /** @type {number} */
  var c = 0;
  /** @type {number} */
  var i = 0;
  for (; i < data.length; i++) {
    var dat = data[i];
    if (dat.position == "Defensiveback" || dat.position == "Linebacker") {
      b = b + dat.v39f881891f4522456242ebe813a11508();
      sx++;
    }
    if (dat.position == "Quarterback" || dat.position == "Runningback" || dat.position == "Receiver") {
      c = c + dat.v39f881891f4522456242ebe813a11508();
      sy++;
    }
    if (dat.position == "Quarterback" && this.settings.overWeightKeyPositions) {
      c = c + 2 * dat.v39f881891f4522456242ebe813a11508();
      /** @type {number} */
      sy = sy + 2;
    }
    if (dat.position == "Linebacker" && this.settings.overWeightKeyPositions) {
      b = b + 1 * dat.v39f881891f4522456242ebe813a11508();
      /** @type {number} */
      sx = sx + 1;
    }
  }
  return b = b / sx, c = c / sy, [c, b];
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v18d6a56bcdf8bd0d48b95258ff13d653 = function(position) {
  /** @type {!Array} */
  var store = [];
  return vee8206b276787f6d065f935010a51f0c(this, this.v51ae51a502d9f62fe2e47b89b853c971, function(breakpoint) {
    if (breakpoint.position == position) {
      store.vc2b55451d6b5a973b456d3ad090abf8d(breakpoint);
    }
  }), store.sort(v52b5b783e3ba5645ba556f8988087410.v2f1d356497654482a1a13d19c7a31a54), store[0];
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vcc7d9b1686328e2707f57a93fa3170e6 = function() {
  return this.v4c8f9860a24dad19870cf3b0347e197a++;
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vc0a206eaca83c0272c7883abfde9a708 = function() {
  return this.settings.v72edbb16a217b1315c133e42bdde7edf ? U.vc0e6c88f8413e92781b652ae2786391a("Cumulative Profit") : U.vc0e6c88f8413e92781b652ae2786391a("Highest Season Profit:");
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v5171d2b8a803a139e8c66c9697632b27 = function() {
  if (!this.settings.v72edbb16a217b1315c133e42bdde7edf) {
    /** @type {number} */
    var val = 0;
    return this.v370b87cc0766a54544febc48ade06909 ? val = this.v370b87cc0766a54544febc48ade06909 : val = this.vfa07d262205646e6a7f5064eeefdefe6(this.now.getFullYear()), U.round(U.S(val), 2);
  } else {
    var start = this.settings.StartDate.getFullYear();
    var end = this.now.getFullYear();
    /** @type {number} */
    var val = 0;
    for (; start <= end; start++) {
      val = val + this.vfa07d262205646e6a7f5064eeefdefe6(start);
    }
    return U.round(U.S(val), 2);
  }
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v65f6fe6d6a0a3c1959b22baf11c8396d = function() {
  return this.v4aa4655e25af5596003edec8b91c0099 ? this.v4aa4655e25af5596003edec8b91c0099.vb5b70e54abf6b9d548422187c10b9af5() : 0;
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vd2fb7e40ee0cb312928e4aaeadcbc170 = function(metric, n) {
  var settings = AppConstants.v8d85cfd7d97ee75fe8a84dae51684460[metric].split("|");
  return settings[n.next(settings.length)];
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v83d389c6d6592d362f10b4c1d3e044d7 = function() {
  /** @type {!Array} */
  this.ve6f4e105cfb31f8ce52e52fc02dad3ef = [];
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < AppConstants.vc69a0bfea595701b9e74a61d65c52ad6.length; layer_i++) {
    /** @type {!Array} */
    this.ve6f4e105cfb31f8ce52e52fc02dad3ef[layer_i] = [];
  }
  vee8206b276787f6d065f935010a51f0c(this, this.v1ff735a91d221e1dd6051b6b2813ff13, function(a) {
    a.v651ad1a6065df201e85a0b2da71805e3();
  });
  var b = new va8050a0e7e7ce1bdbca32ed7d908183b;
  b.init();
  this.vb769a155273c6f5814e00dfd13079e79.vc2b55451d6b5a973b456d3ad090abf8d(b);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vfa07d262205646e6a7f5064eeefdefe6 = function(prop) {
  /** @type {number} */
  var chunkIndex = 0;
  var scriptStore = A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099;
  return vee8206b276787f6d065f935010a51f0c(this, this.ve4f83513bcfc1688cae2b4e0cf336998, function(d) {
    if (d.date.getFullYear() == prop) {
      chunkIndex = chunkIndex + scriptStore.vabe5369fddac296adb56cc7a33e9265f("Profit", d.v6df93cee8d46ebc1cd5d0ef23df99e6b);
    }
  }), vee8206b276787f6d065f935010a51f0c(this, this.vb769a155273c6f5814e00dfd13079e79, function(d) {
    if (d.date.getFullYear() == prop) {
      chunkIndex = chunkIndex + scriptStore.vabe5369fddac296adb56cc7a33e9265f("Profit", d.v6df93cee8d46ebc1cd5d0ef23df99e6b);
    }
  }), chunkIndex;
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v63ec58f85edd0930f9c91d005982c7a9 = function(i) {
  return this.ve4f83513bcfc1688cae2b4e0cf336998.length < i + 1 ? undefined : this.ve4f83513bcfc1688cae2b4e0cf336998[0];
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v7790251a4ca7e4e62f2dd056ed607064 = function() {
  return this.v31553a41e2e13c4a913a43b655fe25d3 != null ? (Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("This action cannot be taken while an event is in progress. Take this action between events."), U.vc0e6c88f8413e92781b652ae2786391a("Invalid Action")), false) : true;
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vbc8c6dfbf32dac04cfa4c7467f9ff65f = function(n, col) {
  return _.find(this.vf6b12e3405a265144ab359bfc9f6ef00, function(s) {
    return s.v878219b9ebcd3e5fc7b70aeaa13380ca == n && s.date.v976c06c7cb040fb18b380e5c8a8bb6c4(col);
  });
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v928e9f6cb752b184647d15a7f793c0e6 = function(expirationDatetime) {
  return _.find(this.events, function(todoInfo) {
    return todoInfo.date.v976c06c7cb040fb18b380e5c8a8bb6c4(expirationDatetime);
  });
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.bookEvent = function(entry) {
  var results = A.vfe1c4eaec8ec40f848f9772196c532d3().events;
  A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00.vf81b17578abb97a8de755cddbf7f45a9(entry);
  results.vc2b55451d6b5a973b456d3ad090abf8d(entry);
  results = results.sort(Event.compare);
  A.vfe1c4eaec8ec40f848f9772196c532d3().v5bb5ddf013371c375e056861167c8a68(entry, entry.date);
  A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Artist Fees", entry.v16d886d8f7d17ebf5eccc37dd2419f04 * entry.v5d1b6ccb9d6169f23d7ece12b45f081b, "Cash", entry.v6df93cee8d46ebc1cd5d0ef23df99e6b);
  /** @type {number} */
  var popupIndex = A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00.length - 1;
  for (; popupIndex >= 0; popupIndex--) {
    var date = A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00[popupIndex].date;
    if (date.v976c06c7cb040fb18b380e5c8a8bb6c4(entry.date)) {
      A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00.vca48a4d192a1c3fdc8f15c910420fc7e(popupIndex);
    }
  }
  if (A.v50156c5418a59f9fb151a3917f9026dd().autoPriceTickets) {
    entry.v80c90785054762adfb4e9abcf80cfd8a(entry.v26f32b31080a6a89beb63abd4f3f4d40);
    /** @type {boolean} */
    entry.v413fdf1809982118e1b70795610a9501 = true;
  }
  A.v87b8393064cbfa8977b32cec36a69d86().vbee376c0bae5a5bb92840e65cd0a702e();
  var e = U.vc0e6c88f8413e92781b652ae2786391a("Booked concert featuring {0} for {1}.", [entry.v863b40ac0416e30464b61284cabfefae(), entry.date.v3d50f6a38b9e18ec7d6869a9c756a637()]);
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(e);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v4b794c1aa7704823f08990128647f893 = function(JulianDate) {
  /** @type {number} */
  var i = 1;
  for (; i < AppConstants.vec069d60fe965032ee1f618c5fa6ac54; i++) {
    var emitter = new Game;
    var c = JulianDate.addDays(14 * (i - 1)).v614cd05d79c31818a9f2183e2d9bc867(9);
    emitter.init(c, 0, i, this.random.next());
    this.events.vc2b55451d6b5a973b456d3ad090abf8d(emitter);
  }
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v5cf6ec2316b4839ed7888ab8efe4c53e = function(hotWords, hotPart) {
  var b = this.random;
  /** @type {!Array} */
  var e = [];
  /** @type {number} */
  var part = 0;
  for (; part < AppConstants.vec069d60fe965032ee1f618c5fa6ac54 - 2; part++) {
    var opt = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[4].v5de2781193aad09bc0f0b17b09a59e96;
    var i = b.next(opt.length);
    /** @type {number} */
    j = 0;
    for (; j < 3; j++) {
      /** @type {number} */
      var m = (i + j) % opt.length;
      var a = this.vd2fb7e40ee0cb312928e4aaeadcbc170(m, b);
      /** @type {number} */
      var k = 0;
      for (; e.contains(a) && k++ < 100;) {
        a = this.vd2fb7e40ee0cb312928e4aaeadcbc170(m, b);
      }
      e.push(a);
      /** @type {number} */
      var h = .5;
      /** @type {number} */
      var width = .7 + b.next(5) * .05;
      var height = b.vc620340a78b452026a29f2ec05b4664f(100 * hotPart, 400 * hotPart);
      var params = b.vc620340a78b452026a29f2ec05b4664f(15, 40) + height / 20;
      var c = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(1e5 * (.75 + .05 * b.next(11)));
      var p = hotWords.addDays(14 * part).v614cd05d79c31818a9f2183e2d9bc867(16);
      var self = new Concert;
      self.init(p, a, m, c, h, width, height, params, b.next());
      this.vf6b12e3405a265144ab359bfc9f6ef00.vc2b55451d6b5a973b456d3ad090abf8d(self);
    }
  }
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v9cc5dada5dd98bfe0c0f01643b0eb514 = function(inComponentType) {
  /** @type {number} */
  var a = 0;
  return _.each(this.ve4f83513bcfc1688cae2b4e0cf336998, function(c) {
    if (c.date > this.now.addDays(-365) && c.v878219b9ebcd3e5fc7b70aeaa13380ca != undefined && c.v878219b9ebcd3e5fc7b70aeaa13380ca == inComponentType) {
      a++;
    }
  }, this), a;
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vd7c0ce067e0bf0e93178bfea913636d6 = function(s) {
  var m;
  if (_.isString(s)) {
    m = _.find(this.v3a4db6a91a73ad18148fb5f754ce0959, {
      name : s
    });
  } else {
    /** @type {!Object} */
    m = s;
  }
  this.v51ae51a502d9f62fe2e47b89b853c971.push(m);
  this.v3a4db6a91a73ad18148fb5f754ce0959.vf81b17578abb97a8de755cddbf7f45a9(m);
  var c = U.vc0e6c88f8413e92781b652ae2786391a("Signed {0}, {1}, increasing payroll by {2}.", [m.position, m.name, U.v0ea35f447d08124fa72648dd7f4ff64c(m.vdbe6b3e8a012a229f29f7f76683ed815)]);
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(c);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.vc7a9d92845a7e93d6117ca1217bcafce = function(s) {
  var m;
  if (_.isString(s)) {
    m = _.find(this.v51ae51a502d9f62fe2e47b89b853c971, {
      name : s
    });
  } else {
    /** @type {!Object} */
    m = s;
  }
  this.v3a4db6a91a73ad18148fb5f754ce0959.vc2b55451d6b5a973b456d3ad090abf8d(m);
  this.v51ae51a502d9f62fe2e47b89b853c971.vf81b17578abb97a8de755cddbf7f45a9(m);
  var c = U.vc0e6c88f8413e92781b652ae2786391a("Released {0}, {1}, reducing payroll by {2}.", [m.position, m.name, U.v0ea35f447d08124fa72648dd7f4ff64c(m.vdbe6b3e8a012a229f29f7f76683ed815)]);
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(c);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v14aa42489c5fe6c49a241c57b8930d37 = function(data) {
  var d = U.vc0e6c88f8413e92781b652ae2786391a("Set traditional media spending levels to:");
  /** @type {!Array} */
  var b = [];
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.vfcc3427da6e572db73c24b90a471fa1a.length; ++i) {
    this.media[AppConstants.vfcc3427da6e572db73c24b90a471fa1a[i]] = data[i];
    b.push([AppConstants.vfcc3427da6e572db73c24b90a471fa1a[i], U.v008da4424a5701b4ad40bb9d6adc0daf(data[i])]);
  }
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(d, b);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v61a0fc726b1ded2ca1daedc2dc3841d0 = function(i, arg, data, list, f) {
  var state = this.v9f7821688406340f747104ce90941912;
  /** @type {!Array} */
  var c = [];
  /** @type {!Array} */
  var e = [];
  /** @type {!Array} */
  var d = [];
  /** @type {number} */
  state.v593f1cd1f022086bd87c3de3db987bd8 = i;
  c.push(["Number of Stands", state.v593f1cd1f022086bd87c3de3db987bd8]);
  if (!_.isUndefined(f)) {
    /** @type {number} */
    state.vc5f3cc9e0931f0e39cae9028746c2eda = f;
    c.push(["Employees per Stand", state.vc5f3cc9e0931f0e39cae9028746c2eda]);
  }
  /** @type {number} */
  var p = 0;
  for (; p < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; p++) {
    state.includes[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[p]] = arg[p];
  }
  /** @type {number} */
  p = 0;
  for (; p < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; p++) {
    state.va2e8685aaa26fc8be2f8ebb695e5f0ff[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[p]] = data[p];
    e.push([AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[p], U.v0ea35f447d08124fa72648dd7f4ff64c(data[p], 2)]);
  }
  /** @type {number} */
  p = 0;
  for (; p < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; p++) {
    state.vf3e09cb39c9a11ba7b9739fd0c5e8bd8[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[p]] = list[p];
    d.push([AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[p], U.v26fd40d142e5f4ab82084c80bba46f53(list[p])]);
  }
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Changed concession stands and staffing to:"), c);
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Changed concession prices to:"), e);
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Changed concession inventory to:"), d);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v68c33c5087902d5d889f5a5d43c5609d = function(b) {
  this.v1eab4bee75e197c02188c0130ba375c4.vc2b55451d6b5a973b456d3ad090abf8d(b);
  var out = U.vc0e6c88f8413e92781b652ae2786391a("Booked social media ad for {0} with {1} on {2}.<br> ", [b.event.vcac8a657fea238de145894896ba75413().toLowerCase(), b.event.v863b40ac0416e30464b61284cabfefae(), b.event.date.v3d50f6a38b9e18ec7d6869a9c756a637()]);
  out = out + U.vc0e6c88f8413e92781b652ae2786391a("Ad will run from {0} to {1} with budget of {2}.<br> ", [b.start.v3d50f6a38b9e18ec7d6869a9c756a637(), b.end.v3d50f6a38b9e18ec7d6869a9c756a637(), U.v008da4424a5701b4ad40bb9d6adc0daf(b.v0875cd0d35de060fac2413e2561ed3e8)]);
  out = out + U.vc0e6c88f8413e92781b652ae2786391a("Ad headline: '{0}'. Ad text: '{1}'. Ad image is number {2}.<br> ", [b.v5ae1c15d7e62dad6e01739890ebff05c, b.text, b.vda9e67191f98a064bb69597a51e31a77 + 1]);
  var main = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[3];
  /** @type {!Array} */
  var e = [];
  /** @type {number} */
  var i = 0;
  for (; i < b.v5f7b1f6d9e3cf00776e29bf69928af05.length; ++i) {
    e.push(main.v5de2781193aad09bc0f0b17b09a59e96[b.v5f7b1f6d9e3cf00776e29bf69928af05[i]]);
  }
  out = out + U.vc0e6c88f8413e92781b652ae2786391a("Locations: {0}.<br> ", [U.vaf7237dae3fbdce2e2346e7d2df8a0b7(e)]);
  var ContentFlowGlobal = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[0];
  /** @type {!Array} */
  var d = [];
  /** @type {number} */
  i = 0;
  for (; i < b.v14db5ac53caa416a7f67ea32f3ae63c8.length; ++i) {
    d.push(ContentFlowGlobal.v5de2781193aad09bc0f0b17b09a59e96[b.v14db5ac53caa416a7f67ea32f3ae63c8[i]]);
  }
  out = out + U.vc0e6c88f8413e92781b652ae2786391a("Ages: {0}.<br> ", [U.vaf7237dae3fbdce2e2346e7d2df8a0b7(d)]);
  var ZmMailListPriorityGroup = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[1];
  /** @type {!Array} */
  var tag_names = [];
  /** @type {number} */
  i = 0;
  for (; i < b.vfb4f738833e89b79b327b9e0da81537b.length; ++i) {
    tag_names.push(ZmMailListPriorityGroup.v5de2781193aad09bc0f0b17b09a59e96[b.vfb4f738833e89b79b327b9e0da81537b[i]]);
  }
  out = out + U.vc0e6c88f8413e92781b652ae2786391a("Genders: {0}.<br> ", [U.vaf7237dae3fbdce2e2346e7d2df8a0b7(tag_names)]);
  var ZmCalendarPrefsPage = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[5];
  /** @type {!Array} */
  var itemStyles = [];
  /** @type {number} */
  i = 0;
  for (; i < b.v6c96cc2c3c7f80bcae66e7160d82921e.length; ++i) {
    itemStyles.push(ZmCalendarPrefsPage.v5de2781193aad09bc0f0b17b09a59e96[b.v6c96cc2c3c7f80bcae66e7160d82921e[i]]);
  }
  out = out + U.vc0e6c88f8413e92781b652ae2786391a("Interests: {0}.<br> ", [U.vaf7237dae3fbdce2e2346e7d2df8a0b7(itemStyles)]);
  var AjxEmailAddress = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[4];
  /** @type {!Array} */
  var f = [];
  /** @type {number} */
  i = 0;
  for (; i < b.v5a8d8d064b26e34f8298fcaffcfd5d73.length; ++i) {
    f.push(AjxEmailAddress.v5de2781193aad09bc0f0b17b09a59e96[b.v5a8d8d064b26e34f8298fcaffcfd5d73[i]]);
  }
  out = out + U.vc0e6c88f8413e92781b652ae2786391a("Music Preferences: {0}.<br> ", [U.vaf7237dae3fbdce2e2346e7d2df8a0b7(f)]);
  A.vfe1c4eaec8ec40f848f9772196c532d3().v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(out);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v733015c98c79cf895db8ebb0e5cdb5f9 = function(a) {
  this.v1eab4bee75e197c02188c0130ba375c4.vf81b17578abb97a8de755cddbf7f45a9(a);
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(U.vc0e6c88f8413e92781b652ae2786391a("Canceled social media ad campaign: {0}", [a.name]));
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v5036ef36ab85af370be7bdf7420abc6a = function(value, i) {
  var left = U.vc0e6c88f8413e92781b652ae2786391a("Set ticket prices for the following events: ");
  /** @type {!Array} */
  var QueryLanguageComponent = [];
  /** @type {number} */
  var j = 0;
  for (; j < value.length; j++) {
    var msg = value[j];
    left = left + U.vc0e6c88f8413e92781b652ae2786391a("{0} with {1} on {2}, ", [msg.vcac8a657fea238de145894896ba75413().toLowerCase(), msg.v863b40ac0416e30464b61284cabfefae(), msg.date.v3d50f6a38b9e18ec7d6869a9c756a637()]);
    /** @type {number} */
    var id = AppConstants.v3c25fa1c87709911231f9a9d42ef7312 - 1;
    for (; id >= msg.v477cc8dd303fa6381868a595da01ef59(); id--) {
      /** @type {number} */
      var u = 1;
      for (; u >= 0; u--) {
        var p = i[id][u];
        msg.ticketPrices[id][u] = p;
        if (j == 0) {
          QueryLanguageComponent.v1648352dbaef4fd82fb8158969974646([Stadium.ve928ad725b706dbd50c7669bea1fe747(id, u), U.v0ea35f447d08124fa72648dd7f4ff64c(p, 2)], 0);
        }
      }
    }
    /** @type {boolean} */
    msg.v413fdf1809982118e1b70795610a9501 = true;
  }
  left = left.substr(0, left.length - 2) + ".";
  this.v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(left, QueryLanguageComponent);
}, vdc7bffe0f07ec5a6ead012015e4ffad8.prototype.v1f401f9c75488d9e8d930d220f31a388 = function() {
  var stateName = A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[0];
  if (this.ve6f4e105cfb31f8ce52e52fc02dad3ef[4].length > 0) {
    var sref = A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[4][0];
    stateName = sref.name;
  }
  return stateName + U.vc0e6c88f8413e92781b652ae2786391a(" Stadium");
};
/**
 * @param {?} name
 * @param {?} data
 * @return {undefined}
 */
v613d4f2132e130828cd3ce4bc8d385ba = function(name, data) {
  View.call(this, name, data);
};
v613d4f2132e130828cd3ce4bc8d385ba.prototype = Object.create(View.prototype), v613d4f2132e130828cd3ce4bc8d385ba.prototype.va2d78265764a9d326f92455033ffb2a5 = function() {
  var b = View.prototype.va2d78265764a9d326f92455033ffb2a5.call(this);
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed() == "N") {
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(0, 0), "CityBackN"));
  }
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v2db6af2b1f5a8cf42fd2e4f228202240.length; layer_i++) {
    b.vc2b55451d6b5a973b456d3ad090abf8d(A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v2db6af2b1f5a8cf42fd2e4f228202240[layer_i].vc40d087825dbf82f2a30a6900e15634e());
  }
  /** @type {number} */
  layer_i = 0;
  for (; layer_i < A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd.length; layer_i++) {
    var layer = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd[layer_i];
    if (!(layer.v5ade6f2f5a1f2d10c4bb670808c99f85().x < 110 && layer.v5ade6f2f5a1f2d10c4bb670808c99f85().y > 257)) {
      b.vc2b55451d6b5a973b456d3ad090abf8d(layer.vc40d087825dbf82f2a30a6900e15634e());
    }
  }
  return b.vfa21e3bf8ea9d4320d8597afc1052baf(A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v620a8a217f581ffb6e04961d6df9f591()), b;
};
/**
 * @param {?} name
 * @param {?} data
 * @return {undefined}
 */
var StadiumView = function(name, data) {
  View.call(this, name, data);
};
StadiumView.prototype = Object.create(View.prototype), StadiumView.prototype.va2d78265764a9d326f92455033ffb2a5 = function() {
  var QueryLanguageComponent = View.prototype.va2d78265764a9d326f92455033ffb2a5.call(this);
  var name = A.v87b8393064cbfa8977b32cec36a69d86().v8d45560ed400ebd1f03af3fc6d1488ba;
  var local = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
  return local != null && local.vcac8a657fea238de145894896ba75413() == "Concert" ? (this.v01493c8ab06f5b5b2d4f1e6542c9d71d(QueryLanguageComponent, name), this.v8bccb9ff9ecd416102c29680eeaa54d6(QueryLanguageComponent, name), this.v5ab3752603803cbdeae0f11c026451d5(QueryLanguageComponent, name)) : (this.ve8ccc94cf1b73156474a03ce6bc3f664(QueryLanguageComponent), this.v8bccb9ff9ecd416102c29680eeaa54d6(QueryLanguageComponent, name), this.v441a3f91db70af37eeb5efaac928f0f1(QueryLanguageComponent, name),
  this.vb79c8c5bf1ec821a5fa69d5012e08e1a(QueryLanguageComponent), this.v8dd892f2c5c4ec5e54b2134294b90d87(QueryLanguageComponent, name, false), this.vb7155c0e53c76fcfaf01417849a4c2a7(QueryLanguageComponent, name), this.v492726ea60efa719184906c82e743ac6(QueryLanguageComponent, name), local != null && this.v647c0dd40aeba50ef606da8de33b0837(QueryLanguageComponent, name), this.v10baa89f8128648b8b7576eb25d037d8(QueryLanguageComponent, name), local != null && local.state == Event.vc2f39e01f517b40a0453d6926d031255 &&
  this.vd9ae6ef328e300bfd41418ad59365934(QueryLanguageComponent), this.v6b6e9c5272d7b23e86185ed119a42227(QueryLanguageComponent, name), this.v6653f8cc9b800b4e31351cca22db3249(QueryLanguageComponent), this.vae8cc8b529465cfd58451c6944c91744(QueryLanguageComponent), this.v5ab3752603803cbdeae0f11c026451d5(QueryLanguageComponent, name)), this.v69a39bf284e914b4accac445bb316e14(QueryLanguageComponent, name), A.v87b8393064cbfa8977b32cec36a69d86().vdb06d27d9f084ca2d555cf8cc6954346("adAnalytics") && A.vfe1c4eaec8ec40f848f9772196c532d3().vaf2a576127494a53d0e079f0ed12d0e1 !=
  null && this.v0693c65c97ba1d3835f2f4325d332de2(A.v87b8393064cbfa8977b32cec36a69d86().v58850cf11697d83de198ad43938d6231, QueryLanguageComponent), QueryLanguageComponent;
}, StadiumView.prototype.ve8ccc94cf1b73156474a03ce6bc3f664 = function(b) {
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(0, 0), "StadiumBack" + a));
}, StadiumView.prototype.v8bccb9ff9ecd416102c29680eeaa54d6 = function(target, controlName) {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[2].length > 0) {
    var triggerPublishSeed = A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[2][0];
    /** @type {number} */
    var fx = 131;
    /** @type {number} */
    var column = 3;
    var c = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
    if (c != null && c.vcac8a657fea238de145894896ba75413() == "Concert") {
      /** @type {number} */
      fx = fx + 10;
      /** @type {number} */
      column = column + 55;
    }
    target.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(fx, column), "ScoreboardSign" + triggerPublishSeed.index));
  }
}, StadiumView.prototype.v441a3f91db70af37eeb5efaac928f0f1 = function(target, controlName) {
  var data = controlName.v25deb183138b7951a8b404efe7cade27("FieldSign0").v5ade6f2f5a1f2d10c4bb670808c99f85();
  /** @type {number} */
  var i = 0;
  for (; i < A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[0].length; i++) {
    var c = A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[0][i];
    if (c != undefined) {
      target.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(data.x + i * 36, data.y - i * 18), "FieldSign" + c.index));
    }
  }
}, StadiumView.prototype.vb79c8c5bf1ec821a5fa69d5012e08e1a = function(b) {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3 != null) {
    var ctrl = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
    if (ctrl.state == Event.v749c70cd527f4457494bb32a2cd947e0) {
      var style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(187, 220), null);
      /** @type {!Array} */
      style.transform = [1, -.5, 0, 1, 0, 0];
      /** @type {string} */
      style.font = "16pt arial";
      /** @type {string} */
      style.fillStyle = "#ffffff";
      /** @type {string} */
      style.text = "WELCOME";
      /** @type {string} */
      style.textAlign = "center";
      b.vc2b55451d6b5a973b456d3ad090abf8d(style);
      return;
    }
    if (ctrl.v606324a5ccc4cdb29bb3ee2ce8f861d4 > 0 || ctrl.v28e2b3398c38faea8d6e0a2d867e77cf > 0) {
      this.v9f3520fe707fd7feb26d5a0b8b0816d4(b, "AmericanFlag", ctrl.v28e2b3398c38faea8d6e0a2d867e77cf);
      return;
    }
    if (ctrl.vdcfd2df724811ddc7adc6363d3d96a64 > 0) {
      this.v9f3520fe707fd7feb26d5a0b8b0816d4(b, "Touchdown", ctrl.vdcfd2df724811ddc7adc6363d3d96a64);
      return;
    }
    if (ctrl.v8fbd4afc15f4ff1af2004754fd85adf3 > 0) {
      this.v9f3520fe707fd7feb26d5a0b8b0816d4(b, "FieldGoal", ctrl.v8fbd4afc15f4ff1af2004754fd85adf3);
      return;
    }
    style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(159, 185), null);
    /** @type {!Array} */
    style.transform = [1, -.5, 0, 1, 0, 0];
    /** @type {string} */
    style.font = "14pt arial";
    /** @type {string} */
    style.fillStyle = "#ffffff";
    style.text = ctrl.vba77326242039e0a7779ab085e82444f();
    b.vc2b55451d6b5a973b456d3ad090abf8d(style);
    style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(220, 210), null);
    /** @type {!Array} */
    style.transform = [1, -.5, 0, 1, 0, 0];
    /** @type {string} */
    style.font = "14pt arial";
    /** @type {string} */
    style.fillStyle = "#ffffff";
    style.text = ctrl.v39ad898bcff4a62b1727576de8887044.toString();
    b.vc2b55451d6b5a973b456d3ad090abf8d(style);
    var params = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(130, 210), null);
    /** @type {!Array} */
    params.transform = [1, -.5, 0, 1, 0, 0];
    /** @type {string} */
    params.font = "14pt arial";
    /** @type {string} */
    params.fillStyle = "#ffffff";
    params.text = ctrl.v48d1284872c52fc381118313b6b55bab.toString();
    b.vc2b55451d6b5a973b456d3ad090abf8d(params);
    style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(210, 190), null);
    /** @type {!Array} */
    style.transform = [1, -.5, 0, 1, 0, 0];
    /** @type {string} */
    style.font = "10pt arial";
    /** @type {string} */
    style.fillStyle = "#ffffff";
    /** @type {string} */
    style.text = "HOME";
    b.vc2b55451d6b5a973b456d3ad090abf8d(style);
    params = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(120, 190), null);
    if (params.transform = [1, -.5, 0, 1, 0, 0], params.font = "10pt arial", params.fillStyle = "#ffffff", params.text = "AWAY", b.vc2b55451d6b5a973b456d3ad090abf8d(params), ctrl.state == Event.vc2f39e01f517b40a0453d6926d031255) {
      style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(220, 250), null);
      /** @type {!Array} */
      style.transform = [1, -.5, 0, 1, 0, 0];
      /** @type {string} */
      style.font = "14pt arial";
      /** @type {string} */
      style.fillStyle = "#ffffff";
      style.text = ctrl.period.toString();
      b.vc2b55451d6b5a973b456d3ad090abf8d(style);
      params = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(130, 250), null);
      /** @type {!Array} */
      params.transform = [1, -.5, 0, 1, 0, 0];
      /** @type {string} */
      params.font = "14pt arial";
      /** @type {string} */
      params.fillStyle = "#ffffff";
      params.text = ctrl.down.toString();
      b.vc2b55451d6b5a973b456d3ad090abf8d(params);
      style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(210, 230), null);
      /** @type {!Array} */
      style.transform = [1, -.5, 0, 1, 0, 0];
      /** @type {string} */
      style.font = "10pt arial";
      /** @type {string} */
      style.fillStyle = "#ffffff";
      /** @type {string} */
      style.text = "QTR";
      b.vc2b55451d6b5a973b456d3ad090abf8d(style);
      params = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(120, 230), null);
      /** @type {!Array} */
      params.transform = [1, -.5, 0, 1, 0, 0];
      /** @type {string} */
      params.font = "10pt arial";
      /** @type {string} */
      params.fillStyle = "#ffffff";
      /** @type {string} */
      params.text = "DOWN";
      b.vc2b55451d6b5a973b456d3ad090abf8d(params);
      if (ctrl.va77baa57302716b9d64be45356f30d20) {
        b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(200, 97), "ScoreboardFootball"));
      } else {
        b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(155, 120), "ScoreboardFootball"));
      }
    }
  }
}, StadiumView.prototype.v9f3520fe707fd7feb26d5a0b8b0816d4 = function(_, m, i) {
  var d = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(110, 29), m);
  /** @type {number} */
  d.col = i % 10;
  _.vc2b55451d6b5a973b456d3ad090abf8d(d);
}, StadiumView.prototype.vb53c23eb5ad9e5a9934efdf3da2cb4c3 = function(fn, useBinaryString) {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3 != null) {
    var ctx = new v74d951e1ef91d0f189e177d58ae30d8e(useBinaryString.v25deb183138b7951a8b404efe7cade27("gameMsg").v5ade6f2f5a1f2d10c4bb670808c99f85(), null);
    /** @type {!Array} */
    ctx.transform = [1, 0, 0, 1, 0, 0];
    /** @type {string} */
    ctx.font = "10pt arial";
    /** @type {string} */
    ctx.fillStyle = "#555555";
    ctx.text = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.v8089c25fc3f552e40538d78e9fa87683;
    fn.vc2b55451d6b5a973b456d3ad090abf8d(ctx);
  }
  return fn;
}, StadiumView.prototype.v8dd892f2c5c4ec5e54b2134294b90d87 = function(decorators, descriptor, isPkg) {
  /** @type {number} */
  var target = 0;
  for (; target < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; target++) {
    /** @type {number} */
    var i = 0;
    for (; i < AppConstants.vfb1d103d47b20eec473331f8512352c5; i++) {
      var c = this.vb14ff3dc16d963379ce5f21390b5bdc0(target, i, descriptor);
      /** @type {string} */
      var month = "FansInStands";
      if (target == 0 && isPkg) {
        /** @type {string} */
        month = "FansOnFloor";
      }
      var d = new v74d951e1ef91d0f189e177d58ae30d8e(c, month);
      /** @type {number} */
      d.row = i % 2;
      var pos = U.v40335ed9d0c0e65fe476d070f9bf3c72(Math.floor(A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1[target][i]), 0, 8);
      d.col = pos;
      decorators.vc2b55451d6b5a973b456d3ad090abf8d(d);
    }
  }
}, StadiumView.prototype.vb7155c0e53c76fcfaf01417849a4c2a7 = function(decorators, descriptor) {
  if (vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d, function(a) {
    decorators.vfa21e3bf8ea9d4320d8597afc1052baf(a.v0ed28020f5a599ea484ad031545950a4());
  }), A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3 != null) {
    /** @type {number} */
    var iccId = 0;
    for (; iccId < 2; iccId++) {
      var i = ["Ushers", "Stadium Security"][iccId];
      var tmp = A.vfe1c4eaec8ec40f848f9772196c532d3().staffing[i];
      /** @type {number} */
      var indicesPerVertex = Math.floor(tmp / (AppConstants.v3c25fa1c87709911231f9a9d42ef7312 - A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.v477cc8dd303fa6381868a595da01ef59()));
      /** @type {number} */
      var x = Math.floor(360 / indicesPerVertex);
      /** @type {number} */
      var name = 1;
      for (; name < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; name++) {
        var grid = descriptor.v25deb183138b7951a8b404efe7cade27("pb" + name + "0").v5ade6f2f5a1f2d10c4bb670808c99f85();
        /** @type {number} */
        j = 0;
        for (; j < indicesPerVertex; j++) {
          var o = new Point(grid.x + x * j - 80 - 6 * iccId, grid.y + x / 2 * j - 38 - 2 * iccId);
          var t = new v74d951e1ef91d0f189e177d58ae30d8e(o, i);
          /** @type {boolean} */
          t.flipX = true;
          decorators.vc2b55451d6b5a973b456d3ad090abf8d(t);
        }
      }
    }
  }
}, StadiumView.prototype.v492726ea60efa719184906c82e743ac6 = function(b, pAttribute) {
  var fs = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  var h = pAttribute.v25deb183138b7951a8b404efe7cade27("endZoneNW").v5ade6f2f5a1f2d10c4bb670808c99f85();
  var i = pAttribute.v25deb183138b7951a8b404efe7cade27("endZoneSE").v5ade6f2f5a1f2d10c4bb670808c99f85();
  /** @type {string} */
  var color = "#ffffff";
  if (fs == "N") {
    /** @type {string} */
    color = "#666666";
  }
  var ctx = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(-100, 178), null);
  /** @type {!Array} */
  ctx.transform = [1, -.5, 2, 1, 0, 0];
  /** @type {string} */
  ctx.font = "11pt arial";
  /** @type {string} */
  ctx.fillStyle = color;
  var new_value = A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[0];
  ctx.text = new_value;
  /** @type {string} */
  ctx.textAlign = "center";
  b.vc2b55451d6b5a973b456d3ad090abf8d(ctx);
  var target = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(108, -317), null);
  /** @type {!Array} */
  target.transform = [-1, .5, -2, -1, 0, 0];
  /** @type {string} */
  target.font = "11pt arial";
  /** @type {string} */
  target.fillStyle = color;
  target.text = new_value;
  /** @type {string} */
  target.textAlign = "center";
  b.vc2b55451d6b5a973b456d3ad090abf8d(target);
}, StadiumView.prototype.v647c0dd40aeba50ef606da8de33b0837 = function(d, el) {
  var msgB = el.v25deb183138b7951a8b404efe7cade27("trash").v5ade6f2f5a1f2d10c4bb670808c99f85();
  /** @type {number} */
  var w_S = Math.floor(Math.min(5, A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.trash));
  if (w_S > 0) {
    var b = new v74d951e1ef91d0f189e177d58ae30d8e(msgB, "Trash");
    /** @type {number} */
    b.col = w_S - 1;
    d.vc2b55451d6b5a973b456d3ad090abf8d(b);
  }
}, StadiumView.prototype.v10baa89f8128648b8b7576eb25d037d8 = function(b, pAttribute) {
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(pAttribute.v25deb183138b7951a8b404efe7cade27("goalPostNW").v5ade6f2f5a1f2d10c4bb670808c99f85(), "GoalPostNW" + a));
}, StadiumView.prototype.vd9ae6ef328e300bfd41418ad59365934 = function(b) {
  var objBounds = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
  if (objBounds != null) {
    var y = objBounds.vdfba98d9f87c5ee8c729fa0ef3903c5c;
    if (!objBounds.va77baa57302716b9d64be45356f30d20) {
      /** @type {number} */
      y = 100 - y;
    }
    var remainded_date = this.ve62df914ef50dbd5cb6db9ebfca1b92d(new Point(0, y));
    var d = new v74d951e1ef91d0f189e177d58ae30d8e(remainded_date, "LineOfScrimmage");
    /** @type {number} */
    d.alpha = .75;
    b.vc2b55451d6b5a973b456d3ad090abf8d(d);
    var socket = this.ve62df914ef50dbd5cb6db9ebfca1b92d(new Point(0, y + 34));
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(socket, "PlayersFrontWhite"));
    var Larry = this.ve62df914ef50dbd5cb6db9ebfca1b92d(new Point(0, y + 26));
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(Larry, "PlayersBackBlue"));
  }
}, StadiumView.prototype.v6b6e9c5272d7b23e86185ed119a42227 = function(b, pAttribute) {
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(pAttribute.v25deb183138b7951a8b404efe7cade27("goalPostSE").v5ade6f2f5a1f2d10c4bb670808c99f85(), "GoalPostSE" + a));
}, StadiumView.prototype.v6653f8cc9b800b4e31351cca22db3249 = function(decorators) {
  var replyLines = A.vfe1c4eaec8ec40f848f9772196c532d3().v1f401f9c75488d9e8d930d220f31a388();
  var style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(198, 187), null);
  /** @type {!Array} */
  style.transform = [1, .5, 0, 1, 0, 0];
  /** @type {string} */
  style.textAlign = "center";
  /** @type {string} */
  style.font = "14pt arial";
  /** @type {string} */
  style.fillStyle = "#ffffff";
  style.text = replyLines;
  decorators.vc2b55451d6b5a973b456d3ad090abf8d(style);
}, StadiumView.prototype.vae8cc8b529465cfd58451c6944c91744 = function(decorators) {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().events.length > 0) {
    var minor_tick = A.vfe1c4eaec8ec40f848f9772196c532d3().events[0];
    /** @type {string} */
    var replyLines = "Upcoming Events";
    /** @type {number} */
    var d = Math.floor(A.vfe1c4eaec8ec40f848f9772196c532d3().v857e210de5749cc6dd2313995353b70e / A.v87b8393064cbfa8977b32cec36a69d86().v2de98680410eb26017a820cf9cdafd86() / 20) % 3;
    if (d == 1) {
      replyLines = minor_tick.v863b40ac0416e30464b61284cabfefae();
    }
    if (d == 2) {
      replyLines = minor_tick.date.v3d50f6a38b9e18ec7d6869a9c756a637();
    }
    var style = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(198, 224), null);
    /** @type {!Array} */
    style.transform = [1, .5, 0, 1, 0, 0];
    /** @type {string} */
    style.font = "12pt arial";
    /** @type {string} */
    style.fillStyle = "#ff0000";
    style.text = replyLines;
    /** @type {string} */
    style.textAlign = "center";
    decorators.vc2b55451d6b5a973b456d3ad090abf8d(style);
  }
}, StadiumView.prototype.v5ab3752603803cbdeae0f11c026451d5 = function(d, l) {
  var target = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  /** @type {number} */
  var numStats = 0;
  for (; numStats < 2; numStats++) {
    var allocPool = l.v25deb183138b7951a8b404efe7cade27("flagh" + numStats).v5ade6f2f5a1f2d10c4bb670808c99f85();
    var b = new v74d951e1ef91d0f189e177d58ae30d8e(allocPool, "FlagHorizontal" + target);
    /** @type {number} */
    b.col = A.vfe1c4eaec8ec40f848f9772196c532d3().v857e210de5749cc6dd2313995353b70e % 10;
    d.vc2b55451d6b5a973b456d3ad090abf8d(b);
  }
  /** @type {number} */
  numStats = 0;
  for (; numStats < 4; numStats++) {
    allocPool = l.v25deb183138b7951a8b404efe7cade27("flagv" + numStats).v5ade6f2f5a1f2d10c4bb670808c99f85();
    b = new v74d951e1ef91d0f189e177d58ae30d8e(allocPool, "FlagVertical" + target);
    /** @type {number} */
    b.col = A.vfe1c4eaec8ec40f848f9772196c532d3().v857e210de5749cc6dd2313995353b70e % 10;
    d.vc2b55451d6b5a973b456d3ad090abf8d(b);
  }
}, StadiumView.prototype.v01493c8ab06f5b5b2d4f1e6542c9d71d = function(decorators, descriptor) {
  var c = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  decorators.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(0, 0), "ConcertBack" + c));
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.state == Event.v749c70cd527f4457494bb32a2cd947e0 || A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.state == Event.vf8602c745ea5ef0e7b27031084f0bdde) {
    this.v8dd892f2c5c4ec5e54b2134294b90d87(decorators, descriptor, true);
    this.vb7155c0e53c76fcfaf01417849a4c2a7(decorators, descriptor);
    this.v6653f8cc9b800b4e31351cca22db3249(decorators);
    this.vae8cc8b529465cfd58451c6944c91744(decorators);
  } else {
    this.v8dd892f2c5c4ec5e54b2134294b90d87(decorators, descriptor, true);
    this.v7a3beae45474fad4b5212900038e7840(decorators, descriptor);
    this.v430d60b027c9b69dd74e3d4b00b9269e(decorators, descriptor);
    this.vb7155c0e53c76fcfaf01417849a4c2a7(decorators, descriptor);
    this.v6653f8cc9b800b4e31351cca22db3249(decorators);
  }
}, StadiumView.prototype.v69a39bf284e914b4accac445bb316e14 = function(target, controlName) {
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  var onMouseOver = controlName.v25deb183138b7951a8b404efe7cade27("frontWall").v5ade6f2f5a1f2d10c4bb670808c99f85();
  target.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(onMouseOver, "FrontWall" + a));
}, StadiumView.prototype.v7a3beae45474fad4b5212900038e7840 = function(x, raw) {
  /** @type {!Array} */
  var a = ["LasersSpin", "LasersUpDown", "StageLightsLower", "StageLightsUpper"];
  /** @type {number} */
  var k = 0;
  for (; k < a.length; k++) {
    var c = new v74d951e1ef91d0f189e177d58ae30d8e(raw.v25deb183138b7951a8b404efe7cade27(a[k]).v5ade6f2f5a1f2d10c4bb670808c99f85(), a[k]);
    /** @type {number} */
    c.col = A.vfe1c4eaec8ec40f848f9772196c532d3().v857e210de5749cc6dd2313995353b70e % 10;
    x.vc2b55451d6b5a973b456d3ad090abf8d(c);
  }
}, StadiumView.prototype.v430d60b027c9b69dd74e3d4b00b9269e = function(parent, d) {
  /** @type {number} */
  var pebble = 0;
  for (; pebble < 4; pebble++) {
    var b = new v74d951e1ef91d0f189e177d58ae30d8e(d.v25deb183138b7951a8b404efe7cade27("Performer" + pebble).v5ade6f2f5a1f2d10c4bb670808c99f85(), "Performer" + pebble);
    /** @type {number} */
    b.col = A.vfe1c4eaec8ec40f848f9772196c532d3().v857e210de5749cc6dd2313995353b70e % 9;
    parent.vc2b55451d6b5a973b456d3ad090abf8d(b);
  }
}, StadiumView.prototype.vb14ff3dc16d963379ce5f21390b5bdc0 = function(a, b, options) {
  if (a > 0) {
    var res = options.v25deb183138b7951a8b404efe7cade27("stands").v5ade6f2f5a1f2d10c4bb670808c99f85();
    /** @type {number} */
    var slicex = 42.6;
    /** @type {number} */
    var h = 31.3;
    /** @type {number} */
    var swipeAmount = 10;
    /** @type {number} */
    var dx = 0;
    if (b > 2) {
      /** @type {number} */
      dx = dx + swipeAmount;
    }
    if (b > 8) {
      /** @type {number} */
      dx = dx + swipeAmount;
    }
    /** @type {number} */
    var lineWith = a - 1;
    var d = U.v7a7321817e214ef0146ed1ce6559a705(new Point(res.x + slicex * lineWith + h * b + dx, res.y - slicex * .94 * lineWith + h / 2 * b + dx / 2));
  } else {
    res = options.v25deb183138b7951a8b404efe7cade27("standsOnFloor").v5ade6f2f5a1f2d10c4bb670808c99f85();
    /** @type {number} */
    var n1 = 35;
    /** @type {number} */
    var m = 60;
    if (b > 2 && b < 9) {
      /** @type {number} */
      var t = b - 3;
      /** @type {number} */
      var x = n1 * (t % 3) + Math.floor(t / 3) * m;
      /** @type {number} */
      var y = -n1 / 2 * (t % 3) + Math.floor(t / 3) * m / 2;
      d = U.v7a7321817e214ef0146ed1ce6559a705(new Point(res.x + x, res.y + y));
    } else {
      /** @type {number} */
      t = b;
      if (b < 3) {
        t = b + 6;
      }
      /** @type {number} */
      x = n1 * (t % 3) + Math.floor(t / 3) * m;
      /** @type {number} */
      y = -n1 / 2 * (t % 3) + Math.floor(t / 3) * m / 2;
      d = U.v7a7321817e214ef0146ed1ce6559a705(new Point(res.x + x, res.y + y));
    }
  }
  return d;
}, StadiumView.prototype.ve62df914ef50dbd5cb6db9ebfca1b92d = function(objectToMeasure) {
  /** @type {number} */
  var p3x2 = 479 - 2 * objectToMeasure.y + 2 * objectToMeasure.x;
  /** @type {number} */
  var cornerOffset = 335 - 1 * objectToMeasure.y - objectToMeasure.x;
  return new Point(p3x2, cornerOffset);
}, StadiumView.prototype.v0693c65c97ba1d3835f2f4325d332de2 = function(LayoutTransition, target) {
  var self = LayoutTransition.clone();
  var teOptions = A.v50156c5418a59f9fb151a3917f9026dd().bandMatchWeights;
  self.sort(function(block, diff) {
    return block.vc20812bcfaa4e4fb8a74d327f917f437 - block.v951aac4f6f63f6d1797e602ce4dd0558 > diff.vc20812bcfaa4e4fb8a74d327f917f437 - diff.v951aac4f6f63f6d1797e602ce4dd0558 ? 1 : -1;
  });
  /** @type {number} */
  var p3x2 = 0;
  /** @type {number} */
  var i = 0;
  /** @type {number} */
  var a = 0;
  /** @type {number} */
  var t = 0;
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var size = Math.ceil(self.length / 780);
  _.each(self, function(r) {
    if (r.v6c354fd68d7182142e3528988c40de19 && a++, r.v9b2bbd7a09bc4fafb86e8f28abd582c1 && t++, r.v14adc4304cb7f5f8d57fc4d883325d76 && b++, i++ % size == 0) {
      /** @type {number} */
      var line_y = 300;
      /** @type {number} */
      var top = 450;
      var valueProgess = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(p3x2, 0), null);
      /**
       * @param {?} expression
       * @param {!CanvasRenderingContext2D} ctx
       * @return {undefined}
       */
      valueProgess.v793de667e5638a8684bd3ef05d3c7e8b = function(expression, ctx) {
        if (ctx.lineWidth = 1, r.v4237e273d69279d9fd67d483c6b090a3 != undefined) {
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#FF0000";
          ctx.moveTo(this.location.x, line_y);
          /** @type {number} */
          line_y = line_y - r.v4237e273d69279d9fd67d483c6b090a3 * teOptions.vfbdfe532170e5dbbf837f354b26a815a * 100;
          ctx.lineTo(this.location.x, line_y);
          ctx.stroke();
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#00FFFF";
          ctx.moveTo(this.location.x, line_y);
          /** @type {number} */
          line_y = line_y - r.v32fdad573c71c3074d965944797f80e6 * teOptions.v4d37e3a237cad1a1b32ec31fe574be6f * 100;
          ctx.lineTo(this.location.x, line_y);
          ctx.stroke();
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#FFFF00";
          ctx.moveTo(this.location.x, line_y);
          /** @type {number} */
          line_y = line_y - r.v1767b9c53011d52c922beaa52886aeee * teOptions.vffd75135c8fd0917e65c50fcd7305848 * 100;
          ctx.lineTo(this.location.x, line_y);
          ctx.stroke();
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#0000FF";
          ctx.moveTo(this.location.x, line_y);
          /** @type {number} */
          line_y = line_y - r.ve75f5c321c63ab6fa35158ff3713014a * teOptions.ve75f5c321c63ab6fa35158ff3713014a * 100;
          ctx.lineTo(this.location.x, line_y);
          ctx.stroke();
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#DDDDDD";
          ctx.moveTo(this.location.x, line_y);
          /** @type {number} */
          line_y = line_y - r.v951aac4f6f63f6d1797e602ce4dd0558 * 100;
          ctx.lineTo(this.location.x, line_y);
          ctx.stroke();
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#FFFFFF";
          /** @type {number} */
          var crossRadius = A.v50156c5418a59f9fb151a3917f9026dd().tightnessOfBandMatchRequired * 100;
          ctx.moveTo(0, 300 - crossRadius);
          ctx.lineTo(1e3, 300 - crossRadius);
          ctx.stroke();
        } else {
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#FF0000";
          ctx.moveTo(this.location.x, line_y);
          /** @type {number} */
          line_y = line_y - r.vc20812bcfaa4e4fb8a74d327f917f437 * 100;
          ctx.lineTo(this.location.x, line_y);
          ctx.stroke();
          ctx.beginPath();
          /** @type {string} */
          ctx.strokeStyle = "#FFFFFF";
          ctx.moveTo(0, 300);
          ctx.lineTo(1e3, 300);
          ctx.stroke();
        }
        ctx.beginPath();
        /** @type {string} */
        ctx.strokeStyle = "#999999";
        ctx.moveTo(this.location.x, top);
        ctx.lineTo(this.location.x, top - 100);
        ctx.stroke();
        ctx.beginPath();
        /** @type {string} */
        ctx.strokeStyle = "#444444";
        ctx.moveTo(this.location.x, top);
        /** @type {number} */
        top = top - r.v432e521fcdee1770eeb096f74be4769d * 100;
        ctx.lineTo(this.location.x, top);
        ctx.stroke();
        ctx.beginPath();
        /** @type {string} */
        ctx.strokeStyle = "#FFFF00";
        ctx.moveTo(this.location.x, top);
        /** @type {number} */
        top = top - r.vcd6e06105fab6138372d55320ce7bd54 * 100;
        ctx.lineTo(this.location.x, top);
        ctx.stroke();
        ctx.beginPath();
        /** @type {string} */
        ctx.strokeStyle = "#0000FF";
        ctx.moveTo(this.location.x, top);
        /** @type {number} */
        top = top - r.v802dbabf9ab7de687dd50d05ece882a8 * 100;
        ctx.lineTo(this.location.x, top);
        ctx.stroke();
        ctx.beginPath();
        if (r.v6c354fd68d7182142e3528988c40de19) {
          /** @type {string} */
          ctx.strokeStyle = "#00FF00";
        } else {
          /** @type {string} */
          ctx.strokeStyle = "#FF0000";
        }
        ctx.moveTo(this.location.x, 455);
        ctx.lineTo(this.location.x, 475);
        ctx.stroke();
        ctx.beginPath();
        if (r.v14adc4304cb7f5f8d57fc4d883325d76) {
          /** @type {string} */
          ctx.strokeStyle = "#007700";
          ctx.moveTo(this.location.x, 475);
          ctx.lineTo(this.location.x, 495);
          ctx.stroke();
        }
        ctx.beginPath();
        if (r.v9b2bbd7a09bc4fafb86e8f28abd582c1) {
          /** @type {string} */
          ctx.strokeStyle = "#FFFF00";
          ctx.moveTo(this.location.x, 475);
          ctx.lineTo(this.location.x, 495);
          ctx.stroke();
        }
      };
      target.vc2b55451d6b5a973b456d3ad090abf8d(valueProgess);
      p3x2++;
    }
  }, this);
  var d = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(0, 365), null);
  /** @type {string} */
  d.text = "TP Count: " + self.length + "  WantsToBuy: " + a + "  Scaled Count: " + U.S(self.length) + "  Scaled WantsToBuy: " + U.S(a);
  /** @type {string} */
  d.text = "Scaled  Considered: " + U.S(self.length) + " WantsToBuy: " + U.S(a) + "  No Seat: " + U.S(a - t - b) + " Disgusted: " + U.S(t) + " Bought: " + U.S(b);
  target.vc2b55451d6b5a973b456d3ad090abf8d(d);
};
/**
 * @param {?} name
 * @param {?} data
 * @return {undefined}
 */
var ConcessionsView = function(name, data) {
  View.call(this, name, data);
};
ConcessionsView.prototype = Object.create(View.prototype), ConcessionsView.prototype.va2d78265764a9d326f92455033ffb2a5 = function() {
  var a = View.prototype.va2d78265764a9d326f92455033ffb2a5.call(this);
  return a.vfa21e3bf8ea9d4320d8597afc1052baf(A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.ve8b5a86145837d972a1f03d6fd2e0b0d()), a;
}, v768b3f7a5626de0e1a971c1dbec321b0.prototype = Object.create(Object.prototype), v768b3f7a5626de0e1a971c1dbec321b0.prototype.constructor = v768b3f7a5626de0e1a971c1dbec321b0, v768b3f7a5626de0e1a971c1dbec321b0.prototype.init = function(value) {
  /** @type {!Object} */
  this.v1f3a20ddbdcfc5b6bd3a0cecc07d50e9 = value;
  /** @type {number} */
  var a = 0;
  for (; a < this.v1f3a20ddbdcfc5b6bd3a0cecc07d50e9; a++) {
    this.v3f0a03122cd725a5242948c59851026b.vc2b55451d6b5a973b456d3ad090abf8d(false);
    this.v038adc13e59f04dbd989cc5cd42e844a.vc2b55451d6b5a973b456d3ad090abf8d(null);
  }
}, v768b3f7a5626de0e1a971c1dbec321b0.prototype.vaa149b54ba503f2e76593cd4d0d48f06 = function(b) {
  var c = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random.next(this.vfa76ca9c44ecc972ec2786890f439796.length);
  var a = new v09ce43066ba30cc08ebe2cafd2c4bd46;
  a.init(c, b);
  this.v3fc7fc36b9963e67c3c7b99bd39c2c6c.vc2b55451d6b5a973b456d3ad090abf8d(a);
}, v768b3f7a5626de0e1a971c1dbec321b0.prototype.ve8b5a86145837d972a1f03d6fd2e0b0d = function() {
  var t = A.v87b8393064cbfa8977b32cec36a69d86().vfadc6bbdc8c1ee6e5ff9c6b34e7b0352;
  /** @type {!Array} */
  var lines = [];
  var c = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
  var p1 = t.v25deb183138b7951a8b404efe7cade27("Chips").v5ade6f2f5a1f2d10c4bb670808c99f85();
  lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(p1, "SnackRackBottom"));
  /** @type {number} */
  var i = 0;
  for (; i < 3; i++) {
    lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(p1.x, p1.y + 55 - 30 * i), "SnackRackShelves"));
  }
  if (c != null) {
    /** @type {number} */
    var NUMBER_OF_FOLLOWERS = Math.floor(24 * (c.v19628441547527e7756f5ca10c16c9f4.Chips / Math.max(1, c.vda1b1f9e42e1aee5b7c3cad5f97f53ef.Chips)));
    /** @type {number} */
    i = 0;
    for (; i < NUMBER_OF_FOLLOWERS; i++) {
      /** @type {number} */
      var r = i % 8;
      lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(p1.x + 10 * r, p1.y + 50 - 30 * Math.floor(i / 8) + 5 * r), "Chips0"));
    }
  }
  lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(t.v25deb183138b7951a8b404efe7cade27("Fountain").v5ade6f2f5a1f2d10c4bb670808c99f85(), "SodaMachine"));
  lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(t.v25deb183138b7951a8b404efe7cade27("IceCream").v5ade6f2f5a1f2d10c4bb670808c99f85(), "IceCreamMachine"));
  var y1 = t.v25deb183138b7951a8b404efe7cade27("Drinks").v5ade6f2f5a1f2d10c4bb670808c99f85();
  lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(y1, "RefridgeUnitBase"));
  /** @type {number} */
  i = 0;
  for (; i < 2; i++) {
    lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(y1, "RefridgeUnitShelf"));
  }
  if (c != null) {
    /** @type {number} */
    i = 0;
    for (; i < 18 * c.v19628441547527e7756f5ca10c16c9f4["Bottled Soda"] / Math.max(1, c.vda1b1f9e42e1aee5b7c3cad5f97f53ef["Bottled Soda"]); i++) {
      /** @type {number} */
      r = i % 9;
      lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(y1.x + 30 + r * 10, y1.y + 75 - Math.floor(i / 9) * 30 + r * 10 / 2), "Soda0"));
    }
  }
  lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(y1, "RefridgeUnitTopSide"));
  lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(y1, "RefridgeUnitGlass"));
  /** @type {!Array} */
  var p = [];
  vee8206b276787f6d065f935010a51f0c(this, this.vfa76ca9c44ecc972ec2786890f439796, function(a) {
    p.vfa21e3bf8ea9d4320d8597afc1052baf(a.ve8b5a86145837d972a1f03d6fd2e0b0d());
  });
  /** @type {!Array<?>} */
  p = p.sort(v74d951e1ef91d0f189e177d58ae30d8e.vdfc12222809106829ad71bf9ca8b2d12);
  lines.vfa21e3bf8ea9d4320d8597afc1052baf(p);
  lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(t.v25deb183138b7951a8b404efe7cade27("Counter").v5ade6f2f5a1f2d10c4bb670808c99f85(), "Counter"));
  /** @type {number} */
  i = 0;
  for (; i < this.v1f3a20ddbdcfc5b6bd3a0cecc07d50e9; i++) {
    var xhair = t.v25deb183138b7951a8b404efe7cade27("Register" + i + "Base").v5ade6f2f5a1f2d10c4bb670808c99f85();
    lines.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(xhair.x - 50, xhair.y - 60), "CashRegister"));
  }
  var start = new v74d951e1ef91d0f189e177d58ae30d8e(t.v25deb183138b7951a8b404efe7cade27("Popcorn").v5ade6f2f5a1f2d10c4bb670808c99f85(), "Popcorn");
  return start.col = 5, c != null && (start.col = Math.floor(5 * (1 - c.v19628441547527e7756f5ca10c16c9f4.Popcorn / Math.max(1, c.vda1b1f9e42e1aee5b7c3cad5f97f53ef.Popcorn)))), lines.vc2b55451d6b5a973b456d3ad090abf8d(start), start = new v74d951e1ef91d0f189e177d58ae30d8e(t.v25deb183138b7951a8b404efe7cade27("Pretzels").v5ade6f2f5a1f2d10c4bb670808c99f85(), "Pretzels"), start.col = 5, c != null && (start.col = Math.floor(5 * (1 - c.v19628441547527e7756f5ca10c16c9f4.Pretzels / Math.max(1, c.vda1b1f9e42e1aee5b7c3cad5f97f53ef.Pretzels)))),
  lines.vc2b55451d6b5a973b456d3ad090abf8d(start), p = [], vee8206b276787f6d065f935010a51f0c(this, this.v3fc7fc36b9963e67c3c7b99bd39c2c6c, function(a) {
    p.vfa21e3bf8ea9d4320d8597afc1052baf(a.ve8b5a86145837d972a1f03d6fd2e0b0d());
  }), p = p.sort(v74d951e1ef91d0f189e177d58ae30d8e.vdfc12222809106829ad71bf9ca8b2d12), lines.vfa21e3bf8ea9d4320d8597afc1052baf(p), lines;
}, v768b3f7a5626de0e1a971c1dbec321b0.prototype.va916c7c8d43a4d11bee1e67bd7a7cec2 = function(b, f) {
  /** @type {boolean} */
  var a = false;
  return vee8206b276787f6d065f935010a51f0c(this, this.v3fc7fc36b9963e67c3c7b99bd39c2c6c, function(a) {
    if (a.id < b.id && U.vc1f415498343451365676d8a0e41ec71(f, a.v5ade6f2f5a1f2d10c4bb670808c99f85()) < 30) {
      /** @type {boolean} */
      a = true;
    }
  }), a ? false : true;
}, v6fb33bd266b04b0ea62af001cd60d130.prototype = Object.create(v16cee3ee62f4283e2aa83ff23503aa30.prototype), v6fb33bd266b04b0ea62af001cd60d130.prototype.constructor = v6fb33bd266b04b0ea62af001cd60d130, v6fb33bd266b04b0ea62af001cd60d130.ve712bbacdea1d4b64dbdf9de54524232 = 0, v6fb33bd266b04b0ea62af001cd60d130.TakeOrder = 1, v6fb33bd266b04b0ea62af001cd60d130.ve959cc54d0dcdd84b7522ecb9b2ae917 = 2, v6fb33bd266b04b0ea62af001cd60d130.va11dd457b6395e0e2ea53ff436d4b26b = 3, v6fb33bd266b04b0ea62af001cd60d130.prototype.init =
function(value) {
  /** @type {!Array} */
  var leftArrow = ["M", "F"];
  var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random;
  this.vffd75135c8fd0917e65c50fcd7305848 = leftArrow[rnd.next(2)];
  this.v3e3aaf2ad7902b0f057d7bd8c3f9acfa = rnd.next(3);
  /** @type {number} */
  this.counter = 5;
  /** @type {string} */
  this.target = "";
  this.m = A.v87b8393064cbfa8977b32cec36a69d86().vfadc6bbdc8c1ee6e5ff9c6b34e7b0352;
  /** @type {string} */
  this.register = value;
  this.v359abcfffa6d67a9b9f67e93bef327c7(3.5);
  this.v46d9c2aea57ee009b9ab339d4478978a(this.m.v25deb183138b7951a8b404efe7cade27("Register" + this.register + "Base").v5ade6f2f5a1f2d10c4bb670808c99f85());
  /** @type {number} */
  this.v47ab9094f7763ada19867ee0131af83f = .01;
  A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
}, v6fb33bd266b04b0ea62af001cd60d130.prototype.ve8b5a86145837d972a1f03d6fd2e0b0d = function() {
  if (this.carry) {
    /** @type {string} */
    this.v324e69474414ef937055f966030d7254 = "Carry";
  }
  var elapsedTime = v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep;
  if (this.dx != undefined) {
    /** @type {number} */
    this.va359d4e8388ec27ff74fa1c2c7b7a983 = this.dx * elapsedTime;
  }
  if (this.dy != undefined) {
    /** @type {number} */
    this.v47ab9094f7763ada19867ee0131af83f = this.dy * elapsedTime;
  }
  var eachParts = v16cee3ee62f4283e2aa83ff23503aa30.prototype.ve8b5a86145837d972a1f03d6fd2e0b0d.call(this, "Emp" + this.v324e69474414ef937055f966030d7254 + this.vffd75135c8fd0917e65c50fcd7305848 + "P" + this.v3e3aaf2ad7902b0f057d7bd8c3f9acfa);
  if (this.v324e69474414ef937055f966030d7254 == "Carry") {
    var target = eachParts[0];
    /** @type {number} */
    var x = target.flipX == 1 ? 10 : -10;
    /** @type {number} */
    var y = target.row == 0 ? -5 : 5;
    var valueProgess = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(target.location.x - 2 + x, target.location.y - 60 + y), "Carton" + this.v3e3aaf2ad7902b0f057d7bd8c3f9acfa % 2);
    if (y < 0) {
      target.v22710cf6916a48e141cc7ad7876eca98.vc2b55451d6b5a973b456d3ad090abf8d(valueProgess);
    } else {
      target.vabde4a187e855cd6fb04c0f6619f306f.vc2b55451d6b5a973b456d3ad090abf8d(valueProgess);
    }
  }
  return eachParts;
}, v6fb33bd266b04b0ea62af001cd60d130.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  };
  switch(this.state) {
    case v6fb33bd266b04b0ea62af001cd60d130.ve712bbacdea1d4b64dbdf9de54524232:
      /** @type {string} */
      this.v324e69474414ef937055f966030d7254 = "Stand";
      if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.v038adc13e59f04dbd989cc5cd42e844a[this.register] != null) {
        /** @type {number} */
        this.state = v6fb33bd266b04b0ea62af001cd60d130.TakeOrder;
        /** @type {number} */
        this.counter = 5;
      }
      break;
    case v6fb33bd266b04b0ea62af001cd60d130.TakeOrder:
      var obj_id = A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.v038adc13e59f04dbd989cc5cd42e844a[this.register].vb9644ae0e4bfb2e7baebcc5f012fc1e4;
      if (obj_id == null) {
        /** @type {string} */
        this.v324e69474414ef937055f966030d7254 = "Stand";
      } else {
        /** @type {string} */
        this.v324e69474414ef937055f966030d7254 = "TakeOrder";
      }
      if (this.counter-- < 0) {
        if (obj_id != null) {
          /** @type {number} */
          this.state = v6fb33bd266b04b0ea62af001cd60d130.ve959cc54d0dcdd84b7522ecb9b2ae917;
          this.target = obj_id;
          var a = this.m.va9a2bd302fd9f91ebfeed0cffe696d85("Register" + this.register + "Base", this.target + "Base");
          this.vcecae7630817bbe4e45a64aabde08a54(a.v95c3eef9b0701a2beb0582b95eb5d466());
          /** @type {string} */
          this.v324e69474414ef937055f966030d7254 = "Walk";
        } else {
          /** @type {number} */
          this.state = v6fb33bd266b04b0ea62af001cd60d130.ve712bbacdea1d4b64dbdf9de54524232;
          /** @type {boolean} */
          A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.v3f0a03122cd725a5242948c59851026b[this.register] = true;
        }
        /** @type {null} */
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.v038adc13e59f04dbd989cc5cd42e844a[this.register] = null;
      }
      break;
    case v6fb33bd266b04b0ea62af001cd60d130.ve959cc54d0dcdd84b7522ecb9b2ae917:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        /** @type {string} */
        this.v324e69474414ef937055f966030d7254 = "Carry";
        /** @type {number} */
        this.state = v6fb33bd266b04b0ea62af001cd60d130.va11dd457b6395e0e2ea53ff436d4b26b;
        a = this.m.va9a2bd302fd9f91ebfeed0cffe696d85(this.target + "Base", "Register" + this.register + "Base");
        this.vcecae7630817bbe4e45a64aabde08a54(a.v95c3eef9b0701a2beb0582b95eb5d466());
      }
      break;
    case v6fb33bd266b04b0ea62af001cd60d130.va11dd457b6395e0e2ea53ff436d4b26b:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        /** @type {number} */
        this.state = v6fb33bd266b04b0ea62af001cd60d130.ve712bbacdea1d4b64dbdf9de54524232;
        /** @type {boolean} */
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.v3f0a03122cd725a5242948c59851026b[this.register] = true;
      }
      break;
  }
  return false;
}, v09ce43066ba30cc08ebe2cafd2c4bd46.prototype = Object.create(v16cee3ee62f4283e2aa83ff23503aa30.prototype), v09ce43066ba30cc08ebe2cafd2c4bd46.prototype.constructor = v09ce43066ba30cc08ebe2cafd2c4bd46, v09ce43066ba30cc08ebe2cafd2c4bd46.vabc9b2e215c37755e63e8f6530f4b8ba = 0, v09ce43066ba30cc08ebe2cafd2c4bd46.vc38b624b9c9a41b87046e3c5bc071871 = 1, v09ce43066ba30cc08ebe2cafd2c4bd46.v938e3f43508eb0ce7d259ec62c5a1494 = 2, v09ce43066ba30cc08ebe2cafd2c4bd46.v30386d0d16604883bc9bf371e41ee932 = ["Walk", "Stand",
"Walk"], v09ce43066ba30cc08ebe2cafd2c4bd46.prototype.init = function(type, source) {
  /** @type {!Array} */
  var leftArrow = ["M", "F"];
  this.v359abcfffa6d67a9b9f67e93bef327c7(1.5);
  var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random;
  /** @type {number} */
  this.vaabc18195254e8fb4d4d192c5b751d7a = source;
  this.id = A.vfe1c4eaec8ec40f848f9772196c532d3().v15af39ec8aea0a5ca11dd4a8fec71fcc();
  this.vffd75135c8fd0917e65c50fcd7305848 = leftArrow[rnd.next(2)];
  this.v3e3aaf2ad7902b0f057d7bd8c3f9acfa = rnd.next(3);
  this.m = A.v87b8393064cbfa8977b32cec36a69d86().vfadc6bbdc8c1ee6e5ff9c6b34e7b0352;
  /** @type {string} */
  this.register = type;
  this.v46d9c2aea57ee009b9ab339d4478978a(this.m.v25deb183138b7951a8b404efe7cade27("LineBegin" + this.register).v5ade6f2f5a1f2d10c4bb670808c99f85());
  var d = this.m.va9a2bd302fd9f91ebfeed0cffe696d85("LineBegin" + this.register, "LineOrder" + this.register);
  this.vcecae7630817bbe4e45a64aabde08a54(d.v95c3eef9b0701a2beb0582b95eb5d466());
  /** @type {boolean} */
  this.v13838e83a8b3418e94cb2d83c662757e = false;
  /** @type {boolean} */
  this.carry = false;
  /** @type {number} */
  var b = 0;
  for (; b < AppConstants.ve0ccd5a2b701f34020674a11fd1c2dcf; b++) {
    this.vbc02848020089300f7298e5e0de59dd7.vc2b55451d6b5a973b456d3ad090abf8d(this.v319af0e820d29362d11bd7dd7c7c50d5(rnd));
  }
  this.vb9644ae0e4bfb2e7baebcc5f012fc1e4;
  A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
}, v09ce43066ba30cc08ebe2cafd2c4bd46.prototype.ve8b5a86145837d972a1f03d6fd2e0b0d = function() {
  var sprite = v09ce43066ba30cc08ebe2cafd2c4bd46.v30386d0d16604883bc9bf371e41ee932[this.state];
  if (this.v13838e83a8b3418e94cb2d83c662757e) {
    /** @type {string} */
    sprite = "Stand";
  }
  if (this.carry) {
    /** @type {string} */
    sprite = "Carry";
  }
  var elapsedTime = v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep;
  if (this.dx != undefined) {
    /** @type {number} */
    this.va359d4e8388ec27ff74fa1c2c7b7a983 = this.dx * elapsedTime;
  }
  if (this.dy != undefined) {
    /** @type {number} */
    this.v47ab9094f7763ada19867ee0131af83f = this.dy * elapsedTime;
  }
  var eachParts = v16cee3ee62f4283e2aa83ff23503aa30.prototype.ve8b5a86145837d972a1f03d6fd2e0b0d.call(this, "Cust" + sprite + this.vffd75135c8fd0917e65c50fcd7305848 + "P" + this.v3e3aaf2ad7902b0f057d7bd8c3f9acfa);
  var target = eachParts[0];
  if (this.carry) {
    /** @type {number} */
    var x = target.flipX == 1 ? 10 : -10;
    /** @type {number} */
    var y = target.row == 0 ? -5 : 5;
    var valueProgess = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(target.location.x - 2 + x, target.location.y - 60 + y), "Carton" + this.v3e3aaf2ad7902b0f057d7bd8c3f9acfa % 2);
    if (y < 0) {
      target.v22710cf6916a48e141cc7ad7876eca98.vc2b55451d6b5a973b456d3ad090abf8d(valueProgess);
    } else {
      target.vabde4a187e855cd6fb04c0f6619f306f.vc2b55451d6b5a973b456d3ad090abf8d(valueProgess);
    }
  }
  return eachParts;
}, v09ce43066ba30cc08ebe2cafd2c4bd46.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  };
  var c = A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e;
  var g = A.vfe1c4eaec8ec40f848f9772196c532d3().v9f7821688406340f747104ce90941912;
  switch(this.state) {
    case v09ce43066ba30cc08ebe2cafd2c4bd46.vabc9b2e215c37755e63e8f6530f4b8ba:
      var query_parameters = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        /** @type {number} */
        this.state = v09ce43066ba30cc08ebe2cafd2c4bd46.vc38b624b9c9a41b87046e3c5bc071871;
        c.v038adc13e59f04dbd989cc5cd42e844a[this.register] = this;
        /** @type {number} */
        var layer_i = 0;
        for (; layer_i < this.vbc02848020089300f7298e5e0de59dd7.length; layer_i++) {
          var i = AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[this.vbc02848020089300f7298e5e0de59dd7[layer_i]];
          var val = g.va2e8685aaa26fc8be2f8ebb695e5f0ff[i];
          if (val > this.vaabc18195254e8fb4d4d192c5b751d7a.v40b7158210ad8fbb3de700fb50b5c3e6 / AppConstants.vd9de7eceaa9cd35f5b5150a42b21c277 * AppConstants.vd4283acd004a59a240453891095d5b36[layer_i]) {
            query_parameters.comment("Concessions", U.vc0e6c88f8413e92781b652ae2786391a("The price of the {0} is too high. I'm not getting anything.", i.toLowerCase()));
          } else {
            if (query_parameters.v19628441547527e7756f5ca10c16c9f4[i] <= 0) {
              query_parameters.comment("Concessions", U.vc0e6c88f8413e92781b652ae2786391a("I can't believe they're out of {0}. I'm not getting anything.", i.toLowerCase()));
            } else {
              query_parameters.v19628441547527e7756f5ca10c16c9f4[i] -= Math.min(1, query_parameters.v19628441547527e7756f5ca10c16c9f4[i]);
              A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Cash", val * g.v593f1cd1f022086bd87c3de3db987bd8, i, query_parameters.v6df93cee8d46ebc1cd5d0ef23df99e6b);
              if (this.vb9644ae0e4bfb2e7baebcc5f012fc1e4 == undefined) {
                this.vb9644ae0e4bfb2e7baebcc5f012fc1e4 = i;
              }
            }
          }
        }
      }
      break;
    case v09ce43066ba30cc08ebe2cafd2c4bd46.vc38b624b9c9a41b87046e3c5bc071871:
      if (c.v3f0a03122cd725a5242948c59851026b[this.register] == 1) {
        /** @type {boolean} */
        c.v3f0a03122cd725a5242948c59851026b[this.register] = false;
        if (this.vb9644ae0e4bfb2e7baebcc5f012fc1e4 != undefined) {
          /** @type {boolean} */
          this.carry = true;
        }
        /** @type {number} */
        this.state = v09ce43066ba30cc08ebe2cafd2c4bd46.v938e3f43508eb0ce7d259ec62c5a1494;
        var g = this.m.va9a2bd302fd9f91ebfeed0cffe696d85("LineOrder" + this.register, "LineEnd" + this.register);
        this.vcecae7630817bbe4e45a64aabde08a54(g.v95c3eef9b0701a2beb0582b95eb5d466());
      }
      break;
    case v09ce43066ba30cc08ebe2cafd2c4bd46.v938e3f43508eb0ce7d259ec62c5a1494:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        c.v3fc7fc36b9963e67c3c7b99bd39c2c6c.vf81b17578abb97a8de755cddbf7f45a9(this);
        A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
        /** @type {number} */
        this.vaabc18195254e8fb4d4d192c5b751d7a.state = v2b0bbff44f88e67381b9b655d66abefc.vf49e4b3ae5d33f5a8285f1a40cb5af4d;
        A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(this.vaabc18195254e8fb4d4d192c5b751d7a, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
      }
      break;
  }
  return false;
}, v09ce43066ba30cc08ebe2cafd2c4bd46.prototype.ve8242717100aa0bda70572e93fec612f = function() {
  var vertexBefore = this.v5ade6f2f5a1f2d10c4bb670808c99f85();
  var b = v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep;
  var dx = this.dx != undefined ? this.dx : this.va359d4e8388ec27ff74fa1c2c7b7a983 / b;
  var dy = this.dy != undefined ? this.dy : this.v47ab9094f7763ada19867ee0131af83f / b;
  return this.state != v09ce43066ba30cc08ebe2cafd2c4bd46.v938e3f43508eb0ce7d259ec62c5a1494 && !A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.va916c7c8d43a4d11bee1e67bd7a7cec2(this, new Point(vertexBefore.x + dx, vertexBefore.y + dy)) ? (this.v13838e83a8b3418e94cb2d83c662757e = true, this.v5ade6f2f5a1f2d10c4bb670808c99f85().x - this.v5ade6f2f5a1f2d10c4bb670808c99f85().y * 2 < -440 && (A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.comment("Concessions",
  "This line is too long. I'm not getting anything."), this.state = v09ce43066ba30cc08ebe2cafd2c4bd46.v938e3f43508eb0ce7d259ec62c5a1494, this.vcecae7630817bbe4e45a64aabde08a54([new Point(this.v5ade6f2f5a1f2d10c4bb670808c99f85().x - 18, this.v5ade6f2f5a1f2d10c4bb670808c99f85().y - 9), this.m.v25deb183138b7951a8b404efe7cade27("LineEnd" + this.register).v5ade6f2f5a1f2d10c4bb670808c99f85()])), false) : (this.v13838e83a8b3418e94cb2d83c662757e = false, v16cee3ee62f4283e2aa83ff23503aa30.prototype.ve8242717100aa0bda70572e93fec612f.call(this));
}, v09ce43066ba30cc08ebe2cafd2c4bd46.prototype.v319af0e820d29362d11bd7dd7c7c50d5 = function(to) {
  /** @type {number} */
  var _len = 0;
  var _i = to.va7f5b666e153a7fd316b95fa2a8560ac();
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < AppConstants.v089fb388088a482d2c425bd0f8c4a57f.length; layer_i++) {
    if (_len = _len + AppConstants.v089fb388088a482d2c425bd0f8c4a57f[layer_i] / 3, _i < _len) {
      return layer_i;
    }
  }
  return 0;
};
/**
 * @param {?} name
 * @param {?} data
 * @return {undefined}
 */
var ParkingView = function(name, data) {
  View.call(this, name, data);
};
ParkingView.prototype = Object.create(View.prototype), ParkingView.prototype.va2d78265764a9d326f92455033ffb2a5 = function() {
  var valueProgess = View.prototype.va2d78265764a9d326f92455033ffb2a5.call(this);
  var QueryLanguageComponent = A.v87b8393064cbfa8977b32cec36a69d86().vf252aa2b1e3ffe0ec1a5f9434ea1cb2e;
  return A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed() == "N" && valueProgess.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(0, 0), "ParkingBackN")), this.v32d59814faa9cb12bca69b79367e179e(valueProgess, QueryLanguageComponent), this.vfbbcf35131e782199cfc8e7fbb014f34(valueProgess, QueryLanguageComponent), valueProgess;
}, ParkingView.prototype.v32d59814faa9cb12bca69b79367e179e = function(a, b) {
  a.vfa21e3bf8ea9d4320d8597afc1052baf(A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v43fc441e27927b5c223ed716685fcd46(b));
}, ParkingView.prototype.vfbbcf35131e782199cfc8e7fbb014f34 = function(a, b) {
  var rule_id = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  a.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(b.v25deb183138b7951a8b404efe7cade27("laneFences").v5ade6f2f5a1f2d10c4bb670808c99f85(), "CorralGatePiece" + rule_id));
  a.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(b.v25deb183138b7951a8b404efe7cade27("ticketBoothRoof").v5ade6f2f5a1f2d10c4bb670808c99f85(), "TicketBoothRoof" + rule_id));
  /** @type {number} */
  var numberOfActivationUnitsL2 = Math.ceil(A.vfe1c4eaec8ec40f848f9772196c532d3().staffing["Ticket Takers"] / 2);
  var opts = b.v25deb183138b7951a8b404efe7cade27("laneOpen0").v5ade6f2f5a1f2d10c4bb670808c99f85();
  /** @type {number} */
  var r = 0;
  for (; r < va9e642482127d2a8e086348a87917fba.v5f9b4c7f0bd676ea4dc4d16a031fc3c1; r++) {
    /** @type {string} */
    var filter_value_container_id = "TicketRed" + rule_id;
    if (r < numberOfActivationUnitsL2) {
      /** @type {string} */
      filter_value_container_id = "TicketGreen" + rule_id;
    }
    a.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(new Point(opts.x + r * 13.4, opts.y - r * 6.7), filter_value_container_id));
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[1].length > 0) {
    var triggerPublishSeed = A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[1][0];
    a.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(b.v25deb183138b7951a8b404efe7cade27("ticketBoothSign").v5ade6f2f5a1f2d10c4bb670808c99f85(), "BoothSign" + triggerPublishSeed.index));
  }
}, va9e642482127d2a8e086348a87917fba.prototype = Object.create(Object.prototype), va9e642482127d2a8e086348a87917fba.prototype.constructor = va9e642482127d2a8e086348a87917fba, va9e642482127d2a8e086348a87917fba.prototype.init = function() {
  /** @type {number} */
  var id = 0;
  for (; id < va9e642482127d2a8e086348a87917fba.vb691aa1a681c44416b5a7a5ce7a6ceee + 2; id++) {
    /** @type {!Array} */
    this.v8b591a6ae707f82d0c7bf7080524308b[id] = [];
    /** @type {number} */
    var POSITION_LABEL = 0;
    for (; POSITION_LABEL < va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9; POSITION_LABEL++) {
      /** @type {null} */
      this.v8b591a6ae707f82d0c7bf7080524308b[id][POSITION_LABEL] = null;
    }
  }
  /** @type {number} */
  id = 0;
  for (; id < va9e642482127d2a8e086348a87917fba.v5f9b4c7f0bd676ea4dc4d16a031fc3c1; id++) {
    this.v98d072375842b2a8b918f246e32ab2d7.vc2b55451d6b5a973b456d3ad090abf8d([]);
  }
}, va9e642482127d2a8e086348a87917fba.vcfda29694013b0ed0f4f9813ebda3d55 = 2, va9e642482127d2a8e086348a87917fba.vb691aa1a681c44416b5a7a5ce7a6ceee = 25, va9e642482127d2a8e086348a87917fba.v0b4777532ae5d7913ba20d32c3b7b298 = 5, va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9 = 28, va9e642482127d2a8e086348a87917fba.vd9ddbcd17e68fd3c44c5afb6cc2e4d41 = 250, va9e642482127d2a8e086348a87917fba.vc9f4388658fa7a8e38c26e5ca01f44f2 = 8, va9e642482127d2a8e086348a87917fba.v5f9b4c7f0bd676ea4dc4d16a031fc3c1 =
10, va9e642482127d2a8e086348a87917fba.prototype.v43fc441e27927b5c223ed716685fcd46 = function(locale) {
  /** @type {!Array} */
  var b = [];
  var i = A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed();
  var max = A.vfe1c4eaec8ec40f848f9772196c532d3().staffing["Parking Attendants"];
  /** @type {number} */
  var endTime = Math.ceil(max / 5);
  /** @type {number} */
  xSpacing = 250 / endTime;
  /** @type {number} */
  ySpacing = 50;
  var cube_va = locale.v25deb183138b7951a8b404efe7cade27("attendantsBegin").v5ade6f2f5a1f2d10c4bb670808c99f85();
  cube_va.x += 105;
  cube_va.y -= 20;
  /** @type {number} */
  var time = 0;
  for (; time < max; time++) {
    /** @type {number} */
    var mean = Math.floor(time / endTime);
    /** @type {number} */
    var diff = time % endTime;
    var socket = new Point(cube_va.x + mean * ySpacing + diff * xSpacing, cube_va.y - mean * ySpacing / 2 + diff * xSpacing / 2);
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(socket, "Attendant"));
  }
  var vector = locale.v25deb183138b7951a8b404efe7cade27("booth0").v5ade6f2f5a1f2d10c4bb670808c99f85();
  vector.x += 9;
  vector.y += 4;
  /** @type {number} */
  var proportionalWeight = 22;
  var minIdleTime = this.v832218d1d3f813e17691b8f48dfb75a2();
  /** @type {number} */
  time = 0;
  for (; time < va9e642482127d2a8e086348a87917fba.vc9f4388658fa7a8e38c26e5ca01f44f2; time++) {
    /** @type {string} */
    var gi = "BoothClosed";
    if (time < minIdleTime) {
      /** @type {string} */
      gi = "BoothOpen";
    }
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(U.v7a7321817e214ef0146ed1ce6559a705(new Point(vector.x + time * proportionalWeight, vector.y + time * proportionalWeight / 2)), gi));
  }
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < this.vbe3923e0c95014385c197c49a41fc002.length; layer_i++) {
    var layer = this.vbe3923e0c95014385c197c49a41fc002[layer_i];
    b.vfa21e3bf8ea9d4320d8597afc1052baf(layer.v43fc441e27927b5c223ed716685fcd46());
  }
  vee8206b276787f6d065f935010a51f0c(this, this.vca376faa2a83aa1afc63ed398cdfdc26, function(a) {
    b.vc2b55451d6b5a973b456d3ad090abf8d(a.vc40d087825dbf82f2a30a6900e15634e());
  });
  /** @type {number} */
  time = 0;
  for (; time < 8; time++) {
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(locale.v25deb183138b7951a8b404efe7cade27("light" + time).v5ade6f2f5a1f2d10c4bb670808c99f85(), "Light" + i));
  }
  return vee8206b276787f6d065f935010a51f0c(this, this.v4cd021bff33912862705710a23dccdcd, function(a) {
    b.vc2b55451d6b5a973b456d3ad090abf8d(a.vc40d087825dbf82f2a30a6900e15634e());
  }), b;
}, va9e642482127d2a8e086348a87917fba.prototype.vaac768ce0e8f2c30ec17aaff681ac0f8 = function(ckbox) {
  var c = new Car;
  c.init();
  c.Color = (new v05d11f0f2e0c1a6f360c8611189e4901).next(AppConstants.v7d29a74ddd0416012f216305c91cdcca);
  /** @type {boolean} */
  c.v6d805b703cc948831a337654326e4bf2 = !(A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random.next(Math.floor(this.vbe3923e0c95014385c197c49a41fc002.length / 6.3)) < A.vfe1c4eaec8ec40f848f9772196c532d3().staffing["Parking Attendants"]);
  /** @type {!Object} */
  c.v0b395a7e5c993093817223839c50df18 = ckbox;
  this.vbe3923e0c95014385c197c49a41fc002.vc2b55451d6b5a973b456d3ad090abf8d(c);
  this.vf566263bded5a95f0524bd61200fee11++;
  c.vd7e995df7a06bee28a400a53f5a5f2fc = this.v2e6790bab0b64ea344ab2afdd3d26add;
  if (this.vf566263bded5a95f0524bd61200fee11 >= 2 * va9e642482127d2a8e086348a87917fba.vb691aa1a681c44416b5a7a5ce7a6ceee) {
    /** @type {number} */
    this.vf566263bded5a95f0524bd61200fee11 = 0;
    this.v2e6790bab0b64ea344ab2afdd3d26add -= 4;
    if (this.v2e6790bab0b64ea344ab2afdd3d26add < 9) {
      /** @type {number} */
      this.v2e6790bab0b64ea344ab2afdd3d26add = 9;
    }
  }
  A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(c, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
}, va9e642482127d2a8e086348a87917fba.prototype.veb0ebf9a09a8ca429c96346438be2241 = function() {
  return this.vbe3923e0c95014385c197c49a41fc002.length >= va9e642482127d2a8e086348a87917fba.vd9ddbcd17e68fd3c44c5afb6cc2e4d41;
}, va9e642482127d2a8e086348a87917fba.prototype.v10e9e98111eea829c86ebe4f9fc001ac = function(button, x, y) {
  return y > va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9 - 1 ? false : this.v8b591a6ae707f82d0c7bf7080524308b[x][y] == null ? (this.v8b591a6ae707f82d0c7bf7080524308b[x][y] = button, this.v8b591a6ae707f82d0c7bf7080524308b[button.v6955045be3f2455eb1580759d48f41f1.x][button.v6955045be3f2455eb1580759d48f41f1.y] = null, button.v6955045be3f2455eb1580759d48f41f1 = new Point(x, y), button.va7f54873a22cb414b1f836ac51b400d5 = 0, true) : false;
}, va9e642482127d2a8e086348a87917fba.prototype.v291594b3d1f99b39281df5ef6ca3fce3 = function(positionIndexA, positionIndexB) {
  return positionIndexA >= 0 && positionIndexB >= 0 && positionIndexA < va9e642482127d2a8e086348a87917fba.vb691aa1a681c44416b5a7a5ce7a6ceee + 2 && positionIndexB < va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9 ? this.v8b591a6ae707f82d0c7bf7080524308b[positionIndexA][positionIndexB] == null : false;
}, va9e642482127d2a8e086348a87917fba.prototype.v76002bb1456ec3cde767fdc941d714e3 = function() {
  /** @type {number} */
  var maxLength = Math.ceil(A.vfe1c4eaec8ec40f848f9772196c532d3().staffing["Ticket Takers"] / 2);
  /** @type {number} */
  maxLength = Math.min(va9e642482127d2a8e086348a87917fba.v5f9b4c7f0bd676ea4dc4d16a031fc3c1, maxLength);
  /** @type {number} */
  var longestCommand = 8;
  /** @type {number} */
  var _x$2 = -1;
  /** @type {number} */
  var a = 0;
  for (; a < maxLength; a++) {
    if (this.v98d072375842b2a8b918f246e32ab2d7[a].length < longestCommand) {
      longestCommand = this.v98d072375842b2a8b918f246e32ab2d7[a].length;
      /** @type {number} */
      _x$2 = a;
    }
  }
  return _x$2;
}, va9e642482127d2a8e086348a87917fba.prototype.vd19b70ac3eadab939f38963be8e40550 = function() {
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < A.vfe1c4eaec8ec40f848f9772196c532d3().vdadb3802808c4dad6e637cd29bd9e7b5.vb8d49b229151f0596040f0ff3d4aeed1; indexLookupKey++) {
    var currentIndex = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.vb8d49b229151f0596040f0ff3d4aeed1[indexLookupKey];
    if (!currentIndex.veb0ebf9a09a8ca429c96346438be2241()) {
      return currentIndex;
    }
  }
  return null;
}, va9e642482127d2a8e086348a87917fba.prototype.v832218d1d3f813e17691b8f48dfb75a2 = function() {
  /** @type {number} */
  var best_height = Math.ceil(A.vfe1c4eaec8ec40f848f9772196c532d3().staffing["Parking Cashiers"] / 2);
  return Math.floor(Math.min(va9e642482127d2a8e086348a87917fba.vc9f4388658fa7a8e38c26e5ca01f44f2, best_height));
}, v2b0bbff44f88e67381b9b655d66abefc.prototype = Object.create(v16cee3ee62f4283e2aa83ff23503aa30.prototype), v2b0bbff44f88e67381b9b655d66abefc.prototype.constructor = v2b0bbff44f88e67381b9b655d66abefc, v2b0bbff44f88e67381b9b655d66abefc.v0aa42f46e4818bb2756ac5cfd5675179 = 4, v2b0bbff44f88e67381b9b655d66abefc.v59c24334173e89588d101ae6d9906a47 = -1, v2b0bbff44f88e67381b9b655d66abefc.v64858548f92236921dd2cc1c88af08da = 0, v2b0bbff44f88e67381b9b655d66abefc.v26def588cc41b3ff35a1be881d42c95a = 1, v2b0bbff44f88e67381b9b655d66abefc.v96c4b0f74b18ff9f1b8ea2824b47761d =
2, v2b0bbff44f88e67381b9b655d66abefc.vf386d8ab299fbb9164846002ac8e1971 = 3, v2b0bbff44f88e67381b9b655d66abefc.v8c59232e60a57b50f9c83b19bd99aa4f = 4, v2b0bbff44f88e67381b9b655d66abefc.v6e7f13f3696f24bf86b1bf0c216bccec = 5, v2b0bbff44f88e67381b9b655d66abefc.v7448458428760c52b9b9a5df4f946054 = 6, v2b0bbff44f88e67381b9b655d66abefc.ve1fab85c823d7f0e94e174c32f499886 = 7, v2b0bbff44f88e67381b9b655d66abefc.vf49e4b3ae5d33f5a8285f1a40cb5af4d = 8, v2b0bbff44f88e67381b9b655d66abefc.v12ce7e8acaca8f78eb48dc2527a8df2d =
9, v2b0bbff44f88e67381b9b655d66abefc.vb5ad1a075d0e3d34473155a5f2af4c57 = 10, v2b0bbff44f88e67381b9b655d66abefc.v484da0b3bcfddaad23fd7a38a967dbf7 = va9e642482127d2a8e086348a87917fba.vb691aa1a681c44416b5a7a5ce7a6ceee + 3, v2b0bbff44f88e67381b9b655d66abefc.prototype.init = function() {
  var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random;
  this.color = rnd.next(v2b0bbff44f88e67381b9b655d66abefc.v0aa42f46e4818bb2756ac5cfd5675179);
  this.v21f72e2c9e39ffcb9a4496e65db679c9 = rnd.next(2);
  this.v359abcfffa6d67a9b9f67e93bef327c7(1 + rnd.va7f5b666e153a7fd316b95fa2a8560ac() * .5);
  /** @type {number} */
  this.state = v2b0bbff44f88e67381b9b655d66abefc.v59c24334173e89588d101ae6d9906a47;
  /** @type {number} */
  var b = 0;
  for (; b < 5; b++) {
    this.v40b7158210ad8fbb3de700fb50b5c3e6 += rnd.vc620340a78b452026a29f2ec05b4664f(4e3, 25e3);
  }
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.v02cdbcb0a98e538fd082f8b699be2de7 = function(game) {
  var People = A.v87b8393064cbfa8977b32cec36a69d86().vf252aa2b1e3ffe0ec1a5f9434ea1cb2e;
  if (game.v6955045be3f2455eb1580759d48f41f1.Y % 4 == 0) {
    1;
  }
  /** @type {!Array} */
  var valueProgess = [];
  var dataRendered = this.v3fc78ee6c6cda4946734989b0665e4e3(new Point(v2b0bbff44f88e67381b9b655d66abefc.v484da0b3bcfddaad23fd7a38a967dbf7, game.v6955045be3f2455eb1580759d48f41f1.y + 3));
  this.v46d9c2aea57ee009b9ab339d4478978a(dataRendered);
  valueProgess.vc2b55451d6b5a973b456d3ad090abf8d(People.v25deb183138b7951a8b404efe7cade27("farCorner").v5ade6f2f5a1f2d10c4bb670808c99f85());
  valueProgess.vfa21e3bf8ea9d4320d8597afc1052baf(People.va9a2bd302fd9f91ebfeed0cffe696d85("farCorner", "nearCrowd").v95c3eef9b0701a2beb0582b95eb5d466());
  valueProgess.vc2b55451d6b5a973b456d3ad090abf8d(People.v25deb183138b7951a8b404efe7cade27("crowd").vfff0f97c546545307ccc1d0bc8788d8e(A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random));
  this.vcecae7630817bbe4e45a64aabde08a54(valueProgess);
  /** @type {number} */
  this.state = v2b0bbff44f88e67381b9b655d66abefc.v64858548f92236921dd2cc1c88af08da;
  A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.v4984999322ecc49f863da9422fe1860e = function(EMSarray) {
  var a = A.v87b8393064cbfa8977b32cec36a69d86().vf252aa2b1e3ffe0ec1a5f9434ea1cb2e;
  this.v46d9c2aea57ee009b9ab339d4478978a(a.v25deb183138b7951a8b404efe7cade27("busDropHuman").vfff0f97c546545307ccc1d0bc8788d8e(A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random));
  var valueProgess = a.va9a2bd302fd9f91ebfeed0cffe696d85("busDropHuman", "crowd").v3278916e888aa6e0de12ea260d445ba0(A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random);
  this.vcecae7630817bbe4e45a64aabde08a54(valueProgess);
  /** @type {number} */
  this.state = v2b0bbff44f88e67381b9b655d66abefc.v64858548f92236921dd2cc1c88af08da;
  A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  };
  /** @type {boolean} */
  var f = false;
  var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random;
  var p = A.v87b8393064cbfa8977b32cec36a69d86().vf252aa2b1e3ffe0ec1a5f9434ea1cb2e;
  var i = A.v87b8393064cbfa8977b32cec36a69d86().v8d45560ed400ebd1f03af3fc6d1488ba;
  switch(this.state) {
    case v2b0bbff44f88e67381b9b655d66abefc.v59c24334173e89588d101ae6d9906a47:
      var j = A.vfe1c4eaec8ec40f848f9772196c532d3().vdadb3802808c4dad6e637cd29bd9e7b5;
      var g = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019;
      var e = g.vd19b70ac3eadab939f38963be8e40550();
      var self = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
      if (j.v4f7c3084c74f060298d413aba2266780 >= this.v40b7158210ad8fbb3de700fb50b5c3e6 / AppConstants.v1b4c75aa8e36daea4f81d74848af9713 && j.vb141cf7a711f6005f0f447e34f8f2dc2 >= this.v40b7158210ad8fbb3de700fb50b5c3e6 / AppConstants.v1b4c75aa8e36daea4f81d74848af9713) {
        self.comment("Parking", "All the parking here is too expensive. I'm taking a city bus.");
        this.v3339eb5e46bb6543358692b9fec72866();
      } else {
        if (g.veb0ebf9a09a8ca429c96346438be2241() && e == null) {
          self.comment("Parking", "All the parking lots are full. I'm taking a city bus.");
          this.v3339eb5e46bb6543358692b9fec72866();
        } else {
          if (g.veb0ebf9a09a8ca429c96346438be2241()) {
            if (j.v4f7c3084c74f060298d413aba2266780 >= this.v40b7158210ad8fbb3de700fb50b5c3e6 / AppConstants.v1b4c75aa8e36daea4f81d74848af9713) {
              self.comment("Parking", "The main lot is full and satellite parking is too expensive. I'm taking a city bus.");
              this.v3339eb5e46bb6543358692b9fec72866();
            } else {
              e.v4b19c5d77dd1a1b48e4c79ca1ee7629d++;
              e.v46c7ed5490f205d5b7351a9c86c8224b.vc2b55451d6b5a973b456d3ad090abf8d(this);
              A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Cash", j.v4f7c3084c74f060298d413aba2266780, "Satellite Lots", A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.v6df93cee8d46ebc1cd5d0ef23df99e6b);
              A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
            }
          } else {
            if (j.vb141cf7a711f6005f0f447e34f8f2dc2 < this.v40b7158210ad8fbb3de700fb50b5c3e6 / AppConstants.v1b4c75aa8e36daea4f81d74848af9713) {
              g.vaac768ce0e8f2c30ec17aaff681ac0f8([this]);
              A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
            } else {
              if (e != null) {
                self.comment("Parking", "The main lot is too expensive. I'm going to satellite parking.");
                e.v4b19c5d77dd1a1b48e4c79ca1ee7629d++;
                e.v46c7ed5490f205d5b7351a9c86c8224b.vc2b55451d6b5a973b456d3ad090abf8d(this);
                A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Cash", j.v4f7c3084c74f060298d413aba2266780, "Satellite Lots", A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.v6df93cee8d46ebc1cd5d0ef23df99e6b);
                A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
              } else {
                self.comment("Parking", "The satellite parking is full and the main lot is too expensive. I'm taking a city bus.");
                this.v3339eb5e46bb6543358692b9fec72866();
              }
            }
          }
        }
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.v64858548f92236921dd2cc1c88af08da:
      /** @type {number} */
      this.v21f72e2c9e39ffcb9a4496e65db679c9 = 1 - this.v21f72e2c9e39ffcb9a4496e65db679c9;
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        this.state++;
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.v26def588cc41b3ff35a1be881d42c95a:
      this.vb25d5486f900ea3b825b14c7342e4f94 = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v76002bb1456ec3cde767fdc941d714e3();
      if (this.vb25d5486f900ea3b825b14c7342e4f94 > -1) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v98d072375842b2a8b918f246e32ab2d7[this.vb25d5486f900ea3b825b14c7342e4f94].vc2b55451d6b5a973b456d3ad090abf8d(this);
        /** @type {!Array} */
        b = [this.vd9d14cddedf5d60830f2bb527a5d703c(this.vb25d5486f900ea3b825b14c7342e4f94, 8)];
        this.vcecae7630817bbe4e45a64aabde08a54(b);
        this.state++;
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.v96c4b0f74b18ff9f1b8ea2824b47761d:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        this.state++;
        /** @type {number} */
        this.counter = 24;
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.vf386d8ab299fbb9164846002ac8e1971:
      var ry = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v98d072375842b2a8b918f246e32ab2d7[this.vb25d5486f900ea3b825b14c7342e4f94].getItemIndex(this);
      this.v46d9c2aea57ee009b9ab339d4478978a(this.vd9d14cddedf5d60830f2bb527a5d703c(this.vb25d5486f900ea3b825b14c7342e4f94, ry));
      if (ry == 0) {
        this.counter--;
      }
      if (this.counter == 0) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v98d072375842b2a8b918f246e32ab2d7[this.vb25d5486f900ea3b825b14c7342e4f94].vca48a4d192a1c3fdc8f15c910420fc7e(0);
        this.vcecae7630817bbe4e45a64aabde08a54([p.v25deb183138b7951a8b404efe7cade27("entranceToStadium").vfff0f97c546545307ccc1d0bc8788d8e(A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random)]);
        this.state++;
        self = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
        if (self.state > Event.v749c70cd527f4457494bb32a2cd947e0) {
          var s = self.ticketPrices[this.v171b78b7c1c220ad63fa32cc06cdf760][A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.vb28200a339b4d53ffea64d945d2b094f(this.vd8e189fd73437b363a2066fce1d8ce54)];
          A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.vca376faa2a83aa1afc63ed398cdfdc26.vf81b17578abb97a8de755cddbf7f45a9(this);
          A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
          self.comment("Ingress", "I couldn't get in on time. I demand a refund!");
        } else {
          self.v8ab87d247f3b1fe30140425c4498ad15 = self.v8ab87d247f3b1fe30140425c4498ad15 + self.ticketPrices[this.v171b78b7c1c220ad63fa32cc06cdf760][A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.vb28200a339b4d53ffea64d945d2b094f(this.vd8e189fd73437b363a2066fce1d8ce54)];
          self.v0a7e381f60e6cc213e4126d26249ae83++;
        }
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.v8c59232e60a57b50f9c83b19bd99aa4f:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.vca376faa2a83aa1afc63ed398cdfdc26.vf81b17578abb97a8de755cddbf7f45a9(this);
        /** @type {number} */
        this.state = v2b0bbff44f88e67381b9b655d66abefc.v6e7f13f3696f24bf86b1bf0c216bccec;
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.v6e7f13f3696f24bf86b1bf0c216bccec:
      var b = this.v8581e1cd434b88f96e52e08d3f169a78(i);
      this.v46d9c2aea57ee009b9ab339d4478978a(b[0]);
      this.vcecae7630817bbe4e45a64aabde08a54(b);
      A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vc2b55451d6b5a973b456d3ad090abf8d(this);
      /** @type {number} */
      this.state = v2b0bbff44f88e67381b9b655d66abefc.v7448458428760c52b9b9a5df4f946054;
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.v7448458428760c52b9b9a5df4f946054:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vf81b17578abb97a8de755cddbf7f45a9(this);
        var h = A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1[this.v171b78b7c1c220ad63fa32cc06cdf760][this.vd8e189fd73437b363a2066fce1d8ce54];
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1[this.v171b78b7c1c220ad63fa32cc06cdf760][this.vd8e189fd73437b363a2066fce1d8ce54] = h + .5;
        var n = rnd.next(30) + rnd.next(30) + rnd.next(30) + rnd.next(30);
        this.v95c7d6ec60eaada27f42897308442b93 = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.date;
        this.v95c7d6ec60eaada27f42897308442b93 = this.v95c7d6ec60eaada27f42897308442b93.addMinutes(240 + n);
        b = this.v8581e1cd434b88f96e52e08d3f169a78(i);
        b = b.reverse();
        this.v46d9c2aea57ee009b9ab339d4478978a(b[0]);
        this.vcecae7630817bbe4e45a64aabde08a54(b);
        /** @type {number} */
        this.state = v2b0bbff44f88e67381b9b655d66abefc.ve1fab85c823d7f0e94e174c32f499886;
        /** @type {boolean} */
        f = true;
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.ve1fab85c823d7f0e94e174c32f499886:
      if (!A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.contains(this)) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vc2b55451d6b5a973b456d3ad090abf8d(this);
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1[this.v171b78b7c1c220ad63fa32cc06cdf760][this.vd8e189fd73437b363a2066fce1d8ce54] -= .5;
      }
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        if (A.vfe1c4eaec8ec40f848f9772196c532d3().v9f7821688406340f747104ce90941912.v593f1cd1f022086bd87c3de3db987bd8 > 0) {
          if (rnd.next(A.vfe1c4eaec8ec40f848f9772196c532d3().v9f7821688406340f747104ce90941912.v593f1cd1f022086bd87c3de3db987bd8) == 0) {
            A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.vaa149b54ba503f2e76593cd4d0d48f06(this);
            A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
            A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vf81b17578abb97a8de755cddbf7f45a9(this);
          } else {
            A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vf81b17578abb97a8de755cddbf7f45a9(this);
            /** @type {number} */
            this.state = v2b0bbff44f88e67381b9b655d66abefc.vf49e4b3ae5d33f5a8285f1a40cb5af4d;
          }
        } else {
          A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.comment("Concessions", U.vc0e6c88f8413e92781b652ae2786391a("Why aren't there any open concession stands?"));
          A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vf81b17578abb97a8de755cddbf7f45a9(this);
          /** @type {number} */
          this.state = v2b0bbff44f88e67381b9b655d66abefc.vf49e4b3ae5d33f5a8285f1a40cb5af4d;
        }
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.vf49e4b3ae5d33f5a8285f1a40cb5af4d:
      self = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3;
      var nextTotal = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(A.vfe1c4eaec8ec40f848f9772196c532d3().staffing["Stadium Security"] * AppConstants.v716a7afaa227489336979bb194f498af[1]);
      /** @type {boolean} */
      var d = rnd.va7f5b666e153a7fd316b95fa2a8560ac() > nextTotal / self.v0a7e381f60e6cc213e4126d26249ae83;
      var top = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(A.vfe1c4eaec8ec40f848f9772196c532d3().staffing.Ushers * AppConstants.v716a7afaa227489336979bb194f498af[0]);
      /** @type {boolean} */
      var r = rnd.va7f5b666e153a7fd316b95fa2a8560ac() > top / self.v0a7e381f60e6cc213e4126d26249ae83;
      /** @type {boolean} */
      var m = true;
      if (A.v50156c5418a59f9fb151a3917f9026dd().SuppressFanRush) {
        /** @type {boolean} */
        m = false;
      }
      if (self.vcac8a657fea238de145894896ba75413() == "Concert" && m && d && self.random.va7f5b666e153a7fd316b95fa2a8560ac() < .8) {
        this.v46d9c2aea57ee009b9ab339d4478978a(i.v25deb183138b7951a8b404efe7cade27("byStage").vfff0f97c546545307ccc1d0bc8788d8e(A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random));
        this.vcecae7630817bbe4e45a64aabde08a54([i.v25deb183138b7951a8b404efe7cade27("byStage").vfff0f97c546545307ccc1d0bc8788d8e(A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random)]);
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vc2b55451d6b5a973b456d3ad090abf8d(this);
        /** @type {number} */
        this.state = v2b0bbff44f88e67381b9b655d66abefc.vb5ad1a075d0e3d34473155a5f2af4c57;
        self.v3e37f71cd55eed64916238fd9b807123++;
      } else {
        if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.MoveDown) {
          /** @type {boolean} */
          var k = true;
          if (r && this.v4037e24172334676ae0f7a53c55aed50()) {
            /** @type {boolean} */
            k = false;
            A.vfe1c4eaec8ec40f848f9772196c532d3().vd61bb1e43a2872efc3e582a1ff6c2437++;
            self.comment("Stadium", "Wow. There aren't many ushers. I'm moving to a better seat.");
          }
          if (k) {
            A.vfe1c4eaec8ec40f848f9772196c532d3().va1628170f17b5f33654bfa54257c8d67++;
          }
        }
        b = this.v8581e1cd434b88f96e52e08d3f169a78(i);
        this.v46d9c2aea57ee009b9ab339d4478978a(b[0]);
        this.vcecae7630817bbe4e45a64aabde08a54(b);
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vc2b55451d6b5a973b456d3ad090abf8d(this);
        /** @type {number} */
        this.state = v2b0bbff44f88e67381b9b655d66abefc.v12ce7e8acaca8f78eb48dc2527a8df2d;
      }
      if (self.vcac8a657fea238de145894896ba75413() == "Game" && d) {
        self.trash += .03;
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.v12ce7e8acaca8f78eb48dc2527a8df2d:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d.vf81b17578abb97a8de755cddbf7f45a9(this);
        h = A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1[this.v171b78b7c1c220ad63fa32cc06cdf760][this.vd8e189fd73437b363a2066fce1d8ce54];
        A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1[this.v171b78b7c1c220ad63fa32cc06cdf760][this.vd8e189fd73437b363a2066fce1d8ce54] = h + .5;
        A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
      }
      break;
    case v2b0bbff44f88e67381b9b655d66abefc.vb5ad1a075d0e3d34473155a5f2af4c57:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
      }
      break;
  }
  return f;
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.v4037e24172334676ae0f7a53c55aed50 = function() {
  var key = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.v477cc8dd303fa6381868a595da01ef59();
  for (; key < this.v171b78b7c1c220ad63fa32cc06cdf760; key++) {
    /** @type {number} */
    var b = 0;
    for (; b < AppConstants.vfb1d103d47b20eec473331f8512352c5; b++) {
      /** @type {number} */
      var value = (b + AppConstants.vfb1d103d47b20eec473331f8512352c5 / 4) % AppConstants.vfb1d103d47b20eec473331f8512352c5;
      if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1[key][value] < AppConstants.vb521784636f5e0dc01ece715253c9df2 / 2 && A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.v54abb4e4bc74d5f47568dd1e0a3bfd53[key][value] < AppConstants.vb521784636f5e0dc01ece715253c9df2) {
        return this.v171b78b7c1c220ad63fa32cc06cdf760 = key, this.vd8e189fd73437b363a2066fce1d8ce54 = value, true;
      }
    }
  }
  return false;
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.v3339eb5e46bb6543358692b9fec72866 = function() {
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v2ecbf47484206af649eebb5fe0d5f0e0;
  a.v4b19c5d77dd1a1b48e4c79ca1ee7629d++;
  a.v46c7ed5490f205d5b7351a9c86c8224b.vc2b55451d6b5a973b456d3ad090abf8d(this);
  A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.vd9d14cddedf5d60830f2bb527a5d703c = function(sinTh, rx) {
  var e = A.v87b8393064cbfa8977b32cec36a69d86().vf252aa2b1e3ffe0ec1a5f9434ea1cb2e;
  var mt = e.v25deb183138b7951a8b404efe7cade27("laneOpen0").v5ade6f2f5a1f2d10c4bb670808c99f85();
  var hBottomRight = new Point(mt.x + sinTh * 13.4, mt.y - sinTh * 13.4 / 2);
  return new Point(hBottomRight.x + 10 + rx * 4, hBottomRight.y + 10 + rx * 2);
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.v8581e1cd434b88f96e52e08d3f169a78 = function(i) {
  /** @type {number} */
  var x = Math.floor(this.vd8e189fd73437b363a2066fce1d8ce54 / 6);
  /** @type {number} */
  var name = Math.max(1, this.v171b78b7c1c220ad63fa32cc06cdf760);
  var f = i.v25deb183138b7951a8b404efe7cade27("pa" + name + x).v5ade6f2f5a1f2d10c4bb670808c99f85();
  var _target_on_down = i.v25deb183138b7951a8b404efe7cade27("pb" + name + x).v5ade6f2f5a1f2d10c4bb670808c99f85();
  /** @type {number} */
  var motion_scaling = 0;
  if (this.vd8e189fd73437b363a2066fce1d8ce54 < 6) {
    /** @type {number} */
    motion_scaling = this.vd8e189fd73437b363a2066fce1d8ce54 - 3.5;
  } else {
    /** @type {number} */
    motion_scaling = this.vd8e189fd73437b363a2066fce1d8ce54 - 9.5;
  }
  var _spriteCenterPt = new Point(_target_on_down.x + 20 * motion_scaling, _target_on_down.y + 10 * motion_scaling);
  return [f, _target_on_down, _spriteCenterPt];
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.v3fc78ee6c6cda4946734989b0665e4e3 = function(objectToMeasure) {
  /** @type {number} */
  var a = -6 + objectToMeasure.x * 15.5;
  /** @type {number} */
  var b = 430 - objectToMeasure.y * 15;
  /** @type {number} */
  var p3x2 = .7 * a - .7 * b + 415;
  /** @type {number} */
  var cornerOffset = (.7 * a + .7 * b) / 2 + 182;
  return new Point(p3x2, cornerOffset);
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.vc40d087825dbf82f2a30a6900e15634e = function() {
  var rect = new v74d951e1ef91d0f189e177d58ae30d8e(this.v5ade6f2f5a1f2d10c4bb670808c99f85(), "PFC" + this.color + "W" + this.v21f72e2c9e39ffcb9a4496e65db679c9 + "NW");
  var b = this.dx != undefined ? this.dx : this.va359d4e8388ec27ff74fa1c2c7b7a983;
  return b > 0 && (rect.flipX = true), rect;
}, v2b0bbff44f88e67381b9b655d66abefc.prototype.v0ed28020f5a599ea484ad031545950a4 = function() {
  /** @type {string} */
  var c = "FanWalkC" + this.color;
  var elapsedTime = v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep;
  return this.dx != undefined && (this.va359d4e8388ec27ff74fa1c2c7b7a983 = this.dx * elapsedTime), this.dy != undefined && (this.v47ab9094f7763ada19867ee0131af83f = this.dy * elapsedTime), v16cee3ee62f4283e2aa83ff23503aa30.prototype.ve8b5a86145837d972a1f03d6fd2e0b0d.call(this, c);
}, v9a7f1a806a309bba718ecede2b1f1114.prototype = Object.create(v0c87bc68b008561aa880828b743ca7f3.prototype), v9a7f1a806a309bba718ecede2b1f1114.prototype.constructor = v9a7f1a806a309bba718ecede2b1f1114, v9a7f1a806a309bba718ecede2b1f1114.prototype.veb0ebf9a09a8ca429c96346438be2241 = function() {
  return this.v4b19c5d77dd1a1b48e4c79ca1ee7629d >= this.v9d5c35532bdbd424aad63e8cfd929b94;
}, v9a7f1a806a309bba718ecede2b1f1114.prototype.v620a8a217f581ffb6e04961d6df9f591 = function() {
  /** @type {number} */
  var d = 17;
  /** @type {!Array} */
  var b = [];
  var assetsFile = U.v7a7321817e214ef0146ed1ce6559a705(City.transform(this.v88673f3a94c8c528027180ca500b6677() + .18, this.vc7ba4f1f8b072680b2f0c0e1b2565338(), 0));
  var h = new v74d951e1ef91d0f189e177d58ae30d8e(assetsFile, "BuildingSmall9" + A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed());
  b.vc2b55451d6b5a973b456d3ad090abf8d(h);
  /** @type {number} */
  var c = 0;
  for (; c < this.v4b19c5d77dd1a1b48e4c79ca1ee7629d; c++) {
    /** @type {number} */
    var g = Math.floor(c / d);
    /** @type {number} */
    var k = c % d;
    if (g == 2) {
      k++;
    }
    var socket = City.transform(this.v88673f3a94c8c528027180ca500b6677() - 1.1 + g * .14, this.vc7ba4f1f8b072680b2f0c0e1b2565338() - .4 + k * .04, 0);
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(socket, "CarNESW" + A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed()));
  }
  /** @type {number} */
  var num = 0;
  /** @type {number} */
  var base = 25;
  return vee8206b276787f6d065f935010a51f0c(this, this.v46c7ed5490f205d5b7351a9c86c8224b, function(canCreateDiscussions) {
    /** @type {number} */
    var a = Math.floor(num / base);
    /** @type {number} */
    var remainder = num % base;
    var socket = City.transform(this.v88673f3a94c8c528027180ca500b6677() - .75 + a * .02, this.vc7ba4f1f8b072680b2f0c0e1b2565338() - .4 + remainder * .02, 0);
    b.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(socket, "Person0" + A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed()));
    num++;
  }), b;
}, v9a7f1a806a309bba718ecede2b1f1114.prototype.v6e0b030bb61c47949043afa5dff8db29 = function(isIron) {
  var a = new Bus;
  a.init(this);
  if (isIron) {
    a.v92c17f52ed4b69939372da4588e398f7 *= 2;
    /** @type {boolean} */
    a.v62ebbf1042f60ec6e3c20d3a751ebc4d = true;
  }
  A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd.vc2b55451d6b5a973b456d3ad090abf8d(a);
}, Bus.prototype = Object.create(v16cee3ee62f4283e2aa83ff23503aa30.prototype), Bus.prototype.constructor = Bus, Bus.v6b22dc4e83b0ef929f4630ac5f842d78 = 2, Bus.prototype.init = function(value) {
  /** @type {!Object} */
  this.v9b4e83515cd2c862aa3de485e2207966 = value;
  this.vde303a864628dcb7c405f04c4b4685a9();
  A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
}, Bus.vda991d818259484faf7891010d36f78f = 0, Bus.v3ae50f3ea78cd4af8543f2fbc45cbca7 = 1, Bus.vba3e430ac1d9f59baf008c95c60c4a4e = 2, Bus.v8cb1b2dd40861e6d805b1b9673e6e4cc = 3, Bus.vac473a0d414d6ed0478d6cb295755db5 = 4, Bus.va59be31fdd2060dbbb1634a577a7e58e = 5, Bus.va2e24f304249db5428d8442c97a3ba4f = 6, Bus.prototype.vde303a864628dcb7c405f04c4b4685a9 = function() {
  this.v359abcfffa6d67a9b9f67e93bef327c7(1);
  /** @type {number} */
  var value = 10;
  /** @type {number} */
  var angle = 0;
  if (this.v9b4e83515cd2c862aa3de485e2207966.block != null) {
    value = this.v9b4e83515cd2c862aa3de485e2207966.v88673f3a94c8c528027180ca500b6677();
    angle = this.v9b4e83515cd2c862aa3de485e2207966.vc7ba4f1f8b072680b2f0c0e1b2565338();
  }
  /** @type {boolean} */
  this.v70bbc65bd229b367c92fdea0614bf411 = false;
  this.v46d9c2aea57ee009b9ab339d4478978a(City.transform(-1, .3, 0));
  this.vcecae7630817bbe4e45a64aabde08a54([City.transform(-.5, .3, 0), City.transform(-.5, angle + .3, 0), City.transform(value - .65, angle + .3, 0), City.transform(value - .65, angle - .4, 0)]);
  /** @type {number} */
  this.state = Bus.vda991d818259484faf7891010d36f78f;
}, Bus.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  };
  var assert = A.v87b8393064cbfa8977b32cec36a69d86().vf252aa2b1e3ffe0ec1a5f9434ea1cb2e;
  switch(this.state) {
    case Bus.vda991d818259484faf7891010d36f78f:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        /** @type {number} */
        this.v9a7bd49e6c9f9a689b34fe9de7deea09 = 100;
        /** @type {number} */
        this.vb2149486a4663b74f78e41a472577786 = Bus.v6b22dc4e83b0ef929f4630ac5f842d78;
        this.state++;
      }
      break;
    case Bus.v3ae50f3ea78cd4af8543f2fbc45cbca7:
      this.state++;
      break;
    case Bus.vba3e430ac1d9f59baf008c95c60c4a4e:
      if (this.v46c7ed5490f205d5b7351a9c86c8224b.length > 0) {
        this.v9a7bd49e6c9f9a689b34fe9de7deea09--;
      }
      if (this.v9b4e83515cd2c862aa3de485e2207966.v46c7ed5490f205d5b7351a9c86c8224b.length > 0 && this.vb2149486a4663b74f78e41a472577786-- == 0) {
        this.v46c7ed5490f205d5b7351a9c86c8224b.vc2b55451d6b5a973b456d3ad090abf8d(this.v9b4e83515cd2c862aa3de485e2207966.v46c7ed5490f205d5b7351a9c86c8224b[0]);
        this.v9b4e83515cd2c862aa3de485e2207966.v46c7ed5490f205d5b7351a9c86c8224b.vca48a4d192a1c3fdc8f15c910420fc7e(0);
        /** @type {number} */
        this.vb2149486a4663b74f78e41a472577786 = Bus.v6b22dc4e83b0ef929f4630ac5f842d78;
      }
      if (this.v46c7ed5490f205d5b7351a9c86c8224b.vf5490735034edf5487f9d5e667c570ad == this.v92c17f52ed4b69939372da4588e398f7 || this.v9a7bd49e6c9f9a689b34fe9de7deea09 <= 0 && this.vb2149486a4663b74f78e41a472577786 == Bus.v6b22dc4e83b0ef929f4630ac5f842d78) {
        /** @type {number} */
        var value = 10;
        /** @type {number} */
        var angle = 0;
        if (this.v9b4e83515cd2c862aa3de485e2207966.block != null) {
          value = this.v9b4e83515cd2c862aa3de485e2207966.v88673f3a94c8c528027180ca500b6677();
          angle = this.v9b4e83515cd2c862aa3de485e2207966.vc7ba4f1f8b072680b2f0c0e1b2565338();
        }
        /** @type {boolean} */
        this.v70bbc65bd229b367c92fdea0614bf411 = true;
        this.v46d9c2aea57ee009b9ab339d4478978a(City.transform(value - .65, angle - .4, 0));
        this.vcecae7630817bbe4e45a64aabde08a54([City.transform(value - .65, angle + .3, 0), City.transform(-.5, angle + .3, 0), City.transform(-.5, .3, 0), City.transform(-1, .3, 0)]);
        this.state++;
      }
      break;
    case Bus.v8cb1b2dd40861e6d805b1b9673e6e4cc:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v4cd021bff33912862705710a23dccdcd.vc2b55451d6b5a973b456d3ad090abf8d(this);
        A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd.vf81b17578abb97a8de755cddbf7f45a9(this);
        this.v46d9c2aea57ee009b9ab339d4478978a(assert.v25deb183138b7951a8b404efe7cade27("enter").v5ade6f2f5a1f2d10c4bb670808c99f85());
        this.vcecae7630817bbe4e45a64aabde08a54(assert.va9a2bd302fd9f91ebfeed0cffe696d85("enter", "dropoff").v95c3eef9b0701a2beb0582b95eb5d466());
        this.v359abcfffa6d67a9b9f67e93bef327c7(1);
        this.state++;
      }
      break;
    case Bus.vac473a0d414d6ed0478d6cb295755db5:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        this.state++;
      }
      break;
    case Bus.va59be31fdd2060dbbb1634a577a7e58e:
      if (this.v46c7ed5490f205d5b7351a9c86c8224b.length > 0) {
        if (this.vb2149486a4663b74f78e41a472577786-- == 0) {
          var valueProgess = this.v46c7ed5490f205d5b7351a9c86c8224b[0];
          valueProgess.v4984999322ecc49f863da9422fe1860e(this);
          A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.vca376faa2a83aa1afc63ed398cdfdc26.vc2b55451d6b5a973b456d3ad090abf8d(valueProgess);
          this.v46c7ed5490f205d5b7351a9c86c8224b.vca48a4d192a1c3fdc8f15c910420fc7e(0);
          /** @type {number} */
          this.vb2149486a4663b74f78e41a472577786 = Bus.v6b22dc4e83b0ef929f4630ac5f842d78;
        }
      } else {
        this.vcecae7630817bbe4e45a64aabde08a54(assert.va9a2bd302fd9f91ebfeed0cffe696d85("dropoff", "leave").v95c3eef9b0701a2beb0582b95eb5d466());
        this.state++;
      }
      break;
    case Bus.va2e24f304249db5428d8442c97a3ba4f:
      if (this.ve8242717100aa0bda70572e93fec612f()) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v4cd021bff33912862705710a23dccdcd.vf81b17578abb97a8de755cddbf7f45a9(this);
        A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd.vc2b55451d6b5a973b456d3ad090abf8d(this);
        this.vde303a864628dcb7c405f04c4b4685a9();
      }
  }
  return false;
}, Bus.prototype.ve8242717100aa0bda70572e93fec612f = function() {
  /** @type {boolean} */
  var f = false;
  if (this.state < Bus.vac473a0d414d6ed0478d6cb295755db5) {
    /** @type {number} */
    var index = 0;
    for (; index < A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd.length; index++) {
      var node = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd[index];
      var p = this.v5ade6f2f5a1f2d10c4bb670808c99f85();
      var c = node.v5ade6f2f5a1f2d10c4bb670808c99f85();
      var e = U.vc1f415498343451365676d8a0e41ec71(p, c);
      var r4 = this.dx != undefined ? this.dx : this.va359d4e8388ec27ff74fa1c2c7b7a983;
      var i = this.dy != undefined ? this.dy : this.v47ab9094f7763ada19867ee0131af83f;
      var j = node.dx != undefined ? node.dx : node.va359d4e8388ec27ff74fa1c2c7b7a983;
      if (node != this && e < 20 && node.v70bbc65bd229b367c92fdea0614bf411 == this.v70bbc65bd229b367c92fdea0614bf411 && U.sign(c.x - p.x) == U.sign(r4) && U.sign(c.y - p.y) == U.sign(i) && !(U.sign(r4) == -U.sign(j))) {
        /** @type {boolean} */
        f = true;
        break;
      }
    }
  } else {
    var numLon = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v4cd021bff33912862705710a23dccdcd.getItemIndex(this);
    /** @type {number} */
    index = numLon - 1;
    for (; index >= 0; index--) {
      node = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v4cd021bff33912862705710a23dccdcd[index];
      p = this.v5ade6f2f5a1f2d10c4bb670808c99f85();
      c = node.v5ade6f2f5a1f2d10c4bb670808c99f85();
      e = U.vc1f415498343451365676d8a0e41ec71(p, c);
      if (e < 45) {
        /** @type {boolean} */
        f = true;
        break;
      }
    }
  }
  return f ? false : v16cee3ee62f4283e2aa83ff23503aa30.prototype.ve8242717100aa0bda70572e93fec612f.call(this);
}, Bus.prototype.vc40d087825dbf82f2a30a6900e15634e = function() {
  var orientation = this.orientation();
  /** @type {string} */
  var cls = "";
  return this.v62ebbf1042f60ec6e3c20d3a751ebc4d && (cls = "Pub"), this.state >= Bus.vac473a0d414d6ed0478d6cb295755db5 ? new v74d951e1ef91d0f189e177d58ae30d8e(this.v5ade6f2f5a1f2d10c4bb670808c99f85(), cls + "ParkingBus" + orientation) : new v74d951e1ef91d0f189e177d58ae30d8e(this.v5ade6f2f5a1f2d10c4bb670808c99f85(), cls + "Bus" + orientation + A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed());
}, Event.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), Event.prototype.constructor = Event, Event.prototype.init = function(value) {
  this.random = new v05d11f0f2e0c1a6f360c8611189e4901(value);
  this.v6df93cee8d46ebc1cd5d0ef23df99e6b = A.vfe1c4eaec8ec40f848f9772196c532d3().vcc7d9b1686328e2707f57a93fa3170e6();
  this.v80c90785054762adfb4e9abcf80cfd8a(0);
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; indexLookupKey++) {
    this.v54abb4e4bc74d5f47568dd1e0a3bfd53.vc2b55451d6b5a973b456d3ad090abf8d([]);
    /** @type {number} */
    var b = 0;
    for (; b < AppConstants.vfb1d103d47b20eec473331f8512352c5; b++) {
      this.v54abb4e4bc74d5f47568dd1e0a3bfd53[indexLookupKey].vc2b55451d6b5a973b456d3ad090abf8d(0);
    }
  }
  vee8206b276787f6d065f935010a51f0c(this, AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44, function(ballNumber) {
    /** @type {number} */
    this.v19628441547527e7756f5ca10c16c9f4[ballNumber] = 0;
    /** @type {number} */
    this.vda1b1f9e42e1aee5b7c3cad5f97f53ef[ballNumber] = 0;
  });
  /** @type {number} */
  this.state = Event.vba5c77d03ab7c62a3552f10c5cfb05a9;
  /** @type {number} */
  var c = 1 / AppConstants.vf44e562edd0759bcb2d6c7e389a43e2a;
  /** @type {number} */
  this.v6f872bcb7a14489f2803953ddfd0c8b8 = 14400 * c;
  /** @type {number} */
  this.v6151d1438fbda037cdbc6855c3fd2c0b = 3300 * c;
}, Event.prototype.toString = function() {
  return this.date.v3d50f6a38b9e18ec7d6869a9c756a637() + "  " + this.vcac8a657fea238de145894896ba75413() + ":  " + this.v863b40ac0416e30464b61284cabfefae();
}, Event.compare = function(a, b) {
  return a.date < b.date ? -1 : a.date > b.date ? 1 : a.v878219b9ebcd3e5fc7b70aeaa13380ca < b.v878219b9ebcd3e5fc7b70aeaa13380ca ? -1 : 1;
}, Event.prototype.v863b40ac0416e30464b61284cabfefae = function() {
  return "";
}, Event.prototype.v0eebc25dc1b4189f8d78a0c7f67d9b84 = function() {
  return "";
}, Event.prototype.vcac8a657fea238de145894896ba75413 = function() {
  return "";
}, Event.prototype.v477cc8dd303fa6381868a595da01ef59 = function() {
  return 0;
}, Event.prototype.v8ab1052c00d6ecac3345531c828c014f = function() {
  /** @type {number} */
  var a = AppConstants.v3c25fa1c87709911231f9a9d42ef7312 - this.v477cc8dd303fa6381868a595da01ef59();
  return this.v5f33401ce224a4ceb44ca8df8fb8ddb4() / (a * AppConstants.vfb1d103d47b20eec473331f8512352c5 * AppConstants.vb521784636f5e0dc01ece715253c9df2);
}, Event.prototype.v5f33401ce224a4ceb44ca8df8fb8ddb4 = function() {
  /** @type {number} */
  var lookForArgumentsCode = 0;
  /** @type {number} */
  var yname = 0;
  for (; yname < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; yname++) {
    /** @type {number} */
    var i = 0;
    for (; i < AppConstants.vfb1d103d47b20eec473331f8512352c5; i++) {
      lookForArgumentsCode = lookForArgumentsCode + this.v54abb4e4bc74d5f47568dd1e0a3bfd53[yname][i];
    }
  }
  return lookForArgumentsCode;
}, Event.prototype.v414819d13779f900b6453862da664e65 = function() {
  /** @type {number} */
  var ret = 0;
  /** @type {number} */
  var t = 0;
  for (; t < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; t++) {
    /** @type {number} */
    var i = 0;
    for (; i < 2; i++) {
      /** @type {number} */
      ret = ret + this.vab7b73f088f5879736dd4f97d94377de(t, i) * this.ticketPrices[t][i];
    }
  }
  return ret;
}, Event.prototype.vab7b73f088f5879736dd4f97d94377de = function(f, k) {
  /** @type {number} */
  var asum = 0;
  /** @type {number} */
  var p = 0;
  for (; p < AppConstants.vfb1d103d47b20eec473331f8512352c5; p++) {
    if (k == 0 && p > 2 && p < 9) {
      asum = asum + this.v54abb4e4bc74d5f47568dd1e0a3bfd53[f][p];
    }
    if (k == 1 && (p <= 2 || p >= 9)) {
      asum = asum + this.v54abb4e4bc74d5f47568dd1e0a3bfd53[f][p];
    }
  }
  return asum;
}, Event.prototype.vfb63490a99541ec604b83df18d9aaa55 = function() {
  return this.v0a7e381f60e6cc213e4126d26249ae83;
}, Event.vba5c77d03ab7c62a3552f10c5cfb05a9 = -1, Event.v749c70cd527f4457494bb32a2cd947e0 = 0, Event.vc2f39e01f517b40a0453d6926d031255 = 1, Event.vf8602c745ea5ef0e7b27031084f0bdde = 2, Event.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  switch(this.state) {
    case Event.v749c70cd527f4457494bb32a2cd947e0:
      var g = this.random.next(100);
      if (this.v6f872bcb7a14489f2803953ddfd0c8b8-- < 0) {
        this.state++;
      }
      break;
    case Event.vc2f39e01f517b40a0453d6926d031255:
      this.v38db1aac3a64ab7790bdf7d97f0e6a51();
      break;
    case Event.vf8602c745ea5ef0e7b27031084f0bdde:
      A.vfe1c4eaec8ec40f848f9772196c532d3().vb70772f1e6c6efce5af0e4890a9ddb5d.v3c4241167008d6715b8ac67b4d3dd1ee();
      if (this.v6151d1438fbda037cdbc6855c3fd2c0b-- < 0) {
        /** @type {number} */
        var QueryLanguageComponent = this.v414819d13779f900b6453862da664e65() - this.v8ab87d247f3b1fe30140425c4498ad15;
        if (A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Refunds", QueryLanguageComponent, "Cash", this.v6df93cee8d46ebc1cd5d0ef23df99e6b), this.vcac8a657fea238de145894896ba75413() == "Game" && this.trash > 3 && A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Trash on Field", AppConstants.v73fc75654481dab89ec40b1cc4cbc7d6, "Cash", this.v6df93cee8d46ebc1cd5d0ef23df99e6b), this.vcac8a657fea238de145894896ba75413() ==
        "Concert" && this.v3e37f71cd55eed64916238fd9b807123 > 15 && A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Fan Injuries", AppConstants.v7dd19d3debcb8c43e9f6e9195397dbad, "Cash", this.v6df93cee8d46ebc1cd5d0ef23df99e6b), this.vdc7a139f00e0f433866839aeff8d7a54 > 3 && A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Parking Mayhem", AppConstants.vbce4d2b5fca611cb37028ef1ceaa8289,
        "Cash", this.v6df93cee8d46ebc1cd5d0ef23df99e6b), this.vcac8a657fea238de145894896ba75413() == "Concert") {
          A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Artist Fees", this.v16d886d8f7d17ebf5eccc37dd2419f04 * (1 - this.v5d1b6ccb9d6169f23d7ece12b45f081b), "Cash", this.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          /** @type {!Array} */
          var crossfilterable_layers = ["Promotion", "Artist Fees", "Other Facility Fees", "Ushers", "Stadium Security", "Ticket Takers"];
          /** @type {number} */
          var ret = 0;
          /** @type {number} */
          var layer_i = 0;
          for (; layer_i < crossfilterable_layers.length; layer_i++) {
            ret = ret + A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f(crossfilterable_layers[layer_i], this.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          }
          /** @type {number} */
          var edgeFactor = this.v414819d13779f900b6453862da664e65() - ret;
          A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Artist Profit Cut", Math.max(0, this.v21db8370943d31f1b823587ac6ed9cc6 * edgeFactor), "Cash", this.v6df93cee8d46ebc1cd5d0ef23df99e6b);
        }
        if (this.vab16aa458a4596ea3ac46e68100c6491 = A.vfe1c4eaec8ec40f848f9772196c532d3().vd61bb1e43a2872efc3e582a1ff6c2437, A.vfe1c4eaec8ec40f848f9772196c532d3().vb70772f1e6c6efce5af0e4890a9ddb5d.v12247ef71586b163213267daeefc4607(), A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3 = null, A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048), A.vfe1c4eaec8ec40f848f9772196c532d3().events.vf81b17578abb97a8de755cddbf7f45a9(this),
        A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998.v1648352dbaef4fd82fb8158969974646(this, 0), A.v87b8393064cbfa8977b32cec36a69d86().vfb63fa4889c9631c1ff761da711e097a(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353), App.v8252cb86c8a2011cc11d17a3fca89bf7) {
          A.v87b8393064cbfa8977b32cec36a69d86().v36c4192050cb2f5f8163dc557303ee61();
          var DemoCallBack = new frmEventReport(false);
          DemoCallBack.init(this);
          DemoCallBack.show();
        }
      }
      break;
  }
  return false;
}, Event.prototype.v697b5e24e5187ef2bddda37104f6ef45 = function() {
  return 1;
}, Event.prototype.v80c90785054762adfb4e9abcf80cfd8a = function(addedRenderer) {
  /** @type {!Array} */
  var b = [];
  /** @type {number} */
  var key = 0;
  for (; key < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; key++) {
    b.vc2b55451d6b5a973b456d3ad090abf8d([]);
    /** @type {number} */
    var arrayKey = 0;
    for (; arrayKey < 2; arrayKey++) {
      b[key].vc2b55451d6b5a973b456d3ad090abf8d([]);
      if (addedRenderer == 0) {
        /** @type {number} */
        b[key][arrayKey] = 0;
      } else {
        /** @type {number} */
        b[key][arrayKey] = addedRenderer - A.v50156c5418a59f9fb151a3917f9026dd().autoPriceGradient * (key - 1 + arrayKey);
      }
    }
  }
  /** @type {!Array} */
  this.ticketPrices = b;
}, Event.prototype.vb31c03873111fe6ecf3ed53fda5c491d = function() {
  return this.vcac8a657fea238de145894896ba75413() + "<br>" + this.date.format("MMM d");
}, Event.prototype.vaa2da3bb7a689e4debd652703e49cb26 = function(num) {
  var initialState = v13260862a5e36823cb5546b59af48c71.instance.state;
  var menupath = initialState.settings.MessageFilter;
  /** @type {!Array} */
  var edgearray = [];
  if (menupath != null && menupath.length > 0) {
    edgearray = menupath.split("|");
  }
  /** @type {number} */
  var i = 0;
  for (; i < edgearray.length; ++i) {
    var e = edgearray[i];
    if (num.indexOf(e) != -1) {
      return true;
    }
  }
  return false;
}, Event.prototype.comment = function(value, id) {
  if (this.vaa2da3bb7a689e4debd652703e49cb26(id) == 0) {
    var contentItemMap = this.v8f8491c225d2abbf8b262e22fbe97f5a;
    /** @type {string} */
    var key = value + "|" + id;
    if (contentItemMap[key] == undefined) {
      /** @type {number} */
      contentItemMap[key] = 1;
    } else {
      contentItemMap[key] = contentItemMap[key] + 1;
    }
  }
}, Event.prototype.v9f1c8fabdfa5f71ab613c54bd7dd423b = function(obj, value) {
  /** @type {number} */
  var _i = 0;
  for (; _i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; _i++) {
    var i = AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[_i];
    /** @type {number} */
    obj[i] = obj[i] * value;
  }
  return obj;
}, Event.prototype.v4557aa0e3cb1316780c8eb7bcd42ca5e = function() {
  return 1;
}, Game.prototype = Object.create(Event.prototype), Game.prototype.constructor = Game, Game.prototype.init = function(d, a, b, term) {
  Event.prototype.init.call(this, term);
  /** @type {string} */
  this.date = d;
  /** @type {number} */
  this.v7b95bdca25e79278f6455e2ac7384972 = a;
  /** @type {number} */
  this.v324e94244eee3d9bf81813a2b56c075a = b;
  this.v3eb83ec31bc149b290e3ce618bca2724 = A.vfe1c4eaec8ec40f848f9772196c532d3().vd17f15c857887a924f6dee50a6107ad0[b];
  A.vfe1c4eaec8ec40f848f9772196c532d3().v5bb5ddf013371c375e056861167c8a68(this, d);
}, Game.prototype.v863b40ac0416e30464b61284cabfefae = function() {
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a;
  return "vs " + a[this.v324e94244eee3d9bf81813a2b56c075a];
}, Game.prototype.v0eebc25dc1b4189f8d78a0c7f67d9b84 = function() {
  return this.state == Event.vf8602c745ea5ef0e7b27031084f0bdde ? this.v39ad898bcff4a62b1727576de8887044 > this.v48d1284872c52fc381118313b6b55bab ? U.vc0e6c88f8413e92781b652ae2786391a(" Win {0}-{1}", [this.v39ad898bcff4a62b1727576de8887044, this.v48d1284872c52fc381118313b6b55bab]) : this.v39ad898bcff4a62b1727576de8887044 < this.v48d1284872c52fc381118313b6b55bab ? U.vc0e6c88f8413e92781b652ae2786391a(" Loss {0}-{1}", [this.v48d1284872c52fc381118313b6b55bab, this.v39ad898bcff4a62b1727576de8887044]) :
  U.vc0e6c88f8413e92781b652ae2786391a(" Tie {0}-{1}", [this.v39ad898bcff4a62b1727576de8887044, this.v48d1284872c52fc381118313b6b55bab]) : "";
}, Game.prototype.vcac8a657fea238de145894896ba75413 = function() {
  return "Game";
}, Game.prototype.v38db1aac3a64ab7790bdf7d97f0e6a51 = function() {
  if (this.va586c015b3d05863ffa88fd7baa17df3 == undefined && (this.va586c015b3d05863ffa88fd7baa17df3 = A.vfe1c4eaec8ec40f848f9772196c532d3().vd23c19d475fb9c8ced96488d884a6813(A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971)), this.v7f1a06c7f01d0696ba0b294b464dcd2d-- > 0) {
    return;
  }
  if (this.v7f1a06c7f01d0696ba0b294b464dcd2d = 7, this.v28e2b3398c38faea8d6e0a2d867e77cf > 0) {
    this.v28e2b3398c38faea8d6e0a2d867e77cf--;
    return;
  }
  if (this.vdcfd2df724811ddc7adc6363d3d96a64 > 0) {
    this.vdcfd2df724811ddc7adc6363d3d96a64--;
    return;
  }
  if (this.v8fbd4afc15f4ff1af2004754fd85adf3 > 0) {
    this.v8fbd4afc15f4ff1af2004754fd85adf3--;
    return;
  }
  if (this.down == 0) {
    this.vdfba98d9f87c5ee8c729fa0ef3903c5c = this.random.vc620340a78b452026a29f2ec05b4664f(10, 45);
    this.v380e81f12a3033c62df9d9afe3bcd0ed = this.vdfba98d9f87c5ee8c729fa0ef3903c5c + 10;
    /** @type {string} */
    this.v8089c25fc3f552e40538d78e9fa87683 = "Kickoff returned to the " + this.vdfba98d9f87c5ee8c729fa0ef3903c5c;
    this.va1cb899dcf11cd1d2e0a5f61078d01b6();
    /** @type {number} */
    this.down = 1;
  } else {
    if (this.down == 4) {
      if (this.vdfba98d9f87c5ee8c729fa0ef3903c5c > 67) {
        if (this.random.va7f5b666e153a7fd316b95fa2a8560ac() < this.v2e81001431824a099f465d4c8a410174) {
          this.ve6ea1f0cffda2baa7f88d1fd98cba341(3);
          /** @type {string} */
          this.v8089c25fc3f552e40538d78e9fa87683 = "Field goal attempt is good!";
        } else {
          this.va1cb899dcf11cd1d2e0a5f61078d01b6();
          /** @type {number} */
          this.vdfba98d9f87c5ee8c729fa0ef3903c5c = 100 - this.vdfba98d9f87c5ee8c729fa0ef3903c5c;
          /** @type {number} */
          this.v380e81f12a3033c62df9d9afe3bcd0ed = this.vdfba98d9f87c5ee8c729fa0ef3903c5c + 10;
          /** @type {string} */
          this.v8089c25fc3f552e40538d78e9fa87683 = "Field goal attempt missed!";
          /** @type {number} */
          this.down = 1;
        }
      } else {
        /** @type {number} */
        var d = Math.floor(this.random.vc620340a78b452026a29f2ec05b4664f(this.vfa3bb1d11fa41679be963fe637c5b51a - 10, this.vfa3bb1d11fa41679be963fe637c5b51a + 10));
        this.va1cb899dcf11cd1d2e0a5f61078d01b6();
        /** @type {number} */
        this.vdfba98d9f87c5ee8c729fa0ef3903c5c = 100 - (this.vdfba98d9f87c5ee8c729fa0ef3903c5c + d);
        if (this.vdfba98d9f87c5ee8c729fa0ef3903c5c < 1) {
          /** @type {number} */
          this.vdfba98d9f87c5ee8c729fa0ef3903c5c = 20;
        }
        /** @type {number} */
        this.v380e81f12a3033c62df9d9afe3bcd0ed = this.vdfba98d9f87c5ee8c729fa0ef3903c5c + 10;
        /** @type {string} */
        this.v8089c25fc3f552e40538d78e9fa87683 = "Punt of " + d + " yards";
        /** @type {number} */
        this.down = 1;
      }
    } else {
      /** @type {number} */
      var a = 0;
      if (this.random.va7f5b666e153a7fd316b95fa2a8560ac() < .33) {
        /** @type {number} */
        a = Math.floor(this.random.vc620340a78b452026a29f2ec05b4664f(-3, 9) * this.vf5584ee3b0ec9f630c963d9f94db0dd4 * A.vfe1c4eaec8ec40f848f9772196c532d3().v328f7bc2cc134d4bf360a76718f5d836);
        /** @type {string} */
        this.v8089c25fc3f552e40538d78e9fa87683 = "Run for " + a + " yards";
      } else {
        var c = this.random.va7f5b666e153a7fd316b95fa2a8560ac();
        if (c < .05) {
          a = this.random.vc620340a78b452026a29f2ec05b4664f(-8, -2);
          /** @type {string} */
          this.v8089c25fc3f552e40538d78e9fa87683 = "Sack for loss of " + a + " yards";
        } else {
          if (c < .1) {
            a = this.random.vc620340a78b452026a29f2ec05b4664f(3, 15);
            this.va1cb899dcf11cd1d2e0a5f61078d01b6();
            /** @type {number} */
            this.vdfba98d9f87c5ee8c729fa0ef3903c5c = Math.max(1, 100 - (this.vdfba98d9f87c5ee8c729fa0ef3903c5c + a));
            /** @type {number} */
            this.v380e81f12a3033c62df9d9afe3bcd0ed = this.vdfba98d9f87c5ee8c729fa0ef3903c5c + 10;
            /** @type {string} */
            this.v8089c25fc3f552e40538d78e9fa87683 = "Interception!";
          } else {
            if (c < .4) {
              /** @type {string} */
              this.v8089c25fc3f552e40538d78e9fa87683 = "Incomplete pass";
            } else {
              /** @type {number} */
              a = Math.floor(this.random.vc620340a78b452026a29f2ec05b4664f(3, 25) * this.vf5584ee3b0ec9f630c963d9f94db0dd4 * A.vfe1c4eaec8ec40f848f9772196c532d3().v328f7bc2cc134d4bf360a76718f5d836);
              /** @type {string} */
              this.v8089c25fc3f552e40538d78e9fa87683 = "Pass for " + a + " yards";
            }
          }
        }
      }
      this.vdfba98d9f87c5ee8c729fa0ef3903c5c += a;
      if (this.vdfba98d9f87c5ee8c729fa0ef3903c5c > 99) {
        this.ve6ea1f0cffda2baa7f88d1fd98cba341(7);
        /** @type {string} */
        this.v8089c25fc3f552e40538d78e9fa87683 = "Touchdown!";
      } else {
        if (this.vdfba98d9f87c5ee8c729fa0ef3903c5c < 1) {
          this.va1cb899dcf11cd1d2e0a5f61078d01b6();
          this.ve6ea1f0cffda2baa7f88d1fd98cba341(2);
          /** @type {string} */
          this.v8089c25fc3f552e40538d78e9fa87683 = "Safety!";
        } else {
          if (this.vdfba98d9f87c5ee8c729fa0ef3903c5c >= this.v380e81f12a3033c62df9d9afe3bcd0ed) {
            /** @type {number} */
            this.down = 1;
            this.v380e81f12a3033c62df9d9afe3bcd0ed = this.vdfba98d9f87c5ee8c729fa0ef3903c5c + 10;
          } else {
            this.down++;
          }
        }
      }
    }
  }
  this.va26c7c83d406d822f5741b3d3c28199f -= 20;
  /** @type {number} */
  var f = Math.floor(this.va26c7c83d406d822f5741b3d3c28199f / 60);
  /** @type {number} */
  var default_favicon = this.va26c7c83d406d822f5741b3d3c28199f - f * 60;
  /** @type {string} */
  var e = default_favicon.toString();
  if (e == "0" && (e = "00"), this.va26c7c83d406d822f5741b3d3c28199f == 0) {
    if (this.period == 4) {
      /** @type {number} */
      this.state = Event.vf8602c745ea5ef0e7b27031084f0bdde;
      var b = A.vfe1c4eaec8ec40f848f9772196c532d3().v02f93565126d56d279f100e7ca2660b4;
      if (this.v39ad898bcff4a62b1727576de8887044 > this.v48d1284872c52fc381118313b6b55bab) {
        b[this.v7b95bdca25e79278f6455e2ac7384972].v8f22857eac065a0c6662b19383c0d28b++;
        b[this.v324e94244eee3d9bf81813a2b56c075a].va4695f9def13ccf66ad9ed6ae95a136c++;
      } else {
        if (this.v39ad898bcff4a62b1727576de8887044 < this.v48d1284872c52fc381118313b6b55bab) {
          b[this.v324e94244eee3d9bf81813a2b56c075a].v8f22857eac065a0c6662b19383c0d28b++;
          b[this.v7b95bdca25e79278f6455e2ac7384972].va4695f9def13ccf66ad9ed6ae95a136c++;
        } else {
          b[this.v324e94244eee3d9bf81813a2b56c075a].vd8de30596f976e5afca84bb587b6bb41++;
          b[this.v7b95bdca25e79278f6455e2ac7384972].vd8de30596f976e5afca84bb587b6bb41++;
        }
      }
      A.vfe1c4eaec8ec40f848f9772196c532d3().v9d4a7f431c589283eeef09b919fd3142();
    } else {
      this.period++;
      /** @type {number} */
      this.va26c7c83d406d822f5741b3d3c28199f = 900;
    }
  }
}, Game.prototype.vba77326242039e0a7779ab085e82444f = function() {
  /** @type {number} */
  var form_sel = Math.floor(this.va26c7c83d406d822f5741b3d3c28199f / 60);
  /** @type {number} */
  var default_favicon = this.va26c7c83d406d822f5741b3d3c28199f - form_sel * 60;
  /** @type {string} */
  var k = default_favicon.toString();
  return k == "0" && (k = "00"), form_sel + ":" + k;
}, Game.prototype.ve6ea1f0cffda2baa7f88d1fd98cba341 = function(partKeys) {
  if (this.va77baa57302716b9d64be45356f30d20) {
    if (partKeys == 7) {
      /** @type {number} */
      this.vdcfd2df724811ddc7adc6363d3d96a64 = 20;
    }
    if (partKeys == 3) {
      /** @type {number} */
      this.v8fbd4afc15f4ff1af2004754fd85adf3 = 20;
    }
    this.v39ad898bcff4a62b1727576de8887044 += partKeys;
  } else {
    this.v48d1284872c52fc381118313b6b55bab += partKeys;
  }
  /** @type {number} */
  this.down = 0;
}, Game.prototype.va1cb899dcf11cd1d2e0a5f61078d01b6 = function() {
  /** @type {boolean} */
  this.va77baa57302716b9d64be45356f30d20 = !this.va77baa57302716b9d64be45356f30d20;
  if (this.va77baa57302716b9d64be45356f30d20) {
    /** @type {number} */
    this.vf5584ee3b0ec9f630c963d9f94db0dd4 = this.va586c015b3d05863ffa88fd7baa17df3[0] / A.vfe1c4eaec8ec40f848f9772196c532d3().ve538d677ff3f2c85a67ec913c72e4b5a[0];
    this.v2e81001431824a099f465d4c8a410174 = A.vfe1c4eaec8ec40f848f9772196c532d3().v18d6a56bcdf8bd0d48b95258ff13d653("Kicker").PCT;
    this.vfa3bb1d11fa41679be963fe637c5b51a = A.vfe1c4eaec8ec40f848f9772196c532d3().v18d6a56bcdf8bd0d48b95258ff13d653("Punter").AVG;
  } else {
    /** @type {number} */
    this.vf5584ee3b0ec9f630c963d9f94db0dd4 = A.vfe1c4eaec8ec40f848f9772196c532d3().ve538d677ff3f2c85a67ec913c72e4b5a[1] / this.va586c015b3d05863ffa88fd7baa17df3[1];
    /** @type {number} */
    this.v2e81001431824a099f465d4c8a410174 = .75;
    /** @type {number} */
    this.vfa3bb1d11fa41679be963fe637c5b51a = 42;
  }
  /** @type {number} */
  this.down = 0;
}, Game.prototype.v477cc8dd303fa6381868a595da01ef59 = function() {
  return 1;
}, Game.prototype.v697b5e24e5187ef2bddda37104f6ef45 = function() {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.IgnoreRecordUtility) {
    return 1;
  }
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v02f93565126d56d279f100e7ca2660b4[0];
  /** @type {number} */
  var b = .5;
  var readersLength = A.vfe1c4eaec8ec40f848f9772196c532d3().v0faf23ab469bf09c0425c0af14aff4d6.length;
  if (readersLength > 0) {
    b = A.vfe1c4eaec8ec40f848f9772196c532d3().v0faf23ab469bf09c0425c0af14aff4d6[readersLength - 1][0].v4c97ba091a1c793f8e3540e0470c67fe();
  }
  /** @type {number} */
  var d = (b * 3 + a.v4c97ba091a1c793f8e3540e0470c67fe() * a.v6e8e541cc783a275879873c04e1c35bd()) / (3 + a.v6e8e541cc783a275879873c04e1c35bd());
  return d / .5;
}, Concert.prototype = Object.create(Event.prototype), Concert.prototype.constructor = Concert, Concert.prototype.init = function(value, type, line, tab, index, format, a, id, fps) {
  Event.prototype.init.call(this, fps);
  /** @type {!Object} */
  this.date = value;
  /** @type {number} */
  this.v878219b9ebcd3e5fc7b70aeaa13380ca = type;
  /** @type {number} */
  this.vfbdfe532170e5dbbf837f354b26a815a = line;
  /** @type {!Object} */
  this.v16d886d8f7d17ebf5eccc37dd2419f04 = tab;
  /** @type {number} */
  this.v5d1b6ccb9d6169f23d7ece12b45f081b = index;
  /** @type {number} */
  this.v21db8370943d31f1b823587ac6ed9cc6 = format;
  /** @type {string} */
  this.v3eb83ec31bc149b290e3ce618bca2724 = a;
  this.v26f32b31080a6a89beb63abd4f3f4d40 = id;
  /** @type {number} */
  this.v3e37f71cd55eed64916238fd9b807123 = 0;
}, Concert.prototype.v863b40ac0416e30464b61284cabfefae = function() {
  return this.v878219b9ebcd3e5fc7b70aeaa13380ca;
}, Concert.prototype.vcac8a657fea238de145894896ba75413 = function() {
  return "Concert";
}, Concert.prototype.v38db1aac3a64ab7790bdf7d97f0e6a51 = function() {
  if (this.v5a90e2b6a0b1c525625baeec1ac4dc4d-- < 0) {
    /** @type {number} */
    this.state = Event.vf8602c745ea5ef0e7b27031084f0bdde;
  }
}, Concert.prototype.v4557aa0e3cb1316780c8eb7bcd42ca5e = function() {
  return A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763 ? 3.75 : 1.25;
}, Concert.prototype.v0eebc25dc1b4189f8d78a0c7f67d9b84 = function() {
  var a = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[4].v5de2781193aad09bc0f0b17b09a59e96;
  var b = a[this.vfbdfe532170e5dbbf837f354b26a815a];
  return U.vc0e6c88f8413e92781b652ae2786391a("({0})", b);
}, Car.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), Car.prototype.constructor = Car, Car.v067c2ddf846a288c87936671119a1d31 = 0, Car.vfde44b8c18c53e1fab07ad96b7785c8f = 1, Car.v2f32ccb43a0a2ca37a6a1919792cbd03 = 2, Car.vcbf4008afceaefcc3d83d29973456dbc = 3, Car.v89f79d2c76f358e1c02f43f17d538ddf = 7, Car.v67835fa9dc96cdc26e31c2178902d677 = 3, Car.prototype.init = function() {
  /** @type {boolean} */
  this.v6aa27411b12007b92f060cade0edb520 = false;
  /** @type {number} */
  this.state = Car.v067c2ddf846a288c87936671119a1d31;
  /** @type {number} */
  this.v1a29cfec14cbd02c6748c6b4f27c10e2 = 0;
  this.v33ddf1632446061a2479bce0286ab47f = A.vfe1c4eaec8ec40f848f9772196c532d3().v57156287d28b6f1f9fae2cb2ee871735;
  /** @type {!Array} */
  this.v0b395a7e5c993093817223839c50df18 = [];
  /** @type {boolean} */
  this.v5f6744d7e5bf714872b1de8f73a8adf2 = false;
  /** @type {number} */
  this.va7f54873a22cb414b1f836ac51b400d5 = 1;
  /** @type {number} */
  this.vd7e995df7a06bee28a400a53f5a5f2fc = -1;
  /** @type {number} */
  this.Color = 0;
  this.v6955045be3f2455eb1580759d48f41f1 = new Point(0, 0);
  /** @type {string} */
  this.image = "";
}, Car.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  if (this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  }, this.v1a29cfec14cbd02c6748c6b4f27c10e2 > 0) {
    this.v1a29cfec14cbd02c6748c6b4f27c10e2--;
  } else {
    var length = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v832218d1d3f813e17691b8f48dfb75a2();
    var c = A.vfe1c4eaec8ec40f848f9772196c532d3().vdadb3802808c4dad6e637cd29bd9e7b5;
    switch(this.state) {
      case Car.v067c2ddf846a288c87936671119a1d31:
        if (length > 0) {
          var startIndex = A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random.next(length);
          /** @type {number} */
          var i = 0;
          for (; i < length; i++) {
            /** @type {number} */
            var isCreditCard_1 = Car.v89f79d2c76f358e1c02f43f17d538ddf + (startIndex + i) % length * 2;
            if (A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v10e9e98111eea829c86ebe4f9fc001ac(this, isCreditCard_1, -2)) {
              /** @type {number} */
              this.state = Car.v2f32ccb43a0a2ca37a6a1919792cbd03;
              break;
            }
          }
        }
        break;
      case Car.v2f32ccb43a0a2ca37a6a1919792cbd03:
        this.v5ff53dee77f0a8ffa101824545f168a8();
        break;
      case Car.vfde44b8c18c53e1fab07ad96b7785c8f:
        /** @type {number} */
        va7f54873a22cb414b1f836ac51b400d5 = 1;
        if (length > 0 && this.v33ddf1632446061a2479bce0286ab47f-- <= 0) {
          /** @type {number} */
          this.state = Car.v2f32ccb43a0a2ca37a6a1919792cbd03;
          A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Cash", c.vb141cf7a711f6005f0f447e34f8f2dc2, "Main Lot", A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          /** @type {boolean} */
          this.v6aa27411b12007b92f060cade0edb520 = true;
        }
        break;
    }
  }
  return false;
}, Car.prototype.v5ff53dee77f0a8ffa101824545f168a8 = function() {
  var _nGon = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019;
  if (this.v5f6744d7e5bf714872b1de8f73a8adf2 && this.va7f54873a22cb414b1f836ac51b400d5 == 1) {
    /** @type {number} */
    this.state = Car.vcbf4008afceaefcc3d83d29973456dbc;
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    /** @type {boolean} */
    this.v5f6744d7e5bf714872b1de8f73a8adf2 = false;
    var b = this.v0b395a7e5c993093817223839c50df18[0];
    b.init();
    b.v02cdbcb0a98e538fd082f8b699be2de7(this);
    _nGon.vca376faa2a83aa1afc63ed398cdfdc26.vc2b55451d6b5a973b456d3ad090abf8d(b);
    return;
  }
  if (this.va7f54873a22cb414b1f836ac51b400d5 == 0) {
    this.va7f54873a22cb414b1f836ac51b400d5++;
    return;
  }
  if (this.v6955045be3f2455eb1580759d48f41f1.y < Car.v67835fa9dc96cdc26e31c2178902d677 + 3 && this.v6955045be3f2455eb1580759d48f41f1.x > 1) {
    if (this.v6955045be3f2455eb1580759d48f41f1.y == Car.v67835fa9dc96cdc26e31c2178902d677 && !this.v6aa27411b12007b92f060cade0edb520) {
      /** @type {number} */
      this.state = Car.vfde44b8c18c53e1fab07ad96b7785c8f;
    } else {
      if (this.v6955045be3f2455eb1580759d48f41f1.y == Car.v67835fa9dc96cdc26e31c2178902d677 + 2) {
        _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x - 1, this.v6955045be3f2455eb1580759d48f41f1.y);
      } else {
        _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y + 1);
      }
    }
    return;
  }
  if (this.v6d805b703cc948831a337654326e4bf2) {
    if (this.v6955045be3f2455eb1580759d48f41f1.x == 1) {
      if (this.v6955045be3f2455eb1580759d48f41f1.y == va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9 - 1 - 2 || this.v6955045be3f2455eb1580759d48f41f1.y % 4 == 1 && A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random.va7f5b666e153a7fd316b95fa2a8560ac() < .1) {
        _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, 2, this.v6955045be3f2455eb1580759d48f41f1.y);
      } else {
        if (this.v6955045be3f2455eb1580759d48f41f1.y < va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9 - 1 - 2) {
          _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, 1, this.v6955045be3f2455eb1580759d48f41f1.y + 1);
        }
      }
    } else {
      if (this.v6955045be3f2455eb1580759d48f41f1.x == 0) {
        if (this.v6955045be3f2455eb1580759d48f41f1.y % 4 == 1) {
          _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, 2, this.v6955045be3f2455eb1580759d48f41f1.y);
        } else {
          if (this.v6955045be3f2455eb1580759d48f41f1.y - 1 < Car.v67835fa9dc96cdc26e31c2178902d677 + 2) {
            _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x + 1, this.v6955045be3f2455eb1580759d48f41f1.y);
          } else {
            _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, 0, this.v6955045be3f2455eb1580759d48f41f1.y - 1);
          }
        }
      } else {
        if (this.v6955045be3f2455eb1580759d48f41f1.y % 4 == 1) {
          if (this.v6955045be3f2455eb1580759d48f41f1.x == va9e642482127d2a8e086348a87917fba.vb691aa1a681c44416b5a7a5ce7a6ceee + 2 - 1) {
            _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y + 1);
          } else {
            if (_nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y - 1)) {
              /** @type {boolean} */
              this.v5f6744d7e5bf714872b1de8f73a8adf2 = true;
            } else {
              if (_nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y + 2)) {
                /** @type {boolean} */
                this.v5f6744d7e5bf714872b1de8f73a8adf2 = true;
              } else {
                _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x + 1, this.v6955045be3f2455eb1580759d48f41f1.y);
              }
            }
          }
        } else {
          if (_nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y - 2)) {
            /** @type {boolean} */
            this.v5f6744d7e5bf714872b1de8f73a8adf2 = true;
          } else {
            if (_nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y + 1)) {
              /** @type {boolean} */
              this.v5f6744d7e5bf714872b1de8f73a8adf2 = true;
            } else {
              if (this.v6955045be3f2455eb1580759d48f41f1.x == 2) {
                _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, 0, this.v6955045be3f2455eb1580759d48f41f1.y - 2);
              } else {
                if (_nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x - 1, this.v6955045be3f2455eb1580759d48f41f1.y)) {
                  this.vea739b6b9dc2b9ba5a1ebade9d6d0731(this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y - 1, .5);
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (this.v6955045be3f2455eb1580759d48f41f1.x == 1) {
      if (this.v6955045be3f2455eb1580759d48f41f1.y == this.vd7e995df7a06bee28a400a53f5a5f2fc) {
        _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, 2, this.v6955045be3f2455eb1580759d48f41f1.y);
      } else {
        _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, 1, this.v6955045be3f2455eb1580759d48f41f1.y + 1);
      }
    } else {
      if (_nGon.v291594b3d1f99b39281df5ef6ca3fce3(this.v6955045be3f2455eb1580759d48f41f1.x + 1, this.v6955045be3f2455eb1580759d48f41f1.y - 1) || _nGon.v291594b3d1f99b39281df5ef6ca3fce3(this.v6955045be3f2455eb1580759d48f41f1.x + 1, this.v6955045be3f2455eb1580759d48f41f1.y + 2)) {
        _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x + 1, this.v6955045be3f2455eb1580759d48f41f1.y);
      } else {
        if (_nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y - 1)) {
          /** @type {boolean} */
          this.v5f6744d7e5bf714872b1de8f73a8adf2 = true;
        } else {
          if (_nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y + 2)) {
            /** @type {boolean} */
            this.v5f6744d7e5bf714872b1de8f73a8adf2 = true;
          } else {
            _nGon.v10e9e98111eea829c86ebe4f9fc001ac(this, this.v6955045be3f2455eb1580759d48f41f1.x, this.v6955045be3f2455eb1580759d48f41f1.y - 1);
            /** @type {boolean} */
            this.v6d805b703cc948831a337654326e4bf2 = true;
          }
        }
      }
    }
  }
}, Car.prototype.v43fc441e27927b5c223ed716685fcd46 = function() {
  /** @type {!Array} */
  var QuickBase = [];
  if (this.state == Car.v067c2ddf846a288c87936671119a1d31) {
    return QuickBase;
  }
  var positionedGlyph = this.vb54310dd8ad70a30dfbb4b885a5bc410(this.v6955045be3f2455eb1580759d48f41f1);
  if (QuickBase.vc2b55451d6b5a973b456d3ad090abf8d(new v74d951e1ef91d0f189e177d58ae30d8e(positionedGlyph, this.image)), this.v1a29cfec14cbd02c6748c6b4f27c10e2 > 0) {
    var val = new v74d951e1ef91d0f189e177d58ae30d8e(new Point(positionedGlyph.x, positionedGlyph.y + 1), "Fire");
    /** @type {number} */
    val.col = A.vfe1c4eaec8ec40f848f9772196c532d3().v857e210de5749cc6dd2313995353b70e % 12;
    QuickBase.vc2b55451d6b5a973b456d3ad090abf8d(val);
  }
  return QuickBase;
}, Car.prototype.vb54310dd8ad70a30dfbb4b885a5bc410 = function(objectToMeasure) {
  if (objectToMeasure.y < Car.v67835fa9dc96cdc26e31c2178902d677 + 3 && objectToMeasure.x > 1) {
    if (objectToMeasure.y == Car.v67835fa9dc96cdc26e31c2178902d677 + 2) {
      /** @type {string} */
      this.image = "CarL";
    } else {
      /** @type {string} */
      this.image = "CarU";
    }
  } else {
    if (objectToMeasure.x == 0) {
      /** @type {string} */
      this.image = "CarD";
    } else {
      if (objectToMeasure.x == 1) {
        /** @type {string} */
        this.image = "CarU";
      } else {
        if (objectToMeasure.y % 4 == 0) {
          /** @type {string} */
          this.image = "CarD";
        } else {
          if (objectToMeasure.y % 4 == 3) {
            /** @type {string} */
            this.image = "CarU";
          } else {
            if (objectToMeasure.y % 4 == 2) {
              /** @type {string} */
              this.image = "CarL";
            } else {
              if (objectToMeasure.y % 4 == 1) {
                /** @type {string} */
                this.image = "CarR";
              }
            }
          }
        }
      }
    }
  }
  /** @type {number} */
  var max = 0;
  /** @type {number} */
  var p4 = 0;
  if (this.va7f54873a22cb414b1f836ac51b400d5 == 0) {
    if (this.image == "CarD") {
      /** @type {number} */
      max = -7;
    } else {
      if (this.image == "CarU") {
        /** @type {number} */
        max = 7;
      } else {
        if (this.image == "CarL") {
          /** @type {number} */
          p4 = 7;
        } else {
          if (this.image == "CarR") {
            /** @type {number} */
            p4 = -7;
          }
        }
      }
    }
  }
  /** @type {number} */
  var t = 0 + objectToMeasure.x * 18 + p4;
  /** @type {number} */
  var s = 430 - objectToMeasure.y * 18 + max;
  if (objectToMeasure.x == 0) {
    /** @type {number} */
    t = t - 15.5;
  }
  /** @type {number} */
  var p3x2 = .61 * t - .7 * s + 427;
  /** @type {number} */
  var cornerOffset = (.61 * t + .7 * s) / 2 + 173;
  return new Point(p3x2, cornerOffset);
}, Car.prototype.vea739b6b9dc2b9ba5a1ebade9d6d0731 = function(tagName, className, opt_maxSearchSteps) {
  var parentCustomTag = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019;
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.random.va7f5b666e153a7fd316b95fa2a8560ac() < opt_maxSearchSteps) {
    var loaded = parentCustomTag.v8b591a6ae707f82d0c7bf7080524308b[tagName][className];
    if (loaded != null && loaded.v1a29cfec14cbd02c6748c6b4f27c10e2 == 0 && loaded.state == Car.v2f32ccb43a0a2ca37a6a1919792cbd03) {
      this.v1a29cfec14cbd02c6748c6b4f27c10e2 = AppConstants.vdb4b54deef995f0012f3a10f72b96fd8;
      loaded.v1a29cfec14cbd02c6748c6b4f27c10e2 = AppConstants.vdb4b54deef995f0012f3a10f72b96fd8;
      A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.vdc7a139f00e0f433866839aeff8d7a54++;
    }
  }
}, Stadium.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), Stadium.prototype.constructor = Stadium, Stadium.prototype.init = function() {
  /** @type {!Array} */
  this.v7b8b5820bd858d510372bf6a276f31a1 = [];
  /** @type {number} */
  var indexLookupKey = 0;
  for (; indexLookupKey < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; indexLookupKey++) {
    this.v7b8b5820bd858d510372bf6a276f31a1.vc2b55451d6b5a973b456d3ad090abf8d([]);
    /** @type {number} */
    var b = 0;
    for (; b < AppConstants.vfb1d103d47b20eec473331f8512352c5; b++) {
      this.v7b8b5820bd858d510372bf6a276f31a1[indexLookupKey].vc2b55451d6b5a973b456d3ad090abf8d(0);
    }
  }
}, Stadium.prototype.vb28200a339b4d53ffea64d945d2b094f = function(a) {
  return a > 2 && a < 9 ? 0 : 1;
}, Stadium.ve928ad725b706dbd50c7669bea1fe747 = function(type, i) {
  return AppConstants.vb5e4ce32c29e49d46ad3e91743fd553e[type][i];
}, va523e7ef1a952b307bde51fffa209207.prototype = Object.create(v16cee3ee62f4283e2aa83ff23503aa30.prototype), va523e7ef1a952b307bde51fffa209207.prototype.constructor = va523e7ef1a952b307bde51fffa209207, va523e7ef1a952b307bde51fffa209207.prototype.va8bdfae1a83cd2ee452b32cb827849f9 = function() {
  if (this.v324a28bb5c50ed83b064d9f13e915b23 = {
    dt : v13260862a5e36823cb5546b59af48c71.instance.state.settings.SimulatedSecondsPerStep
  }, !this.initialized || this.ve8242717100aa0bda70572e93fec612f()) {
    /** @type {boolean} */
    this.initialized = true;
    this.v359abcfffa6d67a9b9f67e93bef327c7(.3 + A.vfe1c4eaec8ec40f848f9772196c532d3().random.va7f5b666e153a7fd316b95fa2a8560ac() * .4);
    var valueProgess = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.vb912ab65bc2d726bbb69ab3485173274();
    this.v46d9c2aea57ee009b9ab339d4478978a(valueProgess[0]);
    this.vcecae7630817bbe4e45a64aabde08a54(valueProgess);
  }
  return false;
}, va523e7ef1a952b307bde51fffa209207.prototype.vc40d087825dbf82f2a30a6900e15634e = function() {
  /** @type {string} */
  var a = "NESW";
  var b = this.dx != undefined ? this.dx : this.va359d4e8388ec27ff74fa1c2c7b7a983;
  var hash_coef = this.dy != undefined ? this.dy : this.v47ab9094f7763ada19867ee0131af83f;
  return b * hash_coef > 0 && (a = "NWSE"), this.initialized ? new v74d951e1ef91d0f189e177d58ae30d8e(this.v5ade6f2f5a1f2d10c4bb670808c99f85(), "Car" + a + A.vfe1c4eaec8ec40f848f9772196c532d3().v0b58575cf45dc7164606a3389457e4ed()) : new v74d951e1ef91d0f189e177d58ae30d8e(this.v5ade6f2f5a1f2d10c4bb670808c99f85(), null);
}, v55981732dc73c4f6196aee61b69fff5c.prototype = Object.create(Object.prototype), v55981732dc73c4f6196aee61b69fff5c.prototype.constructor = v55981732dc73c4f6196aee61b69fff5c, v55981732dc73c4f6196aee61b69fff5c.prototype.init = function(i) {
  var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().random;
  /** @type {number} */
  this.index = i;
  this.name = AppConstants.vbeddc7db8aad49145004817806c994aa[i];
  this.vda0085d4a78e038377db76be32b1c71d = AppConstants.v013fac63de5c8640f6d2de5a0924b6be[i];
  this.v0875cd0d35de060fac2413e2561ed3e8 = _.round(AppConstants.ve81a9e8e143d6eff6a1b19bf2f791aa2[i] * (rnd.va7f5b666e153a7fd316b95fa2a8560ac() * .4 + .8), -3);
  this.v74deb2b793c4db4899b15cf94cf075e1 = AppConstants.v1d259387f3274a7359abaeaf01c1e51c[i];
  /** @type {number} */
  this.v99bab133a9816c776a02cbe170476589 = 0;
  /** @type {number} */
  this.vf7d3d034ca35aec2c0c38636591c3dd4 = 0;
  /** @type {string} */
  this.vbce1fe82be4d9994b33ec78fb6bfb41e = U.ve0c5395554f0bcfb7e7b5f8ba522a850(rnd) + " " + U.vb3d722809deb756899a08b1ef461c522(rnd);
  A.vfe1c4eaec8ec40f848f9772196c532d3().va0ac839c28046fa480f1d13bf9d250d6(this, vfe39ece2a85b3dcccfd78b6d58d6c9de.vb4f7d08573430f974708d7e4a29b9eb2);
  this.response;
}, v55981732dc73c4f6196aee61b69fff5c.prototype.va63b7580e46e46822add1b037d7af54b = function(arr) {
  /** @type {string} */
  this.response = "";
  /** @type {number} */
  var uboard = 1 - A.vfe1c4eaec8ec40f848f9772196c532d3().v02f93565126d56d279f100e7ca2660b4[0].v6e8e541cc783a275879873c04e1c35bd() / AppConstants.vec069d60fe965032ee1f618c5fa6ac54;
  this.v99bab133a9816c776a02cbe170476589++;
  /** @type {string} */
  var c = "";
  switch(this.v99bab133a9816c776a02cbe170476589) {
    case 1:
      break;
    case 2:
      c = U.vc0e6c88f8413e92781b652ae2786391a("Make the next offer good. I don't have a lot of time for this.");
      break;
    case 3:
      c = U.vc0e6c88f8413e92781b652ae2786391a("I'll give you one more shot. Make it a good one!");
      break;
    case 4:
      c = U.vc0e6c88f8413e92781b652ae2786391a("Please do not contact me again until next season.");
      break;
    default:
      this.response = U.vc0e6c88f8413e92781b652ae2786391a("We are finished evaluating your proposals for this season. Please contact us again next season.");
      return false;
  }
  /** @type {number} */
  var styleStr = 0;
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.vc69a0bfea595701b9e74a61d65c52ad6.length; i++) {
    if (arr[i] > -1) {
      styleStr = styleStr + arr[i];
    }
  }
  if (styleStr + this.vf7d3d034ca35aec2c0c38636591c3dd4 > this.v0875cd0d35de060fac2413e2561ed3e8) {
    return this.vf7d3d034ca35aec2c0c38636591c3dd4 == 0 ? this.response = U.vc0e6c88f8413e92781b652ae2786391a("That's too rich for me. I can't spend that much of my annual budget in just one place.") : this.response = U.vc0e6c88f8413e92781b652ae2786391a("I'm already spending {0} with you this year. I can't afford to spend that much more with you.", U.v008da4424a5701b4ad40bb9d6adc0daf(this.vf7d3d034ca35aec2c0c38636591c3dd4)), this.response += "<br>" + c, false;
  }
  /** @type {!Object} */
  var b = new Object;
  /** @type {string} */
  b.v884323429f8492ebef496ecaa9c3bd47 = "";
  /** @type {number} */
  b.v4c0613422cfd09eea3969a82e74f6f1c = 0;
  /** @type {number} */
  b.vb5f7f35d79b68b209c6205aba36db9fb = 0;
  /** @type {number} */
  i = 0;
  for (; i < AppConstants.vc69a0bfea595701b9e74a61d65c52ad6.length; i++) {
    if (arr[i] > -1) {
      this.va430a7a48a1a747d0f71f2a899e75d08(arr[i], AppConstants.v41d5b410e9a302c7922003bf33177e3e[i], uboard, AppConstants.vc69a0bfea595701b9e74a61d65c52ad6[i], b);
    }
  }
  /** @type {string} */
  var contentType = "";
  if (b.v884323429f8492ebef496ecaa9c3bd47 != "") {
    /** @type {string} */
    contentType = b.v884323429f8492ebef496ecaa9c3bd47.substring(0, b.v884323429f8492ebef496ecaa9c3bd47.length - 5);
  }
  /** @type {number} */
  var d = b.vb5f7f35d79b68b209c6205aba36db9fb / Math.max(b.v4c0613422cfd09eea3969a82e74f6f1c, 1);
  return contentType != "" && b.vb5f7f35d79b68b209c6205aba36db9fb >= 0 ? (this.response = U.vc0e6c88f8413e92781b652ae2786391a("I like that offer, but I'm not stuck on the {0}. Lower the price of that or take it out.", contentType), this.response += "<br>" + c, false) : b.vb5f7f35d79b68b209c6205aba36db9fb <= 0 ? (this.response = U.vc0e6c88f8413e92781b652ae2786391a("You're close but not quite there."), d < -.2 && (this.response = U.vc0e6c88f8413e92781b652ae2786391a("I don't like the offer very much. You'll have to do better than that.")),
  d < -.5 && (this.response = U.vc0e6c88f8413e92781b652ae2786391a("That offer stinks!. You need to come up with a much better offer.")), this.v48c4954558ad26915e5f96704c2c39c7 < .33 && (this.response += U.vc0e6c88f8413e92781b652ae2786391a(" And frankly, given my business, I'm not that interested in advertising at your games.")), this.response += "<br>" + c, false) : b.vb5f7f35d79b68b209c6205aba36db9fb > 0 ? (this.response = U.vc0e6c88f8413e92781b652ae2786391a("You drive a hard bargain, but I'll take it."),
  d > .2 && (this.response = U.vc0e6c88f8413e92781b652ae2786391a("That's a great offer. You've got my business!")), d > .5 && (this.response = U.vc0e6c88f8413e92781b652ae2786391a("Yippee!! I'll take it. That's an unbelievably good deal!")), this.vf7d3d034ca35aec2c0c38636591c3dd4 += styleStr, this.v99bab133a9816c776a02cbe170476589 = 5, true) : false;
}, v55981732dc73c4f6196aee61b69fff5c.prototype.va430a7a48a1a747d0f71f2a899e75d08 = function(dayNumber, i, e, f, data) {
  /** @type {number} */
  var RightOffset = this.v74deb2b793c4db4899b15cf94cf075e1 * e * i - dayNumber;
  if (RightOffset < 0) {
    data.v884323429f8492ebef496ecaa9c3bd47 += f.toLowerCase() + " and ";
  }
  data.vb5f7f35d79b68b209c6205aba36db9fb += RightOffset;
  data.v4c0613422cfd09eea3969a82e74f6f1c += i;
}, v55981732dc73c4f6196aee61b69fff5c.prototype.v651ad1a6065df201e85a0b2da71805e3 = function() {
  /** @type {number} */
  this.v99bab133a9816c776a02cbe170476589 = 0;
  /** @type {number} */
  this.vf7d3d034ca35aec2c0c38636591c3dd4 = 0;
}, va8050a0e7e7ce1bdbca32ed7d908183b.prototype = Object.create(Object.prototype), va8050a0e7e7ce1bdbca32ed7d908183b.prototype.constructor = va8050a0e7e7ce1bdbca32ed7d908183b, va8050a0e7e7ce1bdbca32ed7d908183b.prototype.vb31c03873111fe6ecf3ed53fda5c491d = function() {
  return "Sponsors";
}, va8050a0e7e7ce1bdbca32ed7d908183b.prototype.init = function() {
  this.v6df93cee8d46ebc1cd5d0ef23df99e6b = A.vfe1c4eaec8ec40f848f9772196c532d3().vcc7d9b1686328e2707f57a93fa3170e6();
  this.date = A.vfe1c4eaec8ec40f848f9772196c532d3().now;
}, v075d96bd9afa88bfc29df9a76858c9a6.prototype = Object.create(Object.prototype), v075d96bd9afa88bfc29df9a76858c9a6.prototype.constructor = v075d96bd9afa88bfc29df9a76858c9a6, v075d96bd9afa88bfc29df9a76858c9a6.vce4a0ae640e3f57af09f77fa469385a9 = function(a, b) {
  return a.v4c97ba091a1c793f8e3540e0470c67fe() > b.v4c97ba091a1c793f8e3540e0470c67fe() ? -1 : 1;
}, v075d96bd9afa88bfc29df9a76858c9a6.prototype.v4c97ba091a1c793f8e3540e0470c67fe = function() {
  return (this.v8f22857eac065a0c6662b19383c0d28b + this.vd8de30596f976e5afca84bb587b6bb41 / 2) / Math.max(1, this.v8f22857eac065a0c6662b19383c0d28b + this.va4695f9def13ccf66ad9ed6ae95a136c + this.vd8de30596f976e5afca84bb587b6bb41);
}, v075d96bd9afa88bfc29df9a76858c9a6.prototype.v6e8e541cc783a275879873c04e1c35bd = function() {
  return this.v8f22857eac065a0c6662b19383c0d28b + this.va4695f9def13ccf66ad9ed6ae95a136c + this.vd8de30596f976e5afca84bb587b6bb41;
}, v52b5b783e3ba5645ba556f8988087410.prototype = Object.create(Object.prototype), v52b5b783e3ba5645ba556f8988087410.prototype.constructor = v52b5b783e3ba5645ba556f8988087410, v52b5b783e3ba5645ba556f8988087410.vdef48fac8859c7c1f1965ce7194d2a82 = ["Quarterback", "Runningback", "Receiver", "Linebacker", "Defensiveback", "Kicker", "Punter"], v52b5b783e3ba5645ba556f8988087410.vae00930eb88b400eb8e5f8cacd7697ce = [["PCT", "INT"], ["YPC", "TD"], ["YPC", "TD"], ["TAC", "SAC"], ["TAC", "INT"], ["PCT", "LNG"],
["AVG", "HT"]], v52b5b783e3ba5645ba556f8988087410.v1efc2a5ca700033f8ac8461a9a6939ee = [["Pass completion percentage.<br>Higher is better.", "Interceptions thrown. Lower is better."], ["Yards per Carry.<br>Higher is better.", "Touchdowns scored. Higher is better."], ["Yards per Catch. Higher is better.", "Touchdowns scored. Higher is better."], ["Tackles made. Higher is better.", "Sacks of the quarterback. Higher is better."], ["Tackles made. Higher is better.", "Interceptions made. Higher is better."],
["Field goal percentage. Higher is better.", "Longest field goal. Higher is better."], ["Average length of punt. Higher is better.", "Hang time on punts. Higher is better."]], v52b5b783e3ba5645ba556f8988087410.prototype.init = function() {
  /** @type {string} */
  this.name = U.vc0078b2e15ae683aa2d317532e5de9be(A.vfe1c4eaec8ec40f848f9772196c532d3().random) + " " + U.vb3d722809deb756899a08b1ef461c522(A.vfe1c4eaec8ec40f848f9772196c532d3().random);
}, v52b5b783e3ba5645ba556f8988087410.prototype.v39f881891f4522456242ebe813a11508 = function() {
  switch(this.position) {
    case "Quarterback":
      return this.PCT * 50 - this.INT;
    case "Runningback":
      return this.YPC + this.TD / 4;
    case "Receiver":
      return this.YPC + this.TD / 4;
    case "Linebacker":
      return this.TAC + this.SAC;
    case "Defensiveback":
      return this.TAC + this.INT * 4;
    case "Kicker":
      return this.PCT + this.LNG / 1e3;
    case "Punter":
      return this.AVG + this.HT;
  }
}, v52b5b783e3ba5645ba556f8988087410.v2f1d356497654482a1a13d19c7a31a54 = function(a, b) {
  return a.v39f881891f4522456242ebe813a11508() > b.v39f881891f4522456242ebe813a11508() ? -1 : 1;
}, v52b5b783e3ba5645ba556f8988087410.v4ddabdd0488d21d26defd88ff7520c8c = function(a, b) {
  return a.v39f881891f4522456242ebe813a11508() > b.v39f881891f4522456242ebe813a11508() ? 1 : -1;
}, v52b5b783e3ba5645ba556f8988087410.vce334cc37b91d8942ad3528689b3549f = function(a, b) {
  return A.vfe1c4eaec8ec40f848f9772196c532d3().random.next(2) == 0 ? 1 : -1;
}, v52b5b783e3ba5645ba556f8988087410.vcb0fb308ed190d8ae6e29732b874abc2 = function(sclock, rclock) {
  return sclock.vdbe6b3e8a012a229f29f7f76683ed815 > rclock.vdbe6b3e8a012a229f29f7f76683ed815 ? 1 : -1;
}, v52b5b783e3ba5645ba556f8988087410.prototype.v772baa145b33086af202a834750a648f = function() {
  return this.position == "Defensiveback" || this.position == "Linebacker" ? 1 : this.position == "Quarterback" || this.position == "Runningback" || this.position == "Receiver" ? 0 : -1;
}, v32dbe0e583786dbc8efde99083590832.prototype = Object.create(Object.prototype), v32dbe0e583786dbc8efde99083590832.prototype.constructor = v32dbe0e583786dbc8efde99083590832, v32dbe0e583786dbc8efde99083590832.prototype.init = function() {
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; layer_i++) {
    /** @type {boolean} */
    this.includes[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i]] = true;
    /** @type {number} */
    this.va2e8685aaa26fc8be2f8ebb695e5f0ff[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i]] = 0;
    /** @type {number} */
    this.vf3e09cb39c9a11ba7b9739fd0c5e8bd8[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i]] = 0;
  }
}, v8f0ee361b1d63bf1a79eb16edf5933a1.prototype = Object.create(Object.prototype), v8f0ee361b1d63bf1a79eb16edf5933a1.prototype.constructor = v8f0ee361b1d63bf1a79eb16edf5933a1, ve277db3fa261248cc476bca441fc0aef.prototype = Object.create(Object.prototype), ve277db3fa261248cc476bca441fc0aef.prototype.constructor = ve277db3fa261248cc476bca441fc0aef, ve277db3fa261248cc476bca441fc0aef.prototype.init = function() {
  var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().random;
  this.v4d37e3a237cad1a1b32ec31fe574be6f = rnd.vc620340a78b452026a29f2ec05b4664f(8, 70);
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.biasFansYoung && this.v4d37e3a237cad1a1b32ec31fe574be6f >= 50) {
    this.v4d37e3a237cad1a1b32ec31fe574be6f = rnd.vc620340a78b452026a29f2ec05b4664f(8, 70);
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.biasFansYoungAndOld && this.v4d37e3a237cad1a1b32ec31fe574be6f >= 25 && this.v4d37e3a237cad1a1b32ec31fe574be6f <= 54) {
    this.v4d37e3a237cad1a1b32ec31fe574be6f = rnd.vc620340a78b452026a29f2ec05b4664f(8, 70);
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.biasFansOld && this.v4d37e3a237cad1a1b32ec31fe574be6f <= 45) {
    this.v4d37e3a237cad1a1b32ec31fe574be6f = rnd.vc620340a78b452026a29f2ec05b4664f(8, 70);
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.biasFansYoungAndMiddle && (this.v4d37e3a237cad1a1b32ec31fe574be6f >= 25 && this.v4d37e3a237cad1a1b32ec31fe574be6f <= 40 || this.v4d37e3a237cad1a1b32ec31fe574be6f > 55)) {
    this.v4d37e3a237cad1a1b32ec31fe574be6f = rnd.vc620340a78b452026a29f2ec05b4664f(8, 70);
  }
  if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 70) {
    this.v40b7158210ad8fbb3de700fb50b5c3e6 = rnd.vc620340a78b452026a29f2ec05b4664f(12e4, 6e4);
  }
  if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 55) {
    this.v40b7158210ad8fbb3de700fb50b5c3e6 = rnd.vc620340a78b452026a29f2ec05b4664f(105e3, 4e4);
  }
  if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 40) {
    this.v40b7158210ad8fbb3de700fb50b5c3e6 = rnd.vc620340a78b452026a29f2ec05b4664f(8e4, 2e4);
  }
  if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 25) {
    this.v40b7158210ad8fbb3de700fb50b5c3e6 = rnd.vc620340a78b452026a29f2ec05b4664f(6e4, 0);
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.biasIncomeMoreUniform && rnd.va7f5b666e153a7fd316b95fa2a8560ac() < .5) {
    this.v40b7158210ad8fbb3de700fb50b5c3e6 = rnd.vc620340a78b452026a29f2ec05b4664f(12e4, 0);
  }
  this.vffd75135c8fd0917e65c50fcd7305848 = rnd.next(2);
  this.distance = rnd.next(70);
  /** @type {number} */
  var b = 0;
  for (; b < 2; b++) {
    if (this.vffd75135c8fd0917e65c50fcd7305848 == 1) {
      if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 30) {
        this.v5a8d8d064b26e34f8298fcaffcfd5d73.vc2b55451d6b5a973b456d3ad090abf8d([0, 1][rnd.next(2)]);
      } else {
        this.v5a8d8d064b26e34f8298fcaffcfd5d73.vc2b55451d6b5a973b456d3ad090abf8d([3, 4][rnd.next(2)]);
      }
    } else {
      if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 30) {
        this.v5a8d8d064b26e34f8298fcaffcfd5d73.vc2b55451d6b5a973b456d3ad090abf8d([0, 2][rnd.next(2)]);
      } else {
        this.v5a8d8d064b26e34f8298fcaffcfd5d73.vc2b55451d6b5a973b456d3ad090abf8d([1, 4][rnd.next(2)]);
      }
    }
  }
  if (rnd.next(2) == 0) {
    this.v5a8d8d064b26e34f8298fcaffcfd5d73.vc2b55451d6b5a973b456d3ad090abf8d(rnd.next(4));
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.biasFansYoungAndMiddle) {
    if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 25) {
      /** @type {number} */
      this.v5a8d8d064b26e34f8298fcaffcfd5d73[0] = 3;
    }
    if (this.v4d37e3a237cad1a1b32ec31fe574be6f >= 40 && this.v4d37e3a237cad1a1b32ec31fe574be6f <= 54) {
      /** @type {number} */
      this.v5a8d8d064b26e34f8298fcaffcfd5d73[0] = 1;
    }
  }
  /** @type {number} */
  b = 0;
  for (; b < 1; b++) {
    if (this.vffd75135c8fd0917e65c50fcd7305848 == 1) {
      this.v6c96cc2c3c7f80bcae66e7160d82921e.vc2b55451d6b5a973b456d3ad090abf8d([0, 2, 3][rnd.next(2)]);
    } else {
      this.v6c96cc2c3c7f80bcae66e7160d82921e.vc2b55451d6b5a973b456d3ad090abf8d(1);
    }
  }
  this.v6c96cc2c3c7f80bcae66e7160d82921e.vc2b55451d6b5a973b456d3ad090abf8d(rnd.next(4));
}, ve277db3fa261248cc476bca441fc0aef.prototype.vca55342da19852da32cb28d1a22ce60c = function(data) {
  var fill = data.random;
  var self = {};
  self.date = data.date;
  /** @type {number} */
  var scrollOutsideX = 0;
  var time = A.vfe1c4eaec8ec40f848f9772196c532d3().now;
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().v1eab4bee75e197c02188c0130ba375c4, function(item) {
    if (item.cost < item.v0875cd0d35de060fac2413e2561ed3e8 && item.event == data && item.start <= time && item.end >= time && this.vc3effcd23d6a6b02fe9cbd1b1916754a(item) && fill.va7f5b666e153a7fd316b95fa2a8560ac() < item.v22570d004e4ad923cabf52b851981bf4()) {
      scrollOutsideX++;
      item.clicks++;
      /** @type {number} */
      var dx = Math.min(AppConstants.ve05a4ce74a9299e609b4471bce0365bc, item.v0875cd0d35de060fac2413e2561ed3e8 - item.cost);
      item.cost += dx;
      A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Social Media", dx, "Cash", data.v6df93cee8d46ebc1cd5d0ef23df99e6b);
    }
  });
  /** @type {number} */
  var scrollOutsideY = 0;
  /** @type {number} */
  var narrowAvrg = 7e3;
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.vfcc3427da6e572db73c24b90a471fa1a.length; i++) {
    var j = AppConstants.vfcc3427da6e572db73c24b90a471fa1a[i];
    if (A.vfe1c4eaec8ec40f848f9772196c532d3().media[j] > 0 && this.ve03f515b04ea6018f027b7a6a964a9d1("Media", fill)[0] == i && (fill.va7f5b666e153a7fd316b95fa2a8560ac() < A.vfe1c4eaec8ec40f848f9772196c532d3().media[j] / narrowAvrg || fill.va7f5b666e153a7fd316b95fa2a8560ac() < A.vfe1c4eaec8ec40f848f9772196c532d3().media[j] / narrowAvrg)) {
      scrollOutsideY++;
    }
  }
  /** @type {number} */
  self.v951aac4f6f63f6d1797e602ce4dd0558 = 0;
  /** @type {number} */
  var index = 0;
  if (data.vcac8a657fea238de145894896ba75413() == "Game" && this.v6c96cc2c3c7f80bcae66e7160d82921e.contains(1) && index++, data.vcac8a657fea238de145894896ba75413() == "Concert") {
    if (!A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763) {
      if (this.v5a8d8d064b26e34f8298fcaffcfd5d73.contains(data.vfbdfe532170e5dbbf837f354b26a815a)) {
        index++;
      }
    } else {
      var BDA = A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763[data.v878219b9ebcd3e5fc7b70aeaa13380ca];
      /** @type {number} */
      var value = 0;
      /** @type {number} */
      i = 0;
      for (; i < BDA.v45a55b3e83b5cd21bb3ad135c1e75c2c.length; i++) {
        if (this.v5a8d8d064b26e34f8298fcaffcfd5d73.contains(i) && BDA.v45a55b3e83b5cd21bb3ad135c1e75c2c[i] > value) {
          value = BDA.v45a55b3e83b5cd21bb3ad135c1e75c2c[i];
        }
      }
      var state = BDA.v9f97552a2fdde123fee2ebe6c9910ed8[this.ve03f515b04ea6018f027b7a6a964a9d1("AgeCohort")[0]];
      var sector = BDA.ve9f52252a76af59345cd922de0d1f492[this.vffd75135c8fd0917e65c50fcd7305848];
      /** @type {number} */
      var dir = 0;
      var caretPosNew = this.ve03f515b04ea6018f027b7a6a964a9d1("Distance")[0];
      i = caretPosNew;
      for (; i < 4; i++) {
        dir = dir + BDA.v2ef7b3aa37ff9b5e3208bfc76e36039c[i];
      }
      var Math = A.v50156c5418a59f9fb151a3917f9026dd().bandMatchWeights;
      /** @type {number} */
      index = value * Math.vfbdfe532170e5dbbf837f354b26a815a + state * Math.v4d37e3a237cad1a1b32ec31fe574be6f + sector * Math.vffd75135c8fd0917e65c50fcd7305848 + dir * Math.ve75f5c321c63ab6fa35158ff3713014a;
      /** @type {number} */
      self.v951aac4f6f63f6d1797e602ce4dd0558 = index * ((fill.va7f5b666e153a7fd316b95fa2a8560ac() - .5) * A.v50156c5418a59f9fb151a3917f9026dd().randomnessOfBandAppeal + .05);
      /** @type {number} */
      index = index + self.v951aac4f6f63f6d1797e602ce4dd0558;
      /** @type {number} */
      index = index - A.v50156c5418a59f9fb151a3917f9026dd().tightnessOfBandMatchRequired;
    }
  }
  /** @type {number} */
  self.vc20812bcfaa4e4fb8a74d327f917f437 = index;
  self.v4237e273d69279d9fd67d483c6b090a3 = value;
  self.v32fdad573c71c3074d965944797f80e6 = state;
  self.v1767b9c53011d52c922beaa52886aeee = sector;
  self.ve75f5c321c63ab6fa35158ff3713014a = dir;
  if (A.v87b8393064cbfa8977b32cec36a69d86().v58850cf11697d83de198ad43938d6231.length > 0 && self.date != A.v87b8393064cbfa8977b32cec36a69d86().v58850cf11697d83de198ad43938d6231[0].date) {
    /** @type {!Array} */
    A.v87b8393064cbfa8977b32cec36a69d86().v58850cf11697d83de198ad43938d6231 = [];
  }
  A.v87b8393064cbfa8977b32cec36a69d86().v58850cf11697d83de198ad43938d6231.vc2b55451d6b5a973b456d3ad090abf8d(self);
  self.v432e521fcdee1770eeb096f74be4769d = A.v50156c5418a59f9fb151a3917f9026dd().likelihoodOfPurchaseWithoutAdvertising;
  /** @type {number} */
  self.vcd6e06105fab6138372d55320ce7bd54 = scrollOutsideX * (data.vcac8a657fea238de145894896ba75413() == "Concert" ? A.v50156c5418a59f9fb151a3917f9026dd().purchaseSocialEffectMultiplierForConcerts : A.v50156c5418a59f9fb151a3917f9026dd().purchaseSocialEffectMultiplierForGames);
  /** @type {number} */
  self.v802dbabf9ab7de687dd50d05ece882a8 = scrollOutsideY * A.v50156c5418a59f9fb151a3917f9026dd().purchaseTraditionalEffectMultiplier;
  /** @type {boolean} */
  var clipHeight = false;
  if (index > 0) {
    var naturalHeight = self.v432e521fcdee1770eeb096f74be4769d + self.vcd6e06105fab6138372d55320ce7bd54 + self.v802dbabf9ab7de687dd50d05ece882a8;
    /** @type {number} */
    naturalHeight = naturalHeight / (Math.pow(A.vfe1c4eaec8ec40f848f9772196c532d3().v9cc5dada5dd98bfe0c0f01643b0eb514(data.v878219b9ebcd3e5fc7b70aeaa13380ca), 2) + 1);
    /** @type {boolean} */
    clipHeight = fill.va7f5b666e153a7fd316b95fa2a8560ac() < naturalHeight;
    /** @type {boolean} */
    self.v6c354fd68d7182142e3528988c40de19 = clipHeight;
  }
  return clipHeight;
}, ve277db3fa261248cc476bca441fc0aef.prototype.vc3effcd23d6a6b02fe9cbd1b1916754a = function(item) {
  var end = this.v76742ae7d2b97a7f9f1a380126a24928(this.v6c96cc2c3c7f80bcae66e7160d82921e, .5);
  var y = this.v76742ae7d2b97a7f9f1a380126a24928(this.v5a8d8d064b26e34f8298fcaffcfd5d73, .3);
  var view = this;
  var r = view.intersects(item.v6c96cc2c3c7f80bcae66e7160d82921e, end);
  var l = view.intersects(item.v5a8d8d064b26e34f8298fcaffcfd5d73, y);
  var a = view.intersects(item.v14db5ac53caa416a7f67ea32f3ae63c8, view.ve03f515b04ea6018f027b7a6a964a9d1("AgeCohort"));
  var b = item.vfb4f738833e89b79b327b9e0da81537b.contains(view.vffd75135c8fd0917e65c50fcd7305848);
  var aV = view.intersects(item.v5f7b1f6d9e3cf00776e29bf69928af05, view.ve03f515b04ea6018f027b7a6a964a9d1("Distance"));
  return r && l && a && b && aV;
}, ve277db3fa261248cc476bca441fc0aef.prototype.vc7947bc5913773d9c6afe941c6d672a6 = function(d) {
  /** @type {number} */
  var duration = this.v40b7158210ad8fbb3de700fb50b5c3e6 / A.v50156c5418a59f9fb151a3917f9026dd().ticketPriceToIncomeRatio;
  if (d.vcac8a657fea238de145894896ba75413() == "Concert") {
    /** @type {number} */
    duration = duration * (d.v26f32b31080a6a89beb63abd4f3f4d40 / AppConstants.v1b7f10a936e1b86d4f78b437f1d3c144);
  }
  if (A.v50156c5418a59f9fb151a3917f9026dd().ignoreBudget) {
    /** @type {number} */
    duration = Number.MAX_VALUE;
  }
  var a = this.vdc7504be3733ac39f89c1333cf57edff(duration, d);
  var expRecords = A.v87b8393064cbfa8977b32cec36a69d86().v58850cf11697d83de198ad43938d6231;
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.considerPlayerFanAppeal) {
    var prop = this.v1fd27f169f03ce65425fd4cbcf83f474();
    if (prop != undefined) {
      d.comment("Personnel", U.vc0e6c88f8413e92781b652ae2786391a("I can't believe they have {0} on this team. I'm not giving them any of my money.", prop.name));
      /** @type {boolean} */
      expRecords[expRecords.length - 1].v9b2bbd7a09bc4fafb86e8f28abd582c1 = true;
      return;
    }
  }
  if (a != null) {
    d.v54abb4e4bc74d5f47568dd1e0a3bfd53[a.x][a.y]++;
    var QueryLanguageComponent = d.ticketPrices[a.x][A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.vb28200a339b4d53ffea64d945d2b094f(a.y)];
    A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Cash", QueryLanguageComponent, "Ticket Sales", d.v6df93cee8d46ebc1cd5d0ef23df99e6b);
    d.v7da70da00b671455fcbb79c143c989fa.v7db28d9c9c03cdd67e696332c8ee1ca3++;
    /** @type {boolean} */
    expRecords[expRecords.length - 1].v14adc4304cb7f5f8d57fc4d883325d76 = true;
  } else {
    d.v7da70da00b671455fcbb79c143c989fa.veee4e86782e3e33336ac7390d3c67430++;
  }
}, ve277db3fa261248cc476bca441fc0aef.prototype.v1fd27f169f03ce65425fd4cbcf83f474 = function() {
  /** @type {!Array} */
  var order = [];
  return _.forEach(A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971, function(b) {
    if (b.v9d53fa0e2c7e450eeb138d587ae24210 < 0 && A.vfe1c4eaec8ec40f848f9772196c532d3().random.va7f5b666e153a7fd316b95fa2a8560ac() < -b.v9d53fa0e2c7e450eeb138d587ae24210) {
      order.vc2b55451d6b5a973b456d3ad090abf8d(b);
    }
  }), order.length > 0 ? order[A.vfe1c4eaec8ec40f848f9772196c532d3().random.next(order.length)] : undefined;
}, ve277db3fa261248cc476bca441fc0aef.prototype.vdc7504be3733ac39f89c1333cf57edff = function(val, el) {
  /** @type {number} */
  var aaWidth = -1e7;
  /** @type {null} */
  var tmp = null;
  var r = el.random;
  /** @type {boolean} */
  var j = false;
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.MoveDown == 1 && r.va7f5b666e153a7fd316b95fa2a8560ac() < A.vfe1c4eaec8ec40f848f9772196c532d3().vd61bb1e43a2872efc3e582a1ff6c2437 / (1 + A.vfe1c4eaec8ec40f848f9772196c532d3().va1628170f17b5f33654bfa54257c8d67 + A.vfe1c4eaec8ec40f848f9772196c532d3().vd61bb1e43a2872efc3e582a1ff6c2437)) {
    /** @type {boolean} */
    j = true;
  }
  var a = el.v477cc8dd303fa6381868a595da01ef59();
  for (; a < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; a++) {
    /** @type {number} */
    var s = 0;
    for (; s < AppConstants.vfb1d103d47b20eec473331f8512352c5; s++) {
      /** @type {number} */
      var i = 0;
      if ((s < 3 || s > 8) && (i = 1), el.v54abb4e4bc74d5f47568dd1e0a3bfd53[a][s] < AppConstants.vb521784636f5e0dc01ece715253c9df2 && el.ticketPrices[a][i] < val) {
        /** @type {number} */
        var tw = 15 - 3 * a - Math.abs(5.5 - s);
        var w = tw + r.va7f5b666e153a7fd316b95fa2a8560ac();
        if (j) {
          /** @type {number} */
          w = -el.ticketPrices[a][i] + tw / 1e3;
        }
        if (A.v50156c5418a59f9fb151a3917f9026dd().ignoreBudget) {
          /** @type {number} */
          w = -el.ticketPrices[a][i] * r.va7f5b666e153a7fd316b95fa2a8560ac();
        }
        if (w > aaWidth) {
          aaWidth = w;
          tmp = new Point(a, s);
        }
      }
    }
  }
  return tmp;
}, ve277db3fa261248cc476bca441fc0aef.prototype.ve03f515b04ea6018f027b7a6a964a9d1 = function(name, target) {
  var a;
  switch(name) {
    case "AgeCohort":
      /** @type {!Array} */
      a = [3];
      if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 55) {
        /** @type {!Array} */
        a = [2];
      }
      if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 40) {
        /** @type {!Array} */
        a = [1];
      }
      if (this.v4d37e3a237cad1a1b32ec31fe574be6f < 25) {
        /** @type {!Array} */
        a = [0];
      }
      break;
    case "IncomeCohort":
      /** @type {!Array} */
      a = [U.v40335ed9d0c0e65fe476d070f9bf3c72(Math.floor(this.v40b7158210ad8fbb3de700fb50b5c3e6 / 25e3), 0, 4)];
      break;
    case "Prices":
      /** @type {number} */
      var candidatesWidth = this.v40b7158210ad8fbb3de700fb50b5c3e6 / A.v50156c5418a59f9fb151a3917f9026dd().ticketPriceToIncomeRatio;
      /** @type {!Array} */
      a = [U.v40335ed9d0c0e65fe476d070f9bf3c72(Math.floor(candidatesWidth / 20), 0, 5)];
      break;
    case "Gender":
      /** @type {!Array} */
      a = [this.vffd75135c8fd0917e65c50fcd7305848];
      break;
    case "Genre":
      var indexLookupKey = target.next(this.v5a8d8d064b26e34f8298fcaffcfd5d73.length);
      /** @type {!Array} */
      a = [this.v5a8d8d064b26e34f8298fcaffcfd5d73[indexLookupKey]];
      break;
    case "Interests":
      indexLookupKey = target.next(this.v6c96cc2c3c7f80bcae66e7160d82921e.length);
      /** @type {!Array} */
      a = [this.v6c96cc2c3c7f80bcae66e7160d82921e[indexLookupKey]];
      break;
    case "Distance":
      /** @type {!Array} */
      a = [Math.floor((this.distance + 10) / 20)];
      break;
    case "Media":
      /** @type {!Array} */
      a = [1];
      if (this.ve03f515b04ea6018f027b7a6a964a9d1("Interests", target)[0] == 1) {
        /** @type {!Array} */
        a = [1];
      } else {
        if (this.v5a8d8d064b26e34f8298fcaffcfd5d73.contains(1) || this.v5a8d8d064b26e34f8298fcaffcfd5d73.contains(3)) {
          /** @type {!Array} */
          a = [2];
        } else {
          if (this.v5a8d8d064b26e34f8298fcaffcfd5d73.contains(4)) {
            /** @type {!Array} */
            a = [0];
          }
        }
      }
      break;
    default:
      throw new Error("Cannot handle survey question." + name);
  }
  return a;
}, ve277db3fa261248cc476bca441fc0aef.prototype.intersects = function(a, b) {
  /** @type {number} */
  var i = 0;
  for (; i < a.length; i++) {
    if (b.contains(a[i])) {
      return true;
    }
  }
  return false;
}, ve277db3fa261248cc476bca441fc0aef.prototype.v76742ae7d2b97a7f9f1a380126a24928 = function(b, delta) {
  /** @type {!Array} */
  var TABLE = [];
  /** @type {number} */
  var x = 0;
  for (; x < b.length * delta; x++) {
    TABLE.vc2b55451d6b5a973b456d3ad090abf8d(b[(x + this.distance) % b.length]);
  }
  return TABLE;
}, v5c7834d87a4980303267c4128a34128d.prototype = Object.create(v3cc232995592894dd6b3cea55d7d7bdb.prototype), v5c7834d87a4980303267c4128a34128d.prototype.constructor = v5c7834d87a4980303267c4128a34128d, v3cc232995592894dd6b3cea55d7d7bdb.prototype.vea44a90636cb57f56a9e77292688e585 = function(b) {
}, v5c7834d87a4980303267c4128a34128d.prototype.vc9782ece374209e892894042072e3470 = function(code, name, submissions) {
  /** @type {!Object} */
  this.v078daa8797f388906b1daecf411fd2b0 = submissions;
  this.v3470a58fa3eb785de8f997c3e53d3c03 = submissions.length;
  /** @type {string} */
  var lightCss = "<thead><tr>";
  /** @type {string} */
  lightCss = lightCss + "<th style='min-width:165px'>&nbsp;</th>";
  /** @type {number} */
  var i = 0;
  for (; i < this.v078daa8797f388906b1daecf411fd2b0.length; i++) {
    var oembedView = this.v078daa8797f388906b1daecf411fd2b0[i];
    /** @type {string} */
    lightCss = lightCss + ("<th style='min-width:65px'>" + oembedView.vb31c03873111fe6ecf3ed53fda5c491d() + "</th>");
  }
  /** @type {string} */
  lightCss = lightCss + "</tr></thead>";
  /** @type {number} */
  i = 0;
  for (; i < code.length; i++) {
    lightCss = lightCss + this.vd06accde9083b26d6101db7a87fa0d0a(code[i], name, false);
  }
  return lightCss;
}, v5c7834d87a4980303267c4128a34128d.prototype.v431e63681e232208f33243663f4eb126 = function(u, d, lazyLayout) {
  /** @type {string} */
  var x = "";
  /** @type {string} */
  x = x + ("<tr><td>" + this.vc74672f7b0ac8e67e7bfab796b3bd533(u.v26a49f9685192d739033d02fff40b9fd()));
  if (lazyLayout) {
    /** @type {string} */
    x = x + (this.vc74672f7b0ac8e67e7bfab796b3bd533(1) + "Total " + u.v6c665ba029eb89c335acd4951384045b + "</td>");
  } else {
    /** @type {string} */
    x = x + (this.vf0fe2984cc7bbac16ee41e9f76d31fac(u) + "</td>");
  }
  /** @type {string} */
  var c = "";
  if (d) {
    /** @type {string} */
    c = "border-bottom:1px solid #000000;";
  }
  if (u.v6c665ba029eb89c335acd4951384045b == "Profit") {
    /** @type {string} */
    c = "border-bottom:3px double #000000;";
  }
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < this.v078daa8797f388906b1daecf411fd2b0.length; layer_i++) {
    var layer = this.v078daa8797f388906b1daecf411fd2b0[layer_i];
    var f = this.vabe5369fddac296adb56cc7a33e9265f(u.v6c665ba029eb89c335acd4951384045b, layer.v6df93cee8d46ebc1cd5d0ef23df99e6b);
    /** @type {string} */
    x = x + ("<td style='text-align:right;" + c + "'>" + U.v26fd40d142e5f4ab82084c80bba46f53(f) + "</td>");
  }
  return x = x + "</tr>", x;
}, v5c7834d87a4980303267c4128a34128d.prototype.vb5b70e54abf6b9d548422187c10b9af5 = function() {
  /** @type {number} */
  var rightString = 0;
  var monitoringResult = this.v31f01af92c29ad23170a09284f213eb2("Cash");
  /** @type {number} */
  var i = 0;
  for (; i < monitoringResult.v1fbb9f87b3a9b049619870461fcf1fd5.length; i++) {
    rightString = rightString + monitoringResult.v1fbb9f87b3a9b049619870461fcf1fd5[i];
  }
  return rightString;
}, v9174ed493af6c02d7f2db29ea8a67f80.prototype = Object.create(vab9f4aed6a0c608da64294e108ceb50c.prototype), v9174ed493af6c02d7f2db29ea8a67f80.prototype.constructor = v9174ed493af6c02d7f2db29ea8a67f80, v9174ed493af6c02d7f2db29ea8a67f80.prototype.v075a828610f3539bd644a217b12b95c5 = function() {
  var d = A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb5b70e54abf6b9d548422187c10b9af5();
  if (d < 0) {
    A.v87b8393064cbfa8977b32cec36a69d86().vddaf63a727fee74679d504b575b2220b("You have run out of cash. This means your sim is over. That's all part of the learning process!", true);
    return;
  }
  if (!A.vfe1c4eaec8ec40f848f9772196c532d3().settings.SuppressCashWarning && d < U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(AppConstants.vdabcd80f09042d4c53d86e04149dc8b7) && App.v0b80be0fe683ced875570d0901cb9a08.addDays(14) < A.vfe1c4eaec8ec40f848f9772196c532d3().now && (A.v87b8393064cbfa8977b32cec36a69d86().v559f9caa6b11ab158a557efde93704db(U.vc0e6c88f8413e92781b652ae2786391a("You are running low on cash! Proceed carefully. If you run out of cash, the sim is over.")), App.v0b80be0fe683ced875570d0901cb9a08 =
  A.vfe1c4eaec8ec40f848f9772196c532d3().now), A.vfe1c4eaec8ec40f848f9772196c532d3().v6f7675c33a5ad05491d4a1542c66621e != undefined && A.vfe1c4eaec8ec40f848f9772196c532d3().now >= A.vfe1c4eaec8ec40f848f9772196c532d3().v6f7675c33a5ad05491d4a1542c66621e) {
    var Date = A.vfe1c4eaec8ec40f848f9772196c532d3();
    var c = Date.v02f93565126d56d279f100e7ca2660b4[0];
    var val = Date.now.getFullYear();
    var topicC = U.vc0e6c88f8413e92781b652ae2786391a("Congratulations. You have completed the {0} season with a record of {1}-{2}-{3} and season profits of {4}. <br><br>You have now jumped forward in time and are just over a week away from your first game of the next season!", [val, c.v8f22857eac065a0c6662b19383c0d28b, c.va4695f9def13ccf66ad9ed6ae95a136c, c.vd8de30596f976e5afca84bb587b6bb41, U.v008da4424a5701b4ad40bb9d6adc0daf(Date.vfa07d262205646e6a7f5064eeefdefe6(val))]);
    Date.v8a0266d567dcb1515040d7feeec1bc3b();
    this.v183afea46503c10c12e4174de091e222(A.vfe1c4eaec8ec40f848f9772196c532d3().v6f7675c33a5ad05491d4a1542c66621e);
    A.v87b8393064cbfa8977b32cec36a69d86().v559f9caa6b11ab158a557efde93704db(topicC);
    return;
  }
  /** @type {number} */
  var popupIndex = A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00.length - 1;
  for (; popupIndex >= 0; popupIndex--) {
    if (A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00[popupIndex].date < A.vfe1c4eaec8ec40f848f9772196c532d3().now.addDays(A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad)) {
      A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00.vca48a4d192a1c3fdc8f15c910420fc7e(popupIndex);
    }
  }
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().settings.WarnOnUnticketedEvents) {
    vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().events, function(todoInfo) {
      if (todoInfo.date.v976c06c7cb040fb18b380e5c8a8bb6c4(A.vfe1c4eaec8ec40f848f9772196c532d3().now.addDays(A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad + 1)) && !todoInfo.v413fdf1809982118e1b70795610a9501) {
        A.v87b8393064cbfa8977b32cec36a69d86().v559f9caa6b11ab158a557efde93704db(U.vc0e6c88f8413e92781b652ae2786391a("Warning: Customers want to start buying tickets to your {0} on {1}, but you have not set prices. Customers cannot buy tickets until you set ticket prices.", [todoInfo.vcac8a657fea238de145894896ba75413().toLowerCase(), todoInfo.date.v3d50f6a38b9e18ec7d6869a9c756a637()]));
      }
    });
  }
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().events, function(a) {
    if (a.date < A.vfe1c4eaec8ec40f848f9772196c532d3().now.addDays(A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad) && a.v8ab1052c00d6ecac3345531c828c014f() < 1 && a.v413fdf1809982118e1b70795610a9501) {
      this.v7a0960e4b474123f617e63e1de85769d(a, a.v3eb83ec31bc149b290e3ce618bca2724 * a.v4557aa0e3cb1316780c8eb7bcd42ca5e() / AppConstants.v49c8898981d3980f5f283dd53a9b8963 / A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad * a.v697b5e24e5187ef2bddda37104f6ef45());
    }
  });
}, v9174ed493af6c02d7f2db29ea8a67f80.prototype.v7a0960e4b474123f617e63e1de85769d = function(f, clientHeight) {
  var video = A.vfe1c4eaec8ec40f848f9772196c532d3().media;
  var i = video["Print Media"] + video["TV/Cable"] + video.Radio;
  /** @type {number} */
  i = i / 7;
  A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Traditional Media", i, "Cash", f.v6df93cee8d46ebc1cd5d0ef23df99e6b);
  var r = f.random;
  var g = A.vfe1c4eaec8ec40f848f9772196c532d3().v02c54057b3494e305c7036bdac0cfbfe.length;
  /** @type {number} */
  var targetOffsetHeight = 0;
  for (; targetOffsetHeight < clientHeight; targetOffsetHeight++) {
    var bAnimator = A.vfe1c4eaec8ec40f848f9772196c532d3().v02c54057b3494e305c7036bdac0cfbfe[r.next(g)];
    if (bAnimator.vca55342da19852da32cb28d1a22ce60c(f)) {
      bAnimator.vc7947bc5913773d9c6afe941c6d672a6(f);
    }
  }
}, v9174ed493af6c02d7f2db29ea8a67f80.prototype.v27ab2a6a25e266c079d23d2ce787ff7d = function() {
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().events, function(e) {
    if (e.state == Event.vba5c77d03ab7c62a3552f10c5cfb05a9 && e.date.getTime() < A.vfe1c4eaec8ec40f848f9772196c532d3().now.getTime()) {
      A.vfe1c4eaec8ec40f848f9772196c532d3().settings.SimulatedSecondsPerStep = AppConstants.vf44e562edd0759bcb2d6c7e389a43e2a;
      /** @type {!Object} */
      A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3 = e;
      /** @type {number} */
      e.state = Event.v749c70cd527f4457494bb32a2cd947e0;
      var c = e.random;
      var spec = A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099;
      var g_ui = A.vfe1c4eaec8ec40f848f9772196c532d3().vdadb3802808c4dad6e637cd29bd9e7b5;
      var rnd = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019;
      /** @type {number} */
      var ii = 0;
      for (; ii < g_ui.vb8d49b229151f0596040f0ff3d4aeed1; ii++) {
        spec.vb4c9cca6eb90b6fb0855241e02fbba30("Satellite Lots ", AppConstants.vc1a65975468de96cd51e2d00e887bf09, "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b);
        /** @type {number} */
        var ii = 0;
        for (; ii < g_ui.v825d8229dbe774de006ff34938efc9b4; ii++) {
          A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.vb8d49b229151f0596040f0ff3d4aeed1[ii].v6e0b030bb61c47949043afa5dff8db29(false);
          spec.vb4c9cca6eb90b6fb0855241e02fbba30("Busses", AppConstants.v94e8542c080678d95bb9c696755b06a9, "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b);
        }
      }
      /** @type {number} */
      ii = 0;
      for (; ii < 4; ii++) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v2ecbf47484206af649eebb5fe0d5f0e0.v6e0b030bb61c47949043afa5dff8db29(true);
      }
      var q = A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e;
      var params = A.vfe1c4eaec8ec40f848f9772196c532d3().v9f7821688406340f747104ce90941912;
      /** @type {number} */
      var j = 0;
      vee8206b276787f6d065f935010a51f0c(this, AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44, function(i) {
        if (params.includes[i]) {
          spec.vb4c9cca6eb90b6fb0855241e02fbba30(i + " ", params.vf3e09cb39c9a11ba7b9739fd0c5e8bd8[i] * AppConstants.v6a97499fbe0b2c1cf3fd63476ac38da0[j], "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b);
          /** @type {number} */
          e.v19628441547527e7756f5ca10c16c9f4[i] = params.vf3e09cb39c9a11ba7b9739fd0c5e8bd8[i] / Math.max(params.v593f1cd1f022086bd87c3de3db987bd8, 1);
          e.vda1b1f9e42e1aee5b7c3cad5f97f53ef[i] = e.v19628441547527e7756f5ca10c16c9f4[i];
        }
        j++;
      });
      e.vda4c8b43263bc1fa514b8e93a0bb8419 = params.v593f1cd1f022086bd87c3de3db987bd8;
      /** @type {number} */
      var value = 0;
      for (; value < params.vc5f3cc9e0931f0e39cae9028746c2eda; value++) {
        var k = new v6fb33bd266b04b0ea62af001cd60d130;
        k.init(value);
        q.vfa76ca9c44ecc972ec2786890f439796.vc2b55451d6b5a973b456d3ad090abf8d(k);
      }
      spec.vb4c9cca6eb90b6fb0855241e02fbba30("Concession Workers", AppConstants.vca8ae6e55aec490d5a97a8938dcd4e6a * params.v593f1cd1f022086bd87c3de3db987bd8 * params.vc5f3cc9e0931f0e39cae9028746c2eda * AppConstants.v7534e27db5dc624a879d255854c308a7 * AppConstants.v806298d0971e753dccf10a897084f1d4, "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b);
      spec.vb4c9cca6eb90b6fb0855241e02fbba30("Concession Stands", params.v593f1cd1f022086bd87c3de3db987bd8 * AppConstants.v95c1f492b98bc48117e716dd8affec4f, "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b);
      /** @type {number} */
      var p = 0;
      if (vee8206b276787f6d065f935010a51f0c(this, AppConstants.v274a349231cba17047a0198b2cef8a6c, function(i) {
        spec.vb4c9cca6eb90b6fb0855241e02fbba30(i, AppConstants.ve60a6cbf837109947e2a4ab24519035a[p] * A.vfe1c4eaec8ec40f848f9772196c532d3().staffing[i] * AppConstants.v7534e27db5dc624a879d255854c308a7 * AppConstants.v806298d0971e753dccf10a897084f1d4, "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b);
        p++;
      }), e.vcac8a657fea238de145894896ba75413() == "Game" && vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971, function(prop) {
        spec.vb4c9cca6eb90b6fb0855241e02fbba30("Player Salaries", U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(prop.vdbe6b3e8a012a229f29f7f76683ed815) / AppConstants.vfa371ff1fe334e349e7626d4ecebbdce, "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b);
      }), spec.vb4c9cca6eb90b6fb0855241e02fbba30("Other Facility Fees", AppConstants.vf183dcdbf5eb8144ecf01959900a559e, "Cash", e.v6df93cee8d46ebc1cd5d0ef23df99e6b), e.v413fdf1809982118e1b70795610a9501) {
        /** @type {number} */
        var o = A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad / 3;
        /** @type {number} */
        var clientHeight = o * (e.v3eb83ec31bc149b290e3ce618bca2724 * e.v4557aa0e3cb1316780c8eb7bcd42ca5e()) / AppConstants.v49c8898981d3980f5f283dd53a9b8963 / A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad * e.v697b5e24e5187ef2bddda37104f6ef45();
        this.v7a0960e4b474123f617e63e1de85769d(e, clientHeight);
      }
      /** @type {number} */
      var n = 0;
      for (; n < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; n++) {
        /** @type {number} */
        var i = 0;
        for (; i < AppConstants.vfb1d103d47b20eec473331f8512352c5; i++) {
          /** @type {number} */
          value = 0;
          for (; value < e.v54abb4e4bc74d5f47568dd1e0a3bfd53[n][i]; value++) {
            var item = new v2b0bbff44f88e67381b9b655d66abefc;
            item.init();
            /** @type {number} */
            item.v171b78b7c1c220ad63fa32cc06cdf760 = n;
            /** @type {number} */
            item.vd8e189fd73437b363a2066fce1d8ce54 = i;
            A.vfe1c4eaec8ec40f848f9772196c532d3().v5bb5ddf013371c375e056861167c8a68(item, A.vfe1c4eaec8ec40f848f9772196c532d3().now.addMinutes(c.next(180)));
          }
        }
      }
      /** @type {number} */
      A.vfe1c4eaec8ec40f848f9772196c532d3().vd61bb1e43a2872efc3e582a1ff6c2437 = 0;
      /** @type {number} */
      A.vfe1c4eaec8ec40f848f9772196c532d3().va1628170f17b5f33654bfa54257c8d67 = 0;
    }
  });
}, v9174ed493af6c02d7f2db29ea8a67f80.prototype.v3c4241167008d6715b8ac67b4d3dd1ee = function() {
  var k = A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1;
  /** @type {number} */
  var type = 0;
  for (; type < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; type++) {
    /** @type {number} */
    var j = 0;
    for (; j < AppConstants.vfb1d103d47b20eec473331f8512352c5; j++) {
      /** @type {number} */
      k[type][j] = Math.max(0, k[type][j] - .05);
    }
  }
  var FTW = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019;
  if (FTW.vbe3923e0c95014385c197c49a41fc002.length > 0) {
    var d = FTW.vbe3923e0c95014385c197c49a41fc002[0];
    if (d.state != Car.vcbf4008afceaefcc3d83d29973456dbc) {
      A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.comment("Parking", "I couldn't get in to the parking lot on time. I demand a refund!");
    }
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(d, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    FTW.vbe3923e0c95014385c197c49a41fc002.vca48a4d192a1c3fdc8f15c910420fc7e(0);
    /** @type {null} */
    FTW.v8b591a6ae707f82d0c7bf7080524308b[d.v6955045be3f2455eb1580759d48f41f1.x][d.v6955045be3f2455eb1580759d48f41f1.y] = null;
  }
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.vb8d49b229151f0596040f0ff3d4aeed1, function(suiteContainer) {
    if (suiteContainer.v4b19c5d77dd1a1b48e4c79ca1ee7629d > 0) {
      suiteContainer.v4b19c5d77dd1a1b48e4c79ca1ee7629d--;
    }
    if (suiteContainer.v46c7ed5490f205d5b7351a9c86c8224b.length > 0) {
      suiteContainer.v46c7ed5490f205d5b7351a9c86c8224b.vca48a4d192a1c3fdc8f15c910420fc7e(0);
    }
  });
  var j = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v2ecbf47484206af649eebb5fe0d5f0e0;
  /** @type {number} */
  j.v4b19c5d77dd1a1b48e4c79ca1ee7629d = 0;
  j.v46c7ed5490f205d5b7351a9c86c8224b.ve8d2c88ded06dcb91c8f0d5b55dd3044();
  var buses = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd;
  if (buses.length > 0) {
    bus = buses[0];
    buses.vca48a4d192a1c3fdc8f15c910420fc7e(0);
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(bus, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
  }
  var expRecords = A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d;
  if (expRecords.length > 0) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(expRecords[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    expRecords.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
  var loadedAddons = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.vca376faa2a83aa1afc63ed398cdfdc26;
  if (loadedAddons.length > 0) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(loadedAddons[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.comment("Ingress", "I couldn't get in on time. I demand a refund!");
    loadedAddons.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
  var biomes = A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.vfa76ca9c44ecc972ec2786890f439796;
  if (biomes.length > 0) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(biomes[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    biomes.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
  var trackParts = A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.v3fc7fc36b9963e67c3c7b99bd39c2c6c;
  if (trackParts.length > 0) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(trackParts[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    trackParts.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
}, v9174ed493af6c02d7f2db29ea8a67f80.prototype.v12247ef71586b163213267daeefc4607 = function() {
  var bundle = A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v7b8b5820bd858d510372bf6a276f31a1;
  /** @type {number} */
  var propD = 0;
  for (; propD < AppConstants.v3c25fa1c87709911231f9a9d42ef7312; propD++) {
    /** @type {number} */
    var d = 0;
    for (; d < AppConstants.vfb1d103d47b20eec473331f8512352c5; d++) {
      /** @type {number} */
      bundle[propD][d] = 0;
    }
  }
  var me = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019;
  for (; me.vbe3923e0c95014385c197c49a41fc002.length > 0;) {
    var f = me.vbe3923e0c95014385c197c49a41fc002[0];
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(f, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    me.vbe3923e0c95014385c197c49a41fc002.vca48a4d192a1c3fdc8f15c910420fc7e(0);
    /** @type {null} */
    me.v8b591a6ae707f82d0c7bf7080524308b[f.v6955045be3f2455eb1580759d48f41f1.x][f.v6955045be3f2455eb1580759d48f41f1.y] = null;
  }
  /** @type {number} */
  var key = 0;
  for (; key < va9e642482127d2a8e086348a87917fba.vb691aa1a681c44416b5a7a5ce7a6ceee + 2; key++) {
    /** @type {number} */
    var userOrDest = -2;
    for (; userOrDest < va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9; userOrDest++) {
      /** @type {null} */
      me.v8b591a6ae707f82d0c7bf7080524308b[key][userOrDest] = null;
    }
  }
  /** @type {number} */
  me.v2e6790bab0b64ea344ab2afdd3d26add = va9e642482127d2a8e086348a87917fba.vaca518b16a80a93a5d3cafdb8d87a7b9 - 1 - 2;
  /** @type {number} */
  me.vf566263bded5a95f0524bd61200fee11 = 0;
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.vb8d49b229151f0596040f0ff3d4aeed1, function(a) {
    /** @type {number} */
    a.v4b19c5d77dd1a1b48e4c79ca1ee7629d = 0;
    a.v46c7ed5490f205d5b7351a9c86c8224b.ve8d2c88ded06dcb91c8f0d5b55dd3044();
  });
  var buses = A.vfe1c4eaec8ec40f848f9772196c532d3().v3326a0bcf3291f84296c11210a8fe9c5.v4cd021bff33912862705710a23dccdcd;
  for (; buses.length > 0;) {
    bus = buses[0];
    buses.vca48a4d192a1c3fdc8f15c910420fc7e(0);
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(bus, vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
  }
  var expRecords = A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c.v3fa192483f2f0030dedaf04d80bf9d9d;
  for (; expRecords.length > 0;) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(expRecords[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    A.vfe1c4eaec8ec40f848f9772196c532d3().v31553a41e2e13c4a913a43b655fe25d3.comment("Ingress", "I couldn't get in on time. I demand a refund!");
    expRecords.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
  var loadedAddons = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.vca376faa2a83aa1afc63ed398cdfdc26;
  for (; loadedAddons.length > 0;) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(loadedAddons[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    loadedAddons.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
  var pinupList = A.vfe1c4eaec8ec40f848f9772196c532d3().vfe1a4fb7fcbfec9ad33ab48ff009f019.v98d072375842b2a8b918f246e32ab2d7;
  /** @type {number} */
  key = 0;
  for (; key < pinupList.length; key++) {
    pinupList[key].ve8d2c88ded06dcb91c8f0d5b55dd3044();
  }
  var biomes = A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.vfa76ca9c44ecc972ec2786890f439796;
  for (; biomes.length > 0;) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(biomes[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    biomes.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
  var trackParts = A.vfe1c4eaec8ec40f848f9772196c532d3().v7519bb6ac11da6bc216233d376ca809e.v3fc7fc36b9963e67c3c7b99bd39c2c6c;
  for (; trackParts.length > 0;) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v5f59e818db99ed82c523e694895d4b62(trackParts[0], vfe39ece2a85b3dcccfd78b6d58d6c9de.v67a486388b7201d0b4ce02d543051048);
    trackParts.vca48a4d192a1c3fdc8f15c910420fc7e(0);
  }
  /** @type {number} */
  A.vfe1c4eaec8ec40f848f9772196c532d3().settings.SimulatedSecondsPerStep = 120;
}, v9174ed493af6c02d7f2db29ea8a67f80.prototype.v183afea46503c10c12e4174de091e222 = function(now) {
  var hit = A.vfe1c4eaec8ec40f848f9772196c532d3();
  /** @type {number} */
  hit.v370b87cc0766a54544febc48ade06909 = Math.max(hit.v370b87cc0766a54544febc48ade06909, hit.vfa07d262205646e6a7f5064eeefdefe6(now.getFullYear()));
  if (hit.vedab99cef22a1b8617af260d141c4a13 == 9) {
    A.v87b8393064cbfa8977b32cec36a69d86().vddaf63a727fee74679d504b575b2220b("You have completed ten seasons. This is the maximum for this simulation. Congratulations!", false);
  }
  var printDate = now.addDays(257);
  hit.v6f7675c33a5ad05491d4a1542c66621e = printDate.addDays(107);
  hit.vedab99cef22a1b8617af260d141c4a13++;
  hit.v4b794c1aa7704823f08990128647f893(printDate.addDays(7));
  hit.v5cf6ec2316b4839ed7888ab8efe4c53e(printDate.addDays(13), Math.min(A.vfe1c4eaec8ec40f848f9772196c532d3().vedab99cef22a1b8617af260d141c4a13 / 2 + 1, 2));
  hit.now = printDate.addDays(-1);
  hit.v83d389c6d6592d362f10b4c1d3e044d7();
}, v9e58c00cb8ac8b69cee816bb8e1fba25.prototype = Object.create(v7bd3541d4c2d607969ab46c323c50931.prototype), v9e58c00cb8ac8b69cee816bb8e1fba25.prototype.constructor = v9e58c00cb8ac8b69cee816bb8e1fba25, v9e58c00cb8ac8b69cee816bb8e1fba25.prototype.v0bd019d672b73b0ba7aad1021de6846c = function(canCreateDiscussions) {
  /** @type {number} */
  var i = 0;
  for (; i < A.vfe1c4eaec8ec40f848f9772196c532d3().v02c54057b3494e305c7036bdac0cfbfe.length; i++) {
    var res = new vf40f6c4ee436dae3bbdc45cd84a85c4d;
    var level = A.vfe1c4eaec8ec40f848f9772196c532d3().v02c54057b3494e305c7036bdac0cfbfe[i];
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < this.v342c356cf6942694690815b72ba817f4.length; layer_i++) {
      var layer = this.v342c356cf6942694690815b72ba817f4[layer_i];
      var index = this.ve03f515b04ea6018f027b7a6a964a9d1(level, layer);
      res.vf1cf44850127a594a5f821e9e9c9399d(index);
    }
    this.responses.vc2b55451d6b5a973b456d3ad090abf8d(res);
  }
}, v9e58c00cb8ac8b69cee816bb8e1fba25.prototype.ve03f515b04ea6018f027b7a6a964a9d1 = function(name, obj) {
  return name.ve03f515b04ea6018f027b7a6a964a9d1(obj.ShortName, this.v811c386c5ab4299281dc3dbdb0885c93);
}, vf2bb34e55351119c4462ae3c9fb0a288.prototype = Object.create(Object.prototype), vf2bb34e55351119c4462ae3c9fb0a288.prototype.constructor = vf2bb34e55351119c4462ae3c9fb0a288, SportsSocialMediaAd.prototype = Object.create(vd138cb05a88280b0280d6453d52bc72f.prototype), SportsSocialMediaAd.prototype.constructor = SportsSocialMediaAd, SportsSocialMediaAd.prototype.init = function(props, d, a, f, i, p, id, type, keyCode, done, num, args, activationTimeout) {
  vd138cb05a88280b0280d6453d52bc72f.prototype.init.call(this, props, d, a, f, i, p, id, type, keyCode, done, num, args, activationTimeout);
  this.end = args.v614cd05d79c31818a9f2183e2d9bc867(23.917);
  this.v5f7b1f6d9e3cf00776e29bf69928af05 = activationTimeout[0];
  this.v14db5ac53caa416a7f67ea32f3ae63c8 = activationTimeout[1];
  this.vfb4f738833e89b79b327b9e0da81537b = activationTimeout[2];
  this.v6c96cc2c3c7f80bcae66e7160d82921e = activationTimeout[3];
  this.v5a8d8d064b26e34f8298fcaffcfd5d73 = activationTimeout[4];
}, SportsSocialMediaAd.prototype.vd74843ad779680b8b53f5ef22092218b = function() {
  /** @type {!Array} */
  var b = [];
  var str = this.v5ae1c15d7e62dad6e01739890ebff05c + this.text;
  str = str.toUpperCase();
  if (this.event.vcac8a657fea238de145894896ba75413() == "Concert") {
    if (str.indexOf(this.event.v878219b9ebcd3e5fc7b70aeaa13380ca.toUpperCase()) == -1) {
      b.vc2b55451d6b5a973b456d3ad090abf8d("the name of the artist");
    }
  } else {
    if (str.indexOf(A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[this.event.v7b95bdca25e79278f6455e2ac7384972].toUpperCase()) == -1 || str.indexOf(A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[this.event.v324e94244eee3d9bf81813a2b56c075a].toUpperCase()) == -1) {
      b.vc2b55451d6b5a973b456d3ad090abf8d("the names of both teams");
    }
  }
  var key = A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[0];
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[4].length > 0) {
    var hostData = A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[4][0];
    key = hostData.name;
  }
  /** @type {string} */
  key = key + " Stadium";
  if (str.indexOf(key.toUpperCase()) == -1) {
    b.vc2b55451d6b5a973b456d3ad090abf8d("the name of the stadium");
  }
  var format = this.event.date;
  var output = format.format("MMM");
  var partText = format.format("M ");
  var sniffedDoctype = format.format("MMMM");
  partText = partText.substr(0, partText.length - 1);
  var e = format.format("d ");
  return e = e.substr(0, e.length - 1), (str.indexOf(sniffedDoctype.toUpperCase()) == -1 && str.indexOf(output.toUpperCase()) == -1 && str.indexOf(partText.toUpperCase()) == -1 || str.indexOf(e.toUpperCase()) == -1) && b.vc2b55451d6b5a973b456d3ad090abf8d("the date of the event"), b;
}, SportsSocialMediaAd.prototype.v22570d004e4ad923cabf52b851981bf4 = function() {
  /** @type {number} */
  var b = 3;
  var a = this.vd74843ad779680b8b53f5ef22092218b().length;
  /** @type {boolean} */
  var castle_flags = false;
  return this.event.vcac8a657fea238de145894896ba75413() == "Concert" ? castle_flags = this.vda9e67191f98a064bb69597a51e31a77 >= 4 && this.vda9e67191f98a064bb69597a51e31a77 <= 7 : castle_flags = this.vda9e67191f98a064bb69597a51e31a77 >= 0 && this.vda9e67191f98a064bb69597a51e31a77 <= 3, a == 0 && castle_flags ? 1 : castle_flags ? .5 - .5 * (a / b) : 0;
}, frmStaffing.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmStaffing.prototype.constructor = frmStaffing, frmStaffing.prototype.init = function() {
}, frmStaffing.prototype.v25858949839469d7389869d7422938d5 = function() {
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.v274a349231cba17047a0198b2cef8a6c.length; ++i) {
    var new_zone = new frmStaffingc1;
    new_zone.init(["<strong>" + U.vc0e6c88f8413e92781b652ae2786391a(AppConstants.v274a349231cba17047a0198b2cef8a6c[i]) + "</strong>", U.vc0e6c88f8413e92781b652ae2786391a(AppConstants.ve7e00fcf0ba74551dcd2ca383eb2b6c8[i]), U.vc0e6c88f8413e92781b652ae2786391a(AppConstants.v2d0e0d1cef70fa3af1f35dc5ca0d8001[i]), A.vfe1c4eaec8ec40f848f9772196c532d3().staffing[AppConstants.v274a349231cba17047a0198b2cef8a6c[i]], AppConstants.vc426f0691decde723f2846a7af194e9b[i], A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEdit" +
    AppConstants.v274a349231cba17047a0198b2cef8a6c[i]), AppConstants.vff92e4a2e8ba2e007ab7bf70a559e0fb[i]]);
    new_zone.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
    this.v22645af326825e1022a577521fde8b33.push(new_zone);
  }
}, frmStaffing.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
    /** @type {number} */
    var i = 0;
    for (; i < this.v22645af326825e1022a577521fde8b33.length; ++i) {
      var layer = this.v22645af326825e1022a577521fde8b33[i];
      var e = layer.vb05524ee3429ec38953d9eb4f3f2f363();
      if (!e.v1c04c9e3f97c8fc348b047988bd5f6b2) {
        Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
        return;
      }
    }
    var f = U.vc0e6c88f8413e92781b652ae2786391a("Changed staffing levels to:");
    /** @type {!Array} */
    var lines = [];
    /** @type {number} */
    i = 0;
    for (; i < this.v22645af326825e1022a577521fde8b33.length; ++i) {
      layer = this.v22645af326825e1022a577521fde8b33[i];
      if (layer.enabled) {
        var call = layer.v54c2849df4d1306e7988f0cb953901d1(layer.v27657c02b2e22a3c6833a9bcd831a29b);
        A.vfe1c4eaec8ec40f848f9772196c532d3().staffing[AppConstants.v274a349231cba17047a0198b2cef8a6c[i]] = call;
        lines.push([AppConstants.v274a349231cba17047a0198b2cef8a6c[i], call]);
      }
    }
    A.vfe1c4eaec8ec40f848f9772196c532d3().v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(f, lines);
  }
  this.close();
}, frmStaffing.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmStaffingc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmStaffingc1.prototype.constructor = frmStaffingc1, frmStaffingc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.position.html(this.vfcb914c982d22ca9d6a04de8f5cb2754[0]);
  this.v66cfa4d99c002b7293bd413ecd87ab95.text(this.vfcb914c982d22ca9d6a04de8f5cb2754[1]);
  this.v92c17f52ed4b69939372da4588e398f7.text(this.vfcb914c982d22ca9d6a04de8f5cb2754[2]);
  this.v27657c02b2e22a3c6833a9bcd831a29b.val(U.v790f397a5458e475c4d492eae29578af(this.vfcb914c982d22ca9d6a04de8f5cb2754[3]));
  this.vb91883bc74eb846dcb5876098c22d085(this.v27657c02b2e22a3c6833a9bcd831a29b, {
    placement : "right",
    integer : true,
    min : this.vfcb914c982d22ca9d6a04de8f5cb2754[6],
    max : this.vfcb914c982d22ca9d6a04de8f5cb2754[4]
  });
  this.enabled = this.vfcb914c982d22ca9d6a04de8f5cb2754[5];
  this.vb23354d011a0e16f4f4fb3afcd425697(this.v27657c02b2e22a3c6833a9bcd831a29b, this.enabled);
}, frmStaffingc1.prototype.init = function(value) {
  /** @type {!Object} */
  this.vfcb914c982d22ca9d6a04de8f5cb2754 = value;
}, frmTicketPrices.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmTicketPrices.prototype.constructor = frmTicketPrices, frmTicketPrices.vf5d36992fdcf6fcbc026156bba4a30a6 = true, frmTicketPrices.prototype.init = function() {
}, frmTicketPrices.prototype.v25858949839469d7389869d7422938d5 = function() {
  var state = this;
  /** @type {!Array} */
  var Signer = [["#ffe100", "#90a0ff"], ["#0024ff", "#df0d3e"], ["#aa52a9", "#64ce6c"], ["#ffa800", "#00c5f5"]];
  /** @type {number} */
  var type = AppConstants.v3c25fa1c87709911231f9a9d42ef7312 - 1;
  for (; type >= 0; type--) {
    /** @type {number} */
    var mode = 1;
    for (; mode >= 0; mode--) {
      var Object = new frmTicketPricesc1;
      Object.init(Stadium.ve928ad725b706dbd50c7669bea1fe747(type, mode), U.v0ea35f447d08124fa72648dd7f4ff64c(0, 2), Signer[type][mode]);
      Object.v4cfcb53978fd83231c75b36f997e0b9e(this.ve2d8456f8131b9fd48d3464f0d1d1c75);
      this.v46bfb30d94c31c7a5995b8986633e75f.push(Object);
    }
  }
  /** @type {number} */
  type = AppConstants.v3c25fa1c87709911231f9a9d42ef7312 - 1;
  for (; type >= 1; type--) {
    /** @type {number} */
    mode = 1;
    for (; mode >= 0; mode--) {
      Object = new frmTicketPricesc1;
      Object.init(Stadium.ve928ad725b706dbd50c7669bea1fe747(type, mode), U.v0ea35f447d08124fa72648dd7f4ff64c(0, 2), Signer[type][mode]);
      Object.v4cfcb53978fd83231c75b36f997e0b9e(this.v30d7732e5385a70fa429427e9506f555);
      this.v92f02500a009fdbdae32e0768800aec8.push(Object);
    }
  }
  this.ve3e6c4d3cc78e3b88fe3a6664252c31b();
  var $element = this.v4186b799d2dfec5b6fe6091fe09b5e12;
  if (this.vafc40b839dc296f29e883015cd268b97.length <= 0 && this.v027ac65d114984fb5d4173f8c300833c.length > 0 && (this.vcabea5afcdc09d24b4575b61beb04aef.removeClass("active"), this.v234d6aa7454c775cf1751fcc252349ab.removeClass("active"), this.v840a9d607a5fa1ca1d1b714c021f95ba.addClass("active"), this.vc035074b4b6d2873fa4aeadda5a7da36.addClass("active"), $element = this.va3891566a66ee3c0394aa28f149c11b6), frmTicketPrices.vf5d36992fdcf6fcbc026156bba4a30a6) {
    /** @type {string} */
    var nirXml = "<p class=\"text-info\"><span class='label label-info'>Heads up!</span> " + U.vc0e6c88f8413e92781b652ae2786391a("To select more than one event at a time, ctrl-click or option-click. Once ticket prices are set for an event, they cannot be changed.") + "</p>";
    $element.popover({
      placement : "right",
      html : true,
      trigger : "manual",
      title : "",
      content : nirXml,
      container : this.selector
    });
    $element.popover("show");
    $element.click(function() {
      $element.popover("destroy");
    });
  }
  /** @type {boolean} */
  frmTicketPrices.vf5d36992fdcf6fcbc026156bba4a30a6 = false;
  this.v76f94e5f91b68dff934aa337c4dfa4b1.attr("src", A.v87b8393064cbfa8977b32cec36a69d86().imageAtlas.vbf8e2df2ca388d714195e268a3817f20("SeatingLegendGame", 0, 0));
  this.vd239fa497e69482a935895d936341a73.attr("src", A.v87b8393064cbfa8977b32cec36a69d86().imageAtlas.vbf8e2df2ca388d714195e268a3817f20("SeatingLegendConcert", 0, 0));
  this.v4c7830e3bb64d98774eea946d947868a.click(function(license) {
    state.v7d8411422a65589a3a85303ab71752be(license, true);
  });
  this.v3e2be82fff1ac7a1ad4a357397363bb1.click(function(license) {
    state.v7d8411422a65589a3a85303ab71752be(license, false);
  });
}, frmTicketPrices.prototype.ve3e6c4d3cc78e3b88fe3a6664252c31b = function() {
  /** @type {!Array} */
  this.events = [];
  /** @type {!Array} */
  this.v027ac65d114984fb5d4173f8c300833c = [];
  /** @type {!Array} */
  this.vafc40b839dc296f29e883015cd268b97 = [];
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().events, function(data) {
    if (!data.v413fdf1809982118e1b70795610a9501 && data.date > A.vfe1c4eaec8ec40f848f9772196c532d3().now) {
      this.events.push(data);
      if (data.vcac8a657fea238de145894896ba75413() == "Concert") {
        this.v027ac65d114984fb5d4173f8c300833c.push(data);
      } else {
        this.vafc40b839dc296f29e883015cd268b97.push(data);
      }
    }
  });
  this.va3891566a66ee3c0394aa28f149c11b6.empty();
  this.vc85905445b80cd56d359581eaf15dab5(this.va3891566a66ee3c0394aa28f149c11b6, this.v027ac65d114984fb5d4173f8c300833c);
  this.v4186b799d2dfec5b6fe6091fe09b5e12.empty();
  this.vc85905445b80cd56d359581eaf15dab5(this.v4186b799d2dfec5b6fe6091fe09b5e12, this.vafc40b839dc296f29e883015cd268b97);
  if (this.vafc40b839dc296f29e883015cd268b97.length > 0) {
    this.vda382259ac0b8ca429107a6d4220772a(this.v4186b799d2dfec5b6fe6091fe09b5e12, this.vafc40b839dc296f29e883015cd268b97[0]);
  }
  if (this.v027ac65d114984fb5d4173f8c300833c.length > 0) {
    this.vda382259ac0b8ca429107a6d4220772a(this.va3891566a66ee3c0394aa28f149c11b6, this.v027ac65d114984fb5d4173f8c300833c[0]);
  }
}, frmTicketPrices.prototype.v7d8411422a65589a3a85303ab71752be = function(license, buildingApp) {
  var geoJsonFeatures = this.v92f02500a009fdbdae32e0768800aec8;
  if (buildingApp) {
    geoJsonFeatures = this.v46bfb30d94c31c7a5995b8986633e75f;
  }
  /** @type {number} */
  var i = 0;
  for (; i < geoJsonFeatures.length; ++i) {
    var f = geoJsonFeatures[i];
    var k = f.vb05524ee3429ec38953d9eb4f3f2f363();
    if (!k.v1c04c9e3f97c8fc348b047988bd5f6b2) {
      Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
      return;
    }
  }
  var sorted_years = this.v9a8411e63aa80d47ff1b3f059067fffd(this.v4186b799d2dfec5b6fe6091fe09b5e12);
  if (buildingApp && (sorted_years = this.v9a8411e63aa80d47ff1b3f059067fffd(this.va3891566a66ee3c0394aa28f149c11b6), 0), sorted_years.length <= 0) {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please pick an event."), U.vc0e6c88f8413e92781b652ae2786391a("More Input Needed"));
    return;
  }
  var j = sorted_years[0];
  /** @type {!Array} */
  var startStrat = [];
  /** @type {number} */
  var id_folder = 0;
  /** @type {number} */
  var nh2 = AppConstants.v3c25fa1c87709911231f9a9d42ef7312 - 1;
  for (; nh2 >= j.v477cc8dd303fa6381868a595da01ef59(); nh2--) {
    /** @type {!Array} */
    var i = [];
    /** @type {number} */
    var id = 1;
    for (; id >= 0; id--) {
      var f = geoJsonFeatures[id_folder];
      var r = f.v54c2849df4d1306e7988f0cb953901d1(f.v4285badf5d2bc1154b63975b44f325a7);
      i[id] = r;
      id_folder++;
    }
    /** @type {!Array} */
    startStrat[nh2] = i;
  }
  A.vfe1c4eaec8ec40f848f9772196c532d3().v5036ef36ab85af370be7bdf7420abc6a(sorted_years, startStrat);
  Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Your ticket prices for the selected event or events have been set. To monitor sales by section, click Upcoming Events under the Reports menu, the select Details."), U.vc0e6c88f8413e92781b652ae2786391a("Ticket Prices Set"));
  this.ve3e6c4d3cc78e3b88fe3a6664252c31b();
}, frmTicketPrices.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmTicketPricesc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmTicketPricesc1.prototype.constructor = frmTicketPricesc1, frmTicketPricesc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v37caa3a73a7b7b93991c9edfe320cf67.text(this.v0a2dc580de8a6418e1578c0c447e179c);
  this.v4285badf5d2bc1154b63975b44f325a7.val(this.v8bd19f8153d8cc3983f016d130d8d528);
  this.vb9063ac70e883e0529d20cc25b4efff2.css("background-color", this.v28dcf42cb251c81a1efd6f25a1c3d13f);
  this.vb91883bc74eb846dcb5876098c22d085(this.v4285badf5d2bc1154b63975b44f325a7, {
    placement : "left",
    currency : true,
    min : 1,
    max : 1e3
  });
}, frmTicketPricesc1.prototype.init = function(b, c, a) {
  /** @type {!Object} */
  this.v0a2dc580de8a6418e1578c0c447e179c = b;
  /** @type {number} */
  this.v8bd19f8153d8cc3983f016d130d8d528 = c;
  /** @type {number} */
  this.v28dcf42cb251c81a1efd6f25a1c3d13f = a;
}, frmMedia.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmMedia.prototype.constructor = frmMedia, frmMedia.prototype.init = function() {
}, frmMedia.prototype.v25858949839469d7389869d7422938d5 = function() {
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.vfcc3427da6e572db73c24b90a471fa1a.length; ++i) {
    var new_zone = new frmMediac1;
    new_zone.init([U.vc0e6c88f8413e92781b652ae2786391a(AppConstants.vfcc3427da6e572db73c24b90a471fa1a[i]), U.vc0e6c88f8413e92781b652ae2786391a(AppConstants.v4e354fc4126285e50180378cebe3c1ab[i]), A.vfe1c4eaec8ec40f848f9772196c532d3().media[AppConstants.vfcc3427da6e572db73c24b90a471fa1a[i]] / AppConstants.v2eb4fc10d3603ad44e67e9a043292151[i] * 1e3, AppConstants.v2eb4fc10d3603ad44e67e9a043292151[i], A.vfe1c4eaec8ec40f848f9772196c532d3().media[AppConstants.vfcc3427da6e572db73c24b90a471fa1a[i]]]);
    this.vb24c10cf496b056f0a44cad1a8f375ba.push(new_zone);
    new_zone.v4cfcb53978fd83231c75b36f997e0b9e(this.v19aea81fac99ee908c41eee66ae0a880);
  }
}, frmMedia.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  /** @type {number} */
  var i = 0;
  for (; i < this.vb24c10cf496b056f0a44cad1a8f375ba.length; ++i) {
    var param = this.vb24c10cf496b056f0a44cad1a8f375ba[i];
    if (!param.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2) {
      Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
      return;
    }
  }
  /** @type {!Array} */
  var result = [];
  /** @type {number} */
  i = 0;
  for (; i < this.vb24c10cf496b056f0a44cad1a8f375ba.length; ++i) {
    param = this.vb24c10cf496b056f0a44cad1a8f375ba[i];
    var script = param.v54c2849df4d1306e7988f0cb953901d1(param.vd1ae3f0a2337b64b488496daa39243ba);
    result.push(U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(script));
  }
  A.vfe1c4eaec8ec40f848f9772196c532d3().v14aa42489c5fe6c49a241c57b8930d37(result);
  this.close();
}, frmMedia.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmMediac1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmMediac1.prototype.constructor = frmMediac1, frmMediac1.prototype.v25858949839469d7389869d7422938d5 = function() {
  var self = this;
  this.v37caa3a73a7b7b93991c9edfe320cf67.text(this.v6dd0e54803d40694e899095a3ec7e298);
  this.v4285badf5d2bc1154b63975b44f325a7.text(this.v0a2dc580de8a6418e1578c0c447e179c);
  this.vd1ae3f0a2337b64b488496daa39243ba.val(U.v008da4424a5701b4ad40bb9d6adc0daf(this.ve1661b6878e07bd18f787e98c5ab8fe4));
  this.v818eb1981767952ecf8ad13937ac5f30.html(U.vc0e6c88f8413e92781b652ae2786391a("Expected Reach:&nbsp;"));
  this.v1ef04a69b37ef67198ef75a7f84979f2.text(U.v26fd40d142e5f4ab82084c80bba46f53(this.v8bd19f8153d8cc3983f016d130d8d528));
  this.v4a2be10ce510dd5395f27dc5002924bb.html(U.vc0e6c88f8413e92781b652ae2786391a("CPM:&nbsp;"));
  this.v56fdd72b2f44a5c4008e0bd7337c3422.text(U.v0ea35f447d08124fa72648dd7f4ff64c(this.v1af7388e0303de275f9a4ba38f82f31d));
  this.vb91883bc74eb846dcb5876098c22d085(this.vd1ae3f0a2337b64b488496daa39243ba, {
    placement : "right",
    currency : true,
    min : 0,
    max : 1e6
  });
  this.vd1ae3f0a2337b64b488496daa39243ba.change(function() {
    var c = self.vb05524ee3429ec38953d9eb4f3f2f363();
    if (c.v1c04c9e3f97c8fc348b047988bd5f6b2) {
      var start = self.v54c2849df4d1306e7988f0cb953901d1(self.vd1ae3f0a2337b64b488496daa39243ba);
      self.vd1ae3f0a2337b64b488496daa39243ba.val(U.v0ea35f447d08124fa72648dd7f4ff64c(start));
      /** @type {number} */
      var d = start / self.v1af7388e0303de275f9a4ba38f82f31d * 1e3;
      self.v1ef04a69b37ef67198ef75a7f84979f2.text(U.v790f397a5458e475c4d492eae29578af(d));
    }
  });
}, frmMediac1.prototype.init = function(value) {
  this.v6dd0e54803d40694e899095a3ec7e298 = value[0];
  this.v0a2dc580de8a6418e1578c0c447e179c = value[1];
  this.v8bd19f8153d8cc3983f016d130d8d528 = value[2];
  this.v1af7388e0303de275f9a4ba38f82f31d = value[3];
  this.ve1661b6878e07bd18f787e98c5ab8fe4 = value[4];
}, frmConcessions.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmConcessions.prototype.constructor = frmConcessions, frmConcessions.prototype.init = function(type) {
  /** @type {!Object} */
  this.event = type;
}, frmConcessions.prototype.v25858949839469d7389869d7422938d5 = function() {
  var opts = A.vfe1c4eaec8ec40f848f9772196c532d3().v9f7821688406340f747104ce90941912;
  this.stands.val(opts.v593f1cd1f022086bd87c3de3db987bd8);
  this.vfa76ca9c44ecc972ec2786890f439796.val(opts.vc5f3cc9e0931f0e39cae9028746c2eda);
  this.vb23354d011a0e16f4f4fb3afcd425697(this.vfa76ca9c44ecc972ec2786890f439796, A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditConcessionEmployees"));
  this.vb91883bc74eb846dcb5876098c22d085(this.stands, {
    placement : "right",
    integer : true,
    min : 0,
    max : 50
  });
  this.vb91883bc74eb846dcb5876098c22d085(this.vfa76ca9c44ecc972ec2786890f439796, {
    placement : "right",
    integer : true,
    min : 0,
    max : 6
  });
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; i++) {
    var valueProgess = this["uiInclude" + i];
    var QueryLanguageComponent = opts.includes[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[i]];
    this.vb3cb4254c2eb85a07766a6a441d40e29(valueProgess, QueryLanguageComponent);
    this["uiCost" + i].text(U.v0ea35f447d08124fa72648dd7f4ff64c(AppConstants.v6a97499fbe0b2c1cf3fd63476ac38da0[i], 2));
    /** @type {number} */
    var e = AppConstants.v089fb388088a482d2c425bd0f8c4a57f[i] * .75;
    this["uiConsumption" + i].text(U.v790f397a5458e475c4d492eae29578af(e, 1));
  }
  this.v2c6ccdf520e44296a5ff240cbe029dc4 = new frmConcessionsc1;
  this.v2c6ccdf520e44296a5ff240cbe029dc4.init("Price", opts.va2e8685aaa26fc8be2f8ebb695e5f0ff, true);
  this.v2c6ccdf520e44296a5ff240cbe029dc4.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
  this.v8ca09fcdd1acb89db595c26aba98bc81 = new frmConcessionsc1;
  this.v8ca09fcdd1acb89db595c26aba98bc81.init("Units to Buy", opts.vf3e09cb39c9a11ba7b9739fd0c5e8bd8, false);
  this.v8ca09fcdd1acb89db595c26aba98bc81.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
}, frmConcessions.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
    if (this.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2 == 0 || this.v2c6ccdf520e44296a5ff240cbe029dc4.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2 == 0 || this.v8ca09fcdd1acb89db595c26aba98bc81.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2 == 0) {
      Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
      return;
    }
    var main = A.vfe1c4eaec8ec40f848f9772196c532d3().v9f7821688406340f747104ce90941912;
    if (main.v593f1cd1f022086bd87c3de3db987bd8 != this.v54c2849df4d1306e7988f0cb953901d1(this.stands)) {
      true;
    }
    var NINETY_EIGHT_HOURS = this.v54c2849df4d1306e7988f0cb953901d1(this.stands);
    if (A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditConcessionEmployees")) {
      if (main.vc5f3cc9e0931f0e39cae9028746c2eda != this.v54c2849df4d1306e7988f0cb953901d1(this.vfa76ca9c44ecc972ec2786890f439796)) {
        true;
      }
      var smoothFunc = this.v54c2849df4d1306e7988f0cb953901d1(this.vfa76ca9c44ecc972ec2786890f439796);
    }
    /** @type {!Array} */
    var list = [];
    /** @type {number} */
    var i = 0;
    for (; i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; i++) {
      var context = this["uiInclude" + i];
      list.push(this.v7b2414fd4f791c2847f4cc04cca8ab39(context));
    }
    /** @type {!Array} */
    var new_broadcasts = [];
    /** @type {number} */
    i = 0;
    for (; i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; i++) {
      var b = this.v2c6ccdf520e44296a5ff240cbe029dc4.v54c2849df4d1306e7988f0cb953901d1(this.v2c6ccdf520e44296a5ff240cbe029dc4["p" + i]);
      if (main.va2e8685aaa26fc8be2f8ebb695e5f0ff[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[i]] != b) {
        true;
      }
      new_broadcasts.push(b);
    }
    /** @type {!Array} */
    var children = [];
    /** @type {number} */
    i = 0;
    for (; i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; i++) {
      b = this.v8ca09fcdd1acb89db595c26aba98bc81.v54c2849df4d1306e7988f0cb953901d1(this.v8ca09fcdd1acb89db595c26aba98bc81["p" + i]);
      if (main.vf3e09cb39c9a11ba7b9739fd0c5e8bd8[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[i]] != U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(b)) {
        true;
      }
      children.push(U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(b));
    }
    A.vfe1c4eaec8ec40f848f9772196c532d3().v61a0fc726b1ded2ca1daedc2dc3841d0(NINETY_EIGHT_HOURS, list, new_broadcasts, children, smoothFunc);
  }
  this.close();
}, frmConcessions.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmConcessionsc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmConcessionsc1.prototype.constructor = frmConcessionsc1, frmConcessionsc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v75d58852f9e7c53f7bf5b680372931bb.text(this.vf0d63a77b7fd6025b1c0728ba8c057d3);
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; i++) {
    var val = this.data[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[i]];
    if (this.vf0d63a77b7fd6025b1c0728ba8c057d3 == "Units to Buy") {
      /** @type {number} */
      val = Math.round(val * A.vfe1c4eaec8ec40f848f9772196c532d3().v85068aafa6c229c3f798d6f44a25b3ed);
    }
    var boundElement = this["p" + i];
    if (this.vb70e1a6deb489c6d0dce50bced06ff19) {
      boundElement.val(U.v0ea35f447d08124fa72648dd7f4ff64c(val, 2));
      this.vb91883bc74eb846dcb5876098c22d085(boundElement, {
        placement : "top",
        currency : true,
        min : 0,
        max : 1e3
      });
    } else {
      boundElement.val(U.v790f397a5458e475c4d492eae29578af(val));
      this.vb91883bc74eb846dcb5876098c22d085(boundElement, {
        placement : "top",
        integer : true,
        min : 0,
        max : 5e4
      });
    }
  }
}, frmConcessionsc1.prototype.init = function(a, b, m) {
  /** @type {!Object} */
  this.vf0d63a77b7fd6025b1c0728ba8c057d3 = a;
  /** @type {string} */
  this.data = b;
  /** @type {number} */
  this.vb70e1a6deb489c6d0dce50bced06ff19 = m;
}, frmSponsorships.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmSponsorships.prototype.constructor = frmSponsorships, frmSponsorships.prototype.init = function(target) {
  this.target = A.vfe1c4eaec8ec40f848f9772196c532d3().v1ff735a91d221e1dd6051b6b2813ff13[target];
}, frmSponsorships.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v4796fc58878b1a8432251d42e451b5d3.text(this.target.name);
  this.vf2e9a20ff11d9325f4b71bf36ef7de76.text(this.target.vda0085d4a78e038377db76be32b1c71d);
  this.v0d723c555ba4ab6d4b27a5cb097d8b38.text(U.v008da4424a5701b4ad40bb9d6adc0daf(this.target.v0875cd0d35de060fac2413e2561ed3e8));
  var sortedValueArrays = A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef;
  /** @type {!Array} */
  this.ve96a783cada15ae7f3227f9ded7dd3c2 = [];
  /** @type {number} */
  var i = 0;
  for (; i < AppConstants.vc69a0bfea595701b9e74a61d65c52ad6.length; i++) {
    /** @type {boolean} */
    this.ve96a783cada15ae7f3227f9ded7dd3c2[i] = sortedValueArrays[i].length >= AppConstants.v3dc21c661fe07a5e52f1899265b6f03e[i];
    var b = new frmSponsorshipsc1;
    b.init(AppConstants.vc69a0bfea595701b9e74a61d65c52ad6[i], this.ve96a783cada15ae7f3227f9ded7dd3c2[i]);
    this.v21584bcfca143cded57b3f4a81b7ad92.push(b);
    b.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
  }
}, frmSponsorships.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  /** @type {number} */
  var i = 0;
  for (; i < this.v21584bcfca143cded57b3f4a81b7ad92.length; ++i) {
    var beforeTab = this.v21584bcfca143cded57b3f4a81b7ad92[i];
    if (!beforeTab.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2) {
      Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
      return;
    }
  }
  /** @type {!Array} */
  var data = [];
  /** @type {boolean} */
  var d = false;
  /** @type {number} */
  i = 0;
  for (; i < this.v21584bcfca143cded57b3f4a81b7ad92.length; ++i) {
    var m = this.v21584bcfca143cded57b3f4a81b7ad92[i];
    var valueProgess = m.vb7f5e8555512eb46aea33fbfc6b42ad8.children(":first");
    if (!this.ve96a783cada15ae7f3227f9ded7dd3c2[i] && this.v7b2414fd4f791c2847f4cc04cca8ab39(valueProgess)) {
      /** @type {boolean} */
      d = true;
      data[i] = U.v75af0f6ae8a7a5ad3e06c4af18f1bac0(Number(m.v54c2849df4d1306e7988f0cb953901d1(m.vd13a2d4163dc6e41c97d603527271184)));
    } else {
      /** @type {number} */
      data[i] = -1;
    }
  }
  if (!d) {
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please select at least one item to include in your offer."), U.vc0e6c88f8413e92781b652ae2786391a("Input Required"));
    return;
  }
  var aUMLBlocks = this.target.va63b7580e46e46822add1b037d7af54b(data);
  var node = new frmSponsorResponse;
  if (node.init(this.target), node.show(), aUMLBlocks) {
    var j = U.vc0e6c88f8413e92781b652ae2786391a("Sold the following sponsorships to {0}:", this.target.name);
    /** @type {!Array} */
    var f = [];
    var expRecords = A.vfe1c4eaec8ec40f848f9772196c532d3().vb769a155273c6f5814e00dfd13079e79;
    var valueProgess = expRecords[expRecords.length - 1].v6df93cee8d46ebc1cd5d0ef23df99e6b;
    /** @type {number} */
    i = 0;
    for (; i < AppConstants.vc69a0bfea595701b9e74a61d65c52ad6.length; i++) {
      if (data[i] > -1) {
        A.vfe1c4eaec8ec40f848f9772196c532d3().ve6f4e105cfb31f8ce52e52fc02dad3ef[i].push(this.target);
        A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vb4c9cca6eb90b6fb0855241e02fbba30("Cash", data[i], AppConstants.vc69a0bfea595701b9e74a61d65c52ad6[i], valueProgess);
        f.push([AppConstants.vc69a0bfea595701b9e74a61d65c52ad6[i], U.v008da4424a5701b4ad40bb9d6adc0daf(data[i])]);
      }
    }
    A.vfe1c4eaec8ec40f848f9772196c532d3().v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(j, f);
    this.close();
    A.v87b8393064cbfa8977b32cec36a69d86().vbee376c0bae5a5bb92840e65cd0a702e();
  }
}, frmSponsorships.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmSponsorshipsc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmSponsorshipsc1.prototype.constructor = frmSponsorshipsc1, frmSponsorshipsc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.vb7f5e8555512eb46aea33fbfc6b42ad8.html("<input id='uiinclude' type='checkbox'/>" + this.v1f3c9eaeae79bb1ff354bf7b9da98d3d);
  if (this.ve2602d1a882a479c7473c51e37ebde8d) {
    this.vd13a2d4163dc6e41c97d603527271184.val("Soldout");
    this.vb23354d011a0e16f4f4fb3afcd425697(this.vd13a2d4163dc6e41c97d603527271184, false);
    this.vb23354d011a0e16f4f4fb3afcd425697(this.vb7f5e8555512eb46aea33fbfc6b42ad8, false);
  } else {
    this.vb91883bc74eb846dcb5876098c22d085(this.vd13a2d4163dc6e41c97d603527271184, {
      placement : "bottom",
      currency : true,
      min : 0,
      max : 1e6
    });
    this.vd13a2d4163dc6e41c97d603527271184.val(U.v008da4424a5701b4ad40bb9d6adc0daf(0));
  }
  this.vd13a2d4163dc6e41c97d603527271184.change(_.bind(function() {
    var d = this.v54c2849df4d1306e7988f0cb953901d1(this.vd13a2d4163dc6e41c97d603527271184);
    this.vd13a2d4163dc6e41c97d603527271184.val(U.v0ea35f447d08124fa72648dd7f4ff64c(d));
  }, this));
}, frmSponsorshipsc1.prototype.init = function(a, b) {
  /** @type {!Object} */
  this.v1f3c9eaeae79bb1ff354bf7b9da98d3d = a;
  /** @type {number} */
  this.ve2602d1a882a479c7473c51e37ebde8d = b;
}, frmBookEvent.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmBookEvent.prototype.constructor = frmBookEvent, frmBookEvent.prototype.init = function(value) {
  this.vf6b12e3405a265144ab359bfc9f6ef00 = A.vfe1c4eaec8ec40f848f9772196c532d3().vf6b12e3405a265144ab359bfc9f6ef00;
}, frmBookEvent.prototype.v25858949839469d7389869d7422938d5 = function() {
  var b = this;
  var results = this.vf6b12e3405a265144ab359bfc9f6ef00.clone();
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().events, function(b) {
    if (b.vcac8a657fea238de145894896ba75413() == "Concert") {
      results.vc2b55451d6b5a973b456d3ad090abf8d(b);
    }
  });
  results = results.sort(Event.compare);
  vee8206b276787f6d065f935010a51f0c(this, results, function(c) {
    var a = new frmBookEventc1;
    a.init(c, b);
    a.v4cfcb53978fd83231c75b36f997e0b9e(b.v0cbe7d97ce3382098e68d7e3da13035f);
    this.vf37cdda0d6c4749d74565bf7dd6d96c7.push(a);
  });
}, frmBookEvent.prototype.v7859bc9c381468d3bcdca327f17300e9 = function(fn) {
  /** @type {number} */
  var layer_i = 0;
  for (; layer_i < this.vf37cdda0d6c4749d74565bf7dd6d96c7.length; layer_i++) {
    var _this = this.vf37cdda0d6c4749d74565bf7dd6d96c7[layer_i];
    if (_this.event == fn) {
      _this.vbb9c230d20e4532ef345392274aa19f0.html("<strong>BOOKED</strong>");
    } else {
      if (_this.event.date.v976c06c7cb040fb18b380e5c8a8bb6c4(fn.date)) {
        _this.vbb9c230d20e4532ef345392274aa19f0.html("<strong>CONFLICT</strong>");
      }
    }
  }
}, frmBookEvent.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmBookEventc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmBookEventc1.prototype.constructor = frmBookEventc1, frmBookEventc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  var data = this;
  var trackersLabels = v7bd3541d4c2d607969ab46c323c50931.v5c53cc70e621ca722c766fdf389664e8[4].v5de2781193aad09bc0f0b17b09a59e96;
  if (this.v3406ada370ad2dda48cef5b2394c06c5.text(this.event.v863b40ac0416e30464b61284cabfefae()), this.v9094d8d6b41c77c1816c94bc58b6c4ec.text(this.event.date.format("M/d")), this.v41af04b0f1fc707d708b0d2e878cd384.text(trackersLabels[this.event.vfbdfe532170e5dbbf837f354b26a815a]), this.v7698c36a512b2a98aa644b1bc62b4ff3.text(U.v008da4424a5701b4ad40bb9d6adc0daf(this.event.v16d886d8f7d17ebf5eccc37dd2419f04)), this.v626a855bf51ccde2f9338b41d7864788.text(U.v2628ffda04642057c9557483709c86b2(this.event.v5d1b6ccb9d6169f23d7ece12b45f081b)),
  this.vb8da04cce566eb1629126c271c7040e5.text(U.v2628ffda04642057c9557483709c86b2(this.event.v21db8370943d31f1b823587ac6ed9cc6)), this.v5e038337021b201716a15ff1bcb6c620.text(U.v26fd40d142e5f4ab82084c80bba46f53(this.event.v3eb83ec31bc149b290e3ce618bca2724)), this.vc3628233140f9ebe37841e496d970e0a.text(U.v0ea35f447d08124fa72648dd7f4ff64c(this.event.v26f32b31080a6a89beb63abd4f3f4d40)), A.vfe1c4eaec8ec40f848f9772196c532d3().events.contains(this.event) && this.vbb9c230d20e4532ef345392274aa19f0.html("<strong>BOOKED</strong>"),
  this.v4b35e9d20d0724a84ceb47dc0772df30.click(function() {
    if (data.event.date < A.vfe1c4eaec8ec40f848f9772196c532d3().now.addDays(A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad)) {
      Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("It is now too late to book this event. Events must be booked at least {0} days ahead of time.", [U.v790f397a5458e475c4d492eae29578af(A.vfe1c4eaec8ec40f848f9772196c532d3().v5337a3f5b6e19fca89ba6593cec22fad)]));
      return;
    }
    A.vfe1c4eaec8ec40f848f9772196c532d3().bookEvent(data.event);
    Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("The event has been added to your Calendar."), U.vc0e6c88f8413e92781b652ae2786391a("Booking Successful!"));
    data.parent.v7859bc9c381468d3bcdca327f17300e9(data.event);
  }), A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763 != undefined) {
    this.v3406ada370ad2dda48cef5b2394c06c5.css("color", "#08c");
    this.v3406ada370ad2dda48cef5b2394c06c5.css("cursor", "pointer");
    data = this;
    this.v3406ada370ad2dda48cef5b2394c06c5.click(function() {
      var DemoCallBack = new frmBandProfilesReport;
      DemoCallBack.init(data.v3406ada370ad2dda48cef5b2394c06c5.text());
      DemoCallBack.show();
    });
    var QueryLanguageComponent = A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763[this.event.v878219b9ebcd3e5fc7b70aeaa13380ca].v9f97552a2fdde123fee2ebe6c9910ed8;
    /** @type {number} */
    var d = this.event.v26f32b31080a6a89beb63abd4f3f4d40 * this.vedae4a257354912b15fae57fd8cf879d(QueryLanguageComponent);
    this.vc3628233140f9ebe37841e496d970e0a.text(U.v0ea35f447d08124fa72648dd7f4ff64c(d));
  }
}, frmBookEventc1.prototype.init = function(type, object) {
  /** @type {!Object} */
  this.event = type;
  /** @type {!Function} */
  this.parent = object;
}, frmBookEventc1.prototype.vedae4a257354912b15fae57fd8cf879d = function(b) {
  /** @type {number} */
  var duration = 0;
  /** @type {number} */
  var timeLapsed = 0;
  /** @type {!Array} */
  var mul = [30, 50, 70, 90];
  /** @type {number} */
  var i = 0;
  for (; i < b.length; i++) {
    /** @type {number} */
    var dur = b[i] * b[i];
    /** @type {number} */
    timeLapsed = timeLapsed + dur * mul[i] / 60;
    /** @type {number} */
    duration = duration + dur;
  }
  return timeLapsed / duration;
}, frmStandings.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmStandings.prototype.constructor = frmStandings, frmStandings.prototype.init = function() {
}, frmStandings.prototype.v25858949839469d7389869d7422938d5 = function() {
  var MotionChangeRecommendation = this;
  this.refresh();
  /**
   * @return {undefined}
   */
  this.va8419377bfc6aed8420a10bef2db97d9 = function() {
    MotionChangeRecommendation.refresh();
  };
  A.v87b8393064cbfa8977b32cec36a69d86().v78a0d9c392e941b31d879e634e670a93(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va8419377bfc6aed8420a10bef2db97d9);
}, frmStandings.prototype.refresh = function() {
  this.v0cbe7d97ce3382098e68d7e3da13035f.empty();
  var a = A.vfe1c4eaec8ec40f848f9772196c532d3().v02f93565126d56d279f100e7ca2660b4.clone();
  a = a.sort(v075d96bd9afa88bfc29df9a76858c9a6.vce4a0ae640e3f57af09f77fa469385a9);
  vee8206b276787f6d065f935010a51f0c(this, a, function(b) {
    var a = new frmStandingsc1;
    a.init(b);
    a.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
  });
}, frmStandings.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmStandings.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v47b44c6d075887ab9a3527111f5d02f0(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va8419377bfc6aed8420a10bef2db97d9);
}, frmStandingsc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmStandingsc1.prototype.constructor = frmStandingsc1, frmStandingsc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.vc6c8fe155ac646a5ee571353df5d8824.text(A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[this.vb7609d6e6bf0f714070ab6ea035c2148.index]);
  this.v5f85da796892ee26d5f95701242f3a7f.text(this.vb7609d6e6bf0f714070ab6ea035c2148.v8f22857eac065a0c6662b19383c0d28b);
  this.v98e8972a6aae78d71e173c977f1cd905.text(this.vb7609d6e6bf0f714070ab6ea035c2148.va4695f9def13ccf66ad9ed6ae95a136c);
  this.vc8871f12a092814455cc719163333ac9.text(this.vb7609d6e6bf0f714070ab6ea035c2148.vd8de30596f976e5afca84bb587b6bb41);
  this.va4cdebc67184ebe131542bb3d53973db.text(U.v790f397a5458e475c4d492eae29578af(this.vb7609d6e6bf0f714070ab6ea035c2148.v4c97ba091a1c793f8e3540e0470c67fe(), 3));
}, frmStandingsc1.prototype.init = function(value) {
  /** @type {!Object} */
  this.vb7609d6e6bf0f714070ab6ea035c2148 = value;
}, frmBandProfilesReport.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmBandProfilesReport.prototype.constructor = frmBandProfilesReport, frmBandProfilesReport.prototype.v25858949839469d7389869d7422938d5 = function() {
  /** @type {!Array} */
  var a = [];
  _.each(A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763, function(branch) {
    a.vc2b55451d6b5a973b456d3ad090abf8d(branch.name);
  }, this);
  /** @type {!Array<?>} */
  a = a.sort(frmBandProfilesReport.compare);
  vee8206b276787f6d065f935010a51f0c(this, a, function(i) {
    var a = new frmBandProfilesReportc1;
    a.init(A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763[i]);
    a.v4cfcb53978fd83231c75b36f997e0b9e(this.v0b48464bb1ac859e9bf119b987295287);
    if (this.vc3c189d70f9dc2a77c56bc10f367883c != undefined && i == this.vc3c189d70f9dc2a77c56bc10f367883c) {
      a.selector[0].v828acb5e998a51a75ac5e74aef8ea15a(true);
    }
  });
}, frmBandProfilesReport.compare = function(a, b) {
  return a < b ? -1 : 1;
}, frmBandProfilesReport.prototype.init = function(value) {
  /** @type {!Object} */
  this.vc3c189d70f9dc2a77c56bc10f367883c = value;
}, frmBandProfilesReportc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmBandProfilesReportc1.prototype.constructor = frmBandProfilesReportc1, frmBandProfilesReportc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  var successGraphOptions = {
    series : {
      pie : {
        show : true,
        radius : 1,
        stroke : {
          width : 2
        },
        combine : {
          threshold : .03
        },
        label : {
          show : true,
          radius : .7,
          formatter : function(a, slice) {
            return "<div style='font-size:9pt; text-align:left; padding:0px; color:#222222;'>" + a + "<br/>" + Math.round(slice.percent) + "%</div>";
          },
          threshold : .1
        }
      }
    },
    legend : {
      show : false
    }
  };
  this.v51c8bf8783c7ca638ed00958b9eaa259.text(this.ve1c000f5e87199f48b5d47375305e218);
  /** @type {!Array} */
  var curved_line_data_set = [{
    label : "16-24",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v9f97552a2fdde123fee2ebe6c9910ed8[0],
    color : "#6fa8dc"
  }, {
    label : "25-39",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v9f97552a2fdde123fee2ebe6c9910ed8[1],
    color : "#9FC5E8"
  }, {
    label : "40-54",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v9f97552a2fdde123fee2ebe6c9910ed8[2],
    color : "#6fa8dc"
  }, {
    label : "55+",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v9f97552a2fdde123fee2ebe6c9910ed8[3],
    color : "#9FC5E8"
  }];
  $.plot(this.selector.find(".plotAreaAge"), curved_line_data_set, successGraphOptions);
  /** @type {!Array} */
  curved_line_data_set = [{
    label : "Rap/Rock",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v45a55b3e83b5cd21bb3ad135c1e75c2c[0],
    color : "#6fa8dc"
  }, {
    label : "Country",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v45a55b3e83b5cd21bb3ad135c1e75c2c[1],
    color : "#9FC5E8"
  }, {
    label : "Heavy Metal",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v45a55b3e83b5cd21bb3ad135c1e75c2c[2],
    color : "#6fa8dc"
  }, {
    label : "Alternative",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v45a55b3e83b5cd21bb3ad135c1e75c2c[3],
    color : "#9FC5E8"
  }, {
    label : "Classic Rock",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v45a55b3e83b5cd21bb3ad135c1e75c2c[4],
    color : "#6fa8dc"
  }];
  $.plot(this.selector.find(".plotAreaGenre"), curved_line_data_set, successGraphOptions);
  /** @type {!Array} */
  curved_line_data_set = [{
    label : "Male",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.ve9f52252a76af59345cd922de0d1f492[0],
    color : "#6fa8dc"
  }, {
    label : "Female",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.ve9f52252a76af59345cd922de0d1f492[1],
    color : "#9FC5E8"
  }];
  $.plot(this.selector.find(".plotAreaGender"), curved_line_data_set, successGraphOptions);
  /** @type {!Array} */
  curved_line_data_set = [{
    label : "<10 miles",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v2ef7b3aa37ff9b5e3208bfc76e36039c[0],
    color : "#6fa8dc"
  }, {
    label : "10-29 miles",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v2ef7b3aa37ff9b5e3208bfc76e36039c[1],
    color : "#9FC5E8"
  }, {
    label : "30-50 miles",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v2ef7b3aa37ff9b5e3208bfc76e36039c[2],
    color : "#6fa8dc"
  }, {
    label : ">50 miles",
    data : this.v77ebbca7071db9f88afb34b5e60d523e.v2ef7b3aa37ff9b5e3208bfc76e36039c[3],
    color : "#9FC5E8"
  }];
  $.plot(this.selector.find(".plotAreaDistance"), curved_line_data_set, successGraphOptions);
}, frmBandProfilesReportc1.prototype.init = function(value) {
  this.ve1c000f5e87199f48b5d47375305e218 = value.name;
  /** @type {!Object} */
  this.v77ebbca7071db9f88afb34b5e60d523e = value;
}, frmEventReport.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmEventReport.prototype.constructor = frmEventReport, frmEventReport.prototype.init = function(type) {
  /** @type {!Object} */
  this.event = type;
}, frmEventReport.prototype.v25858949839469d7389869d7422938d5 = function() {
  var currentSplitter = this;
  this.vb3cb4254c2eb85a07766a6a441d40e29(this.v9ea1232b9340bbae5b9a3dc9d90ada93, App.v8252cb86c8a2011cc11d17a3fca89bf7);
  this.v9ea1232b9340bbae5b9a3dc9d90ada93.click(function(b) {
    App.v8252cb86c8a2011cc11d17a3fca89bf7 = currentSplitter.v7b2414fd4f791c2847f4cc04cca8ab39(currentSplitter.v9ea1232b9340bbae5b9a3dc9d90ada93);
  });
  this.refresh();
  /**
   * @return {undefined}
   */
  this.va8419377bfc6aed8420a10bef2db97d9 = function() {
    currentSplitter.refresh();
  };
  A.v87b8393064cbfa8977b32cec36a69d86().v78a0d9c392e941b31d879e634e670a93(vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a, this.va8419377bfc6aed8420a10bef2db97d9);
  if (!this.v57ef304cc1c6c349fd252ea9b3656acd) {
    this.selector.find(".row .evtRptColumn1").removeClass("col-xs-7").addClass("col-xs-12");
    this.selector.find(".row .evtRptColumn2").removeClass("col-xs-5").addClass("col-xs-12");
  }
}, frmEventReport.prototype.compare = function(a) {
  return vc41c7fe61eaff586a43ca6fdecb046f3.prototype.compare.call(this, a) ? this.event == a.event : void 0;
}, frmEventReport.prototype.refresh = function() {
  this.vc19554bf557a1187f872f23613383cb2(U.vc0e6c88f8413e92781b652ae2786391a("Event Report: {0} {1} on {2}", [this.event.vcac8a657fea238de145894896ba75413(), this.event.v863b40ac0416e30464b61284cabfefae() + " " + this.event.v0eebc25dc1b4189f8d78a0c7f67d9b84(), this.event.date.v3d50f6a38b9e18ec7d6869a9c756a637()]));
  var cellProps = this.event.v54abb4e4bc74d5f47568dd1e0a3bfd53;
  var data = this.event.ticketPrices;
  var t = A.vfe1c4eaec8ec40f848f9772196c532d3().v7a98907ca09f7f7f7046bcfa89a2626c;
  /** @type {number} */
  var b = 0;
  /** @type {number} */
  var a = 0;
  if (this.v23642bc2ac00ebc04cdae165d42cd86c == 0 && this.event.date < A.vfe1c4eaec8ec40f848f9772196c532d3().now == 1) {
    /** @type {boolean} */
    this.v23642bc2ac00ebc04cdae165d42cd86c = true;
  }
  if (this.v57ef304cc1c6c349fd252ea9b3656acd == 0 && this.v23642bc2ac00ebc04cdae165d42cd86c == 1) {
    /** @type {boolean} */
    this.v57ef304cc1c6c349fd252ea9b3656acd = true;
    this.selector.dialog("option", "width", 920);
    this.selector.dialog("option", "height", 680);
    this.selector.dialog("option", "position", "center");
    this.selector.find(".row .evtRptColumn1").removeClass("col-xs-12").addClass("col-xs-7");
    this.selector.find(".row .evtRptColumn2").removeClass("col-xs-12").addClass("col-xs-5");
  }
  this.v0cbe7d97ce3382098e68d7e3da13035f.empty();
  /** @type {number} */
  var event = AppConstants.v3c25fa1c87709911231f9a9d42ef7312 - 1;
  for (; event >= this.event.v477cc8dd303fa6381868a595da01ef59(); event--) {
    /** @type {number} */
    var i = 1;
    for (; i >= 0; i--) {
      var d = this.event.vab7b73f088f5879736dd4f97d94377de(event, i);
      b = b + d;
      /** @type {number} */
      a = a + d * data[event][i];
      var table = new frmEventReportc1;
      /** @type {number} */
      var steps = d / (AppConstants.vb521784636f5e0dc01ece715253c9df2 * AppConstants.vfb1d103d47b20eec473331f8512352c5 / 2);
      table.init([Stadium.ve928ad725b706dbd50c7669bea1fe747(event, i), U.v2628ffda04642057c9557483709c86b2(steps), U.v26fd40d142e5f4ab82084c80bba46f53(d), U.v0ea35f447d08124fa72648dd7f4ff64c(data[event][i], 2), U.v008da4424a5701b4ad40bb9d6adc0daf(d * data[event][i])]);
      table.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
    }
  }
  table = new frmEventReportc1;
  steps = this.event.v8ab1052c00d6ecac3345531c828c014f();
  if (table.init(["Total", U.v2628ffda04642057c9557483709c86b2(steps), U.v26fd40d142e5f4ab82084c80bba46f53(b), U.v0ea35f447d08124fa72648dd7f4ff64c(a / Math.max(1, b), 2), U.v008da4424a5701b4ad40bb9d6adc0daf(a)]), table.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f), table.v0bdddc2e6475c6e189bc1d19ae3d2040.css("font-weight", "bold"), this.v23642bc2ac00ebc04cdae165d42cd86c) {
    /** @type {string} */
    var miss_badge = "<h4>Concession Sales</h4>";
    /** @type {string} */
    miss_badge = miss_badge + "<table class='table table-condensed'><tr>";
    /** @type {string} */
    miss_badge = miss_badge + "<th style='text-align:center'>Units</th>";
    /** @type {number} */
    var layer_i = 0;
    for (; layer_i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; layer_i++) {
      /** @type {string} */
      miss_badge = miss_badge + ("<th style='text-align:center'>" + AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i] + "</th>");
    }
    /** @type {string} */
    miss_badge = miss_badge + "</tr>";
    /** @type {string} */
    miss_badge = miss_badge + "<tr><td>Bought</td>";
    /** @type {number} */
    layer_i = 0;
    for (; layer_i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; layer_i++) {
      /** @type {string} */
      miss_badge = miss_badge + ("<td style='text-align:right'>" + U.v26fd40d142e5f4ab82084c80bba46f53(this.event.vda1b1f9e42e1aee5b7c3cad5f97f53ef[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i]] * this.event.vda4c8b43263bc1fa514b8e93a0bb8419) + "</td>");
    }
    /** @type {string} */
    miss_badge = miss_badge + "</tr>";
    /** @type {string} */
    miss_badge = miss_badge + "<tr><td>Sold</td>";
    /** @type {number} */
    layer_i = 0;
    for (; layer_i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; layer_i++) {
      /** @type {string} */
      miss_badge = miss_badge + ("<td style='text-align:right'>" + U.v26fd40d142e5f4ab82084c80bba46f53((this.event.vda1b1f9e42e1aee5b7c3cad5f97f53ef[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i]] - this.event.v19628441547527e7756f5ca10c16c9f4[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i]]) * this.event.vda4c8b43263bc1fa514b8e93a0bb8419) + "</td>");
    }
    /** @type {string} */
    miss_badge = miss_badge + "</tr>";
    if (this.v23642bc2ac00ebc04cdae165d42cd86c && this.event.state == Event.vf8602c745ea5ef0e7b27031084f0bdde) {
      /** @type {string} */
      miss_badge = miss_badge + "<tr><td>Discarded</td>";
    } else {
      /** @type {string} */
      miss_badge = miss_badge + "<tr><td>On&nbsp;Hand</td>";
    }
    /** @type {number} */
    layer_i = 0;
    for (; layer_i < AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44.length; layer_i++) {
      /** @type {string} */
      miss_badge = miss_badge + ("<td style='text-align:right'>" + U.v26fd40d142e5f4ab82084c80bba46f53(this.event.v19628441547527e7756f5ca10c16c9f4[AppConstants.v4e2c4ca8f38422fcfff9555e1ac5ef44[layer_i]] * this.event.vda4c8b43263bc1fa514b8e93a0bb8419) + "</td>");
    }
    /** @type {string} */
    miss_badge = miss_badge + "</tr></table>";
    this.v535eb02b15cbd08e370cacb4b9e6a51b.html(miss_badge);
    var n = $("<p style='text-align:right; position:relative;top:-15px;'></p>");
    var r = $("<strong>Total Concession Profit: </strong>");
    this.v75f97e419a573fe0e2356587988e7b9f = $("<a href='#' id='uiConcessionProfit' style='color: #0088CC;'></a>");
    r.appendTo(n);
    if (this.v75f97e419a573fe0e2356587988e7b9f) {
      this.v75f97e419a573fe0e2356587988e7b9f.popover("destroy");
    }
    this.v75f97e419a573fe0e2356587988e7b9f.appendTo(n);
    n.appendTo(this.v535eb02b15cbd08e370cacb4b9e6a51b);
    var res = this.ve6b474048d7111d89f98f6f6448b99e6();
    this.v75f97e419a573fe0e2356587988e7b9f.text(U.v008da4424a5701b4ad40bb9d6adc0daf(res.v2dab1ceafbd4187227f1b27e9705d843));
    this.v75f97e419a573fe0e2356587988e7b9f.popover({
      title : U.vc0e6c88f8413e92781b652ae2786391a("Total Concession Profit"),
      html : true,
      content : res.text,
      placement : "top"
    });
    /** @type {string} */
    var ospan = "<h4>Fines & Lawsuits</h4>";
    /** @type {string} */
    ospan = ospan + "<table class='table table-condensed'>";
    /** @type {!Array} */
    var crossfilterable_layers = [];
    if (A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Trash on Field", this.event.v6df93cee8d46ebc1cd5d0ef23df99e6b) > 0) {
      crossfilterable_layers.vc2b55451d6b5a973b456d3ad090abf8d(U.vc0e6c88f8413e92781b652ae2786391a("You were fined {0} by the league for allowing trash to be thrown on the field.", U.v008da4424a5701b4ad40bb9d6adc0daf(AppConstants.v73fc75654481dab89ec40b1cc4cbc7d6)));
    }
    if (A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Fan Injuries", this.event.v6df93cee8d46ebc1cd5d0ef23df99e6b) > 0) {
      crossfilterable_layers.vc2b55451d6b5a973b456d3ad090abf8d(U.vc0e6c88f8413e92781b652ae2786391a("You were sued for {0} for fan injuries occuring when people rushed the stage.", U.v008da4424a5701b4ad40bb9d6adc0daf(AppConstants.v7dd19d3debcb8c43e9f6e9195397dbad)));
    }
    if (A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Parking Mayhem", this.event.v6df93cee8d46ebc1cd5d0ef23df99e6b) > 0) {
      crossfilterable_layers.vc2b55451d6b5a973b456d3ad090abf8d(U.vc0e6c88f8413e92781b652ae2786391a("You were sued for {0} for injuries resulting from traffic accidents in the parking lot.", U.v008da4424a5701b4ad40bb9d6adc0daf(AppConstants.vbce4d2b5fca611cb37028ef1ceaa8289)));
    }
    if (crossfilterable_layers.length == 0) {
      crossfilterable_layers.vc2b55451d6b5a973b456d3ad090abf8d("There were no fines or lawsuits for this event.");
    }
    /** @type {number} */
    layer_i = 0;
    for (; layer_i < crossfilterable_layers.length; layer_i++) {
      /** @type {string} */
      ospan = ospan + ("<tr><td>" + crossfilterable_layers[layer_i] + "</td></tr>");
    }
    /** @type {string} */
    ospan = ospan + "</table>";
    this.ve8077534cc5be4b2118e32aa2b46cb44.html(ospan);
    /** @type {string} */
    str2 = "<h4>Customer Comments</h4>";
    /** @type {string} */
    str2 = str2 + "<div style='overflow:auto; height:330px'>";
    /** @type {string} */
    str2 = str2 + "<table class='table table-condensed'>";
    var data = this.event.v8f8491c225d2abbf8b262e22fbe97f5a;
    var key;
    for (key in data) {
      if (data.hasOwnProperty(key)) {
        /** @type {!Array<string>} */
        var q = key.split("|");
        /** @type {string} */
        str2 = str2 + ("<tr><td><strong>" + q[0] + "</strong></td><td>" + q[1] + "</td><td style='float:right'>" + U.v26fd40d142e5f4ab82084c80bba46f53(data[key]) + "</td></tr>");
      }
    }
    /** @type {string} */
    str2 = str2 + "</table>";
    /** @type {string} */
    str2 = str2 + "</div>";
    this.vbec4ffe3b04fb954100aea834a4ddd50.html(str2);
  }
}, frmEventReport.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmEventReport.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v47b44c6d075887ab9a3527111f5d02f0(vfe39ece2a85b3dcccfd78b6d58d6c9de.v1fa745a9ea00f2e1a3059c16c079a86a, this.va8419377bfc6aed8420a10bef2db97d9);
}, frmEventReport.prototype.ve6b474048d7111d89f98f6f6448b99e6 = function() {
  var target = this.event.v6df93cee8d46ebc1cd5d0ef23df99e6b;
  asiozxhcio
  var NavigationEvent = A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099;
  var t = NavigationEvent.vabe5369fddac296adb56cc7a33e9265f("Concessions", target);
  var d = NavigationEvent.vabe5369fddac296adb56cc7a33e9265f("COGS", target);
  var offset = NavigationEvent.vabe5369fddac296adb56cc7a33e9265f("Concession Workers", target);
  var i = NavigationEvent.vabe5369fddac296adb56cc7a33e9265f("Concession Stands", target);
  /** @type {number} */
  var f = t - d - offset - i;
  var capture_headings = U.vc0e6c88f8413e92781b652ae2786391a("Your concessions revenue was {0}. Your concession expenses were: cost of goods {1}, staff {2}, concession stands {3}. Your concessions profit was {4}.", [U.v008da4424a5701b4ad40bb9d6adc0daf(t), U.v008da4424a5701b4ad40bb9d6adc0daf(d), U.v008da4424a5701b4ad40bb9d6adc0daf(offset), U.v008da4424a5701b4ad40bb9d6adc0daf(i), U.v008da4424a5701b4ad40bb9d6adc0daf(f)]);
  return {
    v2dab1ceafbd4187227f1b27e9705d843 : f,
    text : capture_headings
  };
}, frmEventReportc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmEventReportc1.prototype.constructor = frmEventReportc1, frmEventReportc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  /** @type {number} */
  var i = 0;
  for (; i < this.vfcb914c982d22ca9d6a04de8f5cb2754.length; i++) {
    this["ui" + i].text(this.vfcb914c982d22ca9d6a04de8f5cb2754[i]);
  }
}, frmEventReportc1.prototype.init = function(value) {
  /** @type {!Object} */
  this.vfcb914c982d22ca9d6a04de8f5cb2754 = value;
}, frmCalendar.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmCalendar.prototype.constructor = frmCalendar, frmCalendar.prototype.init = function(events) {
  /** @type {!Object} */
  this.events = events;
}, frmCalendar.prototype.v25858949839469d7389869d7422938d5 = function() {
  var node = this;
  vee8206b276787f6d065f935010a51f0c(this, this.events, function(b) {
    var a = new frmCalendarc1;
    a.init(b, this.v43271be4374be85ec2b6e4d65bd7efa0);
    a.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
  });
  this.uiCalendar.datepicker({
    beforeShowDay : function(b) {
      return node.vff53aed09bf9b3f310cef0a6288fad76(new KMDate(b));
    }
  });
  this.uiCalendar.datepicker("setDate", A.vfe1c4eaec8ec40f848f9772196c532d3().now.vd7cff435a25d73aafbe29eebf58192e2());
  if (this.v43271be4374be85ec2b6e4d65bd7efa0) {
    this.vfa44ae5fc35feee7b43b8ce7853d92da.html("Actual<br>Crowd");
  }
}, frmCalendar.prototype.vff53aed09bf9b3f310cef0a6288fad76 = function(sentTime) {
  /** @type {boolean} */
  var beforeShowDay = false;
  return vee8206b276787f6d065f935010a51f0c(this, this.events, function(options) {
    if (options.date.getDate() == sentTime.getDate() && options.date.getMonth() == sentTime.getMonth() && options.date.getFullYear() == sentTime.getFullYear()) {
      /** @type {boolean} */
      beforeShowDay = true;
    }
  }), beforeShowDay ? [true, "markedDay"] : [true, ""];
}, frmCalendar.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmCalendarc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmCalendarc1.prototype.constructor = frmCalendarc1, frmCalendarc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  var response = this;
  if (this.v9094d8d6b41c77c1816c94bc58b6c4ec.text(this.event.date.v3d50f6a38b9e18ec7d6869a9c756a637()), this.vc503e9c59184de8fb7f316134e003c37.text(this.event.vcac8a657fea238de145894896ba75413()), this.v43271be4374be85ec2b6e4d65bd7efa0 ? this.v5e038337021b201716a15ff1bcb6c620.text(U.v26fd40d142e5f4ab82084c80bba46f53(this.event.v5f33401ce224a4ceb44ca8df8fb8ddb4())) : this.v5e038337021b201716a15ff1bcb6c620.text(U.v26fd40d142e5f4ab82084c80bba46f53(this.event.v3eb83ec31bc149b290e3ce618bca2724)), this.v43b6dea18936d9253afbb111a3c20131.html(this.event.v863b40ac0416e30464b61284cabfefae() +
  " " + this.event.v0eebc25dc1b4189f8d78a0c7f67d9b84()), this.vce68a6f735e37f40ea1eaa48f8138aa4.text(U.v2628ffda04642057c9557483709c86b2(this.event.v8ab1052c00d6ecac3345531c828c014f())), this.v907998339aafd9485a1f264028bdcad3.click(function() {
    var self = new frmEventReport(response.event.date < A.vfe1c4eaec8ec40f848f9772196c532d3().now);
    self.init(response.event);
    self.show();
  }), A.vfe1c4eaec8ec40f848f9772196c532d3().ve08bc0b4a7a957b2c3cab7e1b01f4763 != undefined && this.event.vcac8a657fea238de145894896ba75413() == "Concert") {
    this.v43b6dea18936d9253afbb111a3c20131.css("color", "#08c");
    response = this;
    this.v43b6dea18936d9253afbb111a3c20131.click(function() {
      var DemoCallBack = new frmBandProfilesReport;
      DemoCallBack.init(response.event.v878219b9ebcd3e5fc7b70aeaa13380ca);
      DemoCallBack.show();
    });
  }
}, frmCalendarc1.prototype.init = function(type, source) {
  /** @type {!Object} */
  this.event = type;
  /** @type {number} */
  this.v43271be4374be85ec2b6e4d65bd7efa0 = source;
}, frmCalendar2.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmCalendar2.prototype.constructor = frmCalendar2, frmCalendar2.prototype.init = function() {
}, frmCalendar2.prototype.v25858949839469d7389869d7422938d5 = function() {
  var self = this;
  this.v078daa8797f388906b1daecf411fd2b0.vfa21e3bf8ea9d4320d8597afc1052baf(A.vfe1c4eaec8ec40f848f9772196c532d3().events);
  this.v078daa8797f388906b1daecf411fd2b0.vfa21e3bf8ea9d4320d8597afc1052baf(A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998);
  this.uiCalendar.fullCalendar({
    header : {
      left : "title",
      center : "",
      right : "prev,next"
    },
    alternativeToday : function() {
      return A.vfe1c4eaec8ec40f848f9772196c532d3().now.vd7cff435a25d73aafbe29eebf58192e2();
    },
    eventClick : function(view, data, event) {
      var gt = self.v078daa8797f388906b1daecf411fd2b0[view.id];
      var DemoCallBack = new frmEventReport(gt.date < A.vfe1c4eaec8ec40f848f9772196c532d3().now);
      DemoCallBack.init(self.v078daa8797f388906b1daecf411fd2b0[view.id]);
      DemoCallBack.show();
    },
    eventRender : function(calEvent, element) {
      var e = self.v078daa8797f388906b1daecf411fd2b0[calEvent.id];
      element.empty();
      element.css({
        cursor : "pointer",
        "padding-left" : "0px",
        background : "none",
        border : "none"
      });
      /** @type {boolean} */
      var touches = e.state == Event.vf8602c745ea5ef0e7b27031084f0bdde;
      /** @type {boolean} */
      var success = e.vcac8a657fea238de145894896ba75413() == "Concert";
      /** @type {string} */
      var color = success ? "#0000ff" : "#ff0000";
      var d = $("<input id='uiDetails' type='button'  value='Details' class='btn btn-xs btn-primary'>");
      d.css({
        position : "absolute",
        top : "-20px"
      });
      d.appendTo(element);
      var text = $("<p>");
      text.css({
        "font-size" : "9px",
        "line-height" : "15px",
        color : success ? "#0000ff" : "#ff0000"
      });
      d = $("<span>");
      d.html(e.v863b40ac0416e30464b61284cabfefae());
      d.css({
        color : color,
        "font-weight" : "bold"
      });
      d.appendTo(text);
      $("<br>").appendTo(text);
      d = $("<span>");
      d.css({
        color : color
      });
      d.text(U.vc0e6c88f8413e92781b652ae2786391a("{0} Fans {1}", [touches ? "Act" : "Est", U.v26fd40d142e5f4ab82084c80bba46f53(touches ? e.v5f33401ce224a4ceb44ca8df8fb8ddb4() : e.v3eb83ec31bc149b290e3ce618bca2724)]));
      d.appendTo(text);
      text.appendTo(element);
    },
    editable : false,
    aspectRatio : 1.7,
    weekMode : "variable"
  });
  this.refresh();
  /**
   * @return {undefined}
   */
  this.va8419377bfc6aed8420a10bef2db97d9 = function() {
    self.refresh();
  };
  A.v87b8393064cbfa8977b32cec36a69d86().v78a0d9c392e941b31d879e634e670a93(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va8419377bfc6aed8420a10bef2db97d9);
}, frmCalendar2.prototype.refresh = function() {
  this.uiCalendar.fullCalendar("removeEvents");
  this.uiCalendar.fullCalendar("today");
  /** @type {number} */
  var CAPTURE_ID = 0;
  vee8206b276787f6d065f935010a51f0c(this, this.v078daa8797f388906b1daecf411fd2b0, function(todoInfo) {
    var opts = {
      title : todoInfo.v863b40ac0416e30464b61284cabfefae(),
      start : todoInfo.date.vd7cff435a25d73aafbe29eebf58192e2(),
      id : CAPTURE_ID
    };
    CAPTURE_ID++;
    this.uiCalendar.fullCalendar("renderEvent", opts, true);
  });
  this.uiCalendar.fullCalendar("rerenderEvents");
  this.uiCalendar.fullCalendar("gotoDate", A.vfe1c4eaec8ec40f848f9772196c532d3().now.vd7cff435a25d73aafbe29eebf58192e2());
  this.v0cbe7d97ce3382098e68d7e3da13035f.empty();
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().events, function(b) {
    var a = new frmCalendarc1;
    a.init(b, false);
    a.v4cfcb53978fd83231c75b36f997e0b9e(this.v0cbe7d97ce3382098e68d7e3da13035f);
  });
  this.v65cd9f26a2d2b7eaf94917d1afd1b434.empty();
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998, function(b) {
    var a = new frmCalendarc1;
    a.init(b, true);
    a.v4cfcb53978fd83231c75b36f997e0b9e(this.v65cd9f26a2d2b7eaf94917d1afd1b434);
  });
}, frmCalendar2.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmCalendar2.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v47b44c6d075887ab9a3527111f5d02f0(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va8419377bfc6aed8420a10bef2db97d9);
}, frmPlayerMgt.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmPlayerMgt.prototype.constructor = frmPlayerMgt, frmPlayerMgt.prototype.init = function() {
}, frmPlayerMgt.prototype.v25858949839469d7389869d7422938d5 = function() {
  var a = this;
  /** @type {!Array} */
  this.va965827d7a8c1d55103564aace147810 = [];
  /** @type {!Array} */
  this.vc3c1269b7b72794e9e52c5d4b8dec533 = [];
  /** @type {!Array} */
  var QueryLanguageComponent = v52b5b783e3ba5645ba556f8988087410.vdef48fac8859c7c1f1965ce7194d2a82;
  if (_.size(A.vfe1c4eaec8ec40f848f9772196c532d3().settings.playerPositionsEditable) > 0) {
    QueryLanguageComponent = A.vfe1c4eaec8ec40f848f9772196c532d3().settings.playerPositionsEditable;
  }
  this.v3a2136f1f812e46b551006fe1a753df2.change(function() {
    a.v1ee56fca8cc9310b444daa5e8d4dc656();
  });
  this.vc85905445b80cd56d359581eaf15dab5(this.v3a2136f1f812e46b551006fe1a753df2, QueryLanguageComponent);
  this.v00a94e177afe39f3cefb7b639e554084(this.v3a2136f1f812e46b551006fe1a753df2, 0);
  this.v1ee56fca8cc9310b444daa5e8d4dc656();
  this.v1d1cfb6fe86ad0a51bf175fc60dc138f.click(function() {
    a.sign();
  });
  this.vb0c32b61a767779b0f0edfbb1b276bb9.click(function() {
    a.release();
  });
}, frmPlayerMgt.prototype.sign = function() {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
    /** @type {boolean} */
    var b = true;
    /** @type {number} */
    var i = A.vfe1c4eaec8ec40f848f9772196c532d3().v3a4db6a91a73ad18148fb5f754ce0959.length - 1;
    for (; i >= 0; i--) {
      var exclude = this.vd99a3eedcec8c0881cbc4a69153f61b6.find("#a" + i);
      if (exclude != undefined && this.v7b2414fd4f791c2847f4cc04cca8ab39(exclude)) {
        /** @type {boolean} */
        b = false;
        var flowSymb = A.vfe1c4eaec8ec40f848f9772196c532d3().v3a4db6a91a73ad18148fb5f754ce0959[i];
        A.vfe1c4eaec8ec40f848f9772196c532d3().vd7c0ce067e0bf0e93178bfea913636d6(flowSymb);
      }
    }
    if (b) {
      Alert.show("Check the box next to the player(s) you want to sign, then click <b>Sign Player</b>.");
    }
    this.v1ee56fca8cc9310b444daa5e8d4dc656();
  }
}, frmPlayerMgt.prototype.release = function() {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
    /** @type {boolean} */
    var b = true;
    /** @type {number} */
    var id = A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971.length - 1;
    for (; id >= 0; id--) {
      var exclude = this.vcc6157db3c0deaac253c7f841679e19a.find("#o" + id);
      if (exclude != undefined && this.v7b2414fd4f791c2847f4cc04cca8ab39(exclude)) {
        /** @type {boolean} */
        b = false;
        var d = A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971[id];
        if (this.vc345a4b0aad26a175604fd762d8adc6d(d.position) < 3) {
          Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("You must have at least two players at each position. To release a current player, sign another player first, then release the current player."), U.vc0e6c88f8413e92781b652ae2786391a("Player Cannot Be Released"));
          break;
        }
        A.vfe1c4eaec8ec40f848f9772196c532d3().vc7a9d92845a7e93d6117ca1217bcafce(d);
      }
    }
    if (b) {
      Alert.show("Check the box next to the player(s) you want to release, then click <b>Release Player</b>.");
    }
    this.v1ee56fca8cc9310b444daa5e8d4dc656();
  }
}, frmPlayerMgt.prototype.vf3a9e1d1013805286611c4a9956d954a = function(name, data) {
  return name == "PCT" ? U.v2628ffda04642057c9557483709c86b2(data[name]) : name == "YPC" || name == "AVG" || name == "HT" ? U.v790f397a5458e475c4d492eae29578af(data[name], 1) : U.v790f397a5458e475c4d492eae29578af(data[name], 0);
}, frmPlayerMgt.prototype.v1ee56fca8cc9310b444daa5e8d4dc656 = function() {
  A.vfe1c4eaec8ec40f848f9772196c532d3().v3a4db6a91a73ad18148fb5f754ce0959 = A.vfe1c4eaec8ec40f848f9772196c532d3().v3a4db6a91a73ad18148fb5f754ce0959.sort(v52b5b783e3ba5645ba556f8988087410.vcb0fb308ed190d8ae6e29732b874abc2);
  this.vbc18fbdcad551e3470a27a61cd5881a6.tooltip("destroy");
  this.v50cc383a153020cc0a7f3ea9c75b7d6a.tooltip("destroy");
  this.v2ceb25cf64b749c99f6e77dc2c556f03.tooltip("destroy");
  this.v6c72a1d2862dec70fa72cf3c01d68cf6.tooltip("destroy");
  /** @type {number} */
  var indexLookupKey = v52b5b783e3ba5645ba556f8988087410.vdef48fac8859c7c1f1965ce7194d2a82.indexOf(this.vc22528f6f67c96a40e226f7422a34b41(this.v3a2136f1f812e46b551006fe1a753df2));
  this.vbc18fbdcad551e3470a27a61cd5881a6.text(v52b5b783e3ba5645ba556f8988087410.vae00930eb88b400eb8e5f8cacd7697ce[indexLookupKey][0]);
  this.vbc18fbdcad551e3470a27a61cd5881a6.tooltip({
    title : v52b5b783e3ba5645ba556f8988087410.v1efc2a5ca700033f8ac8461a9a6939ee[indexLookupKey][0],
    html : "true",
    trigger : "click",
    placement : "top"
  });
  this.v2ceb25cf64b749c99f6e77dc2c556f03.text(v52b5b783e3ba5645ba556f8988087410.vae00930eb88b400eb8e5f8cacd7697ce[indexLookupKey][1]);
  this.v2ceb25cf64b749c99f6e77dc2c556f03.tooltip({
    title : v52b5b783e3ba5645ba556f8988087410.v1efc2a5ca700033f8ac8461a9a6939ee[indexLookupKey][1],
    html : "true",
    trigger : "click",
    placement : "top"
  });
  this.v50cc383a153020cc0a7f3ea9c75b7d6a.text(v52b5b783e3ba5645ba556f8988087410.vae00930eb88b400eb8e5f8cacd7697ce[indexLookupKey][0]);
  this.v50cc383a153020cc0a7f3ea9c75b7d6a.tooltip({
    title : v52b5b783e3ba5645ba556f8988087410.v1efc2a5ca700033f8ac8461a9a6939ee[indexLookupKey][0],
    html : "true",
    trigger : "click",
    placement : "top"
  });
  this.v6c72a1d2862dec70fa72cf3c01d68cf6.text(v52b5b783e3ba5645ba556f8988087410.vae00930eb88b400eb8e5f8cacd7697ce[indexLookupKey][1]);
  this.v6c72a1d2862dec70fa72cf3c01d68cf6.tooltip({
    title : v52b5b783e3ba5645ba556f8988087410.v1efc2a5ca700033f8ac8461a9a6939ee[indexLookupKey][1],
    html : "true",
    trigger : "click",
    placement : "top"
  });
  var data = this.vdcf2e2a27a170af35d18070ff3356d11(A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971, "o");
  this.vcc6157db3c0deaac253c7f841679e19a.html(data);
  var replacedText = this.vdcf2e2a27a170af35d18070ff3356d11(A.vfe1c4eaec8ec40f848f9772196c532d3().v3a4db6a91a73ad18148fb5f754ce0959, "a");
  this.vd99a3eedcec8c0881cbc4a69153f61b6.html(replacedText);
  /** @type {number} */
  var hash = 0;
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971, function(res) {
    hash = hash + res.vdbe6b3e8a012a229f29f7f76683ed815;
  });
  this.v3531e5904692d8e6a62612cea7964a41.html("Total Salaries:<br>" + U.v0ea35f447d08124fa72648dd7f4ff64c(hash));
}, frmPlayerMgt.prototype.vdcf2e2a27a170af35d18070ff3356d11 = function(data, key) {
  var view = this;
  /** @type {string} */
  var axis = "<table class='table table-condensed'>";
  /** @type {number} */
  var key_value_separator = 0;
  return vee8206b276787f6d065f935010a51f0c(this, data, function(item) {
    if (item.position == view.vc22528f6f67c96a40e226f7422a34b41(view.v3a2136f1f812e46b551006fe1a753df2)) {
      axis = axis + ("<tr><td style='width:180px'><div class='checkbox-inline'><label class='labelbs2'><input id='" + key + key_value_separator + "' type=checkbox />" + item.name + "</label></div></td>");
      var dataItems = v52b5b783e3ba5645ba556f8988087410.vae00930eb88b400eb8e5f8cacd7697ce[v52b5b783e3ba5645ba556f8988087410.vdef48fac8859c7c1f1965ce7194d2a82.getItemIndex(item.position)];
      /** @type {string} */
      axis = axis + ("<td style='width:100px;text-align:center'><span class='badge'>" + U.v0ea35f447d08124fa72648dd7f4ff64c(item.vdbe6b3e8a012a229f29f7f76683ed815) + "</span></td>");
      /** @type {string} */
      axis = axis + ("<td style='width:100px;text-align:center'><span class='badge'>" + view.vf3a9e1d1013805286611c4a9956d954a(dataItems[0], item) + "</span></td>");
      /** @type {string} */
      axis = axis + ("<td style='width:100px;text-align:center'><span class='badge'>" + view.vf3a9e1d1013805286611c4a9956d954a(dataItems[1], item) + "</span></td>");
      /** @type {string} */
      axis = axis + "</tr>";
    }
    key_value_separator++;
  }), axis = axis + "</table>", axis;
}, frmPlayerMgt.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmPlayerMgt.prototype.vec9cb23cbe614eb4b25ba0153915e63f = function() {
  return "hello";
}, frmPlayerMgt.prototype.onClose = function() {
  this.vbc18fbdcad551e3470a27a61cd5881a6.tooltip("destroy");
  this.v50cc383a153020cc0a7f3ea9c75b7d6a.tooltip("destroy");
  this.v2ceb25cf64b749c99f6e77dc2c556f03.tooltip("destroy");
  this.v6c72a1d2862dec70fa72cf3c01d68cf6.tooltip("destroy");
}, frmPlayerMgt.prototype.vc345a4b0aad26a175604fd762d8adc6d = function(position) {
  /** @type {number} */
  var a = 0;
  return vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().v51ae51a502d9f62fe2e47b89b853c971, function(i) {
    if (i.position == position) {
      a++;
    }
  }), a;
}, frmPlayerMgtc1.prototype = Object.create(vb83b9117e3ceed59acbbd2d23058424a.prototype), frmPlayerMgtc1.prototype.constructor = frmPlayerMgtc1, frmPlayerMgtc1.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v37caa3a73a7b7b93991c9edfe320cf67.text(this.v0a2dc580de8a6418e1578c0c447e179c);
  this.v4285badf5d2bc1154b63975b44f325a7.val(this.v8bd19f8153d8cc3983f016d130d8d528);
}, frmPlayerMgtc1.prototype.init = function(a, b) {
  /** @type {!Object} */
  this.v0a2dc580de8a6418e1578c0c447e179c = a;
  /** @type {number} */
  this.v8bd19f8153d8cc3983f016d130d8d528 = b;
}, frmParking.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmParking.prototype.constructor = frmParking, frmParking.prototype.init = function() {
}, frmParking.prototype.v25858949839469d7389869d7422938d5 = function() {
  var params = A.vfe1c4eaec8ec40f848f9772196c532d3().vdadb3802808c4dad6e637cd29bd9e7b5;
  this.v7d6372d298fa35f4bce72a15bc53cc18.val(U.v0ea35f447d08124fa72648dd7f4ff64c(params.vb141cf7a711f6005f0f447e34f8f2dc2, 2));
  this.v99c4b4b5ee4089d43ac72848719f6484.val(U.v0ea35f447d08124fa72648dd7f4ff64c(params.v4f7c3084c74f060298d413aba2266780, 2));
  this.v820fb5c62d9f85af90335dae67a22e57.val(params.vb8d49b229151f0596040f0ff3d4aeed1);
  this.vc5997ca6d4a2a26809f42b4efdd374e5.val(params.v825d8229dbe774de006ff34938efc9b4);
  this.vb23354d011a0e16f4f4fb3afcd425697(this.v7d6372d298fa35f4bce72a15bc53cc18, A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditParkingPrices"));
  this.vb23354d011a0e16f4f4fb3afcd425697(this.v99c4b4b5ee4089d43ac72848719f6484, A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditParkingPrices"));
  this.vb23354d011a0e16f4f4fb3afcd425697(this.v820fb5c62d9f85af90335dae67a22e57, A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditParkingLotsBuses"));
  this.vb23354d011a0e16f4f4fb3afcd425697(this.vc5997ca6d4a2a26809f42b4efdd374e5, A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditParkingLotsBuses"));
  this.vb91883bc74eb846dcb5876098c22d085(this.v7d6372d298fa35f4bce72a15bc53cc18, {
    placement : "left",
    currency : true,
    min : 0,
    max : 1e3
  });
  this.vb91883bc74eb846dcb5876098c22d085(this.v99c4b4b5ee4089d43ac72848719f6484, {
    placement : "left",
    currency : true,
    min : 0,
    max : 1e3
  });
  this.vb91883bc74eb846dcb5876098c22d085(this.v820fb5c62d9f85af90335dae67a22e57, {
    placement : "left",
    integer : true,
    min : 0,
    max : 9
  });
  this.vb91883bc74eb846dcb5876098c22d085(this.vc5997ca6d4a2a26809f42b4efdd374e5, {
    placement : "left",
    integer : true,
    min : 0,
    max : 8
  });
}, frmParking.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  if (A.vfe1c4eaec8ec40f848f9772196c532d3().v7790251a4ca7e4e62f2dd056ed607064()) {
    var c = this.vb05524ee3429ec38953d9eb4f3f2f363();
    if (!c.v1c04c9e3f97c8fc348b047988bd5f6b2) {
      Alert.show(U.vc0e6c88f8413e92781b652ae2786391a("Please review errors"));
      return;
    }
    var d = U.vc0e6c88f8413e92781b652ae2786391a("Set parking prices and capacities to:");
    /** @type {!Array} */
    var a = [];
    var b = A.vfe1c4eaec8ec40f848f9772196c532d3().vdadb3802808c4dad6e637cd29bd9e7b5;
    if (A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditParkingPrices")) {
      b.vb141cf7a711f6005f0f447e34f8f2dc2 = this.v54c2849df4d1306e7988f0cb953901d1(this.v7d6372d298fa35f4bce72a15bc53cc18);
      b.v4f7c3084c74f060298d413aba2266780 = this.v54c2849df4d1306e7988f0cb953901d1(this.v99c4b4b5ee4089d43ac72848719f6484);
      a.push(["Main Lot Price", U.v0ea35f447d08124fa72648dd7f4ff64c(this.v54c2849df4d1306e7988f0cb953901d1(this.v7d6372d298fa35f4bce72a15bc53cc18), 2)]);
      a.push(["Satellite Lot Price", U.v0ea35f447d08124fa72648dd7f4ff64c(this.v54c2849df4d1306e7988f0cb953901d1(this.v99c4b4b5ee4089d43ac72848719f6484), 2)]);
    }
    if (A.v87b8393064cbfa8977b32cec36a69d86().v5a32248434c1da106e04791d3f125645("canEditParkingLotsBuses")) {
      b.vb8d49b229151f0596040f0ff3d4aeed1 = this.v54c2849df4d1306e7988f0cb953901d1(this.v820fb5c62d9f85af90335dae67a22e57);
      b.v825d8229dbe774de006ff34938efc9b4 = this.v54c2849df4d1306e7988f0cb953901d1(this.vc5997ca6d4a2a26809f42b4efdd374e5);
      a.push(["Satellite Lots", U.v790f397a5458e475c4d492eae29578af(this.v54c2849df4d1306e7988f0cb953901d1(this.v820fb5c62d9f85af90335dae67a22e57))]);
      a.push(["Buses per Lot", U.v790f397a5458e475c4d492eae29578af(this.v54c2849df4d1306e7988f0cb953901d1(this.vc5997ca6d4a2a26809f42b4efdd374e5))]);
    }
    A.vfe1c4eaec8ec40f848f9772196c532d3().v669ff646b5846079385e704f4920c16e.v867852f67dd46e2cbcba2a3046118934(d, a);
  }
  this.close();
}, frmParking.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmFinancialsSports.prototype = Object.create(frmFinancials.prototype), frmFinancialsSports.prototype.constructor = frmFinancialsSports, frmFinancialsSports.prototype.v25858949839469d7389869d7422938d5 = function() {
  var a = this;
  if (this.v47019e0ca81afc31dd0dcc05e975161a(), A.vfe1c4eaec8ec40f848f9772196c532d3().now.getFullYear() > A.v50156c5418a59f9fb151a3917f9026dd().StartDate.getFullYear()) {
    this.va2eb955b2fdd28557e2ac61cc447d826.css("display", "block");
    /** @type {number} */
    var c = Math.ceil(A.vfe1c4eaec8ec40f848f9772196c532d3().now.getFullYear() - A.v50156c5418a59f9fb151a3917f9026dd().StartDate.getFullYear());
    /** @type {number} */
    var G__10493 = c;
    for (; G__10493 >= 0; G__10493--) {
      this.va2eb955b2fdd28557e2ac61cc447d826.append(U.vc0e6c88f8413e92781b652ae2786391a('<button class="btn btn-primary seasonSel" type="radio" name=\'season\' class="btn btn-primary">{0} Season</button>', [A.v50156c5418a59f9fb151a3917f9026dd().StartDate.getFullYear() + G__10493]));
    }
    this.va2eb955b2fdd28557e2ac61cc447d826.find(".seasonSel").first().bootstrap_button("toggle");
  }
  this.va2eb955b2fdd28557e2ac61cc447d826.find(".seasonSel").click(function(b) {
    a.vd846c60a4117dd49c0f47976d66df4dc = a.va2eb955b2fdd28557e2ac61cc447d826.find(".seasonSel").index($(this));
    a.update();
  });
  this.v453d35a91279ad2c6b5685c803246208 += this.va2eb955b2fdd28557e2ac61cc447d826.height() + 25;
  this.update(true);
  /**
   * @return {undefined}
   */
  this.va2b3cdfa1483ff99f6ba476ea1338c99 = function() {
    a.update();
  };
  A.v87b8393064cbfa8977b32cec36a69d86().v78a0d9c392e941b31d879e634e670a93(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va2b3cdfa1483ff99f6ba476ea1338c99);
}, frmFinancialsSports.prototype.update = function(f) {
  this.v56caaf8c733ad85ab710ea84061d7a47();
  if (f) {
    /** @type {boolean} */
    this.v8d02e66f74a89defde44d6903669ab2a = false;
  }
  if (this.dataTable) {
    this.dataTable.destroy();
  }
  var fontsize = this.v744e28d6167afbf0edc66230e261e022;
  var MSG_WEB_SOCKET_CLOSE = A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vcbc6230bd93d971fd4b5e58c688cde92("Income Statement", 1);
  var array = A.vfe1c4eaec8ec40f848f9772196c532d3().ve4f83513bcfc1688cae2b4e0cf336998.clone();
  array = array.reverse();
  array.vfa21e3bf8ea9d4320d8597afc1052baf(A.vfe1c4eaec8ec40f848f9772196c532d3().events);
  /** @type {number} */
  year = A.vfe1c4eaec8ec40f848f9772196c532d3().now.getFullYear() - this.vd846c60a4117dd49c0f47976d66df4dc;
  /** @type {!Array} */
  var result = [];
  vee8206b276787f6d065f935010a51f0c(this, array, function(measure) {
    if (measure.date.getFullYear() == year) {
      result.vc2b55451d6b5a973b456d3ad090abf8d(measure);
    }
  });
  vee8206b276787f6d065f935010a51f0c(this, A.vfe1c4eaec8ec40f848f9772196c532d3().vb769a155273c6f5814e00dfd13079e79, function(view) {
    if (view.date.getFullYear() == year && A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vabe5369fddac296adb56cc7a33e9265f("Profit", view.v6df93cee8d46ebc1cd5d0ef23df99e6b) != 0) {
      result.v1648352dbaef4fd82fb8158969974646(view, 0);
    }
  });
  var label = A.vfe1c4eaec8ec40f848f9772196c532d3().v4aa4655e25af5596003edec8b91c0099.vc9782ece374209e892894042072e3470(MSG_WEB_SOCKET_CLOSE, fontsize, result);
  this.v2e95b93ae8b6e5d75d23668235722e07.html(label);
  this.v387cc9b4da957e8322160a1ba307f147();
  this.v0dc6e4eb091f953eb5db9fd3801d44c4();
}, frmFinancialsSports.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, frmFinancialsSports.prototype.onClose = function() {
  A.v87b8393064cbfa8977b32cec36a69d86().v47b44c6d075887ab9a3527111f5d02f0(vfe39ece2a85b3dcccfd78b6d58d6c9de.vf53c51a635d3498ad4675d8de7823353, this.va2b3cdfa1483ff99f6ba476ea1338c99);
  if (this.dataTable) {
    this.dataTable.destroy();
  }
}, frmSponsorResponse.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), frmSponsorResponse.prototype.constructor = frmSponsorResponse, frmSponsorResponse.prototype.init = function(a) {
  /** @type {!Object} */
  this.target = a;
}, frmSponsorResponse.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v6c9765f5bb5a5e2b9ceea2c3b97695d9.attr("src", A.v87b8393064cbfa8977b32cec36a69d86().imageAtlas.vbf8e2df2ca388d714195e268a3817f20("Letter" + this.target.index, 0, 0));
  this.v9094d8d6b41c77c1816c94bc58b6c4ec.html(A.vfe1c4eaec8ec40f848f9772196c532d3().now.format("MMMM d, yyyy"));
  this.vefc8091371270e8243af230441b6875c.html(U.vc0e6c88f8413e92781b652ae2786391a("Dear {0} Management:", A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[0]));
  this.v6b63c0eaec96ca14b6b811da60c8d0b2.html(this.target.response);
  this.v515f83f8408c9531e8e1c6c181c73821.html(U.vc0e6c88f8413e92781b652ae2786391a("{0}<br>VP of Marketing", this.target.vbce1fe82be4d9994b33ec78fb6bfb41e));
}, frmSponsorResponse.prototype.v6c1b209c23d5bcc0cd1aee1109895a9e = function() {
  this.close();
}, v0b5ca45e98587db10df97b20977d764f.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), v0b5ca45e98587db10df97b20977d764f.prototype.constructor = v0b5ca45e98587db10df97b20977d764f, v0b5ca45e98587db10df97b20977d764f.prototype.init = function() {
}, v0b5ca45e98587db10df97b20977d764f.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v32b3d8b4bab804a3d2a56d67dda6f8d1.text("Please type a name for your team:");
  this.v515f83f8408c9531e8e1c6c181c73821.attr("maxlength", 10);
  this.vb91883bc74eb846dcb5876098c22d085(this.v515f83f8408c9531e8e1c6c181c73821, {
    placement : "bottom",
    v51c2dc0f229f349c60f2e874f8f2452e : 1,
    v9da2fb2af7895fbe00c0d371ae7a8a01 : 10
  });
}, v0b5ca45e98587db10df97b20977d764f.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  if (this.vb05524ee3429ec38953d9eb4f3f2f363().v1c04c9e3f97c8fc348b047988bd5f6b2 == 1) {
    A.vfe1c4eaec8ec40f848f9772196c532d3().v6ba0582adfd2184003efe75c3dc68f9a[0] = this.v515f83f8408c9531e8e1c6c181c73821.val();
    /** @type {boolean} */
    A.v87b8393064cbfa8977b32cec36a69d86().va424747fc90ab402a8f56fb01d3a5e5f = true;
    A.v87b8393064cbfa8977b32cec36a69d86().vbee376c0bae5a5bb92840e65cd0a702e();
    this.close();
  }
}, v961fefa8c9ab62c72b9684fdb6003fb8.prototype = Object.create(vc41c7fe61eaff586a43ca6fdecb046f3.prototype), v961fefa8c9ab62c72b9684fdb6003fb8.prototype.constructor = v961fefa8c9ab62c72b9684fdb6003fb8, v0b5ca45e98587db10df97b20977d764f.prototype.init = function() {
}, v961fefa8c9ab62c72b9684fdb6003fb8.prototype.v25858949839469d7389869d7422938d5 = function() {
  this.v32b3d8b4bab804a3d2a56d67dda6f8d1.text("Lesson name:");
}, v961fefa8c9ab62c72b9684fdb6003fb8.prototype.v3a3a8e51ec1d2da43bd094ffe3ca26df = function() {
  A.vfe1c4eaec8ec40f848f9772196c532d3().settings.LessonProjectID = this.v515f83f8408c9531e8e1c6c181c73821.val();
  this.close();
};
