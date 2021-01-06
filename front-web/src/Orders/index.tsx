import { useEffect, useState } from "react";
import "./styles.css";
import ProductsList from "./ProductsList";
import SetpsHeader from "./StepsHeader";
import { Product } from "./types";
import { fetchProducts } from "../api";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error ));
  }, []);

  return (
    <div className="orders-container">
      <SetpsHeader />
      <ProductsList products={products} />
    </div>
  );
}

export default Orders;
