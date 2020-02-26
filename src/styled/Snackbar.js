import styled, { css } from 'styled-components';

const states = {
  entering: css`
    transform: translate3d(-50%, -24px, 0);
  `,
  entered: css`
    transform: translate3d(-50%, -24px, 0);
  `,
  exiting: css`
    transform: translate3d(-50%, 100%, 0);
    transition-delay: 1s;
  `,
  exited: css`
    transform: translate3d(-50%, 100%, 0);
  `
};

const Snackbar = styled.div`
  ${({ theme: { color, elevation, radius, spacing }, state }) => css`
    align-items: center;
    background-color: ${color.dark.regular};
    border-radius: ${radius(1)};
    bottom: 0;
    box-shadow: ${elevation(1)};
    color: ${color.light.regular};
    display: flex;
    justify-content: center;
    left: 50%;
    padding-bottom: ${spacing(4)};
    padding-left: ${spacing(5)};
    padding-right: ${spacing(5)};
    padding-top: ${spacing(4)};
    position: fixed;
    transition: transform ${({ duration }) => duration}ms;
    z-index: 2;

    ${state && states[state]}
  `}
`;

export default Snackbar;
