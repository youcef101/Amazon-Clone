import React, { useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import db from '../Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts, setProduct } from '../features/product/productSlice'

function Home() {
    const products = useSelector(selectProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        db.collection('products').onSnapshot(snapshot => {
            let temproduct = snapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
            })
            dispatch(setProduct(temproduct));
            console.log(temproduct)
        })

    }, [])

    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {products &&
                    products.map(product =>
                        <>
                            <Product
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                rating={product.rating}

                            />

                        </>
                    )}

            </Content>



        </Container>
    )
}

export default Home
const Container = styled.div`
color:#000;


`
const Banner = styled.div`
background-image:url('https://imgur.com/SYHeuYM.jpg');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
min-height:450px;
mask-image:linear-gradient(to bottom,rgba(0,0,0,0.85),rgba(0,0,0,0));


`
const Content = styled.div`
min-width:800px;
height:450px;
background:white;
display:flex;

justify-content:center;
margin-top:-230px;
margin-left:25px;
margin-right:25px;
margin-bottom:25px;
z-index:1;


`

