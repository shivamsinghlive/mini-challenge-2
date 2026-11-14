# MEATSPACE — District 404: Offline Souls. Online Chaos.

A cyberpunk club checkpoint for the chronically online and biologically human. Built for **Keytos Hack Mini-challenge 02: Humans-only CAPTCHA**.

## District 404 update

Neon city gate, reactive club reactor, three selectable player signals (CHAOS.KID, GHOST.EXE, SIDE.QUEST), humanity XP, Bouncer.ai DMs with contextual hints and roasts, and a holographic pass. Cosmetic interactions never grant admission or change the verifier. All player choices and chat state stay in memory in this tab.

## The pitch

You have waved back at someone who was waving at someone behind you. That is the qualification we are looking for.

MEATSPACE replaces traffic-light grids with a quick secret handshake:

1. **The vibe:** answer a shuffled everyday-life question. Deliberately described as a warm-up that language models can pass.
2. **The wobble:** keep a fresh moving disco ball inside a spotlight. Progress requires recent control movement, not a static screenshot or one delayed input.
3. **The high five:** return a randomized live visual cue inside a 1.2-second window. Relaxed mode uses 2.4 seconds.

Unlimited retries, pointer/touch/keyboard controls, relaxed timing, optional original synthesized club music, a talking bouncer, and a downloadable SVG admission pass. The designed interaction budget is about 20 seconds; an actual first-time human test is still needed to verify the challenge's 30-second rule.

## Run

No build or runtime dependencies:

```sh
python3 -m http.server 4174 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4174. Fonts and artwork are bundled. There are no third-party asset requests.

Development checks:

```sh
npm ci
npm test
npm run check
```

The dev-only happy-dom harness tests the actual UI module with a synthetic renderer/clock. It validates admission, rejection, retry, reset, and the stationary-overlap regression. It is not a human trial or an independent AI benchmark.

## Evidence: measured vs. unmeasured

- **Observed author AI trial:** the authoring AI used a screenshot-based browser loop, passed the warm-up and the then-current wobble, and missed the live high-five window. The tab exported its aggregate log; the corresponding screenshot is preserved in `dist/evidence/`.
- **Important scope:** this was author-assisted and source-aware, not a blind independent test. Wobble was hardened afterward because the trial exposed a stationary-overlap loophole. The observed high-five result remains a single observation, not a general success rate.
- **Local bot bench:** three deterministic rejection probes exercise the same check functions as the game: nonempty honeypot, stale reaction, and stationary input. A separately labeled synthetic positive control is admitted.
- **Automated QA:** eight tests pass, including full synthetic UI admission and a live-cue timeout. Syntax checks pass.
- **Still needed:** a real first-time human completes the flow in roughly 30 seconds; an independent AI browser agent attempts the deployed page without source access. Neither result has been fabricated.

Use the live **AI agent** entry for a self-labeled AI run. Other runs are self-declared human runs; labels are not identity proof. Download aggregate evidence from the judging panel. New Guest preserves previous runs in this tab, but reload clears them.

## Honest security boundary

This is an experimental, browser-local CAPTCHA demonstrator. It is not production authentication. Source-aware, instrumented, or sufficiently fast agents can bypass client-side checks. It does not claim that human intuition, imperfect timing, event trust flags, or cultural preferences prove identity. The intended experiment is how live visuomotor moments affect a screenshot-and-click agent.

A production version would need server-issued nonces, server-side adjudication, replay resistance, rate limits, independent adversarial trials, and a validated accessible alternative. No such server-backed guarantee is claimed here.

## Privacy

The app requests no account, camera, microphone, biometrics, personal questions, or device fingerprint. No analytics, cookies, browser storage, or outgoing tracking requests. Raw pointer paths are never stored; only transient aggregate timings/pass-fail evidence live in memory. Downloads are explicitly requested. Sites hosting/sign-in infrastructure has its own normal access behavior.

## Submission-ready copy

**Title:** MEATSPACE — District 404

**Description:** Offline souls. Online chaos. Enter a neon cyberpunk club guarded by Bouncer.ai. Choose your signal, charge the city reactor, collect humanity XP, and DM the bouncer for a cheat code or a roast. Get past the velvet rope with three small moments: an everyday human reaction, a wobbly disco-ball spotlight, and a high five that must be returned before the moment passes. Includes responsive illustrated club characters, optional synthesized funk, keyboard/touch controls, relaxed timing, a zero-personal-data design, downloadable admission passes, and a judging panel with honest local bot probes and a recorded author-AI high-five miss. No fake AI-proof statistics. You had to be there.

**Demo order:** explain the three checks → let a first-time person try → run an independent AI attempt → run the bot bench → show the author-AI capture and raw log → download the session evidence.

Font licenses are in `dist/fonts/`. Artwork is original SVG/CSS/canvas code.
