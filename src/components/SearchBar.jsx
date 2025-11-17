import { useState } from 'react'
import PropTypes from 'prop-types'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Szukaj postaci po imieniu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Szukaj</button>
    </form>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar
