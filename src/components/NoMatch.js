import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';
const NoMatch = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <div> Error 404: No Match</div><br/>
      <Button as={Link} to="/" color="green">Home</Button>
    </div>
  )
}
export default NoMatch
