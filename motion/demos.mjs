export function demoMarkup(demo) {
  switch (demo) {
    case 'orbit-dots':
      return '<div class="orbit-loader" aria-label="正在同步"><i class="ring"></i><i class="ring"></i><i class="ring"></i><span class="core"></span></div>';
    case 'magnetic-bars':
      return '<div class="magnetic-bars" aria-label="正在处理"><i></i><i></i><i></i><i></i><i></i><i></i></div>';
    case 'liquid-halo':
      return '<div class="liquid-halo" aria-label="正在载入"></div>';
    case 'breathing-core':
      return '<div class="breathing-loader" aria-label="系统仍在工作"><span class="breath-core"></span><i></i><i></i><i></i></div>';
    case 'marching-cubes':
      return '<div class="marching-cubes" aria-label="正在批量导出"><i></i><i></i><i></i><i></i></div>';
    case 'type-wave':
      return '<div class="type-wave" aria-label="正在构建"><span>P</span><span>R</span><span>O</span><span>C</span><span>E</span><span>S</span><span>S</span><span>·</span></div>';
    case 'scan-progress':
      return '<div class="scan-progress"><div class="scan-copy"><span>解析资源</span><strong>72%</strong></div><div class="scan-track"></div><div class="scan-nodes"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>';
    case 'helix-sequence':
      return `<div class="helix" aria-label="正在构建数据序列">
        <div class="helix-row">${'<i></i>'.repeat(7)}</div>
        <div class="helix-row alt">${'<i></i>'.repeat(7)}</div>
      </div>`;
    case 'glaze-button':
      return '<button class="glaze-button" type="button">生成预览</button>';
    case 'ceramic-press':
      return '<button class="ceramic-button" type="button">按住查看反馈</button>';
    case 'magnetic-button':
      return '<div class="magnetic-wrap"><button class="magnetic-button" type="button"><i aria-hidden="true"></i>靠近我</button></div>';
    case 'split-reveal':
      return '<button class="split-button" type="button"><span class="split-front">查看详情</span><span class="split-back">OPEN / 04</span></button>';
    case 'border-comet':
      return '<button class="comet-button" type="button">悬停启动轨迹</button>';
    case 'submit-morph':
      return '<button class="submit-morph" type="button"><span class="submit-label">提交审核</span><span class="submit-progress"></span><span class="submit-done">✓</span></button>';
    case 'plinth-card':
      return '<div class="plinth-demo"><article class="plinth-card" tabindex="0"><strong>状态基座</strong><span>悬停抬升，按下回落；容器尺寸始终不变。</span></article></div>';
    case 'tilt-glare':
      return '<article class="tilt-card" tabindex="0"><strong>指针光泽</strong><span>24°</span></article>';
    case 'aurora-edge':
      return '<article class="aurora-card"><strong>边缘流光</strong><p class="demo-label">CONIC / MASK / 6S</p></article>';
    case 'folded-card':
      return '<article class="folded-card" tabindex="0"><span class="fold-meta">v4.2</span><strong>折角信息</strong><p class="demo-label">HOVER TO REVEAL</p></article>';
    case 'data-scan-card':
      return '<article class="data-scan"><header><span>BUILD HEALTH</span><span>LIVE</span></header><strong>98.6%</strong><div class="data-bars"><i style="--h:32%"></i><i style="--h:68%"></i><i style="--h:48%"></i><i style="--h:88%"></i><i style="--h:60%"></i><i style="--h:100%"></i></div></article>';
    case 'stacked-toast':
      return `<div class="toast-stack" aria-label="连续状态通知">
        <div class="toast-mini"><i>✓</i><div><strong>验证通过</strong><span>刚刚</span></div></div>
        <div class="toast-mini"><i>✓</i><div><strong>清单已导出</strong><span>2 秒前</span></div></div>
        <div class="toast-mini"><i>✓</i><div><strong>分支已同步</strong><span>4 秒前</span></div></div>
      </div>`;
    case 'path-check':
      return `<svg class="path-check" viewBox="0 0 112 112" role="img" aria-label="操作成功">
        <circle cx="56" cy="56" r="46"></circle><circle class="draw-ring" cx="56" cy="56" r="46"></circle><path d="m34 57 14 14 31-34"></path>
      </svg>`;
    case 'error-rebound':
      return '<div class="error-box" role="alert"><strong>提交未完成</strong><span>请检查网络后重试，当前内容已保留。</span></div>';
    case 'measured-ring':
      return `<div class="measured-ring" aria-label="完成度 72%"><svg viewBox="0 0 112 112" aria-hidden="true"><defs><linearGradient id="ringGradient"><stop stop-color="#2d72cc"></stop><stop offset="1" stop-color="#78c3e9"></stop></linearGradient></defs><circle class="track" cx="56" cy="56" r="48"></circle><circle class="value" cx="56" cy="56" r="48"></circle></svg><div><strong>72</strong><span>PERCENT</span></div></div>`;
    case 'quiet-skeleton':
      return '<div class="skeleton" aria-label="内容载入中"><span class="avatar"></span><span class="lines"><i></i><i></i><i></i></span></div>';
    case 'elastic-dock':
      return '<nav class="elastic-dock" aria-label="弹性导航示例"><button class="dock-item" type="button">⌂</button><button class="dock-item" type="button">◎</button><button class="dock-item" type="button">＋</button><button class="dock-item" type="button">◇</button><button class="dock-item" type="button">≡</button></nav>';
    case 'trace-tabs':
      return '<div class="trace-tabs" role="tablist" aria-label="轨迹标签示例"><button class="is-active" role="tab" aria-selected="true" type="button">概览</button><button role="tab" aria-selected="false" type="button">版本</button><button role="tab" aria-selected="false" type="button">实践</button></div>';
    case 'pill-slider':
      return '<div class="pill-slider" role="group" aria-label="时间范围"><button class="is-active" type="button">今天</button><button type="button">本周</button><button type="button">本月</button></div>';
    case 'menu-morph':
      return '<button class="menu-button" type="button" aria-label="打开菜单" aria-expanded="false"><i></i><i></i><i></i></button>';
    case 'floating-label':
      return '<div class="float-field"><input id="floating-demo" type="text" placeholder=" " autocomplete="off"><label for="floating-demo">事务名称</label></div>';
    case 'track-switch':
      return '<label class="track-switch"><input type="checkbox"><span class="switch-track" aria-hidden="true"></span><strong>未启用</strong></label>';
    case 'validation-field':
      return '<div class="validation-field"><div class="validation-input"><input type="text" aria-label="输入版本编号" placeholder="输入 PSM-MO-036" autocomplete="off"><span class="validation-icon" aria-hidden="true">✓</span></div><span class="validation-message">输入至少 4 个字符开始校验</span></div>';
    case 'segmented-choice':
      return '<div class="segmented-choice" role="tablist" aria-label="运行速度"><button role="tab" aria-selected="true" type="button">标准</button><button role="tab" aria-selected="false" type="button">快速</button><button role="tab" aria-selected="false" type="button">最高</button></div>';
    case 'mineral-mesh':
      return '<div class="mineral-mesh" aria-label="矿物网格环境动效"></div>';
    case 'particle-depth':
      return '<div class="particle-depth" aria-label="粒子景深环境动效"><i></i><i></i><i></i></div>';
    case 'gradient-vortex':
      return '<div class="gradient-vortex" aria-label="渐变涡旋环境动效"></div>';
    case 'grid-beam':
      return '<div class="grid-beam" aria-label="网格光束环境动效"></div>';
    default:
      return '<p class="demo-label">PREVIEW UNAVAILABLE</p>';
  }
}
