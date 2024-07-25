export default function serialiseNode(node: SceneNode) {
  // TODO: Extract important values
  return node;
}

export function serialiseNodes(nodes: readonly SceneNode[]) {
  return nodes.map(serialiseNode);
}
