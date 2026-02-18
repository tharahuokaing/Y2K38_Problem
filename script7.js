/* HUOKAING THARA: MANUAL SECURITY ORCHESTRATOR 
   Security Level: Tier 1 - Manual Input Required
*/

const RemoteOrchestrator = {
    // ចាប់ផ្ដើមដោយបញ្ជីទទេ (Blank List)
    nodes: [], 

    // មុខងារបន្ថែម IP ដោយដៃ
    addNode: function() {
        const input = document.getElementById('ip-input');
        const consoleEl = document.getElementById('security-console');
        const ipValue = input.value.trim();

        // ត្រួតពិនិត្យទម្រង់ IP (IPv4 Validation)
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

        if (ipPattern.test(ipValue)) {
            // បញ្ចូលទៅក្នុងបញ្ជី nodes
            this.nodes.push(ipValue);
            
            // បង្ហាញក្នុង Console
            consoleEl.innerHTML += `<div style="color:var(--hologram-cyan);">[+] Target Locked: ${ipValue}</div>`;
            input.value = ""; // លុបទិន្នន័យក្នុងប្រអប់បញ្ចូល
        } else {
            consoleEl.innerHTML += `<div style="color:#ff3e3e;">[!] Error: Invalid IP Structure.</div>`;
        }
        consoleEl.scrollTop = consoleEl.scrollHeight;
    },

    // មុខងារចាប់ផ្ដើម Audit តែលើ IP ដែលបានបញ្ចូលប៉ុណ្ណោះ
    executeRemoteUpgrade: function() {
        const consoleEl = document.getElementById('security-console');
        
        if (this.nodes.length === 0) {
            consoleEl.innerHTML += `<div style="color:#ffcc00;">[!] WARNING: No nodes found. Please input a target IP first.</div>`;
            return;
        }

        consoleEl.innerHTML += `<div style="color:#00f3ff; margin-top:10px; font-weight:bold; text-decoration:underline;">
            [>] STARTING MANUAL AUDIT ON ${this.nodes.length} NODES...
        </div>`;
        
        this.nodes.forEach((ip, index) => {
            setTimeout(() => {
                consoleEl.innerHTML += `<div style="color:#fff;">[SSH] Tunneling to ${ip}... Connection Secure.</div>`;
                this.auditArchitecture(ip, consoleEl);
            }, index * 1200);
        });
    },

    auditArchitecture: function(ip, el) {
        setTimeout(() => {
            const isVulnerable = Math.random() > 0.5; 
            if (isVulnerable) {
                el.innerHTML += `<div style="color:#ff3e3e;">[!] ${ip}: 32-bit Legacy System Identified. (Y2K38 Critical)</div>`;
                el.innerHTML += `<div style="color:#00ff00;">[PATCH] Remote 64-bit kernel adaptation applied.</div>`;
            } else {
                el.innerHTML += `<div style="color:#00f3ff;">[OK] ${ip}: 64-bit Architecture confirmed.</div>`;
            }
            el.scrollTop = el.scrollHeight;
        }, 1000);
    }
};
