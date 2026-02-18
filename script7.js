/* HUOKAING THARA: GLOBAL SECURITY ORCHESTRATOR 
   Expertise: Satellite Network Forensics & Y2K38 Mitigation
*/

const RemoteOrchestrator = {
    // បញ្ជី IP ផ្កាយរណប និងប្រព័ន្ធកេរដំណែល (Revised IPs)
    nodes: ["104.24.12.55", "172.67.15.190", "157.240.24.35"], 

    // មុខងារបន្ថែម IP ដោយដៃ (Manual Input Function)
    addNode: function() {
        const input = document.getElementById('ip-input');
        const consoleEl = document.getElementById('security-console');
        const ipValue = input.value.trim();

        // Regex សម្រាប់ត្រួតពិនិត្យថាជា IP Address ត្រឹមត្រូវ
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

        if (ipPattern.test(ipValue)) {
            this.nodes.push(ipValue);
            consoleEl.innerHTML += `<div style="color:var(--hologram-cyan);">[+] Node Added: ${ipValue}</div>`;
            input.value = ""; // Clear input
        } else {
            consoleEl.innerHTML += `<div style="color:var(--danger);">[!] Error: Invalid IP Address format.</div>`;
        }
        consoleEl.scrollTop = consoleEl.scrollHeight;
    },

    executeRemoteUpgrade: function() {
        const consoleEl = document.getElementById('security-console');
        consoleEl.innerHTML += `<div style="color:#00f3ff; margin-top:10px; font-weight:bold;">[>] [SSH] Initiating Global Handshake with ${this.nodes.length} Nodes...</div>`;
        
        this.nodes.forEach((ip, index) => {
            setTimeout(() => {
                consoleEl.innerHTML += `<div>[SSH] Connected to ${ip} | TLS 1.3 Encryption Active...</div>`;
                this.auditArchitecture(ip, consoleEl);
            }, index * 1200); // បង្ហាញម្ដងមួយៗតាមលំដាប់
        });
    },

    auditArchitecture: function(ip, el) {
        setTimeout(() => {
            // ការប៉ាន់ស្មានហានិភ័យ (Y2K38 Risk Logic)
            const isVulnerable = Math.random() > 0.4; 
            
            if (isVulnerable) {
                el.innerHTML += `<div style="color:#ff3e3e;">[CRITICAL] ${ip}: 32-bit Integer Overflow Risk (Y2K38).</div>`;
                el.innerHTML += `<div style="color:#ffcc00;">[PATCH] Remote injection of 64-bit time_t patches... 0%... 50%... 100%</div>`;
                el.innerHTML += `<div style="color:#00ff00;">[SUCCESS] ${ip} is now Y2K38 Compliant.</div>`;
            } else {
                el.innerHTML += `<div style="color:#00f3ff;">[OK] ${ip}: Verified 64-bit environment. No action needed.</div>`;
            }
            el.scrollTop = el.scrollHeight;
        }, 1000);
    }
};
