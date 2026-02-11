const express = require('express');
const {
    getOrders,
    getOrder,
    createOrder,
    updateOrder
} = require('../controllers/OrderController');

const router = express.Router();

router.route('/')
    .get(getOrders)
    .post(createOrder);

router.route('/:id')
    .get(getOrder)
    .put(updateOrder);

module.exports = router;
