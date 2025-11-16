import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// CREATE order
router.post('/', async (req, res) => {
  try {
    const { buyerId, products, deliveryAddress, paymentMethod, notes } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one product' });
    }

    const totalAmount = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = new Order({
      buyerId,
      products,
      totalAmount,
      deliveryAddress,
      paymentMethod: paymentMethod || 'cash-on-delivery',
      notes,
    });

    const newOrder = await order.save();
    await newOrder.populate('buyerId', 'name email phone');
    await newOrder.populate('products.productId', 'name price');

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('buyerId', 'name email phone')
      .populate('products.productId', 'name price category');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('buyerId', 'name email phone')
      .populate('products.productId', 'name price category');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE order status
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (req.body.status) {
      order.status = req.body.status;
    }
    if (req.body.notes) {
      order.notes = req.body.notes;
    }

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET orders by buyer
router.get('/buyer/:buyerId', async (req, res) => {
  try {
    const orders = await Order.find({ buyerId: req.params.buyerId })
      .populate('buyerId', 'name email phone')
      .populate('products.productId', 'name price category');

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
