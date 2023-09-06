import "./faraway.css";

function Faraway() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1> 🌴 Far Away 💼</h1>
    </div>
  );
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you want for your Trip</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer>
      💼you have x items on your list, and you already packed (X%) items
    </footer>
  );
}

export default Faraway;
