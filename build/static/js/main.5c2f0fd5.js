!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/breakout/",e(e.s=1)}([function(t,e,n){"use strict";function r(){}function i(t){try{return t.then}catch(t){return v=t,m}}function o(t,e){try{return t(e)}catch(t){return v=t,m}}function s(t,e,n){try{t(e,n)}catch(t){return v=t,m}}function a(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&p(t,this)}function u(t,e,n){return new t.constructor(function(i,o){var s=new a(r);s.then(i,o),l(t,new y(e,n,s))})}function l(t,e){for(;3===t._83;)t=t._18;if(a._47&&a._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);c(t,e)}function c(t,e){b(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._83?h(e.promise,t._18):f(e.promise,t._18));var r=o(n,t._18);r===m?f(e.promise,v):h(e.promise,r)})}function h(t,e){if(e===t)return f(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var n=i(e);if(n===m)return f(t,v);if(n===t.then&&e instanceof a)return t._83=3,t._18=e,void d(t);if("function"===typeof n)return void p(n.bind(e),t)}t._83=1,t._18=e,d(t)}function f(t,e){t._83=2,t._18=e,a._71&&a._71(t,e),d(t)}function d(t){if(1===t._75&&(l(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)l(t,t._38[e]);t._38=null}}function y(t,e,n){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=n}function p(t,e){var n=!1,r=s(t,function(t){n||(n=!0,h(e,t))},function(t){n||(n=!0,f(e,t))});n||r!==m||(n=!0,f(e,v))}var b=n(4),v=null,m={};t.exports=a,a._47=null,a._71=null,a._44=r,a.prototype.then=function(t,e){if(this.constructor!==a)return u(this,t,e);var n=new a(r);return l(this,new y(t,e,n)),n}},function(t,e,n){n(2),t.exports=n(9)},function(t,e,n){"use strict";"undefined"===typeof Promise&&(n(3).enable(),window.Promise=n(6)),n(7),Object.assign=n(8)},function(t,e,n){"use strict";function r(){l=!1,a._47=null,a._71=null}function i(t){function e(e){(t.allRejections||s(h[e].error,t.whitelist||u))&&(h[e].displayId=c++,t.onUnhandled?(h[e].logged=!0,t.onUnhandled(h[e].displayId,h[e].error)):(h[e].logged=!0,o(h[e].displayId,h[e].error)))}function n(e){h[e].logged&&(t.onHandled?t.onHandled(h[e].displayId,h[e].error):h[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+h[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+h[e].displayId+".")))}t=t||{},l&&r(),l=!0;var i=0,c=0,h={};a._47=function(t){2===t._83&&h[t._56]&&(h[t._56].logged?n(t._56):clearTimeout(h[t._56].timeout),delete h[t._56])},a._71=function(t,n){0===t._75&&(t._56=i++,h[t._56]={displayId:null,error:n,timeout:setTimeout(e.bind(null,t._56),s(n,u)?100:2e3),logged:!1})}}function o(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}function s(t,e){return e.some(function(e){return t instanceof e})}var a=n(0),u=[ReferenceError,TypeError,RangeError],l=!1;e.disable=r,e.enable=i},function(t,e,n){"use strict";(function(e){function n(t){s.length||(o(),a=!0),s[s.length]=t}function r(){for(;u<s.length;){var t=u;if(u+=1,s[t].call(),u>l){for(var e=0,n=s.length-u;e<n;e++)s[e]=s[e+u];s.length-=u,u=0}}s.length=0,u=0,a=!1}function i(t){return function(){function e(){clearTimeout(n),clearInterval(r),t()}var n=setTimeout(e,0),r=setInterval(e,50)}}t.exports=n;var o,s=[],a=!1,u=0,l=1024,c="undefined"!==typeof e?e:self,h=c.MutationObserver||c.WebKitMutationObserver;o="function"===typeof h?function(t){var e=1,n=new h(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}(r):i(r),n.requestFlush=o,n.makeRequestCallFromTimer=i}).call(e,n(5))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){var e=new i(i._44);return e._83=1,e._18=t,e}var i=n(0);t.exports=i;var o=r(!0),s=r(!1),a=r(null),u=r(void 0),l=r(0),c=r("");i.resolve=function(t){if(t instanceof i)return t;if(null===t)return a;if(void 0===t)return u;if(!0===t)return o;if(!1===t)return s;if(0===t)return l;if(""===t)return c;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new i(e.bind(t))}catch(t){return new i(function(e,n){n(t)})}return r(t)},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function r(s,a){if(a&&("object"===typeof a||"function"===typeof a)){if(a instanceof i&&a.then===i.prototype.then){for(;3===a._83;)a=a._18;return 1===a._83?r(s,a._18):(2===a._83&&n(a._18),void a.then(function(t){r(s,t)},n))}var u=a.then;if("function"===typeof u){return void new i(u.bind(a)).then(function(t){r(s,t)},n)}}e[s]=a,0===--o&&t(e)}if(0===e.length)return t([]);for(var o=e.length,s=0;s<e.length;s++)r(s,e[s])})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){t.forEach(function(t){i.resolve(t).then(e,n)})})},i.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!==typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function o(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function a(t){var e=new FileReader,n=s(e);return e.readAsArrayBuffer(t),n}function u(t){var e=new FileReader,n=s(e);return e.readAsText(t),n}function l(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&w(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?o(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=o(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function d(t,e){e=e||{};var n=e.body;if(t instanceof d){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=f(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(i))}}),e}function p(t){var e=new i;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();e.append(r,i)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&m.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,r){t=e(t),r=n(r);var i=this.map[t];this.map[t]=i?i+","+r:r},i.prototype.delete=function(t){delete this.map[e(t)]},i.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},i.prototype.set=function(t,r){this.map[e(t)]=n(r)},i.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},v.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},h.call(d.prototype),h.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];b.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=d,t.Response=b,t.fetch=function(t,e){return new Promise(function(n,r){var i=new d(t,e),o=new XMLHttpRequest;o.onload=function(){var t={status:o.status,statusText:o.statusText,headers:p(o.getAllResponseHeaders()||"")};t.url="responseURL"in o?o.responseURL:t.headers.get("X-Request-URL");var e="response"in o?o.response:o.responseText;n(new b(e,t))},o.onerror=function(){r(new TypeError("Network request failed"))},o.ontimeout=function(){r(new TypeError("Network request failed"))},o.open(i.method,i.url,!0),"include"===i.credentials&&(o.withCredentials=!0),"responseType"in o&&v.blob&&(o.responseType="blob"),i.headers.forEach(function(t,e){o.setRequestHeader(e,t)}),o.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,u=r(t),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var c in n)o.call(n,c)&&(u[c]=n[c]);if(i){a=i(n);for(var h=0;h<a.length;h++)s.call(n,a[h])&&(u[a[h]]=n[a[h]])}}return u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),i=n(14);n.n(i),new r.a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(11),o=n(12),s=n(13),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function(){function t(){r(this,t),this.input={direction:null},this.over=!1,this.start=!0,this.brickCount=0,this.score=0,this.ball=new o.a(250,200),this.paddle=new s.a(205,450,15,90),this.bricks=[];for(var e=0;e<10;e++){this.bricks[e]=[];for(var n=0;n<5;n++)this.bricks[e][n]=new i.a(50*e+1,70+22*n,"blue"),console.log(this.bricks[e][n].getPosition())}this.backBufferCanvas=document.createElement("canvas"),this.backBufferCanvas.width=500,this.backBufferCanvas.height=500,this.backBufferContext=this.backBufferCanvas.getContext("2d"),this.screenBufferCanvas=document.createElement("canvas"),this.screenBufferCanvas.width=500,this.screenBufferCanvas.height=500,document.body.appendChild(this.screenBufferCanvas),this.screenBufferContext=this.screenBufferCanvas.getContext("2d");var a=document.createElement("div");a.id="message",a.textContent="",document.body.appendChild(a),this.update=this.update.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this),this.gameOver=this.gameOver.bind(this),this.render=this.render.bind(this),this.loop=this.loop.bind(this),window.onkeydown=this.handleKeyDown,window.onkeyup=this.handleKeyUp,this.interval=setInterval(this.loop,20)}return a(t,[{key:"handleKeyDown",value:function(t){t.preventDefault();var e=document.getElementById("message");switch(t.key){case"a":case"ArrowLeft":this.input.direction="left";break;case"d":case"ArrowRight":this.input.direction="right";break;case" ":this.gameStart=!1,e.innerText=""}}},{key:"handleKeyUp",value:function(t){t.preventDefault(),"a"!=t.key&&"ArrowLeft"!=t.key||"left"!=this.input.direction||(this.input.direction=null),"d"!=t.key&&"ArrowRight"!=t.key||"right"!=this.input.direction||(this.input.direction=null)}},{key:"gameOver",value:function(t){var e=document.getElementById("message");e.innerText=t?"You win!":"Game Over",this.over=!0}},{key:"update",value:function(){var t=document.getElementById("message");if(this.gameStart&&(t.innerText="Press space to start."),!this.over&&!this.gameStart){var e=this.ball.getPosition(),n=this.paddle.getPosition();if(e.y>=490)return this.gameOver(!1);e.y+10>=n.y&&e.y+10<=n.y+15&&e.x+10>=n.x&&e.x<=n.x+90&&this.ball.collidePaddle(this.input.direction),(e.x>=490||e.x<=0)&&this.ball.collideWall(),e.y<=40&&this.ball.collideCeiling();for(var r=0;r<10;r++)for(var i=0;i<5;i++){var o=this.bricks[r][i].getPosition();e.y<=o.y+20&&e.y>=o.y&&e.x+5>=o.x&&e.x+5<o.x+50&&!this.bricks[r][i].isBroken&&(this.bricks[r][i].collideBall(),this.ball.collideCeiling(),this.score+=10),e.y+10>=o.y&&e.y+10<=o.y+20&&e.x+5>=o.x&&e.x+5<o.x+50&&!this.bricks[r][i].isBroken&&(this.bricks[r][i].collideBall(),this.ball.collidePaddle(),this.score+=10),e.x<=o.x+48&&e.x>=o.x&&e.y+5<o.y+22&&e.y+5>o.y-1&&!this.bricks[r][i].isBroken&&(this.bricks[r][i].collideBall(),this.ball.collideWall(),this.score+=10),e.x+10>=o.x&&e.x+10<=o.x+48&&e.y+5<o.y+22&&e.y+5>o.y-1&&!this.bricks[r][i].isBroken&&(this.bricks[r][i].collideBall(),this.ball.collideWall(),this.score+=10)}this.ball.update(this.gameOver),this.paddle.update(this.input)}}},{key:"render",value:function(){this.backBufferContext.fillStyle="#ccc",this.backBufferContext.fillRect(0,0,500,500),this.backBufferContext.fillStyle="white",this.backBufferContext.fillRect(0,0,500,40),this.backBufferContext.fillStyle="black",this.backBufferContext.font="14px sans-serif",this.backBufferContext.fillText("Score: "+this.score,400,25),this.brickCount=0;for(var t=0;t<10;t++)for(var e=0;e<5;e++)this.bricks[t][e].isBroken||(this.bricks[t][e].render(this.backBufferContext),this.brickCount++);0==this.brickCount&&this.gameOver(!0),this.ball.render(this.backBufferContext),this.paddle.render(this.backBufferContext),this.screenBufferContext.drawImage(this.backBufferCanvas,0,0)}},{key:"loop",value:function(){this.update(),this.render()}}]),t}();e.a=u},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,n,i){r(this,t),this.x=e,this.y=n,this.color=i,this.isBroken=!1,this.break=new Audio("break.wav"),this.getPosition=this.getPosition.bind(this),this.collideBall=this.collideBall.bind(this),this.render=this.render.bind(this)}return i(t,[{key:"getPosition",value:function(){return{x:this.x,y:this.y}}},{key:"collideBall",value:function(){this.break.play(),this.isBroken=!0}},{key:"render",value:function(t){t.save(),t.fillStyle=this.color,t.fillRect(this.x,this.y,48,20),t.restore()}}]),t}();e.a=o},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,n){r(this,t),this.x=e,this.y=n,this.ys=5,this.xs=2.5,this.hit=new Audio("hit.wav"),this.getPosition=this.getPosition.bind(this),this.collidePaddle=this.collidePaddle.bind(this),this.collideWall=this.collideWall.bind(this),this.collideCeiling=this.collideCeiling.bind(this),this.update=this.update.bind(this),this.render=this.render.bind(this)}return i(t,[{key:"getPosition",value:function(){return{x:this.x,y:this.y}}},{key:"collidePaddle",value:function(t){this.hit.play(),null==t||this.xs>8||this.xs<-8?this.ys=-this.ys:"right"==t?(this.ys=-this.ys,this.xs+=2):"left"==t&&(this.ys=-this.ys,this.xs-=2)}},{key:"collideWall",value:function(){this.hit.play(),this.xs=-this.xs}},{key:"collideCeiling",value:function(){this.hit.play(),this.ys=-this.ys}},{key:"update",value:function(t,e){var n=this.x,r=this.y;n+=this.xs,r+=this.ys,this.y>490&&e(),this.x=n,this.y=r}},{key:"render",value:function(t){t.save(),t.fillStyle="red",t.fillRect(this.x,this.y,10,10),t.restore()}}]),t}();e.a=o},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,n,i,o){r(this,t),this.x=e,this.y=n,this.height=i,this.width=o,this.direction=null,this.update=this.update.bind(this),this.render=this.render.bind(this),this.getPosition=this.getPosition.bind(this)}return i(t,[{key:"getPosition",value:function(){return{x:this.x,y:this.y}}},{key:"update",value:function(t){var e=this.x;this.y;switch(this.direction=t.direction,this.direction){case"right":e+=7;break;case"left":e-=7}e>=0&&e<=410&&(this.x=e)}},{key:"render",value:function(t){t.save(),t.fillStyle="red",t.fillRect(this.x,this.y,this.width,this.height),t.restore()}}]),t}();e.a=o},function(t,e){}]);
//# sourceMappingURL=main.5c2f0fd5.js.map