# Project -1 Frontend

This is the frontend for **Project -1**, built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Project Structure

```
frontend/
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── public/
│   └── Media/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── page.module.css
│   ├── about/
│   ├── dashboard/
│   ├── pricing/
│   └── product/
├── Components/
│   ├── Footer.js
│   ├── Navbar.js
│   ├── About/
│   ├── Home/
│   ├── Pricing/
│   └── Product/
└── .next/
    └── (build output)
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Install dependencies:

    ```sh
    npm install
    ```

2. Run the development server:

    ```sh
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```sh
npm run build
npm start
```

## Features

- **Next.js** app directory structure
- **Tailwind CSS** via PostCSS
- Modular components in `Components/`
- Pages: Home, About, Dashboard, Pricing, Product

## Customization

- Edit global styles in [`app/globals.css`](app/globals.css)
- Add or modify pages in [`app/`](app/)
- Add or update components in [`Components/`](Components/)

## License

This project is for personal or educational use.

---