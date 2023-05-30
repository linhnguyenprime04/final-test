import React from "react";
import { useState } from "react";



  

export default function Form(props) {
    
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
      }

    
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask("Edit new task!");
        setName("");
      }
    
    return (
        <form onSubmit={handleSubmit}>
            {/* <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onchange={handleChange}
            /> */}
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );

}
