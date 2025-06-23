import Fooditem from "./Fooditem.jsx";

export default function Foodlist({setFoodId, foodData}){
    return(
        <div>
            {
                foodData.map((food) => <Fooditem setFoodId={setFoodId} key={food.id} food={food}/>)
            }
        </div>
    )
}