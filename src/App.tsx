import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import NavBar from "./component/NavBar";
import TextBox from "./component/TextBox";
import Button from "./component/Button";
import Table from "./component/Table";

function App() {
  const [text, setText] = useState(
    "Please enter the text here and feel happy to see the changes"
  );
  const [array, setArray] = useState([]);
  const [display,setDisplay]=useState('d-none')

  const changing = (event: any) => {
    console.log("change observed");
    setText(event.target.value);
  };

  const capital = () => {
    console.log("capital clicked");

    const result = text
      .split(" ")
      .map((a: any) => {
        let b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
        return b;
      })
      .join(" ");
    console.log(result);
    setText(result);
  };
  const upper = () => {
    console.log("upper clicked");
    setText(text.toUpperCase());
  };
  const lower = () => {
    console.log("lower clicked");
    setText(text.toLowerCase());
  };
  const clear = () => {
    console.log("clear clicked");
    setText("");
  };

  const copy = () => {
    console.log("copying");
  };

  const table = () => {
    const data = {
      count: text.length,
      capital: text
        .split(" ")
        .map((a: any) => {
          let b = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
          return b;
        })
        .join(" "),
      small: text.toLowerCase(),
      up: text.toUpperCase(),
    };

    setArray((prevArray) => [...prevArray, data]);
    setDisplay('d-block w-100')

  };

  const tableClear = ()=>{
    console.log('cleared table click')
    setArray([])
    setDisplay('d-none')
  }
  return (
    <>
      <NavBar
        brandName="Text Wonders"
        li1="Home"
        li2="ABout US"
        li3="Contact US"
        li4="Sign UP"
        li5="Login IN"
      />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center">
              <p className="mb-1">Enter Your Text to See Wonders</p>
              <TextBox
                textValue={text}
                changing={changing}
                class="fs-5 muted form-control"
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10">
            <div className="text-center mt-3">
              <span className="me-5">Character count: {text.length}</span>
              <Button
                btnValue="Capitalize"
                class="btn btn-outline-primary me-3"
                clicking={capital}
              />
              <Button
                btnValue="UpperCase"
                class="btn btn-outline-success me-3"
                clicking={upper}
              />
              <Button
                btnValue="LowerCase"
                class="btn btn-outline-info me-3"
                clicking={lower}
              />
              <Button
                btnValue="Clear"
                class="btn btn-outline-danger me-3"
                clicking={clear}
              />
              <Button
                btnValue="Copy"
                clicking={copy}
                class="btn btn-outline-secondary me-3"
              />

              <Button
                btnValue="Table"
                clicking={table}
                class="btn btn-success me-3 "
              />
              <Button
                btnValue="Clear Table"
                clicking={tableClear}
                class="btn btn-danger"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Table count="Count" capital="Capitilize" small="Small" up="up" details={array} class1={display}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
