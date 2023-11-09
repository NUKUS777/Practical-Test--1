import styled from "styled-components";


import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Logo from '../../assets/images/logo.png'


function Navbar() {
  return (
    <div className="navbar">
        <Container>
           <Nav> 
              <div className="left">
                <div>
                   <img className="logo" src={Logo} alt="Logo"/>
                </div>
                <SearchInput>
                    <SearchIcon className="svg"/>
                    <input placeholder="Search for any training you want" />
                    <CancelIcon className="cancel" />  
                </SearchInput>
              </div>
              <div className="right">
                <NotificationsNoneIcon className="icon" />
                <AccountCircleIcon className="icon"  />
              </div>
           </Nav>
        </Container>
    </div>
  )
}
const Container = styled.div`
  margin:0 auto;
  padding: 0 20px;
  max-width: 1240px;
`
const Nav = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 30px 10px;
    .left {
        height: 48px;
        gap: 24px;
        left: 0;
        position: absolute;
        display:flex;
    }
    .logo {
    }
    .right {
        height: 32px;
        gap: 24px;
        right: 0;
        position: absolute;
        .icon {
            width: 29px;
            height:29px;
            margin:0 5px;
        }

    }
`
const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
  height: 24px;
  width: 400px;
    height: 48px;
    padding: 0px 26px;
    border-radius: 6px;
    gap: 12px;
   
 &:hover {
  background: #FEFEFE;
  .svg {
    color:black;
  }
  .cancel {
    display: block;
  }
 }
  input {
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
    color: black;
   font-size:18px;
   ::placeholder {
      color: #888;
    }
  }
  .svg {
    color:white;
  }
  .cancel {
    display: none;
  }
`;


export default Navbar