export default function Contacts({contacts}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Number</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td> {item.number} </td>
            <td> {item.descr} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
