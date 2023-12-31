import {useState  } from 'react'
import Navbar from '../components/templates/navbar';
import Header from '../components/templates/header';
import BookList from '../components/templates/bookList';
import Sign from './data'
function Views() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [fetch,setFetch] = useState<boolean>(true)
  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} searchTerm = {searchTerm}/>
      <Header setFetch={setFetch} fetch={fetch}/>
      <Sign />
      {/* <BookList searchTerm={searchTerm}/> */}
    </div>
  )
}

export default Views


