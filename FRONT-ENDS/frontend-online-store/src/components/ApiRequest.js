import * as api from '../services/api';

function ApiRequest(categoryId, searchInput) {
  return api.getProductsFromCategoryAndQuery(categoryId, searchInput);
}

export default ApiRequest;
