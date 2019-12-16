
const pokemonDTO = ({id, name, types, sprites, abilities}) => {
  const type = types.map(t => t.type.name);
  const sprite = sprites.front_default;
  const ability = abilities.map(a => a.ability.name);
  return {
    id,
    name,
    ability,
    type,
    sprite
  }
}

export default pokemonDTO;
