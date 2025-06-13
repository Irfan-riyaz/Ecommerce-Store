import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, password } = req.body;
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const db = client.db('store');
    const user = await db.collection('users').findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    return res.status(200).json({ role: user.role });
  } catch (error) {
    console.error('Login API error:', error.message);
    return res.status(500).json({ error: 'Server error' });
  } finally {
    await client.close();
  }
}
