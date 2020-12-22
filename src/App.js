import React from 'react'
import fetchPalettes from './store/index.js'
import TheSidebar from './components/TheSidebar.jsx'
import PaletteGroup from './components/PaletteGroup.jsx'
import styled from 'styled-components'

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      paletteList: fetchPalettes()
    }

    this.handleAddNewColor = this.handleAddNewColor.bind(this)
  }

  handleAddNewColor(paletteName, newColor, newColorNote){
    const state = this.state
    const paletteIndex = this.state.paletteList.findIndex(palette => palette.name === paletteName)

    if(paletteIndex >= 0){
      state.paletteList[paletteIndex].palette.push({
        color: newColor,
        note: newColorNote
      })

      this.setState({state})
    }

  }

  render(){
    return (
      <div id="app">
        <Headline1>Color Palettes</Headline1>
        <AppContainer>
          <div style={{width: '25%'}}>
            <TheSidebar palettes={this.state.paletteList} addNewColor={this.handleAddNewColor} />
          </div>
          <div style={{width: '70%',marginRight: '2.5%'}}>
            <PaletteGroup palettes={this.state.paletteList} />
          </div>
        </AppContainer>
      </div>
    )
  }
}

const Headline1 = styled.h1`
  font-weight: normal;
`

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
