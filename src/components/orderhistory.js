import React from 'react';
import './orderhistory.css';

const OrderHistory = () => {
  const orders = [
    { id: '001', date: '2023-01-15', status: 'Delivered' },
    { id: '002', date: '2023-02-20', status: 'Pending' },
    { id: '003', date: '2023-03-05', status: 'Cancelled' },
    { id: '004', date: '2023-04-10', status: 'Delivered' },
  ];

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td className={order.status.toLowerCase()}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;