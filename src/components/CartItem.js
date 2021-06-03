import React from 'react'
import styled from 'styled-components'
import db from '../Firebase';


function CartItem({ imageUrl, name, price, quantity, item, id }) {
    const changeQty = (newQty) => {
        db.collection('cartItem').doc(id).update({
            quantity: parseInt(newQty)
        })
    }
    const DeleteItem = () => {
        db.collection('cartItem').doc(id).delete();
    }
    //console.log(item.count)
    let options = [];
    for (let i = 1; i < Math.max(quantity + 1, 20); i++) {
        options.push(<option value={i}>Qte:{i}</option>)
    }
    return (
        <Container>
            <CartItems>
                <ProductImg src={imageUrl} />
                <ProductGroup>
                    <ProductTitle>
                        <a href="#">{name}</a>
                    </ProductTitle>
                    <Qte>
                        <QteCompteur>
                            <select onChange={(e) => { changeQty(e.target.value) }}
                                value={quantity}>
                                {options}
                            </select>

                        </QteCompteur>
                        <h3>|</h3>
                        <DeleteBtn onClick={DeleteItem}>Delete</DeleteBtn>
                    </Qte>
                </ProductGroup>
                <ProductPrice>
                    ${price}
                </ProductPrice>

            </CartItems>
            <hr />
        </Container>
    )
}

export default CartItem
const Container = styled.div`
margin:10px 0;
hr{
    width:95%;
}

`
const CartItems = styled.div`
display:flex;
//border-bottom:1px solid black;
`
const ProductImg = styled.img`
height:180px;
width:180px;
flex-shrink:0;
flex-grow:0;
object-fit:contain;
margin-right:30px;
margin-bottom:15px;
cursor:pointer;
`
const ProductTitle = styled.div`
display:flex;
cursor:pointer;

a{
    text-decoration:none;
    font-weight:800;
    color:#007185;
    cursor:pointer;
    //width:300px;
}

`
const ProductPrice = styled.div`
font-weight:800;
margin-right:20px;
`
const QteCompteur = styled.div`
display:flex;
margin-right:20px;
select{
    width:100px;
    border-radius:20px;
    background:rgba(0,0,0,0.3);
    outline:none;

cursor:pointer;

}

`
const ProductGroup = styled.div`
flex:1;
display:flex;
flex-direction:column;

`
const Qte = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
h3{
    margin-right: 15px;
    //margin-left:10px;
    color:#d9d9d9;
}

`
const DeleteBtn = styled.a`
cursor:pointer;
color:#007185;
font-weight:700;
font-size:13px;
`
