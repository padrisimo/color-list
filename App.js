import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native'

import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';

export default class App extends Component {
  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const availableColors = ['red', 'green', 'yellow', 'orange', 'lightblue', 'salmon', 'pink', 'indigo', '#0000FF']

    this.state = {
      backgroundColor: 'lightblue',
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(backgroundColor) {
    this.setState({ backgroundColor })
  }
  render() {
    const { backgroundColor, dataSource } = this.state;
    return (
      <ListView style={[styles.container, { backgroundColor }]}
        dataSource={dataSource}
        renderRow={(color, sectionID) => (
          <ColorButton backgroundColor={color}
            onSelect={this.changeColor}/>
        )}
        renderHeader={() => (
          < ColorForm />
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
