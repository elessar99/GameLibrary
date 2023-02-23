import "./Header.css"
const Header = () =>{
  return (
    <>
    <div className="header">
      <div className="headerLogo">
        gamelibrary
      </div>
      <div className="headerNavbar">
        <div className="headerNavbarBtn">
          pc games
        </div>
        <div className="headerNavbarBtn">
          browser games
        </div>
        <div className="headerNavbarBtn">
          all game
        </div>
        <div className="headerNavbarBtn">
          game news
        </div>
        <div className="headerNavbarBtn">
          game search
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Header;

