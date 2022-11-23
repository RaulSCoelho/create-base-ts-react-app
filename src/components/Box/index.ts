import styled from 'styled-components'

export const Box = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
`
