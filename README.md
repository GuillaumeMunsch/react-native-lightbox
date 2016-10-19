# React-native-lightbox

React-native-lightbox is an npm package that allows you using a lightbox in a react-native project

### Tech

React-native-lightbox uses a number of open source projects to work properly:

* [React-native-swiper] - A package that provides you a swiper in react-native

### Installation

```sh
$ npm i -S @nomads42/react-native-lightbox
```

### Example

``` javascript
<LightBox>
  <Image .../>
  ...
  <Image .../>
</LightBox>
```


### LightBox Props

| Props           | Default | Type     | Description                                                                              |
|-----------------|---------|----------|------------------------------------------------------------------------------------------|
| paginationStyle | null    | string   | Allows you to choose the pagination style. 3 possible values: `null`, `dots` and `pages` |
| renderFooter    | null    | function | Display the return value of this function at the bottom of the lightbox                  |

### Content Props

If you want a specific `<Image ... />` to be selected for your `LightBox`, simply add a `selected` attribute to that one like this: `<Image ... selected />`. By default, the first one is selected.

### Todos

 - Index of selected element in props of renderFooter
 - Zoomable images
 - Animations





   [React-native-swiper]: <https://github.com/leecade/react-native-swiper#react-native-swiper>
