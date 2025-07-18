// lib/models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
  category: String,
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
