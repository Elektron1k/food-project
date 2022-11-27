import { useState } from 'react';

function Search({ cb }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
    setValue('');
  };

  return (
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-outline-secondary" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
export default Search;
