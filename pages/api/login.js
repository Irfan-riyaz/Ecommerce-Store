// pages/api/login.js

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // Ensure env variable is set
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return res.status(500).json({ error: 'Missing MongoDB connection string' });
  }

  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    await client.connect();

    // Use the "store" database
    const db = client.db('store');

    // Find the user by email
    const user = await db.collection('users').findOne({ email });

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Return the user role (admin/user)
    return res.status(200).json({ role: user.role });

  } catch (error) {
    console.error('Login API error:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    // Always close the DB connection
    await client.close();
  }
}
