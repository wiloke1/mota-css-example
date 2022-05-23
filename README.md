# MOTA CSS

Mota css ( Atomic css )

[![npm version](https://img.shields.io/npm/v/mota-css.svg)](https://www.npmjs.com/package/mota-css)


### Start project
`npm start` or `yarn start`

### Compile atomic css
`npm run mota-css:watch` or `yarn mota-css:watch`

### mota-css.config.js
```js
module.exports = {
  input: ["./src/**/*.jsx", "./src/**/*.js"],
  output: "./src/mota-css.css",
  defaultCss: `
    body {
      font-size: 14px;
    }
  `,
  useRtl: true,
  customValue(value) {
    // customValue
    console.log(value);
    return value;
  },
  breakpoints: {
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  custom: {
    "color-primary": "var(--color-primary)",
    "color-secondary": "var(--color-secondary)",
    "color-tertiary": "var(--color-tertiary)",
    "color-quaternary": "var(--color-quaternary)",
  },
};
```

### Intelligent Mota CSS tooling for VS Code

<https://marketplace.visualstudio.com/items?itemName=wiloke.mota-css-intellisense>


<img src="https://raw.githubusercontent.com/wiloke1/mota-css-example/main/.github/banner.png" alt="" />

### Html
```html
<div class="c:red c:blue|h bgc:color-primary fz:20px w:30%@md p:30px@md m:20px@+300px pos:relative!"></div>
```
### Generated css code
```css
.c\:red { color: red }
.c\:blue\|h:hover { color: blue }
.bgc\:color-primary { background-color: var(--color-primary) }
.fz\:20px { font-size: 20px }
.pos\:relative\! { position: relative !important }
@media (max-width:300px) { 
.m\:20px\@\+300px { margin: 20px } }
@media (min-width:992px) { 
.p\:30px\@md { padding: 30px }
.w\:30\%\@md { width: 30% } }
```

### Use in js or ts
```js
import { atomic } from 'mota-css';

atomic.setConfig({
  breakpoints: {
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  cache: false,
  parentSelector: '',
  exclude: [],
  useRtl: true,
  custom: {
    'color-primary': 'var(--color-primary)',
    'color-secondary': 'var(--color-secondary)'
  },
});

atomic.customValue(value => {
  console.log(value);
  return value;
});

atomic
  .find(`<div class="c:red c:blue|h fz:20px w:30%@md p:30px@md m:20px@+300px pos:relative!"></div>`);
  .find(`const className = "bgc:blue";`);

const unsubscribe = atomic.subscribe(() => {
  console.log(atomic.getCss());
});
```