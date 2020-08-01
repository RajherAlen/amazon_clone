import React from "react";
import { useStateValue } from "../StateProvider";
import add from "./add.png";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src={add} alt="add" />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is emtpy</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose — fill it with
              books, CDs, DVDs, toys, electronics, and more.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your shopping basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
