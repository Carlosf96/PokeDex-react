import React from "react";

const formatTypes = s => [...s.reduce((p, c) => p + "/" + c.type.name, "")].slice(1).join("");
const RenderService = (() => {
  const renderTypes = types => {
    return types ? <p>{formatTypes(types)}</p> : <p>No types</p>;
  };
  const renderAbilities = abilities => {
    return abilities ? (
      abilities.map(e =>
        e.ability ? <p>{e.ability.name}</p> : <p>No Ability name</p>
      )
    ) : (
      <p>No abilities</p>
    );
  };
  const renderSprites = sprites => {
    return sprites ? (
      <img src={sprites["front_default"]} alt="pokemon_sprite" />
    ) : (
      <p>No Image</p>
    );
  };
  return {
    renderTypes,
    renderAbilities,
    renderSprites
  };
})();

export default RenderService;