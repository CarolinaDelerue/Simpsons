import "./QuoteCard.css";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import { useState } from "react";

function App() {
  const [simpsonsCard, setSimpsonsCard] = useState({});

  const getSimpsons = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => {
        setSimpsonsCard(response.data[0]);
      });
  };

  return (
    <div>
      <QuoteCard
        character={simpsonsCard.character}
        quote={simpsonsCard.quote}
        image={simpsonsCard.image}
      />
      <button type="button" onClick={getSimpsons}>
        Get Simpsons
      </button>
    </div>
  );
}

export default App;
