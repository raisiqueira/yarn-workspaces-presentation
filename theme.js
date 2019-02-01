import { dark } from "mdx-deck/themes";

export default {
  // extends the default theme
  ...dark,
  // add a custom font
  font: "Roboto, sans-serif",
  p: {
    fontSize: "1.1em",
    textAlign: "center"
  },
  ul: {
    listStyleType: "none"
  },
  // custom colors
  colors: {
    ...dark.colors, // include existing theme colors
    background: "#076e95"
  }
};
