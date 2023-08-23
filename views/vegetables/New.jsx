import React from 'react'

function New() {
  return (
    <div>
      <h1> New Vegetable Page</h1>
      <form action='/vegetables' method='POST'>
        Name: <input type="text" name='name' /> <br />
        Color: <input type="text" name='color' /> <br />
        Ready to Eat: <input type="checkbox" name='readyToEat' /> <br />
        <input type="submit" value='create vegetable' /> <br />

      </form>
    </div>
  )
}

module.exports = New