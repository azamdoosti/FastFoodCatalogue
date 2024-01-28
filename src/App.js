import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";
import { useEffect, useState } from "react";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/FastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from './assets/images/notFound.jpg'

function App() {
  const [loading,setLoading]=useState(false)
  const [fastFoodItems,setFastFoodItems]=useState([])

  const fetchData = async (categoryId=null)=>{
    setLoading(true)
    const response = await axios.get(`https://react-mini-projects-api.classbon.com/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`)
    console.log(response.data)
    setLoading(false)
    setFastFoodItems(response.data)
  }
  useEffect(()=> {
    fetchData()
  }
 ,[] )

 const renderContent = ()=> {
  if (loading) {
    return <Loading theme="dark"/>
  }
  if(fastFoodItems.length===0){
    return (
      <>
      <div className="alert alert-warning text-center">
     برای این کلیدواژه هیچ آیتمی پیدا نشد
      </div>
      <img className="mx-auto mt-5 d-block fade-in-horiz src={notFound}" />
      </>
    )
  }
 return  <FastFoodList fastFoodItems ={fastFoodItems}/>
 }

 const filterItems = (categoryId) =>{
  fetchData(categoryId)
 }

 const searchItems = async(term) => {
  setLoading(true)
  const response = await axios.get(`https://react-mini-projects-api.classbon.com/FastFood/search/${term ? "?term="+term : ""}`)
  setLoading(false)
  setFastFoodItems(response.data)

}
  return (
    <div className="wrapper bg-faded-dark">  
    <Header></Header>
    <CategoryList filterItems={filterItems}>
      <SearchBar searchItems={searchItems}/>
    </CategoryList>
    <div className="container mt-4"> {renderContent()} </div>
     </div>
);
}

export default App;
