export const fetchApiData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return await data;
};
