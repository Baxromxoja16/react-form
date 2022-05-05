export default function DeleteBtn({ deleteContact, id }) {
  return (
    <button
      onClick={() => deleteContact(id)}
      className="btn btn-outline-danger m-1"
    >
      Delete
    </button>
  );
}
