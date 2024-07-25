import { useCallback, useSyncExternalStore } from 'react';

const MESSAGES = new Map();

export const usePostMessage = (key: string) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      const listener = (event: MessageEvent) => {
        const postData = event.data.pluginMessage;
        if (postData.type === key) {
          MESSAGES.set(key, postData);
          callback();
        }
      };
      window.addEventListener('message', listener);
      return () => {
        window.removeEventListener('message', listener);
      };
    },
    [key]
  );

  const getSnapshot = useCallback(() => {
    return MESSAGES.get(key);
  }, [key]);

  return useSyncExternalStore(subscribe, getSnapshot);
};
