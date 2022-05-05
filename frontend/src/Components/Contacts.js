import DeleteBtn from "./Buttons/DeleteBtn";
import UpdateBtn from "./Buttons/UpdateBtn";

export default function Contacts({ contacts, deleteContact,updateHandler }) {
  return (
    <table className="container table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Number</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td> {item.number} </td>
            <td> {item.descr} </td>
            <td>
              <DeleteBtn id={item._id} deleteContact={deleteContact} />
              <UpdateBtn id={item._id} updateHandler={updateHandler} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
