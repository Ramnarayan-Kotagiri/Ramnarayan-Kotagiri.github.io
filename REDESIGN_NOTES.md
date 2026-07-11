# Redesign notes

## Concept

The Living Plantation Twin combines a geospatial field-intelligence interface, agronomy notebook, research portfolio, and engineering case study. Forest shadow, canopy, new-frond, soil, sunlight, water, and mist colors identify physical, observed, modelled, and decision layers without making the whole site green.

## Audit findings

The previous site mixed a current static HTML/CSS/JavaScript page with obsolete Create React App output, source maps, a precache manifest, and a Workbox service worker. It relied on remote GitHub Open Graph cards and a third-party icon stylesheet, had no real mobile navigation, and presented repositories as an undifferentiated wall. The older Angular portfolio supplied a résumé, a third verified publication, skills history, and the older experience wording. The GitHub profile supplied the stated small-scale-farmer, GIS, image-processing, machine-learning, AWS, NoSQL, and MEAN-stack direction.

## Information architecture

1. Positioning and Plantation Twin Explorer
2. Engineering direction
3. Oil Palm Cultivation Application case study
4. Existing-to-future evolution
5. Conceptual system architecture
6. Curated engineering work and compact archive
7. Experience, research, capabilities, about, and contact

## Twin Explorer

The explorer is lightweight inline SVG with native JavaScript. It supports field, moisture, canopy, and sensor layers plus six keyboard-operable field blocks. Every metric is explicitly simulated or illustrative. A live text panel and SVG description provide a nonvisual equivalent.

## Privacy and truthfulness

The closed-source cultivation application's private repository is never linked. Only verified high-level architecture and route categories were used. No private code, content, data, endpoints, screenshots, client claims, impact metrics, or deployment claims appear publicly.

## Accessibility and performance

The site includes semantic landmarks, a skip link, visible focus states, keyboard controls, a real mobile menu, reduced-motion handling, readable static descriptions, and touch-sized controls. It has no framework, visualization library, runtime repository fetch, analytics, or service worker.

## Legacy artifacts removed

The deployment removes old CRA manifests, hashed bundles, source maps, Workbox service worker, precache manifest, obsolete fonts, and unused illustrations. `script.js` also unregisters any previously installed service worker and clears old caches once for returning visitors.

## Deployment and limitations

The account-level Pages repository continues to deploy from the root of `master`, preserving the existing `/` base URL. The twin uses simulated data and has no geographic accuracy. Its cultivation-app visual is an original reconstruction. Employment recency, résumé freshness, publication authorship metadata, and certification status remain in `CONTENT_REVIEW.md`.
