import styled, { css } from 'styled-components';

const Grid = styled.div`
  ${({ theme: { breakpoints, spacing } }) => css`
    column-count: 1;
    column-gap: ${spacing(2)};

    ${breakpoints.up('sm')} {
      column-count: 2;
    }

    ${breakpoints.up('lg')} {
      column-count: 3;
    }
  `}
`;

export default Grid;
