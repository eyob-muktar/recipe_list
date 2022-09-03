import React, { useState } from "react";
import './SearchBar.css'

type SearchBarProps = { handleSearch: Function}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const [focused, setFocused] = useState(false);
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
    handleSearch(e)
  }

  return (
	<div>
	  <label className={focused ? "search active": "search"} htmlFor="search_input">
        <input
          id="search_input"
          type="text"
          value={input}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
		</label>
		<p>What are you looking for?</p>
	</div>
  )
}

export default SearchBar;