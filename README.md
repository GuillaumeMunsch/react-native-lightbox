# React Native Lightbox

React Native Lightbox is an npm package that allows you using a lightbox in a React Native project.

### Tech

React Native Lightbox uses a number of open source projects to work properly:

* [react-native-swiper]

### Installation

```sh
$ npm install --save @nomads42/react-native-lightbox
```

### Example

``` javascript
<LightBox>
  <Image ... />
  ...
  <Image ... />
</LightBox>
```

### LightBox Props

| Props           | Default | Type     | Description                                                                                                                                     |
|-----------------|---------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| paginationStyle | null    | string   | Allows you to choose the pagination style. 3 possible values: `null`, `dots` and `pages`                                                        |
| renderFooter    | null    | function | Display the return value of this function at the bottom of the lightbox. `renderFooter` gets the index of the current `<Image />` in parameters |

### Image Props

If you want a specific `<Image ... />` to be selected for your `LightBox`, simply add a `selected` attribute to that one like this: `<Image ... selected />`. By default, the first one is selected.

### Todos

 - Zoomable images
 - Animations
 
[react-native-swiper]: <https://github.com/leecade/react-native-swiper>
