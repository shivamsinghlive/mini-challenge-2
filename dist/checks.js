// Shared by the UI and local baseline probes. This is an experimental client-side
// verifier, not an authentication boundary. Never treat its result as a server token.
export function checkHoneypot(value){return String(value??'').trim()===''}
export function checkVibe(picked,answer){return picked===answer}
export function checkBalance({coverageMs,span,moves,durationMs}){return [coverageMs,span,moves,durationMs].every(Number.isFinite)&&coverageMs>=1400&&coverageMs<=durationMs&&span>=.10&&span<=1&&Number.isInteger(moves)&&moves>=3&&durationMs>=1400&&durationMs<=9000}
export function checkReaction({latencyMs,distance=0,radius=1,windowMs=1200}){return [latencyMs,distance,radius,windowMs].every(Number.isFinite)&&latencyMs>=80&&latencyMs<=windowMs&&radius>0&&distance>=0&&distance<=radius}
export function runBaselines(){return [
 {name:'The eager form filler',kind:'automation baseline',expected:false,accepted:checkHoneypot('https://example.test'),method:'Nonempty honeypot submitted to the shared checker.'},
 {name:'The screenshot tourist',kind:'automation baseline',expected:false,accepted:checkReaction({latencyMs:3100,distance:0,radius:1,windowMs:2400}),method:'A 3.1-second-old response exceeds even the relaxed live reaction window.'},
 {name:'The perfectly still genius',kind:'automation baseline',expected:false,accepted:checkBalance({coverageMs:1700,span:0,moves:0,durationMs:5500}),method:'Stationary control: adequate overlap cannot compensate for no tracking movement.'},
 {name:'The human-shaped control',kind:'synthetic positive control — not a person',expected:true,accepted:checkHoneypot('')&&checkVibe(2,2)&&checkBalance({coverageMs:1800,span:.35,moves:24,durationMs:4300})&&checkReaction({latencyMs:340,distance:20,radius:50,windowMs:1200}),method:'Generated passing aggregates validate that the checker admits a plausible input. This is not a real human trial.'}
].map(r=>({...r,checkBehavedAsExpected:r.accepted===r.expected}))}
