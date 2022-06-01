const { rtl, pfs, groupHover } = require("mota-css");
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

function log(...arr) {
  return console.log(
    ...arr.map(([text, color]) => `\x1b[${color}m${text}\x1b[0m`)
  );
}

function numberOfLines() {
  return ({ input, prevInput, addComponent }) => {
    addComponent(`[class*="lines"] {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}`);

    const classNames = input.match(/lines-\d*/g);
    if (classNames) {
      classNames.forEach((className) => {
        const lineClamp = Number(className.replace(/lines-/g, ""));
        addComponent(`.${className} { -webkit-line-clamp: ${lineClamp} }`);
        if (prevInput && !prevInput.includes(className)) {
          log([`[Compiled successfully]`, 32], [`(class: ${className})`, 35]);
        }
      });
    }
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
    groupHover(),
    numberOfLines(),
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
