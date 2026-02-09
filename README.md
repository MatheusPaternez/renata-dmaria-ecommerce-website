
# Renata D'Maria — E-commerce Website

An elegant, responsive single-page e-commerce demo built with React, Vite and Tailwind CSS. This project showcases a small product catalog, product details, and a shopping cart powered by React Context.

## Demo

- Local development: run the app locally (instructions below).

## Features

- Product listing with images and prices
- Product detail pages with descriptions
- Add to cart and persistent cart state via React Context
- Responsive layout using Tailwind CSS
- Minimal, accessible UI components

## Tech stack

- Framework: React (JSX)
- Bundler / dev server: Vite
- Styling: Tailwind CSS + PostCSS
- State: React Context (CartContext)
- Package manager: npm (project uses package.json)

## Prerequisites

- Node.js (v16 or newer recommended)
- npm (bundled with Node.js) or an equivalent compatible package manager

## Quick start

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

## Project structure (high level)

- [index.html](index.html) — App entry HTML
- [package.json](package.json) — Scripts and dependencies
- [vite.config.js](vite.config.js) — Vite configuration
- [tailwind.config.js](tailwind.config.js) — Tailwind setup
- [src/main.jsx](src/main.jsx) — App bootstrap and rendering
- [src/App.jsx](src/App.jsx) — Top-level routes / layout
- [src/index.css](src/index.css) — Tailwind imports and global styles
- [src/components/](src/components/) — React UI components (Home, Header, Footer, ProductDetail, CartView, etc.)
- [src/context/CartContext.jsx](src/context/CartContext.jsx) — Shopping cart context and provider
- [src/data/products.js](src/data/products.js) — Sample product data
- [src/assets/] — Images used in the UI

## Important files

- Home page: [src/components/Home.jsx](src/components/Home.jsx)
- Product page: [src/components/ProductDetail.jsx](src/components/ProductDetail.jsx)
- Cart UI: [src/components/CartView.jsx](src/components/CartView.jsx)
- Cart state logic: [src/context/CartContext.jsx](src/context/CartContext.jsx)

## How the cart works

The cart is implemented with a React Context in `src/context/CartContext.jsx`. Components consume the context to add, remove, and list cart items. The context keeps cart state in memory for the session—persistence (localStorage or backend) can be added as an enhancement.

## Styling

Tailwind CSS provides utility-first styling. Customize design tokens in [tailwind.config.js](tailwind.config.js) and add global rules in [src/index.css](src/index.css).

## Extending the project

Ideas for next steps and enhancements:

- Persist cart state to localStorage or a backend API
- Add client-side routing for categories and filters
- Integrate a real product API or CMS
- Implement authentication and user accounts
- Add tests (Jest/React Testing Library) and CI pipeline
- Add SEO and metadata for product pages

## Deployment

This project builds into static assets via `npm run build`. You can deploy the `dist` output to platforms like Vercel, Netlify, or any static-hosting provider.

## Contributing

Contributions are welcome. Open an issue or pull request describing your changes. Keep PRs focused and include a short description of the motivation and testing steps.

## License

This repository has no license specified. Add a `LICENSE` file if you want to grant reuse rights.

## Contact

If you need help or want to collaborate, open an issue in this repository.
