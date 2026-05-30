
function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search company or role..."
      className="search-bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;