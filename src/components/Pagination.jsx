function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Poprzednia
      </button>
      <span>
        Strona {currentPage} z {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Następna →
      </button>
    </div>
  )
}

export default Pagination
