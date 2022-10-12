import logo from "./logo.svg";
import "./App.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo";
import { useState } from "react";

function App() {
  //console.log(countries[0])
  //sorting countries by area

  /*let holder = countries.sort((a, b) => b.area - a.area);
  //Removing Antarctica from list
  let filtered = holder.filter((arg) => arg.name.common !== "Antarctica");
  // selecting the first 15 countries
  let sliced = filtered.slice(0, 15);
*/
  const [searchString, setSearchString] = useState("");
  // Creating a countrylist
  function change(event) {
    setSearchString(event.target.value);
  }
  console.log(searchString);

  const matchSearch = (word) => {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    // What is the '0' representing? What happens if you change it to '1'?
    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  };

  let holder = countries.sort((a, b) => b.area - a.area);
  //let holdereName = holder.data.name.common;
  const filteredWords = holder.filter(matchSearch);
  let sliced = filteredWords.slice(0, 15);
  let sliced5 = sliced.slice(0, 5);
  let sliced10 = sliced.slice(5, 15);
  //console.log(filteredWords);
  console.log(matchSearch);

  return (
    // Calling the funciton
    <div>
      <div>
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

export default App;
