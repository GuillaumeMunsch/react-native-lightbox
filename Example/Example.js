
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LightBox from 'react-native-lightbox';

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
  renderFooter() { // eslint-disable-line
    return (
      <View style={{ margin: 10, height: 50, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={[styles.lightBoxFooterButton, { flex: 1 }]}>
          <Text style={styles.lightBoxFooterButtonText}>Button 1</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, height: 50 }} />
        <TouchableOpacity style={[styles.lightBoxFooterButton, { flex: 1 }]}>
          <Text style={styles.lightBoxFooterButtonText}>Button 2</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (<View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
      <LightBox renderFooter={this.renderFooter} paginationStyle="dots" >
        <Image style={{ height: 180, width: 250 }} source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image style={{ flex: 1, resizeMode: 'contain', height: 100, width: 100 }} source={full} />
        <Image style={{ height: 180, width: 250 }} source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image style={{ flex: 1, resizeMode: 'contain', height: 100, width: 100 }} source={full} />
        <Image style={{ height: 180, width: 250 }} source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image style={{ flex: 1, resizeMode: 'contain', height: 100, width: 100 }} source={full} />
        <Image style={{ height: 180, width: 250 }} source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image style={{ flex: 1, resizeMode: 'contain', height: 100, width: 100 }} source={full} />
        <Image style={{ height: 180, width: 250 }} source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image style={{ flex: 1, resizeMode: 'contain', height: 100, width: 100 }} source={full} />
        <Image style={{ height: 180, width: 250 }} source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image style={{ flex: 1, resizeMode: 'contain', height: 100, width: 100 }} source={full} />
      </LightBox>
    </View>);
  }
}

export default Example;
