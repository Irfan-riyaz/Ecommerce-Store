// pages/admin/delete-product.js
import { useEffect, useState } from 'react';

export default function DeleteProduct() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) {
      alert('Product deleted');
      fetchProducts();
    } else {
      alert('Failed to delete');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3c7e] via-[#4053a3] to-[#f0c6d8] text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🗑 Delete Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white/10 p-4 rounded-xl border border-white/20 shadow-lg">
            <img src={product.image} className="h-40 w-full object-cover rounded mb-2" alt={product.title} />
            <h2 className="text-lg font-bold mb-1">{product.title}</h2>
            <p className="text-sm text-white/70 mb-2">{product.description}</p>
            <p className="font-semibold text-emerald-300 mb-2">₹{product.price}</p>
            <button onClick={() => handleDelete(product._id)} className="w-full bg-red-600 hover:bg-red-700 py-2 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
