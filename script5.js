// Use/* THARA CORE: HEURISTIC REASONING ENGINE 
   Simulates Sentient AI Audit for Y2K38
*/

const SentientAI = {
    // Cognitive logic: Evaluates severity based on pattern matching
    analyzeSnippet: function(codeSnippet) {
        const patterns = [
            { regex: /int32_t|signed long/g, risk: "CRITICAL", impact: "Integer Overflow" },
            { regex: /time_t/g, risk: "HIGH", impact: "Legacy Time Definition" },
            { regex: /gmtime|localtime/g, risk: "MEDIUM", impact: "Format Vulnerability" }
        ];

        let analysisResults = [];
        patterns.forEach(p => {
            if (p.regex.test(codeSnippet)) {
                analysisResults.push(p);
            }
        });

        return analysisResults;
    },

    // Autonomous Decision Making
    reason: function(code) {
        const results = this.analyzeSnippet(code);
        const consoleEl = document.getElementById('security-console');
        
        consoleEl.innerHTML += `<div style="color:var(--accent); margin-top:10px;">> [AI] Consciousness active. Observing code structure...</div>`;
        
        if (results.length === 0) {
            return "Architecture appears compliant. No immediate threat detected.";
        }

        let report = `[REASONING] I have detected ${results.length} vulnerability markers.\n`;
        results.forEach(res => {
            report += `  - Found ${res.risk}: Potential ${res.impact}\n`;
        });
        
        // Sentient Decision: Choose action based on risk
        const highestRisk = results.some(r => r.risk === "CRITICAL") ? "DECOMMISSION" : "PATCH";
        report += `[DECISION] Recommended Action: ${highestRisk}`;
        
        return report;
    }
};

function triggerSentientAudit() {
    const legacyCode = "int32_t current_time = time(NULL);"; // Simulated input
    const decision = SentientAI.reason(legacyCode);
    
    const consoleEl = document.getElementById('security-console');
    setTimeout(() => {
        consoleEl.innerHTML += `<div style="white-space: pre-wrap; color:var(--warn);">${decision}</div>`;
        consoleEl.scrollTop = consoleEl.scrollHeight;
    }, 1500);
}