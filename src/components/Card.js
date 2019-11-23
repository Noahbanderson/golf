import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'

import Back from '../assets/Cards/Back.png'

export const Card = ({ src, setPile, setSelectedCard, selectedCard, deckTurned, deck, setDeckTurned, pile }) => {
  const [value, setValue] = useState("")
  const [turned, setTurned] = useState(false)

  const handleClick = () => {
    // console.log(pile)
    // console.log(deck)
    // console.log(selectedCard)
    // debugger
    
    if (turned === true) {
      if (selectedCard !== "") {
        setTurned(!turned);
        setPile([value, ...pile]);
        setValue(selectedCard);
        setSelectedCard("");

        if (deckTurned === true) {
          deck.shift();
          setDeckTurned(!deckTurned)
        }
      }

    } else if (turned === false) {

    }
  }

  return <Image src={turned ? src : Back} onClick={handleClick} style={style} />
}

const style = {
  height: "180px",
  margin: "20px",
  display: "inline"
}

