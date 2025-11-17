function CharacterCard({ character }) {
  const getStatusClass = (status) => {
    return status.toLowerCase()
  }

  const translateStatus = (status) => {
    const translations = {
      'Alive': 'Żywy',
      'Dead': 'Martwy',
      'unknown': 'Nieznany'
    }
    return translations[status] || status
  }

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="character-info">
        <h2>{character.name}</h2>
        <p className={`status ${getStatusClass(character.status)}`}>
          {translateStatus(character.status)}
        </p>
        <p><strong>Gatunek:</strong> {character.species}</p>
        <p><strong>Pochodzenie:</strong> {character.origin.name}</p>
        <p><strong>Lokalizacja:</strong> {character.location.name}</p>
      </div>
    </div>
  )
}

export default CharacterCard
