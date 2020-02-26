import styled, { css } from 'styled-components';
import { spacing } from '@material-ui/system';

const Seperator = styled.hr`
  ${({ theme: { color } }) => css`
    background-color: ${color.dark.regular};
    display: inline-flex;
    height: 3px;
    width: 100%;
  `}

  ${spacing}
`;

export default Seperator;
