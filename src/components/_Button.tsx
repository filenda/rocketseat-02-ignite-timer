import { _ButtonContainer, _ButtonVariant } from './_Button.styles'

interface _ButtonProps {
  variant?: _ButtonVariant
}

export function _Button({ variant = 'primary' }: _ButtonProps) {
  return <_ButtonContainer variant={variant}>Enviar</_ButtonContainer>
}
