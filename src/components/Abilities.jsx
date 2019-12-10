import React from 'react';

const Abilities = ({abilities}) => {
  return abilities ? (
    abilities.map(e =>
      e.ability ? <p>{e.ability.name}</p> : <p>No Ability name</p>
    )
  ) : (
    <p>No abilities</p>
  );
};

export default Abilities;