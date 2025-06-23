import { useState } from 'react'
import Search from './components/Search.jsx';
import Foodlist from './components/Foodlist.jsx';
import Nav from './components/Nav.jsx';
import Container from './components/Container.jsx';
import InnerContainer from './components/InnerContainer.jsx';
import FoodDetails from './components/FoodDetails.jsx';
import './App.css'
export default function App(){
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("662773")
  return(
    <>
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <Foodlist setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </>
  )
}

