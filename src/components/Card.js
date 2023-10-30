"use client"
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;

