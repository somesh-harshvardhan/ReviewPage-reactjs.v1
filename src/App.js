import React, { useEffect, useState } from 'react'
import './App.css';
import axios from './baseUrl'
import Home from './components/Home'
import Reviews from './components/Reviews'
export const dataContext=React.createContext('');
function App() {
   const [product_id,setProduct_id]=useState('')
   const [viewer_id,setViewer_id]=useState('')
   const [data,setData]=useState();

   
   function assignValue(prdct_id,vwr_id){
    let newProduct_id=prdct_id;
    let newViewer_id=vwr_id;
    setProduct_id(()=>(newProduct_id));
    setViewer_id(()=>(newViewer_id))
   }
   async function fetchApi(){
     let prodcutid=product_id;
     let viewerid=viewer_id;
    const response=await axios.get(`/reviews/${prodcutid}/${viewerid}`)
    const daTa= await response;
    setData(daTa)  
 } 
 console.log(data)
 useEffect(()=>{
  fetchApi();
 },[product_id,viewer_id])
 

  return (
  

    <div className="App">
     <Home assignValue={assignValue}/>
     {
       data ?  <Reviews data={data}/> :''
     }
    
     </div>
   
     
  
  );
}

export default App;
