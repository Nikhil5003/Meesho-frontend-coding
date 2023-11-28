const fetchData = async (skip, limit, setLoading) => {
  const api_url = `https://dummyjson.com/products?limit=${limit}&skip=${
    (skip - 1) * 10
  }`;
  try {
    setLoading(true);
    const response = await fetch(api_url);
    let data = await response.json();
    console.log(data);
    setLoading(false);
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
