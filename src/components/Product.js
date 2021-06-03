import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import db from '../Firebase'


function Product({ name, price, imageUrl, rating, id }) {
    function AddToCart() {
        const cartItem = db.collection('cartItem').doc(id);
        cartItem.get()
            .then(doc => {
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                } else {
                    db.collection('cartItem').doc(id).set({
                        name: name,
                        price: price,
                        imageUrl: imageUrl,
                        quantity: 1
                    })
                }
            })
        console.log(cartItem)
    }

    return (
        <Container >


            <Description>
                <Title>
                    {name}
                </Title>
                <Price>
                    ${price}
                </Price>
                <Rating>
                    {
                        Array(rating)
                            .fill()
                            .map(rating => <p>⭐</p>)
                    }

                </Rating>
            </Description>

            <Wrap>
                <ProductImg src={imageUrl} />

                <AddToCardBtn onClick={AddToCart}>
                    Add To Card
                </AddToCardBtn>


            </Wrap>



        </Container>
    )
}

export default Product
const Container = styled.div`
margin:10px 10px;
background:white;
width:400px;
z-index:2;
display:flex;
flex-direction:column;

flex:1;

`
const Title = styled.span`
width:400px;
`
const Price = styled.span`
font-weight:500;
`
const Rating = styled.div`
display:flex;
`
const ProductImg = styled.img`
object-fit:contain;
height:250px;
margin:3px 0;
cursor:pointer;
width:298px;

`
const AddToCardBtn = styled.button`
width:120px;
background:#e69900;
padding:5px 10px;
border-radius:4px;
border:1px solid black;
cursor:pointer;
&:hover{
    background:#ffb84d;
}

`
const Wrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`
const Description = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
padding:0 10px;

`
