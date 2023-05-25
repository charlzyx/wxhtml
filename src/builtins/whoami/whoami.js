Component({
  properties: {
    node: Object,
  },
  observers: {
    node(n) {
      console.log('who am i, node: ', n)
      this.setData({ json: JSON.stringify(n, null, 2) })
    }
  },
  data: {
    json: ''
  },
});
