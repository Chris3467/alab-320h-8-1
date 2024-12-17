// services/sw-api.js

// Define the API URL endpoint
const API_URL = "https://swapi.py4e.com/api/starships/"; // Ensure this URL ends with a slash

// Function to fetch all starships
export async function getAllStarships() {
  try {
    const response = await fetch(API_URL); // Make the fetch request to the API
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // If the request fails, throw an error
    }
    const data = await response.json(); // Parse the JSON response
    return data.results; // Return the results (array of starships)
  } catch (error) {
    console.error("Error fetching starships:", error); // Log any errors
    return []; // Return an empty array in case of an error
  }
}
