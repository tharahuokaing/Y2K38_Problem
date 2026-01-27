function estimateCost() {
  // Average cost per system upgrade in USD (example value)
  const costPerSystem = 2500;

  // Get the number of systems input
  const systemCount = parseInt(document.getElementById('systemCount').value) || 0;

  if(systemCount <= 0){
    document.getElementById('costResult').textContent = 'Please enter a positive number of systems.';
    document.getElementById('hologramEffect').textContent = '';
    return;
  }

  // Calculate total cost
  const totalCost = systemCount * costPerSystem;

  // Format result with commas
  const formattedCost = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

  document.getElementById('costResult').textContent = `Estimated upgrade cost: ${formattedCost} for ${systemCount} system(s).`;

  // Hologram flicker effect text
  const hologramText = "UPGRADE INITIATED";

  // Create flickering hologram effect
  let flicker = true;
  const hologramDiv = document.getElementById('hologramEffect');
  hologramDiv.style.color = '#0ff';
  hologramDiv.style.textShadow = '0 0 8px #0ff, 0 0 24px #0ff, 0 0 48px #3effff';
  hologramDiv.style.fontFamily = "'Orbitron', sans-serif";
  hologramDiv.style.letterSpacing = '0.15em';
  hologramDiv.style.userSelect = 'none';
  hologramDiv.style.transition = 'opacity 0.3s ease-in-out';
  hologramDiv.textContent = hologramText;

  // Simple flicker effect
  if(window.holoInterval) clearInterval(window.holoInterval);
  window.holoInterval = setInterval(() => {
    flicker = !flicker;
    hologramDiv.style.opacity = flicker ? '1' : '0.5';
  }, 500);
}

/**
 * Estimates the cost of upgrading legacy 32-bit systems to 64-bit.
 * Based on research & development initiative criteria.
 */
function estimateCost() {
    const count = document.getElementById('systemCount').value;
    const baseRate = 450; // Average cost per system patch/upgrade
    const total = count * baseRate;
    
    const resultEl = document.getElementById('costResult');
    resultEl.innerHTML = `
        <div style="border: 1px dashed var(--primary); padding: 10px; margin-top: 10px;">
            <p>Target Systems: ${Number(count).toLocaleString()}</p>
            <p>Estimated Budget: <span style="color:var(--danger);">$${total.toLocaleString()}</span></p>
            <p style="font-size: 0.8rem; color: #555;">*Includes auditing, hardware migration, and binary recompilation.</p>
        </div>
    `;
    
    // Log to terminal
    const el = document.getElementById('security-console');
    el.innerHTML += `<div>[*] Financial Audit Generated for ${count} nodes.</div>`;
    el.scrollTop = el.scrollHeight;
}