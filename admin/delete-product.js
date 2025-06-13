import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).end();

  const { id } = req.query;
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('store');
    await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting product' });
  } finally {
    await client.close();
  }
}
