import "./App.css";
import PropTypes from "prop-types";
import pokemon from "./pokemon.json";


const PokemonRow = ({ pokemon }) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired
};

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
          {pokemon.slice(0, 20).map((pokemon) => (
            <PokemonRow pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
