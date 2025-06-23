import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ce79ef07d56f466a80e9648d5aa4b8c2";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong>⌚{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? " 🥕Vegetarian" : " 🍗Non-vegetarian"}
          </strong>
        </span>
        <span>
          <strong> Serves {food.servings}</strong>
        </span>
        <span>
          <strong>{food.vegan ? "Vegan" : ""}</strong>
        </span>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading}/>
      <div>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
