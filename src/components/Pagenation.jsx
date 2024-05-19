import React from 'react'

const Pagenation = ({ page, setPage }) => {
  const backPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  const nextPage = () => {
    setPage(page + 1)
  }
  return (
    <div className='pagenation'>
      <button class="ui button" onClick={backPage}>Prev</button>
      <span>{page}</span>
      <button class="ui button" onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagenation