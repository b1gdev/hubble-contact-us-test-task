import styled from "@emotion/styled";

const FooterContacts = styled.div`
  ${({ theme }) => theme.breakpoints.down("lg")} {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: contents;
  }
`;

export default FooterContacts;
