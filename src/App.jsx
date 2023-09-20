import { useState, useEffect } from 'react';
import axios from 'axios';
import "./assets/App.css"

const App = () => {
  const [bootles, setBootles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then((response) => setBootles(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredBootles = bootles.filter((bootle) =>
    bootle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
      className='search'
        type="text"
        placeholder="Search for a bootle..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="beer-list">
        {filteredBootles.map((bootle) => (
          <div key={bootle.id} className="beer-card">
            <img src={bootle.image_url} alt={bootle.name} />
            <h3>{bootle.name}</h3>
            <p>{bootle.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;