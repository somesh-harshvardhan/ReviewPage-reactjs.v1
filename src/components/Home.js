import React,{useRef} from 'react'
import styled from 'styled-components'
const Form=styled.form`
    font-size:20px;
    width:805px;
    background-color:#f1faee;
    border-radius:10px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    color: #141414;
    @media (max-width:768px){
        margin-top:10px;
        width:385px;
        font-size:15px;
        margin-left:5px;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
    }
    `

const Div=styled.div`
display:inline-block;
margin:10px;
`
const Select=styled.select({
    fontSize:"17px",
    padding:"5px",
    outline:"none",
    backgroundColor:"white",
    cursor:"pointer"
})
const Button=styled.button`
background-color:#457b9d;
padding:8px 15px;
font-size:25px;
outline:none;
border:none;
cursor:pointer;
color:#fff;
border-radius:5px;
:hover{
    filter:brightness(110%);
}
:active{
    transform:scale(0.9);
}
@media (max-width:768px){
    font-size:19px;
    padding:4px 8px;}
`
    
   


function Home({assignValue}) {
        const vwrRef=useRef();
        const prdctRef=useRef();
    
  
    function fetchResult(e){
        e.preventDefault()
        if(vwrRef.current && prdctRef.current){
            const view_id=vwrRef.current.value
            const product_id=prdctRef.current.value
            assignValue(product_id,view_id)
        }
        
      
    }
    return (
  <>
      <Form onSubmit={fetchResult}>
          <Div className="wrapper">
          <label htmlFor="">Select Product ID : </label>
          <Select ref={prdctRef} name="product" id="product" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>

          </Select>
          </Div>
          <Div className="wrapper">
           <label htmlFor="">Select Product Viewer ID : </label>
          <Select ref={vwrRef} name="viewer" id="viewer">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </Select>
          </Div>
             <Div className="wrapper">
            
              <Button type="submit"> Submit</Button>
                
          
        </Div>  
       
       
      </Form>
  </>
    )
}

export default Home
