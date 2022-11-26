const { productsDao } = require('../containers/daos');

require('../containers/daos/index');

const getProductsService = async () => {
    const products = await productsDao.getAll();
    return products;
}

const saveProductsService = async (obj) => {
    const products = await productsDao.save(obj);
    return products;
}

module.exports = { getProductsService, saveProductsService }