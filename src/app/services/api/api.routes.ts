const BASE_PATH = 'https://fakestoreapi.com/';
export const routes = {
  products: {
    getAllProducts: {
      method: 'GET',
      path: 'products',
      params: {
        limit: null,
        sort: null,
      },
    },
    getSingleProduct: {
      method: 'GET',
      path: 'products/{id}',
    },

    categories: {
      method: 'GET',
      path: 'products/categories',
    },
    category: {
      method: 'GET',
      path: 'products/categories/{categoryName}',
    },
  },
};
