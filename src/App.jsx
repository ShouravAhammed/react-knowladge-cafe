
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time =>{
    const totalTime = readingTime + time
    setReadingTime(totalTime)
    
  }

  return (
    <>
      <Header></Header>
      <main className='grid md:grid-cols-3 grid-cols-1 gap-6 container md:px-10 px-4 py-4 mx-auto'>
      <Blogs handleBookmarks={handleBookmarks}
      handleMarkAsRead={handleMarkAsRead}>
      </Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </main>
    </>
  )
}

export default App
