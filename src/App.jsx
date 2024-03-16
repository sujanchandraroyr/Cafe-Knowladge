
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookMark = (blog) => {
    console.log('bookmark adding soon')
  }

  return (
    <>
     <div ><Header></Header></div>
     <div className='md:flex justify-between container mx-auto'>
     <Blogs handleBookMark = {handleBookMark}></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
