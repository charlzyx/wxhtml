export const htmls = [
  'a',
  'span',
  'html',
  'body',
  'p',
  'div',
  'article',
  'aside',
  'footer',
  'header',
  'hgroup',
  'main',
  'nav',
  'section',
  'marquee',
  'address',
  'blockquote',
  'figcaption',
  'figure',
  'q',
  'center',
  'hr',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'col',
  'colgroup',
  'tr',
  'td',
  'th',
  'caption',
  'ul',
  'menu',
  'dir',
  'ol',
  'li',
  'dd',
  'dl',
  'dt',
  'legend',
  'fieldset',
  'area',
  'output',
  'meter',
  'u',
  'ins',
  'abbr',
  'acronym',
  'strong',
  'b',
  'i',
  'cite',
  'em',
  'var',
  'dfn',
  'tt',
  'code',
  'kbd',
  'samp',
  'pre',
  'xmp',
  'plaintext',
  'listing',
  'mark',
  's',
  'strike',
  'del',
  'sub',
  'sup',
  'nobr',
  'ruby',
  'rt',
  'frameset',
  'frame',
  'fencedframe',
  'details',
  'summary',
  'bdi',
  'bdo',
  'big',
  'small',
];
/**
 * @typedef Node {
    name: string;
    __index: number;
    children: Node[] | string;
    attrs: Record<'dataset' | (string & {}), string>;
    bubbleup?: Node[]
  }
 */
const toMap = (arr) => {
  return arr.reduce((map, n) => {
    map[n] = true;
    return map;
  }, {});
}



Component({
  options: {
    styleIsolation: 'apply-shared',
    addGlobalClass: true,
    virtualHost: true
  },
  properties: {
    root: {
      type: Boolean,
      value: true
    },
    overrides: {
      type: Object,
      value: {}
    },
    /** @type Node[] */
    nodes: {
      optionalTypes: [
        String,
      ],
      type: Array,
      value: [],
    },
    theme: String,
  },
  observers: {
    selectable: {
      type: Boolean,
      value: true
    },
    nodes(maybe) {
      if (typeof maybe === 'string') {
        this.setData({ textonly: maybe })
      } else {
        maybe.forEach((item, i) => {
          item.__index = i;
        })
        this.setData({ tree: maybe })
      }
    }
  },
  data: {
    htmls: toMap(htmls),
    tree: [],
    textonly: ''
  },
  // lifetimes: {
  //   ready() {
  //     // console.log("this.isroot", this.data)
  //   }
  // },
  methods: {
    bindtap(e) {
      // 是否是冒泡透传
      const { currentTarget: { dataset }, detail } = e;

      let target = detail;
      // 当前冒泡到的节点
      const now  = dataset.index != null ?  this.data.nodes[dataset.index]: null;

      // 有 name 说明是冒泡的事件 , 做透传
      // 没有的话, 如果当前节点不为空, 那他就是第一个非纯文本的标签
      // 作为目标透传出去
      if (!detail?.name && now) {
        target = now;
      }
      // 记录冒泡顺序
      target.bubbleup = target.bubbleup || []
      if (now) {
        target.bubbleup.push(now)
      }
      // 如果是最顶层, 就转换成 click 事件
      const eventName = this.data.root ? 'click' : 'tap';
      this.triggerEvent(eventName, target);
    },
  },
});
