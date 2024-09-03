export const useLocalStorage = () => {
  const setLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
  };
  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };
  return { setLocalStorage, getLocalStorage, removeItem };
};
