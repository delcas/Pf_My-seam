const { Router } = require('express');
const { postUserHandler, getUsersHandler, getAUserHandler } = require('../handlers/userHandlers.js')

const router = Router();

router.post('/', postUserHandler);

router.get('/', getUsersHandler);

router.get('/:param', getAUserHandler);

module.exports = router;