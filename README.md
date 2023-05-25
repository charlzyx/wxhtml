# `<wxhtml />` 小程序富文本组件

## Features 功能

- 支持点击事件监听 `<wxhtml bindclick="onclick" />`
- 自定义组件 `<wxhtml n generic:elements="custome" />`
- 自定义主题 `<wxhtml theme="custome" />`


## ClickEvent 点击事件 [TODO]

## Theme 主题 [TODO]

## Custome 自定义组件 [TODO]

```html
<template name="demo">
  <demo attrs="{{node.attrs}}" name="{{node.name}}" body="{{node.body}}"></demo>
</template>
<template name="whoami">
  <whoami node="{{node}}"></whoami>
</template>
<template name="img">
  <image
    data-index="{{node.__index}}"
    src="{{node.attrs.src}}"
    class="{{attrs.class}}"
    style="{{attrs.style}}"
    mode="aspectFit">
  </image>
</template>
<template name="video">
  <video
    data-index="{{__index}}"
    src="{{attrs.src}}"
    class="{{attrs.class}}"
    style="{{attrs.style}}"
    loop="{{attrs.loop}}"
    controls="{{attrs.controls}}"
    autoplay="{{attrs.autoplay}}" >
   </video>
</template>
<view>
  <template is="{{node.name}}" data="{{ node }}"></template>
</view>

```
