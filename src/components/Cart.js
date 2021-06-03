import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCartItem } from '../features/product/productSlice'
import CartItem from './CartItem'
import NumberFormat from 'react-number-format';

function Cart() {
    const cartItem = useSelector(selectCartItem)
    let totalQty = 0
    cartItem.forEach(item => {
        totalQty += item.quantity
    })
    //calculate total with forEach()
    let total = 0
    cartItem.forEach(item => {
        total += item.quantity * item.price
    })
    //calculate total with map()
    // for(let i =0;i<count;i++){
    //     cartItem.map(item=>{
    //         total+=item.quantity * item.price /2
    //     })
    // }

    return (
        <Container>
            <ShoppingCart>

                {totalQty === 0 ? <>
                    <h1>Your Amazon Cart is empty.</h1>
                    <p>Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.</p>
                </> : <> <h1>Shopping Cart</h1><hr /></>}
                {cartItem &&
                    cartItem.map(item =>
                        <>
                            <CartItem
                                id={item.id}
                                item={item}
                                imageUrl={item.imageUrl}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        </>
                    )}



            </ShoppingCart>
            <SubTotal>
                SubTotal({totalQty} items):
                <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                <CheckoutBtn>
                    Proceed Checkout

                </CheckoutBtn>
            </SubTotal>
        </Container>
    )
}

export default Cart
const Container = styled.div`
display:flex;

`
const ShoppingCart = styled.div`
color:#000;
width:80%;
margin:20px 10px;
background:white;
h1{
    padding-left:20px;
    padding-top:20px;
    padding-bottom:10px;
    
}
p{padding:0 20px;
    width:80%;
}

`
const SubTotal = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:200px;
height:100px;
background:white;
right:0;
margin:20px 10px;
color:#000;
font-weight:500;

`
const CheckoutBtn = styled.div`
background:#e69900;
width:150px;
border-radius:4px;
border:1px solid black;
cursor:pointer;
text-align:center;
`
