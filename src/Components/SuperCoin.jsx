import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
  const [superCoins, setSuperCoins] = useState(0);

  // Retrieve cart items from the Redux store
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Update superCoins based on totalAmount
  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setSuperCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setSuperCoins(20);
    } else if (totalAmount >= 300 && totalAmount < 400) {
      setSuperCoins(30);
    } else if (totalAmount >= 400 && totalAmount < 500) {
      setSuperCoins(40);
    } else if (totalAmount >= 500) {
      setSuperCoins(50);
    } else {
      setSuperCoins(0);
    }
  }, [totalAmount]);

  return (
    <div>
      <h2>Super Coins</h2>
      <p>You have earned {superCoins} Super Coins</p>
    </div>
  );
};

export default SuperCoin;