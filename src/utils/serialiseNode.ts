const WANTED_KEYS = ['id', 'effects', 'cornerRadius', 'fillStyleId', 'fills', 'isAsset', 'name', 'strokes'];

export default function serialiseNode(node: SceneNode) {
  return Object.fromEntries(WANTED_KEYS.map((key) => [key, node[key]]));
}

export function serialiseNodes(nodes: readonly SceneNode[]) {
  return nodes.map(serialiseNode);
}
