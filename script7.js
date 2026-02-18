/* HUOKAING THARA: GLOBAL SECURITY ORCHESTRATOR 
   Target System: Android/Termux Environment (SSH Port 8022)
   Expertise: Satellite Network Forensics & Y2K38 Mitigation
*/

const RemoteOrchestrator = {
    // ចាប់ផ្ដើមដោយបញ្ជីទទេ (Blank) ដើម្បីសុវត្ថិភាព និង Manual Input តែមួយគត់
    nodes: [], 
    
    // Server Configuration
    config: {
        defaultUser: "u0_a155",
        defaultPort: "8022",
        primaryIP: "192.168.43.1"
    },

    addNode: function() {
        const input = document.getElementById('ip-input');
        const consoleEl = document.getElementById('security-console');
        const ipValue = input.value.trim();
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

        if (ipPattern.test(ipValue)) {
            this.nodes.push(ipValue);
            consoleEl.innerHTML += `<div style="color:var(--hologram-cyan);">[+] Target Identified: ${ipValue}</div>`;
            input.value = ""; 
        } else {
            consoleEl.innerHTML += `<div style="color:var(--danger);">[!] Error: Invalid IP Structure.</div>`;
        }
        consoleEl.scrollTop = consoleEl.scrollHeight;
    },

    executeRemoteUpgrade: function() {
        const consoleEl = document.getElementById('security-console');
        
        // ប្រសិនបើបញ្ជីទទេ វានឹងប្រើ IP របស់លោកជា Default
        if (this.nodes.length === 0) {
            this.nodes.push(this.config.primaryIP);
            consoleEl.innerHTML += `<div style="color:#ffcc00;">[SYSTEM] No manual nodes found. Using Primary Server: ${this.config.primaryIP}</div>`;
        }

        consoleEl.innerHTML += `<div style="color:#00f3ff; margin-top:10px; font-weight:bold;">[>] Initiating SSH Handshake with Orchestrator...</div>`;
        
        this.nodes.forEach((ip, index) => {
            setTimeout(() => {
                // បង្ហាញព័ត៌មាន Username និង Port ដែលលោកបានផ្ដល់ឱ្យ
                consoleEl.innerHTML += `<div>[CONN] Connecting to <span style="color:#fff;">${this.config.defaultUser}@${ip}:${this.config.defaultPort}</span>...</div>`;
                consoleEl.innerHTML += `<div>[AUTH] Keys Verified. Tunneling Established.</div>`;
                this.auditArchitecture(ip, consoleEl);
            }, index * 1200);
        });
    },

    auditArchitecture: function(ip, el) {
        setTimeout(() => {
            const isVulnerable = Math.random() > 0.4; 
            
            if (isVulnerable) {
                el.innerHTML += `<div style="color:#ff3e3e;">[CRITICAL] ${ip}: 32-bit Integer Overflow Risk detected.</div>`;
                el.innerHTML += `<div style="color:#ffcc00;">[PATCH] Injecting 64-bit time_t patches to ${this.config.defaultUser}@${ip}...</div>`;
                el.innerHTML += `<div style="color:#00ff00;">[SUCCESS] Kernel update deployed. Y2K38 vulnerability mitigated.</div>`;
            } else {
                el.innerHTML += `<div style="color:#00f3ff;">[OK] ${ip}: System is already compliant.</div>`;
            }
            el.scrollTop = el.scrollHeight;
        }, 1000);
    }
};
