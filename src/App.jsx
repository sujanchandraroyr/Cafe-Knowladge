
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookMark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
     <div ><Header></Header></div>
     <div className='md:flex justify-between container mx-auto'>
     <Blogs handleBookMark = {handleBookMark}></Blogs>
     <Bookmarks bookmarks = {bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
