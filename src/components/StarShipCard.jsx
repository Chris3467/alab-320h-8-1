// components/StarshipCard.js
import React from "react"; // Import React

function StarshipCard({ starship }) {
  // This component receives the 'starship' prop and displays its name
  return (
    <div className="starship-card">
      <h3>{starship.name}</h3> {/* Display the name of the starship */}
    </div>
  );
}

export default StarshipCard; // Export the component for use in other files
