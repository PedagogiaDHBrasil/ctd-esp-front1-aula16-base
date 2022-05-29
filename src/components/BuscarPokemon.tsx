const BuscarPokemon = () => {
  // Não vamos esquecer de adicionar o hook redux para obter acesso ao objeto dispatch

  const onBuscarClick = () => {
    // Aqui devemos despachar uma action usando o dispatch do hook redux
    // O ideal seria criar uma action com seu tipo, em um arquivo actions.
  };

  return (
    <div id="buscarPokemon">
      <label>Buscar Pokémon</label>
      <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} />
      <button onClick={() => onBuscarClick()}>Buscar</button>
    </div>
  );
};

export default BuscarPokemon;
