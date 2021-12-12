import cookies from 'next-cookies';



export const setCookie = (name: string, value: string, option?: string) => {
  const cookieSet = `${name}=${value}; ${option}`;
  document.cookie = cookieSet;
  return cookieSet;
}

export const getCookie = (ctx, name: string) => {
  const allCookies = cookies(ctx);
  return allCookies[name];
}