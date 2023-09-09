import { useState } from "react";
import "./EatNSplit.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function EatNSplit() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(newFriend) {
    setFriends((prevFreinds) => [...prevFreinds, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(newFriend) {
    // ^We are getting the whole object. from this function.

    // ^There is close relation between close and select if there are multiple members in list we should do like this.Here also i did recieve bug so optional chaining before id.

    // ^ The optional we do because the cur or selected friend will be set to null initially and also at times when its already selected so to prevent the error.
    // setSelectedFriend(newFriend);
    setSelectedFriend((cur) => (cur?.id === newFriend.id ? null : newFriend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="heading-eat">
      <h1>EatNsplit🍴</h1>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <Button onClick={() => setShowAddFriend((show) => !show)}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {/* {friend.balance < 0 ? (
        <p className="red">
          you Owe {friend.name} {Math.abs(friend.balance)}{" "}
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {" "}
          {friend.name} Owes you {friend.balance}
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )} */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = { name, balance: 0, image: `${image}?=${id}`, id };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬 Add Friend </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌄 Image Url </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  // ^ Here for paidByFriend we are checking if its truthy than only caluclate bill-paidbyuser
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("you");
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    // ^This is the most tough part to understand, as you get positive balance in your balance sheet so you add that and if friend is paying than you get negative balance.
    // ^ In function call itself you are using ternary logic to get the dynamic result.
    onSplitBill(whoIsPaying === "you" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value </label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>💸 Your Expense </label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          // ^This logic can also be extracted above but here only we are doing, also notice that e.target.value logic is checked inside setpaidbyuser bracket only and this logic is e.target.value checks for every key board stroke and when the key board stroke increases the value more than the bill it wont move ahead.
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      />
      <label>💵 {selectedFriend.name}'s Expense </label>
      {/* Here for input disabled attribute is given so that it calculates how much the you have spend and based on that the balance is alloted to the firend */}
      <input type="number" disabled value={paidByFriend} />
      <label>🤑 Who is paying the Bill? </label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

export default EatNSplit;
