import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../components/CartContext';
import ImageSpinModal from '../../components/ImageSpinModal';

export default function UserProducts() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useCart();
  const [modalImage, setModalImage] = useState(null);
  const [toast, setToast] = useState('');
  const router = useRouter();


  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const addToCart = (product) => {
  const exists = cart.find((item) => item._id === product._id);
  if (exists) {
    const updatedCart = cart.map((item) =>
      item._id === product._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  setToast(`${product.title} added to cart`);
  setTimeout(() => setToast(''), 2000);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10">🛍 Explore Products</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              onClick={() => setModalImage(product.image)}
              className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition"
            />
            <h2 className="text-xl font-bold mb-1">{product.title}</h2>
            <p className="text-white/70 text-sm mb-2">{product.description}</p>
            <p className="text-lg font-semibold text-emerald-300 mb-4">₹{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full transition"
            >
              Add to Cart
            </button>

            <div className="w-full text-center mt-16">
  <button
    onClick={() => router.push('/cart')}
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg"
  >
    🛒 View Cart
  </button>
</div>

            {toast && (
            <div className="fixed bottom-24 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
            {toast}
            </div>
            )}
          </div>
        ))}
      </div>

      {modalImage && (
        <ImageSpinModal
          image={modalImage}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
}
