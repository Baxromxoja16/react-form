export default function DeleteBtn({ id, updateHandler }) {
  return (
    <button onClick={() => updateHandler(id)} className="btn btn-success">
      Update
    </button>
  );
}
