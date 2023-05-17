import styled, { css } from 'styled-components'

export type _ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface _ButtonContainerProps {
  variant: _ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const _ButtonContainer = styled.button<_ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* TALK: This portion of the code will literally be executed as a function because it lies inside a template string */
  /* ${(props) => {
    // TALK: This tiny 'css' fella just helps us with syntax highlighting
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`
