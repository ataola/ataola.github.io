;(function(){function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj;}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;},_typeof(obj);}System.register([],function(exports){'use strict';return{execute:function execute(){var browser={exports:{}};/**
       * Helpers.
       */var s=1000;var m=s*60;var h=m*60;var d=h*24;var w=d*7;var y=d*365.25;/**
       * Parse or format the given `val`.
       *
       * Options:
       *
       *  - `long` verbose formatting [false]
       *
       * @param {String|Number} val
       * @param {Object} [options]
       * @throws {Error} throw an error if val is not a non-empty string or a number
       * @return {String|Number}
       * @api public
       */var ms=function ms(val,options){options=options||{};var type=_typeof(val);if(type==='string'&&val.length>0){return parse(val);}else if(type==='number'&&isFinite(val)){return options.long?fmtLong(val):fmtShort(val);}throw new Error('val is not a non-empty string or a valid number. val='+JSON.stringify(val));};/**
       * Parse the given `str` and return milliseconds.
       *
       * @param {String} str
       * @return {Number}
       * @api private
       */function parse(str){str=String(str);if(str.length>100){return;}var match=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);if(!match){return;}var n=parseFloat(match[1]);var type=(match[2]||'ms').toLowerCase();switch(type){case'years':case'year':case'yrs':case'yr':case'y':return n*y;case'weeks':case'week':case'w':return n*w;case'days':case'day':case'd':return n*d;case'hours':case'hour':case'hrs':case'hr':case'h':return n*h;case'minutes':case'minute':case'mins':case'min':case'm':return n*m;case'seconds':case'second':case'secs':case'sec':case's':return n*s;case'milliseconds':case'millisecond':case'msecs':case'msec':case'ms':return n;default:return undefined;}}/**
       * Short format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */function fmtShort(ms){var msAbs=Math.abs(ms);if(msAbs>=d){return Math.round(ms/d)+'d';}if(msAbs>=h){return Math.round(ms/h)+'h';}if(msAbs>=m){return Math.round(ms/m)+'m';}if(msAbs>=s){return Math.round(ms/s)+'s';}return ms+'ms';}/**
       * Long format for `ms`.
       *
       * @param {Number} ms
       * @return {String}
       * @api private
       */function fmtLong(ms){var msAbs=Math.abs(ms);if(msAbs>=d){return plural(ms,msAbs,d,'day');}if(msAbs>=h){return plural(ms,msAbs,h,'hour');}if(msAbs>=m){return plural(ms,msAbs,m,'minute');}if(msAbs>=s){return plural(ms,msAbs,s,'second');}return ms+' ms';}/**
       * Pluralization helper.
       */function plural(ms,msAbs,n,name){var isPlural=msAbs>=n*1.5;return Math.round(ms/n)+' '+name+(isPlural?'s':'');}/**
       * This is the common logic for both the Node.js and web browser
       * implementations of `debug()`.
       */function setup(env){createDebug.debug=createDebug;createDebug.default=createDebug;createDebug.coerce=coerce;createDebug.disable=disable;createDebug.enable=enable;createDebug.enabled=enabled;createDebug.humanize=ms;createDebug.destroy=destroy;Object.keys(env).forEach(function(key){createDebug[key]=env[key];});/**
      	* The currently active debug mode names, and names to skip.
      	*/createDebug.names=[];createDebug.skips=[];/**
      	* Map of special "%n" handling functions, for the debug "format" argument.
      	*
      	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
      	*/createDebug.formatters={};/**
      	* Selects a color for a debug namespace
      	* @param {String} namespace The namespace string for the debug instance to be colored
      	* @return {Number|String} An ANSI color code for the given namespace
      	* @api private
      	*/function selectColor(namespace){var hash=0;for(var i=0;i<namespace.length;i++){hash=(hash<<5)-hash+namespace.charCodeAt(i);hash|=0;// Convert to 32bit integer
}return createDebug.colors[Math.abs(hash)%createDebug.colors.length];}createDebug.selectColor=selectColor;/**
      	* Create a debugger with the given `namespace`.
      	*
      	* @param {String} namespace
      	* @return {Function}
      	* @api public
      	*/function createDebug(namespace){var prevTime;var enableOverride=null;var namespacesCache;var enabledCache;function debug(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}// Disabled?
if(!debug.enabled){return;}var self=debug;// Set `diff` timestamp
var curr=Number(new Date());var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;args[0]=createDebug.coerce(args[0]);if(typeof args[0]!=='string'){// Anything else let's inspect with %O
args.unshift('%O');}// Apply any `formatters` transformations
var index=0;args[0]=args[0].replace(/%([a-zA-Z%])/g,function(match,format){// If we encounter an escaped % then don't increase the array index
if(match==='%%'){return'%';}index++;var formatter=createDebug.formatters[format];if(typeof formatter==='function'){var val=args[index];match=formatter.call(self,val);// Now we need to remove `args[index]` since it's inlined in the `format`
args.splice(index,1);index--;}return match;});// Apply env-specific formatting (colors, etc.)
createDebug.formatArgs.call(self,args);var logFn=self.log||createDebug.log;logFn.apply(self,args);}debug.namespace=namespace;debug.useColors=createDebug.useColors();debug.color=createDebug.selectColor(namespace);debug.extend=extend;debug.destroy=createDebug.destroy;// XXX Temporary. Will be removed in the next major release.
Object.defineProperty(debug,'enabled',{enumerable:true,configurable:false,get:function get(){if(enableOverride!==null){return enableOverride;}if(namespacesCache!==createDebug.namespaces){namespacesCache=createDebug.namespaces;enabledCache=createDebug.enabled(namespace);}return enabledCache;},set:function set(v){enableOverride=v;}});// Env-specific initialization logic for debug instances
if(typeof createDebug.init==='function'){createDebug.init(debug);}return debug;}function extend(namespace,delimiter){var newDebug=createDebug(this.namespace+(typeof delimiter==='undefined'?':':delimiter)+namespace);newDebug.log=this.log;return newDebug;}/**
      	* Enables a debug mode by namespaces. This can include modes
      	* separated by a colon and wildcards.
      	*
      	* @param {String} namespaces
      	* @api public
      	*/function enable(namespaces){createDebug.save(namespaces);createDebug.namespaces=namespaces;createDebug.names=[];createDebug.skips=[];var i;var split=(typeof namespaces==='string'?namespaces:'').split(/[\s,]+/);var len=split.length;for(i=0;i<len;i++){if(!split[i]){// ignore empty strings
continue;}namespaces=split[i].replace(/\*/g,'.*?');if(namespaces[0]==='-'){createDebug.skips.push(new RegExp('^'+namespaces.slice(1)+'$'));}else{createDebug.names.push(new RegExp('^'+namespaces+'$'));}}}/**
      	* Disable debug output.
      	*
      	* @return {String} namespaces
      	* @api public
      	*/function disable(){var namespaces=[].concat(_toConsumableArray(createDebug.names.map(toNamespace)),_toConsumableArray(createDebug.skips.map(toNamespace).map(function(namespace){return'-'+namespace;}))).join(',');createDebug.enable('');return namespaces;}/**
      	* Returns true if the given mode name is enabled, false otherwise.
      	*
      	* @param {String} name
      	* @return {Boolean}
      	* @api public
      	*/function enabled(name){if(name[name.length-1]==='*'){return true;}var i;var len;for(i=0,len=createDebug.skips.length;i<len;i++){if(createDebug.skips[i].test(name)){return false;}}for(i=0,len=createDebug.names.length;i<len;i++){if(createDebug.names[i].test(name)){return true;}}return false;}/**
      	* Convert regexp to namespace
      	*
      	* @param {RegExp} regxep
      	* @return {String} namespace
      	* @api private
      	*/function toNamespace(regexp){return regexp.toString().substring(2,regexp.toString().length-2).replace(/\.\*\?$/,'*');}/**
      	* Coerce `val`.
      	*
      	* @param {Mixed} val
      	* @return {Mixed}
      	* @api private
      	*/function coerce(val){if(val instanceof Error){return val.stack||val.message;}return val;}/**
      	* XXX DO NOT USE. This is a temporary stub function.
      	* XXX It WILL be removed in the next major release.
      	*/function destroy(){console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');}createDebug.enable(createDebug.load());return createDebug;}var common=setup;/* eslint-env browser */(function(module,exports){/**
       * This is the web browser implementation of `debug()`.
       */exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage=localstorage();exports.destroy=function(){var warned=false;return function(){if(!warned){warned=true;console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');}};}();/**
       * Colors.
       */exports.colors=['#0000CC','#0000FF','#0033CC','#0033FF','#0066CC','#0066FF','#0099CC','#0099FF','#00CC00','#00CC33','#00CC66','#00CC99','#00CCCC','#00CCFF','#3300CC','#3300FF','#3333CC','#3333FF','#3366CC','#3366FF','#3399CC','#3399FF','#33CC00','#33CC33','#33CC66','#33CC99','#33CCCC','#33CCFF','#6600CC','#6600FF','#6633CC','#6633FF','#66CC00','#66CC33','#9900CC','#9900FF','#9933CC','#9933FF','#99CC00','#99CC33','#CC0000','#CC0033','#CC0066','#CC0099','#CC00CC','#CC00FF','#CC3300','#CC3333','#CC3366','#CC3399','#CC33CC','#CC33FF','#CC6600','#CC6633','#CC9900','#CC9933','#CCCC00','#CCCC33','#FF0000','#FF0033','#FF0066','#FF0099','#FF00CC','#FF00FF','#FF3300','#FF3333','#FF3366','#FF3399','#FF33CC','#FF33FF','#FF6600','#FF6633','#FF9900','#FF9933','#FFCC00','#FFCC33'];/**
       * Currently only WebKit-based Web Inspectors, Firefox >= v31,
       * and the Firebug extension (any Firefox version) are known
       * to support "%c" CSS customizations.
       *
       * TODO: add a `localStorage` variable to explicitly enable/disable colors
       */ // eslint-disable-next-line complexity
function useColors(){// NB: In an Electron preload script, document will be defined but not fully
// initialized. Since we know we're in Chrome, we'll just detect this case
// explicitly
if(typeof window!=='undefined'&&window.process&&(window.process.type==='renderer'||window.process.__nwjs)){return true;}// Internet Explorer and Edge do not support colors.
if(typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)){return false;}// Is webkit? http://stackoverflow.com/a/16459606/376773
// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
return typeof document!=='undefined'&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||// Is firebug? http://stackoverflow.com/a/398120/376773
typeof window!=='undefined'&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||// Is firefox >= v31?
// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||// Double check webkit in userAgent just in case we are in a worker
typeof navigator!=='undefined'&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);}/**
       * Colorize log arguments if enabled.
       *
       * @api public
       */function formatArgs(args){args[0]=(this.useColors?'%c':'')+this.namespace+(this.useColors?' %c':' ')+args[0]+(this.useColors?'%c ':' ')+'+'+module.exports.humanize(this.diff);if(!this.useColors){return;}var c='color: '+this.color;args.splice(1,0,c,'color: inherit');// The final "%c" is somewhat tricky, because there could be other
// arguments passed either before or after the %c, so we need to
// figure out the correct index to insert the CSS into
var index=0;var lastC=0;args[0].replace(/%[a-zA-Z%]/g,function(match){if(match==='%%'){return;}index++;if(match==='%c'){// We only are interested in the *last* %c
// (the user may have provided their own)
lastC=index;}});args.splice(lastC,0,c);}/**
       * Invokes `console.debug()` when available.
       * No-op when `console.debug` is not a "function".
       * If `console.debug` is not available, falls back
       * to `console.log`.
       *
       * @api public
       */exports.log=console.debug||console.log||function(){};/**
       * Save `namespaces`.
       *
       * @param {String} namespaces
       * @api private
       */function save(namespaces){try{if(namespaces){exports.storage.setItem('debug',namespaces);}else{exports.storage.removeItem('debug');}}catch(error){// Swallow
// XXX (@Qix-) should we be logging these?
}}/**
       * Load `namespaces`.
       *
       * @return {String} returns the previously persisted debug modes
       * @api private
       */function load(){var r;try{r=exports.storage.getItem('debug');}catch(error){// Swallow
// XXX (@Qix-) should we be logging these?
}// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
if(!r&&typeof process!=='undefined'&&'env'in process){r={}.DEBUG;}return r;}/**
       * Localstorage attempts to return the localstorage.
       *
       * This is necessary because safari throws
       * when a user disables cookies/localstorage
       * and you attempt to access it.
       *
       * @return {LocalStorage}
       * @api private
       */function localstorage(){try{// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
// The Browser also has localStorage in the global context.
return localStorage;}catch(error){// Swallow
// XXX (@Qix-) should we be logging these?
}}module.exports=common(exports);var formatters=module.exports.formatters;/**
       * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
       */formatters.j=function(v){try{return JSON.stringify(v);}catch(error){return'[UnexpectedJSONParseError]: '+error.message;}};})(browser,browser.exports);var debug=exports('d',browser.exports);}};});})();
