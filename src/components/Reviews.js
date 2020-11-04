import React, { useState } from 'react'
import ReviewViews from './ReviewViews'
import styled from 'styled-components'
import Pagination from './Pagination'

const Wrapper=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
margin:10px
`
const Button=styled.button`
padding:5px 5px;
font-size:1rem;
border:none;
outline:none;
cursor:pointer;
background-color:#fff;
:active{
    transform:scale(.95)
}
`
function Reviews({data}) {
    const [status,setStatus]=useState(0)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    
    let   reviews=data.data.reviews

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts
    if(data!==undefined){
      currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);

    }
   
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

    
    const sortArrayByRating=()=>{
        const order= currentPosts.map(review=><ReviewViews review={review}/>)
        const compare=(a,b)=>{
        if(a.props.review.ratings.Overall>b.props.review.ratings.Overall){
                return 1
            }
            if(a.props.review.ratings.Overall<b.props.review.ratings.Overall){
                return -1
            }}
        const sort=order.sort((a,b)=>compare(a,b)).reverse()
        return sort
        
        }
    const sortArrayByConnection=()=>{
        const order= currentPosts.map(review=><ReviewViews review={review}/>)
        const compare=(a,b)=>{
        if(a.props.review.reviewer.connection_level>b.props.review.reviewer.connection_level){
                return 1
            }
            if(a.props.review.reviewer.connection_level<b.props.review.reviewer.connection_level){
                return -1
            }}
        const sort=order.sort((a,b)=>compare(a,b)).reverse()
        return sort
        
    }
    const sortArrayByUsefullness=()=>{
        const order= currentPosts.map(review=><ReviewViews review={review}/>)
        const compare=(a,b)=>{
        if(a.props.review.usefulness>b.props.review.usefulness){
                return 1
            }
            if(a.props.review.usefulness<b.props.review.usefulness){
                return -1
            }}
        const sort=order.sort((a,b)=>compare(a,b)).reverse()
        return sort
        
        }
    return (
        <div>
           <Wrapper>
           <div><Button onClick={()=>setStatus(0)}>Sort By Rating</Button></div>
           <div><Button onClick={()=>setStatus(1)} >Sort by connection</Button></div>
           <div><Button onClick={()=>setStatus(2)} >Sort by usefullness</Button></div>

           </Wrapper>
         
          {
           status===0 ? sortArrayByRating():""      
          }
          {
           status===1 ? sortArrayByConnection():""      
          }
          {
           status===2 ? sortArrayByUsefullness():""      
          }
         
           
          <Pagination totalReviews={reviews} postsPerPage={postsPerPage} paginate={paginate}/>
          
        </div>
    )
}

export default Reviews
