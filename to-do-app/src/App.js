import React, {useState} from "react";
import './App.css';
import Button from "react-bootstrap/Button";
import {Alert, Table} from "react-bootstrap";


function App() {
    const [toDoList,setToDoList] = useState([]);
    const [inputText, setInputText] = useState("");
    const [flag, setFlag] = useState(false);

    const agregarTask = () => {
        if (inputText !== ""){
            let arrayList = toDoList;
            arrayList.push(inputText);
            setToDoList(arrayList);
            setInputText("");
        }
    }

    const alerta = () => {
        if(flag){
            return (
                <Alert variant={'success'} className={"alerta"}>Tarea borrada correctamente</Alert>
            )
        } else {
            return null;
        }
    }

    const removeTask = (index) => {
        let arraylist = toDoList;
        arraylist.splice(index,1);
        setToDoList(arraylist);
        setFlag(true);
        setInputText("");
    }

    const drawList = () => {
        const arrayList = toDoList;
        return (
            arrayList.map((element, index) => {
                return(
                    <tr key={index} className={"rowData"} onClick={() => removeTask(index)}>
                        <td>
                            {element}
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <div>
            {alerta()}
            <div className="contenedor">
            <span className={"title"}>Lista de pendientes</span>
            <div>
                <input type={"text"} placeholder={"Escriba una tarea"} className={"inputText"} onChange={e => {
                    setInputText(e.target.value);
                    setFlag(false);
                }} value={inputText}/>
                <Button variant="primary" onClick={agregarTask}>Agregar</Button>
            </div>
            <div className={"list"}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {drawList()}
                    </tbody>
                </Table>
            </div>
            </div>
        </div>
    );
}

export default App;
