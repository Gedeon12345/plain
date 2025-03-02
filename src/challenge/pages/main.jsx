import '../components/css/style.css'
import { useState } from 'react'

export default function () {

    const [ingredients, setIngredients] = useState([])

    const ingredientListItems = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })

    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const newIngredient = formData.get("ingredient") 
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])

    }

    return (

        <section className="main">
            <form onSubmit={addIngredient} className=" ">
                <input 
                    aria-label="Add ingredient"
                    placeholder="e.g. Djansang" 
                    type="text" 
                    name="ingredient"
                />
                <button className=" ">Add ingredient</button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </section>

    )

}