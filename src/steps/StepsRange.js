import { useState } from "react";
import { styled } from "styled-components";

function StepsRange() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function handleCount() {
    setCount((s) => s + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  const dateString = date.toDateString();
  return (
    <StepsWrapper>
      <h1>Date Ranger</h1>
      <div>
        <label>Set the Range</label>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <p>
          <button onClick={() => setCount((s) => s - step)}>-</button>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value));
            }}
          />

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

      <div>
        {(count !== 0 || step !== 1) && (
          <button onClick={handleReset}>Reset</button>
        )}
      </div>
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

export default StepsRange;
