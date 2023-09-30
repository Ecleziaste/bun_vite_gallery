import Cookies from 'js-cookie';
import { useCallback, useState } from 'react';

export function useCookies(name: string, defaultValue?: string) {
  const [value, setValue] = useState<string | null>(() => {
    const cookie = Cookies.get(name);
    if (cookie) {
      return cookie;
    }
    if (defaultValue) {
      Cookies.set(name, defaultValue);
      return defaultValue;
    } else {
      return null;
    }
  });

  const updateCookie = useCallback(
    (newValue: string, options: Cookies.CookieAttributes) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return { value, updateCookie, deleteCookie };
}
