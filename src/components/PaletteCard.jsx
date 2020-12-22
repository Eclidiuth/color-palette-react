import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function PaletteCard(props){
  const paletteColor = props.color
  const paletteNote  = props.note

  return (
    <CopyToClipboard text={paletteColor}>
      <Wrapper style={{ 'backgroundColor': paletteColor }}>
        <CardText>Color {paletteColor}</CardText>
        <CardText>Note {paletteNote}</CardText>
      </Wrapper>
    </CopyToClipboard>
  )
}

const Wrapper = styled.div`
  flex: 0 1 10%;
  transition: transform .15s;
  padding: 32px;
  width: 10%;

  &:hover {
    transform: scale(.9);
  }
`

const CardText = styled.p`
  font-size: 14px;
`