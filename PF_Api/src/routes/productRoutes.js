const { Router } = require('express');
const { postProductHandler, getProductsHandler, getAProductHandler } = require('../handlers/productHandlers.js')

const router = Router();

router.post('/', postProductHandler);

router.get('/', getProductsHandler);

router.get('/:param', getAProductHandler);

module.exports = router;