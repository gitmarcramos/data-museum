import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonProps = {
  children: string;
  onClick?: () => void;
} & StyledButtonProps &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

type StyledButtonProps = {
  className?: string;
  $emphasis: "primary" | "secondary";
};

const applyButtonStyles = (emphasis: StyledButtonProps["$emphasis"]) => {
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
