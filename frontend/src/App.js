import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios'
import { BsCaretDownFill } from "react-icons/bs";

import Header from './component/header/Header'
import CreateNote from './component/CreateNote/CreateNote'
import SavedNote from './component/savedNote/SavedNote';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [alert, setAlert] = useState(-1);
  const [alertMssg, setAlertMssg] = useState("");
  const [alertClass, setAlertClass] = useState("");
  
  function addItem(note) {
    // setTodoList([...todoList, note]);
      axios
      .post("http://localhost:5000/add", note)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  

  useEffect(() => {
      axios
        .get("http://localhost:5000/", { crossdomain: true })
        .then((response) => {
          setTodoList(response.data)
        });
  })

  function handleAlertValue(){
    return (
      setInterval(() => {
        setAlert(-1);
      },3000)
    )
  }

  useEffect(()=>{
    if (alert === 0)
    {
      setAlertMssg('Enter Data');
      setAlertClass('showAlert alertDanger')
      }
    else if (alert === 1)
    {
      setAlertMssg("Saved Successfully");
      setAlertClass('showAlert alertSuccess');
      }
    let clean = handleAlertValue();
    return () => clearInterval(clean);
  },[alert])

  return (
    <div className="App">
      <Header />
      {alert === -1 ? " ": 
        <p className={`alertMssg ${alertClass}`}>
          {alertMssg} <BsCaretDownFill className="downArrow" />
        </p>
      }

      <CreateNote addItem={addItem} setAlert={setAlert} />
      {todoList.length === 0 ? "" : <SavedNote todoList={todoList} />}
    </div>
  );
}

export default App;
