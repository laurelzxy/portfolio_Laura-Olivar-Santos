// Navegação entre as seções e páginas de detalhes dos projetos.

(function(){var vs=['inicio','sobre','projetos'],views=document.querySelectorAll('.view'),ds=document.querySelectorAll('.detail'),ct=document.getElementById('contato'),nav=document.querySelectorAll('[data-v]');
function route(){var id=location.hash.slice(1),det=null;ds.forEach(function(d){var on=d.id===id;d.classList.toggle('on',on);if(on)det=d});
var v=vs.indexOf(id)>-1?id:'inicio';if(det)v='projetos';
views.forEach(function(x){x.classList.toggle('on',!det&&x.id===v)});
nav.forEach(function(a){if(a.dataset.v===v)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
ct.style.display=det?'none':'';window.scrollTo(0,0)}
// Pequenos s&iacute;mbolos visuais nas etiquetas de tecnologias e compet&ecirc;ncias.
var techIcons=[[/unity|game development|game dev/i,'◈'],[/c#|c\+\+|python|programa/i,'</>'],[/ui\/ux|design|interface/i,'▦'],[/pixel art|aseprite/i,'◉'],[/maya|3d|modelos 3d/i,'◇'],[/vr|realidade aumentada|\bar\b|mobile/i,'◎'],[/gdd|documenta/i,'▤']];
document.querySelectorAll('.tags li').forEach(function(li){var label=li.textContent.trim();if(li.querySelector('.tech-icon'))return;var match=techIcons.find(function(pair){return pair[0].test(label)});if(match){var icon=document.createElement('span');icon.className='tech-icon';icon.setAttribute('aria-hidden','true');icon.textContent=match[1];li.prepend(icon)}});
addEventListener('hashchange',route);route()})();
