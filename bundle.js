!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}({0:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},13:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),o={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return o.android()||o.blackberry()||o.ios()||o.opera()||o.windows()}},i=o,u=d3.select(".annotations");var c,s=[{year:"2004",value:100*Math.random()},{year:"2005",value:100*Math.random()},{year:"2006",value:100*Math.random()},{year:"2007",value:100*Math.random()},{year:"2008",value:100*Math.random()},{year:"2009",value:100*Math.random()},{year:"2010",value:100*Math.random()},{year:"2011",value:100*Math.random()},{year:"2012",value:100*Math.random()},{year:"2013",value:100*Math.random()},{year:"2014",value:100*Math.random()},{year:"2015",value:100*Math.random()},{year:"2016",value:100*Math.random()},{year:"2017",value:100*Math.random()},{year:"2018",value:100*Math.random()},{year:"2019",value:100*Math.random()}];d3.max(s,function(t){return+t.value});var l={init:function(t,e){c=Math.max(document.documentElement.clientWidth,window.innerWidth||0);var n=new ScrollMagic.Controller;e.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0}).unshift({id:"all",name:"Find a Topic"});var r=d3.map(t,function(t){return t.entity}),a=(d3.map(e,function(t){return t.name}),d3.map(e,function(t){return t.id})),o=[],i=d3.selectAll("mark").datum(function(t){var e=d3.select(this);return o.push({offset:e.node().offsetTop,cat:e.attr("data-id")}),e.node().offsetTop}).filter(function(t){return+t>0||t.cat});o=o.filter(function(t){return+t.offset>0}).sort(function(t,e){return t.offset-e.offset});var s=d3.select(".drop-down").on("change",function(t){var e=s.node(),n=e.options[e.selectedIndex].value,r=[];i.each(function(t){var e=d3.select(this).attr("data-id");n==e&&r.push(t)}),window.scrollTo({top:d3.min(r)+200,left:0,behavior:"smooth"})}),l=d3.nest().key(function(t){return t.cat}).entries(o);console.log(l),s.selectAll("option").data(l).enter().append("option").attr("value",function(t){return t.key}).text(function(t){var e=a.get(t.key.replace(/['"]+/g,"")).name.replace(/\b\w/g,function(t){return t.toUpperCase()});return e.length>25?e.slice(0,22)+"...":e});var d=u.selectAll("div").data(o,function(t){return o}).enter().append("div").attr("class","annotation").style("top",function(t){if(c>700)return t.offset+"px"}),f=(d.append("div").html(function(t){return"<p><span>"+a.get(t.cat.replace(/['"]+/g,"")).name+"</span> Search Interest</p><p>Day after each State of the Union</p>"}).attr("class","annotation-title"),d3.range(2004,2019,1).map(function(t){return"year_"+t}).reverse()),v=d.append("div").attr("class","bar-chart-wrapper").selectAll("div").data(function(t){var e=a.get(t.cat.replace(/['"]+/g,"")).name,n=r.get(e),o=[];for(var i in f)o.push({year:f[i].slice(-4),value:n[f[i]]});var u=d3.max(o,function(t){return+t.value});return o=o.map(function(t){return{year:t.year,value:t.value,max:u}})}).enter().append("div").attr("class","bar-wrapper");v.append("div").attr("class","bar").style("width",function(t){return c>700?100*t.value/t.max+"px":null}).style("height",function(t){return c<=700?50*t.value/t.max+"px":null}).filter(function(t){return+t.value==t.max}).append("p").text("Max Search Interest"),v.append("div").attr("class","bar-text").html(function(t){return"&rsquo;"+t.year.slice(-2)}).append("p").attr("class","bar-text-president").text(function(t){return 2018==+t.year?"Trump":2016==+t.year?"Obama":2008==+t.year?"Bush":""});var p=[];d.each(function(t,e){var n=d3.select(this).node().getBoundingClientRect();p.push([t.offset,t.offset+n.height]),t.id=e,t.topOfBox=t.offset,t.bottomOfBox=t.offset+n.height}).style("display",function(t,e){var n=e,r=p.slice(0,n);1==e&&(r=p.slice(0,1));var a=d3.select(this).node().getBoundingClientRect(),o=t.offset,i=(a.height,!1);if(t.overlap=!1,0!=e){for(var u in r)o<=r[u][1]&&(i||(i=!0));if(i)return t.overlap=!0,"none"}return null});var h=d3.map(d.data(),function(t,e){return t.id});i.classed("annotation-visible",function(t,e){return!h.get(e).overlap}).on("click",function(t,e){var n=e,r=h.get(+n),a=r.topOfBox,o=r.bottomOfBox;d3.select(this).classed("annotation-visible",!0);var u=d3.select(this).attr("data-id");d.style("display",function(t){if(c>700){var e=d3.select(this).style("display"),r=d3.select(this).node().getBoundingClientRect(),i=t.offset,u=r.height+i,s=!1;if(t.id!=n)return a<=u&&o>=i&&(s=!0,t.overlap=!0),s?"none":e;t.overlap=!1}return null}).classed("annotation-displayed",function(t){return t.cat==u&&c<=700}),h=d3.map(d.data(),function(t,e){return t.id}),i.classed("annotation-visible",function(t,e){return c>700?!h.get(e).overlap:c<=700?d3.select(this).attr("data-id")==u:void 0})}),d3.select(".jump-to").selectAll(".jump-to-item").on("click",function(t){var e=d3.select(this).text().toLowerCase(),n=[];i.each(function(t){var r=d3.select(this).attr("data-id");if(a.has(r)){var o=a.get(r).name.toLowerCase();e==o&&n.push(t)}}),window.scrollTo({top:d3.min(n)+200,left:0,behavior:"smooth"})}),c<700&&(new ScrollMagic.Scene({triggerElement:"#annotations",triggerHook:0}).setPin("#annotations").addTo(n),i.classed("annotation-visible",function(t,e){return!1}).each(function(t){var e=d3.select(this).node(),r=d3.select(this),a=d3.select(this).attr("data-id");new ScrollMagic.Scene({triggerElement:e,duration:10,triggerHook:.75}).addTo(n).on("start",function(t){i.classed("annotation-visible",function(t,e){return d3.select(this).attr("data-id")==a}),r.classed("annotation-visible",function(t,e){return!0}),d.classed("annotation-displayed",function(t){return t.cat==a})})}))},resize:function(){c=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}},d=d3.select("body"),f=0;function v(){var t=d.node().offsetWidth;f!==t&&(f=t,l.resize())}d.classed("is-mobile",i.any()),window.addEventListener("resize",a()(v,150)),d3.csv("assets/data/indexed_2.csv",function(t){d3.csv("assets/data/entities_3.csv",function(e){l.init(t,e)})})},2:function(t,e,n){(function(e){var n="Expected a function",r=NaN,a="[object Symbol]",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,f=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,h=Math.min,m=function(){return f.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&v.call(t)==a}(t))return r;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||c.test(t)?s(t.slice(2),n?2:8):i.test(t)?r:+t}t.exports=function(t,e,r){var a,o,i,u,c,s,l=0,d=!1,f=!1,v=!0;if("function"!=typeof t)throw new TypeError(n);function b(e){var n=a,r=o;return a=o=void 0,l=e,u=t.apply(r,n)}function x(t){var n=t-s;return void 0===s||n>=e||n<0||f&&t-l>=i}function w(){var t=m();if(x(t))return M(t);c=setTimeout(w,function(t){var n=e-(t-s);return f?h(n,i-(t-l)):n}(t))}function M(t){return c=void 0,v&&a?b(t):(a=o=void 0,u)}function j(){var t=m(),n=x(t);if(a=arguments,o=this,s=t,n){if(void 0===c)return function(t){return l=t,c=setTimeout(w,e),d?b(t):u}(s);if(f)return c=setTimeout(w,e),b(s)}return void 0===c&&(c=setTimeout(w,e)),u}return e=g(e)||0,y(r)&&(d=!!r.leading,i=(f="maxWait"in r)?p(g(r.maxWait)||0,e):i,v="trailing"in r?!!r.trailing:v),j.cancel=function(){void 0!==c&&clearTimeout(c),l=0,a=s=o=c=void 0},j.flush=function(){return void 0===c?u:M(m())},j}}).call(this,n(0))}});