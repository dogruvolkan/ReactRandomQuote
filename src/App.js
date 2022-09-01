import { useState, useEffect } from "react";
import "./style.css";
import { FaQuoteLeft ,FaQuoteRight } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((cevap) => cevap.json())
      .then((veri) => {
        let randNum = Math.floor(Math.random() * veri.length);
        setQuote(veri[randNum]);
      });
  };

  useEffect(() =>{
    getQuote()
  },[])

  return (
    <>
      <div class="quote">
        <div className="quote-container">
          <div className="quote-text"> <FaQuoteLeft /> {quote.text} <FaQuoteRight />
          </div>
          <div className="quote-author">
            <AiOutlineMinus className="line"/> <b>{quote.author}</b> 
          </div>
          <button onClick={getQuote}>Get Quote</button>
        </div>
      </div>
    </>
  );
}

export default App;
