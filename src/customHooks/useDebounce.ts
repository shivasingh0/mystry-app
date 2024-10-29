"use client"
import { useState, useEffect, useCallback } from 'react';

// Custom debounce hook in TypeScript
function useDebounce<T>(callback: (value: T) => void, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);

  const debouncedCallback = useCallback((value: T) => {
    setDebouncedValue(value);
  }, []);

  useEffect(() => {
    if (debouncedValue === null) return;

    const handler = setTimeout(() => {
      callback(debouncedValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, callback, delay]);

  return debouncedCallback;
}

export default useDebounce;
