import { WANTED_KEYS } from '@/utils/serialiseNode';

export type SerialisedNode = Pick<
  SceneNode & SceneNode['boundVariables'] & ChildrenMixin & DevStatusMixin,
  (typeof WANTED_KEYS)[number]
> & { type: string };
