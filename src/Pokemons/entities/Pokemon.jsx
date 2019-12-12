import React from 'react';

  const PokemonFactory = (name, types, sprites, abilities) => {
    const Pokemon = () => {
      let pokemon = {}
      pokemon.name = name;
      pokemon.types = types;
      pokemon.sprites = sprites;
      pokemon.abilities = abilities;
      return pokemon
    }
    return Pokemon;
  }