import { useState, useEffect, useCallback } from 'react'
import CharacterCard from './components/CharacterCard'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import Pagination from './components/Pagination'

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [info, setInfo] = useState({})
  const [searchName, setSearchName] = useState('')
  const [filters, setFilters] = useState({
    status: '',
    species: '',
    gender: ''
  })

  const fetchCharacters = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        ...(searchName && { name: searchName }),
        ...(filters.status && { status: filters.status }),
        ...(filters.species && { species: filters.species }),
        ...(filters.gender && { gender: filters.gender })
      })

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?${params}`
      )
      
      if (!response.ok) {
        throw new Error('Nie znaleziono postaci')
      }
      
      const data = await response.json()
      setCharacters(data.results)
      setInfo(data.info)
    } catch (err) {
      setError(err.message)
      setCharacters([])
    } finally {
      setLoading(false)
    }
  }, [page, searchName, filters])

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters])

  const handleSearch = (name) => {
    setSearchName(name)
    setPage(1)
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setPage(1)
  }

  return (
    <div className="app">
      <header>
        <h1>🛸 RICK AND MORTY 🌌</h1>
        <p className="subtitle">Kosmiczna Baza Danych Postaci</p>
      </header>

      <SearchBar onSearch={handleSearch} />
      <Filters filters={filters} onFilterChange={handleFilterChange} />

      {loading && <div className="loading">Ładowanie postaci z wymiaru C-137</div>}
      {error && <div className="error">❌ {error}</div>}

      {!loading && !error && characters.length > 0 && (
        <>
          <div className="characters-grid">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <Pagination
            currentPage={page}
            totalPages={info.pages}
            onPageChange={setPage}
          />
        </>
      )}

      <footer>
        <p>
          Dane z <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
            Rick and Morty API
          </a>
        </p>
        <p>© 2025 Kosmiczna Przygoda</p>
      </footer>
    </div>
  )
}

export default App
