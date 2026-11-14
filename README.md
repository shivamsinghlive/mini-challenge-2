# Keytos Hack · Mini-challenge 02 · Humans-only CAPTCHA

This repo holds two entries:

| Entry | Where | What it is |
|---|---|---|
| **GHOSTCHA, the Haunted Disco CAPTCHA** | [`ghostcha/`](ghostcha/) · [demo video](ghostcha/ghostcha-demo.mp4) | Three rounds (a word that only exists in moving static, a live funk rhythm game, a bone clock) plus prompt-injection traps. Humans pass in about 20 seconds. |
| **GHOST//FUNK** | [`dist/`](dist/) (documented below) | A haunted-vinyl motion-perception CAPTCHA: scratch the record and catch the ghost hiding in coordinated motion. |

---

# GHOST//FUNK — Find the soul in the static.

A completely new build for Keytos Hack Mini-challenge 02. The previous MEATSPACE stages, theme layers, and legacy AI capture assets have been removed from the shipped app.

## One mechanic. Two hauntings.

Drop the needle on a haunted record. Hold the vinyl, drag to scratch, use the slider, or enable hands-free spin. The CRT contains a seeded field of identical dots. Within a ghost silhouette, dots share a motion phase; background dots move gently with independent phases. Look for the coordinated shape and tap its body.

Catch two freshly generated ghosts to pass the demonstration. Misses relocate the ghost; three misses restart the hunt. Captures require at least 900 ms of actual motion play. Sound is optional and gives no location clue. Slow Groove slows essential motion. Keyboard users can play hands-free, move the capture cursor with arrow keys, and press Enter.

The visual direction is a haunted pirate-radio arcade: lavender cabinet, green CRT, real interactive vinyl, orange record label, optional original synthesized funk, and a downloadable Soul License.

## Run

No build or runtime dependencies:

```sh
python3 -m http.server 4174 --bind 127.0.0.1 --directory dist
```

Development-only checks:

```sh
npm ci
npm test
npm run check
```

Eight tests cover seeded fields, coherent vs. independent motion, capture bounds and play-time requirements, a complete two-capture flow, fresh fields after misses, three-miss loss/reset, and controls that cannot independently grant admission. The UI harness is source-aware, instrumented synthetic QA—not a human or independent AI trial.

## Actual feedback and evidence scope

A live human preview reported that the first ghost was visible but too hard. In response, the ghost was enlarged, background motion was reduced, and the capture boundary was widened. This is qualitative feedback, not a measured pass-rate or a confirmed under-30-second completion.

No independent AI evaluation of this new mechanic has been established. Old prototype AI evidence is not presented as evidence for GHOST//FUNK. Field Notes exports this tab's actual aggregate capture outcomes and play time, with limitations included.

This is a browser-local motion-perception experiment, not production authentication. Source-aware agents can recover the shape; multi-frame analysis may solve it. We do not claim “no bot can solve it.” A production system would require server-side challenge adjudication, replay protection, rate limits, adversarial evaluation, and an independently validated accessible alternative. Motion perception is essential here; keyboard controls and slow mode do not make it universally accessible.

## Privacy

No personal data, account, camera, microphone, biometrics, fingerprints, analytics, cookies, or browser storage. Raw pointer paths are not stored. Only temporary aggregate outcomes remain in memory. All fonts/art are local. Downloads are explicit. Hosting and its sign-in gate have their normal access behavior.

## Submission copy

**Title:** GHOST//FUNK — Find the Soul in the Static

**Description:** A haunted record. A ghost hiding in coordinated motion. Drop the needle, scratch the vinyl, spot the soul in the static, and trap it twice. A fresh motion-perception CAPTCHA experiment wrapped in a mutant pirate-radio arcade, with original synthesized funk, hands-free spin, slow groove, keyboard/touch controls, zero personal data collection, and a downloadable Soul License. No buses. No crosswalks. Just boo-gie.

Font licenses are in `dist/fonts/`. Artwork and motion field are original CSS/canvas code.
