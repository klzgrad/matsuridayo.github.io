System.register(["./index-legacy-5d36120b.js"],(function(e,n){"use strict";var t,o,a,r,l,i,s,c,u,d,p,g,m,h,v,f;return{setters:[function(e){t=e._,o=e.o,a=e.c,r=e.a,l=e.w,i=e.t,s=e.b,c=e.n,u=e.p,d=e.d,p=e.e,g=e.r,m=e.F,h=e.f,v=e.g,f=e.h}],execute:function(){var n=document.createElement("style");n.textContent=".border[data-v-ceb5ea66]{word-wrap:break-word}\n",document.head.appendChild(n);var y={props:["active","now_product"],methods:{close:function(){this.$emit("close")}}},b=function(e){return u("data-v-ceb5ea66"),e=e(),d(),e},w=[b((function(){return r("i",null,"close",-1)}))],_=b((function(){return r("article",{class:"border"},[r("h5",null,"If you think our work is great please donate"),r("br"),p(" USDT TRC20"),r("br"),r("article",{class:"border"},"TRhnA7SXE5Sap5gSG3ijxRmdYFiD4KRhPs")],-1)})),D={class:"border"},k=b((function(){return r("h5",null,"Download",-1)})),S={key:0,class:"center-align div-dl"},x=["href"],C=[b((function(){return r("i",null,"download",-1)})),b((function(){return r("span",null,"GitHub Release",-1)}))],M={key:1,class:"center-align div-dl"},P=["href"],R=[b((function(){return r("i",null,"download",-1)})),b((function(){return r("span",null,"Google Play",-1)}))],q={key:2,class:"center-align div-dl"},A=["href"],F=[b((function(){return r("i",null,"code",-1)})),b((function(){return r("span",null,"Source code",-1)}))],G=t(y,[["render",function(e,n,t,u,d,p){return o(),a("dialog",{class:c({active:t.active})},[r("button",{class:"border",onClick:n[0]||(n[0]=l((function(){return p.close&&p.close.apply(p,arguments)}),["self"]))},w),r("h5",null,"Download "+i(t.now_product.name),1),_,r("article",D,[k,t.now_product.github?(o(),a("div",S,[r("a",{href:t.now_product.github,class:"round button"},C,8,x)])):s("",!0),t.now_product.play?(o(),a("div",M,[r("a",{href:t.now_product.play,class:"round button"},R,8,P)])):s("",!0),t.now_product.github?(o(),a("div",q,[r("a",{href:t.now_product.github.replaceAll("/releases",""),class:"round button"},F,8,A)])):s("",!0)])],2)}],["__scopeId","data-v-ceb5ea66"]]),T={components:{DownloadDrop:G},data:function(){return{active:!1,now_product:{},all_product:[{name:"NekoBoxForAndroid",icon:"android",github:"https://github.com/MatsuriDayo/NekoBoxForAndroid/releases",play:"https://play.google.com/store/apps/details?id=moe.nb4a"},{name:"Matsuri",icon:"android",github:"https://github.com/MatsuriDayo/Matsuri/releases",play:"https://play.google.com/store/apps/details?id=moe.matsuri.lite"},{name:"nekoray",icon:"monitor",github:"https://github.coom/MatsuriDayo/nekoray/releases"}]}},methods:{toggleDownDrop:function(e){var n=this;this.now_product={},null==e?(document.querySelector("main").style.removeProperty("display"),document.querySelector("nav").style.removeProperty("display"),this.active=!1):(document.querySelector("main").style.setProperty("display","none"),document.querySelector("nav").style.setProperty("display","none"),this.active=!0,this.all_product.forEach((function(t){t.name==e&&(n.now_product=t)})))}}},j={class:"responsive",id:"main"},E=r("article",{class:"top-round large-padding large-margin"},[r("div",{class:"row"},[r("img",{class:"circle large",src:"https://matsuridayo.github.io/assets/images/matsuri1.jpg"}),r("div",{class:"max"},[r("h5",null,"MatsuriDayo"),r("p",null,"Some software")])])],-1),B={class:"large-padding large-margin"},H=r("div",{class:"row"},[r("div",{class:"max"},[r("p",null,[r("i",null,"download"),p(" Download Latest release")])])],-1),I=["onClick"],N=f('<article class="bottom-round large-padding large-margin"><div class="row"><div class="max"><p><i>help</i> Getting Help</p></div></div><div class="center-align div-dl"><a href="./index_docs/" class="round button"><i>article</i><span>帮助文档 / Documents</span></a></div><div class="center-align div-dl"><a href="https://t.me/Matsuridayo" class="round button"><i>notifications</i><span>Telegram Channel</span></a></div><div class="center-align div-dl"><a href="https://matsuricom.github.io" class="round button"><i>flight</i><span>推广服务</span></a></div></article>',1);e("default",t(T,[["render",function(e,n,t,l,s,c){var u=g("DownloadDrop");return o(),a(m,null,[r("main",j,[E,r("article",B,[H,(o(!0),a(m,null,h(s.all_product,(function(e){return o(),a("div",{class:"center-align div-dl",key:e},[r("button",{class:"round",onClick:function(n){return c.toggleDownDrop(e.name)}},[r("i",null,i(e.icon),1),r("span",null,i(e.name),1)],8,I)])})),128))]),N]),v(u,{now_product:s.now_product,active:s.active,onClose:n[0]||(n[0]=function(e){return c.toggleDownDrop()})},null,8,["now_product","active"])],64)}]]))}}}));
