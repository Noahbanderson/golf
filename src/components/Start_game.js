import React from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
const Start_game = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Link to="/game">
        <Button color="blue" size="big">Play a game of Golf with me?</Button>
      </Link>
    </div>
  )
}

export default Start_game

