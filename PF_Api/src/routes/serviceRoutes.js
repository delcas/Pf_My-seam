const { Router } = require('express');
const { postServiceHandler, getServicesHandler, getAServiceHandler } = require('../handlers/serviceHandlers.js')

const router = Router();

router.post('/', postServiceHandler);

router.get('/', getServicesHandler);

router.get('/:param', getAServiceHandler);

module.exports = router;