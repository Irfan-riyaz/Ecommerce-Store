import mongoose from 'mongoose';
import { connectToDatabase } from '../../lib/mongodb';

// ✅ Use 'User' schema mapped to 'users' collection
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    await connectToDatabase();

    // ✅ Find admin credentials in 'users' collection
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server Error', error: error.message });
  }
}
