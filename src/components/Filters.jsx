import PropTypes from 'prop-types'

function Filters({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    onFilterChange({
      ...filters,
      [name]: value
    })
  }

  return (
    <div className="filters">
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">Wszystkie statusy</option>
        <option value="alive">Żywy</option>
        <option value="dead">Martwy</option>
        <option value="unknown">Nieznany</option>
      </select>

      <select
        name="species"
        value={filters.species}
        onChange={handleChange}
      >
        <option value="">Wszystkie gatunki</option>
        <option value="Human">Człowiek</option>
        <option value="Alien">Obcy</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Robot">Robot</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Animal">Zwierzę</option>
      </select>

      <select
        name="gender"
        value={filters.gender}
        onChange={handleChange}
      >
        <option value="">Wszystkie płcie</option>
        <option value="male">Mężczyzna</option>
        <option value="female">Kobieta</option>
        <option value="genderless">Bezpłciowy</option>
        <option value="unknown">Nieznana</option>
      </select>
    </div>
  )
}

Filters.propTypes = {
  filters: PropTypes.shape({
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired
}

export default Filters
