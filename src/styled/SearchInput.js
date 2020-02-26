import styled, { css } from 'styled-components';
import icon from '../assets/icon-search.svg';

const SearchInput = styled.input`
  ${({ theme: { breakpoints, color, height, radius, spacing } }) => css`
    background-color: ${color.light.regular};
    background-image: url(${icon});
    background-position: center right 12px;
    background-repeat: no-repeat;
    background-size: ${spacing(6)};
    border-radius: ${radius(1)};
    border: ${spacing(1)} solid transparent;
    flex: 1 0 calc(100% - 16px);
    font-size: 1.2rem;
    font-weight: 700;
    height: ${height.input};
    margin: ${spacing(2)};
    min-width: 0;
    outline: none;
    padding-left: ${spacing(3)};
    padding-right: ${spacing(6)};
    transition: border 100ms linear;

    &:focus {
      box-shadow: 0 0 0 2px ${color.dark.regular},
        0 0 0 6px ${color.dark.transparent};
    }

    &::placeholder {
      color: ${color.dark.regular};
      transition: opacity 100ms linear;
    }

    &:focus::placeholder {
      opacity: 0;
    }

    ${breakpoints.up('lg')} {
      flex: 3;
    }
  `}
`;

export default SearchInput;
