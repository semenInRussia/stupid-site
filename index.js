"use strict";(()=>{var re="qwertyuiopasdfghjklzxcvbnm1234567890 QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?/;'[].,!@#$%^&*()_+\\=-|`\u0439\u0446\u0443\u043A\u0435\u043D\u0433\u0448\u0449\u0437\u0445\u044A\u0444\u044B\u0432\u0430\u043F\u0440\u043E\u043B\u0434\u0436\u044D\u044F\u0447\u0441\u043C\u0438\u0442\u044C\u0431\u044E\u0419\u0426\u0423\u041A\u0415\u041D\u0413\u0428\u0429\u0417\u0425\u042A\u0424\u042B\u0412\u0410\u041F\u0420\u041E\u041B\u0414\u0416\u042D\u042F\u0427\u0421\u041C\u0418\u0418\u0422\u042C\u2554",R=re.split(""),oe=R.length;function X(i,e){return U(i,-e)}function U(i,e){let n=i.split("").map(c=>R.indexOf(c)).map(c=>c+e).map(Math.abs).map(c=>c%oe).map(c=>R[c]);return ue(n)}function ue(i){return i.join("")}function Y(i){let e=Array(),n,c,d,s,a,r,t,o,u,S=7,C=12,T=17,M=22,L=5,E=9,H=14,W=20,v=4,O=11,K=16,A=23,k=6,w=10,I=15,B=21;for(i=fe(i),e=me(i),r=1732584193,t=4023233417,o=2562383102,u=271733878,n=0;n<e.length;n+=16)c=r,d=t,s=o,a=u,r=m(r,t,o,u,e[n+0],S,3614090360),u=m(u,r,t,o,e[n+1],C,3905402710),o=m(o,u,r,t,e[n+2],T,606105819),t=m(t,o,u,r,e[n+3],M,3250441966),r=m(r,t,o,u,e[n+4],S,4118548399),u=m(u,r,t,o,e[n+5],C,1200080426),o=m(o,u,r,t,e[n+6],T,2821735955),t=m(t,o,u,r,e[n+7],M,4249261313),r=m(r,t,o,u,e[n+8],S,1770035416),u=m(u,r,t,o,e[n+9],C,2336552879),o=m(o,u,r,t,e[n+10],T,4294925233),t=m(t,o,u,r,e[n+11],M,2304563134),r=m(r,t,o,u,e[n+12],S,1804603682),u=m(u,r,t,o,e[n+13],C,4254626195),o=m(o,u,r,t,e[n+14],T,2792965006),t=m(t,o,u,r,e[n+15],M,1236535329),r=l(r,t,o,u,e[n+1],L,4129170786),u=l(u,r,t,o,e[n+6],E,3225465664),o=l(o,u,r,t,e[n+11],H,643717713),t=l(t,o,u,r,e[n+0],W,3921069994),r=l(r,t,o,u,e[n+5],L,3593408605),u=l(u,r,t,o,e[n+10],E,38016083),o=l(o,u,r,t,e[n+15],H,3634488961),t=l(t,o,u,r,e[n+4],W,3889429448),r=l(r,t,o,u,e[n+9],L,568446438),u=l(u,r,t,o,e[n+14],E,3275163606),o=l(o,u,r,t,e[n+3],H,4107603335),t=l(t,o,u,r,e[n+8],W,1163531501),r=l(r,t,o,u,e[n+13],L,2850285829),u=l(u,r,t,o,e[n+2],E,4243563512),o=l(o,u,r,t,e[n+7],H,1735328473),t=l(t,o,u,r,e[n+12],W,2368359562),r=b(r,t,o,u,e[n+5],v,4294588738),u=b(u,r,t,o,e[n+8],O,2272392833),o=b(o,u,r,t,e[n+11],K,1839030562),t=b(t,o,u,r,e[n+14],A,4259657740),r=b(r,t,o,u,e[n+1],v,2763975236),u=b(u,r,t,o,e[n+4],O,1272893353),o=b(o,u,r,t,e[n+7],K,4139469664),t=b(t,o,u,r,e[n+10],A,3200236656),r=b(r,t,o,u,e[n+13],v,681279174),u=b(u,r,t,o,e[n+0],O,3936430074),o=b(o,u,r,t,e[n+3],K,3572445317),t=b(t,o,u,r,e[n+6],A,76029189),r=b(r,t,o,u,e[n+9],v,3654602809),u=b(u,r,t,o,e[n+12],O,3873151461),o=b(o,u,r,t,e[n+15],K,530742520),t=b(t,o,u,r,e[n+2],A,3299628645),r=x(r,t,o,u,e[n+0],k,4096336452),u=x(u,r,t,o,e[n+7],w,1126891415),o=x(o,u,r,t,e[n+14],I,2878612391),t=x(t,o,u,r,e[n+5],B,4237533241),r=x(r,t,o,u,e[n+12],k,1700485571),u=x(u,r,t,o,e[n+3],w,2399980690),o=x(o,u,r,t,e[n+10],I,4293915773),t=x(t,o,u,r,e[n+1],B,2240044497),r=x(r,t,o,u,e[n+8],k,1873313359),u=x(u,r,t,o,e[n+15],w,4264355552),o=x(o,u,r,t,e[n+6],I,2734768916),t=x(t,o,u,r,e[n+13],B,1309151649),r=x(r,t,o,u,e[n+4],k,4149444226),u=x(u,r,t,o,e[n+11],w,3174756917),o=x(o,u,r,t,e[n+2],I,718787259),t=x(t,o,u,r,e[n+9],B,3951481745),r=f(r,c),t=f(t,d),o=f(o,s),u=f(u,a);return D(r)+D(t)+D(o)+D(u)}function f(i,e){let n,c,d,s,a;return d=i&2147483648,s=e&2147483648,n=i&1073741824,c=e&1073741824,a=(i&1073741823)+(e&1073741823),n&c?a^2147483648^d^s:n|c?a&1073741824?a^3221225472^d^s:a^1073741824^d^s:a^d^s}function ce(i,e,n){return i&e|~i&n}function de(i,e,n){return i&n|e&~n}function ae(i,e,n){return i^e^n}function se(i,e,n){return e^(i|~n)}function m(i,e,n,c,d,s,a){return i=f(i,f(f(ce(e,n,c),d),a)),f(_(i,s),e)}function l(i,e,n,c,d,s,a){return i=f(i,f(f(de(e,n,c),d),a)),f(_(i,s),e)}function b(i,e,n,c,d,s,a){return i=f(i,f(f(ae(e,n,c),d),a)),f(_(i,s),e)}function x(i,e,n,c,d,s,a){return i=f(i,f(f(se(e,n,c),d),a)),f(_(i,s),e)}function _(i,e){return i<<e|i>>>32-e}function fe(i){let e="";for(let n=0;n<i.length;n++){let c=i.charCodeAt(n);c<128?e+=String.fromCharCode(c):c>127&&c<2048?(e+=String.fromCharCode(c>>6|192),e+=String.fromCharCode(c&63|128)):(e+=String.fromCharCode(c>>12|224),e+=String.fromCharCode(c>>6&63|128),e+=String.fromCharCode(c&63|128))}return e}function D(i){let e="",n="",c,d;for(d=0;d<=3;d++)c=i>>>d*8&255,n=`0${c.toString(16)}`,e=e+n.substr(n.length-2,2);return e}function me(i){let e,n=i.length,c=n+8,s=((c-c%64)/64+1)*16,a=Array(s-1),r=0,t=0;for(;t<n;)e=(t-t%4)/4,r=t%4*8,a[e]=a[e]|i.charCodeAt(t)<<r,t++;return e=(t-t%4)/4,r=t%4*8,a[e]=a[e]|128<<r,a[s-2]=n<<3,a[s-1]=n>>>29,a}var Z={a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."," ":"  "};function ee(i){let e=n=>Z[n]||n;return i.toLowerCase().split("").map(e).join(" ")}function ne(i){let e=le(Z),n=d=>d.split(" ").map(s=>e[s]||s);return i.toLowerCase().split("  ").map(n).join(" ")}function le(i){let e={},n=Object.keys(i);for(let c of n){let d=i[c];e[d]=c}return e}var p=document.getElementById("user-input"),N=document.getElementById("output"),j=document.getElementById("key"),q=document.getElementById("key-main"),g=document.getElementById("cipher-select"),h=document.getElementById("mode-select"),J=[{name:"\u0417\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C",changeOutput:Ee},{name:"\u0420\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C",changeOutput:He}],te=J[0],F=class{constructor(){this.canDecode=!1}isCanDecode(){return this.canDecode}encodeString(e){return this.encodeStringWithKeys(e,this.getKeys())}encodeStringWithKeys(e,n){throw new Error("<cipher>.encodeStringWithKeys() isn't implemented")}getKeys(){throw new Error("<cipher>.encodeStringWithKeys() isn't implemented")}},G=class extends F{constructor(){super(...arguments);this.canDecode=!0}decodeString(n){return this.decodeStringWithKeys(n,this.getKeys())}decodeStringWithKeys(n,c){throw new Error("<cipher>.decodeStringWithKeys() isn't implemented")}},xe=`<div class="key">
<label for="key">\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430:</label>
<input oninput="changeOutput()" value="0" type="number"
id="key" class="text-input">
</div>`,P=class extends G{constructor(){super(...arguments);this.name="The Caesar";this.keyHTML=xe;this.encodeStringWithKeys=U;this.decodeStringWithKeys=X;this.getKeys=()=>parseInt(j==null?void 0:j.value)||0}},V=class extends G{constructor(){super(...arguments);this.name="The Morse";this.encodeString=ee;this.decodeString=ne}},z=class extends F{constructor(){super(...arguments);this.name="MD5";this.encodeString=Y}},Q=[new P,new V,new z],y=Q[0];function ge(){pe(g==null?void 0:g.value)}function pe(i){return he(Q.filter(e=>i===e.name)[0])}function he(i){return y=i,ye(i),$(),y}function ye(i){if(q)return q.innerHTML=i.keyHTML||"",q.innerHTML}function Se(){g.innerHTML=Q.map(i=>`<option>${i.name}</option>`).join(`
`)}function Ce(){h!==null&&(h.innerHTML=J.map(i=>`<option>${i.name}</option>`).join(`
`))}function Te(){h!==null&&Me(h.value)}function Me(i){Le(J.filter(e=>e.name===i)[0])}function Le(i){te=i}function $(){te.changeOutput()}function Ee(){if(!N||!p)return;let i=p.value;N.innerText=y.encodeString(i)}function He(){N&&y.isCanDecode()&&(N.innerText=y.decodeString(p.value))}h.addEventListener("change",Te);g.addEventListener("change",ge);p.addEventListener("change",$);p.addEventListener("input",$);j.addEventListener("input",$);Se();Ce();})();
//# sourceMappingURL=index.js.map