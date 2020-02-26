import styled, { css } from 'styled-components';

const Page = styled.div`
  ${({ theme: { breakpoints, spacing } }) => css`
    display: block;
    margin: 0 auto;
    max-width: 100%;
    padding: ${spacing(5)};
    width: 1200px;

    ${breakpoints.up('md')} {
      padding: ${spacing(8)};
    }
  `}
`;

export default Page;
