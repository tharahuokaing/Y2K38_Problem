/* GHOST PROTOCOL: NETWORK SNIFFER & KERNEL AUDIT v1.0
   Module: script3.js
   Expertise: Packet Inspection & System Integrity
*/

const NetworkAuditor = {
    // 1. មុខងារស្ទាក់ចាប់កញ្ចប់ទិន្នន័យ (Packet Sniffing Simulation)
    startPacketSniffing: function() {
        const consoleEl = document.getElementById('security-console');
        consoleEl.innerHTML += `<div style="color:var(--accent); margin-top:10px;">[>] [NET] Monitoring Traffic on Interface: wlan0 (Port 8022)...</div>`;
        
        const protocols = ["TCP", "UDP", "SSH-v2", "TLS-1.3"];
        let count = 0;

        const sniffer = setInterval(() => {
            const proto = protocols[Math.floor(Math.random() * protocols.length)];
            const size = Math.floor(Math.random() * 1500);
            const status = Math.random() > 0.1 ? "ALLOW" : "FLAGGED";
            const color = status === "ALLOW" ? "var(--accent)" : "var(--danger)";

            consoleEl.innerHTML += `<div style="font-family:monospace; font-size:0.8rem;">
                [SNIFF] <span style="color:${color};">${status}</span> | SRC: 192.168.43.1 | PROTO: ${proto} | LEN: ${size}
            </div>`;
            consoleEl.scrollTop = consoleEl.scrollHeight;
            
            count++;
            if (count >= 8) {
                clearInterval(sniffer);
                consoleEl.innerHTML += `<div style="color:var(--hologram-cyan);">[INFO] Sniffing session paused. All captured packets are encrypted.</div>`;
            }
        }, 600);
    },

    // 2. មុខងារត្រួតពិនិត្យសុវត្ថិភាព Kernel (Kernel Integrity Scan)
    checkKernelIntegrity: function() {
        const consoleEl = document.getElementById('security-console');
        consoleEl.innerHTML += `<div style="color:var(--warn); margin-top:10px;">[>] [KERNEL] Scanning Android/Termux Kernel Modules...</div>`;

        setTimeout(() => {
            consoleEl.innerHTML += `<div>[*] Checking /proc/sys/kernel/random/entropy_avail... [OK]</div>`;
            consoleEl.innerHTML += `<div>[*] Verifying SE-Linux Policy: Enforcing... [OK]</div>`;
            consoleEl.innerHTML += `<div>[*] Searching for Rootkits in /dev/nodes... [NONE FOUND]</div>`;
            consoleEl.innerHTML += `<div style="color:var(--accent); font-weight:bold;">[+] INTEGRITY STATUS: 100% SECURE.</div>`;
            consoleEl.scrollTop = consoleEl.scrollHeight;
        }, 1500);
    }
};

// 3. មុខងារបង្ហាញព័ត៌មានប្រព័ន្ធ (System Metadata)
function showSystemMetrics() {
    const consoleEl = document.getElementById('security-console');
    const ramUsage = (Math.random() * 40 + 20).toFixed(2);
    const cpuLoad = (Math.random() * 15 + 5).toFixed(2);
    
    consoleEl.innerHTML += `<div style="border: 1px dashed var(--hologram-cyan); padding: 10px; margin-top:10px; color:#fff;">
        <h4 style="margin:0; color:var(--hologram-cyan);">SYSTEM METRICS</h4>
        CPU LOAD: ${cpuLoad}% | RAM USAGE: ${ramUsage}GB | THREADS: ACTIVE<br>
        ARCHITECTURE: ARM64 (Y2K38 COMPLIANT)
    </div>`;
    consoleEl.scrollTop = consoleEl.scrollHeight;
}
