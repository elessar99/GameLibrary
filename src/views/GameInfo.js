import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../store/reducers/gameInfoActions";
import "./GameInfo.css"
const GameInfo = () =>{
    const game = {
        id: 452,
        title: "Call Of Duty: Warzone",
        thumbnail: "https://www.mmobomb.com/g/452/thumbnail.jpg",
        status: "Live",
        short_description: "One of the most popular FPSes in the world is now a free-to-play battle royale: Call of Duty: Warzone. Strive to become the last squad standing in Battle Royale mode, where 150 players loot and shoot their way through an ever-shrinking battlefield; or complete contracts and try to escape with the most cash in Plunder mode.",
        description: "<p style=\"text-align: justify;\">One of the most popular FPSes in the world is now a free-to-play battle royale: Call of Duty: Warzone. Strive to become the last squad standing in Battle Royale mode, where 150 players loot and shoot their way through an ever-shrinking battlefield; or complete contracts and try to escape with the most cash in Plunder mode. Money can also buy you weapons and perks from stations throughout the map, but if you're taken out, you'll lose everything you've accumulated!</p>\r\n<p style=\"text-align: justify;\">Another innovation in CoD: Warzone is the gulag. If you're gunned down during a Battle Royale match, you'll be sent to the gulag with a chance to win a 1v1 for the right to return to the battlefield. Also, progression is shared between Warzone and Call of Duty: Modern Warfare. If you don't own CoD:MW, you'll keep your progression from Warzone if you buy it later.</p>\r\n",
        game_url: "https://www.mmobomb.com/open/call-of-duty-warzone",
        genre: "Shooter",
        platform: "Windows",
        publisher: "Activision",
        developer: "Infinity Ward",
        release_date: "2020-03-10",
        profile_url: "https://www.mmobomb.com/call-of-duty-warzone",
        minimum_system_requirements: {
        os: "Windows 7 64-Bit (SP1) or Windows 10 64-Bit",
        processor: "Intel Core i3-4340 or AMD FX-6300",
        memory: "8GB RAM",
        graphics: "NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950",
        storage: "175GB HD space"
        },
        screenshots: [
        {
        id: 1124,
        image: "https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-1.jpg"
        },
        {
        id: 1125,
        image: "https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-2.jpg"
        },
        {
        id: 1126,
        image: "https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-3.jpg"
        },
        {
        id: 1127,
        image: "https://www.mmobomb.com/g/452/Call-of-Duty-Warzone-4.jpg"
        }
        ]
    }
    const infoState=useSelector(state=>state.gameInfo)
    const [gamex, setGame] = useState([]);
    const dispatch=useDispatch()
    const options = {
        method: 'GET',
        url: 'https://mmo-games.p.rapidapi.com/game',
        params: {id: infoState.id},
        headers: {
          'X-RapidAPI-Key': '30fa44aac7msha71c0e6a85a26abp10736fjsn78683a7be182',
          'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
      };
      
      axios(options).then(response => {
        setGame(response.data)
      }).catch(function (error) {
        console.error(error);
      });
        // <div className="testDeneme">
        // {gameNews.length>0 && (<td dangerouslySetInnerHTML={{__html: gameNews[12].article_content}} />)}
        // </div>
  return (
    <>
    {infoState.show&&(<div className="gameInfoBody" onClick={()=>{
        dispatch(setInfo(false,0))
    }}>
        <div className="gameInfoContainer">
            <div className="gameInfoTop">
                <div className="gameInfoAbout">
                    <div >
                        <h3 style={{margin:"1em 0.5em 0.5em"}}>{game.title}</h3>
                        <div style={{margin:"0.1em 1em"}}>
                            genre : {game.genre} 
                        </div>
                        <div style={{margin:"0.1em 1em"}}>
                            platform : {game.platform}
                        </div>
                        <div style={{margin:"0.1em 1em"}}>
                            publisher : {game.publisher} 
                        </div>
                        <div style={{margin:"0.1em 1em"}}>
                            developer : {game.developer}
                        </div>
                    </div>
                    <div className="gameInfoOS">
                        <h3 style={{margin:"1em 0.5em 0em"}}>Minimum System Requirements</h3>
                        <ul style={{listStyleType:"none",padding:"0 1em 0"}}>
                            <li>os : {game.minimum_system_requirements.os}</li>
                            <li>processor : {game.minimum_system_requirements.processor}</li>
                            <li>memory : {game.minimum_system_requirements.memory}</li>
                            <li>graphics : {game.minimum_system_requirements.graphics}</li>
                            <li>storage : {game.minimum_system_requirements.storage}</li>
                        </ul>
                    </div>
                </div>
                <div className="gameInfoScreenshots">
                    <img className="gameInfoScreenshot" src={game.screenshots[0].image}/>
                </div>
            </div>

            <div className="gameInfoDescription">
                <td dangerouslySetInnerHTML={{__html: game.description}} />
            </div>
        </div>
    </div>)}
    </>
    
  );
}

export default GameInfo;

