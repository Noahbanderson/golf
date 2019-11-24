import React, { useState, useEffect } from 'react'
import { Image, Header } from 'semantic-ui-react' // Button
import { Card } from '../components/Card.js'
import { images } from '../assets/Images'

const { Back, AceClub, TwoClub, ThreeClub, FourClub, FiveClub, SixClub, SevenClub, EightClub, NineClub, TenClub, JackClub, QueenClub, KingClub, AceDi, TwoDi, ThreeDi, FourDi, FiveDi, SixDi, SevenDi, EightDi, NineDi, TenDi, JackDi, QueenDi, KingDi, AceHeart, TwoHeart, ThreeHeart, FourHeart, FiveHeart, SixHeart, SevenHeart, EightHeart, NineHeart, TenHeart, JackHeart, QueenHeart, KingHeart, AceSpade, TwoSpade, ThreeSpade, FourSpade, FiveSpade, SixSpade, SevenSpade, EightSpade, NineSpade, TenSpade, JackSpade, QueenSpade, KingSpade } = images
const oDeck = [AceClub, TwoClub, ThreeClub, FourClub, FiveClub, SixClub, SevenClub, EightClub, NineClub, TenClub, JackClub, QueenClub, KingClub, AceDi, TwoDi, ThreeDi, FourDi, FiveDi, SixDi, SevenDi, EightDi, NineDi, TenDi, JackDi, QueenDi, KingDi, AceHeart, TwoHeart, ThreeHeart, FourHeart, FiveHeart, SixHeart, SevenHeart, EightHeart, NineHeart, TenHeart, JackHeart, QueenHeart, KingHeart, AceSpade, TwoSpade, ThreeSpade, FourSpade, FiveSpade, SixSpade, SevenSpade, EightSpade, NineSpade, TenSpade, JackSpade, QueenSpade, KingSpade]
// let theArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]

export const Game = () => {
  const [deckTurned, setDeckTurned] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [pile, setPile] = useState([])
  const [deck, setDeck] = useState([AceClub, TwoClub, ThreeClub, FourClub, FiveClub, SixClub, SevenClub, EightClub, NineClub, TenClub, JackClub, QueenClub, KingClub, AceDi, TwoDi, ThreeDi, FourDi, FiveDi, SixDi, SevenDi, EightDi, NineDi, TenDi, JackDi, QueenDi, KingDi, AceHeart, TwoHeart, ThreeHeart, FourHeart, FiveHeart, SixHeart, SevenHeart, EightHeart, NineHeart, TenHeart, JackHeart, QueenHeart, KingHeart, AceSpade, TwoSpade, ThreeSpade, FourSpade, FiveSpade, SixSpade, SevenSpade, EightSpade, NineSpade, TenSpade, JackSpade, QueenSpade, KingSpade])
  const [select, setSelect] = useState(false) // used when replacing a face-up card, must chose a face down card to turn over.
  // const [turn, setTurn] = useState("Player")
  // const [started, setStarted] = useState(false)

  useEffect(() => {
    let a = oDeck.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])
    setPile([a[16]])
    setDeck(a)
  }, []) // shuffles originalDeck and sets it to deck.

  // ! a couple bugs with the pile. 
  // ! allow player to draw deck, put to pile, and turn over empty card. 

  const hitDeck = () => { if (deckTurned === false && select === false) { setDeckTurned(!deckTurned); setSelectedCard(deck[51]) } }
  const hitPile = () => { if (deckTurned === false && select === false) setSelectedCard(pile[0]) }

  return (
    <div className="arena" style={styles.arena}>
      <div className="deck" style={styles.deck}>
        <Image src={deck.length > 0 ? (deckTurned ? deck[51] : Back) : ""} style={styles.card} onClick={hitDeck} />
        <Header as="h1">Deck</Header>
      </div>
      <div className="pile" style={styles.pile}>
        <Image src={pile[0]} style={styles.card} onClick={hitPile} />
        <Header as="h1">Pile</Header>
      </div>
      <div className="field" style={styles.playingField}>
        <div className="OpField" style={styles.field}>
          <div className="FrontRow" style={styles.row}>
            {[0, 1, 2, 3].map(i => <Card key={i} select={select} setSelect={setSelect} src={deck[i]} setPile={setPile} setSelectedCard={setSelectedCard} selectedCard={selectedCard} deckTurned={deckTurned} deck={deck} setDeckTurned={setDeckTurned} pile={pile} />)}
          </div>
          <div className="BackRow" style={styles.row}>
            {[4, 5, 6, 7].map(i => <Card key={i} select={select} setSelect={setSelect} src={deck[i]} setPile={setPile} setSelectedCard={setSelectedCard} selectedCard={selectedCard} deckTurned={deckTurned} deck={deck} setDeckTurned={setDeckTurned} pile={pile} />)}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="YourField" style={styles.field}>
          <div className="FrontRow" style={styles.row}>
            {[8, 9, 10, 11].map(i => <Card key={i} select={select} setSelect={setSelect} src={deck[i]} setPile={setPile} setSelectedCard={setSelectedCard} selectedCard={selectedCard} deckTurned={deckTurned} deck={deck} setDeckTurned={setDeckTurned} pile={pile} />)}
          </div>
          <div className="BackRow" style={styles.row}>
            {[12, 13, 14, 15].map(i => <Card key={i} src={deck[i]} setPile={setPile} setSelectedCard={setSelectedCard} selectedCard={selectedCard} deckTurned={deckTurned} deck={deck} setDeckTurned={setDeckTurned} pile={pile} />)}
          </div>
        </div>
      </div>

    </div>
  )
}


const styles = {
  arena: {
    display: "flex",
    flexDirection: "row",
    height: "1050px"
  },

  deck: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blue",
    width: "300px",
    alignItems: "center",
    justifyContent: "center",
  },

  pile: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    width: "350px",
    alignItems: "center",
    justifyContent: "center",
  },

  playingField: {
    backgroundColor: "green",
    width: "1300px"
  },

  field: {
    display: "flex",
    flexDirection: "column"
  },

  row: {
    display: "flex",
    justifyContent: "center"
  },

  card: {
    height: "180px",
    margin: "20px",
    display: "inline",
  },

}














// let arrOne = [0,1,2,3]
// let arrTwo = [4,5,6,7]
// let arrThree = [8,9,10,11]
// let arrFour = [12,13,14,15]

// const starter = async () => {
//   theArr = theArr.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1])
//   arrOne = theArr.splice(0,4)
//   arrTwo = theArr.splice(0,4)
//   arrThree = theArr.splice(0,4)
//   arrFour = theArr.splice(0,4)

//   await setPile([deck[16]])
//   await setDeck(deck.splice(0, 17))
//   await setStarted(true)
//   debugger
// }
        // {/* {started ? "" : <Button color="green" size="small" onClick={starter}>Start</Button>} */}


  // function shuffle(array) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  // }
  // const [cardOne, setCardOne] = useState("")
  // const [cardTwo, setCardTwo] = useState("")
  // const [cardThree, setCardThree] = useState("")
  // const [cardFour, setCardFour] = useState("")
  // const [cardFive, setCardFive] = useState("")
  // const [cardSix, setCardSix] = useState("")
  // const [cardSeven, setCardSeven] = useState("")
  // const [cardEight, setCardEight] = useState("")

  // const [cardOneOp, setCardOneOp] = useState("")
  // const [cardTwoOp, setCardTwoOp] = useState("")
  // const [cardThreeOp, setCardThreeOp] = useState("")
  // const [cardFourOp, setCardFourOp] = useState("")
  // const [cardFiveOp, setCardFiveOp] = useState("")
  // const [cardSixOp, setCardSixOp] = useState("")
  // const [cardSevenOp, setCardSevenOp] = useState("")
  // const [cardEightOp, setCardEightOp] = useState("")

  // const [cardOneTurned, setCardOneTurned] = useState(false)
  // const [cardTwoTurned, setCardTwoTurned] = useState(false)
  // const [cardThreeTurned, setCardThreeTurned] = useState(false)
  // const [cardFourTurned, setCardFourTurned] = useState(false)
  // const [cardFiveTurned, setCardFiveTurned] = useState(false)
  // const [cardSixTurned, setCardSixTurned] = useState(false)
  // const [cardSevenTurned, setCardSevenTurned] = useState(false)
  // const [cardEightTurned, setCardEightTurned] = useState(false)

  // const [cardOneOpTurned, setCardOneOpTurned] = useState(false)
  // const [cardTwoOpTurned, setCardTwoOpTurned] = useState(false)
  // const [cardThreeOpTurned, setCardThreeOpTurned] = useState(false)
  // const [cardFourOpTurned, setCardFourOpTurned] = useState(false)
  // const [cardFiveOpTurned, setCardFiveOpTurned] = useState(false)
  // const [cardSixOpTurned, setCardSixOpTurned] = useState(false)
  // const [cardSevenOpTurned, setCardSevenOpTurned] = useState(false)
  // const [cardEightOpTurned, setCardEightOpTurned] = useState(false)
  // const [deck, setDeck] = useState([])
  // const [pile, setPile] = useState([])
  // const [aDeck, setADeck] = useState([])

  // setCardOne(deck[0])
  // setCardTwo(deck[1])
  // setCardThree(deck[2])
  // setCardFour(deck[3])
  // setCardFive(deck[4])
  // setCardSix(deck[5])
  // setCardSeven(deck[6])
  // setCardEight(deck[7])
  // setCardOneOp(deck[8])
  // setCardTwoOp(deck[9])
  // setCardThreeOp(deck[10])
  // setCardFourOp(deck[11])
  // setCardFiveOp(deck[12])
  // setCardSixOp(deck[13])
  // setCardSevenOp(deck[14])
  // setCardEightOp(deck[15])