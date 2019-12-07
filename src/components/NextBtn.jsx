import React from 'react';

const NextBtn = ({id, Link}) => {
  return (
    <div>
      <Link
      to={`/${id}`}
      >
      Next
      </Link>
    </div>
  )
}

export default NextBtn;