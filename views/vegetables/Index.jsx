import React from 'react'

function Index({ vegetables }) {
    return (
        <div>{
            vegetables.map((vegetable, i) => {
                return (
                    <h2>  <li key={i}><a href={`/vegetables/${i}`}>{vegetable.name}</a> is {vegetable.color} <br />
                        {
                            vegetable.readyToEat ? "It is ready to eat" : "It is not ready to eat"
                        }
                    </li></h2>

                )
            })
        }
            <nav>
                <h3>
                <a href="/vegetables/new">Create a New Vegetable</a>
                </h3>
               
            </nav>


        </div>
    )
}


module.exports = Index