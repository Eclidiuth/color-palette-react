import PaletteCard from './PaletteCard'
import styled from 'styled-components'

export default function PaletteGroup(props){
  const palettes = props.palettes

  return (
    <div>
      { palettes.map((palette, index) => (
        <div key={ index }>
          <p className="paletteName">{ palette.name }</p>
          <PaletteGroupCardRow>
            { palette.palette.map((color, index) => {
              const paletteColor = `#${color.color}`
              const paletteNote  = color.note

              return (
                <PaletteCard color={paletteColor} note={paletteNote} key={index} />
              )
            })}
          </PaletteGroupCardRow>
        </div>
      ))}
    </div>
  )
}

const PaletteGroupCardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`