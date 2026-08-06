const original = (note = 'PSM Code Lab W03-B 原创实现。') => ({
  kind: 'original',
  platform: 'PSM Code Lab',
  author: 'PSM Code Lab',
  url: '',
  license: 'Project source',
  copyright: 'PSM Code Lab',
  note
});

export const motionBatchW03B = [
  {
    id: 'PSM-MO-037', category: 'loading', name: '折纸信标', en: 'Origami Beacon',
    description: '四片折纸面沿不同轴线展开与收束，以空间折叠表达初始化阶段。',
    technique: ['CSS', '3D transform', 'clip-path'], interaction: 'auto', demo: 'origami-beacon',
    source: original('使用四片独立折面与中心信标构成，不复用圆环、条带或方块载入器。')
  },
  {
    id: 'PSM-MO-038', category: 'loading', name: '液体计量槽', en: 'Fluid Meter',
    description: '液面、气泡与刻度共同表达真实容量，适合上传、缓存与批量写入。',
    technique: ['CSS', 'mask', 'fluid surface'], interaction: 'auto', demo: 'fluid-meter',
    source: original('以透明计量容器和液面波动建立容量语义，不使用伪进度圆环。')
  },
  {
    id: 'PSM-MO-039', category: 'card', name: '层析窗口', en: 'Tomography Window',
    description: '指针移动时逐层显露内部切片，适合结构说明、调试与数据剖面。',
    technique: ['CSS', 'mask', 'pointer variables'], interaction: 'pointer', demo: 'tomography-window',
    source: original('以多层切片和局部层析窗表达内部结构，不复用整卡倾斜或扫光。')
  },
  {
    id: 'PSM-MO-040', category: 'card', name: '磁场铭牌', en: 'Fieldline Plaque',
    description: '磁场线围绕信息核心偏移，指针只改变场线方向，不移动正文。',
    technique: ['SVG', 'pointermove', 'field lines'], interaction: 'pointer', demo: 'fieldline-plaque',
    source: original('使用 SVG 场线与固定铭牌构成，避免复制视差釉光或边缘流光机制。')
  },
  {
    id: 'PSM-MO-041', category: 'feedback', name: '粒子归位', en: 'Particle Resolve',
    description: '离散粒子先扩散再归位成确认符号，用于一次性完成与收束反馈。',
    technique: ['CSS', 'particle paths', 'SVG'], interaction: 'auto', demo: 'particle-resolve',
    source: original('粒子运动以离散到有序的状态变化为核心，不复用路径勾选的直接描边动画。')
  },
  {
    id: 'PSM-MO-042', category: 'feedback', name: '版本刻度', en: 'Revision Scale',
    description: '点击推进版本刻度，历史节点保持可见，当前节点获得明确重量。',
    technique: ['JS', 'state', 'timeline scale'], interaction: 'click', demo: 'revision-scale',
    source: original('针对日志修订语义设计连续刻度，不以普通进度条代替版本历史。')
  },
  {
    id: 'PSM-MO-043', category: 'navigation', name: '轨道星图', en: 'Orbital Map',
    description: '激活点沿固定轨道转向目标入口，导航节点本身不发生布局位移。',
    technique: ['CSS', 'polar layout', 'JS state'], interaction: 'click', demo: 'orbital-map',
    source: original('使用极坐标入口与独立轨道指针，不复用 Dock 放大或水平下划线。')
  },
  {
    id: 'PSM-MO-044', category: 'navigation', name: '折页切换', en: 'Fold Tabs',
    description: '标签像薄页一样翻到前景，切换时保持固定高度与阅读顺序。',
    technique: ['CSS', 'perspective', 'tabs'], interaction: 'click', demo: 'fold-tabs',
    source: original('以页片旋转建立层级，不复用胶囊滑块或菜单线条形变。')
  },
  {
    id: 'PSM-MO-045', category: 'form', name: '波形滑杆', en: 'Wave Slider',
    description: '滑杆数值同步驱动波形振幅，让强度变化可视化且保留精确数值。',
    technique: ['JS', 'range input', 'waveform'], interaction: 'input', demo: 'wave-slider',
    source: original('将数值、滑杆与离散波形绑定，不使用装饰性数字滚动。')
  },
  {
    id: 'PSM-MO-046', category: 'form', name: '液滴单选', en: 'Droplet Radio',
    description: '选中标记在选项间形成液滴式收缩与展开，同时保留原生单选语义。',
    technique: ['CSS', 'radio', 'shared marker'], interaction: 'change', demo: 'droplet-radio',
    source: original('基于原生 radio 构建共享液滴标记，不复用轨道开关或分段滑块。')
  },
  {
    id: 'PSM-MO-047', category: 'ambient', name: '纤维风场', en: 'Fiber Field',
    description: '低对比纤维沿不同风向缓慢偏折，适合作为材质研究背景。',
    technique: ['CSS', 'vector field', 'stagger'], interaction: 'auto', demo: 'fiber-field',
    source: original('使用线性纤维与方向场，不复用粒子景深、网格或渐变涡流。')
  },
  {
    id: 'PSM-MO-048', category: 'ambient', name: '折射焦散', en: 'Refractive Caustic',
    description: '透明折射体投射缓慢移动的焦散光斑，表达玻璃与液体的光学变化。',
    technique: ['CSS', 'mix-blend-mode', 'caustics'], interaction: 'auto', demo: 'refractive-caustic',
    source: original('以折射焦散和局部光斑为主体，不复用极光边缘或大范围梯度旋转。')
  }
];
