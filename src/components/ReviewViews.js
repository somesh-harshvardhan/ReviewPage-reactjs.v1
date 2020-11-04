import React, { useState } from 'react'
import styled from 'styled-components'
import ReactStars from 'react-stars'
const Div=styled.div`
min-height:150px;
width:805px;
padding:10px 15px;
box-shadow:0px 4px 5px rgba(0,0,0,.7);
background-color:#f1faee;
margin:10px;
border-radius:10px;
line-height:30px;
`
const Button=styled.button`
outline:none;
font-size:1rem;
padding:5px 5px;
cursor:pointer;
background-color:#457b9d;
border-radius:5px;
:hover{
    filter:brightness(110%);
}
`
function ReviewViews({review}) {
    const [click,setClick]=useState(true)
    return (
        <Div>
         <h1>{review.friend ? `${review.reviewer.name}`:"Anonymous"}</h1>
         <h3>{review.title}</h3>
         <p style={{display:"flex",alignItems:"center"}}>
         <span style={{display:"inline-block",marginRight:"10px"}}>
         <ReactStars count="5" value={review.ratings.Overall}/></span> {review.ratings.Overall}</p>
         <p>{review.comment}</p>
         <p>
         <span style={{display:"none"}}>{review.reviewer.connection_level}</span>
         <span style={{display:"none"}}>{review.usefulness}</span>
         <span style={{display: click ? "none" : "block"}}>Delivery time:{review.ratings.delivery_time}</span>
         <span style={{display: click ? "none" : "block"}}>Discount and offers:{review.ratings.discounts_and_offers}</span>
         <span style={{display: click ? "none" : "block"}}>Packaging:{review.ratings.packaging}</span>
         <span style={{display: click ? "none" : "block"}}>Price:{review.ratings.price}</span>
         <Button onClick={()=>{setClick(!click)}}>{click ? "Show More":"Show Less"}</Button>
         </p>
         <p><em>{review.usefulness} people found this review usefull.</em></p>
        </Div>
    )
}

export default ReviewViews
