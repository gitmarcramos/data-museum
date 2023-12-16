import styled, { css } from "styled-components";
import { applyButtonStyles } from "./utils";
import { ButtonProps, StyledButtonProps } from "./types";

const StyledButton = styled.button<StyledButtonProps>`
  color: var(--offWhite);
  border-radius: var(--radius);
  padding: 12px 24px;
  transition: all 300ms ease-out;
  font-weight: bold;
  cursor: pointer;
  flex-grow: 1;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 300px;
  }

  ${({ $emphasis }) => css`
    ${$emphasis && applyButtonStyles($emphasis)}
  `}
`;

const Button = ({
  className,
  children,
  $emphasis,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      $emphasis={$emphasis}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
