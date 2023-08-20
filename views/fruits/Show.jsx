const React = require('react')

function Show({ fruit }) {

    return (
        <div>
            <h1> The fruit {fruit.name} is {fruit.color}</h1>
            <h2>
                {
                    fruit.readyToEat ? "It's ready to eat" : "Eww Yuck"
                }


            </h2>

        </div>
    )

}
module.exports = Show;