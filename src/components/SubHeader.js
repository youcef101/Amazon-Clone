import React from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

function SubHeader() {
    return (
        <Nav>
            <Menu>
                <MenuIc>
                    <MenuIcon />
                </MenuIc>
                <Item>
                    <p>All</p>
                </Item>
            </Menu>
            <MenuItem>
                <a>Today's Deals</a>
                <a>Customer Service</a>
                <a>Gift Cards</a>
                <a>Registry</a>
                <a>Sell</a>

            </MenuItem>
            <Warn>
                <a>Amazon's response to COVID-19</a>
            </Warn>

        </Nav>
    )
}

export default SubHeader
const Nav = styled.div`
height:40px;
background:#000d1a;
display:flex;
align-item:center;

`
const Menu = styled.div`
display:flex;
align-items:center;
margin-left:20px;
cursor:pointer;


`
const MenuIc = styled.div`
display:flex;
align-items:center;
`
const MenuIcon = styled(MenuOutlinedIcon)`

`
const Item = styled.h3`

`
const MenuItem = styled.div`
display:flex;
align-items:center;
flex:1;
a{
    margin:0 10px;
    cursor:pointer;
}

`
const Warn = styled.div`
display:flex;
align-items:center;
margin:0 20px;
a{
    cursor:pointer;
}
`
