Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');








var _reactNativeSwiper=require('react-native-swiper');var _reactNativeSwiper2=_interopRequireDefault(_reactNativeSwiper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
lightBoxView:{
flex:1,
backgroundColor:'black',
marginTop:_reactNative.Platform.OS==='ios'?20:0},

lightBoxClose:{
color:'white',
textAlign:'right',
marginRight:10,
marginTop:4,
width:10},

lightBoxText:{
color:'white'},

lightBoxImage:{
flex:1,
resizeMode:'contain'},

swiper:{},

paginationStylePages:{
bottom:-23,
left:null,
right:10},

paginationStyleDots:{
bottom:70},

dotPaginationStyleActiveDot:{
backgroundColor:'#fff',
width:8,
height:8,
borderRadius:4,
marginLeft:4,
marginRight:4},

dotPaginationStyleNormalDot:{
backgroundColor:'rgba(255,255,255,.3)',
width:8,
height:8,
borderRadius:4,
marginLeft:4,
marginRight:4},

paginationStylePagesView:{
position:'absolute',
bottom:10,
right:10},

albumRowStyle:{
flexDirection:'row',
height:80},

touchableStyle:{
flex:1},

photoStyle:{
flex:1,
resizeMode:'cover',
height:null,
width:null},

emptyViewStyle:{
flex:1}});



var renderPagination=function renderPagination(index,total){return(
_react2.default.createElement(_reactNative.View,{style:styles.paginationStylePagesView},
_react2.default.createElement(_reactNative.Text,{style:{color:'grey'}},
_react2.default.createElement(_reactNative.Text,{
style:{
color:'white',
fontSize:20}},

index+1),'/',total)));};var




LightBox=function(_Component){_inherits(LightBox,_Component);


















function LightBox(props){_classCallCheck(this,LightBox);var _this=_possibleConstructorReturn(this,(LightBox.__proto__||Object.getPrototypeOf(LightBox)).call(this,
props));
_this.state={
modalVisible:false,
swiperHeight:null,
swiperWidth:null,
selectedChildIndex:0,
selectedChild:null};

_this.onMomentumScrollEnd=_this.onMomentumScrollEnd.bind(_this);return _this;
}_createClass(LightBox,[{key:'componentWillMount',value:function componentWillMount()

{var _this2=this;
_reactNative.BackAndroid.addEventListener('hardwareBackPress',function(){
if(_this2.state.modalVisible){
_this2.setModalVisible(false);
return true;
}
return false;
});
this.selectChild();
}},{key:'onMomentumScrollEnd',value:function onMomentumScrollEnd(

e,state){
this.setState({selectedChildIndex:state.index});
}},{key:'getPaginationStyleProps',value:function getPaginationStyleProps()

{
var result={};
switch(this.props.paginationStyle){
case'dots':
result={
dot:_react2.default.createElement(_reactNative.View,{style:styles.dotPaginationStyleNormalDot}),
activeDot:_react2.default.createElement(_reactNative.View,{style:styles.dotPaginationStyleActiveDot}),
paginationStyleDots:styles.paginationStyleDots};

break;
case'pages':
result={
renderPagination:renderPagination,
paginationStylePages:styles.paginationStyle};

break;
default:
result={
activeDot:_react2.default.createElement(_reactNative.View,null),
dot:_react2.default.createElement(_reactNative.View,null)};}


return result;
}},{key:'setModalVisible',value:function setModalVisible(

visible){
if(visible&&!this.props.album){
this.selectChild();
}
this.setState({modalVisible:visible});
}},{key:'selectChild',value:function selectChild()



{
if(this.props.album){
return;
}
if(!Array.isArray(this.props.children)){
this.setState({
selectedChild:this.props.children,
selectedChildIndex:0});

return;
}
this.setState({
selectedChild:this.props.children[0],
selectedChildIndex:0});

for(var index in this.props.children){
if(this.props.children[index].props.selected){
this.setState({
selectedChild:this.props.children[index],
selectedChildIndex:parseInt(index,10)});

return;
}
}
}},{key:'renderContent',value:function renderContent()

{
return(
_react2.default.Children.map(this.props.children,function(child){return _react2.default.createElement(_reactNative.View,{style:{flex:1,margin:8}},

_react2.default.cloneElement(child,{
style:_extends({},
child.props.style,{
flex:1,
height:null,
width:null,
resizeMode:'contain'}),

source:child.props.full?child.props.full:child.props.source}));}));




}},{key:'renderOverview',value:function renderOverview()

{var _this3=this;
if(this.props.album){var _ret=function(){
if(!Array.isArray(_this3.props.children)){
return{v:
_react2.default.createElement(_reactNative.View,{style:[styles.albumRowStyle,{height:_this3.props.rowHeight}]},
_react2.default.createElement(_reactNative.TouchableOpacity,{
onPress:function onPress(){return _this3.setModalVisible(true);},
style:styles.touchableStyle},


_react2.default.cloneElement(_this3.props.children,{
style:styles.photoStyle})),



[].concat(_toConsumableArray(Array(_this3.props.columns-1))).map(function(elem,key){return(
_react2.default.createElement(_reactNative.View,{key:key,style:styles.emptyViewStyle}));}))};



}
var arr=[];
var i=void 0;
var photoNumber=-1;
for(i=0;i+_this3.props.columns<=_this3.props.children.length;i+=_this3.props.columns){
arr.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[styles.albumRowStyle,{height:_this3.props.rowHeight}]},
_this3.props.children.slice(i,i+_this3.props.columns).map(function(photo,key){
photoNumber+=1;
var tmpNumber=photoNumber;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
key:key,
onPress:function onPress(){return _this3.setState(
{selectedChildIndex:tmpNumber},
function(){return _this3.setModalVisible(true);});},

style:styles.touchableStyle},

_react2.default.cloneElement(photo,{key:key,style:styles.photoStyle})));


})));


}
var rest=_this3.props.children.length%_this3.props.columns;
if(rest){
arr.push(
_react2.default.createElement(_reactNative.View,{key:i,style:[styles.albumRowStyle,{height:_this3.props.rowHeight}]},
_this3.props.children.
slice(_this3.props.children.length-rest,_this3.props.children.length).
map(function(photo){
i+=1;
photoNumber+=1;
var tmpNumber=photoNumber;
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
key:i,
onPress:function onPress(){return _this3.setState(
{selectedChildIndex:tmpNumber},
function(){return _this3.setModalVisible(true);});},

style:styles.touchableStyle},

_react2.default.cloneElement(photo,{key:i,style:styles.photoStyle})));


}),

[].concat(_toConsumableArray(Array(_this3.props.columns-rest))).map(function(){
i+=1;
return _react2.default.createElement(_reactNative.View,{key:i,style:styles.emptyViewStyle});
})));



}
return{v:arr};}();if(typeof _ret==="object")return _ret.v;
}
return(
_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){_this3.setModalVisible(true);}},
this.state.selectedChild));



}},{key:'render',value:function render()

{var _this4=this;
return(
_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react2.default.createElement(_reactNative.Modal,{
animationType:'fade',
transparent:false,
visible:this.state.modalVisible,
onRequestClose:this.onModalClose,
style:{backgroundColor:'black'}},

_react2.default.createElement(_reactNative.View,{style:styles.lightBoxView},
_react2.default.createElement(_reactNative.TouchableOpacity,{style:{height:25,alignSelf:'flex-end'}},
_react2.default.createElement(_reactNative.Text,{onPress:function onPress(){_this4.setModalVisible(false);},style:styles.lightBoxClose},'X')),



_react2.default.createElement(_reactNative.View,{
style:{flex:10,alignItems:'center'},
onLayout:function onLayout(e){var _e$nativeEvent$layout=
e.nativeEvent.layout;var width=_e$nativeEvent$layout.width;var height=_e$nativeEvent$layout.height;
_this4.setState({
swiperHeight:height,
swiperWidth:width});

}},

_react2.default.createElement(_reactNativeSwiper2.default,_extends({
loop:false,
style:styles.swiper,
height:this.state.swiperHeight,
width:this.state.swiperWidth,
index:this.state.selectedChildIndex,
onMomentumScrollEnd:this.onMomentumScrollEnd},
this.getPaginationStyleProps()),

this.renderContent())),


_react2.default.createElement(_reactNative.View,{style:{alignItems:'center'}},
_react2.default.createElement(_reactNative.View,{style:{flex:1,alignSelf:'stretch'}},
this.props.renderFooter&&this.props.renderFooter(this.state.selectedChildIndex))))),




_react2.default.createElement(_reactNative.View,{style:{flex:1}},
this.renderOverview())));



}}]);return LightBox;}(_react.Component);LightBox.propTypes={children:_react.PropTypes.node,renderFooter:_react.PropTypes.func,paginationStyle:_react.PropTypes.string,album:_react.PropTypes.bool,columns:_react.PropTypes.number,rowHeight:_react.PropTypes.number,style:_react.PropTypes.any};LightBox.defaultProps={paginationStyle:'none',album:false,columns:3,rowHeight:80,style:{}};exports.default=



LightBox;