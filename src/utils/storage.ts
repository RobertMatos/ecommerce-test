const EXPIRATION_TIME = 1000 * 60 * 15; // 15 minutos

export function saveState<T>(key: string, value: T) {
  const now = new Date().getTime();
  const item = {
    value,
    expiry: now + EXPIRATION_TIME,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function loadState<T>(key: string): T | null {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  try {
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();
    if (now > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  } catch {
    return null;
  }
}
