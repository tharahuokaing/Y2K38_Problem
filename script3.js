/* GHOST PROTOCOL: NETWORK SNIFFER & KERNEL AUDIT v2.0
   Module: script3.js
   Expertise: Advanced Packet Inspection, Kernel Integrity & Real-Time System Monitoring
*/

const NetworkAuditor = {
    // 1. Advanced Packet Sniffing Simulation with detailed protocol analysis
    startPacketSniffing: function() {
        const consoleEl = document.getElementById('security-console');
        consoleEl.innerHTML += `<div style="color:var(--accent); margin-top:10px;">[>] [NET] Initiating Deep Packet Inspection on Interface: wlan0 (Port 8022)...</div>`;

        const protocols = ["TCP", "UDP", "SSH-v2", "TLS-1.3", "QUIC"];
        let count = 0;
        const maxPackets = 12;

        const sniffer = setInterval(() => {
            const proto = protocols[Math.floor(Math.random() * protocols.length)];
            const size = (Math.random() * 1400 + 100).toFixed(0);
            const srcIP = `192.168.43.${Math.floor(Math.random() * 255) + 1}`;
            const dstIP = `10.0.0.${Math.floor(Math.random() * 255) + 1}`;
            const statusChance = Math.random();

            let status = "ALLOW";
            let color = "var(--accent)";
            if (statusChance < 0.12) {
                status = "SUSPICIOUS";
                color = "var(--warn)";
            } else if (statusChance < 0.05) {
                status = "FLAGGED";
                color = "var(--danger)";
            }

            consoleEl.innerHTML += `<div style="font-family:monospace; font-size:0.8rem;">
                [SNIFF] <span style="color:${color}; font-weight:bold;">${status}</span> | SRC: ${srcIP} | DST: ${dstIP} | PROTO: ${proto} | LEN: ${size}
            </div>`;
            consoleEl.scrollTop = consoleEl.scrollHeight;

            count++;
            if (count >= maxPackets) {
                clearInterval(sniffer);
                consoleEl.innerHTML += `<div style="color:var(--hologram-cyan); margin-top:8px;">[INFO] Deep packet inspection completed. All suspicious packets flagged for review.</div>`;
                consoleEl.scrollTop = consoleEl.scrollHeight;
            }
        }, 500);
    },

    // 2. Enhanced Kernel Integrity Scan with timestamp & module version output
    checkKernelIntegrity: function() {
        const consoleEl = document.getElementById('security-console');
        consoleEl.innerHTML += `<div style="color:var(--warn); margin-top:10px;">[>] [KERNEL] Running Comprehensive Android/Termux Kernel Integrity Scan v2.0...</div>`;

        setTimeout(() => {
            const timestamp = new Date().toISOString();
            consoleEl.innerHTML += `<div>[*] Scan initiated at ${timestamp}</div>`;
            consoleEl.innerHTML += `<div>[*] Checking /proc/sys/kernel/random/entropy_avail... <span style="color:var(--accent);">[OK]</span></div>`;
            consoleEl.innerHTML += `<div>[*] Verifying SELinux Policy: Enforcing... <span style="color:var(--accent);">[OK]</span></div>`;
            consoleEl.innerHTML += `<div>[*] Verifying kernel modules signatures...</div>`;
        }, 1000);

        setTimeout(() => {
            const modules = [
                {name: 'ext4', version: '1.45.9', status: 'OK'},
                {name: 'binder', version: '1.0.4', status: 'OK'},
                {name: 'tcp_bbr', version: '0.3', status: 'OK'},
                {name: 'wireless', version: '5.4-rc7', status: 'OK'}
            ];
            modules.forEach(m => {
                const color = m.status === 'OK' ? 'var(--accent)' : 'var(--danger)';
                consoleEl.innerHTML += `<div>[*] Module ${m.name} v${m.version} signature check: <span style="color:${color};">[${m.status}]</span></div>`;
            });
        }, 1800);

        setTimeout(() => {
            consoleEl.innerHTML += `<div style="color:var(--accent); font-weight:bold; margin-top:8px;">[+] KERNEL INTEGRITY: 100% VERIFIED, NO ANOMALIES DETECTED.</div>`;
            consoleEl.scrollTop = consoleEl.scrollHeight;
        }, 2500);
    }
};

// 3. Enhanced System Metrics Display with uptime and thread count
function showSystemMetrics() {
    const consoleEl = document.getElementById('security-console');

    const uptimeSeconds = Math.floor(Math.random() * (86400 * 7)); // up to 7 days
    const uptimeHours = Math.floor(uptimeSeconds / 3600);
    const uptimeMinutes = Math.floor((uptimeSeconds % 3600) / 60);
    const uptimeSecs = uptimeSeconds % 60;

    const ramUsageGB = (Math.random() * 40 + 8).toFixed(2); // 8GB-48GB range
    const cpuLoadPercent = (Math.random() * 15 + 5).toFixed(2);
    const activeThreads = Math.floor(Math.random() * 128) + 12;

    consoleEl.innerHTML += `<div style="border: 1px dashed var(--hologram-cyan); padding: 12px; margin-top:10px; color:#fff;">
        <h4 style="margin:0 0 6px 0; color:var(--hologram-cyan);">SYSTEM METRICS</h4>
        UPTIME: ${uptimeHours}h ${uptimeMinutes}m ${uptimeSecs}s<br>
        CPU LOAD: ${cpuLoadPercent}% | RAM USAGE: ${ramUsageGB}GB | THREADS ACTIVE: ${activeThreads}<br>
        ARCHITECTURE: ARM64 (Y2K38 COMPLIANT)
    </div>`;
    consoleEl.scrollTop = consoleEl.scrollHeight;
}
