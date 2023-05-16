import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  /* TALK: This portion of the code will literally be executed as a function because it lies inside a template string */
  ${(props) => {
    // TALK: This tiny 'css' fella just helps us with syntax highlighting
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }}
`;
