import styles from './foodItem.module.css'

export default function Fooditem({setFoodId,food}){
    return(
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image}/>
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={()=>setFoodId(food.id)} className={styles.itemButton}>Get Recipe</button>
            </div>
            
        </div>
    )
}