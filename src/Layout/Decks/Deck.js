import React from "react";
import DeckCard from "./DeckCard";
import CardList from "../Cards/CardList";

export default function Deck({ deck, cards, deckUpdated }) {
  return (
    <>
      <DeckCard deck={deck} deckView={true} />
      <CardList deck={deck} cards={cards} deckUpdated={deckUpdated} />
    </>
  );
}