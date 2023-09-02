import listProduct from "./data";

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listProduct);
    }, 500);
  });
};

const getProductById = (pid) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listProduct.find((el) => el.id === pid));
    }, 500);
  });
};

const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listProduct.filter((el) => el.category === categoryId));
    }, 500);
  });
};

export { getProductById, getProducts, getProductsByCategory };
