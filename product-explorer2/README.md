# 🛍️ Product Explorer


**Author:** Pradeep Singh Rawat  
**LinkedIn:** [linkedin.com/in/pradeepsinghrawat038](https://linkedin.com/in/pradeepsinghrawat038)  
**GitHub:** [github.com/rawatpradeep038-dot](https://github.com/rawatpradeep038-dot)

---

## 📘 Overview

**Product Explorer** is a React-based web application that fetches product data from the [DummyJSON API](https://dummyjson.com/) and displays it in a clean, responsive, and user-friendly interface.

This project was built as part of the **API Assignment** to demonstrate API integration, UI design, and React development skills.

---

## 🎥 Demo / GIF

project in action here 👇

![Product Explorer Demo](./product-explorer2/demo.gif)
<div align="center">
  <img src="https://raw.githubusercontent.com/rawatpradeep038-dot/Product-Explorer/main/product-explorer2/ezgif.com-video-to-gif-converter%20(2).gif" alt="Product Explorer Demo" width="800"/>
</div>

## ✨ Core Features

✅ Fetch products from DummyJSON API  
✅ Display product list with title, image, price & rating  
✅ Search products by name  
✅ Filter products by category  
✅ Show loading indicator while fetching data  
✅ Handle API errors gracefully  

---

## 🌈 Bonus Features (Optional / Extra Credit)

🌙 Dark mode toggle  
📄 Pagination (`?limit=10&skip=10`)  
❤️ Add to Favorites (stored in localStorage)  

---

## 🧠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React (Vite or CRA) |
| **Styling** | CSS / TailwindCSS |
| **API** | DummyJSON API |
| **State Management** | React Hooks / Context API |


---

## 🧩 Project Structure

```
src/
├── App.js
├── App.css
├── index.js
└── components/
    ├── SearchBar.js
    ├── CategoryFilter.js
    ├── ProductList.js
    └── ProductItem.js
```

---

## ⚙️ API Endpoints Used

| Purpose | Endpoint |
|---------|----------|
| All products | `https://dummyjson.com/products` |
| Search products | `https://dummyjson.com/products/search?q=phone` |
| Categories list | `https://dummyjson.com/products/categories` |
| Products by category | `https://dummyjson.com/products/category/laptops` |
| Pagination | `https://dummyjson.com/products?limit=10&skip=20` |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rawatpradeep038-dot/Product-Explorer.git
cd Product-Explorer
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the App

For **Vite**:
```bash
npm run dev
```

For **Create React App**:
```bash
npm start
```

### 4️⃣ Open in Browser

Visit `http://localhost:5173/` (Vite) or `http://localhost:3000/` (CRA)

---

## 🧭 Future Improvements

- [ ] Add category-based product sorting
- [ ] Integrate cart & checkout system
- [ ] Add user authentication
- [ ] Improve accessibility and ARIA support
- [ ] Deploy with continuous integration

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repo
2. Create your branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added YourFeature"
   ```
4. Push & open a Pull Request

---

## 📩 Submission Info (Assignment)

**Submitted To:** aman.k.sharma@cepialabs.in

**Deliverables:**
- GitHub Repository Link
- Live Demo Link (or screen recording video)

**Evaluation Criteria:**
- API integration (fetch, search, filters working)
- Clean & responsive UI
- Code quality & folder structure
- Hosting / Demo availability

---

## 📄 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute with proper credit.

---

## 💫 Developed by Pradeep Singh Rawat

If you like this project, don't forget to ⭐ it on GitHub!

---

**Repository:** [github.com/rawatpradeep038-dot/Product-Explorer](https://github.com/rawatpradeep038-dot/Product-Explorer)
