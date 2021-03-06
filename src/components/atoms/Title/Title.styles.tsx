import styled, { css } from 'styled-components';

interface StyledTitleProps {
  hero?: boolean;
}

const StyledTitle = styled.div<StyledTitleProps>`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-transform: uppercase;

  ${({ hero }) =>
    hero &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xxl};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      letter-spacing: 6px;
      max-width: 680px;
    `};
`;

export default StyledTitle;
