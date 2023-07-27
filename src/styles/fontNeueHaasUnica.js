import { css } from "@emotion/react";

const fontUrl = "/fonts/NeueHaasUnica/";

const fontNeueHaasUnica = css`
  @font-face {
    font-family: "Neue Haas Unica";
    src:
      local("Neue Haas Unica Black"),
      local("NeueHaasUnica-Black"),
      url("${fontUrl}NeueHaasUnica-Black.woff2") format("woff2"),
      url("${fontUrl}NeueHaasUnica-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Unica";
    src:
      local("Neue Haas Unica ExtBlk Ita"),
      local("NeueHaasUnica-ExtBlkIta"),
      url("${fontUrl}NeueHaasUnica-ExtBlkIta.woff2") format("woff2"),
      url("${fontUrl}NeueHaasUnica-ExtBlkIta.woff") format("woff");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Unica";
    src:
      local("Neue Haas Unica Extra Bold"),
      local("NeueHaasUnica-ExtraBold"),
      url("${fontUrl}NeueHaasUnica-ExtraBold.woff2") format("woff2"),
      url("${fontUrl}NeueHaasUnica-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Unica";
    src:
      local("Neue Haas Unica Italic"),
      local("NeueHaasUnica-Italic"),
      url("${fontUrl}NeueHaasUnica-Italic.woff2") format("woff2"),
      url("${fontUrl}NeueHaasUnica-Italic.woff") format("woff");
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Unica";
    src:
      local("Neue Haas Unica Bold"),
      local("NeueHaasUnica-Bold"),
      url("${fontUrl}NeueHaasUnica-Bold.woff2") format("woff2"),
      url("${fontUrl}NeueHaasUnica-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Unica";
    src:
      local("Neue Haas Unica Regular"),
      local("NeueHaasUnica-Regular"),
      url("${fontUrl}NeueHaasUnica-Regular.woff2") format("woff2"),
      url("${fontUrl}NeueHaasUnica-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Haas Unica";
    src:
      local("Neue Haas Unica Extra Black"),
      local("NeueHaasUnica-ExtraBlack"),
      url("${fontUrl}NeueHaasUnica-ExtraBlack.woff2") format("woff2"),
      url("${fontUrl}NeueHaasUnica-ExtraBlack.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
`;

export default fontNeueHaasUnica;
