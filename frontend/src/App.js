import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contact, setContact] = useState({
    name: "",
    descr: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, descr, number } = contact;
    const newContact = {
      name,
      descr,
      number,
    };

    await axios.post("/newContact", newContact);
    toast.success("Contact student");
    setContact({
      name: "",
      descr: "",
      number: "",
    });
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <form className="w-50 m-auto  ">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter your name
          </label>
          <input
            onChange={handleChange}
            value={contact.name}
            name="name"
            type="text"
            className="form-control"
            id="name"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="descr" className="form-label">
            Description
          </label>
          <input
            onChange={handleChange}
            value={contact.descr}
            name="descr"
            type="text"
            className="form-control"
            id="descr"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Your number
          </label>
          <input
            onChange={handleChange}
            value={contact.number}
            name="number"
            type="number"
            className="form-control"
            id="number"
          />
        </div>
        <button onClick={submitHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
