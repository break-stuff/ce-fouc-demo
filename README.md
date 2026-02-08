# Preventing FOUC with Web Components

This project is a small set of demo pages that compare multiple approaches to reducing **Flash of Unstyled Content (FOUC)** on page load when working with Web Components and Custom Elements.

## The Problem

When using Web Components (especially when lazy-loaded from a CDN), there's often a brief moment where the custom elements appear as unstyled content before the browser registers and upgrades them. This creates a jarring visual experience known as FOUC.

## The Solutions (Compared)

This repo demonstrates multiple strategies:

1. **Old CSS-only approach** (visibility-based)
2. **JavaScript-based approach** (wait for definitions + fallback timeout)
3. **Modern CSS approach** (custom properties + `:has(:not(:defined))` + timeout)

You can read the background article here:
https://dev.to/stuffbreaker/reducing-fouc-with-web-components-1jnh

## Demo Pages

This project includes four demo pages that show the problem and three solutions:

### 1. `index.html` - With FOUC (The Problem)

This page intentionally **does not** include a FOUC fix, so you can see the flash of unstyled content in action.

### 2. `old-css-solution.html` — Old CSS Solution (Visibility)

Uses the classic rule:

```css
:not(:defined) {
  visibility: hidden;
}
```

It’s simple and fast, but can cause layout shifts and accessibility issues.

### 3. `js-solution.html` — JavaScript Solution (Wait for definitions)

Uses `customElements.whenDefined()` + `Promise.allSettled()` to wait for component registration, with a 200ms fallback timeout.

### 4. `css-solution.html` — Modern CSS Solution (Timeout + :has)

Uses `@property`, `:has(:not(:defined))`, and a short animation timeout to hide content only while undefined elements exist.

### Dynamic Undefined Elements

The left nav includes an **Add Undefined Element** button so you can see how each approach behaves when an undefined custom element is added after load.

## Running the Project

### Prerequisites

- Node.js installed on your system

### Installation & Running

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The server will start and you can view the demo in your browser. Use the side navigation to jump between the problem page and the different solution pages.

## Browser Compatibility

The modern CSS technique works in browsers that support:
- CSS `:has()` pseudo-class
- CSS `:not()` pseudo-class
- CSS `:defined` pseudo-class
