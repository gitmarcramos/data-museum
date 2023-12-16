import { css } from "styled-components";
import { StyledButtonProps } from "./types";

export const applyButtonStyles = (emphasis: StyledButtonProps["$emphasis"]) => {
    if (emphasis === "primary") {
      return css`
        background-color: var(--primary);
        border: 1px solid var(--primary);
        &:hover {
          background-color: var(--primaryDarker);
          border: 1px solid var(--primaryDarker);
        }
      `;
    } else {
      return css`
        background-color: transparent;
        color: var(--primary);
        border: none;
      `;
    }
  };