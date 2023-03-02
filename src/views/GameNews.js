import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../components/GameCard/NewsCard";
import "./GameNews.css"

const GameNews = () =>{
    const [gameNews, setGameNews] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/latestnews',
        headers: {
          'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
          'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
      };
    
    useEffect(() => {
        axios(options).then(response => {
            setGameNews(response.data)
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }, []);

    // <div className="testDeneme">
    // {gameNews.length>0 && (<td dangerouslySetInnerHTML={{__html: gameNews[12].article_content}} />)}
    // </div>

    return (
    <>
    <div className="newsPage">
      {gameNews.length>0 && (gameNews.map((item)=>{
        return(
          <div className="newsContainer">
            <NewsCard src={item.thumbnail} newsTitle={item.title} short={item.short_description}/>
          </div>
        )
      }))}
    </div>
    
    </>
    
  );
}

export default GameNews;

