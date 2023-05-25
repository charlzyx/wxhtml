const wxtags ={
  img: true,
  video: true,
}
Component({
  options: {
    virtualHost: true
  },
  properties: {
    node: Object,
  },
  data: {
    wxtags
  },
  // lifetimes: {
  //   ready() {
  //     console.log("--custome ", this.data.node)
  //   }
  // }
})
