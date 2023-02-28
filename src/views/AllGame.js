import axios from "axios";
import { useEffect, useState } from "react";
import Gamecard from "../components/GameCard/Gamecard";
import "./AllGame.css"

const AllGame = () =>{
    const [control, setControl] = useState(false);
    const [allgame, setAllgame] = useState([]);
    const [showgames, setShowgames] = useState([]);
    const [buttonClick, setButtonClick] = useState(false);
    const [adet, setAdet] = useState(13);
    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/games',
        headers: {
          'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
          'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
      };

    const listRefresh = () =>{
      console.log("başlattım");
      console.log("adet ",adet);
      let counter =0
      console.log(showgames);
      showgames.splice(0,showgames.length)
      console.log(showgames);
      allgame.map((item)=>{
        counter++ 
        if (counter<adet) {
          showgames.push(item)
        }
      })
      console.log(showgames);
      console.log("bitirdim")
    }
    useEffect(() => {
        axios(options).then(response => {
            let counter =0
            setAllgame(response.data)
            response.data.map((item)=>{
              counter++
              if (counter<13) {
                showgames.push(item)
              }
            })
            setControl(true)
          }).catch(function (error) {
            console.error(error);
          });
    }, []);

    useEffect(() => {
      const handleScroll = (e)=>{
        const scrollHeight = e.target.documentElement.scrollHeight
        const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
        if (currentHeight+1 >= scrollHeight) {
          setAdet(adet+3)
          listRefresh()
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [adet]);
    
    return (
    <>
    <div className="allGamePage">
      {!control && (<div>
        loading...
      </div>)}
        {control && (<div className="gameList">
        {showgames.length>0 && (showgames.map((item)=>{
            return(
              <>
              <div>
                <Gamecard name={item.title} platform={item.platform} genre={item.genre} src={item.thumbnail} />
              </div>
              </>
            )
        }))}
      </div>)}
    </div>
    
    </>
    
  );
}

export default AllGame;

