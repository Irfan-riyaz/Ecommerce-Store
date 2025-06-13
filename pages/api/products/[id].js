// pages/api/products/[id].js
import { connectToDatabase } from '../../../lib/mongodb';
import Product from '../../../lib/models/Product';

export default async function handler(req, res) {
  await connectToDatabase();

  const { id } = req.query;

  if (req.method === 'DELETE') {
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Deleted' });
  }

  res.status(405).end();
}
