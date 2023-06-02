import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const PokemonRow = ({ pokemon, onSelect }) => (
  <tr key={pokemon.id}>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select!</button>
    </td>
  </tr>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.shape({
      english: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

const PokemonInfo = ({ name, base }) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {
        Object.keys(base).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))
      }
    </table>
  </div>
)

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string.isRequired,
  }).isRequired,
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
};

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: 0 auto,
  width: 640,
  padding-top: 1rem,
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 0.2rem;
`;

function App() {
  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    // fetch data from localhost:3000/starting-react/pokemon.json
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <Input value={filter} onChange={(evt) => setFilter(evt.target.value)}></Input>
          <table width="100%">
            <thead className="header">
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemon
                .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
                .slice(0, 20).map((pokemon) => (
                  <PokemonRow pokemon={pokemon} key={pokemon.key} onSelect={(pokemon) => setSelectedItem(pokemon)} />
                ))}
            </tbody>
          </table>
        </div>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
