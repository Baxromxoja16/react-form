import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contacts from "./Components/Contacts";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    descr: "",
    number: "",
  });

  const [contacts, setContacts] = useState([
    {
      name: "",
      descr: "",
      number: "",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateContact, setUpdateContact] = useState({
    name: "",
    number: "",
    descr: "",
    id: "",
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

    setContact({
      name: "",
      descr: "",
      number: "",
      _id: "",
    });
    toast.success("Contact student");
    const { data } = await axios.post("/newContact", newContact);
    setContacts(data.data);
  };

  const updateHandler = async (id) => {
    setIsUpdate(true);

    console.log('update')
    // setUpdateContact((prev) => {
    //   return {
    //     ...prev,
    //     id: id,
    //   };
    // });
  };

  useEffect(() => {
    const find = async () => {
      setLoading(true);
      const { data } = await axios.get("http://localhost:5000/contacts");
      setLoading(false);
      setContacts(data.data);
    };

    find();
  }, []);

  const deleteContact = async (id) => {
    const { data } = await axios.delete("http://localhost:5000/delete/" + id);
    setContacts(data.data);
    toast.success("Delete contact");
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
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
            <div className="mb-3">
              <label htmlFor="descr" className="form-label">
                Description
              </label>
              <textarea
                onChange={handleChange}
                value={contact.descr}
                className="form-control"
                name="descr"
                id="descr"
              ></textarea>
            </div>
            <button onClick={submitHandler} className="btn btn-primary">
              Submit
            </button>
          </form>
          <Contacts
            updateHandler={updateHandler}
            deleteContact={deleteContact}
            contacts={contacts}
          />
        </>
      )}
    </>
  );
}

export default App;
