import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza-imgs/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza-imgs/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza-imgs/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza-imgs/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza-imgs/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza-imgs/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizzas() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default Pizzas;

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  // * Please remember to use pizzas.length > 0 if you use && conditional rendering if not the ul element will get render on the dom and if you use without greater sign than 0 will appear on Ui as its falsy  value. So we prefer ternary operatory
  return (
    <main className="menu">
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine and creative dishes to choose from. All
            from our stone oven, all organic, all delicioussss
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our Pizzas please come back later</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  // ^Here this because of this if statement in parent component it will only returns empty in map funtion.
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("Come to eat tasty pizza");
  // else alert("Sorry we are closed");

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We are happy to welcome you between {openHour}:00 hrs and{" "}
            {closeHour}:00 hrs. Please visit during this hours and enjoy
            delicious Pizzzas
          </p>
        )}
      </div>
      <button className="btn">Order</button>
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div>
      <p>
        We are open from {openHour}:00 hrs until {closeHour}:00 hrs. Come visit
        us or Order Online
      </p>
    </div>
  );
}
