export default function useLocalStorage() {
  const get = (key) => {
    return JSON.parse(localStorage.getItem(`${key}`));
  };

  const set = (key, movies) => {
    localStorage.setItem(`${key}`, JSON.stringify(movies));
  };

  const data = {
    get,
    set,
  };

  return data;
}
