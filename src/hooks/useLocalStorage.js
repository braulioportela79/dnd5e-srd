import { useEffect, useRef, useState } from 'react';

export function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.sessionStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.sessionStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};