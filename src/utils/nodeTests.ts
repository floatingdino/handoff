import { SerialisedNode } from '@/types/SerialisedNode';

type TestResult = [number, string];

// Test returns number of failures

function fillsUseVariables(node: SerialisedNode): TestResult {
  if (!node?.fills) {
    console.log(node);
  }
  return [
    (node?.fills as any[])?.reduce((acc, f) => (Object.entries(f.boundVariables).length < 1 ? acc + 1 : acc), 0),
    node?.id,
  ];
}

function frameReadyForDev(node: SerialisedNode): TestResult {
  return [node?.type === 'FRAME' && node?.devStatus?.type !== 'READY_FOR_DEV' ? 1 : 0, node?.id];
}

export function testNode(node: SerialisedNode, test: (_node: SerialisedNode) => TestResult): number {
  console.log(node);
  let myVal = test(node)[0];
  node.children?.filter(Boolean)?.forEach((child) => {
    myVal += testNode(child as SerialisedNode, test);
  });

  return myVal;
}

export const testSuite = {
  'Fills use variables': fillsUseVariables,
  'Frames ready for dev': frameReadyForDev,
};
