/* Base Styles & Neumorphism Tokens */
:root {
  --bg-color: #e0e0e0;
  --text-color: #444;
  --accent-color: #333;
  --card-bg: #e0e0e0;
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Initial Shadow Tokens */
  --shadow-distance: 20px;
  --shadow-blur: 40px;
  --shadow-intensity: 0.15;
  --light-shadow: #ffffff;
  --dark-shadow: #bebebe;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-color);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  transition: background-color 0.3s ease;
}

#app {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.header {
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 8px;
}

.header p {
  opacity: 0.7;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 768px) {
  .main-container {
    grid-template-columns: 1fr;
  }
}

/* Preview Section */
.preview-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  min-height: 400px;
}

.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.neumorphic-element {
  width: 300px;
  height: 300px;
  background: var(--bg-color);
  border-radius: 50px;
  box-shadow: 20px 20px 60px #bebebe,
              -20px -20px 60px #ffffff;
  transition: all 0.2s ease;
}

/* Config Section */
.config-card {
  background: var(--bg-color);
  padding: 30px;
  border-radius: 30px;
  box-shadow: 9px 9px 16px rgb(163,177,198,0.6), 
              -9px -9px 16px rgba(255,255,255, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.config-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.config-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent-color);
}

.color-picker-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}

input[type="color"] {
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: none;
}

input[type="text"] {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(255,255,255,0.5);
  font-family: monospace;
  width: 100px;
}

input[type="range"] {
  width: 100%;
  cursor: pointer;
}

/* Direction Selector */
.direction-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.dir-btn {
  padding: 10px;
  border: none;
  background: var(--bg-color);
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 4px 4px 8px #bebebe,
              -4px -4px 8px #ffffff;
  transition: all 0.2s ease;
}

.dir-btn.active {
  box-shadow: inset 4px 4px 8px #bebebe,
              inset -4px -4px 8px #ffffff;
}

/* Shape Selector */
.shape-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.shape-btn {
  padding: 12px;
  border: none;
  background: var(--bg-color);
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 4px 4px 8px #bebebe,
              -4px -4px 8px #ffffff;
  transition: all 0.2s ease;
}

.shape-btn:hover {
  box-shadow: 2px 2px 4px #bebebe,
              -2px -2px 4px #ffffff;
}

.shape-btn.active {
  box-shadow: inset 4px 4px 8px #bebebe,
              inset -4px -4px 8px #ffffff;
  color: #000;
}

/* Output Section */
.output-section {
  width: 100%;
}

.code-container {
  background: var(--bg-color);
  padding: 24px;
  border-radius: 20px;
  box-shadow: inset 6px 6px 12px #bebebe,
              inset -6px -6px 12px #ffffff;
  position: relative;
}

pre {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--accent-color);
}

.copy-button {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 8px 16px;
  background: var(--bg-color);
  border: none;
  border-radius: 8px;
  box-shadow: 4px 4px 8px #bebebe,
              -4px -4px 8px #ffffff;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.copy-button:active {
  box-shadow: inset 2px 2px 4px #bebebe,
              inset -2px -2px 4px #ffffff;
}

/* Info Section */
.info-section, .collection-section {
  padding: 60px 0;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 15px;
}

.section-header p {
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.7;
  line-height: 1.6;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}

.info-card {
  background: var(--bg-color);
  padding: 30px;
  border-radius: 24px;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  text-align: center;
}

.visual-example {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 20px;
}

.flat-example {
  background: var(--bg-color);
  box-shadow: 10px 10px 20px var(--dark-shadow), -10px -10px 20px var(--light-shadow);
}

.shadow-example {
  background: var(--bg-color);
  box-shadow: inset 10px 10px 20px var(--dark-shadow), inset -10px -10px 20px var(--light-shadow);
}

.info-card h3 {
  margin-bottom: 10px;
  color: var(--accent-color);
}

.info-card p {
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.5;
}

/* Collection Section */
.collection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.showcase-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.showcase-item span {
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Showcase Components */
.showcase-group {
  display: flex;
  gap: 15px;
}

.neu-button {
  padding: 12px 24px;
  border: none;
  background: var(--bg-color);
  border-radius: 12px;
  box-shadow: 6px 6px 12px var(--dark-shadow), -6px -6px 12px var(--light-shadow);
  cursor: pointer;
  font-weight: 600;
  color: var(--accent-color);
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.neu-button:active, .neu-button.pressed {
  box-shadow: inset 4px 4px 8px var(--dark-shadow), inset -4px -4px 8px var(--light-shadow);
}

.neu-button.small {
  padding: 6px 12px;
  font-size: 0.75rem;
  border-radius: 8px;
}

.neu-card {
  width: 180px;
  padding: 20px;
  background: var(--bg-color);
  border-radius: 24px;
  box-shadow: 8px 8px 16px var(--dark-shadow), -8px -8px 16px var(--light-shadow);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.neu-card-footer {
  margin-top: 5px;
}

.neu-icon {
  font-size: 2rem;
  color: #f1c40f;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.neu-input {
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: var(--bg-color);
  border-radius: 12px;
  box-shadow: inset 4px 4px 8px var(--dark-shadow), inset -4px -4px 8px var(--light-shadow);
  color: var(--accent-color);
  outline: none;
  font-size: 0.9rem;
}

/* Progress Bar */
.neu-progress-container {
  width: 100%;
  height: 12px;
  background: var(--bg-color);
  border-radius: 6px;
  box-shadow: inset 2px 2px 4px var(--dark-shadow), inset -2px -2px 4px var(--light-shadow);
  overflow: hidden;
  padding: 2px;
}

.neu-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

/* Slider */
.neu-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: var(--bg-color);
  border-radius: 4px;
  box-shadow: inset 2px 2px 4px var(--dark-shadow), inset -2px -2px 4px var(--light-shadow);
  outline: none;
}

.neu-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--bg-color);
  border-radius: 50%;
  box-shadow: 3px 3px 6px var(--dark-shadow), -3px -3px 6px var(--light-shadow);
  cursor: pointer;
  border: 2px solid var(--light-shadow);
}

/* Switch */
.neu-switch {
  width: 64px;
  height: 32px;
  background: var(--bg-color);
  border-radius: 16px;
  box-shadow: inset 4px 4px 8px var(--dark-shadow), inset -4px -4px 8px var(--light-shadow);
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

.neu-switch.active {
  background: #2ecc71;
  box-shadow: inset 4px 4px 8px rgba(0,0,0,0.2), inset -4px -4px 8px rgba(255,255,255,0.2);
}

.neu-handle {
  width: 24px;
  height: 24px;
  background: var(--bg-color);
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  box-shadow: 2px 2px 4px var(--dark-shadow), -2px -2px 4px var(--light-shadow);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.neu-switch.active .neu-handle {
  transform: translateX(32px);
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

/* Search Container */
.neu-search-container {
  display: flex;
  align-items: center;
  background: var(--bg-color);
  border-radius: 12px;
  padding: 4px;
  box-shadow: 4px 4px 8px var(--dark-shadow), -4px -4px 8px var(--light-shadow);
  width: 100%;
}

.neu-search-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 8px 12px;
  outline: none;
  color: var(--accent-color);
  font-size: 0.9rem;
}

.neu-search-btn {
  background: var(--bg-color);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px var(--dark-shadow), -2px -2px 4px var(--light-shadow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Panel */
.neu-panel {
  width: 100%;
  background: var(--bg-color);
  border-radius: 16px;
  box-shadow: 6px 6px 12px var(--dark-shadow), -6px -6px 12px var(--light-shadow);
  overflow: hidden;
}

.neu-panel-header {
  background: rgba(0,0,0,0.02);
  padding: 8px 12px;
  display: flex;
  gap: 6px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.neu-panel-content {
  padding: 15px;
  font-size: 0.85rem;
  opacity: 0.8;
}

/* Footer */
.footer {
  margin-top: 40px;
  padding: 40px 0;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}

.footer-brand h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.footer-brand p {
  font-size: 0.9rem;
  opacity: 0.6;
}

.footer-links {
  text-align: right;
}

@media (max-width: 600px) {
  .footer-links {
    text-align: center;
  }
}

.footer-links p {
  font-size: 0.85rem;
  opacity: 0.5;
  margin-bottom: 5px;
}
