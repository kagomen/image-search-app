import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')
  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  }
  return (
    <div className='ui segment'>
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input type="text" name="search" value={term} onChange={(e) => { setTerm(e.target.value) }} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar