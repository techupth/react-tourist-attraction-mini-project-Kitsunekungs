import { useState, useEffect } from "react";
import axios from "axios";
import Infos from "./info";

function InputSearch() {
  const [searchingInput, setSearchingInput] = useState("");
  const [searchingResult, setSearchingResult] = useState([]);
  useEffect(() => {
    getInfo();
  }, [searchingInput]);
  const getInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchingInput}`
      );
      setSearchingResult(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      {
        <div>
          <div className="app-wrapper">
            <h1 className="app-title">เที่ยวไหนดี</h1>
            <form className="search-input-container">
              <label className="input-label">
                ค้นหาที่เที่ยว
                <input
                  id="search-box"
                  name="search-box"
                  placeholder="หาที่เที่ยวแล้วไปกัน ..."
                  onChange={(event) => setSearchingInput(event.target.value)}
                  value={searchingInput}
                />
              </label>
            </form>
          </div>
          <hr></hr>
          <div className="searching-result">
            <ul>
              <li>
                {...searchingResult.map((place) => {
                  return (
                    <Infos
                      photos={place.photos}
                      title={place.title}
                      description={place.description}
                      url={place.url}
                      tag={place.tag}
                    />
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      }
    </div>
  );
}

export default InputSearch;
