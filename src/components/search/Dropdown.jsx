import React from 'react'

const Dropdown = ( { sortmethod, setSortMethod }) => {
  return (
    <div className='sorting-dropdown'>
      <label htmlFor="sort">Sort by:</label>
      <select 
      name="sort" 
      id="sort"
      value={sortmethod}
      onChange={(e) => setSortMethod(e.target.value)}
      >
        <option value="none">None</option>
        <option value="titleAsc">Title (A-Z)</option>
        <option value="titleDesc">Title (Z-A)</option>
        <option value="votesDesc">Votes (High to Low)</option>
        <option value="votesAsc">Votes (Low to High)</option>
        <option value="CommentCountDesc">Comments (High to low )</option>
        <option value="CommentCountAsc">Comments (Low to High )</option>
        <option value="dateDesc">Date (Latest Articles)</option>
        <option value="dateAsc">Date (Oldest Articles)</option>
      </select>
    </div>
  )
}

export default Dropdown;

//dropdown component only