function u(n=window.location.href){const o=n.split("?")[1],e=new URLSearchParams(o);return Object.fromEntries(e.entries())}function a(n){navigator.clipboard.writeText(n)}function r(n,o=1){n.currentTime=0,n.volume=o,n.play()}function s(n,o=1){n.forEach(e=>r(e,0)),setTimeout(()=>s(n,o),o*6e4)}const i=new Audio("/assets/audios/modern-technology-select.wav"),{colors:m}=u(),d=m.split(","),t=document.querySelectorAll(".name-value");window.onload=()=>f();document.body.onmousedown=()=>{s([i]),document.body.onmousedown=""};document.body.onclick=n=>{n.target.classList.contains("pointer")&&(r(i),["name","hex","rgb"].forEach(o=>p(n.target,o)))};async function f(){h()}function h(){let n=0;t.forEach(o=>{d.includes(l(o.textContent.trim()))||(n++,o.parentElement.classList.add("none"))}),n===t.length&&t.forEach(o=>o.parentElement.classList.remove("none"))}function p(n,o){if(n.classList.contains(o)){const c=n.parentElement.querySelector(`.${o}-value`).textContent.trim();if(o==="name")return a(l(c));a(c)}}function l(n){return n.toLowerCase().replaceAll(" ","")}
