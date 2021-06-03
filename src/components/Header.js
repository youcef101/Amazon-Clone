import React from 'react'
import styled from 'styled-components'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItem } from '../features/product/productSlice';
import { selectUsername, setSignOut } from '../features/user/userSlice';
import { auth } from '../Firebase';

function Header() {
    const history = useHistory()
    const dispatch = useDispatch()
    const username = useSelector(selectUsername)
    const cartItem = useSelector(selectCartItem)
    let totalQty = 0

    cartItem.forEach(item => {
        totalQty += item.quantity
    })
    const signOut = () => {
        auth.signOut()
            .then(res => {
                localStorage.removeItem('user');
                dispatch(setSignOut());
                history.push("/login");
            })

    }



    return (
        <Nav>
            <Link to="/">
                <Logo >
                    <img src="https://i.imgur.com/7I9Was5.png" />
                </Logo>
            </Link>
            <DeliverAdresse>
                <Marker>
                    <RoomOutlinedIcon />
                </Marker>
                <Adresse>
                    <AdresseOptionOne>Deliver to</AdresseOptionOne>
                    <AdresseOptionTwo>Tunisia</AdresseOptionTwo>
                </Adresse>

            </DeliverAdresse>
            <Search>
                <SearchInput>

                </SearchInput>
                <SearchBtn>
                    <SearchIc />
                </SearchBtn>

            </Search>
            <Reception>
                <Adresse>
                    <AdresseOptionOne>Hello, {username}</AdresseOptionOne>
                    <AdresseOptionTwo onClick={signOut}>Account & Lists {username && "| Sign out"}</AdresseOptionTwo>
                </Adresse>
            </Reception>
            <Order>
                <Adresse>
                    <AdresseOptionOne>Returns</AdresseOptionOne>
                    <AdresseOptionTwo>&Orders</AdresseOptionTwo>
                </Adresse>
            </Order>

            <Cart>
                <Link to="/cart">
                    <CartIcon>
                        <CartIc />
                    </CartIcon>
                    <CartItem>
                        {totalQty}
                    </CartItem>
                </Link>
            </Cart>


        </Nav>
    )
}

export default Header
const Nav = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:65px;
background-color:#00061a;
`
const Logo = styled.div`
display:flex;
align-items:center;
cursor:pointer;
padding-left:20px;
padding-right:15px;
img{
width:100px;
padding:10px 0;
text-align:center;
}
// &:hover{
//     border:1px solid white;
//     border-radius:4px;
//     padding:4px 10px;
//     margin:0 20px;
// }
`
const Adresse = styled.div`


`
const AdresseOptionOne = styled.div`
font-size:12px;
color:#a6a6a6;
`
const AdresseOptionTwo = styled.div`
font-weight:30px;

`
const DeliverAdresse = styled.div`
display:flex;
cursor:pointer;
padding:10px 10px;
// &:hover{
//     border:1px solid white;
//     border-radius:4px;
// }
`
const Marker = styled.div`
display:flex;
align-items:flex-end;
`
const Search = styled.div`
display:flex;
align-items:center;
border-radius:5px;
overflow:hidden;
flex-grow:1;
:focus-within{
    box-shadow:0 0 0 3px #F90;
}


`
const SearchInput = styled.input`
height:30px;
border:none;
flex-grow:1;
:focus{
    
    outline:none;
}
`
const SearchBtn = styled.div`
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
background:orange;
height:32px;
width:40px;
&:hover{
    background:#ffb84d;
}
`
const SearchIc = styled(SearchIcon)`
color:#000;
`
const Reception = styled(DeliverAdresse)`
`
const Order = styled(DeliverAdresse)`
`
const Cart = styled.div`
display:flex;
cursor:pointer;
padding:10px 10px;
a{   display:flex;
    text-decoration:none;
    color:white;
}
// &:hover{
//     border:1px solid white;
//     border-radius:4px;
// }
`
const CartIcon = styled.div`
`
const CartIc = styled(AddShoppingCartOutlinedIcon)``
const CartItem = styled.div`
color:orange;
`