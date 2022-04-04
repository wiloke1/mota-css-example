const defaultCss = `
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

module.exports = {
  defaultCss,
  useRtl: true,
  breakpoints: {
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
  custom: {
    "color-primary": "var(--color-primary)",
    "color-secondary": "var(--color-secondary)",
  },
};
