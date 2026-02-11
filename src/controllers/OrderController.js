const Order = require('../models/Order');

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find().populate('user').populate('products.product');
        res.status(200).json({ success: true, count: orders.length, data: orders });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

exports.getOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).populate('user');
        if (!order) {
            return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: order });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

exports.createOrder = async (req, res, next) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json({ success: true, data: order });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};

exports.updateOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!order) {
            return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: order });
    } catch (err) {
        res.status(400).json({ success: false });
    }
};
