import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import people from "./people.svg"
import bedroom from "./bedroom.svg"
import bed from "./bed.svg"
import bathroom from "./bathroom.svg"

export default function PropertyDetails({ guests, bedrooms, beds, baths }) {
  return (
    <Box className="property-details">
      <Heading border>Деталі властивості:</Heading>
      <ul className="property-details__list">
        <ListItem imageSrc={people}>
          <span>Гості:</span>
          <span>{guests}</span>
        </ListItem>
        <ListItem imageSrc={bedroom}>
          <span>Спальні:</span>
          <span>{bedrooms}</span>
        </ListItem>
        <ListItem imageSrc={bed}>
          <span>Ліжка:</span>
          <span>{beds}</span>
        </ListItem>
        <ListItem imageSrc={bathroom}>
          <span>Ванні кімнати:</span>
          <span>{baths}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
