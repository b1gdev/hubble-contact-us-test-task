import styled from "@emotion/styled";

const FooterForm = styled.form`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.palette.white};

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 456px;
    gap: 12px;
    padding: 3px 3px 3px 11px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 456px;
    gap: 12px;
    padding: 3px 3px 3px 11px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: 456px;
    gap: 24px;
    padding: 7px 7px 7px 16px;
  }
`;

export default FooterForm;
