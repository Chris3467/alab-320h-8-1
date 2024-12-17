// App.js
import React, { useEffect, useState } from "react"; // Import React and hooks
import { getAllStarships } from "./services/swapi"; // Import the function to get starship data
import StarshipCard from "./components/StarshipCard"; // Import the StarshipCard component
import "./App.css"; // Import the styles

function App() {
  const [starships, setStarships] = useState([]); // Initialize state to hold the starships array

  useEffect(() => {
    // useEffect hook to fetch starships when the component mounts
    const fetchStarships = async () => {
      const starshipData = await getAllStarships(); // Call the API service to fetch data
      setStarships(starshipData); // Update state with the fetched data
    };
    fetchStarships(); // Call the function to fetch data
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div>
      <h1>STAR WARS STARSHIPS</h1> {/* Title at the top of the page */}
      <div className="app-container">
        {/* Check if starships data is available and map over it */}
        {starships.length > 0 ? (
          starships.map((starship, index) => (
            <StarshipCard key={index} starship={starship} /> // Create a StarshipCard for each starship
          ))
        ) : (
          <p>Loading starships...</p> // Display a loading message until data is fetched
        )}
      </div>
    </div>
  );
}

export default App; // Export the component for use in other files
