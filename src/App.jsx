import React, { useState, useEffect } from "react";
import './card.css'
function App() {
  const [NewsData, SetNewsData] = useState([]);
  const GetNews = async () => {
      const response = await fetch( "https://newsapi.org/v2/top-headlines?country=us&apiKey=c11df38dfbf44dc6ac5356c9fe99eef3");
      const result = await response.json();
      SetNewsData(result.articles);
  };
  useEffect(() => {
    GetNews();
  }, []);

  return (
    <div>
      <h1>Api Data</h1>
      <ul>
        <div className="flex items-center justify-center h-screen">
          <div className="border border rounded-lg p-4 max-w-[300px] shadow-lg transition-transform transition-shadow duration-300 m-5">
            {NewsData.map((article, index) => (
              <li key={index}>
          {article.urlToImage && (<img src={article.urlToImage}  /> )}
               <h2>{article.title}</h2>
            <p> {article.author}</p>
             <p>{article.description}</p>
             <p>{article.publishedAt}</p>
             <p>{article.url}</p>
             <p>{  article.content}</p>
            <a className="btn" href= {article.url} target="_blank" >Read more  </a>
          </li>
          
        ))}
        </div>
        </div>
      </ul>
    </div>
  );
}

export default App;
