import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


const SearchBar = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

  return (
    <div id="searchbar">
        <Dropdown className='dropdown'>
            <Dropdown.Toggle variant='success' id="sort-articles">Sort Articles</Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu'>
                <Dropdown.Item href="#/action-1">Sort Desc</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Sort Asc</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Sort 'A-Z'</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Sort 'z-A'</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default SearchBar;
