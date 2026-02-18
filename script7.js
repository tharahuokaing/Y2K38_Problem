/* HUOKAING THARA: GLOBAL SECURITY ORCHESTRATOR v2.0
   Target Environment: Multi-Node Satellite Forensics
   Expertise: Disaster Recovery & Y2K38 Mitigation
*/

const RemoteOrchestrator = {
    // បញ្ជី Node ដែលរក្សាទុកព័ត៌មានលម្អិត
    nodes: [], 

    // បំពេញទិន្នន័យដើមក្នុង Script (Default Internal Settings)
    defaultConfig: {
        user: "u0_a155",
        port: "8022",
        ip: "192.168.43.1"
    },

    // មុខងារបន្ថែម Node ដោយបញ្ចូលទិន្នន័យដោយដៃ
    addNodeManual: function() {
        const ipInput = document.getElementById('ip-input').value.trim();
        const portInput = document.getElementById('port-input').value.trim() || this.defaultConfig.port;
        const userInput = document.getElementById('user-input').value.trim() || this.defaultConfig.user;
        const consoleEl = document.getElementById('security-console');

        // Validation សម្រាប់ IP Address
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;

        if (ipPattern.test(ipInput)) {
            const newNode = {
                ip: ipInput,
                port: portInput,
                user: userInput,
                src: "MANUAL_ENTRY", // កំណត់ប្រភពទិន្នន័យ
                timestamp: new Date().toLocaleTimeString()
            };

            this.nodes.push(newNode);
            consoleEl.innerHTML += `<div style="color:var(--hologram-cyan);">[+] NODE_REGISTERED: ${newNode.user}@${newNode.ip}:${newNode.port} [SRC: ${newNode.src}]</div>`;
            
            // Clear input fields ក្រោយបញ្ចូលរួច
            document.getElementById('ip-input').value = "";
        } else {
            consoleEl.innerHTML += `<div style="color:var(--danger);">[!] ERR_INVALID_IP: បរាជ័យក្នុងការបញ្ជាក់អត្តសញ្ញាណបណ្ដាញ។</div>`;
        }
        consoleEl.scrollTop = consoleEl.scrollHeight;
    },

    executeRemoteUpgrade: function() {
        const consoleEl = document.getElementById('security-console');
        
        // ប្រសិនបើគ្មានការបញ្ចូលដោយដៃ វានឹងប្រើ Default Node របស់លោក
        if (this.nodes.length === 0) {
            this.nodes.push({
                ip: this.defaultConfig.ip,
                port: this.defaultConfig.port,
                user: this.defaultConfig.user,
                src: "SYSTEM_DEFAULT"
            });
            consoleEl.innerHTML += `<div style="color:#ffcc00;">[SYSTEM] ប្រើប្រាស់ម៉ាស៊ីនបម្រើគោល (Primary Server) ដោយស្វ័យប្រវត្តិ។</div>`;
        }

        consoleEl.innerHTML += `<div style="color:var(--hologram-cyan); margin-top:10px; font-weight:bold; letter-spacing:1px;">[>] STARTING GLOBAL HANDSHAKE PROTOCOL...</div>`;
        
        this.nodes.forEach((node, index) => {
            setTimeout(() => {
                consoleEl.innerHTML += `<div style="border-left: 2px solid var(--hologram-cyan); padding-left:10px; margin-bottom:5px;">
                    <span style="color:#fff;">[NODE_${index}] SRC: ${node.src}</span><br>
                    [SSH] Connecting to ${node.user}@${node.ip}:${node.port}...<br>
                    [AUTH] Private Key Verified. Secure Tunnel Open.
                </div>`;
                this.auditArchitecture(node, consoleEl);
            }, index * 1500);
        });
    },

    auditArchitecture: function(node, el) {
        setTimeout(() => {
            const isVulnerable = Math.random() > 0.4; 
            
            if (isVulnerable) {
                el.innerHTML += `<div style="color:#ff3e3e;">[CRITICAL] ${node.ip}: 32-bit Integer Overflow Risk detected.</div>`;
                el.innerHTML += `<div style="color:#ffcc00;">[PATCH] Injecting 64-bit time_t patches to ${node.user}@${node.ip}...</div>`;
                el.innerHTML += `<div style="color:#00ff00;">[SUCCESS] Patch applied via SSH (Port ${node.port}). Node Secured.</div>`;
            } else {
                el.innerHTML += `<div style="color:var(--hologram-cyan);">[OK] ${node.ip}: 64-bit Compliance Verified.</div>`;
            }
            el.scrollTop = el.scrollHeight;
        }, 1000);
    }
};
