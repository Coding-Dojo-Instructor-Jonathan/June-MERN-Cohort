import styles from "../assets/css/NewCoffeeDrink.module.css"
import { useState } from "react"

const NewCoffeeDrink = () => {
    const [drinkName, setDrinkName] = useState("")
    const [drinkNameError, setDrinkNameError] = useState("")
    const [drinkDesc, setDrinkDesc] = useState("")
    const [drinkDescError, setDrinkDescError] = useState("")
    const [allDrinks, setAllDrinks] = useState([{"drinkName": "Drip coffee", "drinkDesc": "Our freshly brewed drip coffee of the day."}])

    const handleName = (newValue) => {
        setDrinkName(newValue)

        if(newValue.length < 3) {
            setDrinkNameError("Drink name must be at least 3 characters long.")
        } else if (newValue === "aaa") {
            setDrinkNameError("Drink name must be better than simply 'aaa'.")
        } else {
            setDrinkNameError("")
        }
    }

    const handleDesc = (newValue) => {
        setDrinkDesc(newValue)

        if(newValue.length < 10) {
            setDrinkDescError("Drink description must be at least 10 characters long.")
        } else {
            setDrinkDescError("")
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(drinkNameError || drinkDescError) {
            console.log(drinkNameError)
            console.log(drinkDescError)
            return null;
        }

        setAllDrinks((prevAllDrinkList) => [...prevAllDrinkList, {drinkName, drinkDesc}])

        setDrinkName("")
        setDrinkDesc("")
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.inputWrapper}>
                    {
                        drinkNameError ?
                        <p>{drinkNameError}</p> :
                        ''
                    }
                    <label htmlFor="drinkName">Drink Name:</label>
                    <input type="text" name="drinkName" value={drinkName} onChange={(e) => handleName(e.target.value)} />
                </div>
                <div className={styles.inputWrapper}>
                    {
                        drinkDescError ?
                        <p>{drinkDescError}</p> :
                        ''
                    }
                    <label htmlFor="drinkDesc">Describe this drink in a sentence or two:</label>
                    <textarea name="drinkDesc" value={drinkDesc} onChange={(e) => handleDesc(e.target.value)}></textarea>
                </div>

                <button type="submit">Add New Drink</button>
            </form>
            <h2>Results:</h2>
            {
                allDrinks.map((drink, ind) => {
                    return (
                        <section key={ind}>
                            <p>{drink.drinkName}</p>
                            <p>{drink.drinkDesc}</p>
                        </section>
                    )
                })
            }
        </>
    )
}

export default NewCoffeeDrink