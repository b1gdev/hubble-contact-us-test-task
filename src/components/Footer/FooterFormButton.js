import styled from "@emotion/styled";

const FooterFormButton = styled.button`
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.gray.light};
  color: ${({ theme }) => theme.palette.white};

  font-family: ${({ theme }) => theme.typography.fontFamilyPolySans};
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.42px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 12px 16px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 12px 32px;
  }
`;

export default FooterFormButton;
