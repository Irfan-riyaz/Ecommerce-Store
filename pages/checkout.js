import { useEffect, useState } from 'react';
import { useCart } from '../components/CartContext';

export default function Checkout() {
  const { cart } = useCart();
  const [isBrowser, setIsBrowser] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalInPaisa = total * 100;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }
  }, []);

  const handleRazorpayPayment = () => {
    if (!scriptLoaded || typeof window.Razorpay === 'undefined') {
      alert("Payment system not ready. Please wait a moment.");
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Test Key
      amount: totalInPaisa,
      currency: 'INR',
      name: 'My E-Commerce Store',
      description: 'Order Payment',
      image: '/logo.png',
      handler: function (response) {
        alert('✅ Payment successful!\nPayment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: 'User',
        email: 'user@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#2f3c7e',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2f3c7e] to-[#f0c6d8] text-white p-6">
      <div className="max-w-lg w-full bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20 text-center">
        <h1 className="text-3xl font-bold mb-4">💳 Checkout</h1>
        <p className="mb-4 text-white/70">Cart Total: ₹{total}</p>

        <button
          onClick={handleRazorpayPayment}
          disabled={!isBrowser || !scriptLoaded}
          className={`${
            scriptLoaded ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500 cursor-not-allowed'
          } text-white px-6 py-3 rounded-full font-semibold transition-all`}
        >
          {scriptLoaded ? `Pay ₹${total} with Razorpay` : 'Loading Payment...'}
        </button>
      </div>
    </div>
  );
}
