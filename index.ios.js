
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';

export default class layoutanimation extends Component {
  constructor ( props ) {
    super( props );

    this.state = {
      next: 'left',
      left: 0
    };
  }

  componentWillMount () {
    // LayoutAnimation.easeInEaseOut();
  }

  onPress () {
    LayoutAnimation.easeInEaseOut();
    if ( this.state.next === 'left' ) {
      this.setState({ left: this.state.left - 50, next: 'right' });
    } else {
      this.setState({ left: this.state.left + 50, next: 'left' });
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity style={{ left: this.state.left }}
          onPress={ () => this.onPress() }>
          <Text>LayoutAnimation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
} );

AppRegistry.registerComponent('layoutanimation', () => layoutanimation);
