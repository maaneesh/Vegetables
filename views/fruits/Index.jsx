import React from 'react'

function Index({ fruits }) {
    return (
        <div>{
            fruits.map((fruit, i) => {
                return (
                    <div>

                        <h1>
                            <li key={i}><a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color} </li>
                        </h1>

                        <h2>
                            {
                                fruit.readyToEat ? "It is ready to eat" : "It is not ready to eat"
                            }
                        </h2>

                    </div>
                )
            })
        }</div>
    )
}

module.exports = Index