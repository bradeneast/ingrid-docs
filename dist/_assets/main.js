(()=>{class w{constructor({onload:d=null,selector:h,cacheLimit:u,transitioningAttribute:k,preserveScroll:F=!1,preserveAttributes:p=!1}={}){h=h||`a[href^='${window.location.origin}']:not([data-no-schwifty]), a[href^='/']:not([data-no-schwifty])`,u=u||85,k=k||"data-schwifty";let v=p===!0;typeof p!="object"&&(p={documentElement:v,head:v,body:v});let l="schwifty-preload",m='link[rel="stylesheet"]',g=document,n=g.documentElement,q="innerHTML",i=new Map(),G=new IntersectionObserver((a,b)=>a.forEach(o=>{let s=o.isIntersecting,t=o.target.href;if(!s&&s!=void 0)return;i.size>=u&&i.delete(i.keys()[0]),i.get(t)?b.unobserve(o.target):I(t)}),{threshold:.5}),x=(a,b=g)=>b.querySelector(a),r=(a,b=g)=>b.querySelectorAll(a),H=a=>a.target.closest(h)||{},y=()=>r(h).forEach(a=>G.observe(a)),j=(a,b=window)=>b.dispatchEvent(new Event(a)),z=a=>a.replace(/m?s/gi,""),A=()=>{let a=getComputedStyle(n);return(z(a.transitionDelay)+z(a.transitionDuration))*1000},I=a=>{if(!a)return;let b=new XMLHttpRequest();b.onreadystatechange=function(){this.status==200&&i.set(a,b.responseXML)},b.open("GET",a,!0),b.responseType="document",b.send()},B=a=>{let b=i.get(a);if(!b){location=a;return}history.replaceState(null,null,a),r(`${m}:not(.${l})`).forEach(c=>{let e=c.href.replace(location.origin,""),f=x(`${m}.${l}[href="${e}"]`),C=x(`${m}[href="${e}"]`,b);C&&!f&&(c.classList.add(l),n.append(c)),!C&&f&&f.remove()});let o=`${m}:not(.${l})`,s=`${m}.${l}`,t=r(o,b),J=r(s);for(let c of J)Array.from(t).some(e=>e.href==c.href)||c.remove();["body","head","documentElement"].forEach(c=>{if(p[c])return;let e=g[c];for(let f of e.attributes)e.removeAttribute(f.name);for(let f of b[c].attributes)e.setAttribute(f.name,f.value)}),n.setAttribute(k,"out"),j("pagehide"),j("unload"),setTimeout(()=>{g.body[q]=b.body[q],g.head[q]=b.head[q],n.setAttribute(k,"in"),j("DOMContentLoaded",g),F||scrollTo(0,0),d&&(d.length?d.map(c=>c()):d()),y(),setTimeout(()=>n.removeAttribute(k),A()),j("load"),j("pageshow")},A())};y(),addEventListener("popstate",()=>B(location.href)),addEventListener("click",a=>{let b=H(a).href;b&&(a.preventDefault(),j("beforeunload"),history.pushState(null,null,location.href),B(b))})}}let D=(d,h=document)=>h.querySelectorAll(d);function E(){D("nav a").forEach(d=>{d.href==location.href&&d.setAttribute("aria-current",!0)})}new w({onload:E});})();
