import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const packageRoot = path.join(ROOT, 'node_modules', '@tabler', 'icons');
const outRoot = path.join(ROOT, 'dist-tabler-offline-browser');
const bundleRoot = path.join(outRoot, 'AI编程日志_Tabler_离线图标浏览器_v1.0');

const readJson = (name) => JSON.parse(fs.readFileSync(path.join(packageRoot, name), 'utf8'));
const icons = readJson('icons.json');
const outlineNodes = readJson('tabler-nodes-outline.json');
const filledNodes = readJson('tabler-nodes-filled.json');
const license = fs.readFileSync(path.join(packageRoot, 'LICENSE'), 'utf8');

const legacyMap = {
  folder: 'folder', tool: 'tool', note: 'note', search: 'search', text: 'book-2', me: 'user',
  arrow: 'chevron-right', close: 'x', close2: 'x', lock: 'lock', done: 'check', star: 'star',
  pencil: 'pencil', like: 'thumb-up', info: 'info-circle', imac: 'device-desktop', delete: 'trash',
  time: 'history', setting: 'settings', sending: 'send', 'report-problem': 'alert-triangle',
  refresh: 'refresh', mosaic: 'layout-grid', help: 'help-circle', error: 'alert-circle', plus: 'plus',
  'chevron-left': 'chevron-left', 'chevron-right': 'chevron-right'
};

const usageNotes = {
  folder: '底部导航 · 工具', note: '底部导航 · 日志', search: '底部导航 · 搜索', 'book-2': '底部导航 · 学习', user: '底部导航 · 我的',
  tool: '工具语义', 'chevron-right': '进入 / 向右', x: '关闭', lock: '隐私 / 锁定', check: '完成 / 成功', star: '收藏', pencil: '编辑 / 草稿',
  'thumb-up': '点赞', 'info-circle': '信息', 'device-desktop': '设备 / 桌面', trash: '删除', history: '时间 / 历史', settings: '设置', send: '发送',
  'alert-triangle': '警告 / 举报', refresh: '刷新', 'layout-grid': '网格 / 管理', 'help-circle': '帮助', 'alert-circle': '错误 / 注意', plus: '新增', 'chevron-left': '返回'
};

const aliasesByCanonical = {};
for (const [legacy, canonical] of Object.entries(legacyMap)) {
  (aliasesByCanonical[canonical] ||= []).push(legacy);
}
const programUsed = [...new Set(Object.values(legacyMap))].sort();

const styles = [];
let outlineCount = 0;
let filledCount = 0;
for (const [name, meta] of Object.entries(icons)) {
  if (meta.styles?.outline && outlineNodes[name]) {
    outlineCount += 1;
    styles.push({ name, style: 'outline', category: meta.category || 'Other', tags: meta.tags || [], version: meta.styles.outline.version || '', unicode: meta.styles.outline.unicode || '' });
  }
  if (meta.styles?.filled && filledNodes[name]) {
    filledCount += 1;
    styles.push({ name, style: 'filled', category: meta.category || 'Other', tags: meta.tags || [], version: meta.styles.filled.version || '', unicode: meta.styles.filled.unicode || '' });
  }
}

const totalStyles = outlineCount + filledCount;
const uniqueNames = Object.keys(icons).length;
if (totalStyles !== 6184) throw new Error(`Tabler 3.46.0 style count mismatch: expected 6184, got ${totalStyles}`);
if (outlineCount !== 5130) throw new Error(`Outline count mismatch: expected 5130, got ${outlineCount}`);
if (filledCount !== 1054) throw new Error(`Filled count mismatch: expected 1054, got ${filledCount}`);
for (const name of programUsed) {
  if (!outlineNodes[name]) throw new Error(`Current program icon missing from Tabler outline data: ${name}`);
}

const compact = (value) => JSON.stringify(value).replaceAll('<', '\\u003c').replaceAll('>', '\\u003e').replaceAll('&', '\\u0026');
const embeddedData = {
  version: '3.46.0',
  totalStyles,
  uniqueNames,
  outlineCount,
  filledCount,
  generatedAt: new Date().toISOString(),
  programUsed,
  aliasesByCanonical,
  usageNotes,
  styles
};

const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>AI 编程日志 · Tabler 离线图标浏览器</title>
<style>
:root{--bg:#eef0f3;--surface:#fafbfc;--surface2:#f5f7f9;--text:#1d2740;--body:#536075;--muted:#7a8597;--line:#d9dee6;--line2:#e6e9ee;--blue:#205fc0;--blue2:#154898;--blueSoft:#e9eff9;--gold:#c3a15d;--shadow:0 8px 24px rgba(25,36,52,.08);--radius:20px;--card-min:150px}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at 15% 0%,rgba(255,255,255,.9),transparent 30%),linear-gradient(180deg,#f7f8fa 0,#eef0f3 50%,#eaedf1 100%);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;min-height:100vh}
button,input,select{font:inherit}button{cursor:pointer}.shell{width:min(1600px,calc(100% - 40px));margin:0 auto;padding:34px 0 60px}.mast{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;margin-bottom:24px}.eyebrow{font-size:12px;font-weight:800;letter-spacing:.12em;color:var(--blue);text-transform:uppercase}.mast h1{margin:7px 0 8px;font-size:clamp(28px,3vw,48px);line-height:1.12;letter-spacing:-.035em}.lead{max-width:820px;margin:0;color:var(--body);font-size:15px;line-height:1.7}.offline{flex:none;padding:10px 14px;border:1px solid #cbd8ec;border-radius:999px;background:rgba(255,255,255,.72);color:var(--blue2);font-size:13px;font-weight:750;box-shadow:0 3px 10px rgba(25,36,52,.04)}.offline::before{content:"";display:inline-block;width:8px;height:8px;margin-right:8px;border-radius:50%;background:#318267;box-shadow:0 0 0 4px rgba(49,130,103,.1)}
.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:20px 0 28px}.stat{padding:18px 20px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.64);box-shadow:0 3px 12px rgba(25,36,52,.035)}.stat strong{display:block;font-size:26px;line-height:1;font-variant-numeric:tabular-nums}.stat span{display:block;margin-top:8px;color:var(--muted);font-size:12px}
.section{margin-top:28px}.section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:14px}.section-head h2{margin:0;font-size:22px;letter-spacing:-.02em}.section-head p{margin:4px 0 0;color:var(--muted);font-size:13px}.count-pill{flex:none;padding:7px 10px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.65);color:var(--body);font-size:12px;font-weight:700}.program-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}.program-card,.icon-card{position:relative;border:1px solid var(--line);background:linear-gradient(180deg,#fff 0,var(--surface) 100%);box-shadow:0 3px 12px rgba(25,36,52,.035)}.program-card{min-height:162px;padding:18px;border-radius:18px}.program-card .visual{height:64px;display:flex;align-items:center;justify-content:center;color:var(--blue2)}.program-card svg{width:44px;height:44px}.name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:700 13px/1.35 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.alias{margin-top:5px;min-height:30px;color:var(--muted);font-size:11px;line-height:1.4}.usage{margin-top:7px;color:var(--body);font-size:11px;line-height:1.4}.used-badge{position:absolute;top:10px;right:10px;padding:4px 7px;border-radius:999px;background:var(--blueSoft);color:var(--blue2);font-size:10px;font-weight:800}
.browser{margin-top:34px}.toolbar{position:sticky;z-index:20;top:0;margin:0 -8px 14px;padding:12px 8px;background:linear-gradient(180deg,rgba(238,240,243,.98) 0,rgba(238,240,243,.92) 80%,rgba(238,240,243,0) 100%);backdrop-filter:blur(10px)}.toolbar-main{display:grid;grid-template-columns:minmax(260px,1fr) auto auto;gap:10px}.search{height:48px;padding:0 16px;border:1px solid var(--line);border-radius:15px;outline:none;background:#fff;color:var(--text);box-shadow:0 2px 8px rgba(25,36,52,.04)}.search:focus{border-color:#aebfdd;box-shadow:0 0 0 3px rgba(32,95,192,.09)}select,.control{height:48px;padding:0 14px;border:1px solid var(--line);border-radius:15px;background:#fff;color:var(--body)}.filters{display:flex;align-items:center;gap:8px;margin-top:10px;overflow:auto;padding-bottom:2px}.chip{flex:none;height:36px;padding:0 13px;border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.72);color:var(--body);font-size:12px;font-weight:700}.chip.active{border-color:#bfd0ec;background:var(--blueSoft);color:var(--blue2)}.range-wrap{display:flex;align-items:center;gap:8px;margin-left:auto;color:var(--muted);font-size:11px}.range-wrap input{width:110px;accent-color:var(--blue)}
.result-line{display:flex;align-items:center;justify-content:space-between;gap:16px;margin:12px 2px;color:var(--muted);font-size:12px}.result-line strong{color:var(--text)}.icon-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--card-min),1fr));gap:9px}.icon-card{min-height:138px;padding:14px;border-radius:16px;transition:transform .14s ease,border-color .14s ease,box-shadow .14s ease}.icon-card:hover{transform:translateY(-2px);border-color:#c4cedc;box-shadow:0 9px 22px rgba(25,36,52,.08)}.icon-visual{height:70px;display:flex;align-items:center;justify-content:center;color:#263b61}.icon-visual svg{width:44px;height:44px}.icon-foot{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.style-dot{flex:none;margin-top:1px;padding:3px 6px;border:1px solid var(--line2);border-radius:999px;color:var(--muted);font-size:9px;text-transform:uppercase}.icon-card.is-used{border-color:#c2d2ec;background:linear-gradient(180deg,#fff 0,#f3f7fd 100%)}.icon-card.is-used::before{content:"程序已用";position:absolute;top:8px;left:8px;padding:3px 6px;border-radius:999px;background:#e8eff9;color:var(--blue2);font-size:9px;font-weight:800}.copy-btn{width:100%;margin-top:9px;padding:7px 8px;border:1px solid transparent;border-radius:10px;background:transparent;color:var(--muted);font-size:10px;text-align:left}.copy-btn:hover{border-color:var(--line);background:#fff;color:var(--blue2)}
.pager{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:20px}.pager button{min-width:42px;height:38px;padding:0 12px;border:1px solid var(--line);border-radius:12px;background:#fff;color:var(--body)}.pager button:disabled{opacity:.35;cursor:default}.page-label{min-width:110px;text-align:center;color:var(--muted);font-size:12px}.empty{padding:56px 20px;border:1px dashed var(--line);border-radius:18px;text-align:center;color:var(--muted)}.toast{position:fixed;z-index:100;left:50%;bottom:26px;transform:translate(-50%,20px);padding:10px 14px;border-radius:12px;background:#18263b;color:#fff;font-size:12px;opacity:0;pointer-events:none;transition:.18s ease}.toast.show{opacity:1;transform:translate(-50%,0)}footer{margin-top:42px;padding-top:22px;border-top:1px solid var(--line);color:var(--muted);font-size:12px;line-height:1.7}
@media(max-width:760px){.shell{width:min(100% - 24px,1600px);padding-top:22px}.mast{display:block}.offline{display:inline-block;margin-top:14px}.stats{grid-template-columns:repeat(2,1fr)}.toolbar-main{grid-template-columns:1fr}.toolbar{top:0}.program-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.icon-grid{grid-template-columns:repeat(2,minmax(0,1fr));--card-min:0}.range-wrap{display:none}.section-head{align-items:flex-start}.section-head p{max-width:260px}}
</style>
</head>
<body>
<div class="shell">
  <header class="mast">
    <div><div class="eyebrow">AI Coding Log · Icon Library</div><h1>Tabler 离线图标浏览器</h1><p class="lead">先看 AI 编程日志当前真正使用的图标，再一次性浏览 Tabler 全量图标与名称。所有图形数据已经嵌入这个 HTML；双击文件即可使用，不请求 CDN，也不跳转官网。</p></div>
    <div class="offline">完全离线</div>
  </header>
  <div class="stats">
    <div class="stat"><strong id="totalStyles"></strong><span>Tabler 图标样式总数</span></div>
    <div class="stat"><strong id="outlineCount"></strong><span>Outline</span></div>
    <div class="stat"><strong id="filledCount"></strong><span>Filled</span></div>
    <div class="stat"><strong id="programCount"></strong><span>当前程序使用名称</span></div>
  </div>

  <section class="section" id="programSection">
    <div class="section-head"><div><h2>当前 AI 编程日志使用的图标</h2><p>按程序当前 PSM Tabler 映射生成；显示 canonical name、旧调用别名与主要语义。</p></div><div class="count-pill" id="programPill"></div></div>
    <div class="program-grid" id="programGrid"></div>
  </section>

  <section class="section browser" id="allSection">
    <div class="section-head"><div><h2>Tabler 全量浏览</h2><p>卡片直接显示图标和名称，不需要一个个点进去。搜索同时匹配名称、分类和 tags。</p></div><div class="count-pill">v<span id="version"></span></div></div>
    <div class="toolbar">
      <div class="toolbar-main">
        <input class="search" id="search" autocomplete="off" placeholder="搜索：search / book / user / arrow / device ...">
        <select id="category" aria-label="分类"><option value="">全部分类</option></select>
        <select id="pageSize" aria-label="每页数量"><option value="120">120 / 页</option><option value="240" selected>240 / 页</option><option value="480">480 / 页</option><option value="900">900 / 页</option></select>
      </div>
      <div class="filters">
        <button class="chip active" data-filter="all">全部样式</button>
        <button class="chip" data-filter="program">程序已用</button>
        <button class="chip" data-filter="outline">Outline</button>
        <button class="chip" data-filter="filled">Filled</button>
        <button class="chip" id="clearSearch">清空搜索</button>
        <label class="range-wrap">卡片宽度 <input id="cardSize" type="range" min="110" max="220" value="150"></label>
      </div>
    </div>
    <div class="result-line"><span id="resultText"></span><span>点击“复制名称”即可复制 canonical name</span></div>
    <div class="icon-grid" id="iconGrid"></div>
    <div class="pager"><button id="firstPage">首页</button><button id="prevPage">上一页</button><span class="page-label" id="pageLabel"></span><button id="nextPage">下一页</button><button id="lastPage">末页</button></div>
  </section>
  <footer>数据：Tabler Icons 3.46.0 · MIT License。此工具是 AI 编程日志项目外部离线浏览器，不属于微信小程序包体，也不会修改程序业务数据。</footer>
</div>
<div class="toast" id="toast">已复制</div>
<script>
const META=${compact(embeddedData)};
const OUTLINE=${compact(outlineNodes)};
const FILLED=${compact(filledNodes)};
const USED=new Set(META.programUsed);
const $=(s)=>document.querySelector(s);
const $$=(s)=>[...document.querySelectorAll(s)];
const NS='http://www.w3.org/2000/svg';
const state={filter:'all',query:'',category:'',page:1,pageSize:240};
function makeSvg(name,style,size=44){
  const nodes=(style==='filled'?FILLED:OUTLINE)[name];
  const svg=document.createElementNS(NS,'svg');
  svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('width',size);svg.setAttribute('height',size);svg.setAttribute('aria-hidden','true');
  if(style==='filled'){svg.setAttribute('fill','currentColor');svg.setAttribute('stroke','none');}
  else{svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','2');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');}
  for(const node of (nodes||[])){
    const [tag,attrs]=node;const el=document.createElementNS(NS,tag);
    for(const [k,v] of Object.entries(attrs||{})) el.setAttribute(k,String(v));
    svg.appendChild(el);
  }
  return svg;
}
function esc(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function toast(text){const el=$('#toast');el.textContent=text;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),1200);}
async function copyText(text){try{await navigator.clipboard.writeText(text);}catch{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();}toast('已复制 '+text);}
function renderProgram(){const root=$('#programGrid');root.innerHTML='';for(const name of META.programUsed){const card=document.createElement('article');card.className='program-card';const aliases=(META.aliasesByCanonical[name]||[]).join(' / ');card.innerHTML='<span class="used-badge">程序已用</span><div class="visual"></div><div class="name">'+esc(name)+'</div><div class="alias">旧调用：'+esc(aliases||name)+'</div><div class="usage">'+esc(META.usageNotes[name]||'程序公共图标')+'</div>';card.querySelector('.visual').appendChild(makeSvg(name,'outline'));card.addEventListener('dblclick',()=>copyText(name));root.appendChild(card);}}
function getFiltered(){const q=state.query.trim().toLowerCase();return META.styles.filter(item=>{if(state.filter==='program'&&!USED.has(item.name))return false;if(state.filter==='outline'&&item.style!=='outline')return false;if(state.filter==='filled'&&item.style!=='filled')return false;if(state.filter==='program'&&item.style!=='outline')return false;if(state.category&&item.category!==state.category)return false;if(!q)return true;const aliases=(META.aliasesByCanonical[item.name]||[]).join(' ');return (item.name+' '+item.category+' '+(item.tags||[]).join(' ')+' '+aliases).toLowerCase().includes(q);});}
function renderGrid(){const all=getFiltered(),pages=Math.max(1,Math.ceil(all.length/state.pageSize));state.page=Math.min(Math.max(1,state.page),pages);const start=(state.page-1)*state.pageSize,items=all.slice(start,start+state.pageSize);const root=$('#iconGrid');root.innerHTML='';const frag=document.createDocumentFragment();for(const item of items){const card=document.createElement('article');card.className='icon-card'+(USED.has(item.name)?' is-used':'');card.title=(item.tags||[]).join(', ');card.innerHTML='<div class="icon-visual"></div><div class="icon-foot"><div class="name" title="'+esc(item.name)+'">'+esc(item.name)+'</div><span class="style-dot">'+item.style+'</span></div><button class="copy-btn" type="button">复制名称 · '+esc(item.category||'Other')+'</button>';card.querySelector('.icon-visual').appendChild(makeSvg(item.name,item.style));card.querySelector('.copy-btn').addEventListener('click',()=>copyText(item.name));frag.appendChild(card);}root.appendChild(frag);if(!items.length)root.innerHTML='<div class="empty">没有匹配的图标。换个关键词或清空筛选。</div>';$('#resultText').innerHTML='找到 <strong>'+all.length.toLocaleString()+'</strong> 个图标样式 · 当前显示 '+(items.length?`${start+1}–${start+items.length}`:'0');$('#pageLabel').textContent=state.page+' / '+pages;$('#firstPage').disabled=$('#prevPage').disabled=state.page<=1;$('#lastPage').disabled=$('#nextPage').disabled=state.page>=pages;}
function refresh(reset=true){if(reset)state.page=1;renderGrid();}
function init(){
  $('#totalStyles').textContent=META.totalStyles.toLocaleString();$('#outlineCount').textContent=META.outlineCount.toLocaleString();$('#filledCount').textContent=META.filledCount.toLocaleString();$('#programCount').textContent=META.programUsed.length;$('#programPill').textContent=META.programUsed.length+' 个 canonical names';$('#version').textContent=META.version;
  renderProgram();
  const cats=[...new Set(META.styles.map(x=>x.category).filter(Boolean))].sort((a,b)=>a.localeCompare(b));for(const c of cats){const o=document.createElement('option');o.value=o.textContent=c;$('#category').appendChild(o);}
  let timer;$('#search').addEventListener('input',e=>{clearTimeout(timer);timer=setTimeout(()=>{state.query=e.target.value;refresh();},80)});$('#category').addEventListener('change',e=>{state.category=e.target.value;refresh();});$('#pageSize').addEventListener('change',e=>{state.pageSize=Number(e.target.value);refresh();});$('#cardSize').addEventListener('input',e=>document.documentElement.style.setProperty('--card-min',e.target.value+'px'));
  $$('.chip[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{$$('.chip[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');state.filter=btn.dataset.filter;refresh();}));$('#clearSearch').addEventListener('click',()=>{$('#search').value='';$('#category').value='';state.query='';state.category='';refresh();});
  $('#firstPage').onclick=()=>{state.page=1;renderGrid();scrollToGrid()};$('#prevPage').onclick=()=>{state.page--;renderGrid();scrollToGrid()};$('#nextPage').onclick=()=>{state.page++;renderGrid();scrollToGrid()};$('#lastPage').onclick=()=>{const n=getFiltered().length;state.page=Math.max(1,Math.ceil(n/state.pageSize));renderGrid();scrollToGrid()};
  refresh(false);
}
function scrollToGrid(){document.querySelector('.result-line').scrollIntoView({block:'start',behavior:'smooth'});}
init();
</script>
</body>
</html>`;

fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(bundleRoot, { recursive: true });
const htmlPath = path.join(bundleRoot, 'index.html');
fs.writeFileSync(htmlPath, html, 'utf8');
fs.writeFileSync(path.join(bundleRoot, 'LICENSE_TABLER.txt'), license, 'utf8');
fs.writeFileSync(path.join(bundleRoot, 'README_使用说明.txt'), `AI 编程日志 · Tabler 离线图标浏览器 v1.0\n\n打开方法：直接双击 index.html。\n不需要本地服务器，不需要联网，不依赖 CDN。\n\n内容：\n- AI 编程日志当前使用的 26 个 Tabler canonical icons\n- Tabler Icons 3.46.0 全量 6184 图标样式\n- 5130 Outline + 1054 Filled\n- 名称 / 分类 / Tags 搜索\n- 程序已用 / Outline / Filled 过滤\n- 一键复制 canonical name\n\n第三方许可：Tabler Icons，MIT License，详见 LICENSE_TABLER.txt。\n`, 'utf8');

const htmlText = fs.readFileSync(htmlPath, 'utf8');
if (/https?:\\/\\//.test(htmlText)) throw new Error('Offline HTML unexpectedly contains a remote URL');
if (/\\bfetch\\s*\\(/.test(htmlText)) throw new Error('Offline HTML unexpectedly contains fetch()');
if (!htmlText.includes('6184') || !htmlText.includes('5130') || !htmlText.includes('1054')) throw new Error('Counts missing from HTML');

const zipPath = path.join(outRoot, 'AI编程日志_Tabler_离线图标浏览器_v1.0.zip');
execFileSync('zip', ['-qr', zipPath, path.basename(bundleRoot)], { cwd: outRoot });
const sha = crypto.createHash('sha256').update(fs.readFileSync(zipPath)).digest('hex');
fs.writeFileSync(path.join(outRoot, 'AI编程日志_Tabler_离线图标浏览器_v1.0_SHA256.txt'), `${sha}  ${path.basename(zipPath)}\n`, 'utf8');
console.log(JSON.stringify({version:'3.46.0', totalStyles, outlineCount, filledCount, uniqueNames, programUsed: programUsed.length, htmlBytes:fs.statSync(htmlPath).size, zipBytes:fs.statSync(zipPath).size, sha256:sha}, null, 2));
