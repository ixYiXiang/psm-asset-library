const repeated = (count, template) => Array.from({ length: count }, (_, index) => template(index)).join('');

export function w03bDemoMarkup(demo) {
  switch (demo) {
    case 'origami-beacon':
      return '<div class="origami-beacon" aria-label="正在建立空间信标"><i></i><i></i><i></i><i></i><span><b></b></span></div>';
    case 'fluid-meter':
      return '<div class="fluid-meter" aria-label="写入进度 64%"><div class="fluid-glass"><span class="fluid-fill"><i></i><i></i><i></i></span><b>64%</b><em>WRITE</em></div><div class="fluid-scale"><i></i><i></i><i></i><i></i><i></i></div></div>';
    case 'tomography-window':
      return '<article class="tomography-window" tabindex="0"><div class="tomography-stack"><i></i><i></i><i></i><i></i><span class="tomography-lens"></span></div><div><strong>LAYER 04</strong><small>POINTER / SECTION</small></div></article>';
    case 'fieldline-plaque':
      return `<article class="fieldline-plaque" tabindex="0"><svg viewBox="0 0 240 140" aria-hidden="true">
        <path d="M20 70C55 8 88 16 120 70S185 132 220 70"></path>
        <path d="M24 70C58 28 88 34 120 70S182 112 216 70"></path>
        <path d="M30 70C62 46 92 48 120 70S178 94 210 70"></path>
        <path d="M120 14C74 32 72 108 120 126"></path>
        <path d="M120 14C166 32 168 108 120 126"></path>
      </svg><span class="field-core"><b>PSM</b><small>FIELD / 07</small></span></article>`;
    case 'particle-resolve':
      return `<div class="particle-resolve" aria-label="资源已经归位"><div class="resolve-particles">${repeated(12, (index) => `<i style="--p:${index}"></i>`)}</div><svg viewBox="0 0 96 96" aria-hidden="true"><circle cx="48" cy="48" r="36"></circle><path d="m31 49 11 11 24-27"></path></svg><span>RESOLVED</span></div>`;
    case 'revision-scale':
      return `<div class="revision-scale" data-step="1"><div class="revision-track">${repeated(6, (index) => `<i data-revision="${index + 1}" class="${index === 0 ? 'is-active' : ''}"><span>${index + 1}</span></i>`)}</div><div class="revision-copy"><strong>v1</strong><button type="button">推进版本</button></div></div>`;
    case 'orbital-map':
      return '<nav class="orbital-map" style="--orbit-index:0" aria-label="轨道导航"><span class="orbit-pointer"></span><i class="orbit-center">LOG</i><button class="is-active" type="button" aria-label="概览">01</button><button type="button" aria-label="版本">02</button><button type="button" aria-label="实践">03</button><button type="button" aria-label="回响">04</button><button type="button" aria-label="数据">05</button></nav>';
    case 'fold-tabs':
      return '<div class="fold-tabs" role="tablist" aria-label="折页标签"><button class="is-active" role="tab" aria-selected="true" type="button"><span>概览</span><small>01</small></button><button role="tab" aria-selected="false" type="button"><span>版本</span><small>02</small></button><button role="tab" aria-selected="false" type="button"><span>实践</span><small>03</small></button></div>';
    case 'wave-slider':
      return `<div class="wave-slider" style="--value:64"><div class="wave-bars">${repeated(17, (index) => `<i style="--bar:${index}"></i>`)}</div><label><input type="range" min="0" max="100" value="64" aria-label="波形强度"><output>64</output></label></div>`;
    case 'droplet-radio':
      return '<fieldset class="droplet-radio" style="--drop-index:0"><legend>材质强度</legend><span class="droplet-marker"></span><label><input type="radio" name="droplet-strength" value="0" checked><i></i><b>柔和</b></label><label><input type="radio" name="droplet-strength" value="1"><i></i><b>标准</b></label><label><input type="radio" name="droplet-strength" value="2"><i></i><b>清晰</b></label></fieldset>';
    case 'fiber-field':
      return `<div class="fiber-field" aria-label="纤维风场材质实验">${repeated(18, (index) => `<i style="--fiber:${index};--row:${index % 6};--col:${Math.floor(index / 6)}"></i>`)}</div>`;
    case 'refractive-caustic':
      return '<div class="refractive-caustic" aria-label="折射焦散光学实验"><span class="caustic caustic-a"></span><span class="caustic caustic-b"></span><span class="caustic caustic-c"></span><i class="refractive-lens"></i><b>REFRACTION</b></div>';
    default:
      return null;
  }
}
