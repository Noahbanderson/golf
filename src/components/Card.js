import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'
import Back from '../assets/Cards/Back.png'

export const Card = ({ src, setPile, setSelectedCard, selectedCard, deckTurned, deck, setDeckTurned, pile, select, setSelect }) => {
  const [value, setValue] = useState(null)
  const [turned, setTurned] = useState(false)

  const handleClick = () => {

    if (turned === true && selectedCard !== "" && select === false) {
      // allow player to replace card.
      let tmp = pile; tmp.shift();
      setPile([value, ...tmp]);
      setValue(selectedCard)
      setSelectedCard("")
      //  mandate player to turn over a card that has not been turned over yet
      setSelect(!select)
    } else if (turned === false && select === true) {
      setTurned(true)
      setSelect(false)
      setValue(src)
    } else if (turned === false && selectedCard !== "") {
      setTurned(!turned); // turn over the card
      let tmp = pile; tmp.shift();
      setPile([src, ...tmp]); // place the current card on top the pile
      setValue(selectedCard); // put new card in old card's place
      setSelectedCard(""); // clean up
      if (deckTurned === true) { deck.unshift(deck[51]); deck.pop(); setDeckTurned(false) }; // clean up deck

    }
  }

  return <Image src={turned ? value : Back} onClick={handleClick} style={style} />
}

const style = {
  height: "180px",
  margin: "20px",
  display: "inline"
}

