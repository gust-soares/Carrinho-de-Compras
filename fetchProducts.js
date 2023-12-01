const fetchProducts = async (query) => {

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const products = await response.json();

  return products.results;
};

export default fetchProducts;
