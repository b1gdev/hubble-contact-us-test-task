import styled from "@emotion/styled";

const FooterFormInput = styled.input`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnica};
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  flex-grow: 1;
  flex-shrink: 1;
  line-height: 24px;
  outline: unset;

  ${({ theme }) => theme.breakpoints.down("xxsm")} {
    max-width: 170px;
  }
`;

export default FooterFormInput;
