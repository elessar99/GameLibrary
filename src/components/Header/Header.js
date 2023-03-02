import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () =>{
  return (
    <>
    <div className="header">
      <NavLink to={"/"} className="headerLogo">
        gamelibrary
      </NavLink>
      <div className="headerNavbar">
        <div id="pcDropdown" className="headerNavbarDropdown">
          <div className="headerNavbarBtn">
            pc games
          </div>
          <div id="pcDropdownMenu" className="headerNavbarList">
            <NavLink to={"/pc/mmorpg"} className="headerNavbarListBtn">MMORPG</NavLink>
            <NavLink to={"/pc/shooter"} className="headerNavbarListBtn">Shooter</NavLink>
            <NavLink to={"/pc/moba"} className="headerNavbarListBtn">MOBA</NavLink>
            <NavLink to={"/pc/anime"} className="headerNavbarListBtn">Anime</NavLink>
            <NavLink to={"/pc/battle-royale"} className="headerNavbarListBtn">Battle Royale</NavLink>
            <NavLink to={"/pc/strategy"} className="headerNavbarListBtn">Strategy</NavLink>
            <NavLink to={"/pc/fantasy"} className="headerNavbarListBtn">Fantasy</NavLink>
            <NavLink to={"/pc/sci-fi"} className="headerNavbarListBtn">Sci-Fi</NavLink>
            <NavLink to={"/pc/card"} className="headerNavbarListBtn">Card Games</NavLink>
            <NavLink to={"/pc/racing"} className="headerNavbarListBtn">Racing</NavLink>
            <NavLink to={"/pc/fighting"} className="headerNavbarListBtn">Fighting</NavLink>
            <NavLink to={"/pc/social"} className="headerNavbarListBtn">Social</NavLink>
            <NavLink to={"/pc/sports"} className="headerNavbarListBtn">Sports</NavLink>
            <NavLink to={"/pc/all"} className="headerNavbarListBtn">All Pc Game</NavLink>
          </div>
        </div>
        <div id="browserDropdown" className="headerNavbarDropdown">
          <div className="headerNavbarBtn">
            browser games
          </div>
          <div id="browserDropdownMenu" className="headerNavbarList">
            <NavLink to={"/browser/mmorpg"} className="headerNavbarListBtn">Browser MMORPG</NavLink>
            <NavLink to={"/browser/shooter"} className="headerNavbarListBtn">Browser Shooter</NavLink>
            <NavLink to={"/browser/anime"} className="headerNavbarListBtn">Browser Anime</NavLink>
            <NavLink to={"/browser/strategy"} className="headerNavbarListBtn">Browser Strategy</NavLink>
            <NavLink to={"/browser/fantasy"} className="headerNavbarListBtn">Browser Fantasy</NavLink>
            <NavLink to={"/browser/sci-fi"} className="headerNavbarListBtn">Browser Sci-Fi</NavLink>
            <NavLink to={"/browser/racing"} className="headerNavbarListBtn">Browser Racing</NavLink>
            <NavLink to={"/browser/social"} className="headerNavbarListBtn">Browser Social</NavLink>
            <NavLink to={"/browser/sports"} className="headerNavbarListBtn">Browser Sports</NavLink>
            <NavLink to={"/browser/all"} className="headerNavbarListBtn">All Browser Game</NavLink>
          </div>
        </div>
        <NavLink to={"allgame"} className="headerNavbarBtn">
          All Game
        </NavLink>
        <NavLink to={"gamenews"} className="headerNavbarBtn">
          game news
        </NavLink>
        <NavLink className="headerNavbarBtn">
          game search
        </NavLink>
      </div>
    </div>
    </>
    
  );
}

export default Header;

