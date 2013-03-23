
// Variables
var hasTouch = false,
  ua = navigator.userAgent,
  doc = document,
  docEl = doc.documentElement;

// "Detect" JavaScript support
docEl.className = docEl.className.replace(/(^|\s)no-js preload(\s|$)/, " js ");

// If Windows
if (ua.match(/(Windows)/)) {
  docEl.className = docEl.className + ' windows ';
}

// A fix is on the way to get Windows Phone 8 to recognize
// CSS pixels rather than device pixels (which is preferred behavior).
// In the meantime, use this javascript before any other script
// if you need an immediate patch:
//
// http://trentwalton.com/2013/01/16/windows-phone-8-viewport-fix/
if (ua.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = doc.createElement("style");
  msViewportStyle.appendChild(doc.createTextNode("@-ms-viewport{width:auto!important}"));
  doc.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}

// Detect "font-face" support
//
// p.s. this doesn't check support on desktop browsers
// so you should use Modernizr in combination with this
// UA detection to get the most out of it.
// BUT: in many cases this detection is all that's needed.
//
// Can I use: http://caniuse.com/fontface
var isFontfaceSupported = (function () {
  if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Nokia)|(Opera Mini)|(w(eb)?OSBrowser)|(webOS)|(UCWEB)|(Windows Phone OS 7)|(XBLWP7)|(ZuneWP7)/)) {
    return false;
  }
  return true;
})();

// Was "font-face" supported?
if (isFontfaceSupported) {
  docEl.className = docEl.className.replace(/(^|\s)no-fontface(\s|$)/, " fontface ");
}

// Detect "touch" support and act accordingly
//
// Windows Phone OS 7 doesn't really support touch events in JS
// but it's still included here as it has a touch screen.
// Remove ua.match part if you don't want it in. ;(
if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch || navigator.msMaxTouchPoints || ua.match(/(Windows Phone OS 7)/)) {
  docEl.className = docEl.className.replace(/(^|\s)no-touch(\s|$)/, " touch ");
  hasTouch = true;
}

// Init responsive-nav.js
var navigation = new ResponsiveNav("#nav", { // Selector: The ID of the outer wrapper, default is "#nav"
  transition: 300, // Integer: Speed of the transition, in milliseconds, default is "300"
  label: "Menu", // String: Label for the navigation toggle, default is "Menu"
  insert: "after", // String: Insert the toggle before or after the navigation, default is "after"
  customToggle: "", // Selector: Specify the ID of a custom toggle, default is ""
  debug: false // Boolean: Log debug messages to console, true or false, default is "false"
});
