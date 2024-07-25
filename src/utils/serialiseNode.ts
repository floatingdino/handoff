import { SerialisedNode } from '@/types/SerialisedNode';

export const WANTED_KEYS = [
  'id',
  'name',
  'effects',
  'fills',
  'isAsset',
  'name',
  'strokes',
  'children',
  'devStatus',
] as const;

export default function serialiseNode(node: SceneNode) {
  return Object.fromEntries([
    ...WANTED_KEYS.map((key) => [key, key === 'children' ? serialiseNodes(node[key]) : node[key]]),
    ['type', Object.getPrototypeOf(node).type],
  ]) as SerialisedNode;
}

export function serialiseNodes(nodes: readonly SceneNode[]) {
  return nodes?.map(serialiseNode);
}
