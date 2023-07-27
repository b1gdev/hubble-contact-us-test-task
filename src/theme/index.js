const breakpoints = {
  values: {
    xsm: 375,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    "2xl": 1536,
    "3xl": 1652,
  },
};
const typography = {
  rootFontSize: 16,
  fontFamily: `system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
};
typography.pxToRem = (value) => `${(value / typography.rootFontSize).toFixed(3)}rem`;

const theme = {
  palette: {
    white: "#fff",
    gray: {
      light: "#2B3235",
    },
    purple: {
      dark: "#464CA7",

      light: "#ECEDFF",
    },
  },
  typography: {
    rootFontSize: 16,
    pxToRem(value) {
      return `${(value / this.rootFontSize).toFixed(3)}rem`;
    },
    fontFamilyPolySans: `PolySans-Trial, ${typography.fontFamily}`,
    fontFamilyNeueHaasUnica: `"Neue Haas Unica", ${typography.fontFamily}`,
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  breakpoints: {
    ...breakpoints,
    up: (key) => `@media (min-width: ${breakpoints.values[key]}px)`,
    down: (key) => `@media (max-width: ${breakpoints.values[key] - 0.02}px)`,
    between: (min, max) =>
      `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${
        breakpoints.values[max] - 0.02
      }px)`,
  },
};

export default theme;
