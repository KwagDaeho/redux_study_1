import react from "react";
import { combineReducers, createStore } from "redux";

const WithRedux = () => {
  createStore();
  let red = () => {
    document.querySelector("#red_box").style.backgroundColor = "#f00";
    document.querySelector("#green_box").style.backgroundColor = "#f00";
  };
  let green = () => {
    document.querySelector("#red_box").style.backgroundColor = "#0f0";
    document.querySelector("#green_box").style.backgroundColor = "#0f0";
  };
  return (
    <div>
      <div className="container" id="red_box">
        <h1 className="red">red</h1>
        <input type="button" value="fire" onClick={red}></input>
      </div>
      <div className="container" id="green_box">
        <h1 className="green">green</h1>
        <input type="button" value="fire" onClick={green}></input>
      </div>
    </div>
  );
};

export default WithRedux;
