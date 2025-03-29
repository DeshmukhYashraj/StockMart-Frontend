import { useState, useEffect } from "react";

const Billing = () => {
  const [invoices, setInvoices] = useState([
    { invoice_id: 101, order_id: 1, total_amount: 499.99, payment_status: "PAID" },
    { invoice_id: 102, order_id: 2, total_amount: 299.99, payment_status: "UNPAID" },
  ]);

  useEffect(() => {
    // Example API call to fetch invoices
    // fetchInvoices().then(data => setInvoices(data));
  }, []);

  return (
    <div className="container">
      <h2>Billing & Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Order ID</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.invoice_id}>
              <td>{inv.invoice_id}</td>
              <td>{inv.order_id}</td>
              <td>${inv.total_amount}</td>
              <td>{inv.payment_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Billing;
