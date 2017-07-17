/*! vue-ydui v0.7.5 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/dist/",t(0)}({0:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.KeyBoard=void 0;var n=r(72),i=o(n);t.KeyBoard=i.default},1:function(e,t){e.exports=function(e,t,r,o){var n,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(n=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r),o){var l=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var t=o[e];l[e]=function(){return t}})}return{esModule:n,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&o[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},3:function(e,t,r){function o(e){for(var t=0;t<e.length;t++){var r=e[t],o=d[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(i(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{for(var s=[],n=0;n<r.parts.length;n++)s.push(i(r.parts[n]));d[r.id]={id:r.id,refs:1,parts:s}}}}function n(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,r,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(m)return b;o.parentNode.removeChild(o)}if(h){var i=p++;o=u||(u=n()),t=s.bind(null,o,i,!1),r=s.bind(null,o,i,!0)}else o=n(),t=a.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}function s(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var i=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document,c=r(4),d={},f=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,m=!1,b=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){m=r;var n=c(e,t);return o(n),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i],a=d[s.id];a.refs--,r.push(a)}t?(n=c(e,t),o(n)):n=[];for(var i=0;i<r.length;i++){var a=r[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var g=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var r=[],o={},n=0;n<t.length;n++){var i=t[n],s=i[0],a=i[1],l=i[2],c=i[3],d={id:e+":"+n,css:a,media:l,sourceMap:c};o[s]?o[s].parts.push(d):r.push(o[s]={id:s,parts:[d]})}return r}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),n=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,r=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,o=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||r.test(e)||o.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var r=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===r||"auto"===r)return t;t=t.parentNode}return window},s=function(e,t){var r=e==window?document.body.offsetHeight:e.offsetHeight,o=e===window?0:e.getBoundingClientRect().top,n=t.getBoundingClientRect().top-o,i=n+t.offsetHeight;return n>=0&&n<r||i>0&&i<=r},a=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},l=function(e,t){a(e,t)||(e.className=""==e.className?t:e.className+" "+t)},c=function(e,t){if(a(e,t)){for(var r=" "+e.className.replace(/[\t\r\n]/g,"")+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ");e.className=r.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(r,o,n){if(r!==o){var i=r+n>o?o:r+n;r>o&&(i=r-n<o?o:r-n),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,o,n)})}}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(r-o),s=Math.ceil(i/n*50);t(r,o,s)};t.pageScroll=r,t.isIOS=o,t.isColor=n,t.getScrollview=i,t.checkInview=s,t.addClass=l,t.removeClass=c,t.scrollTop=d},41:function(e,t,r){t=e.exports=r(2)(),t.push([e.id,'.mask-keyboard{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-keyboard,.mask-keyboard{position:fixed;z-index:500;bottom:0;left:0}.m-keyboard{width:100%;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background-color:#f7f7f7}.m-keyboard.keyboard-active{-webkit-transform:translate(0);transform:translate(0)}.keyboard-content{background-color:#fff;margin-top:.3rem;position:relative}.keyboard-content:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-title{overflow:hidden;padding:.2rem 0 .12rem;color:#222;margin-bottom:1px;font-size:.24rem;text-align:center;background-color:#fff}.keyboard-title:before{font-family:YDUI-INLAY;content:"\\E60A";font-size:.26rem;color:#ff2424;line-height:1;margin-right:.06rem}.keyboard-numbers{font-size:.48rem;background-color:#fff}.keyboard-numbers>li{width:100%}.keyboard-numbers>li,.keyboard-numbers>li>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.keyboard-numbers>li>a{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#222;height:1rem;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.keyboard-numbers>li>a:not(:last-child):after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li>a:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li:last-child>a:last-child,.keyboard-numbers>li:last-child>a:nth-last-child(3){background-color:#f7f7f7;font-size:.3rem;color:#686868}.keyboard-numbers>li:last-child>a:last-child:after{font-family:YDUI-INLAY;content:"\\E609";font-size:.6rem}.keyboard-head{height:.8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#1f2324;font-size:.3rem;position:relative}.keyboard-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-password{margin:0 .8rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;background-color:#fff}.keyboard-password:after{content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:1px solid #d9d9d9;top:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:4px}.keyboard-password li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:1rem}.keyboard-password li:not(:last-child):after{content:"";width:1px;height:50%;position:absolute;right:0;top:25%;background-color:#d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.keyboard-password li i{width:6px;height:6px;border-radius:50%;background-color:#000}.keyboard-error{padding:2px .8rem;color:red;overflow:hidden;height:.5rem;line-height:.5rem;font-size:.24rem;text-align:left}',""])},72:function(e,t,r){r(181);var o=r(1)(r(213),r(145),null,null);e.exports=o.exports},145:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.triggerClose?r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mask-keyboard",on:{click:function(t){t.stopPropagation(),e.close(t)}}}):r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mask-keyboard"}),e._v(" "),r("div",{staticClass:"m-keyboard",class:e.show?"keyboard-active":""},[e._m(0),e._v(" "),r("div",{staticClass:"keyboard-error"},[e._v(e._s(e.error))]),e._v(" "),r("ul",{staticClass:"keyboard-password"},e._l(6,function(t){return r("li",[r("i",{directives:[{name:"show",rawName:"v-show",value:e.nums.length>=t,expression:"nums.length >= n"}]})])})),e._v(" "),r("div",{staticClass:"keyboard-content"},[r("div",{staticClass:"keyboard-title"},[e._v(e._s(e.title))]),e._v(" "),r("ul",{staticClass:"keyboard-numbers"},e._l(4,function(t){return r("li",[e.triggerClose?[4==t?r("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.close(t)}}},[e._v("取消")]):e._e()]:[4==t?r("a",{attrs:{href:"javascript:;"}}):e._e()],e._v(" "),e.isMobile?e._l(e.numsArr.slice(3*(t-1),3*t),function(t){return r("a",{attrs:{href:"javascript:;"},on:{touchstart:function(r){r.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}):e._l(e.numsArr.slice(3*(t-1),3*t),function(t){return r("a",{attrs:{href:"javascript:;"},on:{click:function(r){r.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}),e._v(" "),4==t?r("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.backspace(t)}}}):e._e()],2)}))])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"keyboard-head"},[r("strong",[e._v("输入数字密码")])])}]}},181:function(e,t,r){var o=r(41);"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);r(3)("6fc7c790",o,!0)},213:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(5);t.default={name:"yd-keyboard",data:function(){return{nums:"",show:this.value,error:"",numsArr:[1,2,3,4,5,6,7,8,9,0]}},props:{inputDone:{type:Function},disorder:{type:Boolean,default:!1},value:{type:Boolean,default:!1},title:{type:String,default:"YDUI安全键盘"},triggerClose:{type:Boolean,default:!0}},watch:{value:function(e){o.isIOS&&(e?(o.pageScroll.lock(),(0,o.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(o.pageScroll.unlock(),(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))),this.nums="",this.error="",this.show=e,this.show&&this.disorder&&(this.numsArr=this.upsetOrder(this.numsArr))},nums:function(e){e.length>=6&&this.inputDone&&"function"==typeof this.inputDone&&this.inputDone(e)}},methods:{init:function(){var e=this;this.scrollView=(0,o.getScrollview)(this.$el),this.$on("ydui.keyboard.error",function(t){e.setError(t)}),this.$on("ydui.keyboard.close",this.close)},numclick:function(e){this.error="",this.nums.length>=6||(this.nums+=e)},backspace:function(){var e=this.nums;e&&(this.nums=e.substr(0,e.length-1))},upsetOrder:function(e){for(var t=Math.floor,r=Math.random,o=e.length,n=void 0,i=void 0,s=void 0,a=t(o/2)+1;a--;)n=t(r()*o),i=t(r()*o),n!==i&&(s=e[n],e[n]=e[i],e[i]=s);return e},close:function(){o.isIOS&&(0,o.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1)},setError:function(e){this.error=e,this.nums=""}},created:function(){var e=window.navigator&&window.navigator.userAgent||"";this.isMobile=!!e.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in document.documentElement,this.$nextTick(this.init)},destroyed:function(){this.close()}}}})});