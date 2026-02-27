import { useState, useCallback } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // useCallback ensures the toggle function isn't recreated on every render
  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  // Return the current state and the function to toggle it
  return [value, toggle];
}