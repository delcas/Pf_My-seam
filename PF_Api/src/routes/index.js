const { Router } = require("express");
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./serviceRoutes');
// Importar todos los routers;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/user", userRoutes);
router.get("/product", productRoutes);
router.get("/service", serviceRoutes);

module.exports = router;
