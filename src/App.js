import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";
import { useEffect, useState } from "react";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/FastFoodList";

function App() {
  const [loading,setLoading]=useState(false)
  const [fastFoodItems,setFastFoodItems]=useState([])

  const fetchData = async (categoryId=null)=>{
    setLoading(true)
    const response = await axios.get(`https://react-mini-projects-api.classbon.com/FastFood/list/${categoryId ? "?categoryId="+categoryId : ""}`)
    console.log(response.data)
    setLoading(false)
    setFastFoodItems(response.Data)
  }
  useEffect(()=> {
    fetchData()
  }
 ,[] )

 const renderContent = ()=> {
  if (loading) {
    return <Loading theme="dark"/>
  }
 return  <FastFoodList fastFoodItems ={fastFoodItems}/>
 }

  return (
    <div className="wrapper bg-faded-dark">  
    <Header></Header>
    <CategoryList></CategoryList>
    <div className="container mt-4"> {renderContent()} </div>
     </div>
);
}

export default App;
