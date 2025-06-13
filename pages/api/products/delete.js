// pages/api/products/delete.js
import db from '@/lib/mongodb';
import Product from '@/lib/models/Product';

export default async function handler(req, res) {
  await db();

  if (req.method === 'DELETE') {
    const { id } = req.body;
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Product deleted' });
  }

  res.status(405).end();
}
