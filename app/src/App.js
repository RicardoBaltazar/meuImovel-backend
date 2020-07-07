import React, { Component } from 'react'
import Table from "./table"

class App extends Component {
  render() {

    const characteres = [

      {
        name: 'Charlie',
        job: 'Janitor'
    },
    {
      name: 'Mac',
      job: 'Bouncer'
    },
    {
      name: 'Dee',
      job: 'Aspiring Actress'
    },
    {
      name: 'Dennis',
      job: 'Bartender'
    }

    ]
     
    return (
      <div className="Container">
        <Table characterDat={characteres} />
      </div>
    )
  }
}

export default App
