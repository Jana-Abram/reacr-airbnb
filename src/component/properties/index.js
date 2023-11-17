import React from 'react';
import "./index.css";
import Heading from "../heading";

export default function AdditionalProperties({ additionalProperties }) {
  return (
    <div className="additional-properties">
      <Heading border>Додаткові властивості</Heading>
      <div className="additional-properties__content">
        {Object.entries(additionalProperties).map(([key, value], index) => (
          <div key={key} className="additional-properties__item">
            <strong className="additional-properties__item-header">{key}:</strong>
            <p className="additional-properties__item-content">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
