import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function ImageList({ images }) {
  console.log(images);
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 2, 630: 3, 991: 4 }}
    >
      <Masonry className='image-list'>
        {images.map((image) => (
          <a key={image.id} href={image.pageURL} target='_blank' rel='noopener noreferrer' className='ui medium image'>
            <img src={image.webformatURL} alt={image.tags} />
          </a>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default ImageList