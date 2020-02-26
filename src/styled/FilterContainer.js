import styled, { css } from 'styled-components';

const FilterContainer = styled.div`
  ${({ theme: { spacing } }) => css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: -${spacing(2)};
  `}
`;

export default FilterContainer;
