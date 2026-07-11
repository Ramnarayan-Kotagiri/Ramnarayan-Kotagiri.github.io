# The Living Plantation Twin

Ramnarayan Kotagiri's account-level GitHub Pages portfolio. It presents verified software-engineering and research work alongside a clearly labelled conceptual agricultural digital-twin demonstration.

## Local setup

No dependency installation or build step is required. Open `index.html` directly or serve the repository root with any static server:

```powershell
npx serve .
```

## Architecture

- `index.html`: semantic page structure and static fallback content
- `styles.css`: design tokens, responsive layout, visualization states, and reduced-motion rules
- `data.js`: projects, publications, capabilities, and simulated twin block data
- `script.js`: rendering and native interactions
- `assets/`: local identity and SEO assets

The dependency-free site publishes directly from `master` at `/`, avoids a runtime GitHub API dependency, and does not register a service worker.

## Editing content

Edit structured portfolio data in `data.js`. Update biographical and case-study narrative in `index.html`. Preserve the distinctions between existing work, current professional direction, conceptual interfaces, and simulated data.

## Deployment

GitHub Pages serves the root of `master` for `Ramnarayan-Kotagiri.github.io`. Merge tested changes to `master`; no generated build folder or `node_modules` is required.

## Browser support

Current Chrome, Edge, Firefox, and Safari. Essential content remains readable without animation.
