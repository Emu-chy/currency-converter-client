import React, { useRef, useState } from "react";
import "./style.css";

const Home = () => {
  const [amountValues, setAmountValues] = useState([]);
  const [selectFromValues, setSelectFromValues] = useState([]);
  const [selectToValues, setSelectTOValues] = useState([]);
// const [countryNames, setCountryName] = useState([]);
  const getInputValue = useRef();

//   const Currency = () => {
//     const filter = countryCoad.filter();
//     setCountryName(filter);
//   };

  const handleInputValue = () => {
    const getAmountValues = getInputValue.current.value;

    const countryInputValues = {
      getAmountValues,
      selectFromValues,
      selectToValues,
    };
    // console.log(countryInputValues);

    const requesrOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(countryInputValues),
    };
    fetch("http://localhost:4001/exchange", requesrOption)
      .then((res) => res.json())
      .then((data) => setAmountValues(data));
  };

  const selectFromValue = (e) => {
    const newValue = e.target.value;
    setSelectFromValues(newValue);
    
  };
  const selectTOValue = (e) => {
    const newValue2 = e.target.value;
    setSelectTOValues(newValue2);
  };

  return (
    <div className="card2">
      <h3>Currency Converter</h3>
      <div className="inputField">
        <input
          ref={getInputValue}
          type="number"
          placeholder="enter your money"
        />
      </div>

      <div className="parentDiv">
        <div className="box1">
          <h3>From</h3>
          <select onChange={selectFromValue}>
            <option value="BDT">Bangladesh</option>
            <option value="USD">USA</option>
            <option value="AED">United Arab Emirates</option>
            <option value="INR">India</option>
            <option value="Euro">Italy</option>
            <option selected>Choose From Country</option>
          </select>
        </div>
        <div className="box1">
          <h3>To</h3>
          <select onChange={selectTOValue}>
            <option value="BDT">Bangladesh</option>
            <option value="USD">USA</option>
            <option value="AED">United Arab Emirates</option>
            <option value="INR">India</option>
            <option value="Euro">Italy</option>
            <option selected>Choose To Country</option>
          </select>
        </div>
      </div>
      <h2>{amountValues}</h2>
      <button onClick={handleInputValue} className="button" type="submit">
        Exchange Rate
      </button>
    </div>
  );
};

export default Home;

const countryCoad = ["BDT", "USD"];
