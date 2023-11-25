const api_url = "https://dummyjson.com/products?limit=10&skip=0";
const fetchData = async () => {
  try {
    const response = await fetch(api_url);
    let data = await response.json();
    console.log(data);
    let { products = [] } = data || {};
    products = products.map(({ title, price, description, thumbnail }) => {
      return {
        title,
        price,
        description,
        thumbnail,
      };
    });
    return products;
  } catch (err) {
    console.log(err, "error");
  }
};
export default fetchData;
