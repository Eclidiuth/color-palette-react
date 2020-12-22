import React from 'react'
import styled from 'styled-components'

export default class TheSidebar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      newColor: '252525',
      newColorNote: 'Text black primary',
      selectedPaletteName: null,
    }

    this.handleAddNewColor = this.handleAddNewColor.bind(this)
  }

  handleAddNewColor(){
    if(this.state.selectedPaletteName){
      this.props.addNewColor(
        this.state.selectedPaletteName,
        this.state.newColor,
        this.state.newColorNote
      )
    }
  }

  render(){
    return (
      <Root>
        <h2>Add new color</h2>
        <label>
          <span>Color:</span>
          <input type="text" value={ this.state.newColor } onChange={ e => this.setState({newColor: e.target.value}) }/>
        </label>
        <label>
          <span>Note:</span>
          <input type="text" value={ this.state.newColorNote } onChange={ e => this.setState({newColorNote: e.target.value}) } />
        </label>
        <label>
          <span>Palette:</span>
          <select onChange={ e => this.setState({selectedPaletteName: e.target.value }) } defaultValue="">
            <option value="">Select</option>
            { this.props.palettes.map((palette, index) => (
              <option key={index} value={palette.name}>{ palette.name }</option>
            ))}
          </select>
        </label>
        <button onClick={this.handleAddNewColor}>Add color</button>
      </Root>
    )
  }
}

const Root = styled.div`
  h2 {
    font-weight: 300;
    padding: 0 16px;
  }

    label {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: block;
      padding: 16px;
    }

    input[type="text"], select {
      background: #f2f2f2;
      border: 0;
      border: none;
      border-radius: 0;
      box-sizing: border-box;
      display: block;
      width: 120px;
      padding: 8px 16px;
    }

    select {
      appearance: none;

      option {
        border: 0;
      }
    }
  }

`