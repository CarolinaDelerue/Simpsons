import React from "react";
import "../QuoteCard.css";

export default function QuoteCard({ image, character, quote }) {
  return (
    <div className="QuoteCard">
      <img src={image} alt={character} />
      <div>
        <div>{quote}</div>
        <cite>{character}</cite>
      </div>
    </div>
  );
}
