import React, { useEffect, useState } from "react";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const endpoint = "https://api.tvmaze.com/search/shows?q=all";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShows(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      {shows.map((data) => {
        const { id, name, summary } = data?.show;
        const imageSrc = data?.show?.image?.medium;
        const genres = data?.show?.genres[0];
        return (
          <div key={id} style={{padding:"10px", border:"1px solid black", boxShadow:"1px 1px 10px black"}}>
            {imageSrc && <img src={imageSrc} alt={name} />}
            <h2>Name: {name}</h2>
            <h2>Genres: {genres}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
