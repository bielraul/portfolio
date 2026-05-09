/**
 * Neumorphism.io Clone Logic
 * Pure Vanilla JavaScript
 */

// State Object
const state = {
  color: '#e0e0e0',
  size: 300,
  radius: 50,
  distance: 20,
  blur: 40,
  intensity: 0.15,
  shape: 'flat', // flat, concave, convex, pressed
  direction: 'bottom-right', // top-left, top-right, bottom-left, bottom-right
};

// DOM Elements
const targetElement = document.getElementById('targetElement');
const cssCodeDisplay = document.getElementById('cssCode');
const copyBtn = document.getElementById('copyBtn');

// Inputs
const colorInput = document.getElementById('colorInput');
const colorText = document.getElementById('colorText');
const sizeInput = document.getElementById('sizeInput');
const radiusInput = document.getElementById('radiusInput');
const distanceInput = document.getElementById('distanceInput');
const blurInput = document.getElementById('blurInput');
const intensityInput = document.getElementById('intensityInput');
const shapeBtns = document.querySelectorAll('.shape-btn');
const dirBtns = document.querySelectorAll('.dir-btn');

/**
 * Helper: Lighten or Darken a Hex color
 * @param {string} hex - Hex color string
 * @param {number} amount - Positive to lighten, negative to darken (-1 to 1)
 */
function colorLuminance(hex, amount) {
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  amount = amount || 0;

  let rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * amount)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}

/**
 * Update the UI based on current state
 */
function updateUI() {
  const { color, size, radius, distance, blur, intensity, shape, direction } = state;

  // Calculate shadows
  const darkColor = colorLuminance(color, -intensity);
  const lightColor = colorLuminance(color, intensity);

  // Update Body Background
  document.body.style.backgroundColor = color;

  // Update CSS Variables for global consistency
  document.documentElement.style.setProperty('--bg-color', color);
  document.documentElement.style.setProperty('--dark-shadow', darkColor);
  document.documentElement.style.setProperty('--light-shadow', lightColor);

  // Update Target Element
  targetElement.style.width = `${size}px`;
  targetElement.style.height = `${size}px`;
  targetElement.style.borderRadius = `${radius}px`;
  targetElement.style.backgroundColor = color;

  let boxShadow = '';
  let background = color;
  let angle = 145;
  let dx = distance;
  let dy = distance;

  switch (direction) {
    case 'top-left':
      dx = distance; dy = distance; angle = 145;
      break;
    case 'top-right':
      dx = -distance; dy = distance; angle = 225;
      break;
    case 'bottom-left':
      dx = distance; dy = -distance; angle = 45;
      break;
    case 'bottom-right':
      dx = -distance; dy = -distance; angle = 315;
      break;
  }

  if (shape === 'flat') {
    boxShadow = `${dx}px ${dy}px ${blur}px ${darkColor}, ${-dx}px ${-dy}px ${blur}px ${lightColor}`;
  } else if (shape === 'pressed') {
    boxShadow = `inset ${dx}px ${dy}px ${blur}px ${darkColor}, inset ${-dx}px ${-dy}px ${blur}px ${lightColor}`;
  } else if (shape === 'concave') {
    background = `linear-gradient(${angle}deg, ${darkColor}, ${lightColor})`;
    boxShadow = `${dx}px ${dy}px ${blur}px ${darkColor}, ${-dx}px ${-dy}px ${blur}px ${lightColor}`;
  } else if (shape === 'convex') {
    background = `linear-gradient(${angle}deg, ${lightColor}, ${darkColor})`;
    boxShadow = `${dx}px ${dy}px ${blur}px ${darkColor}, ${-dx}px ${-dy}px ${blur}px ${lightColor}`;
  }

  targetElement.style.boxShadow = boxShadow;
  targetElement.style.background = background;

  // Update CSS Code Display
  const cssText = `border-radius: ${radius}px;
background: ${background};
box-shadow: ${boxShadow};`;
  
  cssCodeDisplay.textContent = cssText;
}

/**
 * Event Listeners
 */
colorInput.addEventListener('input', (e) => {
  state.color = e.target.value;
  colorText.value = e.target.value;
  updateUI();
});

colorText.addEventListener('input', (e) => {
  if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
    state.color = e.target.value;
    colorInput.value = e.target.value;
    updateUI();
  }
});

sizeInput.addEventListener('input', (e) => {
  state.size = parseInt(e.target.value);
  updateUI();
});

radiusInput.addEventListener('input', (e) => {
  state.radius = parseInt(e.target.value);
  updateUI();
});

distanceInput.addEventListener('input', (e) => {
  state.distance = parseInt(e.target.value);
  updateUI();
});

blurInput.addEventListener('input', (e) => {
  state.blur = parseInt(e.target.value);
  updateUI();
});

intensityInput.addEventListener('input', (e) => {
  state.intensity = parseFloat(e.target.value);
  updateUI();
});

shapeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    shapeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.shape = btn.dataset.shape;
    updateUI();
  });
});

dirBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    dirBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.direction = btn.dataset.dir;
    updateUI();
  });
});

copyBtn.addEventListener('click', () => {
  const text = cssCodeDisplay.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copiado!';
    setTimeout(() => {
      copyBtn.textContent = originalText;
    }, 2000);
  });
});

// Initial Render
updateUI();

// Demo Switch Interactivity
const demoSwitch = document.getElementById('demoSwitch');
if (demoSwitch) {
  demoSwitch.addEventListener('click', () => {
    demoSwitch.classList.toggle('active');
  });
}

// Search Button Effect
const searchBtn = document.querySelector('.neu-search-btn');
if (searchBtn) {
  searchBtn.addEventListener('mousedown', () => {
    searchBtn.style.boxShadow = 'inset 2px 2px 4px var(--dark-shadow), inset -2px -2px 4px var(--light-shadow)';
  });
  searchBtn.addEventListener('mouseup', () => {
    searchBtn.style.boxShadow = '2px 2px 4px var(--dark-shadow), -2px -2px 4px var(--light-shadow)';
  });
  searchBtn.addEventListener('mouseleave', () => {
    searchBtn.style.boxShadow = '2px 2px 4px var(--dark-shadow), -2px -2px 4px var(--light-shadow)';
  });
}
