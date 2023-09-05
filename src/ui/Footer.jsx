import { styled } from "styled-components";

const StyledFooter = styled.footer`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
function Footer() {
  return (
    <StyledFooter>
      <StyledText>
        @copyright: All rights reserved {new Date().getFullYear()}
      </StyledText>
    </StyledFooter>
  );
}

export default Footer;
