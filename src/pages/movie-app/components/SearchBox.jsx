import React from "react";

export const SearchBox = (props) => {
  return (
    <div className="search-box">
      <input
        value={props.searchVal}
        onChange={(e) => props.setSearchVal(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};
