import { useState, useEffect } from "react";
import "./Inventory.css";

// import { fetchProducts } from "../api"; // Example if you use an API

const Inventory = () => {
  const [products, setProducts] = useState([
    { product_id: 1, name: "Smartphone", quantity: 50 },
    { product_id: 2, name: "Laptop", quantity: 20 },
  ]);

  useEffect(() => {
    // Example:
    // fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.product_id}>
              <td>{p.product_id}</td>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
