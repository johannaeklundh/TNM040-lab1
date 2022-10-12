import logo from "./logo.svg";
import "./App.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";
import { useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [searchString, setSearchString] = useState("");
  //sort countries by area
  let holder = countries.sort((a, b) => b.area - a.area);

  // set input to searchstring
  function change(event) {
    setSearchString(event.target.value);
  }

  // match countries to the searched word
  const matchSearch = (word) => {
    const lowerCaseWord = word.name.common.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();
    // What is the '0' representing? What happens if you change it to '1'?
    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  };

  //Filter the matched word
  const filteredWords = holder.filter(matchSearch);

  // slice to get to columns
  let sliced = filteredWords.slice(0, 15);
  let sliced5 = sliced.slice(0, 5);
  let sliced10 = sliced.slice(5, 15);

  //console.log(filteredWords);
  //console.log(matchSearch);

  return (
    // Calling the funciton
    <div>
      <div className="search">
        <h1>Sök</h1>
        <input type="text" placeholder="Type here..." onChange={change} />
        <p></p>
      </div>
      <div className="column1">
        {sliced5.map((sliced5, i) => (
          <CountryInfo key={sliced5.cca3} data={sliced5} detailed={true} />
        ))}
      </div>
      <div className="column2">
        {sliced10.map((sliced10, i) => (
          <CountryInfo key={sliced10.cca3} data={sliced10} detailed={false} />
        ))}
      </div>
    </div>
  );
}
function a() {
  return <div></div>;
}

function CountryDetails() {
  return <div>Hello World</div>;
}

export default App;
