export async function getCategories() {
  return fetch('https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && !query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((data) => data.json());
  }
  if (query && !categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((data) => data.json());
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((data) => data.json());
}
