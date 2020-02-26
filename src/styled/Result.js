import styled, { css } from 'styled-components';

const Result = styled.div`
  ${({ theme: { color, radius, spacing } }) => css`
    background-color: ${color.dark.regular};
    border-radius: ${radius(2)};
    display: inline-flex;
    margin-bottom: ${spacing(2)};
    overflow: hidden;
    position: relative;
    width: 100%;
  `}
`;

Result.Preview = styled.img`
  ${({ theme: { radius } }) => css`
    border-radius: ${radius(2)};
    filter: sepia(20%) contrast(100%);
    opacity: 0.5;
    transition-duration: 200ms;
    transition-property: opacity, filter;
    transition-timing-function: linear;
    width: 100%;

    &:hover {
      filter: sepia(20%) contrast(80%);
      opacity: 1;
    }
  `}
`;

Result.Type = styled.img`
  ${({ theme: { spacing } }) => css`
    position: absolute;
    right: ${spacing(2)};
    top: ${spacing(2)};
    width: ${spacing(6)};
    z-index: 1;
  `}
`;

Result.Title = styled.p`
  ${({ theme: { color, spacing } }) => css`
    color: ${color.light.regular};
    font-size: 1rem;
    padding: ${spacing(6)};
  `}
`;

export default Result;
