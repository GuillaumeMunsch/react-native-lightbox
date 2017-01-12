
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LightBox from './dist';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  lightBoxFooterButton: {
    height: 50,
    borderColor: '#d6d7da',
    borderWidth: 1.5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBoxFooterButtonText: {
    color: '#d6d7da',
  },
});

const full = require('./vinyl.jpg');

class Example extends React.Component {
  renderFooter(index) { // eslint-disable-line
    return (
      <View style={{ margin: 10, height: 50, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={[styles.lightBoxFooterButton, { flex: 1 }]}>
          <Text style={styles.lightBoxFooterButtonText}>Button 1</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, height: 50 }} />
        <TouchableOpacity style={[styles.lightBoxFooterButton, { flex: 1 }]}>
          <Text style={styles.lightBoxFooterButtonText}>Like n° {index}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (<View
      style={[
        styles.container,
        {
          flex: 1,
          padding: 50,
          backgroundColor: 'green',
        }]
    }
    >
      <LightBox renderFooter={this.renderFooter} paginationStyle="dots" album columns={3} rowHeight={130}>
        <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://static.simpsonswiki.com/images/thumb/c/c3/D\'oh.jpg/150px-D\'oh.jpg' }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://static.simpsonswiki.com/images/thumb/c/c3/D\'oh.jpg/150px-D\'oh.jpg' }} />
        <Image style={{ width: 200, height: 200 }} source={{ uri: 'https://static.simpsonswiki.com/images/thumb/c/c3/D\'oh.jpg/150px-D\'oh.jpg' }} />
      </LightBox>
    </View>);
  }
}

export default Example;
