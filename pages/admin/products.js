import { useCart } from '../../components/CartContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const { cart } = useCart();
  const router = useRouter();

  const [totalItems, setTotalItems] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const items = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalItems(items);
    setTotalCost(cost);
  }, [cart]);

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-10">
    <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>

      {/* Cart Overview Section */}
      <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-6">
        <h2 className="text-xl font-semibold mb-2">🛒 Cart Overview</h2>
        <p>Total Items: <span className="font-bold">{totalItems}</span></p>
        <p>Total Cost: <span className="font-bold">₹{totalCost}</span></p>
      </div>

      {/* Actions Section */}
      <div className="bg-white/10 p-6 rounded-xl border border-white/20">
        <h2 className="text-xl font-semibold mb-4">⚙️ Admin Actions</h2>

        <button
          onClick={() => router.push('/admin/add-product')}
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg mt-2 font-semibold"
        >
          ➕ Add Product
        </button>
        <button
          onClick={() => router.push('/admin/delete-product')}
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg mt-3 font-semibold"
        >
          🗑 Delete Product
        </button>
        <button
          onClick={() => router.push('/cart')}
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg mt-3 font-semibold"
        >
          🛒 View Cart
        </button>
      </div>

      <p className="text-center text-white/70 text-sm mt-6">
        Logged in as admin. You can manage products and review cart here.
      </p>
    </div>
  </div>
);
}
