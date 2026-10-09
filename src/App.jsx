
import { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>Amazon Product Store</h1>
      <p>Welcome to our product store</p>
    </header>
  );
}

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
  onColorChange,
  onCityChange,
  onAdd,
  onRemove,
  onReset,
}) {
  return (
    <section className="product-card">
      <div className="product-icon">🖱️</div>
      <h2>{productName}</h2>
      <h3>Price: ₹{price}</h3>

      <label htmlFor="color">Select Colour:</label>
      <select
        id="color"
        value={selectedColor}
        onChange={(e) => onColorChange(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <p>Selected Colour: {selectedColor}</p>

      <label htmlFor="city">Delivery City:</label>
      <input
        id="city"
        type="text"
        value={deliveryCity}
        onChange={(e) => onCityChange(e.target.value)}
      />

      <p>Delivery City: {deliveryCity}</p>

      <div className="buttons">
        <button onClick={onAdd}>Add to Cart</button>
        <button onClick={onRemove} disabled={quantity === 0}>
          Remove One
        </button>
        <button className="reset" onClick={onReset}>
          Reset Cart
        </button>
      </div>

      <div className="summary">
        <h3>Cart Summary</h3>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ₹{quantity * price}</p>
        <p className={quantity === 0 ? "empty" : "success"}>
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Amazon Product Store</p>
    </footer>
  );
}

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  useEffect(() => {
    document.title = "Amazon Product Store";
  }, []);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <button
          className="toggle"
          onClick={() => setShowProduct((previous) => !previous)}
        >
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
            onColorChange={setSelectedColor}
            onCityChange={setDeliveryCity}
            onAdd={() => setQuantity((q) => q + 1)}
            onRemove={() => setQuantity((q) => Math.max(0, q - 1))}
            onReset={() => setQuantity(0)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;