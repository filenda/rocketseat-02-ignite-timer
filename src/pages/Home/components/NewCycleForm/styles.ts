import { styled } from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  //TALK: 'flex-wrap: wrap' allows the container elements to "line break" whenever it is a mobile or smaller screen
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  /* TALK: The font-size param is being repeated here, even though the input is a child of the FormContainer 
  that already defines this property because it*/
  /* font-size: inherit; */
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  //TALK: flex: 1 is a shortcut for setting 3 properties: flex-grow to let to component grow beyond its original size,
  // flex-shrink to allow my coponent to shirnk/lessen it's size dynamically if necessary, and flex-basis to
  // to make the element take up as much space as it already would normally
  flex: 1;

  //TALK: This removes the tiny arrow that appears at the end of te text input field
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
