
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
    return (<View >
      <LightBox renderFooter={this.renderFooter} paginationStyle="dots" album columns={3}>
        <Image source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
        <Image source={{ uri: 'http://images2.fanpop.com/images/photos/3000000/Homer-Simpson-homer-simpson-3065329-800-600.jpg' }} />
      </LightBox>
    </View>);
  }
}

export default Example;

//        <Image source={full} />
//        <Image source={full} />
