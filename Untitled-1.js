import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([{ name: "", price: "", qty: "" }]);
  const [discount, setDiscount] = useState(0);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", price: "", qty: "" }]);
  };

  const totalAmount = items.reduce((sum, item) => {
    const price = parseFloat(item.price) || 0;
    const qty = parseInt(item.qty) || 0;
    return sum + price * qty;
  }, 0);

  const discountAmount = (totalAmount * discount) / 100;
  const finalAmount = totalAmount - discountAmount;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍰 Sweet House Bill & Discount Calculator</h1>

      {items.map((item, index) => (
        <div key={index} style={styles.row}>
          <input
            type="text"
            placeholder="Item Name"
            value={item.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleChange(index, "price", e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={item.qty}
            onChange={(e) => handleChange(index, "qty", e.target.value)}
            style={styles.input}
          />
        </div>
      ))}

      <button onClick={addItem} style={styles.button}>➕ Add Item</button>

      <div style={styles.discountBox}>
        <label>Discount %: </label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.billBox}>
        <p>Subtotal: ₹ {totalAmount.toFixed(2)}</p>
        <p>Discount: ₹ {discountAmount.toFixed(2)}</p>
        <h3>Final Amount: ₹ {finalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff0f5",
    borderRadius: "20px",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#d63384",
  },
  row: {
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    margin: "5px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#ff69b4",
    border: "none",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "10px",
  },
  discountBox: {
    margin: "15px 0",
  },
  billBox: {
    backgroundColor: "#ffe4ec",
    padding: "15px",
    borderRadius: "15px",
    marginTop: "20px",
  },
};
