const KEY = 'access_token';

export const setAccessToken = accessToken => {
  localStorage.setItem(KEY, accessToken);
};

export const getAccessToken = () => {
  const item = localStorage.getItem(KEY);
  return item !== null ? item : '';
};

export const hasAccessAuth = () => {
  return getAccessToken() ? true : false;
};

export const removeAccessToken = () => {
  localStorage.removeItem(KEY);
};
