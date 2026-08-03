# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page bucket list app ("나의 버킷 리스트") built with vanilla JavaScript, HTML5, and Tailwind CSS (via CDN). No build step, no package manager, no backend — data persists entirely in the browser's `localStorage`.

## Running the app

There is no build/install step. Open `index.html` directly in a browser, or serve it locally:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

There are no tests, linter, or bundler configured in this repo.

## Architecture

Two-file JS architecture with a strict separation between data and view:

- **`js/storage.js`** — `BucketStorage`, a static object that is the sole interface to `localStorage`. Owns the data shape (`id`, `title`, `completed`, `createdAt`, `completedAt`) and all CRUD/filtering/stats logic. Has no DOM knowledge. Every operation (`addItem`, `updateItem`, `deleteItem`, `toggleComplete`) reads the full list from storage, mutates it, and writes it back — there is no in-memory cache.
- **`js/app.js`** — `BucketListApp`, an ES6 class instantiated once as the global `app` (created on `DOMContentLoaded`). Owns all DOM interaction: event binding, the edit modal, and rendering. Calls into `BucketStorage` for every data operation, then calls `this.render()` to fully re-render the list and stats from scratch (no partial DOM updates, no virtual DOM).

Data flow is one-directional and non-reactive: user action → `BucketStorage` mutates `localStorage` → `app.render()` re-reads via `BucketStorage.getFilteredList()`/`getStats()` and rebuilds `bucketListContainer.innerHTML`.

Rendered list items use inline `onclick="app.handleToggle('${id}')"` handlers (not `addEventListener` delegation), which is why `app` must remain a global. `createBucketItemHTML()` escapes item titles via `escapeHtml()` (textContent→innerHTML trick) for safe HTML embedding, and separately escapes single quotes for the inline `onclick` JS-string context — these are two distinct escaping steps for two different contexts, both required.

## Files

- `index.html` — all markup (stats cards, add form, filter buttons, list container, edit modal); loads `js/storage.js` then `js/app.js`.
- `css/styles.css` — supplements Tailwind: filter button active state, item slide-in/modal animations, mobile breakpoint overrides, `prefers-color-scheme: dark` overrides.
