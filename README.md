# React Native Lightbox

React Native Lightbox is an npm package that allows you using a lightbox in a React Native project.

### Getting Started

* [Installation](#installation)
* [Basic Usage](#basic-usage)
* [Properties](#properties)
  * [<LightBox />](#lightbox)
  * [<Image />](#image)
* [Dependencies](#dependencies)
* [Roadmap](#roadmap)

### Installation

```sh
$ npm install --save @nomads42/react-native-lightbox
```

### Basic Usage

```javascript
<LightBox>
  <Image ... />
  ...
  <Image ... />
</LightBox>
```

### Properties

#### <LightBox />

Prop | Default | Type | Description
:- | :-: | :-: | :-
paginationStyle | null | `string` | Allows you to choose the pagination style. 3 possible values: `null`, `dots` and `pages`.
renderFooter | null | `function` | Display the return value of this function at the bottom of the lightbox. `renderFooter` gets the index of the current `<Image />` in parameters.

### <Image />

If you want a specific `<Image ... />` to be selected for your `LightBox`, simply add a `selected` attribute to that one like this: `<Image ... selected />`. By default, the first one is selected.

### Dependencies

React Native Lightbox uses a number of open source projects to work properly:

* [react-native-swiper]

### Roadmap

* [ ] Zoomable images
* [ ] Animations

[react-native-swiper]: <https://github.com/leecade/react-native-swiper>
