import styled, { css } from 'styled-components';
import iconCheckbox from '../assets/icon-checkbox.svg';
import iconCheckboxEmpty from '../assets/icon-checkbox-empty.svg';

const Checkbox = styled.div`
  ${({ theme: { color, height, radius, spacing } }) => css`
    display: inline-block;
    margin: ${spacing(2)};

    label {
      align-items: center;
      background-image: url(${iconCheckboxEmpty});
      background-position: center left 8px;
      background-repeat: no-repeat;
      background-size: ${spacing(6)};
      border-radius: ${radius(1)};
      border: 3px solid transparent;
      color: ${color.dark.regular};
      cursor: pointer;
      display: inline-flex;
      font-weight: 600;
      height: ${height.input};
      padding-left: ${spacing(7)};
      padding-right: ${spacing(3)};
      position: relative;
      transition-duration: 200ms;
      transition-property: color, background-color;
      transition-timing-function: linear;
      width: 100%;
    }

    input {
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }

    input:focus-visible ~ label {
      box-shadow: 0 0 0 2px ${color.dark.regular},
        0 0 0 6px ${color.dark.transparent};
    }

    input:checked ~ label {
      background-color: ${color.dark.regular};
      background-image: url(${iconCheckbox});
      color: ${color.light.regular};
    }

    input:checked:focus-visible ~ label {
      box-shadow: 0 0 0 2px ${color.light.regular},
        0 0 0 6px ${color.light.transparent};
    }
  `}
`;

export default Checkbox;
