(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();function h(c){const o=[];return{getTasks:()=>o,toggleTask:i=>{for(let s=0;s<o.length;s++)if(o[s].getId()==i){o[s].toggleCompletion();break}},addTask:i=>{const s=o.length;o.push(Object.assign({getId:()=>s},i))},sortTasks:()=>{o.sort((i,s)=>{const r={high:0,mid:1,low:2};return i.getCompletion()&&!s.getCompletion()?1:!i.getCompletion()&&s.getCompletion()?-1:r[i.getPriority()]-r[s.getPriority()]})},removeTask:i=>{for(let s=0;s<o.length;s++)o[s].getId()==i&&o.splice(s,1)}}}function L(c){const o=t=>{let e=document.createElement("div");e.classList.add("task");let n=document.createElement("div");n.classList.add("task-top-section");let i=document.createElement("div");i.classList.add("task-checkbox-box");let s=document.createElement("input");s.setAttribute("type","checkbox"),s.classList.add("task-checkbox"),s.checked=t.getCompletion();let r=document.createElement("div");r.classList.add("task-title-box");let l=document.createElement("h1");l.classList.add("task-title"),l.textContent=t.getTitle(),t.getCompletion()&&(e.classList.add("greyed-out"),e.classList.add("task-completed"),l.classList.add("scratched")),s.addEventListener("click",function(){c.toggleTask(t.getId()),e.classList.toggle("greyed-out"),e.classList.toggle("task-completed"),l.classList.toggle("scratched"),d()}),i.append(s),r.append(l),n.append(t.getId()),n.append(i),n.append(r),e.append(n);let a=document.createElement("div");if(a.classList.add("task-details-section"),t.getDescription()!=""){let p=document.createElement("div");p.classList.add("task-description-box");let k=document.createElement("p");k.textContent=t.getDescription(),p.append(k),a.append(p)}let u=document.createElement("div");u.classList.add("task-priority-box","greyed-out");let g=document.createElement("p");g.textContent=`This is a -${t.getPriority()}- priority task`,u.append(g),a.append(u);let m=document.createElement("div");m.classList.add("task-due-date-box","greyed-out");let f=document.createElement("p");switch(f.textContent=`This task is to be finished by ${t.getDueDate().getMonth()+1}/${t.getDueDate().getDate()}/${t.getDueDate().getFullYear()}`,m.append(f),a.append(m),a.classList.add("hidden"),e.append(a),e.addEventListener("click",function(p){p.target!==s&&(a.classList.toggle("hidden"),e.classList.toggle("task-expanded"))}),t.getPriority()){case"low":e.classList.add("low-priority");break;case"mid":e.classList.add("mid-priority");break;case"high":e.classList.add("high-priority");break}return e},d=()=>{const t=document.querySelector(".tasks-container");t.innerHTML="",c.sortTasks(),c.getTasks().forEach(e=>t.append(o(e)))};return{updateTasks:d}}function v(c,o,d,t=""){if(c==""||o==""||!(d instanceof Date)||isNaN(d))throw new Error("Invalid task paramaters");let e=!1;return{getTitle:()=>c,getDescription:()=>t,getPriority:()=>o,getDueDate:()=>d,getCompletion:()=>e,toggleCompletion:()=>e==!0?e=!1:e=!0}}let y=h();(function(){const c=document.getElementById("add-task-button"),o=document.getElementById("submit-task-button"),d=document.querySelector(".modal"),t=document.querySelector(".overlay"),e=document.getElementById("close-modal-button");function n(){d.classList.remove("hidden"),t.classList.remove("hidden")}function i(){d.classList.add("hidden"),t.classList.add("hidden")}c.addEventListener("click",n),o.addEventListener("click",i),e.addEventListener("click",i),t.addEventListener("click",i),o.addEventListener("click",function(){const s=document.getElementById("title-input").value,r=document.getElementById("description-input").value,l=document.getElementById("priority-input").value,a=document.getElementById("due-date-input").value;let u=v(s,l,new Date(a),r);y.addTask(u),L(y).updateTasks()})})();