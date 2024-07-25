import { WANTED_KEYS } from '@/utils/serialiseNode';

export type SerialisedNode = Pick<FrameNode, (typeof WANTED_KEYS)[number]> & { type: string };
