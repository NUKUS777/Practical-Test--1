import styled from 'styled-components';

import { Row, Col } from 'antd';

import React,{ useState } from "react";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import BookList from './bookList';
function Header() {
  const [IsModal, setIsModal] = useState(false);
  const HandleCreate = function() {
    setIsModal(!IsModal)
  }
  const Fun = function(){

  }
  const [showMessage, setShowMessage] = useState(false);

  const handleShow = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMessage(true);
    setIsModal(!IsModal)

    
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    e.currentTarget.reset();
  };

  console.log(IsModal);
  return (
    <Bar>
        <div className= { IsModal?'modalClose form'   :'modal form'}>
        <Form onSubmit={handleShow}>
        <Label htmlFor="title">Title</Label>
        <Input required placeholder='Enter your title' type="text" id="title" name="title" />
        <Label htmlFor="author">Author</Label>
        <Input placeholder='Enter your author' type="text" id="author" name="author" />
        <Label htmlFor="cover"> Cover</Label>
        <Input placeholder='Enter your cover' type="text" id="cover" name="cover" />
        <Label htmlFor="date">Published year    </Label>
        <Input placeholder='Enter your published date' type="text" id="date" name="date" />
        <Label htmlFor="pages"> Pages</Label>
        <Input placeholder='Enter your pages' type="text" id="pages" name="pages" />
        <button className='close' onClick={HandleCreate}>Close</button>
        <button className='submit'>Submit</button>
        </Form> 
      </div>
      <Container>  
        <Top>
           <div className='left'>
               <h1>You’ve got <span>7 book</span></h1>
               <h3>Your task today</h3>
           </div>
           <div className='right'>
              <input placeholder='enter your name'/>
              <button onClick={HandleCreate}>+ Create a book</button>
           </div>
       </Top>
      <BookList />    
      </Container>       
    </Bar>
  )
}
const Container = styled.div`
  margin:0 auto;
  padding: 0 20px;
  max-width: 1240px;
`
const Top = styled.div`
    display: flex;
    position: relative;
    margin:50px 0 100px 0;
    h1 {
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0px;
        text-align: left;
    }
    h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;

    }
    .left {
       position: absolute;
       left: 0;
       span {
        color: #6200EE;
;
       }
    }
    .right {
        position: absolute;
        right: 0;
        input {
            width: 320px;
            height: 47px;
            padding: 14px 16px 14px 16px;
            border-radius: 6px;
            border: 1px;
            gap: 16px;
            font-size:19px;
            outline: none;
        }
        button {
            width: 181px;
            height: 40px;
            padding: 10px 24px 10px 24px;
            border-radius: 4px;
            font-size:17px;
            font-weight:500;
            margin-left: 5px;
            gap: 12px;
            color: #fefefe;
            background: #6200EE;
            cursor: pointer;
            transition: 0.6s;
            border: 2px solid transparent;

        }
        button:hover {
            background: white;
            color: #6200EE;
            border: 2px solid #6200EE;
            transform: scale(1.02);

        }
    }
`
const Card = styled.div`
    max-width: 390.33px;
    min-height: 209px;
    padding: 32px;
    border-radius: 12px;
    border: 1px;
    gap: 16px;
    background: #d6a5a5;
    margin:30px;
    font-family: Montserrat;

    h2 {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
    }
    p {
        font-family: Mulish;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: left;
        margin:20px 0;
    }
    h3 {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
    }
    span {
        display: inline-block;
        margin-left: 10px;
        padding:3px 7px;
        border-radius:9px;
        background: green;
        margin-right:auto;
    }
`
//Bar
const Bar = styled.div`
  position: relative;
  .modal {
    display: none;
  }
  .modalClose {
    position:absolute;
    z-index: 4;
  }
  .form {
    height: 1000px;
    width: 100%;
    background: #11111124;
  }

`


//Modal
const Form = styled.form`
  margin-top:25px;
  align-items: flex-center;
  justify-content: start;
  text-align:left;
  width:430px;
  background: #fff;
  padding: 24px 28px;
  border-radius: 10px;
  .close {
    width: 181px;
    height: 40px;
    padding: 10px 24px 10px 24px;
    border-radius: 4px;
    font-size:17px;
    font-weight:500;
    margin-left: 5px;
    gap: 12px;
    cursor: pointer;
    transition: 0.6s;
    color: #fefefe;
    background: #ee9300;
    border: 2px solid transparent;

  }
  .close:hover {
    transform: scale(1.02);
    background: white;
    color: #ee9300;
    border: 2px solid #ee9300;

   }
  .submit {
    width: 181px;
    height: 40px;
    padding: 10px 24px 10px 24px;
    border-radius: 4px;
    font-size:17px;
    font-weight:500;
    margin-left: 5px;
    gap: 12px;
    color: #fefefe;
    background: #6200EE;
    cursor: pointer;
    transition: 0.6s;
    border: 2px solid transparent;
  }
  .submit:hover {
    background: white;
    color: #6200EE;
    border: 2px solid #6200EE;
    transform: scale(1.02);

   }
`;

const Label = styled.label`
  display: block;
    font-family: Mulish;
    font-size: 16px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0px;
    margin-bottom: 8px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #adabab;
    background: #e6e5e5;
    border-radius: 4px;
    margin-bottom: 29px;
    font-size:17px;
    width:100%;
    height: 47px;
    padding: 14px 16px 14px 16px;
    border-radius: 6px;
    border: 1px;
    gap: 16px;
    outline: none;

`;
//Done

const Done = styled.div`
  background: #52C41A;
  position: absolute;
  right: 40px;
  bottom: 50px;
  min-width: 180px;
  height: 45px;
  border-radius: 15px;
  padding: 7px;
  display: flex;
  .icon {
    color: white;
  }
  span {
    font-size:17px;
    color: white;
    margin-left:10px;
  }
    
`
export default Header
