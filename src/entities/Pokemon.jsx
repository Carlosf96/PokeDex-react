import React from 'react';

const Pokemon = (name, types, sprites, abilities) => {
  let pokemon = {}
  pokemon.name = name;
  pokemon.types = types;
  pokemon.sprites = sprites;
  pokemon.abilities = abilities;
  return pokemon
}

export default Pokemon;
