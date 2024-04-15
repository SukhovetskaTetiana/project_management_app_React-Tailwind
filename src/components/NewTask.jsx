import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const [enteredText, setEnteredText] = useState("");

  const modal = useRef();

  const handleChange = (event) => {
    setEnteredText(event.target.value);
  };

  const handleClick = () => {
    if (enteredText.trim() === "") {
      modal.current.open();
      return;
    }
    onAdd(enteredText);
    setEnteredText("");
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-brown-800 my-4">Invalid Input</h2>
        <p className="text-brown-700 mb-4">
          Oops ... looks like you forgot to enter a text value.
        </p>
        <p className="text-brown-700 mb-4">
          Please make sure you provide a valid value of text for every input
          field.
        </p>
      </Modal>
      <div className="flex items-center gap-4 pt-4">
        <input
          type="text"
          onChange={handleChange}
          value={enteredText}
          className="w-64 px-2 py-1 rounded-sm bg-brown-200 border-b-2 border-b-brown-300 text-brown-900 focus:outline-none focus:border-brown-600"
        />
        <button
          onClick={handleClick}
          className="text-brown-700 hover:text-brown-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
