export interface  Node {
  name: string;
  __index: number;
  children: Node[] | string;
  attrs: Record<'dataset' | (string & {}), string>;
  bubbleup?: Node[]
}
