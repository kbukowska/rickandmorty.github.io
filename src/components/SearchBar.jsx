import { useState } from 'react'

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

export default SearchBar
