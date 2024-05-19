import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import ImageList from './components/ImageList'
import logo from './Pixabay-logo.svg'
import './styles/main.css'
import Pagenation from './components/Pagenation'

const App = () => {
  let term
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  const onSearchSubmit = async (term, page) => {
    try {
      const params = {
        key: process.env.REACT_APP_PIXABAY_APIKEY,
        q: term,
        page: page,
        per_page: 30,
      }
      const res = await axios.get('https://pixabay.com/api/', { params })
      setImages(res.data.hits)
      if (res.data.total === 0) {
        alert('No hits found')
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // const handleNext = async () => {
  //   setPage(page + 1)
  //   await onSearchSubmit(term, page)
  // }

  // const handlePrev = async () => {
  //   if (page > 1) {
  //     setPage(page - 1)
  //     await onSearchSubmit(term, page)
  //   } else {
  //     return
  //   }
  // }

  return (
    <div className='ui container' style={{
      marginTop: '20px'
    }}>
      <img src={logo} alt="pixabay logo" className='pixabay-logo' />
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
      {/* <Pagenation handleNext={handleNext} handlePrev={handlePrev} /> */}
    </div >
  )
}

export default App