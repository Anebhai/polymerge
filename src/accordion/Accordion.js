import { useState } from "react";
import "./Accordion.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null); //^ We are going to use num that is map index function.  We lift up the state so that the other component  {items} gets to know which element is in use and it closses..
  return (
    <div>
      <h1>Accordion</h1>
      <div className="accordion">
        {faqs.map((item, i) => (
          <AccordionItem
            title={item.title}
            key={i + 1}
            num={i + 1}
            curOpen={curOpen}
            onOpen={setCurOpen}
          >
            {item.text}
          </AccordionItem>
        ))}
        <AccordionItem
          title="Test"
          key={66}
          num={66}
          curOpen={curOpen}
          onOpen={setCurOpen}
        >
          <p>What is react</p>
          <ul>
            <li>Js Library</li>
            <li>Based On Components</li>
            <li>Props</li>
            <li>JSX </li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}

function AccordionItem({ text, num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen; //^Here we are checking for true and false
  function handleToggle() {
    onOpen(isOpen ? null : num); //^Isopen is true we set to null otherwise we set to other numbers
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="item">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
