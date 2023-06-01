import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        width: 800,
        paddingTop: "1rem",
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width={"100%"}>
        <thead className="header">
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pikachu</td>
            <td>Electric</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
