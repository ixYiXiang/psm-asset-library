export function attachW03BInteractions(motionGrid) {
  const updateWaveSlider = (slider) => {
    const input = slider.querySelector('input');
    const output = slider.querySelector('output');
    const bars = [...slider.querySelectorAll('.wave-bars i')];
    const value = Number(input.value);
    output.textContent = String(value);
    slider.style.setProperty('--value', String(value));
    bars.forEach((bar, index) => {
      const phase = (index / Math.max(1, bars.length - 1)) * Math.PI * 2;
      const amplitude = 16 + Math.abs(Math.sin(phase + value / 14)) * (12 + value * 0.34);
      bar.style.setProperty('--amp', `${amplitude.toFixed(1)}px`);
      bar.style.opacity = String(0.48 + Math.abs(Math.cos(phase)) * 0.42);
    });
  };

  motionGrid.querySelectorAll('.tomography-window').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (document.body.dataset.motion === 'paused') return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--tx', `${((event.clientX - rect.left) / rect.width - 0.5) * 28}px`);
      card.style.setProperty('--ty', `${((event.clientY - rect.top) / rect.height - 0.5) * 22}px`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tx', '0px');
      card.style.setProperty('--ty', '0px');
    });
  });

  motionGrid.querySelectorAll('.fieldline-plaque').forEach((plaque) => {
    plaque.addEventListener('pointermove', (event) => {
      if (document.body.dataset.motion === 'paused') return;
      const rect = plaque.getBoundingClientRect();
      plaque.style.setProperty('--line-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 54}px`);
      plaque.style.setProperty('--line-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 42}px`);
    });
    plaque.addEventListener('pointerleave', () => {
      plaque.style.setProperty('--line-x', '0px');
      plaque.style.setProperty('--line-y', '0px');
    });
  });

  motionGrid.querySelectorAll('.wave-slider').forEach(updateWaveSlider);

  motionGrid.addEventListener('click', (event) => {
    const revisionButton = event.target.closest('.revision-scale button');
    if (revisionButton) {
      const scale = revisionButton.closest('.revision-scale');
      const ticks = [...scale.querySelectorAll('[data-revision]')];
      const next = Number(scale.dataset.step || 1) % ticks.length + 1;
      scale.dataset.step = String(next);
      ticks.forEach((tick, index) => {
        tick.classList.toggle('is-past', index + 1 < next);
        tick.classList.toggle('is-active', index + 1 === next);
      });
      scale.querySelector('.revision-copy strong').textContent = `v${next}`;
      return;
    }

    const orbitalButton = event.target.closest('.orbital-map button');
    if (orbitalButton) {
      const map = orbitalButton.closest('.orbital-map');
      const buttons = [...map.querySelectorAll('button')];
      const index = buttons.indexOf(orbitalButton);
      buttons.forEach((button) => button.classList.toggle('is-active', button === orbitalButton));
      map.style.setProperty('--orbit-index', String(index));
      return;
    }

    const foldButton = event.target.closest('.fold-tabs button');
    if (foldButton) {
      foldButton.closest('.fold-tabs').querySelectorAll('button').forEach((button) => {
        const active = button === foldButton;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
      });
    }
  });

  motionGrid.addEventListener('change', (event) => {
    const input = event.target.closest('.droplet-radio input');
    if (input) input.closest('.droplet-radio').style.setProperty('--drop-index', input.value);
  });

  motionGrid.addEventListener('input', (event) => {
    const input = event.target.closest('.wave-slider input');
    if (input) updateWaveSlider(input.closest('.wave-slider'));
  });
}
