import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  Platform,
  BackAndroid,
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  lightBoxView: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  lightBoxClose: {
    color: 'white',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 4,
    width: 10,
  },
  lightBoxText: {
    color: 'white',
  },
  lightBoxImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  swiper: {
  },
  paginationStylePages: {
    bottom: -23,
    left: null,
    right: 10,
  },
  paginationStyleDots: {
    bottom: 70,
  },
  dotPaginationStyleActiveDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  dotPaginationStyleNormalDot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  paginationStylePagesView: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

const renderPagination = (index, total) => (
  <View style={styles.paginationStylePagesView} >
    <Text style={{ color: 'grey' }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
        }}
      >{index + 1}</Text>/{total}
    </Text>
  </View>
);

class LightBox extends Component {
  static propTypes = {
    children: PropTypes.node,
    renderFooter: PropTypes.func,
    paginationStyle: PropTypes.string,
  }

  static defaultProps = {
    paginationStyle: 'none',
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      swiperHeight: null,
      swiperWidth: null,
      selectedChildIndex: 0,
      selectedChild: null,
      initialSelectedIndex: 0,
    };
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.state.modalVisible) {
        this.hideLightBox();
        return true;
      }
      return false;
    });
    this.selectChild();
  }

  componentDidMount() {
  }

  onModalClose() { // eslint-disable-line
    return true;
  }

  onMomentumScrollEnd(e, state) {
    this.setState({ selectedChildIndex: state.index });
  }

  getPaginationStyleProps() {
    let result = {};
    switch (this.props.paginationStyle) {
      case 'dots':
        result = {
          dot: <View style={styles.dotPaginationStyleNormalDot} />,
          activeDot: <View style={styles.dotPaginationStyleActiveDot} />,
          paginationStyleDots: styles.paginationStyleDots,
        };
        break;
      case 'pages':
        result = {
          renderPagination,
          paginationStylePages: styles.paginationStyle,
        };
        break;
      default:
        result = {
          activeDot: <View />,
          dot: <View />,
        };
    }
    return result;
  }

  setModalVisible(visible) {
    if (visible) {
      this.selectChild();
    }
    this.setState({ modalVisible: visible });
  }

  swiper:Object;

  selectChild() {
    for (const index in this.props.children) { // eslint-disable-line
      if (this.props.children[index].props.selected) {
        this.setState({
          selectedChild: this.props.children[index],
          selectedChildIndex: parseInt(index, 10),
          initialSelectedIndex: parseInt(index, 10),
        });
        return;
      }
    }
    this.setState({
      selectedChild: this.props.children[0],
      selectedChildIndex: 0,
      initialSelectedIndex: 0,
    });
  }

  hideLightBox() {
    this.setModalVisible(false);
//    this.swiper.scrollBy(3);
  }

  renderContent() {
    return (
        React.Children.map(this.props.children, child => <View style={{ flex: 1, margin: 8 }}>
          {
            React.cloneElement(child, Object.assign({}, child.props.style, { flex: 1, height: null, width: null, resizeMode: 'contain' })) // eslint-disable-line
          }
        </View>
    ));
  }


  render() {
    return (
      <View>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.onModalClose}
          style={{ backgroundColor: 'black' }}
        >
          <View style={styles.lightBoxView}>
            <TouchableOpacity style={{ height: 25, alignSelf: 'flex-end' }} >
              <Text onPress={() => { this.hideLightBox(); }} style={styles.lightBoxClose}>X</Text>
            </TouchableOpacity>
            <View
              style={{ flex: 10, alignItems: 'center' }}
              onLayout={(e) => {
                const { width, height } = e.nativeEvent.layout;
                this.setState({
                  swiperHeight: height,
                  swiperWidth: width,
                });
              }}
            >
              <Swiper
                loop={false}
                style={styles.swiper}
                height={this.state.swiperHeight}
                width={this.state.swiperWidth}
                index={this.state.selectedChildIndex}
                onMomentumScrollEnd={this.onMomentumScrollEnd}
                ref={(ref) => { this.swiper = ref; }}
                {...this.getPaginationStyleProps()}
              >
                {
                  this.renderContent()
                }
              </Swiper>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flex: 1, alignSelf: 'stretch' }}>
                {this.props.renderFooter && this.props.renderFooter(this.state.selectedChildIndex)}
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => { this.setModalVisible(true); }} >
          {this.state.selectedChild}
        </TouchableOpacity>
      </View>
    );
  }

}

export default LightBox;
