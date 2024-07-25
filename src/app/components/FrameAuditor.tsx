import React from 'react';
import { useLastSelectedFrame } from '@/hooks/useLastSelectedFrame';

export const FrameAuditor = () => {
  const currentSelection = useLastSelectedFrame();
  return <pre>{JSON.stringify(currentSelection, null, 2)}</pre>;
};
export default FrameAuditor;
