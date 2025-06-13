// pages/api/products/index.js
import { connectToDatabase } from '../../../lib/mongodb';
import Product from '../../../lib/models/Product';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    const products = await Product.find({});
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  }

  res.status(405).end();
}
