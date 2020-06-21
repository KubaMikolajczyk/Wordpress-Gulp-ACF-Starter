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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sliders */ "./src/js/components/sliders.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_sliders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_waves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/waves */ "./src/js/components/waves.js");
/* harmony import */ var _components_waves__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_waves__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    var aside = $('.aside-nav');
    var hamburger = $('.mobile-menu-link');
    var close = $('.close-nav i');
    var overlay = $('.page-overlay');
    hamburger.on('click', function (e) {
      e.preventDefault();
      aside.addClass('aside-open');
      overlay.addClass('overlay-visible');
    });
    close.on('click', function () {
      aside.removeClass('aside-open');
      overlay.removeClass('overlay-visible');
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/js/components/sliders.js":
/*!**************************************!*\
  !*** ./src/js/components/sliders.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    $('.rooms_main__slider').slick({
      centerMode: true,
      centerPadding: '80px',
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      prevArrow: '.room_main__prev',
      nextArrow: '.room_main__next',
      responsive: [{
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          prevArrow: '.room_main__prev',
          nextArrow: '.room_main__next'
        }
      }, {
        breakpoint: 991,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: true,
          prevArrow: '.room_main__prev',
          nextArrow: '.room_main__next'
        }
      }, {
        breakpoint: 767,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0px',
          arrows: true,
          prevArrow: '.room_main__prev',
          nextArrow: '.room_main__next'
        }
      } // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/js/components/waves.js":
/*!************************************!*\
  !*** ./src/js/components/waves.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */
;

(function (window, factory) {
  'use strict'; // AMD. Register as an anonymous module.  Wrap in function so we have access
  // to root via `this`.

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      window.Waves = factory.call(window);
      return window.Waves;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  else {}
})((typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' ? global : this, function () {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);
  var toString = Object.prototype.toString;
  var isTouchAvailable = 'ontouchstart' in window; // Find exact position of element

  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function isObject(value) {
    var type = _typeof(value);

    return type === 'function' || type === 'object' && !!value;
  }

  function isDOMNode(obj) {
    return isObject(obj) && obj.nodeType > 0;
  }

  function getWavesElements(nodes) {
    var stringRepr = toString.call(nodes);

    if (stringRepr === '[object String]') {
      return $$(nodes);
    } else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
      return nodes;
    } else if (isDOMNode(nodes)) {
      return [nodes];
    }

    return [];
  }

  function offset(elem) {
    var docElem,
        win,
        box = {
      top: 0,
      left: 0
    },
        doc = elem && elem.ownerDocument;
    docElem = doc.documentElement;

    if (_typeof(elem.getBoundingClientRect) !== ( true ? "undefined" : undefined)) {
      box = elem.getBoundingClientRect();
    }

    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(styleObj) {
    var style = '';

    for (var prop in styleObj) {
      if (styleObj.hasOwnProperty(prop)) {
        style += prop + ':' + styleObj[prop] + ';';
      }
    }

    return style;
  }

  var Effect = {
    // Effect duration
    duration: 750,
    // Effect delay (check for scroll before showing effect)
    delay: 200,
    show: function show(e, element, velocity) {
      // Disable right click
      if (e.button === 2) {
        return false;
      }

      element = element || this; // Create ripple

      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple waves-rippling';
      element.appendChild(ripple); // Get click coordinate and element width

      var pos = offset(element);
      var relativeY = 0;
      var relativeX = 0; // Support for touch devices

      if ('touches' in e && e.touches.length) {
        relativeY = e.touches[0].pageY - pos.top;
        relativeX = e.touches[0].pageX - pos.left;
      } //Normal case
      else {
          relativeY = e.pageY - pos.top;
          relativeX = e.pageX - pos.left;
        } // Support for synthetic events


      relativeX = relativeX >= 0 ? relativeX : 0;
      relativeY = relativeY >= 0 ? relativeY : 0;
      var scale = 'scale(' + element.clientWidth / 100 * 3 + ')';
      var translate = 'translate(0,0)';

      if (velocity) {
        translate = 'translate(' + velocity.x + 'px, ' + velocity.y + 'px)';
      } // Attach data to element


      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-translate', translate); // Set ripple position

      var rippleStyle = {
        top: relativeY + 'px',
        left: relativeX + 'px'
      };
      ripple.classList.add('waves-notransition');
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.classList.remove('waves-notransition'); // Scale the ripple

      rippleStyle['-webkit-transform'] = scale + ' ' + translate;
      rippleStyle['-moz-transform'] = scale + ' ' + translate;
      rippleStyle['-ms-transform'] = scale + ' ' + translate;
      rippleStyle['-o-transform'] = scale + ' ' + translate;
      rippleStyle.transform = scale + ' ' + translate;
      rippleStyle.opacity = '1';
      var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
      rippleStyle['-webkit-transition-duration'] = duration + 'ms';
      rippleStyle['-moz-transition-duration'] = duration + 'ms';
      rippleStyle['-o-transition-duration'] = duration + 'ms';
      rippleStyle['transition-duration'] = duration + 'ms';
      ripple.setAttribute('style', convertStyle(rippleStyle));
    },
    hide: function hide(e, element) {
      element = element || this;
      var ripples = element.getElementsByClassName('waves-rippling');

      for (var i = 0, len = ripples.length; i < len; i++) {
        removeRipple(e, element, ripples[i]);
      }

      if (isTouchAvailable) {
        element.removeEventListener('touchend', Effect.hide);
        element.removeEventListener('touchcancel', Effect.hide);
      }

      element.removeEventListener('mouseup', Effect.hide);
      element.removeEventListener('mouseleave', Effect.hide);
    }
  };
  /**
   * Collection of wrapper for HTML element that only have single tag
   * like <input> and <img>
   */

  var TagWrapper = {
    // Wrap <input> tag so it can perform the effect
    input: function input(element) {
      var parent = element.parentNode; // If input already have parent just pass through

      if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
        return;
      } // Put element class and style to the specified parent


      var wrapper = document.createElement('i');
      wrapper.className = element.className + ' waves-input-wrapper';
      element.className = 'waves-button-input'; // Put element as child

      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element); // Apply element color and background color to wrapper

      var elementStyle = window.getComputedStyle(element, null);
      var color = elementStyle.color;
      var backgroundColor = elementStyle.backgroundColor;
      wrapper.setAttribute('style', 'color:' + color + ';background:' + backgroundColor);
      element.setAttribute('style', 'background-color:rgba(0,0,0,0);');
    },
    // Wrap <img> tag so it can perform the effect
    img: function img(element) {
      var parent = element.parentNode; // If input already have parent just pass through

      if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
        return;
      } // Put element as child


      var wrapper = document.createElement('i');
      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element);
    }
  };
  /**
   * Hide the effect and remove the ripple. Must be
   * a separate function to pass the JSLint...
   */

  function removeRipple(e, el, ripple) {
    // Check if the ripple still exist
    if (!ripple) {
      return;
    }

    ripple.classList.remove('waves-rippling');
    var relativeX = ripple.getAttribute('data-x');
    var relativeY = ripple.getAttribute('data-y');
    var scale = ripple.getAttribute('data-scale');
    var translate = ripple.getAttribute('data-translate'); // Get delay beetween mousedown and mouse leave

    var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
    var delay = 350 - diff;

    if (delay < 0) {
      delay = 0;
    }

    if (e.type === 'mousemove') {
      delay = 150;
    } // Fade out ripple after delay


    var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
    setTimeout(function () {
      var style = {
        top: relativeY + 'px',
        left: relativeX + 'px',
        opacity: '0',
        // Duration
        '-webkit-transition-duration': duration + 'ms',
        '-moz-transition-duration': duration + 'ms',
        '-o-transition-duration': duration + 'ms',
        'transition-duration': duration + 'ms',
        '-webkit-transform': scale + ' ' + translate,
        '-moz-transform': scale + ' ' + translate,
        '-ms-transform': scale + ' ' + translate,
        '-o-transform': scale + ' ' + translate,
        'transform': scale + ' ' + translate
      };
      ripple.setAttribute('style', convertStyle(style));
      setTimeout(function () {
        try {
          el.removeChild(ripple);
        } catch (e) {
          return false;
        }
      }, duration);
    }, delay);
  }
  /**
   * Disable mousedown event for 500ms during and after touch
   */


  var TouchHandler = {
    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,
    allowEvent: function allowEvent(e) {
      var allow = true;

      if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
        allow = false;
      }

      return allow;
    },
    registerEvent: function registerEvent(e) {
      var eType = e.type;

      if (eType === 'touchstart') {
        TouchHandler.touches += 1; // push
      } else if (/^(touchend|touchcancel)$/.test(eType)) {
        setTimeout(function () {
          if (TouchHandler.touches) {
            TouchHandler.touches -= 1; // pop after 500ms
          }
        }, 500);
      }
    }
  };
  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */

  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentElement) {
      if (!(target instanceof SVGElement) && target.classList.contains('waves-effect')) {
        element = target;
        break;
      }

      target = target.parentElement;
    }

    return element;
  }
  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */


  function showEffect(e) {
    // Disable effect if element has "disabled" property on it
    // In some cases, the event is not triggered by the current element
    // if (e.target.getAttribute('disabled') !== null) {
    //     return;
    // }
    var element = getWavesEffectElement(e);

    if (element !== null) {
      // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
      if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
        return;
      }

      TouchHandler.registerEvent(e);

      if (e.type === 'touchstart' && Effect.delay) {
        var hidden = false;
        var timer = setTimeout(function () {
          timer = null;
          Effect.show(e, element);
        }, Effect.delay);

        var hideEffect = function hideEffect(hideEvent) {
          // if touch hasn't moved, and effect not yet started: start effect now
          if (timer) {
            clearTimeout(timer);
            timer = null;
            Effect.show(e, element);
          }

          if (!hidden) {
            hidden = true;
            Effect.hide(hideEvent, element);
          }

          removeListeners();
        };

        var touchMove = function touchMove(moveEvent) {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }

          hideEffect(moveEvent);
          removeListeners();
        };

        element.addEventListener('touchmove', touchMove, false);
        element.addEventListener('touchend', hideEffect, false);
        element.addEventListener('touchcancel', hideEffect, false);

        var removeListeners = function removeListeners() {
          element.removeEventListener('touchmove', touchMove);
          element.removeEventListener('touchend', hideEffect);
          element.removeEventListener('touchcancel', hideEffect);
        };
      } else {
        Effect.show(e, element);

        if (isTouchAvailable) {
          element.addEventListener('touchend', Effect.hide, false);
          element.addEventListener('touchcancel', Effect.hide, false);
        }

        element.addEventListener('mouseup', Effect.hide, false);
        element.addEventListener('mouseleave', Effect.hide, false);
      }
    }
  }

  Waves.init = function (options) {
    var body = document.body;
    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    if ('delay' in options) {
      Effect.delay = options.delay;
    }

    if (isTouchAvailable) {
      body.addEventListener('touchstart', showEffect, false);
      body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
      body.addEventListener('touchend', TouchHandler.registerEvent, false);
    }

    body.addEventListener('mousedown', showEffect, false);
  };
  /**
   * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
   * waves classes to a set of elements. Set drag to true if the ripple mouseover
   * or skimming effect should be applied to the elements.
   */


  Waves.attach = function (elements, classes) {
    elements = getWavesElements(elements);

    if (toString.call(classes) === '[object Array]') {
      classes = classes.join(' ');
    }

    classes = classes ? ' ' + classes : '';
    var element, tagName;

    for (var i = 0, len = elements.length; i < len; i++) {
      element = elements[i];
      tagName = element.tagName.toLowerCase();

      if (['input', 'img'].indexOf(tagName) !== -1) {
        TagWrapper[tagName](element);
        element = element.parentElement;
      }

      if (element.className.indexOf('waves-effect') === -1) {
        element.className += ' waves-effect' + classes;
      }
    }
  };
  /**
   * Cause a ripple to appear in an element via code.
   */


  Waves.ripple = function (elements, options) {
    elements = getWavesElements(elements);
    var elementsLen = elements.length;
    options = options || {};
    options.wait = options.wait || 0;
    options.position = options.position || null; // default = centre of element

    if (elementsLen) {
      var element,
          pos,
          off,
          centre = {},
          i = 0;
      var mousedown = {
        type: 'mousedown',
        button: 1
      };

      var hideRipple = function hideRipple(mouseup, element) {
        return function () {
          Effect.hide(mouseup, element);
        };
      };

      for (; i < elementsLen; i++) {
        element = elements[i];
        pos = options.position || {
          x: element.clientWidth / 2,
          y: element.clientHeight / 2
        };
        off = offset(element);
        centre.x = off.left + pos.x;
        centre.y = off.top + pos.y;
        mousedown.pageX = centre.x;
        mousedown.pageY = centre.y;
        Effect.show(mousedown, element);

        if (options.wait >= 0 && options.wait !== null) {
          var mouseup = {
            type: 'mouseup',
            button: 1
          };
          setTimeout(hideRipple(mouseup, element), options.wait);
        }
      }
    }
  };
  /**
   * Remove all ripples from an element.
   */


  Waves.calm = function (elements) {
    elements = getWavesElements(elements);
    var mouseup = {
      type: 'mouseup',
      button: 1
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      Effect.hide(mouseup, elements[i]);
    }
  };
  /**
   * Deprecated API fallback
   */


  Waves.displayEffect = function (options) {
    console.error('Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect');
    Waves.init(options);
  };

  return Waves;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Xampp\htdocs\kubamikolajczyk\wp-content\themes\theme_starter\src\js\bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2xpZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy93YXZlcy5qcyJdLCJuYW1lcyI6WyJnIiwiRnVuY3Rpb24iLCJlIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiYXNpZGUiLCJoYW1idXJnZXIiLCJjbG9zZSIsIm92ZXJsYXkiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImpRdWVyeSIsInNsaWNrIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImluZmluaXRlIiwiYXJyb3dzIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImZhY3RvcnkiLCJkZWZpbmUiLCJXYXZlcyIsImNhbGwiLCJnbG9iYWwiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiaW5kIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpc1RvdWNoQXZhaWxhYmxlIiwiaXNXaW5kb3ciLCJvYmoiLCJnZXRXaW5kb3ciLCJlbGVtIiwibm9kZVR5cGUiLCJkZWZhdWx0VmlldyIsImlzT2JqZWN0IiwidmFsdWUiLCJ0eXBlIiwiaXNET01Ob2RlIiwiZ2V0V2F2ZXNFbGVtZW50cyIsIm5vZGVzIiwic3RyaW5nUmVwciIsInRlc3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm9mZnNldCIsImRvY0VsZW0iLCJ3aW4iLCJib3giLCJ0b3AiLCJsZWZ0IiwiZG9jIiwib3duZXJEb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0IiwiY29udmVydFN0eWxlIiwic3R5bGVPYmoiLCJzdHlsZSIsInByb3AiLCJFZmZlY3QiLCJkdXJhdGlvbiIsImRlbGF5Iiwic2hvdyIsImVsZW1lbnQiLCJ2ZWxvY2l0eSIsImJ1dHRvbiIsInJpcHBsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInBvcyIsInJlbGF0aXZlWSIsInJlbGF0aXZlWCIsInRvdWNoZXMiLCJsZW5ndGgiLCJwYWdlWSIsInBhZ2VYIiwic2NhbGUiLCJjbGllbnRXaWR0aCIsInRyYW5zbGF0ZSIsIngiLCJ5Iiwic2V0QXR0cmlidXRlIiwiRGF0ZSIsIm5vdyIsInJpcHBsZVN0eWxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsImhpZGUiLCJyaXBwbGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW4iLCJyZW1vdmVSaXBwbGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiVGFnV3JhcHBlciIsImlucHV0IiwicGFyZW50IiwicGFyZW50Tm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImNvbnRhaW5zIiwid3JhcHBlciIsInJlcGxhY2VDaGlsZCIsImVsZW1lbnRTdHlsZSIsImdldENvbXB1dGVkU3R5bGUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImltZyIsImVsIiwiZ2V0QXR0cmlidXRlIiwiZGlmZiIsIk51bWJlciIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsIlRvdWNoSGFuZGxlciIsImFsbG93RXZlbnQiLCJhbGxvdyIsInJlZ2lzdGVyRXZlbnQiLCJlVHlwZSIsImdldFdhdmVzRWZmZWN0RWxlbWVudCIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwiU1ZHRWxlbWVudCIsInNob3dFZmZlY3QiLCJkaXNhYmxlZCIsImhpZGRlbiIsInRpbWVyIiwiaGlkZUVmZmVjdCIsImhpZGVFdmVudCIsImNsZWFyVGltZW91dCIsInJlbW92ZUxpc3RlbmVycyIsInRvdWNoTW92ZSIsIm1vdmVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0Iiwib3B0aW9ucyIsImJvZHkiLCJhdHRhY2giLCJlbGVtZW50cyIsImNsYXNzZXMiLCJqb2luIiwiaW5kZXhPZiIsImVsZW1lbnRzTGVuIiwid2FpdCIsInBvc2l0aW9uIiwib2ZmIiwiY2VudHJlIiwibW91c2Vkb3duIiwiaGlkZVJpcHBsZSIsIm1vdXNldXAiLCJjbGllbnRIZWlnaHQiLCJjYWxtIiwiZGlzcGxheUVmZmVjdCIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElB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QUFDQSxRQUFJVyxPQUFPLEdBQUc7QUFDVnhILFVBQUksRUFBRSxTQURJO0FBRVYrQixZQUFNLEVBQUU7QUFGRSxLQUFkOztBQUtBLFNBQUssSUFBSTZCLENBQUMsR0FBRyxDQUFSLEVBQVdDLEdBQUcsR0FBR2dELFFBQVEsQ0FBQ3JFLE1BQS9CLEVBQXVDb0IsQ0FBQyxHQUFHQyxHQUEzQyxFQUFnREQsQ0FBQyxFQUFqRCxFQUFxRDtBQUNqRG5DLFlBQU0sQ0FBQ2dDLElBQVAsQ0FBWStELE9BQVosRUFBcUJYLFFBQVEsQ0FBQ2pELENBQUQsQ0FBN0I7QUFDSDtBQUNKLEdBVkQ7QUFZQTs7Ozs7QUFHQTlFLE9BQUssQ0FBQzZJLGFBQU4sR0FBc0IsVUFBU2pCLE9BQVQsRUFBa0I7QUFDcENrQixXQUFPLENBQUNDLEtBQVIsQ0FBYyxxSUFBZDtBQUNBL0ksU0FBSyxDQUFDMkgsSUFBTixDQUFXQyxPQUFYO0FBQ0gsR0FIRDs7QUFLQSxTQUFPNUgsS0FBUDtBQUNILENBOWtCQSxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcnMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy93YXZlcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21lbnUnO1xyXG5cclxuIiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFzaWRlID0gJCgnLmFzaWRlLW5hdicpO1xyXG4gICAgICAgIGNvbnN0IGhhbWJ1cmdlciA9ICQoJy5tb2JpbGUtbWVudS1saW5rJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSAkKCcuY2xvc2UtbmF2IGknKTtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gJCgnLnBhZ2Utb3ZlcmxheScpO1xyXG5cclxuICAgICAgICBoYW1idXJnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXNpZGUuYWRkQ2xhc3MoJ2FzaWRlLW9wZW4nKTtcclxuICAgICAgICAgICAgb3ZlcmxheS5hZGRDbGFzcygnb3ZlcmxheS12aXNpYmxlJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhc2lkZS5yZW1vdmVDbGFzcygnYXNpZGUtb3BlbicpO1xyXG4gICAgICAgICAgICBvdmVybGF5LnJlbW92ZUNsYXNzKCdvdmVybGF5LXZpc2libGUnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCBqUXVlcnkgKTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLnJvb21zX21haW5fX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzgwcHgnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOnRydWUsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5yb29tX21haW5fX3ByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucm9vbV9tYWluX19uZXh0JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5yb29tX21haW5fX3ByZXYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICcucm9vbV9tYWluX19uZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiAnLnJvb21fbWFpbl9fcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJy5yb29tX21haW5fX25leHQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICcucm9vbV9tYWluX19wcmV2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiAnLnJvb21fbWFpbl9fbmV4dCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XHJcbiAgICAgICAgICAgICAgICAvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcclxuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3RcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxufSkoIGpRdWVyeSApOyIsIi8qIVxuICogV2F2ZXMgdjAuNy42XG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMTggQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbjsoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLiAgV3JhcCBpbiBmdW5jdGlvbiBzbyB3ZSBoYXZlIGFjY2Vzc1xuICAgIC8vIHRvIHJvb3QgdmlhIGB0aGlzYC5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aW5kb3cuV2F2ZXMgPSBmYWN0b3J5LmNhbGwod2luZG93KTtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuV2F2ZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dCBvbmx5IENvbW1vbkpTLWxpa2VcbiAgICAvLyBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLCBsaWtlIE5vZGUuXG4gICAgZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeS5jYWxsKHdpbmRvdyk7XG4gICAgfVxuXG4gICAgLy8gQnJvd3NlciBnbG9iYWxzLlxuICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cuV2F2ZXMgPSBmYWN0b3J5LmNhbGwod2luZG93KTtcbiAgICB9XG59KSh0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyA/IGdsb2JhbCA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBXYXZlcyAgICAgICAgICAgID0gV2F2ZXMgfHwge307XG4gICAgdmFyICQkICAgICAgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuICAgIHZhciB0b1N0cmluZyAgICAgICAgID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICB2YXIgaXNUb3VjaEF2YWlsYWJsZSA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcblxuXG4gICAgLy8gRmluZCBleGFjdCBwb3NpdGlvbiBvZiBlbGVtZW50XG4gICAgZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtKSB7XG4gICAgICAgIHJldHVybiBpc1dpbmRvdyhlbGVtKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNET01Ob2RlKG9iaikge1xuICAgICAgICByZXR1cm4gaXNPYmplY3Qob2JqKSAmJiBvYmoubm9kZVR5cGUgPiAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFdhdmVzRWxlbWVudHMobm9kZXMpIHtcbiAgICAgICAgdmFyIHN0cmluZ1JlcHIgPSB0b1N0cmluZy5jYWxsKG5vZGVzKTtcblxuICAgICAgICBpZiAoc3RyaW5nUmVwciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgICAgIHJldHVybiAkJChub2Rlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3Qobm9kZXMpICYmIC9eXFxbb2JqZWN0IChBcnJheXxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdHxPYmplY3QpXFxdJC8udGVzdChzdHJpbmdSZXByKSAmJiBub2Rlcy5oYXNPd25Qcm9wZXJ0eSgnbGVuZ3RoJykpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgfSBlbHNlIGlmIChpc0RPTU5vZGUobm9kZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gW25vZGVzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSkge1xuICAgICAgICB2YXIgZG9jRWxlbSwgd2luLFxuICAgICAgICAgICAgYm94ID0geyB0b3A6IDAsIGxlZnQ6IDAgfSxcbiAgICAgICAgICAgIGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG4gICAgICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgd2luID0gZ2V0V2luZG93KGRvYyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICAgICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydFN0eWxlKHN0eWxlT2JqKSB7XG4gICAgICAgIHZhciBzdHlsZSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGVPYmopIHtcbiAgICAgICAgICAgIGlmIChzdHlsZU9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IChwcm9wICsgJzonICsgc3R5bGVPYmpbcHJvcF0gKyAnOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHZhciBFZmZlY3QgPSB7XG5cbiAgICAgICAgLy8gRWZmZWN0IGR1cmF0aW9uXG4gICAgICAgIGR1cmF0aW9uOiA3NTAsXG5cbiAgICAgICAgLy8gRWZmZWN0IGRlbGF5IChjaGVjayBmb3Igc2Nyb2xsIGJlZm9yZSBzaG93aW5nIGVmZmVjdClcbiAgICAgICAgZGVsYXk6IDIwMCxcblxuICAgICAgICBzaG93OiBmdW5jdGlvbihlLCBlbGVtZW50LCB2ZWxvY2l0eSkge1xuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIHJpZ2h0IGNsaWNrXG4gICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSByaXBwbGVcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSAnd2F2ZXMtcmlwcGxlIHdhdmVzLXJpcHBsaW5nJztcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocmlwcGxlKTtcblxuICAgICAgICAgICAgLy8gR2V0IGNsaWNrIGNvb3JkaW5hdGUgYW5kIGVsZW1lbnQgd2lkdGhcbiAgICAgICAgICAgIHZhciBwb3MgICAgICAgPSBvZmZzZXQoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVZID0gMDtcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVggPSAwO1xuICAgICAgICAgICAgLy8gU3VwcG9ydCBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgICAgICAgaWYoJ3RvdWNoZXMnIGluIGUgJiYgZS50b3VjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlWSAgID0gKGUudG91Y2hlc1swXS5wYWdlWSAtIHBvcy50b3ApO1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlWCAgID0gKGUudG91Y2hlc1swXS5wYWdlWCAtIHBvcy5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vTm9ybWFsIGNhc2VcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlWSAgID0gKGUucGFnZVkgLSBwb3MudG9wKTtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZVggICA9IChlLnBhZ2VYIC0gcG9zLmxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3VwcG9ydCBmb3Igc3ludGhldGljIGV2ZW50c1xuICAgICAgICAgICAgcmVsYXRpdmVYID0gcmVsYXRpdmVYID49IDAgPyByZWxhdGl2ZVggOiAwO1xuICAgICAgICAgICAgcmVsYXRpdmVZID0gcmVsYXRpdmVZID49IDAgPyByZWxhdGl2ZVkgOiAwO1xuXG4gICAgICAgICAgICB2YXIgc2NhbGUgICAgID0gJ3NjYWxlKCcgKyAoKGVsZW1lbnQuY2xpZW50V2lkdGggLyAxMDApICogMykgKyAnKSc7XG4gICAgICAgICAgICB2YXIgdHJhbnNsYXRlID0gJ3RyYW5zbGF0ZSgwLDApJztcblxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlID0gJ3RyYW5zbGF0ZSgnICsgKHZlbG9jaXR5LngpICsgJ3B4LCAnICsgKHZlbG9jaXR5LnkpICsgJ3B4KSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCBkYXRhIHRvIGVsZW1lbnRcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaG9sZCcsIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgcmVsYXRpdmVYKTtcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHJlbGF0aXZlWSk7XG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJywgc2NhbGUpO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCB0cmFuc2xhdGUpO1xuXG4gICAgICAgICAgICAvLyBTZXQgcmlwcGxlIHBvc2l0aW9uXG4gICAgICAgICAgICB2YXIgcmlwcGxlU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiByZWxhdGl2ZVkgKyAncHgnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHJlbGF0aXZlWCArICdweCdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCd3YXZlcy1ub3RyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LnJlbW92ZSgnd2F2ZXMtbm90cmFuc2l0aW9uJyk7XG5cbiAgICAgICAgICAgIC8vIFNjYWxlIHRoZSByaXBwbGVcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gc2NhbGUgKyAnICcgKyB0cmFuc2xhdGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2Zvcm0nXSA9IHNjYWxlICsgJyAnICsgdHJhbnNsYXRlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9IHNjYWxlICsgJyAnICsgdHJhbnNsYXRlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zZm9ybSddID0gc2NhbGUgKyAnICcgKyB0cmFuc2xhdGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZS50cmFuc2Zvcm0gPSBzY2FsZSArICcgJyArIHRyYW5zbGF0ZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IGUudHlwZSA9PT0gJ21vdXNlbW92ZScgPyAyNTAwIDogRWZmZWN0LmR1cmF0aW9uO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbiddID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbiddICAgID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nXSAgICAgID0gZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSAgICAgICAgID0gZHVyYXRpb24gKyAnbXMnO1xuXG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKGUsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciByaXBwbGVzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXZlcy1yaXBwbGluZycpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcmlwcGxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVJpcHBsZShlLCBlbGVtZW50LCByaXBwbGVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzVG91Y2hBdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgRWZmZWN0LmhpZGUpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBFZmZlY3QuaGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIEVmZmVjdC5oaWRlKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIEVmZmVjdC5oaWRlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHdyYXBwZXIgZm9yIEhUTUwgZWxlbWVudCB0aGF0IG9ubHkgaGF2ZSBzaW5nbGUgdGFnXG4gICAgICogbGlrZSA8aW5wdXQ+IGFuZCA8aW1nPlxuICAgICAqL1xuICAgIHZhciBUYWdXcmFwcGVyID0ge1xuXG4gICAgICAgIC8vIFdyYXAgPGlucHV0PiB0YWcgc28gaXQgY2FuIHBlcmZvcm0gdGhlIGVmZmVjdFxuICAgICAgICBpbnB1dDogZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAvLyBJZiBpbnB1dCBhbHJlYWR5IGhhdmUgcGFyZW50IGp1c3QgcGFzcyB0aHJvdWdoXG4gICAgICAgICAgICBpZiAocGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2knICYmIHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dhdmVzLWVmZmVjdCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQdXQgZWxlbWVudCBjbGFzcyBhbmQgc3R5bGUgdG8gdGhlIHNwZWNpZmllZCBwYXJlbnRcbiAgICAgICAgICAgIHZhciB3cmFwcGVyICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZSArICcgd2F2ZXMtaW5wdXQtd3JhcHBlcic7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICd3YXZlcy1idXR0b24taW5wdXQnO1xuXG4gICAgICAgICAgICAvLyBQdXQgZWxlbWVudCBhcyBjaGlsZFxuICAgICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBlbGVtZW50KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGVsZW1lbnQgY29sb3IgYW5kIGJhY2tncm91bmQgY29sb3IgdG8gd3JhcHBlclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRTdHlsZSAgICA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgICAgICAgICAgdmFyIGNvbG9yICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS5jb2xvcjtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBlbGVtZW50U3R5bGUuYmFja2dyb3VuZENvbG9yO1xuXG4gICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnY29sb3I6JyArIGNvbG9yICsgJztiYWNrZ3JvdW5kOicgKyBiYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTsnKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFdyYXAgPGltZz4gdGFnIHNvIGl0IGNhbiBwZXJmb3JtIHRoZSBlZmZlY3RcbiAgICAgICAgaW1nOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIC8vIElmIGlucHV0IGFscmVhZHkgaGF2ZSBwYXJlbnQganVzdCBwYXNzIHRocm91Z2hcbiAgICAgICAgICAgIGlmIChwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaScgJiYgcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnd2F2ZXMtZWZmZWN0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGFzIGNoaWxkXG4gICAgICAgICAgICB2YXIgd3JhcHBlciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKHdyYXBwZXIsIGVsZW1lbnQpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIGVmZmVjdCBhbmQgcmVtb3ZlIHRoZSByaXBwbGUuIE11c3QgYmVcbiAgICAgKiBhIHNlcGFyYXRlIGZ1bmN0aW9uIHRvIHBhc3MgdGhlIEpTTGludC4uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZVJpcHBsZShlLCBlbCwgcmlwcGxlKSB7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJpcHBsZSBzdGlsbCBleGlzdFxuICAgICAgICBpZiAoIXJpcHBsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3dhdmVzLXJpcHBsaW5nJyk7XG5cbiAgICAgICAgdmFyIHJlbGF0aXZlWCA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xuICAgICAgICB2YXIgcmVsYXRpdmVZID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XG4gICAgICAgIHZhciBzY2FsZSAgICAgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJyk7XG4gICAgICAgIHZhciB0cmFuc2xhdGUgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuXG4gICAgICAgIC8vIEdldCBkZWxheSBiZWV0d2VlbiBtb3VzZWRvd24gYW5kIG1vdXNlIGxlYXZlXG4gICAgICAgIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIE51bWJlcihyaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnKSk7XG4gICAgICAgIHZhciBkZWxheSA9IDM1MCAtIGRpZmY7XG5cbiAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudHlwZSA9PT0gJ21vdXNlbW92ZScpIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMTUwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmFkZSBvdXQgcmlwcGxlIGFmdGVyIGRlbGF5XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGUudHlwZSA9PT0gJ21vdXNlbW92ZScgPyAyNTAwIDogRWZmZWN0LmR1cmF0aW9uO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHJlbGF0aXZlWSArICdweCcsXG4gICAgICAgICAgICAgICAgbGVmdDogcmVsYXRpdmVYICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMCcsXG5cbiAgICAgICAgICAgICAgICAvLyBEdXJhdGlvblxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nOiBkdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbic6IGR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNpdGlvbi1kdXJhdGlvbic6IGR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IGR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBzY2FsZSArICcgJyArIHRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBzY2FsZSArICcgJyArIHRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHNjYWxlICsgJyAnICsgdHJhbnNsYXRlLFxuICAgICAgICAgICAgICAgICctby10cmFuc2Zvcm0nOiBzY2FsZSArICcgJyArIHRyYW5zbGF0ZSxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogc2NhbGUgKyAnICcgKyB0cmFuc2xhdGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHN0eWxlKSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG5cbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBtb3VzZWRvd24gZXZlbnQgZm9yIDUwMG1zIGR1cmluZyBhbmQgYWZ0ZXIgdG91Y2hcbiAgICAgKi9cbiAgICB2YXIgVG91Y2hIYW5kbGVyID0ge1xuXG4gICAgICAgIC8qIHVzZXMgYW4gaW50ZWdlciByYXRoZXIgdGhhbiBib29sIHNvIHRoZXJlJ3Mgbm8gaXNzdWVzIHdpdGhcbiAgICAgICAgICogbmVlZGluZyB0byBjbGVhciB0aW1lb3V0cyBpZiBhbm90aGVyIHRvdWNoIGV2ZW50IG9jY3VycmVkXG4gICAgICAgICAqIHdpdGhpbiB0aGUgNTAwbXMuIENhbm5vdCBtb3VzZXVwIGJldHdlZW4gdG91Y2hzdGFydCBhbmRcbiAgICAgICAgICogdG91Y2hlbmQsIG5vciBpbiB0aGUgNTAwbXMgYWZ0ZXIgdG91Y2hlbmQuICovXG4gICAgICAgIHRvdWNoZXM6IDAsXG5cbiAgICAgICAgYWxsb3dFdmVudDogZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICB2YXIgYWxsb3cgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoL14obW91c2Vkb3dufG1vdXNlbW92ZSkkLy50ZXN0KGUudHlwZSkgJiYgVG91Y2hIYW5kbGVyLnRvdWNoZXMpIHtcbiAgICAgICAgICAgICAgICBhbGxvdyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWxsb3c7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lzdGVyRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlVHlwZSA9IGUudHlwZTtcblxuICAgICAgICAgICAgaWYgKGVUeXBlID09PSAndG91Y2hzdGFydCcpIHtcblxuICAgICAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzICs9IDE7IC8vIHB1c2hcblxuICAgICAgICAgICAgfSBlbHNlIGlmICgvXih0b3VjaGVuZHx0b3VjaGNhbmNlbCkkLy50ZXN0KGVUeXBlKSkge1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRvdWNoSGFuZGxlci50b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3VjaEhhbmRsZXIudG91Y2hlcyAtPSAxOyAvLyBwb3AgYWZ0ZXIgNTAwbXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIERlbGVnYXRlZCBjbGljayBoYW5kbGVyIGZvciAud2F2ZXMtZWZmZWN0IGVsZW1lbnQuXG4gICAgICogcmV0dXJucyBudWxsIHdoZW4gLndhdmVzLWVmZmVjdCBlbGVtZW50IG5vdCBpbiBcImNsaWNrIHRyZWVcIlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFdhdmVzRWZmZWN0RWxlbWVudChlKSB7XG5cbiAgICAgICAgaWYgKFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKHRhcmdldC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoICghKHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpKSAmJiB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3YXZlcy1lZmZlY3QnKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1YmJsZSB0aGUgY2xpY2sgYW5kIHNob3cgZWZmZWN0IGlmIC53YXZlcy1lZmZlY3QgZWxlbSB3YXMgZm91bmRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG93RWZmZWN0KGUpIHtcblxuICAgICAgICAvLyBEaXNhYmxlIGVmZmVjdCBpZiBlbGVtZW50IGhhcyBcImRpc2FibGVkXCIgcHJvcGVydHkgb24gaXRcbiAgICAgICAgLy8gSW4gc29tZSBjYXNlcywgdGhlIGV2ZW50IGlzIG5vdCB0cmlnZ2VyZWQgYnkgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICAvLyBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cblxuICAgICAgICB2YXIgZWxlbWVudCA9IGdldFdhdmVzRWZmZWN0RWxlbWVudChlKTtcblxuICAgICAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyBNYWtlIGl0IHN1cmUgdGhlIGVsZW1lbnQgaGFzIGVpdGhlciBkaXNhYmxlZCBwcm9wZXJ0eSwgZGlzYWJsZWQgYXR0cmlidXRlIG9yICdkaXNhYmxlZCcgY2xhc3NcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRpc2FibGVkIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBUb3VjaEhhbmRsZXIucmVnaXN0ZXJFdmVudChlKTtcblxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnICYmIEVmZmVjdC5kZWxheSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgRWZmZWN0LnNob3coZSwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSwgRWZmZWN0LmRlbGF5KTtcblxuICAgICAgICAgICAgICAgIHZhciBoaWRlRWZmZWN0ID0gZnVuY3Rpb24oaGlkZUV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdG91Y2ggaGFzbid0IG1vdmVkLCBhbmQgZWZmZWN0IG5vdCB5ZXQgc3RhcnRlZDogc3RhcnQgZWZmZWN0IG5vd1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3Quc2hvdyhlLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEVmZmVjdC5oaWRlKGhpZGVFdmVudCwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoTW92ZSA9IGZ1bmN0aW9uKG1vdmVFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGlkZUVmZmVjdChtb3ZlRXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNoTW92ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoaWRlRWZmZWN0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIGhpZGVFZmZlY3QsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGlkZUVmZmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBoaWRlRWZmZWN0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIEVmZmVjdC5zaG93KGUsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVG91Y2hBdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIFdhdmVzLmluaXQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoJ2R1cmF0aW9uJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBFZmZlY3QuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdkZWxheScgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgRWZmZWN0LmRlbGF5ID0gb3B0aW9ucy5kZWxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RvdWNoQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgICAgICAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgVG91Y2hIYW5kbGVyLnJlZ2lzdGVyRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBUb3VjaEhhbmRsZXIucmVnaXN0ZXJFdmVudCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIFdhdmVzIHRvIGR5bmFtaWNhbGx5IGxvYWRlZCBpbnB1dHMsIG9yIGFkZCAud2F2ZXMtZWZmZWN0IGFuZCBvdGhlclxuICAgICAqIHdhdmVzIGNsYXNzZXMgdG8gYSBzZXQgb2YgZWxlbWVudHMuIFNldCBkcmFnIHRvIHRydWUgaWYgdGhlIHJpcHBsZSBtb3VzZW92ZXJcbiAgICAgKiBvciBza2ltbWluZyBlZmZlY3Qgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIFdhdmVzLmF0dGFjaCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjbGFzc2VzKSB7XG5cbiAgICAgICAgZWxlbWVudHMgPSBnZXRXYXZlc0VsZW1lbnRzKGVsZW1lbnRzKTtcblxuICAgICAgICBpZiAodG9TdHJpbmcuY2FsbChjbGFzc2VzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMgPyAnICcgKyBjbGFzc2VzIDogJyc7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQsIHRhZ05hbWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKFsnaW5wdXQnLCAnaW1nJ10uaW5kZXhPZih0YWdOYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBUYWdXcmFwcGVyW3RhZ05hbWVdKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCd3YXZlcy1lZmZlY3QnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnIHdhdmVzLWVmZmVjdCcgKyBjbGFzc2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogQ2F1c2UgYSByaXBwbGUgdG8gYXBwZWFyIGluIGFuIGVsZW1lbnQgdmlhIGNvZGUuXG4gICAgICovXG4gICAgV2F2ZXMucmlwcGxlID0gZnVuY3Rpb24oZWxlbWVudHMsIG9wdGlvbnMpIHtcbiAgICAgICAgZWxlbWVudHMgPSBnZXRXYXZlc0VsZW1lbnRzKGVsZW1lbnRzKTtcbiAgICAgICAgdmFyIGVsZW1lbnRzTGVuID0gZWxlbWVudHMubGVuZ3RoO1xuXG4gICAgICAgIG9wdGlvbnMgICAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBvcHRpb25zLndhaXQgICAgID0gb3B0aW9ucy53YWl0IHx8IDA7XG4gICAgICAgIG9wdGlvbnMucG9zaXRpb24gPSBvcHRpb25zLnBvc2l0aW9uIHx8IG51bGw7IC8vIGRlZmF1bHQgPSBjZW50cmUgb2YgZWxlbWVudFxuXG5cbiAgICAgICAgaWYgKGVsZW1lbnRzTGVuKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCwgcG9zLCBvZmYsIGNlbnRyZSA9IHt9LCBpID0gMDtcbiAgICAgICAgICAgIHZhciBtb3VzZWRvd24gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ21vdXNlZG93bicsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiAxXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGhpZGVSaXBwbGUgPSBmdW5jdGlvbihtb3VzZXVwLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBFZmZlY3QuaGlkZShtb3VzZXVwLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBlbGVtZW50c0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIHBvcyA9IG9wdGlvbnMucG9zaXRpb24gfHwge1xuICAgICAgICAgICAgICAgICAgICB4OiBlbGVtZW50LmNsaWVudFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgeTogZWxlbWVudC5jbGllbnRIZWlnaHQgLyAyXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG9mZiAgICAgID0gb2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNlbnRyZS54ID0gb2ZmLmxlZnQgKyBwb3MueDtcbiAgICAgICAgICAgICAgICBjZW50cmUueSA9IG9mZi50b3AgKyBwb3MueTtcblxuICAgICAgICAgICAgICAgIG1vdXNlZG93bi5wYWdlWCA9IGNlbnRyZS54O1xuICAgICAgICAgICAgICAgIG1vdXNlZG93bi5wYWdlWSA9IGNlbnRyZS55O1xuXG4gICAgICAgICAgICAgICAgRWZmZWN0LnNob3cobW91c2Vkb3duLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLndhaXQgPj0gMCAmJiBvcHRpb25zLndhaXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1vdXNldXAgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2V1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b246IDFcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVSaXBwbGUobW91c2V1cCwgZWxlbWVudCksIG9wdGlvbnMud2FpdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgcmlwcGxlcyBmcm9tIGFuIGVsZW1lbnQuXG4gICAgICovXG4gICAgV2F2ZXMuY2FsbSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZ2V0V2F2ZXNFbGVtZW50cyhlbGVtZW50cyk7XG4gICAgICAgIHZhciBtb3VzZXVwID0ge1xuICAgICAgICAgICAgdHlwZTogJ21vdXNldXAnLFxuICAgICAgICAgICAgYnV0dG9uOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBFZmZlY3QuaGlkZShtb3VzZXVwLCBlbGVtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVwcmVjYXRlZCBBUEkgZmFsbGJhY2tcbiAgICAgKi9cbiAgICBXYXZlcy5kaXNwbGF5RWZmZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdXYXZlcy5kaXNwbGF5RWZmZWN0KCkgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9uLiBQbGVhc2UgdXNlIFdhdmVzLmluaXQoKSB0byBpbml0aWFsaXplIFdhdmVzIGVmZmVjdCcpO1xuICAgICAgICBXYXZlcy5pbml0KG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gV2F2ZXM7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=