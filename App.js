import React, { Component } from 'react';
import { ListView, StyleSheet, AsyncStorage } from 'react-native'

import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';

export default class App extends Component {
  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const availableColors = []

    this.state = {
      backgroundColor: 'lightblue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this);
    this.newColor = this.newColor.bind(this);
  }

  saveColors(colors){
    AsyncStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
    )
  }

  componentDidMount() {
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err, data) => {
        if(err){
          console.error('Error loading errors', err)
        } else {
          const availableColors = JSON.parse(data)
          this.setState({
            availableColors,
            dataSource: this.ds.cloneWithRows(availableColors)
          })
        }
      }  
    )
  }
  

  changeColor(backgroundColor) {
    this.setState({ backgroundColor })
  }

  newColor(color) {
    const availableColors = [
      ...this.state.availableColors,
      color
    ]
    this.setState({
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    })
    this.saveColors(availableColors)
  }

  render() {
    const { backgroundColor, dataSource } = this.state;
    return (
      <ListView style={[styles.container, { backgroundColor }]}
        dataSource={dataSource}
        renderRow={(color, sectionID) => (
          <ColorButton backgroundColor={color}
            onSelect={this.changeColor} />
        )}
        renderHeader={() => (
          < ColorForm onNewColor={this.newColor} />
        )}>

      </ListView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
