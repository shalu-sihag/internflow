function FilterBar({ filter, setFilter }) {
  return (
    <select
      className="filter-bar"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Applied">Applied</option>
      <option value="OA">OA</option>
      <option value="Interview">Interview</option>
      <option value="Rejected">Rejected</option>
      <option value="Selected">Selected</option>
    </select>
  );
}

export default FilterBar;