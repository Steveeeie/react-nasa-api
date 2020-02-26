import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  ${({ theme: { color, spacing } }) => css`
    animation: ${spin} 1.1s infinite linear;
    border-radius: 50%;
    border: ${spacing(1)} solid ${color.light.transparent};
    border-left-color: ${color.light.regular};
    height: ${spacing(5)};
    margin-right: ${spacing(3)};
    position: relative;
    transform: translateZ(0);
    width: ${spacing(5)};
  `}
`;

export default Spinner;
