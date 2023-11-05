import React from "react";

export const SearchBox = (props) => {
  return (
    <div>
      <input
        value={props.searchVal}
        onChange={(e) => props.setSearchVal(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};
