import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () =>{
  return (
    <>
    <div className="header">
      <NavLink className="headerLogo">
        gamelibrary
      </NavLink>
      <div className="headerNavbar">
        <div className="headerNavbarDropdown">
          <div className="headerNavbarBtn">
            pc games
          </div>
          <ul className="headerNavbarList">
            <li><NavLink>MMORPG</NavLink></li>
            <li><NavLink>Shooter</NavLink></li>
            <li><NavLink>MOBA</NavLink></li>
            <li><NavLink>Anime</NavLink></li>
            <li><NavLink>Battle Royale</NavLink></li>
            <li><NavLink>Strategy</NavLink></li>
            <li><NavLink>Fantasy</NavLink></li>
            <li><NavLink>Sci-Fi</NavLink></li>
            <li><NavLink>Card Games</NavLink></li>
            <li><NavLink>Racing</NavLink></li>
            <li><NavLink>Fighting</NavLink></li>
            <li><NavLink>Social</NavLink></li>
            <li><NavLink>Sports</NavLink></li>
            <li><NavLink>All Game</NavLink></li>
          </ul>
        </div>
        <div className="headerNavbarDropdown">
          <div className="headerNavbarBtn">
            browser games
          </div>
        </div>
        <NavLink to={"allgame"} className="headerNavbarBtn">
          All Game
        </NavLink>
        <NavLink className="headerNavbarBtn">
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

