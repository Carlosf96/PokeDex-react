import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import React from 'react'


const PokeSkelt = () => (
  <SkeletonTheme color="#fff" highlightColor="#F2F2F2">
    <section>
      <Skeleton duration={2} count={50} width={220} padding={20} height={220}/>
    </section>
  </SkeletonTheme>
);

export default PokeSkelt;