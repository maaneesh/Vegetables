import React from 'react'


function Index({ fruits }) {
    return (
        <div>{
            fruits.map((fruit, i) => {
                return (
                    <div>

                        <h1>
                            <li key={i}><a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color} </li>
                        </h1>

                        <h2>
                            {
                                fruit.readyToEat ? "It is ready to eat" : "It is not ready to eat"
                            }
                        </h2>

                    </div>
                )
            })
        }
            <nav>
                <h3>
                <a href="/fruits/new">Create a New Fruit</a>
                </h3>
                
            </nav>


        </div>
    )
}

module.exports = Index