import React from "react";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import pool from "./pool.svg"; 
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import pets from "./pets.svg";
import shuttle from "./shuttle.svg";
import concierge from "./concierge.svg";
import service from "./service.svg";
import child from "./child.svg";

const amenityIcons = {
  hasPool: pool,
  hasGym: gym,
  hasFreeBreakfast: breakfast,
  hasFreeWiFi: wifi,
  hasParking: parking,
  hasPetsAllowed: pets,
  hasAirportShuttle: shuttle,
  hasConciergeService: concierge,
  hasRoomService: service,
  hasChildFriendly: child,
};

const amenityLabels = {
  hasPool: "Басейн",
  hasGym: "Спортивний зал",
  hasFreeBreakfast: "Безкоштовний сніданок",
  hasFreeWiFi: "Безкоштовний Wi-Fi",
  hasParking: "Безкоштовний вуличний паркінг",
  hasPetsAllowed: "Дозволено розміщення з домашніми тваринами",
  hasAirportShuttle: "Трансфер до/з аеропорту",
  hasConciergeService: "Консьєрж-сервіс",
  hasRoomService: "Обслуговування номерів",
  hasChildFriendly: "Підходить для дітей",
};

export default function AmenitiesTable({ amenities }) {
  return (
    <Box className="amenities">
      <Heading border>Зручності:</Heading>
      <ul className="amenities__list">
        {Object.entries(amenities).map(([key, value]) => (
          <ListItem key={key} imageSrc={amenityIcons[key]} className={`amenities__item ${value ? "amenities__item--available" : "amenities__item--unavailable"}`}>
            <span>{value ? amenityLabels[key] : null}</span>
          </ListItem>
        ))}
      </ul>
    </Box>
  );
}
