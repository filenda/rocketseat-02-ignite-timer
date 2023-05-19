import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  //TALK: overflow: auto shows a bar for the user to scroll sideways when the table doesnt fit in the screen, that's the case for mobile for e.g.
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    //TALK: This is an interesting property that makes, for example, 'td' tag borders of, let's say, 1px
    // not "merge" and become 2px. Instead the border size will be 1px total
    border-collapse: collapse;

    //TALK: This forces the table to have a minimum width so the browser will generate a sideways scrollable bar
    // for the user instead of shrinking all elements together, leaving it messy
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      //TALK: Selects the first th
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        //TALK: This forces the first td to take up 50% of the table width for itself
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const
// TALK: This 'as const' tells typescript that the string values given to the properties, for example, "yellow-500" value given
// to the "yellow" property, is the only possible string value of that property, and not any other string value

interface StatusProps {
  // statusColor: 'yellow' | 'red' | 'green'
  // TALK: This is a more advanced but convient way of keeping the possible statusColor values,
  // wherein all keys of the type 'STATUS_COLORS' are possible values of the 'statusColor' property here
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  //TALK: This literally adds an element in the html before the actual content in the html
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
