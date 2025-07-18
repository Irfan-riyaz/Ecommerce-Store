import { useCart } from '../components/CartContext';
import { useRouter } from 'next/router';

export default function CartPage() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] to-[#f0c6d8] text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Cart</h1>

      <div className="max-w-2xl mx-auto space-y-6">
        {cart.length === 0 ? (
          <p className="text-center text-white/70">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} className="bg-white/10 p-4 rounded-xl border border-white/20">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-white/70">{item.description}</p>
              <p>₹{item.price} × {item.quantity}</p>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <>
            <div className="text-right font-bold text-lg mt-4">Total: ₹{total}</div>
            <button
              onClick={() => router.push('/checkout')}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 py-3 rounded-xl text-white font-bold"
            >
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
}
