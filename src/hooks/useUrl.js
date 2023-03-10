const useUrl = (baseUrl, params) => {
  let url = new URL(baseUrl);
  let searchParams = new URLSearchParams(url.search);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  return url;
};

export default useUrl;
