import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  /* TALK: This tiny formula takes up 100% of the current viewport height, as it is not possible to simply say "100%" like
  one would for the width in css */
  height: calc(100vh - 10rem);
  /* TALK: 5 rem is exactly half the size of 10 rem (bottom and top), and 'auto' to make the content centered horizontally (left and right) */
  margin: 5rem auto;
`
