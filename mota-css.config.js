const { rtl, pfs } = require("mota-css");
const { baseStyles } = require("./src/baseStyles");

function pixelToRem(rootFontSize) {
  return ({ styles, addStyles }) => {
    addStyles(
      Object.entries(styles).reduce((obj, [breakpoint, style]) => {
        return {
          ...obj,
          [breakpoint]: Object.entries(style).reduce((obj, [selector, css]) => {
            const [property, value] = css;
            if (/[\d.]*px/g.test(value)) {
              const newValue = value.replace(/[\d.]*px/g, (val) => {
                const num = val.replace("px", "");
                return `${(num * 62.5) / rootFontSize / 10}rem`;
              });
              return {
                ...obj,
                [selector]: [property, newValue],
              };
            }
            return {
              ...obj,
              [selector]: css,
            };
          }, {}),
        };
      }, {})
    );
  };
}

module.exports = {
  input: ["./src/**/*.jsx", "./src/**/*.js"],
  output: "./src/mota-css.css",
  defaultCss: baseStyles,
  cache: true,
  plugins: [
    rtl(),
    pfs(),
    //pixelToRem(100)
  ],
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
