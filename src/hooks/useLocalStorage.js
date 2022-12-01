import { useEffect, useState } from 'react';

const useLocalStorage = (storageKey) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey))
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
