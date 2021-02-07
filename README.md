# Webpack Bootstrap 4 template

### Description

This project contains preconfigured Webpack 4 to work with the following tasks:

- Compile `SCSS` to `CSS`
- Optimize images (`*.png`, `*.jpeg`, `*.gif`)
- Convert `SVG` into inline `'data:image'` format
- Fonts loader
- Automatic copy `static` directory to the `dist` directory
- Production optimization (styles, JavaScript, images)
- Build source maps

### Includes

- Bootstrap 4 (SCSS, JS)
- jQuery
- Popper
- Google Material Icons

### Installation

- Execute a command from the root directory

```
npm install
```

- Use '`index.html`' as home page
- Write Your own JavaScript in the file: `src/js/app.js`
- Also Your styles may be placed in the SCSS file: `src/scss/app.scss`
- Then run the following command to build `dev` bundle:

```
npm run build
```

- **Good luck!**

### Tasks

- Build sources - `npm run build`
- Start file watcher for recompiling - `npm run watch`
- Start webpack dev server - `npm run start`
- Build sources for production (**with optimization**) - `npm run production`
- Clean '`dist`' folder - `npm run clear`

### Tasks

- Listed all batman games on api

```
https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0 // içerisinde
batman geçen oyunların listesi
```

- You can see the detail from the each page

```
https://www.cheapshark.com/api/1.0/games?id=612 // ids verilen oyunun fiyatları
```

- You can discover the deal each game page

```
https://www.cheapshark.com/api/1.0/deals?id=tyTH88J0PXRvYALBjV3cNHd5Juq1qKcu4tG4l
BiUCt4%3D // idi verilen fiyatın detayları

```
