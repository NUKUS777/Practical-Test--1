import  { useState, useEffect } from 'react';


import { Row, Col } from 'antd';

import styled from 'styled-components';
interface Book {
  title: string;
  author_last_names: string;
  copyright: number;
  page_count?: number;
  price?: string;
}

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
    return (
      <Col  sm={24} md={12} lg={8} xl={8}>
         <Card>
           <h2>{book.title}</h2>
           <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Alias aliquam modi q
              uidem ut totam? Tempore ipsa officiis
               eaque voluptate at.</p>
           <h3>{book.author_last_names}   {book.copyright}</h3>
           <span>{book.page_count} pages</span>
          </Card> 
      </Col>
    );
  }
  

  function BookList() {
    const [books, setBooks] = useState<Book[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=10&page=1';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'b8b9b9a0a8msh04a1f382cba8d9fp1e54eejsn44237dc189f9',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          setBooks(data.results);
          console.log(data.results);
        } catch (error) {
          console.error(error);
        }
      };
  
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  
      const fetchWithDelay = async () => {
        await delay(500);
        fetchData();
      };
  
      fetchWithDelay();
    }, []);
  
    return (
      <Row>
        <h2>Book List</h2>
        {books && books.length > 0 ? (
          books.map((book, index) => <BookCard key={index} book={book} />)
        ) : (
          <p>No books available</p>
        )}
      </Row>
    );
  }
  
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

export default BookList;