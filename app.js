'use strict';
const $ = id => document.getElementById(id);
const state = { records: [], cities: [], geo: null, page: 0, size: 18, zoom: 1, x: 0, y: 0 };
const NS = 'http://www.w3.org/2000/svg';
function element(tag, attrs = {}) { const e = document.createElementNS(NS, tag); for (const [k,v] of Object.entries(attrs)) e.setAttribute(k,v); return e; }
function safeURL(value) { try { const u = new URL(value); return ['https:','http:'].includes(u.protocol) ? u.href : ''; } catch { return ''; } }
function link(label, href) { const a = document.createElement('a'); a.textContent = label; a.href = safeURL(href); a.target = '_blank'; a.rel = 'noopener noreferrer'; return a; }
function filtered() { const q = $('search').value.trim().toLocaleLowerCase(); return state.records.filter(r => (!$('city').value || r.city === $('city').value) && (!$('source').value || r.source === $('source').value) && (!q || [r.name,r.industry,r.product_evidence].join(' ').toLocaleLowerCase().includes(q))); }
function render() {
  const rows = filtered(), pages = Math.max(1,Math.ceil(rows.length/state.size)); state.page = Math.max(0,Math.min(state.page,pages-1));
  $('result-count').textContent = `${rows.length.toLocaleString()} records · ${$('city').value || 'All Bay Area'}`;
  $('page').textContent = `${state.page+1} / ${pages}`; $('previous').disabled = state.page === 0; $('next').disabled = state.page+1 >= pages;
  const grid = $('companies'); grid.replaceChildren();
  for (const r of rows.slice(state.page*state.size,(state.page+1)*state.size)) {
    const card = document.createElement('article'); card.className = 'company';
    const city = document.createElement('span'); city.className = 'city'; city.textContent = r.city;
    const title = document.createElement('h3'); title.append(link(r.name,r.linkedin_url || r.website || r.source_url));
    const desc = document.createElement('p'); desc.textContent = r.industry || 'AI-related source classification'; desc.title = desc.textContent;
    const source = document.createElement('div'); source.className = 'source'; const sourceName = document.createElement('span'); sourceName.textContent = r.source; source.append(sourceName,link('View source ↗',r.source_url));
    card.append(city,title,desc);
    if (r.product_evidence) { const proof = document.createElement('div'); proof.className = 'product'; proof.append(link('AI product: '+r.product_evidence,r.product_evidence_url)); card.append(proof); }
    card.append(source); grid.append(card);
  }
  if (!rows.length) { const empty = document.createElement('p'); empty.className = 'empty'; empty.textContent = 'No matches. Try another search or clear the filters.'; grid.append(empty); }
  document.querySelectorAll('.dot').forEach(dot => { const chosen = dot.dataset.city === $('city').value; dot.classList.toggle('selected',chosen); dot.setAttribute('aria-pressed',chosen); });
}
const mercator = ([lng,lat]) => [lng*Math.PI/180,-Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))];
function drawMap() {
  if (!state.geo) return;
  const host = $('map'), w = host.clientWidth, h = host.clientHeight;
  const coords = state.cities.map(c => mercator(c.xy));
  const xs=coords.map(p=>p[0]),ys=coords.map(p=>p[1]), minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const scale = Math.min((w-70)/(maxX-minX),(h-60)/(maxY-minY));
  const project = xy => { const p=mercator(xy); return [(p[0]-(minX+maxX)/2)*scale+w/2,(p[1]-(minY+maxY)/2)*scale+h/2]; };
  const svg=element('svg',{viewBox:`0 0 ${w} ${h}`,'aria-label':'Bay Area city map. Select a city bubble to filter companies.'});
  const group=element('g'); svg.append(group);
  function path(rings) { return rings.map(r => r.map((xy,i)=>`${i?'L':'M'}${project(xy).join(',')}`).join(' ')+' Z').join(' '); }
  for (const f of state.geo.features) { const polys=f.geometry.type==='MultiPolygon'?f.geometry.coordinates:[f.geometry.coordinates]; group.append(element('path',{d:polys.map(path).join(' '),class:'county'})); }
  for (const c of [...state.cities].sort((a,b)=>b.count-a.count)) {
    const [cx,cy]=project(c.xy),r=Math.min(27,4+Math.sqrt(c.count)*.9);
    const dot=element('circle',{cx,cy,r,class:'dot',tabindex:0,role:'button','aria-label':`${c.name}: ${c.count} records`,'data-city':c.name,'aria-pressed':c.name===$('city').value});
    const title=element('title'); title.textContent=`${c.name}: ${c.count.toLocaleString()} records`; dot.append(title);
    function choose(){ $('city').value=c.name;state.page=0;render(); }
    dot.addEventListener('click',e=>{e.stopPropagation();choose();}); dot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose();}});group.append(dot);
    if (['San Francisco','San Jose','Oakland','Palo Alto','Santa Rosa','Napa','Livermore'].includes(c.name)) {const label=element('text',{x:cx,y:cy-r-5,'text-anchor':'middle'});label.textContent=c.name;group.append(label);}
  }
  const transform=()=>group.setAttribute('transform',`translate(${w/2+state.x},${h/2+state.y}) scale(${state.zoom}) translate(${-w/2},${-h/2})`);
  state.transform=transform;transform();
  let drag=null,moved=false;
  svg.addEventListener('pointerdown',e=>{if(e.target.closest('.dot'))return;drag=[e.clientX,e.clientY,state.x,state.y];moved=false;svg.setPointerCapture(e.pointerId);});
  svg.addEventListener('pointermove',e=>{if(drag){state.x=drag[2]+e.clientX-drag[0];state.y=drag[3]+e.clientY-drag[1];moved=true;transform();}});
  svg.addEventListener('pointerup',()=>{drag=null;}); svg.addEventListener('pointercancel',()=>{drag=null;});
  svg.addEventListener('wheel',e=>{e.preventDefault();state.zoom=Math.max(1,Math.min(8,state.zoom*Math.exp(-e.deltaY*.001)));transform();},{passive:false});
  host.replaceChildren(svg);render();
}
for (const id of ['search','city','source']) $(id).addEventListener(id==='search'?'input':'change',()=>{state.page=0;render();});
$('clear').onclick=()=>{$('search').value='';$('city').value='';$('source').value='';state.page=0;render();};
$('previous').onclick=()=>{state.page--;render();};$('next').onclick=()=>{state.page++;render();};
$('zoom-in').onclick=()=>{state.zoom=Math.min(8,state.zoom*1.5);state.transform?.();};$('zoom-out').onclick=()=>{state.zoom=Math.max(1,state.zoom/1.5);state.transform?.();};
$('reset').onclick=()=>{state.zoom=1;state.x=state.y=0;state.transform?.();};
async function start(){
  try {
    const responses=await Promise.all(['data/companies.json','data/bay-area.geojson'].map(p=>fetch(p)));if(responses.some(r=>!r.ok))throw Error('Data unavailable');
    [state.records,state.geo]=await Promise.all(responses.map(r=>r.json()));state.records.sort((a,b)=>a.name.localeCompare(b.name));
    const cities=new Map();for(const r of state.records){if(!cities.has(r.city))cities.set(r.city,{name:r.city,xy:[+r.longitude,+r.latitude],count:0});cities.get(r.city).count++;}
    state.cities=[...cities.values()].sort((a,b)=>a.name.localeCompare(b.name));
    for(const c of state.cities){const o=document.createElement('option');o.value=c.name;o.textContent=`${c.name} (${c.count.toLocaleString()})`;$('city').append(o);}
    for(const source of [...new Set(state.records.map(r=>r.source))].sort()){const o=document.createElement('option');o.value=source;o.textContent=source;$('source').append(o);}
    new ResizeObserver(drawMap).observe($('map'));drawMap();
  }catch(e){$('map').textContent='The collection could not load. Serve this folder over HTTP; see README.md.';$('result-count').textContent='Data unavailable';console.error(e);}
}
start();
