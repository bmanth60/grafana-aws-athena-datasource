define(["app/core/table_model","app/plugins/sdk","lodash"], function(__WEBPACK_EXTERNAL_MODULE_grafana_app_core_table_model__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_lodash__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/uuid/lib/bytesToUuid.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../node_modules/uuid/lib/rng-browser.js":
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../node_modules/uuid/v4.js":
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./config_ctrl.ts":
/*!************************!*\
  !*** ./config_ctrl.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var AwsAthenaDatasourceConfigCtrl =
/** @class */
function () {
  /** @ngInject */
  AwsAthenaDatasourceConfigCtrl.$inject = ["$scope", "datasourceSrv"];
  function AwsAthenaDatasourceConfigCtrl($scope, datasourceSrv) {
    this.current.jsonData.authType = this.current.jsonData.authType || 'credentials';
    this.accessKeyExist = this.current.secureJsonFields.accessKey;
    this.secretKeyExist = this.current.secureJsonFields.secretKey;
    this.datasourceSrv = datasourceSrv;
    this.authTypes = [{
      name: 'Access & secret key',
      value: 'keys'
    }, {
      name: 'Credentials file',
      value: 'credentials'
    }, {
      name: 'ARN',
      value: 'arn'
    }];
  }

  AwsAthenaDatasourceConfigCtrl.prototype.resetAccessKey = function () {
    this.accessKeyExist = false;
  };

  AwsAthenaDatasourceConfigCtrl.prototype.resetSecretKey = function () {
    this.secretKeyExist = false;
  };

  AwsAthenaDatasourceConfigCtrl.templateUrl = 'partials/config.html';
  return AwsAthenaDatasourceConfigCtrl;
}();

exports.AwsAthenaDatasourceConfigCtrl = AwsAthenaDatasourceConfigCtrl;

/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwsAthenaDatasource = undefined;

var _table_model = __webpack_require__(/*! grafana/app/core/table_model */ "grafana/app/core/table_model");

var _table_model2 = _interopRequireDefault(_table_model);

var _lodash = __webpack_require__(/*! lodash */ "lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _v = __webpack_require__(/*! uuid/v4 */ "../node_modules/uuid/v4.js");

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var AwsAthenaDatasource =
/** @class */
function () {
  function AwsAthenaDatasource(instanceSettings, $q, backendSrv, templateSrv, timeSrv) {
    this.type = instanceSettings.type;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.defaultRegion = instanceSettings.jsonData.defaultRegion;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
  }

  AwsAthenaDatasource.prototype.query = function (options) {
    var query = this.buildQueryParameters(options);
    query.targets = query.targets.filter(function (t) {
      return !t.hide;
    });

    if (query.targets.length <= 0) {
      return this.q.when({
        data: []
      });
    }

    return this.doRequest({
      data: query
    });
  };

  AwsAthenaDatasource.prototype.testDatasource = function () {
    var _this = this;

    return this.doMetricQueryRequest('named_query_names', {
      region: this.defaultRegion
    }).then(function (res) {
      return _this.q.when({
        status: 'success',
        message: 'Data source is working',
        title: 'Success'
      });
    }).catch(function (err) {
      return {
        status: 'error',
        message: err.message,
        title: 'Error'
      };
    });
  };

  AwsAthenaDatasource.prototype.doRequest = function (options) {
    return this.backendSrv.datasourceRequest({
      url: '/api/tsdb/query',
      method: 'POST',
      data: {
        from: options.data.range.from.valueOf().toString(),
        to: options.data.range.to.valueOf().toString(),
        queries: options.data.targets
      }
    }).then(function (result) {
      var res = [];

      for (var _i = 0, _a = options.data.targets; _i < _a.length; _i++) {
        var query = _a[_i];
        var r = result.data.results[query.refId];

        if (!r) {
          continue;
        }

        if (!_lodash2.default.isEmpty(r.series)) {
          _lodash2.default.forEach(r.series, function (s) {
            res.push({
              target: s.name,
              datapoints: s.points
            });
          });
        }

        if (!_lodash2.default.isEmpty(r.tables)) {
          _lodash2.default.forEach(r.tables, function (t) {
            var table = new _table_model2.default();
            table.columns = t.columns;
            table.rows = t.rows;
            res.push(table);
          });
        }
      }

      result.data = res;
      return result;
    });
  };

  AwsAthenaDatasource.prototype.buildQueryParameters = function (options) {
    var _this = this;

    var targets = _lodash2.default.map(options.targets, function (target) {
      return {
        refId: target.refId,
        hide: target.hide,
        datasourceId: _this.id,
        queryType: 'timeSeriesQuery',
        format: target.format || 'timeseries',
        region: _this.templateSrv.replace(target.region, options.scopedVars) || _this.defaultRegion,
        timestampColumn: target.timestampColumn,
        valueColumn: target.valueColumn,
        legendFormat: target.legendFormat || '',
        input: {
          queryExecutionId: _this.templateSrv.replace(target.queryExecutionId, options.scopedVars) || (0, _v2.default)()
        }
      };
    });

    options.targets = targets;
    return options;
  };

  AwsAthenaDatasource.prototype.metricFindQuery = function (query) {
    var region;
    var namedQueryNamesQuery = query.match(/^named_query_names\(([^\)]+?)\)/);

    if (namedQueryNamesQuery) {
      region = namedQueryNamesQuery[1];
      return this.doMetricQueryRequest('named_query_names', {
        region: this.templateSrv.replace(region)
      });
    }

    var namedQueryQueryQuery = query.match(/^named_query_queries\(([^,]+?),\s?(.+)\)/);

    if (namedQueryQueryQuery) {
      region = namedQueryQueryQuery[1];
      var pattern = namedQueryQueryQuery[2];
      return this.doMetricQueryRequest('named_query_queries', {
        region: this.templateSrv.replace(region),
        pattern: this.templateSrv.replace(pattern, {}, 'regex')
      });
    }

    var queryExecutionIdsQuery = query.match(/^query_execution_ids\(([^,]+?),\s?([^,]+?),\s?(.+)\)/);

    if (queryExecutionIdsQuery) {
      region = queryExecutionIdsQuery[1];
      var limit = queryExecutionIdsQuery[2];
      var pattern = queryExecutionIdsQuery[3];
      return this.doMetricQueryRequest('query_execution_ids', {
        region: this.templateSrv.replace(region),
        limit: parseInt(this.templateSrv.replace(limit), 10),
        pattern: this.templateSrv.replace(pattern, {}, 'regex')
      });
    }

    return this.q.when([]);
  };

  AwsAthenaDatasource.prototype.doMetricQueryRequest = function (subtype, parameters) {
    return __awaiter(this, void 0, void 0, function () {
      var range, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            range = this.timeSrv.timeRange();
            return [4
            /*yield*/
            , this.execMetricQueryRequest(this.id, range, subtype, parameters)];

          case 1:
            response = _a.sent();

            if (response.status < 200 || response.status > 299) {
              throw Error('Metric response failed: ' + response.statusText);
            }

            return [2
            /*return*/
            , this.transformSuggestDataFromTable(response.data)];
        }
      });
    });
  };

  AwsAthenaDatasource.prototype.execMetricQueryRequest = function (id, range, subtype, parameters) {
    return this.backendSrv.datasourceRequest({
      url: '/api/tsdb/query',
      method: 'POST',
      data: {
        from: range.from.valueOf().toString(),
        to: range.to.valueOf().toString(),
        queries: [_lodash2.default.extend({
          refId: 'metricFindQuery',
          datasourceId: id,
          queryType: 'metricFindQuery',
          subtype: subtype
        }, parameters)]
      }
    });
  };

  AwsAthenaDatasource.prototype.transformSuggestDataFromTable = function (suggestData) {
    return _lodash2.default.map(suggestData.results.metricFindQuery.tables[0].rows, function (v) {
      return {
        text: v[0],
        value: v[1]
      };
    });
  };

  return AwsAthenaDatasource;
}();

exports.AwsAthenaDatasource = AwsAthenaDatasource;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _datasource = __webpack_require__(/*! ./datasource */ "./datasource.ts");

Object.defineProperty(exports, "Datasource", {
  enumerable: true,
  get: function get() {
    return _datasource.AwsAthenaDatasource;
  }
});

var _query_ctrl = __webpack_require__(/*! ./query_ctrl */ "./query_ctrl.ts");

Object.defineProperty(exports, "QueryCtrl", {
  enumerable: true,
  get: function get() {
    return _query_ctrl.AwsAthenaDatasourceQueryCtrl;
  }
});

var _config_ctrl = __webpack_require__(/*! ./config_ctrl */ "./config_ctrl.ts");

Object.defineProperty(exports, "ConfigCtrl", {
  enumerable: true,
  get: function get() {
    return _config_ctrl.AwsAthenaDatasourceConfigCtrl;
  }
});

/***/ }),

/***/ "./query_ctrl.ts":
/*!***********************!*\
  !*** ./query_ctrl.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AwsAthenaDatasourceQueryCtrl = undefined;

var _sdk = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");

var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var AwsAthenaDatasourceQueryCtrl =
/** @class */
function (_super) {
  __extends(AwsAthenaDatasourceQueryCtrl, _super);

  function AwsAthenaDatasourceQueryCtrl($scope, $injector) {
    var _this = _super.call(this, $scope, $injector) || this;

    _this.scope = $scope;
    _this.target.format = _this.target.format || _this.target.type || 'timeseries';
    _this.target.region = _this.target.region || '';
    _this.target.timestampColumn = _this.target.timestampColumn || '';
    _this.target.valueColumn = _this.target.valueColumn || '';
    _this.target.legendFormat = _this.target.legendFormat || '';
    _this.target.queryExecutionId = _this.target.queryExecutionId || '';
    return _this;
  }

  AwsAthenaDatasourceQueryCtrl.prototype.onChangeInternal = function () {
    this.panelCtrl.refresh();
  };

  AwsAthenaDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
  return AwsAthenaDatasourceQueryCtrl;
}(_sdk.QueryCtrl);

exports.AwsAthenaDatasourceQueryCtrl = AwsAthenaDatasourceQueryCtrl;

/***/ }),

/***/ "grafana/app/core/table_model":
/*!***************************************!*\
  !*** external "app/core/table_model" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_core_table_model__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map