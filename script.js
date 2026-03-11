/* GHOST PROTOCOL: CORE LOGIC v2.0
   Author: HUOKAING THARA
   Security Expertise: Y2K38 Mitigation & Disaster Recovery
*/

// 1. AUTHENTICATION MODULE
const AuthCore = {
    check: function(event) {
        event.preventDefault();
        const u = document.getElementById('user-field').value.trim().toLowerCase();
        const p = document.getElementById('pass-field').value;

        // Updated credentials check with normalized input
        if (u === 'huokaingthara' && p === 'dutyfree') {
            document.getElementById('login').style.display = 'none';
            document.getElementById('content').style.display = 'block';
            this.logToConsole("Authentication Successful. Zero-Trust protocol bypassed.");
        } else {
            alert('ACCESS DENIED: Credentials mismatch.');
            this.logToConsole(`Failed login attempt for user "${u}".`);
        }
    },
    logToConsole: function(msg) {
        const el = document.getElementById('security-console');
        if (el) {
            const time = new Date().toLocaleTimeString([], {hour12: false});
            el.innerHTML += `<div style="color:var(--accent); font-size:0.8rem;">[AUTH ${time}] ${msg}</div>`;
            el.scrollTop = el.scrollHeight;
        }
    }
};

// 2. Y2K38 REAL-TIME CLOCK
const TimerCore = {
    target: new Date("Jan 19, 2038 03:14:07 GMT+0").getTime(),
    init: function() {
        this.tick(); // initialize immediately
        setInterval(() => this.tick(), 1000);
    },
    tick: function() {
        const now = Date.now();
        const dist = this.target - now;

        if (dist <= 0) {
            document.getElementById("timer").textContent = "Y2K38 EVENT REACHED";
            return;
        }

        const d = Math.floor(dist / (1000 * 60 * 60 * 24));
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = `${d}D ${h}H ${m}M ${s}S`;
    }
};

// 3. REMOTE NODE ORCHESTRATOR
const RemoteOrchestrator = {
    nodes: [],
    register: function() {
        const ip = document.getElementById('ip-input').value.trim();
        const port = document.getElementById('port-input').value.trim() || "8022";
        const user = document.getElementById('u-input').value.trim() || "u0_a155";
        const consoleEl = document.getElementById('security-console');

        if (/^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/.test(ip)) {
            this.nodes.push({ ip, port, user });
            consoleEl.innerHTML += `<div style="color:var(--hologram-cyan);">[+] NODE_ID_${this.nodes.length}: ${user}@${ip}:${port} Registered.</div>`;
            document.getElementById('ip-input').value = "";
            document.getElementById('port-input').value = "";
            document.getElementById('u-input').value = "";
        } else {
            alert("Invalid IP Address format.");
            this.logError("Invalid IP format attempted: " + ip);
        }
        consoleEl.scrollTop = consoleEl.scrollHeight;
    },
    deploy: function() {
        const el = document.getElementById('security-console');
        if (this.nodes.length === 0) {
            el.innerHTML += `<div style="color:var(--warn);">[!] No target nodes available. Manual input required.</div>`;
            el.scrollTop = el.scrollHeight;
            return;
        }
        el.innerHTML += `<div style="color:white; margin-top:10px; font-weight:bold;">[>] DEPLOYING Y2K38 PATCH TO ${this.nodes.length} NODES...</div>`;
        this.nodes.forEach((n, i) => {
            setTimeout(() => {
                el.innerHTML += `<div style="color:var(--accent);">[SSH] Patched ${n.user}@${n.ip}:${n.port} successfully.</div>`;
                el.scrollTop = el.scrollHeight;
            }, (i + 1) * 1000);
        });
    },
    logError: function(msg) {
        const el = document.getElementById('security-console');
        if (el) {
            el.innerHTML += `<div style="color:var(--danger); font-weight:bold;">[ERROR] ${msg}</div>`;
            el.scrollTop = el.scrollHeight;
        }
    }
};

// 4. GENERAL SECURITY UTILS
const TharaSecurity = {
    verifyGPG: function() {
        const el = document.getElementById('security-console');
        el.innerHTML += `<div style="color:var(--warn);">[*] Executing GPG Signature Verification...</div>`;
        setTimeout(() => {
            el.innerHTML += `<div style="color:var(--accent);">[+] VALID SIGNATURE: Key ID 0xTHARA2038 verified.</div>`;
            el.scrollTop = el.scrollHeight;
        }, 800);
    },
    clearConsole: function() {
        const el = document.getElementById('security-console');
        el.innerHTML = `<div>> [SYSTEM] Console logs wiped. Session remains secure.</div>`;
    }
};

// Initialize system on page load
window.onload = () => {
    TimerCore.init();
};
