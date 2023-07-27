import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, Global } from "@emotion/react";

import theme from "./theme";
import ContactUs from "./pages/contact-us";
import fontNeueHaasUnica from "./styles/fontNeueHaasUnica";
import fontPolySans from "./styles/fontPolySans";

import "destyle.css/destyle.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <Global styles={[fontNeueHaasUnica, fontPolySans]} />
    <ContactUs />
  </ThemeProvider>,
);
