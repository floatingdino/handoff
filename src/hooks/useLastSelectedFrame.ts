import { SerialisedNode } from '@/types/SerialisedNode';
import { useEffect, useState } from 'react';
import { usePostMessage } from './usePostMessage';

export const useLastSelectedFrame = () => {
  const [frames, setFrames] = useState(new Map<string, SerialisedNode>());
  const [lastFrame, setLastFrame] = useState<string>(null);
  const selected = usePostMessage('selectionchange');

  useEffect(() => {
    setFrames((f) => {
      const fx = new Map(f);
      selected?.selection?.forEach((s) => fx.set(s.id, s));
      return fx;
    });
  }, [selected]);

  useEffect(() => {
    const firstSelectedFrame = selected?.selection?.find((s) => s.type === 'FRAME');
    console.log(selected?.selection, firstSelectedFrame);
    if (firstSelectedFrame) {
      setLastFrame(firstSelectedFrame.id);
    }
  }, [selected]);

  return frames.get(lastFrame);
};
