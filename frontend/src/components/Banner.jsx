import React, { useState } from "react";

export default function Banner({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
   
    onSearch(search);
  };

  return (
    <div className='text-center text-black pb-5 pt-5 h-50 bg-dark-subtle' >
      <h1 className="pb-2 fs-1 fw-bold">How can we help?</h1>
      <div className="input-group container w-50 ">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          →
        </button>
      </div>
    </div>
  );
}
