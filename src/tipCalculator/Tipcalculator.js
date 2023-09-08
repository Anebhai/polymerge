import { useState } from "react";

function Tipcalculator() {
  const [bill, setBill] = useState(0);
  const [selectPercentage1, setSelectPercentage1] = useState(0);
  const [selectPercentage2, setSelectPercentage2] = useState(0);
  const tip = bill * ((selectPercentage1 + selectPercentage2) / 2 / 100);
  function handleReset() {
    setBill(0);
    setSelectPercentage1(0);
    setSelectPercentage2(0);
  }
  return (
    <div>
      <h1>Tipcalculator</h1>
      <Billcost bill={bill} onBill={setBill} />
      <SelectPercentages
        //   IN both select we are choosing name of props similiar so that same named prop can be set to value and onchange.
        selectPercentage={selectPercentage1}
        onSelectPercentage={setSelectPercentage1}
      >
        How much did you like the food?
      </SelectPercentages>
      <SelectPercentages
        //   IN both select we are choosing name of props similiar so that same named prop can be set to value and onchange.
        selectPercentage={selectPercentage2}
        onSelectPercentage={setSelectPercentage2}
      >
        How much did your friend like the food?
      </SelectPercentages>
      <Output bill={bill} tip={tip} onReset={handleReset} />
    </div>
  );
}

function Billcost({ bill, onBill }) {
  return (
    <form>
      <label>How much was the bill</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onBill(+e.target.value)}
      />
    </form>
  );
}
function SelectPercentages({ children, selectPercentage, onSelectPercentage }) {
  //^   IN both select we are choosing name of props similiar so that same named prop can be set to value and onchange.i.e selectPercentage and onSelectpercentage
  return (
    <form>
      <label>{children}</label>
      <select
        value={selectPercentage}
        onChange={(e) => onSelectPercentage(+e.target.value)}
      >
        <option value={0}>Dissatissfied (0%)</option>
        <option value={5}>Okay (5%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Awesome (20%)</option>
      </select>
    </form>
  );
}
function Output({ bill, tip, onReset }) {
  return (
    <div>
      <h3>
        The total bill cost was Rs{bill + tip} and that is (Rs{bill} + Rs{tip}){" "}
      </h3>
      {bill > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

export default Tipcalculator;
