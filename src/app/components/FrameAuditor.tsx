import React, { useDeferredValue } from 'react';
import { useLastSelectedFrame } from '@/hooks/useLastSelectedFrame';
import { testNode, testSuite } from '@/utils/nodeTests';

export const FrameAuditor = () => {
  const currentSelection = useLastSelectedFrame();

  const testResults = useDeferredValue(
    currentSelection &&
      Object.entries(testSuite).map<[string, number]>(([name, test]) => [name, testNode(currentSelection, test)])
  );

  return (
    <div className="p-4">
      {testResults?.length > 0 && (
        <ul className="flex flex-col gap-2">
          {testResults?.map(([name, result]) => (
            <li key={name} className="flex">
              <strong className="font-semibold grow">{name}</strong>
              {result > 0 ? <span title={`${result} failing layers`}>❌</span> : '✅'}
            </li>
          ))}
        </ul>
      )}
      <pre>{JSON.stringify(currentSelection, null, 2)}</pre>
    </div>
  );
};
export default FrameAuditor;
