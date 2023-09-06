import { useState } from "react";
import { styled } from "styled-components";

function Steps() {
  const [stair, setStair] = useState(1);
  const [count, setCount] = useState(0);

  function handleStair() {
    setStair((s) => s + 1);
  }
  function handlePrevStair() {
    if (stair > 1) {
      setStair((s) => s - 1);
    }
  }
  function handleCount() {
    setCount((s) => s + stair);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  const dateString = date.toDateString();
  return (
    <StepsWrapper>
      <h1>DateCounter</h1>
      <div>
        <p>
          <button onClick={handlePrevStair}>-</button>
          <span>step:{stair}</span>
          <button onClick={handleStair}>+</button>
        </p>
      </div>
      <div>
        <p>
          <button onClick={() => setCount((s) => s - stair)}>-</button>
          <span>Count:{count}</span>
          <button onClick={handleCount}>+</button>
        </p>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : `${count} days from Today is `}
        </span>
        {/* <span>
          {count === 0 && `Today is `}
          {count > 0 && `${count} days from today is `}
          {count < 0 && `${Math.abs(count)} days ago was `}
        </span> */}
        <span>{dateString}</span>
      </p>
    </StepsWrapper>
  );
}

const StepsWrapper = styled.div`
  h1 {
    font-size: 4.8rem;
  }
  text-align: center;
  & > div {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin: 2rem 1rem;
  }
`;

export default Steps;
