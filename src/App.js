import "./App.css";
import { BakeryItem } from "./components/BakeryItem";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // const [counter, setCounter] = useState(0)
  const [cart, setCart] = useState([]);

  function handleClick(item) {
    // setCounter(counter + 1)
    setCart(
      [ // with a new array
        ...cart, // that contains all the old items
        {name: item.name, price: item.price} // and one new item at the end
      ]
    )
  }

  function getTotalPrice(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price
    }
    return total
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem key={index} item={item} addCart={handleClick}></BakeryItem>
      ))}

      <div>
        {/* TODO: render a list of items in the cart */}
        <h2>Cart</h2>
        {cart.map(function(item, index){
          return (<div>item: {item.name}, price: {item.price}</div>)
        })}
        <p>Total price: {getTotalPrice(cart)}</p>
      </div>
    </div>
  );
}

export default App;
