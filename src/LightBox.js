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
  albumRowStyle: {
    flexDirection: 'row',
    height: 80,
  },
  touchableStyle: {
    flex: 1,
  },
  photoStyle: {
    flex: 1,
    resizeMode: 'cover',
    height: null,
    width: null,
  },
  emptyViewStyle: {
    flex: 1,
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
    album: PropTypes.bool,
    columns: PropTypes.number,
    rowHeight: PropTypes.number,
    style: PropTypes.any, //eslint-disable-line
  }

  static defaultProps = {
    paginationStyle: 'none',
    album: false,
    columns: 3,
    rowHeight: 80,
    style: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      swiperHeight: null,
      swiperWidth: null,
      selectedChildIndex: 0,
      selectedChild: null,
    };
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.state.modalVisible) {
        this.setModalVisible(false);
        return true;
      }
      return false;
    });
    this.selectChild();
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
    if (visible && !this.props.album) {
      this.selectChild();
    }
    this.setState({ modalVisible: visible });
  }

  swiper:Object;

  selectChild() {
    if (this.props.album) {
      return;
    }
    if (!Array.isArray(this.props.children)) {
      this.setState({
        selectedChild: this.props.children,
        selectedChildIndex: 0,
      });
      return;
    }
    this.setState({
      selectedChild: this.props.children[0],
      selectedChildIndex: 0,
    });
    for (const index in this.props.children) { // eslint-disable-line
      if (this.props.children[index].props.selected) {
        this.setState({
          selectedChild: this.props.children[index],
          selectedChildIndex: parseInt(index, 10),
        });
        return;
      }
    }
  }

  renderContent() {
    return (
        React.Children.map(this.props.children, child => <View style={{ flex: 1, margin: 8 }}>
          {
            React.cloneElement(child, {
              style: {
                ...child.props.style,
                flex: 1,
                height: null,
                width: null,
                resizeMode: 'contain',
              },
              source: child.props.full ? child.props.full : child.props.source,
            })
          }
        </View>
    ));
  }

  renderOverview() {
    if (this.props.album) {
      if (!Array.isArray(this.props.children)) {
        return (
          <View style={[styles.albumRowStyle, { height: this.props.rowHeight }]} >
            <TouchableOpacity
              onPress={() => this.setModalVisible(true)}
              style={styles.touchableStyle}
            >
              {
              React.cloneElement(this.props.children, {
                style: styles.photoStyle,
              })
            }
            </TouchableOpacity>
            {[...Array(this.props.columns - 1)].map((elem, key) => (
              <View key={key} style={styles.emptyViewStyle} />
            ))}
          </View>
        );
      }
      const arr = [];
      let i;
      let photoNumber = -1;
      for (i = 0; i + this.props.columns <= this.props.children.length; i += this.props.columns) {
        arr.push(
          <View key={i} style={[styles.albumRowStyle, { height: this.props.rowHeight }]} >
            {this.props.children.slice(i, i + this.props.columns).map((photo, key) => { // eslint-disable-line
              photoNumber += 1;
              const tmpNumber = photoNumber;
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => this.setState(
                    { selectedChildIndex: tmpNumber },
                     () => this.setModalVisible(true),
                   )}
                  style={styles.touchableStyle}
                >
                  {React.cloneElement(photo, { key, style: styles.photoStyle })}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }
      const rest = this.props.children.length % this.props.columns;
      if (rest) {
        arr.push(
          <View key={i} style={[styles.albumRowStyle, { height: this.props.rowHeight }]}>
            {this.props.children
              .slice(this.props.children.length - rest, this.props.children.length)
              .map((photo) => {
                i += 1;
                photoNumber += 1;
                const tmpNumber = photoNumber;
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => this.setState(
                      { selectedChildIndex: tmpNumber },
                       () => this.setModalVisible(true),
                     )}
                    style={styles.touchableStyle}
                  >
                    {React.cloneElement(photo, { key: i, style: styles.photoStyle })}
                  </TouchableOpacity>
                );
              },
            )}
            {[...Array(this.props.columns - rest)].map(() => {
              i += 1;
              return <View key={i} style={styles.emptyViewStyle} />;
            })
            }
          </View>
        );
      }
      return arr;
    }
    return (
      <TouchableOpacity onPress={() => { this.setModalVisible(true); }} >
        {this.state.selectedChild}
      </TouchableOpacity>

    );
  }

  render() {
    return (
      <View style={this.props.style}>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.onModalClose}
          style={{ backgroundColor: 'black' }}
        >
          <View style={styles.lightBoxView}>
            <TouchableOpacity style={{ height: 25, alignSelf: 'flex-end' }} >
              <Text onPress={() => { this.setModalVisible(false); }} style={styles.lightBoxClose}>
            X
              </Text>
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
                {...this.getPaginationStyleProps()}
              >
                {this.renderContent()}
              </Swiper>
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ flex: 1, alignSelf: 'stretch' }}>
                {this.props.renderFooter && this.props.renderFooter(this.state.selectedChildIndex)}
              </View>
            </View>
          </View>
        </Modal>
        <View style={{ flex: 1 }}>
          {this.renderOverview()}
        </View>
      </View>
    );
  }

}

export default LightBox;
