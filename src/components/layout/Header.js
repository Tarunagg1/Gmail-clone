import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Header() {
    return (
        <Wrapper>
            <LogoWraper>
                <Menu>
                    <MenuIcon />
                </Menu>
                <Logo>
                    <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png' />
                </Logo>
            </LogoWraper>

            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIconWrapper />
                        <input type="text" placeholder="Search Items...."/>
                    <ExpandMoreIcon />
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <HelpOutlineIcon />
                <SettingsIcon />
                <AppsIcon />
                <AccountCircleIcon />
            </IconsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 170px;
    border-bottom: 1px solid lightgray;
    height: 70px;
    align-items: center;
`
const SearchIconWrapper = styled(SearchIcon)` 
    color: #5f6368;
`    
const LogoWraper = styled.div `
    height:45px;
    display:grid;
    grid-template-columns:25% auto;
`;
const Logo = styled.div `
        display: flex;
        height: 45px;
`;

const Menu = styled.div`
     display:grid;
     place-items:center;
`;
const SearchWrapper = styled.div`

`;
const SearchBarWrapper =styled.div `
    background-color: #f1f3f4;
    width: 100%;
    display: grid;
    grid-template-columns: 10% auto 7%;
    max-width: 750px;
    place-items:center;
    height:45px;
    border-radius:6px;
    
    input{
        width: 100%;
        height: 30px;
        border: none;
        background: none;
        font-size: 18px;

        :focus{
            outline:none;
        }
    }
`;
const IconsWrapper = styled.div`
    margin-left:8px;
    display: grid;
    grid-template-columns: repeat(4,auto);
    .MuiSvgIcon-root{
        color: #5f6368;
    }
`;
