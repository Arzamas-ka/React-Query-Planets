import React from 'react';

const Card = ({ name, url, ind }) => {
  return (
    <li style={{ padding: '3px', 'listStyle': 'none' }}>
      {ind + 1} -
      <a
        href={url}
        style={{ 'textDecoration': 'none' }}
      >
        {name}
      </a>
    </li>
  )
};

export default Card;