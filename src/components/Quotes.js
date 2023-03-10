import React ,{useState,useEffect} from 'react';
import twitterIcon from "../twitter.svg";

const Quotes= () => {
  const [quote,setQuote]=useState('');
  const [author,setAuthor]=useState('');

  useEffect(() => {
    getQuote()
  },[]);

  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randonNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randonNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };
  const handleClick = () =>{
    getQuote();
  }
  return (
    <div id="quote-box">
      <div id="text">
        <p>{quote}</p>
      </div>
        <div id="author">
          <p>-{author}</p>
        </div>
        <div id="buttons">
          <a href='https://twitter.com/intent/tweet' id="tweet-quote">
            <span><img src={twitterIcon}></img></span>
          </a>
          <button onClick={handleClick} id="new-quote">NewQuote</button>

        </div>
    </div>
  )
}
export default Quotes;
