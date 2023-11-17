import React from 'react';
import Box from '../box';
import ListItem from '../list-item';
import Heading from "../heading";

import './index.css';

export default function NearbyAttractions({ nearbyAttractions }) {
  return (
    <Box className="nearby-attractions">
       <Heading border>Пам'ятки поблизу</Heading>
      <ul className="nearby-attractions__list">
        {nearbyAttractions.map(({ id, name, link }) => (
          <ListItem key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </ListItem>
        ))}
      </ul>
    </Box>
  );
}