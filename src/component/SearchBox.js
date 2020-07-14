import React from "react";

const SearchBox = ({ searchfield,searchChange }) => {
	return (
		<div className="pa2">
	    <input 
		className="pa3 be b--green bg-lightest-blue" 
		type="search" 
		placeholder="Search Box" 
		onChange={searchChange}
		/>
		</div>
		);
}

export default SearchBox;