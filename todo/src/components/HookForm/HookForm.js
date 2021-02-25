import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const initialState = {
  title: "",
  author: "",
  priority: "Low",
  agree: false,
};

const HookForm = ({addToList}) => {
  const [{ title, author, agree, priority }, setForm] = useState({
    ...initialState,
  });

  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [priority, setPriority] = useState("Low");
  // const [agree, setAgree] = useState(false);

  const inputHeandler = ({ target }) => {
    const { value, name, type, checked } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(!agree){
      return
    }
    const singleTask = {
      title,
      author,
      priority,
      status: false,
      id: uuidv4(),
    };
    addToList(singleTask);
    setForm({...initialState});
  }

  return (
    <form onSubmit={handleSubmit} className="NewTodoForm" autoComplete="off">
      <input
        onChange={inputHeandler}
        className="NewTodoForm__name"
        type="text"
        name="title"
        placeholder="New Todo"
        value={title}
      />
      <input
        onChange={inputHeandler}
        className="NewTodoForm__name"
        type="text"
        name="author"
        placeholder="Author"
        value={author}
      />
      <select value={priority} name="priority" className="NewTodoForm__select">
        <option value="" disabled hidden>
          Priority
        </option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <label htmlFor="agree" className="confirm">
        <input onChange={inputHeandler} type="checkbox" id="agree" name="agree" checked={agree} />
        Agree with our policy
      </label>

      <button
        // disabled={!agree}
        className={
          agree ? "NewTodoForm__submit" : "NewTodoForm__submit-inactive"
        }
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default HookForm;
