const baseHref = "https://restcountries.com/v2/";

export const createUrl = (path, params = {}) => {
  let url = new URL(path, baseHref);
  let searchParams = new URLSearchParams(url.search);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  console.log(url, "url");

  return url;
};
