import React from "react";
import "./Search.css";

function Search({
  manageSearchInput=()=>{},
  showSearch=()=>{},
}) {
  return(
    <form className="form-inline">
    <input
      className="form-control"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onInput={manageSearchInput}
    />
    {}
    <button
      className="btn btn-outline-primary "
      type="submit"
      onClick={showSearch}
    >
      Search
    </button>
  </form>
  )
}

export default Search