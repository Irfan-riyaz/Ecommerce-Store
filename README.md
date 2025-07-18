# 🛒 Ecommerce Store

A modern and responsive e-commerce web application built using **Next.js**, **MongoDB**, and **Tailwind CSS**. It supports user shopping experience as well as an admin panel for product management.

---

## 📦 Features

- 🧾 Product Listing (User View)
- 🛍️ Add to Cart Functionality
- 🧑‍💼 Admin Login with Authentication
- ✍️ Add / Delete Products (Admin Only)
- 💰 Dynamic Cart and Total
- 🌐 MongoDB Integration (via Mongoose)
- 🎨 Styled with Tailwind CSS
- 🔐 Environment variable-based secrets (Stripe/MongoDB)

---

## 🚀 Tech Stack

| Tech         | Role                  |
|--------------|-----------------------|
| **Next.js**  | React Framework       |
| **MongoDB**  | NoSQL Database        |
| **Mongoose** | ODM for MongoDB       |
| **Tailwind CSS** | Styling framework |
| **Stripe (Optional)** | Payment handling |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Ecommerce-Store.git
cd Ecommerce-Store
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env.local` File

Create a `.env.local` file in the root folder and add:

```env
MONGODB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key  # if using Stripe
```

### 4. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 📁 Folder Structure

```
/components        → UI components like ProductCard, Navbar
/pages             → Next.js route pages (user & admin)
/context           → Cart Context
/utils             → MongoDB connection
/public/images     → Product images
.env.local         → Environment variables (not pushed)
```

---

## 🔐 Environment Variables

This project uses the following secrets:

```env
MONGODB_URI=...
STRIPE_SECRET_KEY=... # Optional
```

⚠️ **Do NOT push `.env.local` to GitHub. Add it to `.gitignore`!**

---

## 🔮 Future Enhancements

- ✅ Add user signup/login system
- 💳 Enable real Stripe checkout
- 🗃️ Paginate product list
- 📦 Order history (user)
- 🧾 Admin analytics dashboard

---

## 👨‍💻 Author

Developed by [**Irfan Riyaz**](https://github.com/Irfan-riyaz)

---

## 📜 License

This project is open source and free to use.
