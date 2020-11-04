import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin:10px
`
const Button=styled.button`
padding:5px 5px;
font-size:1rem;
border:none;
margin:2px;
outline:none;
cursor:pointer;
background-color:#fff;
:active{
    transform:scale(.95)
}
`

function Pagination({totalReviews,postsPerPage,paginate}) {
    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalReviews.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
        <Wrapper>
            {
                pageNumbers.map(number=>{
                    return <Button onClick={()=>{paginate(number)}}>{number}</Button>
                })
            }
        </Wrapper>
    )
}

export default Pagination
