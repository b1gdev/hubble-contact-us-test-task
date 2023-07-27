import { css } from "@emotion/react";

const fontUrl = "/fonts/PolySans-Trial/";

const fontPolySans = css`
  @font-face {
    font-family: "PolySans-Trial";
    src:
      local("PolySans-Trial-Bulky-Wide"),
      local("PolySans-Trial Bulky Wide"),
      url("${fontUrl}PolySans-Bulky-Wide.woff2") format("woff2"),
      url("${fontUrl}PolySans-Bulky-Wide.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "PolySans-Trial";
    src:
      local("PolySans-Trial-Bulky"),
      local("PolySans-Trial Bulky"),
      url("${fontUrl}PolySansTrial-Bulky.woff2") format("woff2"),
      url("${fontUrl}PolySansTrial-Bulky.woff") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "PolySans-Trial";
    src:
      local("PolySans-Trial-Median"),
      local("PolySans-Trial Median"),
      url("${fontUrl}PolySansTrial-Median.woff2") format("woff2"),
      url("${fontUrl}PolySansTrial-Median.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "PolySans-Trial";
    src:
      local("PolySans-Trial-Median"),
      local("PolySans-Trial Median"),
      url("${fontUrl}PolySansTrial-Neutral.woff2") format("woff2"),
      url("${fontUrl}PolySansTrial-Neutral.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
`;

export default fontPolySans;
