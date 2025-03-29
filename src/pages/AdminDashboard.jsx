import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
  ]);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 2, name: "Shirt", category: "Clothing", price: 1000 },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User" });
  const [newCategory, setNewCategory] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) return;
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", email: "", role: "User" });
  };

  const handleAddCategory = () => {
    if (!newCategory) return;
    setCategories([...categories, { id: categories.length + 1, name: newCategory }]);
    setNewCategory("");
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.price) return;
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ name: "", category: "", price: "" });
  };

  const handleDelete = (type, id) => {
    if (type === "user") setUsers(users.filter((user) => user.id !== id));
    if (type === "category") setCategories(categories.filter((category) => category.id !== id));
    if (type === "product") setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      {/* Users Section */}
      <section className="admin-section">
        <h3>Users</h3>
        <input type="text" placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <input type="email" placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        <button className="admin-btn btn-add" onClick={handleAddUser}>Add User</button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><button className="admin-btn btn-delete" onClick={() => handleDelete("user", user.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Categories Section */}
      <section className="admin-section">
        <h3>Categories</h3>
        <input type="text" placeholder="Category Name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
        <button className="admin-btn btn-add" onClick={handleAddCategory}>Add Category</button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td><button className="admin-btn btn-delete" onClick={() => handleDelete("category", category.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Products Section */}
      <section className="admin-section">
        <h3>Products</h3>
        <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <button className="admin-btn btn-add" onClick={handleAddProduct}>Add Product</button>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td><button className="admin-btn btn-delete" onClick={() => handleDelete("product", product.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
