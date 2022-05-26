const { rtl, pfs } = require("mota-css");
const { baseStyles } = require("./src/baseStyles");

module.exports = {
  input: ["./src/**/*.jsx", "./src/**/*.js"],
  output: "./src/mota-css.css",
  defaultCss: baseStyles,
  cache: true,
  plugins: [rtl(), pfs()],
  // customValue(value) {
  //   // customValue
  //   console.log(value);
  //   return value;
  // },
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
