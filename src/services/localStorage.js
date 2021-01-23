export const getLocalStorage = (key) => {
  if (typeof localStorage === 'undefined') {
    return undefined;
  }
  const item = localStorage.getItem(key);
  try {
    const parsed = JSON.parse(item);
    return parsed;
  } catch {
    return item;
  }
}

export const setLocalStorage = (key, value) => {
  if (typeof localStorage === 'undefined') {
    return;
  }
  localStorage.setItem(key, String(value));
}
