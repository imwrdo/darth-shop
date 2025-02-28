/*!
 * Creative Elements - live Theme & Page Builder
 * Copyright 2019-2024 WebshopWorks.com & Elementor.com
 */

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 670);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : {
		"default": obj
	};
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(148);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;

		_Object$defineProperty(target, descriptor.key, descriptor);
	}
}

function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(123);

var setPrototypeOf = __webpack_require__(118);

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function");
	}

	subClass.prototype = _Object$create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			writable: true,
			configurable: true
		}
	});
	if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(93);

var getPrototypeOf = __webpack_require__(14);

var isNativeReflectConstruct = __webpack_require__(131);

var possibleConstructorReturn = __webpack_require__(163);

function _createSuper(Derived) {
	var hasNativeReflectConstruct = isNativeReflectConstruct();
	return function _createSuperInternal() {
		var Super = getPrototypeOf(Derived),
				result;

		if (hasNativeReflectConstruct) {
			var NewTarget = getPrototypeOf(this).constructor;
			result = _Reflect$construct(Super, arguments, NewTarget);
		} else {
			result = Super.apply(this, arguments);
		}

		return possibleConstructorReturn(this, result);
	};
}

module.exports = _createSuper;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var ctx = __webpack_require__(30);
var hide = __webpack_require__(24);
var has = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
	var IS_FORCED = type & $export.F;
	var IS_GLOBAL = type & $export.G;
	var IS_STATIC = type & $export.S;
	var IS_PROTO = type & $export.P;
	var IS_BIND = type & $export.B;
	var IS_WRAP = type & $export.W;
	var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	var expProto = exports[PROTOTYPE];
	var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	var key, own, out;
	if (IS_GLOBAL) source = name;
	for (key in source) {
		// contains in native
		own = !IS_FORCED && target && target[key] !== undefined;
		if (own && has(exports, key)) continue;
		// export native or passed
		out = own ? target[key] : source[key];
		// prevent global pollution for namespaces
		exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		// bind timers to global for call from export context
		: IS_BIND && own ? ctx(out, global)
		// wrap global constructors for prevent change them in library
		: IS_WRAP && target[key] == out ? (function (C) {
			var F = function (a, b, c) {
				if (this instanceof C) {
					switch (arguments.length) {
						case 0: return new C();
						case 1: return new C(a);
						case 2: return new C(a, b);
					} return new C(a, b, c);
				} return C.apply(this, arguments);
			};
			F[PROTOTYPE] = C[PROTOTYPE];
			return F;
		// make static versions for prototype methods
		})(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		if (IS_PROTO) {
			(exports.virtual || (exports.virtual = {}))[key] = out;
			// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
			if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
		}
	}
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
	? window : typeof self != 'undefined' && self.Math == Math ? self
	// eslint-disable-next-line no-new-func
	: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
	return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(71)('wks');
var uid = __webpack_require__(51);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
	return store[name] || (store[name] =
		USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(63)('wks');
var uid = __webpack_require__(64);
var Symbol = __webpack_require__(15).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
	return store[name] || (store[name] =
		USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
	if (!isObject(it)) throw TypeError(it + ' is not an object!');
	return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
	return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(150);

var _Object$setPrototypeOf = __webpack_require__(112);

function _getPrototypeOf(o) {
	module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
		return o.__proto__ || _Object$getPrototypeOf(o);
	};
	return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
	? window : typeof self != 'undefined' && self.Math == Math ? self
	// eslint-disable-next-line no-new-func
	: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(111);
var toPrimitive = __webpack_require__(69);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	anObject(O);
	P = toPrimitive(P, true);
	anObject(Attributes);
	if (IE8_DOM_DEFINE) try {
		return dP(O, P, Attributes);
	} catch (e) { /* empty */ }
	if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	if ('value' in Attributes) O[P] = Attributes.value;
	return O;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(32);
var $find = __webpack_require__(119)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
	find: function find(callbackfn /* , that = undefined */) {
		return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	}
});
__webpack_require__(78)(KEY);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it) {
	if (!isObject(it)) throw TypeError(it + ' is not an object!');
	return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
	return hasOwnProperty.call(it, key);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
	try {
		return !!exec();
	} catch (e) {
		return true;
	}
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(104);
var defined = __webpack_require__(56);
module.exports = function (it) {
	return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(137);

var _Reflect$get = __webpack_require__(195);

var superPropBase = __webpack_require__(198);

function _get(target, property, receiver) {
	if (typeof Reflect !== "undefined" && _Reflect$get) {
		module.exports = _get = _Reflect$get;
	} else {
		module.exports = _get = function _get(target, property, receiver) {
			var base = superPropBase(target, property);
			if (!base) return;

			var desc = _Object$getOwnPropertyDescriptor(base, property);

			if (desc.get) {
				return desc.get.call(receiver);
			}

			return desc.value;
		};
	}

	return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(199);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var createDesc = __webpack_require__(43);
module.exports = __webpack_require__(13) ? function (object, key, value) {
	return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
	object[key] = value;
	return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(28)(function () {
	return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
	return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(44);
var createDesc = __webpack_require__(91);
module.exports = __webpack_require__(25) ? function (object, key, value) {
	return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
	object[key] = value;
	return object;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (exec) {
	try {
		return !!exec();
	} catch (e) {
		return true;
	}
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(44).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(25) && dP(FProto, NAME, {
	configurable: true,
	get: function () {
		try {
			return ('' + this).match(nameRE)[1];
		} catch (e) {
			return '';
		}
	}
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(42);
module.exports = function (fn, that, length) {
	aFunction(fn);
	if (that === undefined) return fn;
	switch (length) {
		case 1: return function (a) {
			return fn.call(that, a);
		};
		case 2: return function (a, b) {
			return fn.call(that, a, b);
		};
		case 3: return function (a, b, c) {
			return fn.call(that, a, b, c);
		};
	}
	return function (/* ...args */) {
		return fn.apply(that, arguments);
	};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(56);
module.exports = function (it) {
	return Object(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var core = __webpack_require__(45);
var hide = __webpack_require__(27);
var redefine = __webpack_require__(33);
var ctx = __webpack_require__(58);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
	var IS_FORCED = type & $export.F;
	var IS_GLOBAL = type & $export.G;
	var IS_STATIC = type & $export.S;
	var IS_PROTO = type & $export.P;
	var IS_BIND = type & $export.B;
	var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	var key, own, out, exp;
	if (IS_GLOBAL) source = name;
	for (key in source) {
		// contains in native
		own = !IS_FORCED && target && target[key] !== undefined;
		// export native or passed
		out = (own ? target : source)[key];
		// bind timers to global for call from export context
		exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		// extend global
		if (target) redefine(target, key, out, type & $export.U);
		// export
		if (exports[key] != out) hide(exports, key, exp);
		if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	}
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var hide = __webpack_require__(27);
var has = __webpack_require__(54);
var SRC = __webpack_require__(64)('src');
var $toString = __webpack_require__(126);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(45).inspectSource = function (it) {
	return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
	var isFunction = typeof val == 'function';
	if (isFunction) has(val, 'name') || hide(val, 'name', key);
	if (O[key] === val) return;
	if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	if (O === global) {
		O[key] = val;
	} else if (!safe) {
		delete O[key];
		hide(O, key, val);
	} else if (O[key]) {
		O[key] = val;
	} else {
		hide(O, key, val);
	}
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
	return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperty(obj, key, value) {
	if (key in obj) {
		_Object$defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}

	return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
	if (it == undefined) throw TypeError("Can't call method on  " + it);
	return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
	return toString.call(it).slice(8, -1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(113);
var enumBugKeys = __webpack_require__(73);

module.exports = Object.keys || function keys(O) {
	return $keys(O, enumBugKeys);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(40));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(49));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(35));

var _argsObject = _interopRequireDefault(__webpack_require__(210));

var CommandBase = /*#__PURE__*/function (_ArgsObject) {
	(0, _inherits2.default)(CommandBase, _ArgsObject);

	var _super = (0, _createSuper2.default)(CommandBase);

	/**
	 * Current component.
	 *
	 * @type {Component}
	 */

	/**
	 * Function constructor().
	 *
	 * Create Commands Base.
	 *
	 * @param [args={}]
	 * @param [commandsAPI={}]
	 */
	function CommandBase(args) {
		var _this;

		var commandsAPI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e.commands;
		(0, _classCallCheck2.default)(this, CommandBase);
		_this = _super.call(this, args); // Acknowledge self about which command it run.

		(0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "component", void 0);
		_this.currentCommand = commandsAPI.getCurrentLast(); // Assign instance of current component.

		_this.component = commandsAPI.getComponent(_this.currentCommand); // Who ever need do something before without `super` the constructor can use `initialize` method.

		_this.initialize(args); // Refresh args, maybe the changed via `initialize`.


		args = _this.args; // Validate args before run.

		_this.validateArgs(args);

		return _this;
	}
	/**
	 * Function requireContainer().
	 *
	 * Validate `arg.container` & `arg.containers`.
	 *
	 * @param {{}} args
	 *
	 * @throws {Error}
	 */


	(0, _createClass2.default)(CommandBase, [{
		key: "requireContainer",
		value: function requireContainer() {
			var _this2 = this;

			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.args;

			if (!args.container && !args.containers) {
				throw Error('container or containers are required.');
			}

			if (args.container && args.containers) {
				throw Error('container and containers cannot go together please select one of them.');
			}

			var containers = args.containers || [args.container];
			containers.forEach(function (container) {
				_this2.requireArgumentInstance('container', elementorModules.editor.Container, {
					container: container
				});
			});
		}
		/**
		 * Function initialize().
		 *
		 * Initialize command, called after construction.
		 *
		 * @param [args={}]
		 */

	}, {
		key: "initialize",
		value: function initialize() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		} // eslint-disable-line no-unused-vars

		/**
		 * Function validateArgs().
		 *
		 * Validate command arguments.
		 *
		 * @param [args={}]
		 */

	}, {
		key: "validateArgs",
		value: function validateArgs() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		} // eslint-disable-line no-unused-vars

		/**
		 * Function isDataChanged().
		 *
		 * Whether the editor needs to set change flag on/off.
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			return false;
		}
		/**
		 * Function apply().
		 *
		 * Do the actual command.
		 *
		 * @param [args={}]
		 *
		 * @returns {*}
		 */

	}, {
		key: "apply",
		value: function apply() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			// eslint-disable-line no-unused-vars
			elementorModules.ForceMethodImplementation();
		}
		/**
		 * Function run().
		 *
		 * Run command with history & hooks.
		 *
		 * @returns {*}
		 */

	}, {
		key: "run",
		value: function run() {
			var _this3 = this;

			var result; // For UI Hooks.

			this.onBeforeRun(this.args);

			try {
				// For Data hooks.
				this.onBeforeApply(this.args);
				result = this.apply(this.args);
			} catch (e) {
				this.onCatchApply(e); // Catch 'Hook-Break' that comes from hooks base.

				if (e instanceof $e.modules.HookBreak) {
					// Bypass.
					return false;
				}
			}

			var onAfter = function onAfter(_result) {
				_this3.onAfterApply(_this3.args, _result);

				if (_this3.isDataChanged()) {
					$e.internal('document/save/set-is-modified', {
						status: true
					});
				} // For UI hooks.


				_this3.onAfterRun(_this3.args, _result);
			}; // TODO: Temp code determine if it's a jQuery deferred object.


			if (result && 'object' === (0, _typeof2.default)(result) && result.promise && result.then && result.fail) {
				result.fail(this.onCatchApply.bind(this));
				result.done(onAfter);
			} else {
				onAfter(result);
			}

			return result;
		}
		/**
		 * Function onBeforeRun.
		 *
		 * Called before run().
		 *
		 * @param [args={}]
		 */

	}, {
		key: "onBeforeRun",
		value: function onBeforeRun() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			$e.hooks.runUIBefore(this.currentCommand, args);
		}
		/**
		 * Function onAfterRun.
		 *
		 * Called after run().
		 *
		 * @param [args={}]
		 * @param [result={*}]
		 */

	}, {
		key: "onAfterRun",
		value: function onAfterRun() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var result = arguments.length > 1 ? arguments[1] : undefined;
			$e.hooks.runUIAfter(this.currentCommand, args, result);
		}
		/**
		 * Function onBeforeApply.
		 *
		 * Called before apply().
		 *
		 * @param [args={}]
		 */

	}, {
		key: "onBeforeApply",
		value: function onBeforeApply() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			$e.hooks.runDataDependency(this.currentCommand, args);
		}
		/**
		 * Function onAfterApply.
		 *
		 * Called after apply().
		 *
		 * @param [args={}]
		 * @param [result={*}]
		 */

	}, {
		key: "onAfterApply",
		value: function onAfterApply() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var result = arguments.length > 1 ? arguments[1] : undefined;
			$e.hooks.runDataAfter(this.currentCommand, args, result);
		}
		/**
		 * Function onCatchApply.
		 *
		 * Called after apply() failed.
		 *
		 * @param {Error} e
		 */

	}, {
		key: "onCatchApply",
		value: function onCatchApply(e) {
			$e.hooks.runDataCatch(this.currentCommand, this.args, e);
			elementorCommon.helpers.consoleError(e);
			$e.hooks.runUICatch(this.currentCommand, this.args, e);
		}
	}]);
	return CommandBase;
}(_argsObject.default);

exports.default = CommandBase;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(138);

var _Symbol = __webpack_require__(105);

function _typeof(obj) {
	"@babel/helpers - typeof";

	if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
		module.exports = _typeof = function _typeof(obj) {
			return typeof obj;
		};
	} else {
		module.exports = _typeof = function _typeof(obj) {
			return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
		};
	}

	return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(50);
var min = Math.min;
module.exports = function (it) {
	return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (it) {
	if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
	return {
		enumerable: !(bitmap & 1),
		configurable: !(bitmap & 2),
		writable: !(bitmap & 4),
		value: value
	};
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(116);
var toPrimitive = __webpack_require__(108);
var dP = Object.defineProperty;

exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	anObject(O);
	P = toPrimitive(P, true);
	anObject(Attributes);
	if (IE8_DOM_DEFINE) try {
		return dP(O, P, Attributes);
	} catch (e) { /* empty */ }
	if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	if ('value' in Attributes) O[P] = Attributes.value;
	return O;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(128);
var enumBugKeys = __webpack_require__(73);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
	// Thrash, waste and sodomy: IE GC bug
	var iframe = __webpack_require__(92)('iframe');
	var i = enumBugKeys.length;
	var lt = '<';
	var gt = '>';
	var iframeDocument;
	iframe.style.display = 'none';
	__webpack_require__(129).appendChild(iframe);
	iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	// createDict = iframe.contentWindow.Object;
	// html.removeChild(iframe);
	iframeDocument = iframe.contentWindow.document;
	iframeDocument.open();
	iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	iframeDocument.close();
	createDict = iframeDocument.F;
	while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	return createDict();
};

module.exports = Object.create || function create(O, Properties) {
	var result;
	if (O !== null) {
		Empty[PROTOTYPE] = anObject(O);
		result = new Empty();
		Empty[PROTOTYPE] = null;
		// add "__proto__" for Object.getPrototypeOf polyfill
		result[IE_PROTO] = O;
	} else result = createDict();
	return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
	if (self === void 0) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}

	return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
	return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
	return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).f;
var has = __webpack_require__(19);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
	if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(18);
var toObject = __webpack_require__(81);
var toLength = __webpack_require__(41);
var toInteger = __webpack_require__(50);
var advanceStringIndex = __webpack_require__(109);
var regExpExec = __webpack_require__(89);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
	return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(90)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
	return [
		// `String.prototype.replace` method
		// https://tc39.github.io/ecma262/#sec-string.prototype.replace
		function replace(searchValue, replaceValue) {
			var O = defined(this);
			var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
			return fn !== undefined
				? fn.call(searchValue, O, replaceValue)
				: $replace.call(String(O), searchValue, replaceValue);
		},
		// `RegExp.prototype[@@replace]` method
		// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
		function (regexp, replaceValue) {
			var res = maybeCallNative($replace, regexp, this, replaceValue);
			if (res.done) return res.value;

			var rx = anObject(regexp);
			var S = String(this);
			var functionalReplace = typeof replaceValue === 'function';
			if (!functionalReplace) replaceValue = String(replaceValue);
			var global = rx.global;
			if (global) {
				var fullUnicode = rx.unicode;
				rx.lastIndex = 0;
			}
			var results = [];
			while (true) {
				var result = regExpExec(rx, S);
				if (result === null) break;
				results.push(result);
				if (!global) break;
				var matchStr = String(result[0]);
				if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
			}
			var accumulatedResult = '';
			var nextSourcePosition = 0;
			for (var i = 0; i < results.length; i++) {
				result = results[i];
				var matched = String(result[0]);
				var position = max(min(toInteger(result.index), S.length), 0);
				var captures = [];
				// NOTE: This is equivalent to
				//   captures = result.slice(1).map(maybeToString)
				// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
				// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
				// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
				for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
				var namedCaptures = result.groups;
				if (functionalReplace) {
					var replacerArgs = [matched].concat(captures, position, S);
					if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
					var replacement = String(replaceValue.apply(undefined, replacerArgs));
				} else {
					replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
				}
				if (position >= nextSourcePosition) {
					accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
					nextSourcePosition = position + matched.length;
				}
			}
			return accumulatedResult + S.slice(nextSourcePosition);
		}
	];

		// https://tc39.github.io/ecma262/#sec-getsubstitution
	function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
		var tailPos = position + matched.length;
		var m = captures.length;
		var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
		if (namedCaptures !== undefined) {
			namedCaptures = toObject(namedCaptures);
			symbols = SUBSTITUTION_SYMBOLS;
		}
		return $replace.call(replacement, symbols, function (match, ch) {
			var capture;
			switch (ch.charAt(0)) {
				case '$': return '$';
				case '&': return matched;
				case '`': return str.slice(0, position);
				case "'": return str.slice(tailPos);
				case '<':
					capture = namedCaptures[ch.slice(1, -1)];
					break;
				default: // \d\d?
					var n = +ch;
					if (n === 0) return match;
					if (n > m) {
						var f = floor(n / 10);
						if (f === 0) return match;
						if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
						return match;
					}
					capture = captures[n - 1];
			}
			return capture === undefined ? '' : capture;
		});
	}
});


/***/ }),
/* 54 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
	return hasOwnProperty.call(it, key);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(48);
var createDesc = __webpack_require__(43);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(69);
var has = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(111);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	O = toIObject(O);
	P = toPrimitive(P, true);
	if (IE8_DOM_DEFINE) try {
		return gOPD(O, P);
	} catch (e) { /* empty */ }
	if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
	if (it == undefined) throw TypeError("Can't call method on  " + it);
	return it;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(165)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(94)(String, 'String', function (iterated) {
	this._t = String(iterated); // target
	this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
	var O = this._t;
	var index = this._i;
	var point;
	if (index >= O.length) return { value: undefined, done: true };
	point = $at(O, index);
	this._i += point.length;
	return { value: point, done: false };
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(79);
module.exports = function (fn, that, length) {
	aFunction(fn);
	if (that === undefined) return fn;
	switch (length) {
		case 1: return function (a) {
			return fn.call(that, a);
		};
		case 2: return function (a, b) {
			return fn.call(that, a, b);
		};
		case 3: return function (a, b, c) {
			return fn.call(that, a, b, c);
		};
	}
	return function (/* ...args */) {
		return fn.apply(that, arguments);
	};
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
	return toString.call(it).slice(8, -1);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(167);
var global = __webpack_require__(8);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(34);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
	var NAME = DOMIterables[i];
	var Collection = global[NAME];
	var proto = Collection && Collection.prototype;
	if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

__webpack_require__(53);

var _keys = _interopRequireDefault(__webpack_require__(23));

__webpack_require__(68);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85));

var _entries = _interopRequireDefault(__webpack_require__(66));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ComponentBase = /*#__PURE__*/function (_elementorModules$Mod) {
	(0, _inherits2.default)(ComponentBase, _elementorModules$Mod);

	var _super = (0, _createSuper2.default)(ComponentBase);

	function ComponentBase() {
		(0, _classCallCheck2.default)(this, ComponentBase);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ComponentBase, [{
		key: "__construct",
		value: function __construct() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			if (args.manager) {
				this.manager = args.manager;
			}

			this.commands = this.defaultCommands();
			this.commandsInternal = this.defaultCommandsInternal();
			this.hooks = this.defaultHooks();
			this.routes = this.defaultRoutes();
			this.tabs = this.defaultTabs();
			this.shortcuts = this.defaultShortcuts();
			this.utils = this.defaultUtils();
			this.defaultRoute = '';
			this.currentTab = '';
		}
	}, {
		key: "registerAPI",
		value: function registerAPI() {
			var _this = this;

			(0, _entries.default)(this.getTabs()).forEach(function (tab) {
				return _this.registerTabRoute(tab[0]);
			});
			(0, _entries.default)(this.getRoutes()).forEach(function (_ref) {
				var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
						route = _ref2[0],
						callback = _ref2[1];

				return _this.registerRoute(route, callback);
			});
			(0, _entries.default)(this.getCommands()).forEach(function (_ref3) {
				var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
						command = _ref4[0],
						callback = _ref4[1];

				return _this.registerCommand(command, callback);
			});
			(0, _entries.default)(this.getCommandsInternal()).forEach(function (_ref5) {
				var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
						command = _ref6[0],
						callback = _ref6[1];

				return _this.registerCommandInternal(command, callback);
			});
			(0, _entries.default)(this.getHooks()).forEach(function (_ref7) {
				var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
						hook = _ref8[0],
						instance = _ref8[1];

				return _this.registerHook(instance);
			}); // eslint-disable-line no-unused-vars
		}
	}, {
		key: "getNamespace",
		value: function getNamespace() {
			elementorModules.ForceMethodImplementation();
		}
	}, {
		key: "getRootContainer",
		value: function getRootContainer() {
			var parts = this.getNamespace().split('/');
			return parts[0];
		}
	}, {
		key: "defaultTabs",
		value: function defaultTabs() {
			return {};
		}
	}, {
		key: "defaultRoutes",
		value: function defaultRoutes() {
			return {};
		}
	}, {
		key: "defaultCommands",
		value: function defaultCommands() {
			return {};
		}
	}, {
		key: "defaultCommandsInternal",
		value: function defaultCommandsInternal() {
			return {};
		}
	}, {
		key: "defaultHooks",
		value: function defaultHooks() {
			return {};
		}
	}, {
		key: "defaultShortcuts",
		value: function defaultShortcuts() {
			return {};
		}
	}, {
		key: "defaultUtils",
		value: function defaultUtils() {
			return {};
		}
	}, {
		key: "getCommands",
		value: function getCommands() {
			return this.commands;
		}
	}, {
		key: "getCommandsInternal",
		value: function getCommandsInternal() {
			return this.commandsInternal;
		}
	}, {
		key: "getHooks",
		value: function getHooks() {
			return this.hooks;
		}
	}, {
		key: "getRoutes",
		value: function getRoutes() {
			return this.routes;
		}
	}, {
		key: "getTabs",
		value: function getTabs() {
			return this.tabs;
		}
	}, {
		key: "getShortcuts",
		value: function getShortcuts() {
			return this.shortcuts;
		}
	}, {
		key: "registerCommand",
		value: function registerCommand(command, callback) {
			$e.commands.register(this, command, callback);
		}
		/**
		 * @param {HookBase} instance
		 */

	}, {
		key: "registerHook",
		value: function registerHook(instance) {
			return instance.register();
		}
	}, {
		key: "registerCommandInternal",
		value: function registerCommandInternal(command, callback) {
			$e.commandsInternal.register(this, command, callback);
		}
	}, {
		key: "registerRoute",
		value: function registerRoute(route, callback) {
			$e.routes.register(this, route, callback);
		}
	}, {
		key: "unregisterRoute",
		value: function unregisterRoute(route) {
			$e.routes.unregister(this, route);
		}
	}, {
		key: "registerTabRoute",
		value: function registerTabRoute(tab) {
			var _this2 = this;

			this.registerRoute(tab, function () {
				return _this2.activateTab(tab);
			});
		}
	}, {
		key: "dependency",
		value: function dependency() {
			return true;
		}
	}, {
		key: "open",
		value: function open() {
			return true;
		}
	}, {
		key: "close",
		value: function close() {
			if (!this.isOpen) {
				return false;
			}

			this.isOpen = false;
			this.inactivate();
			$e.routes.clearCurrent(this.getNamespace());
			$e.routes.clearHistory(this.getRootContainer());
			return true;
		}
	}, {
		key: "activate",
		value: function activate() {
			$e.components.activate(this.getNamespace());
		}
	}, {
		key: "inactivate",
		value: function inactivate() {
			$e.components.inactivate(this.getNamespace());
		}
	}, {
		key: "isActive",
		value: function isActive() {
			return $e.components.isActive(this.getNamespace());
		}
	}, {
		key: "onRoute",
		value: function onRoute(route) {
			this.toggleRouteClass(route, true);
			this.toggleHistoryClass();
			this.activate();
			this.trigger('route/open', route);
		}
	}, {
		key: "onCloseRoute",
		value: function onCloseRoute(route) {
			this.toggleRouteClass(route, false);
			this.inactivate();
			this.trigger('route/close', route);
		}
	}, {
		key: "setDefaultRoute",
		value: function setDefaultRoute(route) {
			this.defaultRoute = this.getNamespace() + '/' + route;
		}
	}, {
		key: "getDefaultRoute",
		value: function getDefaultRoute() {
			return this.defaultRoute;
		}
	}, {
		key: "removeTab",
		value: function removeTab(tab) {
			delete this.tabs[tab];
			this.unregisterRoute(tab);
		}
	}, {
		key: "hasTab",
		value: function hasTab(tab) {
			return !!this.tabs[tab];
		}
	}, {
		key: "addTab",
		value: function addTab(tab, args, position) {
			var _this3 = this;

			this.tabs[tab] = args; // It can be 0.

			if ('undefined' !== typeof position) {
				var newTabs = {};
				var ids = (0, _keys.default)(this.tabs); // Remove new tab

				ids.pop(); // Add it to position.

				ids.splice(position, 0, tab);
				ids.forEach(function (id) {
					newTabs[id] = _this3.tabs[id];
				});
				this.tabs = newTabs;
			}

			this.registerTabRoute(tab);
		}
	}, {
		key: "getTabsWrapperSelector",
		value: function getTabsWrapperSelector() {
			return '';
		}
	}, {
		key: "getTabRoute",
		value: function getTabRoute(tab) {
			return this.getNamespace() + '/' + tab;
		}
	}, {
		key: "renderTab",
		value: function renderTab(tab) {} // eslint-disable-line

	}, {
		key: "activateTab",
		value: function activateTab(tab) {
			var _this4 = this;

			this.currentTab = tab;
			this.renderTab(tab);
			jQuery(this.getTabsWrapperSelector() + ' .elementor-component-tab').off('click').on('click', function (event) {
				$e.route(_this4.getTabRoute(event.currentTarget.dataset.tab));
			}).removeClass('elementor-active').filter('[data-tab="' + tab + '"]').addClass('elementor-active');
		}
	}, {
		key: "getActiveTabConfig",
		value: function getActiveTabConfig() {
			return this.tabs[this.currentTab] || {};
		}
	}, {
		key: "getBodyClass",
		value: function getBodyClass(route) {
			return 'e-route-' + route.replace(/\//g, '-');
		}
		/**
		 * If command includes uppercase character convert it to lowercase and add `-`.
		 * e.g: `CopyAll` is converted to `copy-all`.
		 */

	}, {
		key: "normalizeCommandName",
		value: function normalizeCommandName(commandName) {
			return commandName.replace(/[A-Z]/g, function (match, offset) {
				return (offset > 0 ? '-' : '') + match.toLowerCase();
			});
		}
	}, {
		key: "importCommands",
		value: function importCommands(commandsFromImport) {
			var _this5 = this;

			var commands = {}; // Convert `Commands` to `ComponentBase` workable format.

			(0, _entries.default)(commandsFromImport).forEach(function (_ref9) {
				var _ref10 = (0, _slicedToArray2.default)(_ref9, 2),
						className = _ref10[0],
						Class = _ref10[1];

				var command = _this5.normalizeCommandName(className);

				commands[command] = function (args) {
					return new Class(args).run();
				};
			});
			return commands;
		}
	}, {
		key: "importHooks",
		value: function importHooks(hooksFromImport) {
			var hooks = {};

			for (var key in hooksFromImport) {
				var hook = new hooksFromImport[key]();
				hooks[hook.getId()] = hook;
			}

			return hooks;
		}
	}, {
		key: "toggleRouteClass",
		value: function toggleRouteClass(route, state) {
			elementorCommon.elements.$body.toggleClass(this.getBodyClass(route), state);
		}
	}, {
		key: "toggleHistoryClass",
		value: function toggleHistoryClass() {
			elementorCommon.elements.$body.toggleClass('e-routes-has-history', !!$e.routes.getHistory(this.getRootContainer()).length);
		}
	}]);
	return ComponentBase;
}(elementorModules.Module);

exports.default = ComponentBase;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(137);

var _Object$defineProperty = __webpack_require__(1);

var _typeof = __webpack_require__(40);

var _WeakMap = __webpack_require__(274);

function _getRequireWildcardCache() {
	if (typeof _WeakMap !== "function") return null;
	var cache = new _WeakMap();

	_getRequireWildcardCache = function _getRequireWildcardCache() {
		return cache;
	};

	return cache;
}

function _interopRequireWildcard(obj) {
	if (obj && obj.__esModule) {
		return obj;
	}

	if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
		return {
			"default": obj
		};
	}

	var cache = _getRequireWildcardCache();

	if (cache && cache.has(obj)) {
		return cache.get(obj);
	}

	var newObj = {};
	var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

	for (var key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

			if (desc && (desc.get || desc.set)) {
				_Object$defineProperty(newObj, key, desc);
			} else {
				newObj[key] = obj[key];
			}
		}
	}

	newObj["default"] = obj;

	if (cache) {
		cache.set(obj, newObj);
	}

	return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(45);
var global = __webpack_require__(15);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
	return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
	version: core.version,
	mode: __webpack_require__(100) ? 'pure' : 'global',
	copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
	return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(229);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(72);
var min = Math.min;
module.exports = function (it) {
	return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(120);
var anObject = __webpack_require__(18);
var speciesConstructor = __webpack_require__(143);
var advanceStringIndex = __webpack_require__(109);
var toLength = __webpack_require__(41);
var callRegExpExec = __webpack_require__(89);
var regexpExec = __webpack_require__(83);
var fails = __webpack_require__(28);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(90)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
	var internalSplit;
	if (
		'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
		'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
		'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
		'.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
		'.'[$SPLIT](/()()/)[LENGTH] > 1 ||
		''[$SPLIT](/.?/)[LENGTH]
	) {
		// based on es5-shim implementation, need to rework it
		internalSplit = function (separator, limit) {
			var string = String(this);
			if (separator === undefined && limit === 0) return [];
			// If `separator` is not a regex, use native split
			if (!isRegExp(separator)) return $split.call(string, separator, limit);
			var output = [];
			var flags = (separator.ignoreCase ? 'i' : '') +
									(separator.multiline ? 'm' : '') +
									(separator.unicode ? 'u' : '') +
									(separator.sticky ? 'y' : '');
			var lastLastIndex = 0;
			var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
			// Make `global` and avoid `lastIndex` issues by working with a copy
			var separatorCopy = new RegExp(separator.source, flags + 'g');
			var match, lastIndex, lastLength;
			while (match = regexpExec.call(separatorCopy, string)) {
				lastIndex = separatorCopy[LAST_INDEX];
				if (lastIndex > lastLastIndex) {
					output.push(string.slice(lastLastIndex, match.index));
					if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
					lastLength = match[0][LENGTH];
					lastLastIndex = lastIndex;
					if (output[LENGTH] >= splitLimit) break;
				}
				if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
			}
			if (lastLastIndex === string[LENGTH]) {
				if (lastLength || !separatorCopy.test('')) output.push('');
			} else output.push(string.slice(lastLastIndex));
			return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
		};
	// Chakra, V8
	} else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
		internalSplit = function (separator, limit) {
			return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
		};
	} else {
		internalSplit = $split;
	}

	return [
		// `String.prototype.split` method
		// https://tc39.github.io/ecma262/#sec-string.prototype.split
		function split(separator, limit) {
			var O = defined(this);
			var splitter = separator == undefined ? undefined : separator[SPLIT];
			return splitter !== undefined
				? splitter.call(separator, O, limit)
				: internalSplit.call(String(O), separator, limit);
		},
		// `RegExp.prototype[@@split]` method
		// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
		//
		// NOTE: This cannot be properly polyfilled in engines that don't support
		// the 'y' flag.
		function (regexp, limit) {
			var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
			if (res.done) return res.value;

			var rx = anObject(regexp);
			var S = String(this);
			var C = speciesConstructor(rx, RegExp);

			var unicodeMatching = rx.unicode;
			var flags = (rx.ignoreCase ? 'i' : '') +
									(rx.multiline ? 'm' : '') +
									(rx.unicode ? 'u' : '') +
									(SUPPORTS_Y ? 'y' : 'g');

			// ^(? + rx + ) is needed, in combination with some S slicing, to
			// simulate the 'y' flag.
			var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
			var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
			if (lim === 0) return [];
			if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
			var p = 0;
			var q = 0;
			var A = [];
			while (q < S.length) {
				splitter.lastIndex = SUPPORTS_Y ? q : 0;
				var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
				var e;
				if (
					z === null ||
					(e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
				) {
					q = advanceStringIndex(S, q, unicodeMatching);
				} else {
					A.push(S.slice(p, q));
					if (A.length === lim) return A;
					for (var i = 1; i <= z.length - 1; i++) {
						A.push(z[i]);
						if (A.length === lim) return A;
					}
					q = p = e;
				}
			}
			A.push(S.slice(p));
			return A;
		}
	];
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
	if (!isObject(it)) return it;
	var fn, val;
	if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(71)('keys');
var uid = __webpack_require__(51);
module.exports = function (key) {
	return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
	return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
	version: core.version,
	mode: __webpack_require__(46) ? 'pure' : 'global',
	copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
	return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
	'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(46);
var wksExt = __webpack_require__(74);
var defineProperty = __webpack_require__(16).f;
module.exports = function (name) {
	var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(51)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(19);
var setDesc = __webpack_require__(16).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
	return true;
};
var FREEZE = !__webpack_require__(20)(function () {
	return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
	setDesc(it, META, { value: {
		i: 'O' + ++id, // object ID
		w: {}          // weak collections IDs
	} });
};
var fastKey = function (it, create) {
	// return primitive with prefix
	if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	if (!has(it, META)) {
		// can't set metadata to uncaught frozen object
		if (!isExtensible(it)) return 'F';
		// not necessary to add metadata
		if (!create) return 'E';
		// add missing metadata
		setMeta(it);
	// return object ID
	} return it[META].i;
};
var getWeak = function (it, create) {
	if (!has(it, META)) {
		// can't set metadata to uncaught frozen object
		if (!isExtensible(it)) return true;
		// not necessary to add metadata
		if (!create) return false;
		// add missing metadata
		setMeta(it);
	// return hash weak collections IDs
	} return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
	if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	return it;
};
var meta = module.exports = {
	KEY: META,
	NEED: false,
	fastKey: fastKey,
	getWeak: getWeak,
	onFreeze: onFreeze
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(11)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(27)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
	ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function (it) {
	if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	return it;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(19);
var toObject = __webpack_require__(31);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
	O = toObject(O);
	if (has(O, IE_PROTO)) return O[IE_PROTO];
	if (typeof O.constructor == 'function' && O instanceof O.constructor) {
		return O.constructor.prototype;
	} return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
	return Object(defined(it));
};


/***/ }),
/* 82 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(110);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
	var re1 = /a/,
			re2 = /b*/g;
	nativeExec.call(re1, 'a');
	nativeExec.call(re2, 'a');
	return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
	patchedExec = function exec(str) {
		var re = this;
		var lastIndex, reCopy, match, i;

		if (NPCG_INCLUDED) {
			reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
		}
		if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

		match = nativeExec.call(re, str);

		if (UPDATES_LAST_INDEX_WRONG && match) {
			re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
		}
		if (NPCG_INCLUDED && match && match.length > 1) {
			// Fix browsers whose `exec` methods don't consistently return `undefined`
			// for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
			// eslint-disable-next-line no-loop-func
			nativeReplace.call(match[0], reCopy, function () {
				for (i = 1; i < arguments.length - 2; i++) {
					if (arguments[i] === undefined) match[i] = undefined;
				}
			});
		}

		return match;
	};
}

module.exports = patchedExec;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(6);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
	var fn = (core.Object || {})[KEY] || Object[KEY];
	var exp = {};
	exp[KEY] = exec(fn);
	$export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(218);

var iterableToArrayLimit = __webpack_require__(221);

var unsupportedIterableToArray = __webpack_require__(184);

var nonIterableRest = __webpack_require__(228);

function _slicedToArray(arr, i) {
	return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(30);
var call = __webpack_require__(133);
var isArrayIter = __webpack_require__(134);
var anObject = __webpack_require__(12);
var toLength = __webpack_require__(67);
var getIterFn = __webpack_require__(114);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	var f = ctx(fn, that, entries ? 2 : 1);
	var index = 0;
	var length, step, iterator, result;
	if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	// fast case for arrays with default iterator
	if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
		result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
		if (result === BREAK || result === RETURN) return result;
	} else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
		result = call(iterator, f, step.value, entries);
		if (result === BREAK || result === RETURN) return result;
	}
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var History = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(History, _CommandBase);

	var _super = (0, _createSuper2.default)(History);

	function History(args) {
		var _this;

		(0, _classCallCheck2.default)(this, History);
		_this = _super.call(this, args);
		/**
		 * Get History from child command.
		 *
		 * @type {{}|boolean}
		 */

		_this.history = _this.getHistory(args);
		/**
		 * @type {number|boolean}
		 */

		_this.historyId = false;
		return _this;
	}
	/**
	 * Function getHistory().
	 *
	 * Get history object from child, do nothing if it false.
	 *
	 * @param [args={}]
	 *
	 * @returns {({}|boolean)}
	 */


	(0, _createClass2.default)(History, [{
		key: "getHistory",
		value: function getHistory() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			// eslint-disable-line no-unused-vars
			elementorModules.ForceMethodImplementation();
		}
		/**
		 * Function isHistoryActive().
		 *
		 * Return `elementor.documents.getCurrent().history.getActive()`.
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "isHistoryActive",
		value: function isHistoryActive() {
			return elementor.documents.getCurrent().history.getActive();
		}
	}, {
		key: "onBeforeRun",
		value: function onBeforeRun(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(History.prototype), "onBeforeRun", this).call(this, args);

			if (this.history && this.isHistoryActive()) {
				this.historyId = $e.internal('document/history/start-log', this.history);
			}
		}
	}, {
		key: "onAfterRun",
		value: function onAfterRun(args, result) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(History.prototype), "onAfterRun", this).call(this, args, result);

			if (this.history && this.isHistoryActive()) {
				$e.internal('document/history/end-log', {
					id: this.historyId
				});
			}
		}
	}, {
		key: "onCatchApply",
		value: function onCatchApply(e) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(History.prototype), "onCatchApply", this).call(this, e); // Rollback history on failure.

			if (e instanceof $e.modules.HookBreak && this.historyId) {
				$e.internal('document/history/delete-log', {
					id: this.historyId
				});
			}
		}
	}]);
	return History;
}(_commandBase.default);

exports.default = History;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(103);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
	var exec = R.exec;
	if (typeof exec === 'function') {
		var result = exec.call(R, S);
		if (typeof result !== 'object') {
			throw new TypeError('RegExp exec method returned something other than an Object or null');
		}
		return result;
	}
	if (classof(R) !== 'RegExp') {
		throw new TypeError('RegExp#exec called on incompatible receiver');
	}
	return builtinExec.call(R, S);
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(182);
var redefine = __webpack_require__(33);
var hide = __webpack_require__(27);
var fails = __webpack_require__(28);
var defined = __webpack_require__(36);
var wks = __webpack_require__(11);
var regexpExec = __webpack_require__(83);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	// #replace needs built-in support for named groups.
	// #match works fine because it just return the exec results, even if it has
	// a "grops" property.
	var re = /./;
	re.exec = function () {
		var result = [];
		result.groups = { a: '7' };
		return result;
	};
	return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	var re = /(?:)/;
	var originalExec = re.exec;
	re.exec = function () { return originalExec.apply(this, arguments); };
	var result = 'ab'.split(re);
	return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
	var SYMBOL = wks(KEY);

	var DELEGATES_TO_SYMBOL = !fails(function () {
		// String methods call symbol-named RegEp methods
		var O = {};
		O[SYMBOL] = function () { return 7; };
		return ''[KEY](O) != 7;
	});

	var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
		// Symbol-named RegExp methods call .exec
		var execCalled = false;
		var re = /a/;
		re.exec = function () { execCalled = true; return null; };
		if (KEY === 'split') {
			// RegExp[@@split] doesn't call the regex's exec method, but first creates
			// a new one. We need to return the patched regex when creating the new one.
			re.constructor = {};
			re.constructor[SPECIES] = function () { return re; };
		}
		re[SYMBOL]('');
		return !execCalled;
	}) : undefined;

	if (
		!DELEGATES_TO_SYMBOL ||
		!DELEGATES_TO_EXEC ||
		(KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
		(KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	) {
		var nativeRegExpMethod = /./[SYMBOL];
		var fns = exec(
			defined,
			SYMBOL,
			''[KEY],
			function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
				if (regexp.exec === regexpExec) {
					if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
						// The native String method already delegates to @@method (this
						// polyfilled function), leasing to infinite recursion.
						// We avoid it by directly calling the native @@method method.
						return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
					}
					return { done: true, value: nativeMethod.call(str, regexp, arg2) };
				}
				return { done: false };
			}
		);
		var strfn = fns[0];
		var rxfn = fns[1];

		redefine(String.prototype, KEY, strfn);
		hide(RegExp.prototype, SYMBOL, length == 2
			// 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
			// 21.2.5.11 RegExp.prototype[@@split](string, limit)
			? function (string, arg) { return rxfn.call(string, this, arg); }
			// 21.2.5.6 RegExp.prototype[@@match](string)
			// 21.2.5.9 RegExp.prototype[@@search](string)
			: function (string) { return rxfn.call(string, this); }
		);
	}
};


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
	return {
		enumerable: !(bitmap & 1),
		configurable: !(bitmap & 2),
		writable: !(bitmap & 4),
		value: value
	};
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
	return is ? document.createElement(it) : {};
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(46);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(88);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(34);
var $iterCreate = __webpack_require__(166);
var setToStringTag = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(80);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	$iterCreate(Constructor, NAME, next);
	var getMethod = function (kind) {
		if (!BUGGY && kind in proto) return proto[kind];
		switch (kind) {
			case KEYS: return function keys() { return new Constructor(this, kind); };
			case VALUES: return function values() { return new Constructor(this, kind); };
		} return function entries() { return new Constructor(this, kind); };
	};
	var TAG = NAME + ' Iterator';
	var DEF_VALUES = DEFAULT == VALUES;
	var VALUES_BUG = false;
	var proto = Base.prototype;
	var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	var $default = $native || getMethod(DEFAULT);
	var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	var methods, key, IteratorPrototype;
	// Fix native
	if ($anyNative) {
		IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
		if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
			// Set @@toStringTag to native iterators
			setToStringTag(IteratorPrototype, TAG, true);
			// fix for some old engines
			if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
		}
	}
	// fix Array#{values, @@iterator}.name in V8 / FF
	if (DEF_VALUES && $native && $native.name !== VALUES) {
		VALUES_BUG = true;
		$default = function values() { return $native.call(this); };
	}
	// Define iterator
	if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
		hide(proto, ITERATOR, $default);
	}
	// Plug for library
	Iterators[NAME] = $default;
	Iterators[TAG] = returnThis;
	if (DEFAULT) {
		methods = {
			values: DEF_VALUES ? $default : getMethod(VALUES),
			keys: IS_SET ? $default : getMethod(KEYS),
			entries: $entries
		};
		if (FORCED) for (key in methods) {
			if (!(key in proto)) redefine(proto, key, methods[key]);
		} else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	}
	return methods;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(59);
module.exports = Array.isArray || function isArray(arg) {
	return cof(arg) == 'Array';
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(102);
var defined = __webpack_require__(36);
module.exports = function (it) {
	return IObject(defined(it));
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(103);
var test = {};
test[__webpack_require__(11)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
	__webpack_require__(33)(Object.prototype, 'toString', function toString() {
		return '[object ' + classof(this) + ']';
	}, true);
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var document = __webpack_require__(15).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
	return is ? document.createElement(it) : {};
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(18);
var toLength = __webpack_require__(41);
var advanceStringIndex = __webpack_require__(109);
var regExpExec = __webpack_require__(89);

// @@match logic
__webpack_require__(90)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
	return [
		// `String.prototype.match` method
		// https://tc39.github.io/ecma262/#sec-string.prototype.match
		function match(regexp) {
			var O = defined(this);
			var fn = regexp == undefined ? undefined : regexp[MATCH];
			return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
		},
		// `RegExp.prototype[@@match]` method
		// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
		function (regexp) {
			var res = maybeCallNative($match, regexp, this);
			if (res.done) return res.value;
			var rx = anObject(regexp);
			var S = String(this);
			if (!rx.global) return regExpExec(rx, S);
			var fullUnicode = rx.unicode;
			rx.lastIndex = 0;
			var A = [];
			var n = 0;
			var result;
			while ((result = regExpExec(rx, S)) !== null) {
				var matchStr = String(result[0]);
				A[n] = matchStr;
				if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
				n++;
			}
			return n === 0 ? null : A;
		}
	];
});


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(113);
var hiddenKeys = __webpack_require__(73).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	return $keys(O, hiddenKeys);
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(37);
var TAG = __webpack_require__(11)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
	try {
		return it[key];
	} catch (e) { /* empty */ }
};

module.exports = function (it) {
	var O, T, B;
	return it === undefined ? 'Undefined' : it === null ? 'Null'
		// @@toStringTag case
		: typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		// builtinTag case
		: ARG ? cof(O)
		// ES3 arguments fallback
		: (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(59);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(169);

/***/ }),
/* 106 */
/***/ (function(module, exports) {



/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(59);
var TAG = __webpack_require__(10)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
	try {
		return it[key];
	} catch (e) { /* empty */ }
};

module.exports = function (it) {
	var O, T, B;
	return it === undefined ? 'Undefined' : it === null ? 'Null'
		// @@toStringTag case
		: typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		// builtinTag case
		: ARG ? cof(O)
		// ES3 arguments fallback
		: (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
	if (!isObject(it)) return it;
	var fn, val;
	if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(181)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
	return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(18);
module.exports = function () {
	var that = anObject(this);
	var result = '';
	if (that.global) result += 'g';
	if (that.ignoreCase) result += 'i';
	if (that.multiline) result += 'm';
	if (that.unicode) result += 'u';
	if (that.sticky) result += 'y';
	return result;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(20)(function () {
	return Object.defineProperty(__webpack_require__(92)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(19);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(158)(false);
var IE_PROTO = __webpack_require__(70)('IE_PROTO');

module.exports = function (object, names) {
	var O = toIObject(object);
	var i = 0;
	var result = [];
	var key;
	for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	// Don't enum bug & hidden keys
	while (names.length > i) if (has(O, key = names[i++])) {
		~arrayIndexOf(result, key) || result.push(key);
	}
	return result;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(107);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(34);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
	if (it != undefined) return it[ITERATOR]
		|| it['@@iterator']
		|| Iterators[classof(it)];
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(25) && !__webpack_require__(28)(function () {
	return Object.defineProperty(__webpack_require__(98)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(219);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(112);

function _setPrototypeOf(o, p) {
	module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
		o.__proto__ = p;
		return o;
	};

	return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(58);
var IObject = __webpack_require__(102);
var toObject = __webpack_require__(81);
var toLength = __webpack_require__(41);
var asc = __webpack_require__(140);
module.exports = function (TYPE, $create) {
	var IS_MAP = TYPE == 1;
	var IS_FILTER = TYPE == 2;
	var IS_SOME = TYPE == 3;
	var IS_EVERY = TYPE == 4;
	var IS_FIND_INDEX = TYPE == 6;
	var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	var create = $create || asc;
	return function ($this, callbackfn, that) {
		var O = toObject($this);
		var self = IObject(O);
		var f = ctx(callbackfn, that, 3);
		var length = toLength(self.length);
		var index = 0;
		var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
		var val, res;
		for (;length > index; index++) if (NO_HOLES || index in self) {
			val = self[index];
			res = f(val, index, O);
			if (TYPE) {
				if (IS_MAP) result[index] = res;   // map
				else if (res) switch (TYPE) {
					case 3: return true;             // some
					case 5: return val;              // find
					case 6: return index;            // findIndex
					case 2: result.push(val);        // filter
				} else if (IS_EVERY) return false; // every
			}
		}
		return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	};
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(26);
var cof = __webpack_require__(37);
var MATCH = __webpack_require__(11)('match');
module.exports = function (it) {
	var isRegExp;
	return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it, TYPE) {
	if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	return it;
};


/***/ }),
/* 122 */,
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(156);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(24);
module.exports = function (target, src, safe) {
	for (var key in src) {
		if (safe && target[key]) target[key] = src[key];
		else hide(target, key, src[key]);
	} return target;
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
	if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
		throw TypeError(name + ': incorrect invocation!');
	} return it;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63)('native-function-to-string', Function.toString);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(63)('keys');
var uid = __webpack_require__(64);
module.exports = function (key) {
	return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(38);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
	anObject(O);
	var keys = getKeys(Properties);
	var length = keys.length;
	var i = 0;
	var P;
	while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	return O;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
	var un = that === undefined;
	switch (args.length) {
		case 0: return un ? fn()
											: fn.call(that);
		case 1: return un ? fn(args[0])
											: fn.call(that, args[0]);
		case 2: return un ? fn(args[0], args[1])
											: fn.call(that, args[0], args[1]);
		case 3: return un ? fn(args[0], args[1], args[2])
											: fn.call(that, args[0], args[1], args[2]);
		case 4: return un ? fn(args[0], args[1], args[2], args[3])
											: fn.call(that, args[0], args[1], args[2], args[3]);
	} return fn.apply(that, args);
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(93);

function _isNativeReflectConstruct() {
	if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
	if (_Reflect$construct.sham) return false;
	if (typeof Proxy === "function") return true;

	try {
		Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
		return true;
	} catch (e) {
		return false;
	}
}

module.exports = _isNativeReflectConstruct;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
	return { value: value, done: !!done };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(12);
module.exports = function (iterator, fn, value, entries) {
	try {
		return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	// 7.4.6 IteratorClose(iterator, completion)
	} catch (e) {
		var ret = iterator['return'];
		if (ret !== undefined) anObject(ret.call(iterator));
		throw e;
	}
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(34);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
	return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _values = _interopRequireDefault(__webpack_require__(115));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _helperBc = _interopRequireDefault(__webpack_require__(298));

// TODO: this file should be deleted.
var Helper = /*#__PURE__*/function (_BackwardsCompatibili) {
	(0, _inherits2.default)(Helper, _BackwardsCompatibili);

	var _super = (0, _createSuper2.default)(Helper);

	function Helper() {
		(0, _classCallCheck2.default)(this, Helper);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Helper, null, [{
		key: "isValidChild",
		// TODO: This is not the right place for this function
		value: function isValidChild(childModel, parentModel) {
			var parentElType = parentModel.get('elType'),
					draggedElType = childModel.get('elType'),
					parentIsInner = parentModel.get('isInner'),
					draggedIsInner = childModel.get('isInner'); // Block's inner-section at inner-section column.

			if (draggedIsInner && 'section' === draggedElType && parentIsInner && 'column' === parentElType) {
				return false;
			}

			if (draggedElType === parentElType) {
				return false;
			}

			if ('section' === draggedElType && !draggedIsInner && 'column' === parentElType) {
				return false;
			}

			var childTypes = elementor.helpers.getElementChildType(parentElType);
			return childTypes && -1 !== childTypes.indexOf(childModel.get('elType'));
		} // TODO: This is not the right place for this function

	}, {
		key: "isValidGrandChild",
		value: function isValidGrandChild(childModel, targetContainer) {
			var result;
			var childElType = childModel.get('elType');

			switch (targetContainer.model.get('elType')) {
				case 'document':
					result = true;
					break;

				case 'section':
					result = 'widget' === childElType;
					break;

				default:
					result = false;
			}

			return result;
		} // TODO: This is not the right place for this function

	}, {
		key: "isSameElement",
		value: function isSameElement(sourceModel, targetContainer) {
			var targetElType = targetContainer.model.get('elType'),
					sourceElType = sourceModel.get('elType');

			if (targetElType !== sourceElType) {
				return false;
			}

			if ('column' === targetElType && 'column' === sourceElType) {
				return true;
			}

			return targetContainer.model.get('isInner') === sourceModel.get('isInner');
		} // TODO: This is not the right place for this function

	}, {
		key: "getPasteOptions",
		value: function getPasteOptions(sourceModel, targetContainer) {
			var result = {};
			result.isValidChild = this.isValidChild(sourceModel, targetContainer.model);
			result.isSameElement = this.isSameElement(sourceModel, targetContainer);
			result.isValidGrandChild = this.isValidGrandChild(sourceModel, targetContainer);
			return result;
		} // TODO: This is not the right place for this function

	}, {
		key: "isPasteEnabled",
		value: function isPasteEnabled(targetContainer) {
			var storage = elementorCommon.storage.get('clipboard'); // No storage? no paste.

			if (!storage || !storage[0]) {
				return false;
			}

			if (!(storage[0] instanceof Backbone.Model)) {
				storage[0] = new Backbone.Model(storage[0]);
			}

			var pasteOptions = this.getPasteOptions(storage[0], targetContainer);
			return (0, _values.default)(pasteOptions).some(function (opt) {
				return !!opt;
			});
		}
	}]);
	return Helper;
}(_helperBc.default);

exports.default = Helper;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(243);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(193);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(19);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(88);
var META = __webpack_require__(77).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(71);
var setToStringTag = __webpack_require__(52);
var uid = __webpack_require__(51);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(74);
var wksDefine = __webpack_require__(75);
var enumKeys = __webpack_require__(170);
var isArray = __webpack_require__(95);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var toObject = __webpack_require__(31);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(69);
var createDesc = __webpack_require__(43);
var _create = __webpack_require__(47);
var gOPNExt = __webpack_require__(171);
var $GOPD = __webpack_require__(55);
var $GOPS = __webpack_require__(82);
var $DP = __webpack_require__(16);
var $keys = __webpack_require__(38);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
	return _create(dP({}, 'a', {
		get: function () { return dP(this, 'a', { value: 7 }).a; }
	})).a != 7;
}) ? function (it, key, D) {
	var protoDesc = gOPD(ObjectProto, key);
	if (protoDesc) delete ObjectProto[key];
	dP(it, key, D);
	if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
	var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	sym._k = tag;
	return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	return typeof it == 'symbol';
} : function (it) {
	return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
	if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	anObject(it);
	key = toPrimitive(key, true);
	anObject(D);
	if (has(AllSymbols, key)) {
		if (!D.enumerable) {
			if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
			it[HIDDEN][key] = true;
		} else {
			if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
			D = _create(D, { enumerable: createDesc(0, false) });
		} return setSymbolDesc(it, key, D);
	} return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
	anObject(it);
	var keys = enumKeys(P = toIObject(P));
	var i = 0;
	var l = keys.length;
	var key;
	while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	return it;
};
var $create = function create(it, P) {
	return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	var E = isEnum.call(this, key = toPrimitive(key, true));
	if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	it = toIObject(it);
	key = toPrimitive(key, true);
	if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	var D = gOPD(it, key);
	if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	var names = gOPN(toIObject(it));
	var result = [];
	var i = 0;
	var key;
	while (names.length > i) {
		if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	} return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	var IS_OP = it === ObjectProto;
	var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	var result = [];
	var i = 0;
	var key;
	while (names.length > i) {
		if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	} return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
	$Symbol = function Symbol() {
		if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
		var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
		var $set = function (value) {
			if (this === ObjectProto) $set.call(OPSymbols, value);
			if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
			setSymbolDesc(this, tag, createDesc(1, value));
		};
		if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
		return wrap(tag);
	};
	redefine($Symbol[PROTOTYPE], 'toString', function toString() {
		return this._k;
	});

	$GOPD.f = $getOwnPropertyDescriptor;
	$DP.f = $defineProperty;
	__webpack_require__(101).f = gOPNExt.f = $getOwnPropertyNames;
	__webpack_require__(48).f = $propertyIsEnumerable;
	$GOPS.f = $getOwnPropertySymbols;

	if (DESCRIPTORS && !__webpack_require__(46)) {
		redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	}

	wksExt.f = function (name) {
		return wrap(wks(name));
	};
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
	// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	// 19.4.2.1 Symbol.for(key)
	'for': function (key) {
		return has(SymbolRegistry, key += '')
			? SymbolRegistry[key]
			: SymbolRegistry[key] = $Symbol(key);
	},
	// 19.4.2.5 Symbol.keyFor(sym)
	keyFor: function keyFor(sym) {
		if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
		for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	},
	useSetter: function () { setter = true; },
	useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	// 19.1.2.2 Object.create(O [, Properties])
	create: $create,
	// 19.1.2.4 Object.defineProperty(O, P, Attributes)
	defineProperty: $defineProperty,
	// 19.1.2.3 Object.defineProperties(O, Properties)
	defineProperties: $defineProperties,
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	// 19.1.2.7 Object.getOwnPropertyNames(O)
	getOwnPropertyNames: $getOwnPropertyNames,
	// 19.1.2.8 Object.getOwnPropertySymbols(O)
	getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
	getOwnPropertySymbols: function getOwnPropertySymbols(it) {
		return $GOPS.f(toObject(it));
	}
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	var S = $Symbol();
	// MS Edge converts symbol values to JSON as {}
	// WebKit converts symbol values to JSON as null
	// V8 throws on boxed symbols
	return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
	stringify: function stringify(it) {
		var args = [it];
		var i = 1;
		var replacer, $replacer;
		while (arguments.length > i) args.push(arguments[i++]);
		$replacer = replacer = args[1];
		if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
		if (!isArray(replacer)) replacer = function (key, value) {
			if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
			if (!isSymbol(value)) return value;
		};
		args[1] = replacer;
		return _stringify.apply($JSON, args);
	}
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(24)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(141);

module.exports = function (original, length) {
	return new (speciesConstructor(original))(length);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var isArray = __webpack_require__(142);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (original) {
	var C;
	if (isArray(original)) {
		C = original.constructor;
		// cross-realm fallback
		if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
		if (isObject(C)) {
			C = C[SPECIES];
			if (C === null) C = undefined;
		}
	} return C === undefined ? Array : C;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(37);
module.exports = Array.isArray || function isArray(arg) {
	return cof(arg) == 'Array';
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(18);
var aFunction = __webpack_require__(79);
var SPECIES = __webpack_require__(11)('species');
module.exports = function (O, D) {
	var C = anObject(O).constructor;
	var S;
	return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(30);
var IObject = __webpack_require__(104);
var toObject = __webpack_require__(31);
var toLength = __webpack_require__(67);
var asc = __webpack_require__(236);
module.exports = function (TYPE, $create) {
	var IS_MAP = TYPE == 1;
	var IS_FILTER = TYPE == 2;
	var IS_SOME = TYPE == 3;
	var IS_EVERY = TYPE == 4;
	var IS_FIND_INDEX = TYPE == 6;
	var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	var create = $create || asc;
	return function ($this, callbackfn, that) {
		var O = toObject($this);
		var self = IObject(O);
		var f = ctx(callbackfn, that, 3);
		var length = toLength(self.length);
		var index = 0;
		var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
		var val, res;
		for (;length > index; index++) if (NO_HOLES || index in self) {
			val = self[index];
			res = f(val, index, O);
			if (TYPE) {
				if (IS_MAP) result[index] = res;   // map
				else if (res) switch (TYPE) {
					case 3: return true;             // some
					case 5: return val;              // find
					case 6: return index;            // findIndex
					case 2: result.push(val);        // filter
				} else if (IS_EVERY) return false; // every
			}
		}
		return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	};
};


/***/ }),
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(96);
var toLength = __webpack_require__(41);
var toAbsoluteIndex = __webpack_require__(186);
module.exports = function (IS_INCLUDES) {
	return function ($this, el, fromIndex) {
		var O = toIObject($this);
		var length = toLength(O.length);
		var index = toAbsoluteIndex(fromIndex, length);
		var value;
		// Array#includes uses SameValueZero equality algorithm
		// eslint-disable-next-line no-self-compare
		if (IS_INCLUDES && el != el) while (length > index) {
			value = O[index++];
			// eslint-disable-next-line no-self-compare
			if (value != value) return true;
		// Array#indexOf ignores holes, Array#includes - not
		} else for (;length > index; index++) if (IS_INCLUDES || index in O) {
			if (O[index] === el) return IS_INCLUDES || index || 0;
		} return !IS_INCLUDES && -1;
	};
};


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
	'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
	return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(16).f });


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(151);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(6).Object.getPrototypeOf;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(31);
var $getPrototypeOf = __webpack_require__(80);

__webpack_require__(84)('getPrototypeOf', function () {
	return function getPrototypeOf(it) {
		return $getPrototypeOf(toObject(it));
	};
});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(155).set });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
	anObject(O);
	if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
	set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		function (test, buggy, set) {
			try {
				set = __webpack_require__(30)(Function.call, __webpack_require__(55).f(Object.prototype, '__proto__').set, 2);
				set(test, []);
				buggy = !(test instanceof Array);
			} catch (e) { buggy = true; }
			return function setPrototypeOf(O, proto) {
				check(O, proto);
				if (buggy) O.__proto__ = proto;
				else set(O, proto);
				return O;
			};
		}({}, false) : undefined),
	check: check
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(157);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
	return $Object.create(P, D);
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(47) });


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(67);
var toAbsoluteIndex = __webpack_require__(159);
module.exports = function (IS_INCLUDES) {
	return function ($this, el, fromIndex) {
		var O = toIObject($this);
		var length = toLength(O.length);
		var index = toAbsoluteIndex(fromIndex, length);
		var value;
		// Array#includes uses SameValueZero equality algorithm
		// eslint-disable-next-line no-self-compare
		if (IS_INCLUDES && el != el) while (length > index) {
			value = O[index++];
			// eslint-disable-next-line no-self-compare
			if (value != value) return true;
		// Array#indexOf ignores holes, Array#includes - not
		} else for (;length > index; index++) if (IS_INCLUDES || index in O) {
			if (O[index] === el) return IS_INCLUDES || index || 0;
		} return !IS_INCLUDES && -1;
	};
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(72);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
	index = toInteger(index);
	return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
module.exports = __webpack_require__(6).Reflect.construct;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(7);
var create = __webpack_require__(47);
var aFunction = __webpack_require__(42);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var fails = __webpack_require__(20);
var bind = __webpack_require__(162);
var rConstruct = (__webpack_require__(8).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
	function F() { /* empty */ }
	return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
	rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	construct: function construct(Target, args /* , newTarget */) {
		aFunction(Target);
		anObject(args);
		var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
		if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
		if (Target == newTarget) {
			// w/o altered newTarget, optimization for 0-4 arguments
			switch (args.length) {
				case 0: return new Target();
				case 1: return new Target(args[0]);
				case 2: return new Target(args[0], args[1]);
				case 3: return new Target(args[0], args[1], args[2]);
				case 4: return new Target(args[0], args[1], args[2], args[3]);
			}
			// w/o altered newTarget, lot of arguments case
			var $args = [null];
			$args.push.apply($args, args);
			return new (bind.apply(Target, $args))();
		}
		// with altered newTarget, not support built-in constructors
		var proto = newTarget.prototype;
		var instance = create(isObject(proto) ? proto : Object.prototype);
		var result = Function.apply.call(Target, instance, args);
		return isObject(result) ? result : instance;
	}
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(42);
var isObject = __webpack_require__(9);
var invoke = __webpack_require__(130);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
	if (!(len in factories)) {
		for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
		// eslint-disable-next-line no-new-func
		factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	} return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
	var fn = aFunction(this);
	var partArgs = arraySlice.call(arguments, 1);
	var bound = function (/* args... */) {
		var args = partArgs.concat(arraySlice.call(arguments));
		return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	};
	if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	return bound;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(40);

var assertThisInitialized = __webpack_require__(49);

function _possibleConstructorReturn(self, call) {
	if (call && (_typeof(call) === "object" || typeof call === "function")) {
		return call;
	}

	return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(60);
module.exports = __webpack_require__(74).f('iterator');


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(72);
var defined = __webpack_require__(56);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
	return function (that, pos) {
		var s = String(defined(that));
		var i = toInteger(pos);
		var l = s.length;
		var a, b;
		if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
		a = s.charCodeAt(i);
		return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
			? TO_STRING ? s.charAt(i) : a
			: TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	};
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(47);
var descriptor = __webpack_require__(43);
var setToStringTag = __webpack_require__(52);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(24)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
	Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(168);
var step = __webpack_require__(132);
var Iterators = __webpack_require__(34);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(94)(Array, 'Array', function (iterated, kind) {
	this._t = toIObject(iterated); // target
	this._i = 0;                   // next index
	this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
	var O = this._t;
	var kind = this._k;
	var index = this._i++;
	if (!O || index >= O.length) {
		this._t = undefined;
		return step(1);
	}
	if (kind == 'keys') return step(0, index);
	if (kind == 'values') return step(0, O[index]);
	return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139);
__webpack_require__(106);
__webpack_require__(172);
__webpack_require__(173);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(38);
var gOPS = __webpack_require__(82);
var pIE = __webpack_require__(48);
module.exports = function (it) {
	var result = getKeys(it);
	var getSymbols = gOPS.f;
	if (getSymbols) {
		var symbols = getSymbols(it);
		var isEnum = pIE.f;
		var i = 0;
		var key;
		while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	} return result;
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(21);
var gOPN = __webpack_require__(101).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
	try {
		return gOPN(it);
	} catch (e) {
		return windowNames.slice();
	}
};

module.exports.f = function getOwnPropertyNames(it) {
	return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75)('asyncIterator');


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75)('observable');


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(13);
var getKeys = __webpack_require__(38);
var toIObject = __webpack_require__(21);
var isEnum = __webpack_require__(48).f;
module.exports = function (isEntries) {
	return function (it) {
		var O = toIObject(it);
		var keys = getKeys(O);
		var length = keys.length;
		var i = 0;
		var result = [];
		var key;
		while (length > i) {
			key = keys[i++];
			if (!DESCRIPTORS || isEnum.call(O, key)) {
				result.push(isEntries ? [key, O[key]] : O[key]);
			}
		}
		return result;
	};
};


/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 176 */,
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(280);

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(50);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
	return function (that, pos) {
		var s = String(defined(that));
		var i = toInteger(pos);
		var l = s.length;
		var a, b;
		if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
		a = s.charCodeAt(i);
		return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
			? TO_STRING ? s.charAt(i) : a
			: TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	};
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(83);
__webpack_require__(32)({
	target: 'RegExp',
	proto: true,
	forced: regexpExec !== /./.exec
}, {
	exec: regexpExec
});


/***/ }),
/* 183 */,
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(203);

var arrayLikeToArray = __webpack_require__(205);

function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return _Array$from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
var SAFE_CLOSING = false;

try {
	var riter = [7][ITERATOR]();
	riter['return'] = function () { SAFE_CLOSING = true; };
	// eslint-disable-next-line no-throw-literal
	Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
	if (!skipClosing && !SAFE_CLOSING) return false;
	var safe = false;
	try {
		var arr = [7];
		var iter = arr[ITERATOR]();
		iter.next = function () { return { done: safe = true }; };
		arr[ITERATOR] = function () { return iter; };
		exec(arr);
	} catch (e) { /* empty */ }
	return safe;
};


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(50);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
	index = toInteger(index);
	return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(282);
var anObject = __webpack_require__(18);
var $flags = __webpack_require__(110);
var DESCRIPTORS = __webpack_require__(25);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
	__webpack_require__(33)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(28)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	define(function toString() {
		var R = anObject(this);
		return '/'.concat(R.source, '/',
			'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	});
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
	define(function toString() {
		return $toString.call(this);
	});
}


/***/ }),
/* 188 */,
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.After = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(242));

var After = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(After, _Base);

	var _super = (0, _createSuper2.default)(After);

	function After() {
		(0, _classCallCheck2.default)(this, After);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(After, [{
		key: "register",
		value: function register() {
			$e.hooks.registerDataAfter(this);
		}
	}]);
	return After;
}(_base.default);

exports.After = After;
var _default = After;
exports.default = _default;

/***/ }),
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(17);

var _inline = _interopRequireDefault(__webpack_require__(317));

var BaseElementView = __webpack_require__(252);

var DEFAULT_INNER_SECTION_COLUMNS = 2,
		DEFAULT_MIN_COLUMN_SIZE = 2,
		DEFAULT_MAX_COLUMNS = 10;
var SectionView = BaseElementView.extend({
	childViewContainer: '> .elementor-container > .elementor-row',
	template: Marionette.TemplateCache.get('#tmpl-elementor-section-content'),
	addSectionView: null,
	_checkIsFull: function _checkIsFull() {
		this.toggleSectionIsFull();
		elementorCommon.helpers.softDeprecated('_checkIsFull', '2.9.0', 'toggleSectionIsFull()');
	},
	toggleSectionIsFull: function toggleSectionIsFull() {
		this.$el.toggleClass('elementor-section-filled', this.isCollectionFilled());
	},
	addChildModel: function addChildModel(model) {
		/// TODO: maybe should be part of $e.hooks.
		var isModelInstance = model instanceof Backbone.Model,
				isInner = this.isInner();

		if (isModelInstance) {
			// TODO: change to command.
			model.set('isInner', isInner);
		} else {
			model.isInner = isInner;
		}

		return BaseElementView.prototype.addChildModel.apply(this, arguments);
	},
	className: function className() {
		var classes = BaseElementView.prototype.className.apply(this, arguments),
				type = this.isInner() ? 'inner' : 'top';
		return classes + ' elementor-section elementor-' + type + '-section';
	},
	tagName: function tagName() {
		return this.model.getSetting('html_tag') || 'section';
	},
	behaviors: function behaviors() {
		var behaviors = BaseElementView.prototype.behaviors.apply(this, arguments);

		_.extend(behaviors, {
			Sortable: {
				behaviorClass: __webpack_require__(253),
				elChildType: 'column'
			}
		});

		return elementor.hooks.applyFilters('elements/section/behaviors', behaviors, this);
	},
	initialize: function initialize() {
		BaseElementView.prototype.initialize.apply(this, arguments);
		this.model.get('editSettings').set('defaultEditRoute', 'layout');
	},
	getEditButtons: function getEditButtons() {
		var elementData = elementor.getElementData(this.model),
				editTools = {};

		if (!this.isInner()) {
			editTools.add = {
				title: elementor.translate('add_element', [elementData.title]),
				icon: 'plus'
			};
		}

		editTools.edit = {
			title: elementor.translate('edit_element', [elementData.title]),
			icon: 'handle'
		};

		if (elementor.getPreferences('edit_buttons')) {
			editTools.duplicate = {
				title: elementor.translate('duplicate_element', [elementData.title]),
				icon: 'clone'
			};
		}

		editTools.remove = {
			title: elementor.translate('delete_element', [elementData.title]),
			icon: 'close'
		};
		return editTools;
	},
	getContextMenuGroups: function getContextMenuGroups() {
		var groups = BaseElementView.prototype.getContextMenuGroups.apply(this, arguments),
				transferGroupIndex = groups.indexOf(_.findWhere(groups, {
			name: 'clipboard'
		}));
		groups.splice(transferGroupIndex + 1, 0, {
			name: 'save',
			actions: [{
				name: 'save',
				title: elementor.translate('save_as_block'),
				callback: this.save.bind(this)
			}]
		});
		return groups;
	},
	getSortableOptions: function getSortableOptions() {
		var sectionConnectClass = this.isInner() ? '.elementor-inner-section' : '.elementor-top-section';
		return {
			connectWith: sectionConnectClass + ' > .elementor-container > .elementor-row',
			handle: '> .elementor-element-overlay .elementor-editor-element-edit',
			items: '> .elementor-column',
			forcePlaceholderSize: true,
			tolerance: 'pointer'
		};
	},
	getColumnPercentSize: function getColumnPercentSize(element, size) {
		return +(size / element.parent().width() * 100).toFixed(3);
	},
	getDefaultStructure: function getDefaultStructure() {
		return this.collection.length + '0';
	},
	getStructure: function getStructure() {
		return this.model.getSetting('structure');
	},
	getColumnAt: function getColumnAt(index) {
		var model = this.collection.at(index);
		return model ? this.children.findByModelCid(model.cid) : null;
	},
	getNextColumn: function getNextColumn(columnView) {
		return this.getColumnAt(this.collection.indexOf(columnView.model) + 1);
	},
	getPreviousColumn: function getPreviousColumn(columnView) {
		return this.getColumnAt(this.collection.indexOf(columnView.model) - 1);
	},
	getNeighborContainer: function getNeighborContainer(container) {
		var parentView = container.parent.view,
				nextView = parentView.getNextColumn(container.view) || parentView.getPreviousColumn(container.view);

		if (!nextView) {
			return false;
		}

		return nextView.getContainer();
	},
	setStructure: function setStructure(structure) {
		var shouldAdjustColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
		var parsedStructure = elementor.presetsFactory.getParsedStructure(structure);

		if (+parsedStructure.columnsCount !== this.collection.length) {
			throw new TypeError('The provided structure doesn\'t match the columns count.');
		}

		$e.run('document/elements/settings', {
			container: this.getContainer(),
			settings: {
				structure: structure
			},
			options: {
				external: true
			}
		});

		if (shouldAdjustColumns) {
			this.adjustColumns();
		}
	},
	adjustColumns: function adjustColumns() {
		var preset = elementor.presetsFactory.getPresetByStructure(this.getStructure());
		this.children.each(function (columnView, index) {
			var container = columnView.getContainer();
			$e.run('document/elements/settings', {
				container: container,
				settings: {
					_column_size: preset.preset[index],
					_inline_size: null
				}
			});
		});
	},
	resetLayout: function resetLayout() {
		var shouldAdjustColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
		this.setStructure(this.getDefaultStructure(), shouldAdjustColumns);
	},
	resetColumnsCustomSize: function resetColumnsCustomSize() {
		this.children.each(function (columnView) {
			$e.run('document/elements/settings', {
				container: columnView.getContainer(),
				settings: {
					_inline_size: null
				},
				options: {
					external: true
				}
			});
		});
	},
	isCollectionFilled: function isCollectionFilled() {
		return DEFAULT_MAX_COLUMNS <= this.collection.length;
	},
	showChildrenPercentsTooltip: function showChildrenPercentsTooltip(columnView, nextColumnView) {
		columnView.ui.percentsTooltip.show();
		columnView.ui.percentsTooltip.attr('data-side', elementorCommon.config.isRTL ? 'right' : 'left');
		nextColumnView.ui.percentsTooltip.show();
		nextColumnView.ui.percentsTooltip.attr('data-side', elementorCommon.config.isRTL ? 'left' : 'right');
	},
	hideChildrenPercentsTooltip: function hideChildrenPercentsTooltip(columnView, nextColumnView) {
		columnView.ui.percentsTooltip.hide();
		nextColumnView.ui.percentsTooltip.hide();
	},
	destroyAddSectionView: function destroyAddSectionView() {
		if (this.addSectionView && !this.addSectionView.isDestroyed) {
			this.addSectionView.destroy();
		}
	},
	onRender: function onRender() {
		BaseElementView.prototype.onRender.apply(this, arguments);
		this.toggleSectionIsFull();
	},
	onAddButtonClick: function onAddButtonClick() {
		if (this.addSectionView && !this.addSectionView.isDestroyed) {
			this.addSectionView.fadeToDeath();
			return;
		}

		var addSectionView = new _inline.default({
			at: this.model.collection.indexOf(this.model)
		});
		addSectionView.render();
		this.$el.before(addSectionView.$el);
		addSectionView.$el.hide(); // Delaying the slide down for slow-render browsers (such as FF)

		setTimeout(function () {
			addSectionView.$el.slideDown(null, function () {
				// Remove inline style, for preview mode.
				jQuery(this).css('display', '');
			});
		});
		this.addSectionView = addSectionView;
	},
	onChildviewRequestResizeStart: function onChildviewRequestResizeStart(columnView) {
		var nextColumnView = this.getNextColumn(columnView);

		if (!nextColumnView) {
			return;
		}

		this.showChildrenPercentsTooltip(columnView, nextColumnView);
		var $iframes = columnView.$el.find('iframe').add(nextColumnView.$el.find('iframe'));
		elementor.helpers.disableElementEvents($iframes);
	},
	onChildviewRequestResizeStop: function onChildviewRequestResizeStop(columnView) {
		var nextColumnView = this.getNextColumn(columnView);

		if (!nextColumnView) {
			return;
		}

		this.hideChildrenPercentsTooltip(columnView, nextColumnView);
		var $iframes = columnView.$el.find('iframe').add(nextColumnView.$el.find('iframe'));
		elementor.helpers.enableElementEvents($iframes);
	},
	onChildviewRequestResize: function onChildviewRequestResize(columnView, ui) {
		ui.element.css({
			width: '',
			left: 'initial' // Fix for RTL resizing

		});
		$e.run('document/elements/settings', {
			container: columnView.getContainer(),
			settings: {
				_inline_size: this.getColumnPercentSize(ui.element, ui.size.width)
			}
		});
	},
	onDestroy: function onDestroy() {
		BaseElementView.prototype.onDestroy.apply(this, arguments);
		this.destroyAddSectionView();
	}
});
module.exports = SectionView;
module.exports.DEFAULT_INNER_SECTION_COLUMNS = DEFAULT_INNER_SECTION_COLUMNS;
module.exports.DEFAULT_MIN_COLUMN_SIZE = DEFAULT_MIN_COLUMN_SIZE;
module.exports.DEFAULT_MAX_COLUMNS = DEFAULT_MAX_COLUMNS;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(194);
var $Object = __webpack_require__(6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
	return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(21);
var $getOwnPropertyDescriptor = __webpack_require__(55).f;

__webpack_require__(84)('getOwnPropertyDescriptor', function () {
	return function getOwnPropertyDescriptor(it, key) {
		return $getOwnPropertyDescriptor(toIObject(it), key);
	};
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(196);

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(197);
module.exports = __webpack_require__(6).Reflect.get;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(55);
var getPrototypeOf = __webpack_require__(80);
var has = __webpack_require__(19);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(12);

function get(target, propertyKey /* , receiver */) {
	var receiver = arguments.length < 3 ? target : arguments[2];
	var desc, proto;
	if (anObject(target) === receiver) return target[propertyKey];
	if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
		? desc.value
		: desc.get !== undefined
			? desc.get.call(receiver)
			: undefined;
	if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(14);

function _superPropBase(object, property) {
	while (!Object.prototype.hasOwnProperty.call(object, property)) {
		object = getPrototypeOf(object);
		if (object === null) break;
	}

	return object;
}

module.exports = _superPropBase;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(200);
module.exports = __webpack_require__(6).Object.keys;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(31);
var $keys = __webpack_require__(38);

__webpack_require__(84)('keys', function () {
	return function keys(it) {
		return $keys(toObject(it));
	};
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(222);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(224);

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(226);

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(16);
var createDesc = __webpack_require__(43);

module.exports = function (object, index, value) {
	if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	else object[index] = value;
};


/***/ }),
/* 205 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;

	for (var i = 0, arr2 = new Array(len); i < len; i++) {
		arr2[i] = arr[i];
	}

	return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;
var userAgent = navigator.userAgent;
var _default = {
	webkit: -1 !== userAgent.indexOf('AppleWebKit'),
	firefox: -1 !== userAgent.indexOf('Firefox'),
	ie: /Trident|MSIE/.test(userAgent),
	edge: -1 !== userAgent.indexOf('Edge'),
	mac: -1 !== userAgent.indexOf('Macintosh')
};
exports.default = _default;

/***/ }),
/* 208 */,
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(54);
var toIObject = __webpack_require__(96);
var arrayIndexOf = __webpack_require__(146)(false);
var IE_PROTO = __webpack_require__(127)('IE_PROTO');

module.exports = function (object, names) {
	var O = toIObject(object);
	var i = 0;
	var result = [];
	var key;
	for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	// Don't enum bug & hidden keys
	while (names.length > i) if (has(O, key = names[i++])) {
		~arrayIndexOf(result, key) || result.push(key);
	}
	return result;
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(40));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var ArgsObject = /*#__PURE__*/function () {
	/**
	 * Function constructor().
	 *
	 * Create ArgsObject.
	 *
	 * @param {{}} args
	 */
	function ArgsObject(args) {
		(0, _classCallCheck2.default)(this, ArgsObject);
		this.args = args;
	}
	/**
	 * Function requireArgument().
	 *
	 * Validate property in args.
	 *
	 * @param {string} property
	 * @param {{}} args
	 *
	 * @throws {Error}
	 *
	 */


	(0, _createClass2.default)(ArgsObject, [{
		key: "requireArgument",
		value: function requireArgument(property) {
			var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.args;

			if (!args.hasOwnProperty(property)) {
				throw Error("".concat(property, " is required."));
			}
		}
		/**
		 * Function requireArgumentType().
		 *
		 * Validate property in args using `type === typeof(args.whatever)`.
		 *
		 * @param {string} property
		 * @param {string} type
		 * @param {{}} args
		 *
		 * @throws {Error}
		 *
		 */

	}, {
		key: "requireArgumentType",
		value: function requireArgumentType(property, type) {
			var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
			this.requireArgument(property, args);

			if ((0, _typeof2.default)(args[property]) !== type) {
				throw Error("".concat(property, " invalid type: ").concat(type, "."));
			}
		}
		/**
		 * Function requireArgumentInstance().
		 *
		 * Validate property in args using `args.whatever instanceof instance`.
		 *
		 * @param {string} property
		 * @param {instanceof} instance
		 * @param {{}} args
		 *
		 * @throws {Error}
		 *
		 */

	}, {
		key: "requireArgumentInstance",
		value: function requireArgumentInstance(property, instance) {
			var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
			this.requireArgument(property, args);

			if (!(args[property] instanceof instance)) {
				throw Error("".concat(property, " invalid instance."));
			}
		}
		/**
		 * Function requireArgumentConstructor().
		 *
		 * Validate property in args using `type === args.whatever.constructor`.
		 *
		 * @param {string} property
		 * @param {*} type
		 * @param {{}} args
		 *
		 * @throws {Error}
		 *
		 */

	}, {
		key: "requireArgumentConstructor",
		value: function requireArgumentConstructor(property, type) {
			var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
			this.requireArgument(property, args);

			if (args[property].constructor !== type) {
				throw Error("".concat(property, " invalid constructor type."));
			}
		}
	}]);
	return ArgsObject;
}();

exports.default = ArgsObject;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var CommandInternalBase = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(CommandInternalBase, _CommandBase);

	var _super = (0, _createSuper2.default)(CommandInternalBase);

	function CommandInternalBase(args) {
		var commandsAPI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e.commandsInternal;
		(0, _classCallCheck2.default)(this, CommandInternalBase);
		return _super.call(this, args, commandsAPI);
	}

	return CommandInternalBase;
}(_commandBase.default);

exports.default = CommandInternalBase;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _base = _interopRequireDefault(__webpack_require__(251));

var ContextMenu = __webpack_require__(316);

module.exports = Marionette.Behavior.extend({
	defaults: {
		groups: [],
		eventTargets: ['el']
	},
	events: function events() {
		var events = {};
		this.getOption('eventTargets').forEach(function (eventTarget) {
			var eventName = 'contextmenu';

			if ('el' !== eventTarget) {
				eventName += ' ' + eventTarget;
			}

			events[eventName] = 'onContextMenu';
		});
		return events;
	},
	initialize: function initialize() {
		this.listenTo(this.view.options.model, 'request:contextmenu', this.onRequestContextMenu);
	},
	initContextMenu: function initContextMenu() {
		var _this = this;

		var contextMenuGroups = this.getOption('groups'),
				deleteGroup = _.findWhere(contextMenuGroups, {
			name: 'delete'
		}),
				afterGroupIndex = contextMenuGroups.indexOf(deleteGroup);

		if (-1 === afterGroupIndex) {
			afterGroupIndex = contextMenuGroups.length;
		}

		contextMenuGroups.splice(afterGroupIndex, 0, {
			name: 'tools',
			actions: [{
				name: 'navigator',
				title: elementor.translate('navigator'),
				callback: function callback() {
					return $e.route('navigator', {
						reOpen: true,
						model: _this.view.model
					});
				}
			}]
		});
		this.contextMenu = new ContextMenu({
			groups: contextMenuGroups
		});
		this.contextMenu.getModal().on('hide', this.onContextMenuHide);
	},
	getContextMenu: function getContextMenu() {
		if (!this.contextMenu) {
			this.initContextMenu();
		}

		return this.contextMenu;
	},
	onContextMenu: function onContextMenu(event) {
		if ($e.shortcuts.isControlEvent(event)) {
			return;
		}

		var isAddSectionView = this.view instanceof _base.default;

		if (!isAddSectionView && (!this.view.container || !this.view.container.isDesignable())) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();
		this.getContextMenu().show(event);
		elementor.channels.editor.reply('contextMenu:targetView', this.view);
	},
	onRequestContextMenu: function onRequestContextMenu(event) {
		var modal = this.getContextMenu().getModal(),
				iframe = modal.getSettings('iframe'),
				toolsGroup = _.findWhere(this.contextMenu.getSettings('groups'), {
			name: 'tools'
		});

		toolsGroup.isVisible = false;
		modal.setSettings('iframe', null);
		this.onContextMenu(event);
		toolsGroup.isVisible = true;
		modal.setSettings('iframe', iframe);
	},
	onContextMenuHide: function onContextMenuHide() {
		elementor.channels.editor.reply('contextMenu:targetView', null);
	},
	onDestroy: function onDestroy() {
		if (this.contextMenu) {
			this.contextMenu.destroy();
		}
	}
});

/***/ }),
/* 213 */,
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var $export = __webpack_require__(7);
var meta = __webpack_require__(77);
var fails = __webpack_require__(20);
var hide = __webpack_require__(24);
var redefineAll = __webpack_require__(124);
var forOf = __webpack_require__(86);
var anInstance = __webpack_require__(125);
var isObject = __webpack_require__(9);
var setToStringTag = __webpack_require__(52);
var dP = __webpack_require__(16).f;
var each = __webpack_require__(144)(0);
var DESCRIPTORS = __webpack_require__(13);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	var Base = global[NAME];
	var C = Base;
	var ADDER = IS_MAP ? 'set' : 'add';
	var proto = C && C.prototype;
	var O = {};
	if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
		new C().entries().next();
	}))) {
		// create collection constructor
		C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
		redefineAll(C.prototype, methods);
		meta.NEED = true;
	} else {
		C = wrapper(function (target, iterable) {
			anInstance(target, C, NAME, '_c');
			target._c = new Base();
			if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
		});
		each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
			var IS_ADDER = KEY == 'add' || KEY == 'set';
			if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
				anInstance(this, C, KEY);
				if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
				var result = this._c[KEY](a === 0 ? 0 : a, b);
				return IS_ADDER ? this : result;
			});
		});
		IS_WEAK || dP(C.prototype, 'size', {
			get: function () {
				return this._c.size;
			}
		});
	}

	setToStringTag(C, NAME);

	O[NAME] = C;
	$export($export.G + $export.W + $export.F, O);

	if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	return C;
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);

module.exports = function (COLLECTION) {
	$export($export.S, COLLECTION, { of: function of() {
		var length = arguments.length;
		var A = new Array(length);
		while (length--) A[length] = arguments[length];
		return new this(A);
	} });
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);
var aFunction = __webpack_require__(42);
var ctx = __webpack_require__(30);
var forOf = __webpack_require__(86);

module.exports = function (COLLECTION) {
	$export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
		var mapFn = arguments[1];
		var mapping, A, n, cb;
		aFunction(this);
		mapping = mapFn !== undefined;
		if (mapping) aFunction(mapFn);
		if (source == undefined) return new this();
		A = [];
		if (mapping) {
			n = 0;
			cb = ctx(mapFn, arguments[2], 2);
			forOf(source, false, function (nextItem) {
				A.push(cb(nextItem, n++));
			});
		} else {
			forOf(source, false, A.push, A);
		}
		return new this(A);
	} });
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.After = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(272));

var After = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(After, _Base);

	var _super = (0, _createSuper2.default)(After);

	function After() {
		(0, _classCallCheck2.default)(this, After);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(After, [{
		key: "register",
		value: function register() {
			$e.hooks.registerUIAfter(this);
		}
	}]);
	return After;
}(_base.default);

exports.After = After;
var _default = After;
exports.default = _default;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(117);

function _arrayWithHoles(arr) {
	if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(220);
module.exports = __webpack_require__(6).Array.isArray;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(7);

$export($export.S, 'Array', { isArray: __webpack_require__(95) });


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(201);

var _isIterable = __webpack_require__(202);

var _Symbol = __webpack_require__(105);

function _iterableToArrayLimit(arr, i) {
	if (typeof _Symbol === "undefined" || !_isIterable(Object(arr))) return;
	var _arr = [];
	var _n = true;
	var _d = false;
	var _e = undefined;

	try {
		for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
			_arr.push(_s.value);

			if (i && _arr.length === i) break;
		}
	} catch (err) {
		_d = true;
		_e = err;
	} finally {
		try {
			if (!_n && _i["return"] != null) _i["return"]();
		} finally {
			if (_d) throw _e;
		}
	}

	return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(57);
module.exports = __webpack_require__(223);


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var get = __webpack_require__(114);
module.exports = __webpack_require__(6).getIterator = function (it) {
	var iterFn = get(it);
	if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	return anObject(iterFn.call(it));
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(57);
module.exports = __webpack_require__(225);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(107);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(34);
module.exports = __webpack_require__(6).isIterable = function (it) {
	var O = Object(it);
	return O[ITERATOR] !== undefined
		|| '@@iterator' in O
		// eslint-disable-next-line no-prototype-builtins
		|| Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(227);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(30);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(31);
var call = __webpack_require__(133);
var isArrayIter = __webpack_require__(134);
var toLength = __webpack_require__(67);
var createProperty = __webpack_require__(204);
var getIterFn = __webpack_require__(114);

$export($export.S + $export.F * !__webpack_require__(185)(function (iter) { Array.from(iter); }), 'Array', {
	// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
		var O = toObject(arrayLike);
		var C = typeof this == 'function' ? this : Array;
		var aLen = arguments.length;
		var mapfn = aLen > 1 ? arguments[1] : undefined;
		var mapping = mapfn !== undefined;
		var index = 0;
		var iterFn = getIterFn(O);
		var length, result, step, iterator;
		if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
		// if object isn't iterable or it's array with default iterator - use simple case
		if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
			for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
				createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
			}
		} else {
			length = toLength(O.length);
			for (result = new C(length); length > index; index++) {
				createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
			}
		}
		result.length = index;
		return result;
	}
});


/***/ }),
/* 228 */
/***/ (function(module, exports) {

function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(230);
module.exports = __webpack_require__(6).Object.entries;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(7);
var $entries = __webpack_require__(174)(true);

$export($export.S, 'Object', {
	entries: function entries(it) {
		return $entries(it);
	}
});


/***/ }),
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(237);

module.exports = function (original, length) {
	return new (speciesConstructor(original))(length);
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var isArray = __webpack_require__(95);
var SPECIES = __webpack_require__(10)('species');

module.exports = function (original) {
	var C;
	if (isArray(original)) {
		C = original.constructor;
		// cross-realm fallback
		if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
		if (isObject(C)) {
			C = C[SPECIES];
			if (C === null) C = undefined;
		}
	} return C === undefined ? Array : C;
};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(13);
var getKeys = __webpack_require__(38);
var gOPS = __webpack_require__(82);
var pIE = __webpack_require__(48);
var toObject = __webpack_require__(31);
var IObject = __webpack_require__(104);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(20)(function () {
	var A = {};
	var B = {};
	// eslint-disable-next-line no-undef
	var S = Symbol();
	var K = 'abcdefghijklmnopqrst';
	A[S] = 7;
	K.split('').forEach(function (k) { B[k] = k; });
	return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	var T = toObject(target);
	var aLen = arguments.length;
	var index = 1;
	var getSymbols = gOPS.f;
	var isEnum = pIE.f;
	while (aLen > index) {
		var S = IObject(arguments[index++]);
		var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
		var length = keys.length;
		var j = 0;
		var key;
		while (length > j) {
			key = keys[j++];
			if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
		}
	} return T;
} : $assign;


/***/ }),
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Base = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _hookBase = _interopRequireDefault(__webpack_require__(250));

var Base = /*#__PURE__*/function (_HookBase) {
	(0, _inherits2.default)(Base, _HookBase);

	var _super = (0, _createSuper2.default)(Base);

	function Base() {
		(0, _classCallCheck2.default)(this, Base);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Base, [{
		key: "getType",
		value: function getType() {
			return 'data';
		}
	}]);
	return Base;
}(_hookBase.default);

exports.Base = Base;
var _default = Base;
exports.default = _default;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(244);
module.exports = __webpack_require__(6).parseInt;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
var $parseInt = __webpack_require__(245);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(8).parseInt;
var $trim = __webpack_require__(246).trim;
var ws = __webpack_require__(175);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	var string = $trim(String(str), 3);
	return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
var defined = __webpack_require__(56);
var fails = __webpack_require__(20);
var spaces = __webpack_require__(175);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
	var exp = {};
	var FORCE = fails(function () {
		return !!spaces[KEY]() || non[KEY]() != non;
	});
	var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	if (ALIAS) exp[ALIAS] = fn;
	$export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
	string = String(defined(string));
	if (TYPE & 1) string = string.replace(ltrim, '');
	if (TYPE & 2) string = string.replace(rtrim, '');
	return string;
};

module.exports = exporter;


/***/ }),
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(35));

var HookBase = /*#__PURE__*/function () {
	/**
	 * Callback type, eg ( hook, event ).
	 *
	 * @type {string}
	 */

	/**
	 * Full command address, that will hook the callback.
	 *
	 * @type (string)
	 */

	/**
	 * Unique id of the callback.
	 *
	 * @type {string}
	 */

	/**
	 * Function constructor().
	 *
	 * Create callback base.
	 */
	function HookBase() {
		(0, _classCallCheck2.default)(this, HookBase);
		(0, _defineProperty2.default)(this, "type", void 0);
		(0, _defineProperty2.default)(this, "command", void 0);
		(0, _defineProperty2.default)(this, "id", void 0);
		this.initialize();
		this.type = this.getType();
		this.command = this.getCommand();
		this.id = this.getId();
	}
	/**
	 * Function initialize().
	 *
	 * Called after creation of the base, used for initialize extras.
	 * Without expending constructor.
	 */


	(0, _createClass2.default)(HookBase, [{
		key: "initialize",
		value: function initialize() {}
		/**
		 * Function register().
		 *
		 * Used to register the callback.
		 *
		 * @throws {Error}
		 */

	}, {
		key: "register",
		value: function register() {
			elementorModules.ForceMethodImplementation();
		}
		/**
		 * Function getType().
		 *
		 * Get type eg: ( hook, event, etc ... ).
		 *
		 * @returns {string}
		 *
		 * @throws {Error}
		 */

	}, {
		key: "getType",
		value: function getType() {
			elementorModules.ForceMethodImplementation();
		}
		/**
		 * Function getCommand().
		 *
		 * Returns the full command path for callback binding.
		 *
		 * Supports array of strings ( commands ).
		 *
		 * @returns {string}
		 *
		 * @throws {Error}
		 */

	}, {
		key: "getCommand",
		value: function getCommand() {
			elementorModules.ForceMethodImplementation();
		}
		/**
		 * Function getId().
		 *
		 * Returns command id for the hook (should be unique).
		 *
		 * @returns {string}
		 *
		 * @throws {Error}
		 */

	}, {
		key: "getId",
		value: function getId() {
			elementorModules.ForceMethodImplementation();
		}
		/**
		 * Function getContainerType().
		 *
		 * Bind eContainer type to callback.
		 *
		 * Used to gain performance.
		 *
		 * @return {string} type
		 */

	}, {
		key: "getContainerType",
		value: function getContainerType() {}
		/**
		 * Function getConditions().
		 *
		 * Condition for running the callback, if true, call to apply().
		 *
		 * @param [args={}]
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "getConditions",
		value: function getConditions() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			// eslint-disable-line no-unused-vars
			return true;
		}
		/**
		 * Function apply().
		 *
		 * Apply the callback, ( The actual affect of the callback ).
		 *
		 * @param [args={}]
		 *
		 * @returns {*}
		 */

	}, {
		key: "apply",
		value: function apply(args) {
			// eslint-disable-line no-unused-vars
			elementorModules.ForceMethodImplementation();
		}
		/**
		 * Function run().
		 *
		 * Run the callback.
		 *
		 * @param {*} args
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "run",
		value: function run() {
			var _ref = arguments.length <= 0 ? undefined : arguments[0],
					_ref$options = _ref.options,
					options = _ref$options === void 0 ? {} : _ref$options; // Disable callback if requested by args.options.


			if (options.callbacks && false === options.callbacks[this.id]) {
				return true;
			}

			if (this.getConditions(arguments.length <= 0 ? undefined : arguments[0])) {
				if ($e.devTools) {
					$e.devTools.log.callbacks().active(this.type, this.command, this.id);
				}

				return this.apply.apply(this, arguments);
			}

			return true;
		}
	}]);
	return HookBase;
}();

exports.default = HookBase;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _assign = _interopRequireDefault(__webpack_require__(177));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _helper = _interopRequireDefault(__webpack_require__(135));

var AddSectionBase = /*#__PURE__*/function (_Marionette$ItemView) {
	(0, _inherits2.default)(AddSectionBase, _Marionette$ItemView);

	var _super = (0, _createSuper2.default)(AddSectionBase);

	function AddSectionBase() {
		(0, _classCallCheck2.default)(this, AddSectionBase);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(AddSectionBase, [{
		key: "template",
		value: function template() {
			return Marionette.TemplateCache.get('#tmpl-elementor-add-section');
		}
	}, {
		key: "attributes",
		value: function attributes() {
			return {
				'data-view': 'choose-action'
			};
		}
	}, {
		key: "ui",
		value: function ui() {
			return {
				addNewSection: '.elementor-add-new-section',
				closeButton: '.elementor-add-section-close',
				addSectionButton: '.elementor-add-section-button',
				addTemplateButton: '.elementor-add-template-button',
				selectPreset: '.elementor-select-preset',
				presets: '.elementor-preset'
			};
		}
	}, {
		key: "events",
		value: function events() {
			return {
				'click @ui.addSectionButton': 'onAddSectionButtonClick',
				'click @ui.addTemplateButton': 'onAddTemplateButtonClick',
				'click @ui.closeButton': 'onCloseButtonClick',
				'click @ui.presets': 'onPresetSelected'
			};
		}
	}, {
		key: "behaviors",
		value: function behaviors() {
			return {
				contextMenu: {
					behaviorClass: __webpack_require__(212),
					groups: this.getContextMenuGroups()
				}
			};
		}
	}, {
		key: "className",
		value: function className() {
			return 'elementor-add-section elementor-visible-desktop';
		}
	}, {
		key: "setView",
		value: function setView(view) {
			this.$el.attr('data-view', view);
		}
	}, {
		key: "showSelectPresets",
		value: function showSelectPresets() {
			this.setView('select-preset');
		}
	}, {
		key: "closeSelectPresets",
		value: function closeSelectPresets() {
			this.setView('choose-action');
		}
	}, {
		key: "getTemplatesModalOptions",
		value: function getTemplatesModalOptions() {
			return {
				importOptions: {
					at: this.getOption('at')
				}
			};
		}
	}, {
		key: "getContextMenuGroups",
		value: function getContextMenuGroups() {
			var _this = this;

			var hasContent = function hasContent() {
				return elementor.elements.length > 0;
			};

			return [{
				name: 'paste',
				actions: [{
					name: 'paste',
					title: elementor.translate('paste'),
					isEnabled: function isEnabled() {
						return _helper.default.isPasteEnabled(elementor.getPreviewContainer());
					},
					callback: function callback() {
						return $e.run('document/ui/paste', {
							container: elementor.getPreviewContainer(),
							options: {
								at: _this.getOption('at'),
								rebuild: true
							},
							onAfter: function onAfter() {
								return _this.onAfterPaste();
							}
						});
					}
				}]
			}, {
				name: 'content',
				actions: [{
					name: 'copy_all_content',
					title: elementor.translate('copy_all_content'),
					isEnabled: hasContent,
					callback: function callback() {
						return $e.run('document/elements/copy-all');
					}
				}, {
					name: 'delete_all_content',
					title: elementor.translate('delete_all_content'),
					isEnabled: hasContent,
					callback: function callback() {
						return $e.run('document/elements/empty');
					}
				}]
			}];
		}
	}, {
		key: "onAddSectionButtonClick",
		value: function onAddSectionButtonClick() {
			this.showSelectPresets();
		}
	}, {
		key: "onAddTemplateButtonClick",
		value: function onAddTemplateButtonClick() {
			$e.run('library/open', this.getTemplatesModalOptions());
		}
	}, {
		key: "onRender",
		value: function onRender() {
			this.$el.html5Droppable({
				axis: ['vertical'],
				groups: ['elementor-element'],
				placeholder: false,
				currentElementClass: 'elementor-html5dnd-current-element',
				hasDraggingOnChildClass: 'elementor-dragging-on-child',
				onDropping: this.onDropping.bind(this)
			});
		}
	}, {
		key: "onPresetSelected",
		value: function onPresetSelected(event) {
			this.closeSelectPresets();
			var selectedStructure = event.currentTarget.dataset.structure,
					parsedStructure = elementor.presetsFactory.getParsedStructure(selectedStructure);
			$e.run('document/elements/create', {
				model: {
					elType: 'section'
				},
				container: elementor.getPreviewContainer(),
				columns: parsedStructure.columnsCount,
				structure: selectedStructure,
				options: (0, _assign.default)({}, this.options)
			});
		}
	}, {
		key: "onDropping",
		value: function onDropping() {
			if (elementor.helpers.maybeDisableWidget()) {
				return;
			}

			var selectedElement = elementor.channels.panelElements.request('element:selected'),
					historyId = $e.internal('document/history/start-log', {
				type: 'add',
				title: elementor.helpers.getModelLabel(selectedElement.model)
			}),
					eSection = $e.run('document/elements/create', {
				model: {
					elType: 'section'
				},
				container: elementor.getPreviewContainer(),
				columns: 1,
				options: {
					at: this.getOption('at'),
					// BC: Deprecated since 2.8.0 - use `$e.hooks`.
					trigger: {
						beforeAdd: 'section:before:drop',
						afterAdd: 'section:after:drop'
					}
				}
			}); // Create the element in column.

			eSection.view.children.findByIndex(0).addElementFromPanel();
			$e.internal('document/history/end-log', {
				id: historyId
			});
		}
	}, {
		key: "onAfterPaste",
		value: function onAfterPaste() {}
	}]);
	return AddSectionBase;
}(Marionette.ItemView);

var _default = AddSectionBase;
exports.default = _default;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(17);

__webpack_require__(29);

var _isArray = _interopRequireDefault(__webpack_require__(117));

var _typeof2 = _interopRequireDefault(__webpack_require__(40));

var _parseInt2 = _interopRequireDefault(__webpack_require__(136));

var _keys = _interopRequireDefault(__webpack_require__(23));

var _environment = _interopRequireDefault(__webpack_require__(207));

var _helper = _interopRequireDefault(__webpack_require__(135));

var ControlsCSSParser = __webpack_require__(266),
		Validator = __webpack_require__(256),
		BaseContainer = __webpack_require__(289),
		BaseElementView;

BaseElementView = BaseContainer.extend({
	tagName: 'div',
	controlsCSSParser: null,
	allowRender: true,
	toggleEditTools: false,
	renderAttributes: {},
	className: function className() {
		var classes = 'elementor-element elementor-element-edit-mode ' + this.getElementUniqueID();

		if (this.toggleEditTools) {
			classes += ' elementor-element--toggle-edit-tools';
		}

		return classes;
	},
	attributes: function attributes() {
		return {
			'data-id': this.getID(),
			'data-element_type': this.model.get('elType')
		};
	},
	ui: function ui() {
		return {
			tools: '> .elementor-element-overlay > .elementor-editor-element-settings',
			editButton: '> .elementor-element-overlay .elementor-editor-element-edit',
			duplicateButton: '> .elementor-element-overlay .elementor-editor-element-duplicate',
			addButton: '> .elementor-element-overlay .elementor-editor-element-add',
			removeButton: '> .elementor-element-overlay .elementor-editor-element-remove'
		};
	},
	behaviors: function behaviors() {
		var groups = elementor.hooks.applyFilters('elements/' + this.options.model.get('elType') + '/contextMenuGroups', this.getContextMenuGroups(), this);
		var behaviors = {
			contextMenu: {
				behaviorClass: __webpack_require__(212),
				groups: groups
			}
		};
		return elementor.hooks.applyFilters('elements/base/behaviors', behaviors, this);
	},
	getBehavior: function getBehavior(name) {
		return this._behaviors[(0, _keys.default)(this.behaviors()).indexOf(name)];
	},
	events: function events() {
		return {
			mousedown: 'onMouseDown',
			'click @ui.editButton': 'onEditButtonClick',
			'click @ui.duplicateButton': 'onDuplicateButtonClick',
			'click @ui.addButton': 'onAddButtonClick',
			'click @ui.removeButton': 'onRemoveButtonClick'
		};
	},
	getElementType: function getElementType() {
		return this.model.get('elType');
	},
	getIDInt: function getIDInt() {
		return (0, _parseInt2.default)(this.getID(), 16);
	},
	getChildType: function getChildType() {
		return elementor.helpers.getElementChildType(this.getElementType());
	},
	getChildView: function getChildView(model) {
		var ChildView;
		var elType = model.get('elType');

		if ('section' === elType) {
			ChildView = __webpack_require__(192);
		} else if ('column' === elType) {
			ChildView = __webpack_require__(320);
		} else {
			ChildView = elementor.modules.elements.views.Widget;
		}

		return elementor.hooks.applyFilters('element/view', ChildView, model, this);
	},
	getTemplateType: function getTemplateType() {
		return 'js';
	},
	getEditModel: function getEditModel() {
		return this.model;
	},
	getContainer: function getContainer() {
		var _this = this;

		if (!this.container) {
			var settingsModel = this.model.get('settings');
			this.container = new elementorModules.editor.Container({
				type: this.model.get('elType'),
				id: this.model.id,
				model: this.model,
				settings: settingsModel,
				view: this,
				parent: this._parent ? this._parent.getContainer() : {},
				children: [],
				label: elementor.helpers.getModelLabel(this.model),
				controls: settingsModel.options.controls
			});

			if ((0, _keys.default)(this.container.parent).length) {
				this.container.parent.children[this._index] = this.container;
				this.on('destroy', function () {
					delete _this.container.parent.children[_this._index];
					_this.container.parent.children = _this.container.parent.children.filter(function (child) {
						return null !== child;
					});
				});
			}
		}

		return this.container;
	},
	getContextMenuGroups: function getContextMenuGroups() {
		var _this2 = this;

		var controlSign = _environment.default.mac ? '⌘' : '^';
		return [{
			name: 'general',
			actions: [{
				name: 'edit',
				icon: 'eicon-edit',
				title: elementor.translate('edit_element', [this.options.model.getTitle()]),
				callback: function callback() {
					return $e.run('panel/editor/open', {
						model: _this2.options.model,
						// Todo: remove on merge router
						view: _this2,
						// Todo: remove on merge router
						container: _this2.getContainer()
					});
				}
			}, {
				name: 'duplicate',
				icon: 'eicon-clone',
				title: elementor.translate('duplicate'),
				shortcut: controlSign + '+D',
				callback: function callback() {
					return $e.run('document/elements/duplicate', {
						container: _this2.getContainer()
					});
				}
			}]
		}, {
			name: 'clipboard',
			actions: [{
				name: 'copy',
				title: elementor.translate('copy'),
				shortcut: controlSign + '+C',
				callback: function callback() {
					return $e.run('document/elements/copy', {
						container: _this2.getContainer()
					});
				}
			}, {
				name: 'paste',
				title: elementor.translate('paste'),
				shortcut: controlSign + '+V',
				isEnabled: function isEnabled() {
					return _helper.default.isPasteEnabled(_this2.getContainer());
				},
				callback: function callback() {
					return $e.run('document/ui/paste', {
						container: _this2.getContainer()
					});
				}
			}, {
				name: 'pasteStyle',
				title: elementor.translate('paste_style'),
				shortcut: controlSign + '+⇧+V',
				isEnabled: function isEnabled() {
					return !!elementorCommon.storage.get('clipboard');
				},
				callback: function callback() {
					return $e.run('document/elements/paste-style', {
						container: _this2.getContainer()
					});
				}
			}, {
				name: 'resetStyle',
				title: elementor.translate('reset_style'),
				callback: function callback() {
					return $e.run('document/elements/reset-style', {
						container: _this2.getContainer()
					});
				}
			}]
		}, {
			name: 'delete',
			actions: [{
				name: 'delete',
				icon: 'eicon-trash',
				title: elementor.translate('delete'),
				shortcut: '⌦',
				callback: function callback() {
					return $e.run('document/elements/delete', {
						container: _this2.getContainer()
					});
				}
			}]
		}];
	},
	getEditButtons: function getEditButtons() {
		return {};
	},
	initialize: function initialize() {
		var _this3 = this;

		BaseContainer.prototype.initialize.apply(this, arguments);
		var editModel = this.getEditModel();

		if (this.collection && this.onCollectionChanged) {
			elementorCommon.helpers.softDeprecated('onCollectionChanged', '2.8.0', '$e.hooks');
			this.listenTo(this.collection, 'add remove reset', this.onCollectionChanged, this);
		}

		if (this.onSettingsChanged) {
			elementorCommon.helpers.softDeprecated('onSettingsChanged', '2.8.0', '$e.hooks');
			this.listenTo(editModel.get('settings'), 'change', this.onSettingsChanged);
		}

		this.listenTo(editModel.get('editSettings'), 'change', this.onEditSettingsChanged).listenTo(this.model, 'request:edit', this.onEditRequest).listenTo(this.model, 'request:toggleVisibility', this.toggleVisibility);
		this.initControlsCSSParser();

		_.defer(function () {
			// Init container. Defer - in order to init the container after the element is fully initialized, and properties like `_parent` are available.
			_this3.getContainer();
		});
	},
	getHandlesOverlay: function getHandlesOverlay() {
		var $handlesOverlay = jQuery('<div>', {
			class: 'elementor-element-overlay'
		}),
				$overlayList = jQuery('<div>', {
			class: "elementor-editor-element-settings elementor-editor-".concat(this.getElementType(), "-settings")
		});
		jQuery.each(this.getEditButtons(), function (toolName, tool) {
			var $item = jQuery('<div>', {
				class: "elementor-editor-element-setting elementor-editor-element-".concat(toolName),
				title: tool.title
			}),
					$icon = jQuery('<i>', {
				class: "eicon-".concat(tool.icon),
				'aria-hidden': true
			}),
					$a11y = jQuery('<span>', {
				class: 'elementor-screen-only'
			});
			$a11y.text(tool.title);
			$item.append($icon, $a11y);
			$overlayList.append($item);
		});
		$handlesOverlay.append($overlayList);
		return $handlesOverlay;
	},
	attachElContent: function attachElContent(html) {
		this.$el.empty().append(this.getHandlesOverlay(), html);
	},
	startTransport: function startTransport() {
		elementorCommon.helpers.softDeprecated('element.startTransport', '2.8.0', "$e.run( 'document/elements/copy' )");
		$e.run('document/elements/copy', {
			container: this.getContainer()
		});
	},
	copy: function copy() {
		elementorCommon.helpers.softDeprecated('element.copy', '2.8.0', "$e.run( 'document/elements/copy' )");
		$e.run('document/elements/copy', {
			container: this.getContainer()
		});
	},
	cut: function cut() {
		elementorCommon.helpers.softDeprecated('element.cut', '2.8.0');
	},
	paste: function paste() {
		elementorCommon.helpers.softDeprecated('element.paste', '2.8.0', "$e.run( 'document/elements/paste' )");
		$e.run('document/elements/paste', {
			container: this.getContainer(),
			at: this._parent.collection.indexOf(this.model)
		});
	},
	duplicate: function duplicate() {
		elementorCommon.helpers.softDeprecated('element.duplicate', '2.8.0', "$e.run( 'document/elements/duplicate' )");
		$e.run('document/elements/duplicate', {
			container: this.getContainer()
		});
	},
	pasteStyle: function pasteStyle() {
		elementorCommon.helpers.softDeprecated('element.pasteStyle', '2.8.0', "$e.run( 'document/elements/paste-style' )");
		$e.run('document/elements/paste-style', {
			container: this.getContainer()
		});
	},
	resetStyle: function resetStyle() {
		elementorCommon.helpers.softDeprecated('element.resetStyle', '2.8.0', "$e.run( 'document/elements/reset-style' )");
		$e.run('document/elements/reset-style', {
			container: this.getContainer()
		});
	},
	isStyleTransferControl: function isStyleTransferControl(control) {
		if (undefined !== control.style_transfer) {
			return control.style_transfer;
		}

		return 'content' !== control.tab || control.selectors || control.prefix_class;
	},
	toggleVisibility: function toggleVisibility() {
		this.model.set('hidden', !this.model.get('hidden'));
		this.toggleVisibilityClass();
	},
	toggleVisibilityClass: function toggleVisibilityClass() {
		this.$el.toggleClass('elementor-edit-hidden', !!this.model.get('hidden'));
	},
	addElementFromPanel: function addElementFromPanel(options) {
		options = options || {};
		var elementView = elementor.channels.panelElements.request('element:selected'),
				model = {
			elType: elementView.model.get('elType')
		};

		if (elementor.helpers.maybeDisableWidget()) {
			return;
		}

		if ('widget' === model.elType) {
			model.widgetType = elementView.model.get('widgetType');
		} else if ('section' === model.elType) {
			model.isInner = true;
		} else {
			return;
		}

		var customData = elementView.model.get('custom');

		if (customData) {
			jQuery.extend(model, customData);
		}

		return $e.run('document/elements/create', {
			container: this.getContainer(),
			model: model,
			options: options
		});
	},
	// TODO: Unused function.
	addControlValidator: function addControlValidator(controlName, validationCallback) {
		validationCallback = validationCallback.bind(this);
		var validator = new Validator({
			customValidationMethod: validationCallback
		}),
				validators = this.getEditModel().get('settings').validators;

		if (!validators[controlName]) {
			validators[controlName] = [];
		}

		validators[controlName].push(validator);
	},
	addRenderAttribute: function addRenderAttribute(element, key, value, overwrite) {
		var self = this;

		if ('object' === (0, _typeof2.default)(element)) {
			jQuery.each(element, function (elementKey, elementValue) {
				self.addRenderAttribute(elementKey, elementValue, null, overwrite);
			});
			return self;
		}

		if ('object' === (0, _typeof2.default)(key)) {
			jQuery.each(key, function (attributeKey, attributeValue) {
				self.addRenderAttribute(element, attributeKey, attributeValue, overwrite);
			});
			return self;
		}

		if (!self.renderAttributes[element]) {
			self.renderAttributes[element] = {};
		}

		if (!self.renderAttributes[element][key]) {
			self.renderAttributes[element][key] = [];
		}

		if (!(0, _isArray.default)(value)) {
			value = [value];
		}

		if (overwrite) {
			self.renderAttributes[element][key] = value;
		} else {
			self.renderAttributes[element][key] = self.renderAttributes[element][key].concat(value);
		}
	},
	getRenderAttributeString: function getRenderAttributeString(element) {
		if (!this.renderAttributes[element]) {
			return '';
		}

		var renderAttributes = this.renderAttributes[element],
				attributes = [];
		jQuery.each(renderAttributes, function (attributeKey, attributeValue) {
			attributes.push(attributeKey + '="' + _.escape(attributeValue.join(' ')) + '"');
		});
		return attributes.join(' ');
	},
	isInner: function isInner() {
		return !!this.model.get('isInner');
	},
	initControlsCSSParser: function initControlsCSSParser() {
		this.controlsCSSParser = new ControlsCSSParser({
			id: this.model.get('id'),
			context: this,
			settingsModel: this.getEditModel().get('settings'),
			dynamicParsing: this.getDynamicParsingSettings()
		});
	},
	enqueueFonts: function enqueueFonts() {
		var editModel = this.getEditModel(),
				settings = editModel.get('settings');
		jQuery.each(settings.getFontControls(), function (index, control) {
			var fontFamilyName = editModel.getSetting(control.name);

			if (!fontFamilyName) {
				return;
			}

			elementor.helpers.enqueueFont(fontFamilyName);
		}); // Enqueue Icon Fonts

		jQuery.each(settings.getIconsControls(), function (index, control) {
			var iconType = editModel.getSetting(control.name);

			if (!iconType || !iconType.library) {
				return;
			}

			elementor.helpers.enqueueIconFonts(iconType.library);
		});
	},
	renderStyles: function renderStyles(settings) {
		if (!settings) {
			settings = this.getEditModel().get('settings');
		}

		this.controlsCSSParser.stylesheet.empty();
		this.controlsCSSParser.addStyleRules(settings.getStyleControls(), settings.attributes, this.getEditModel().get('settings').controls, [/{{ID}}/g, /{{WRAPPER}}/g], [this.getID(), '.elementor-' + elementor.config.document.id + ' .elementor-element.' + this.getElementUniqueID()]);
		this.controlsCSSParser.addStyleToDocument();
	},
	renderCustomClasses: function renderCustomClasses() {
		var self = this;
		var settings = self.getEditModel().get('settings'),
				classControls = settings.getClassControls(); // Remove all previous classes

		_.each(classControls, function (control) {
			var previousClassValue = settings.previous(control.name);

			if (control.classes_dictionary) {
				if (undefined !== control.classes_dictionary[previousClassValue]) {
					previousClassValue = control.classes_dictionary[previousClassValue];
				}
			}

			self.$el.removeClass(control.prefix_class + previousClassValue);
		}); // Add new classes


		_.each(classControls, function (control) {
			var value = settings.attributes[control.name];
			var classValue = value;

			if (control.classes_dictionary) {
				if (undefined !== control.classes_dictionary[value]) {
					classValue = control.classes_dictionary[value];
				}
			}

			var isVisible = elementor.helpers.isActiveControl(control, settings.attributes);

			if (isVisible && (classValue || 0 === classValue)) {
				self.$el.addClass(control.prefix_class + classValue);
			}
		});

		self.$el.addClass(_.result(self, 'className'));
		self.toggleVisibilityClass();
	},
	renderCustomElementID: function renderCustomElementID() {
		var customElementID = this.getEditModel().get('settings').get('_element_id');
		this.$el.attr('id', customElementID);
	},
	renderUI: function renderUI() {
		this.renderStyles();
		this.renderCustomClasses();
		this.renderCustomElementID();
		this.enqueueFonts();
	},
	runReadyTrigger: function runReadyTrigger() {
		var self = this;

		_.defer(function () {
			ceFrontend.elementsHandler.runReadyTrigger(self.el);

			if (!ceFrontend.isEditMode()) {
				return;
			} // In edit mode - handle an external elements that loaded by another elements like shortcode etc.


			self.$el.find('.elementor-element.elementor-' + self.model.get('elType') + ':not(.elementor-element-edit-mode)').each(function () {
				ceFrontend.elementsHandler.runReadyTrigger(this);
			});
		});
	},
	getID: function getID() {
		return this.model.get('id');
	},
	getElementUniqueID: function getElementUniqueID() {
		return 'elementor-element-' + this.getID();
	},
	renderHTML: function renderHTML() {
		var templateType = this.getTemplateType(),
				editModel = this.getEditModel();

		if ('js' === templateType) {
			this.getEditModel().setHtmlCache();
			this.render();
			editModel.renderOnLeave = true;
		} else {
			editModel.renderRemoteServer();
		}
	},
	renderOnChange: function renderOnChange(settings) {
		if (!this.allowRender) {
			return;
		} // Make sure is correct model


		if (settings instanceof elementorModules.editor.elements.models.BaseSettings) {
			var hasChanged = settings.hasChanged();
			var isContentChanged = !hasChanged,
					isRenderRequired = !hasChanged;

			_.each(settings.changedAttributes(), function (settingValue, settingKey) {
				var control = settings.getControl(settingKey);

				if ('_column_size' === settingKey) {
					isRenderRequired = true;
					return;
				}

				if (!control) {
					isRenderRequired = true;
					isContentChanged = true;
					return;
				}

				if ('none' !== control.render_type) {
					isRenderRequired = true;
				}

				if (-1 !== ['none', 'ui'].indexOf(control.render_type)) {
					return;
				}

				if ('template' === control.render_type || !settings.isStyleControl(settingKey) && !settings.isClassControl(settingKey) && '_element_id' !== settingKey) {
					isContentChanged = true;
				}
			});

			if (!isRenderRequired) {
				return;
			}

			if (!isContentChanged) {
				this.renderUI();
				return;
			}
		} // Re-render the template


		this.renderHTML();
	},
	getDynamicParsingSettings: function getDynamicParsingSettings() {
		var self = this;
		return {
			onServerRequestStart: function onServerRequestStart() {
				self.$el.addClass('elementor-loading');
			},
			onServerRequestEnd: function onServerRequestEnd() {
				self.render();
				self.$el.removeClass('elementor-loading');
			}
		};
	},
	serializeData: function serializeData() {
		var data = BaseContainer.prototype.serializeData.apply(this, arguments);
		data.settings = this.getEditModel().get('settings').parseDynamicSettings(data.settings, this.getDynamicParsingSettings());
		return data;
	},
	save: function save() {
		$e.route('library/save-template', {
			model: this.model
		});
	},
	onBeforeRender: function onBeforeRender() {
		this.renderAttributes = {};
	},
	onRender: function onRender() {
		this.renderUI();
		this.runReadyTrigger();

		if (this.toggleEditTools) {
			var editButton = this.ui.editButton; // Since this.ui.tools does not exist while testing.

			if (this.ui.tools) {
				this.ui.tools.hoverIntent(function () {
					editButton.addClass('elementor-active');
				}, function () {
					editButton.removeClass('elementor-active');
				}, {
					timeout: 500
				});
			}
		}
	},
	onEditSettingsChanged: function onEditSettingsChanged(changedModel) {
		elementor.channels.editor.trigger('change:editSettings', changedModel, this);
	},
	onEditButtonClick: function onEditButtonClick() {
		this.model.trigger('request:edit');
	},
	onEditRequest: function onEditRequest() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		if (!this.container.isEditable()) {
			return;
		}

		var model = this.getEditModel(),
				panel = elementor.getPanelView();

		if ($e.routes.isPartOf('panel/editor') && panel.getCurrentPageView().model === model) {
			return;
		}

		if (options.scrollIntoView) {
			elementor.helpers.scrollToView(this.$el, 200);
		}

		$e.run('panel/editor/open', {
			model: model,
			view: this
		});
	},
	onDuplicateButtonClick: function onDuplicateButtonClick(event) {
		event.stopPropagation();
		$e.run('document/elements/duplicate', {
			container: this.getContainer()
		});
	},
	onRemoveButtonClick: function onRemoveButtonClick(event) {
		event.stopPropagation();
		$e.run('document/elements/delete', {
			container: this.getContainer()
		});
	},

	/* jQuery ui sortable preventing any `mousedown` event above any element, and as a result is preventing the `blur`
	 * event on the currently active element. Therefor, we need to blur the active element manually.
	 */
	onMouseDown: function onMouseDown(event) {
		if (jQuery(event.target).closest('.elementor-inline-editing').length) {
			return;
		}

		ceFrontend.elements.window.document.activeElement.blur();
	},
	onDestroy: function onDestroy() {
		this.controlsCSSParser.removeStyleFromDocument();
		this.getEditModel().get('settings').validators = {};
		elementor.channels.data.trigger('element:destroy', this.model);
	}
});
module.exports = BaseElementView;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SortableBehavior;
SortableBehavior = Marionette.Behavior.extend({
	defaults: {
		elChildType: 'widget'
	},
	events: {
		sortstart: 'onSortStart',
		sortreceive: 'onSortReceive',
		sortupdate: 'onSortUpdate',
		sortover: 'onSortOver',
		sortout: 'onSortOut'
	},
	initialize: function initialize() {
		this.listenTo(elementor.channels.dataEditMode, 'switch', this.onEditModeSwitched).listenTo(this.view.options.model, 'request:sort:start', this.startSort).listenTo(this.view.options.model, 'request:sort:update', this.updateSort).listenTo(this.view.options.model, 'request:sort:receive', this.receiveSort);
	},
	onEditModeSwitched: function onEditModeSwitched(activeMode) {
		if ('edit' === activeMode) {
			this.activate();
		} else {
			this.deactivate();
		}
	},
	onRender: function onRender() {
		var self = this;

		_.defer(function () {
			self.onEditModeSwitched(elementor.channels.dataEditMode.request('activeMode'));
		});
	},
	onDestroy: function onDestroy() {
		this.deactivate();
	},
	activate: function activate() {
		if (!elementor.userCan('design')) {
			return;
		}

		if (this.getChildViewContainer().sortable('instance')) {
			return;
		}

		var $childViewContainer = this.getChildViewContainer(),
				defaultSortableOptions = {
			connectWith: $childViewContainer.selector,
			placeholder: 'elementor-sortable-placeholder elementor-' + this.getOption('elChildType') + '-placeholder',
			cursorAt: {
				top: 20,
				left: 25
			},
			helper: this._getSortableHelper.bind(this),
			cancel: 'input, textarea, button, select, option, .elementor-inline-editing, .elementor-tab-title'
		},
				sortableOptions = _.extend(defaultSortableOptions, this.view.getSortableOptions());

		$childViewContainer.sortable(sortableOptions);
	},
	_getSortableHelper: function _getSortableHelper(event, $item) {
		var model = this.view.collection.get({
			cid: $item.data('model-cid')
		});
		return '<div style="height: 84px; width: 125px;" class="elementor-sortable-helper elementor-sortable-helper-' + model.get('elType') + '"><div class="icon"><i class="' + model.getIcon() + '"></i></div><div class="elementor-element-title-wrapper"><div class="title">' + model.getTitle() + '</div></div></div>';
	},
	getChildViewContainer: function getChildViewContainer() {
		return this.view.getChildViewContainer(this.view);
	},
	deactivate: function deactivate() {
		var childViewContainer = this.getChildViewContainer();

		if (childViewContainer.sortable('instance')) {
			childViewContainer.sortable('destroy');
		}
	},
	startSort: function startSort(event, ui) {
		event.stopPropagation();
		var model = this.view.collection.get({
			cid: ui.item.data('model-cid')
		});
		elementor.channels.data.reply('dragging:model', model).reply('dragging:view', this.view.children.findByModel(model)).reply('dragging:parent:view', this.view).trigger('drag:start', model).trigger(model.get('elType') + ':drag:start');
	},
	// Move section.
	updateSort: function updateSort(ui) {
		var at = ui.item.parent().children().index(ui.item);
		$e.run('document/elements/move', {
			container: elementor.channels.data.request('dragging:view').getContainer(),
			target: this.view.getContainer(),
			options: {
				at: at
			}
		});
	},
	// Move Column/Widget.
	receiveSort: function receiveSort(event, ui) {
		event.stopPropagation();

		if (this.view.isCollectionFilled()) {
			jQuery(ui.sender).sortable('cancel');
			return;
		}

		var model = elementor.channels.data.request('dragging:model'),
				draggedElType = model.get('elType'),
				draggedIsInnerSection = 'section' === draggedElType && model.get('isInner'),
				targetIsInnerColumn = 'column' === this.view.getElementType() && this.view.isInner();

		if (draggedIsInnerSection && targetIsInnerColumn) {
			jQuery(ui.sender).sortable('cancel');
			return;
		}

		$e.run('document/elements/move', {
			container: elementor.channels.data.request('dragging:view').getContainer(),
			target: this.view.getContainer(),
			options: {
				at: ui.item.index()
			}
		});
	},
	onSortStart: function onSortStart(event, ui) {
		if ('column' === this.options.elChildType) {
			var uiData = ui.item.data('sortableItem'),
					uiItems = uiData.items,
					itemHeight = 0;
			uiItems.forEach(function (item) {
				if (item.item[0] === ui.item[0]) {
					itemHeight = item.height;
					return false;
				}
			});
			ui.placeholder.height(itemHeight);
		}

		this.startSort(event, ui);
	},
	onSortOver: function onSortOver(event) {
		event.stopPropagation();
		var model = elementor.channels.data.request('dragging:model');
		jQuery(event.target).addClass('elementor-draggable-over').attr({
			'data-dragged-element': model.get('elType'),
			'data-dragged-is-inner': model.get('isInner')
		});
		this.$el.addClass('elementor-dragging-on-child');
	},
	onSortOut: function onSortOut(event) {
		event.stopPropagation();
		jQuery(event.target).removeClass('elementor-draggable-over').removeAttr('data-dragged-element data-dragged-is-inner');
		this.$el.removeClass('elementor-dragging-on-child');
	},
	onSortReceive: function onSortReceive(event, ui) {
		this.receiveSort(event, ui);
	},
	onSortUpdate: function onSortUpdate(event, ui) {
		event.stopPropagation();

		if (this.getChildViewContainer()[0] !== ui.item.parent()[0]) {
			return;
		}

		this.updateSort(ui);
	},
	onAddChild: function onAddChild(view) {
		view.$el.attr('data-model-cid', view.model.cid);
	}
});
module.exports = SortableBehavior;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(255);
module.exports = __webpack_require__(6).Object.values;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(7);
var $values = __webpack_require__(174)(false);

$export($export.S, 'Object', {
	values: function values(it) {
		return $values(it);
	}
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.Module.extend({
	errors: [],
	__construct: function __construct(settings) {
		var customValidationMethod = settings.customValidationMethod;

		if (customValidationMethod) {
			this.validationMethod = customValidationMethod;
		}
	},
	getDefaultSettings: function getDefaultSettings() {
		return {
			validationTerms: {}
		};
	},
	isValid: function isValid() {
		var validationErrors = this.validationMethod.apply(this, arguments);

		if (validationErrors.length) {
			this.errors = validationErrors;
			return false;
		}

		return true;
	},
	validationMethod: function validationMethod(newValue) {
		var validationTerms = this.getSettings('validationTerms'),
				errors = [];

		if (validationTerms.required) {
			if (!('' + newValue).length) {
				errors.push('Required value is empty');
			}
		}

		return errors;
	}
});

/***/ }),
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(32);
var $find = __webpack_require__(119)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
	findIndex: function findIndex(callbackfn /* , that = undefined */) {
		return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	}
});
__webpack_require__(78)(KEY);


/***/ }),
/* 265 */,
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _keys = _interopRequireDefault(__webpack_require__(23));

__webpack_require__(283);

__webpack_require__(99);

__webpack_require__(53);

__webpack_require__(29);

__webpack_require__(17);

var Stylesheet = __webpack_require__(288),
		ControlsCSSParser;

ControlsCSSParser = elementorModules.ViewModule.extend({
	stylesheet: null,
	getDefaultSettings: function getDefaultSettings() {
		return {
			id: 0,
			context: null,
			settingsModel: null,
			dynamicParsing: {}
		};
	},
	getDefaultElements: function getDefaultElements() {
		var id = "elementor-style-".concat(this.getSettings('id'));
		var $stylesheet = elementor.$previewContents.find("#".concat(id));

		if (!$stylesheet.length) {
			$stylesheet = jQuery('<style>', {
				id: id
			});
		}

		return {
			$stylesheetElement: $stylesheet
		};
	},
	initStylesheet: function initStylesheet() {
		var breakpoints = ceFrontend.config.breakpoints;
		this.stylesheet = new Stylesheet();
		this.stylesheet.addDevice('mobile', 0).addDevice('tablet', breakpoints.md).addDevice('desktop', breakpoints.lg);
	},
	addStyleRules: function addStyleRules(styleControls, values, controls, placeholders, replacements) {
		var self = this,
				dynamicParsedValues = self.getSettings('settingsModel').parseDynamicSettings(values, self.getSettings('dynamicParsing'), styleControls);

		_.each(styleControls, function (control) {
			if (control.styleFields && control.styleFields.length) {
				self.addRepeaterControlsStyleRules(values[control.name], control.styleFields, controls, placeholders, replacements);
			}

			if (control.dynamic && control.dynamic.active && values.__dynamic__ && values.__dynamic__[control.name]) {
				self.addDynamicControlStyleRules(values.__dynamic__[control.name], control);
			}

			if (!control.selectors) {
				return;
			}

			self.addControlStyleRules(control, dynamicParsedValues, controls, placeholders, replacements);
		});
	},
	addControlStyleRules: function addControlStyleRules(control, values, controls, placeholders, replacements) {
		var _this = this;

		ControlsCSSParser.addControlStyleRules(this.stylesheet, control, controls, function (StyleControl) {
			return _this.getStyleControlValue(StyleControl, values);
		}, placeholders, replacements);
	},
	getStyleControlValue: function getStyleControlValue(control, values) {
		var value = values[control.name];

		if (control.selectors_dictionary) {
			value = control.selectors_dictionary[value] || value;
		}

		if (!_.isNumber(value) && _.isEmpty(value)) {
			return;
		}

		return value;
	},
	addRepeaterControlsStyleRules: function addRepeaterControlsStyleRules(repeaterValues, repeaterControlsItems, controls, placeholders, replacements) {
		var self = this;
		repeaterControlsItems.forEach(function (item, index) {
			var itemModel = repeaterValues.models[index];
			self.addStyleRules(item, itemModel.attributes, controls, placeholders.concat(['{{CURRENT_ITEM}}']), replacements.concat(['.elementor-repeater-item-' + itemModel.get('_id')]));
		});
	},
	addDynamicControlStyleRules: function addDynamicControlStyleRules(value, control) {
		var self = this;
		elementor.dynamicTags.parseTagsText(value, control.dynamic, function (id, name, settings) {
			var tag = elementor.dynamicTags.createTag(id, name, settings);

			if (!tag) {
				return;
			}

			var tagSettingsModel = tag.model,
					styleControls = tagSettingsModel.getStyleControls();

			if (!styleControls.length) {
				return;
			}

			self.addStyleRules(tagSettingsModel.getStyleControls(), tagSettingsModel.attributes, tagSettingsModel.controls, ['{{WRAPPER}}'], ['#elementor-tag-' + id]);
		});
	},
	addStyleToDocument: function addStyleToDocument() {
		elementor.$previewContents.find('head').append(this.elements.$stylesheetElement);
		var extraCSS = elementor.hooks.applyFilters('editor/style/styleText', '', this.getSettings('context'));
		this.elements.$stylesheetElement.text(this.stylesheet + extraCSS);
	},
	removeStyleFromDocument: function removeStyleFromDocument() {
		this.elements.$stylesheetElement.remove();
	},
	onInit: function onInit() {
		elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
		this.initStylesheet();
	}
});

ControlsCSSParser.addControlStyleRules = function (stylesheet, control, controls, valueCallback, placeholders, replacements) {
	var value = valueCallback(control);

	if (undefined === value) {
		return;
	}

	_.each(control.selectors, function (cssProperty, selector) {
		var outputCssProperty;

		try {
			outputCssProperty = cssProperty.replace(/{{(?:([^.}]+)\.)?([^}| ]*)(?: *\|\| *(?:([^.}]+)\.)?([^}| ]*) *)*}}/g, function (originalPhrase, controlName, placeholder, fallbackControlName, fallbackValue) {
				var externalControlMissing = controlName && !controls[controlName];
				var parsedValue = '';

				if (!externalControlMissing) {
					parsedValue = ControlsCSSParser.parsePropertyPlaceholder(control, value, controls, valueCallback, placeholder, controlName);
				}

				if (!parsedValue && 0 !== parsedValue) {
					if (fallbackValue) {
						parsedValue = fallbackValue;
						var stringValueMatches = parsedValue.match(/^(['"])(.*)\1$/);

						if (stringValueMatches) {
							parsedValue = stringValueMatches[2];
						} else if (!isFinite(parsedValue)) {
							if (fallbackControlName && !controls[fallbackControlName]) {
								return '';
							}

							parsedValue = ControlsCSSParser.parsePropertyPlaceholder(control, value, controls, valueCallback, fallbackValue, fallbackControlName);
						}
					}

					if (!parsedValue && 0 !== parsedValue) {
						if (externalControlMissing) {
							return '';
						}

						throw '';
					}
				}

				return parsedValue;
			});
		} catch (e) {
			return;
		}

		if (_.isEmpty(outputCssProperty)) {
			return;
		}

		var devicePattern = /^(?:\([^)]+\)){1,2}/,
				deviceRules = selector.match(devicePattern),
				query = {};

		if (deviceRules) {
			deviceRules = deviceRules[0];
			selector = selector.replace(devicePattern, '');
			var pureDevicePattern = /\(([^)]+)\)/g,
					pureDeviceRules = [],
					matches;
			matches = pureDevicePattern.exec(deviceRules);

			while (matches) {
				pureDeviceRules.push(matches[1]);
				matches = pureDevicePattern.exec(deviceRules);
			}

			_.each(pureDeviceRules, function (deviceRule) {
				if ('desktop' === deviceRule) {
					return;
				}

				var device = deviceRule.replace(/\+$/, ''),
						endPoint = device === deviceRule ? 'max' : 'min';
				query[endPoint] = device;
			});
		}

		_.each(placeholders, function (placeholder, index) {
			// Check if it's a RegExp
			var regexp = placeholder.source ? placeholder.source : placeholder,
					placeholderPattern = new RegExp(regexp, 'g');
			selector = selector.replace(placeholderPattern, replacements[index]);
		});

		if (!(0, _keys.default)(query).length && control.responsive) {
			query = _.pick(elementorCommon.helpers.cloneObject(control.responsive), ['min', 'max']);

			if ('desktop' === query.max) {
				delete query.max;
			}
		}

		stylesheet.addRules(selector, outputCssProperty, query);
	});
};

ControlsCSSParser.parsePropertyPlaceholder = function (control, value, controls, valueCallback, placeholder, parserControlName) {
	if (parserControlName) {
		control = _.findWhere(controls, {
			name: parserControlName
		});
		value = valueCallback(control);
	}

	return elementor.getControlView(control.type).getStyleValue(placeholder, value, control);
};

module.exports = ControlsCSSParser;

/***/ }),
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Base = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _hookBase = _interopRequireDefault(__webpack_require__(250));

var Base = /*#__PURE__*/function (_HookBase) {
	(0, _inherits2.default)(Base, _HookBase);

	var _super = (0, _createSuper2.default)(Base);

	function Base() {
		(0, _classCallCheck2.default)(this, Base);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Base, [{
		key: "getType",
		value: function getType() {
			return 'ui';
		}
	}]);
	return Base;
}(_hookBase.default);

exports.Base = Base;
var _default = Base;
exports.default = _default;

/***/ }),
/* 273 */,
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(275);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
__webpack_require__(60);
__webpack_require__(276);
__webpack_require__(278);
__webpack_require__(279);
module.exports = __webpack_require__(6).WeakMap;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var each = __webpack_require__(144)(0);
var redefine = __webpack_require__(88);
var meta = __webpack_require__(77);
var assign = __webpack_require__(238);
var weak = __webpack_require__(277);
var isObject = __webpack_require__(9);
var validate = __webpack_require__(121);
var NATIVE_WEAK_MAP = __webpack_require__(121);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
	return function WeakMap() {
		return get(this, arguments.length > 0 ? arguments[0] : undefined);
	};
};

var methods = {
	// 23.3.3.3 WeakMap.prototype.get(key)
	get: function get(key) {
		if (isObject(key)) {
			var data = getWeak(key);
			if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
			return data ? data[this._i] : undefined;
		}
	},
	// 23.3.3.5 WeakMap.prototype.set(key, value)
	set: function set(key, value) {
		return weak.def(validate(this, WEAK_MAP), key, value);
	}
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(214)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
	InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	assign(InternalMap.prototype, methods);
	meta.NEED = true;
	each(['delete', 'has', 'get', 'set'], function (key) {
		var proto = $WeakMap.prototype;
		var method = proto[key];
		redefine(proto, key, function (a, b) {
			// store frozen objects on internal weakmap shim
			if (isObject(a) && !isExtensible(a)) {
				if (!this._f) this._f = new InternalMap();
				var result = this._f[key](a, b);
				return key == 'set' ? this : result;
			// store all the rest on native weakmap
			} return method.call(this, a, b);
		});
	});
}


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(124);
var getWeak = __webpack_require__(77).getWeak;
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(9);
var anInstance = __webpack_require__(125);
var forOf = __webpack_require__(86);
var createArrayMethod = __webpack_require__(144);
var $has = __webpack_require__(19);
var validate = __webpack_require__(121);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
	return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
	this.a = [];
};
var findUncaughtFrozen = function (store, key) {
	return arrayFind(store.a, function (it) {
		return it[0] === key;
	});
};
UncaughtFrozenStore.prototype = {
	get: function (key) {
		var entry = findUncaughtFrozen(this, key);
		if (entry) return entry[1];
	},
	has: function (key) {
		return !!findUncaughtFrozen(this, key);
	},
	set: function (key, value) {
		var entry = findUncaughtFrozen(this, key);
		if (entry) entry[1] = value;
		else this.a.push([key, value]);
	},
	'delete': function (key) {
		var index = arrayFindIndex(this.a, function (it) {
			return it[0] === key;
		});
		if (~index) this.a.splice(index, 1);
		return !!~index;
	}
};

module.exports = {
	getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
		var C = wrapper(function (that, iterable) {
			anInstance(that, C, NAME, '_i');
			that._t = NAME;      // collection type
			that._i = id++;      // collection id
			that._l = undefined; // leak store for uncaught frozen objects
			if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
		});
		redefineAll(C.prototype, {
			// 23.3.3.2 WeakMap.prototype.delete(key)
			// 23.4.3.3 WeakSet.prototype.delete(value)
			'delete': function (key) {
				if (!isObject(key)) return false;
				var data = getWeak(key);
				if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
				return data && $has(data, this._i) && delete data[this._i];
			},
			// 23.3.3.4 WeakMap.prototype.has(key)
			// 23.4.3.4 WeakSet.prototype.has(value)
			has: function has(key) {
				if (!isObject(key)) return false;
				var data = getWeak(key);
				if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
				return data && $has(data, this._i);
			}
		});
		return C;
	},
	def: function (that, key, value) {
		var data = getWeak(anObject(key), true);
		if (data === true) uncaughtFrozenStore(that).set(key, value);
		else data[that._i] = value;
		return that;
	},
	ufstore: uncaughtFrozenStore
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(215)('WeakMap');


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(216)('WeakMap');


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(281);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(238) });


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(25) && /./g.flags != 'g') __webpack_require__(44).f(RegExp.prototype, 'flags', {
	configurable: true,
	get: __webpack_require__(110)
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(15);
var inheritIfRequired = __webpack_require__(284);
var dP = __webpack_require__(44).f;
var gOPN = __webpack_require__(286).f;
var isRegExp = __webpack_require__(120);
var $flags = __webpack_require__(110);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(25) && (!CORRECT_NEW || __webpack_require__(28)(function () {
	re2[__webpack_require__(11)('match')] = false;
	// RegExp constructor can alter flags and IsRegExp works correct with @@match
	return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
	$RegExp = function RegExp(p, f) {
		var tiRE = this instanceof $RegExp;
		var piRE = isRegExp(p);
		var fiU = f === undefined;
		return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
			: inheritIfRequired(CORRECT_NEW
				? new Base(piRE && !fiU ? p.source : p, f)
				: Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
			, tiRE ? this : proto, $RegExp);
	};
	var proxy = function (key) {
		key in $RegExp || dP($RegExp, key, {
			configurable: true,
			get: function () { return Base[key]; },
			set: function (it) { Base[key] = it; }
		});
	};
	for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	proto.constructor = $RegExp;
	$RegExp.prototype = proto;
	__webpack_require__(33)(global, 'RegExp', $RegExp);
}

__webpack_require__(287)('RegExp');


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var setPrototypeOf = __webpack_require__(318).set;
module.exports = function (that, target, C) {
	var S = target.constructor;
	var P;
	if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
		setPrototypeOf(that, P);
	} return that;
};


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(319);
var createDesc = __webpack_require__(91);
var toIObject = __webpack_require__(96);
var toPrimitive = __webpack_require__(108);
var has = __webpack_require__(54);
var IE8_DOM_DEFINE = __webpack_require__(116);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	O = toIObject(O);
	P = toPrimitive(P, true);
	if (IE8_DOM_DEFINE) try {
		return gOPD(O, P);
	} catch (e) { /* empty */ }
	if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(209);
var hiddenKeys = __webpack_require__(147).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	return $keys(O, hiddenKeys);
};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(15);
var dP = __webpack_require__(44);
var DESCRIPTORS = __webpack_require__(25);
var SPECIES = __webpack_require__(11)('species');

module.exports = function (KEY) {
	var C = global[KEY];
	if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
		configurable: true,
		get: function () { return this; }
	});
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(187);

__webpack_require__(97);

__webpack_require__(53);

__webpack_require__(99);

__webpack_require__(68);

var _keys = _interopRequireDefault(__webpack_require__(23));

(function ($) {
	var Stylesheet = function Stylesheet() {
		var self = this,
				rules = {},
				rawCSS = {},
				devices = {};

		var getDeviceMaxValue = function getDeviceMaxValue(deviceName) {
			var deviceNames = (0, _keys.default)(devices),
					deviceNameIndex = deviceNames.indexOf(deviceName),
					nextIndex = deviceNameIndex + 1;

			if (nextIndex >= deviceNames.length) {
				throw new RangeError('Max value for this device is out of range.');
			}

			return devices[deviceNames[nextIndex]] - 1;
		};

		var queryToHash = function queryToHash(query) {
			var hash = [];
			$.each(query, function (endPoint) {
				hash.push(endPoint + '_' + this);
			});
			return hash.join('-');
		};

		var hashToQuery = function hashToQuery(hash) {
			var query = {};
			hash = hash.split('-').filter(String);
			hash.forEach(function (singleQuery) {
				var queryParts = singleQuery.split('_'),
						endPoint = queryParts[0],
						deviceName = queryParts[1];
				query[endPoint] = 'max' === endPoint ? getDeviceMaxValue(deviceName) : devices[deviceName];
			});
			return query;
		};

		var addQueryHash = function addQueryHash(queryHash) {
			rules[queryHash] = {};
			var hashes = (0, _keys.default)(rules);

			if (hashes.length < 2) {
				return;
			} // Sort the devices from narrowest to widest


			hashes.sort(function (a, b) {
				if ('all' === a) {
					return -1;
				}

				if ('all' === b) {
					return 1;
				}

				var aQuery = hashToQuery(a),
						bQuery = hashToQuery(b);
				return bQuery.max - aQuery.max;
			});
			var sortedRules = {};
			hashes.forEach(function (deviceName) {
				sortedRules[deviceName] = rules[deviceName];
			});
			rules = sortedRules;
		};

		var getQueryHashStyleFormat = function getQueryHashStyleFormat(queryHash) {
			var query = hashToQuery(queryHash),
					styleFormat = [];
			$.each(query, function (endPoint) {
				styleFormat.push('(' + endPoint + '-width:' + this + 'px)');
			});
			return '@media' + styleFormat.join(' and ');
		};

		this.addDevice = function (newDeviceName, deviceValue) {
			devices[newDeviceName] = deviceValue;
			var deviceNames = (0, _keys.default)(devices);

			if (deviceNames.length < 2) {
				return self;
			} // Sort the devices from narrowest to widest


			deviceNames.sort(function (a, b) {
				return devices[a] - devices[b];
			});
			var sortedDevices = {};
			deviceNames.forEach(function (deviceName) {
				sortedDevices[deviceName] = devices[deviceName];
			});
			devices = sortedDevices;
			return self;
		};

		this.addRawCSS = function (key, css) {
			rawCSS[key] = css;
		};

		this.addRules = function (selector, styleRules, query) {
			var queryHash = 'all';

			if (!_.isEmpty(query)) {
				queryHash = queryToHash(query);
			}

			if (!rules[queryHash]) {
				addQueryHash(queryHash);
			}

			if (!styleRules) {
				var parsedRules = selector.match(/[^{]+\{[^}]+}/g);
				$.each(parsedRules, function () {
					var parsedRule = this.match(/([^{]+)\{([^}]+)}/);

					if (parsedRule) {
						self.addRules(parsedRule[1].trim(), parsedRule[2].trim(), query);
					}
				});
				return;
			}

			if (!rules[queryHash][selector]) {
				rules[queryHash][selector] = {};
			}

			if ('string' === typeof styleRules) {
				styleRules = styleRules.split(';').filter(String);
				var orderedRules = {};

				try {
					$.each(styleRules, function () {
						var property = this.split(/:(.*)?/);
						orderedRules[property[0].trim()] = property[1].trim().replace(';', '');
					});
				} catch (error) {
					// At least one of the properties is incorrect
					return;
				}

				styleRules = orderedRules;
			}

			$.extend(rules[queryHash][selector], styleRules);
			return self;
		};

		this.getRules = function () {
			return rules;
		};

		this.empty = function () {
			rules = {};
			rawCSS = {};
		};

		this.toString = function () {
			var styleText = '';
			$.each(rules, function (queryHash) {
				var deviceText = Stylesheet.parseRules(this);

				if ('all' !== queryHash) {
					deviceText = getQueryHashStyleFormat(queryHash) + '{' + deviceText + '}';
				}

				styleText += deviceText;
			});
			$.each(rawCSS, function () {
				styleText += this;
			});
			return styleText;
		};
	};

	Stylesheet.parseRules = function (rules) {
		var parsedRules = '';
		$.each(rules, function (selector) {
			var selectorContent = Stylesheet.parseProperties(this);

			if (selectorContent) {
				parsedRules += selector + '{' + selectorContent + '}';
			}
		});
		return parsedRules;
	};

	Stylesheet.parseProperties = function (properties) {
		var parsedProperties = '';
		$.each(properties, function (propertyKey) {
			if (this) {
				parsedProperties += propertyKey + ':' + this + ';';
			}
		});
		return parsedProperties;
	};

	module.exports = Stylesheet;
})(jQuery);

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _keys = _interopRequireDefault(__webpack_require__(23));

module.exports = Marionette.CompositeView.extend({
	templateHelpers: function templateHelpers() {
		return {
			view: this
		};
	},
	getBehavior: function getBehavior(name) {
		return this._behaviors[(0, _keys.default)(this.behaviors()).indexOf(name)];
	},
	initialize: function initialize() {
		this.collection = this.model.get('elements');
	},
	addChildModel: function addChildModel(model, options) {
		return this.collection.add(model, options, true);
	},
	addElement: function addElement(data, options) {
		if (this.isCollectionFilled()) {
			return;
		}

		options = jQuery.extend({
			trigger: false,
			edit: true,
			onBeforeAdd: null,
			onAfterAdd: null
		}, options);
		var childTypes = this.getChildType();
		var newItem, elType;

		if (data instanceof Backbone.Model) {
			newItem = data;
			elType = newItem.get('elType');
		} else {
			newItem = {
				id: elementor.helpers.getUniqueID(),
				elType: childTypes[0],
				settings: {},
				elements: []
			};

			if (data) {
				jQuery.extend(newItem, data);
			}

			elType = newItem.elType;
		}

		if (-1 === childTypes.indexOf(elType)) {
			return this.children.last().addElement(newItem, options);
		}

		if (options.clone) {
			newItem = this.cloneItem(newItem);
		}

		if (options.trigger) {
			elementor.channels.data.trigger(options.trigger.beforeAdd, newItem);
		}

		if (options.onBeforeAdd) {
			options.onBeforeAdd();
		}

		var newModel = this.addChildModel(newItem, {
			at: options.at
		}),
				newView = this.children.findByModel(newModel);

		if (options.onAfterAdd) {
			options.onAfterAdd(newModel, newView);
		}

		if (options.trigger) {
			elementor.channels.data.trigger(options.trigger.afterAdd, newItem);
		}

		if (options.edit && elementor.documents.getCurrent().history.getActive()) {
			// Ensure container is created. TODO: Open editor via UI hook after `document/elements/create`.
			newView.getContainer();
			newModel.trigger('request:edit');
		}

		return newView;
	},
	addChildElement: function addChildElement(data, options) {
		elementorCommon.helpers.softDeprecated('addChildElement', '2.8.0', "$e.run( 'document/elements/create' )");

		if (Object !== data.constructor) {
			data = jQuery.extend({}, data);
		}

		$e.run('document/elements/create', {
			container: this.getContainer(),
			model: data,
			options: options
		});
	},
	cloneItem: function cloneItem(item) {
		var self = this;

		if (item instanceof Backbone.Model) {
			return item.clone();
		}

		item.id = elementor.helpers.getUniqueID();
		item.settings._element_id = '';
		item.elements.forEach(function (childItem, index) {
			item.elements[index] = self.cloneItem(childItem);
		});
		return item;
	},
	lookup: function lookup() {
		var element = this;

		if (element.isDestroyed) {
			element = $e.components.get('document').utils.findViewById(element.model.id);
		}

		return element;
	},
	isCollectionFilled: function isCollectionFilled() {
		return false;
	}
});

/***/ }),
/* 290 */,
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var Base = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(Base, _CommandBase);

	var _super = (0, _createSuper2.default)(Base);

	function Base() {
		(0, _classCallCheck2.default)(this, Base);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Base, [{
		key: "initialize",
		value: function initialize(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(Base.prototype), "initialize", this).call(this, args);
			var _args$document = args.document,
					document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document;
			this.document = document;
		}
	}]);
	return Base;
}(_commandBase.default);

exports.default = Base;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandInternalBase = _interopRequireDefault(__webpack_require__(211));

var Base = /*#__PURE__*/function (_CommandInternalBase) {
	(0, _inherits2.default)(Base, _CommandInternalBase);

	var _super = (0, _createSuper2.default)(Base);

	function Base() {
		(0, _classCallCheck2.default)(this, Base);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Base, [{
		key: "initialize",
		value: function initialize(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(Base.prototype), "initialize", this).call(this, args);
			/**
			 * @type {HistoryManager}
			 */

			this.history = elementor.documents.getCurrent().history;
		}
	}]);
	return Base;
}(_commandInternalBase.default);

exports.default = Base;

/***/ }),
/* 293 */,
/* 294 */,
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Dependency = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(242));

var Dependency = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Dependency, _Base);

	var _super = (0, _createSuper2.default)(Dependency);

	function Dependency() {
		(0, _classCallCheck2.default)(this, Dependency);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Dependency, [{
		key: "register",
		value: function register() {
			$e.hooks.registerDataDependency(this);
		}
	}]);
	return Dependency;
}(_base.default);

exports.Dependency = Dependency;
var _default = Dependency;
exports.default = _default;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Settings = void 0;

var _keys = _interopRequireDefault(__webpack_require__(23));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85));

var _entries = _interopRequireDefault(__webpack_require__(66));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(35));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _debounce = _interopRequireDefault(__webpack_require__(359));

var Settings = /*#__PURE__*/function (_Debounce) {
	(0, _inherits2.default)(Settings, _Debounce);

	var _super = (0, _createSuper2.default)(Settings);

	function Settings() {
		(0, _classCallCheck2.default)(this, Settings);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Settings, [{
		key: "addToHistory",

		/**
		 * Function addToHistory().
		 *
		 * @param {Container} container
		 * @param {{}} newSettings
		 * @param {{}} oldSettings
		 */
		value: function addToHistory(container, newSettings, oldSettings) {
			var changes = (0, _defineProperty2.default)({}, container.id, {
				old: oldSettings,
				new: newSettings
			}),
					historyItem = {
				containers: [container],
				data: {
					changes: changes
				},
				type: 'change',
				restore: Settings.restore
			};
			$e.internal('document/history/add-transaction', historyItem);
		}
	}, {
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentConstructor('settings', Object, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers,
					subTitle = this.constructor.getSubTitle(args);
			return {
				containers: containers,
				subTitle: subTitle,
				type: 'change'
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					_args$settings = args.settings,
					settings = _args$settings === void 0 ? {} : _args$settings,
					_args$isMultiSettings = args.isMultiSettings,
					isMultiSettings = _args$isMultiSettings === void 0 ? false : _args$isMultiSettings,
					_args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options;
			containers.forEach(function (container) {
				container = container.lookup();
				/**
				 * Settings support multi settings for each container, eg use:
				 * settings: { '{ container-id }': { someSettingKey: someSettingValue } } etc.
				 */

				var newSettings = isMultiSettings ? settings[container.id] : settings,
						oldSettings = container.settings.toJSON(); // Clear old oldValues.

				container.oldValues = {}; // Set oldValues, For each setting is about to change save setting value.

				(0, _entries.default)(newSettings).forEach(function (_ref) {
					var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
							key = _ref2[0],
							value = _ref2[1];

					// eslint-disable-line no-unused-vars
					container.oldValues[key] = oldSettings[key];
				}); // If history active, add history transaction with old and new settings.

				if (_this.isHistoryActive()) {
					_this.addToHistory(container, newSettings, container.oldValues);
				}

				if (options.external) {
					container.settings.setExternalChange(newSettings);
				} else {
					container.settings.set(newSettings);
				}

				container.render();
			});
		}
	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			return true;
		}
	}], [{
		key: "getSubTitle",

		/**
		 * Function getSubTitle().
		 *
		 * Get sub title by container.
		 *
		 * @param {{}} args
		 *
		 * @returns {string}
		 */
		value: function getSubTitle(args) {
			var _args$containers3 = args.containers,
					containers = _args$containers3 === void 0 ? [args.container] : _args$containers3,
					_args$settings2 = args.settings,
					settings = _args$settings2 === void 0 ? {} : _args$settings2,
					isMultiSettings = args.isMultiSettings,
					settingsKeys = (0, _keys.default)(settings),
					controls = containers[0].controls,
					firstSettingKey = settingsKeys[0];
			var result = '';

			if (!isMultiSettings && 1 === settingsKeys.length && controls && controls[firstSettingKey]) {
				result = controls[firstSettingKey].label;
			}

			return result;
		}
		/**
		 * Function restore().
		 *
		 * Redo/Restore.
		 *
		 * @param {{}} historyItem
		 * @param {boolean} isRedo
		 */

	}, {
		key: "restore",
		value: function restore(historyItem, isRedo) {
			var data = historyItem.get('data');
			historyItem.get('containers').forEach(function (
			/* Container */
			container) {
				var changes = data.changes[container.id];
				$e.run('document/elements/settings', {
					container: container,
					settings: isRedo ? changes.new : changes.old,
					options: {
						external: true
					}
				});
			});
		}
	}]);
	return Settings;
}(_debounce.default);

exports.Settings = Settings;
var _default = Settings;
exports.default = _default;

/***/ }),
/* 297 */,
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var BackwardsCompatibility = /*#__PURE__*/function () {
	function BackwardsCompatibility() {
		(0, _classCallCheck2.default)(this, BackwardsCompatibility);
	}

	(0, _createClass2.default)(BackwardsCompatibility, null, [{
		key: "findViewRecursive",
		value: function findViewRecursive(parent, key, value) {
			var multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
			elementorCommon.helpers.softDeprecated('findViewRecursive', '2.9.0', "$e.components.get( 'document' ).utils.findViewRecursive( parent, key, value, multiple )");
			return $e.components.get('document').utils.findViewRecursive(parent, key, value, multiple);
		}
	}, {
		key: "findViewById",
		value: function findViewById(id) {
			elementorCommon.helpers.softDeprecated('findViewById', '2.9.0', "$e.components.get( 'document' ).utils.findViewById( id )");
			return $e.components.get('document').utils.findViewById(id);
		}
	}, {
		key: "findContainerById",
		value: function findContainerById(id) {
			elementorCommon.helpers.softDeprecated('findContainerById', '2.9.0', "$e.components.get( 'document' ).utils.findContainerById( id )");
			return $e.components.get('document').utils.findContainerById(id);
		}
	}]);
	return BackwardsCompatibility;
}();

exports.default = BackwardsCompatibility;

/***/ }),
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29);

module.exports = elementorModules.Module.extend({
	getDefaultSettings: function getDefaultSettings() {
		return {
			actions: {},
			classes: {
				list: 'elementor-context-menu-list',
				group: 'elementor-context-menu-list__group',
				groupPrefix: 'elementor-context-menu-list__group-',
				item: 'elementor-context-menu-list__item',
				itemTypePrefix: 'elementor-context-menu-list__item-',
				itemTitle: 'elementor-context-menu-list__item__title',
				itemShortcut: 'elementor-context-menu-list__item__shortcut',
				iconShortcut: 'elementor-context-menu-list__item__icon',
				itemDisabled: 'elementor-context-menu-list__item--disabled',
				divider: 'elementor-context-menu-list__divider',
				hidden: 'elementor-hidden'
			}
		};
	},
	buildActionItem: function buildActionItem(action) {
		var self = this,
				classes = self.getSettings('classes'),
				$item = jQuery('<div>', {
			class: classes.item + ' ' + classes.itemTypePrefix + action.name
		}),
				$itemTitle = jQuery('<div>', {
			class: classes.itemTitle
		}).text(action.title),
				$itemIcon = jQuery('<div>', {
			class: classes.iconShortcut
		});

		if (action.icon) {
			$itemIcon.html(jQuery('<i>', {
				class: action.icon
			}));
		}

		$item.append($itemIcon, $itemTitle);

		if (action.shortcut) {
			var $itemShortcut = jQuery('<div>', {
				class: classes.itemShortcut
			}).html(action.shortcut);
			$item.append($itemShortcut);
		}

		if (action.callback) {
			$item.on('click', function () {
				self.runAction(action);
			});
		}

		action.$item = $item;
		return $item;
	},
	buildActionsList: function buildActionsList() {
		var self = this,
				classes = self.getSettings('classes'),
				groups = self.getSettings('groups'),
				$list = jQuery('<div>', {
			class: classes.list
		});
		groups.forEach(function (group) {
			var $group = jQuery('<div>', {
				class: classes.group + ' ' + classes.groupPrefix + group.name
			});
			group.actions.forEach(function (action) {
				$group.append(self.buildActionItem(action));
			});
			$list.append($group);
			group.$item = $group;
		});
		return $list;
	},
	toggleGroupVisibility: function toggleGroupVisibility(group, state) {
		group.$item.toggleClass(this.getSettings('classes.hidden'), !state);
	},
	toggleActionVisibility: function toggleActionVisibility(action, state) {
		action.$item.toggleClass(this.getSettings('classes.hidden'), !state);
	},
	toggleActionUsability: function toggleActionUsability(action, state) {
		action.$item.toggleClass(this.getSettings('classes.itemDisabled'), !state);
	},
	isActionEnabled: function isActionEnabled(action) {
		if (!action.callback && !action.groups) {
			return false;
		}

		return action.isEnabled ? action.isEnabled() : true;
	},
	runAction: function runAction(action) {
		if (!this.isActionEnabled(action)) {
			return;
		}

		action.callback();
		this.getModal().hide();
	},
	initModal: function initModal() {
		var modal;

		this.getModal = function () {
			if (!modal) {
				modal = elementorCommon.dialogsManager.createWidget('simple', {
					className: 'elementor-context-menu',
					message: this.buildActionsList(),
					iframe: elementor.$preview,
					effects: {
						hide: 'hide',
						show: 'show'
					},
					hide: {
						onOutsideContextMenu: true
					},
					position: {
						my: (elementorCommon.config.isRTL ? 'right' : 'left') + ' top',
						collision: 'fit'
					}
				});
			}

			return modal;
		};
	},
	show: function show(event) {
		var self = this,
				modal = self.getModal();
		modal.setSettings('position', {
			of: event
		});
		self.getSettings('groups').forEach(function (group) {
			var isGroupVisible = false !== group.isVisible;
			self.toggleGroupVisibility(group, isGroupVisible);

			if (isGroupVisible) {
				group.actions.forEach(function (action) {
					var isActionVisible = false !== action.isVisible;
					self.toggleActionVisibility(action, isActionVisible);

					if (isActionVisible) {
						self.toggleActionUsability(action, self.isActionEnabled(action));
					}
				});
			}
		});
		modal.show();
	},
	destroy: function destroy() {
		this.getModal().destroy();
	},
	onInit: function onInit() {
		this.initModal();
	}
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(251));

var AddSectionView = /*#__PURE__*/function (_BaseAddSectionView) {
	(0, _inherits2.default)(AddSectionView, _BaseAddSectionView);

	var _super = (0, _createSuper2.default)(AddSectionView);

	function AddSectionView() {
		(0, _classCallCheck2.default)(this, AddSectionView);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(AddSectionView, [{
		key: "className",
		value: function className() {
			return (0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "className", this).call(this) + ' elementor-add-section-inline';
		}
	}, {
		key: "fadeToDeath",
		value: function fadeToDeath() {
			var self = this;
			self.$el.slideUp(function () {
				self.destroy();
			});
		}
	}, {
		key: "onAfterPaste",
		value: function onAfterPaste() {
			(0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onAfterPaste", this).call(this);
			this.destroy();
		}
	}, {
		key: "onCloseButtonClick",
		value: function onCloseButtonClick() {
			this.fadeToDeath();
		}
	}, {
		key: "onPresetSelected",
		value: function onPresetSelected(event) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onPresetSelected", this).call(this, event);
			this.destroy();
		}
	}, {
		key: "onAddTemplateButtonClick",
		value: function onAddTemplateButtonClick() {
			(0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onAddTemplateButtonClick", this).call(this);
			this.destroy();
		}
	}, {
		key: "onDropping",
		value: function onDropping() {
			(0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onDropping", this).call(this);
			this.destroy();
		}
	}]);
	return AddSectionView;
}(_base.default);

var _default = AddSectionView;
exports.default = _default;

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(26);
var anObject = __webpack_require__(18);
var check = function (O, proto) {
	anObject(O);
	if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
	set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
		function (test, buggy, set) {
			try {
				set = __webpack_require__(58)(Function.call, __webpack_require__(285).f(Object.prototype, '__proto__').set, 2);
				set(test, []);
				buggy = !(test instanceof Array);
			} catch (e) { buggy = true; }
			return function setPrototypeOf(O, proto) {
				check(O, proto);
				if (buggy) O.__proto__ = proto;
				else set(O, proto);
				return O;
			};
		}({}, false) : undefined),
	check: check
};


/***/ }),
/* 319 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _section = __webpack_require__(192);

var BaseElementView = __webpack_require__(252),
		ColumnEmptyView = __webpack_require__(321),
		ColumnView;

ColumnView = BaseElementView.extend({
	template: Marionette.TemplateCache.get('#tmpl-elementor-column-content'),
	emptyView: ColumnEmptyView,
	childViewContainer: '> .elementor-column-wrap > .elementor-widget-wrap',
	toggleEditTools: true,
	behaviors: function behaviors() {
		var behaviors = BaseElementView.prototype.behaviors.apply(this, arguments);

		_.extend(behaviors, {
			Sortable: {
				behaviorClass: __webpack_require__(253),
				elChildType: 'widget'
			},
			Resizable: {
				behaviorClass: __webpack_require__(322)
			}
		});

		return elementor.hooks.applyFilters('elements/column/behaviors', behaviors, this);
	},
	className: function className() {
		var classes = BaseElementView.prototype.className.apply(this, arguments),
				type = this.isInner() ? 'inner' : 'top';
		return classes + ' elementor-column elementor-' + type + '-column';
	},
	tagName: function tagName() {
		return this.model.getSetting('html_tag') || 'div';
	},
	ui: function ui() {
		var ui = BaseElementView.prototype.ui.apply(this, arguments);
		ui.columnInner = '> .elementor-column-wrap';
		ui.percentsTooltip = '> .elementor-element-overlay .elementor-column-percents-tooltip';
		return ui;
	},
	getEditButtons: function getEditButtons() {
		var elementData = elementor.getElementData(this.model),
				editTools = {};
		editTools.edit = {
			title: elementor.translate('edit_element', [elementData.title]),
			icon: 'column'
		};

		if (elementor.getPreferences('edit_buttons')) {
			editTools.duplicate = {
				title: elementor.translate('duplicate_element', [elementData.title]),
				icon: 'clone'
			};
			editTools.add = {
				title: elementor.translate('add_element', [elementData.title]),
				icon: 'plus'
			};
			editTools.remove = {
				title: elementor.translate('delete_element', [elementData.title]),
				icon: 'close'
			};
		}

		return editTools;
	},
	initialize: function initialize() {
		BaseElementView.prototype.initialize.apply(this, arguments);
		this.model.get('editSettings').set('defaultEditRoute', 'layout');
	},
	attachElContent: function attachElContent() {
		BaseElementView.prototype.attachElContent.apply(this, arguments);
		var $tooltip = jQuery('<div>', {
			class: 'elementor-column-percents-tooltip'
		});
		this.$el.children('.elementor-element-overlay').append($tooltip);
	},
	getContextMenuGroups: function getContextMenuGroups() {
		var self = this,
				groups = BaseElementView.prototype.getContextMenuGroups.apply(this, arguments),
				generalGroupIndex = groups.indexOf(_.findWhere(groups, {
			name: 'general'
		}));
		groups.splice(generalGroupIndex + 1, 0, {
			name: 'addNew',
			actions: [{
				name: 'addNew',
				icon: 'eicon-plus',
				title: elementor.translate('new_column'),
				callback: this.addNewColumn.bind(this),
				isEnabled: function isEnabled() {
					return self.model.collection.length < _section.DEFAULT_MAX_COLUMNS;
				}
			}]
		});
		return groups;
	},
	isDroppingAllowed: function isDroppingAllowed() {
		// Don't allow dragging items to document which is not editable.
		if (!this.getContainer().isEditable()) {
			return false;
		}

		var elementView = elementor.channels.panelElements.request('element:selected');

		if (!elementView) {
			return false;
		}

		var elType = elementView.model.get('elType');

		if ('section' === elType) {
			return !this.isInner();
		}

		return 'widget' === elType;
	},
	getPercentsForDisplay: function getPercentsForDisplay() {
		var inlineSize = +this.model.getSetting('_inline_size') || this.getPercentSize();
		return inlineSize.toFixed(1) + '%';
	},
	changeSizeUI: function changeSizeUI() {
		var self = this,
				columnSize = self.model.getSetting('_column_size');
		self.$el.attr('data-col', columnSize);

		_.defer(function () {
			// Wait for the column size to be applied
			if (self.ui.percentsTooltip) {
				self.ui.percentsTooltip.text(self.getPercentsForDisplay());
			}
		});
	},
	getPercentSize: function getPercentSize(size) {
		if (!size) {
			size = this.el.getBoundingClientRect().width;
		}

		return +(size / this.$el.parent().width() * 100).toFixed(3);
	},
	getSortableOptions: function getSortableOptions() {
		return {
			connectWith: '.elementor-widget-wrap',
			items: '> .elementor-element'
		};
	},
	changeChildContainerClasses: function changeChildContainerClasses() {
		var emptyClass = 'elementor-element-empty',
				populatedClass = 'elementor-element-populated';

		if (this.ui.columnInner) {
			if (this.collection.isEmpty()) {
				this.ui.columnInner.removeClass(populatedClass).addClass(emptyClass);
			} else {
				this.ui.columnInner.removeClass(emptyClass).addClass(populatedClass);
			}
		}
	},
	addNewColumn: function addNewColumn() {
		$e.run('document/elements/create', {
			model: {
				elType: 'column'
			},
			container: this.getContainer().parent,
			options: {
				at: this.$el.index() + 1
			}
		});
	},
	onRender: function onRender() {
		var self = this;
		BaseElementView.prototype.onRender.apply(self, arguments);
		self.changeChildContainerClasses();
		self.changeSizeUI();
		self.$el.html5Droppable({
			items: ' > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element, >.elementor-column-wrap > .elementor-widget-wrap > .elementor-empty-view > .elementor-first-add',
			axis: ['vertical'],
			groups: ['elementor-element'],
			isDroppingAllowed: self.isDroppingAllowed.bind(self),
			currentElementClass: 'elementor-html5dnd-current-element',
			placeholderClass: 'elementor-sortable-placeholder elementor-widget-placeholder',
			hasDraggingOnChildClass: 'elementor-dragging-on-child',
			onDropping: function onDropping(side, event) {
				event.stopPropagation(); // Triggering drag end manually, since it won't fired above iframe

				elementor.getPreviewView().onPanelElementDragEnd();
				var newIndex = jQuery(this).index();

				if ('bottom' === side) {
					newIndex++;
				}

				self.addElementFromPanel({
					at: newIndex
				});
			}
		});
	},
	onAddButtonClick: function onAddButtonClick(event) {
		event.stopPropagation();
		this.addNewColumn();
	}
});
module.exports = ColumnView;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _helper = _interopRequireDefault(__webpack_require__(135));

module.exports = Marionette.ItemView.extend({
	template: '#tmpl-elementor-empty-preview',
	className: 'elementor-empty-view',
	events: {
		click: 'onClickAdd'
	},
	behaviors: function behaviors() {
		return {
			contextMenu: {
				behaviorClass: __webpack_require__(212),
				groups: this.getContextMenuGroups()
			}
		};
	},
	getContextMenuGroups: function getContextMenuGroups() {
		var _this = this;

		return [{
			name: 'general',
			actions: [{
				name: 'paste',
				title: elementor.translate('paste'),
				isEnabled: function isEnabled() {
					return _helper.default.isPasteEnabled(_this._parent.getContainer());
				},
				callback: function callback() {
					return $e.run('document/ui/paste', {
						container: _this._parent.getContainer()
					});
				}
			}]
		}];
	},
	onClickAdd: function onClickAdd() {
		$e.route('panel/elements/categories');
	}
});

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ResizableBehavior;
ResizableBehavior = Marionette.Behavior.extend({
	defaults: {
		handles: elementorCommon.config.isRTL ? 'w' : 'e'
	},
	events: {
		resizestart: 'onResizeStart',
		resizestop: 'onResizeStop',
		resize: 'onResize'
	},
	initialize: function initialize() {
		Marionette.Behavior.prototype.initialize.apply(this, arguments);
		this.listenTo(elementor.channels.dataEditMode, 'switch', this.onEditModeSwitched);
	},
	active: function active() {
		if (!elementor.userCan('design')) {
			return;
		}

		this.deactivate();

		var options = _.clone(this.options);

		delete options.behaviorClass;

		var $childViewContainer = this.getChildViewContainer(),
				defaultResizableOptions = {},
				resizableOptions = _.extend(defaultResizableOptions, options);

		$childViewContainer.resizable(resizableOptions);
	},
	deactivate: function deactivate() {
		if (this.getChildViewContainer().resizable('instance')) {
			this.getChildViewContainer().resizable('destroy');
		}
	},
	onEditModeSwitched: function onEditModeSwitched(activeMode) {
		if ('edit' === activeMode) {
			this.active();
		} else {
			this.deactivate();
		}
	},
	onRender: function onRender() {
		var self = this;

		_.defer(function () {
			self.onEditModeSwitched(elementor.channels.dataEditMode.request('activeMode'));
		});
	},
	onDestroy: function onDestroy() {
		this.deactivate();
	},
	onResizeStart: function onResizeStart(event) {
		event.stopPropagation();
		this.view.$el.data('originalWidth', this.view.el.getBoundingClientRect().width);
		this.view.triggerMethod('request:resize:start', event);
	},
	onResizeStop: function onResizeStop(event) {
		event.stopPropagation();
		this.view.triggerMethod('request:resize:stop');
	},
	onResize: function onResize(event, ui) {
		event.stopPropagation();
		this.view.triggerMethod('request:resize', ui, event);
	},
	getChildViewContainer: function getChildViewContainer() {
		return this.$el;
	}
});
module.exports = ResizableBehavior;

/***/ }),
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.getDefaultDebounceDelay = exports.DEFAULT_DEBOUNCE_DELAY = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(35));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var _history = _interopRequireDefault(__webpack_require__(87));

var DEFAULT_DEBOUNCE_DELAY = 800;
/**
 * Function getDefaultDebounceDelay().
 *
 * Returns default debounce delay time, if exists in config override.
 *
 * @returns {number}
 */

exports.DEFAULT_DEBOUNCE_DELAY = DEFAULT_DEBOUNCE_DELAY;

var getDefaultDebounceDelay = function getDefaultDebounceDelay() {
	var result = DEFAULT_DEBOUNCE_DELAY;

	if (elementor.config.document && undefined !== elementor.config.document.debounceDelay) {
		result = elementor.config.document.debounceDelay;
	}

	return result;
};

exports.getDefaultDebounceDelay = getDefaultDebounceDelay;

var Debounce = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Debounce, _History);

	var _super = (0, _createSuper2.default)(Debounce);

	function Debounce() {
		(0, _classCallCheck2.default)(this, Debounce);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Debounce, [{
		key: "initialize",

		/**
		 * Function debounce().
		 *
		 * Will debounce every function you pass in, at the same debounce flow.
		 *
		 * @param {(function())}
		 */
		value: function initialize(args) {
			var _args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options;
			(0, _get2.default)((0, _getPrototypeOf2.default)(Debounce.prototype), "initialize", this).call(this, args);

			if (!this.constructor.debounce) {
				this.constructor.debounce = _.debounce(function (fn) {
					return fn();
				}, getDefaultDebounceDelay());
			} // If its head command, and not called within another command.


			if (1 === $e.commands.currentTrace.length || options.debounce) {
				this.isDebounceRequired = true;
			}
		}
	}, {
		key: "onBeforeRun",
		value: function onBeforeRun(args) {
			_commandBase.default.prototype.onBeforeRun.call(this, args);

			if (this.history && this.isHistoryActive()) {
				$e.internal('document/history/add-transaction', this.history);
			}
		}
	}, {
		key: "onAfterRun",
		value: function onAfterRun(args, result) {
			_commandBase.default.prototype.onAfterRun.call(this, args, result);

			if (this.isHistoryActive()) {
				if (this.isDebounceRequired) {
					this.constructor.debounce(function () {
						return $e.internal('document/history/end-transaction');
					});
				} else {
					$e.internal('document/history/end-transaction');
				}
			}
		}
	}, {
		key: "onCatchApply",
		value: function onCatchApply(e) {
			_commandBase.default.prototype.onCatchApply.call(this, e); // Rollback history on failure.


			if (e instanceof $e.modules.HookBreak && this.history) {
				if (this.isDebounceRequired) {
					// `clear-transaction` is under debounce, because it should `clear-transaction` after `end-transaction`.
					this.constructor.debounce(function () {
						return $e.internal('document/history/clear-transaction');
					});
				} else {
					$e.internal('document/history/clear-transaction');
				}
			}
		}
	}]);
	return Debounce;
}(_history.default);

exports.default = Debounce;
(0, _defineProperty2.default)(Debounce, "debounce", undefined);

/***/ }),
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "Copy", {
	enumerable: true,
	get: function get() {
		return _copy.Copy;
	}
});

_Object$defineProperty(exports, "CopyAll", {
	enumerable: true,
	get: function get() {
		return _copyAll.CopyAll;
	}
});

_Object$defineProperty(exports, "Create", {
	enumerable: true,
	get: function get() {
		return _create.Create;
	}
});

_Object$defineProperty(exports, "Delete", {
	enumerable: true,
	get: function get() {
		return _delete.Delete;
	}
});

_Object$defineProperty(exports, "Duplicate", {
	enumerable: true,
	get: function get() {
		return _duplicate.Duplicate;
	}
});

_Object$defineProperty(exports, "Empty", {
	enumerable: true,
	get: function get() {
		return _empty.Empty;
	}
});

_Object$defineProperty(exports, "Import", {
	enumerable: true,
	get: function get() {
		return _import.Import;
	}
});

_Object$defineProperty(exports, "Paste", {
	enumerable: true,
	get: function get() {
		return _paste.Paste;
	}
});

_Object$defineProperty(exports, "Move", {
	enumerable: true,
	get: function get() {
		return _move.Move;
	}
});

_Object$defineProperty(exports, "PasteStyle", {
	enumerable: true,
	get: function get() {
		return _pasteStyle.PasteStyle;
	}
});

_Object$defineProperty(exports, "ResetSettings", {
	enumerable: true,
	get: function get() {
		return _resetSettings.ResetSettings;
	}
});

_Object$defineProperty(exports, "ResetStyle", {
	enumerable: true,
	get: function get() {
		return _resetStyle.ResetStyle;
	}
});

_Object$defineProperty(exports, "Settings", {
	enumerable: true,
	get: function get() {
		return _settings.Settings;
	}
});

var _copy = __webpack_require__(580);

var _copyAll = __webpack_require__(581);

var _create = __webpack_require__(582);

var _delete = __webpack_require__(583);

var _duplicate = __webpack_require__(584);

var _empty = __webpack_require__(585);

var _import = __webpack_require__(586);

var _paste = __webpack_require__(587);

var _move = __webpack_require__(588);

var _pasteStyle = __webpack_require__(589);

var _resetSettings = __webpack_require__(590);

var _resetStyle = __webpack_require__(591);

var _settings = __webpack_require__(296);

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var _settings = _interopRequireDefault(__webpack_require__(296));

var DisableEnable = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(DisableEnable, _History);

	var _super = (0, _createSuper2.default)(DisableEnable);

	function DisableEnable() {
		(0, _classCallCheck2.default)(this, DisableEnable);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(DisableEnable, [{
		key: "initialize",
		value: function initialize(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(DisableEnable.prototype), "initialize", this).call(this, args);
			/**
			 * Which command is running.
			 *
			 * @type {string}
			 */

			this.type = 'document/dynamic/enable' === this.currentCommand ? 'enable' : 'disable';
		}
	}, {
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentConstructor('settings', Object, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var settings = args.settings,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers,
					changes = {};
			containers.forEach(function (container) {
				var id = container.id;

				if (!changes[id]) {
					changes[id] = {};
				}

				changes[id] = settings;
			});

			var subTitle = elementor.translate('dynamic') + ' ' + _settings.default.getSubTitle(args),
					type = this.type;

			return {
				containers: containers,
				subTitle: subTitle,
				data: {
					changes: changes,
					command: this.currentCommand
				},
				type: type,
				restore: this.constructor.restore
			};
		}
	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			return true;
		}
	}], [{
		key: "restore",
		value: function restore(historyItem, isRedo) {
			var data = historyItem.get('data'); // Upon `disable` command toggle `isRedo`.

			if ('document/dynamic/disable' === data.command) {
				isRedo = !isRedo;
			}

			historyItem.get('containers').forEach(function (container) {
				var settings = data.changes[container.id],
						toggle = isRedo ? 'document/dynamic/enable' : 'document/dynamic/disable';
				$e.run(toggle, {
					container: container,
					settings: settings
				});
				container.panel.refresh();
			});
		}
	}]);
	return DisableEnable;
}(_history.default);

exports.default = DisableEnable;

/***/ }),
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Before = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(272));

var Before = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Before, _Base);

	var _super = (0, _createSuper2.default)(Before);

	function Before() {
		(0, _classCallCheck2.default)(this, Before);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Before, [{
		key: "register",
		value: function register() {
			$e.hooks.registerUIBefore(this);
		}
	}]);
	return Before;
}(_base.default);

exports.Before = Before;
var _default = Before;
exports.default = _default;

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Catch = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(272));

var Catch = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Catch, _Base);

	var _super = (0, _createSuper2.default)(Catch);

	function Catch() {
		(0, _classCallCheck2.default)(this, Catch);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Catch, [{
		key: "register",
		value: function register() {
			$e.hooks.registerUICatch(this);
		}
	}]);
	return Catch;
}(_base.default);

exports.Catch = Catch;
var _default = Catch;
exports.default = _default;

/***/ }),
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Copy = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var Copy = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(Copy, _CommandBase);

	var _super = (0, _createSuper2.default)(Copy);

	function Copy() {
		(0, _classCallCheck2.default)(this, Copy);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Copy, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$storageKey = args.storageKey,
					storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			elementorCommon.storage.set(storageKey, containers.map(function (container) {
				return container.model.toJSON({
					copyHtmlCache: true
				});
			}));
		}
	}]);
	return Copy;
}(_commandBase.default);

exports.Copy = Copy;
var _default = Copy;
exports.default = _default;

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.CopyAll = void 0;

var _values = _interopRequireDefault(__webpack_require__(115));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var CopyAll = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(CopyAll, _CommandBase);

	var _super = (0, _createSuper2.default)(CopyAll);

	function CopyAll() {
		(0, _classCallCheck2.default)(this, CopyAll);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(CopyAll, [{
		key: "apply",
		value: function apply() {
			$e.run('document/elements/copy', {
				containers: (0, _values.default)(elementor.getPreviewView().children._views).map(function (view) {
					return view.getContainer();
				})
			});
		}
	}]);
	return CopyAll;
}(_commandBase.default);

exports.CopyAll = CopyAll;
var _default = CopyAll;
exports.default = _default;

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Create = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Create = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Create, _History);

	var _super = (0, _createSuper2.default)(Create);

	function Create() {
		(0, _classCallCheck2.default)(this, Create);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Create, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args); // Avoid Backbone model & etc.

			this.requireArgumentConstructor('model', Object, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var model = args.model,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				model: model,
				type: 'add',
				title: elementor.helpers.getModelLabel(model)
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var model = args.model,
					_args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options,
					_args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			var result = []; // BC: Deprecated since 2.8.0 - use `$e.hooks`.

			if (!options.trigger) {
				options.trigger = {
					beforeAdd: 'element:before:add',
					afterAdd: 'element:after:add'
				};
			}

			containers.forEach(function (container) {
				container = container.lookup();
				var createdContainer = container.view.addElement(model, options).getContainer();
				result.push(createdContainer);
				/**
				 * Acknowledge history of each created item, because we cannot pass the elements when they do not exist
				 * in getHistory().
				 */

				if (_this.isHistoryActive()) {
					$e.internal('document/history/log-sub-item', {
						container: container,
						type: 'sub-add',
						restore: _this.constructor.restore,
						options: options,
						data: {
							containerToRestore: createdContainer,
							modelToRestore: createdContainer.model.toJSON()
						}
					});
				}
			});

			if (1 === result.length) {
				result = result[0];
			}

			return result;
		}
	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			return true;
		}
	}], [{
		key: "restore",
		value: function restore(historyItem, isRedo) {
			var data = historyItem.get('data'),
					container = historyItem.get('container'),
					options = historyItem.get('options') || {}; // No clone when restoring. e.g: duplicate will generate unique ids while restoring.

			if (options.clone) {
				options.clone = false;
			}

			if (isRedo) {
				$e.run('document/elements/create', {
					container: container,
					model: data.modelToRestore,
					options: options
				});
			} else {
				$e.run('document/elements/delete', {
					container: data.containerToRestore
				});
			}
		}
	}]);
	return Create;
}(_history.default);

exports.Create = Create;
var _default = Create;
exports.default = _default;

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Delete = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Delete = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Delete, _History);

	var _super = (0, _createSuper2.default)(Delete);

	function Delete() {
		(0, _classCallCheck2.default)(this, Delete);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Delete, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'remove'
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (container) {
				container = container.lookup();

				if (_this.isHistoryActive()) {
					$e.internal('document/history/log-sub-item', {
						container: container,
						type: 'sub-remove',
						restore: _this.constructor.restore,
						data: {
							model: container.model.toJSON(),
							parent: container.parent,
							at: container.view._index
						}
					});
				} // BC: Deprecated since 2.8.0 - use `$e.hooks`.


				elementor.channels.data.trigger('element:before:remove', container.model);
				container.model.destroy(); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

				elementor.channels.data.trigger('element:after:remove', container.model);
				container.panel.refresh();
			});

			if (1 === containers.length) {
				return containers[0];
			}

			return containers;
		}
	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			return true;
		}
	}], [{
		key: "restore",
		value: function restore(historyItem, isRedo) {
			var container = historyItem.get('container'),
					data = historyItem.get('data');

			if (isRedo) {
				$e.run('document/elements/delete', {
					container: container
				});
			} else {
				$e.run('document/elements/create', {
					container: data.parent,
					model: data.model,
					options: {
						at: data.at
					}
				});
			}
		}
	}]);
	return Delete;
}(_history.default);

exports.Delete = Delete;
var _default = Delete;
exports.default = _default;

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Duplicate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Duplicate = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Duplicate, _History);

	var _super = (0, _createSuper2.default)(Duplicate);

	function Duplicate() {
		(0, _classCallCheck2.default)(this, Duplicate);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Duplicate, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'duplicate'
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					result = [];
			containers.forEach(function (container) {
				var parent = container.parent,
						at = container.view._index + 1;
				result.push($e.run('document/elements/create', {
					container: parent,
					model: container.model.toJSON(),
					options: {
						at: at,
						clone: true
					}
				}));
			});

			if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}]);
	return Duplicate;
}(_history.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Empty = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Empty = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Empty, _History);

	var _super = (0, _createSuper2.default)(Empty);

	function Empty() {
		(0, _classCallCheck2.default)(this, Empty);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Empty, [{
		key: "getHistory",
		value: function getHistory(args) {
			if (args.force) {
				return {
					type: 'remove',
					title: elementor.translate('all_content'),
					data: elementor.elements ? elementor.elements.toJSON() : null,
					restore: this.constructor.restore
				};
			}

			return false;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			if (args.force && elementor.elements) {
				elementor.elements.reset();
				elementor.getPreviewContainer().panel.closeEditor();
				return;
			}

			elementor.getClearPageDialog().show();
		}
	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			if (this.args.force) {
				return true;
			}
		}
	}], [{
		key: "restore",
		value: function restore(historyItem, isRedo) {
			if (isRedo) {
				$e.run('document/elements/empty', {
					force: true
				});
			} else {
				var data = historyItem.get('data');

				if (data) {
					elementor.getPreviewView().addChildModel(data);
				}

				$e.internal('document/save/set-is-modified', {
					status: true
				});
			}
		}
	}]);
	return Empty;
}(_history.default);

exports.Empty = Empty;
var _default = Empty;
exports.default = _default;

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Import = void 0;

var _assign = _interopRequireDefault(__webpack_require__(177));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85));

var _entries = _interopRequireDefault(__webpack_require__(66));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Import = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Import, _History);

	var _super = (0, _createSuper2.default)(Import);

	function Import() {
		(0, _classCallCheck2.default)(this, Import);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Import, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireArgumentInstance('model', Backbone.Model, args);
			this.requireArgumentConstructor('data', Object, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var model = args.model;
			return {
				type: 'add',
				title: elementor.translate('template'),
				subTitle: model.get('title')
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var data = args.data,
					_args$options = args.options,
					options = _args$options === void 0 ? args.options || {} : _args$options,
					previewContainer = elementor.getPreviewContainer(),
					result = [];
			var at = isNaN(options.at) ? previewContainer.view.collection.length : options.at; // Each `data.content`.

			(0, _entries.default)(data.content).forEach(function (_ref) {
				var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
						index = _ref2[0],
						model = _ref2[1];

				// eslint-disable-line no-unused-vars
				result.push($e.run('document/elements/create', {
					container: elementor.getPreviewContainer(),
					model: model,
					options: (0, _assign.default)(options, {
						at: at
					})
				}));
				at++;
			});

			if (options.withPageSettings) {
				$e.run('document/elements/settings', {
					container: elementor.settings.page.getEditedView().getContainer(),
					settings: data.page_settings,
					options: {
						external: true
					}
				});
			}

			return result;
		}
	}]);
	return Import;
}(_history.default);

exports.Import = Import;
var _default = Import;
exports.default = _default;

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Paste = void 0;

var _assign = _interopRequireDefault(__webpack_require__(177));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Paste = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Paste, _History);

	var _super = (0, _createSuper2.default)(Paste);

	function Paste() {
		(0, _classCallCheck2.default)(this, Paste);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Paste, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args); // Validate if storage have data.

			var _args$storageKey = args.storageKey,
					storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
					storageData = elementorCommon.storage.get(storageKey);
			this.requireArgumentType('storageData', 'object', {
				storageData: storageData
			});
		}
	}, {
		key: "getHistory",
		value: function getHistory() {
			return {
				type: 'paste',
				title: elementor.translate('elements')
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var at = args.at,
					_args$rebuild = args.rebuild,
					rebuild = _args$rebuild === void 0 ? false : _args$rebuild,
					_args$storageKey2 = args.storageKey,
					storageKey = _args$storageKey2 === void 0 ? 'clipboard' : _args$storageKey2,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers,
					_args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options,
					storageData = elementorCommon.storage.get(storageKey),
					result = []; // Paste on "Add Section" area.

			if (rebuild) {
				// Paste at each target.
				containers.forEach(function (targetContainer) {
					var index = 'undefined' === typeof at ? targetContainer.view.collection.length : at;
					storageData.forEach(function (model) {
						switch (model.elType) {
							case 'section':
								{
									// If is inner create section for `inner-section`.
									if (model.isInner) {
										var section = $e.run('document/elements/create', {
											container: targetContainer,
											model: {
												elType: 'section'
											},
											columns: 1,
											options: {
												at: index,
												edit: false
											}
										}); // `targetContainer` = first column at `section`.

										targetContainer = section.view.children.findByIndex(0).getContainer();
									} // Will be not affected by hook since it always have `model.elements`.


									result.push(_this.pasteTo([targetContainer], [model], {
										at: index,
										edit: false
									}));
									index++;
								}
								break;

							case 'column':
								{
									// Next code changed from original since `_checkIsEmpty()` was removed.
									var _section = $e.run('document/elements/create', {
										container: targetContainer,
										model: {
											elType: 'section'
										},
										columns: 0,
										// section with no columns.
										options: {
											at: index,
											edit: false
										}
									});

									result.push(_this.pasteTo([_section], [model]));
								}
								break;

							default:
								// In case it widget:
								var target; // If you trying to paste widget on section, then paste should be at the first column.

								if ('section' === targetContainer.model.get('elType')) {
									target = [targetContainer.view.children.findByIndex(0).getContainer()];
								} else {
									// Else, create section with one column for element.
									var _section2 = $e.run('document/elements/create', {
										container: targetContainer,
										model: {
											elType: 'section'
										},
										columns: 1,
										options: {
											at: index
										}
									}); // Create the element in the column that just was created.


									target = [_section2.view.children.first().getContainer()];
								}

								result.push(_this.pasteTo(target, [model]));
						}
					});
				});
			} else {
				if (undefined !== at) {
					options.at = at;
				}

				result.push(this.pasteTo(containers, storageData, options));
			}

			if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}, {
		key: "pasteTo",
		value: function pasteTo(targetContainers, models) {
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			options = (0, _assign.default)({
				at: null,
				clone: true
			}, options);
			var result = [];
			models.forEach(function (model) {
				result.push($e.run('document/elements/create', {
					containers: targetContainers,
					model: model,
					options: options
				})); // On paste sections, increase the `at` for every section.

				if (null !== options.at) {
					options.at++;
				}
			});

			if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}]);
	return Paste;
}(_history.default);

exports.Paste = Paste;
var _default = Paste;
exports.default = _default;

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Move = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Move = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Move, _History);

	var _super = (0, _createSuper2.default)(Move);

	function Move() {
		(0, _classCallCheck2.default)(this, Move);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Move, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentInstance('target', elementorModules.editor.Container, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'move'
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var target = args.target,
					_args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options,
					_args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					reCreate = [];
			containers.forEach(function (container) {
				reCreate.push(container.model.toJSON());
				$e.run('document/elements/delete', {
					container: container
				});
			});
			var count = 0;
			reCreate.forEach(function (model) {
				// If multiple fix position.
				if (options.hasOwnProperty('at') && reCreate.length > 1) {
					if (0 !== count) {
						options.at += count;
					}
				} // BC: Deprecated since 2.8.0 - use `$e.hooks`.


				options.trigger = {
					beforeAdd: 'drag:before:update',
					afterAdd: 'drag:after:update'
				};
				$e.run('document/elements/create', {
					container: target,
					model: model,
					options: options
				});
				count++;
			});
		}
	}]);
	return Move;
}(_history.default);

exports.Move = Move;
var _default = Move;
exports.default = _default;

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.PasteStyle = void 0;

var _keys = _interopRequireDefault(__webpack_require__(23));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85));

var _entries = _interopRequireDefault(__webpack_require__(66));

var _typeof2 = _interopRequireDefault(__webpack_require__(40));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var PasteStyle = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(PasteStyle, _History);

	var _super = (0, _createSuper2.default)(PasteStyle);

	function PasteStyle() {
		(0, _classCallCheck2.default)(this, PasteStyle);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(PasteStyle, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args); // Validate if storage have data.

			var _args$storageKey = args.storageKey,
					storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
					storageData = elementorCommon.storage.get(storageKey);
			this.requireArgumentType('storageData', 'object', {
				storageData: storageData
			});
		}
	}, {
		key: "validateControls",
		value: function validateControls(source, target) {
			var result = true; // Cannot use `_.isEmpty()` does not pass paste style test.

			if (null === source || null === target || undefined === source || undefined === target || 'object' === (0, _typeof2.default)(source) ^ 'object' === (0, _typeof2.default)(target)) {
				result = false;
			}

			return result;
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'paste_style'
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					_args$storageKey2 = args.storageKey,
					storageKey = _args$storageKey2 === void 0 ? 'clipboard' : _args$storageKey2,
					storageData = elementorCommon.storage.get(storageKey);
			containers.forEach(function (targetContainer) {
				var targetSettings = targetContainer.settings,
						targetSettingsAttributes = targetSettings.attributes,
						targetControls = targetSettings.controls,
						diffSettings = {};
				storageData.forEach(function (sourceModel) {
					var sourceSettings = sourceModel.settings;
					(0, _entries.default)(targetControls).forEach(function (_ref) {
						var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
								controlName = _ref2[0],
								control = _ref2[1];

						if (!targetContainer.view.isStyleTransferControl(control)) {
							return;
						}

						var controlSourceValue = sourceSettings[controlName],
								controlTargetValue = targetSettingsAttributes[controlName];

						if (!_this.validateControls(controlSourceValue, controlTargetValue)) {
							return;
						}

						if ('object' === (0, _typeof2.default)(controlSourceValue)) {
							var isEqual = (0, _keys.default)(controlSourceValue).some(function (propertyKey) {
								if (controlSourceValue[propertyKey] !== controlTargetValue[propertyKey]) {
									return false;
								}
							});

							if (isEqual) {
								return;
							}
						}

						if (controlSourceValue === controlTargetValue || !elementor.getControlView(control.type).onPasteStyle(control, controlSourceValue)) {
							return;
						}

						diffSettings[controlName] = controlSourceValue;
					}); // Moved from `editor/elements/views/base.js` `pasteStyle` function.

					targetContainer.view.allowRender = false; // BC: Deprecated since 2.8.0 - use `$e.hooks`.

					elementor.channels.data.trigger('element:before:paste:style', targetContainer.model);
					$e.run('document/elements/settings', {
						container: targetContainer,
						settings: diffSettings,
						options: {
							external: true
						}
					}); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

					elementor.channels.data.trigger('element:after:paste:style', targetContainer.model);
					targetContainer.view.allowRender = true;
					targetContainer.render();
				});
			});
		}
	}]);
	return PasteStyle;
}(_history.default);

exports.PasteStyle = PasteStyle;
var _default = PasteStyle;
exports.default = _default;

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ResetSettings = void 0;

__webpack_require__(17);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85));

var _entries = _interopRequireDefault(__webpack_require__(66));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var ResetSettings = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(ResetSettings, _History);

	var _super = (0, _createSuper2.default)(ResetSettings);

	function ResetSettings() {
		(0, _classCallCheck2.default)(this, ResetSettings);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ResetSettings, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'reset_settings'
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					_args$settings = args.settings,
					settings = _args$settings === void 0 ? [] : _args$settings;
			containers.forEach(function (container) {
				var controls = (0, _entries.default)(container.settings.controls),
						defaultValues = {};
				controls.forEach(function (_ref) {
					var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
							controlName = _ref2[0],
							control = _ref2[1];

					// If settings were specific, restore only them.
					if (settings && settings.length) {
						if (!settings.find(function (key) {
							return key === controlName;
						})) {
							return;
						}
					}

					defaultValues[controlName] = control.default;
				});
				$e.run('document/elements/settings', {
					container: container,
					settings: defaultValues
				});
				container.render();
			});
		}
	}]);
	return ResetSettings;
}(_history.default);

exports.ResetSettings = ResetSettings;
var _default = ResetSettings;
exports.default = _default;

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ResetStyle = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85));

var _entries = _interopRequireDefault(__webpack_require__(66));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var ResetStyle = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(ResetStyle, _History);

	var _super = (0, _createSuper2.default)(ResetStyle);

	function ResetStyle() {
		(0, _classCallCheck2.default)(this, ResetStyle);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ResetStyle, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'reset_style'
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (container) {
				var controls = container.settings.controls,
						settingsKeys = [];
				container.view.allowRender = false;
				(0, _entries.default)(controls).forEach(function (_ref) {
					var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
							controlName = _ref2[0],
							control = _ref2[1];

					if (!container.view.isStyleTransferControl(control)) {
						return;
					}

					settingsKeys.push(controlName);
				}); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

				elementor.channels.data.trigger('element:before:reset:style', container.model);
				$e.run('document/elements/reset-settings', {
					container: container,
					settings: settingsKeys,
					options: {
						external: true
					}
				}); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

				elementor.channels.data.trigger('element:after:reset:style', container.model);
				container.view.allowRender = true;
				container.render();
			});
		}
	}]);
	return ResetStyle;
}(_history.default);

exports.ResetStyle = ResetStyle;
var _default = ResetStyle;
exports.default = _default;

/***/ }),
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _commands = __webpack_require__(363);

var Helper = /*#__PURE__*/function () {
	function Helper() {
		(0, _classCallCheck2.default)(this, Helper);
	}

	(0, _createClass2.default)(Helper, null, [{
		key: "createSectionColumns",
		value: function createSectionColumns(containers, columns, options) {
			var structure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
			containers.forEach(function (/**Container*/ container) {
				for (var loopIndex = 0; loopIndex < columns; loopIndex++) {
					var model = {
						id: elementor.helpers.getUniqueID(),
						elType: 'column',
						settings: {},
						elements: []
					};
					// Fix: Columns were added in reversed order
					options.at = loopIndex;
					/**
					 * TODO: Try improve performance of using 'document/elements/create` instead of manual create.
					 */
					container.view.addChildModel(model, options);
					/**
					 * Manual history & not using of `$e.run('document/elements/create')`
					 * For performance reasons.
					 */
					$e.internal('document/history/log-sub-item', {
						container: container,
						type: 'sub-add',
						restore: _commands.Create.restore,
						options: options,
						data: {
							containerToRestore: container,
							modelToRestore: model
						}
					});
				}
			});

			if (structure) {
				containers.forEach(function (/* Container */ container) {
					container.view.setStructure(structure, false);
				});
			} else if (columns) {
				containers.forEach(function (/* Container */ container) {
					return container.view.resetLayout();
				});
				// Focus on last container.
				containers[containers.length - 1].model.trigger('request:edit');
			}
		}
	}]);
	return Helper;
}();

exports.default = Helper;

/***/ }),
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _component = _interopRequireDefault(__webpack_require__(671));

var _component2 = _interopRequireDefault(__webpack_require__(703));

var _component3 = _interopRequireDefault(__webpack_require__(725));

var _component4 = _interopRequireDefault(__webpack_require__(732));

var _component5 = _interopRequireDefault(__webpack_require__(733));

var _component6 = _interopRequireDefault(__webpack_require__(739));

var _component7 = _interopRequireDefault(__webpack_require__(748));

elementorCommon.elements.$window.on('elementor:init-components', function () {
	$e.components.register(new _component.default());
	$e.components.register(new _component2.default());
	$e.components.register(new _component3.default());
	$e.components.register(new _component4.default());
	$e.components.register(new _component5.default());
	$e.components.register(new _component6.default());
	$e.components.register(new _component7.default()); // TODO: Remove, BC Since 2.9.0.

	elementor.saver = $e.components.get('document/save');
});
$e.modules.document = _component.default.getModules();

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(62);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(61));

var _backwardsCompatibility = _interopRequireDefault(__webpack_require__(672));

var _history = _interopRequireDefault(__webpack_require__(87));

var _debounce = _interopRequireDefault(__webpack_require__(359));

var hooks = _interopRequireWildcard(__webpack_require__(673));

var Component = /*#__PURE__*/function (_ComponentBase) {
	(0, _inherits2.default)(Component, _ComponentBase);

	var _super = (0, _createSuper2.default)(Component);

	function Component() {
		(0, _classCallCheck2.default)(this, Component);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Component, [{
		key: "getNamespace",
		value: function getNamespace() {
			return 'document';
		}
	}, {
		key: "registerAPI",
		value: function registerAPI() {
			new _backwardsCompatibility.default();
			(0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "registerAPI", this).call(this);
		}
	}, {
		key: "defaultCommands",
		value: function defaultCommands() {
			return {//example: ( args ) => ( new Commands.Example( args ).run() ),
			};
		}
	}, {
		key: "defaultHooks",
		value: function defaultHooks() {
			return this.importHooks(hooks);
		}
	}, {
		key: "defaultUtils",
		value: function defaultUtils() {
			var _this = this;

			return {
				findViewRecursive: function findViewRecursive(parent, key, value) {
					var multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
					var found = [];

					for (var x in parent._views) {
						var view = parent._views[x];

						if (value === view.model.get(key)) {
							found.push(view);

							if (!multiple) {
								return found;
							}
						}

						if (view.children) {
							var views = _this.utils.findViewRecursive(view.children, key, value, multiple);

							if (views.length) {
								found = found.concat(views);

								if (!multiple) {
									return found;
								}
							}
						}
					}

					return found;
				},
				findViewById: function findViewById(id) {
					var elements = _this.utils.findViewRecursive(elementor.getPreviewView().children, 'id', id, false);

					return elements ? elements[0] : false;
				},
				findContainerById: function findContainerById(id) {
					var result = _this.utils.findViewById(id);

					if (result) {
						result = result.getContainer();
					}

					return result;
				}
			};
		}
	}], [{
		key: "getModules",
		value: function getModules() {
			return {
				CommandHistoryBase: _history.default,
				CommandHistoryDebounceBase: _debounce.default
			};
		}
	}]);
	return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var BackwardsCompatibility = /*#__PURE__*/function () {
	function BackwardsCompatibility() {
		(0, _classCallCheck2.default)(this, BackwardsCompatibility);
		elementorCommon.elements.$window.on('elementor:init', this.deprecatedEvents);
		elementor.channels.data.on('template:before:insert', this.startInsertTemplate).on('template:after:insert', this.endItem);
	}

	(0, _createClass2.default)(BackwardsCompatibility, [{
		key: "deprecatedEvents",
		value: function deprecatedEvents() {
			var elementorDataEvents = elementor.channels.data._events,
					deprecatedEvents = ['drag:before:update', 'drag:after:update', 'element:before:add', 'element:after:add', 'element:before:remove', 'element:after:remove', 'element:before:paste:style', 'element:after:paste:style', 'element:before:reset:style', 'element:after:reset:style', 'section:before:drop', 'section:after:drop'];
			deprecatedEvents.forEach(function (event) {
				if (elementorDataEvents[event] && elementorDataEvents[event].length) {
					elementorCommon.helpers.softDeprecated("event: ".concat(event), '2.8.0', '$e.hooks');
				}
			});
		}
	}, {
		key: "startInsertTemplate",
		value: function startInsertTemplate(model) {
			elementorCommon.helpers.softDeprecated('event: template:before:insert', '2.8.0', "$e.run( 'document/import' )");
			elementor.documents.getCurrent().history.startItem({
				type: 'add',
				title: elementor.translate('template'),
				subTitle: model.get('title'),
				elementType: 'template'
			});
		}
	}, {
		key: "endItem",
		value: function endItem() {
			elementor.documents.getCurrent().history.endItem();
		}
	}]);
	return BackwardsCompatibility;
}();

exports.default = BackwardsCompatibility;

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(23);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

var _data = __webpack_require__(674);

_Object$keys(_data).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _data[key];
		}
	});
});

var _ui = __webpack_require__(692);

_Object$keys(_ui).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _ui[key];
		}
	});
});

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(23);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

var _create = __webpack_require__(675);

_Object$keys(_create).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _create[key];
		}
	});
});

var _delete = __webpack_require__(681);

_Object$keys(_delete).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _delete[key];
		}
	});
});

var _move = __webpack_require__(683);

_Object$keys(_move).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _move[key];
		}
	});
});

var _paste = __webpack_require__(685);

_Object$keys(_paste).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _paste[key];
		}
	});
});

var _settings = __webpack_require__(687);

_Object$keys(_settings).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _settings[key];
		}
	});
});

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "InnerSectionColumns", {
	enumerable: true,
	get: function get() {
		return _innerSectionColumns.InnerSectionColumns;
	}
});

_Object$defineProperty(exports, "IsValidChild", {
	enumerable: true,
	get: function get() {
		return _isValidChild.IsValidChild;
	}
});

_Object$defineProperty(exports, "SectionColumns", {
	enumerable: true,
	get: function get() {
		return _sectionColumns.SectionColumns;
	}
});

_Object$defineProperty(exports, "SectionColumnsLimit", {
	enumerable: true,
	get: function get() {
		return _sectionColumnsLimit.SectionColumnsLimit;
	}
});

_Object$defineProperty(exports, "SectionColumnsResetLayout", {
	enumerable: true,
	get: function get() {
		return _sectionColumnsResetLayout.SectionColumnsResetLayout;
	}
});

var _innerSectionColumns = __webpack_require__(676);

var _isValidChild = __webpack_require__(677);

var _sectionColumns = __webpack_require__(678);

var _sectionColumnsLimit = __webpack_require__(679);

var _sectionColumnsResetLayout = __webpack_require__(680);

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.InnerSectionColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(117));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var _helper = _interopRequireDefault(__webpack_require__(597));

var _section = __webpack_require__(192);

var InnerSectionColumns = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(InnerSectionColumns, _After);

	var _super = (0, _createSuper2.default)(InnerSectionColumns);

	function InnerSectionColumns() {
		(0, _classCallCheck2.default)(this, InnerSectionColumns);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(InnerSectionColumns, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/create';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'create-inner-section-columns';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'column';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return args.model.isInner && !args.model.elements;
		}
		/**
		 * @inheritDoc
		 *
		 * @param {{}} args
		 * @param {Container||Container[]} containers
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "apply",
		value: function apply(args, containers) {
			var _args$structure = args.structure,
					structure = _args$structure === void 0 ? '20' : _args$structure,
					_args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options;

			if (!(0, _isArray.default)(containers)) {
				containers = [containers];
			}

			_helper.default.createSectionColumns(containers, _section.DEFAULT_INNER_SECTION_COLUMNS, options, structure);
		}
	}]);
	return InnerSectionColumns;
}(_after.default);

exports.InnerSectionColumns = InnerSectionColumns;
var _default = InnerSectionColumns;
exports.default = _default;

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.IsValidChild = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(295));

var _helper = _interopRequireDefault(__webpack_require__(135));

var IsValidChild = /*#__PURE__*/function (_Dependency) {
	(0, _inherits2.default)(IsValidChild, _Dependency);

	var _super = (0, _createSuper2.default)(IsValidChild);

	function IsValidChild() {
		(0, _classCallCheck2.default)(this, IsValidChild);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(IsValidChild, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/create';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'is-valid-child';
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers,
					_args$model = args.model,
					model = _args$model === void 0 ? {} : _args$model,
					modelToCreate = new Backbone.Model(model);
			return containers.some(function (
			/* Container */
			container) {
				return _helper.default.isValidChild(modelToCreate, container.model);
			});
		}
	}]);
	return IsValidChild;
}(_dependency.default);

exports.IsValidChild = IsValidChild;
var _default = IsValidChild;
exports.default = _default;

/***/ }),
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.SectionColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(117));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var _helper = _interopRequireDefault(__webpack_require__(597));

var _section = __webpack_require__(192);

var SectionColumns = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(SectionColumns, _After);

	var _super = (0, _createSuper2.default)(SectionColumns);

	function SectionColumns() {
		(0, _classCallCheck2.default)(this, SectionColumns);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(SectionColumns, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/create';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'create-section-columns';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'document';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return !args.model.elements;
		}
		/**
		 * @inheritDoc
		 *
		 * @param {{}} args
		 * @param {Container||Container[]} containers
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "apply",
		value: function apply(args, containers) {
			var _args$structure = args.structure,
					structure = _args$structure === void 0 ? false : _args$structure,
					_args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options;

			if (!(0, _isArray.default)(containers)) {
				containers = [containers];
			}

			var _args$columns = args.columns,
					columns = _args$columns === void 0 ? 1 : _args$columns;

			if (args.model.isInner && 1 === columns) {
				columns = _section.DEFAULT_INNER_SECTION_COLUMNS;
			}

			_helper.default.createSectionColumns(containers, columns, options, structure);
		}
	}]);
	return SectionColumns;
}(_after.default);

exports.SectionColumns = SectionColumns;
var _default = SectionColumns;
exports.default = _default;

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.SectionColumnsLimit = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(295));

var SectionColumnsLimit = /*#__PURE__*/function (_Dependency) {
	(0, _inherits2.default)(SectionColumnsLimit, _Dependency);

	var _super = (0, _createSuper2.default)(SectionColumnsLimit);

	function SectionColumnsLimit() {
		(0, _classCallCheck2.default)(this, SectionColumnsLimit);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(SectionColumnsLimit, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/create';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'section-columns-limit';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'section';
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers; // If one of the targets have maximum columns reached break the command.

			return !containers.some(function (
			/**Container*/
			container) {
				return container.view.isCollectionFilled();
			});
		}
	}]);
	return SectionColumnsLimit;
}(_dependency.default);

exports.SectionColumnsLimit = SectionColumnsLimit;
var _default = SectionColumnsLimit;
exports.default = _default;

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.SectionColumnsResetLayout = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(117));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var SectionColumnsResetLayout = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(SectionColumnsResetLayout, _After);

	var _super = (0, _createSuper2.default)(SectionColumnsResetLayout);

	function SectionColumnsResetLayout() {
		(0, _classCallCheck2.default)(this, SectionColumnsResetLayout);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(SectionColumnsResetLayout, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/create';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'section-columns-reset-layout';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'section';
		}
	}, {
		key: "getConditions",
		value: function getConditions() {
			// On `document/elements/move` do not fire the hook!.
			return !$e.commands.isCurrentFirstTrace('document/elements/move');
		}
		/**
		 * @inheritDoc
		 *
		 * @param {{}} args
		 * @param {Container||Container[]} containers
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "apply",
		value: function apply(args, containers) {
			if (!(0, _isArray.default)(containers)) {
				containers = [containers];
			}

			containers.forEach(function (
			/**Container*/
			container) {
				return container.parent.view.resetLayout(false);
			});
		}
	}]);
	return SectionColumnsResetLayout;
}(_after.default);

exports.SectionColumnsResetLayout = SectionColumnsResetLayout;
var _default = SectionColumnsResetLayout;
exports.default = _default;

/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "SectionsColumns", {
	enumerable: true,
	get: function get() {
		return _sectionColumns.SectionsColumns;
	}
});

var _sectionColumns = __webpack_require__(682);

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.SectionsColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(117));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var SectionsColumns = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(SectionsColumns, _After);

	var _super = (0, _createSuper2.default)(SectionsColumns);

	function SectionsColumns() {
		(0, _classCallCheck2.default)(this, SectionsColumns);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(SectionsColumns, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/delete';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'delete-section-columns';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'column';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers; // On `document/elements/move` do not fire the hook!.

			return !$e.commands.isCurrentFirstTrace('document/elements/move') && containers.some(function (container) {
				return (// If one of the targets is column.
					'column' === container.model.get('elType')
				);
			});
		}
		/**
		 * @inheritDoc
		 *
		 * @param {{}} args
		 * @param {Container||Container[]} containers
		 *
		 * @returns {boolean}
		 */

	}, {
		key: "apply",
		value: function apply(args, containers) {
			if (!(0, _isArray.default)(containers)) {
				containers = [containers];
			}

			containers.forEach(function (
			/**Container*/
			container) {
				var parent = container.parent; // If its not column, continue.

				if ('section' !== parent.model.get('elType')) {
					return;
				} // If deleted the last column, should recreate it.


				if (0 === parent.view.collection.length) {
					$e.run('document/elements/create', {
						container: parent,
						model: {
							elType: 'column'
						}
					});
				} else {
					// Else, just reset section layout.
					parent.view.resetLayout();
				}
			});
		}
	}]);
	return SectionsColumns;
}(_after.default);

exports.SectionsColumns = SectionsColumns;
var _default = SectionsColumns;
exports.default = _default;

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "SectionColumnsSetStructure", {
	enumerable: true,
	get: function get() {
		return _sectionColumnsSetStructure.SectionColumnsSetStructure;
	}
});

var _sectionColumnsSetStructure = __webpack_require__(684);

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.SectionColumnsSetStructure = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var SectionColumnsSetStructure = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(SectionColumnsSetStructure, _After);

	var _super = (0, _createSuper2.default)(SectionColumnsSetStructure);

	function SectionColumnsSetStructure() {
		(0, _classCallCheck2.default)(this, SectionColumnsSetStructure);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(SectionColumnsSetStructure, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/move';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'section-columns-set-structure';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'column';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers,
					target = args.target; // Fire the hook only when target is not equals to moved container parent.

			return containers.some(function (
			/* Container */
			container) {
				return container.parent !== target;
			});
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					target = args.target;
			containers.forEach(function (
			/* Container */
			container) {
				return container.parent.view.resetLayout();
			});
			target.view.resetLayout();
			return true;
		}
	}]);
	return SectionColumnsSetStructure;
}(_after.default);

exports.SectionColumnsSetStructure = SectionColumnsSetStructure;
var _default = SectionColumnsSetStructure;
exports.default = _default;

/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "IsPasteEnabled", {
	enumerable: true,
	get: function get() {
		return _isPasteEnabled.IsPasteEnabled;
	}
});

var _isPasteEnabled = __webpack_require__(686);

/***/ }),
/* 686 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.IsPasteEnabled = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(295));

var _helper = _interopRequireDefault(__webpack_require__(135));

var IsPasteEnabled = /*#__PURE__*/function (_Dependency) {
	(0, _inherits2.default)(IsPasteEnabled, _Dependency);

	var _super = (0, _createSuper2.default)(IsPasteEnabled);

	function IsPasteEnabled() {
		(0, _classCallCheck2.default)(this, IsPasteEnabled);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(IsPasteEnabled, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/paste';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'is-paste-enabled';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return !args.rebuild;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return containers.some(function (container) {
				return _helper.default.isPasteEnabled(container);
			});
		}
	}]);
	return IsPasteEnabled;
}(_dependency.default);

exports.IsPasteEnabled = IsPasteEnabled;
var _default = IsPasteEnabled;
exports.default = _default;

/***/ }),
/* 687 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "HandleDynamic", {
	enumerable: true,
	get: function get() {
		return _handleDynamic.HandleDynamic;
	}
});

_Object$defineProperty(exports, "ResizeColumn", {
	enumerable: true,
	get: function get() {
		return _resizeColumn.ResizeColumn;
	}
});

_Object$defineProperty(exports, "ResizeColumnLimit", {
	enumerable: true,
	get: function get() {
		return _resizeColumnLimit.ResizeColumnLimit;
	}
});

_Object$defineProperty(exports, "SetStructure", {
	enumerable: true,
	get: function get() {
		return _setStructure.SetStructure;
	}
});

var _handleDynamic = __webpack_require__(688);

var _resizeColumn = __webpack_require__(689);

var _resizeColumnLimit = __webpack_require__(690);

var _setStructure = __webpack_require__(691);

/***/ }),
/* 688 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.HandleDynamic = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(35));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var HandleDynamic = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(HandleDynamic, _After);

	var _super = (0, _createSuper2.default)(HandleDynamic);

	function HandleDynamic() {
		(0, _classCallCheck2.default)(this, HandleDynamic);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(HandleDynamic, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'handle-dynamic';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'dynamic';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return containers.some(function (
			/**Container*/
			container) {
				return 'dynamic' === container.type;
			});
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (
			/**Container*/
			container) {
				if ('dynamic' === container.type) {
					var tagText = elementor.dynamicTags.tagContainerToTagText(container),
							commandArgs = {
						container: container.parent,
						settings: (0, _defineProperty2.default)({}, container.view.options.controlName, tagText)
					};
					$e.run('document/dynamic/settings', commandArgs);
				}
			});
			return true;
		}
	}]);
	return HandleDynamic;
}(_after.default);

exports.HandleDynamic = HandleDynamic;
var _default = HandleDynamic;
exports.default = _default;

/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ResizeColumn = void 0;

__webpack_require__(17);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var ResizeColumn = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(ResizeColumn, _After);

	var _super = (0, _createSuper2.default)(ResizeColumn);

	function ResizeColumn() {
		(0, _classCallCheck2.default)(this, ResizeColumn);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ResizeColumn, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'resize-column';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'column';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return args.settings._inline_size;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			containers.forEach(function (
			/**Container*/
			container) {
				_this.resizeColumn(container, args.settings._inline_size);
			});
			return true;
		}
	}, {
		key: "resizeColumn",
		value: function resizeColumn(container, newSize) {
			var nextContainer = container.parent.view.getNeighborContainer(container);

			if (!nextContainer) {
				return false;
			}

			var parentView = container.parent.view,
					currentColumnView = container.view;
			var currentSize = null;

			if (undefined === container.oldValues || null === container.oldValues._inline_size) {
				// Mean, that it was not set before ( first time ).
				currentSize = container.settings.get('_column_size');
			} else {
				var totalWidth = parentView.$el.find(' > .elementor-container')[0].getBoundingClientRect().width;
				currentSize = +(container.oldValues._inline_size || currentColumnView.el.getBoundingClientRect().width / totalWidth * 100);
			}

			var nextChildView = nextContainer.view,
					$nextElement = nextChildView.$el,
					nextElementCurrentSize = +nextChildView.model.getSetting('_inline_size') || container.parent.view.getColumnPercentSize($nextElement, $nextElement[0].getBoundingClientRect().width),
					nextElementNewSize = +(currentSize + nextElementCurrentSize - newSize).toFixed(3);
			/**
			 * TODO: Hook prevented ( next command will not call recursive hook ), but we didnt tell the hook to be prevented
			 * consider: '$e.hooks.preventRecursive()'.
			 */

			$e.run('document/elements/settings', {
				containers: [nextContainer],
				settings: {
					_inline_size: nextElementNewSize
				},
				options: {
					callbacks: {
						'resize-column-limit': false
					},
					history: {
						title: elementor.config.elements.column.controls._inline_size.label
					},
					external: true,
					debounce: true
				}
			});
			return true;
		}
	}]);
	return ResizeColumn;
}(_after.default);

exports.ResizeColumn = ResizeColumn;
var _default = ResizeColumn;
exports.default = _default;

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ResizeColumnLimit = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(295));

var _section = __webpack_require__(192);

var ResizeColumnLimit = /*#__PURE__*/function (_Dependency) {
	(0, _inherits2.default)(ResizeColumnLimit, _Dependency);

	var _super = (0, _createSuper2.default)(ResizeColumnLimit);

	function ResizeColumnLimit() {
		(0, _classCallCheck2.default)(this, ResizeColumnLimit);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ResizeColumnLimit, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'resize-column-limit';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'column';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return args.settings._inline_size;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return containers.some(function (
			/**Container*/
			container) {
				var parentView = container.parent.view,
						columnView = container.view,
						currentSize = container.settings.get('_inline_size') || container.settings.get('_column_size'),
						newSize = args.settings._inline_size,
						nextChildView = parentView.getNextColumn(columnView) || parentView.getPreviousColumn(columnView);

				if (!nextChildView) {
					if ($e.devTools) {
						$e.devTools.log.error('There is not any next column');
					}

					return false;
				}

				var $nextElement = nextChildView.$el,
						nextElementCurrentSize = +nextChildView.model.getSetting('_inline_size') || parentView.getColumnPercentSize($nextElement, $nextElement[0].getBoundingClientRect().width),
						nextElementNewSize = +(currentSize + nextElementCurrentSize - newSize).toFixed(3);

				if (nextElementNewSize < _section.DEFAULT_INNER_SECTION_COLUMNS) {
					if ($e.devTools) {
						$e.devTools.log.error('New column width is too large');
					}

					return false;
				}

				if (newSize < _section.DEFAULT_INNER_SECTION_COLUMNS) {
					if ($e.devTools) {
						$e.devTools.log.error('New column width is too small');
					}

					return false;
				}

				return true;
			});
		}
	}]);
	return ResizeColumnLimit;
}(_dependency.default);

exports.ResizeColumnLimit = ResizeColumnLimit;
var _default = ResizeColumnLimit;
exports.default = _default;

/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.SetStructure = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(189));

var SetStructure = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(SetStructure, _After);

	var _super = (0, _createSuper2.default)(SetStructure);

	function SetStructure() {
		(0, _classCallCheck2.default)(this, SetStructure);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(SetStructure, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'set-structure';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'section';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return !!args.settings.structure;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			containers.forEach(function (
			/**Container*/
			container) {
				container.view.adjustColumns();
			});
			return true;
		}
	}]);
	return SetStructure;
}(_after.default);

exports.SetStructure = SetStructure;
var _default = SetStructure;
exports.default = _default;

/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(23);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

var _create = __webpack_require__(693);

_Object$keys(_create).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _create[key];
		}
	});
});

var _delete = __webpack_require__(696);

_Object$keys(_delete).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _delete[key];
		}
	});
});

var _settings = __webpack_require__(699);

_Object$keys(_settings).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _settings[key];
		}
	});
});

/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "ColumnIsPopulated", {
	enumerable: true,
	get: function get() {
		return _columnIsPopulated.ColumnIsPopulated;
	}
});

_Object$defineProperty(exports, "CreateSectionIsFull", {
	enumerable: true,
	get: function get() {
		return _sectionIsFull.CreateSectionIsFull;
	}
});

var _columnIsPopulated = __webpack_require__(694);

var _sectionIsFull = __webpack_require__(695);

/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ColumnIsPopulated = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var ColumnIsPopulated = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(ColumnIsPopulated, _After);

	var _super = (0, _createSuper2.default)(ColumnIsPopulated);

	function ColumnIsPopulated() {
		(0, _classCallCheck2.default)(this, ColumnIsPopulated);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ColumnIsPopulated, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/create';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'column-is-populated';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers; // If the created element, was created at column.

			return containers.some(function (
			/**Container*/
			container) {
				return 'column' === container.model.get('elType');
			});
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (
			/* Container */
			container) {
				if ('column' === container.model.get('elType')) {
					container.view.changeChildContainerClasses();
				}
			});
		}
	}]);
	return ColumnIsPopulated;
}(_after.default);

exports.ColumnIsPopulated = ColumnIsPopulated;
var _default = ColumnIsPopulated;
exports.default = _default;

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.CreateSectionIsFull = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var CreateSectionIsFull = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(CreateSectionIsFull, _After);

	var _super = (0, _createSuper2.default)(CreateSectionIsFull);

	function CreateSectionIsFull() {
		(0, _classCallCheck2.default)(this, CreateSectionIsFull);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(CreateSectionIsFull, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/create';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'create-section-is-full';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return containers.some(function (
			/* Container */
			container) {
				return 'section' === container.model.get('elType');
			});
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (
			/* Container */
			container) {
				if ('section' === container.model.get('elType')) {
					container.view.toggleSectionIsFull();
				}
			});
		}
	}]);
	return CreateSectionIsFull;
}(_after.default);

exports.CreateSectionIsFull = CreateSectionIsFull;
var _default = CreateSectionIsFull;
exports.default = _default;

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "ColumnIsEmpty", {
	enumerable: true,
	get: function get() {
		return _columnIsEmpty.ColumnIsEmpty;
	}
});

_Object$defineProperty(exports, "DeleteSectionIsFull", {
	enumerable: true,
	get: function get() {
		return _sectionIsFull.DeleteSectionIsFull;
	}
});

var _columnIsEmpty = __webpack_require__(697);

var _sectionIsFull = __webpack_require__(698);

/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ColumnIsEmpty = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var ColumnIsEmpty = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(ColumnIsEmpty, _After);

	var _super = (0, _createSuper2.default)(ColumnIsEmpty);

	function ColumnIsEmpty() {
		(0, _classCallCheck2.default)(this, ColumnIsEmpty);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ColumnIsEmpty, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/delete';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'column-is-empty';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers; // If the deleted element, was deleted from column.

			return containers.some(function (
			/**Container*/
			container) {
				return 'column' === container.parent.model.get('elType');
			});
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (
			/* Container */
			container) {
				if ('column' === container.parent.model.get('elType')) {
					container.parent.view.changeChildContainerClasses();
				}
			});
		}
	}]);
	return ColumnIsEmpty;
}(_after.default);

exports.ColumnIsEmpty = ColumnIsEmpty;
var _default = ColumnIsEmpty;
exports.default = _default;

/***/ }),
/* 698 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.DeleteSectionIsFull = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var DeleteSectionIsFull = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(DeleteSectionIsFull, _After);

	var _super = (0, _createSuper2.default)(DeleteSectionIsFull);

	function DeleteSectionIsFull() {
		(0, _classCallCheck2.default)(this, DeleteSectionIsFull);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(DeleteSectionIsFull, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/delete';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'delete-section-is-full';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return containers.some(function (
			/* Container */
			container) {
				return 'column' === container.model.get('elType');
			});
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (
			/* Container */
			container) {
				if ('column' === container.model.get('elType')) {
					container.parent.view.toggleSectionIsFull();
				}
			});
		}
	}]);
	return DeleteSectionIsFull;
}(_after.default);

exports.DeleteSectionIsFull = DeleteSectionIsFull;
var _default = DeleteSectionIsFull;
exports.default = _default;

/***/ }),
/* 699 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "ColumnChangeSize", {
	enumerable: true,
	get: function get() {
		return _columnChangeSize.ColumnChangeSize;
	}
});

_Object$defineProperty(exports, "Draggable", {
	enumerable: true,
	get: function get() {
		return _draggable.Draggable;
	}
});

_Object$defineProperty(exports, "Resizeable", {
	enumerable: true,
	get: function get() {
		return _resizeable.Resizeable;
	}
});

var _columnChangeSize = __webpack_require__(700);

var _draggable = __webpack_require__(701);

var _resizeable = __webpack_require__(702);

/***/ }),
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ColumnChangeSize = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var ColumnChangeSize = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(ColumnChangeSize, _After);

	var _super = (0, _createSuper2.default)(ColumnChangeSize);

	function ColumnChangeSize() {
		(0, _classCallCheck2.default)(this, ColumnChangeSize);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ColumnChangeSize, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'column-change-size';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return undefined !== args.settings._inline_size || undefined !== args.settings._column_size;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			containers.forEach(function (
			/* Container */
			container) {
				container.view.changeSizeUI();
			});
		}
	}]);
	return ColumnChangeSize;
}(_after.default);

exports.ColumnChangeSize = ColumnChangeSize;
var _default = ColumnChangeSize;
exports.default = _default;

/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Draggable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var Draggable = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(Draggable, _After);

	var _super = (0, _createSuper2.default)(Draggable);

	function Draggable() {
		(0, _classCallCheck2.default)(this, Draggable);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Draggable, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'draggable';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return undefined !== args.settings._position;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			containers.forEach(function (
			/* Container */
			container) {
				if (container.view.options.draggable) {
					container.view.options.draggable.toggle();
				}
			});
		}
	}]);
	return Draggable;
}(_after.default);

exports.Draggable = Draggable;
var _default = Draggable;
exports.default = _default;

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Resizeable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var Resizeable = /*#__PURE__*/function (_After) {
	(0, _inherits2.default)(Resizeable, _After);

	var _super = (0, _createSuper2.default)(Resizeable);

	function Resizeable() {
		(0, _classCallCheck2.default)(this, Resizeable);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Resizeable, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'resizeable';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return undefined !== args.settings._position || undefined !== args.settings._element_width;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			containers.forEach(function (
			/* Container */
			container) {
				if (container.view.options.resizeable) {
					container.view.options.resizeable.toggle();
				}
			});
		}
	}]);
	return Resizeable;
}(_after.default);

exports.Resizeable = Resizeable;
var _default = Resizeable;
exports.default = _default;

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(62);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(49));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(35));

var _backwardsCompatibility = _interopRequireDefault(__webpack_require__(704));

var commands = _interopRequireWildcard(__webpack_require__(705));

var commandsInternal = _interopRequireWildcard(__webpack_require__(713));

var hooks = _interopRequireWildcard(__webpack_require__(716));

var Component = /*#__PURE__*/function (_BackwardsCompatibili) {
	(0, _inherits2.default)(Component, _BackwardsCompatibili);

	var _super = (0, _createSuper2.default)(Component);

	function Component() {
		var _this;

		(0, _classCallCheck2.default)(this, Component);

		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_this = _super.call.apply(_super, [this].concat(args));
		(0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "footerSaver", void 0);
		return _this;
	}

	(0, _createClass2.default)(Component, [{
		key: "__construct",
		value: function __construct() {
			var _this2 = this;

			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			(0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "__construct", this).call(this, args);
			/**
			 * Auto save timer handlers.
			 *
			 * @type {Object}
			 */

			this.autoSaveTimers = {};
			/**
			 * Auto save interval.
			 *
			 * @type {number}
			 */

			this.autoSaveInterval = elementor.config.autosave_interval * 1000;
			elementorCommon.elements.$window.on('beforeunload', function () {
				if (_this2.isEditorChanged()) {
					// Returns a message to confirm dialog.
					return elementor.translate('before_unload_alert');
				}
			});
		}
	}, {
		key: "getNamespace",
		value: function getNamespace() {
			return 'document/save';
		}
		/**
		 * TODO: test
		 * @param {Document} document
		 */

	}, {
		key: "startAutoSave",
		value: function startAutoSave(document) {
			var _this3 = this;

			this.stopAutoSave(document);
			this.autoSaveTimers[document.id] = setTimeout(function () {
				$e.run('document/save/auto', {
					document: document
				});
				delete _this3.autoSaveTimers[document.id];
			}, this.autoSaveInterval);
		}
		/**
		 * TODO: test
		 * @param {Document} document
		 */

	}, {
		key: "stopAutoSave",
		value: function stopAutoSave(document) {
			if (this.autoSaveTimers[document.id]) {
				clearTimeout(this.autoSaveTimers[document.id]);
				delete this.autoSaveTimers[document.id];
			}
		}
	}, {
		key: "defaultCommands",
		value: function defaultCommands() {
			return {
				auto: function auto(args) {
					return new commands.Auto(args).run();
				},
				default: function _default(args) {
					return new commands.Default(args).run();
				},
				discard: function discard(args) {
					return new commands.Discard(args).run();
				},
				draft: function draft(args) {
					return new commands.Draft(args).run();
				},
				pending: function pending(args) {
					return new commands.Pending(args).run();
				},
				publish: function publish(args) {
					return new commands.Publish(args).run();
				},
				update: function update(args) {
					return new commands.Update(args).run();
				}
			};
		}
	}, {
		key: "defaultCommandsInternal",
		value: function defaultCommandsInternal() {
			return {
				save: function save(args) {
					return new commandsInternal.Save(args).run();
				},
				'set-is-modified': function setIsModified(args) {
					return new commandsInternal.SetIsModified(args).run();
				}
			};
		}
	}, {
		key: "defaultHooks",
		value: function defaultHooks() {
			return this.importHooks(hooks);
		}
	}, {
		key: "isEditorChanged",
		value: function isEditorChanged() {
			return true === elementor.channels.editor.request('status');
		}
	}]);
	return Component;
}(_backwardsCompatibility.default);

exports.default = Component;

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty2 = __webpack_require__(1);

_Object$defineProperty2(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(61));

var BackwardsCompatibility = /*#__PURE__*/function (_ComponentBase) {
	(0, _inherits2.default)(BackwardsCompatibility, _ComponentBase);

	var _super = (0, _createSuper2.default)(BackwardsCompatibility);

	function BackwardsCompatibility() {
		(0, _classCallCheck2.default)(this, BackwardsCompatibility);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(BackwardsCompatibility, [{
		key: "__construct",
		value: function __construct() {
			var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			(0, _get2.default)((0, _getPrototypeOf2.default)(BackwardsCompatibility.prototype), "__construct", this).call(this, args);
			(0, _defineProperty.default)(this, 'autoSaveTimer', {
				get: function get() {
					elementorCommon.helpers.softDeprecated('elementor.saver.autoSaveTimer', '2.9.0', "$e.components.get( 'editor/documents' ).autoSaveTimers");
					return $e.components.get('editor/documents').autoSaveTimers;
				},
				set: function set(value) {
					elementorCommon.helpers.softDeprecated('elementor.saver.autoSaveTimer', '2.9.0', "$e.components.get( 'editor/documents' ).autoSaveTimers[ documentId ]");
					var documentId = elementor.documents.getCurrent();
					$e.components.get('editor/documents').autoSaveTimers[documentId] = value;
				}
			});
			var onOrig = this.on;

			this.on = function (eventName, callback, context) {
				elementorCommon.helpers.softDeprecated('elementor.saver.on', '2.9.0', '$e.hooks');
				onOrig(eventName, callback, context);
			};

			elementor.on('document:loaded', function () {
				if (elementor.channels.editor._events && elementor.channels.editor._events.saved) {
					elementorCommon.helpers.softDeprecated("elementor.channels.editor.on( 'saved', ... )", '2.9.0', '$e.hooks');
				}
			});
		}
	}, {
		key: "defaultSave",
		value: function defaultSave() {
			elementorCommon.helpers.softDeprecated('defaultSave', '2.9.0', "$e.run( 'document/save/default' )");
			return $e.run('document/save/default');
		}
	}, {
		key: "discard",
		value: function discard() {
			elementorCommon.helpers.softDeprecated('discard', '2.9.0', "$e.run( 'document/save/discard' )");
			return $e.run('document/save/discard');
		}
	}, {
		key: "doAutoSave",
		value: function doAutoSave() {
			elementorCommon.helpers.softDeprecated('doAutoSave', '2.9.0', "$e.run( 'document/save/auto' )");
			return $e.run('document/save/auto');
		}
	}, {
		key: "publish",
		value: function publish(options) {
			elementorCommon.helpers.softDeprecated('publish', '2.9.0', "$e.run( 'document/save/publish' )");
			return $e.run('document/save/auto', {
				options: options
			});
		}
	}, {
		key: "saveAutoSave",
		value: function saveAutoSave(options) {
			elementorCommon.helpers.softDeprecated('saveAutoSave', '2.9.0', "$e.run( 'document/save/auto', { force: true } )");
			options.force = true;
			return $e.run('document/save/auto', options);
		}
	}, {
		key: "saveDraft",
		value: function saveDraft() {
			elementorCommon.helpers.softDeprecated('saveDraft', '2.9.0', "$e.run( 'document/save/draft' )");
			return $e.run('document/save/draft');
		}
	}, {
		key: "savePending",
		value: function savePending() {
			elementorCommon.helpers.softDeprecated('savePending', '2.9.0', "$e.run( 'document/save/pending' )");
			return $e.run('document/save/pending');
		}
	}, {
		key: "update",
		value: function update(options) {
			elementorCommon.helpers.softDeprecated('update', '2.9.0', "$e.run( 'document/save/update' )");
			return $e.run('document/save/update', options);
		}
	}, {
		key: "startTimer",
		value: function startTimer() {
			elementorCommon.helpers.softDeprecated('startTimer', '2.9.0', "$e.components.get( 'document/save' ).startAutoSave");
			throw Error('Deprecated');
		}
	}, {
		key: "saveEditor",
		value: function saveEditor(options) {
			elementorCommon.helpers.softDeprecated('saveEditor', '2.9.0', "$e.internal( 'document/save/save' )");
			$e.internal('document/save/save', options);
		}
	}, {
		key: "setFlagEditorChange",
		value: function setFlagEditorChange(status) {
			elementorCommon.helpers.softDeprecated('setFlagEditorChange', '2.9.0', "$e.internal( 'document/save/set-is-modified' )");
			$e.internal('document/save/set-is-modified', {
				status: status
			});
		}
	}]);
	return BackwardsCompatibility;
}(_componentBase.default);

exports.default = BackwardsCompatibility;

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "Auto", {
	enumerable: true,
	get: function get() {
		return _auto.Auto;
	}
});

_Object$defineProperty(exports, "Default", {
	enumerable: true,
	get: function get() {
		return _default.Default;
	}
});

_Object$defineProperty(exports, "Discard", {
	enumerable: true,
	get: function get() {
		return _discard.Discard;
	}
});

_Object$defineProperty(exports, "Draft", {
	enumerable: true,
	get: function get() {
		return _draft.Draft;
	}
});

_Object$defineProperty(exports, "Pending", {
	enumerable: true,
	get: function get() {
		return _pending.Pending;
	}
});

_Object$defineProperty(exports, "Publish", {
	enumerable: true,
	get: function get() {
		return _publish.Publish;
	}
});

_Object$defineProperty(exports, "Update", {
	enumerable: true,
	get: function get() {
		return _update.Update;
	}
});

var _auto = __webpack_require__(706);

var _default = __webpack_require__(707);

var _discard = __webpack_require__(708);

var _draft = __webpack_require__(709);

var _pending = __webpack_require__(710);

var _publish = __webpack_require__(711);

var _update = __webpack_require__(712);

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Auto = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(291));

var Auto = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Auto, _Base);

	var _super = (0, _createSuper2.default)(Auto);

	function Auto() {
		(0, _classCallCheck2.default)(this, Auto);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Auto, [{
		key: "apply",
		value: function apply(args) {
			var _args$force = args.force,
					force = _args$force === void 0 ? false : _args$force,
					_args$document = args.document,
					document = _args$document === void 0 ? this.document : _args$document;

			if (!force && !document.container.isEditable()) {
				return jQuery.Deferred().reject('Document is not editable');
			}

			if (!document.editor.isChanged) {
				return jQuery.Deferred().resolve('Document is not changed');
			}

			args.status = 'autosave';
			args.document = document;
			return $e.internal('document/save/save', args);
		}
	}]);
	return Auto;
}(_base.default);

exports.Auto = Auto;
var _default = Auto;
exports.default = _default;

/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(291));

var Default = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Default, _Base);

	var _super = (0, _createSuper2.default)(Default);

	function Default() {
		(0, _classCallCheck2.default)(this, Default);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Default, [{
		key: "apply",
		value: function apply() {
			var document = this.document,
					postStatus = document.container.settings.get('post_status');
			var deferred;

			switch (postStatus) {
				case 'publish':
				case 'future':
				case 'private':
					deferred = $e.run('document/save/update', {
						document: document
					});
					break;

				case 'draft':
					if (document.config.user.can_publish) {
						deferred = $e.run('document/save/publish', {
							document: document
						});
					} else {
						deferred = $e.run('document/save/pending', {
							document: document
						});
					}

					break;

				case 'pending': // User cannot change post status

				case undefined:
					// TODO: as a contributor it's undefined instead of 'pending'.
					if (document.config.user.can_publish) {
						deferred = $e.run('document/save/publish', {
							document: document
						});
					} else {
						deferred = $e.run('document/save/update', {
							document: document
						});
					}

			}

			return deferred;
		}
	}]);
	return Default;
}(_base.default);

exports.Default = Default;
var _default = Default;
exports.default = _default;

/***/ }),
/* 708 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Discard = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(291));

var Discard = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Discard, _Base);

	var _super = (0, _createSuper2.default)(Discard);

	function Discard() {
		(0, _classCallCheck2.default)(this, Discard);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Discard, [{
		key: "apply",
		value: function apply(args) {
			var _args$document = args.document,
					document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document; // Start server request before undo, because the undo can take time.

			var deferred = elementorCommon.ajax.addRequest('discard_changes');
			$e.run('document/history/undo-all', {
				document: document
			}); // Discard autosave revision if exist.

			return deferred;
		}
	}]);
	return Discard;
}(_base.default);

exports.Discard = Discard;
var _default = Discard;
exports.default = _default;

/***/ }),
/* 709 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Draft = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(291));

var Draft = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Draft, _Base);

	var _super = (0, _createSuper2.default)(Draft);

	function Draft() {
		(0, _classCallCheck2.default)(this, Draft);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Draft, [{
		key: "apply",
		value: function apply() {
			var document = this.document,
					postStatus = document.container.settings.get('post_status'); // If no changes - don't save but allow un-publish.

			if (!document.editor.isChanged && 'draft' !== postStatus) {
				return jQuery.Deferred().reject('Document is not editable');
			}

			var deferred;

			switch (postStatus) {
				case 'publish':
				case 'private':
					deferred = $e.run('document/save/auto', {
						document: document
					});
					break;

				default:
					// Update and create a revision
					deferred = $e.run('document/save/update', {
						document: document
					});
			}

			return deferred;
		}
	}]);
	return Draft;
}(_base.default);

exports.Draft = Draft;
var _default = Draft;
exports.default = _default;

/***/ }),
/* 710 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.Pending = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(291));

var Pending = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Pending, _Base);

	var _super = (0, _createSuper2.default)(Pending);

	function Pending() {
		(0, _classCallCheck2.default)(this, Pending);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Pending, [{
		key: "apply",
		value: function apply(args) {
			var _args$status = args.status,
					status = _args$status === void 0 ? 'pending' : _args$status,
					_args$document = args.document,
					document = _args$document === void 0 ? this.document : _args$document;
			return $e.internal('document/save/save', {
				status: status,
				document: document
			});
		}
	}]);
	return Pending;
}(_base.default);

exports.Pending = Pending;

/***/ }),
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.Publish = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(291));

var Publish = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Publish, _Base);

	var _super = (0, _createSuper2.default)(Publish);

	function Publish() {
		(0, _classCallCheck2.default)(this, Publish);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Publish, [{
		key: "apply",
		value: function apply(args) {
			var _args$status = args.status,
					status = _args$status === void 0 ? 'publish' : _args$status,
					_args$document = args.document,
					document = _args$document === void 0 ? this.document : _args$document;
			return $e.internal('document/save/save', {
				status: status,
				document: document
			});
		}
	}]);
	return Publish;
}(_base.default);

exports.Publish = Publish;

/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.Update = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(291));

var Update = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(Update, _Base);

	var _super = (0, _createSuper2.default)(Update);

	function Update() {
		(0, _classCallCheck2.default)(this, Update);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Update, [{
		key: "apply",
		value: function apply(args) {
			var _args$document = args.document,
					document = _args$document === void 0 ? this.document : _args$document,
					_args$status = args.status,
					status = _args$status === void 0 ? document.container.settings.get('post_status') : _args$status;
			return $e.internal('document/save/save', {
				status: status,
				document: document
			});
		}
	}]);
	return Update;
}(_base.default);

exports.Update = Update;

/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "Save", {
	enumerable: true,
	get: function get() {
		return _save.Save;
	}
});

_Object$defineProperty(exports, "SetIsModified", {
	enumerable: true,
	get: function get() {
		return _setIsModified.SetIsModified;
	}
});

var _save = __webpack_require__(714);

var _setIsModified = __webpack_require__(715);

/***/ }),
/* 714 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Save = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandInternalBase = _interopRequireDefault(__webpack_require__(211));

var Save = /*#__PURE__*/function (_CommandInternalBase) {
	(0, _inherits2.default)(Save, _CommandInternalBase);

	var _super = (0, _createSuper2.default)(Save);

	function Save() {
		(0, _classCallCheck2.default)(this, Save);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Save, [{
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var _args$status = args.status,
					status = _args$status === void 0 ? 'draft' : _args$status,
					_args$force = args.force,
					force = _args$force === void 0 ? false : _args$force,
					_args$onSuccess = args.onSuccess,
					onSuccess = _args$onSuccess === void 0 ? null : _args$onSuccess,
					_args$document = args.document,
					document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document;

			if (!force && document.editor.isSaving) {
				return jQuery.Deferred().reject('Document already in save progress');
			}

			var container = document.container,
					settings = container.settings.toJSON({
				remove: ['default']
			}),
					oldStatus = container.settings.get('post_status'); // TODO: Remove - Backwards compatibility.

			elementor.saver.trigger('before:save', args).trigger('before:save:' + status, args);
			document.editor.isSaving = true;
			document.editor.isChangedDuringSave = false;
			settings.post_status = status;
			var elements = [];

			if (elementor.config.document.panel.has_elements) {
				elements = container.model.get('elements').toJSON({
					remove: ['default', 'editSettings', 'defaultEditSettings']
				});
			}

			var successArgs = {
				status: status,
				oldStatus: oldStatus,
				elements: elements,
				document: document,
				currentHistoryId: document.history.currentItem.get('id')
			};
			var deferred = elementorCommon.ajax.addRequest('save_builder', {
				data: {
					status: status,
					elements: elements,
					settings: settings
				},
				error: function error(data) {
					return _this.onSaveError(data, status, document);
				}
			}).then(function (data) {
				return _this.onSaveSuccess(data, successArgs, onSuccess);
			}); // TODO: Remove - Backwards compatibility

			elementor.saver.trigger('save', args);
			return deferred;
		}
	}, {
		key: "onSaveSuccess",
		value: function onSaveSuccess(data, args) {
			var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var status = args.status,
					oldStatus = args.oldStatus,
					elements = args.elements,
					document = args.document,
					currentHistoryId = args.currentHistoryId;
			this.onAfterAjax(document);
			document.editor.lastSaveHistoryId = currentHistoryId; // Remove document cache.

			elementor.documents.invalidateCache(document.id);
			var statusChanged = status !== oldStatus,
					result = {
				data: data,
				statusChanged: statusChanged
			}; // Document is switched during the save, do nothing.

			if (document !== elementor.documents.getCurrent()) {
				return result;
			}

			if (!document.editor.isChangedDuringSave) {
				document.editor.isSaved = true;
			} // TODO: Move to hook.


			if ('autosave' !== status) {
				if (statusChanged) {
					$e.run('document/elements/settings', {
						container: elementor.settings.page.getEditedView().getContainer(),
						settings: {
							post_status: status
						},
						options: {
							external: true
						}
					});
				} // Notice: Must be after update page.model.post_status to the new status.


				if (!document.editor.isChangedDuringSave) {
					$e.internal('document/save/set-is-modified', {
						status: false
					});
				}
			}

			if (data.config) {
				// TODO: Move to es6.
				jQuery.extend(true, document.config, data.config.document);
			}

			if (document.config.elements) {
				document.config.elements = elements;
			} // TODO: Remove - Backwards compatibility


			elementor.channels.editor.trigger('saved', data); // TODO: Remove - Backwards compatibility

			elementor.saver.trigger('after:save', data).trigger('after:save:' + status, data); // TODO: Remove - Backwards compatibility

			if (statusChanged) {
				elementor.saver.trigger('page:status:change', status, oldStatus);
			}

			if (_.isFunction(callback)) {
				callback.call(this, result);
			}

			return result;
		}
	}, {
		key: "onSaveError",
		value: function onSaveError(data, status, document) {
			this.onAfterAjax(document); // TODO: Remove - Backwards compatibility

			elementor.saver.trigger('after:saveError', data).trigger('after:saveError:' + status, data);
			var message;

			if (_.isString(data)) {
				message = data;
			} else if (data.statusText) {
				message = elementor.createAjaxErrorMessage(data);

				if (0 === data.readyState) {
					message += ' ' + elementor.translate('saving_disabled');
				}
			} else if (data[0] && data[0].code) {
				message = elementor.translate('server_error') + ' ' + data[0].code;
			}

			elementor.notifications.showToast({
				message: message
			});
		}
	}, {
		key: "onAfterAjax",
		value: function onAfterAjax(document) {
			document.editor.isSaving = false;
		}
	}]);
	return Save;
}(_commandInternalBase.default);

exports.Save = Save;
var _default = Save;
exports.default = _default;

/***/ }),
/* 715 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.SetIsModified = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandInternalBase = _interopRequireDefault(__webpack_require__(211));

var SetIsModified = /*#__PURE__*/function (_CommandInternalBase) {
	(0, _inherits2.default)(SetIsModified, _CommandInternalBase);

	var _super = (0, _createSuper2.default)(SetIsModified);

	function SetIsModified() {
		(0, _classCallCheck2.default)(this, SetIsModified);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(SetIsModified, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireArgumentType('status', 'boolean', args);
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var status = args.status,
					_args$document = args.document,
					document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document; // Save document for hooks.

			args.document = document;
			document.editor.isChanged = status;

			if (status && document.editor.isSaving) {
				document.editor.isChangedDuringSave = true;
			}

			if (status) {
				document.editor.isSaved = false;
			} // TODO: BC.


			elementor.channels.editor.reply('status', status).trigger('status:change', status);

			if (document.editor.isChanged) {
				this.component.startAutoSave(document);
			}
		}
	}]);
	return SetIsModified;
}(_commandInternalBase.default);

exports.SetIsModified = SetIsModified;
var _default = SetIsModified;
exports.default = _default;

/***/ }),
/* 716 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(23);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

var _ui = __webpack_require__(717);

_Object$keys(_ui).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _ui[key];
		}
	});
});

/***/ }),
/* 717 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(23);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

var _save = __webpack_require__(718);

_Object$keys(_save).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _save[key];
		}
	});
});

var _setIsModified = __webpack_require__(722);

_Object$keys(_setIsModified).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _setIsModified[key];
		}
	});
});

var _settings = __webpack_require__(724);

_Object$keys(_settings).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;

	_Object$defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _settings[key];
		}
	});
});

/***/ }),
/* 718 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "FooterSaverAfterSave", {
	enumerable: true,
	get: function get() {
		return _after.FooterSaverAfterSave;
	}
});

_Object$defineProperty(exports, "FooterSaverBeforeSave", {
	enumerable: true,
	get: function get() {
		return _before.FooterSaverBeforeSave;
	}
});

_Object$defineProperty(exports, "FooterSaverCatchSave", {
	enumerable: true,
	get: function get() {
		return _catch.FooterSaverCatchSave;
	}
});

var _after = __webpack_require__(719);

var _before = __webpack_require__(720);

var _catch = __webpack_require__(721);

/***/ }),
/* 719 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.FooterSaverAfterSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var FooterSaverAfterSave = /*#__PURE__*/function (_HookUIAfter) {
	(0, _inherits2.default)(FooterSaverAfterSave, _HookUIAfter);

	var _super = (0, _createSuper2.default)(FooterSaverAfterSave);

	function FooterSaverAfterSave() {
		(0, _classCallCheck2.default)(this, FooterSaverAfterSave);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(FooterSaverAfterSave, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/save/save';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'footer-saver-after-save';
		}
	}, {
		key: "apply",
		value: function apply(args, result) {
			var status = args.status,
					data = result.data,
					_$e$components$get = $e.components.get('document/save'),
					footerSaver = _$e$components$get.footerSaver;

			NProgress.done();
			footerSaver.ui.buttonPublish.removeClass('elementor-button-state');
			footerSaver.ui.lastEditedWrapper.removeClass('elementor-state-active');
			footerSaver.refreshWpPreview();
			footerSaver.setLastEdited(data.config.document.last_edited);
		}
	}]);
	return FooterSaverAfterSave;
}(_after.default);

exports.FooterSaverAfterSave = FooterSaverAfterSave;
var _default = FooterSaverAfterSave;
exports.default = _default;

/***/ }),
/* 720 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.FooterSaverBeforeSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _before = _interopRequireDefault(__webpack_require__(572));

var FooterSaverBeforeSave = /*#__PURE__*/function (_HookUIBefore) {
	(0, _inherits2.default)(FooterSaverBeforeSave, _HookUIBefore);

	var _super = (0, _createSuper2.default)(FooterSaverBeforeSave);

	function FooterSaverBeforeSave() {
		(0, _classCallCheck2.default)(this, FooterSaverBeforeSave);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(FooterSaverBeforeSave, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/save/save';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'footer-saver-before-save';
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var status = args.status,
					_$e$components$get = $e.components.get('document/save'),
					footerSaver = _$e$components$get.footerSaver;

			NProgress.start();

			if ('autosave' === status) {
				footerSaver.ui.lastEditedWrapper.addClass('elementor-state-active');
			} else {
				footerSaver.ui.buttonPublish.addClass('elementor-button-state');
			}
		}
	}]);
	return FooterSaverBeforeSave;
}(_before.default);

exports.FooterSaverBeforeSave = FooterSaverBeforeSave;
var _default = FooterSaverBeforeSave;
exports.default = _default;

/***/ }),
/* 721 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.FooterSaverCatchSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _catch = _interopRequireDefault(__webpack_require__(573));

var FooterSaverCatchSave = /*#__PURE__*/function (_HookUICatch) {
	(0, _inherits2.default)(FooterSaverCatchSave, _HookUICatch);

	var _super = (0, _createSuper2.default)(FooterSaverCatchSave);

	function FooterSaverCatchSave() {
		(0, _classCallCheck2.default)(this, FooterSaverCatchSave);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(FooterSaverCatchSave, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/save/save';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'footer-saver-catch-save';
		}
	}, {
		key: "apply",
		value: function apply() {
			NProgress.done();
			$e.components.get('document/save').footerSaver.ui.buttonPublish.removeClass('elementor-button-state');
		}
	}]);
	return FooterSaverCatchSave;
}(_catch.default);

exports.FooterSaverCatchSave = FooterSaverCatchSave;
var _default = FooterSaverCatchSave;
exports.default = _default;

/***/ }),
/* 722 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "FooterSaverActiveSaveButtons", {
	enumerable: true,
	get: function get() {
		return _after.FooterSaverActiveSaveButtons;
	}
});

var _after = __webpack_require__(723);

/***/ }),
/* 723 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.FooterSaverActiveSaveButtons = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var FooterSaverActiveSaveButtons = /*#__PURE__*/function (_HookUIAfter) {
	(0, _inherits2.default)(FooterSaverActiveSaveButtons, _HookUIAfter);

	var _super = (0, _createSuper2.default)(FooterSaverActiveSaveButtons);

	function FooterSaverActiveSaveButtons() {
		(0, _classCallCheck2.default)(this, FooterSaverActiveSaveButtons);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(FooterSaverActiveSaveButtons, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/save/set-is-modified';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'footer-saver-activate-save-buttons';
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var status = args.status,
					document = args.document;
			$e.components.get('document/save').footerSaver.activateSaveButtons(document, status);
		}
	}]);
	return FooterSaverActiveSaveButtons;
}(_after.default);

exports.FooterSaverActiveSaveButtons = FooterSaverActiveSaveButtons;
var _default = FooterSaverActiveSaveButtons;
exports.default = _default;

/***/ }),
/* 724 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.FooterSeverRefreshMenu = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(217));

var FooterSeverRefreshMenu = /*#__PURE__*/function (_HookUIAfter) {
	(0, _inherits2.default)(FooterSeverRefreshMenu, _HookUIAfter);

	var _super = (0, _createSuper2.default)(FooterSeverRefreshMenu);

	function FooterSeverRefreshMenu() {
		(0, _classCallCheck2.default)(this, FooterSeverRefreshMenu);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(FooterSeverRefreshMenu, [{
		key: "getCommand",
		value: function getCommand() {
			return 'document/elements/settings';
		}
	}, {
		key: "getId",
		value: function getId() {
			return 'footer-saver-refresh-menu';
		}
	}, {
		key: "getContainerType",
		value: function getContainerType() {
			return 'document';
		}
	}, {
		key: "getConditions",
		value: function getConditions(args) {
			return args.settings && 'undefined' !== typeof args.settings.post_status;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _$e$components$get = $e.components.get('document/save'),
					footerSaver = _$e$components$get.footerSaver;

			footerSaver.setMenuItems(args.container.document);
			footerSaver.refreshWpPreview();
		}
	}]);
	return FooterSeverRefreshMenu;
}(_after.default);

exports.FooterSeverRefreshMenu = FooterSeverRefreshMenu;
var _default = FooterSeverRefreshMenu;
exports.default = _default;

/***/ }),
/* 725 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(62);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(61));

var commands = _interopRequireWildcard(__webpack_require__(726));

var Component = /*#__PURE__*/function (_ComponentBase) {
	(0, _inherits2.default)(Component, _ComponentBase);

	var _super = (0, _createSuper2.default)(Component);

	function Component() {
		(0, _classCallCheck2.default)(this, Component);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Component, [{
		key: "getNamespace",
		value: function getNamespace() {
			return 'document/ui';
		}
	}, {
		key: "defaultCommands",
		value: function defaultCommands() {
			return {
				copy: function copy(args) {
					return new commands.Copy(args).run();
				},
				delete: function _delete(args) {
					return new commands.Delete(args).run();
				},
				duplicate: function duplicate(args) {
					return new commands.Duplicate(args).run();
				},
				paste: function paste(args) {
					return new commands.Paste(args).run();
				},
				'paste-style': function pasteStyle(args) {
					return new commands.PasteStyle(args).run();
				}
			};
		}
	}, {
		key: "defaultShortcuts",
		value: function defaultShortcuts() {
			return {
				copy: {
					keys: 'ctrl+c',
					exclude: ['input']
				},
				delete: {
					keys: 'del',
					exclude: ['input']
				},
				duplicate: {
					keys: 'ctrl+d'
				},
				paste: {
					keys: 'ctrl+v',
					exclude: ['input']
				},
				'paste-style': {
					keys: 'ctrl+shift+v',
					exclude: ['input']
				}
			};
		}
	}]);
	return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 726 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "Copy", {
	enumerable: true,
	get: function get() {
		return _copy.Copy;
	}
});

_Object$defineProperty(exports, "Delete", {
	enumerable: true,
	get: function get() {
		return _delete.Delete;
	}
});

_Object$defineProperty(exports, "Duplicate", {
	enumerable: true,
	get: function get() {
		return _duplicate.Duplicate;
	}
});

_Object$defineProperty(exports, "Paste", {
	enumerable: true,
	get: function get() {
		return _paste.Paste;
	}
});

_Object$defineProperty(exports, "PasteStyle", {
	enumerable: true,
	get: function get() {
		return _pasteStyle.PasteStyle;
	}
});

var _copy = __webpack_require__(727);

var _delete = __webpack_require__(728);

var _duplicate = __webpack_require__(729);

var _paste = __webpack_require__(730);

var _pasteStyle = __webpack_require__(731);

/***/ }),
/* 727 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Copy = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var Copy = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(Copy, _CommandBase);

	var _super = (0, _createSuper2.default)(Copy);

	function Copy() {
		(0, _classCallCheck2.default)(this, Copy);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Copy, [{
		key: "apply",
		value: function apply() {
			var selectedElement = elementor.getCurrentElement();

			if (selectedElement) {
				return $e.run('document/elements/copy', {
					container: selectedElement.getContainer()
				});
			}

			return false;
		}
	}]);
	return Copy;
}(_commandBase.default);

exports.Copy = Copy;
var _default = Copy;
exports.default = _default;

/***/ }),
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Delete = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var Delete = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(Delete, _CommandBase);

	var _super = (0, _createSuper2.default)(Delete);

	function Delete() {
		(0, _classCallCheck2.default)(this, Delete);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Delete, [{
		key: "apply",
		value: function apply() {
			var selectedElement = elementor.getCurrentElement();

			if (selectedElement) {
				return $e.run('document/elements/delete', {
					container: selectedElement.getContainer()
				});
			}

			return false;
		}
	}]);
	return Delete;
}(_commandBase.default);

exports.Delete = Delete;
var _default = Delete;
exports.default = _default;

/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Duplicate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var Duplicate = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(Duplicate, _CommandBase);

	var _super = (0, _createSuper2.default)(Duplicate);

	function Duplicate() {
		(0, _classCallCheck2.default)(this, Duplicate);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Duplicate, [{
		key: "apply",
		value: function apply() {
			var selectedElement = elementor.getCurrentElement();

			if (selectedElement) {
				return $e.run('document/elements/duplicate', {
					container: selectedElement.getContainer()
				});
			}

			return false;
		}
	}]);
	return Duplicate;
}(_commandBase.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Paste = void 0;

var _values = _interopRequireDefault(__webpack_require__(115));

__webpack_require__(264);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var _helper = _interopRequireDefault(__webpack_require__(135));

var Paste = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(Paste, _CommandBase);

	var _super = (0, _createSuper2.default)(Paste);

	function Paste() {
		(0, _classCallCheck2.default)(this, Paste);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Paste, [{
		key: "initialize",
		value: function initialize(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			(0, _get2.default)((0, _getPrototypeOf2.default)(Paste.prototype), "initialize", this).call(this, args);
			this.storage = elementorCommon.storage.get('clipboard');
			this.storage = this.storage.map(function (model) {
				return new Backbone.Model(model);
			});

			if (!containers[0]) {
				this.target = elementor.getCurrentElement();
				this.target = this.target ? [this.target.getContainer()] : null;
			} else {
				this.target = containers;
			}
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			if (!this.target) {
				return false;
			}

			var result = [];
			this.target.forEach(function (
			/* Container */
			container) {
				var _args$options = args.options,
						options = _args$options === void 0 ? {} : _args$options,
						pasteOptions = _helper.default.getPasteOptions(_this.storage[0], container);

				if (!pasteOptions.isValidChild) {
					if (pasteOptions.isSameElement) {
						options.at = container.parent.model.get('elements').findIndex(container.model) + 1; // For same element always paste on his parent.

						container = container.parent;
					} else if (pasteOptions.isValidGrandChild) {
						options.rebuild = true;
					}
				}

				if ((0, _values.default)(pasteOptions).some(function (opt) {
					return !!opt;
				})) {
					var commandArgs = {
						container: container
					};

					if (undefined !== options.rebuild) {
						commandArgs.rebuild = options.rebuild;
					}

					if (undefined !== options.at) {
						commandArgs.at = options.at;
					}

					result.push($e.run('document/elements/paste', commandArgs));
				}
			});

			if (0 === result.length) {
				return false;
			} else if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}]);
	return Paste;
}(_commandBase.default);

exports.Paste = Paste;
var _default = Paste;
exports.default = _default;

/***/ }),
/* 731 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.PasteStyle = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(39));

var PasteStyle = /*#__PURE__*/function (_CommandBase) {
	(0, _inherits2.default)(PasteStyle, _CommandBase);

	var _super = (0, _createSuper2.default)(PasteStyle);

	function PasteStyle() {
		(0, _classCallCheck2.default)(this, PasteStyle);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(PasteStyle, [{
		key: "apply",
		value: function apply() {
			var selectedElement = elementor.getCurrentElement();

			if (selectedElement) {
				return $e.run('document/elements/paste-style', {
					container: selectedElement.getContainer()
				});
			}

			return false;
		}
	}]);
	return PasteStyle;
}(_commandBase.default);

exports.PasteStyle = PasteStyle;
var _default = PasteStyle;
exports.default = _default;

/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(62);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(61));

var commands = _interopRequireWildcard(__webpack_require__(363));

var Component = /*#__PURE__*/function (_ComponentBase) {
	(0, _inherits2.default)(Component, _ComponentBase);

	var _super = (0, _createSuper2.default)(Component);

	function Component() {
		(0, _classCallCheck2.default)(this, Component);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Component, [{
		key: "getNamespace",
		value: function getNamespace() {
			return 'document/elements';
		}
	}, {
		key: "defaultCommands",
		value: function defaultCommands() {
			return this.importCommands(commands);
		}
	}]);
	return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 733 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(62);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(61));

var commands = _interopRequireWildcard(__webpack_require__(734));

var Component = /*#__PURE__*/function (_ComponentBase) {
	(0, _inherits2.default)(Component, _ComponentBase);

	var _super = (0, _createSuper2.default)(Component);

	function Component() {
		(0, _classCallCheck2.default)(this, Component);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Component, [{
		key: "getNamespace",
		value: function getNamespace() {
			return 'document/repeater';
		}
	}, {
		key: "defaultCommands",
		value: function defaultCommands() {
			return {
				duplicate: function duplicate(args) {
					return new commands.Duplicate(args).run();
				},
				insert: function insert(args) {
					return new commands.Insert(args).run();
				},
				move: function move(args) {
					return new commands.Move(args).run();
				},
				remove: function remove(args) {
					return new commands.Remove(args).run();
				}
			};
		}
	}]);
	return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "Duplicate", {
	enumerable: true,
	get: function get() {
		return _duplicate.Duplicate;
	}
});

_Object$defineProperty(exports, "Insert", {
	enumerable: true,
	get: function get() {
		return _insert.Insert;
	}
});

_Object$defineProperty(exports, "Move", {
	enumerable: true,
	get: function get() {
		return _move.Move;
	}
});

_Object$defineProperty(exports, "Remove", {
	enumerable: true,
	get: function get() {
		return _remove.Remove;
	}
});

var _duplicate = __webpack_require__(735);

var _insert = __webpack_require__(736);

var _move = __webpack_require__(737);

var _remove = __webpack_require__(738);

/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Duplicate = void 0;

var _assign = _interopRequireDefault(__webpack_require__(177));

__webpack_require__(29);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Duplicate = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Duplicate, _History);

	var _super = (0, _createSuper2.default)(Duplicate);

	function Duplicate() {
		(0, _classCallCheck2.default)(this, Duplicate);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Duplicate, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentType('name', 'string', args);
			this.requireArgumentType('index', 'number', args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'duplicate',
				subTitle: elementor.translate('Item')
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var index = args.index,
					name = args.name,
					_args$options = args.options,
					options = _args$options === void 0 ? {} : _args$options,
					_args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					result = [];
			containers.forEach(function (container) {
				var settingsModel = container.settings,
						collection = settingsModel.get(name),
						model = collection.at(index).toJSON(); // Let the insert handle it, do not use the duplicated id.

				if (model._id) {
					delete model._id;
				}

				result.push($e.run('document/repeater/insert', {
					container: container,
					name: name,
					model: model,
					options: (0, _assign.default)({
						at: index + 1
					}, options)
				}));
			});

			if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}]);
	return Duplicate;
}(_history.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Insert = void 0;

__webpack_require__(29);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Insert = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Insert, _History);

	var _super = (0, _createSuper2.default)(Insert);

	function Insert() {
		(0, _classCallCheck2.default)(this, Insert);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Insert, [{
		key: "initialize",
		value: function initialize(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(Insert.prototype), "initialize", this).call(this, args);

			if (!args.model._id) {
				args.model._id = elementor.helpers.getUniqueID();
			}
		}
	}, {
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentType('model', 'object', args);
			this.requireArgumentConstructor('name', String, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var model = args.model,
					name = args.name,
					_args$options = args.options,
					options = _args$options === void 0 ? {
				at: null
			} : _args$options,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'add',
				subTitle: elementor.translate('Item'),
				data: {
					model: model,
					name: name,
					index: options.at
				},
				restore: this.constructor.restore
			};
		}
	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			return true;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var model = args.model,
					name = args.name,
					_args$options2 = args.options,
					options = _args$options2 === void 0 ? {
				at: null
			} : _args$options2,
					_args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					result = [];
			containers.forEach(function (container) {
				container = container.lookup();
				var collection = container.settings.get(name);

				try {
					result.push(collection.push(model, options));
				} catch (ex) {
					console.warn('Tmp fix for gallery repeater');

					elementor.panel.currentView.content.currentView.children.every(view => {
						return !('background_slideshow_gallery' === view.model.attributes.name && view.render());
					});
				}
				container.render();
			});

			if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}], [{
		key: "restore",
		value: function restore(historyItem, isRedo) {
			var containers = historyItem.get('containers'),
					data = historyItem.get('data');

			if (isRedo) {
				$e.run('document/repeater/insert', {
					containers: containers,
					model: data.model,
					name: data.name,
					options: {
						at: data.index
					}
				});
			} else {
				$e.run('document/repeater/remove', {
					containers: containers,
					name: data.name,
					index: data.index
				});
			}
		}
	}]);
	return Insert;
}(_history.default);

exports.Insert = Insert;
var _default = Insert;
exports.default = _default;

/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Move = void 0;

__webpack_require__(29);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Move = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Move, _History);

	var _super = (0, _createSuper2.default)(Move);

	function Move() {
		(0, _classCallCheck2.default)(this, Move);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Move, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentType('name', 'string', args);
			this.requireArgumentType('sourceIndex', 'number', args);
			this.requireArgumentType('targetIndex', 'number', args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'move',
				subTitle: elementor.translate('Item')
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var sourceIndex = args.sourceIndex,
					targetIndex = args.targetIndex,
					name = args.name,
					_args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					result = [];
			containers.forEach(function (container) {
				var collection = container.settings.get(name),
						model = elementorCommon.helpers.cloneObject(collection.at(sourceIndex));
				$e.run('document/repeater/remove', {
					container: container,
					name: name,
					index: sourceIndex
				});
				result.push($e.run('document/repeater/insert', {
					container: container,
					name: name,
					model: model,
					options: {
						at: targetIndex
					}
				}));
			});

			if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}]);
	return Move;
}(_history.default);

exports.Move = Move;
var _default = Move;
exports.default = _default;

/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Remove = void 0;

__webpack_require__(29);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _history = _interopRequireDefault(__webpack_require__(87));

var Remove = /*#__PURE__*/function (_History) {
	(0, _inherits2.default)(Remove, _History);

	var _super = (0, _createSuper2.default)(Remove);

	function Remove() {
		(0, _classCallCheck2.default)(this, Remove);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Remove, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentType('name', 'string', args);
			this.requireArgument('index', args); // sometimes null.
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			return {
				containers: containers,
				type: 'remove',
				subTitle: elementor.translate('Item')
			};
		}
	}, {
		key: "isDataChanged",
		value: function isDataChanged() {
			return true;
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var _this = this;

			var name = args.name,
					_args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
					index = null === args.index ? -1 : args.index,
					result = [];
			containers.forEach(function (container) {
				var collection = container.settings.get(name),
						model = collection.at(index);

				if (_this.isHistoryActive()) {
					$e.internal('document/history/log-sub-item', {
						container: container,
						data: {
							name: name,
							model: model,
							index: index
						},
						restore: _this.constructor.restore
					});
				} // Remove from container and add to result.


				result.push(container.children.splice(index, 1));
				collection.remove(model);
				container.render();
			});

			if (1 === result.length) {
				return result[0];
			}

			return result;
		}
	}], [{
		key: "restore",
		value: function restore(historyItem, isRedo) {
			var data = historyItem.get('data'),
					container = historyItem.get('container');

			if (isRedo) {
				$e.run('document/repeater/remove', {
					container: container,
					name: data.name,
					index: data.index
				});
			} else {
				$e.run('document/repeater/insert', {
					container: container,
					model: data.model,
					name: data.name,
					options: {
						at: data.index
					}
				});
			}
		}
	}]);
	return Remove;
}(_history.default);

exports.Remove = Remove;
var _default = Remove;
exports.default = _default;

/***/ }),
/* 739 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(62);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(61));

var commandsInternal = _interopRequireWildcard(__webpack_require__(740));

var Component = /*#__PURE__*/function (_ComponentBase) {
	(0, _inherits2.default)(Component, _ComponentBase);

	var _super = (0, _createSuper2.default)(Component);

	function Component() {
		(0, _classCallCheck2.default)(this, Component);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Component, [{
		key: "__construct",
		value: function __construct(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "__construct", this).call(this, args);
			/**
			 * Transactions holder.
			 *
			 * @type {Array}
			 */

			this.transactions = [];
		}
	}, {
		key: "getNamespace",
		value: function getNamespace() {
			return 'document/history';
		}
	}, {
		key: "getCommands",
		value: function getCommands() {
			return {
				do: function _do(args) {
					return elementor.documents.getCurrent().history.doItem(args.index);
				},
				undo: function undo() {
					return elementor.documents.getCurrent().history.navigate();
				},
				'undo-all': function undoAll(args) {
					var itemsLength = args.document.history.getItems().length;

					if (!itemsLength) {
						return;
					}

					args.document.history.doItem(itemsLength - 1);
				},
				redo: function redo() {
					return elementor.documents.getCurrent().history.navigate(true);
				}
			};
		}
	}, {
		key: "getCommandsInternal",
		value: function getCommandsInternal() {
			return this.importCommands(commandsInternal);
		}
	}, {
		key: "normalizeLogTitle",
		value: function normalizeLogTitle(args) {
			var _args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;

			if (!args.title && containers[0]) {
				if (1 === containers.length) {
					args.title = containers[0].label;
				} else {
					args.title = elementor.translate('elements');
				}
			}

			return args;
		}
	}, {
		key: "mergeTransactions",
		value: function mergeTransactions(transactions) {
			var result = {};
			transactions.forEach(function (itemArgs) {
				// If no containers at the current transaction.
				if (!itemArgs.container && !itemArgs.containers) {
					return;
				}

				var _itemArgs$containers = itemArgs.containers,
						containers = _itemArgs$containers === void 0 ? [itemArgs.container] : _itemArgs$containers;

				if (containers) {
					containers.forEach(function (container) {
						if (!itemArgs.data) {
							return;
						} // Replace new changes by current itemArgs.


						if (result[container.id]) {
							result[container.id].data.changes[container.id].new = itemArgs.data.changes[container.id].new;
							return;
						}

						result[container.id] = itemArgs;
					});
				}
			});
			return result;
		}
	}, {
		key: "isTransactionStarted",
		value: function isTransactionStarted() {
			return Boolean(this.transactions.length);
		}
	}]);
	return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "AddTransaction", {
	enumerable: true,
	get: function get() {
		return _addTransaction.AddTransaction;
	}
});

_Object$defineProperty(exports, "ClearTransaction", {
	enumerable: true,
	get: function get() {
		return _clearTransaction.ClearTransaction;
	}
});

_Object$defineProperty(exports, "DeleteLog", {
	enumerable: true,
	get: function get() {
		return _deleteLog.DeleteLog;
	}
});

_Object$defineProperty(exports, "EndLog", {
	enumerable: true,
	get: function get() {
		return _endLog.EndLog;
	}
});

_Object$defineProperty(exports, "EndTransaction", {
	enumerable: true,
	get: function get() {
		return _endTransaction.EndTransaction;
	}
});

_Object$defineProperty(exports, "LogSubItem", {
	enumerable: true,
	get: function get() {
		return _logSubItem.LogSubItem;
	}
});

_Object$defineProperty(exports, "StartLog", {
	enumerable: true,
	get: function get() {
		return _startLog.StartLog;
	}
});

var _addTransaction = __webpack_require__(741);

var _clearTransaction = __webpack_require__(742);

var _deleteLog = __webpack_require__(743);

var _endLog = __webpack_require__(744);

var _endTransaction = __webpack_require__(745);

var _logSubItem = __webpack_require__(746);

var _startLog = __webpack_require__(747);

/***/ }),
/* 741 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.AddTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(292));

var AddTransaction = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(AddTransaction, _Base);

	var _super = (0, _createSuper2.default)(AddTransaction);

	function AddTransaction() {
		(0, _classCallCheck2.default)(this, AddTransaction);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(AddTransaction, [{
		key: "initialize",
		value: function initialize(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(AddTransaction.prototype), "initialize", this).call(this, args);
			/**
			 * Debounce always send 'add-transaction' with title & subTitle, when the transaction
			 * already started, there is no need to save those args they are useless.
			 */

			if (this.component.isTransactionStarted()) {
				delete args.title;
				delete args.subTitle;
			}
		}
	}, {
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer();
			this.requireArgumentType('type', 'string', args);
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var currentId = this.history.getCurrentId();

			if (currentId) {
				// If log already started chain his historyId.
				args.id = currentId;
			}

			args = this.component.normalizeLogTitle(args);
			this.component.transactions.push(args);
		}
	}]);
	return AddTransaction;
}(_base.default);

exports.AddTransaction = AddTransaction;
var _default = AddTransaction;
exports.default = _default;

/***/ }),
/* 742 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.ClearTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(292));

var ClearTransaction = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(ClearTransaction, _Base);

	var _super = (0, _createSuper2.default)(ClearTransaction);

	function ClearTransaction() {
		(0, _classCallCheck2.default)(this, ClearTransaction);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(ClearTransaction, [{
		key: "apply",
		value: function apply() {
			this.component.transactions = [];
		}
	}]);
	return ClearTransaction;
}(_base.default);

exports.ClearTransaction = ClearTransaction;
var _default = ClearTransaction;
exports.default = _default;

/***/ }),
/* 743 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.DeleteLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(292));

var DeleteLog = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(DeleteLog, _Base);

	var _super = (0, _createSuper2.default)(DeleteLog);

	function DeleteLog() {
		(0, _classCallCheck2.default)(this, DeleteLog);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(DeleteLog, [{
		key: "apply",
		value: function apply(args) {
			if (args.id) {
				this.history.deleteItem(args.id);
			}
		}
	}]);
	return DeleteLog;
}(_base.default);

exports.DeleteLog = DeleteLog;
var _default = DeleteLog;
exports.default = _default;

/***/ }),
/* 744 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.EndLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(292));

var EndLog = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(EndLog, _Base);

	var _super = (0, _createSuper2.default)(EndLog);

	function EndLog() {
		(0, _classCallCheck2.default)(this, EndLog);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(EndLog, [{
		key: "apply",
		value: function apply(args) {
			if (args.id) {
				this.history.endItem(args.id);
			}
		}
	}]);
	return EndLog;
}(_base.default);

exports.EndLog = EndLog;
var _default = EndLog;
exports.default = _default;

/***/ }),
/* 745 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.EndTransaction = void 0;

var _values = _interopRequireDefault(__webpack_require__(115));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(292));

var EndTransaction = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(EndTransaction, _Base);

	var _super = (0, _createSuper2.default)(EndTransaction);

	function EndTransaction() {
		(0, _classCallCheck2.default)(this, EndTransaction);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(EndTransaction, [{
		key: "apply",
		value: function apply() {
			if (!this.component.isTransactionStarted()) {
				return;
			}

			var firstItem = this.component.transactions[0],
					type = firstItem.type,
					transactions = this.component.mergeTransactions(this.component.transactions);
			var _firstItem$title = firstItem.title,
					title = _firstItem$title === void 0 ? '' : _firstItem$title,
					_firstItem$subTitle = firstItem.subTitle,
					subTitle = _firstItem$subTitle === void 0 ? '' : _firstItem$subTitle; // 'elements' title for multiple containers.

			if (transactions.length > 1) {
				title = elementor.translate('elements');
				subTitle = '';
			}

			var history = {
				title: title,
				subTitle: subTitle,
				type: type
			}; // If firstItem have id already it means that log already started for that transaction.

			if (firstItem.id) {
				history.id = firstItem.id;
			}

			var historyId = $e.internal('document/history/start-log', history);
			(0, _values.default)(transactions).forEach(function (item) {
				var itemArgs = item; // If log already started chain his historyId.

				if (firstItem.id) {
					itemArgs.id = firstItem.id;
				}

				$e.internal('document/history/log-sub-item', itemArgs);
			});
			$e.internal('document/history/end-log', {
				id: historyId
			}); // Clear transactions before leave.

			$e.internal('document/history/clear-transaction');
		}
	}]);
	return EndTransaction;
}(_base.default);

exports.EndTransaction = EndTransaction;
var _default = EndTransaction;
exports.default = _default;

/***/ }),
/* 746 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.LogSubItem = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(292));

var LogSubItem = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(LogSubItem, _Base);

	var _super = (0, _createSuper2.default)(LogSubItem);

	function LogSubItem() {
		(0, _classCallCheck2.default)(this, LogSubItem);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(LogSubItem, [{
		key: "apply",
		value: function apply(args) {
			if (!this.history.getActive()) {
				return;
			}

			var id = args.id || this.history.getCurrentId();
			args = this.component.normalizeLogTitle(args);
			var items = this.history.getItems(),
					item = items.findWhere({
				id: id
			});

			if (!item) {
				throw new Error('History item not found.');
			}
			/**
			 * Sometimes `args.id` passed to `LogSubItem`, to add sub item for specific id.
			 * this `id` should not be passed as sub-item.
			 */


			if (args.id) {
				delete args.id;
			}

			item.get('items').unshift(args);
		}
	}]);
	return LogSubItem;
}(_base.default);

exports.LogSubItem = LogSubItem;
var _default = LogSubItem;
exports.default = _default;

/***/ }),
/* 747 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.StartLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(22));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(14));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(292));

var StartLog = /*#__PURE__*/function (_Base) {
	(0, _inherits2.default)(StartLog, _Base);

	var _super = (0, _createSuper2.default)(StartLog);

	function StartLog() {
		(0, _classCallCheck2.default)(this, StartLog);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(StartLog, [{
		key: "initialize",
		value: function initialize(args) {
			(0, _get2.default)((0, _getPrototypeOf2.default)(StartLog.prototype), "initialize", this).call(this, args);

			if (this.history.isItemStarted() || args.id) {
				this.isSubItem = true;
				return;
			}

			this.args = this.component.normalizeLogTitle(args);
		}
	}, {
		key: "validateArgs",
		value: function validateArgs(args) {
			if (!this.isSubItem) {
				this.requireArgumentType('type', 'string', args);
				this.requireArgumentType('title', 'string', args);
			}
		}
	}, {
		key: "apply",
		value: function apply(args) {
			if (this.isSubItem) {
				$e.internal('document/history/log-sub-item', args);
				return null;
			}

			return this.history.startItem(args);
		}
	}]);
	return StartLog;
}(_base.default);

exports.StartLog = StartLog;
var _default = StartLog;
exports.default = _default;

/***/ }),
/* 748 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(62);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(61));

var commands = _interopRequireWildcard(__webpack_require__(749));

var Component = /*#__PURE__*/function (_ComponentBase) {
	(0, _inherits2.default)(Component, _ComponentBase);

	var _super = (0, _createSuper2.default)(Component);

	function Component() {
		(0, _classCallCheck2.default)(this, Component);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Component, [{
		key: "getNamespace",
		value: function getNamespace() {
			return 'document/dynamic';
		}
	}, {
		key: "defaultCommands",
		value: function defaultCommands() {
			return {
				disable: function disable(args) {
					return new commands.Disable(args).run();
				},
				enable: function enable(args) {
					return new commands.Enable(args).run();
				},
				settings: function settings(args) {
					return new commands.Settings(args).run();
				}
			};
		}
	}]);
	return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 749 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

_Object$defineProperty(exports, "Disable", {
	enumerable: true,
	get: function get() {
		return _disable.Disable;
	}
});

_Object$defineProperty(exports, "Enable", {
	enumerable: true,
	get: function get() {
		return _enable.Enable;
	}
});

_Object$defineProperty(exports, "Settings", {
	enumerable: true,
	get: function get() {
		return _settings.Settings;
	}
});

var _disable = __webpack_require__(750);

var _enable = __webpack_require__(751);

var _settings = __webpack_require__(752);

/***/ }),
/* 750 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Disable = void 0;

var _keys = _interopRequireDefault(__webpack_require__(23));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _disableEnable = _interopRequireDefault(__webpack_require__(364));

var Disable = /*#__PURE__*/function (_DisableEnable) {
	(0, _inherits2.default)(Disable, _DisableEnable);

	var _super = (0, _createSuper2.default)(Disable);

	function Disable() {
		(0, _classCallCheck2.default)(this, Disable);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Disable, [{
		key: "apply",
		value: function apply(args) {
			var settings = args.settings,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			containers.forEach(function (container) {
				container = container.lookup();
				(0, _keys.default)(settings).forEach(function (setting) {
					container.dynamic.unset(setting);
				});
				container.settings.set('__dynamic__', container.dynamic.toJSON());
				container.render();
			});
		}
	}]);
	return Disable;
}(_disableEnable.default);

exports.Disable = Disable;
var _default = Disable;
exports.default = _default;

/***/ }),
/* 751 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Enable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _disableEnable = _interopRequireDefault(__webpack_require__(364));

var Enable = /*#__PURE__*/function (_DisableEnable) {
	(0, _inherits2.default)(Enable, _DisableEnable);

	var _super = (0, _createSuper2.default)(Enable);

	function Enable() {
		(0, _classCallCheck2.default)(this, Enable);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Enable, [{
		key: "apply",
		value: function apply(args) {
			var settings = args.settings,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers;
			containers.forEach(function (container) {
				container = container.lookup();
				container.dynamic.set(settings);
				container.settings.set('__dynamic__', container.dynamic.toJSON());
				container.render();
			});
		}
	}]);
	return Enable;
}(_disableEnable.default);

exports.Enable = Enable;
var _default = Enable;
exports.default = _default;

/***/ }),
/* 752 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
	value: true
});

exports.default = exports.Settings = void 0;

var _keys = _interopRequireDefault(__webpack_require__(23));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _debounce = _interopRequireDefault(__webpack_require__(359));

var _settings = _interopRequireDefault(__webpack_require__(296));

/**
 * The difference between 'document/elements/settings` and `document/dynamic/settings` is:
 * that `document/elements/settings` apply settings to `container.settings` and `document/dynamic/settings` affect
 * `container.settings.__dynamic__`, also clearing the dynamic if `args.settings` is empty.
 */
var Settings = /*#__PURE__*/function (_Debounce) {
	(0, _inherits2.default)(Settings, _Debounce);

	var _super = (0, _createSuper2.default)(Settings);

	function Settings() {
		(0, _classCallCheck2.default)(this, Settings);
		return _super.apply(this, arguments);
	}

	(0, _createClass2.default)(Settings, [{
		key: "validateArgs",
		value: function validateArgs(args) {
			this.requireContainer(args);
			this.requireArgumentConstructor('settings', Object, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory(args) {
			var settings = args.settings,
					_args$containers = args.containers,
					containers = _args$containers === void 0 ? [args.container] : _args$containers,
					changes = {};
			containers.forEach(function (container) {
				var id = container.id;

				if (!changes[id]) {
					changes[id] = {};
				}

				changes[id] = {
					old: container.dynamic.toJSON(),
					new: settings
				};
			});

			var subTitle = _settings.default.getSubTitle(args);

			return {
				containers: containers,
				subTitle: subTitle,
				data: {
					changes: changes
				},
				type: 'change',
				restore: this.constructor.restore
			};
		}
	}, {
		key: "apply",
		value: function apply(args) {
			var settings = args.settings,
					_args$containers2 = args.containers,
					containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
			containers.forEach(function (container) {
				container = container.lookup();

				if (!(0, _keys.default)(settings).length) {
					container.dynamic.clear();
				} else {
					container.dynamic.set(settings);
				}

				container.settings.set('__dynamic__', container.dynamic.toJSON());
				container.render();
			});
		}
	}], [{
		key: "restore",
		value: function restore(historyItem, isRedo) {
			var data = historyItem.get('data');
			historyItem.get('containers').forEach(function (container) {
				var changes = data.changes[container.id];
				$e.run('document/dynamic/settings', {
					container: container,
					settings: isRedo ? changes.new : changes.old
				});
				container.panel.refresh();
			});
		}
	}]);
	return Settings;
}(_debounce.default);

exports.Settings = Settings;
var _default = Settings;
exports.default = _default;

/***/ })
/******/ ]);
