document.onselectstart=()=>!1;document.ondragstart=()=>!1;document.oncontextmenu=()=>!1;function y(e=window.location.href){const t=e.split("?")[1],n=new URLSearchParams(t),o=Object.fromEntries(n.entries());return Object.keys(o).forEach(r=>{const s=o[r].split(" ");if(s.length===1&&s[0]==="")return o[r]=[];o[r]=s}),o}async function g(e){return await(await fetch(e)).json()}function w(e,t){return e.includes(t)?t===e[e.length-1]?e[0]:e[e.indexOf(t)+1]:console.log(`Can not find ${t} in ${e}`)}function m(e){navigator.clipboard.writeText(e)}function f(e,t=1){e.currentTime=0,e.volume=t,e.play()}function h(e,t=1){e.forEach(n=>f(n,0)),setTimeout(()=>h(e,t),t*6e4)}let c=[];const i=y().colors??[],p=new Audio("/assets/audios/modern-technology-select.wav"),d=document.querySelector("header > p"),l=document.querySelectorAll(".name-value"),C=document.querySelectorAll(".name-value a"),E=document.querySelector(".marketplace"),a=document.querySelector(".marketplace > span"),k=document.querySelector(".cards");window.onload=()=>x();document.body.onmousedown=()=>{h([p]),document.body.onmousedown=""};document.body.onclick=e=>{e.target.classList.contains("pointer")&&(f(p),["name","hex","rgb"].forEach(t=>S(e.target,t)))};document.body.ondblclick=()=>scrollTo(0,0);a.onclick=()=>L();k.onanimationend=()=>document.body.classList.remove("fixed");async function x(){c=await g("https://raw.githubusercontent.com/rayc2045/html-reserved-colors/main/src/data/colors.json"),Object.keys(c[0].url).length>1&&E.classList.remove("none"),i.length&&(v(),c.filter(n=>i.includes(u(n.name))).length&&b())}function b(){d.textContent=d.textContent.replace(` ${c.length} `," ")}function v(){let e=0;l.forEach(t=>{const n=u(t.textContent);i.includes(n)||(e++,t.parentElement.classList.add("none"))}),e===l.length&&l.forEach(t=>t.parentElement.classList.remove("none"))}function S(e,t){if(e.classList.contains(t)){const o=e.parentElement.querySelector(`.${t}-value`).textContent.trim();if(t==="name")return m(u(o));m(o)}}function u(e){return e.toLowerCase().replaceAll(" ","").trim()}function L(){const e=Object.keys(c[0].url),t=a.textContent.trim();a.textContent=w(e,t),C.forEach((n,o)=>n.href=c[o].url[a.textContent.trim()])}
