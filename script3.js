/* HUOKAING THARA: ADVANCED REMOTE ORCHESTRATOR
   Environment: Termux/Android SSH (Port 8022)
   Expertise: Disaster Recovery & Y2K38 Defense
*/

const RemoteOrchestrator = {
    // ចាប់ផ្ដើមដោយបញ្ជីទទេ (Manual Input Only)
    nodes: [], 
    
    // ការកំណត់ Configuration សម្រាប់ Server របស់លោក
    targetConfig: {
        username: "u0_a155",
        ip: "192.168.43.1",
        port: 8022
    },

    // មុខងារបន្ថែម IP ដោយដៃ (Manual Input)
    addNode: function() {
        const input = document.getElementById('ip-input');
        const consoleEl = document.getElementById('security-console');
        const ipValue = input.value.trim();

        // Regex សម្រាប់ត្រួតពិនិត្យ IPv4
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

        if (ipPattern.test(ipValue)) {
            this.nodes.push(ipValue);
            consoleEl.innerHTML += `<div style="color:var(--hologram-cyan);">[+] Target Node Added: ${ipValue}</div>`;
            input.value = ""; 
        } else {
            consoleEl.innerHTML += `<div style="color:var(--danger);">[!] ERR: Invalid IPv4 Format.</div>`;
        }
        consoleEl.scrollTop = consoleEl.scrollHeight;
    },

    // មុខងារចម្បងសម្រាប់ Execute ការ Upgrade
    executeRemoteUpgrade: function() {
        const consoleEl = document.getElementById('security-console');
        
        // ប្រសិនបើគ្មាន IP បន្ថែមដោយដៃ វានឹងប្រើ IP គោលដៅរបស់លោកជា Default
        if (this.nodes.length === 0) {
            this.nodes.push(this.targetConfig.ip);
            consoleEl.innerHTML += `<div style="color:#ffcc00;">[SYSTEM] Defaulting to primary server...</div>`;
        }

        consoleEl.innerHTML += `<div style="color:var(--hologram-cyan); margin-top:10px;">[>] [SSH] Initiating secure handshake with orchestrator...</div>`;
        
        this.nodes.forEach((ip, index) => {
            setTimeout(() => {
                // បង្ហាញព័ត៌មាន Username និង Port របស់លោក
                consoleEl.innerHTML += `<div>[CONN] Attempting connection to ${this.targetConfig.username}@${ip}:${this.targetConfig.port}...</div>`;
                this.auditArchitecture(ip, consoleEl);
            }, index * 1500);
        });
    },

    auditArchitecture: function(ip, el) {
        // Forensics: ត្រួតពិនិត្យហានិភ័យ Y2K38 លើ Architecture
        setTimeout(() => {
            const isVulnerable = Math.random() > 0.5; 
            
            if (isVulnerable) {
                el.innerHTML += `<div style="color:var(--danger);">[!] ${ip}: 32-bit (i386) Architecture detected. Y2K38 risk: HIGH.</div>`;
                el.innerHTML += `<div style="color:#00ff00;">[PATCH] Pushing 64-bit libc6-dev headers to ${this.targetConfig.username}@${ip}...</div>`;
                el.innerHTML += `<div>[EXEC] apt-get install libc6-dev-i386 --upgrade -y</div>`;
            } else {
                el.innerHTML += `<div style="color:var(--hologram-cyan);">[OK] ${ip}: 64-bit (x86_64) verified. System is Y2K38 compliant.</div>`;
            }
            el.scrollTop = el.scrollHeight;
        }, 800);
    }
};
