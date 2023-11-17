import React from 'react';
import "./index.css";

export default function ContactInfo({ name, image, phone, responseTime, responseRate, info }) {
  return (
    <div className="contact-info">
      <div className="contact-info__header">
        <img src={image} alt={name} className="contact-info__image" />
        <div className="contact-info__details">
          <span className="contact-info__name">{name}</span>
          <div className="contact-info__contact">
            <span className="contact-info__phone">{phone}</span>
            <span className="contact-info__dot">.</span>
            <span className="contact-info__response-time">{responseTime}</span>
            <span className="contact-info__dot">.</span>
            <span className="contact-info__response-rate">{`${responseRate}% response rate`}</span>
          </div>
        </div>
      </div>
      <div className="contact-info__info">{info}</div>
    </div>
  );
}