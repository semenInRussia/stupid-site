(()=>{"use strict";var n={270:(n,e)=>{e.__esModule=!0,e.encode=e.decode=void 0;var t="qwertyuiopasdfghjklzxcvbnm1234567890 QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?/;'[].,!@#$%^&*()_+\\=-|`йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИИТЬ╔".split(""),r=t.length;function o(n,e){return n.split("").map((function(n){return t.indexOf(n)})).map((function(n){return n+e})).map(Math.abs).map((function(n){return n%r})).map((function(n){return t[n]})).join("")}e.decode=function(n,e){return o(n,-e)},e.encode=o},244:(n,e)=>{function t(n,e){var t,r,o,u,i;return o=2147483648&n,u=2147483648&e,i=(1073741823&n)+(1073741823&e),(t=1073741824&n)&(r=1073741824&e)?2147483648^i^o^u:t|r?1073741824&i?3221225472^i^o^u:1073741824^i^o^u:i^o^u}function r(n,e,r,o,u,i,a){return n=t(n,t(t(function(n,e,t){return n&e|~n&t}(e,r,o),u),a)),t(c(n,i),e)}function o(n,e,r,o,u,i,a){return n=t(n,t(t(function(n,e,t){return n&t|e&~t}(e,r,o),u),a)),t(c(n,i),e)}function u(n,e,r,o,u,i,a){return n=t(n,t(t(function(n,e,t){return n^e^t}(e,r,o),u),a)),t(c(n,i),e)}function i(n,e,r,o,u,i,a){return n=t(n,t(t(function(n,e,t){return e^(n|~t)}(e,r,o),u),a)),t(c(n,i),e)}function c(n,e){return n<<e|n>>>32-e}function a(n){var e,t="",r="";for(e=0;e<=3;e++)t+=(r="0"+(n>>>8*e&255).toString(16)).substr(r.length-2,2);return t}e.__esModule=!0,e.md5=void 0,e.md5=function(n){var e,c,d,l,f,p,m,s,v,h=Array();for(n=function(n){for(var e="",t=0;t<n.length;t++){var r=n.charCodeAt(t);r<128?e+=String.fromCharCode(r):r>127&&r<2048?(e+=String.fromCharCode(r>>6|192),e+=String.fromCharCode(63&r|128)):(e+=String.fromCharCode(r>>12|224),e+=String.fromCharCode(r>>6&63|128),e+=String.fromCharCode(63&r|128))}return e}(n),h=function(n){for(var e,t=n.length,r=t+8,o=16*((r-r%64)/64+1),u=Array(o-1),i=0,c=0;c<t;)i=c%4*8,u[e=(c-c%4)/4]=u[e]|n.charCodeAt(c)<<i,c++;return i=c%4*8,u[e=(c-c%4)/4]=u[e]|128<<i,u[o-2]=t<<3,u[o-1]=t>>>29,u}(n),p=1732584193,m=4023233417,s=2562383102,v=271733878,e=0;e<h.length;e+=16)c=p,d=m,l=s,f=v,p=r(p,m,s,v,h[e+0],7,3614090360),v=r(v,p,m,s,h[e+1],12,3905402710),s=r(s,v,p,m,h[e+2],17,606105819),m=r(m,s,v,p,h[e+3],22,3250441966),p=r(p,m,s,v,h[e+4],7,4118548399),v=r(v,p,m,s,h[e+5],12,1200080426),s=r(s,v,p,m,h[e+6],17,2821735955),m=r(m,s,v,p,h[e+7],22,4249261313),p=r(p,m,s,v,h[e+8],7,1770035416),v=r(v,p,m,s,h[e+9],12,2336552879),s=r(s,v,p,m,h[e+10],17,4294925233),m=r(m,s,v,p,h[e+11],22,2304563134),p=r(p,m,s,v,h[e+12],7,1804603682),v=r(v,p,m,s,h[e+13],12,4254626195),s=r(s,v,p,m,h[e+14],17,2792965006),p=o(p,m=r(m,s,v,p,h[e+15],22,1236535329),s,v,h[e+1],5,4129170786),v=o(v,p,m,s,h[e+6],9,3225465664),s=o(s,v,p,m,h[e+11],14,643717713),m=o(m,s,v,p,h[e+0],20,3921069994),p=o(p,m,s,v,h[e+5],5,3593408605),v=o(v,p,m,s,h[e+10],9,38016083),s=o(s,v,p,m,h[e+15],14,3634488961),m=o(m,s,v,p,h[e+4],20,3889429448),p=o(p,m,s,v,h[e+9],5,568446438),v=o(v,p,m,s,h[e+14],9,3275163606),s=o(s,v,p,m,h[e+3],14,4107603335),m=o(m,s,v,p,h[e+8],20,1163531501),p=o(p,m,s,v,h[e+13],5,2850285829),v=o(v,p,m,s,h[e+2],9,4243563512),s=o(s,v,p,m,h[e+7],14,1735328473),p=u(p,m=o(m,s,v,p,h[e+12],20,2368359562),s,v,h[e+5],4,4294588738),v=u(v,p,m,s,h[e+8],11,2272392833),s=u(s,v,p,m,h[e+11],16,1839030562),m=u(m,s,v,p,h[e+14],23,4259657740),p=u(p,m,s,v,h[e+1],4,2763975236),v=u(v,p,m,s,h[e+4],11,1272893353),s=u(s,v,p,m,h[e+7],16,4139469664),m=u(m,s,v,p,h[e+10],23,3200236656),p=u(p,m,s,v,h[e+13],4,681279174),v=u(v,p,m,s,h[e+0],11,3936430074),s=u(s,v,p,m,h[e+3],16,3572445317),m=u(m,s,v,p,h[e+6],23,76029189),p=u(p,m,s,v,h[e+9],4,3654602809),v=u(v,p,m,s,h[e+12],11,3873151461),s=u(s,v,p,m,h[e+15],16,530742520),p=i(p,m=u(m,s,v,p,h[e+2],23,3299628645),s,v,h[e+0],6,4096336452),v=i(v,p,m,s,h[e+7],10,1126891415),s=i(s,v,p,m,h[e+14],15,2878612391),m=i(m,s,v,p,h[e+5],21,4237533241),p=i(p,m,s,v,h[e+12],6,1700485571),v=i(v,p,m,s,h[e+3],10,2399980690),s=i(s,v,p,m,h[e+10],15,4293915773),m=i(m,s,v,p,h[e+1],21,2240044497),p=i(p,m,s,v,h[e+8],6,1873313359),v=i(v,p,m,s,h[e+15],10,4264355552),s=i(s,v,p,m,h[e+6],15,2734768916),m=i(m,s,v,p,h[e+13],21,1309151649),p=i(p,m,s,v,h[e+4],6,4149444226),v=i(v,p,m,s,h[e+11],10,3174756917),s=i(s,v,p,m,h[e+2],15,718787259),m=i(m,s,v,p,h[e+9],21,3951481745),p=t(p,c),m=t(m,d),s=t(s,l),v=t(v,f);return a(p)+a(m)+a(s)+a(v)}},483:(n,e)=>{e.__esModule=!0,e.decode=e.encode=void 0;var t={a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."," ":"  "};e.encode=function(n){return n.toLowerCase().split("").map((function(n){return t[n]||n})).join(" ")},e.decode=function(n){var e=function(n){for(var e={},t=0,r=Object.keys(n);t<r.length;t++){var o=r[t];e[n[o]]=o}return e}(t);return n.toLowerCase().split("  ").map((function(n){return n.split(" ").map((function(n){return e[n]||n}))})).join(" ")}},138:function(n,e,t){var r=this&&this.__spreadArray||function(n,e,t){if(t||2===arguments.length)for(var r,o=0,u=e.length;o<u;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))};e.__esModule=!0;var o=document.getElementById("user-input"),u=document.getElementById("output"),i=document.getElementById("key"),c=document.getElementById("key-main"),a=document.getElementById("cipher-select"),d=document.getElementById("mode-select"),l=[{name:"Зашифровать",changeOutput:function(){var n;n=g.inputForEncode&&g.inputForEncode()||[];var e=g.encode;null!==u&&null!==o&&(n=n||[],u.innerText=e.apply(void 0,r([o.value],n,!1)))}},{name:"Расшифровать",changeOutput:function(){if(g){var n=(g.inputForDecode||g.inputForEncode||function(){return[]})(),e=g.decode;null!==u&&e&&(u.innerText=e.apply(void 0,r([o.value],n,!1)))}}}],f=l[0],p='<div class="key">\n<label for="key">Ваш пароль, пожалуйста:</label>\n<input\noninput="changeOutput()"\nvalue="0"\ntype="number"\nid="key" class="text-input">\n</div>',m=t(270),s=t(244),v=t(483),h=[{name:"The Caesar",encode:m.encode,decode:m.decode,keyHTML:p,inputForEncode:function(){return[parseInt(null==i?void 0:i.value)||0]}},{name:"The Morse",encode:v.encode,decode:v.decode,keyHTML:"",inputForEncode:function(){return[]},inputForDecode:function(){}},{name:"MD5",encode:s.md5,keyHTML:""},{name:"For Tests",encode:function(n){return n},decode:function(n){return n},keyHTML:""}],g=h[0];function y(){f.changeOutput()}d.addEventListener("change",(function(){var n,e;null!==d&&(n=d.value,e=l.filter((function(e){return e.name===n}))[0],f=e)})),a.addEventListener("change",(function(){var n,e,t;n=null==a?void 0:a.value,e=h.filter((function(e){return n===e.name}))[0],g=e,t=e,null!==c&&(""===t.keyHTML?c.innerHTML="":c.innerHTML=t.keyHTML||p),y()})),o.addEventListener("change",y),o.addEventListener("input",y),i.addEventListener("input",y),a.innerHTML=h.map((function(n){return"<option>".concat(n.name,"</option>")})).join("\n"),null!==d&&(d.innerHTML=l.map((function(n){return"<option>".concat(n.name,"</option>")})).join("\n"))}},e={};!function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r].call(u.exports,u,u.exports,t),u.exports}(138)})();